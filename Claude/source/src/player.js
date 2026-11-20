// The player: keyboard/mouse input, first-person movement, and the weapon
// "viewmodels" (the hands and weapon you see at the bottom of the screen).
import * as THREE from 'three';
import { merge, xf } from './build.js';
import { gBox, gCyl, gSph, gCone, gCap } from './actors.js';
import { clamp, damp, lerp } from './util.js';

export class Input {
  constructor(canvas) {
    this.keys = new Set(); this.mx = 0; this.my = 0; this.fire = false; this.alt = false; this.locked = false;
    this.active = false;                 // true while the game is being played (set by the game)
    this.fireAt = -1e9; this.altAt = -1e9; // time of the last press: a quick tap is remembered for a moment
    this.cx = 0.5;                       // cursor position across the window, used when the mouse is not captured
    this.pressed = new Set(); this.canvas = canvas; this.free = false;   // free = debug mode without pointer lock
    addEventListener('keydown', (e) => { if (!e.repeat) this.pressed.add(e.code); this.keys.add(e.code); if (this.locked && ['Space', 'ArrowUp', 'ArrowDown', 'Tab'].includes(e.code)) e.preventDefault(); });
    addEventListener('keyup', (e) => this.keys.delete(e.code));
    addEventListener('blur', () => { this.keys.clear(); this.fire = this.alt = false; });
    addEventListener('mousemove', (e) => {
      // works with the mouse captured (pointer lock) and, as a fallback, without it
      if (this.locked || this.active) { this.mx += e.movementX || 0; this.my += e.movementY || 0; }
      this.cx = e.clientX / Math.max(1, innerWidth);
    });
    addEventListener('mousedown', (e) => {
      if (!this.active) return;
      if (e.button === 0) { this.fire = true; this.fireAt = performance.now(); }
      if (e.button === 2) { this.alt = true; this.altAt = performance.now(); }
    });
    addEventListener('mouseup', (e) => { if (e.button === 0) this.fire = false; if (e.button === 2) this.alt = false; });
    addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('pointerlockerror', () => { this.locked = false; });
    document.addEventListener('pointerlockchange', () => { this.locked = document.pointerLockElement === canvas; if (!this.locked) { this.fire = this.alt = false; } this.onLock && this.onLock(this.locked); });
  }
  lock() { const p = this.canvas.requestPointerLock && this.canvas.requestPointerLock(); if (p && p.catch) p.catch(() => {}); }
  /** Fire button: held down, or tapped within the last 200 ms (so short clicks are never lost). */
  get shoot() { return this.fire || performance.now() - this.fireAt < 200; }
  get melee() { return this.alt || performance.now() - this.altAt < 200; }
  endFrame() { this.mx = 0; this.my = 0; this.pressed.clear(); }
}

const SKIN = 0xcf9c76;
/**
 * A closed hand gripping a vertical handle: palm toward the camera (+Z),
 * four fingers wrapped around the far side, thumb along the side.
 */
function fist(p, r = [0, 0, 0], s = 1, side = 1) {
  const parts = [gSph(0.033, SKIN, [0, 0, 0.02], [1, 1.25, 0.9])];
  for (let i = 0; i < 4; i++) parts.push(gCap(0.0105, 0.04, SKIN, [0, 0.032 - i * 0.021, -0.02], [0, 0, Math.PI / 2]));
  parts.push(gCap(0.0115, 0.03, SKIN, [-0.03 * side, 0.03, -0.002], [Math.PI / 2 - 0.2, 0, 0]));
  return xf(merge(parts), p, r, s);
}
const mesh = (list, mat) => { const m = new THREE.Mesh(merge(list), mat); m.receiveShadow = true; return m; };
const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _up = new THREE.Vector3(0, 1, 0);
/** Place a unit-height cylinder so it spans from point a to point b. */
function stretch(m, ax, ay, az, bx, by, bz) {
  _a.set(ax, ay, az); _b.set(bx, by, bz);
  m.position.copy(_a).add(_b).multiplyScalar(0.5);
  const len = _a.distanceTo(_b);
  m.scale.set(1, len, 1);
  m.quaternion.setFromUnitVectors(_up, _b.sub(_a).normalize());
}
const ease = (t) => t * t * (3 - 2 * t);

export class Player {
  constructor(game) {
    this.game = game;
    this.pos = new THREE.Vector3(); this.vel = new THREE.Vector3();
    this.yaw = 0; this.pitch = 0; this.hp = 100; this.dead = false; this.onGround = true;
    this.camY = 1.65; this.bob = 0; this.bobAmt = 0; this.kick = 0; this.kickV = 0; this.land = 0; this.roll = 0;
    this.fov = 72; this.aim = 0; this.swayX = 0; this.swayY = 0; this.deadT = 0; this.stepPhase = 0;
    // hero traits: multipliers set by the chosen character (1 = no change)
    this.mods = { hp: 100, armor: 1, speed: 1, fire: 1, reload: 1, draw: 1, melee: 1, reach: 0, regen: 0, power: 1, meleeDmg: 1, gun: 1, stealth: 1 };
    this.maxHp = 100; this.hurtT = 99;
    this.vm = new THREE.Group();               // viewmodel root, scaled down so it never pokes through walls
    this.vm.scale.setScalar(0.3);
    game.gfx.camera.add(this.vm);
    this.flashTex = this.makeFlashTexture();
    this.weapon = null;
  }

  makeFlashTexture() {
    const c = document.createElement('canvas'); c.width = c.height = 128;
    const x = c.getContext('2d');
    const g = x.createRadialGradient(64, 64, 2, 64, 64, 62);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.25, 'rgba(255,220,130,0.9)'); g.addColorStop(0.6, 'rgba(255,120,30,0.35)'); g.addColorStop(1, 'rgba(255,60,0,0)');
    x.fillStyle = g; x.fillRect(0, 0, 128, 128);
    x.globalCompositeOperation = 'lighter'; x.fillStyle = 'rgba(255,230,160,0.8)';
    for (let i = 0; i < 5; i++) { x.save(); x.translate(64, 64); x.rotate(i * 1.2566 + 0.3); x.beginPath(); x.moveTo(-5, 0); x.lineTo(0, -62); x.lineTo(5, 0); x.fill(); x.restore(); }
    return new THREE.CanvasTexture(c);
  }

  spawn(x, z, yaw, weaponKind, sleeve) {
    const W = this.game.world;
    this.pos.set(x, W.groundAt(x, z, 100), z); this.vel.set(0, 0, 0);
    this.yaw = yaw; this.pitch = 0; this.hp = this.maxHp; this.hurtT = 99; this.dead = false; this.deadT = 0; this.camY = this.pos.y + 1.65;
    this.kick = this.kickV = 0; this.aim = 0;
    this.setWeapon(weaponKind, sleeve);
  }

  setWeapon(kind, sleeve = 0x9a8a6a, cuff) {
    this.vm.clear();
    this.weapon = new Weapon(this, kind, sleeve, cuff);
    this.vm.add(this.weapon.root);
  }

  /** Direction the camera is looking. */
  forward(out) { const cp = Math.cos(this.pitch); return out.set(-Math.sin(this.yaw) * cp, Math.sin(this.pitch), -Math.cos(this.yaw) * cp); }

  update(dt, input, active) {
    const G = this.game, W = G.world, cam = G.gfx.camera;
    if (this.dead) {
      this.deadT += dt;
      this.camY = damp(this.camY, this.pos.y + 0.35, 3, dt);
      this.roll = damp(this.roll, 0.9, 2.5, dt);
      cam.position.set(this.pos.x, this.camY, this.pos.z);
      cam.rotation.set(this.pitch * (1 - Math.min(1, this.deadT)), this.yaw, this.roll);
      this.vm.visible = false;
      return;
    }
    this.vm.visible = true;
    this.hurtT += dt;
    if (this.mods.regen && this.hurtT > 4 && this.hp < this.maxHp) this.hp = Math.min(this.maxHp, this.hp + this.mods.regen * dt);
    const K = input.keys;
    if (active) {
      const sens = 0.0022 * Math.min(1, cam.fov / 72 + 0.06);        // slower when zoomed in
      this.yaw -= input.mx * sens; this.pitch -= input.my * sens;
      if (K.has('ArrowLeft')) this.yaw += dt * 1.8; if (K.has('ArrowRight')) this.yaw -= dt * 1.8;
      if (!input.locked && !input.free) { if (input.cx < 0.04) this.yaw += dt * 1.7; else if (input.cx > 0.96) this.yaw -= dt * 1.7; }
      this.pitch = clamp(this.pitch, -1.45, 1.45);
    }
    let f = 0, s = 0;
    if (active) {
      f = (K.has('KeyW') || K.has('ArrowUp') ? 1 : 0) - (K.has('KeyS') || K.has('ArrowDown') ? 1 : 0);
      s = (K.has('KeyD') ? 1 : 0) - (K.has('KeyA') ? 1 : 0);
    }
    const sprint = K.has('ShiftLeft') || K.has('ShiftRight');
    const sy = Math.sin(this.yaw), cy = Math.cos(this.yaw);
    let wx = -sy * f + cy * s, wz = -cy * f - sy * s;
    const wl = Math.hypot(wx, wz);
    const top = (sprint && f > 0 ? 8.6 : 5.6) * (1 - this.aim * 0.4) * this.mods.speed;
    if (wl > 0) { wx = wx / wl * top; wz = wz / wl * top; }
    const acc = this.onGround ? 11 : 2.5;
    this.vel.x = damp(this.vel.x, wx, acc, dt); this.vel.z = damp(this.vel.z, wz, acc, dt);
    if (active && this.onGround && input.pressed.has('Space')) { this.vel.y = 5.8; this.onGround = false; }
    this.vel.y -= 17 * dt;

    const nx = this.pos.x + this.vel.x * dt, nz = this.pos.z + this.vel.z * dt;
    if (W.walkable(this.pos.x, this.pos.z, nx, nz)) { this.pos.x = nx; this.pos.z = nz; }
    else { this.vel.x *= 0.5; this.vel.z *= 0.5; }
    W.collide(this.pos, 0.4, 1.75);
    const ground = W.groundAt(this.pos.x, this.pos.z, this.pos.y);
    this.pos.y += this.vel.y * dt;
    if (this.pos.y <= ground) {
      if (!this.onGround && this.vel.y < -6) { this.land = Math.min(0.25, -this.vel.y * 0.02); G.sound.step(false); }
      this.pos.y = ground; this.vel.y = 0; this.onGround = true;
    } else if (this.pos.y - ground > 0.12) this.onGround = false;

    // camera: head bob, landing dip, recoil
    const spd = Math.hypot(this.vel.x, this.vel.z);
    this.bobAmt = damp(this.bobAmt, this.onGround ? Math.min(1, spd / 5.6) : 0, 8, dt);
    this.bob += spd * dt * 1.75;
    const ph = Math.floor(this.bob / Math.PI);
    if (ph !== this.stepPhase) { this.stepPhase = ph; if (this.onGround && spd > 1.5) G.sound.step(ground > W.height(this.pos.x, this.pos.z) + 0.05); }
    this.land = damp(this.land, 0, 9, dt);
    this.kickV += (-this.kick * 90 - this.kickV * 13) * dt; this.kick += this.kickV * dt;
    this.camY = damp(this.camY, this.pos.y + 1.65, 20, dt);
    if (Math.abs(this.camY - (this.pos.y + 1.65)) > 1.2) this.camY = this.pos.y + 1.65;
    this.roll = damp(this.roll, -s * 0.012 * this.bobAmt, 8, dt);
    cam.position.set(this.pos.x, this.camY + Math.abs(Math.sin(this.bob)) * 0.045 * this.bobAmt - this.land, this.pos.z);
    cam.rotation.set(this.pitch + this.kick, this.yaw, this.roll + Math.cos(this.bob) * 0.004 * this.bobAmt);

    const w = this.weapon;
    this.aim = damp(this.aim, active && w.canAim && input.alt && !w.busy ? 1 : 0, 14, dt);
    const fov = lerp(72 + (sprint && f > 0 ? 5 * this.bobAmt : 0), w.aimFov, this.aim);
    if (Math.abs(fov - cam.fov) > 0.01) { cam.fov = damp(cam.fov, fov, 16, dt); cam.updateProjectionMatrix(); }
    this.swayX = damp(this.swayX, clamp(-input.mx * 0.0006, -0.05, 0.05), 10, dt);
    this.swayY = damp(this.swayY, clamp(input.my * 0.0006, -0.05, 0.05), 10, dt);
    w.update(dt, input, active);
    if (w.scope && this.aim > 0.8) this.vm.visible = false;          // looking through the scope
  }

  recoil(v) { this.kickV += v; }
}

// ---------------------------------------------------------------------------

class Weapon {
  constructor(player, kind, sleeve, cuff) {
    this.p = player; this.game = player.game; this.kind = kind; this.sleeve = sleeve; this.cuffIn = cuff; this.m = player.mods;
    this.root = new THREE.Group();
    this.cd = 0; this.t = 0; this.state = 'ready'; this.kick = 0; this.kickV = 0; this.meleeT = 0; this.meleeHit = false;
    this.muzzle = new THREE.Object3D();
    const M = this.game.M;
    this.flash = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.34), new THREE.MeshBasicMaterial({ map: player.flashTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    this.flash.material.color.setScalar(5); this.flash.visible = false; this.flashT = 0;
    this['build_' + kind](M);
    if (!this.melee && this.game.def && this.game.def.knife) this.addKnife(M);
    if (this.melee) this.root.add(this.melee);
  }
  get busy() { return this.state === 'reload' || this.meleeT > 0; }

  /** Forearm running from the hand down/back toward the camera, with a cuff at the wrist. */
  arm(sleeve, p, r, len = 0.36) {
    const rr = [-r[0], r[1], r[2]];
    const w = new THREE.Vector3(0, len / 2 - 0.01, 0).applyEuler(new THREE.Euler(rr[0], rr[1], rr[2], 'YXZ'));
    return [gCap(0.036, len, sleeve, p, rr), gCyl(0.041, 0.039, 0.06, this.cuff ?? sleeve, [p[0] + w.x, p[1] + w.y, p[2] + w.z], rr)];
  }

  // ---- revolver -------------------------------------------------------------
  build_revolver(M) {
    this.ammo = this.mag = 6; this.canAim = true; this.aimFov = 50; this.cuff = this.cuffIn ?? 0x4a3020;
    this.hip = new THREE.Vector3(0.17, -0.17, -0.4); this.ads = new THREE.Vector3(0, -0.088, -0.36);
    const g = (this.gun = new THREE.Group()); g.scale.setScalar(1.5);
    const D = 0x34373e, L = 0x6c727c;
    g.add(mesh([
      gBox(0.032, 0.11, 0.05, 0x5a3418, [0, -0.06, 0.035], [-0.35, 0, 0]),
      fist([0.002, -0.058, 0.03], [-0.35, 0, 0], 1.02),
      ...this.arm(this.sleeve, [0.02, -0.145, 0.215], [1.15, 0, 0.1], 0.3),
    ], M.flat));
    g.add(mesh([
      gCyl(0.0125, 0.0135, 0.2, D, [0, 0.03, -0.2], [Math.PI / 2, 0, 0], 1, 8), gCyl(0.005, 0.005, 0.13, L, [0, 0.009, -0.165], [Math.PI / 2, 0, 0], 1, 6),
      gBox(0.024, 0.064, 0.09, D, [0, 0.013, -0.055]), gBox(0.012, 0.008, 0.095, D, [0, 0.051, -0.06]), gBox(0.004, 0.013, 0.012, L, [0, 0.048, -0.292]),
      gBox(0.008, 0.006, 0.05, D, [0, -0.032, -0.03]), gBox(0.006, 0.03, 0.006, L, [0, -0.018, -0.03], [0.3, 0, 0]),
    ], M.metal));
    this.drum = mesh([gCyl(0.0275, 0.0275, 0.056, L, [0, 0, 0], [Math.PI / 2, 0, 0], 1, 6)], M.metal);
    this.drum.position.set(0, 0.022, -0.07); this.drumRot = 0; g.add(this.drum);
    this.hammer = mesh([gBox(0.007, 0.024, 0.01, D, [0, 0.012, 0])], M.metal);
    this.hammer.position.set(0, 0.04, -0.004); g.add(this.hammer);
    this.muzzle.position.set(0, 0.03, -0.31); this.flash.position.set(0, 0.03, -0.36); g.add(this.muzzle, this.flash);
    this.root.add(g);
  }
  update_revolver(dt, input, active) {
    const P = this.p, G = this.game;
    if (this.state === 'reload') {
      this.t += dt / this.m.reload;
      const T = 1.45, k = this.t / T;
      if (!this.clicked && k > 0.35) { this.clicked = 1; G.sound.click(1900); }
      if (this.clicked === 1 && k > 0.6) { this.clicked = 2; G.sound.click(2400); }
      if (this.t >= T) { this.state = 'ready'; this.ammo = this.mag; G.sound.click(3000); }
    } else if (active) {
      if ((input.pressed.has('KeyR') && this.ammo < this.mag) || (input.shoot && this.ammo === 0 && this.cd <= 0)) { this.state = 'reload'; this.t = 0; this.clicked = 0; }
      else if (input.shoot && this.cd <= 0 && this.ammo > 0) {
        this.ammo--; this.cd = 0.33 * this.m.fire; this.kickV += 9; P.recoil(0.55); this.drumRot += Math.PI / 3;
        this.flashT = 0.05; this.flash.rotation.z = Math.random() * 6.28; this.flash.scale.setScalar(0.8 + Math.random() * 0.5);
        G.playerHitscan(this.muzzle, P.aim > 0.5 ? 0.002 : 0.012, 35 * this.m.gun);
        G.sound.gun(1, 0);
      }
    }
    const rl = this.state === 'reload' ? Math.sin(Math.min(1, this.t / 1.45) * Math.PI) : 0;
    this.gun.position.lerpVectors(this.hip, this.ads, P.aim);
    this.gun.position.y -= rl * 0.16; this.gun.position.z += this.kick * 0.05;
    this.gun.rotation.set(this.kick * 0.5 + rl * 0.9 + P.swayY, 0.05 * (1 - P.aim) + P.swayX + rl * 0.3, rl * -0.7 + P.swayX * 0.8);
    this.drum.rotation.z = damp(this.drum.rotation.z, this.drumRot + rl * 9, 18, dt);
    this.hammer.rotation.x = this.cd > 0.25 ? 0.2 : -0.5;
  }

  // ---- bow + katana -----------------------------------------------------------
  build_bow(M) {
    this.canAim = false; this.aimFov = 72; this.draw = 0; this.cuff = this.cuffIn ?? 0x1a1e2c;
    const g = (this.gun = new THREE.Group());
    const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(0, -0.64, 0.13), new THREE.Vector3(0, -0.38, -0.02), new THREE.Vector3(0, 0, -0.055), new THREE.Vector3(0, 0.5, -0.03), new THREE.Vector3(0, 0.98, 0.17)]);
    const stave = new THREE.TubeGeometry(curve, 28, 0.0115, 6);
    const flat = [gBox(1, 1, 1, 0x1c1410, [0, 0, 0], [0, 0, 0], 0.0001)];
    const staveMesh = new THREE.Mesh(stave, M.flat.clone()); staveMesh.material.vertexColors = false; staveMesh.material.color.set(0x241812); staveMesh.material.roughness = 0.35;
    g.add(staveMesh);
    for (const y of [-0.5, -0.25, 0.25, 0.6, 0.85]) { const p = curve.getPoint((y + 0.64) / 1.62); flat.push(gCyl(0.0135, 0.0135, 0.03, 0xc9a45a, [0, p.y, p.z], [0, 0, 0], 1, 6)); }
    flat.push(gCyl(0.016, 0.016, 0.12, 0x5a1c1c, [0, 0, -0.055], [0, 0, 0], 1, 6));
    flat.push(fist([0, 0, -0.05], [0, 0, 0], 1.05, -1), ...this.arm(this.sleeve, [-0.08, -0.2, 0.16], [0.95, 0, -0.3], 0.4));
    flat.push(gBox(0.09, 0.24, 0.15, this.sleeve, [-0.1, -0.3, 0.25], [-0.95, 0, -0.3]));
    g.add(mesh(flat, M.flat));
    const sm = new THREE.MeshBasicMaterial({ color: 0xe8e0c8 });
    const sg = new THREE.CylinderGeometry(0.0012, 0.0012, 1, 4);
    this.s1 = new THREE.Mesh(sg, sm); this.s2 = new THREE.Mesh(sg, sm); g.add(this.s1, this.s2);
    this.arrow = mesh([gCyl(0.0045, 0.0045, 0.92, 0xb89a62, [0, 0, -0.46], [Math.PI / 2, 0, 0], 1, 5), gCone(0.011, 0.05, 0xb0b4bc, [0, 0, -0.94], [-Math.PI / 2, 0, 0], 1, 5),
      gBox(0.03, 0.003, 0.11, 0xf0ece0, [0, 0, -0.07]), gBox(0.003, 0.03, 0.11, 0xf0ece0, [0, 0, -0.07])], M.flat);
    g.add(this.arrow);
    this.hand = mesh([fist([0.012, -0.012, 0.02], [0, 0.3, 1.2], 1), ...this.arm(this.sleeve, [0.09, -0.1, 0.24], [1.25, 0, 0.42], 0.36),
      gBox(0.085, 0.22, 0.14, this.sleeve, [0.11, -0.18, 0.3], [-1.25, 0, 0.42])], M.flat);
    g.add(this.hand);
    g.position.set(-0.2, -0.1, -0.62); g.rotation.set(0, -0.26, -0.16);
    this.root.add(g);
    // katana (right mouse button)
    const k = (this.melee = new THREE.Group());
    k.add(mesh([gBox(0.03, 0.27, 0.036, 0x16161c, [0, 0, 0]), gCyl(0.05, 0.05, 0.012, 0x2a2418, [0, 0.142, 0], [0, 0, 0], 1, 10),
      fist([0, 0.075, 0.0], [0, 0, 0], 1.05), fist([0, -0.07, 0.0], [0, 0, 0], 1.05, -1),
      ...this.arm(this.sleeve, [0.06, -0.22, 0.14], [0.6, 0, 0.3], 0.4), ...this.arm(this.sleeve, [-0.1, -0.2, 0.14], [0.6, 0, -0.5], 0.4)], M.flat));
    k.add(mesh([gBox(0.007, 0.76, 0.034, 0xdfe4ea, [0, 0.53, 0], [0, 0, 0]), gBox(0.008, 0.04, 0.04, 0xc9a45a, [0, 0.16, 0])], M.metal));
    k.visible = false;
    this.meleeDur = 0.42; this.meleeAt = 0.42; this.meleeRange = 3.3; this.meleeCone = 0.55; this.meleeDmg = 110;
  }
  update_bow(dt, input, active) {
    const P = this.p, G = this.game;
    if (this.state === 'ready') { if (active && input.shoot && this.meleeT <= 0) { this.state = 'draw'; this.t = 0; } }
    else if (this.state === 'draw') {
      this.t += dt / this.m.draw;
      if (this.t >= 0.34) {
        this.state = 'nock'; this.t = 0; this.kickV += 5;
        G.playerShoot('arrow', 82, 60, 7);
        G.sound.bow();
      }
    } else if (this.state === 'nock') { this.t += dt / this.m.draw; if (this.t >= 0.5) this.state = 'ready'; }
    const target = this.state === 'draw' ? ease(Math.min(1, this.t / 0.3)) : 0;
    this.draw = this.state === 'draw' ? target : damp(this.draw, 0, 40, dt);
    const snap = this.state === 'nock' ? Math.sin(this.t * 90) * Math.exp(-this.t * 14) * 0.02 : 0;
    const nz = 0.143 + this.draw * 0.42 + snap, ny = 0.03;
    stretch(this.s1, 0, 0.98, 0.17, 0, ny, nz); stretch(this.s2, 0, -0.64, 0.13, 0, ny, nz);
    const hasArrow = this.state !== 'nock' || this.t > 0.22;
    this.arrow.visible = hasArrow;
    const rise = this.state === 'nock' ? 1 - ease(clamp((this.t - 0.22) / 0.28, 0, 1)) : 0;
    this.arrow.position.set(0.014 + rise * 0.1, ny - rise * 0.35, nz + rise * 0.1);
    this.arrow.rotation.x = rise * -0.5;
    this.hand.position.set(0.014 + rise * 0.1, ny - rise * 0.35, nz + 0.01 + rise * 0.1);
    const g = this.gun, m = this.meleeT > 0 ? Math.sin(Math.min(1, this.meleeT / this.meleeDur) * Math.PI) : 0;
    g.position.set(-0.2 - m * 0.25, -0.1 - m * 0.4 + this.kick * 0.01, -0.62 + this.kick * 0.03);
    g.rotation.set(P.swayY - m * 0.4, -0.26 + P.swayX, -0.16 + P.swayX - m * 0.5);
  }

  // ---- crossbow + halberd -------------------------------------------------------
  build_crossbow(M) {
    this.canAim = true; this.aimFov = 38; this.cocked = 1; this.cuff = this.cuffIn ?? 0x6a5a40;
    this.hip = new THREE.Vector3(0.15, -0.19, -0.42); this.ads = new THREE.Vector3(0, -0.098, -0.34);
    const g = (this.gun = new THREE.Group());
    const W1 = 0x5a3a1e, W2 = 0x7a5a30;
    const prod = new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(-0.34, 0.012, -0.41), new THREE.Vector3(-0.18, 0.012, -0.5), new THREE.Vector3(0, 0.012, -0.53), new THREE.Vector3(0.18, 0.012, -0.5), new THREE.Vector3(0.34, 0.012, -0.41)]), 20, 0.013, 6);
    const pm = new THREE.Mesh(prod, M.metal.clone()); pm.material.vertexColors = false; pm.material.color.set(0x4a4e56); pm.receiveShadow = true; g.add(pm);
    g.add(mesh([
      gBox(0.046, 0.05, 0.64, W1, [0, 0, -0.2]), gBox(0.05, 0.1, 0.2, W1, [0, -0.025, 0.16]), gBox(0.02, 0.012, 0.4, W2, [0, 0.03, -0.33]),
      gBox(0.06, 0.03, 0.06, 0x2a1c10, [0, 0.012, -0.5]),
      fist([0.004, -0.05, 0.07], [-0.3, 0, 0], 1.05), ...this.arm(this.sleeve, [0.05, -0.15, 0.27], [1.2, 0, 0.15], 0.34),
      fist([0, -0.035, -0.26], [Math.PI / 2, 0, Math.PI], 1.05, -1), ...this.arm(this.sleeve, [-0.1, -0.16, -0.06], [1.05, 0, -0.5], 0.38),
    ], M.flat));
    g.add(mesh([gBox(0.03, 0.02, 0.05, 0x8a8f96, [0, 0.03, -0.12]), gBox(0.008, 0.012, 0.16, 0x6a6f76, [0, -0.04, -0.02], [0.12, 0, 0]),
      xfTorus(0.035, 0.006, [0, 0.0, -0.57])], M.metal));
    const sm = new THREE.MeshBasicMaterial({ color: 0xe0d8c0 }), sg = new THREE.CylinderGeometry(0.0028, 0.0028, 1, 4);
    this.s1 = new THREE.Mesh(sg, sm); this.s2 = new THREE.Mesh(sg, sm); g.add(this.s1, this.s2);
    this.arrow = mesh([gCyl(0.006, 0.006, 0.36, 0x4a3018, [0, 0, -0.18], [Math.PI / 2, 0, 0], 1, 5), gCone(0.013, 0.05, 0xb0b4bc, [0, 0, -0.385], [-Math.PI / 2, 0, 0], 1, 5),
      gBox(0.03, 0.003, 0.08, 0x8a1c1c, [0, 0.004, -0.05])], M.flat);
    this.arrow.position.set(0, 0.044, -0.13); g.add(this.arrow);
    this.muzzle.position.set(0, 0.04, -0.55); g.add(this.muzzle);
    this.root.add(g);
    // halberd (right mouse button while not aiming is "aim"; halberd is on F / middle)
    const h = (this.melee = new THREE.Group());
    h.add(mesh([gCyl(0.017, 0.017, 2.0, 0x5a3a1e, [0, 0, -0.3], [Math.PI / 2, 0, 0], 1, 6),
      fist([0, -0.012, 0.25], [Math.PI / 2, 0, Math.PI], 1.1), fist([0, -0.012, -0.2], [Math.PI / 2, 0, Math.PI], 1.1, -1),
      ...this.arm(this.sleeve, [0.08, -0.14, 0.42], [1.1, 0, 0.3], 0.38), ...this.arm(this.sleeve, [-0.12, -0.14, 0.0], [1.0, 0, -0.5], 0.38)], M.flat));
    h.add(mesh([gBox(0.01, 0.3, 0.26, 0xd4d9df, [0, -0.13, -1.12]), gCone(0.028, 0.42, 0xd4d9df, [0, 0, -1.5], [-Math.PI / 2, 0, 0], 1, 6),
      gBox(0.01, 0.1, 0.1, 0xd4d9df, [0, 0.07, -1.14], [0.6, 0, 0]), gBox(0.03, 0.03, 0.3, 0x8a8f96, [0, 0, -1.15])], M.metal));
    h.visible = false;
    this.meleeDur = 0.55; this.meleeAt = 0.38; this.meleeRange = 3.7; this.meleeCone = 0.72; this.meleeDmg = 95; this.meleeStyle = 'thrust';
  }
  update_crossbow(dt, input, active) {
    const P = this.p, G = this.game;
    if (this.state === 'reload') {
      this.t += dt / this.m.reload;
      const T = 1.0;
      this.cocked = ease(clamp((this.t - 0.2) / 0.5, 0, 1));
      if (!this.clicked && this.t > 0.7) { this.clicked = 1; G.sound.click(1500); }
      if (this.t >= T) { this.state = 'ready'; this.cocked = 1; }
    } else if (active && input.shoot && this.meleeT <= 0) {
      this.state = 'reload'; this.t = 0; this.clicked = 0; this.cocked = 0; this.kickV += 6; P.recoil(0.25);
      G.playerShoot('bolt', 118, 95, 5);
      G.sound.crossbow();
    }
    const zs = lerp(-0.4, -0.13, this.cocked) + (this.state === 'reload' && this.t < 0.2 ? Math.sin(this.t * 120) * 0.012 * (1 - this.t * 5) : 0);
    stretch(this.s1, -0.34, 0.012, -0.41, 0, 0.034, zs); stretch(this.s2, 0.34, 0.012, -0.41, 0, 0.034, zs);
    this.arrow.visible = this.state === 'ready' || this.t > 0.72;
    const rl = this.state === 'reload' ? Math.sin(clamp((this.t - 0.1) / 0.85, 0, 1) * Math.PI) : 0;
    const m = this.meleeT > 0 ? Math.sin(Math.min(1, this.meleeT / this.meleeDur) * Math.PI) : 0;
    const g = this.gun;
    g.position.lerpVectors(this.hip, this.ads, P.aim);
    g.position.y -= rl * 0.1 + m * 0.4; g.position.x -= m * 0.2; g.position.z += this.kick * 0.04;
    g.rotation.set(this.kick * 0.25 - rl * 0.55 + P.swayY - m * 0.5, 0.04 * (1 - P.aim) + P.swayX + rl * 0.12, rl * 0.25 + P.swayX * 0.8 + m * 0.5);
  }

  // ---- firearms of 1944: Sten submachine gun and scoped rifle, plus a knife ----
  build_sten(M) {
    this.gunCfg = { interval: 0.085, dmg: 16, hip: 0.03, ads: 0.011, reload: 1.7, kick: 3.2, recoil: 0.13, vol: 0.55 };
    this.ammo = this.mag = 32; this.canAim = true; this.aimFov = 56; this.cuff = this.cuffIn ?? 0x8a7a52;
    this.hip = new THREE.Vector3(0.17, -0.17, -0.42); this.ads = new THREE.Vector3(0, -0.088, -0.34);
    const g = (this.gun = new THREE.Group()), D = 0x2e3136, L = 0x5a5f68, X = Math.PI / 2;
    g.add(mesh([fist([0.002, -0.075, 0.06], [-0.25, 0, 0], 1.02), ...this.arm(this.sleeve, [0.02, -0.16, 0.25], [1.15, 0, 0.1], 0.3),
      fist([-0.12, -0.004, -0.16], [0, 0, X], 1.0, -1), ...this.arm(this.sleeve, [-0.2, -0.1, 0.02], [1.0, 0, -0.7], 0.36)], M.flat));
    g.add(mesh([gCyl(0.02, 0.02, 0.42, D, [0, 0, -0.12], [X, 0, 0], 1, 8), gCyl(0.012, 0.012, 0.2, D, [0, 0, -0.42], [X, 0, 0], 1, 8), gCyl(0.026, 0.026, 0.16, L, [0, 0, -0.27], [X, 0, 0], 1, 8),
      gBox(0.19, 0.03, 0.04, D, [-0.115, 0, -0.16]), gBox(0.02, 0.085, 0.03, D, [0, -0.05, 0.05], [-0.25, 0, 0]), gCyl(0.006, 0.006, 0.3, L, [0, -0.008, 0.24], [X, 0, 0], 1, 5),
      gBox(0.02, 0.09, 0.012, L, [0, -0.03, 0.39]), gBox(0.004, 0.02, 0.01, L, [0, 0.032, -0.5]), gBox(0.02, 0.016, 0.01, L, [0, 0.03, 0.06])], M.metal));
    this.muzzle.position.set(0, 0, -0.53); this.flash.position.set(0, 0, -0.58); g.add(this.muzzle, this.flash);
    this.root.add(g);
  }
  build_rifle(M) {
    this.gunCfg = { interval: 1.15, dmg: 120, hip: 0.02, ads: 0.0006, reload: 2.3, kick: 8, recoil: 0.5, vol: 1, bolt: true };
    this.ammo = this.mag = 5; this.canAim = true; this.aimFov = 15; this.scope = true; this.cuff = this.cuffIn ?? 0x5a5a34;
    this.hip = new THREE.Vector3(0.16, -0.18, -0.4); this.ads = new THREE.Vector3(0, -0.11, -0.3);
    const g = (this.gun = new THREE.Group()), D = 0x2e3136, L = 0x5a5f68, W = 0x6a4426, X = Math.PI / 2;
    g.add(mesh([gBox(0.045, 0.06, 0.62, W, [0, -0.02, -0.2]), gBox(0.045, 0.1, 0.3, W, [0, -0.045, 0.22], [0.12, 0, 0]), gBox(0.04, 0.03, 0.3, W, [0, 0.0, -0.6]),
      fist([0.004, -0.07, 0.1], [-0.3, 0, 0], 1.05), ...this.arm(this.sleeve, [0.04, -0.17, 0.29], [1.2, 0, 0.14], 0.32),
      fist([0, -0.055, -0.32], [X, 0, Math.PI], 1.05, -1), ...this.arm(this.sleeve, [-0.1, -0.17, -0.12], [1.05, 0, -0.5], 0.38)], M.flat));
    g.add(mesh([gCyl(0.011, 0.012, 0.86, D, [0, 0.022, -0.5], [X, 0, 0], 1, 8), gBox(0.03, 0.035, 0.2, D, [0, 0.022, 0.0]), gCyl(0.007, 0.007, 0.07, L, [0.04, 0.02, 0.04], [0, 0, X], 1, 5), gSph(0.014, L, [0.078, 0.018, 0.04]),
      gCyl(0.018, 0.018, 0.26, D, [0, 0.075, -0.05], [X, 0, 0], 1, 10), gCyl(0.024, 0.024, 0.05, D, [0, 0.075, -0.2], [X, 0, 0], 1, 10), gBox(0.012, 0.03, 0.02, L, [0, 0.05, -0.1]), gBox(0.012, 0.03, 0.02, L, [0, 0.05, 0.02]),
      gBox(0.004, 0.016, 0.01, L, [0, 0.042, -0.92])], M.metal));
    this.muzzle.position.set(0, 0.022, -0.94); this.flash.position.set(0, 0.022, -1.0); g.add(this.muzzle, this.flash);
    this.root.add(g);
  }
  update_sten(dt, input, active) { this.updateGun(dt, input, active); }
  update_rifle(dt, input, active) { this.updateGun(dt, input, active); }
  updateGun(dt, input, active) {
    const P = this.p, G = this.game, c = this.gunCfg;
    if (this.state === 'reload') {
      this.t += dt / this.m.reload;
      if (!this.clicked && this.t > c.reload * 0.45) { this.clicked = 1; G.sound.click(1800); }
      if (this.t >= c.reload) { this.state = 'ready'; this.ammo = this.mag; G.sound.click(2800); }
    } else if (active) {
      if ((input.pressed.has('KeyR') && this.ammo < this.mag) || (input.shoot && this.ammo === 0 && this.cd <= 0)) { this.state = 'reload'; this.t = 0; this.clicked = 0; }
      else if (input.shoot && this.cd <= 0 && this.ammo > 0 && this.meleeT <= 0) {
        this.ammo--; this.cd = c.interval * this.m.fire; this.kickV += c.kick; P.recoil(c.recoil);
        this.flashT = 0.045; this.flash.rotation.z = Math.random() * 6.28; this.flash.scale.setScalar(0.7 + Math.random() * 0.5);
        G.playerHitscan(this.muzzle, P.aim > 0.5 ? c.ads : c.hip, c.dmg * this.m.gun);
        G.sound.gun(c.vol, 0);
        if (c.bolt) setTimeout(() => G.sound.click(1500), 380);
      }
    }
    const rl = this.state === 'reload' ? Math.sin(Math.min(1, this.t / c.reload) * Math.PI) : 0;
    const bolt = c.bolt && this.cd > 0 ? Math.sin(Math.min(1, (c.interval - this.cd) / 0.8) * Math.PI) * (1 - P.aim) : 0;
    const m = this.meleeT > 0 ? Math.sin(Math.min(1, this.meleeT / this.meleeDur) * Math.PI) : 0;
    const g = this.gun;
    g.position.lerpVectors(this.hip, this.ads, P.aim);
    g.position.y -= rl * 0.16 + m * 0.4 + bolt * 0.03; g.position.x -= m * 0.2; g.position.z += this.kick * 0.035;
    g.rotation.set(this.kick * 0.22 + rl * 0.7 + P.swayY - m * 0.5, 0.04 * (1 - P.aim) + P.swayX + rl * 0.25, rl * -0.5 + P.swayX * 0.8 + m * 0.5 + bolt * 0.25);
  }
  /** Fighting knife on F, for the weapons that use the right button to aim. */
  addKnife(M) {
    const k = (this.melee = new THREE.Group()), X = Math.PI / 2;
    k.add(mesh([gBox(0.03, 0.035, 0.12, 0x2a1c12, [0, 0, 0]), gBox(0.07, 0.02, 0.02, 0x4a4a4e, [0, 0, -0.065]), fist([0, 0, 0.0], [X, 0, Math.PI], 1.05),
      ...this.arm(this.sleeve, [0.07, -0.13, 0.2], [1.1, 0, 0.3], 0.36)], M.flat));
    k.add(mesh([gBox(0.006, 0.034, 0.2, 0xd4d9df, [0, 0, -0.175])], M.metal));
    k.visible = false;
    this.meleeDur = 0.36; this.meleeAt = 0.38; this.meleeRange = 2.5; this.meleeCone = 0.6; this.meleeDmg = 90; this.meleeStyle = 'thrust';
  }

  // ---- thrown weapons: javelins (Greece) and axes (the North), each with a sword ----
  build_javelin(M) { this.buildThrown(M, true); }
  build_axe(M) { this.buildThrown(M, false); }
  update_javelin(dt, input, active) { this.updateThrown(dt, input, active, true); }
  update_axe(dt, input, active) { this.updateThrown(dt, input, active, false); }

  buildThrown(M, jav) {
    this.thrown = true; this.canAim = false; this.aimFov = 72; this.cuff = this.cuffIn ?? (jav ? 0xb8893a : 0x4a3a2a);
    const g = (this.gun = new THREE.Group());
    this.base = jav ? [0.3, -0.15, -0.5, 0.05, 0.1] : [0.3, -0.24, -0.5, -0.35, 0.05];
    g.add(mesh(jav ? [fist([0, 0, 0], [Math.PI / 2, 0, Math.PI], 1.05), ...this.arm(this.sleeve, [0.06, -0.11, 0.2], [1.05, 0, 0.3], 0.34)]
      : [fist([0, 0, 0], [0, 0, 0], 1.05), ...this.arm(this.sleeve, [0.04, -0.2, 0.12], [0.5, 0, 0.2], 0.36)], M.flat));
    this.missile = new THREE.Group();
    if (jav) {
      this.missile.add(mesh([gCyl(0.011, 0.011, 1.5, 0x7a5430, [0, 0.012, -0.25], [Math.PI / 2, 0, 0], 1, 6), gBox(0.03, 0.03, 0.12, 0x3a2414, [0, 0.012, 0])], M.flat));
      this.missile.add(mesh([gCone(0.024, 0.2, 0xd4d9df, [0, 0.012, -1.1], [-Math.PI / 2, 0, 0], 1, 6)], M.metal));
    } else {
      this.missile.add(mesh([gCyl(0.014, 0.016, 0.5, 0x6a4a2a, [0, 0.12, 0], [0, 0, 0], 1, 6)], M.flat));
      this.missile.add(mesh([gBox(0.012, 0.17, 0.15, 0xd4d9df, [0, 0.32, -0.09]), gBox(0.03, 0.055, 0.06, 0x6a6f76, [0, 0.33, 0])], M.metal));
    }
    g.add(this.missile);
    this.root.add(g);
    // rim of the round shield on the left arm
    const sh = mesh(jav ? [gCyl(0.44, 0.44, 0.035, 0xb8893a, [0, 0, 0], [Math.PI / 2, 0, 0], 1, 22), gCyl(0.37, 0.37, 0.04, 0x9a6f2a, [0, 0, 0], [Math.PI / 2, 0, 0], 1, 22)]
      : [gCyl(0.44, 0.44, 0.035, 0x8a1c1c, [0, 0, 0], [Math.PI / 2, 0, 0], 1, 22), gBox(0.88, 0.1, 0.04, 0xe8e0d0, [0, 0, 0]), gBox(0.1, 0.88, 0.04, 0xe8e0d0, [0, 0, 0]),
        gCyl(0.09, 0.09, 0.07, 0x9a9fa6, [0, 0, 0], [Math.PI / 2, 0, 0], 1, 10), gCyl(0.445, 0.445, 0.03, 0x4a3a2a, [0, 0, 0.004], [Math.PI / 2, 0, 0], 1, 22)], M.flat);
    sh.scale.setScalar(0.72); sh.position.set(-0.62, -0.6, -0.7); sh.rotation.set(0.3, 0.7, 0.12); this.shield = sh; this.root.add(sh);
    // sword (right mouse button)
    const k = (this.melee = new THREE.Group()), len = jav ? 0.52 : 0.7;
    k.add(mesh([gBox(0.03, 0.17, 0.036, 0x3a2414, [0, 0, 0]), gBox(jav ? 0.13 : 0.19, 0.03, 0.045, jav ? 0xc9a050 : 0x8a8f96, [0, 0.095, 0]), gSph(0.03, jav ? 0xc9a050 : 0x8a8f96, [0, -0.1, 0]),
      fist([0, 0, 0], [0, 0, 0], 1.05), ...this.arm(this.sleeve, [0.06, -0.22, 0.14], [0.6, 0, 0.3], 0.4)], M.flat));
    k.add(mesh([gBox(0.008, len, jav ? 0.06 : 0.05, 0xdfe4ea, [0, 0.11 + len / 2, 0])], M.metal));
    k.visible = false;
    this.meleeDur = 0.4; this.meleeAt = 0.42; this.meleeRange = jav ? 3.0 : 3.2; this.meleeCone = 0.55; this.meleeDmg = 100; this.meleeStyle = 'cut';
  }
  updateThrown(dt, input, active, jav) {
    const P = this.p, G = this.game, b = this.base;
    if (this.state === 'ready') { if (active && input.shoot && this.meleeT <= 0) { this.state = 'wind'; this.t = 0; } }
    else if (this.state === 'wind') {
      this.t += dt / this.m.fire;
      if (this.t >= 0.16) {
        this.state = 'recover'; this.t = 0; this.kickV += 5; P.recoil(0.2);
        G.playerShoot(this.kind, (jav ? 50 : 36) * (1 + (this.m.power - 1) * 0.7), (jav ? 85 : 80) * this.m.power, jav ? 6 : 7);
        G.sound.whiz();
      }
    } else { this.t += dt / this.m.fire; if (this.t >= 0.55) this.state = 'ready'; }
    const wind = this.state === 'wind' ? ease(Math.min(1, this.t / 0.16)) : 0;
    const rec = this.state === 'recover' ? this.t / 0.55 : 1;
    this.missile.visible = this.state !== 'recover' || rec > 0.45;
    const rise = this.state === 'recover' ? 1 - ease(clamp((rec - 0.45) / 0.55, 0, 1)) : 0;      // next missile comes up from below
    const fwd = this.state === 'recover' && rec < 0.3 ? Math.sin((rec / 0.3) * Math.PI) : 0;       // follow-through of the throw
    const m = this.meleeT > 0 ? Math.sin(Math.min(1, this.meleeT / this.meleeDur) * Math.PI) : 0;
    const g = this.gun;
    g.position.set(b[0] - m * 0.2, b[1] - rise * 0.4 - m * 0.4 + wind * 0.05, b[2] + wind * 0.24 - fwd * 0.3 + this.kick * 0.02);
    g.rotation.set(b[3] + P.swayY - wind * (jav ? 0.12 : 0.7) + fwd * (jav ? 0.2 : 1.0) - m * 0.4, b[4] + P.swayX, P.swayX * 0.8);
    this.shield.position.set(-0.62 - P.swayX * 0.6, -0.6 - P.swayY * 0.4 - fwd * 0.03, -0.7);
  }

  // ---- shared -----------------------------------------------------------------
  update(dt, input, active) {
    const G = this.game;
    this.cd = Math.max(0, this.cd - dt);
    this.kickV += (-this.kick * 160 - this.kickV * 16) * dt; this.kick += this.kickV * dt;
    // melee: bow -> katana on right mouse; crossbow -> halberd on F (right mouse aims)
    if (this.melee) {
      const want = active && (input.pressed.has('KeyF') || input.pressed.has('KeyV') || (!this.canAim && input.melee));
      if (want && this.meleeT <= 0 && this.state !== 'draw') { this.meleeT = 0.0001; this.meleeHit = false; G.sound.slash(); }
      if (this.meleeT > 0) {
        this.meleeT += dt / this.m.melee;
        const k = this.meleeT / this.meleeDur, M = this.melee;
        M.visible = true;
        if (!this.meleeHit && k >= this.meleeAt) { this.meleeHit = true; G.playerMelee(this.meleeRange + this.m.reach, this.meleeCone, this.meleeDmg * this.m.meleeDmg); }
        if (this.meleeStyle !== 'thrust') {    // diagonal cut, upper right to lower left
          const e = ease(clamp(k * 1.5, 0, 1));
          M.position.set(lerp(0.5, -0.4, e), lerp(0.2, -0.42, e), -0.55);
          M.rotation.set(lerp(-0.5, -1.35, e), 0, lerp(-1.0, 1.9, e));
        } else {                               // forward thrust, then pull back
          const e = k < 0.38 ? ease(k / 0.38) : 1 - ease((k - 0.38) / 0.62);
          M.position.set(lerp(0.3, 0.1, e), lerp(-0.34, -0.14, e), lerp(0.25, -0.7, e));
          M.rotation.set(lerp(0.12, 0.02, e), lerp(0.25, 0.05, e), 0.4);
        }
        if (k >= 1) { this.meleeT = 0; M.visible = false; }
      }
    }
    this['update_' + this.kind](dt, input, active);
    if (this.flashT > 0) { this.flashT -= dt; this.flash.visible = true; } else this.flash.visible = false;
  }

  hud() {
    if (this.kind === 'revolver') return { ammo: this.ammo, mag: this.mag, reloading: this.state === 'reload' };
    if (this.kind === 'bow') return { ammo: this.state === 'nock' ? 0 : 1, mag: 1, reloading: false };
    if (this.thrown) return { ammo: this.state === 'ready' ? 1 : 0, mag: 1, reloading: false };
    if (this.gunCfg) return { ammo: this.ammo, mag: this.mag, reloading: this.state === 'reload' };
    return { ammo: this.state === 'ready' ? 1 : 0, mag: 1, reloading: this.state === 'reload' };
  }
}

function xfTorus(R, r, p) {
  const g = new THREE.TorusGeometry(R, r, 5, 12).toNonIndexed();
  g.translate(p[0], p[1], p[2]);
  const n = g.attributes.position.count, col = new Float32Array(n * 3).fill(0.25);
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return g;
}
