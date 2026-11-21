import { Peer } from 'peerjs';

const PEER_PREFIX = 'outlaws-eh-duel-v1-';
const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ'; // 24 unambiguous letters (no I/O)

export function generateDuelCode() {
  let code = '';
  const bytes = new Uint8Array(5);
  crypto.getRandomValues(bytes);
  for (let i = 0; i < 5; i++) {
    code += CODE_ALPHABET[bytes[i] % CODE_ALPHABET.length];
  }
  return code;
}

export function normalizeDuelCode(raw) {
  return String(raw || '').toUpperCase().replace(/[^A-Z]/g, '').slice(0, 5);
}

export function buildInviteUrl(code) {
  const url = new URL(window.location.href);
  url.search = `?duel=${code}`;
  url.hash = '';
  return url.toString();
}

function encodeSignal(obj) {
  const json = JSON.stringify(obj);
  const bytes = new TextEncoder().encode(json);
  let bin = '';
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return 'DUEL1-' + btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function decodeSignal(str) {
  const clean = String(str || '').trim().replace(/^DUEL1-/, '');
  const pad = clean.length % 4 === 0 ? '' : '='.repeat(4 - (clean.length % 4));
  const b64 = clean.replace(/-/g, '+').replace(/_/g, '/') + pad;
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return JSON.parse(new TextDecoder().decode(bytes));
}

function waitForIceComplete(pc, timeoutMs = 2600) {
  return new Promise((resolve) => {
    if (pc.iceGatheringState === 'complete') {
      resolve();
      return;
    }
    const done = () => {
      clearTimeout(timer);
      pc.removeEventListener('icegatheringstatechange', onState);
      resolve();
    };
    const onState = () => {
      if (pc.iceGatheringState === 'complete') done();
    };
    const timer = setTimeout(done, timeoutMs);
    pc.addEventListener('icegatheringstatechange', onState);
  });
}

/**
 * Direct browser-to-browser WebRTC DataChannel transport for Duel Mode.
 * Supports:
 *   1) PeerJS public signalling handshake (5-letter invite code / URL) — signalling only;
 *      signalling socket disconnects once the direct WebRTC DataChannel is open.
 *   2) Pure copy-paste manual SDP offer/answer codes using native RTCPeerConnection (no outside service).
 */
export class DuelConnection {
  constructor(handlers = {}) {
    this.onStatus = handlers.onStatus || (() => {});
    this.onMessage = handlers.onMessage || (() => {});
    this.onDisconnect = handlers.onDisconnect || (() => {});
    this.onConnected = handlers.onConnected || (() => {});

    this.role = null; // 'host' | 'guest'
    this.mode = null; // 'peerjs' | 'manual'
    this.code = '';
    this.connected = false;
    this.closed = false;

    // PeerJS state
    this.peer = null;
    this.conn = null;
    this._connectTimer = null;

    // Native WebRTC manual state
    this.pc = null;
    this.dc = null;
  }

  _emitStatus(state, message) {
    if (!this.closed) this.onStatus(state, message);
  }

  _handleOpen() {
    if (this.closed || this.connected) return;
    this.connected = true;
    clearTimeout(this._connectTimer);
    this._emitStatus('connected', 'Connected directly (peer-to-peer).');
    // Once direct WebRTC DataChannel is open, disconnect from PeerJS signalling server
    // so zero game data or heartbeats ever pass through it.
    if (this.peer && !this.peer.destroyed && !this.peer.disconnected) {
      setTimeout(() => {
        try {
          if (this.peer && !this.peer.destroyed && !this.peer.disconnected) {
            this.peer.disconnect();
          }
        } catch {}
      }, 1500);
    }
    this.onConnected();
  }

  _handleClose() {
    if (this.closed) return;
    const wasConnected = this.connected;
    this.connected = false;
    clearTimeout(this._connectTimer);
    if (wasConnected) {
      this._emitStatus('disconnected', 'Connection lost.');
      this.onDisconnect();
    } else {
      this._emitStatus('failed', 'Could not connect. Try the copy-paste backup below.');
    }
  }

  _handleRawData(raw) {
    if (this.closed) return;
    try {
      const msg = typeof raw === 'string' ? JSON.parse(raw) : raw;
      if (msg && typeof msg === 'object') this.onMessage(msg);
    } catch {}
  }

  // =========================================================================
  // METHOD A: PeerJS Signalling Handshake (5-letter code & invite link)
  // =========================================================================

  hostWithCode(code = generateDuelCode()) {
    this.close();
    this.closed = false;
    this.role = 'host';
    this.mode = 'peerjs';
    this.code = normalizeDuelCode(code) || generateDuelCode();

    this._emitStatus('creating', 'Creating duel room…');

    const peerId = PEER_PREFIX + this.code;
    const peer = new Peer(peerId, {
      debug: 0,
      config: {
        iceServers: [
          { urls: 'stun:stun.l.google.com:19302' },
          { urls: 'stun:stun1.l.google.com:19302' }
        ]
      }
    });
    this.peer = peer;

    peer.on('open', () => {
      if (this.closed) return;
      this._emitStatus('waiting', `Waiting for opponent… (code ${this.code})`);
    });

    peer.on('connection', (conn) => {
      if (this.closed || this.conn) {
        try { conn.close(); } catch {}
        return;
      }
      this.conn = conn;
      this._emitStatus('connecting', 'Opponent found — establishing direct connection…');
      this._bindPeerConn(conn);
    });

    peer.on('error', (err) => {
      if (this.closed || this.connected) return;
      if (err && err.type === 'unavailable-id') {
        // Rare 5-letter collision: regenerate cleanly
        this.hostWithCode(generateDuelCode());
        return;
      }
      this._emitStatus('failed', 'Could not connect to signalling service. Use the copy-paste backup below.');
    });

    return this.code;
  }

  joinWithCode(code) {
    this.close();
    this.closed = false;
    this.role = 'guest';
    this.mode = 'peerjs';
    this.code = normalizeDuelCode(code);

    if (this.code.length !== 5) {
      this._emitStatus('failed', 'Enter a 5-letter duel code.');
      return;
    }

    this._emitStatus('connecting', `Connecting to duel ${this.code}…`);

    const peer = new Peer(undefined, {
      debug: 0,
      config: {
        iceServers: [
          { urls: 'stun:stun.l.google.com:19302' },
          { urls: 'stun:stun1.l.google.com:19302' }
        ]
      }
    });
    this.peer = peer;

    this._connectTimer = setTimeout(() => {
      if (!this.connected && !this.closed) {
        this._emitStatus('failed', 'Could not connect. Check the code or use the copy-paste backup below.');
      }
    }, 14000);

    peer.on('open', () => {
      if (this.closed) return;
      const conn = peer.connect(PEER_PREFIX + this.code, { reliable: true, serialization: 'json' });
      this.conn = conn;
      this._bindPeerConn(conn);
    });

    peer.on('error', () => {
      if (this.closed || this.connected) return;
      clearTimeout(this._connectTimer);
      this._emitStatus('failed', 'Could not connect. Check the code or use the copy-paste backup below.');
    });
  }

  _bindPeerConn(conn) {
    conn.on('open', () => this._handleOpen());
    conn.on('data', (data) => this._handleRawData(data));
    conn.on('close', () => this._handleClose());
    conn.on('error', () => {
      if (!this.connected) this._handleClose();
    });
    if (conn.open) this._handleOpen();
    // Detect abrupt browser tab close via underlying RTCPeerConnection ICE state
    const pc = conn.peerConnection;
    if (pc) {
      pc.addEventListener('iceconnectionstatechange', () => {
        if (pc.iceConnectionState === 'disconnected' || pc.iceConnectionState === 'failed' || pc.iceConnectionState === 'closed') {
          this._handleClose();
        }
      });
    }
  }

  // =========================================================================
  // METHOD B: Manual Copy-Paste WebRTC Codes (Zero Outside Service!)
  // =========================================================================

  _makeNativePC() {
    const pc = new RTCPeerConnection({
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:stun1.l.google.com:19302' }
      ]
    });
    pc.addEventListener('iceconnectionstatechange', () => {
      if (pc.iceConnectionState === 'disconnected' || pc.iceConnectionState === 'failed' || pc.iceConnectionState === 'closed') {
        this._handleClose();
      }
    });
    return pc;
  }

  _bindNativeDC(dc) {
    this.dc = dc;
    dc.onopen = () => this._handleOpen();
    dc.onmessage = (ev) => this._handleRawData(ev.data);
    dc.onclose = () => this._handleClose();
    dc.onerror = () => {
      if (!this.connected) this._handleClose();
    };
    if (dc.readyState === 'open') this._handleOpen();
  }

  /**
   * Step 1 (Host): Create a copy-pasteable Offer code containing SDP + ICE candidates
   */
  async createManualOffer() {
    this.close();
    this.closed = false;
    this.role = 'host';
    this.mode = 'manual';
    this._emitStatus('creating', 'Generating direct connection offer code…');

    const pc = this._makeNativePC();
    this.pc = pc;
    const dc = pc.createDataChannel('outlaws-duel', { ordered: true });
    this._bindNativeDC(dc);

    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    await waitForIceComplete(pc);

    this._emitStatus('waiting', 'Offer code ready. Send it to your opponent, then paste their reply code.');
    return encodeSignal({ t: 'offer', sdp: pc.localDescription.sdp });
  }

  /**
   * Step 2 (Guest): Accept Host's Offer code and generate a copy-pasteable Answer code
   */
  async acceptManualOffer(offerCode) {
    this.close();
    this.closed = false;
    this.role = 'guest';
    this.mode = 'manual';
    this._emitStatus('connecting', 'Reading offer and generating reply code…');

    const payload = decodeSignal(offerCode);
    if (!payload || payload.t !== 'offer' || !payload.sdp) {
      throw new Error('Invalid host offer code');
    }

    const pc = this._makeNativePC();
    this.pc = pc;
    pc.ondatachannel = (ev) => this._bindNativeDC(ev.channel);

    await pc.setRemoteDescription({ type: 'offer', sdp: payload.sdp });
    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);
    await waitForIceComplete(pc);

    this._emitStatus('waiting', 'Reply code ready. Send it back to the host to connect.');
    return encodeSignal({ t: 'answer', sdp: pc.localDescription.sdp });
  }

  /**
   * Step 3 (Host): Paste Guest's Answer code to complete the direct WebRTC handshake!
   */
  async applyManualAnswer(answerCode) {
    if (!this.pc || this.mode !== 'manual') {
      throw new Error('Create a host offer code first');
    }
    this._emitStatus('connecting', 'Completing direct WebRTC handshake…');
    const payload = decodeSignal(answerCode);
    if (!payload || payload.t !== 'answer' || !payload.sdp) {
      throw new Error('Invalid guest reply code');
    }
    await this.pc.setRemoteDescription({ type: 'answer', sdp: payload.sdp });

    this._connectTimer = setTimeout(() => {
      if (!this.connected && !this.closed) {
        this._emitStatus('failed', 'Could not connect. Check that both browsers allow WebRTC.');
      }
    }, 10000);
  }

  // =========================================================================
  // Messaging & Clean Teardown
  // =========================================================================

  send(msg) {
    if (!this.connected || this.closed) return false;
    try {
      if (this.mode === 'peerjs' && this.conn && this.conn.open) {
        this.conn.send(msg);
        return true;
      }
      if (this.mode === 'manual' && this.dc && this.dc.readyState === 'open') {
        this.dc.send(JSON.stringify(msg));
        return true;
      }
    } catch {}
    return false;
  }

  close() {
    this.closed = true;
    this.connected = false;
    clearTimeout(this._connectTimer);
    try { if (this.conn) this.conn.close(); } catch {}
    try { if (this.peer) this.peer.destroy(); } catch {}
    try { if (this.dc) this.dc.close(); } catch {}
    try { if (this.pc) this.pc.close(); } catch {}
    this.conn = null;
    this.peer = null;
    this.dc = null;
    this.pc = null;
  }
}
