// Connection between the two browsers of an online game.
// The game flows directly from one browser to the other (a WebRTC data channel): there is no game server. Only the first
// contact passes through the public PeerJS broker, under a short code (the invite link).
// While playing, the messages of one moment are sent together, twenty times a second (see flush).
//
// Debug: ?broker=host:port uses another PeerJS broker (one run on this computer for a test) in place of the public one.
import { Peer } from 'peerjs';

const PREFIX = 'lonehand-2-';
const BROKER = (() => { const b = new URLSearchParams(location.search).get('broker'); if (!b) return undefined; const [host, port] = b.split(':'); return { host, port: +port || 9000, path: '/', secure: false }; })();
/** Messages that only matter while fresh: when the connection lags behind, an older one is not worth sending. */
const LOSSY = new Set(['s', 'en']);
const WAIT = 15000;            // how long to wait for the other browser before giving up

/** The host is player 0, the one who joins player 1. `peers` holds the other player's number and name. */
export class Link {
  constructor() {
    this.open = false; this.id = -1; this.peers = new Map(); this.q = []; this.batch = false; this.peer = null; this.conn = null; this.locked = false; this.name = '';
    this.onmsg = this.onjoin = this.onleave = this.onclose = () => {};
  }
  /** Create the game under this code, as its host. Resolves once the broker knows the code. Rejects with { type: 'taken' | 'timeout' | 'network' }. */
  host(code, name) {
    this.name = name || '';
    return new Promise((res, rej) => {
      let done = false;
      const fail = (type) => { if (done) return; done = true; clearTimeout(timer); this.shut(); rej({ type }); };
      const timer = setTimeout(() => fail('timeout'), WAIT);
      let p; try { p = this.peer = new Peer(PREFIX + code, BROKER); } catch (e) { fail('network'); return; }
      p.on('open', () => { if (done) return; done = true; clearTimeout(timer); this.id = 0; this.open = true; res(0); });
      p.on('error', (e) => { if (!done) fail(e && e.type === 'unavailable-id' ? 'taken' : 'network'); });      // later errors (nobody under a code, the broker dropping out) do not end a game that runs from browser to browser
      p.on('disconnected', () => { if (this.peer === p && !p.destroyed) try { p.reconnect(); } catch (e) { /* gone */ } });   // the broker let go: back to it, so that the code keeps working
      p.on('connection', (c) => c.on('open', () => {
        if (this.conn || this.locked) {                    // a game has two players, and nobody comes in while it is played
          try { c.send([{ t: '#no', why: this.conn ? 'full' : 'started' }]); } catch (e) { /* gone */ }
          setTimeout(() => { try { c.close(); } catch (e) { /* gone */ } }, 400); return;
        }
        this.conn = c;
        c.on('data', (d) => this.got(d, 1)); c.on('close', () => this.gone(c)); c.on('error', () => this.gone(c));
      }));
    });
  }
  /** Join the game under this code. Rejects with { type: 'none' | 'full' | 'started' | 'timeout' | 'network' }. */
  join(code, name) {
    this.name = name || '';
    return new Promise((res, rej) => {
      let done = false;
      const fail = (type) => { if (done) return; done = true; clearTimeout(timer); this.shut(); rej({ type }); };
      const timer = setTimeout(() => fail('timeout'), WAIT);
      let p; try { p = this.peer = BROKER ? new Peer(BROKER) : new Peer(); } catch (e) { fail('network'); return; }
      p.on('error', (e) => { if (!done) fail(e && e.type === 'peer-unavailable' ? 'none' : 'network'); });
      p.on('open', () => {
        if (done) return;
        const c = (this.conn = p.connect(PREFIX + code, { reliable: true, serialization: 'json' }));
        c.on('open', () => { try { c.send([{ t: '#hi', n: this.name }]); } catch (e) { fail('network'); } });
        c.on('data', (d) => {
          if (done) { this.got(d, 0); return; }
          const m = Array.isArray(d) ? d[0] : null;
          if (m && m.t === '#no') fail(m.why);
          else if (m && m.t === '#hi') { done = true; clearTimeout(timer); this.id = 1; this.peers.set(0, m.n || ''); this.open = true; res(1); }   // the host answered: in
        });
        c.on('close', () => { if (!done) fail('network'); else this.gone(c); });
        c.on('error', () => { if (!done) fail('network'); });
      });
    });
  }
  /** What the other browser sent: a list of messages. Those beginning with # are the link's own. */
  got(list, from) {
    if (!Array.isArray(list)) return;
    for (const m of list) {
      if (!m) continue;
      if (m.t === '#hi') { if (this.id === 0 && !this.peers.has(1)) { this.peers.set(1, m.n || ''); try { this.conn.send([{ t: '#hi', n: this.name }]); } catch (e) { /* gone */ } this.onjoin(1, m.n || ''); } }
      else if (m.t === '#bye') this.left = true;                                 // he leaves of his own accord (the channel closes next)
      else if (m.to === undefined || m.to === this.id) this.onmsg(m, from);
    }
  }
  /** The channel has closed. For the one who joined, the game is over; the host may be joined by someone else. */
  gone(c) {
    if (this.conn !== c) return;
    this.conn = null; const left = this.left; this.left = false;
    if (!this.open) return;
    if (this.id === 0) { if (this.peers.delete(1)) this.onleave(1); }
    else this.closed(left ? 'host' : 'lost');
  }

  /** Send a message to the other player. While batch is on, it waits for the next flush. */
  send(m) { if (!this.open) return; this.q.push(m); if (!this.batch) this.flush(); }
  flush() {
    if (!this.q.length) return;
    let q = this.q; this.q = [];
    const c = this.conn; if (!c || !c.open || !this.peers.size) return;         // nobody there yet (the host alone on the Online screen)
    const dc = c.dataChannel; if (dc && dc.bufferedAmount > 64 * 1024) { q = q.filter((m) => !LOSSY.has(m.t)); if (!q.length) return; }   // lagging behind: only what must arrive
    try { c.send(q); } catch (e) { /* closing */ }
  }
  /** Host: the game has started (nobody else may come in), or is between two games (someone may). */
  lock(on) { this.locked = !!on; }
  closed(why) { if (this.open) { this.open = false; this.onclose(why); } }
  close() {
    if (this.open) { this.flush(); try { if (this.conn && this.conn.open) this.conn.send([{ t: '#bye' }]); } catch (e) { /* gone */ } }
    this.open = false;
    const p = this.peer, c = this.conn; this.peer = this.conn = null;
    setTimeout(() => { try { if (c) c.close(); if (p) p.destroy(); } catch (e) { /* gone */ } }, 250);
  }
  /** Give up at once (the connection never came about). */
  shut() { this.open = false; const p = this.peer; this.peer = this.conn = null; try { if (p) p.destroy(); } catch (e) { /* gone */ } }
}
