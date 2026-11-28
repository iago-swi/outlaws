import { Peer } from 'peerjs';

const PEER_PREFIX = 'outlaws-eh-duel-v1-';
// Exact 22 unambiguous characters: no 0/O/Q, no 1/I, no 2/Z, no 5/S, no 8/B, no G, no U/V
export const CODE_ALPHABET = '34679ACDEFHJKLMNPRTWXY';

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
  return String(raw || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 5);
}

export function buildInviteUrl(code) {
  const url = new URL(window.location.href);
  url.search = `?duel=${code}`;
  url.hash = '';
  return url.toString();
}

/**
 * Direct browser-to-browser WebRTC DataChannel transport for Online 2-player games.
 * Uses PeerJS public signalling strictly for the initial 5-character handshake;
 * once the direct WebRTC DataChannel is open, the signalling socket disconnects
 * so zero gameplay data passes through any outside server.
 */
export class DuelConnection {
  constructor(handlers = {}) {
    this.onStatus = handlers.onStatus || (() => {});
    this.onMessage = handlers.onMessage || (() => {});
    this.onDisconnect = handlers.onDisconnect || (() => {});
    this.onConnected = handlers.onConnected || (() => {});

    this.role = null; // 'host' | 'guest'
    this.code = '';
    this.connected = false;
    this.closed = false;

    this.peer = null;
    this.conn = null;
    this._connectTimer = null;
  }

  _emitStatus(state, message) {
    if (!this.closed) this.onStatus(state, message);
  }

  _handleOpen() {
    if (this.closed || this.connected) return;
    this.connected = true;
    clearTimeout(this._connectTimer);
    this._emitStatus('connected', 'Connected directly (peer-to-peer).');
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
      this._emitStatus('failed', 'Could not connect. Check the code or try from another network.');
    }
  }

  _handleRawData(raw) {
    if (this.closed) return;
    try {
      const msg = typeof raw === 'string' ? JSON.parse(raw) : raw;
      if (msg && typeof msg === 'object') this.onMessage(msg);
    } catch {}
  }

  hostWithCode(code = generateDuelCode()) {
    this.close();
    this.closed = false;
    this.role = 'host';
    this.code = normalizeDuelCode(code) || generateDuelCode();

    this._emitStatus('creating', 'Creating room…');

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
      this._emitStatus('waiting', `Waiting for the other player… (code ${this.code})`);
    });

    peer.on('connection', (conn) => {
      if (this.closed || this.conn || (this.canAcceptConnection && !this.canAcceptConnection())) {
        // Explicitly tell a 3rd browser or mid-game joiner why it was turned away!
        conn.on('open', () => {
          try { conn.send({ type: 'rejected', reason: 'Room is full or a game is already in progress.' }); } catch {}
          setTimeout(() => { try { conn.close(); } catch {} }, 200);
        });
        return;
      }
      this.conn = conn;
      this._emitStatus('connecting', 'Player found — establishing direct connection…');
      this._bindPeerConn(conn);
    });

    peer.on('error', (err) => {
      if (this.closed || this.connected) return;
      if (err && err.type === 'unavailable-id') {
        this.hostWithCode(generateDuelCode());
        return;
      }
      this._emitStatus('failed', 'Could not reach the connection service. Try again or use another network.');
    });

    return this.code;
  }

  joinWithCode(code) {
    this.close();
    this.closed = false;
    this.role = 'guest';
    this.code = normalizeDuelCode(code);

    if (this.code.length !== 5) {
      this._emitStatus('failed', 'Enter a 5-character code.');
      return;
    }

    this._emitStatus('connecting', `Connecting to room ${this.code}…`);

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
        this._emitStatus('failed', 'Could not connect within 15 seconds. Strict firewalls or mobile networks can block direct connections — try from another network.');
      }
    }, 15000);

    peer.on('open', () => {
      if (this.closed) return;
      const conn = peer.connect(PEER_PREFIX + this.code, { reliable: true, serialization: 'json' });
      this.conn = conn;
      this._bindPeerConn(conn);
    });

    peer.on('error', (err) => {
      if (this.closed || this.connected) return;
      clearTimeout(this._connectTimer);
      if (err && err.type === 'peer-unavailable') {
        this._emitStatus('failed', 'Room not found, already full (2 of 2), or a game is already in progress.');
      } else {
        this._emitStatus('failed', 'Could not connect. Check the code or try from another network.');
      }
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
    const pc = conn.peerConnection;
    if (pc) {
      pc.addEventListener('iceconnectionstatechange', () => {
        if (pc.iceConnectionState === 'disconnected' || pc.iceConnectionState === 'failed' || pc.iceConnectionState === 'closed') {
          this._handleClose();
        }
      });
    }
  }

  isOpen() {
    return !!(this.connected && !this.closed && this.conn && this.conn.open);
  }

  send(msg, dropIfBacklogged = false) {
    if (!this.connected || this.closed) return false;
    try {
      if (this.conn && this.conn.open) {
        if (dropIfBacklogged && this.conn.dataChannel && this.conn.dataChannel.bufferedAmount > 8192) {
          return false;
        }
        this.conn.send(msg);
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
    this.conn = null;
    this.peer = null;
  }
}
