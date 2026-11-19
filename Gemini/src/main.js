import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

import { CollisionWorld } from './engine/collision.js';
import { ParticleSystem } from './engine/particles.js';
import { SoundEngine } from './engine/audio.js';
import { ERA_WEAPONS, buildWeaponViewmodel } from './entities/weapons.js';
import { Enemy } from './entities/enemies.js';
import { LEVEL1_META, buildLevel1 } from './levels/level1_west.js';
import { LEVEL2_META, buildLevel2 } from './levels/level2_japan.js';
import { LEVEL3_META, buildLevel3 } from './levels/level3_swiss.js';

const LEVELS = [
  { meta: LEVEL1_META, builder: buildLevel1 },
  { meta: LEVEL2_META, builder: buildLevel2 },
  { meta: LEVEL3_META, builder: buildLevel3 }
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

    // Support URL params / hash for direct level selection (#west, #japan, #swiss or ?level=0..2&autostart=1)
    const params = new URLSearchParams(window.location.search);
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const mapIdx = { west: 0, japan: 1, swiss: 2 };
    let initialLevel = 0;
    if (hash in mapIdx) initialLevel = mapIdx[hash];
    else if (params.has('level')) {
      const lv = params.get('level').toLowerCase();
      initialLevel = lv in mapIdx ? mapIdx[lv] : Math.max(0, Math.min(2, parseInt(lv, 10) || 0));
    }

    this.loadLevel(initialLevel, true);
    document.querySelectorAll('.level-card').forEach((c, i) => c.classList.toggle('active', i === initialLevel));
    if (params.get('autostart') === '1') {
      this.startMission();
      // Hide transient callout banner cleanly when autostarting for clean framing
      this.dom.callout.classList.add('hidden');
    }
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
      comicArsenal: document.getElementById('comic-arsenal'),

      pauseLevelName: document.getElementById('pause-level-name'),
      btnToggleAudio: document.getElementById('btn-toggle-audio'),
      endEyebrow: document.getElementById('end-eyebrow'),
      endTitle: document.getElementById('end-title'),
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

    // Start Mission from Intro Card -> Pointer Lock & Play!
    document.getElementById('btn-start-mission').addEventListener('click', () => {
      this.startMission();
    });

    // Pause / End screen controls
    document.getElementById('btn-resume').addEventListener('click', () => this.resumeGame());
    document.getElementById('btn-restart').addEventListener('click', () => this.restartLevel());
    document.getElementById('btn-main-menu').addEventListener('click', () => this.returnToTitle());
    document.getElementById('btn-end-restart').addEventListener('click', () => this.restartLevel());
    document.getElementById('btn-end-menu').addEventListener('click', () => this.returnToTitle());
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
      this.keys[e.code] = true;
      if (e.code === 'KeyM') {
        const m = this.sound.toggleMute();
        this.dom.btnToggleAudio.textContent = m ? 'SOUND: OFF' : 'SOUND: ON';
        this.toast(m ? 'AUDIO MUTED' : 'AUDIO ENABLED');
      }
      if (this.state !== 'playing') return;

      if (e.code === 'Digit1') this.switchWeapon(0);
      if (e.code === 'Digit2') this.switchWeapon(1);
      if (e.code === 'Digit3') this.switchWeapon(2);
      if (e.code === 'Digit4') this.switchWeapon(3);
      if (e.code === 'KeyR') this.startReload();
      if (e.code === 'KeyP') this.pauseGame();
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

  loadLevel(index, isPreviewOnly = false) {
    this._clearWorld();
    this.levelIndex = index;
    const { meta, builder } = LEVELS[index];

    // Apply era UI theme
    document.body.className = meta.themeClass;

    // Fresh collision & particle systems inside worldGroup
    this.collision = new CollisionWorld();
    this.particles = new ParticleSystem(this.worldGroup);

    const built = builder(this.worldGroup, this.collision, this.particles);
    this.animatedCallbacks = built.animated || [];
    this.pickups = built.pickups || [];
    this.tellApple = built.tellApple || null;

    // Setup Player & Difficulty
    const diff = DIFFICULTY[this.difficultyKey];
    this.player.pos.copy(meta.spawnPos);
    this.player.vel.set(0, 0, 0);
    this.player.yaw = meta.spawnYaw;
    this.player.pitch = 0;
    this.player.maxHp = diff.playerHp;
    this.player.hp = diff.playerHp;
    this.player.stamina = 100;
    this.player.grounded = true;

    this.stats = { score: 0, shots: 0, hits: 0, headshots: 0, kills: 0 };

    // Spawn Enemies (hold Boss in reserve until squad is thinned or player pushes north)
    for (const sp of built.enemySpawns) {
      if (sp.isBossWave) {
        this.bossSpawnPending = sp;
      } else {
        const enemy = new Enemy(sp.type, sp.pos, diff.enemyMult);
        this.worldGroup.add(enemy.mesh);
        this.enemies.push(enemy);
      }
    }

    // Build Era Weapons
    const templates = ERA_WEAPONS[meta.id];
    this.weapons = templates.map((w) => ({
      ...w,
      mag: w.magSize,
      curReserve: w.reserve
    }));
    this.weaponMeshes = this.weapons.map((w) => {
      const m = buildWeaponViewmodel(w.id);
      m.visible = false;
      this.weaponHolder.add(m);
      return m;
    });
    this.currentWeaponIdx = 0;
    this.reloading = false;
    this.fireTimer = 0;

    if (!isPreviewOnly) {
      this.weaponMeshes[0].visible = true;
    }

    this._buildWeaponStripUI();
    this._updateHud();
    this.dom.bossBarWrap.classList.add('hidden');
  }

  showIntroCard() {
    this.state = 'intro';
    const meta = LEVELS[this.levelIndex].meta;
    this.dom.titleScreen.classList.add('hidden');
    this.dom.endScreen.classList.add('hidden');
    this.dom.pauseScreen.classList.add('hidden');
    this.dom.introCard.classList.remove('hidden');

    this.dom.comicAct.textContent = `${meta.act} — ${meta.subtitle}`;
    this.dom.comicTitle.textContent = meta.title;
    this.dom.comicQuote.textContent = meta.quote;
    this.dom.comicArsenal.innerHTML = meta.arsenalSummary
      .map(([name, desc]) => `<div class="arsenal-pill"><b>${name}</b>${desc}</div>`)
      .join('');

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

  startMission() {
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
    this.showCallout(`${meta.title} — DRAW!`);
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
    this.dom.hud.classList.add('hidden');
    this.dom.crosshair.classList.add('hidden');
    this.dom.pauseScreen.classList.add('hidden');
    this.dom.endScreen.classList.add('hidden');
    this.dom.introCard.classList.add('hidden');
    this.dom.titleScreen.classList.remove('hidden');
    if (document.pointerLockElement) document.exitPointerLock();
    this.sound.stopMusic();
    this.loadLevel(this.levelIndex, true);
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
    const w = this.weapons[this.currentWeaponIdx];
    if (!w) return;

    if (!w.infinite && w.mag <= 0) {
      if (w.curReserve > 0) this.startReload();
      else this.toast('OUT OF AMMO!');
      return;
    }

    // Melee Weapon (Katana / Swiss Halberd)
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

      const dmg = heavy ? w.damage * 1.65 : w.damage;
      const range = heavy ? w.range + 1.0 : w.range;
      let hitAny = false;
      for (const enemy of this.enemies) {
        if (!enemy.alive) continue;
        const toE = new THREE.Vector3(
          enemy.mesh.position.x - origin.x,
          (enemy.mesh.position.y + 1.1) - origin.y,
          enemy.mesh.position.z - origin.z
        );
        const dist = toE.length();
        if (dist <= range) {
          toE.normalize();
          if (toE.dot(forward) > 0.35) {
            hitAny = true;
            this._damageEnemy(enemy, dmg, heavy, enemy.mesh.position.clone().add(new THREE.Vector3(0, 1.3, 0)));
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

      this.playerThrowables.push({
        mesh,
        vel: dir.multiplyScalar(22).add(new THREE.Vector3(0, 6.2, 0)),
        fuse: 1.65,
        damage: w.damage,
        radius: w.blastRadius
      });

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

    // Muzzle flash & audio
    this.sound.playShot(w.sound);
    if (w.sound === 'revolver' || w.sound === 'shotgun' || w.sound === 'rifle' || w.sound === 'musket') {
      this.muzzleLight.intensity = 10;
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

    // Collect shootable meshes
    const enemyMeshes = [];
    for (const e of this.enemies) {
      if (e.alive) enemyMeshes.push(...e.getHitMeshes());
    }
    if (this.tellApple && this.tellApple.visible) {
      enemyMeshes.push(this.tellApple);
    }

    let hitEnemy = false;
    let critHit = false;

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

        if (hit.object.userData.isTellApple) {
          this.tellApple.visible = false;
          this.particles.spawnImpact(hit.point, 0xffd24d, 22, 9);
          this.sound.playHit(true);
          this.stats.score += 500;
          this.showCallout('APPLE SPLIT! +500');
          this._flashHitmarker(true);
          continue;
        }

        const enemy = hit.object.userData.enemy;
        if (enemy && enemy.alive) {
          const isHead = hit.object.userData.hitZone === 'head';
          const dmg = isHead ? w.damage * w.headMult : w.damage;
          hitEnemy = true;
          if (isHead) critHit = true;
          this._damageEnemy(enemy, dmg, isHead, hit.point);
        }
      } else {
        const endPt = wallHit ? wallHit.point : origin.clone().addScaledVector(dir, 90);
        this.particles.spawnTracer(muzzleStart, endPt, w.tracerColor);
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

  _damagePlayer(amount) {
    if (this.state !== 'playing') return;
    this.player.hp = Math.max(0, this.player.hp - amount);
    this.sound.playHurt();

    this.dom.damageOverlay.style.opacity = '0.9';
    setTimeout(() => {
      const lowRatio = this.player.hp < 30 ? 0.35 : 0;
      this.dom.damageOverlay.style.opacity = String(lowRatio);
    }, 150);

    this._updateHud();
    if (this.player.hp <= 0) {
      this._showEndScreen(false);
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

    if (victory) {
      const isFinal = this.levelIndex === LEVELS.length - 1;
      this.dom.endEyebrow.textContent = isFinal ? 'ALL THREE HORIZONS CONQUERED' : `${meta.act} COMPLETE`;
      this.dom.endTitle.textContent = isFinal ? 'LEGEND OF THREE ERAS' : 'HORIZON CLEARED';
      this.dom.endSummary.textContent = isFinal
        ? 'From the dusty streets of Red Gulch to the cherry blossoms of Kyoto and the snow-capped peaks of Rütli Valley — your legend echoes across history!'
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
    this.dom.heroName.textContent = meta.heroName;
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

    // Horizontal Movement
    const moveFwd = (this.keys['KeyW'] || this.keys['ArrowUp'] ? 1 : 0) - (this.keys['KeyS'] || this.keys['ArrowDown'] ? 1 : 0);
    const moveSide = (this.keys['KeyD'] || this.keys['ArrowRight'] ? 1 : 0) - (this.keys['KeyA'] || this.keys['ArrowLeft'] ? 1 : 0);

    const wantsSprint = (this.keys['ShiftLeft'] || this.keys['ShiftRight']) && moveFwd > 0 && !this.scoped && this.player.stamina > 6;
    const speed = this.scoped ? 4.2 : wantsSprint ? 11.4 : 7.6;

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

    this.player.pos.x += wish.x * dt;
    this.player.pos.z += wish.z * dt;

    // Gravity & Jump
    if (this.keys['Space'] && this.player.grounded) {
      this.player.vel.y = 7.4;
      this.player.grounded = false;
    }
    this.player.vel.y -= 20.5 * dt;
    this.player.pos.y += this.player.vel.y * dt;

    // Collisions & Floor Height
    this.collision.resolveHorizontal(this.player.pos, 0.55, this.player.pos.y);
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

    // Continuous fire while holding LMB on rapid weapons
    if (this.mouseDownL && this.fireTimer <= 0 && !this.reloading && w && w.fireRate <= 0.4) {
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
        for (const enemy of this.enemies) {
          if (!enemy.alive) continue;
          const dist = enemy.mesh.position.distanceTo(th.mesh.position);
          if (dist < th.radius) {
            const falloff = 1 - (dist / th.radius) * 0.55;
            this._damageEnemy(enemy, th.damage * falloff, false, enemy.mesh.position.clone().add(new THREE.Vector3(0, 1.2, 0)));
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

  _updateEnemies(dt) {
    const callbacks = {
      onMeleeHitPlayer: (dmg) => {
        this._damagePlayer(dmg);
      },
      onEnemyFire: (enemy, muzzlePos, targetPos) => {
        const dir = new THREE.Vector3().subVectors(targetPos, muzzlePos).normalize();
        // Fair slight inaccuracy so dodging feels awesome
        const spread = enemy.isBoss ? 0.04 : 0.07;
        dir.x += (Math.random() - 0.5) * spread;
        dir.y += (Math.random() - 0.5) * spread * 0.6;
        dir.z += (Math.random() - 0.5) * spread;
        dir.normalize();

        const mesh = new THREE.Mesh(
          new THREE.SphereGeometry(0.11, 6, 6),
          new THREE.MeshBasicMaterial({ color: enemy.projectileColor })
        );
        mesh.position.copy(muzzlePos);
        this.worldGroup.add(mesh);

        this.particles.spawnTracer(muzzlePos, muzzlePos.clone().addScaledVector(dir, 3.5), enemy.projectileColor, 0.08);
        this.enemyProjectiles.push({
          mesh,
          vel: dir.multiplyScalar(enemy.isBoss ? 38 : 30),
          damage: enemy.damage,
          life: 2.8
        });
      }
    };

    for (const enemy of this.enemies) {
      enemy.update(dt, this.player.pos, this.collision, callbacks);
    }

    // Also wake boss if player charges deep into the northern stronghold!
    if (this.bossSpawnPending && this.player.pos.z < -12) {
      this._checkStageProgression();
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
      this._updatePlayer(dt);
      this._updateEnemies(dt);
      this._updateProjectiles(dt);
    } else if (this.state === 'title' || this.state === 'intro') {
      // Sweeping cinematic live camera flyover of the selected 3D world!
      const preview = LEVELS[this.levelIndex].meta.cameraPreview;
      const ang = this.elapsed * preview.speed;
      this.camera.position.set(
        preview.center.x + Math.sin(ang) * preview.radius,
        preview.height + Math.sin(this.elapsed * 0.45) * 1.8,
        preview.center.z + Math.cos(ang) * preview.radius
      );
      this.camera.lookAt(preview.center);
      this.weaponHolder.visible = false;
    }

    this.composer.render();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new OutlawsGame();
});
