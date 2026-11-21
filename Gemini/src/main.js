import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

import { CollisionWorld } from './engine/collision.js';
import { ParticleSystem } from './engine/particles.js';
import { SoundEngine } from './engine/audio.js';
import { DuelController } from './engine/duelController.js';
import { ERA_WEAPONS, buildWeaponViewmodel } from './entities/weapons.js';
import { ERA_HEROES, getHeroById, buildHeroFigure } from './entities/heroes.js';
import { Enemy } from './entities/enemies.js';
import { LEVEL1_META, buildLevel1 } from './levels/level1_west.js';
import { LEVEL2_META, buildLevel2 } from './levels/level2_japan.js';
import { LEVEL3_META, buildLevel3 } from './levels/level3_swiss.js';
import { LEVEL4_META, buildLevel4 } from './levels/level4_greece.js';
import { LEVEL5_META, buildLevel5 } from './levels/level5_scandinavia.js';
import { LEVEL6_META, buildLevel6 } from './levels/level6_normandy.js';
import { LEVEL7_META, buildLevel7 } from './levels/level7_soviet.js';
import { LEVEL8_META, buildLevel8 } from './levels/level8_tibet.js';

const LEVELS = [
  { meta: LEVEL1_META, builder: buildLevel1 },
  { meta: LEVEL2_META, builder: buildLevel2 },
  { meta: LEVEL3_META, builder: buildLevel3 },
  { meta: LEVEL4_META, builder: buildLevel4 },
  { meta: LEVEL5_META, builder: buildLevel5 },
  { meta: LEVEL6_META, builder: buildLevel6 },
  { meta: LEVEL7_META, builder: buildLevel7 },
  { meta: LEVEL8_META, builder: buildLevel8 }
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

    // Game State
    this.state = 'title'; // 'title' | 'intro' | 'playing' | 'paused' | 'ended'
    this.levelIndex = 0;
    this.difficultyKey = 'bad';
    // Remember chosen hero per level (preserved on retry after death!)
    this.selectedHeroIds = {
      west: ERA_HEROES.west[0].id,
      japan: ERA_HEROES.japan[0].id,
      swiss: ERA_HEROES.swiss[0].id,
      greece: ERA_HEROES.greece[0].id,
      scandinavia: ERA_HEROES.scandinavia[0].id,
      normandy: ERA_HEROES.normandy[0].id,
      soviet: ERA_HEROES.soviet[0].id,
      tibet: ERA_HEROES.tibet[0].id
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
    this.particles = null;
    this.animatedCallbacks = [];
    this.enemies = [];
    this.bossSpawnPending = null;
    this.activeBoss = null;
    this.pickups = [];
    this.enemyProjectiles = [];
    this.playerThrowables = [];
    this.tellApple = null;

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
    this.stats = { score: 0, shots: 0, hits: 0, headshots: 0, kills: 0 };

    // Input State
    this.keys = {};
    this.mouseDownL = false;
    this.mouseDownR = false;
    this.pointerLocked = false;

    this.raycaster = new THREE.Raycaster();

    this._cacheDom();
    this._bindEvents();
    this.duel = new DuelController(this);

    // Support URL params / hash (?duel=CODE, ?level=, #west..#tibet); default to a random level behind the title!
    const params = new URLSearchParams(window.location.search);
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const mapIdx = { west: 0, japan: 1, swiss: 2, greece: 3, scandinavia: 4, normandy: 5, soviet: 6, tibet: 7 };
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
      hitFlash: document.getElementById('hit-flash'),
      paxBadge: document.getElementById('pax-badge'),
      callout: document.getElementById('callout-banner'),
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
      hpText: document.getElementById('hud-hp-text'),
      hpBar: document.getElementById('hud-hp-bar'),
      staminaBar: document.getElementById('hud-stamina-bar'),
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
      heroCardsList: document.getElementById('hero-cards-list'),
      heroPreviewName: document.getElementById('hero-preview-name'),
      heroPreviewBio: document.getElementById('hero-preview-bio'),
      heroPreviewStrength: document.getElementById('hero-preview-strength'),

      pauseLevelName: document.getElementById('pause-level-name'),
      btnToggleAudio: document.getElementById('btn-toggle-audio'),
      endEyebrow: document.getElementById('end-eyebrow'),
      endTitle: document.getElementById('end-title'),
      endPracticeNote: document.getElementById('end-practice-note'),
      endSummary: document.getElementById('end-summary'),
      endStats: document.getElementById('end-stats'),
      btnNextLevel: document.getElementById('btn-next-level')
    };
  }

  _bindEvents() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.composer.setSize(window.innerWidth, window.innerHeight);
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

    // Play -> Show Illustrated Intro Card
    document.getElementById('btn-play').addEventListener('click', () => {
      this.sound.ensureInit();
      this.showIntroCard();
    });

    // Start Mission from Hero Selection -> Pointer Lock & Play!
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

    this.dom.btnToggleAudio.addEventListener('click', () => {
      const m = this.sound.toggleMute();
      this.dom.btnToggleAudio.textContent = m ? 'SOUND: OFF' : 'SOUND: ON';
    });

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

      if (e.code === 'KeyM') {
        const m = this.sound.toggleMute();
        this.dom.btnToggleAudio.textContent = m ? 'SOUND: OFF' : 'SOUND: ON';
        this.toast(m ? 'AUDIO MUTED' : 'AUDIO ENABLED');
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

      if (this.state !== 'playing') return;

      if (e.code === 'Digit1') this.switchWeapon(0);
      if (e.code === 'Digit2') this.switchWeapon(1);
      if (e.code === 'Digit3') this.switchWeapon(2);
      if (e.code === 'Digit4') this.switchWeapon(3);
      if (e.code === 'KeyR') this.startReload();
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
    });

    // Mouse Wheel Weapon Switch
    window.addEventListener('wheel', (e) => {
      if (this.state !== 'playing') return;
      const dir = e.deltaY > 0 ? 1 : -1;
      const next = (this.currentWeaponIdx + dir + this.weapons.length) % this.weapons.length;
      this.switchWeapon(next);
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
      } else if (e.button === 2) {
        this.mouseDownR = true;
        this.handleRightClickDown();
      }
    });

    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) this.mouseDownL = false;
      if (e.button === 2) {
        this.mouseDownR = false;
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
    this.bossSpawnPending = null;
    this.activeBoss = null;
    this.pickups = [];
    this.enemyProjectiles = [];
    this.playerThrowables = [];
    this.tellApple = null;
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
    // Build real 2D A* navigation grid directly from this level's exact collision shapes
    this.collision.buildNavGrid(1.35);
    this.animatedCallbacks = built.animated || [];
    this.pickups = built.pickups || [];
    this.tellApple = built.tellApple || null;
    this.enterableBuildings = built.enterableBuildings || [];

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
    this.timeSinceLastDamage = 999;

    this.stats = { score: 0, shots: 0, hits: 0, headshots: 0, kills: 0 };

    // Spawn Enemies
    if (isDuel) {
      this.bossSpawnPending = null;
      if (duelOpts.duelEnemiesOpt === 'few') {
        const ordinary = built.enemySpawns.filter((s) => !s.isBossWave && !(s.options && s.options.hideUntilClose));
        const pickCount = Math.min(6, ordinary.length);
        const step = ordinary.length / pickCount;
        for (let i = 0; i < pickCount; i++) {
          const sp = ordinary[Math.floor(i * step)];
          const enemy = new Enemy(sp.type, sp.pos, 0.9);
          enemy.duelIndex = i;
          this.worldGroup.add(enemy.mesh);
          this.enemies.push(enemy);
        }
      }
    } else {
      for (const sp of built.enemySpawns) {
        if (sp.isBossWave) {
          this.bossSpawnPending = sp;
        } else {
          const enemy = new Enemy(sp.type, sp.pos, diff.enemyMult, sp.options || {});
          this.worldGroup.add(enemy.mesh);
          this.enemies.push(enemy);
        }
      }
    }

    // Build Era Weapons (or Hero-specific loadout when hero.weaponIds is defined, e.g. Normandy!)
    const allEraWeapons = ERA_WEAPONS[meta.id];
    const templates = hero.weaponIds
      ? hero.weaponIds.map((id) => allEraWeapons.find((w) => w.id === id)).filter(Boolean)
      : allEraWeapons;
    this.weapons = templates.map((w) => {
      const ov = (mods.weaponOverrides && mods.weaponOverrides[w.id]) || {};
      const fireRateMult = (w.kind === 'melee' && mods.meleeFireRateMult ? mods.meleeFireRateMult : 1)
        * (mods.fireRateMult || 1)
        * (ov.fireRateMult || 1);
      const reloadTimeMult = (mods.reloadTimeMult || 1) * (ov.reloadTimeMult || 1);
      const damageMult = (w.kind === 'melee' && mods.meleeDamageMult ? mods.meleeDamageMult : 1)
        * (mods.damageMult || 1)
        * (ov.damageMult || 1);
      const rangeBonus = w.kind === 'melee' && mods.meleeRangeBonus ? mods.meleeRangeBonus : 0;

      return {
        ...w,
        damage: Math.round(w.damage * damageMult),
        fireRate: +(w.fireRate * fireRateMult).toFixed(3),
        reloadTime: +(w.reloadTime * reloadTimeMult).toFixed(3),
        range: w.range ? +(w.range + rangeBonus).toFixed(2) : w.range,
        mag: w.magSize,
        curReserve: w.reserve
      };
    });
    this.weaponMeshes = this.weapons.map((w) => {
      const m = buildWeaponViewmodel(w.id);
      m.visible = false;
      this.weaponHolder.add(m);
      return m;
    });
    const startWepIdx = Math.min(this.weapons.length - 1, Math.max(0, hero.defaultWeaponIdx || 0));
    this.currentWeaponIdx = startWepIdx;
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
    this.dom.heroCardsList.innerHTML = heroes.map((h, i) => `
      <button type="button" class="hero-card" data-hero-idx="${i}" role="radio" aria-checked="false">
        <div class="hero-card-key">${i + 1}</div>
        <div class="hero-card-body">
          <div class="hero-card-name">${h.name}</div>
          <div class="hero-card-bio">${h.bio}</div>
          <div class="hero-card-strength"><span>${h.strengthLabel}</span>${h.strengthDesc}</div>
        </div>
      </button>
    `).join('');

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

  // ---------------- Weapons & Combat ----------------
  switchWeapon(idx) {
    if (idx === this.currentWeaponIdx || idx < 0 || idx >= this.weapons.length) return;
    this.setScope(false);
    this.reloading = false;
    this.weaponMeshes[this.currentWeaponIdx].visible = false;
    this.currentWeaponIdx = idx;
    this.weaponMeshes[idx].visible = true;
    this.recoilOffset = -0.18;
    this._updateHud();
  }

  setScope(active) {
    const w = this.weapons[this.currentWeaponIdx];
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
    const w = this.weapons[this.currentWeaponIdx];
    if (!w) return;
    if (w.altMode === 'scope') {
      this.setScope(true);
    } else {
      this.tryFire(true);
    }
  }

  startReload() {
    const w = this.weapons[this.currentWeaponIdx];
    if (!w || w.infinite || this.reloading) return;
    if (w.mag >= w.magSize || w.curReserve <= 0) return;
    this.setScope(false);
    this.reloading = true;
    this.reloadTimer = w.reloadTime;
    this.sound.playReload();
    this.toast('RELOADING...');
  }

  tryFire(isAlt) {
    if (this.fireTimer > 0 || this.reloading) return;
    if (this.duel && this.duel.active && (this.duel.myDead || this.duel.phase !== 'playing')) return;
    const w = this.weapons[this.currentWeaponIdx];
    if (!w) return;

    if (!w.infinite && w.mag <= 0) {
      if (w.curReserve > 0) this.startReload();
      else this.toast('OUT OF AMMO!');
      return;
    }

    // Melee Weapon (Katana / Swiss Halberd / Sword / Knife)
    if (w.kind === 'melee') {
      const heavy = isAlt && w.altMode === 'heavy_slash';
      this.fireTimer = heavy ? w.fireRate * 1.45 : w.fireRate;
      this.slashAnim = 1.0;
      this.sound.playShot('slash');

      const forward = new THREE.Vector3();
      this.camera.getWorldDirection(forward);
      const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();
      const origin = this.camera.getWorldPosition(new THREE.Vector3());
      this.particles.spawnSlashArc(origin, forward, right, w.slashColor);
      if (this.duel && this.duel.isPlaying()) {
        this.duel.onLocalMelee(origin, forward, w.slashColor);
      }

      const dmg = heavy ? w.damage * 1.65 : w.damage;
      const range = heavy ? w.range + 1.0 : w.range;
      let hitAny = false;

      // Duel melee vs Remote Opponent (respecting wall LOS!)
      if (this.duel && this.duel.isPlaying() && this.duel.remoteFighter && this.duel.remoteFighter.alive) {
        const rf = this.duel.remoteFighter;
        const targetChest = new THREE.Vector3(rf.root.position.x, rf.root.position.y + 1.15 * rf.figureScale, rf.root.position.z);
        const toR = new THREE.Vector3().subVectors(targetChest, origin);
        if (toR.length() <= range + rf.radius * 0.6) {
          toR.normalize();
          if (toR.dot(forward) > 0.35 && this.collision.hasLineOfSight(origin, targetChest)) {
            hitAny = true;
            this.duel.onLocalHitOpponent(dmg, heavy, targetChest);
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
        const dist = toE.length();
        if (dist <= range) {
          toE.normalize();
          if (toE.dot(forward) > 0.35 && this.collision.hasLineOfSight(origin, targetChest)) {
            hitAny = true;
            if (this.duel && this.duel.isPlaying() && this.duel.role === 'guest') {
              this.duel.onGuestHitAI(enemy.duelIndex, dmg, heavy, targetChest);
            } else {
              this._damageEnemy(enemy, dmg, heavy, enemy.mesh.position.clone().add(new THREE.Vector3(0, 1.3, 0)));
            }
          }
        }
      }
      if (hitAny) this._flashHitmarker(heavy);
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
        fuse: 1.65,
        damage: w.damage,
        radius: w.blastRadius
      });
      if (this.duel && this.duel.isPlaying()) {
        this.duel.onLocalThrow(mesh.position, throwVel, w.projColor, w.blastRadius);
      }

      if (w.mag === 0 && w.curReserve > 0) this.startReload();
      this._updateHud();
      return;
    }

    // Hitscan Firearms, Bows, Crossbows & Shuriken
    let shotsToConsume = 1;
    let pellets = w.pellets;
    let spread = this.scoped ? w.spread * 0.12 : w.spread;
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

    // Muzzle flash & audio + gunfire sound alert radius (Virginia Hall alerts enemies much closer!)
    this.sound.playShot(w.sound);
    const loudGuns = ['revolver', 'shotgun', 'rifle', 'musket', 'smg', 'sniper'];
    if (loudGuns.includes(w.sound)) {
      this.muzzleLight.intensity = w.sound === 'smg' ? 7 : 10;
      const mods = (this.activeHero && this.activeHero.mods) || {};
      const soundRadius = mods.soundAlertRadius || 34;
      for (const e of this.enemies) {
        if (!e.alive || e.alert) continue;
        const d = Math.hypot(e.mesh.position.x - this.player.pos.x, e.mesh.position.z - this.player.pos.z);
        if (d <= soundRadius) {
          e.alert = true;
          if (e.style === 'dog') this.sound.playDogBark();
        }
      }
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

    // Collect shootable meshes (AI enemies + Duel Remote Fighter!)
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
          const dmg = isHead ? w.damage * w.headMult : w.damage;
          hitEnemy = true;
          if (isHead) critHit = true;
          this.duel.onLocalHitOpponent(dmg, isHead, hit.point);
          continue;
        }

        const enemy = hit.object.userData.enemy;
        if (enemy && enemy.alive) {
          const isHead = hit.object.userData.hitZone === 'head';
          const dmg = isHead ? w.damage * w.headMult : w.damage;
          hitEnemy = true;
          if (isHead) critHit = true;
          if (this.duel && this.duel.isPlaying() && this.duel.role === 'guest') {
            this.duel.onGuestHitAI(enemy.duelIndex, dmg, isHead, hit.point);
          } else {
            this._damageEnemy(enemy, dmg, isHead, hit.point);
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
        }
      }
    }

    if (hitEnemy) {
      this.stats.hits++;
      this._flashHitmarker(critHit);
    }

    // Auto-reload smoothly on empty chamber (especially nice for single-shot bow/crossbow/musket)
    if (w.mag === 0 && w.curReserve > 0) {
      this.startReload();
    }
    this._updateHud();
  }

  _damageEnemy(enemy, dmg, isHeadshot, hitPoint) {
    this.particles.spawnImpact(hitPoint, isHeadshot ? 0xffd24d : 0xd93426, isHeadshot ? 14 : 9, 7);
    const killed = enemy.takeDamage(dmg, isHeadshot);
    this.sound.playHit(isHeadshot);

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

      // Chance to drop a helpful pickup
      if (!enemy.isBoss && Math.random() < 0.35) {
        const pType = this.player.hp < this.player.maxHp * 0.65 ? 'health' : 'ammo';
        const pos = enemy.mesh.position.clone();
        pos.y += 0.8;
        const mesh = this._spawnRuntimePickup(pType, pos);
        this.pickups.push({
          type: pType,
          pos,
          mesh,
          label: pType === 'health' ? 'FIELD TONIC (+30 HP)' : 'LOOTED AMMO',
          collected: false
        });
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
    const scaledDamage = amount * (mods.damageTakenMult || 1);
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
      const baseEyebrow = isFinal ? 'ALL EIGHT HORIZONS CONQUERED' : `${meta.act} COMPLETE`;
      this.dom.endEyebrow.textContent = wasPractice ? `${baseEyebrow} • PRACTICE MODE` : baseEyebrow;
      this.dom.endTitle.textContent = isFinal ? 'LEGEND OF EIGHT ERAS' : 'HORIZON CLEARED';
      this.dom.endSummary.textContent = isFinal
        ? 'From Red Gulch and Kyoto Mist through the Alps, Aegean, Fjord, Normandy, and Stalnogorsk to the ridge monastery of Tibet — your legend endures across eight eras!'
        : `${meta.title} is free. Ready your gear for the next horizon!`;
      this.dom.btnNextLevel.classList.remove('hidden');
      this.dom.btnNextLevel.textContent = isFinal ? 'REPLAY FROM ACT I ▶' : `PROCEED TO ACT ${this.levelIndex + 2} ▶`;
    } else {
      this.dom.endEyebrow.textContent = `${meta.act} — FALLEN`;
      this.dom.endTitle.textContent = 'OUTGUNNED';
      this.dom.endSummary.textContent = 'Dust yourself off, steady your aim, and ride back into the fray.';
      this.dom.btnNextLevel.classList.add('hidden');
    }

    this.dom.endStats.innerHTML = `
      <div class="stat-card"><div class="stat-val">${meta.currency}${this.stats.score}</div><div class="stat-lbl">BOUNTY</div></div>
      <div class="stat-card"><div class="stat-val">${this.stats.headshots}</div><div class="stat-lbl">CRIT SHOTS</div></div>
      <div class="stat-card"><div class="stat-val">${acc}%</div><div class="stat-lbl">ACCURACY</div></div>
    `;
  }

  // ---------------- HUD & Feedback ----------------
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
    const alive = this.enemies.filter((e) => e.alive).length + (this.bossSpawnPending ? 1 : 0);

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

    const w = this.weapons[this.currentWeaponIdx];
    if (w) {
      this.dom.weaponName.textContent = w.name;
      this.dom.altHint.textContent = this.reloading ? 'RELOADING...' : w.altHint;
      this.dom.ammoMag.textContent = w.infinite ? '∞' : String(w.mag);
      this.dom.ammoReserve.textContent = w.infinite ? '∞' : String(w.curReserve);

      // Visual Brass Bullets / Quiver Pips
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

    document.querySelectorAll('.w-slot').forEach((el, i) => {
      el.classList.toggle('active', i === this.currentWeaponIdx);
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

  // ---------------- Main Frame Update ----------------
  _updatePlayer(dt) {
    // Smooth FOV transition for Sniper Scope Zoom!
    const w = this.weapons[this.currentWeaponIdx];
    const targetFov = this.scoped && w && w.scopeFov ? w.scopeFov : this.baseFov;
    if (Math.abs(this.camera.fov - targetFov) > 0.1) {
      this.camera.fov += (targetFov - this.camera.fov) * Math.min(1, dt * 14);
      this.camera.updateProjectionMatrix();
    }

    // Horizontal Movement (with Hero movement speed modifier e.g. Calamity Jane +18%)
    const mods = (this.activeHero && this.activeHero.mods) || {};
    const speedMult = mods.moveSpeedMult || 1;
    const moveFwd = (this.keys['KeyW'] || this.keys['ArrowUp'] ? 1 : 0) - (this.keys['KeyS'] || this.keys['ArrowDown'] ? 1 : 0);
    const moveSide = (this.keys['KeyD'] || this.keys['ArrowRight'] ? 1 : 0) - (this.keys['KeyA'] || this.keys['ArrowLeft'] ? 1 : 0);

    const wantsSprint = (this.keys['ShiftLeft'] || this.keys['ShiftRight']) && moveFwd > 0 && !this.scoped && this.player.stamina > 6;
    const speed = (this.scoped ? 4.2 : wantsSprint ? 11.4 : 7.6) * speedMult;

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

    // Sub-stepped horizontal movement so fast runners never skip thin walls or iron bars
    this.collision.moveHorizontal(this.player.pos, wish.x * dt, wish.z * dt, 0.52, this.player.pos.y);

    // Gravity & Jump
    if (this.keys['Space'] && this.player.grounded) {
      this.player.vel.y = 7.4;
      this.player.grounded = false;
    }
    this.player.vel.y -= 20.5 * dt;
    this.player.pos.y += this.player.vel.y * dt;

    // Floor Height & Climbable Steps
    const floorY = this.collision.getFloorHeight(this.player.pos.x, this.player.pos.z, this.player.pos.y);
    if (this.player.pos.y <= floorY) {
      this.player.pos.y = floorY;
      this.player.vel.y = 0;
      this.player.grounded = true;
    }

    // Subtle walk head-bob
    if (moving && this.player.grounded) {
      this.player.bobPhase += dt * (wantsSprint ? 12.5 : 8.5);
    }
    const bobY = moving && this.player.grounded && !this.scoped ? Math.sin(this.player.bobPhase) * 0.055 : 0;

    // Sync Camera Transform (always clear roll left over from title-screen lookAt!)
    this.camera.position.set(this.player.pos.x, this.player.pos.y + 1.68 + bobY, this.player.pos.z);
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

    // Continuous fire while holding LMB on rapid or full-auto weapons (Sten SMG, Soviet PPSh SMG)
    if (this.mouseDownL && this.fireTimer <= 0 && !this.reloading && w && (w.auto || w.autoFire || w.fireRate <= 0.4)) {
      this.tryFire(false);
    }

    // Animate 3D Weapon Viewmodel
    this.recoilOffset *= Math.max(0, 1 - dt * 13);
    if (this.slashAnim > 0) this.slashAnim = Math.max(0, this.slashAnim - dt * 4.5);
    if (this.muzzleLight.intensity > 0) this.muzzleLight.intensity = Math.max(0, this.muzzleLight.intensity - dt * 85);

    const vm = this.weaponMeshes[this.currentWeaponIdx];
    if (vm && vm.visible) {
      const bp = vm.userData.basePos;
      const br = vm.userData.baseRot;
      const swayX = moving ? Math.cos(this.player.bobPhase * 0.5) * 0.014 : 0;
      const swayY = moving ? Math.abs(Math.sin(this.player.bobPhase * 0.5)) * 0.014 : 0;

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

      // Animate spinning shuriken or flickering dynamite/firepot spark
      const spark = vm.getObjectByName('spark');
      if (spark) {
        const s = 0.85 + Math.sin(this.elapsed * 28) * 0.35;
        spark.scale.setScalar(s);
      }
      const spinner = vm.getObjectByName('spinner');
      if (spinner) spinner.rotation.y += dt * 4.5;
    }

    // Pickups collection & floating animation
    for (const pk of this.pickups) {
      if (pk.collected) continue;
      pk.mesh.rotation.y += dt * 2.1;
      pk.mesh.position.y = pk.pos.y + Math.sin(this.elapsed * 3 + pk.pos.x) * 0.16;

      const d = Math.hypot(pk.pos.x - this.player.pos.x, pk.pos.z - this.player.pos.z);
      if (d < 2.1) {
        if (pk.type === 'health' && this.player.hp >= this.player.maxHp) continue;
        pk.collected = true;
        pk.mesh.visible = false;
        this.sound.playPickup();
        if (pk.type === 'health') {
          this.player.hp = Math.min(this.player.maxHp, this.player.hp + 35);
        } else {
          for (const wep of this.weapons) {
            if (!wep.infinite) {
              wep.curReserve = Math.min(wep.reserve * 2, wep.curReserve + Math.ceil(wep.reserve * 0.45));
            }
          }
        }
        this.toast(pk.label);
        this._updateHud();
      }
    }
  }

  _updateProjectiles(dt) {
    // Player Thrown Explosives (Dynamite / Fire-Pots)
    for (let i = this.playerThrowables.length - 1; i >= 0; i--) {
      const th = this.playerThrowables[i];
      th.fuse -= dt;
      th.vel.y -= 17.5 * dt;
      th.mesh.position.addScaledVector(th.vel, dt);
      th.mesh.rotation.x += dt * 9;
      th.mesh.rotation.z += dt * 7;

      const fy = this.collision.getFloorHeight(th.mesh.position.x, th.mesh.position.z, th.mesh.position.y);
      if (th.mesh.position.y <= fy + 0.16) {
        th.mesh.position.y = fy + 0.16;
        th.vel.y *= -0.4;
        th.vel.x *= 0.65;
        th.vel.z *= 0.65;
      }

      if (th.fuse <= 0) {
        this.particles.spawnExplosion(th.mesh.position, th.radius);
        this.sound.playExplosion();
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

    // Enemy Projectiles (visible glowing bullets / shuriken / bolts)
    const playerCenter = new THREE.Vector3(this.player.pos.x, this.player.pos.y + 1.2, this.player.pos.z);
    for (let i = this.enemyProjectiles.length - 1; i >= 0; i--) {
      const pr = this.enemyProjectiles[i];
      pr.life -= dt;
      const step = pr.vel.clone().multiplyScalar(dt);
      const stepLen = step.length();
      const dir = step.clone().normalize();

      // Wall impact check
      const wall = this.collision.raycast(pr.mesh.position, dir, stepLen + 0.15);
      if (wall || pr.life <= 0) {
        if (wall) this.particles.spawnImpact(wall.point, 0xffd27a, 4, 4);
        this.worldGroup.remove(pr.mesh);
        this.enemyProjectiles.splice(i, 1);
        continue;
      }

      pr.mesh.position.add(step);
      if (pr.mesh.position.distanceTo(playerCenter) < 0.85) {
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
    const detectMult = mods.stealthMult || 1.0;

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
        onDogBark: () => {
          this.sound.playDogBark();
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
          const spread = en.isBoss ? 0.04 : 0.07;
          dir.x += (Math.random() - 0.5) * spread;
          dir.y += (Math.random() - 0.5) * spread * 0.6;
          dir.z += (Math.random() - 0.5) * spread;
          dir.normalize();

          const mesh = new THREE.Mesh(
            new THREE.SphereGeometry(0.11, 6, 6),
            new THREE.MeshBasicMaterial({ color: en.projectileColor })
          );
          mesh.position.copy(muzzlePos);
          this.worldGroup.add(mesh);
          this.particles.spawnTracer(muzzlePos, muzzlePos.clone().addScaledVector(dir, 3.5), en.projectileColor, 0.08);
          this.enemyProjectiles.push({
            mesh,
            vel: dir.multiplyScalar(en.isBoss ? 38 : 30),
            damage: en.damage,
            life: 2.8
          });
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

      enemy.update(dt, targetPos, this.collision, callbacks, detectMult);
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

  _loop() {
    requestAnimationFrame(() => this._loop());
    const dt = Math.min(0.05, this.clock.getDelta());
    this.elapsed += dt;

    // Always animate sky, water, waterfalls, lanterns, flags & ambient particles!
    for (const fn of this.animatedCallbacks) fn(this.elapsed, dt);
    if (this.particles) this.particles.update(dt, this.elapsed);

    if (this.state === 'playing') {
      if (!(this.duel && this.duel.active && this.duel.myDead)) {
        this._updatePlayer(dt);
      }
      this._updateEnemies(dt);
      this._updateProjectiles(dt);
      if (this.duel && this.duel.isPlaying()) {
        this.duel.update(dt);
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
