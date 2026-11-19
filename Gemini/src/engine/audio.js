/**
 * Procedural Web Audio Synthesizer for Music & Weapon SFX across all 3 Eras
 */
export class SoundEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.musicGain = null;
    this.sfxGain = null;
    this.muted = false;
    this.musicTimer = null;
    this.currentTheme = null;
    this.step = 0;
    this.noiseBuffer = null;
  }

  ensureInit() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    this.ctx = new AudioCtx();

    this.master = this.ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.72;
    this.master.connect(this.ctx.destination);

    this.musicGain = this.ctx.createGain();
    this.musicGain.gain.value = 0.28;
    this.musicGain.connect(this.master);

    this.sfxGain = this.ctx.createGain();
    this.sfxGain.gain.value = 0.85;
    this.sfxGain.connect(this.master);

    // Pre-generate 1.5s white noise buffer for gunfire, wind, explosions, slashes
    const sampleRate = this.ctx.sampleRate;
    const len = Math.floor(sampleRate * 1.5);
    this.noiseBuffer = this.ctx.createBuffer(1, len, sampleRate);
    const data = this.noiseBuffer.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
  }

  setMuted(m) {
    this.muted = m;
    if (this.master) {
      this.master.gain.setTargetAtTime(m ? 0 : 0.72, this.ctx.currentTime, 0.04);
    }
  }

  toggleMute() {
    this.setMuted(!this.muted);
    return this.muted;
  }

  stopMusic() {
    if (this.musicTimer) {
      clearInterval(this.musicTimer);
      this.musicTimer = null;
    }
    this.currentTheme = null;
  }

  startMusic(theme) {
    this.ensureInit();
    if (!this.ctx) return;
    if (this.currentTheme === theme && this.musicTimer) return;
    this.stopMusic();
    this.currentTheme = theme;
    this.step = 0;

    if (theme === 'west') {
      // Spaghetti Western D-minor Morricone-inspired groove
      const bass = [73.42, 73.42, 110.0, 87.31, 73.42, 73.42, 65.41, 82.41];
      const guitar = [293.66, 349.23, 440.0, 329.63, 293.66, 0, 261.63, 329.63];
      const whistle = [587.33, 659.25, 698.46, 880.0, 0, 698.46, 659.25, 587.33];

      this.musicTimer = setInterval(() => {
        if (!this.ctx || this.muted) return;
        const s = this.step++;
        const now = this.ctx.currentTime;

        // Low galloping bass
        this._tone(bass[s % bass.length], 'triangle', 0.24, 0.26, now, this.musicGain, 320);

        // Twangy Western guitar pluck
        const gNote = guitar[s % guitar.length];
        if (gNote > 0) {
          this._tone(gNote, 'sawtooth', 0.34, 0.14, now, this.musicGain, 1100);
        }

        // Haunting Ennio whistle every 2 bars
        if (s % 2 === 0 && Math.floor(s / 8) % 2 === 0) {
          const wNote = whistle[(s >> 1) % whistle.length];
          if (wNote > 0) {
            this._whistle(wNote, 0.65, 0.11, now);
          }
        }
      }, 340);
    } else if (theme === 'japan') {
      // Hirajoshi pentatonic: D, E, F, A, Bb
      const koto = [293.66, 329.63, 349.23, 440.0, 466.16, 587.33, 440.0, 349.23];
      const flute = [587.33, 0, 659.25, 698.46, 880.0, 0, 698.46, 587.33];

      this.musicTimer = setInterval(() => {
        if (!this.ctx || this.muted) return;
        const s = this.step++;
        const now = this.ctx.currentTime;

        // Taiko drum hit on beats 0 and 5
        if (s % 8 === 0 || s % 8 === 5) {
          this._taiko(now, s % 8 === 0 ? 0.32 : 0.18);
        }
        // Koto pluck
        if (s % 2 === 0 || s % 7 === 0) {
          const freq = koto[(s * 3) % koto.length];
          this._tone(freq, 'triangle', 0.52, 0.17, now, this.musicGain, 2200);
        }
        // Shakuhachi breathy flute
        if (s % 4 === 1) {
          const f = flute[(s >> 2) % flute.length];
          if (f > 0) this._whistle(f, 1.1, 0.1, now);
        }
      }, 380);
    } else if (theme === 'swiss') {
      // Majestic Alphorn F-major natural harmonic series + alpine strings
      const horn = [174.61, 261.63, 349.23, 440.0, 523.25, 440.0, 349.23, 261.63];
      const lute = [349.23, 440.0, 523.25, 349.23, 293.66, 392.0, 523.25, 440.0];

      this.musicTimer = setInterval(() => {
        if (!this.ctx || this.muted) return;
        const s = this.step++;
        const now = this.ctx.currentTime;

        // Warm alpine lute/harp arpeggio
        const lNote = lute[s % lute.length];
        this._tone(lNote, 'triangle', 0.36, 0.15, now, this.musicGain, 1600);

        // Resonant Alphorn call every 4 beats
        if (s % 4 === 0) {
          const hNote = horn[(s >> 2) % horn.length];
          this._alphorn(hNote, 1.25, 0.2, now);
        }
      }, 360);
    }
  }

  _tone(freq, type, dur, vol, startTime, dest, cutoff = 1800) {
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(cutoff, startTime);
    filter.frequency.exponentialRampToValueAtTime(220, startTime + dur);

    gain.gain.setValueAtTime(0.001, startTime);
    gain.gain.linearRampToValueAtTime(vol, startTime + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0008, startTime + dur);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(dest);
    osc.start(startTime);
    osc.stop(startTime + dur + 0.02);
  }

  _whistle(freq, dur, vol, startTime) {
    const osc = this.ctx.createOscillator();
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq * 0.96, startTime);
    osc.frequency.exponentialRampToValueAtTime(freq, startTime + 0.09);

    lfo.frequency.value = 5.5;
    lfoGain.gain.value = freq * 0.012;
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);

    gain.gain.setValueAtTime(0.001, startTime);
    gain.gain.linearRampToValueAtTime(vol, startTime + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.0008, startTime + dur);

    osc.connect(gain);
    gain.connect(this.musicGain);
    osc.start(startTime);
    lfo.start(startTime);
    osc.stop(startTime + dur + 0.03);
    lfo.stop(startTime + dur + 0.03);
  }

  _alphorn(freq, dur, vol, startTime) {
    const osc = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc2.type = 'triangle';
    osc.frequency.setValueAtTime(freq, startTime);
    osc2.frequency.setValueAtTime(freq * 0.5, startTime);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(750, startTime);
    filter.Q.value = 2.0;

    gain.gain.setValueAtTime(0.001, startTime);
    gain.gain.linearRampToValueAtTime(vol, startTime + 0.18);
    gain.gain.setValueAtTime(vol * 0.85, startTime + dur * 0.7);
    gain.gain.exponentialRampToValueAtTime(0.0008, startTime + dur);

    osc.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.musicGain);
    osc.start(startTime);
    osc2.start(startTime);
    osc.stop(startTime + dur + 0.05);
    osc2.stop(startTime + dur + 0.05);
  }

  _taiko(startTime, vol) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(115, startTime);
    osc.frequency.exponentialRampToValueAtTime(42, startTime + 0.35);

    gain.gain.setValueAtTime(vol, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.45);
    osc.connect(gain);
    gain.connect(this.musicGain);
    osc.start(startTime);
    osc.stop(startTime + 0.48);
  }

  _noiseBurst(dur, vol, filterFreq, filterType = 'bandpass', q = 1.0) {
    if (!this.ctx || !this.noiseBuffer) return;
    const now = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = filterType;
    filter.frequency.setValueAtTime(filterFreq, now);
    filter.Q.value = q;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(vol, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);
    src.start(now);
    src.stop(now + dur + 0.02);
  }

  playShot(kind = 'revolver') {
    this.ensureInit();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    if (kind === 'revolver' || kind === 'rifle') {
      const heavy = kind === 'rifle';
      this._noiseBurst(heavy ? 0.32 : 0.22, heavy ? 0.9 : 0.72, heavy ? 1150 : 1450, 'lowpass');
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(heavy ? 240 : 320, now);
      osc.frequency.exponentialRampToValueAtTime(42, now + (heavy ? 0.22 : 0.14));
      g.gain.setValueAtTime(heavy ? 0.65 : 0.5, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.connect(g);
      g.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.24);
    } else if (kind === 'shotgun' || kind === 'musket') {
      this._noiseBurst(0.45, 1.0, 950, 'lowpass');
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(175, now);
      osc.frequency.exponentialRampToValueAtTime(28, now + 0.32);
      g.gain.setValueAtTime(0.85, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.34);
      osc.connect(g);
      g.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.36);
    } else if (kind === 'bow' || kind === 'crossbow') {
      this._noiseBurst(0.11, 0.45, 2200, 'bandpass', 2);
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(kind === 'crossbow' ? 420 : 280, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.16);
      g.gain.setValueAtTime(0.55, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.connect(g);
      g.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.2);
    } else if (kind === 'shuriken') {
      this._noiseBurst(0.09, 0.4, 3800, 'highpass');
      this._tone(1650, 'sine', 0.08, 0.22, now, this.sfxGain, 4000);
    } else if (kind === 'slash') {
      this._noiseBurst(0.18, 0.6, 2600, 'bandpass', 1.4);
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(900, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.16);
      g.gain.setValueAtTime(0.28, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.connect(g);
      g.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.19);
    } else if (kind === 'throw') {
      this._noiseBurst(0.14, 0.35, 1600, 'bandpass');
    }
  }

  playReload() {
    this.ensureInit();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this._tone(780, 'square', 0.045, 0.16, now, this.sfxGain, 2200);
    this._tone(1120, 'square', 0.055, 0.18, now + 0.18, this.sfxGain, 2600);
    this._tone(640, 'triangle', 0.06, 0.2, now + 0.36, this.sfxGain, 1800);
  }

  playExplosion() {
    this.ensureInit();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this._noiseBurst(0.95, 1.0, 520, 'lowpass');
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(110, now);
    osc.frequency.exponentialRampToValueAtTime(22, now + 0.7);
    g.gain.setValueAtTime(0.95, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
    osc.connect(g);
    g.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.85);
  }

  playHit(isCrit = false) {
    this.ensureInit();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this._tone(isCrit ? 1320 : 840, 'triangle', 0.09, 0.32, now, this.sfxGain, 3200);
    if (isCrit) {
      this._tone(1760, 'sine', 0.14, 0.34, now + 0.04, this.sfxGain, 4200);
    }
  }

  playHurt() {
    this.ensureInit();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this._noiseBurst(0.16, 0.45, 650, 'lowpass');
    this._tone(130, 'sawtooth', 0.18, 0.38, now, this.sfxGain, 450);
  }

  playPickup() {
    this.ensureInit();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this._tone(587.33, 'triangle', 0.11, 0.28, now, this.sfxGain, 2800);
    this._tone(880.0, 'triangle', 0.18, 0.28, now + 0.09, this.sfxGain, 3200);
  }

  playBossHorn() {
    this.ensureInit();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this._alphorn(146.83, 1.4, 0.45, now);
    this._alphorn(220.0, 1.4, 0.35, now + 0.15);
  }
}
