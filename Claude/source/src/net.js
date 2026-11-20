// Connection between the two browsers of a duel.
// The data always flows directly from one browser to the other (WebRTC data channel).
// Only the first handshake differs: through the public PeerJS broker (invite link),
// or by hand, with two codes the players paste to each other (no outside service).
import { Peer } from 'peerjs';

const ICE = { iceServers: [{ urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302'] }] };
const PREFIX = 'lonehand-duel-';

export class Link {
  constructor() { this.open = false; this.onopen = this.onclose = this.onmsg = this.onerror = () => {}; }

  // ---- invite link ------------------------------------------------------------
  /** Wait for an opponent under a short code. Resolves once the code is registered. */
  host(code) {
    return new Promise((res, rej) => {
      const p = (this.peer = new Peer(PREFIX + code));
      p.on('open', () => res(code));
      p.on('error', (e) => { if (!this.open) rej(e); });
      p.on('connection', (c) => { if (!this.conn) this.adopt(c); else c.close(); });      // a duel has two players
    });
  }
  /** Connect to the player who is waiting under this code. */
  join(code) {
    return new Promise((res, rej) => {
      const p = (this.peer = new Peer());
      p.on('open', () => { this.adopt(p.connect(PREFIX + code, { reliable: true, serialization: 'json' })); res(); });
      p.on('error', (e) => { if (!this.open) { rej(e); this.onerror(e); } });        // for example: nobody is waiting under this code
    });
  }
  adopt(c) {
    this.conn = c;
    c.on('open', () => { this.open = true; this.onopen(); });
    c.on('data', (d) => this.onmsg(d));
    c.on('close', () => this.closed());
  }

  // ---- copy-paste codes -----------------------------------------------------------
  /** Host, step 1: a code that describes how to reach this browser. */
  async manualOffer() {
    const pc = (this.pc = new RTCPeerConnection(ICE));
    this.wire(pc.createDataChannel('duel'));
    await pc.setLocalDescription(await pc.createOffer());
    await gathered(pc);
    return pack(pc.localDescription);
  }
  /** Guest: take the host's code, return the reply code. */
  async manualAnswer(code) {
    const pc = (this.pc = new RTCPeerConnection(ICE));
    pc.ondatachannel = (e) => this.wire(e.channel);
    await pc.setRemoteDescription(unpack(code));
    await pc.setLocalDescription(await pc.createAnswer());
    await gathered(pc);
    return pack(pc.localDescription);
  }
  /** Host, step 2: take the guest's reply; the channel opens by itself. */
  async manualAccept(code) { await this.pc.setRemoteDescription(unpack(code)); }
  wire(ch) {
    this.ch = ch;
    ch.onopen = () => { this.open = true; this.onopen(); };
    ch.onmessage = (e) => this.onmsg(JSON.parse(e.data));
    ch.onclose = () => this.closed();
  }

  // ---- both ---------------------------------------------------------------------------
  send(o) {
    if (!this.open) return;
    try { if (this.conn) this.conn.send(o); else if (this.ch.readyState === 'open') this.ch.send(JSON.stringify(o)); } catch (e) { /* the channel is closing */ }
  }
  closed() { if (this.open) { this.open = false; this.onclose(); } }
  close() {
    this.open = false;
    try { if (this.conn) this.conn.close(); if (this.ch) this.ch.close(); if (this.pc) this.pc.close(); if (this.peer) this.peer.destroy(); } catch (e) { /* already gone */ }
  }
}

/** Resolve once the browser has listed its own network addresses (or after four seconds). */
const gathered = (pc) => new Promise((res) => {
  if (pc.iceGatheringState === 'complete') return res();
  const t = setTimeout(res, 4000);
  pc.addEventListener('icegatheringstatechange', () => { if (pc.iceGatheringState === 'complete') { clearTimeout(t); res(); } });
});
const pack = (d) => btoa(JSON.stringify({ t: d.type, s: d.sdp }));
const unpack = (c) => { const o = JSON.parse(atob(c.trim())); return { type: o.t, sdp: o.s }; };
