import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

import { CollisionWorld } from './engine/collision.js';
import { ParticleSystem } from './engine/particles.js';
import { SoundEngine } from './engine/audio.js';
import { DuelController } from './engine/duelController.js';
import { ERA_WEAPONS, EXTRA_WEAPONS, CHAPTER_GEAR, ENEMY_WEAPON_DROPS, getWeaponTemplate, getAmmoDropAmount, buildWeaponViewmodel, buildEightPointShuriken } from './entities/weapons.js';
import { ERA_HEROES, SKILLS, getFighterSkill, getHeroById, buildHeroFigure } from './entities/heroes.js';
import { AimThrowPreview, spawnFirePoolMesh } from './engine/arsenal.js';
import { ChapterMiniMap } from './engine/minimap.js';
import { DestructibleWorld } from './engine/destructibles.js';
import { applyMapSize, randomizeGroundSpawns, makeSeededRng } from './engine/mapSize.js';
import { spawnChapterAnimals, spawnAmbientLife } from './engine/livingWorld.js';
import { buildStage14Landmarks } from './engine/landmarksStage14.js';
import { Enemy } from './entities/enemies.js';
import { LEVEL1_META, buildLevel1 } from './levels/level1_west.js';
import { LEVEL2_META, buildLevel2 } from './levels/level2_japan.js';
import { LEVEL3_META, buildLevel3 } from './levels/level3_swiss.js';
import { LEVEL4_META, buildLevel4 } from './levels/level4_greece.js';
import { LEVEL5_META, buildLevel5 } from './levels/level5_scandinavia.js';
import { LEVEL6_META, buildLevel6 } from './levels/level6_normandy.js';
import { LEVEL7_META, buildLevel7 } from './levels/level7_soviet.js';
import { LEVEL8_META, buildLevel8 } from './levels/level8_tibet.js';
import { LEVEL9_META, buildLevel9 } from './levels/level9_aztec.js';

const LEVELS = [
  { meta: LEVEL1_META, builder: buildLevel1 },
  { meta: LEVEL2_META, builder: buildLevel2 },
  { meta: LEVEL3_META, builder: buildLevel3 },
  { meta: LEVEL4_META, builder: buildLevel4 },
  { meta: LEVEL5_META, builder: buildLevel5 },
  { meta: LEVEL6_META, builder: buildLevel6 },
  { meta: LEVEL7_META, builder: buildLevel7 },
  { meta: LEVEL8_META, builder: buildLevel8 },
  { meta: LEVEL9_META, builder: buildLevel9 }
];

const DIFFICULTY = {
  good: { label: 'THE GOOD', enemyMult: 0.72, playerHp: 130 },
  bad:  { label: 'THE BAD',  enemyMult: 1.0,  playerHp: 100 },
  ugly: { label: 'THE UGLY', enemyMult: 1.4,  playerHp: 75 }
};

class OutlawsGame {
  constructor() {
    this.container = document.getElementById('game-container');
    this.sound = new SoundEngine();

    // Renderer with cinematic tone mapping & soft shadows
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;
    this.container.appendChild(this.renderer.domElement);

    // Scene & Camera
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(72, window.innerWidth / window.innerHeight, 0.1, 600);
    this.scene.add(this.camera);

    // Dedicated weapon overlay holder attached to camera + muzzle flash light
    this.weaponHolder = new THREE.Group();
    this.camera.add(this.weaponHolder);

    this.muzzleLight = new THREE.PointLight(0xffb84d, 0, 12, 2);
    this.muzzleLight.position.set(0.25, -0.1, -0.9);
    this.camera.add(this.muzzleLight);

    // Live 3D Hero Turntable Stage attached to camera for the Hero Selection Screen
    this.heroStage = new THREE.Group();
    this.heroStage.visible = false;
    this.heroFigureHolder = new THREE.Group();
    this.heroStage.add(this.heroFigureHolder);
    const stageKey = new THREE.PointLight(0xfff1d6, 9, 10, 1.4);
    stageKey.position.set(1.4, 2.2, 2.2);
    const stageRim = new THREE.PointLight(0x9ecaff, 4.5, 10, 1.5);
    stageRim.position.set(-1.8, 1.9, -1.6);
    this.heroStage.add(stageKey, stageRim);
    this.camera.add(this.heroStage);
    this.heroStagePop = 1;

    // Post-Processing: Subtle Selective Bloom for glowing sunsets, lanterns, fire & snow
    this.composer = new EffectComposer(this.renderer);
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.34, // strength
      0.55, // radius
      0.82  // threshold
    );
    this.outputPass = new OutputPass();
    this.composer.addPass(this.renderPass);
    this.composer.addPass(this.bloomPass);
    this.composer.addPass(this.outputPass);

    // Graphics Quality Setting: 'auto' (default), 'high', 'medium', 'low' (remembered)
    let savedGfx = 'auto';
    try {
      const rawGfx = localStorage.getItem('nine_horizons_graphics');
      if (['auto', 'high', 'medium', 'low'].includes(rawGfx)) savedGfx = rawGfx;
    } catch {}
    this.graphicsPref = savedGfx;
    this.activeGraphicsLevel = savedGfx === 'auto' ? 'high' : savedGfx;
    this.autoGfx = {
      samples: [],
      pendingCheck: null, // { fromLevel, prevAvgMs }
      lockedUntilNextChapter: false
    };
    this.showFpsCounter = new URLSearchParams(window.location.search).has('fps');
    this._fpsAccumTime = 0;
    this._fpsFrames = 0;
    this._fpsSmoothed = 60;
    this._lastFrameMs = performance.now();

    // Game State
    this.state = 'title'; // 'title' | 'intro' | 'playing' | 'paused' | 'ended'
    this.levelIndex = 0;
    this.difficultyKey = 'bad';
    // Single-player enemy count, wits & map size preferences (remembered!)
    let savedEnemyCount = 15;
    let savedWits = 'medium';
    let savedMapSize = 'medium';
    try {
      const raw = parseInt(localStorage.getItem('eight_horizons_enemy_count'), 10);
      if ([5, 10, 15, 20, 25, 30, 35, 40, 45].includes(raw)) savedEnemyCount = raw;
      const rw = localStorage.getItem('nine_horizons_wits');
      if (['low', 'medium', 'genius'].includes(rw)) savedWits = rw;
      const rm = localStorage.getItem('nine_horizons_map_size');
      if (['small', 'medium', 'large'].includes(rm)) savedMapSize = rm;
    } catch {}
    this.enemyCountPref = savedEnemyCount;
    this.witsPref = savedWits;
    this.mapSizePref = savedMapSize;
    this.runSeed = Math.floor(Math.random() * 1e9) + 1;
    // Remember chosen hero per level (preserved on retry after death!)
    this.selectedHeroIds = {
      west: ERA_HEROES.west[0].id,
      japan: ERA_HEROES.japan[0].id,
      swiss: ERA_HEROES.swiss[0].id,
      greece: ERA_HEROES.greece[0].id,
      scandinavia: ERA_HEROES.scandinavia[0].id,
      normandy: ERA_HEROES.normandy[0].id,
      soviet: ERA_HEROES.soviet[0].id,
      tibet: ERA_HEROES.tibet[0].id,
      aztec: ERA_HEROES.aztec[0].id
    };
    this.activeHero = ERA_HEROES.west[0];
    this.timeSinceLastDamage = 999;

    // Hidden Practice Mode ("PAX") — session-only in memory, never saved
    this.practiceMode = false;
    this.usedPracticeThisRun = false;
    this.paxBuffer = '';
    this.clock = new THREE.Clock();
    this.elapsed = 0;

    // World Containers
    this.worldGroup = new THREE.Group();
    this.scene.add(this.worldGroup);
    this.collision = new CollisionWorld();
    this.destructibles = new DestructibleWorld();
    this.particles = null;
    this.animatedCallbacks = [];
    this.enemies = [];
    this.bystanders = [];
    this.animals = [];
    this.ambientLife = null;
    this.bossSpawnPending = null;
    this.activeBoss = null;
    this.pickups = [];
    this.enemyProjectiles = [];
    this.playerThrowables = [];
    this.playerProjectiles = [];
    this.stuckProjectiles = [];
    this.recoverableMissiles = [];
    this.droppedItems = [];
    this.firePools = [];
    this.pendingFlailSwing = null;
    this.tellApple = null;
    this.aimThrowActive = false;
    this.aimPreview = null;
    this.bag = { heal: 0, big_stone: 0, molotov: 0, bomb: 0 };
    this.bagMeshes = {};
    this.activeSlotIdx = 0;
    this.fistHand = 0;
    this.skillState = { skill: SKILLS.dead_eye, activeTime: 0, cooldownTime: 0 };

    // Player State
    this.player = {
      pos: new THREE.Vector3(),
      vel: new THREE.Vector3(),
      yaw: 0,
      pitch: 0,
      hp: 100,
      maxHp: 100,
      stamina: 100,
      grounded: true,
      crouched: false,
      sneaking: false,
      onLadder: null,
      ladderRungDist: 0,
      lastDryPos: new THREE.Vector3(),
      submergedTimer: 0,
      stepTimer: 0,
      eyeHeight: 1.68,
      bobPhase: 0
    };

    // Arsenal State
    this.weapons = [];
    this.weaponMeshes = [];
    this.currentWeaponIdx = 0;
    this.fireTimer = 0;
    this.reloading = false;
    this.reloadTimer = 0;
    this.scoped = false;
    this.recoilOffset = 0;
    this.slashAnim = 0;
    this.baseFov = 72;

    // Match Stats
    this.stats = { score: 0, shots: 0, hits: 0, headshots: 0, kills: 0, bystandersKilled: 0 };

    // Input State
    this.keys = {};
    this.mouseDownL = false;
    this.mouseDownR = false;
    this.pointerLocked = false;

    this.raycaster = new THREE.Raycaster();

    this._cacheDom();
    this.minimap = new ChapterMiniMap(this.dom);
    this._bindEvents();
    this.applyGraphicsLevel(this.activeGraphicsLevel);
    this._syncGraphicsUi();
    if (this.showFpsCounter && this.dom.fpsCounter) {
      this.dom.fpsCounter.classList.remove('hidden');
    }
    this.duel = new DuelController(this);

    // Support URL params / hash (?duel=CODE, ?level=, #west..#tibet); default to a random level behind the title!
    const params = new URLSearchParams(window.location.search);
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const mapIdx = { west: 0, japan: 1, swiss: 2, greece: 3, scandinavia: 4, normandy: 5, soviet: 6, tibet: 7, aztec: 8 };
    let initialLevel = Math.floor(Math.random() * LEVELS.length);
    if (hash in mapIdx) initialLevel = mapIdx[hash];
    else if (params.has('level')) {
      const lv = params.get('level').toLowerCase();
      initialLevel = lv in mapIdx ? mapIdx[lv] : Math.max(0, Math.min(LEVELS.length - 1, parseInt(lv, 10) || 0));
    }

    this.loadLevel(initialLevel, true);
    document.querySelectorAll('.level-card').forEach((c, i) => c.classList.toggle('active', i === initialLevel));
    if (params.has('hero')) {
      const eraId = LEVELS[initialLevel].meta.id;
      const h = getHeroById(eraId, params.get('hero').toLowerCase());
      this.selectedHeroIds[eraId] = h.id;
      this.activeHero = h;
    }
    if (params.has('duel') && params.get('duel').trim().length > 0) {
      // Opening an invite link leads straight into the duel lobby and auto-connects!
      this.duel.openLobby(params.get('duel'));
    } else if (params.get('select') === '1') {
      this.showIntroCard();
    } else if (params.get('autostart') === '1') {
      this.startMission();
      this.dom.callout.classList.add('hidden');
    }
    window.__outlawsGame = this;
    this._loop();
  }

  _cacheDom() {
    this.dom = {
      titleScreen: document.getElementById('title-screen'),
      introCard: document.getElementById('intro-card'),
      pauseScreen: document.getElementById('pause-screen'),
      endScreen: document.getElementById('end-screen'),
      hud: document.getElementById('hud'),
      crosshair: document.getElementById('hud-crosshair'),
      hitmarker: document.getElementById('hitmarker'),
      scopeOverlay: document.getElementById('scope-overlay'),
      scopeLabel: document.getElementById('scope-label'),
      damageOverlay: document.getElementById('damage-overlay'),
      skillTintOverlay: document.getElementById('skill-tint-overlay'),
      eagleEyeLayer: document.getElementById('eagle-eye-layer'),
      hitFlash: document.getElementById('hit-flash'),
      paxBadge: document.getElementById('pax-badge'),
      callout: document.getElementById('callout-banner'),
      landmarkBanner: document.getElementById('landmark-banner'),
      markLabel: document.getElementById('mark-label'),
      minimapCanvas: document.getElementById('minimap-canvas'),
      minimapNorth: document.getElementById('minimap-north'),
      fullmapOverlay: document.getElementById('fullmap-overlay'),
      fullmapCanvas: document.getElementById('fullmap-canvas'),
      pickupToast: document.getElementById('pickup-toast'),

      eraBadge: document.getElementById('hud-era-badge'),
      objective: document.getElementById('hud-objective'),
      enemyIcon: document.getElementById('hud-enemy-icon'),
      enemiesLeft: document.getElementById('hud-enemies-left'),
      bossBarWrap: document.getElementById('boss-bar-wrap'),
      bossName: document.getElementById('boss-name'),
      bossBarFill: document.getElementById('boss-bar-fill'),
      scoreVal: document.getElementById('hud-score'),
      heroName: document.getElementById('hud-hero-name'),
      heroPerk: document.getElementById('hud-hero-perk'),
      crouchBadge: document.getElementById('hud-crouch-badge'),
      sneakBadge: document.getElementById('hud-sneak-badge'),
      hpText: document.getElementById('hud-hp-text'),
      hpBar: document.getElementById('hud-hp-bar'),
      staminaBar: document.getElementById('hud-stamina-bar'),
      skillName: document.getElementById('hud-skill-name'),
      skillStatus: document.getElementById('hud-skill-status'),
      arsenalList: document.getElementById('hud-arsenal-list'),
      weaponStrip: document.getElementById('hud-weapon-strip'),
      weaponName: document.getElementById('hud-weapon-name'),
      ammoPips: document.getElementById('hud-ammo-pips'),
      ammoMag: document.getElementById('hud-ammo-mag'),
      ammoReserve: document.getElementById('hud-ammo-reserve'),
      altHint: document.getElementById('hud-alt-hint'),

      comicAct: document.getElementById('comic-act'),
      comicTitle: document.getElementById('comic-title'),
      comicQuote: document.getElementById('comic-quote'),
      heroHistoricalNote: document.getElementById('hero-historical-note'),
      heroEnemiesSelect: document.getElementById('hero-enemies-select'),
      heroWitsSelect: document.getElementById('hero-wits-select'),
      heroMapSizeSelect: document.getElementById('hero-mapsize-select'),
      heroCardsList: document.getElementById('hero-cards-list'),
      heroPreviewName: document.getElementById('hero-preview-name'),
      heroPreviewBio: document.getElementById('hero-preview-bio'),
      heroPreviewStrength: document.getElementById('hero-preview-strength'),

      pauseLevelName: document.getElementById('pause-level-name'),
      btnPauseGraphics: document.getElementById('btn-pause-graphics'),
      btnPauseSound: document.getElementById('btn-pause-sound'),
      soundModal: document.getElementById('sound-modal'),
      btnToggleMusic: document.getElementById('btn-toggle-music'),
      titleGraphicsSelect: document.getElementById('title-graphics-select'),
      fpsCounter: document.getElementById('fps-counter'),
      endEyebrow: document.getElementById('end-eyebrow'),
      endTitle: document.getElementById('end-title'),
      endPracticeNote: document.getElementById('end-practice-note'),
      endSummary: document.getElementById('end-summary'),
      endStats: document.getElementById('end-stats'),
      btnNextLevel: document.getElementById('btn-next-level'),
      btnEndRestart: document.getElementById('btn-end-restart'),
      btnEndChangeHero: document.getElementById('btn-end-change-hero')
    };
  }

  _bindEvents() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this._applyRenderScale();
    });

    // Safeguard against accidentally closing the tab/browser while a chapter or online game is active
    window.addEventListener('beforeunload', (e) => {
      if (this.state === 'playing' || this.state === 'paused' || (this.duel && this.duel.active)) {
        e.preventDefault();
        e.returnValue = '';
      }
    });

    // Level Cards on Title Screen (instantly live-preview the 3D world!)
    document.querySelectorAll('.level-card').forEach((card) => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.level-card').forEach((c) => c.classList.remove('active'));
        card.classList.add('active');
        const idx = parseInt(card.dataset.level, 10);
        this.loadLevel(idx, true);
      });
    });

    // Difficulty buttons
    document.querySelectorAll('.diff-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.diff-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        this.difficultyKey = btn.dataset.diff;
      });
    });

    if (this.dom.titleGraphicsSelect) {
      this.dom.titleGraphicsSelect.value = this.graphicsPref;
      this.dom.titleGraphicsSelect.addEventListener('change', (e) => {
        this.setGraphicsPreference(e.target.value);
      });
    }

    if (this.dom.btnPauseGraphics) {
      this.dom.btnPauseGraphics.addEventListener('click', () => {
        this.cycleGraphicsPreference();
      });
    }

    // Play -> Show Illustrated Intro Card
    document.getElementById('btn-play').addEventListener('click', () => {
      this.sound.ensureInit();
      this.showIntroCard();
    });

    // Start Mission from Hero Selection -> Enemies, Wits & Map Size controls
    this._syncEnemyCountDropdown = () => {
      const sel = this.dom.heroEnemiesSelect;
      if (!sel) return;
      const maxE = this.mapSizePref === 'large' ? 45 : 30;
      const opts = [];
      for (let n = 5; n <= maxE; n += 5) opts.push(`<option value="${n}">${n}</option>`);
      sel.innerHTML = opts.join('');
      if (this.enemyCountPref > maxE) this.enemyCountPref = maxE;
      sel.value = String(this.enemyCountPref);
    };
    this._syncEnemyCountDropdown();
    if (this.dom.heroEnemiesSelect) {
      this.dom.heroEnemiesSelect.addEventListener('change', (e) => {
        const val = parseInt(e.target.value, 10);
        if (val >= 5 && val <= 45) {
          this.enemyCountPref = val;
          try { localStorage.setItem('eight_horizons_enemy_count', String(val)); } catch {}
        }
      });
    }
    if (this.dom.heroWitsSelect) {
      this.dom.heroWitsSelect.value = this.witsPref;
      this.dom.heroWitsSelect.addEventListener('change', (e) => {
        if (['low', 'medium', 'genius'].includes(e.target.value)) {
          this.witsPref = e.target.value;
          try { localStorage.setItem('nine_horizons_wits', this.witsPref); } catch {}
        }
      });
    }
    if (this.dom.heroMapSizeSelect) {
      this.dom.heroMapSizeSelect.value = this.mapSizePref;
      this.dom.heroMapSizeSelect.addEventListener('change', (e) => {
        if (['small', 'medium', 'large'].includes(e.target.value)) {
          this.mapSizePref = e.target.value;
          try { localStorage.setItem('nine_horizons_map_size', this.mapSizePref); } catch {}
          this._syncEnemyCountDropdown();
        }
      });
    }

    document.getElementById('btn-start-mission').addEventListener('click', () => {
      this.startMission();
    });

    document.getElementById('btn-hero-back').addEventListener('click', () => {
      this.returnToTitle();
    });

    // Pause / End screen controls
    document.getElementById('btn-resume').addEventListener('click', () => this.resumeGame());
    document.getElementById('btn-restart').addEventListener('click', () => this.restartLevel());
    document.getElementById('btn-pause-change-hero').addEventListener('click', () => this.showIntroCard());
    document.getElementById('btn-main-menu').addEventListener('click', () => this.returnToTitle());
    document.getElementById('btn-end-restart').addEventListener('click', () => this.restartLevel());
    document.getElementById('btn-end-change-hero').addEventListener('click', () => this.showIntroCard());
    document.getElementById('btn-end-menu').addEventListener('click', () => {
      if (this.duel && this.duel.active) this.duel.leaveDuelToTitle();
      else this.returnToTitle();
    });
    document.getElementById('btn-next-level').addEventListener('click', () => {
      const next = (this.levelIndex + 1) % LEVELS.length;
      this.loadLevel(next, true);
      this.showIntroCard();
    });

    // Stage 15 Item 98: 4-Slider Sound Settings Panel (Title, Online, Pause [O])
    const bindSlider = (ch, inputId, valId) => {
      const inp = document.getElementById(inputId);
      const valEl = document.getElementById(valId);
      if (!inp) return;
      const pct = Math.round((this.sound.prefs[ch] ?? 0.8) * 100);
      inp.value = String(pct);
      if (valEl) valEl.textContent = `${pct}%`;
      inp.addEventListener('input', () => {
        const p = parseInt(inp.value, 10) || 0;
        if (valEl) valEl.textContent = `${p}%`;
        this.sound.setVolume(ch, p / 100);
      });
    };
    bindSlider('general', 'vol-general', 'vol-general-val');
    bindSlider('effects', 'vol-effects', 'vol-effects-val');
    bindSlider('voices',  'vol-voices',  'vol-voices-val');
    bindSlider('music',   'vol-music',   'vol-music-val');

    const syncMusicBtn = () => {
      if (this.dom.btnToggleMusic) {
        this.dom.btnToggleMusic.textContent = this.sound.prefs.musicOn ? 'MUSIC: ON [M]' : 'MUSIC: OFF [M]';
      }
    };
    syncMusicBtn();
    this._syncMusicBtn = syncMusicBtn;

    this.openSoundSettings = () => {
      this.sound.ensureInit();
      syncMusicBtn();
      if (this.dom.soundModal) this.dom.soundModal.classList.remove('hidden');
    };
    this.closeSoundSettings = () => {
      if (this.dom.soundModal) this.dom.soundModal.classList.add('hidden');
    };

    const btnTitleSound = document.getElementById('btn-title-sound');
    const btnOnlineSound = document.getElementById('btn-online-sound');
    const btnSoundClose = document.getElementById('btn-sound-close');
    if (btnTitleSound) btnTitleSound.addEventListener('click', () => this.openSoundSettings());
    if (btnOnlineSound) btnOnlineSound.addEventListener('click', () => this.openSoundSettings());
    if (this.dom.btnPauseSound) this.dom.btnPauseSound.addEventListener('click', () => this.openSoundSettings());
    if (btnSoundClose) btnSoundClose.addEventListener('click', () => this.closeSoundSettings());
    if (this.dom.btnToggleMusic) {
      this.dom.btnToggleMusic.addEventListener('click', () => {
        const on = this.sound.toggleMusic();
        syncMusicBtn();
        this.toast(on ? 'MUSIC ON' : 'MUSIC OFF');
      });
    }

    // Keyboard Controls
    window.addEventListener('keydown', (e) => {
      // Do not steal keys when typing in lobby inputs / textareas!
      const tag = document.activeElement && document.activeElement.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      this.keys[e.code] = true;

      // Hidden Practice Mode sequence listener ("PAX", disabled during Duel Mode)
      if (!(this.duel && this.duel.active) && !e.ctrlKey && !e.metaKey && !e.altKey && e.key && e.key.length === 1) {
        const ch = e.key.toLowerCase();
        if (ch >= 'a' && ch <= 'z') {
          this.paxBuffer = (this.paxBuffer + ch).slice(-3);
          if (this.paxBuffer === 'pax') {
            this.paxBuffer = '';
            this.togglePracticeMode();
          }
        }
      }

      if (e.code === 'KeyM' && !e.repeat) {
        const on = this.sound.toggleMusic();
        if (this._syncMusicBtn) this._syncMusicBtn();
        this.toast(on ? 'MUSIC ON' : 'MUSIC OFF');
      }

      if (e.code === 'KeyO' && !e.repeat && (this.state === 'paused' || this.state === 'title' || this.state === 'duel_lobby')) {
        e.preventDefault();
        if (this.dom.soundModal && !this.dom.soundModal.classList.contains('hidden')) this.closeSoundSettings();
        else this.openSoundSettings();
        return;
      }

      // Close Sound Settings on Esc first!
      if (e.code === 'Escape' && this.dom.soundModal && !this.dom.soundModal.classList.contains('hidden')) {
        e.preventDefault();
        this.closeSoundSettings();
        return;
      }

      // Esc from Death / End screen returns to Main Menu (Item 97)
      if (this.state === 'ended' && e.code === 'Escape' && !e.repeat) {
        e.preventDefault();
        if (this.duel && this.duel.active) this.duel.leaveDuelToTitle();
        else this.returnToTitle();
        return;
      }

      // Hero Selection keyboard navigation: 1, 2, 3 and Enter
      if (this.state === 'intro') {
        if (e.code === 'Digit1' || e.code === 'Numpad1') {
          e.preventDefault();
          this.selectHeroByIndex(0);
        } else if (e.code === 'Digit2' || e.code === 'Numpad2') {
          e.preventDefault();
          this.selectHeroByIndex(1);
        } else if (e.code === 'Digit3' || e.code === 'Numpad3') {
          e.preventDefault();
          this.selectHeroByIndex(2);
        } else if (e.code === 'Enter' || e.code === 'NumpadEnter') {
          e.preventDefault();
          this.startMission();
        } else if (e.code === 'Escape') {
          e.preventDefault();
          this.returnToTitle();
        }
        return;
      }

      if (this.state === 'paused') {
        if (e.code === 'KeyG' && !e.repeat) {
          e.preventDefault();
          this.cycleGraphicsPreference();
          return;
        }
        if (e.code === 'Escape' && !e.repeat) {
          e.preventDefault();
          this.resumeGame();
          return;
        }
        return;
      }

      if (this.state !== 'playing') return;

      // Crouching: C ONLY toggles crouch; X toggles sneaking; Space stands up from crouch!
      if (e.code === 'KeyC' && !e.repeat) {
        this.setCrouch(!this.player.crouched);
      } else if (e.code === 'KeyX' && !e.repeat) {
        this.setSneak(!this.player.sneaking);
      } else if (e.code === 'Space' && this.player.crouched) {
        // Space stands the player up when crouched (if there is headroom!)
        this.setCrouch(false);
        this.keys['Space'] = false; // Don't jump on the same press that stood up
      }

      if (e.code >= 'Digit1' && e.code <= 'Digit9') {
        const slotNum = parseInt(e.code.slice(5), 10) - 1;
        this.selectUnifiedSlot(slotNum);
      }
      if (e.code === 'KeyR') this.startReload();
      if (e.code === 'KeyH' && !e.repeat) this.useBagHeal();
      if (e.code === 'KeyE' && !e.repeat) this.activateSkill();
      if (e.code === 'KeyF' && !e.repeat) this.triggerChapterBlade();
      if (e.code === 'KeyG' && !e.repeat) this.dropHeldItem();
      if (e.code === 'Tab') {
        e.preventDefault();
        if (this.minimap) this.minimap.setFullMapOpen(true);
      }
      if (e.code === 'Escape') {
        if (this.duel && this.duel.isPlaying()) {
          if (document.pointerLockElement) document.exitPointerLock();
          this.duel.dom.unlockBar.classList.remove('hidden');
        } else {
          this.pauseGame();
        }
      }
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
      if (e.code === 'Tab' && this.minimap) {
        this.minimap.setFullMapOpen(false);
      }
    });

    // Mouse Wheel Weapon + Bag Switch
    window.addEventListener('wheel', (e) => {
      if (this.state !== 'playing') return;
      const slots = this.getUnifiedSlots();
      if (slots.length === 0) return;
      const dir = e.deltaY > 0 ? 1 : -1;
      const next = (this.activeSlotIdx + dir + slots.length) % slots.length;
      this.selectUnifiedSlot(next);
    });

    // Pointer Lock & Aim
    document.addEventListener('pointerlockchange', () => {
      this.pointerLocked = document.pointerLockElement === this.renderer.domElement;
      if (this.duel && this.duel.isPlaying()) {
        // Duel cannot be paused — never freeze or make invulnerable!
        this.duel.dom.unlockBar.classList.toggle('hidden', this.pointerLocked);
        return;
      }
      if (!this.pointerLocked && this.state === 'playing') {
        this.pauseGame();
      }
    });

    window.addEventListener('mousemove', (e) => {
      if (this.state !== 'playing' || !this.pointerLocked) return;
      const sens = this.scoped ? 0.00085 : 0.0021;
      this.player.yaw -= e.movementX * sens;
      this.player.pitch = Math.max(-1.28, Math.min(1.28, this.player.pitch - e.movementY * sens));
    });

    window.addEventListener('mousedown', (e) => {
      if (this.state !== 'playing') return;
      if (!this.pointerLocked) {
        this._requestLock();
        return;
      }
      if (e.button === 0) {
        this.mouseDownL = true;
        this.tryFire(false);
      } else if (e.button === 1) {
        e.preventDefault();
        this.toggleCrosshairMark();
      } else if (e.button === 2) {
        this.mouseDownR = true;
        this.handleRightClickDown();
      }
    });

    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) this.mouseDownL = false;
      if (e.button === 2) {
        this.mouseDownR = false;
        this.aimThrowActive = false;
        if (this.aimPreview) this.aimPreview.hide();
        this.setScope(false);
      }
    });

    window.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  _clearWorld() {
    while (this.worldGroup.children.length > 0) {
      const child = this.worldGroup.children[0];
      this.worldGroup.remove(child);
    }
    while (this.weaponHolder.children.length > 0) {
      this.weaponHolder.remove(this.weaponHolder.children[0]);
    }
    this.animatedCallbacks = [];
    this.enemies = [];
    this.bystanders = [];
    this.animals = [];
    this.ambientLife = null;
    this.bossSpawnPending = null;
    this.activeBoss = null;
    this.pickups = [];
    this.enemyProjectiles = [];
    this.playerThrowables = [];
    this.playerProjectiles = [];
    this.stuckProjectiles = [];
    this.recoverableMissiles = [];
    this.droppedItems = [];
    this.firePools = [];
    this.pendingFlailSwing = null;
    this.tellApple = null;
    this.aimThrowActive = false;
    this.aimPreview = null;
    this.bag = { heal: 0, big_stone: 0, molotov: 0, bomb: 0 };
    this.bagMeshes = {};
    this.activeSlotIdx = 0;
    this.fistHand = 0;
    this.skillState = { skill: SKILLS.dead_eye, activeTime: 0, cooldownTime: 0 };
    this.setScope(false);
  }

  getLevelMeta(idx) {
    return LEVELS[idx] ? LEVELS[idx].meta : LEVELS[0].meta;
  }

  forceDisablePracticeForDuel() {
    this.practiceMode = false;
    this.usedPracticeThisRun = false;
    document.body.classList.remove('pax-active');
    if (this.dom.paxBadge) this.dom.paxBadge.classList.add('hidden');
  }

  _selectChapterEnemies(allSpawns, desiredTotal, maxCap = 30) {
    const cap = Math.max(1, Math.min(maxCap, parseInt(desiredTotal, 10) || 15));
    const bosses = allSpawns.filter((s) => s.isBossWave);
    const regulars = allSpawns.filter((s) => !s.isBossWave);
    const maxRegulars = Math.max(0, cap - bosses.length);

    const kept = regulars.slice();
    while (kept.length > maxRegulars && kept.length > 0) {
      const counts = new Map();
      for (const sp of kept) {
        counts.set(sp.type, (counts.get(sp.type) || 0) + 1);
      }
      // Keep kinds with <= 2 remaining as late as possible; otherwise thin the commonest kind first
      let pool = [...counts.entries()].filter(([, c]) => c > 2);
      if (pool.length === 0) pool = [...counts.entries()].filter(([, c]) => c > 1);
      if (pool.length === 0) pool = [...counts.entries()];
      const maxCount = Math.max(...pool.map(([, c]) => c));
      const commonest = new Set(pool.filter(([, c]) => c === maxCount).map(([t]) => t));

      // Drop whichever enemy of the commonest kind stands closest to another comrade
      let dropIdx = -1;
      let minDistSq = Infinity;
      for (let i = 0; i < kept.length; i++) {
        if (!commonest.has(kept[i].type)) continue;
        let nearestSq = Infinity;
        for (let j = 0; j < kept.length; j++) {
          if (i === j) continue;
          const dx = kept[i].pos.x - kept[j].pos.x;
          const dz = kept[i].pos.z - kept[j].pos.z;
          const dSq = dx * dx + dz * dz;
          if (dSq < nearestSq) nearestSq = dSq;
        }
        if (nearestSq < minDistSq) {
          minDistSq = nearestSq;
          dropIdx = i;
        }
      }
      if (dropIdx < 0) dropIdx = kept.length - 1;
      kept.splice(dropIdx, 1);
    }
    return [...kept, ...bosses];
  }

  loadLevel(index, isPreviewOnly = false, duelOpts = null) {
    this._clearWorld();
    this.levelIndex = index;
    const { meta, builder } = LEVELS[index];

    // Apply era UI theme while preserving Practice Mode class if active (never in Duel)
    document.body.className = meta.themeClass;
    if (this.practiceMode && !(duelOpts && duelOpts.duelMode)) document.body.classList.add('pax-active');

    // Fresh collision & particle systems inside worldGroup
    this.collision = new CollisionWorld();
    this.particles = new ParticleSystem(this.worldGroup);

    const built = builder(this.worldGroup, this.collision, this.particles);
    const activeMapSize = (duelOpts && duelOpts.mapSize) || this.mapSizePref || 'medium';
    const activeWits = (duelOpts && duelOpts.wits) || this.witsPref || 'medium';
    this.activeWits = activeWits;
    this.activeMapSize = activeMapSize;
    const seed = (duelOpts && duelOpts.seed) || (Math.floor(Math.random() * 1e9) + 1);
    this.runSeed = seed;
    const rng = makeSeededRng(seed);

    const bossSpPre = built.enemySpawns.find((s) => s.isBossWave);
    // Stage 14: Soviet Metro/5-Floor Block/Open Church + 9 Cultural Landmarks + Shishi-odoshi + Prostrating Pilgrim + Swiss Suone!
    const s14 = buildStage14Landmarks(this.worldGroup, this.collision, built.animated || [], meta.id);
    this.stage14AudioHooks = s14.audioHooks || [];
    this.stage14Data = s14;

    const mapRes = applyMapSize(
      this.worldGroup, this.collision, built.animated || [], meta.id, activeMapSize,
      built.enemySpawns, meta.spawnPos, bossSpPre ? bossSpPre.pos : null, rng
    );
    const chapterSpawns = mapRes.enemySpawns;

    // Register breakable wooden props & powder kegs BEFORE building A* nav grid!
    this.destructibles = new DestructibleWorld();
    this.destructibles.scanAndRegister(this.worldGroup, this.collision, meta.id, this.particles);
    // Stage 14 Item 91: Drawn-geometry ray collider (roofs, rocks, carts) & walkable roof surfaces!
    this.collision.buildMeshRayCollider(this.worldGroup);
    // Build real 2D A* navigation grid directly from this level's exact collision shapes
    this.collision.buildNavGrid(activeMapSize === 'large' ? 1.6 : 1.2);
    this.animatedCallbacks = built.animated || [];
    this.pickups = built.pickups || [];
    this.bystanders = [...(built.bystanders || []), ...(s14.bystanders || []), ...(mapRes.extraBystanders || [])];
    this.animals = spawnChapterAnimals(this.worldGroup, this.collision, meta.id);
    this.ambientLife = spawnAmbientLife(this.worldGroup, this.collision, this.animatedCallbacks, meta.id, (vPos, halfW, halfL, dmg) => {
      if (this.state !== 'playing') return;
      if (Math.abs(this.player.pos.x - vPos.x) < halfW && Math.abs(this.player.pos.z - vPos.z) < halfL && Math.abs(this.player.pos.y - vPos.y) < 2.2) {
        const pushX = this.player.pos.x >= vPos.x ? 2.6 : -2.6;
        this.collision.moveHorizontal(this.player.pos, pushX, 0, 0.5, this.player.pos.y);
        this._damagePlayer(dmg, 'vehicle');
      }
    });
    this.tellApple = built.tellApple || null;
    this.enterableBuildings = built.enterableBuildings || [];
    this.specialSpots = built.specialSpots || {};

    // Build 512x512 Mini-Map + Fog of War + Named Landmarks once per chapter!
    if (this.minimap) {
      this.minimap.buildForChapter(meta.id, this.collision, this.worldGroup, [...(built.landmarks || []), ...(s14.landmarks || []), ...(mapRes.extraLandmarks || [])], mapRes.bounds);
      this.minimap.revealAround(meta.spawnPos.x, meta.spawnPos.z, 30);
    }

    // Reset Automatic Graphics probing at every chapter load (starts on High)
    if (this.graphicsPref === 'auto') {
      this.autoGfx.samples = [];
      this.autoGfx.pendingCheck = null;
      this.autoGfx.lockedUntilNextChapter = false;
      this.activeGraphicsLevel = 'high';
    }
    this.applyGraphicsLevel(this.activeGraphicsLevel);
    this._syncGraphicsUi();

    // Remember the far end of the map (boss spawn) for Duel Mode two-end spawning
    const bossSp = built.enemySpawns.find((s) => s.isBossWave);
    this.duelFarSpawnPos = bossSp ? bossSp.pos.clone() : new THREE.Vector3(0, 0, -28);

    // Setup Player, Difficulty & Chosen Hero/Fighter Modifiers
    const isDuel = !!(duelOpts && duelOpts.duelMode);
    const diff = isDuel ? DIFFICULTY.bad : DIFFICULTY[this.difficultyKey];
    const hero = (isDuel && duelOpts.fighter)
      ? duelOpts.fighter
      : getHeroById(meta.id, this.selectedHeroIds[meta.id]);
    this.activeHero = hero;
    const mods = hero.mods || {};
    const effectiveMaxHp = mods.fixedMaxHp
      ? mods.fixedMaxHp
      : Math.round(diff.playerHp * (mods.maxHpMult || 1));

    this.player.pos.copy(meta.spawnPos);
    this.player.vel.set(0, 0, 0);
    this.player.yaw = meta.spawnYaw;
    this.player.pitch = 0;
    this.player.maxHp = effectiveMaxHp;
    this.player.hp = effectiveMaxHp;
    this.player.stamina = 100;
    this.player.grounded = true;
    this.player.crouched = false;
    this.player.sneaking = false;
    this.player.onLadder = null;
    this.player.ladderRungDist = 0;
    this.player.lastDryPos.copy(meta.spawnPos);
    this.player.submergedTimer = 0;
    this.player.stepTimer = 0;
    this.player.eyeHeight = 1.68;
    if (this.dom.crouchBadge) this.dom.crouchBadge.classList.add('hidden');
    if (this.dom.sneakBadge) this.dom.sneakBadge.classList.add('hidden');
    this.timeSinceLastDamage = 999;

    this.stats = { score: 0, shots: 0, hits: 0, headshots: 0, kills: 0, bystandersKilled: 0 };

    // Spawn Enemies (Online Duel/Co-op supports 0..24 enemies + boss in co-op, deterministically seeded!)
    if (isDuel) {
      const isCoop = !!(duelOpts && duelOpts.coopMode);
      this.bossSpawnPending = null;
      const reqCount = Math.max(0, Math.min(24, parseInt(duelOpts.duelEnemiesCount, 10) || 0));
      if (reqCount > 0) {
        const pool = isCoop ? chapterSpawns : chapterSpawns.filter((s) => !s.isBossWave);
        const selectedOnline = this._selectChapterEnemies(pool, reqCount, 24);
        const randOnline = randomizeGroundSpawns(selectedOnline, this.collision, meta.spawnPos, rng);
        let idx = 0;
        for (const sp of randOnline) {
          const enemy = new Enemy(sp.type, sp.pos, isCoop ? 1.0 : 0.9, sp.options || {});
          enemy.duelIndex = idx++;
          this.worldGroup.add(enemy.mesh);
          this.enemies.push(enemy);
        }
      }
    } else {
      const maxCap = activeMapSize === 'large' ? 45 : 30;
      const selectedSpawns = this._selectChapterEnemies(chapterSpawns, this.enemyCountPref, maxCap);
      const finalSpawns = isPreviewOnly ? selectedSpawns : randomizeGroundSpawns(selectedSpawns, this.collision, meta.spawnPos, rng);
      for (const sp of finalSpawns) {
        if (sp.isBossWave) {
          this.bossSpawnPending = sp;
        } else {
          const enemy = new Enemy(sp.type, sp.pos, diff.enemyMult, sp.options || {});
          this.worldGroup.add(enemy.mesh);
          this.enemies.push(enemy);
        }
      }
    }

    // Build Era Weapons: hero's own + chapter second weapon + fists always last (max 6 weapons) + chapter starting bag!
    const gear = CHAPTER_GEAR[meta.id] || CHAPTER_GEAR.west;
    const allEraWeapons = ERA_WEAPONS[meta.id];
    const baseIds = hero.weaponIds
      ? hero.weaponIds.slice()
      : allEraWeapons.filter((w) => w.id !== 'dynamite' && w.id !== 'firepot').map((w) => w.id);

    // Ensure every hero starts with the chapter's second weapon (for Normandy/Soviet pistol heroes, add the rifle/SMG!)
    let secondId = gear.second;
    if (meta.id === 'normandy' && baseIds[0] === 'heavy_pistol') secondId = 'mosin_scoped';
    if (meta.id === 'soviet' && baseIds[0] === 'soviet_pistol') secondId = 'soviet_smg';
    if (secondId && !baseIds.includes(secondId)) {
      baseIds.splice(1, 0, secondId);
    }
    // Cap at 5 real weapons so Fists ALWAYS sits last (up to 6 total!)
    const finalIds = baseIds.filter((id) => id !== 'fists').slice(0, 5);
    finalIds.push('fists');

    this._makeWeaponInstance = (tpl, takenFromEnemy = false, customAmmo = null) => {
      const ov = (mods.weaponOverrides && mods.weaponOverrides[tpl.id]) || {};
      const fireRateMult = (tpl.kind === 'melee' && mods.meleeFireRateMult ? mods.meleeFireRateMult : 1)
        * (mods.fireRateMult || 1)
        * (ov.fireRateMult || 1);
      const reloadTimeMult = (mods.reloadTimeMult || 1) * (ov.reloadTimeMult || 1);
      const damageMult = (tpl.kind === 'melee' && mods.meleeDamageMult ? mods.meleeDamageMult : 1)
        * (mods.damageMult || 1)
        * (ov.damageMult || 1);
      const rangeBonus = tpl.kind === 'melee' && mods.meleeRangeBonus ? mods.meleeRangeBonus : 0;
      const startTotal = tpl.infinite ? 99 : (tpl.startTotal || (tpl.magSize + tpl.reserve));
      const maxCarry = tpl.infinite ? 99 : startTotal * 2;
      const total = tpl.infinite ? 99 : (customAmmo !== null ? Math.min(maxCarry, customAmmo) : startTotal);
      const mag = tpl.infinite ? 99 : Math.min(tpl.magSize, total);
      const curReserve = tpl.infinite ? 99 : Math.max(0, total - mag);
      return {
        ...tpl,
        damage: Math.round(tpl.damage * damageMult),
        fireRate: +(tpl.fireRate * fireRateMult).toFixed(3),
        reloadTime: +(tpl.reloadTime * reloadTimeMult).toFixed(3),
        range: tpl.range ? +(tpl.range + rangeBonus).toFixed(2) : tpl.range,
        startTotal,
        maxCarry,
        mag,
        curReserve,
        takenFromEnemy
      };
    };

    this.weapons = finalIds
      .map((id) => getWeaponTemplate(id, meta.id))
      .filter(Boolean)
      .map((tpl) => this._makeWeaponInstance(tpl, false));

    this.weaponMeshes = this.weapons.map((w) => {
      const m = buildWeaponViewmodel(w.id);
      m.visible = false;
      this.weaponHolder.add(m);
      return m;
    });

    // Starting Bag + Bag Viewmodels
    this.bag = {
      heal: 0,
      big_stone: (gear.startBag && gear.startBag.big_stone) || 0,
      molotov: (gear.startBag && gear.startBag.molotov) || 0,
      bomb: (gear.startBag && gear.startBag.bomb) || 0
    };
    this.bagMeshes = {};
    for (const bk of ['heal_item', 'big_stone', 'molotov', 'bomb']) {
      const m = buildWeaponViewmodel(bk);
      m.visible = false;
      this.weaponHolder.add(m);
      this.bagMeshes[bk] = m;
    }

    // Special Skill for active hero/fighter
    this.skillState = {
      skill: getFighterSkill(hero),
      activeTime: 0,
      cooldownTime: 0
    };
    if (this.dom.skillTintOverlay) this.dom.skillTintOverlay.style.opacity = '0';
    if (this.dom.eagleEyeLayer) this.dom.eagleEyeLayer.innerHTML = '';

    // Aimed-Throw 3D Trajectory Preview
    this.aimPreview = new AimThrowPreview(this.worldGroup);
    this.aimThrowActive = false;

    const startWepIdx = Math.min(Math.max(0, this.weapons.length - 2), Math.max(0, hero.defaultWeaponIdx || 0));
    this.currentWeaponIdx = startWepIdx;
    this.activeSlotIdx = startWepIdx;
    this.reloading = false;
    this.fireTimer = 0;

    if (!isPreviewOnly) {
      this.weaponMeshes[startWepIdx].visible = true;
    }

    this._buildWeaponStripUI();
    this._updateHud();
    this.dom.bossBarWrap.classList.add('hidden');
  }

  selectHeroByIndex(idx) {
    const eraId = LEVELS[this.levelIndex].meta.id;
    const heroes = ERA_HEROES[eraId];
    if (!heroes || idx < 0 || idx >= heroes.length) return;
    const hero = heroes[idx];
    this.selectedHeroIds[eraId] = hero.id;
    this.activeHero = hero;

    // Update Hero Card visual highlight
    this.dom.heroCardsList.querySelectorAll('.hero-card').forEach((card, i) => {
      const active = i === idx;
      card.classList.toggle('active', active);
      card.setAttribute('aria-checked', active ? 'true' : 'false');
    });

    // Update Stage Caption
    this.dom.heroPreviewName.textContent = hero.name;
    this.dom.heroPreviewBio.textContent = hero.bio;
    this.dom.heroPreviewStrength.textContent = hero.strengthDesc;

    // Swap live 3D Hero Figure on the Turntable Stage!
    while (this.heroFigureHolder.children.length > 0) {
      this.heroFigureHolder.remove(this.heroFigureHolder.children[0]);
    }
    const fig = buildHeroFigure(hero.id);
    this.heroFigureHolder.add(fig);
    this.heroFigureHolder.rotation.y = 0.25;
    this.heroStagePop = 0.82;
  }

  showIntroCard() {
    this.state = 'intro';
    this.setScope(false);
    if (document.pointerLockElement) document.exitPointerLock();

    const meta = LEVELS[this.levelIndex].meta;
    const heroes = ERA_HEROES[meta.id];
    const currentId = this.selectedHeroIds[meta.id] || heroes[0].id;
    const currentIdx = Math.max(0, heroes.findIndex((h) => h.id === currentId));

    this.dom.titleScreen.classList.add('hidden');
    this.dom.endScreen.classList.add('hidden');
    this.dom.pauseScreen.classList.add('hidden');
    this.dom.hud.classList.add('hidden');
    this.dom.crosshair.classList.add('hidden');
    this.dom.introCard.classList.remove('hidden');

    this.dom.comicAct.textContent = `${meta.act} — ${meta.subtitle}`;
    this.dom.comicTitle.textContent = meta.title;
    if (this.dom.heroEnemiesSelect) {
      this.dom.heroEnemiesSelect.value = String(this.enemyCountPref);
    }
    this.dom.comicQuote.textContent = meta.quote;
    if (this.dom.heroHistoricalNote) {
      if (meta.historicalNote) {
        this.dom.heroHistoricalNote.textContent = meta.historicalNote;
        this.dom.heroHistoricalNote.classList.remove('hidden');
      } else {
        this.dom.heroHistoricalNote.classList.add('hidden');
      }
    }

    // Populate the 3 Hero Selection Cards (Mouse hover + click + keyboard 1/2/3!)
    this.dom.heroCardsList.innerHTML = heroes.map((h, i) => {
      const sk = getFighterSkill(h);
      return `
      <button type="button" class="hero-card" data-hero-idx="${i}" role="radio" aria-checked="false">
        <div class="hero-card-key">${i + 1}</div>
        <div class="hero-card-body">
          <div class="hero-card-name">${h.name}</div>
          <div class="hero-card-bio">${h.bio}</div>
          <div class="hero-card-strength"><span>${h.strengthLabel}</span>${h.strengthDesc} · <b>[E] ${sk.name}:</b> ${sk.desc}</div>
        </div>
      </button>
    `;
    }).join('');

    this.dom.heroCardsList.querySelectorAll('.hero-card').forEach((btn, i) => {
      btn.addEventListener('mouseenter', () => this.selectHeroByIndex(i));
      btn.addEventListener('focus', () => this.selectHeroByIndex(i));
      btn.addEventListener('click', () => this.selectHeroByIndex(i));
      btn.addEventListener('dblclick', () => {
        this.selectHeroByIndex(i);
        this.startMission();
      });
    });

    this.weaponHolder.visible = false;
    this.heroStage.visible = true;
    this.selectHeroByIndex(currentIdx);
    this.sound.startMusic(meta.musicTheme);
  }

  _requestLock() {
    try {
      const p = this.renderer.domElement.requestPointerLock();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    } catch {
      // Ignore pointer lock rejection in restricted contexts
    }
  }

  togglePracticeMode() {
    if (this.duel && this.duel.active) return; // PAX is disabled during Duel Mode
    this.practiceMode = !this.practiceMode;
    if (this.practiceMode && this.state === 'playing') {
      this.usedPracticeThisRun = true;
    }
    document.body.classList.toggle('pax-active', this.practiceMode);
    if (this.dom.paxBadge) {
      this.dom.paxBadge.classList.toggle('hidden', !this.practiceMode);
    }
    if (this.state === 'playing') {
      this.toast(this.practiceMode ? 'Practice mode: they cannot hurt you' : 'Practice mode off');
    }
  }

  startMission() {
    this.heroStage.visible = false;
    this.usedPracticeThisRun = this.practiceMode;
    this.loadLevel(this.levelIndex, false);
    this.state = 'playing';
    this.dom.introCard.classList.add('hidden');
    this.dom.titleScreen.classList.add('hidden');
    this.dom.pauseScreen.classList.add('hidden');
    this.dom.endScreen.classList.add('hidden');
    this.dom.hud.classList.remove('hidden');
    this.dom.crosshair.classList.remove('hidden');
    this.weaponHolder.visible = true;

    const meta = LEVELS[this.levelIndex].meta;
    this.camera.rotation.set(0, meta.spawnYaw, 0, 'YXZ');
    this.sound.startMusic(meta.musicTheme);
    this._requestLock();
    this.showCallout(`${this.activeHero.name.toUpperCase()} — DRAW!`);
  }

  pauseGame() {
    if (this.state !== 'playing') return;
    this.state = 'paused';
    this.mouseDownL = false;
    this.mouseDownR = false;
    this.setScope(false);
    this.dom.pauseScreen.classList.remove('hidden');
    this.dom.crosshair.classList.add('hidden');
    const meta = LEVELS[this.levelIndex].meta;
    this.dom.pauseLevelName.textContent = `${meta.act} — ${meta.title}`;
    if (document.pointerLockElement) document.exitPointerLock();
  }

  resumeGame() {
    this.state = 'playing';
    this.dom.pauseScreen.classList.add('hidden');
    this.dom.crosshair.classList.remove('hidden');
    this._requestLock();
  }

  restartLevel() {
    this.startMission();
  }

  returnToTitle() {
    this.state = 'title';
    this.setScope(false);
    this.weaponHolder.visible = false;
    this.heroStage.visible = false;
    this.dom.hud.classList.add('hidden');
    this.dom.crosshair.classList.add('hidden');
    this.dom.pauseScreen.classList.add('hidden');
    this.dom.endScreen.classList.add('hidden');
    this.dom.introCard.classList.add('hidden');
    this.dom.titleScreen.classList.remove('hidden');
    if (document.pointerLockElement) document.exitPointerLock();
    this.sound.stopMusic();
    // Choose a random level for the title background & matching accent theme on every visit!
    const nextBg = Math.floor(Math.random() * LEVELS.length);
    this.loadLevel(nextBg, true);
    document.querySelectorAll('.level-card').forEach((c, i) => c.classList.toggle('active', i === nextBg));
  }

  // ---------------- Weapons, Bag, Skills & Combat ----------------
  _getChapterGear() {
    const meta = LEVELS[this.levelIndex]?.meta;
    return (meta && CHAPTER_GEAR[meta.id]) || CHAPTER_GEAR.west;
  }

  _getActiveBagEntries() {
    const gear = this._getChapterGear();
    const out = [];
    if (this.bag.heal > 0) out.push({ isBag: true, bagKey: 'heal', id: 'heal_item', name: gear.healName.toUpperCase(), shortName: gear.healName, count: this.bag.heal, spec: EXTRA_WEAPONS.heal_item });
    if (this.bag.big_stone > 0) out.push({ isBag: true, bagKey: 'big_stone', id: 'big_stone', name: 'BIG STONE', shortName: 'Big Stone', count: this.bag.big_stone, spec: EXTRA_WEAPONS.big_stone });
    if (this.bag.molotov > 0) out.push({ isBag: true, bagKey: 'molotov', id: 'molotov', name: 'MOLOTOV COCKTAIL', shortName: 'Molotov', count: this.bag.molotov, spec: EXTRA_WEAPONS.molotov });
    if (this.bag.bomb > 0) out.push({ isBag: true, bagKey: 'bomb', id: 'bomb', name: gear.bombName.toUpperCase(), shortName: gear.bombName, count: this.bag.bomb, spec: EXTRA_WEAPONS.bomb });
    return out;
  }

  getUnifiedSlots() {
    const wepEntries = this.weapons.map((w, i) => ({ isBag: false, weaponIdx: i, id: w.id, name: w.name, shortName: w.shortName, weapon: w }));
    return [...wepEntries, ...this._getActiveBagEntries()];
  }

  getHeldEntry() {
    const slots = this.getUnifiedSlots();
    if (slots.length === 0) return null;
    if (this.activeSlotIdx >= slots.length) this.activeSlotIdx = Math.max(0, this.weapons.length - 1);
    return slots[this.activeSlotIdx] || slots[0];
  }

  _hideAllViewmodels() {
    for (const m of this.weaponMeshes) if (m) m.visible = false;
    for (const m of Object.values(this.bagMeshes)) if (m) m.visible = false;
  }

  _getActiveViewmodel() {
    const held = this.getHeldEntry();
    if (!held) return null;
    return held.isBag ? (this.bagMeshes[held.id] || null) : (this.weaponMeshes[held.weaponIdx] || null);
  }

  selectUnifiedSlot(idx) {
    const slots = this.getUnifiedSlots();
    if (idx < 0 || idx >= slots.length) return;
    this.setScope(false);
    this.aimThrowActive = false;
    if (this.aimPreview) this.aimPreview.hide();
    this.reloading = false;
    this.pendingFlailSwing = null;
    this._hideAllViewmodels();
    this.activeSlotIdx = idx;
    const entry = slots[idx];
    if (!entry.isBag) {
      this.currentWeaponIdx = entry.weaponIdx;
      if (this.weaponMeshes[entry.weaponIdx]) this.weaponMeshes[entry.weaponIdx].visible = true;
    } else if (this.bagMeshes[entry.id]) {
      this.bagMeshes[entry.id].visible = true;
    }
    this.recoilOffset = -0.18;
    this._updateHud();
  }

  switchWeapon(idx) {
    if (idx < 0 || idx >= this.weapons.length) return;
    this.selectUnifiedSlot(idx);
  }

  _switchToFists() {
    const fistsIdx = this.weapons.findIndex((w) => w.id === 'fists');
    this.selectUnifiedSlot(fistsIdx >= 0 ? fistsIdx : Math.max(0, this.weapons.length - 1));
  }

  _handleWeaponDepleted(wIdx) {
    const w = this.weapons[wIdx];
    if (!w || w.infinite || w.mag > 0 || w.curReserve > 0) return;
    if (w.takenFromEnemy) {
      const removedMesh = this.weaponMeshes[wIdx];
      if (removedMesh && removedMesh.parent) removedMesh.parent.remove(removedMesh);
      this.weapons.splice(wIdx, 1);
      this.weaponMeshes.splice(wIdx, 1);
      this.toast(`${w.shortName.toUpperCase()} EMPTY — DISCARDED`);
      this._buildWeaponStripUI();
    } else {
      this.toast(`${w.shortName.toUpperCase()} EMPTY — FISTS`);
    }
    this._switchToFists();
  }

  useBagHeal() {
    if (this.state !== 'playing') return;
    if (this.bag.heal <= 0) {
      this.toast('NO HEALING ITEMS IN BAG');
      return false;
    }
    if (this.player.hp >= this.player.maxHp) {
      this.toast('HEALTH ALREADY FULL');
      return false;
    }
    this.bag.heal--;
    this.player.hp = Math.min(this.player.maxHp, this.player.hp + 35);
    if (this.player.hp >= 30) this.dom.damageOverlay.style.opacity = '0';
    this.sound.playPickup();
    this.toast(`${this._getChapterGear().healName.toUpperCase()} (+35 HP)`);
    const held = this.getHeldEntry();
    if (!held || (held.isBag && held.bagKey === 'heal' && this.bag.heal <= 0)) {
      this.selectUnifiedSlot(Math.min(this.currentWeaponIdx, this.weapons.length - 1));
    } else {
      this._updateHud();
    }
    return true;
  }

  activateSkill() {
    if (this.state !== 'playing') return false;
    const st = this.skillState;
    if (!st || !st.skill || st.activeTime > 0 || st.cooldownTime > 0) return false;
    st.activeTime = st.skill.duration;
    st.cooldownTime = st.skill.cooldown;
    this.showCallout(`${st.skill.name.toUpperCase()}!`);
    if (this.dom.skillTintOverlay) {
      this.dom.skillTintOverlay.style.background = st.skill.tint;
      this.dom.skillTintOverlay.style.opacity = '1';
    }
    if (st.skill.id === 'vanish') {
      // Enemies lose sight of the player and head toward where they last saw him
      for (const e of this.enemies) {
        if (!e.alive) continue;
        e.lastKnownPlayerPos = this.player.pos.clone();
        e.alert = false;
      }
    }
    this._updateHud();
    return true;
  }

  isSkillActive(skillId) {
    return !!(this.skillState && this.skillState.skill && this.skillState.skill.id === skillId && this.skillState.activeTime > 0);
  }

  triggerChapterBlade() {
    if (this.state !== 'playing' || this.fireTimer > 0) return false;
    const gear = this._getChapterGear();
    const eraId = LEVELS[this.levelIndex]?.meta?.id || 'west';
    const bladeTpl = getWeaponTemplate(gear.blade, eraId) || EXTRA_WEAPONS.cavalry_sabre;
    const mods = (this.activeHero && this.activeHero.mods) || {};
    const furyMult = this.isSkillActive('fury') ? 2.0 : 1.0;
    const furySpeed = this.isSkillActive('fury') ? 0.625 : 1.0;
    const dmg = Math.round(bladeTpl.damage * (mods.meleeDamageMult || 1) * furyMult);
    const range = (bladeTpl.range || 3.6) + (mods.meleeRangeBonus || 0);
    const rate = (bladeTpl.fireRate || 0.36) * (mods.meleeFireRateMult || 1) * furySpeed;
    this._executeMeleeArc(dmg, range, bladeTpl.arcCos !== undefined ? bladeTpl.arcCos : 0.32, bladeTpl.slashColor || 0xe6f9ff, rate, false);
    return true;
  }

  dropHeldItem() {
    if (this.state !== 'playing') return false;
    const held = this.getHeldEntry();
    if (!held) return false;
    const fwd = new THREE.Vector3(-Math.sin(this.player.yaw), 0, -Math.cos(this.player.yaw));
    const dropPos = this.player.pos.clone().addScaledVector(fwd, 1.35);
    dropPos.y = this.collision.getFloorHeight(dropPos.x, dropPos.z, this.player.pos.y + 0.4) + 0.38;

    if (held.isBag) {
      if (this.bag[held.bagKey] <= 0) return false;
      this.bag[held.bagKey]--;
      this._spawnDroppedItem({ kind: 'bag', bagKey: held.bagKey, label: held.shortName, pos: dropPos, requireLeave: true });
      if (this.duel && this.duel.isPlaying() && this.duel.net && this.duel.net.isOpen()) {
        this.duel.net.send({ type: 'drop_item', kind: 'bag', bagKey: held.bagKey, label: held.shortName, p: [dropPos.x, dropPos.y, dropPos.z] });
      }
      this.toast(`DROPPED ${held.shortName.toUpperCase()}`);
      if (this.bag[held.bagKey] <= 0) this.selectUnifiedSlot(Math.min(this.currentWeaponIdx, this.weapons.length - 1));
      else this._updateHud();
      return true;
    }

    const w = held.weapon;
    if (!w || w.id === 'fists') {
      this.toast('CANNOT DROP FISTS');
      return false;
    }
    const remaining = w.infinite ? 1 : (w.mag + w.curReserve);
    const wIdx = held.weaponIdx;
    const mesh = this.weaponMeshes[wIdx];
    if (mesh && mesh.parent) mesh.parent.remove(mesh);
    this.weapons.splice(wIdx, 1);
    this.weaponMeshes.splice(wIdx, 1);
    this._spawnDroppedItem({ kind: 'weapon', weaponId: w.id, ammo: remaining, label: w.shortName, pos: dropPos, requireLeave: true });
    if (this.duel && this.duel.isPlaying() && this.duel.net && this.duel.net.isOpen()) {
      this.duel.net.send({ type: 'drop_item', kind: 'weapon', weaponId: w.id, ammo: remaining, label: w.shortName, p: [dropPos.x, dropPos.y, dropPos.z] });
    }
    this.toast(`DROPPED ${w.shortName.toUpperCase()}`);
    this._buildWeaponStripUI();
    this._switchToFists();
    return true;
  }

  _addWeaponToArsenal(weaponId, ammoAmount, takenFromEnemy = true) {
    const eraId = LEVELS[this.levelIndex]?.meta?.id || 'west';
    const tpl = getWeaponTemplate(weaponId, eraId);
    if (!tpl) return false;
    const existing = this.weapons.find((w) => w.id === tpl.id);
    if (existing) {
      if (existing.infinite) return false; // Never pick up a duplicate blade!
      const curTotal = existing.mag + existing.curReserve;
      if (curTotal >= existing.maxCarry) return false;
      const add = Math.min(existing.maxCarry - curTotal, Math.max(1, ammoAmount || getAmmoDropAmount(tpl.id)));
      if (existing.mag < existing.magSize && existing.curReserve === 0) {
        const toMag = Math.min(existing.magSize - existing.mag, add);
        existing.mag += toMag;
        existing.curReserve += (add - toMag);
      } else {
        existing.curReserve += add;
      }
      this.toast(`+${add} ${existing.shortName.toUpperCase()}`);
      this._updateHud();
      return true;
    }
    if (this.weapons.length >= 6) return false;
    const inst = this._makeWeaponInstance(tpl, takenFromEnemy, tpl.infinite ? 99 : Math.max(1, ammoAmount || getAmmoDropAmount(tpl.id)));
    const vm = buildWeaponViewmodel(inst.id);
    vm.visible = false;
    this.weaponHolder.add(vm);
    // Insert right before Fists so Fists ALWAYS remains last!
    const fistsIdx = this.weapons.findIndex((w) => w.id === 'fists');
    const insertAt = fistsIdx >= 0 ? fistsIdx : this.weapons.length;
    this.weapons.splice(insertAt, 0, inst);
    this.weaponMeshes.splice(insertAt, 0, vm);
    if (this.activeSlotIdx >= insertAt) this.activeSlotIdx++;
    if (this.currentWeaponIdx >= insertAt) this.currentWeaponIdx++;
    this._buildWeaponStripUI();
    this.toast(`TOOK ${inst.shortName.toUpperCase()}`);
    this._updateHud();
    return true;
  }

  _spawnDroppedItem({ kind, weaponId = null, bagKey = null, ammo = 0, label = '', pos, requireLeave = false }) {
    const grp = new THREE.Group();
    const color = kind === 'weapon' ? 0xf2c86b : (bagKey === 'heal' ? 0x3ad67e : (bagKey === 'bomb' || bagKey === 'molotov' ? 0xf06538 : 0xc2b8a3));
    const core = new THREE.Mesh(
      kind === 'weapon' ? new THREE.BoxGeometry(0.55, 0.14, 0.18) : new THREE.SphereGeometry(0.18, 8, 8),
      new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.55, roughness: 0.45 })
    );
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.26, 0.34, 16),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.65, side: THREE.DoubleSide })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = -0.22;
    grp.add(core, ring);
    grp.position.copy(pos);
    this.worldGroup.add(grp);
    this.droppedItems.push({ kind, weaponId, bagKey, ammo, label, pos: pos.clone(), mesh: grp, requireLeave, hasLeft: !requireLeave, collected: false });
  }

  _registerRecoverableMissile(mesh, weaponId, worldPos, attachTo = null, isBag = false) {
    if (attachTo) {
      attachTo.updateMatrixWorld(true);
      const localPos = attachTo.worldToLocal(worldPos.clone());
      if (mesh.parent) mesh.parent.remove(mesh);
      mesh.position.copy(localPos);
      attachTo.add(mesh);
    } else {
      mesh.position.copy(worldPos);
    }
    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 6, 6),
      new THREE.MeshBasicMaterial({ color: 0xfff0a8, transparent: true, opacity: 0.45 })
    );
    mesh.add(glow);
    const rec = { mesh, weaponId, isBag, worldPos: worldPos.clone(), attachTo, collected: false };
    this.recoverableMissiles.push(rec);
    while (this.recoverableMissiles.length > 40) {
      const old = this.recoverableMissiles.shift();
      if (old && old.mesh && old.mesh.parent) old.mesh.parent.remove(old.mesh);
    }
  }

  setScope(active) {
    const held = this.getHeldEntry();
    const w = held && !held.isBag ? held.weapon : null;
    const canScope = active && w && w.altMode === 'scope' && !this.reloading && this.state === 'playing';
    this.scoped = canScope;
    if (canScope) {
      this.dom.scopeOverlay.classList.remove('hidden');
      this.dom.scopeLabel.textContent = w.scopeLabel || 'OPTIC ZOOM';
      this.dom.crosshair.classList.add('hidden');
      this.weaponHolder.visible = false;
    } else {
      this.dom.scopeOverlay.classList.add('hidden');
      if (this.state === 'playing') {
        this.dom.crosshair.classList.remove('hidden');
        this.weaponHolder.visible = true;
      }
    }
  }

  handleRightClickDown() {
    const held = this.getHeldEntry();
    if (!held) return;
    const spec = held.isBag ? held.spec : held.weapon;
    if (!spec) return;
    if (spec.aimableThrow) {
      this.aimThrowActive = true;
      return;
    }
    if (spec.altMode === 'scope') {
      this.setScope(true);
    } else if (spec.altMode === 'sword_cut') {
      this.triggerChapterBlade();
    } else if (spec.kind === 'fists') {
      this.tryFire(true);
    } else {
      this.tryFire(true);
    }
  }

  startReload() {
    const held = this.getHeldEntry();
    const w = held && !held.isBag ? held.weapon : null;
    if (!w || w.infinite || this.reloading) return;
    if (w.mag >= w.magSize || w.curReserve <= 0) return;
    this.setScope(false);
    this.reloading = true;
    this.reloadTimer = w.reloadTime;
    this.sound.playReload();
    this.toast('RELOADING...');
  }

  emitNoise(pos, loudnessM) {
    if (!pos || loudnessM <= 0) return 0;
    const wits = this.activeWits || this.witsPref || 'medium';
    let alerted = 0;
    for (const e of this.enemies) {
      if (e.alive && typeof e.onNoiseHeard === 'function') {
        if (e.onNoiseHeard(pos, loudnessM, wits)) {
          alerted++;
          if (e.style === 'dog') this.sound.playDogBark();
        }
      }
    }
    if (loudnessM >= 14) {
      this.triggerWorldFright(pos, Math.min(28, loudnessM));
    }
    return alerted;
  }

  triggerWorldFright(dangerPos, radius = 22) {
    const eraId = LEVELS[this.levelIndex]?.meta?.id || 'west';
    let frightenedAny = false;
    for (const b of this.bystanders) {
      if (b.alive && b.mesh.position.distanceTo(dangerPos) <= radius) {
        b.triggerFright(dangerPos);
        frightenedAny = true;
      }
    }
    if (frightenedAny) this.sound.speakVoice(eraId, 'fright');
    for (const a of (this.animals || [])) {
      if (a.alive && !a.hostile && a.mesh.position.distanceTo(dangerPos) <= radius) {
        a.triggerFright(dangerPos);
      }
    }
    if (this.ambientLife) this.ambientLife.scareBirds(dangerPos, radius);
  }

  _damageBystander(b, dmg, hitPoint) {
    if (!b || !b.alive) return;
    b.hp -= dmg;
    this.particles.spawnImpact(hitPoint || b.mesh.position, 0xc42222, 8, 6);
    const eraId = LEVELS[this.levelIndex]?.meta?.id || 'west';
    this.sound.speakVoice(eraId, 'pain');
    if (b.hp <= 0) {
      b.alive = false;
      b.hp = 0;
      if (b.boxCollider) {
        this.collision.removeBox(b.boxCollider);
        b.boxCollider = null;
      }
      this.stats.bystandersKilled = (this.stats.bystandersKilled || 0) + 1;
      this.toast('BYSTANDER KILLED');
      return;
    }
    // Stage 13 Item 82: 1-in-4 hurt bystanders still standing in SP draw the chapter's commonest weapon and fight back!
    const inOnline = !!(this.duel && this.duel.active);
    if (!inOnline && b.willFightBack && !b.foughtBack && !b.noFight) {
      b.foughtBack = true;
      b.alive = false;
      b.mesh.visible = false;
      if (b.boxCollider) {
        this.collision.removeBox(b.boxCollider);
        b.boxCollider = null;
      }
      const commonType = {
        west: 'cowboy', japan: 'ronin', swiss: 'halberdier', greece: 'spartan_hoplite',
        scandinavia: 'viking_warrior', normandy: 'german_rifleman', soviet: 'soviet_militia',
        tibet: 'pla_rifleman', aztec: 'spanish_swordsman'
      }[eraId] || 'cowboy';
      const diff = DIFFICULTY[this.difficultyKey] || DIFFICULTY.bad;
      const fighter = new Enemy(commonType, b.mesh.position.clone(), diff.enemyMult);
      fighter.alert = true;
      fighter.lastKnownPos = this.player.pos.clone();
      fighter.searchTimer = 12.0;
      fighter.fromBystander = true;
      this.worldGroup.add(fighter.mesh);
      this.enemies.push(fighter);
      this.toast('A BYSTANDER FOUGHT BACK!');
      this._updateHud();
    } else {
      b.triggerFright(this.player.pos);
    }
  }

  _damageAnimal(a, dmg, hitPoint, forceRetaliate = null) {
    if (!a || !a.alive) return;
    const res = a.takeDamage(dmg, hitPoint, this.particles, forceRetaliate);
    this.sound.playHit(false);
    if (res.turnedHostile) {
      this.toast(`${a.name.toUpperCase()} CHARGES YOU!`);
    }
    this._updateHud();
  }

  _destructibleCallbacks(fromShot = true) {
    return {
      onPropBroken: (prop) => {
        // Drop any pickups resting above the broken table/crate down to the floor below!
        for (const pk of this.pickups) {
          if (pk.collected) continue;
          if (Math.abs(pk.pos.x - prop.center.x) <= prop.size.x * 0.65 && Math.abs(pk.pos.z - prop.center.z) <= prop.size.z * 0.65 && pk.pos.y >= prop.center.y) {
            const newY = this.collision.getFloorHeight(pk.pos.x, pk.pos.z, pk.pos.y) + 0.45;
            pk.pos.y = newY;
            pk.mesh.position.y = newY;
          }
        }
        // Wake nearby enemies on wood breakage!
        for (const e of this.enemies) {
          if (e.alive && e.mesh.position.distanceTo(prop.center) < 12) {
            e.lastKnownPlayerPos = prop.center.clone();
          }
        }
        if (fromShot && this.duel && this.duel.isPlaying() && this.duel.net && this.duel.net.isOpen()) {
          this.duel.net.send({ type: 'break_prop', id: prop.id });
        }
      },
      onKegExplode: (center, radius, centerDmg) => {
        this.sound.playExplosion();
        // Damage player (with wall attenuation)
        const dP = this.player.pos.distanceTo(center);
        if (dP < radius) {
          const wallAtten = this.collision.hasLineOfSight(center.clone().add(new THREE.Vector3(0, 0.8, 0)), this.player.pos.clone().add(new THREE.Vector3(0, 1.0, 0))) ? 1.0 : 0.5;
          const dmgP = Math.round(centerDmg * (1 - (dP / radius) * 0.65) * wallAtten);
          if (dmgP > 0) this._damagePlayer(dmgP, 'keg');
        }
        // Damage enemies
        for (const e of this.enemies) {
          if (!e.alive || !e.mesh.visible) continue;
          const dE = e.mesh.position.distanceTo(center);
          if (dE < radius) {
            const wallAtten = this.collision.hasLineOfSight(center.clone().add(new THREE.Vector3(0, 0.8, 0)), e.mesh.position.clone().add(new THREE.Vector3(0, 1.1, 0))) ? 1.0 : 0.5;
            const dmgE = Math.round(centerDmg * (1 - (dE / radius) * 0.65) * wallAtten);
            if (dmgE > 0) this._damageEnemy(e, dmgE, false, e.mesh.position.clone().add(new THREE.Vector3(0, 1.1, 0)));
          }
        }
        // Damage bystanders (60% of blast damage)
        for (const b of this.bystanders) {
          if (b.alive === false) continue;
          const bPos = b.root ? b.root.position : b.pos;
          if (!bPos) continue;
          const dB = bPos.distanceTo(center);
          if (dB < radius && typeof this._damageBystander === 'function') {
            const dmgB = Math.round(centerDmg * (1 - (dB / radius) * 0.65) * 0.6);
            this._damageBystander(b, dmgB, center);
          }
        }
      }
    };
  }

  _executeMeleeArc(dmg, range, arcDot, slashColor, rate, isHeavy = false) {
    this.fireTimer = rate;
    this.slashAnim = 1.0;
    this.sound.playShot('slash');
    const forward = new THREE.Vector3();
    this.camera.getWorldDirection(forward);
    const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();
    const origin = this.camera.getWorldPosition(new THREE.Vector3());
    this.particles.spawnSlashArc(origin, forward, right, slashColor);
    if (this.duel && this.duel.isPlaying()) {
      this.duel.onLocalMelee(origin, forward, slashColor);
    }

    let hitAny = false;
    if (this.duel && this.duel.isPlaying() && this.duel.remoteFighter && this.duel.remoteFighter.alive) {
      const rf = this.duel.remoteFighter;
      const targetChest = new THREE.Vector3(rf.root.position.x, rf.root.position.y + 1.15 * rf.figureScale, rf.root.position.z);
      const toR = new THREE.Vector3().subVectors(targetChest, origin);
      if (toR.length() <= range + rf.radius * 0.6) {
        toR.normalize();
        if (toR.dot(forward) > arcDot && this.collision.hasLineOfSight(origin, targetChest)) {
          hitAny = true;
          this.duel.onLocalHitOpponent(dmg, isHeavy, targetChest);
        }
      }
    }

    for (const enemy of this.enemies) {
      if (!enemy.alive || !enemy.mesh.visible) continue;
      const targetChest = new THREE.Vector3(
        enemy.mesh.position.x,
        enemy.mesh.position.y + (enemy.style === 'dog' ? 0.55 : 1.15),
        enemy.mesh.position.z
      );
      const toE = new THREE.Vector3().subVectors(targetChest, origin);
      if (toE.length() <= range) {
        toE.normalize();
        if (toE.dot(forward) > arcDot && this.collision.hasLineOfSight(origin, targetChest)) {
          hitAny = true;
          if (this.duel && this.duel.isPlaying() && this.duel.role === 'guest') {
            this.duel.onGuestHitAI(enemy.duelIndex, dmg, isHeavy, targetChest);
          } else {
            this._damageEnemy(enemy, dmg, isHeavy, enemy.mesh.position.clone().add(new THREE.Vector3(0, 1.3, 0)));
          }
        }
      }
    }
    if (this.destructibles) {
      const brokenHit = this.destructibles.hitArc(origin, forward, range, dmg, this._destructibleCallbacks(true));
      if (brokenHit) hitAny = true;
    }
    if (hitAny) this._flashHitmarker(isHeavy);
    return hitAny;
  }

  tryFire(isAlt) {
    if (this.fireTimer > 0 || this.reloading) return;
    if (this.duel && this.duel.active && (this.duel.myDead || this.duel.phase !== 'playing')) return;
    const held = this.getHeldEntry();
    if (!held) return;

    // Bag items held in hand (Heal, Big Stone, Molotov, Bomb)
    if (held.isBag) {
      if (held.bagKey === 'heal') {
        this.useBagHeal();
        return;
      }
      if (this.bag[held.bagKey] <= 0) return;
      const spec = held.spec;
      this.bag[held.bagKey]--;
      this.fireTimer = spec.fireRate || 0.8;
      this.recoilOffset = spec.recoil || 0.14;
      this.aimThrowActive = false;
      if (this.aimPreview) this.aimPreview.hide();
      this.sound.playShot('throw');

      const origin = this.camera.getWorldPosition(new THREE.Vector3());
      const dir = new THREE.Vector3();
      this.camera.getWorldDirection(dir);
      const right = new THREE.Vector3().crossVectors(dir, new THREE.Vector3(0, 1, 0)).normalize();
      const startPos = origin.clone().addScaledVector(dir, 0.72).addScaledVector(right, 0.14).add(new THREE.Vector3(0, -0.08, 0));

      if (held.bagKey === 'big_stone') {
        const mesh = new THREE.Mesh(
          new THREE.DodecahedronGeometry(0.18, 0),
          new THREE.MeshStandardMaterial({ color: 0x7b756b, roughness: 0.94 })
        );
        mesh.position.copy(startPos);
        this.worldGroup.add(mesh);
        this.playerProjectiles.push({
          mesh,
          vel: dir.clone().multiplyScalar(spec.projSpeed || 14),
          gravity: spec.projGravity || 15.5,
          damage: Math.round((spec.damage || 130) * (this.isSkillActive('dead_eye') ? 1.8 : 1.0)),
          headMult: 1.8,
          projType: 'big_stone',
          weaponId: 'big_stone',
          isBag: true,
          sticks: true,
          recoverable: true,
          spinRate: 8,
          life: 4.5
        });
      } else {
        const isMolotov = held.bagKey === 'molotov';
        const mesh = new THREE.Mesh(
          isMolotov ? new THREE.CylinderGeometry(0.06, 0.065, 0.24, 8) : new THREE.SphereGeometry(0.15, 8, 8),
          new THREE.MeshBasicMaterial({ color: spec.projColor || 0xd93622 })
        );
        mesh.position.copy(startPos);
        this.worldGroup.add(mesh);
        const throwVel = dir.clone().multiplyScalar(spec.throwSpeed || 20).add(new THREE.Vector3(0, spec.throwUp || 5.2, 0));
        this.playerThrowables.push({
          mesh,
          vel: throwVel,
          fuse: isMolotov ? 4.0 : (spec.fuseTime || 2.0),
          isMolotov,
          burnDuration: spec.burnDuration || 7.0,
          damage: spec.damage || 140,
          radius: spec.blastRadius || 6.5
        });
        if (this.duel && this.duel.isPlaying()) {
          this.duel.onLocalThrow(mesh.position, throwVel, spec.projColor || 0xd93622, spec.blastRadius || 6.5);
        }
      }
      if (this.bag[held.bagKey] <= 0) {
        this.selectUnifiedSlot(Math.min(this.currentWeaponIdx, this.weapons.length - 1));
      } else {
        this._updateHud();
      }
      return;
    }

    const w = held.weapon;
    const wIdx = held.weaponIdx;
    if (!w) return;

    const furyDmgMult = this.isSkillActive('fury') ? 2.0 : 1.0;
    const furyRateMult = this.isSkillActive('fury') ? 0.625 : 1.0;
    const deadEyeDmgMult = this.isSkillActive('dead_eye') ? 1.8 : 1.0;

    // Fists (Always last weapon: LMB alternating jab 28, RMB hook 55, 1.6m reach, silent!)
    if (w.kind === 'fists') {
      const isHook = !!isAlt;
      const dmg = Math.round((isHook ? (w.hookDamage || 55) : (w.damage || 28)) * furyDmgMult);
      const rate = (isHook ? (w.hookFireRate || 0.52) : (w.fireRate || 0.30)) * furyRateMult;
      this.fistHand = isHook ? 1 : (1 - this.fistHand);
      this._executeMeleeArc(dmg, w.range || 1.6, 0.35, w.slashColor || 0xffe4c4, rate, isHook);
      return;
    }

    if (!w.infinite && w.mag <= 0) {
      if (w.curReserve > 0) this.startReload();
      else this._handleWeaponDepleted(wIdx);
      return;
    }

    // Melee Weapon (Katana / Swiss Halberd / Iron Flail / Sabre / Sword / Seax / Knife / Macuahuitl)
    if (w.kind === 'melee') {
      if (w.meleeStyle === 'flail') {
        const rate = w.fireRate * furyRateMult;
        this.fireTimer = rate;
        this.pendingFlailSwing = {
          elapsed: 0,
          duration: rate,
          hitAt: rate * (w.hitPhase || 0.6),
          hitDone: false,
          damage: Math.round(w.damage * furyDmgMult),
          range: w.range,
          arcCos: w.arcCos !== undefined ? w.arcCos : 0.208,
          slashColor: w.slashColor || 0xb8d4e8
        };
        return;
      }

      const heavy = isAlt && w.altMode === 'heavy_slash';
      const rate = (heavy ? w.fireRate * 1.45 : w.fireRate) * furyRateMult;
      const dmg = Math.round((heavy ? w.damage * 1.65 : w.damage) * furyDmgMult);
      const range = heavy ? w.range + 1.0 : w.range;
      const arcDot = w.arcCos !== undefined ? w.arcCos : 0.35;
      this._executeMeleeArc(dmg, range, arcDot, w.slashColor, rate, heavy);
      return;
    }

    // Physical Thrown / Launched Projectiles (Shuriken, Javelin, Throwing Axe, Poison Darts, Heavy Stones, Blowgun, Sling)
    if (w.kind === 'projectile') {
      w.mag--;
      this.fireTimer = w.fireRate;
      this.recoilOffset = w.recoil;
      this.stats.shots++;
      this.aimThrowActive = false;
      if (this.aimPreview) this.aimPreview.hide();
      this.sound.playShot(w.sound);

      const origin = this.camera.getWorldPosition(new THREE.Vector3());
      const baseDir = new THREE.Vector3();
      this.camera.getWorldDirection(baseDir);
      const upAxis = new THREE.Vector3(0, 1, 0);
      const right = new THREE.Vector3().crossVectors(baseDir, upAxis).normalize();
      const count = w.fanCount || 1;
      const halfAngle = w.fanHalfAngle || 0;
      const speed = w.projSpeed || 52;
      const grav = w.projGravity !== undefined ? w.projGravity : 2.8;

      for (let k = 0; k < count; k++) {
        const frac = count === 1 ? 0 : (k / (count - 1)) * 2 - 1;
        const yawOff = frac * halfAngle;
        const dir = baseDir.clone().applyAxisAngle(upAxis, yawOff).normalize();
        const startPos = origin.clone()
          .addScaledVector(dir, 0.72)
          .addScaledVector(right, 0.14 + frac * 0.06)
          .add(new THREE.Vector3(0, -0.08, 0));

        let mesh;
        if (w.projType === 'shuriken') {
          mesh = buildEightPointShuriken(1.18);
        } else if (w.projType === 'poison_dart' || w.projType === 'blowgun_dart') {
          mesh = new THREE.Group();
          const len = w.projType === 'blowgun_dart' ? 0.34 : 0.65;
          const shaft = new THREE.Mesh(
            new THREE.CylinderGeometry(0.01, 0.01, len, 6),
            new THREE.MeshStandardMaterial({ color: 0x4a2c16, roughness: 0.85 })
          );
          shaft.rotation.x = Math.PI / 2;
          const tip = new THREE.Mesh(
            new THREE.ConeGeometry(0.022, 0.11, 4),
            new THREE.MeshBasicMaterial({ color: 0x35f078 })
          );
          tip.rotation.x = Math.PI / 2;
          tip.position.z = len * 0.55;
          mesh.add(shaft, tip);
          mesh.lookAt(startPos.clone().add(dir));
        } else if (w.projType === 'javelin') {
          mesh = new THREE.Group();
          const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 1.45, 6), new THREE.MeshStandardMaterial({ color: 0x6b4423, roughness: 0.8 }));
          shaft.rotation.x = Math.PI / 2;
          const head = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.24, 4), new THREE.MeshStandardMaterial({ color: 0xd9a441, metalness: 0.85, roughness: 0.25 }));
          head.rotation.x = Math.PI / 2;
          head.position.z = 0.82;
          mesh.add(shaft, head);
          mesh.lookAt(startPos.clone().add(dir));
        } else if (w.projType === 'throwing_axe') {
          mesh = new THREE.Group();
          const haft = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.022, 0.52, 6), new THREE.MeshStandardMaterial({ color: 0x5c3a21, roughness: 0.85 }));
          const blade = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.22, 0.18), new THREE.MeshStandardMaterial({ color: 0xc8d4e0, metalness: 0.88, roughness: 0.22 }));
          blade.position.set(0, 0.18, 0.08);
          mesh.add(haft, blade);
          mesh.lookAt(startPos.clone().add(dir));
        } else if (w.projType === 'heavy_stone' || w.projType === 'sling_pellet') {
          const r = w.projType === 'sling_pellet' ? 0.075 : 0.15;
          mesh = new THREE.Mesh(
            new THREE.DodecahedronGeometry(r, 0),
            new THREE.MeshStandardMaterial({ color: 0x7f786d, roughness: 0.92 })
          );
        } else {
          mesh = new THREE.Mesh(
            new THREE.SphereGeometry(0.11, 8, 8),
            new THREE.MeshStandardMaterial({ color: w.projColor || 0x9aa3ad, roughness: 0.7 })
          );
        }
        mesh.position.copy(startPos);
        this.worldGroup.add(mesh);

        this.playerProjectiles.push({
          mesh,
          vel: dir.clone().multiplyScalar(speed),
          gravity: grav,
          damage: Math.round(w.damage * deadEyeDmgMult),
          headMult: w.headMult || 2.0,
          projType: w.projType || 'shuriken',
          weaponId: w.id,
          isBag: false,
          sticks: w.sticks !== undefined ? w.sticks : true,
          recoverable: !!w.recoverable && k === 0,
          spinRate: w.projType === 'shuriken' ? 28 : (w.projType === 'throwing_axe' ? 16 : (w.projType === 'heavy_stone' ? 9 : 0)),
          poison: w.poison || null,
          life: 4.5
        });

        if (k === Math.floor(count / 2) && this.duel && this.duel.isPlaying()) {
          this.duel.onLocalShot(startPos, startPos.clone().addScaledVector(dir, 26), w.sound, w.tracerColor || 0xd0ecff);
        }
      }

      if (w.mag === 0 && w.curReserve > 0) this.startReload();
      else if (w.mag === 0 && w.curReserve === 0) this._handleWeaponDepleted(wIdx);
      this._updateHud();
      return;
    }

    // Throwable Explosive (Dynamite / Alpine Fire-Pot)
    if (w.kind === 'throwable') {
      w.mag--;
      this.fireTimer = w.fireRate;
      this.recoilOffset = w.recoil;
      this.sound.playShot('throw');

      const origin = this.camera.getWorldPosition(new THREE.Vector3());
      const dir = new THREE.Vector3();
      this.camera.getWorldDirection(dir);

      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.16, 8, 8),
        new THREE.MeshBasicMaterial({ color: w.projColor })
      );
      mesh.position.copy(origin).addScaledVector(dir, 0.8);
      this.worldGroup.add(mesh);

      const throwVel = dir.multiplyScalar(22).add(new THREE.Vector3(0, 6.2, 0));
      this.playerThrowables.push({
        mesh,
        vel: throwVel,
        fuse: 2.0,
        damage: w.damage,
        radius: w.blastRadius
      });
      if (this.duel && this.duel.isPlaying()) {
        this.duel.onLocalThrow(mesh.position, throwVel, w.projColor, w.blastRadius);
      }

      if (w.mag === 0 && w.curReserve > 0) this.startReload();
      else if (w.mag === 0 && w.curReserve === 0) this._handleWeaponDepleted(wIdx);
      this._updateHud();
      return;
    }

    // Hitscan Firearms, Bows, Crossbows
    let shotsToConsume = 1;
    let pellets = w.pellets;
    let spread = this.isSkillActive('dead_eye') ? 0 : (this.scoped ? w.spread * 0.12 : w.spread);
    let cooldown = w.fireRate;

    if (isAlt && w.altMode === 'fan') {
      cooldown = w.fireRate * 0.42;
      spread = w.spread * 3.5;
    } else if (isAlt && w.altMode === 'double' && w.mag >= 2) {
      shotsToConsume = 2;
      pellets = w.pellets * 2;
      spread = w.spread * 1.35;
      cooldown = w.fireRate * 1.25;
    } else if (isAlt && w.altMode === 'fan_stars') {
      shotsToConsume = Math.min(3, w.mag);
      pellets = shotsToConsume;
      spread = 0.095;
      cooldown = w.fireRate * 1.5;
    }

    w.mag = Math.max(0, w.mag - shotsToConsume);
    this.fireTimer = cooldown;
    this.recoilOffset = w.recoil * (shotsToConsume > 1 ? 1.5 : 1.0);
    this.stats.shots++;

    // Muzzle flash & audio + Stage 12 Noise propagation (35m gunshot, 10m bow/sling/throw; blowgun/blades/fists silent!)
    this.sound.playShot(w.sound);
    const loudGuns = ['revolver', 'shotgun', 'rifle', 'musket', 'smg', 'sniper'];
    if (loudGuns.includes(w.sound)) {
      this.muzzleLight.intensity = w.sound === 'smg' ? 7 : 10;
      const mods = (this.activeHero && this.activeHero.mods) || {};
      const soundRadius = mods.soundAlertRadius || 35;
      this.emitNoise(this.player.pos, soundRadius);
    } else if (!w.silent) {
      this.emitNoise(this.player.pos, 10);
    }

    // Crosshair bloom pulse
    this.dom.crosshair.classList.add('spread');
    setTimeout(() => this.dom.crosshair.classList.remove('spread'), 95);

    const origin = this.camera.getWorldPosition(new THREE.Vector3());
    const baseDir = new THREE.Vector3();
    this.camera.getWorldDirection(baseDir);

    // Muzzle visual start point for tracers
    const right = new THREE.Vector3().crossVectors(baseDir, new THREE.Vector3(0, 1, 0)).normalize();
    const muzzleStart = origin.clone()
      .addScaledVector(baseDir, 0.75)
      .addScaledVector(right, this.scoped ? 0 : 0.18)
      .add(new THREE.Vector3(0, -0.1, 0));

    // Collect shootable meshes (AI enemies + Duel Remote Fighter + Living Bystanders & Animals!)
    const enemyMeshes = [];
    for (const e of this.enemies) {
      if (e.alive) enemyMeshes.push(...e.getHitMeshes());
    }
    for (const b of this.bystanders) {
      if (b.alive && typeof b.getHitMeshes === 'function') enemyMeshes.push(...b.getHitMeshes());
    }
    for (const a of (this.animals || [])) {
      if (a.alive && typeof a.getHitMeshes === 'function') enemyMeshes.push(...a.getHitMeshes());
    }
    if (this.duel && this.duel.isPlaying() && this.duel.remoteFighter && this.duel.remoteFighter.alive) {
      enemyMeshes.push(...this.duel.remoteFighter.getHitMeshes());
    }
    if (this.tellApple && this.tellApple.visible) {
      enemyMeshes.push(this.tellApple);
    }

    let hitEnemy = false;
    let critHit = false;
    let sentShotNet = false;

    for (let p = 0; p < pellets; p++) {
      const dir = baseDir.clone();
      if (spread > 0) {
        dir.x += (Math.random() - 0.5) * spread * 2;
        dir.y += (Math.random() - 0.5) * spread * 2;
        dir.z += (Math.random() - 0.5) * spread * 2;
        dir.normalize();
      }

      const wallHit = this.collision.raycast(origin, dir, 150);
      const maxDist = wallHit ? wallHit.dist : 150;
      if (this.destructibles) {
        this.destructibles.hitRay(origin, dir, maxDist + 0.25, w.damage * deadEyeDmgMult, this._destructibleCallbacks(true));
      }

      this.raycaster.set(origin, dir);
      this.raycaster.far = maxDist;
      const hits = this.raycaster.intersectObjects(enemyMeshes, false);

      if (hits.length > 0) {
        const hit = hits[0];
        this.particles.spawnTracer(muzzleStart, hit.point, w.tracerColor);
        if (!sentShotNet && this.duel && this.duel.isPlaying()) {
          sentShotNet = true;
          this.duel.onLocalShot(muzzleStart, hit.point, w.sound, w.tracerColor);
        }

        if (hit.object.userData.isTellApple) {
          this.tellApple.visible = false;
          this.particles.spawnImpact(hit.point, 0xffd24d, 22, 9);
          this.sound.playHit(true);
          this.stats.score += 500;
          this.showCallout('APPLE SPLIT! +500');
          this._flashHitmarker(true);
          continue;
        }

        const rf = hit.object.userData.remoteFighter;
        if (rf && rf.alive && this.duel && this.duel.isPlaying()) {
          const isHead = hit.object.userData.hitZone === 'head';
          const dmg = (isHead ? w.damage * w.headMult : w.damage) * deadEyeDmgMult;
          hitEnemy = true;
          if (isHead) critHit = true;
          this.duel.onLocalHitOpponent(dmg, isHead, hit.point);
          continue;
        }

        const bys = hit.object.userData.bystander;
        if (bys && bys.alive) {
          this._damageBystander(bys, w.damage, hit.point);
          continue;
        }
        const anim = hit.object.userData.animal;
        if (anim && anim.alive) {
          this._damageAnimal(anim, w.damage, hit.point);
          continue;
        }

        const enemy = hit.object.userData.enemy;
        if (enemy && enemy.alive) {
          const isHead = hit.object.userData.hitZone === 'head';
          const dmg = (isHead ? w.damage * w.headMult : w.damage) * deadEyeDmgMult;
          hitEnemy = true;
          if (isHead) critHit = true;
          if (this.duel && this.duel.isPlaying() && this.duel.role === 'guest') {
            this.duel.onGuestHitAI(enemy.duelIndex, dmg, isHead, hit.point);
          } else {
            this._damageEnemy(enemy, dmg, isHead, hit.point);
          }
          if (w.dropRecoverable) {
            const stickMesh = new THREE.Mesh(
              new THREE.CylinderGeometry(0.012, 0.012, 0.62, 5),
              new THREE.MeshStandardMaterial({ color: 0xc29e63, roughness: 0.75 })
            );
            stickMesh.rotation.x = Math.PI / 2;
            this.worldGroup.add(stickMesh);
            this._registerRecoverableMissile(stickMesh, w.id, hit.point, enemy.mesh, false);
          }
        }
      } else {
        const endPt = wallHit ? wallHit.point : origin.clone().addScaledVector(dir, 90);
        this.particles.spawnTracer(muzzleStart, endPt, w.tracerColor);
        if (!sentShotNet && this.duel && this.duel.isPlaying()) {
          sentShotNet = true;
          this.duel.onLocalShot(muzzleStart, endPt, w.sound, w.tracerColor);
        }
        if (wallHit) {
          this.particles.spawnImpact(wallHit.point, wallHit.tag === 'stone' ? 0xd9d2c5 : 0xcca168, 5, 5);
          if (w.dropRecoverable) {
            const stickMesh = new THREE.Mesh(
              new THREE.CylinderGeometry(0.012, 0.012, 0.62, 5),
              new THREE.MeshStandardMaterial({ color: 0xc29e63, roughness: 0.75 })
            );
            stickMesh.rotation.x = Math.PI / 2;
            this.worldGroup.add(stickMesh);
            this._registerRecoverableMissile(stickMesh, w.id, wallHit.point, null, false);
          }
        }
      }
    }

    if (hitEnemy) {
      this.stats.hits++;
      this._flashHitmarker(critHit);
    }

    // Auto-reload smoothly on empty chamber, or switch to Fists if completely dry!
    if (w.mag === 0 && w.curReserve > 0) {
      this.startReload();
    } else if (w.mag === 0 && w.curReserve === 0) {
      this._handleWeaponDepleted(wIdx);
    }
    this._updateHud();
  }

  _damageEnemy(enemy, dmg, isHeadshot, hitPoint, creditedToGuest = false) {
    this.particles.spawnImpact(hitPoint, isHeadshot ? 0xffd24d : 0xd93426, isHeadshot ? 14 : 9, 7);
    const pushDir = new THREE.Vector3().subVectors(enemy.mesh.position, this.player.pos).setY(0).normalize();
    const killed = enemy.takeDamage(dmg, isHeadshot, hitPoint, pushDir);
    this.sound.playHit(isHeadshot);
    if (killed) {
      const eraId = LEVELS[this.levelIndex]?.meta?.id || 'west';
      this.sound.speakVoice(eraId, 'pain');
      if (this.duel && this.duel.isPlaying() && this.duel.config.rule === 'coop' && this.duel.role === 'host') {
        this.duel.onCoopEnemyKilled(creditedToGuest);
      }
    }

    if (enemy.isBoss && this.activeBoss === enemy) {
      const pct = Math.max(0, (enemy.hp / enemy.maxHp) * 100);
      this.dom.bossBarFill.style.width = `${pct}%`;
    }

    if (killed) {
      this.stats.kills++;
      this.stats.score += enemy.score + (isHeadshot ? 75 : 0);
      if (isHeadshot) {
        this.stats.headshots++;
        this.showCallout(this.levelIndex === 2 ? 'BULLSEYE!' : 'HEADSHOT!');
      } else if (enemy.isBoss) {
        this.showCallout(`${enemy.name.split('—')[0].trim()} DEFEATED!`);
      }

      // Stage 9 Enemy Drops: weapon/blade, 60% melee ammo box, 20% heal item, 30% powder-chapter bomb!
      if (!enemy.isBoss) {
        const dropBase = enemy.mesh.position.clone();
        dropBase.y = this.collision.getFloorHeight(dropBase.x, dropBase.z, dropBase.y + 0.4) + 0.36;
        const wDrop = ENEMY_WEAPON_DROPS[enemy.type];
        if (wDrop) {
          this._spawnDroppedItem({
            kind: 'weapon',
            weaponId: wDrop.weaponId,
            ammo: wDrop.ammo,
            label: wDrop.weaponId,
            pos: dropBase.clone().add(new THREE.Vector3(0.28, 0, 0.15)),
            requireLeave: false
          });
        }
        const isMeleeEnemy = !!(wDrop && wDrop.isBlade);
        if (isMeleeEnemy && Math.random() < 0.60) {
          const apos = dropBase.clone().add(new THREE.Vector3(-0.32, 0.25, 0.2));
          const mesh = this._spawnRuntimePickup('ammo', apos);
          this.pickups.push({ type: 'ammo', pos: apos, mesh, label: 'AMMO BOX', collected: false });
        }
        if (Math.random() < 0.20) {
          const gear = this._getChapterGear();
          this._spawnDroppedItem({
            kind: 'bag',
            bagKey: 'heal',
            label: gear.healName,
            pos: dropBase.clone().add(new THREE.Vector3(0, 0, -0.35)),
            requireLeave: false
          });
        }
        const gear = this._getChapterGear();
        if (gear.powder && !isMeleeEnemy && Math.random() < 0.30) {
          this._spawnDroppedItem({
            kind: 'bag',
            bagKey: 'bomb',
            label: gear.bombName,
            pos: dropBase.clone().add(new THREE.Vector3(-0.25, 0, -0.25)),
            requireLeave: false
          });
        }
      }

      this._checkStageProgression();
    }
    this._updateHud();
  }

  _spawnRuntimePickup(type, pos) {
    const grp = new THREE.Group();
    const isH = type === 'health';
    const m = new THREE.Mesh(
      isH ? new THREE.CylinderGeometry(0.24, 0.28, 0.62, 10) : new THREE.BoxGeometry(0.62, 0.4, 0.45),
      new THREE.MeshStandardMaterial({
        color: isH ? 0x2ecc71 : 0xf2b749,
        emissive: isH ? 0x168043 : 0xb37412,
        emissiveIntensity: 0.85
      })
    );
    grp.add(m);
    grp.position.copy(pos);
    this.worldGroup.add(grp);
    return grp;
  }

  _checkStageProgression() {
    if (this.duel && this.duel.active) return; // Duel uses PvP victory rules, not SP wave clear
    const aliveCount = this.enemies.filter((e) => e.alive).length;

    // Trigger Boss Showdown when 3 or fewer regular enemies remain!
    if (this.bossSpawnPending && aliveCount <= 3) {
      const sp = this.bossSpawnPending;
      this.bossSpawnPending = null;
      const diff = DIFFICULTY[this.difficultyKey];
      const boss = new Enemy(sp.type, sp.pos, diff.enemyMult);
      boss.alert = true;
      this.worldGroup.add(boss.mesh);
      this.enemies.push(boss);
      this.activeBoss = boss;

      this.dom.bossBarWrap.classList.remove('hidden');
      this.dom.bossName.textContent = boss.name;
      this.dom.bossBarFill.style.width = '100%';
      this.sound.playBossHorn();
      this.showCallout(`SHOWDOWN: ${boss.name.split('—')[0].trim()}`);
      this.particles.spawnSmoke(sp.pos.clone().add(new THREE.Vector3(0, 1.5, 0)), 0xffcc66, 12, 1.0);
    }

    // Victory when every enemy including Boss is defeated!
    if (!this.bossSpawnPending && aliveCount === 0) {
      this.dom.bossBarWrap.classList.add('hidden');
      setTimeout(() => {
        if (this.state === 'playing') this._showEndScreen(true);
      }, 950);
    }
  }

  _damagePlayer(amount, source = 'ai') {
    if (this.state !== 'playing') return;
    const inDuel = !!(this.duel && this.duel.isPlaying());
    if (inDuel && (this.duel.myDead || this.duel.phase !== 'playing')) return;
    if (!inDuel && this.practiceMode) {
      this.usedPracticeThisRun = true;
      return;
    }
    const mods = (this.activeHero && this.activeHero.mods) || {};
    const standFastMult = this.isSkillActive('stand_fast') ? 0.2 : 1.0;
    const scaledDamage = amount * (mods.damageTakenMult || 1) * standFastMult;
    this.timeSinceLastDamage = 0;
    this.player.hp = Math.max(0, this.player.hp - scaledDamage);
    this.sound.playHurt();

    this.dom.damageOverlay.style.opacity = '0.9';
    setTimeout(() => {
      const lowRatio = this.player.hp < 30 ? 0.35 : 0;
      this.dom.damageOverlay.style.opacity = String(lowRatio);
    }, 150);

    this._updateHud();
    if (this.player.hp <= 0) {
      if (inDuel) {
        this.duel.onLocalPlayerDied(source);
      } else {
        this._showEndScreen(false);
      }
    }
  }

  _showEndScreen(victory) {
    this.state = 'ended';
    this.setScope(false);
    if (document.pointerLockElement) document.exitPointerLock();

    this.dom.hud.classList.add('hidden');
    this.dom.crosshair.classList.add('hidden');
    this.dom.endScreen.classList.remove('hidden');

    const meta = LEVELS[this.levelIndex].meta;
    const acc = this.stats.shots > 0 ? Math.round((this.stats.hits / this.stats.shots) * 100) : 100;
    const wasPractice = this.practiceMode || this.usedPracticeThisRun;

    if (this.dom.endPracticeNote) {
      this.dom.endPracticeNote.classList.toggle('hidden', !wasPractice);
    }

    if (victory) {
      const isFinal = this.levelIndex === LEVELS.length - 1;
      const baseEyebrow = isFinal ? 'ALL NINE HORIZONS CONQUERED' : `${meta.act} COMPLETE`;
      this.dom.endEyebrow.textContent = wasPractice ? `${baseEyebrow} • PRACTICE MODE` : baseEyebrow;
      this.dom.endTitle.textContent = isFinal ? 'LEGEND OF NINE ERAS' : 'HORIZON CLEARED';
      this.dom.endSummary.textContent = isFinal
        ? 'From Red Gulch and Kyoto Mist through the Alps, Aegean, Fjord, Normandy, Stalnogorsk, and Tibet to Lake Texcoco — your legend endures across nine eras!'
        : `${meta.title} is free. Ready your gear for the next horizon!`;
      this.dom.btnNextLevel.classList.remove('hidden');
      this.dom.btnNextLevel.textContent = isFinal ? 'PLAY FROM ACT I ▶' : 'NEXT CHAPTER ▶';
      if (this.dom.btnEndRestart) this.dom.btnEndRestart.textContent = 'PLAY THIS CHAPTER AGAIN';
      if (this.dom.btnEndChangeHero) this.dom.btnEndChangeHero.classList.add('hidden');
    } else {
      this.dom.endEyebrow.textContent = `${meta.act} — FALLEN`;
      this.dom.endTitle.textContent = 'OUTGUNNED';
      this.dom.endSummary.textContent = 'Dust yourself off, steady your aim, and ride back into the fray.';
      this.dom.btnNextLevel.classList.add('hidden');
      if (this.dom.btnEndRestart) this.dom.btnEndRestart.textContent = 'TRY AGAIN';
      if (this.dom.btnEndChangeHero) {
        this.dom.btnEndChangeHero.textContent = 'ANOTHER HERO';
        this.dom.btnEndChangeHero.classList.remove('hidden');
      }
    }

    const bysKilled = this.stats.bystandersKilled || 0;
    this.dom.endStats.innerHTML = `
      <div class="stat-card"><div class="stat-val">${meta.currency}${this.stats.score}</div><div class="stat-lbl">BOUNTY</div></div>
      <div class="stat-card"><div class="stat-val">${this.stats.headshots}</div><div class="stat-lbl">CRIT SHOTS</div></div>
      <div class="stat-card"><div class="stat-val">${acc}%</div><div class="stat-lbl">ACCURACY</div></div>
      ${bysKilled > 0 ? `<div class="stat-card"><div class="stat-val">${bysKilled}</div><div class="stat-lbl">BYSTANDERS KILLED</div></div>` : ''}
    `;
  }

  // ---------------- HUD & Feedback ----------------
  toggleCrosshairMark() {
    if (!this.minimap || this.state !== 'playing') return null;
    const origin = this.camera.getWorldPosition(new THREE.Vector3());
    const dir = new THREE.Vector3();
    this.camera.getWorldDirection(dir);
    const hit = this.collision.raycast(origin, dir, 140);
    let pt;
    if (hit) {
      pt = hit.point.clone();
    } else {
      // Intersect terrain along ray or fallback 55m ahead
      pt = origin.clone().addScaledVector(dir, 55);
      for (let d = 3; d <= 120; d += 2) {
        const sx = origin.x + dir.x * d;
        const sy = origin.y + dir.y * d;
        const sz = origin.z + dir.z * d;
        const fy = this.collision.getFloorHeight(sx, sz, sy + 0.3);
        if (sy <= fy + 0.15) {
          pt.set(sx, fy, sz);
          break;
        }
      }
    }
    const res = this.minimap.toggleMarkAt(pt, this.worldGroup);
    if (res.action === 'placed') {
      this.sound.playPickup();
      this.toast('MARK PLACED');
    } else {
      this.toast('MARK CLEARED');
    }
    if (this.duel && this.duel.isPlaying() && this.duel.net && this.duel.net.isOpen()) {
      this.duel.net.send({ type: 'mark', pos: res.action === 'placed' ? [pt.x, pt.y, pt.z] : null });
    }
    return res;
  }

  _buildWeaponStripUI() {
    this.dom.weaponStrip.innerHTML = this.weapons.map((w, i) => `
      <div class="w-slot ${i === this.currentWeaponIdx ? 'active' : ''}" data-slot="${i}">
        <div class="w-slot-key">[${i + 1}]</div>
        <div class="w-slot-name">${w.shortName}</div>
      </div>
    `).join('');
  }

  _updateHud() {
    const meta = LEVELS[this.levelIndex].meta;
    const hostileAnimals = (this.animals || []).filter((a) => a.alive && a.hostile).length;
    const alive = this.enemies.filter((e) => e.alive).length + (this.bossSpawnPending ? 1 : 0) + hostileAnimals;

    this.dom.eraBadge.textContent = `${meta.act} • ${meta.title}`;
    this.dom.objective.textContent = meta.objective;
    this.dom.enemyIcon.textContent = meta.enemyIcon;
    this.dom.enemiesLeft.textContent = String(alive);
    this.dom.scoreVal.textContent = `${meta.currency}${this.stats.score}`;
    this.dom.heroName.textContent = (this.activeHero ? this.activeHero.name : meta.heroName).toUpperCase();
    if (this.dom.heroPerk && this.activeHero) {
      this.dom.heroPerk.textContent = `${this.activeHero.strengthLabel} • ${this.activeHero.hudTag}`;
    }
    this.dom.hpText.textContent = `${Math.ceil(this.player.hp)} / ${this.player.maxHp}`;
    this.dom.hpBar.style.width = `${(this.player.hp / this.player.maxHp) * 100}%`;
    this.dom.staminaBar.style.width = `${this.player.stamina}%`;

    const held = this.getHeldEntry();
    const w = held && !held.isBag ? held.weapon : (held ? held.spec : null);
    if (held && w) {
      this.dom.weaponName.textContent = held.isBag ? held.name : w.name;
      this.dom.altHint.textContent = this.reloading ? 'RELOADING...' : (w.altHint || '');
      if (held.isBag) {
        this.dom.ammoMag.textContent = String(held.count);
        this.dom.ammoReserve.textContent = 'BAG';
        this.dom.ammoPips.innerHTML = '';
      } else {
        this.dom.ammoMag.textContent = w.infinite ? '∞' : String(w.mag);
        this.dom.ammoReserve.textContent = w.infinite ? '∞' : String(w.curReserve);
        if (w.infinite) {
          this.dom.ammoPips.innerHTML = '';
        } else {
          const count = Math.min(w.magSize, 10);
          let html = '';
          for (let i = 0; i < count; i++) {
            html += `<span class="ammo-pip ${i < w.mag ? '' : 'spent'}"></span>`;
          }
          this.dom.ammoPips.innerHTML = html;
        }
      }
    }

    // Arsenal + Bag list above weapon name (Item 52)
    if (this.dom.arsenalList) {
      const slots = this.getUnifiedSlots();
      this.dom.arsenalList.innerHTML = slots.map((s, idx) => {
        const active = idx === this.activeSlotIdx;
        const ammoStr = s.isBag
          ? `×${s.count}`
          : (s.weapon.infinite ? '∞' : `${s.weapon.mag}/${s.weapon.curReserve}`);
        return `<div class="arsenal-row ${s.isBag ? 'bag-row' : ''} ${active ? 'active' : ''}"><span class="ar-key">${idx + 1}</span><span class="ar-name">${s.shortName}</span><span class="ar-ammo">${ammoStr}</span></div>`;
      }).join('');
    }

    // Skill HUD status under Health Bar (Item 62)
    if (this.dom.skillName && this.dom.skillStatus && this.skillState && this.skillState.skill) {
      const st = this.skillState;
      this.dom.skillName.textContent = st.skill.name.toUpperCase();
      if (st.activeTime > 0) {
        this.dom.skillStatus.textContent = `ACTIVE ${st.activeTime.toFixed(1)}s`;
        this.dom.skillStatus.className = 'hud-skill-status active';
      } else if (st.cooldownTime > 0) {
        this.dom.skillStatus.textContent = `${Math.ceil(st.cooldownTime)}s`;
        this.dom.skillStatus.className = 'hud-skill-status cooldown';
      } else {
        this.dom.skillStatus.textContent = 'READY';
        this.dom.skillStatus.className = 'hud-skill-status ready';
      }
    }

    document.querySelectorAll('.w-slot').forEach((el, i) => {
      el.classList.toggle('active', held && !held.isBag && i === held.weaponIdx);
    });
  }

  _flashHitmarker(isCrit) {
    this.dom.hitmarker.classList.remove('hidden');
    this.dom.hitmarker.classList.toggle('crit', isCrit);
    this.dom.hitFlash.style.opacity = isCrit ? '0.9' : '0.45';
    clearTimeout(this._hmTimeout);
    this._hmTimeout = setTimeout(() => {
      this.dom.hitmarker.classList.add('hidden');
      this.dom.hitFlash.style.opacity = '0';
    }, 115);
  }

  showCallout(text) {
    this.dom.callout.textContent = text;
    this.dom.callout.classList.remove('hidden');
    clearTimeout(this._calloutTimer);
    this._calloutTimer = setTimeout(() => {
      this.dom.callout.classList.add('hidden');
    }, 2200);
  }

  toast(text) {
    const el = document.createElement('div');
    el.className = 'toast-item';
    el.textContent = text;
    this.dom.pickupToast.appendChild(el);
    setTimeout(() => el.remove(), 1950);
  }

  setCrouch(wantCrouch) {
    const want = !!wantCrouch;
    if (!want && this.player.crouched) {
      // Refuse to stand up where there is no headroom (e.g., inside a 1.25m crawl-in den!)
      if (!this.collision.hasHeadroom(this.player.pos.x, this.player.pos.z, 0.46, this.player.pos.y, 1.75)) {
        return false;
      }
    }
    this.player.crouched = want;
    if (this.dom.crouchBadge) {
      this.dom.crouchBadge.classList.toggle('hidden', !want);
    }
    return true;
  }

  setSneak(wantSneak) {
    const want = !!wantSneak;
    this.player.sneaking = want;
    if (this.dom.sneakBadge) {
      this.dom.sneakBadge.classList.toggle('hidden', !want);
    }
    return true;
  }

  // ---------------- Main Frame Update ----------------
  _updatePlayer(dt) {
    // Smooth FOV transition for Sniper Scope Zoom & Aimed Throws!
    const heldEntry = this.getHeldEntry();
    const w = heldEntry && !heldEntry.isBag ? heldEntry.weapon : null;
    const heldSpec = heldEntry ? (heldEntry.isBag ? heldEntry.spec : heldEntry.weapon) : null;
    const targetFov = this.scoped && w && w.scopeFov
      ? w.scopeFov
      : (this.aimThrowActive ? 58 : this.baseFov);
    if (Math.abs(this.camera.fov - targetFov) > 0.1) {
      this.camera.fov += (targetFov - this.camera.fov) * Math.min(1, dt * 14);
      this.camera.updateProjectionMatrix();
    }

    // Update Special Skill timers, Second Wind regen, Vanish, Eagle Eye markers!
    if (this.skillState && this.skillState.skill) {
      const st = this.skillState;
      const wasActive = st.activeTime > 0;
      if (st.activeTime > 0) {
        st.activeTime = Math.max(0, st.activeTime - dt);
        if (st.skill.id === 'second_wind' && this.player.hp > 0 && this.player.hp < this.player.maxHp) {
          this.player.hp = Math.min(this.player.maxHp, this.player.hp + (50 / st.skill.duration) * dt);
          this.dom.hpText.textContent = `${Math.ceil(this.player.hp)} / ${this.player.maxHp}`;
          this.dom.hpBar.style.width = `${(this.player.hp / this.player.maxHp) * 100}%`;
          if (this.player.hp >= 30) this.dom.damageOverlay.style.opacity = '0';
        }
        if (st.activeTime <= 0 && this.dom.skillTintOverlay) {
          this.dom.skillTintOverlay.style.opacity = '0';
        }
      } else if (st.cooldownTime > 0) {
        st.cooldownTime = Math.max(0, st.cooldownTime - dt);
      }
      if (wasActive || st.cooldownTime > 0) {
        if (this.dom.skillStatus) {
          if (st.activeTime > 0) {
            this.dom.skillStatus.textContent = `ACTIVE ${st.activeTime.toFixed(1)}s`;
            this.dom.skillStatus.className = 'hud-skill-status active';
          } else if (st.cooldownTime > 0) {
            this.dom.skillStatus.textContent = `${Math.ceil(st.cooldownTime)}s`;
            this.dom.skillStatus.className = 'hud-skill-status cooldown';
          } else {
            this.dom.skillStatus.textContent = 'READY';
            this.dom.skillStatus.className = 'hud-skill-status ready';
          }
        }
      }
      // Eagle Eye through-wall diamond markers within 90m
      if (this.dom.eagleEyeLayer) {
        if (this.isSkillActive('eagle_eye')) {
          const vw = window.innerWidth;
          const vh = window.innerHeight;
          const proj = new THREE.Vector3();
          let html = '';
          for (const e of this.enemies) {
            if (!e.alive || !e.mesh.visible) continue;
            if (e.mesh.position.distanceTo(this.player.pos) > 90) continue;
            proj.set(e.mesh.position.x, e.mesh.position.y + 1.45, e.mesh.position.z).project(this.camera);
            if (proj.z >= -1 && proj.z <= 1) {
              const sx = (proj.x * 0.5 + 0.5) * vw;
              const sy = (-proj.y * 0.5 + 0.5) * vh;
              if (sx >= 0 && sx <= vw && sy >= 0 && sy <= vh) {
                html += `<div class="eagle-marker" style="left:${sx.toFixed(0)}px;top:${sy.toFixed(0)}px"></div>`;
              }
            }
          }
          this.dom.eagleEyeLayer.innerHTML = html;
        } else if (this.dom.eagleEyeLayer.innerHTML) {
          this.dom.eagleEyeLayer.innerHTML = '';
        }
      }
    }

    // Horizontal Movement (with Hero movement speed modifier, Dash +80%, Fury +20%, Crouching & Sneaking!)
    const mods = (this.activeHero && this.activeHero.mods) || {};
    const skillSpeedMult = this.isSkillActive('dash') ? 1.8 : (this.isSkillActive('fury') ? 1.2 : 1.0);
    const speedMult = (mods.moveSpeedMult || 1) * skillSpeedMult;
    const moveFwd = (this.keys['KeyW'] || this.keys['ArrowUp'] ? 1 : 0) - (this.keys['KeyS'] || this.keys['ArrowDown'] ? 1 : 0);
    const moveSide = (this.keys['KeyD'] || this.keys['ArrowRight'] ? 1 : 0) - (this.keys['KeyA'] || this.keys['ArrowLeft'] ? 1 : 0);

    const crouched = !!this.player.crouched;
    const wantsSprint = !crouched && (this.keys['ShiftLeft'] || this.keys['ShiftRight']) && moveFwd > 0 && !this.scoped && this.player.stamina > 6;
    // Running suspends sneaking for as long as the player runs
    const effectiveSneak = !!this.player.sneaking && !wantsSprint;
    if (this.dom.sneakBadge) {
      this.dom.sneakBadge.classList.toggle('hidden', !effectiveSneak);
    }
    const baseSpeed = this.scoped ? 4.2 : wantsSprint ? 11.4 : 7.6;
    const stanceMult = crouched && effectiveSneak ? 0.42 : (crouched || effectiveSneak) ? 0.5 : 1.0;
    const speed = baseSpeed * speedMult * stanceMult;

    // Out-of-danger health regeneration (Werner Stauffacher)
    this.timeSinceLastDamage += dt;
    let isRegenerating = false;
    if (mods.regenRate && this.player.hp > 0 && this.player.hp < this.player.maxHp) {
      if (this.timeSinceLastDamage >= (mods.regenDelay || 4.0)) {
        isRegenerating = true;
        this.player.hp = Math.min(this.player.maxHp, this.player.hp + mods.regenRate * dt);
        this.dom.hpText.textContent = `${Math.ceil(this.player.hp)} / ${this.player.maxHp}`;
        this.dom.hpBar.style.width = `${(this.player.hp / this.player.maxHp) * 100}%`;
        if (this.player.hp >= 30) this.dom.damageOverlay.style.opacity = '0';
      }
    }
    if (this.dom.heroPerk) {
      this.dom.heroPerk.classList.toggle('regen-active', isRegenerating);
    }

    if (wantsSprint) {
      this.player.stamina = Math.max(0, this.player.stamina - dt * 26);
    } else {
      this.player.stamina = Math.min(100, this.player.stamina + dt * 20);
    }
    this.dom.staminaBar.style.width = `${this.player.stamina}%`;

    const fwd = new THREE.Vector3(-Math.sin(this.player.yaw), 0, -Math.cos(this.player.yaw));
    const right = new THREE.Vector3(Math.cos(this.player.yaw), 0, -Math.sin(this.player.yaw));
    const wish = new THREE.Vector3().addScaledVector(fwd, moveFwd).addScaledVector(right, moveSide);
    const moving = wish.lengthSq() > 0.01;
    if (moving) wish.normalize().multiplyScalar(speed);

    // ---- LADDER CLIMBING (No extra key: face ladder within ~1.05m & walk forward; step back near top to slide down!) ----
    const ladders = this.collision.ladders || [];
    if (!this.player.onLadder && ladders.length > 0) {
      for (const lad of ladders) {
        const span = Math.max(0.2, lad.topY - lad.bottomY);
        const tCur = Math.max(0, Math.min(1, (this.player.pos.y - lad.bottomY) / span));
        const rx = lad.x - lad.normalX * lad.leanOffset * tCur;
        const rz = lad.z - lad.normalZ * lad.leanOffset * tCur;
        const dHoriz = Math.hypot(this.player.pos.x - rx, this.player.pos.z - rz);
        const facingLadder = fwd.x * (-lad.normalX) + fwd.z * (-lad.normalZ);
        // Attach going UP from ground/mid-height when facing ladder & pressing W
        if (moveFwd > 0 && dHoriz <= 1.08 && facingLadder > 0.35 &&
            this.player.pos.y >= lad.bottomY - 0.35 && this.player.pos.y < lad.topY - 0.15) {
          this.player.onLadder = lad;
          this.player.vel.set(0, 0, 0);
          this.player.grounded = false;
          this.player.ladderRungDist = 0;
          if (this.player.crouched) this.setCrouch(false);
          break;
        }
        // Attach going DOWN from top edge when stepping off backwards near the top of the ladder
        const dTop = Math.hypot(this.player.pos.x - lad.topX, this.player.pos.z - lad.topZ);
        if (moveFwd < 0 && dTop <= 1.25 && Math.abs(this.player.pos.y - lad.topY) <= 0.5 && facingLadder < -0.2) {
          this.player.onLadder = lad;
          this.player.pos.y = lad.topY - 0.12;
          this.player.vel.set(0, 0, 0);
          this.player.grounded = false;
          this.player.ladderRungDist = 0;
          break;
        }
      }
    }

    if (this.player.onLadder) {
      const lad = this.player.onLadder;
      if (this.keys['Space']) {
        // Detach from ladder with a small push outward
        this.player.pos.x += lad.normalX * 0.45;
        this.player.pos.z += lad.normalZ * 0.45;
        this.player.onLadder = null;
        this.keys['Space'] = false;
      } else {
        const climbDir = moveFwd !== 0 ? Math.sign(moveFwd) : 0;
        const climbSpeed = climbDir > 0 ? 3.4 : 3.0;
        const dy = climbDir * climbSpeed * dt;
        this.player.pos.y = Math.max(lad.bottomY, Math.min(lad.topY, this.player.pos.y + dy));
        const span = Math.max(0.2, lad.topY - lad.bottomY);
        const tNow = Math.max(0, Math.min(1, (this.player.pos.y - lad.bottomY) / span));
        const standOut = 0.48;
        this.player.pos.x = lad.x - lad.normalX * (lad.leanOffset * tNow - standOut);
        this.player.pos.z = lad.z - lad.normalZ * (lad.leanOffset * tNow - standOut);
        this.player.vel.set(0, 0, 0);

        if (Math.abs(dy) > 0.001) {
          this.player.ladderRungDist += Math.abs(dy);
          if (this.player.ladderRungDist >= 0.38) {
            this.player.ladderRungDist -= 0.38;
            this.sound.playRung();
          }
        }

        // Reached the top: step smoothly forward onto the roof/deck!
        if (climbDir > 0 && this.player.pos.y >= lad.topY - 0.05) {
          this.player.pos.x = lad.topX - lad.normalX * (lad.topExitDist || 0.62);
          this.player.pos.z = lad.topZ - lad.normalZ * (lad.topExitDist || 0.62);
          this.player.pos.y = lad.topY;
          this.player.grounded = true;
          this.player.onLadder = null;
        } else if (climbDir < 0 && this.player.pos.y <= lad.bottomY + 0.05) {
          // Reached the bottom: step off cleanly onto ground
          this.player.pos.x = lad.x + lad.normalX * 0.65;
          this.player.pos.z = lad.z + lad.normalZ * 0.65;
          this.player.pos.y = lad.bottomY;
          this.player.grounded = true;
          this.player.onLadder = null;
        }
      }
    } else {
      // Sub-stepped horizontal movement (crouched height = 1.05m fits through 1.25m den doors; upright = 1.75m!)
      const playerHeight = crouched ? 1.05 : 1.75;
      this.collision.moveHorizontal(this.player.pos, wish.x * dt, wish.z * dt, 0.52, this.player.pos.y, playerHeight);

      // Gravity & Jump (vel.y = 6.45 lifts feet ~1.01m; STEP_MAX at apex reaches ledges up to ~1.45m!)
      if (this.keys['Space'] && this.player.grounded && !crouched) {
        this.player.vel.y = 6.45;
        this.player.grounded = false;
      }
      this.player.vel.y -= 20.5 * dt;
      this.player.pos.y += this.player.vel.y * dt;

      // Floor Height & Climbable Steps (also applies at top of jump!)
      const floorY = this.collision.getFloorHeight(this.player.pos.x, this.player.pos.z, this.player.pos.y);
      if (this.player.pos.y <= floorY) {
        this.player.pos.y = floorY;
        this.player.vel.y = 0;
        this.player.grounded = true;
      }

      // Track last dry ground & rescue anyone stuck under deep water for ~1s
      if (this.collision.isSubmergedInWater(this.player.pos.x, this.player.pos.y, this.player.pos.z)) {
        this.player.submergedTimer += dt;
        if (this.player.submergedTimer >= 1.0) {
          this.player.pos.copy(this.player.lastDryPos);
          this.player.vel.set(0, 0, 0);
          this.player.grounded = true;
          this.player.submergedTimer = 0;
          this.toast('PULLED BACK ONTO DRY GROUND');
        }
      } else {
        this.player.submergedTimer = 0;
        if (this.player.grounded) {
          this.player.lastDryPos.copy(this.player.pos);
        }
      }

      // Subtle audible footsteps + Stage 12 Footstep Noise (11m sprint, 4m walk; sneaking & crouching silent!)
      if (moving && this.player.grounded && !effectiveSneak && !crouched) {
        this.player.stepTimer += dt * (wantsSprint ? 2.6 : 1.75);
        if (this.player.stepTimer >= 1.0) {
          this.player.stepTimer = 0;
          this.sound.playFootstep();
          this.emitNoise(this.player.pos, wantsSprint ? 11 : 4);
        }
      }
    }

    // Smooth eye height transition (0.95m crouched vs 1.68m standing)
    const targetEye = crouched ? 0.95 : 1.68;
    this.player.eyeHeight += (targetEye - this.player.eyeHeight) * Math.min(1, dt * 14);

    // Subtle walk head-bob
    if (moving && this.player.grounded) {
      this.player.bobPhase += dt * (wantsSprint ? 12.5 : crouched ? 6.0 : 8.5);
    }
    const bobY = moving && this.player.grounded && !this.scoped ? Math.sin(this.player.bobPhase) * (crouched ? 0.03 : 0.055) : 0;

    // Sync Camera Transform (always clear roll left over from title-screen lookAt!)
    this.camera.position.set(this.player.pos.x, this.player.pos.y + this.player.eyeHeight + bobY, this.player.pos.z);
    this.camera.rotation.order = 'YXZ';
    this.camera.rotation.z = 0;
    this.camera.rotation.y = this.player.yaw;
    this.camera.rotation.x = this.player.pitch + this.recoilOffset * 0.22;

    // Cooldowns & Reload completion
    if (this.fireTimer > 0) this.fireTimer -= dt;
    if (this.reloading) {
      this.reloadTimer -= dt;
      if (this.reloadTimer <= 0) {
        this.reloading = false;
        const needed = w.magSize - w.mag;
        const load = Math.min(needed, w.curReserve);
        w.mag += load;
        w.curReserve -= load;
        this._updateHud();
      }
    }

    // Aimed-Throw 3D Dotted Trajectory Preview (Item 63)
    if (this.aimPreview) {
      if (this.aimThrowActive && heldSpec && heldSpec.aimableThrow) {
        const origin = this.camera.getWorldPosition(new THREE.Vector3());
        const forward = new THREE.Vector3();
        this.camera.getWorldDirection(forward);
        const rightA = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();
        const rf = (this.duel && this.duel.isPlaying()) ? this.duel.remoteFighter : null;
        this.aimPreview.update(origin, forward, rightA, heldSpec, this.collision, this.enemies, rf);
      } else {
        this.aimPreview.hide();
      }
    }

    // Continuous fire while holding LMB on rapid or full-auto weapons (Sten SMG, Soviet PPSh SMG)
    if (this.mouseDownL && this.fireTimer <= 0 && !this.reloading && w && (w.auto || w.autoFire || w.fireRate <= 0.4)) {
      this.tryFire(false);
    }

    // Advance two-part Viking Flail swing (0..40% balls whirl, 40..100% wide right-to-left sweep; blow lands at 60% hitting ALL in ±78° arc!)
    if (this.pendingFlailSwing) {
      const fl = this.pendingFlailSwing;
      fl.elapsed += dt;
      if (!fl.hitDone && fl.elapsed >= fl.hitAt) {
        fl.hitDone = true;
        this.sound.playShot('slash');
        const forward = new THREE.Vector3();
        this.camera.getWorldDirection(forward);
        const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();
        const origin = this.camera.getWorldPosition(new THREE.Vector3());
        this.particles.spawnSlashArc(origin, forward, right, fl.slashColor);
        if (this.duel && this.duel.isPlaying()) {
          this.duel.onLocalMelee(origin, forward, fl.slashColor);
        }
        const fwdHoriz = new THREE.Vector3(forward.x, 0, forward.z).normalize();
        let hitAny = false;
        if (this.duel && this.duel.isPlaying() && this.duel.remoteFighter && this.duel.remoteFighter.alive) {
          const rf = this.duel.remoteFighter;
          const targetChest = new THREE.Vector3(rf.root.position.x, rf.root.position.y + 1.15 * rf.figureScale, rf.root.position.z);
          const toR = new THREE.Vector3().subVectors(targetChest, origin);
          if (toR.length() <= fl.range + rf.radius * 0.6) {
            const toRHoriz = new THREE.Vector3(toR.x, 0, toR.z).normalize();
            if (toRHoriz.dot(fwdHoriz) >= fl.arcCos && this.collision.hasLineOfSight(origin, targetChest)) {
              hitAny = true;
              this.duel.onLocalHitOpponent(fl.damage, false, targetChest);
            }
          }
        }
        for (const enemy of this.enemies) {
          if (!enemy.alive || !enemy.mesh.visible) continue;
          const targetChest = new THREE.Vector3(
            enemy.mesh.position.x,
            enemy.mesh.position.y + (enemy.style === 'dog' ? 0.55 : 1.15),
            enemy.mesh.position.z
          );
          const toE = new THREE.Vector3().subVectors(targetChest, origin);
          if (toE.length() <= fl.range) {
            const toEHoriz = new THREE.Vector3(toE.x, 0, toE.z).normalize();
            if (toEHoriz.dot(fwdHoriz) >= fl.arcCos && this.collision.hasLineOfSight(origin, targetChest)) {
              hitAny = true;
              if (this.duel && this.duel.isPlaying() && this.duel.role === 'guest') {
                this.duel.onGuestHitAI(enemy.duelIndex, fl.damage, false, targetChest);
              } else {
                this._damageEnemy(enemy, fl.damage, false, targetChest);
              }
            }
          }
        }
        if (hitAny) this._flashHitmarker(true);
      }
      if (fl.elapsed >= fl.duration) {
        this.pendingFlailSwing = null;
      }
    }

    // Animate 3D Weapon Viewmodel
    this.recoilOffset *= Math.max(0, 1 - dt * 13);
    if (this.slashAnim > 0) this.slashAnim = Math.max(0, this.slashAnim - dt * 4.5);
    if (this.muzzleLight.intensity > 0) this.muzzleLight.intensity = Math.max(0, this.muzzleLight.intensity - dt * 85);

    const vm = this._getActiveViewmodel();
    if (vm && vm.visible) {
      const bp = vm.userData.basePos;
      const br = vm.userData.baseRot;
      const swayX = moving ? Math.cos(this.player.bobPhase * 0.5) * 0.014 : 0;
      const swayY = moving ? Math.abs(Math.sin(this.player.bobPhase * 0.5)) * 0.014 : 0;

      const chain1 = vm.getObjectByName('flailChain1');
      const chain2 = vm.getObjectByName('flailChain2');
      if (chain1 && chain2 && this.pendingFlailSwing) {
        const p = Math.min(1, this.pendingFlailSwing.elapsed / Math.max(0.05, this.pendingFlailSwing.duration));
        if (p < 0.4) {
          // Part 1 (0..40%): wind-up & whirl spiked iron balls round overhead!
          const wFrac = p / 0.4;
          vm.position.set(bp.x + swayX + wFrac * 0.14, bp.y - swayY + wFrac * 0.12, bp.z + wFrac * 0.05);
          vm.rotation.set(br.x - wFrac * 0.35, br.y - wFrac * 0.25, br.z - wFrac * 0.35);
          chain1.rotation.set(0.35, 0, wFrac * Math.PI * 2.6);
          chain2.rotation.set(-0.25, 0, wFrac * Math.PI * 2.2 - 0.65);
        } else {
          // Part 2 (40..100%): sweep haft across screen right-to-left with balls dragging behind!
          const sFrac = (p - 0.4) / 0.6;
          const sweep = Math.sin(sFrac * Math.PI);
          vm.position.set(
            bp.x + swayX + 0.14 - sFrac * 0.72,
            bp.y - swayY + 0.12 - sweep * 0.12,
            bp.z - sweep * 0.18
          );
          vm.rotation.set(
            br.x + sweep * 0.85,
            br.y + sFrac * 1.45,
            br.z + sFrac * 1.15
          );
          chain1.rotation.set(0.55 * sweep, 0, -1.25 * sweep);
          chain2.rotation.set(0.45 * sweep, 0, -1.65 * sweep);
        }
      } else {
        vm.position.set(
          bp.x + swayX - this.slashAnim * 0.35,
          bp.y - swayY - (this.reloading ? 0.14 : 0),
          bp.z + this.recoilOffset * 0.45
        );
        vm.rotation.set(
          br.x + this.recoilOffset * 1.15 - (this.reloading ? 0.65 : 0) + this.slashAnim * 1.1,
          br.y + this.slashAnim * 1.25,
          br.z + this.slashAnim * 0.85
        );
        if (chain1 && chain2) {
          // Gentle pendulum dangle at rest
          const sway = Math.sin(this.elapsed * 3.1) * 0.12 + swayX * 4.0;
          chain1.rotation.set(0.22, 0, 0.28 + sway);
          chain2.rotation.set(-0.18, 0, -0.22 - sway * 1.25);
        }
      }

      // Animate flickering dynamite/firepot spark
      const spark = vm.getObjectByName('spark');
      if (spark) {
        const s = 0.85 + Math.sin(this.elapsed * 28) * 0.35;
        spark.scale.setScalar(s);
      }
      const spinner = vm.getObjectByName('spinner');
      if (spinner) spinner.rotation.y += dt * 4.5;
    }

    // Pickups collection (health goes into Bag up to 9; ammo box refills held weapon or primary up to maxCarry!)
    for (const pk of this.pickups) {
      if (pk.collected) continue;
      pk.mesh.rotation.y += dt * 2.1;
      pk.mesh.position.y = pk.pos.y + Math.sin(this.elapsed * 3 + pk.pos.x) * 0.16;

      const d = Math.hypot(pk.pos.x - this.player.pos.x, pk.pos.z - this.player.pos.z);
      if (d < 2.1) {
        if (pk.type === 'health') {
          if (this.bag.heal >= 9) continue;
          pk.collected = true;
          pk.mesh.visible = false;
          this.bag.heal++;
          this.sound.playPickup();
          this.toast(`${this._getChapterGear().healName.toUpperCase()} IN BAG (${this.bag.heal})`);
          this._updateHud();
        } else {
          const targetW = (w && !w.infinite && (w.mag + w.curReserve) < w.maxCarry)
            ? w
            : this.weapons.find((x) => !x.infinite && (x.mag + x.curReserve) < x.maxCarry);
          if (!targetW) continue;
          pk.collected = true;
          pk.mesh.visible = false;
          const add = Math.min(targetW.maxCarry - (targetW.mag + targetW.curReserve), getAmmoDropAmount(targetW.id));
          targetW.curReserve += add;
          this.sound.playPickup();
          this.toast(`+${add} ${targetW.shortName.toUpperCase()}`);
          this._updateHud();
        }
      }
    }

    // Collect enemy-dropped & player-dropped items (weapons / bag items)
    for (let i = this.droppedItems.length - 1; i >= 0; i--) {
      const it = this.droppedItems[i];
      if (it.collected) continue;
      it.mesh.rotation.y += dt * 2.0;
      const d = Math.hypot(it.pos.x - this.player.pos.x, it.pos.z - this.player.pos.z);
      if (!it.hasLeft) {
        if (d > 2.2) it.hasLeft = true;
        continue;
      }
      if (d < 1.85) {
        let taken = false;
        if (it.kind === 'weapon') {
          taken = this._addWeaponToArsenal(it.weaponId, it.ammo, true);
        } else if (it.kind === 'bag' && this.bag[it.bagKey] < 9) {
          this.bag[it.bagKey]++;
          this.toast(`+1 ${(it.label || it.bagKey).toUpperCase()} IN BAG`);
          this._updateHud();
          taken = true;
        }
        if (taken) {
          it.collected = true;
          this.sound.playPickup();
          if (it.mesh.parent) it.mesh.parent.remove(it.mesh);
          this.droppedItems.splice(i, 1);
        }
      }
    }

    // Collect stuck/fallen recoverable thrown missiles (up to 40 kept)
    for (let i = this.recoverableMissiles.length - 1; i >= 0; i--) {
      const rm = this.recoverableMissiles[i];
      if (rm.collected) continue;
      const wp = rm.attachTo ? rm.mesh.getWorldPosition(new THREE.Vector3()) : rm.worldPos;
      const d = Math.hypot(wp.x - this.player.pos.x, wp.z - this.player.pos.z);
      if (d < 1.95 && Math.abs(wp.y - (this.player.pos.y + 0.9)) < 2.2) {
        let taken = false;
        if (rm.isBag) {
          if (this.bag.big_stone < 9) {
            this.bag.big_stone++;
            taken = true;
            this.toast('RECOVERED BIG STONE');
          }
        } else {
          const target = this.weapons.find((x) => x.id === rm.weaponId);
          if (target && !target.infinite && (target.mag + target.curReserve) < target.maxCarry) {
            if (target.mag < target.magSize && target.curReserve === 0) target.mag++;
            else target.curReserve++;
            taken = true;
            this.toast(`RECOVERED ${target.shortName.toUpperCase()}`);
          } else if (!target && this.weapons.length < 6) {
            taken = this._addWeaponToArsenal(rm.weaponId, 1, false);
          }
        }
        if (taken) {
          rm.collected = true;
          this.sound.playPickup();
          if (rm.mesh.parent) rm.mesh.parent.remove(rm.mesh);
          this.recoverableMissiles.splice(i, 1);
          this._updateHud();
        }
      }
    }

    // Update Molotov Burning Fire Pools (3m radius, 7s burn, hurts enemies AND player!)
    for (let i = this.firePools.length - 1; i >= 0; i--) {
      const fp = this.firePools[i];
      fp.life -= dt;
      fp.tickAccum += dt;
      for (let fi = 0; fi < fp.flames.length; fi++) {
        fp.flames[fi].scale.y = 0.75 + Math.sin(this.elapsed * 14 + fi * 1.7) * 0.35;
      }
      if (fp.tickAccum >= 0.4) {
        fp.tickAccum = 0;
        const dmgTick = 12;
        if (Math.hypot(this.player.pos.x - fp.pos.x, this.player.pos.z - fp.pos.z) <= fp.radius && Math.abs(this.player.pos.y - fp.pos.y) < 1.8) {
          this._damagePlayer(dmgTick, 'fire');
        }
        if (this.destructibles) {
          this.destructibles.hitSphere(fp.pos, fp.radius, 22, this._destructibleCallbacks(false));
        }
        for (const e of this.enemies) {
          if (!e.alive || !e.mesh.visible) continue;
          if (Math.hypot(e.mesh.position.x - fp.pos.x, e.mesh.position.z - fp.pos.z) <= fp.radius && Math.abs(e.mesh.position.y - fp.pos.y) < 1.8) {
            this._damageEnemy(e, dmgTick * 1.6, false, e.mesh.position.clone().add(new THREE.Vector3(0, 1.0, 0)));
          }
        }
      }
      if (fp.life <= 0) {
        if (fp.group.parent) fp.group.parent.remove(fp.group);
        this.firePools.splice(i, 1);
      }
    }
  }

  _stickProjectile(mesh, worldPos, attachTo = null) {
    if (attachTo) {
      attachTo.updateMatrixWorld(true);
      const localPos = attachTo.worldToLocal(worldPos.clone());
      if (mesh.parent) mesh.parent.remove(mesh);
      mesh.position.copy(localPos);
      attachTo.add(mesh);
    } else {
      mesh.position.copy(worldPos);
    }
    this.stuckProjectiles.push(mesh);
    while (this.stuckProjectiles.length > 60) {
      const old = this.stuckProjectiles.shift();
      if (old && old.parent) old.parent.remove(old);
    }
  }

  _updateProjectiles(dt) {
    // Player Physical Thrown Projectiles (Shuriken 3-Star Fan, Poisoned Darts, Heavy Stones)
    if (this.playerProjectiles.length > 0) {
      const enemyMeshes = [];
      for (const e of this.enemies) {
        if (e.alive) enemyMeshes.push(...e.getHitMeshes());
      }
      if (this.duel && this.duel.isPlaying() && this.duel.remoteFighter && this.duel.remoteFighter.alive) {
        enemyMeshes.push(...this.duel.remoteFighter.getHitMeshes());
      }
      if (this.tellApple && this.tellApple.visible) {
        enemyMeshes.push(this.tellApple);
      }

      for (let i = this.playerProjectiles.length - 1; i >= 0; i--) {
        const pr = this.playerProjectiles[i];
        pr.life -= dt;
        if (pr.life <= 0) {
          this.worldGroup.remove(pr.mesh);
          this.playerProjectiles.splice(i, 1);
          continue;
        }
        pr.vel.y -= pr.gravity * dt;
        const step = pr.vel.clone().multiplyScalar(dt);
        const stepLen = step.length();
        const dir = stepLen > 1e-5 ? step.clone().divideScalar(stepLen) : new THREE.Vector3(0, 0, -1);

        const wallHit = this.collision.raycast(pr.mesh.position, dir, stepLen + 0.14);
        const maxDist = wallHit ? wallHit.dist : stepLen + 0.14;
        this.raycaster.set(pr.mesh.position, dir);
        this.raycaster.far = maxDist;
        const hits = enemyMeshes.length > 0 ? this.raycaster.intersectObjects(enemyMeshes, false) : [];

        if (hits.length > 0) {
          const hit = hits[0];
          const rf = hit.object.userData.remoteFighter;
          const bys = hit.object.userData.bystander;
          if (bys && bys.alive) {
            this._damageBystander(bys, pr.damage, hit.point);
            this.worldGroup.remove(pr.mesh);
            this.playerProjectiles.splice(i, 1);
            continue;
          }
          const anim = hit.object.userData.animal;
          if (anim && anim.alive) {
            this._damageAnimal(anim, pr.damage, hit.point);
            this.worldGroup.remove(pr.mesh);
            this.playerProjectiles.splice(i, 1);
            continue;
          }

        const enemy = hit.object.userData.enemy;
          const isHead = hit.object.userData.hitZone === 'head';
          const dmg = isHead ? pr.damage * pr.headMult : pr.damage;
          this.stats.hits++;
          this._flashHitmarker(isHead);

          if (rf && rf.alive && this.duel && this.duel.isPlaying()) {
            this.duel.onLocalHitOpponent(dmg, isHead, hit.point);
            if (pr.sticks) this._stickProjectile(pr.mesh, hit.point, rf.root);
            else this.worldGroup.remove(pr.mesh);
          } else if (enemy && enemy.alive) {
            if (this.duel && this.duel.isPlaying() && this.duel.role === 'guest') {
              this.duel.onGuestHitAI(enemy.duelIndex, dmg, isHead, hit.point);
            } else {
              this._damageEnemy(enemy, dmg, isHead, hit.point);
              if (pr.poison && enemy.alive && typeof enemy.applyPoison === 'function') {
                enemy.applyPoison(pr.poison.duration, pr.poison.interval, pr.poison.tickDamage);
              }
            }
            if (pr.recoverable) this._registerRecoverableMissile(pr.mesh, pr.weaponId, hit.point, enemy.mesh, pr.isBag);
            else if (pr.sticks) this._stickProjectile(pr.mesh, hit.point, enemy.mesh);
            else this.worldGroup.remove(pr.mesh);
          } else {
            this.worldGroup.remove(pr.mesh);
          }
          this.playerProjectiles.splice(i, 1);
          continue;
        }

        if (wallHit) {
          if (this.destructibles) {
            this.destructibles.hitRay(pr.mesh.position, dir, stepLen + 0.35, pr.damage, this._destructibleCallbacks(true));
          }
          this.particles.spawnImpact(wallHit.point, wallHit.tag === 'stone' ? 0xd9d2c5 : 0xcca168, 4, 4);
          if (pr.recoverable) this._registerRecoverableMissile(pr.mesh, pr.weaponId, wallHit.point, null, pr.isBag);
          else if (pr.sticks) this._stickProjectile(pr.mesh, wallHit.point, null);
          else this.worldGroup.remove(pr.mesh);
          this.playerProjectiles.splice(i, 1);
          continue;
        }

        pr.mesh.position.add(step);
        if (pr.spinRate) pr.mesh.rotation.y += dt * pr.spinRate;

        const floorY = this.collision.getFloorHeight(pr.mesh.position.x, pr.mesh.position.z, pr.mesh.position.y + 0.1);
        if (pr.mesh.position.y <= floorY + 0.04) {
          pr.mesh.position.y = floorY + 0.03;
          this.particles.spawnImpact(pr.mesh.position, 0xcca168, 3, 3);
          if (pr.recoverable) this._registerRecoverableMissile(pr.mesh, pr.weaponId, pr.mesh.position, null, pr.isBag);
          else if (pr.sticks) this._stickProjectile(pr.mesh, pr.mesh.position, null);
          else this.worldGroup.remove(pr.mesh);
          this.playerProjectiles.splice(i, 1);
        }
      }
    }

    // Player Thrown Explosives (Dynamite / Fire-Pots)
    for (let i = this.playerThrowables.length - 1; i >= 0; i--) {
      const th = this.playerThrowables[i];
      th.fuse -= dt;
      th.vel.y -= 17.5 * dt;
      th.mesh.position.addScaledVector(th.vel, dt);
      th.mesh.rotation.x += dt * 9;
      th.mesh.rotation.z += dt * 7;

      const fy = this.collision.getFloorHeight(th.mesh.position.x, th.mesh.position.z, th.mesh.position.y);
      let molotovHit = false;
      if (th.mesh.position.y <= fy + 0.16) {
        th.mesh.position.y = fy + 0.16;
        if (th.isMolotov) {
          molotovHit = true;
        } else {
          th.vel.y *= -0.4;
          th.vel.x *= 0.65;
          th.vel.z *= 0.65;
        }
      }

      if (th.isMolotov && (molotovHit || th.fuse <= 0)) {
        const poolPos = th.mesh.position.clone();
        poolPos.y = fy;
        const vis = spawnFirePoolMesh(this.worldGroup, poolPos, th.radius || 3.0);
        this.firePools.push({ pos: poolPos, radius: th.radius || 3.0, life: th.burnDuration || 7.0, tickAccum: 0.35, ...vis });
        this.particles.spawnExplosion(poolPos, 2.2);
        this.sound.playExplosion();
        this.worldGroup.remove(th.mesh);
        this.playerThrowables.splice(i, 1);
        continue;
      }

      if (th.fuse <= 0) {
        this.particles.spawnExplosion(th.mesh.position, th.radius);
        this.sound.playExplosion();
        if (this.destructibles) {
          this.destructibles.hitSphere(th.mesh.position, th.radius, th.damage, this._destructibleCallbacks(false));
        }
        const inDuel = !!(this.duel && this.duel.isPlaying());
        if (th.fromRemote) {
          // Opponent's thrown explosive deals 60% PvP splash damage to local player
          const distP = this.player.pos.distanceTo(th.mesh.position);
          if (distP < th.radius) {
            const falloff = 1 - (distP / th.radius) * 0.55;
            this._damagePlayer(Math.round(th.damage * falloff * 0.60), 'opponent');
          }
        } else {
          if (inDuel && this.duel.remoteFighter && this.duel.remoteFighter.alive) {
            const distR = this.duel.remoteFighter.root.position.distanceTo(th.mesh.position);
            if (distR < th.radius) {
              const falloff = 1 - (distR / th.radius) * 0.55;
              this.duel.onLocalHitOpponent(th.damage * falloff, false, this.duel.remoteFighter.root.position.clone().add(new THREE.Vector3(0, 1.2, 0)));
            }
          }
          for (const enemy of this.enemies) {
            if (!enemy.alive) continue;
            const dist = enemy.mesh.position.distanceTo(th.mesh.position);
            if (dist < th.radius) {
              const falloff = 1 - (dist / th.radius) * 0.55;
              if (inDuel && this.duel.role === 'guest') {
                this.duel.onGuestHitAI(enemy.duelIndex, th.damage * falloff, false, enemy.mesh.position.clone().add(new THREE.Vector3(0, 1.2, 0)));
              } else {
                this._damageEnemy(enemy, th.damage * falloff, false, enemy.mesh.position.clone().add(new THREE.Vector3(0, 1.2, 0)));
              }
            }
          }
        }
        this.worldGroup.remove(th.mesh);
        this.playerThrowables.splice(i, 1);
      }
    }

    // Enemy Projectiles (visible glowing bullets / shuriken / bolts / cannonballs; lowered hit shape while crouched!)
    const playerCenter = new THREE.Vector3(this.player.pos.x, this.player.pos.y + (this.player.crouched ? 0.62 : 1.2), this.player.pos.z);
    const playerHitR = this.player.crouched ? 0.72 : 0.85;
    for (let i = this.enemyProjectiles.length - 1; i >= 0; i--) {
      const pr = this.enemyProjectiles[i];
      pr.life -= dt;
      if (pr.gravity) pr.vel.y -= pr.gravity * dt;
      const step = pr.vel.clone().multiplyScalar(dt);
      const stepLen = step.length();
      const dir = stepLen > 1e-5 ? step.clone().divideScalar(stepLen) : new THREE.Vector3(0, 0, 1);

      // Wall or floor impact check
      const wall = this.collision.raycast(pr.mesh.position, dir, stepLen + 0.15);
      const hitFloor = pr.gravity && (pr.mesh.position.y + step.y <= this.collision.getFloorHeight(pr.mesh.position.x, pr.mesh.position.z, pr.mesh.position.y) + 0.18);
      if (wall || hitFloor || pr.life <= 0) {
        if (pr.isCannonball && (wall || hitFloor)) {
          const blastPos = wall ? wall.point : pr.mesh.position;
          this.particles.spawnExplosion(blastPos, 2.8);
          if (blastPos.distanceTo(playerCenter) < 3.0) this._damagePlayer(pr.damage);
        } else if (wall) {
          if (this.destructibles) {
            this.destructibles.hitRay(pr.mesh.position, dir, stepLen + 0.3, pr.damage, this._destructibleCallbacks(false));
          }
          this.particles.spawnImpact(wall.point, 0xffd27a, 4, 4);
        }
        this.worldGroup.remove(pr.mesh);
        this.enemyProjectiles.splice(i, 1);
        continue;
      }

      pr.mesh.position.add(step);
      if (pr.spinRate) pr.mesh.rotation.y += dt * pr.spinRate;
      if (pr.mesh.position.distanceTo(playerCenter) < (pr.isCannonball ? playerHitR + 0.35 : playerHitR)) {
        if (pr.isCannonball) this.particles.spawnExplosion(pr.mesh.position, 2.8);
        this._damagePlayer(pr.damage);
        this.worldGroup.remove(pr.mesh);
        this.enemyProjectiles.splice(i, 1);
      }
    }
  }

  spawnDuelAIProjectile(muzzlePos, targetPos, color, damage) {
    const dir = new THREE.Vector3().subVectors(targetPos, muzzlePos).normalize();
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.11, 6, 6),
      new THREE.MeshBasicMaterial({ color: color || 0xffd266 })
    );
    mesh.position.copy(muzzlePos);
    this.worldGroup.add(mesh);
    this.particles.spawnTracer(muzzlePos, muzzlePos.clone().addScaledVector(dir, 3.5), color || 0xffd266, 0.08);
    this.enemyProjectiles.push({
      mesh,
      vel: dir.multiplyScalar(30),
      damage,
      life: 2.8
    });
  }

  _updateEnemies(dt) {
    const inDuel = !!(this.duel && this.duel.isPlaying());
    // In Duel Mode, the Host authoritatively simulates the 6 AI enemies and syncs them to Guest
    if (inDuel && this.duel.role === 'guest') {
      this._resolveLivingSeparation();
      return;
    }

    const mods = (this.activeHero && this.activeHero.mods) || {};
    const detectMult = this.isSkillActive('vanish') ? 0.01 : (mods.stealthMult || 1.0);

    for (const enemy of this.enemies) {
      // In Duel Mode, each AI enemy targets whichever alive player (host or guest) is closer!
      let targetPos = this.player.pos;
      let targetIsGuest = false;
      if (inDuel && this.duel.remoteFighter && this.duel.remoteFighter.alive) {
        const dHost = this.duel.myDead ? 1e9 : enemy.mesh.position.distanceTo(this.player.pos);
        const dGuest = enemy.mesh.position.distanceTo(this.duel.remoteFighter.root.position);
        if (dGuest < dHost) {
          targetPos = this.duel.remoteFighter.root.position;
          targetIsGuest = true;
        }
      }

      const callbacks = {
        onSpottedPlayer: () => {
          const eraId = LEVELS[this.levelIndex]?.meta?.id || 'west';
          this.sound.speakVoice(eraId, 'spot');
        },
        onAlertAllies: (caller, spotPos, rad) => {
          for (const ally of this.enemies) {
            if (!ally.alive || ally === caller) continue;
            if (ally.mesh.position.distanceTo(caller.mesh.position) <= rad) {
              ally.alert = true;
              ally.lastKnownPos = spotPos.clone();
              ally.searchTimer = 12.0;
            }
          }
        },
        onDogBark: () => {
          this.sound.playDogBark();
        },
        onPoisonTick: (en, dmg) => {
          this._damageEnemy(en, dmg, false, en.mesh.position.clone().add(new THREE.Vector3(0, 1.3, 0)));
        },
        onMeleeHitPlayer: (dmg) => {
          if (targetIsGuest && inDuel) {
            this.duel.net.send({ type: 'hit', dmg: Math.round(dmg), head: false });
          } else {
            this._damagePlayer(dmg, 'ai');
          }
        },
        onEnemyFire: (en, muzzlePos, tPos) => {
          const dir = new THREE.Vector3().subVectors(tPos, muzzlePos).normalize();
          const spread = en.isBoss ? 0.04 : en.style === 'cannon' ? 0.025 : 0.07;
          dir.x += (Math.random() - 0.5) * spread;
          dir.y += (Math.random() - 0.5) * spread * 0.6;
          dir.z += (Math.random() - 0.5) * spread;
          dir.normalize();

          if (en.smokeOnFire) {
            this.particles.spawnSmoke(muzzlePos, 0xd9d2c5, en.style === 'cannon' ? 10 : 5, en.style === 'cannon' ? 0.85 : 0.45);
          }

          let mesh;
          let projSpeed = en.isBoss ? 38 : 30;
          let gravity = 0;
          let isCannonball = false;
          let projKind = 'bullet';

          if (en.style === 'cannon') {
            mesh = new THREE.Mesh(
              new THREE.SphereGeometry(0.24, 10, 8),
              new THREE.MeshStandardMaterial({ color: 0x1e2126, metalness: 0.78, roughness: 0.35 })
            );
            projSpeed = 26;
            gravity = 2.6;
            isCannonball = true;
            projKind = 'cannonball';
            this.sound.playExplosion();
          } else if (en.type === 'ninja') {
            mesh = buildEightPointShuriken(1.05);
            projKind = 'shuriken';
          } else if (en.type === 'spanish_crossbow') {
            mesh = new THREE.Mesh(
              new THREE.CylinderGeometry(0.025, 0.025, 0.52, 6),
              new THREE.MeshBasicMaterial({ color: 0xf4f9ff })
            );
            mesh.rotation.x = Math.PI / 2;
            mesh.lookAt(muzzlePos.clone().add(dir));
            projKind = 'bolt';
          } else {
            mesh = new THREE.Mesh(
              new THREE.SphereGeometry(0.11, 6, 6),
              new THREE.MeshBasicMaterial({ color: en.projectileColor })
            );
          }
          mesh.position.copy(muzzlePos);
          this.worldGroup.add(mesh);
          this.particles.spawnTracer(muzzlePos, muzzlePos.clone().addScaledVector(dir, 3.5), en.projectileColor, 0.08);
          this.enemyProjectiles.push({
            mesh,
            vel: dir.multiplyScalar(projSpeed),
            gravity,
            isCannonball,
            projKind,
            damage: en.damage,
            life: isCannonball ? 4.2 : 2.8,
            spinRate: en.type === 'ninja' ? 24 : 0
          });
          if (!this.firedEnemyProjKinds) this.firedEnemyProjKinds = new Set();
          this.firedEnemyProjKinds.add(projKind);
          if (inDuel) {
            this.duel.net.send({
              type: 'ai_shot',
              m: [muzzlePos.x, muzzlePos.y, muzzlePos.z],
              t: [tPos.x, tPos.y, tPos.z],
              color: en.projectileColor,
              dmg: en.damage
            });
          }
        }
      };

      const targetCrouched = targetIsGuest
        ? !!(this.duel && this.duel.remoteFighter && this.duel.remoteFighter.crouched)
        : !!this.player.crouched;
      const targetSneaking = targetIsGuest
        ? !!(this.duel && this.duel.remoteFighter && this.duel.remoteFighter.sneaking)
        : (!!this.player.sneaking && !(this.keys['ShiftLeft'] || this.keys['ShiftRight']));
      enemy.update(dt, targetPos, this.collision, callbacks, detectMult, targetCrouched, targetSneaking, this.activeWits || this.witsPref || 'medium');
    }

    // Solid living bodies: push overlapping player, remote opponent & enemies apart cleanly
    this._resolveLivingSeparation();

    // Also wake boss if player charges deep into the northern stronghold (SP only)
    if (!inDuel && this.bossSpawnPending && this.player.pos.z < -12) {
      this._checkStageProgression();
    }
  }

  _resolveLivingSeparation() {
    const alive = this.enemies.filter((e) => e.alive && e.mesh.visible);
    const pRadius = 0.52;

    // Solid Duel Opponent vs Local Player
    if (this.duel && this.duel.isPlaying() && this.duel.remoteFighter && this.duel.remoteFighter.alive && !this.duel.myDead) {
      const rf = this.duel.remoteFighter;
      if (Math.abs(rf.root.position.y - this.player.pos.y) <= 1.8) {
        const dx = this.player.pos.x - rf.root.position.x;
        const dz = this.player.pos.z - rf.root.position.z;
        const minD = pRadius + rf.radius;
        const distSq = dx * dx + dz * dz;
        if (distSq < minD * minD) {
          const dist = Math.sqrt(distSq) || 0.001;
          const push = minD - dist;
          this.collision.moveHorizontal(this.player.pos, (dx / dist) * push, (dz / dist) * push, pRadius, this.player.pos.y);
        }
      }
    }

    // Player vs each living enemy
    for (const e of alive) {
      if (Math.abs(e.mesh.position.y - this.player.pos.y) > 1.7) continue;
      const dx = this.player.pos.x - e.mesh.position.x;
      const dz = this.player.pos.z - e.mesh.position.z;
      const minD = pRadius + e.radius;
      const distSq = dx * dx + dz * dz;
      if (distSq < minD * minD) {
        const dist = Math.sqrt(distSq) || 0.001;
        const overlap = (minD - dist) * 0.52;
        const nx = dx / dist;
        const nz = dz / dist;
        this.collision.moveHorizontal(this.player.pos, nx * overlap, nz * overlap, pRadius, this.player.pos.y);
        if (e.speed > 0) {
          this.collision.moveHorizontal(e.mesh.position, -nx * overlap, -nz * overlap, e.radius, e.mesh.position.y);
        }
      }
    }

    // Living enemy vs living enemy
    for (let i = 0; i < alive.length; i++) {
      const a = alive[i];
      for (let j = i + 1; j < alive.length; j++) {
        const b = alive[j];
        if (Math.abs(a.mesh.position.y - b.mesh.position.y) > 1.7) continue;
        const dx = a.mesh.position.x - b.mesh.position.x;
        const dz = a.mesh.position.z - b.mesh.position.z;
        const minD = a.radius + b.radius;
        const distSq = dx * dx + dz * dz;
        if (distSq < minD * minD) {
          const dist = Math.sqrt(distSq) || 0.001;
          const overlap = (minD - dist) * 0.5;
          const nx = dx / dist;
          const nz = dz / dist;
          if (a.speed > 0) this.collision.moveHorizontal(a.mesh.position, nx * overlap, nz * overlap, a.radius, a.mesh.position.y);
          if (b.speed > 0) this.collision.moveHorizontal(b.mesh.position, -nx * overlap, -nz * overlap, b.radius, b.mesh.position.y);
        }
      }
    }
  }

  setGraphicsPreference(pref) {
    if (!['auto', 'high', 'medium', 'low'].includes(pref)) return;
    this.graphicsPref = pref;
    try { localStorage.setItem('nine_horizons_graphics', pref); } catch {}
    if (pref === 'auto') {
      this.autoGfx.samples = [];
      this.autoGfx.pendingCheck = null;
      this.autoGfx.lockedUntilNextChapter = false;
      this.applyGraphicsLevel('high');
    } else {
      this.applyGraphicsLevel(pref);
    }
    this._syncGraphicsUi();
    this.toast(`GRAPHICS: ${this._graphicsLabel().toUpperCase()}`);
  }

  cycleGraphicsPreference() {
    const order = ['auto', 'high', 'medium', 'low'];
    const idx = order.indexOf(this.graphicsPref);
    const next = order[(idx + 1) % order.length];
    this.setGraphicsPreference(next);
  }

  _graphicsLabel() {
    const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    if (this.graphicsPref === 'auto') return `Automatic (${cap(this.activeGraphicsLevel)})`;
    return cap(this.activeGraphicsLevel);
  }

  _syncGraphicsUi() {
    if (this.dom.titleGraphicsSelect) this.dom.titleGraphicsSelect.value = this.graphicsPref;
    if (this.dom.btnPauseGraphics) {
      this.dom.btnPauseGraphics.textContent = `GRAPHICS: ${this._graphicsLabel().toUpperCase()} [G]`;
    }
  }

  _applyRenderScale() {
    const scale = this.activeGraphicsLevel === 'low' ? 0.5 : (this.activeGraphicsLevel === 'medium' ? 0.75 : 1.0);
    const dpr = this.activeGraphicsLevel === 'high' ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    const w = Math.max(320, Math.round(window.innerWidth * scale));
    const h = Math.max(200, Math.round(window.innerHeight * scale));
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(w, h, false);
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.composer.setPixelRatio(dpr);
    this.composer.setSize(w, h);
    if (this.bloomPass && this.bloomPass.setSize) this.bloomPass.setSize(w, h);
  }

  applyGraphicsLevel(level) {
    if (!['high', 'medium', 'low'].includes(level)) level = 'high';
    this.activeGraphicsLevel = level;
    this._applyRenderScale();
    if (this.bloomPass) {
      this.bloomPass.enabled = level !== 'low';
    }
    // Adjust directional shadow range (60% on Low) & toggle half of decorative foliage/far props on Low without rebuilding world
    let foliageIdx = 0;
    const isLow = level === 'low';
    this.worldGroup.traverse((obj) => {
      if (obj.isDirectionalLight && obj.castShadow && obj.shadow && obj.shadow.camera) {
        const sc = obj.shadow.camera;
        if (!obj.userData._origShadow) {
          obj.userData._origShadow = { left: sc.left, right: sc.right, top: sc.top, bottom: sc.bottom, far: sc.far };
        }
        const o = obj.userData._origShadow;
        const mult = isLow ? 0.6 : 1.0;
        sc.left = o.left * mult;
        sc.right = o.right * mult;
        sc.top = o.top * mult;
        sc.bottom = o.bottom * mult;
        sc.far = o.far * mult;
        sc.updateProjectionMatrix();
      }
      if (obj.isMesh && obj.geometry && obj.geometry.type === 'ConeGeometry') {
        const p = obj.geometry.parameters;
        // Small ground grass tufts & far canopy cones: thin every second one on Low
        if (p && p.radius <= 1.2 && p.height <= 2.4 && (!obj.parent || obj.parent === this.worldGroup)) {
          obj.visible = !isLow || (foliageIdx % 2 === 0);
          foliageIdx++;
        }
      }
    });
    this._syncGraphicsUi();
  }

  recordAutoFrameMs(frameMs) {
    if (this.graphicsPref !== 'auto' || this.autoGfx.lockedUntilNextChapter) return;
    if (!Number.isFinite(frameMs) || frameMs <= 0 || frameMs > 500) return;
    this.autoGfx.samples.push(frameMs);
    if (this.autoGfx.samples.length < 80) return;

    const avgMs = this.autoGfx.samples.reduce((a, b) => a + b, 0) / this.autoGfx.samples.length;
    this.autoGfx.samples.length = 0;

    if (this.autoGfx.pendingCheck) {
      const { fromLevel, prevAvgMs } = this.autoGfx.pendingCheck;
      this.autoGfx.pendingCheck = null;
      const gain = (prevAvgMs - avgMs) / Math.max(0.001, prevAvgMs);
      if (gain < 0.07) {
        // Step did not shorten frame time by >= 7%: revert and stop trying until next chapter
        this.applyGraphicsLevel(fromLevel);
        this.autoGfx.lockedUntilNextChapter = true;
        return;
      }
    }

    const avgFps = 1000 / Math.max(0.1, avgMs);
    if (avgFps < 42) {
      if (this.activeGraphicsLevel === 'high') {
        this.autoGfx.pendingCheck = { fromLevel: 'high', prevAvgMs: avgMs };
        this.applyGraphicsLevel('medium');
      } else if (this.activeGraphicsLevel === 'medium') {
        this.autoGfx.pendingCheck = { fromLevel: 'medium', prevAvgMs: avgMs };
        this.applyGraphicsLevel('low');
      }
    }
  }

  _loop() {
    requestAnimationFrame(() => this._loop());
    const nowMs = performance.now();
    const rawFrameMs = Math.max(0, nowMs - this._lastFrameMs);
    this._lastFrameMs = nowMs;
    const dt = Math.max(0, Math.min(0.05, this.clock.getDelta()));
    this.elapsed += dt;

    if (this.state === 'playing') {
      this.recordAutoFrameMs(rawFrameMs);
    }

    if (this.showFpsCounter && this.dom.fpsCounter) {
      this._fpsAccumTime += rawFrameMs;
      this._fpsFrames++;
      if (this._fpsAccumTime >= 350) {
        this._fpsSmoothed = Math.round((this._fpsFrames * 1000) / Math.max(1, this._fpsAccumTime));
        this._fpsAccumTime = 0;
        this._fpsFrames = 0;
        const c = this.renderer.domElement;
        this.dom.fpsCounter.textContent = `${this._fpsSmoothed} FPS · ${this._graphicsLabel()} · ${c.width}×${c.height}`;
      }
    }

    // Always animate sky, water, waterfalls, lanterns, flags & ambient particles!
    for (const fn of this.animatedCallbacks) fn(this.elapsed, dt);
    if (this.particles) this.particles.update(dt, this.elapsed);

    if (this.state === 'playing') {
      if (!(this.duel && this.duel.active && this.duel.myDead)) {
        this._updatePlayer(dt);
      }
      this._updateEnemies(dt);
      this._updateProjectiles(dt);
      if (this.destructibles) this.destructibles.update(dt);
      // Update living bystanders, living animals & pecking/flying birds!
      const pFwd = new THREE.Vector3();
      this.camera.getWorldDirection(pFwd);
      for (const b of this.bystanders) {
        if (typeof b.update === 'function') b.update(dt, this.elapsed, this.player.pos, pFwd, this.collision, this.sound);
      }
      for (const a of (this.animals || [])) {
        if (typeof a.update === 'function') a.update(dt, this.elapsed, this.player.pos, this.collision, (dmg) => this._damagePlayer(dmg, 'animal'));
      }
      if (this.ambientLife) this.ambientLife.updateBirds(dt, this.elapsed, this.player.pos);
      for (const hook of (this.stage14AudioHooks || [])) hook(dt, this.player.pos, this.sound);
      if (this.duel && this.duel.isPlaying()) {
        this.duel.update(dt);
      }
      if (this.minimap) {
        this.minimap.update(this.player.pos, this.player.yaw, this.camera, this.enemies, {
          eagleEye: this.isSkillActive('eagle_eye'),
          remoteFighter: (this.duel && this.duel.isPlaying()) ? this.duel.remoteFighter : null,
          isCoop: !!(this.duel && this.duel.isPlaying() && this.duel.config && this.duel.config.rule === 'coop')
        });
      }
    } else if (this.state === 'title' || this.state === 'intro' || this.state === 'duel_lobby' || this.state === 'duel_select') {
      // Sweeping cinematic live camera flyover of the selected 3D world!
      const preview = LEVELS[this.levelIndex].meta.cameraPreview;
      const ang = this.elapsed * preview.speed;
      this.camera.position.set(
        preview.center.x + Math.sin(ang) * preview.radius,
        preview.height + Math.sin(this.elapsed * 0.45) * 1.4,
        preview.center.z + Math.cos(ang) * preview.radius
      );
      this.camera.lookAt(preview.center);
      this.weaponHolder.visible = false;

      if ((this.state === 'intro' || this.state === 'duel_select') && this.heroStage.visible) {
        // Position the live 3D Hero/Fighter Turntable cleanly inside the left showcase pane across aspect ratios
        const dist = 3.25;
        const halfH = Math.tan(THREE.MathUtils.degToRad(this.camera.fov * 0.5)) * dist;
        const halfW = halfH * this.camera.aspect;
        const isStacked = window.innerWidth <= 860;
        const posX = isStacked ? 0 : -halfW * 0.45;
        const posY = isStacked ? 0.15 : -0.96;
        this.heroStage.position.set(posX, posY, -dist);

        // Smooth pop-in scale & gentle turntable rotation
        this.heroStagePop += (1 - this.heroStagePop) * Math.min(1, dt * 10);
        const s = (isStacked ? 0.72 : 0.96) * this.heroStagePop;
        this.heroFigureHolder.scale.setScalar(s);
        this.heroFigureHolder.rotation.y += dt * 0.55;
      }
    }

    this.composer.render();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.__OUTLAWS_GAME__ = new OutlawsGame();
});
