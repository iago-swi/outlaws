// Game shell: loads levels, runs the main loop, owns the rules (damage,
// winning, dying) and drives the HUD and menu screens.
import '@fontsource/rye';
import '@fontsource/pirata-one';
import '@fontsource/im-fell-english';
import '@fontsource/im-fell-english/400-italic.css';
import '@fontsource/cinzel';
import * as THREE from 'three';
import { Gfx } from './gfx.js';
import { Sound } from './audio.js';
import { makeMaterials } from './tex.js';
import { World, Builder } from './build.js';
import { Player, Input } from './player.js';
import { Enemy, Shots, makeHumanoid, lookFor } from './actors.js';
import { rng, clamp, damp } from './util.js';
import { west } from './levels/west.js';
import { japan } from './levels/japan.js';
import { swiss } from './levels/swiss.js';
import { greece } from './levels/greece.js';
import { north } from './levels/north.js';
import { war } from './levels/war.js';

const LEVELS = [west, japan, swiss, greece, north, war];
const $ = (s) => document.querySelector(s);
const params = new URLSearchParams(location.search);

class Game {
  constructor() {
    this.canvas = $('#view');
    this.gfx = new Gfx(this.canvas);
    this.sound = new Sound();
    this.input = new Input(this.canvas);
    this.input.free = params.has('free'); this.peace = params.has('peace');
    this.M = makeMaterials();
    for (const k in this.M) this.M[k].userData.keep = true;
    this.world = new World();
    this.player = new Player(this);
    this.shots = new Shots(this);
    this.enemies = []; this.pickups = []; this.rand = rng(1); this.heroPick = {}; this.heroIndex = 0; this.practice = false; this.typed = '';
    this.time = 0; this.noise = 0; this.state = 'boot'; this.index = 0; this.timeScale = 1; this.slow = 0;
    this.flashLight = new THREE.PointLight(0xffb060, 0, 16, 2);
    this.gfx.scene.add(this.flashLight);
    this.heroLight = new THREE.PointLight(0xffe8d0, 0, 10, 1.4);   // lights the hero on the selection screen in dark chapters
    this.gfx.scene.add(this.heroLight);
    this.stats = { shots: 0, hits: 0, heads: 0, t: 0 };
    this.ui = {
      hp: $('#vital .num'), hpbar: $('#hpbar i'), pips: $('#pips'), wname: $('#arms .name'), alt: $('#arms .alt'), foes: $('#foes'),
      compass: $('#compass'), boss: $('#boss'), bossName: $('#boss span'), bossBar: $('#boss i'), msg: $('#msg'), hit: $('#hit'),
      dmg: $('#dmg b'), place: $('#place'), cross: [...document.querySelectorAll('#cross i[data-s]')], dots: [],
    };
    this.cache = {}; this.msgT = 0; this.hitT = 0; this.dmgT = 0; this.crossGap = 6;
    this._v = new THREE.Vector3(); this._v2 = new THREE.Vector3(); this._o = { x: 0, y: 0, z: 0 }; this._d = { x: 0, y: 0, z: 0 };
    this.bindUI();
  }

  bindUI() {
    document.querySelectorAll('.card').forEach((c) => c.addEventListener('click', () => { this.sound.init(); this.openLevel(+c.dataset.level); }));
    // hero cards: pointing at one previews that hero in the opening shot, clicking starts the chapter
    const cardOf = (e) => { const c = e.target.closest('.hero'); return c ? +c.dataset.hero : -1; };
    $('#heroes').addEventListener('mouseover', (e) => { const k = cardOf(e); if (k >= 0 && this.state === 'intro' && k !== this.heroIndex) this.applyHero(k); });
    $('#heroes').addEventListener('click', (e) => { const k = cardOf(e); if (k >= 0 && this.state === 'intro') { this.applyHero(k); this.begin(); } });
    $('#pause').addEventListener('click', () => { if (this.state === 'pause') { this.setState('play'); this.input.lock(); } });
    $('#dead').addEventListener('click', () => { if (this.state === 'dead' && this.player.deadT > 1) this.openLevel(this.index, true); });
    $('#clear').addEventListener('click', () => { if (this.state !== 'clear') return; if (this.index + 1 < LEVELS.length) this.openLevel(this.index + 1); else this.toTitle(); });
    this.input.onLock = (locked) => {
      if (locked) { if (this.state === 'pause') this.setState('play'); }
      else if (this.state === 'play' && !this.input.free) this.setState('pause');
    };
    addEventListener('keydown', (e) => {
      if (e.code === 'KeyM') { this.muted = !this.muted; this.sound.setMuted(this.muted); }
      // easter egg: typing PAX ("peace") switches practice mode on and off
      if (e.key && e.key.length === 1) {
        this.typed = (this.typed + e.key.toLowerCase()).slice(-12);
        if (this.typed.endsWith('pax')) {
          this.typed = ''; this.togglePractice();
          if (this.state === 'pause' && this.pausedByP) { this.setState('play'); this.say(this.practice ? 'Practice mode — they cannot hurt you' : 'Practice mode off'); }   // the P of PAX had paused the game
        }
      }
      if (e.code === 'KeyQ' && this.state === 'pause') this.toTitle();
      if (this.state === 'intro') {
        const k = ['Digit1', 'Digit2', 'Digit3', 'Digit4'].indexOf(e.code);  // hero keys
        if (k >= 0 && k < this.def.heroes.length) this.applyHero(k);
        if (e.code === 'Enter') this.begin();
      }
      if ((e.code === 'Escape' || e.code === 'KeyP') && this.state === 'play' && !this.input.locked) { this.pausedByP = e.code === 'KeyP'; this.setState('pause'); }
    });
  }

  /** Practice mode: enemies still fight, but nothing they do can hurt you. */
  togglePractice() {
    this.practice = !this.practice;
    document.body.classList.toggle('practice', this.practice);
    this.sound.init(); this.sound.pickup();
    if (this.practice) this.gfx.damage = 0;
    if (this.state === 'play') this.say(this.practice ? 'Practice mode — they cannot hurt you' : 'Practice mode off');
  }

  show(id) { for (const s of ['title', 'intro', 'pause', 'dead', 'clear']) $('#' + s).classList.toggle('on', s === id); }

  setState(s) {
    this.state = s; this.input.active = s === 'play'; if (s === 'play') this.pausedByP = false;
    document.body.classList.toggle('playing', s === 'play'); if (s !== 'play') document.body.classList.remove('scoped');
    document.body.classList.toggle('cine', s === 'title' || s === 'intro');
    this.show(s === 'play' ? null : s);
    if (this.hero) this.hero.visible = s === 'intro';
  }

  // ---- level lifecycle ------------------------------------------------------
  loadLevel(i) {
    const def = LEVELS[i];
    this.index = i; this.def = def;
    this.gfx.clearLevel(); this.shots.reset(); this.enemies = []; this.pickups = [];
    this.world = new World(); this.rand = rng(4242 + i * 977);
    const B = new Builder(this.world);
    const L = (this.level = def.build({ game: this, gfx: this.gfx, world: this.world, B, M: this.M, root: this.gfx.root, rand: this.rand, shared: this.gfx.shared }));
    B.build(this.gfx.root);
    this.gfx.setEnvironment(L.env);
    for (const [type, x, z, o] of L.enemies) this.enemies.push(new Enemy(this, type, x, z, o));
    for (const p of L.pickups || []) this.addPickup(p[0], p[1], L, p[2]);
    this.player.spawn(L.spawn.x, L.spawn.z, L.spawn.yaw, def.weapon);
    this.hero = null;
    const want = params.has('hero') ? +params.get('hero') - 1 : 0;
    this.applyHero(clamp(this.heroPick[def.id] ?? want, 0, def.heroes.length - 1));
    document.body.classList.remove('theme-west', 'theme-japan', 'theme-swiss', 'theme-greece', 'theme-north', 'theme-war'); document.body.classList.add(def.theme);
    this.stats = { shots: 0, hits: 0, heads: 0, t: 0 };
    this.timeScale = 1; this.slow = 0; this.noise = 0; this.cache = {};
    this.ui.boss.classList.remove('on');
    this.gfx.camera.fov = 72; this.gfx.camera.updateProjectionMatrix();
    this.gfx.fade = 0; this.gfx.fadeTarget = 1; this.gfx.damage = 0;
    this.perfT = 0; this.perfN = 0; this.skipPerf = true;        // ignore the loading hitch when measuring speed
  }

  /** Switch the playable character: figure in the opening shot, hands, and the hero's trait. */
  applyHero(k) {
    const d = this.def, h = d.heroes[k], P = this.player;
    this.heroIndex = k; this.heroPick[d.id] = k;
    if (this.hero) { this.hero.traverse((o) => { if (o.geometry) o.geometry.dispose(); }); this.hero.removeFromParent(); }
    const rig = makeHumanoid(this.M, lookFor(h.look, this.rand)), look = lookFor(h.look, this.rand);
    rig.group.position.copy(P.pos); rig.group.rotation.y = this.level.spawn.yaw + Math.PI;
    const up = look.weapon === 'halberd' || look.weapon === 'katana';        // carry long weapons upright
    rig.armR.rotation.x = up ? -1.2 : look.weapon === 'bow' ? -0.9 : -0.35; rig.armR.rotation.z = up ? 0.14 : -0.1;
    rig.armL.rotation.x = 0.1; rig.armL.rotation.z = 0.12;
    this.gfx.root.add(rig.group); this.hero = rig.group; this.hero.visible = this.state === 'intro';
    P.mods = { hp: 100, armor: 1, speed: 1, fire: 1, reload: 1, draw: 1, melee: 1, reach: 0, regen: 0, power: 1, meleeDmg: 1, gun: 1, stealth: 1, ...h.mods };
    P.maxHp = P.mods.hp; P.hp = P.maxHp;
    P.setWeapon(h.weapon ?? d.weapon, h.sleeve, h.cuff);
    this.ui.wname.textContent = h.weaponName ?? d.weaponName; this.ui.alt.textContent = h.alt ?? d.alt;
    this.ui.place.textContent = h.name + ' · ' + d.place; this.cache = {};
    document.querySelectorAll('#heroes .hero').forEach((c) => c.classList.toggle('sel', +c.dataset.hero === k));
  }

  openLevel(i, direct = false) {
    this.gfx.fadeTarget = 0; this.show(null);
    setTimeout(() => {
      this.loadLevel(i);
      const d = this.def;
      this.fillIntro();
      this.cineT = 0;
      this.sound.startAmbient(d.id); this.sound.startMusic(d.id);
      if (direct) this.begin(); else this.setState('intro');
    }, 380);
  }

  fillIntro() {
    const d = this.def;
    $('#intro .chap').textContent = d.chapter;
    $('#intro h2').innerHTML = (d.kanji ? `<span class="kanji">${d.kanji}</span>` : '') + d.title;
    $('#intro .story').textContent = d.story;
    $('#intro .keys').innerHTML = d.keys;
    $('#heroes').innerHTML = d.heroes.map((h, i) => `<div class="hero${i === this.heroIndex ? ' sel' : ''}" data-hero="${i}"><span class="hk">${i + 1}</span>`
      + `<div class="hn">${h.name}</div><div class="hw">${h.who}</div><div class="ht"><b>${h.trait}</b> — ${h.effect}</div></div>`).join('');
  }

  begin() {
    if (this.state !== 'intro' && this.state !== 'dead') return;
    this.sound.init();
    this.setState('play');
    if (!this.input.free) this.input.lock();
  }

  toTitle() {
    if (document.pointerLockElement) document.exitPointerLock();
    this.gfx.fadeTarget = 0; this.show(null);
    setTimeout(() => { this.loadLevel(0); this.cineT = 0; this.sound.stopMusic(); this.sound.startAmbient('west'); this.setState('title'); }, 380);
  }

  addPickup(x, z, L, hint = 2) {
    const y = this.world.groundAt(x, z, hint);
    const mesh = L.makePickup ? L.makePickup() : new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 0.3, 8), new THREE.MeshStandardMaterial({ color: 0xb8742a }));
    mesh.position.set(x, y + 0.5, z); mesh.castShadow = true;
    this.gfx.root.add(mesh);
    this.pickups.push({ mesh, x, y, z, t: this.rand() * 6 });
  }

  // ---- combat ---------------------------------------------------------------
  playerHitscan(muzzleObj, spread, dmg) {
    const P = this.player, o = this.gfx.camera.getWorldPosition(this._v), d = P.forward(this._v2);
    d.x += (Math.random() - 0.5) * 2 * spread; d.y += (Math.random() - 0.5) * 2 * spread; d.z += (Math.random() - 0.5) * 2 * spread; d.normalize();
    this.noise = 0.6; this.stats.shots++; this.crossGap = 16;
    const wh = this.world.raycast(o, d, 260);
    let t = wh ? wh.t : 260, target = null, head = false;
    for (const e of this.enemies) { const h = e.rayHit(o, d, t); if (h) { t = h.t; target = e; head = h.head; } }
    const hx = o.x + d.x * t, hy = o.y + d.y * t, hz = o.z + d.z * t;
    const m = muzzleObj.getWorldPosition(new THREE.Vector3());
    this.shots.tracer(m.x, m.y, m.z, hx, hy, hz);
    this.muzzle(m.x + d.x * 0.25, m.y + d.y * 0.25, m.z + d.z * 0.25, d.x, d.y, d.z, 1);
    if (target) this.hitEnemy(target, dmg, head, hx, hy, hz, o.x, o.z);
    else if (wh) this.impact(hx, hy, hz, wh.nx, wh.ny, wh.nz, 'bullet');
  }

  playerShoot(kind, speed, dmg, grav) {
    const P = this.player, o = this.gfx.camera.getWorldPosition(this._v), d = P.forward(this._v2);
    const rx = Math.cos(P.yaw), rz = -Math.sin(P.yaw);
    this.stats.shots++; this.crossGap = 14;
    this.shots.spawn(kind, o.x + d.x * 0.5 + rx * 0.04, o.y + d.y * 0.5 - 0.07, o.z + d.z * 0.5 + rz * 0.04, d.x, d.y + 0.012, d.z, speed, true, dmg, grav);
  }

  playerMelee(range, cone, dmg) {
    const P = this.player, f = P.forward(this._v2);
    let any = false;
    for (const e of this.enemies) {
      if (!e.alive || e.state === 'hidden') continue;
      const dx = e.pos.x - P.pos.x, dy = e.pos.y + 1.1 - (P.pos.y + 1.5), dz = e.pos.z - P.pos.z, dist = Math.hypot(dx, dy, dz);
      if (dist > range || (dx * f.x + dy * f.y + dz * f.z) / dist < cone) continue;
      this.hitEnemy(e, dmg, false, e.pos.x - dx / dist * 0.3, e.pos.y + 1.2, e.pos.z - dz / dist * 0.3, P.pos.x, P.pos.z);
      any = true;
    }
    if (any) { this.stats.shots++; P.recoil(0.3); }
    else {
      const o = this.gfx.camera.getWorldPosition(this._v), wh = this.world.raycast(o, f, range * 0.75);
      if (wh) { this.sound.clank(); this.impact(o.x + f.x * wh.t, o.y + f.y * wh.t, o.z + f.z * wh.t, wh.nx, wh.ny, wh.nz, 'bullet'); }
    }
  }

  hitEnemy(e, dmg, head, x, y, z, fromX, fromZ) {
    const wasBoss = e.cfg.boss, killed = e.damage(dmg, head, fromX, fromZ);
    this.stats.hits++; if (head) this.stats.heads++;
    const S = this.gfx.soft;
    for (let i = 0; i < 9; i++) S.spawn(x, y, z, (Math.random() - 0.5) * 2.4, Math.random() * 2, (Math.random() - 0.5) * 2.4, { life: 0.5 + Math.random() * 0.3, s0: 0.05, s1: 0.16, r: 0.32, g: 0.02, b: 0.02, a: 0.85, grav: 6, drag: 1 });
    this.ui.hit.classList.toggle('kill', killed); this.hitT = killed ? 0.4 : 0.18;
    this.sound.thud();
    if (killed) {
      this.sound.killmark();
      if (head) this.say('Headshot');
      if (wasBoss) this.say(this.def.bossDown);
      const left = this.enemies.filter((q) => q.alive).length;
      if (left === 0) { this.slow = 1.6; this.timeScale = 0.25; }
      else if (left <= 3) for (const q of this.enemies) if (q.state === 'idle' && !q.static) q.alert(0.5);
    } else this.sound.hitmark();
  }

  impact(x, y, z, nx, ny, nz, kind) {
    const c = this.level.dust || [0.6, 0.5, 0.4], S = this.gfx.soft, Gl = this.gfx.glow;
    for (let i = 0; i < 7; i++) S.spawn(x, y, z, nx * (1 + Math.random() * 2) + (Math.random() - 0.5) * 1.6, ny * (1 + Math.random() * 2) + Math.random() * 1.2, nz * (1 + Math.random() * 2) + (Math.random() - 0.5) * 1.6,
      { life: 0.7 + Math.random() * 0.6, s0: 0.08, s1: 0.5 + Math.random() * 0.4, r: c[0], g: c[1], b: c[2], a: 0.55, grav: 0.6, drag: 2.2 });
    if (kind === 'bullet') for (let i = 0; i < 5; i++) Gl.spawn(x, y, z, nx * 3 + (Math.random() - 0.5) * 5, ny * 3 + Math.random() * 3, nz * 3 + (Math.random() - 0.5) * 5, { life: 0.25 + Math.random() * 0.2, s0: 0.035, s1: 0.01, r: 3, g: 1.6, b: 0.5, a: 1, grav: 9 });
    const P = this.player.pos;
    if ((x - P.x) ** 2 + (z - P.z) ** 2 < 900) this.sound.tick();
  }

  muzzle(x, y, z, dx, dy, dz, scale) {
    const Gl = this.gfx.glow, S = this.gfx.soft;
    for (let i = 0; i < 6; i++) Gl.spawn(x, y, z, dx * (6 + Math.random() * 10) + (Math.random() - 0.5) * 3, dy * 8 + (Math.random() - 0.5) * 3, dz * (6 + Math.random() * 10) + (Math.random() - 0.5) * 3,
      { life: 0.06 + Math.random() * 0.07, s0: 0.12 * scale, s1: 0.02, r: 4, g: 2.2, b: 0.7, a: 1 });
    for (let i = 0; i < 5; i++) S.spawn(x, y, z, dx * (1 + Math.random() * 2.5) + (Math.random() - 0.5) * 0.5, dy * 2 + 0.3 + Math.random() * 0.5, dz * (1 + Math.random() * 2.5) + (Math.random() - 0.5) * 0.5,
      { life: 1 + Math.random() * 0.8, s0: 0.1 * scale, s1: 0.75 * scale, r: 0.75, g: 0.72, b: 0.68, a: 0.3, grav: -0.25, drag: 2.4 });
    this.flashLight.position.set(x, y, z); this.flashLight.intensity = 45 * scale;
  }

  poof(x, y, z) {
    const S = this.gfx.soft;
    for (let i = 0; i < 26; i++) S.spawn(x + (Math.random() - 0.5) * 0.6, y + (Math.random() - 0.5) * 1.4, z + (Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 3, Math.random() * 1.5, (Math.random() - 0.5) * 3,
      { life: 0.9 + Math.random() * 0.7, s0: 0.3, s1: 1.4, r: 0.12, g: 0.12, b: 0.15, a: 0.75, grav: -0.3, drag: 2.5 });
    this.sound.poof();
  }

  hurtPlayer(dmg, from, melee) {
    const P = this.player;
    if (P.dead || this.state !== 'play' || this.practice) return;
    dmg *= P.mods.armor; P.hp -= dmg; P.hurtT = 0; this.gfx.damage = Math.min(1.1, this.gfx.damage + 0.45 + dmg / 45);
    P.recoil((Math.random() - 0.3) * (melee ? 1.6 : 0.8));
    const dx = from.x - P.pos.x, dz = from.z - P.pos.z;
    const rel = Math.atan2(Math.cos(P.yaw) * dx - Math.sin(P.yaw) * dz, -Math.sin(P.yaw) * dx - Math.cos(P.yaw) * dz);
    this.ui.dmg.style.transform = `rotate(${rel}rad)`; this.ui.dmg.style.transformOrigin = '70px 190px'; this.dmgT = 0.9;
    this.sound.hurt();
    if (P.hp <= 0) {
      P.hp = 0; P.dead = true; P.deadT = 0; this.state = 'dead'; this.input.active = false;
      document.body.classList.remove('playing');
      this.sound.stopMusic(); this.sound.sting();
      $('#dead .big').textContent = this.def.deadTitle; $('#dead .sub').textContent = this.def.deadSub;
      if (document.pointerLockElement) document.exitPointerLock();
      setTimeout(() => { if (this.state === 'dead') this.show('dead'); }, 1300);
    }
  }

  say(text) { this.ui.msg.textContent = text; this.ui.msg.classList.add('on'); this.msgT = 1.6; }

  levelCleared() {
    const s = this.stats, d = this.def, last = this.index + 1 >= LEVELS.length;
    this.setState('clear');
    if (document.pointerLockElement) document.exitPointerLock();
    this.sound.stopMusic(); this.sound.fanfare(d.id);
    $('#clear .kicker').textContent = (last ? 'The last chapter is written' : d.chapter + ' complete') + (this.practice ? ' · practice mode' : '');
    $('#clear .big').textContent = d.clearTitle;
    const acc = s.shots ? Math.min(100, Math.round((s.hits / s.shots) * 100)) : 0, mm = Math.floor(s.t / 60), ss = String(Math.floor(s.t % 60)).padStart(2, '0');
    $('#clear .stats').innerHTML = `<div><b>${mm}:${ss}</b>Time</div><div><b>${acc}%</b>Accuracy</div><div><b>${s.heads}</b>Headshots</div><div><b>${Math.round(this.player.hp)}</b>Health</div>`;
    $('#clear .go').textContent = last ? 'Click to return to the chapters' : 'Click for the next chapter';
  }

  // ---- per-frame ------------------------------------------------------------
  orbit(cx, cy, cz, r, h, a, lookUp = 0) {
    const cam = this.gfx.camera;
    this._o.x = cx; this._o.y = cy; this._o.z = cz;
    let dx = Math.cos(a) * r, dy = h, dz = Math.sin(a) * r;
    const len = Math.hypot(dx, dy, dz);
    this._d.x = dx / len; this._d.y = dy / len; this._d.z = dz / len;
    const hit = this.world.raycast(this._o, this._d, len + 0.4);
    const k = hit ? Math.max(0.25, (hit.t - 0.35) / len) : 1;
    cam.position.set(cx + dx * k, cy + dy * k, cz + dz * k);
    cam.rotation.set(0, 0, 0);
    cam.lookAt(cx, cy + lookUp, cz);
  }

  updatePlay(dt) {
    const P = this.player;
    this.noise = Math.max(0, this.noise - dt);
    this.stats.t += dt;
    P.update(dt, this.input, this.state === 'play');
    for (const e of this.enemies) e.update(dt);
    this.shots.update(dt);
    for (let i = this.pickups.length - 1; i >= 0; i--) {
      const p = this.pickups[i]; p.t += dt;
      p.mesh.rotation.y = p.t * 1.2; p.mesh.position.y = p.y + 0.55 + Math.sin(p.t * 2.2) * 0.08;
      if (Math.random() < dt * 5) this.gfx.glow.spawn(p.x + (Math.random() - 0.5) * 0.5, p.y + 0.3, p.z + (Math.random() - 0.5) * 0.5, 0, 0.6 + Math.random() * 0.5, 0, { life: 1.2, s0: 0.05, s1: 0.0, r: 1.2, g: 2.2, b: 0.9, a: 0.9 });
      if (!P.dead && P.hp < P.maxHp && (p.x - P.pos.x) ** 2 + (p.z - P.pos.z) ** 2 < 1.7 && Math.abs(p.y - P.pos.y) < 2) {
        P.hp = Math.min(P.maxHp, P.hp + 35); this.gfx.heal = 1; this.sound.pickup(); this.say(this.def.pickupText);
        p.mesh.removeFromParent(); this.pickups.splice(i, 1);
      }
    }
    if (this.slow > 0) {
      this.slow -= dt / this.timeScale;
      if (this.slow <= 0) { this.timeScale = 1; if (this.state === 'play') this.levelCleared(); }
    }
  }

  updateHud(dt) {
    const P = this.player, u = this.ui, c = this.cache;
    const hp = Math.ceil(P.hp);
    if (c.hp !== hp) { c.hp = hp; u.hp.textContent = hp; u.hpbar.style.width = Math.min(100, (hp / P.maxHp) * 100) + '%'; }
    const h = P.weapon.hud(), key = h.ammo + '/' + h.mag + h.reloading;
    if (c.ammo !== key) {
      c.ammo = key; u.pips.className = h.mag === 1 ? 'long' : h.mag > 10 ? 'many' : '';
      u.pips.innerHTML = Array.from({ length: h.mag }, (_, i) => `<i class="${i < h.ammo ? '' : 'off'}"></i>`).join('');
    }
    const alive = this.enemies.filter((e) => e.alive);
    if (c.foes !== alive.length) { c.foes = alive.length; u.foes.innerHTML = alive.length ? `<b>${alive.length}</b>${this.def.foes}` : this.def.foesNone; }
    // compass
    const fx = -Math.sin(P.yaw), fz = -Math.cos(P.yaw), rx = Math.cos(P.yaw), rz = -Math.sin(P.yaw);
    while (u.dots.length < alive.length) { const d = document.createElement('i'); u.compass.appendChild(d); u.dots.push(d); }
    let boss = null;
    u.dots.forEach((d, i) => {
      const e = alive[i];
      if (!e) { d.style.display = 'none'; return; }
      const dx = e.pos.x - P.pos.x, dz = e.pos.z - P.pos.z;
      const rel = Math.atan2(rx * dx + rz * dz, fx * dx + fz * dz);
      d.style.display = 'block'; d.style.left = 50 + clamp(rel / 1.9, -1, 1) * 50 + '%';
      d.style.opacity = Math.abs(rel) > 1.9 ? 0.35 : clamp(1.15 - Math.hypot(dx, dz) / 140, 0.45, 1);
      d.className = e.cfg.boss ? 'boss' : '';
      if (e.cfg.boss && e.state === 'combat') boss = e;
    });
    u.boss.classList.toggle('on', !!boss);
    if (boss) { u.bossName.textContent = this.def.bossName; u.bossBar.style.width = Math.max(0, boss.hp / boss.cfg.hp) * 100 + '%'; }
    // crosshair
    const spd = Math.hypot(P.vel.x, P.vel.z);
    this.crossGap = damp(this.crossGap, 5 + spd * 0.9 - P.aim * 4, 12, dt);
    const g = this.crossGap;
    for (const el of u.cross) {
      const s = el.dataset.s;
      if (s === 'l') el.style.left = -(g + 9) + 'px'; else if (s === 'r') el.style.left = g + 'px';
      else if (s === 'u') el.style.top = -(g + 9) + 'px'; else el.style.top = g + 'px';
    }
    document.body.classList.toggle('scoped', !!P.weapon.scope && P.aim > 0.8 && !P.dead);
    this.hitT = Math.max(0, this.hitT - dt); u.hit.style.opacity = Math.min(1, this.hitT * 8);
    this.dmgT = Math.max(0, this.dmgT - dt); u.dmg.style.opacity = Math.min(1, this.dmgT * 2);
    if (this.msgT > 0) { this.msgT -= dt; if (this.msgT <= 0) u.msg.classList.remove('on'); }
  }

  frame(now) {
    requestAnimationFrame((t) => this.frame(t));
    const raw = (now - (this.last || now)) / 1000, real = Math.min(0.05, raw); this.last = now;
    if (raw < 0.5) { this.perfT = (this.perfT || 0) + raw; this.perfN = (this.perfN || 0) + 1; }
    if (this.perfN >= 80) {
      const avg = this.perfT / this.perfN; this.perfT = 0; this.perfN = 0;
      if (avg > 0.034 && this.gfx.pixelRatio > 0.75 && !this.skipPerf) { this.gfx.pixelRatio = Math.max(0.75, this.gfx.pixelRatio - 0.25); this.gfx.resize(); }
      this.skipPerf = false;
    }
    const dt = real * this.timeScale, L = this.level, P = this.player;
    this.time += dt;
    this.flashLight.intensity = Math.max(0, this.flashLight.intensity - real * 700);
    if (this.state === 'title' || this.state === 'intro') {
      this.cineT += real;
      P.vm.visible = false;
      if (this.state === 'title') {
        const v = L.vista, a = v.swing ? v.a + Math.sin(this.cineT * (v.speed ?? 0.05)) * v.swing : v.a + this.cineT * (v.speed ?? 0.03);
        this.orbit(v.c[0], v.c[1], v.c[2], v.r, v.h, a, v.up ?? 0);
      }
      else {
        const a = -P.yaw - Math.PI / 2 + 0.55 - this.cineT * 0.11;   // start in front of the hero, drift around
        this.orbit(P.pos.x, P.pos.y + 1.25, P.pos.z, 3.6 + Math.sin(this.cineT * 0.2) * 0.5, 0.55, a, 0.15);
        this.gfx.camera.rotateY(0.52);                                 // keep the hero right of the text
        this.heroLight.position.copy(this.gfx.camera.position).y += 0.6;
      }
    } else if (this.state === 'play' || this.state === 'dead' || this.state === 'clear') this.updatePlay(dt);
    this.heroLight.intensity = this.state === 'intro' ? (L.heroLight || 0) : 0;
    if (L.update) L.update(dt, this.time, this);
    if (L.water && this.sound.ctx) {
      let v = 0;
      for (const w of L.water) v = Math.max(v, 1 - Math.hypot(P.pos.x - w[0], P.pos.z - w[1]) / w[2]);
      this.sound.setWater(Math.max(0, v));
    }
    this.gfx.update(dt, this.time);
    if (this.state === 'play') this.updateHud(real);
    this.gfx.render();
    this.input.endFrame();
  }

  /** Debug: freeze the game and place the camera (used for screenshots). */
  shot(x, y, z, yaw = 0, pitch = 0, fov = 72) {
    this.state = 'shot'; this.show(null); document.body.classList.remove('cine', 'playing');
    const c = this.gfx.camera; c.position.set(x, y, z); c.rotation.set(pitch, yaw, 0); c.fov = fov; c.updateProjectionMatrix();
    this.player.vm.visible = false; if (this.hero) this.hero.visible = true;
  }

  async start() {
    await Promise.all(['48px Rye', '48px "Pirata One"', '48px "IM Fell English"', '48px Cinzel'].map((f) => document.fonts.load(f).catch(() => {})));
    const lv = params.has('level') ? clamp(+params.get('level') - 1, 0, LEVELS.length - 1) : 0;
    this.loadLevel(lv); this.cineT = 0;
    if (params.has('level')) { this.fillIntro(); this.setState('intro'); if (params.has('free')) this.begin(); }
    else this.setState('title');
    $('#load').classList.add('off'); $('#load').classList.remove('on');
    this.frame(performance.now());
  }
}

const game = new Game();
window.game = game;
game.start();
