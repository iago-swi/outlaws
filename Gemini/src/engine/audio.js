/**
 * Procedural Web Audio Synthesizer for Music & Weapon SFX across all 3 Eras
 */
export class SoundEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.musicGain = null;
    this.sfxGain = null;
    this.voicesGain = null;
    this.muted = false;
    // Stage 15 Item 98: Four remembered volume sliders + independent Music toggle
    this.prefs = { general: 0.80, effects: 0.85, voices: 0.85, music: 0.35, musicOn: true };
    try {
      const raw = JSON.parse(localStorage.getItem('nine_horizons_audio') || 'null');
      if (raw && typeof raw === 'object') {
        if (Number.isFinite(raw.general)) this.prefs.general = Math.max(0, Math.min(1, raw.general));
        if (Number.isFinite(raw.effects)) this.prefs.effects = Math.max(0, Math.min(1, raw.effects));
        if (Number.isFinite(raw.voices)) this.prefs.voices = Math.max(0, Math.min(1, raw.voices));
        if (Number.isFinite(raw.music)) this.prefs.music = Math.max(0, Math.min(1, raw.music));
        if (typeof raw.musicOn === 'boolean') this.prefs.musicOn = raw.musicOn;
      }
    } catch {}
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
    this.master.gain.value = this.muted ? 0 : this.prefs.general;
    this.master.connect(this.ctx.destination);

    this.musicGain = this.ctx.createGain();
    this.musicGain.gain.value = this.prefs.musicOn ? this.prefs.music : 0;
    this.musicGain.connect(this.master);

    this.sfxGain = this.ctx.createGain();
    this.sfxGain.gain.value = this.prefs.effects;
    this.sfxGain.connect(this.master);

    this.voicesGain = this.ctx.createGain();
    this.voicesGain.gain.value = this.prefs.voices;
    this.voicesGain.connect(this.master);

    // Pre-generate 1.5s white noise buffer for gunfire, wind, explosions, slashes
    const sampleRate = this.ctx.sampleRate;
    const len = Math.floor(sampleRate * 1.5);
    this.noiseBuffer = this.ctx.createBuffer(1, len, sampleRate);
    const data = this.noiseBuffer.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
  }

  _savePrefs() {
    try { localStorage.setItem('nine_horizons_audio', JSON.stringify(this.prefs)); } catch {}
  }

  applyVolumes() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    if (this.master) this.master.gain.setTargetAtTime(this.muted ? 0 : this.prefs.general, now, 0.03);
    if (this.sfxGain) this.sfxGain.gain.setTargetAtTime(this.prefs.effects, now, 0.03);
    if (this.voicesGain) this.voicesGain.gain.setTargetAtTime(this.prefs.voices, now, 0.03);
    if (this.musicGain) this.musicGain.gain.setTargetAtTime(this.prefs.musicOn ? this.prefs.music : 0, now, 0.03);
  }

  setVolume(channel, value01) {
    const v = Math.max(0, Math.min(1, Number(value01) || 0));
    if (channel in this.prefs) {
      this.prefs[channel] = v;
      this._savePrefs();
      this.applyVolumes();
    }
  }

  setMusicEnabled(on) {
    this.prefs.musicOn = !!on;
    this._savePrefs();
    this.applyVolumes();
    return this.prefs.musicOn;
  }

  toggleMusic() {
    return this.setMusicEnabled(!this.prefs.musicOn);
  }

  setMuted(m) {
    this.muted = m;
    this.applyVolumes();
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
    } else if (theme === 'greece') {
      // Ancient Greek Dorian / Phrygian lyre arpeggios + warm aulos flute
      const lyre = [293.66, 329.63, 349.23, 440.0, 493.88, 440.0, 349.23, 329.63];
      const bass = [146.83, 146.83, 164.81, 146.83, 130.81, 146.83, 164.81, 146.83];
      const aulos = [587.33, 659.25, 587.33, 523.25, 440.0, 0, 523.25, 587.33];

      this.musicTimer = setInterval(() => {
        if (!this.ctx || this.muted) return;
        const s = this.step++;
        const now = this.ctx.currentTime;

        // Kithara bass drone pulse
        if (s % 2 === 0) {
          this._tone(bass[(s >> 1) % bass.length], 'triangle', 0.42, 0.2, now, this.musicGain, 900);
        }
        // Bright plucked lyre string
        this._tone(lyre[s % lyre.length], 'triangle', 0.34, 0.16, now, this.musicGain, 2600);

        // Aulos reed melody
        if (s % 4 === 2) {
          const f = aulos[(s >> 2) % aulos.length];
          if (f > 0) this._whistle(f, 0.9, 0.1, now);
        }
      }, 310);
    } else if (theme === 'scandinavia') {
      // Haunting Nordic D-minor tagelharpa bowed drone + low fjord horn + frame drum
      const drone = [73.42, 73.42, 110.0, 73.42, 65.41, 73.42, 87.31, 73.42];
      const fiddle = [293.66, 349.23, 329.63, 293.66, 261.63, 293.66, 440.0, 392.0];

      this.musicTimer = setInterval(() => {
        if (!this.ctx || this.muted) return;
        const s = this.step++;
        const now = this.ctx.currentTime;

        // Deep Nordic frame drum beat
        if (s % 4 === 0 || s % 8 === 6) {
          this._taiko(now, s % 8 === 0 ? 0.3 : 0.18);
        }
        // Bowed tagelharpa low drone
        if (s % 2 === 0) {
          this._tone(drone[(s >> 1) % drone.length], 'sawtooth', 0.65, 0.15, now, this.musicGain, 480);
        }
        // Sparse Nordic winter melody
        if (s % 2 === 1) {
          this._tone(fiddle[(s >> 1) % fiddle.length], 'triangle', 0.48, 0.14, now, this.musicGain, 1500);
        }
        // Distant Viking warhorn every 8 beats
        if (s % 8 === 0) {
          this._alphorn(146.83, 1.5, 0.16, now);
        }
      }, 400);
    } else if (theme === 'normandy') {
      // Solemn, tense pre-dawn Normandy string pulse + distant artillery/flak rumble
      const cello = [110.0, 110.0, 103.83, 98.0, 110.0, 110.0, 130.81, 123.47];
      const brass = [220.0, 0, 261.63, 246.94, 220.0, 0, 196.0, 207.65];

      this.musicTimer = setInterval(() => {
        if (!this.ctx || this.muted) return;
        const s = this.step++;
        const now = this.ctx.currentTime;

        // Soft tense military pulse
        if (s % 2 === 0) {
          this._noiseBurst(0.05, 0.09, 1800, 'bandpass', 2.2);
        }
        // Brooding low cello drone
        if (s % 2 === 0) {
          this._tone(cello[(s >> 1) % cello.length], 'sawtooth', 0.62, 0.13, now, this.musicGain, 520);
        }
        // Somber brass/horn figure
        if (s % 4 === 0) {
          const b = brass[(s >> 2) % brass.length];
          if (b > 0) this._alphorn(b, 1.15, 0.12, now);
        }
        // Occasional distant pre-dawn anti-aircraft flak thump
        if (s % 16 === 7) {
          this._taiko(now, 0.18);
        }
      }, 370);
    } else if (theme === 'soviet') {
      // Slow A-minor waltz (3/4 feel) with trembling balalaika + winter wind, crow & distant tram bell
      const bass = [110.0, 164.81, 164.81, 110.0, 164.81, 164.81, 130.81, 196.0, 196.0, 98.0, 146.83, 146.83];
      const melody = [329.63, 392.0, 440.0, 523.25, 493.88, 440.0, 392.0, 329.63, 293.66, 329.63, 392.0, 329.63];

      this.musicTimer = setInterval(() => {
        if (!this.ctx || this.muted) return;
        const s = this.step++;
        const now = this.ctx.currentTime;
        const beat = s % 3;

        // Waltz oom-pah-pah accompaniment
        this._tone(bass[s % bass.length], 'triangle', beat === 0 ? 0.42 : 0.22, beat === 0 ? 0.2 : 0.12, now, this.musicGain, 680);

        // Trembling balalaika tremolo (3 rapid bright plucks per beat)
        const mNote = melody[s % melody.length];
        for (let t = 0; t < 3; t++) {
          this._tone(mNote, 'triangle', 0.13, 0.11, now + t * 0.11, this.musicGain, 2800);
        }

        // Winter wind sigh every 6 beats
        if (s % 6 === 0) {
          this._noiseBurst(0.9, 0.06, 480, 'bandpass', 2.4);
        }
        // Distant tram bell (double brass ding) every 18 beats
        if (s % 18 === 11) {
          this._tone(1320, 'sine', 0.35, 0.09, now, this.musicGain, 4000);
          this._tone(1320, 'sine', 0.35, 0.08, now + 0.18, this.musicGain, 4000);
        }
        // Winter crow caw every 24 beats
        if (s % 24 === 17) {
          this._tone(420, 'sawtooth', 0.16, 0.07, now, this.musicGain, 1100);
          this._tone(395, 'sawtooth', 0.18, 0.06, now + 0.24, this.musicGain, 1050);
        }
      }, 420);
    } else if (theme === 'tibet') {
      // Tibetan dungchen long horns, resonant singing bowl, small temple bells, 5-note flute + wind/flags
      const flute = [293.66, 329.63, 392.0, 440.0, 523.25, 440.0, 392.0, 329.63];

      this.musicTimer = setInterval(() => {
        if (!this.ctx || this.muted) return;
        const s = this.step++;
        const now = this.ctx.currentTime;

        // Deep long horn (dungchen) drone every 8 steps
        if (s % 8 === 0) {
          this._alphorn(82.41, 2.4, 0.24, now);
        }
        // Singing bowl resonance every 6 steps
        if (s % 6 === 2) {
          this._tone(246.94, 'sine', 1.8, 0.16, now, this.musicGain, 1200);
          this._tone(495.5, 'sine', 1.4, 0.08, now, this.musicGain, 2000);
        }
        // Small temple bells (tingsha)
        if (s % 4 === 1) {
          this._tone(1760, 'sine', 0.45, 0.07, now, this.musicGain, 5000);
          this._tone(2349, 'sine', 0.35, 0.05, now + 0.05, this.musicGain, 5000);
        }
        // 5-note pentatonic mountain flute
        if (s % 2 === 0) {
          const fn = flute[(s >> 1) % flute.length];
          this._whistle(fn, 0.95, 0.11, now);
        }
        // High-altitude wind & snapping prayer flags
        if (s % 5 === 0) {
          this._noiseBurst(0.7, 0.07, 680, 'bandpass', 1.8);
        }
        if (s % 7 === 3) {
          this._noiseBurst(0.06, 0.08, 1600, 'highpass', 1.0);
        }
      }, 450);
    } else if (theme === 'aztec') {
      // Tenochtitlan: great huehuetl drum, two-toned teponaztli slit drum, seed rattles, clay flute,
      // occasional conch shell horn, and evening lake ambience (crickets, frogs, parrot, far drum, water)!
      const clayFlute = [392.0, 440.0, 523.25, 587.33, 523.25, 440.0, 392.0, 329.63];

      this.musicTimer = setInterval(() => {
        if (!this.ctx || this.muted) return;
        const s = this.step++;
        const now = this.ctx.currentTime;

        // Great Huehuetl war drum pulse
        if (s % 4 === 0 || s % 8 === 6) {
          this._taiko(now, s % 8 === 0 ? 0.34 : 0.22);
        }
        // Two-toned Teponaztli wooden slit drum (low & high hollow knock)
        if (s % 2 === 1) {
          const pitch = (s % 4 === 1) ? 262 : 349;
          this._tone(pitch, 'triangle', 0.14, 0.16, now, this.musicGain, 950);
        }
        // Seed rattles (ayacachtli)
        this._noiseBurst(0.055, 0.06, 4800, 'highpass', 1.2);
        // Clay flute (tlapitzalli) pentatonic phrase
        if (s % 4 === 2) {
          const fn = clayFlute[(s >> 2) % clayFlute.length];
          this._whistle(fn, 0.82, 0.12, now);
        }
        // Booming conch shell (atecocolli) every 16 steps
        if (s % 16 === 0) {
          this._alphorn(130.81, 1.85, 0.20, now);
        }
        // Evening crickets & frogs along Lake Texcoco
        if (s % 6 === 3) {
          this._tone(3600, 'sine', 0.06, 0.025, now, this.sfxGain, 5000);
          this._tone(3650, 'sine', 0.06, 0.022, now + 0.09, this.sfxGain, 5000);
        }
        if (s % 10 === 7) {
          this._tone(165, 'sawtooth', 0.11, 0.045, now, this.sfxGain, 420);
          this._tone(195, 'sawtooth', 0.10, 0.04, now + 0.14, this.sfxGain, 460);
        }
        // Distant tropical parrot call every 22 steps & gentle lake water lap
        if (s % 22 === 13) {
          this._tone(980, 'sawtooth', 0.12, 0.055, now, this.sfxGain, 2200);
          this._tone(820, 'sawtooth', 0.14, 0.048, now + 0.16, this.sfxGain, 1900);
        }
        if (s % 9 === 4) {
          this._noiseBurst(0.42, 0.035, 520, 'bandpass', 2.0);
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
    } else if (kind === 'javelin' || kind === 'axe_throw') {
      const heavy = kind === 'axe_throw';
      this._noiseBurst(heavy ? 0.17 : 0.13, heavy ? 0.52 : 0.45, heavy ? 1500 : 2500, 'bandpass', 1.5);
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(heavy ? 240 : 480, now);
      osc.frequency.exponentialRampToValueAtTime(heavy ? 95 : 170, now + 0.14);
      g.gain.setValueAtTime(0.38, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
      osc.connect(g);
      g.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.17);
    } else if (kind === 'smg') {
      this._noiseBurst(0.09, 0.52, 1950, 'bandpass', 1.1);
      this._tone(210, 'sawtooth', 0.075, 0.34, now, this.sfxGain, 950);
    } else if (kind === 'sniper') {
      this._noiseBurst(0.42, 0.96, 1250, 'lowpass');
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(34, now + 0.28);
      g.gain.setValueAtTime(0.75, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.connect(g);
      g.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.32);
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

  playDogBark() {
    this.ensureInit();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    // Crisp synthesized double canine bark
    for (const off of [0, 0.17]) {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(360, now + off);
      osc.frequency.exponentialRampToValueAtTime(145, now + off + 0.11);
      g.gain.setValueAtTime(0.001, now + off);
      g.gain.linearRampToValueAtTime(0.36, now + off + 0.018);
      g.gain.exponentialRampToValueAtTime(0.001, now + off + 0.12);
      osc.connect(g);
      g.connect(this.sfxGain);
      osc.start(now + off);
      osc.stop(now + off + 0.13);
      this._noiseBurst(0.09, 0.28, 950, 'bandpass', 1.6);
    }
  }

  playRung() {
    this.ensureInit();
    if (!this.ctx || this.muted) return;
    const now = this.ctx.currentTime;
    this._tone(165 + Math.random() * 25, 'triangle', 0.06, 0.24, now, this.sfxGain, 700);
    this._noiseBurst(0.035, 0.14, 520, 'bandpass', 1.2);
  }

  playFootstep() {
    this.ensureInit();
    if (!this.ctx || this.muted) return;
    this._noiseBurst(0.045, 0.08, 380, 'lowpass');
  }

  /**
   * Stage 13 Item 88: Era-language voices (SpeechSynthesis when a matching locale voice exists,
   * with instant synthesized vowel-formant fallback so cries & chatter always work cleanly).
   */
  speakVoice(eraId, kind = 'spot') {
    if (this.muted) return;
    const nowMs = performance.now();
    if (this._lastVoiceMs && nowMs - this._lastVoiceMs < 900) return;
    this._lastVoiceMs = nowMs;

    const PHRASES = {
      west:        { lang: 'en', spot: ['There he is!', 'Get him!', 'Draw!'],           greet: ['Howdy, stranger.', 'Quiet day.'],     fright: ['Watch out!', 'Run!'] },
      japan:       { lang: 'ja', spot: ['Kusemono da!', 'Ike!'],                         greet: ['Konnichiwa.'],                        fright: ['Nigero!'] },
      swiss:       { lang: 'de', spot: ['Halt! Da ist er!', 'Greift an!'],               greet: ['Grüezi!', 'Guten Tag.'],              fright: ['Hilfe!'] },
      greece:      { lang: 'el', spot: ['Ekei einai!', 'Stasou!'],                       greet: ['Chaire!'],                            fright: ['Fevgete!'] },
      scandinavia: { lang: 'nb', spot: ['Der er han!', 'Til våpen!'],                    greet: ['Hei!', 'God dag.'],                   fright: ['Løp!'] },
      normandy:    { lang: 'de', spot: ['Halt! Stehen bleiben!', 'Feuer!'],              greet: ['Bonjour!', 'Courage!'],               fright: ['Au secours!'], greetLang: 'fr' },
      soviet:      { lang: 'ru', spot: ['Stoi! Kto idyot!', 'Derzhi ego!'],              greet: ['Zdravstvuyte.'],                      fright: ['Begi!'] },
      tibet:       { lang: 'zh', spot: ['Zhan zhu!', 'Zai na li!'],                      greet: ['Tashi delek.'],                       fright: ['Kuai pao!'] },
      aztec:       { lang: 'es', spot: ['¡Alto! ¡A las armas!', '¡Allí está!'],          greet: ['Niltze.'],                            fright: ['¡Cuidado!'] }
    };
    const spec = PHRASES[eraId] || PHRASES.west;
    const targetLang = (kind === 'greet' && spec.greetLang) ? spec.greetLang : spec.lang;
    const list = spec[kind] || spec.spot;
    const text = list[Math.floor(Math.random() * list.length)];

    // Try browser SpeechSynthesis only if a matching voice is installed
    try {
      if (typeof window !== 'undefined' && window.speechSynthesis && kind !== 'pain') {
        const voices = window.speechSynthesis.getVoices();
        const match = voices && voices.find((v) => v.lang && v.lang.toLowerCase().startsWith(targetLang));
        if (match && !window.speechSynthesis.speaking) {
          const u = new SpeechSynthesisUtterance(text);
          u.voice = match;
          u.lang = match.lang;
          u.volume = this.voicesGain ? Math.min(1, this.voicesGain.gain.value) : 0.75;
          u.rate = kind === 'spot' ? 1.12 : 0.98;
          window.speechSynthesis.speak(u);
          return;
        }
      }
    } catch {}

    // Fallback: synthesized formant vowel cry/chatter via Web Audio!
    this.ensureInit();
    if (!this.ctx || !this.voicesGain) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const g = this.ctx.createGain();
    osc.type = 'sawtooth';
    const baseF = kind === 'pain' ? 210 : kind === 'fright' ? 320 : kind === 'greet' ? 170 : 145;
    osc.frequency.setValueAtTime(baseF, now);
    osc.frequency.exponentialRampToValueAtTime(kind === 'pain' ? baseF * 0.62 : baseF * 1.18, now + 0.22);
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(kind === 'fright' ? 1200 : 750, now);
    filter.Q.value = 4.2;
    g.gain.setValueAtTime(0.001, now);
    g.gain.linearRampToValueAtTime(0.18, now + 0.03);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.26);
    osc.connect(filter);
    filter.connect(g);
    g.connect(this.voicesGain);
    osc.start(now);
    osc.stop(now + 0.28);
  }

  playWoodKnock(gainScale = 1.0) {
    this.ensureInit();
    if (!this.ctx || this.muted) return;
    const now = this.ctx.currentTime;
    const vol = Math.max(0.02, Math.min(0.6, 0.35 * gainScale));
    this._tone(440, 'triangle', 0.055, vol, now, this.sfxGain, 1200);
    this._tone(215, 'sine', 0.08, vol * 0.9, now, this.sfxGain, 800);
  }
}
