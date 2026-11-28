import * as THREE from 'three';
import { DuelConnection, generateDuelCode, normalizeDuelCode, buildInviteUrl } from './duelNet.js';
import { ERA_HEROES, getFighterSkill } from '../entities/heroes.js';
import { ERA_VILLAINS, getFighterById, buildFighterFigure } from '../entities/villains.js';
import { RemoteFighter } from '../entities/remoteFighter.js';

export const DUEL_RULES = {
  first5: {
    name: 'Duel · first to 5 rounds',
    desc: 'Each fall ends a round; both start again with full health at opposite ends and swap ends every round.'
  },
  timed7: {
    name: 'Duel · 7 minutes, most kills',
    desc: 'Seven minutes on the clock; a fallen fighter returns 3 seconds later at the end farther from the opponent.'
  },
  coop: {
    name: 'Together against the enemy',
    desc: 'Start side by side against 3–24 enemies and the boss. No friendly fire, 5 s respawn, shared map, marks & drops.'
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

    // Match settings chosen by host (synced live to guest!)
    this.config = {
      levelIndex: 0,
      rule: 'first5',
      enemiesCount: 6, // 0 or 3..24 by 3s (>=3 in coop)
      wits: 'medium',
      mapSize: 'medium',
      seed: 12345
    };
    let savedName = 'Outlaw';
    try {
      const rn = (localStorage.getItem('nine_horizons_player_name') || '').trim().slice(0, 16);
      if (rn) savedName = rn;
    } catch {}
    this.myName = savedName;
    this.oppName = 'Player 2';

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
      witsSelect: document.getElementById('duel-wits-select'),
      mapSizeSelect: document.getElementById('duel-mapsize-select'),
      nameInput: document.getElementById('online-player-name'),
      playersList: document.getElementById('online-players-list'),
      guestSummary: document.getElementById('online-guest-summary'),
      partnerTag: document.getElementById('coop-partner-tag'),
      btnHostCreate: document.getElementById('btn-duel-host'),
      btnRematchStart: document.getElementById('btn-duel-rematch-start'),
      btnDuelAgain: document.getElementById('btn-duel-again'),
      inviteBox: document.getElementById('duel-invite-box'),
      codeDisplay: document.getElementById('duel-code-display'),
      inviteUrl: document.getElementById('duel-invite-url'),
      joinCodeInput: document.getElementById('duel-join-code'),

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

    if (this.dom.nameInput) {
      this.dom.nameInput.value = this.myName;
      this.dom.nameInput.addEventListener('input', () => {
        this.myName = (this.dom.nameInput.value || '').trim().slice(0, 16) || 'Outlaw';
        try { localStorage.setItem('nine_horizons_player_name', this.myName); } catch {}
        this._updatePlayersList();
        if (this.net && this.net.isOpen()) {
          this.net.send({ type: 'name', name: this.myName });
        }
      });
    }

    const syncHostConfigLive = () => {
      this._readHostConfig();
      if (this.role === 'host' && this.net && this.net.isOpen()) {
        this.net.send({ type: 'lobby_cfg', config: this.config });
      }
    };

    // Host dropdowns preview live & sync to connected guest!
    this.dom.levelSelect.addEventListener('change', () => {
      syncHostConfigLive();
      this.game.loadLevel(this.config.levelIndex, true);
    });
    this.dom.ruleSelect.addEventListener('change', () => {
      if (this.dom.ruleSelect.value === 'coop' && (parseInt(this.dom.enemiesSelect.value, 10) || 0) < 3) {
        this.dom.enemiesSelect.value = '6';
      }
      syncHostConfigLive();
    });
    this.dom.enemiesSelect.addEventListener('change', syncHostConfigLive);
    if (this.dom.witsSelect) this.dom.witsSelect.addEventListener('change', syncHostConfigLive);
    if (this.dom.mapSizeSelect) this.dom.mapSizeSelect.addEventListener('change', syncHostConfigLive);

    // Primary Method: PeerJS 5-character Invite Link
    this.dom.btnHostCreate.addEventListener('click', () => {
      this.startHostPeerJS();
    });

    // Stay-connected rematch flow (no new link/code needed!)
    this.dom.btnDuelAgain.addEventListener('click', () => {
      if (this.net && this.net.isOpen()) {
        this.net.send({ type: 'rematch_lobby' });
        this.returnToConnectedLobby();
      } else {
        this.leaveDuelToTitle();
      }
    });

    this.dom.btnRematchStart.addEventListener('click', () => {
      if (this.role !== 'host' || !this.net || !this.net.isOpen()) return;
      this._readHostConfig();
      this.config.seed = Math.floor(Math.random() * 1e9) + 1;
      this.net.send({ type: 'cfg', config: this.config });
      this.openFighterSelect();
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
        this.dom.joinCodeInput.value = code;
        this.startJoinPeerJS(code);
      }
    });

    // Fighter Selection Lock-in
    this.dom.btnLock.addEventListener('click', () => {
      this.lockMyFighter();
    });
  }

  _readHostConfig() {
    this.config.levelIndex = parseInt(this.dom.levelSelect.value, 10) || 0;
    this.config.rule = this.dom.ruleSelect.value || 'first5';
    let ec = Math.max(0, Math.min(24, parseInt(this.dom.enemiesSelect.value, 10) || 0));
    if (this.config.rule === 'coop' && ec < 3) {
      ec = 6;
      this.dom.enemiesSelect.value = '6';
    }
    this.config.enemiesCount = ec;
    this.config.wits = (this.dom.witsSelect && this.dom.witsSelect.value) || 'medium';
    this.config.mapSize = (this.dom.mapSizeSelect && this.dom.mapSizeSelect.value) || 'medium';
  }

  _updatePlayersList() {
    if (!this.dom.playersList) return;
    const connected = !!(this.net && this.net.isOpen());
    if (connected) {
      this.dom.playersList.textContent = `Players (2 of 2): ${this.myName} · ${this.oppName}`;
    } else {
      this.dom.playersList.textContent = `Players (1 of 2): ${this.myName}`;
    }
  }

  _renderGuestConfigBanner() {
    if (!this.dom.guestSummary || this.role !== 'guest') return;
    const meta = this.game.getLevelMeta(this.config.levelIndex);
    const rInfo = DUEL_RULES[this.config.rule] || DUEL_RULES.first5;
    const ec = this.config.enemiesCount || 0;
    this.dom.guestSummary.innerHTML = `
      <div><b>Host's selection (live):</b></div>
      <div>• Chapter: <b>${meta.act} · ${meta.title}</b></div>
      <div>• Mode: <b>${rInfo.name}</b></div>
      <div>• Enemies: <b>${ec === 0 ? 'None' : ec}</b> · Wits: <b>${this.config.wits}</b> · Map: <b>${this.config.mapSize}</b></div>
    `;
  }

  _setLobbyConnectedMode(isConnectedRematch) {
    const cols = this.dom.lobbyScreen.querySelectorAll('.duel-panel');
    const hostPanel = cols[0];
    const joinPanel = cols[1];
    this._updatePlayersList();
    if (isConnectedRematch) {
      if (this.role === 'host') {
        if (hostPanel) hostPanel.classList.remove('hidden');
        if (joinPanel) joinPanel.classList.add('hidden');
        this.dom.btnHostCreate.classList.add('hidden');
        this.dom.btnRematchStart.classList.remove('hidden');
        this.dom.inviteBox.classList.add('hidden');
        this._setStatus('connected', `Connected with ${this.oppName} (2 of 2). Choose settings and click "Start the game".`);
      } else {
        if (hostPanel) hostPanel.classList.add('hidden');
        if (joinPanel) joinPanel.classList.remove('hidden');
        this._renderGuestConfigBanner();
        this._setStatus('connected', `Connected with ${this.oppName} (2 of 2). Waiting for host to click "Start the game"…`);
      }
    } else {
      if (hostPanel) hostPanel.classList.remove('hidden');
      if (joinPanel) joinPanel.classList.remove('hidden');
      this.dom.btnHostCreate.classList.remove('hidden');
      this.dom.btnRematchStart.classList.add('hidden');
    }
  }

  returnToConnectedLobby() {
    this.phase = 'lobby';
    this.game.state = 'duel_lobby';
    this.myLocked = false;
    this.oppLocked = false;
    this.myDead = false;
    this.remoteFighter = null;
    clearTimeout(this.roundResetTimer);
    clearInterval(this._clockInterval);
    this._clockInterval = null;
    this.game.setScope(false);
    if (document.pointerLockElement) document.exitPointerLock();

    this.game.dom.endScreen.classList.add('hidden');
    this.game.dom.hud.classList.add('hidden');
    this.game.dom.crosshair.classList.add('hidden');
    this.dom.selectScreen.classList.add('hidden');
    this.dom.hudTop.classList.add('hidden');
    this.dom.unlockBar.classList.add('hidden');
    this.dom.respawnBanner.classList.add('hidden');
    this.dom.lobbyScreen.classList.remove('hidden');

    this.dom.levelSelect.value = String(this.config.levelIndex);
    this.dom.ruleSelect.value = this.config.rule;
    this.dom.enemiesSelect.value = String(this.config.enemiesCount || 0);
    this._setLobbyConnectedMode(true);
    this.game.loadLevel(this.config.levelIndex, true);
  }

  _setStatus(state, text) {
    this.dom.statusBar.textContent = text;
    this.dom.statusBar.className = `duel-status-bar status-${state}`;
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
    this.dom.enemiesSelect.value = String(this.config.enemiesCount || 0);
    this.dom.inviteBox.classList.add('hidden');
    this._setLobbyConnectedMode(false);

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
    this.net.canAcceptConnection = () => this.phase === 'lobby';
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
    this.net.send({ type: 'name', name: this.myName });
    if (this.role === 'host') {
      this._readHostConfig();
      this.net.send({ type: 'lobby_cfg', config: this.config });
      this._setLobbyConnectedMode(true);
    } else {
      this._setLobbyConnectedMode(true);
      this.net.send({ type: 'hello', name: this.myName });
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
    const rInfo = DUEL_RULES[this.config.rule] || DUEL_RULES.first5;
    const isCoop = this.config.rule === 'coop';
    const ec = Math.max(0, Math.min(24, parseInt(this.config.enemiesCount, 10) || 0));
    const enemyTxt = isCoop ? ` · ${Math.max(3, ec)} enemies + boss` : (ec > 0 ? ` · ${ec} computer enemies` : ' · No computer enemies');
    this.dom.ruleTitle.textContent = rInfo.name + enemyTxt;
    this.dom.ruleDesc.textContent = rInfo.desc;

    const renderCard = (f) => {
      const sk = getFighterSkill(f);
      return `
      <button type="button" class="duel-fighter-card ${f.isVillain ? 'villain-card' : ''}" data-fid="${f.id}">
        <div class="dfc-head">
          <span class="${f.isVillain ? 'dfc-icon-villain' : 'dfc-icon-hero'}">${f.isVillain ? '☠' : '★'}</span>
          <span>${f.name}</span>
        </div>
        <div class="dfc-bio">${f.bio}</div>
        <div class="dfc-strength">${f.strengthDesc} · <b>[E] ${sk.name}</b></div>
      </button>
    `;
    };

    this.dom.heroesRow.innerHTML = heroes.map(renderCard).join('');
    // Item 105: Villains can ONLY be played in a duel (hidden in Together co-op!)
    const villainSection = this.dom.villainsRow.closest('.duel-roster-section');
    if (villainSection) villainSection.classList.toggle('hidden', isCoop);
    this.dom.villainsRow.innerHTML = isCoop ? '' : villains.map(renderCard).join('');
    const pickerPane = this.dom.selectScreen.querySelector('.duel-picker-pane');
    if (pickerPane) {
      pickerPane.classList.toggle('compact-roster', villains.length >= 5);
    }
    this.dom.villainsRow.classList.toggle('grid-cols-4', villains.length === 4);
    this.dom.villainsRow.classList.toggle('grid-cols-3', villains.length !== 4);

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
    this.timeLeft = 420; // 7 minutes for timed7!
    this.myDead = false;
    this.respawnTimer = 0;
    this._lastWallMs = performance.now();
    clearTimeout(this.roundResetTimer);

    const meta = this.game.getLevelMeta(this.config.levelIndex);
    const era = meta.id;
    const isCoop = this.config.rule === 'coop';
    const myFighter = getFighterById(era, this.myFighterId);
    const oppFighter = getFighterById(era, this.oppFighterId);

    this.game.forceDisablePracticeForDuel();
    this.game.heroStage.visible = false;
    this.dom.selectScreen.classList.add('hidden');
    this.dom.lobbyScreen.classList.add('hidden');
    this.dom.unlockBar.classList.add('hidden');
    this.dom.respawnBanner.classList.add('hidden');
    if (this.dom.partnerTag) this.dom.partnerTag.classList.add('hidden');

    // Load level with shared host seed, wits, mapSize, and 0..24 AI enemies (boss included in coop!)
    const ec = isCoop
      ? Math.max(3, Math.min(24, parseInt(this.config.enemiesCount, 10) || 6))
      : Math.max(0, Math.min(24, parseInt(this.config.enemiesCount, 10) || 0));

    this.game.loadLevel(this.config.levelIndex, false, {
      duelMode: true,
      coopMode: isCoop,
      duelRole: this.role,
      duelEnemiesCount: ec,
      wits: this.config.wits || 'medium',
      mapSize: this.config.mapSize || 'medium',
      seed: this.config.seed || 12345,
      fighter: myFighter
    });

    // Two opposite ends for Duel; side-by-side (2.6m apart) for Together Co-op!
    this.spawnEndA.copy(meta.spawnPos);
    const bossPos = this.game.duelFarSpawnPos || new THREE.Vector3(0, 0, -28);
    this.spawnEndB.copy(bossPos);
    this.spawnEndA.y = this.game.collision.getFloorHeight(this.spawnEndA.x, this.spawnEndA.z, this.spawnEndA.y);
    this.spawnEndB.y = this.game.collision.getFloorHeight(this.spawnEndB.x, this.spawnEndB.z, this.spawnEndB.y);

    let myStart, oppStart;
    if (isCoop) {
      const rightX = Math.cos(meta.spawnYaw);
      const rightZ = -Math.sin(meta.spawnYaw);
      const hostPos = this.spawnEndA.clone().add(new THREE.Vector3(-rightX * 1.3, 0, -rightZ * 1.3));
      const guestPos = this.spawnEndA.clone().add(new THREE.Vector3(rightX * 1.3, 0, rightZ * 1.3));
      hostPos.y = this.game.collision.getFloorHeight(hostPos.x, hostPos.z, hostPos.y);
      guestPos.y = this.game.collision.getFloorHeight(guestPos.x, guestPos.z, guestPos.y);
      myStart = { pos: this.role === 'host' ? hostPos : guestPos, yaw: meta.spawnYaw };
      oppStart = { pos: this.role === 'host' ? guestPos : hostPos, yaw: meta.spawnYaw };
    } else {
      myStart = this._getMySpawnForRound(1);
      oppStart = this._getOppSpawnForRound(1);
    }

    this.remoteFighter = new RemoteFighter(oppFighter, era, oppStart.pos);
    this.remoteFighter.maxHp = this._fighterMaxHp(oppFighter);
    this.remoteFighter.hp = this.remoteFighter.maxHp;
    this.remoteFighter.teleport(oppStart.pos, oppStart.yaw);
    this.game.worldGroup.add(this.remoteFighter.root);

    this._placePlayer(myStart.pos, myStart.yaw);

    // Show HUD
    this.game.state = 'playing';
    this.game.dom.hud.classList.remove('hidden');
    this.game.dom.crosshair.classList.remove('hidden');
    this.game.weaponHolder.visible = true;
    document.getElementById('hud-sp-left').classList.toggle('hidden', !isCoop);
    document.getElementById('hud-score-box').classList.add('hidden');
    document.getElementById('hud-esc-hint').textContent = '[ESC] Unlock Mouse';
    this.dom.hudTop.classList.remove('hidden');

    this._updateScoreline();
    clearInterval(this._clockInterval);
    this._clockInterval = setInterval(() => this._tickWallTimers(), 200);
    this.game.sound.startMusic(meta.musicTheme);
    this.game._requestLock();
    this.game.showCallout(isCoop ? `TOGETHER: ${this.myName.toUpperCase()} & ${this.oppName.toUpperCase()}` : `DUEL: ${this.myName.toUpperCase()} VS ${this.oppName.toUpperCase()}`);
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
    const oppLbl = this.oppName || (this.remoteFighter ? this.remoteFighter.name : 'Player 2');
    const myLbl = this.myName || 'You';
    if (this.config.rule === 'coop') {
      const rem = this.game.enemies.filter((e) => e.alive).length + (this.game.bossSpawnPending ? 1 : 0);
      this.dom.scoreline.textContent = `${myLbl}: ${this.myScore} · ${oppLbl}: ${this.oppScore} · ${rem} enemies left`;
      return;
    }
    const suffix = this.config.rule === 'first5' ? `round ${this.roundNum}` : formatClock(this.timeLeft);
    this.dom.scoreline.textContent = `${myLbl} ${this.myScore}–${this.oppScore} ${oppLbl} · ${suffix}`;
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
    if (this.config.rule === 'coop') return; // Friendly fire strictly OFF in Together co-op!
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

  onCoopEnemyKilled(byGuest = false) {
    if (this.config.rule !== 'coop' || this.role !== 'host') return;
    if (byGuest) this.oppScore++;
    else this.myScore++;
    this.net.send({ type: 'coop_score', hostKills: this.myScore, guestKills: this.oppScore });
    this._updateScoreline();
    const alive = this.game.enemies.filter((e) => e.alive).length;
    if (!this.game.bossSpawnPending && alive === 0) {
      this.net.send({ type: 'coop_win', hostKills: this.myScore, guestKills: this.oppScore });
      this._showDuelEnd('coop_win');
    }
  }

  onLocalPlayerDied(source = 'opponent') {
    if (!this.isPlaying() || this.myDead) return;
    this.myDead = true;
    this.game.setScope(false);
    if (this.config.rule === 'coop') {
      // Item 101: In Together co-op, a fallen player respawns at the start 5 seconds later!
      this.respawnTimer = 5.0;
      this.dom.respawnBanner.classList.remove('hidden');
      this.dom.respawnBanner.textContent = 'Back at the start in 5…';
      this.net.send({ type: 'coop_down' });
      return;
    }
    this.net.send({ type: 'died', source });
    this._recordKill('opp');
  }

  _recordKill(winner) {
    if (this.phase === 'ended' || this.config.rule === 'coop') return;
    if (winner === 'me') this.myScore++;
    else this.oppScore++;
    this._updateScoreline();

    if (this.config.rule === 'first5') {
      if (this.myScore >= 5) {
        this._showDuelEnd('win');
        return;
      }
      if (this.oppScore >= 5) {
        this._showDuelEnd('lose');
        return;
      }
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

    // Timed 7-minute mode: if local player died, start 3-second respawn countdown!
    if (this.config.rule === 'timed7' && winner === 'opp') {
      this.respawnTimer = 3.0;
      this.dom.respawnBanner.classList.remove('hidden');
      this.dom.respawnBanner.textContent = 'Respawning in 3…';
    }
  }

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

    const oppName = this.oppName || (this.remoteFighter ? this.remoteFighter.name : 'Player 2');
    const myName = this.myName || 'You';
    const scoreStr = `${myName} ${this.myScore} – ${this.oppScore} ${oppName}`;
    if (this.dom.partnerTag) this.dom.partnerTag.classList.add('hidden');

    if (outcome === 'left') {
      g.dom.endEyebrow.textContent = 'ONLINE GAME ENDED';
      g.dom.endTitle.textContent = `${oppName} left`;
      g.dom.endSummary.textContent = `The connection closed (${scoreStr}).`;
    } else if (outcome === 'coop_win') {
      g.dom.endEyebrow.textContent = 'TOGETHER — MISSION COMPLETE';
      g.dom.endTitle.textContent = 'HORIZON CLEARED TOGETHER';
      g.dom.endSummary.textContent = `${myName}: ${this.myScore} kills · ${oppName}: ${this.oppScore} kills.`;
    } else if (outcome === 'win') {
      g.dom.endEyebrow.textContent = 'DUEL COMPLETE';
      g.dom.endTitle.textContent = `${myName} wins the duel`;
      g.dom.endSummary.textContent = `Final score: ${scoreStr}.`;
    } else if (outcome === 'lose') {
      g.dom.endEyebrow.textContent = 'DUEL COMPLETE';
      g.dom.endTitle.textContent = `${oppName} wins the duel`;
      g.dom.endSummary.textContent = `Final score: ${scoreStr}.`;
    } else {
      g.dom.endEyebrow.textContent = 'TIME UP';
      g.dom.endTitle.textContent = 'A draw';
      g.dom.endSummary.textContent = `Final score: ${scoreStr}.`;
    }

    const rInfo = DUEL_RULES[this.config.rule] || DUEL_RULES.first5;
    g.dom.endStats.innerHTML = `
      <div class="stat-card"><div class="stat-val">${this.myScore}</div><div class="stat-lbl">${myName.toUpperCase()}</div></div>
      <div class="stat-card"><div class="stat-val">${this.oppScore}</div><div class="stat-lbl">${oppName.toUpperCase()}</div></div>
      <div class="stat-card"><div class="stat-val">${rInfo.name}</div><div class="stat-lbl">MODE</div></div>
    `;

    // Hide SP-only end-screen buttons; show "Next Duel (Same Connection)" if still connected!
    g.dom.btnNextLevel.classList.add('hidden');
    document.getElementById('btn-end-restart').classList.add('hidden');
    document.getElementById('btn-end-change-hero').classList.add('hidden');
    const canRematch = outcome !== 'left' && !!(this.net && this.net.isOpen());
    this.dom.btnDuelAgain.classList.toggle('hidden', !canRematch);
    document.getElementById('btn-end-menu').textContent = canRematch ? 'LEAVE DUEL / MAIN MENU' : 'MAIN MENU';
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
    this.dom.btnDuelAgain.classList.add('hidden');
    document.getElementById('btn-end-menu').textContent = 'MAIN MENU';
    this._setLobbyConnectedMode(false);
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

    if (msg.type === 'rejected') {
      if (this.net) this.net.close();
      this._setLobbyConnectedMode(false);
      this._setStatus('failed', msg.reason || 'Room is full or a game is already in progress.');
      return;
    }

    if (msg.type === 'name') {
      this.oppName = String(msg.name || 'Player 2').trim().slice(0, 16) || 'Player 2';
      this._updatePlayersList();
      if (this.phase === 'lobby') this._setLobbyConnectedMode(true);
      return;
    }

    if (msg.type === 'hello' && this.role === 'host') {
      if (msg.name) this.oppName = String(msg.name).trim().slice(0, 16) || 'Player 2';
      this.net.send({ type: 'name', name: this.myName });
      this.net.send({ type: 'lobby_cfg', config: this.config });
      this._setLobbyConnectedMode(true);
      return;
    }

    if (msg.type === 'lobby_cfg' && this.role === 'guest') {
      this.config = { ...this.config, ...msg.config };
      this._renderGuestConfigBanner();
      return;
    }

    if (msg.type === 'rematch_lobby') {
      this.returnToConnectedLobby();
      return;
    }

    if (msg.type === 'cfg' && this.role === 'guest') {
      this.config = { ...this.config, ...msg.config };
      if (this.phase !== 'select' && this.phase !== 'playing') {
        this.openFighterSelect();
      }
      return;
    }

    if (msg.type === 'mark' && this.game.minimap) {
      const p = msg.pos ? { x: msg.pos[0], y: msg.pos[1], z: msg.pos[2] } : null;
      this.game.minimap.setRemoteMark(p, this.oppName, this.game.worldGroup);
      if (p) this.game.sound.playPickup();
      return;
    }

    if (msg.type === 'drop_item') {
      this.game._spawnDroppedItem({
        kind: msg.kind,
        weaponId: msg.weaponId,
        bagKey: msg.bagKey,
        ammo: msg.ammo,
        label: msg.label,
        pos: new THREE.Vector3(msg.p[0], msg.p[1], msg.p[2]),
        requireLeave: false
      });
      return;
    }

    if (msg.type === 'break_prop' && this.game.destructibles) {
      this.game.destructibles.breakById(msg.id, this.game._destructibleCallbacks(false));
      return;
    }

    if (msg.type === 'coop_score') {
      if (this.role === 'guest') {
        this.myScore = msg.guestKills || 0;
        this.oppScore = msg.hostKills || 0;
      } else {
        this.myScore = msg.hostKills || 0;
        this.oppScore = msg.guestKills || 0;
      }
      this._updateScoreline();
      return;
    }

    if (msg.type === 'coop_win') {
      if (this.role === 'guest') {
        this.myScore = msg.guestKills || 0;
        this.oppScore = msg.hostKills || 0;
      }
      this._showDuelEnd('coop_win');
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
        this.game._damageEnemy(enemy, msg.dmg, !!msg.head, enemy.mesh.position.clone().add(new THREE.Vector3(0, 1.2, 0)), true);
      }
      return;
    }
  }

  // =========================================================================
  // PER-FRAME ONLINE UPDATE (20Hz State, 10Hz AI Sync, Partner Badge, Respawn)
  // =========================================================================

  update(dt) {
    if (!this.isPlaying()) return;

    // 1. Update RemoteFighter smooth interpolation, Vanish faintness & Co-op through-wall partner badge!
    if (this.remoteFighter) {
      this.remoteFighter.update(dt, this.game.player.pos);
      if (this.dom.partnerTag) {
        if (this.config.rule === 'coop' && this.remoteFighter.alive) {
          const wp = this.remoteFighter.root.position.clone().add(new THREE.Vector3(0, 2.25, 0));
          const dist = Math.round(this.game.player.pos.distanceTo(this.remoteFighter.root.position));
          const p = wp.project(this.game.camera);
          const inFront = p.z >= -1 && p.z <= 1;
          let sx = (p.x * 0.5 + 0.5) * window.innerWidth;
          let sy = (-p.y * 0.5 + 0.5) * window.innerHeight;
          const offscreen = !inFront || sx < 40 || sx > window.innerWidth - 40 || sy < 40 || sy > window.innerHeight - 40;
          if (!inFront) { sx = window.innerWidth - sx; sy = window.innerHeight - 36; }
          sx = Math.max(64, Math.min(window.innerWidth - 64, sx));
          sy = Math.max(44, Math.min(window.innerHeight - 28, sy));
          const arrow = offscreen ? (sx <= 70 ? '◀ ' : sx >= window.innerWidth - 70 ? '▶ ' : '▲ ') : '';
          this.dom.partnerTag.style.left = `${sx}px`;
          this.dom.partnerTag.style.top = `${sy}px`;
          this.dom.partnerTag.textContent = `${arrow}${this.oppName} · ${dist} m · ${Math.ceil(this.remoteFighter.hp)} HP`;
          this.dom.partnerTag.classList.remove('hidden');
        } else {
          this.dom.partnerTag.classList.add('hidden');
        }
      }
    }

    // 2. Broadcast local player state at 20 Hz (drop state if channel is backlogged!)
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
        cr: p.crouched ? 1 : 0,
        sn: p.sneaking ? 1 : 0,
        van: this.game.isSkillActive('vanish') ? 1 : 0,
        hp: Math.ceil(p.hp),
        maxHp: p.maxHp,
        alive: !this.myDead
      }, true);
    }

    // 3. Timed 7-minute clock & 3s/5s respawn
    this._tickWallTimers();

    // 4. Host broadcasts compact AI snapshot at 10 Hz
    if (this.role === 'host' && (this.config.enemiesCount || 0) > 0 && this.game.enemies.length > 0) {
      this.aiSyncAccum += dt;
      if (this.aiSyncAccum >= 0.10) {
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
        this.net.send({ type: 'ai_snap', list }, true);
      }
    }
  }

  _tickWallTimers() {
    if (!this.isPlaying() || this.phase !== 'playing') return;
    if (this.config.rule !== 'timed7' && this.config.rule !== 'coop') return;
    const nowMs = performance.now();
    const realDt = this._lastWallMs ? Math.min(1.0, (nowMs - this._lastWallMs) / 1000) : 0;
    this._lastWallMs = nowMs;
    if (realDt <= 0) return;

    if (this.config.rule === 'timed7') {
      this.timeLeft = Math.max(0, this.timeLeft - realDt);
      this._updateScoreline();
      if (this.timeLeft <= 0 && this.role === 'host') {
        this.net.send({ type: 'time_end' });
        const res = this.myScore > this.oppScore ? 'win' : this.myScore < this.oppScore ? 'lose' : 'draw';
        this._showDuelEnd(res);
      }
    }

    if (this.myDead && this.respawnTimer > 0) {
      this.respawnTimer -= realDt;
      if (this.respawnTimer <= 0) {
        if (this.config.rule === 'coop') {
          this.myDead = false;
          this.respawnTimer = 0;
          this.dom.respawnBanner.classList.add('hidden');
          const meta = this.game.getLevelMeta(this.config.levelIndex);
          this._placePlayer(this.spawnEndA.clone(), meta.spawnYaw);
          this.game.toast('BACK AT THE START');
        } else {
          this._respawnTimedLocal();
        }
      } else {
        this.dom.respawnBanner.textContent = this.config.rule === 'coop'
          ? `Back at the start in ${Math.ceil(this.respawnTimer)}…`
          : `Respawning in ${Math.ceil(this.respawnTimer)}…`;
      }
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
}
