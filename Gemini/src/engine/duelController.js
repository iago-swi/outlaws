import * as THREE from 'three';
import { DuelConnection, generateDuelCode, normalizeDuelCode, buildInviteUrl } from './duelNet.js';
import { ERA_HEROES } from '../entities/heroes.js';
import { ERA_VILLAINS, getFighterById, buildFighterFigure } from '../entities/villains.js';
import { RemoteFighter } from '../entities/remoteFighter.js';

export const DUEL_RULES = {
  first3: {
    name: 'First to 3 rounds',
    desc: 'Each kill ends a round; both start again with full health at opposite ends and swap ends every round.'
  },
  onelife: {
    name: 'One life',
    desc: 'Single showdown — the first kill decides the duel.'
  },
  timed5: {
    name: '5 minutes, most kills',
    desc: 'Five minutes on the clock; a slain fighter returns 3 seconds later at the end farther from the opponent.'
  }
};

const COMPASS_CARDINALS = [
  { label: 'N', angle: 0 },
  { label: 'E', angle: Math.PI * 0.5 },
  { label: 'S', angle: Math.PI },
  { label: 'W', angle: -Math.PI * 0.5 }
];

function wrapAngle(a) {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}

function formatClock(sec) {
  const s = Math.max(0, Math.ceil(sec));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`;
}

export class DuelController {
  constructor(game) {
    this.game = game;
    this.net = null;
    this.active = false;
    this.phase = 'idle'; // 'idle' | 'lobby' | 'select' | 'playing' | 'round_wait' | 'ended'
    this.role = null; // 'host' | 'guest'

    // Match settings chosen by host
    this.config = {
      levelIndex: 0,
      rule: 'first3',
      enemiesOpt: 'none' // 'none' | 'few'
    };

    // Fighter selection state
    this.myFighterId = null;
    this.myLocked = false;
    this.oppFighterId = null;
    this.oppLocked = false;

    // Live match state
    this.myScore = 0;
    this.oppScore = 0;
    this.roundNum = 1;
    this.timeLeft = 300;
    this.myDead = false;
    this.respawnTimer = 0;
    this._lastWallMs = performance.now();
    this.roundResetTimer = null;
    this.remoteFighter = null;
    this.spawnEndA = new THREE.Vector3();
    this.spawnEndB = new THREE.Vector3();
    this.stateSyncAccum = 0;
    this.aiSyncAccum = 0;
    this._lastWallMs = 0;
    this._clockInterval = null;

    this._cacheDom();
    this._bindEvents();
  }

  _cacheDom() {
    this.dom = {
      lobbyScreen: document.getElementById('duel-lobby-screen'),
      selectScreen: document.getElementById('duel-select-screen'),
      statusBar: document.getElementById('duel-status-bar'),
      levelSelect: document.getElementById('duel-level-select'),
      ruleSelect: document.getElementById('duel-rule-select'),
      enemiesSelect: document.getElementById('duel-enemies-select'),
      inviteBox: document.getElementById('duel-invite-box'),
      codeDisplay: document.getElementById('duel-code-display'),
      inviteUrl: document.getElementById('duel-invite-url'),
      joinCodeInput: document.getElementById('duel-join-code'),
      backupDetails: document.getElementById('duel-backup-details'),
      manualHostOffer: document.getElementById('manual-host-offer'),
      manualHostAnswer: document.getElementById('manual-host-answer'),
      manualGuestOffer: document.getElementById('manual-guest-offer'),
      manualGuestAnswer: document.getElementById('manual-guest-answer'),

      stageLevel: document.getElementById('duel-stage-level'),
      ruleTitle: document.getElementById('duel-rule-title'),
      ruleDesc: document.getElementById('duel-rule-desc'),
      heroesRow: document.getElementById('duel-heroes-row'),
      villainsRow: document.getElementById('duel-villains-row'),
      previewRole: document.getElementById('duel-preview-role'),
      previewName: document.getElementById('duel-preview-name'),
      previewBio: document.getElementById('duel-preview-bio'),
      previewStrength: document.getElementById('duel-preview-strength'),
      readyStatus: document.getElementById('duel-ready-status'),
      btnLock: document.getElementById('btn-duel-lock'),

      hudTop: document.getElementById('duel-hud-top'),
      scoreline: document.getElementById('duel-scoreline'),
      compassTrack: document.getElementById('compass-track'),
      respawnBanner: document.getElementById('duel-respawn-banner'),
      unlockBar: document.getElementById('duel-unlock-bar')
    };
  }

  _bindEvents() {
    document.getElementById('btn-duel-open').addEventListener('click', () => {
      this.game.sound.ensureInit();
      this.openLobby();
    });

    document.getElementById('btn-duel-lobby-back').addEventListener('click', () => {
      this.leaveDuelToTitle();
    });

    document.getElementById('btn-duel-select-leave').addEventListener('click', () => {
      this.leaveDuelToTitle();
    });

    document.getElementById('btn-duel-resume').addEventListener('click', () => {
      this.dom.unlockBar.classList.add('hidden');
      this.game._requestLock();
    });

    document.getElementById('btn-duel-leave').addEventListener('click', () => {
      this.leaveDuelToTitle();
    });

    // Host level dropdown previews that level live in background!
    this.dom.levelSelect.addEventListener('change', () => {
      const idx = parseInt(this.dom.levelSelect.value, 10) || 0;
      this.config.levelIndex = idx;
      this.game.loadLevel(idx, true);
    });
    this.dom.ruleSelect.addEventListener('change', () => {
      this.config.rule = this.dom.ruleSelect.value;
    });
    this.dom.enemiesSelect.addEventListener('change', () => {
      this.config.enemiesOpt = this.dom.enemiesSelect.value;
    });

    // Primary Method A: PeerJS 5-letter Invite Link
    document.getElementById('btn-duel-host').addEventListener('click', () => {
      this.startHostPeerJS();
    });

    document.getElementById('btn-duel-copy-link').addEventListener('click', () => {
      const url = this.dom.inviteUrl.value;
      if (navigator.clipboard && url) {
        navigator.clipboard.writeText(url).catch(() => {});
      }
      this.dom.inviteUrl.select();
      this.game.toast('INVITE LINK COPIED');
    });

    document.getElementById('btn-duel-join').addEventListener('click', () => {
      const code = normalizeDuelCode(this.dom.joinCodeInput.value);
      this.dom.joinCodeInput.value = code;
      this.startJoinPeerJS(code);
    });

    this.dom.joinCodeInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const code = normalizeDuelCode(this.dom.joinCodeInput.value);
        this.startJoinPeerJS(code);
      }
    });

    // Backup Method B: Copy-Paste Manual WebRTC Codes (zero external service)
    document.getElementById('btn-manual-make-offer').addEventListener('click', async () => {
      try {
        this._readHostConfig();
        this._initNet('host');
        const offer = await this.net.createManualOffer();
        this.dom.manualHostOffer.value = offer;
      } catch {
        this._setStatus('failed', 'Could not generate offer code.');
      }
    });

    document.getElementById('btn-manual-copy-offer').addEventListener('click', () => {
      const v = this.dom.manualHostOffer.value;
      if (navigator.clipboard && v) navigator.clipboard.writeText(v).catch(() => {});
      this.dom.manualHostOffer.select();
      this.game.toast('OFFER CODE COPIED');
    });

    document.getElementById('btn-manual-apply-answer').addEventListener('click', async () => {
      try {
        const ans = this.dom.manualHostAnswer.value.trim();
        if (!ans) return;
        await this.net.applyManualAnswer(ans);
      } catch {
        this._setStatus('failed', 'Invalid reply code. Make sure you pasted the entire reply code.');
      }
    });

    document.getElementById('btn-manual-make-answer').addEventListener('click', async () => {
      try {
        const offer = this.dom.manualGuestOffer.value.trim();
        if (!offer) return;
        this._initNet('guest');
        const answer = await this.net.acceptManualOffer(offer);
        this.dom.manualGuestAnswer.value = answer;
      } catch {
        this._setStatus('failed', 'Invalid offer code. Paste the full host offer code.');
      }
    });

    document.getElementById('btn-manual-copy-answer').addEventListener('click', () => {
      const v = this.dom.manualGuestAnswer.value;
      if (navigator.clipboard && v) navigator.clipboard.writeText(v).catch(() => {});
      this.dom.manualGuestAnswer.select();
      this.game.toast('REPLY CODE COPIED');
    });

    // Fighter Selection Lock-in
    this.dom.btnLock.addEventListener('click', () => {
      this.lockMyFighter();
    });
  }

  _readHostConfig() {
    this.config.levelIndex = parseInt(this.dom.levelSelect.value, 10) || 0;
    this.config.rule = this.dom.ruleSelect.value || 'first3';
    this.config.enemiesOpt = this.dom.enemiesSelect.value || 'none';
  }

  _setStatus(state, text) {
    this.dom.statusBar.textContent = text;
    this.dom.statusBar.className = `duel-status-bar status-${state}`;
    if (state === 'failed') {
      this.dom.backupDetails.open = true;
    }
  }

  openLobby(autoJoinCode = '') {
    this.active = true;
    this.phase = 'lobby';
    this.game.state = 'duel_lobby';
    this.game.forceDisablePracticeForDuel();
    this.game.setScope(false);
    if (document.pointerLockElement) document.exitPointerLock();

    this.game.dom.titleScreen.classList.add('hidden');
    this.game.dom.introCard.classList.add('hidden');
    this.game.dom.pauseScreen.classList.add('hidden');
    this.game.dom.endScreen.classList.add('hidden');
    this.game.dom.hud.classList.add('hidden');
    this.game.dom.crosshair.classList.add('hidden');
    this.dom.selectScreen.classList.add('hidden');
    this.dom.unlockBar.classList.add('hidden');
    this.dom.lobbyScreen.classList.remove('hidden');

    this.dom.levelSelect.value = String(this.game.levelIndex);
    this.config.levelIndex = this.game.levelIndex;
    this.dom.inviteBox.classList.add('hidden');

    if (autoJoinCode) {
      const code = normalizeDuelCode(autoJoinCode);
      this.dom.joinCodeInput.value = code;
      this.startJoinPeerJS(code);
    } else {
      this._setStatus('idle', 'Choose Host or Join to connect directly via WebRTC.');
    }
  }

  _initNet(role) {
    if (this.net) this.net.close();
    this.role = role;
    this.net = new DuelConnection({
      onStatus: (state, msg) => this._setStatus(state, msg),
      onConnected: () => this._onConnected(),
      onMessage: (msg) => this._onMessage(msg),
      onDisconnect: () => this._onOpponentDisconnected()
    });
  }

  startHostPeerJS(customCode) {
    this._readHostConfig();
    this._initNet('host');
    const code = this.net.hostWithCode(customCode || generateDuelCode());
    this.dom.codeDisplay.textContent = code;
    this.dom.inviteUrl.value = buildInviteUrl(code);
    this.dom.inviteBox.classList.remove('hidden');
  }

  startJoinPeerJS(code) {
    const clean = normalizeDuelCode(code);
    if (clean.length !== 5) {
      this._setStatus('failed', 'Please enter a valid 5-letter duel code.');
      return;
    }
    this._initNet('guest');
    this.net.joinWithCode(clean);
  }

  _onConnected() {
    if (this.role === 'host') {
      // Send authoritative match config to guest & enter fighter selection
      this.net.send({ type: 'cfg', config: this.config });
      this.openFighterSelect();
    } else {
      this._setStatus('connected', 'Connected! Waiting for match settings from host…');
      // Request config cleanly in case host opened slightly before guest's handler attached
      this.net.send({ type: 'hello' });
    }
  }

  _onOpponentDisconnected() {
    if (!this.active || this.phase === 'ended') return;
    if (this.phase === 'playing' || this.phase === 'round_wait' || this.phase === 'select') {
      this._showDuelEnd('left');
    } else {
      this._setStatus('disconnected', 'Connection lost.');
    }
  }

  // =========================================================================
  // FIGHTER SELECTION (Gold ★ Heroes row + Red ☠ Villains row)
  // =========================================================================

  openFighterSelect() {
    this.phase = 'select';
    this.game.state = 'duel_select';
    this.myLocked = false;
    this.oppLocked = false;
    this.oppFighterId = null;

    this.dom.lobbyScreen.classList.add('hidden');
    this.dom.selectScreen.classList.remove('hidden');

    // Load the chosen duel level behind the fighter selection screen!
    this.game.loadLevel(this.config.levelIndex, true);
    const meta = this.game.getLevelMeta(this.config.levelIndex);
    const era = meta.id;
    const heroes = ERA_HEROES[era] || [];
    const villains = ERA_VILLAINS[era] || [];

    this.dom.stageLevel.textContent = `${meta.act} · ${meta.title}`;
    const rInfo = DUEL_RULES[this.config.rule] || DUEL_RULES.first3;
    const enemyTxt = this.config.enemiesOpt === 'few' ? ' · 6 computer enemies active' : ' · No computer enemies';
    this.dom.ruleTitle.textContent = rInfo.name + enemyTxt;
    this.dom.ruleDesc.textContent = rInfo.desc;

    const renderCard = (f) => `
      <button type="button" class="duel-fighter-card ${f.isVillain ? 'villain-card' : ''}" data-fid="${f.id}">
        <div class="dfc-head">
          <span class="${f.isVillain ? 'dfc-icon-villain' : 'dfc-icon-hero'}">${f.isVillain ? '☠' : '★'}</span>
          <span>${f.name}</span>
        </div>
        <div class="dfc-bio">${f.bio}</div>
        <div class="dfc-strength">${f.strengthDesc}</div>
      </button>
    `;

    this.dom.heroesRow.innerHTML = heroes.map(renderCard).join('');
    this.dom.villainsRow.innerHTML = villains.map(renderCard).join('');

    const bindRow = (container) => {
      container.querySelectorAll('.duel-fighter-card').forEach((btn) => {
        const fid = btn.dataset.fid;
        btn.addEventListener('mouseenter', () => {
          if (!this.myLocked) this.previewFighter(fid);
        });
        btn.addEventListener('click', () => {
          if (!this.myLocked) this.previewFighter(fid);
        });
      });
    };
    bindRow(this.dom.heroesRow);
    bindRow(this.dom.villainsRow);

    this.dom.btnLock.disabled = false;
    this.dom.btnLock.textContent = 'LOCK IN FIGHTER ▶';
    this.dom.readyStatus.textContent = 'Select a hero or villain and lock in your choice.';

    this.game.weaponHolder.visible = false;
    this.game.heroStage.visible = true;
    this.previewFighter(heroes[0].id);
    this.game.sound.startMusic(meta.musicTheme);
  }

  previewFighter(fighterId) {
    const era = this.game.getLevelMeta(this.config.levelIndex).id;
    const f = getFighterById(era, fighterId);
    if (!f) return;
    this.myFighterId = f.id;

    this.dom.selectScreen.querySelectorAll('.duel-fighter-card').forEach((c) => {
      c.classList.toggle('selected', c.dataset.fid === f.id);
    });

    this.dom.previewRole.textContent = f.isVillain ? '☠ VILLAIN' : '★ HERO';
    this.dom.previewRole.classList.toggle('is-villain', !!f.isVillain);
    this.dom.previewName.textContent = f.name;
    this.dom.previewBio.textContent = f.bio;
    this.dom.previewStrength.textContent = f.strengthDesc;

    while (this.game.heroFigureHolder.children.length > 0) {
      this.game.heroFigureHolder.remove(this.game.heroFigureHolder.children[0]);
    }
    const fig = buildFighterFigure(f.id, era, true);
    this.game.heroFigureHolder.add(fig);
    this.game.heroFigureHolder.rotation.y = 0.25;
    this.game.heroStagePop = 0.84;
  }

  lockMyFighter() {
    if (this.myLocked || !this.myFighterId) return;
    this.myLocked = true;
    this.dom.btnLock.disabled = true;
    this.dom.btnLock.textContent = 'LOCKED IN ✓';
    this.net.send({ type: 'pick', fighterId: this.myFighterId });
    this._updateSelectStatus();
    this._tryStartDuel();
  }

  _updateSelectStatus() {
    const era = this.game.getLevelMeta(this.config.levelIndex).id;
    const parts = [];
    if (this.myLocked && this.myFighterId) {
      const me = getFighterById(era, this.myFighterId);
      parts.push(`You are ${me.name}, a ${me.isVillain ? 'villain' : 'hero'}.${this.oppLocked ? '' : ' Waiting for your opponent…'}`);
    }
    if (this.oppLocked && this.oppFighterId) {
      const opp = getFighterById(era, this.oppFighterId);
      parts.push(`Your opponent is ${opp.name}, a ${opp.isVillain ? 'villain' : 'hero'}.`);
    }
    if (parts.length > 0) {
      this.dom.readyStatus.textContent = parts.join(' ');
    }
  }

  _tryStartDuel() {
    if (this.myLocked && this.oppLocked && this.phase === 'select') {
      if (this.role === 'host') {
        this.net.send({ type: 'start' });
        this._beginMatch();
      }
    }
  }

  // =========================================================================
  // LIVE DUEL MATCH LIFECYCLE
  // =========================================================================

  _beginMatch() {
    this.phase = 'playing';
    this.myScore = 0;
    this.oppScore = 0;
    this.roundNum = 1;
    this.timeLeft = 300;
    this.myDead = false;
    this.respawnTimer = 0;
    this._lastWallMs = performance.now();
    clearTimeout(this.roundResetTimer);

    const meta = this.game.getLevelMeta(this.config.levelIndex);
    const era = meta.id;
    const myFighter = getFighterById(era, this.myFighterId);
    const oppFighter = getFighterById(era, this.oppFighterId);

    this.game.forceDisablePracticeForDuel();
    this.game.heroStage.visible = false;
    this.dom.selectScreen.classList.add('hidden');
    this.dom.lobbyScreen.classList.add('hidden');
    this.dom.unlockBar.classList.add('hidden');
    this.dom.respawnBanner.classList.add('hidden');

    // Load level in Duel mode (passes custom fighter & 0 or 6 ordinary AI enemies)
    this.game.loadLevel(this.config.levelIndex, false, {
      duelMode: true,
      duelRole: this.role,
      duelEnemiesOpt: this.config.enemiesOpt,
      fighter: myFighter
    });

    // Two opposite ends of the map: normal spawn (End A) and boss end (End B)
    this.spawnEndA.copy(meta.spawnPos);
    const bossPos = this.game.duelFarSpawnPos || new THREE.Vector3(0, 0, -28);
    this.spawnEndB.copy(bossPos);
    this.spawnEndA.y = this.game.collision.getFloorHeight(this.spawnEndA.x, this.spawnEndA.z, this.spawnEndA.y);
    this.spawnEndB.y = this.game.collision.getFloorHeight(this.spawnEndB.x, this.spawnEndB.z, this.spawnEndB.y);

    // Spawn Remote Fighter
    const myStart = this._getMySpawnForRound(1);
    const oppStart = this._getOppSpawnForRound(1);
    this.remoteFighter = new RemoteFighter(oppFighter, era, oppStart.pos);
    this.remoteFighter.maxHp = this._fighterMaxHp(oppFighter);
    this.remoteFighter.hp = this.remoteFighter.maxHp;
    this.remoteFighter.teleport(oppStart.pos, oppStart.yaw);
    this.game.worldGroup.add(this.remoteFighter.root);

    // Place local player
    this._placePlayer(myStart.pos, myStart.yaw);

    // Show Duel HUD & Compass (hide SP mission box & bounty)
    this.game.state = 'playing';
    this.game.dom.hud.classList.remove('hidden');
    this.game.dom.crosshair.classList.remove('hidden');
    this.game.weaponHolder.visible = true;
    document.getElementById('hud-sp-left').classList.add('hidden');
    document.getElementById('hud-score-box').classList.add('hidden');
    document.getElementById('hud-esc-hint').textContent = '[ESC] Unlock Mouse';
    this.dom.hudTop.classList.remove('hidden');

    this._updateScoreline();
    clearInterval(this._clockInterval);
    this._clockInterval = setInterval(() => this._tickWallTimers(), 200);
    this.game.sound.startMusic(meta.musicTheme);
    this.game._requestLock();
    this.game.showCallout(`DUEL: ${myFighter.name.toUpperCase()} VS ${oppFighter.name.toUpperCase()}`);
  }

  _fighterMaxHp(f) {
    const mods = (f && f.mods) || {};
    if (mods.fixedMaxHp) return mods.fixedMaxHp;
    return Math.round(100 * (mods.maxHpMult || 1));
  }

  _getMySpawnForRound(round) {
    const swap = (round % 2) === 0;
    const useA = this.role === 'host' ? !swap : swap;
    const pos = (useA ? this.spawnEndA : this.spawnEndB).clone();
    const other = useA ? this.spawnEndB : this.spawnEndA;
    // Camera faces -Z at yaw=0, so face toward `other`
    const yaw = Math.atan2(-(other.x - pos.x), -(other.z - pos.z));
    return { pos, yaw };
  }

  _getOppSpawnForRound(round) {
    const swap = (round % 2) === 0;
    const useA = this.role === 'host' ? swap : !swap;
    const pos = (useA ? this.spawnEndA : this.spawnEndB).clone();
    const other = useA ? this.spawnEndB : this.spawnEndA;
    const yaw = Math.atan2(-(other.x - pos.x), -(other.z - pos.z));
    return { pos, yaw };
  }

  _placePlayer(pos, yaw) {
    this.game.player.pos.copy(pos);
    this.game.player.vel.set(0, 0, 0);
    this.game.player.yaw = yaw;
    this.game.player.pitch = 0;
    this.game.player.hp = this.game.player.maxHp;
    this.game.player.stamina = 100;
    this.game.player.grounded = true;
    this.game.dom.damageOverlay.style.opacity = '0';
    this.game.camera.rotation.set(0, yaw, 0, 'YXZ');
    // Refill weapons cleanly on round start / respawn
    for (const w of this.game.weapons) {
      w.mag = w.magSize;
      w.curReserve = w.reserve;
    }
    this.game.reloading = false;
    this.game._updateHud();
  }

  _updateScoreline() {
    if (!this.remoteFighter) return;
    const oppName = this.remoteFighter.name;
    let suffix = '';
    if (this.config.rule === 'first3') {
      suffix = `round ${this.roundNum}`;
    } else if (this.config.rule === 'onelife') {
      suffix = 'one life';
    } else {
      suffix = formatClock(this.timeLeft);
    }
    this.dom.scoreline.textContent = `You ${this.myScore}–${this.oppScore} ${oppName} · ${suffix}`;
  }

  // =========================================================================
  // COMBAT HOOKS CALLED FROM src/main.js
  // =========================================================================

  onLocalShot(origin, endPt, sound, tracerColor) {
    if (!this.isPlaying()) return;
    this.net.send({
      type: 'shot',
      o: [origin.x, origin.y, origin.z],
      e: [endPt.x, endPt.y, endPt.z],
      sound,
      color: tracerColor || 0xffe49e
    });
  }

  onLocalMelee(origin, forward, color) {
    if (!this.isPlaying()) return;
    this.net.send({
      type: 'melee',
      o: [origin.x, origin.y, origin.z],
      f: [forward.x, forward.y, forward.z],
      color: color || 0xffffff
    });
  }

  onLocalThrow(pos, vel, color, radius) {
    if (!this.isPlaying()) return;
    this.net.send({
      type: 'throw',
      p: [pos.x, pos.y, pos.z],
      v: [vel.x, vel.y, vel.z],
      color,
      radius
    });
  }

  /**
   * Called when local player hits the RemoteFighter (weapons do 60% damage vs player!)
   */
  onLocalHitOpponent(rawDamage, isHead, hitPoint) {
    if (!this.isPlaying() || !this.remoteFighter || !this.remoteFighter.alive) return;
    const pvpDamage = Math.max(1, Math.round(rawDamage * 0.60));
    this.game.particles.spawnImpact(hitPoint, isHead ? 0xffd24d : 0xd93426, isHead ? 14 : 9, 7);
    this.game.sound.playHit(isHead);
    this.game._flashHitmarker(isHead);
    if (isHead) this.game.showCallout('HEADSHOT!');
    this.net.send({
      type: 'hit',
      dmg: pvpDamage,
      head: !!isHead
    });
  }

  /**
   * Called when Guest hits a computer enemy — forward to Host for authoritative resolution
   */
  onGuestHitAI(enemyIdx, damage, isHead, hitPoint) {
    if (!this.isPlaying() || this.role !== 'guest') return;
    this.game.particles.spawnImpact(hitPoint, isHead ? 0xffd24d : 0xd93426, 9, 6);
    this.game.sound.playHit(isHead);
    this.game._flashHitmarker(isHead);
    this.net.send({
      type: 'ai_hit',
      idx: enemyIdx,
      dmg: Math.round(damage),
      head: !!isHead
    });
  }

  /**
   * Called when local player HP reaches 0 in Duel Mode (from opponent OR computer enemy)
   */
  onLocalPlayerDied(source = 'opponent') {
    if (!this.isPlaying() || this.myDead) return;
    this.myDead = true;
    this.game.setScope(false);
    this.net.send({ type: 'died', source });
    this._recordKill('opp');
  }

  _recordKill(winner) {
    if (this.phase === 'ended') return;
    if (winner === 'me') this.myScore++;
    else this.oppScore++;
    this._updateScoreline();

    if (this.config.rule === 'onelife') {
      this._showDuelEnd(winner === 'me' ? 'win' : 'lose');
      return;
    }

    if (this.config.rule === 'first3') {
      if (this.myScore >= 3) {
        this._showDuelEnd('win');
        return;
      }
      if (this.oppScore >= 3) {
        this._showDuelEnd('lose');
        return;
      }
      // Next round after brief intermission (Host coordinates round_reset cleanly)
      this.phase = 'round_wait';
      this.game.showCallout(winner === 'me' ? `ROUND ${this.roundNum} WON!` : `ROUND ${this.roundNum} LOST`);
      if (this.role === 'host') {
        clearTimeout(this.roundResetTimer);
        this.roundResetTimer = setTimeout(() => {
          if (!this.active || this.phase === 'ended') return;
          const nextRound = this.roundNum + 1;
          this.net.send({ type: 'round_reset', round: nextRound });
          this._startNextRound(nextRound);
        }, 2300);
      }
      return;
    }

    // Timed 5-minute mode: if local player died, start 3-second respawn countdown!
    if (this.config.rule === 'timed5' && winner === 'opp') {
      this.respawnTimer = 3.0;
      this.dom.respawnBanner.classList.remove('hidden');
      this.dom.respawnBanner.textContent = 'Respawning in 3…';
    }
  }

  _startNextRound(round) {
    this.roundNum = round;
    this.phase = 'playing';
    this.myDead = false;
    this.dom.respawnBanner.classList.add('hidden');

    const myStart = this._getMySpawnForRound(round);
    const oppStart = this._getOppSpawnForRound(round);
    this._placePlayer(myStart.pos, myStart.yaw);
    if (this.remoteFighter) {
      this.remoteFighter.hp = this.remoteFighter.maxHp;
      this.remoteFighter.teleport(oppStart.pos, oppStart.yaw);
    }
    this._updateScoreline();
    this.game.showCallout(`ROUND ${round} — FIGHT!`);
  }

  _respawnTimedLocal() {
    this.myDead = false;
    this.respawnTimer = 0;
    this.dom.respawnBanner.classList.add('hidden');
    // Pick whichever end (A or B) is farther from the opponent!
    const oppPos = this.remoteFighter ? this.remoteFighter.root.position : new THREE.Vector3();
    const dA = this.spawnEndA.distanceTo(oppPos);
    const dB = this.spawnEndB.distanceTo(oppPos);
    const pickA = dA >= dB;
    const pos = (pickA ? this.spawnEndA : this.spawnEndB).clone();
    const other = pickA ? this.spawnEndB : this.spawnEndA;
    const yaw = Math.atan2(-(other.x - pos.x), -(other.z - pos.z));
    this._placePlayer(pos, yaw);
    this.game.toast('BACK IN THE FIGHT');
  }

  _showDuelEnd(outcome) {
    this.phase = 'ended';
    clearTimeout(this.roundResetTimer);
    clearInterval(this._clockInterval);
    this._clockInterval = null;
    this.dom.respawnBanner.classList.add('hidden');
    this.dom.unlockBar.classList.add('hidden');
    this.dom.hudTop.classList.add('hidden');
    this.dom.selectScreen.classList.add('hidden');
    this.dom.lobbyScreen.classList.add('hidden');

    const g = this.game;
    g.state = 'ended';
    g.setScope(false);
    if (document.pointerLockElement) document.exitPointerLock();
    g.dom.hud.classList.add('hidden');
    g.dom.crosshair.classList.add('hidden');
    g.dom.endScreen.classList.remove('hidden');
    if (g.dom.endPracticeNote) g.dom.endPracticeNote.classList.add('hidden');

    const oppName = this.remoteFighter ? this.remoteFighter.name : 'Opponent';
    const scoreStr = `You ${this.myScore} – ${this.oppScore} ${oppName}`;

    if (outcome === 'left') {
      g.dom.endEyebrow.textContent = 'DUEL ENDED';
      g.dom.endTitle.textContent = 'Your opponent left';
      g.dom.endSummary.textContent = `The connection closed (${scoreStr}).`;
    } else if (outcome === 'win') {
      g.dom.endEyebrow.textContent = 'DUEL COMPLETE';
      g.dom.endTitle.textContent = 'You win the duel';
      g.dom.endSummary.textContent = `Final score: ${scoreStr}.`;
    } else if (outcome === 'lose') {
      g.dom.endEyebrow.textContent = 'DUEL COMPLETE';
      g.dom.endTitle.textContent = 'You lose the duel';
      g.dom.endSummary.textContent = `Final score: ${scoreStr}.`;
    } else {
      g.dom.endEyebrow.textContent = 'TIME UP';
      g.dom.endTitle.textContent = 'A draw';
      g.dom.endSummary.textContent = `Final score: ${scoreStr}.`;
    }

    const rInfo = DUEL_RULES[this.config.rule] || DUEL_RULES.first3;
    g.dom.endStats.innerHTML = `
      <div class="stat-card"><div class="stat-val">${this.myScore}</div><div class="stat-lbl">YOUR KILLS</div></div>
      <div class="stat-card"><div class="stat-val">${this.oppScore}</div><div class="stat-lbl">OPPONENT</div></div>
      <div class="stat-card"><div class="stat-val">${rInfo.name}</div><div class="stat-lbl">RULES</div></div>
    `;

    // Hide SP-only end-screen buttons; leave Main Menu clearly visible
    g.dom.btnNextLevel.classList.add('hidden');
    document.getElementById('btn-end-restart').classList.add('hidden');
    document.getElementById('btn-end-change-hero').classList.add('hidden');
  }

  leaveDuelToTitle() {
    clearTimeout(this.roundResetTimer);
    clearInterval(this._clockInterval);
    this._clockInterval = null;
    if (this.net) {
      this.net.close();
      this.net = null;
    }
    this.active = false;
    this.phase = 'idle';
    this.remoteFighter = null;
    this.myDead = false;
    this.dom.lobbyScreen.classList.add('hidden');
    this.dom.selectScreen.classList.add('hidden');
    this.dom.hudTop.classList.add('hidden');
    this.dom.respawnBanner.classList.add('hidden');
    this.dom.unlockBar.classList.add('hidden');
    // Restore single-player HUD & end-screen buttons cleanly
    document.getElementById('hud-sp-left').classList.remove('hidden');
    document.getElementById('hud-score-box').classList.remove('hidden');
    document.getElementById('hud-esc-hint').textContent = '[ESC] Menu';
    document.getElementById('btn-end-restart').classList.remove('hidden');
    document.getElementById('btn-end-change-hero').classList.remove('hidden');
    // Clean ?duel= query param from address bar
    try {
      const u = new URL(window.location.href);
      if (u.searchParams.has('duel')) {
        u.searchParams.delete('duel');
        window.history.replaceState({}, '', u.pathname + u.search);
      }
    } catch {}
    this.game.returnToTitle();
  }

  isPlaying() {
    return this.active && (this.phase === 'playing' || this.phase === 'round_wait');
  }

  // =========================================================================
  // INCOMING P2P WEBRTC MESSAGES
  // =========================================================================

  _onMessage(msg) {
    if (!this.active) return;

    if (msg.type === 'hello' && this.role === 'host') {
      this.net.send({ type: 'cfg', config: this.config });
      if (this.myLocked && this.myFighterId) {
        this.net.send({ type: 'pick', fighterId: this.myFighterId });
      }
      return;
    }

    if (msg.type === 'cfg' && this.role === 'guest') {
      this.config = { ...this.config, ...msg.config };
      if (this.phase !== 'select' && this.phase !== 'playing') {
        this.openFighterSelect();
      }
      return;
    }

    if (msg.type === 'pick') {
      this.oppFighterId = msg.fighterId;
      this.oppLocked = true;
      this._updateSelectStatus();
      this._tryStartDuel();
      return;
    }

    if (msg.type === 'start' && this.phase === 'select') {
      this._beginMatch();
      return;
    }

    if (msg.type === 'state' && this.remoteFighter) {
      this.remoteFighter.setState(msg);
      return;
    }

    if (msg.type === 'shot' && this.remoteFighter) {
      this.remoteFighter.triggerFireVisual();
      const o = new THREE.Vector3(msg.o[0], msg.o[1], msg.o[2]);
      const e = new THREE.Vector3(msg.e[0], msg.e[1], msg.e[2]);
      this.game.particles.spawnTracer(o, e, msg.color || 0xffe49e, 0.1);
      if (msg.sound) this.game.sound.playShot(msg.sound);
      return;
    }

    if (msg.type === 'melee' && this.remoteFighter) {
      this.remoteFighter.triggerMeleeVisual();
      const o = new THREE.Vector3(msg.o[0], msg.o[1], msg.o[2]);
      const f = new THREE.Vector3(msg.f[0], msg.f[1], msg.f[2]);
      const r = new THREE.Vector3().crossVectors(f, new THREE.Vector3(0, 1, 0)).normalize();
      this.game.particles.spawnSlashArc(o, f, r, msg.color || 0xffffff);
      this.game.sound.playShot('slash');
      return;
    }

    if (msg.type === 'throw' && this.remoteFighter) {
      const p = new THREE.Vector3(msg.p[0], msg.p[1], msg.p[2]);
      const v = new THREE.Vector3(msg.v[0], msg.v[1], msg.v[2]);
      this.game.sound.playShot('throw');
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.16, 8, 8),
        new THREE.MeshBasicMaterial({ color: msg.color || 0xd93622 })
      );
      mesh.position.copy(p);
      this.game.worldGroup.add(mesh);
      // Visual + local splash damage (60% PvP) from opponent's thrown explosive
      this.game.playerThrowables.push({
        mesh, vel: v, fuse: 1.65, damage: 145, radius: msg.radius || 7.5, fromRemote: true
      });
      return;
    }

    if (msg.type === 'hit' && this.phase === 'playing' && !this.myDead) {
      this.game._damagePlayer(msg.dmg, 'opponent');
      return;
    }

    if (msg.type === 'died') {
      if (this.remoteFighter) this.remoteFighter.setState({ alive: false, hp: 0 });
      this._recordKill('me');
      return;
    }

    if (msg.type === 'round_reset') {
      this._startNextRound(msg.round);
      return;
    }

    if (msg.type === 'time_end') {
      const res = this.myScore > this.oppScore ? 'win' : this.myScore < this.oppScore ? 'lose' : 'draw';
      this._showDuelEnd(res);
      return;
    }

    // Host-authoritative AI sync messages
    if (msg.type === 'ai_snap' && this.role === 'guest') {
      this._applyAISnapOnGuest(msg.list || []);
      return;
    }

    if (msg.type === 'ai_shot' && this.role === 'guest') {
      const m = new THREE.Vector3(msg.m[0], msg.m[1], msg.m[2]);
      const t = new THREE.Vector3(msg.t[0], msg.t[1], msg.t[2]);
      this.game.spawnDuelAIProjectile(m, t, msg.color, msg.dmg);
      return;
    }

    if (msg.type === 'ai_hit' && this.role === 'host') {
      const enemy = this.game.enemies[msg.idx];
      if (enemy && enemy.alive) {
        this.game._damageEnemy(enemy, msg.dmg, !!msg.head, enemy.mesh.position.clone().add(new THREE.Vector3(0, 1.2, 0)));
      }
      return;
    }
  }

  // =========================================================================
  // PER-FRAME DUEL UPDATE (Sync, Timed Clock, Respawn, Compass, AI Sync)
  // =========================================================================

  update(dt) {
    if (!this.isPlaying()) return;

    // 1. Update RemoteFighter smooth interpolation & animations
    if (this.remoteFighter) {
      this.remoteFighter.update(dt, this.game.player.pos);
    }

    // 2. Broadcast local player state at ~20 Hz
    this.stateSyncAccum += dt;
    if (this.stateSyncAccum >= 0.05) {
      this.stateSyncAccum = 0;
      const p = this.game.player;
      const moving = !!(this.game.keys['KeyW'] || this.game.keys['KeyS'] || this.game.keys['KeyA'] || this.game.keys['KeyD']);
      this.net.send({
        type: 'state',
        x: +p.pos.x.toFixed(2),
        y: +p.pos.y.toFixed(2),
        z: +p.pos.z.toFixed(2),
        yaw: +p.yaw.toFixed(3),
        pitch: +p.pitch.toFixed(3),
        moving,
        hp: Math.ceil(p.hp),
        maxHp: p.maxHp,
        alive: !this.myDead
      });
    }

    // 3. Timed 5-minute clock & 3-second respawn (also ticked via 200ms wall-clock interval so backgrounding cannot stall the duel!)
    this._tickWallTimers();

    // 4. Host broadcasts compact 6-AI snapshot at ~12 Hz
    if (this.role === 'host' && this.config.enemiesOpt === 'few' && this.game.enemies.length > 0) {
      this.aiSyncAccum += dt;
      if (this.aiSyncAccum >= 0.085) {
        this.aiSyncAccum = 0;
        const list = this.game.enemies.map((e, idx) => ({
          i: idx,
          x: +e.mesh.position.x.toFixed(2),
          y: +e.mesh.position.y.toFixed(2),
          z: +e.mesh.position.z.toFixed(2),
          r: +e.mesh.rotation.y.toFixed(2),
          h: Math.ceil(e.hp),
          a: e.alive ? 1 : 0
        }));
        this.net.send({ type: 'ai_snap', list });
      }
    }

    // 5. Update Top Compass (N/E/S/W + large glowing opponent dot + smaller AI dots)
    this._updateCompass();
  }

  _tickWallTimers() {
    if (!this.isPlaying() || this.config.rule !== 'timed5' || this.phase !== 'playing') return;
    const nowMs = performance.now();
    const realDt = this._lastWallMs ? Math.min(1.0, (nowMs - this._lastWallMs) / 1000) : 0;
    this._lastWallMs = nowMs;
    if (realDt <= 0) return;

    this.timeLeft = Math.max(0, this.timeLeft - realDt);
    this._updateScoreline();

    if (this.myDead && this.respawnTimer > 0) {
      this.respawnTimer -= realDt;
      if (this.respawnTimer <= 0) {
        this._respawnTimedLocal();
      } else {
        this.dom.respawnBanner.textContent = `Respawning in ${Math.ceil(this.respawnTimer)}…`;
      }
    }

    if (this.timeLeft <= 0 && this.role === 'host') {
      this.net.send({ type: 'time_end' });
      const res = this.myScore > this.oppScore ? 'win' : this.myScore < this.oppScore ? 'lose' : 'draw';
      this._showDuelEnd(res);
    }
  }

  _applyAISnapOnGuest(list) {
    for (const item of list) {
      const e = this.game.enemies[item.i];
      if (!e) continue;
      e.mesh.position.set(item.x, item.y, item.z);
      e.mesh.rotation.y = item.r;
      e.hp = item.h;
      if (!item.a && e.alive) {
        e.alive = false;
        e.parts.hpBg.visible = false;
        e.mesh.rotation.x = -Math.PI * 0.48;
      }
    }
  }

  _updateCompass() {
    const yaw = this.game.player.yaw; // yaw=0 faces North (-Z); heading angle in compass coords:
    const heading = -yaw; // positive turning right (East = +PI/2)
    const fovSpan = Math.PI * 0.95; // ~170 degrees visible across compass bar
    let html = '';

    for (const c of COMPASS_CARDINALS) {
      const rel = wrapAngle(c.angle - heading);
      if (Math.abs(rel) <= fovSpan * 0.52) {
        const pct = 50 + (rel / fovSpan) * 100;
        html += `<span class="compass-cardinal" style="left:${pct.toFixed(1)}%">${c.label}</span>`;
      }
    }

    // Smaller gold dots for living computer enemies (when enabled)
    for (const e of this.game.enemies) {
      if (!e.alive || !e.mesh.visible) continue;
      const dx = e.mesh.position.x - this.game.player.pos.x;
      const dz = e.mesh.position.z - this.game.player.pos.z;
      const bearing = Math.atan2(dx, -dz);
      const rel = wrapAngle(bearing - heading);
      const clamped = Math.max(-fovSpan * 0.48, Math.min(fovSpan * 0.48, rel));
      const pct = 50 + (clamped / fovSpan) * 100;
      html += `<span class="compass-dot-ai" style="left:${pct.toFixed(1)}%"></span>`;
    }

    // Prominent larger glowing dot for the opponent!
    if (this.remoteFighter && this.remoteFighter.alive) {
      const dx = this.remoteFighter.root.position.x - this.game.player.pos.x;
      const dz = this.remoteFighter.root.position.z - this.game.player.pos.z;
      const bearing = Math.atan2(dx, -dz);
      const rel = wrapAngle(bearing - heading);
      const clamped = Math.max(-fovSpan * 0.48, Math.min(fovSpan * 0.48, rel));
      const pct = 50 + (clamped / fovSpan) * 100;
      html += `<span class="compass-dot-opponent" style="left:${pct.toFixed(1)}%"></span>`;
    }

    this.dom.compassTrack.innerHTML = html;
  }
}
