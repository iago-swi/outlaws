// Chapter II - a shrine path through a bamboo forest at dusk.
import * as THREE from 'three';
import { Heightfield, curvedRoofGeo, rockGeo } from '../build.js';
import { makeAmbient, makeWater, windify } from '../gfx.js';
import { instanced, room, steps, shelf, tuftGeo, blobTreeGeo, gBox, gCyl, gCone, gSph, xf, merge, paint, stand, den } from '../props.js';
import { fbm, smooth, clamp } from '../util.js';
import { makeHumanoid, lookFor } from '../actors.js';

export const japan = {
  id: 'japan', theme: 'theme-japan', chapter: 'Chapter II', title: 'Kagemori', kanji: '影森', place: 'Kagemori shrine · Japan · 1600',
  story: 'Your lord is dead and his killers hold the shrine of the shadow forest. Ninja wait among the bamboo, masterless swordsmen guard the steps. Walk the path of the gates and take back the sacred ground.',
  weapon: 'shuriken',
  heroes: [
    { look: 'musashi', name: 'Miyamoto Musashi', who: 'Undefeated duellist, master of two swords', trait: 'Two swords', effect: 'faster katana cuts with longer reach', mods: { melee: 0.62, reach: 0.6 }, sleeve: 0x2c2c32, cuff: 0x1a1a1e },
    { look: 'tomoe', name: 'Tomoe Gozen', who: 'Woman warrior of the Genpei War', trait: 'Swift hands', effect: 'throws her stars almost twice as fast', mods: { fire: 0.55 }, sleeve: 0xf0ece0, cuff: 0xa81c1c },
    { look: 'date', name: 'Date Masamune', who: 'The One-Eyed Dragon of Sendai', trait: 'Black armour', effect: 'takes 30% less damage', mods: { armor: 0.7 }, sleeve: 0x17171c, cuff: 0xd9b23a },
  ], weaponName: 'Shuriken & katana', alt: 'right mouse — katana',
  keys: '<kbd>↑</kbd><kbd>↓</kbd><kbd>←</kbd><kbd>→</kbd> move &nbsp; <kbd>Shift</kbd> run &nbsp; <kbd>Space</kbd> jump<br><kbd>Left mouse</kbd> throw stars &nbsp; <kbd>Right mouse</kbd> katana cut',
  foes: 'foes remain', foesNone: 'The shrine is silent', bossName: 'Kurogane, the Iron Ronin', bossDown: 'Kurogane has fallen', pickupText: 'Rice cake  +35',
  deadTitle: 'Honour lost', deadSub: 'The forest keeps your name.', clearTitle: 'The shrine is restored',
  build,
};

const RED = 0xc8301c, DARK = 0x2a1c14, INK = 0x15110e;

function build({ game, gfx, world, B, M, root, rand, shared }) {
  const R = rand;
  const pathX = (z) => (z > 38 ? Math.sin((z - 38) * 0.085) * 5 : 0);
  // ---- terrain ------------------------------------------------------------------
  const POND = { x: -1, z: 24, r: 11.5 };
  const hf = new Heightfield(360, 180, (x, z) => {
    let h = (fbm(x * 0.03 + 9, z * 0.03, 4, 21) - 0.5) * 2.2;
    const onPath = 1 - smooth(2, 7, Math.abs(x - pathX(z)));
    h *= 1 - onPath * 0.85;
    const flat = (1 - smooth(58, 68, Math.abs(x))) * (1 - smooth(8, 16, Math.abs(z - 8) - 30));
    h *= 1 - flat * 0.8;
    const pd = Math.hypot(x - POND.x, z - POND.z);
    h -= (1 - smooth(POND.r - 4, POND.r + 1.5, pd)) * 1.5;
    // shrine terrace: +3 m, reached by a ramp (the stairs) in the middle
    const stair = Math.abs(x) < 4.2 ? smooth(-23.5, -32.5, z) : smooth(-27.6, -29.2, z);
    h = h * (1 - stair) + 3 * stair;
    const out = Math.max(smooth(64, 124, Math.abs(x)), smooth(76, 140, Math.abs(z)));
    return h + out * (fbm(x * 0.012, z * 0.012 + 4, 4, 3) * 36 + 4);
  });
  world.height = (x, z) => hf.h(x, z);
  world.bounds = { x0: -63, x1: 63, z0: -76, z1: 79 };
  world.maxSlope = 1.0; world.waterY = -1.05;
  const cMoss = new THREE.Color(0x4a5c30), cDirt = new THREE.Color(0x6a5a44), cDark = new THREE.Color(0x35432a), cGravel = new THREE.Color(0xb0a898), tmp = new THREE.Color();
  root.add(hf.mesh(M.ground, (x, z) => {
    tmp.copy(cMoss).lerp(cDark, fbm(x * 0.05, z * 0.05, 3, 6));
    tmp.lerp(cDirt, (1 - smooth(1.2, 3.4, Math.abs(x - pathX(z)))) * 0.9 * (z > -24 ? 1 : 0));
    if (z < -30 && Math.abs(x) < 34) tmp.lerp(cGravel, 0.85);
    return tmp;
  }));

  // ---- reusable pieces -------------------------------------------------------------
  const lights = [];
  const lamp = (x, y, z, i = 14, d = 10) => { if (lights.length < 9) { const l = new THREE.PointLight(0xffa050, i, d, 1.8); l.position.set(x, y, z); root.add(l); lights.push(l); } };
  const torii = (x, z, ry = 0, s = 1) => {
    const y = world.height(x, z), c = Math.cos(ry), sn = Math.sin(ry), P = (lx) => [x + lx * c, z - lx * sn];
    for (const side of [-1, 1]) {
      const [px, pz] = P(side * 1.9 * s);
      B.cyl(M.flat, 0.19 * s, 0.23 * s, 4.3 * s, px, y, pz, { c: RED, rz: side * 0.035, ry, seg: 10 });
      B.cyl(M.flat, 0.27 * s, 0.3 * s, 0.45 * s, px, y - 0.05, pz, { c: INK, seg: 10 });
      world.addCyl(px, pz, 0.26 * s, y - 1, y + 4.3 * s);
    }
    B.box(M.flat, 4.7 * s, 0.24 * s, 0.2 * s, x, y + 3.25 * s, z, { ry, c: RED });
    B.box(M.flat, 0.2 * s, 0.5 * s, 0.14 * s, x, y + 3.5 * s, z, { ry, c: RED });
    B.box(M.flat, 5.1 * s, 0.26 * s, 0.34 * s, x, y + 4.02 * s, z, { ry, c: RED });
    B.box(M.flat, 5.5 * s, 0.16 * s, 0.46 * s, x, y + 4.28 * s, z, { ry, c: INK });
    for (const side of [-1, 1]) { const [ex, ez] = P(side * 2.95 * s); B.box(M.flat, 0.85 * s, 0.16 * s, 0.46 * s, ex, y + 4.36 * s, ez, { ry, rz: side * 0.24, c: INK }); B.box(M.flat, 0.7 * s, 0.24 * s, 0.34 * s, ex - side * 0.12 * c, y + 4.1 * s, ez + side * 0.12 * sn, { ry, rz: side * 0.2, c: RED }); }
  };
  const lantern = (x, z, lit = true, s = 1) => {
    const y = world.groundAt(x, z, world.height(x, z) + 0.2), G = 0x8a8c84;
    B.cyl(M.rock, 0.3 * s, 0.38 * s, 0.25 * s, x, y, z, { c: G, seg: 6 });
    B.cyl(M.rock, 0.13 * s, 0.16 * s, 0.9 * s, x, y + 0.25 * s, z, { c: G, seg: 6 });
    B.cyl(M.rock, 0.34 * s, 0.2 * s, 0.14 * s, x, y + 1.15 * s, z, { c: G, seg: 6 });
    for (const [sx, sz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) B.box(M.rock, 0.06 * s, 0.34 * s, 0.06 * s, x + sx * 0.17 * s, y + 1.29 * s, z + sz * 0.17 * s, { c: G });
    if (lit) B.box(M.glow, 0.24 * s, 0.26 * s, 0.24 * s, x, y + 1.32 * s, z, { c: 0xff9a3a });
    B.geo(M.rock, new THREE.ConeGeometry(0.46 * s, 0.34 * s, 6), [x, y + 1.8 * s, z], [0, 0.5, 0], 1, G);
    B.geo(M.rock, new THREE.SphereGeometry(0.08 * s, 6, 5), [x, y + 2.02 * s, z], [0, 0, 0], 1, G);
    world.addCyl(x, z, 0.3 * s, y - 1, y + 1.9 * s);
  };
  /** Timber-framed house with glowing paper screens and a sweeping roof. */
  const house = (x, z, w, d, o = {}) => {
    const { ry = 0, h = 2.9, roof = M.kawara, roofC = 0x56646a, roofH = 2.6, up = 0.7, base = 0.5, wallC = 0xe8e0cc, over = 1.5 } = o;
    const y = o.y ?? world.height(x, z);
    const c = Math.cos(ry), s = Math.sin(ry), P = (lx, lz) => [x + lx * c + lz * s, z - lx * s + lz * c];
    B.box(M.woodH, w + 1.6, base, d + 1.6, x, y, z, { ry, c: 0x5a4030, solid: true });                      // veranda platform
    const n = Math.max(2, Math.floor(w / 2.1)), bw = w / n, mid = Math.floor(n / 2), lxm = -w / 2 + (mid + 0.5) * bw, fy = y + base + 0.06;
    room(B, M, x, y + base, z, { w, d, h, t: 0.2, ry, mat: M.plaster, c: wallC, base: 0.04, ceil: false, floor: { mat: M.thatch, c: 0xb8aa70 },
      doors: [{ side: 's', at: lxm, w: bw - 0.25, h: 2.1 }, { side: 'n', at: lxm, w: bw - 0.25, h: 2.1 }] });
    for (const sz of [-1, 1]) { const [px, pz] = P(lxm, sz * (d / 2 + 1.2)); B.box(M.stone, 1.5, 0.75, 0.7, px, y - 0.5, pz, { ry, c: 0x8c8a80, solid: true }); }   // stepping stones
    if (o.bare !== true) {
      const [tx, tz] = P(-w * 0.26, d * 0.1); B.box(M.woodH, 1.1, 0.3, 0.7, tx, fy, tz, { ry, c: 0x3a2618, solid: true });
      for (const k of [-1, 1]) { const [cx, cz] = P(-w * 0.26, d * 0.1 + k * 0.75); B.box(M.cloth, 0.5, 0.07, 0.5, cx, fy, cz, { ry, c: k > 0 ? 0x6a2a3a : 0x2a3a5a }); }
      for (let k = 0; k < 3; k++) { const [bx, bz] = P(w * 0.27 + (k - 1) * 0.62, -d * 0.2 + (k % 2) * 0.2); B.box(M.shoji, 0.7, 1.55, 0.04, bx, fy, bz, { ry: ry + (k % 2 ? -0.5 : 0.5) }); }
      { const [bx, bz] = P(w * 0.27, -d * 0.2 + 0.1); world.addBox(bx, bz, 2.0, 0.34, ry, fy, fy + 1.55); }
      const [ax, az] = P(w / 2 - 0.6, d / 2 - 0.6); B.box(M.wood, 0.3, 0.12, 0.3, ax, fy, az, { ry, c: DARK }); B.box(M.glow, 0.24, 0.4, 0.24, ax, fy + 0.12, az, { ry, c: 0xffa040 });
    }
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const [px, pz] = P(sx * w / 2, sz * d / 2); B.box(M.wood, 0.24, h, 0.24, px, y + base, pz, { ry, c: DARK }); }
    for (const sz of [-1, 1]) { const [bx, bz] = P(0, sz * (d / 2 + 0.02)); B.box(M.woodH, w + 0.2, 0.2, 0.12, bx, y + base + h - 0.2, bz, { ry, c: DARK }); B.box(M.woodH, w + 0.2, 0.16, 0.12, bx, y + base, bz, { ry, c: DARK }); }
    for (const sx of [-1, 1]) { const [bx, bz] = P(sx * (w / 2 + 0.02), 0); B.box(M.woodH, 0.12, 0.2, d + 0.2, bx, y + base + h - 0.2, bz, { ry, c: DARK }); }
    for (let i = 0; i < n; i++) {                                                                       // shoji screens, front + back (the middle bay stands open)
      if (i === mid) continue;
      const lx = -w / 2 + (i + 0.5) * (w / n);
      for (const sz of [-1, 1]) { const [sx_, sz_] = P(lx, sz * (d / 2 + 0.04)); B.box(M.shoji, w / n - 0.3, 1.9, 0.06, sx_, y + base + 0.12, sz_, { ry }); }
    }
    for (let i = 0; i <= n; i++) { const lx = -w / 2 + i * (w / n); for (const sz of [-1, 1]) { const [px, pz] = P(lx, sz * (d / 2 + 0.05)); B.box(M.wood, 0.14, h, 0.1, px, y + base, pz, { ry, c: DARK }); } }
    for (const sx of [-1, 1]) for (let i = 0; i < 4; i++) { const [px, pz] = P(sx * (w / 2 + 0.6), -d / 2 - 0.5 + i * (d + 1) / 3); B.box(M.wood, 0.16, h + 0.1, 0.16, px, y + base, pz, { ry, c: DARK }); }
    B.box(M.woodH, w + 2.4, 0.16, d + 2.4, x, y + base + h, z, { ry, c: 0x3a2a20 });
    B.geo(roof, curvedRoofGeo(w + over * 2, d + over * 2, roofH, { up, tile: roof.userData.tile, ridge: 0.5 }), [x, y + base + h + 0.14, z], [0, ry, 0], 1, roofC);
    B.box(M.flat, w * 0.52 + over, 0.22, 0.3, x, y + base + h + roofH, z, { ry, c: 0x2a3034 });
    return { y: y + base };
  };

  // ---- A: the gate path through the bamboo ---------------------------------------------
  for (let i = 0; i < 9; i++) { const z = 70 - i * 3.6; torii(pathX(z), z, Math.atan2(pathX(z + 1) - pathX(z - 1), 2) * -1); }
  for (let i = 0; i < 6; i++) { const z = 74 - i * 7.5, side = i % 2 ? 1 : -1; lantern(pathX(z) + side * 3.1, z, true); if (i % 2 === 0) lamp(pathX(z) + side * 3.1, world.height(pathX(z), z) + 1.6, z, 16, 11); }
  for (let z = 78; z > 37; z -= 1.15) {                                                               // stepping stones
    const x = pathX(z) + (R() - 0.5) * 0.7, y = world.height(x, z);
    B.cyl(M.rock, 0.42 + R() * 0.2, 0.46 + R() * 0.2, 0.1, x, y - 0.04, z, { c: R.pick([0x8a8a82, 0x9a9890, 0x7a7c76]), seg: 7, ry: R() * 3 });
  }

  // ---- B: pond, bridge, garden ------------------------------------------------------------
  const water = new THREE.Mesh(new THREE.CircleGeometry(POND.r + 1.2, 40), makeWater(shared, { deep: 0x0a2422, scale: 1.4, flow: [0.05, 0.03], alpha: 0.86 }));
  water.rotation.x = -Math.PI / 2; water.position.set(POND.x, -0.42, POND.z); root.add(water);
  {
    // arched bridge along z, from z=36 to z=12
    const z0 = 36, z1 = 12, n = 16, top = 1.75;
    for (let i = 0; i < n; i++) {
      const t0 = i / n, t1 = (i + 1) / n, za = z0 + (z1 - z0) * t0, zb = z0 + (z1 - z0) * t1;
      const ya = Math.sin(t0 * Math.PI) * top, yb = Math.sin(t1 * Math.PI) * top, ym = (ya + yb) / 2, len = Math.hypot(zb - za, yb - ya);
      B.box(M.woodH, 2.8, 0.16, len + 0.05, 0, ym - 0.02, (za + zb) / 2, { rx: Math.atan2(yb - ya, za - zb), c: 0x8a3a26 });
      world.addBox(0, (za + zb) / 2, 2.8, Math.abs(zb - za) + 0.02, 0, -1.5, ym + 0.1);
      for (const s of [-1, 1]) {
        B.box(M.flat, 0.09, 0.09, len + 0.05, s * 1.35, ym + 0.95, (za + zb) / 2, { rx: Math.atan2(yb - ya, za - zb), c: RED });
        if (i % 2 === 0) { B.box(M.flat, 0.13, 1.15, 0.13, s * 1.35, ya - 0.05, za, { c: RED }); B.geo(M.flat, new THREE.SphereGeometry(0.1, 8, 6), [s * 1.35, ya + 1.18, za], [0, 0, 0], [1, 1.3, 1], INK); }
      }
    }
    for (const s of [-1, 1]) { world.addBox(s * 1.45, 24, 0.2, 24, 0, -1, 3.2); for (const z of [z0, z1]) { B.box(M.flat, 0.2, 1.3, 0.2, s * 1.35, world.height(0, z) - 0.1, z, { c: RED }); } }
  }
  // lily pads, shore rocks
  for (let i = 0; i < 22; i++) { const a = R() * 6.28, r = 3 + R() * 7, x = POND.x + Math.cos(a) * r, z = POND.z + Math.sin(a) * r; if (Math.abs(x) < 2) continue; B.cyl(M.flat, 0.3 + R() * 0.25, 0.3, 0.02, x, -0.41, z, { c: R.pick([0x3a6a34, 0x4a7a3c]), seg: 9 }); if (R() < 0.35) B.geo(M.flat, new THREE.SphereGeometry(0.1, 6, 5), [x, -0.33, z], [0, 0, 0], [1, 0.7, 1], 0xf6c6d4); }
  const rocks = [];
  for (let i = 0; i < 26; i++) { const a = i / 26 * 6.28 + R() * 0.2, r = POND.r + 0.3 + R() * 1.5, x = POND.x + Math.cos(a) * r, z = POND.z + Math.sin(a) * r; if (Math.abs(x) < 2.4) continue; const s = 0.4 + R() * 0.8; rocks.push({ x, y: world.height(x, z) + s * 0.2, z, ry: R() * 6, s: [s, s * 0.7, s], c: R.pick([0x6c7068, 0x7c8078, 0x5c6460]) }); }
  // zen garden (west of the pond)
  {
    const gx = -27, gz = 22, gw = 15, gd = 12, y = world.height(gx, gz) + 0.02;
    B.box(M.raked, gw, 0.12, gd, gx, y - 0.04, gz, { c: 0xf0ebe0 });
    for (const [rx, rz, s] of [[-4, 2, 1.5], [-2.6, 3.2, 0.8], [3.5, -2.5, 1.2], [4.6, -1.6, 0.6], [0.5, 0.2, 0.9]]) {
      rocks.push({ x: gx + rx, y: y + s * 0.3, z: gz + rz, ry: R() * 6, s: [s, s * 0.85, s * 0.8], c: 0x62665e });
      B.cyl(M.flat, s * 1.25, s * 1.3, 0.05, gx + rx, y + 0.05, gz + rz, { c: 0x4a6a34, seg: 12 });
      world.addCyl(gx + rx, gz + rz, s * 0.8, y - 1, y + s);
    }
    for (const [wx, wz, ww, wd] of [[gx, gz - gd / 2 - 0.3, gw + 1.2, 0.5], [gx - gw / 2 - 0.3, gz, 0.5, gd + 1.2], [gx, gz + gd / 2 + 0.3, gw + 1.2, 0.5]]) {
      B.box(M.plaster, ww, 1.3, wd, wx, y - 0.2, wz, { c: 0xe6dec8, solid: true });
      B.box(M.kawara, ww + 0.3, 0.14, wd + 0.5, wx, y + 1.1, wz, { c: 0x56646a });
    }
    lantern(gx + 6.2, gz + 4.6, true, 0.9); lamp(gx + 6.2, y + 1.5, gz + 4.6, 10, 9);
  }
  // tea house east of the pond, houses of the hamlet
  const tea = house(22, 25, 7, 5.5, { ry: -0.25, roofC: 0x4e5c60, h: 2.6, roofH: 2.2 });
  lamp(20, tea.y + 1.8, 21, 18, 12);
  house(-24, -6, 9, 6.5, { ry: 0.2, roof: M.thatch, roofC: 0xa08a58, roofH: 3.6, up: 0.2, over: 1.2 });
  house(23, -10, 10, 7, { ry: -0.12, roof: M.thatch, roofC: 0x9a8454, roofH: 3.8, up: 0.2, over: 1.2 });
  house(-30, -20, 6, 5, { ry: 0.5, roofC: 0x56646a, roofH: 2.2, h: 2.5 });
  lamp(-19, 2.2, -1.5, 14, 11); lamp(17.5, 2.2, -5, 14, 11);
  lantern(-4.2, 9, true); lantern(4.2, 9, true); lantern(-4.2, 40, true); lantern(4.2, 40, false);

  // ---- C: steps and shrine precinct ---------------------------------------------------------
  for (let i = 0; i < 10; i++) { B.box(M.stone, 8.4, 0.3, 0.92, 0, 0.0 + i * 0.3, -24 - i * 0.9, { c: 0x9c9a90, solid: true }); }
  for (const s of [-1, 1]) { B.box(M.stone, 0.7, 4.2, 9.6, s * 4.6, -0.6, -28.2, { c: 0x8c8a80, solid: true }); B.box(M.stone, 30, 4.4, 1.2, s * 19.8, -1.0, -28.6, { c: 0x8a887e, solid: true }); lantern(s * 5.6, -22.2, true, 1.15); }
  torii(0, -21.2, 0, 1.5);
  lamp(0, 3.4, -22.5, 20, 14);
  // main hall
  {
    const x = 0, z = -56, y = 3;
    B.box(M.stone, 16, 1.0, 12.5, x, y, z, { c: 0x9a988e, solid: true });
    for (let i = 0; i < 3; i++) B.box(M.stone, 6, 0.33, 0.6, x, y + i * 0.33, z + 6.25 + (2 - i) * 0.6 + 0.3, { c: 0x9c9a90, solid: true });
    room(B, M, x, y + 1, z - 0.6, { w: 11.5, d: 8, h: 3.6, t: 0.3, mat: M.plaster, c: 0xece4d0, base: 0.04, doors: [{ side: 's', at: 0, w: 2.3, h: 2.7 }], floor: { mat: M.woodH, c: 0x6a4a30 }, ceil: { mat: M.woodH, c: 0x4a2a22 } });
    {                                             // inside: altar with the sacred mirror, drums, offerings
      const fy = y + 1.06, zb = z - 0.6 - 3.2;
      B.box(M.woodH, 3.6, 0.9, 1.0, x, fy, zb, { c: 0x7a1c16, solid: true }); B.box(M.woodH, 2.2, 0.5, 0.7, x, fy + 0.9, zb, { c: 0x8a2018 });
      B.cyl(M.metal, 0.46, 0.46, 0.05, x, fy + 1.55, zb + 0.1, { rx: Math.PI / 2, c: 0xe0c060, seg: 18 }); B.box(M.wood, 0.9, 0.12, 0.3, x, fy + 1.4, zb + 0.1, { c: 0x2a1a12 });
      for (const sx of [-1, 1]) {
        B.cyl(M.wood, 0.5, 0.5, 0.7, x + sx * 3.9, fy + 0.5, zb + 0.4, { rz: Math.PI / 2, c: 0x8a3a22, seg: 12 }); B.box(M.wood, 0.9, 0.5, 0.7, x + sx * 3.9, fy, zb + 0.4, { c: 0x2a1a12, solid: true });
        B.cyl(M.flat, 0.04, 0.04, 0.3, x + sx * 1.3, fy + 0.9, zb + 0.2, { c: 0xe8e0c8, seg: 5 }); B.geo(M.glow, new THREE.SphereGeometry(0.05, 5, 4), [x + sx * 1.3, fy + 1.26, zb + 0.2], [0, 0, 0], [1, 1.7, 1], 0xffb040);
        B.box(M.shoji, 0.05, 1.7, 2.2, x + sx * 5.4, fy, z + 0.4, {});
      }
      for (let i = 0; i < 6; i++) for (const sz of [-1, 1]) world.addCyl(x - 6.4 + i * 2.56, z - 0.6 + sz * 4.9, 0.24, y, y + 4.7);
      for (const sx of [-1, 1]) for (let i = 0; i < 3; i++) world.addCyl(x + sx * 6.4, z - 3.2 + i * 2.5, 0.24, y, y + 4.7);
    }
    for (let i = 0; i < 6; i++) for (const sz of [-1, 1]) B.cyl(M.flat, 0.2, 0.22, 3.7, x - 6.4 + i * 2.56, y + 1, z - 0.6 + sz * 4.9, { c: RED, seg: 10 });
    for (const sx of [-1, 1]) for (let i = 0; i < 3; i++) B.cyl(M.flat, 0.2, 0.22, 3.7, x + sx * 6.4, y + 1, z - 3.2 + i * 2.5, { c: RED, seg: 10 });
    for (let i = 0; i < 5; i++) if (i !== 2) B.box(M.shoji, 2.0, 2.6, 0.08, x - 4.6 + i * 2.3, y + 1.1, z + 3.46, {});
    B.box(M.woodH, 14.4, 0.3, 11.4, x, y + 4.6, z - 0.6, { c: RED });
    B.geo(M.kawara, curvedRoofGeo(18.5, 15.5, 4.4, { up: 1.25, tile: 1.6, ridge: 0.5, curve: 2.1 }), [x, y + 4.9, z - 0.6], [0, 0, 0], 1, 0x4a5a60);
    B.box(M.flat, 10.4, 0.4, 0.5, x, y + 9.25, z - 0.6, { c: 0x23292c });
    for (const sx of [-1, 1]) B.geo(M.metal, new THREE.ConeGeometry(0.22, 0.9, 6), [x + sx * 5.0, y + 9.9, z - 0.6], [0, 0, sx * -0.5], 1, 0xd9b23a);
    // offering box, rope with paper streamers
    B.box(M.woodH, 2.2, 0.8, 0.9, x - 2.56, y + 1, z + 5.3, { c: 0x4a3222, solid: true });
    B.cyl(M.flat, 0.09, 0.09, 6.2, x, y + 4.15, z + 4.5, { rz: Math.PI / 2, c: 0xd8c890, seg: 6 });
    for (let i = 0; i < 5; i++) B.box(M.cloth, 0.22, 0.5, 0.01, x - 2.4 + i * 1.2, y + 3.55, z + 4.5, { c: 0xffffff });
    lamp(x - 3, y + 2.6, z + 5.5, 24, 16); lamp(x + 3, y + 2.6, z + 5.5, 24, 16);
    for (const sx of [-1, 1]) { lantern(sx * 5.5, -44, true, 1.2); lantern(sx * 5.5, -36, true, 1.0); }
  }
  // five-storey pagoda against the sunset
  {
    const x = -22, z = -50; let y = 3, w = 6.2;
    B.box(M.stone, 8.2, 0.8, 8.2, x, y, z, { c: 0x9a988e, solid: true }); y += 0.8;
    for (let i = 0; i < 5; i++) {
      if (i === 0) {                             // the ground floor of the pagoda can be entered
        room(B, M, x, y, z, { w, d: w, h: 2.1, t: 0.3, mat: M.plaster, c: 0xece4d0, base: 0.05, doors: [{ side: 's', at: 0, w: 1.8, h: 1.95 }, { side: 'e', at: 0, w: 1.8, h: 1.95 }], floor: { mat: M.woodH, c: 0x5a4030 }, ceil: { mat: M.woodH, c: 0x3a2a20 } });
        B.cyl(M.flat, 0.3, 0.3, 2.1, x, y, z, { c: RED, seg: 10, solid: true });
        steps(B, M, x, z + 4.1, 0, y, 2, { w: 2.4, rise: 0.4, run: 0.5, c: 0x9c9a90 }); steps(B, M, x + 4.1, z, Math.PI / 2, y, 2, { w: 2.4, rise: 0.4, run: 0.5, c: 0x9c9a90 });
        B.box(M.woodH, 1.2, 0.6, 0.5, x - 1.6, y + 0.06, z - 2.2, { c: 0x7a1c16, solid: true }); B.geo(M.metal, new THREE.SphereGeometry(0.22, 8, 6), [x - 1.6, y + 0.9, z - 2.2], [0, 0, 0], [1, 1.2, 1], 0xd9b23a);
      } else B.box(M.plaster, w, 2.1, w, x, y, z, { c: 0xece4d0 });
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) B.box(M.flat, 0.22, 2.1, 0.22, x + sx * w / 2, y, z + sz * w / 2, { c: RED });
      B.box(M.flat, w + 0.15, 0.2, w + 0.15, x, y + 1.9, z, { c: RED });
      for (const s of [-1, 1]) { if (i === 0 && s === 1) continue; B.box(M.shoji, w * 0.34, 1.3, 0.06, x, y + 0.35, z + s * (w / 2 + 0.03), {}); }
      B.geo(M.kawara, curvedRoofGeo(w + 3.4, w + 3.4, 1.25, { up: 0.75, tile: 1.6, ridge: 0.02, curve: 1.9 }), [x, y + 2.1, z], [0, 0, 0], 1, 0x48585e);
      y += 2.95; w *= 0.84;
    }
    B.cyl(M.metal, 0.07, 0.1, 3.6, x, y - 0.4, z, { c: 0xd9b23a, seg: 6 });
    for (let i = 0; i < 6; i++) B.cyl(M.metal, 0.34 - i * 0.035, 0.34 - i * 0.035, 0.06, x, y + 0.5 + i * 0.38, z, { c: 0xd9b23a, seg: 10 });
  }
  const extraFoes = [], extraPicks = [];
  { // the shrine's storehouse (kura), white with a heavy roof
    const x = 27.5, z = -50, y = 3;
    room(B, M, x, y, z, { w: 6, d: 5, h: 3.2, t: 0.4, mat: M.plaster, c: 0xf0ece0, base: 0.4, doors: [{ side: 'w', at: 0, w: 1.7, h: 2.2 }], floor: { mat: M.woodH, c: 0x5a4030 }, ceil: { mat: M.woodH, c: 0x3a2a20 } });
    B.geo(M.kawara, curvedRoofGeo(8.2, 7.2, 2.3, { up: 0.5, tile: 1.6, ridge: 0.5 }), [x, y + 3.4, z], [0, 0, 0], 1, 0x48585e);
    B.box(M.woodH, 0.14, 2.2, 1.6, x - 3.3, y, z - 1.7, { c: 0x2a2018 });                           // the heavy door, slid open
    shelf(B, M, x + 2.3, y + 0.06, z, -Math.PI / 2, 3.6, 2.2, { goods: [0x8a1c1c, 0x1a1a1e, 0xd9b23a] }); shelf(B, M, x - 0.4, y + 0.06, z - 1.85, 0, 3, 2.0, { goods: [0xc8b070, 0x5a3a2a] });
    for (const [bx, bz] of [[x - 1.6, z + 1.5], [x - 0.6, z + 1.6], [x - 1.1, z + 1.55]]) B.cyl(M.thatch, 0.3, 0.3, 0.7, bx, y + 0.36 + (bx === x - 1.1 ? 0.55 : 0), bz, { rz: Math.PI / 2, c: 0xc8b070, seg: 10 });
    world.addBox(x - 1.1, z + 1.55, 1.9, 0.7, 0, y, y + 1.3);
    extraFoes.push(['ronin', x - 0.6, z - 0.2, { y: 3.6, patrol: false, yaw: -1.57 }]); extraPicks.push([x + 0.6, z + 1.4, 3.6]);
  }
  { // bell tower: four posts, a great bronze bell
    const x = -17, z = -66, y = 3;
    B.box(M.stone, 4.6, 0.4, 4.6, x, y - 0.02, z, { c: 0x9a988e, solid: true });
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) { B.cyl(M.flat, 0.18, 0.22, 3.8, x + sx * 1.6, y + 0.38, z + sz * 1.6, { c: RED, seg: 10 }); world.addCyl(x + sx * 1.6, z + sz * 1.6, 0.26, y, y + 4.2); }
    B.geo(M.kawara, curvedRoofGeo(6.4, 6.4, 2.0, { up: 0.7, tile: 1.6, ridge: 0.3 }), [x, y + 4.2, z], [0, 0, 0], 1, 0x48585e);
    B.cyl(M.metal, 0.5, 0.62, 1.2, x, y + 2.2, z, { c: 0x4a6a5a, seg: 14 }); B.cyl(M.metal, 0.05, 0.05, 0.8, x, y + 3.4, z, { c: 0x2a2a2e, seg: 5 });
    B.cyl(M.wood, 0.09, 0.09, 2.0, x + 1.3, y + 2.7, z, { rz: Math.PI / 2, c: 0x6a4a30, seg: 6 });
    extraFoes.push(['ninja', x + 0.3, z + 2.6, { y: 3.6, ambush: 10 }], ['ninja', -20.4, -48, { y: 4.2, ambush: 8 }]);
  }
  // sacred tree with rope, basin
  B.cyl(M.wood, 0.7, 0.95, 6, 20, 3, -44, { c: 0x4a3828, solid: true, seg: 9 });
  B.cyl(M.flat, 0.9, 0.9, 0.16, 20, 4.4, -44, { c: 0xd8c890, seg: 10 });
  for (let i = 0; i < 6; i++) B.box(M.cloth, 0.2, 0.45, 0.01, 20 + Math.cos(i * 1.05) * 0.93, 3.9, -44 + Math.sin(i * 1.05) * 0.93, { ry: -i * 1.05 + Math.PI / 2, c: 0xffffff });

  // ---- D: the dojo compound east of the hamlet, a hermitage in the western bamboo ---------------
  {
    house(50, -6, 13, 8, { ry: Math.PI / 2, roofC: 0x4a5a60, h: 3.0, roofH: 3.0, bare: true });
    const y0 = world.height(50, -6) + 0.56;
    for (const [lx, lz] of [[52.6, -10], [52.6, -6], [52.6, -2]]) { B.box(M.woodH, 0.5, 1.5, 1.9, lx, y0, lz, { c: 0x3a2618, solid: true }); for (let k = 0; k < 4; k++) B.box(M.metal, 0.05, 1.2, 0.05, lx - 0.3, y0 + 0.25, lz - 0.6 + k * 0.4, { rx: 0.1, c: 0xc8ccd0 }); }
    for (const [lx, lz] of [[48, -9.5], [48.4, -2.5]]) { B.cyl(M.thatch, 0.26, 0.3, 1.1, lx, y0 + 0.3, lz, { c: 0xc8b070, seg: 8 }); B.cyl(M.wood, 0.06, 0.06, 1.9, lx, y0, lz, { c: DARK, seg: 6 }); B.geo(M.thatch, new THREE.SphereGeometry(0.2, 8, 6), [lx, y0 + 1.6, lz], [0, 0, 0], 1, 0xc8b070); world.addCyl(lx, lz, 0.3, y0, y0 + 1.8); }
    const wall = (ax, az, bx, bz) => { const L = Math.hypot(bx - ax, bz - az), ry = Math.atan2(-(bz - az), bx - ax), mx = (ax + bx) / 2, mz = (az + bz) / 2, y = Math.min(world.height(ax, az), world.height(bx, bz), world.height(mx, mz)) - 0.6;
      B.box(M.plaster, L, 2.7, 0.45, mx, y, mz, { ry, c: 0xe4dcc8, solid: true }); B.box(M.stone, L + 0.1, 0.9, 0.55, mx, y, mz, { ry, c: 0x8c8a80 }); B.box(M.kawara, L + 0.3, 0.16, 0.95, mx, y + 2.7, mz, { ry, c: 0x56646a }); };
    wall(38.5, 11.5, 60, 11.5); wall(38.5, -22.5, 60, -22.5); wall(60, -22.5, 60, 11.5); wall(38.5, -22.5, 38.5, -9.5); wall(38.5, -2.5, 38.5, 11.5);
    torii(38.5, -6, Math.PI / 2, 1.1); lantern(36.6, -9.2, true, 1.0); lantern(36.6, -2.8, true, 1.0);
    for (const [px, pz] of [[42.5, 3], [44.5, 6], [42.5, 8.5], [56, 6.5]]) { const y = world.height(px, pz); B.cyl(M.wood, 0.11, 0.13, 1.7, px, y - 0.2, pz, { c: 0x6a4a30, seg: 7, solid: true }); B.cyl(M.thatch, 0.16, 0.16, 0.5, px, y + 0.95, pz, { c: 0xc8b070, seg: 8 }); }
    for (const [px, pz] of [[57, -18.5], [53.5, -19.5]]) { const y = world.height(px, pz); B.cyl(M.thatch, 0.7, 0.7, 0.16, px, y + 0.7, pz, { rx: Math.PI / 2 - 0.15, c: 0xd8c890, seg: 16 }); B.cyl(M.flat, 0.24, 0.24, 0.18, px, y + 1.3, pz, { rx: Math.PI / 2 - 0.15, c: 0xb01c1c, seg: 12 }); B.box(M.wood, 0.1, 1.5, 0.1, px, y - 0.1, pz + 0.3, { rx: 0.3, c: DARK }); world.addCyl(px, pz, 0.6, y - 1, y + 2.2); }
    for (const [px, pz, s] of [[45, -17, 1.4], [42, -14.5, 1.0], [56, 2.5, 1.2]]) { const y = world.height(px, pz); B.geo(M.rock, rockGeo(4, 1), [px, y + s * 0.3, pz], [0, px, 0], [s, s * 0.8, s], 0x7c7e78); world.addCyl(px, pz, s * 0.8, y - 1, y + s * 0.9); }
    house(-50, 24, 6, 5, { ry: 0.3, roof: M.thatch, roofC: 0x9a8454, roofH: 2.8, up: 0.2, over: 1.1, h: 2.5 });
    lantern(-44.5, 21.5, true, 1.0); torii(-41, 24.5, Math.PI / 2 + 0.2, 0.8);
    for (const [px, pz, s] of [[-55, 19, 1.5], [-46, 30, 1.1], [-53.5, 30.5, 0.9]]) { const y = world.height(px, pz); B.geo(M.rock, rockGeo(6, 1), [px, y + s * 0.3, pz], [0, pz, 0], [s, s * 0.8, s], 0x70746c); world.addCyl(px, pz, s * 0.8, y - 1, y + s * 0.9); }
  }

  { // people of the valley who take no part in the fight: wandering flute monks (komuso) and geisha under their umbrellas
    let q = 0; const rq = () => (q = (q + 0.381) % 1);
    const figure = (look, x, z, yaw, pose, over) => {
      const f = makeHumanoid(M, { ...lookFor(look, rq), ...over }), y = world.height(x, z);
      f.group.position.set(x, y, z); f.group.rotation.y = yaw; pose(f); root.add(f.group); world.addCyl(x, z, 0.4, y - 2, y + 1.9);
    };
    const flute = (f) => { f.armR.rotation.x = -0.98; f.armR.rotation.z = 0.45; f.armL.rotation.x = -1.1; f.armL.rotation.z = -0.5; };
    const stroll = (f) => { f.armR.rotation.x = -0.71; f.armR.rotation.z = 0.17; f.armL.rotation.x = -0.32; f.armL.rotation.z = -0.12; f.legL.rotation.x = 0.1; f.legR.rotation.x = -0.1; };
    figure('komuso', pathX(62.5) + 2.6, 62.5, -1.2, flute); figure('komuso', -45.6, 23.6, 1.5, flute); figure('komuso', -7.5, -37.5, 0.5, flute);
    figure('geisha', 3.1, 42.8, 0.3, stroll); figure('geisha', 17.4, 29.2, -1.6, stroll); figure('geisha', 33.5, -4.6, -1.3, stroll);
    figure('geisha', -18.2, 19.6, -1.5, stroll, { shirt: 0xf4f0ea, robe: 0xf4f0ea, sleeve: 0xf4f0ea, pants: 0xf4f0ea, hem: 0xc8321c, accent: 0xe8e0d0, cord: 0xc8321c, trim: 0xe8a8a0, hat: 'wataboshi', face: [], umbrella: 0xe6e0d0, umbrella2: 0x55504a });
  }

  // ---- vegetation ------------------------------------------------------------------------------
  const clearing = (x, z) => {
    if (x > 34 && x < 62 && z > -25 && z < 14) return true;                                            // dojo compound
    if (x < -36 && x > -59 && z > 16 && z < 33) return true;                                           // hermitage
    if (Math.abs(x - pathX(z)) < 2.7) return true;
    if (z < -29 && Math.abs(x) < 33 && z > -72) return true;                                           // shrine precinct
    if (z > -29 && z < 9 && Math.abs(x) < 36) return true;                                             // hamlet
    if (z >= 9 && z < 38 && Math.abs(x) < 38) return true;                                             // pond + gardens
    return false;
  };
  const stalks = [], tops = [];
  for (let i = 0; i < 40000 && stalks.length < 2300; i++) {
    const x = (R() - 0.5) * 150, z = -95 + R() * 195;
    if (clearing(x, z)) continue;
    const near = Math.abs(x - pathX(z)) < 16 || (Math.abs(x) < 50 && z < 40);
    if (!near && R() < 0.55) continue;
    if (fbm(x * 0.09, z * 0.09, 2, 8) < 0.38) continue;
    const y = world.height(x, z) - 0.2, s = 0.75 + R() * 0.6, lean = (R() - 0.5) * 0.12;
    stalks.push({ x, y, z, ry: R() * 6.28, rz: lean, rx: (R() - 0.5) * 0.1, s: [0.8 + R() * 0.7, s, 0.8 + R() * 0.7], c: R.pick([0xb8d48a, 0x9cc070, 0xc8d898, 0x8ab060]) });
    tops.push({ x, y, z, ry: R() * 6.28, rz: lean, s, c: R.pick([0xffffff, 0xe0f0c0, 0xc8e0a0]) });
    if (Math.abs(x) < 65 && z > -78 && z < 81) world.addCyl(x, z, 0.13, y - 1, y + 12);
  }
  const stalkGeo = new THREE.CylinderGeometry(0.06, 0.085, 13, 6, 1, true); stalkGeo.translate(0, 6.5, 0); paint(stalkGeo, 0xffffff);
  { const uv = stalkGeo.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setY(i, uv.getY(i) * 14); }
  const cards = [];
  for (let i = 0; i < 7; i++) {
    const g = new THREE.PlaneGeometry(3.0, 2.6); g.rotateX(-0.5 - (i % 3) * 0.25);
    g.rotateY(i * 2.4); g.translate(Math.sin(i * 2.4) * 0.7, 6.2 + i * 1.05, Math.cos(i * 2.4) * 0.7);
    cards.push(xf(g));
  }
  root.add(instanced(stalkGeo, windify(M.bamboo.clone(), shared, 0.55, 13, 0.9), stalks));
  root.add(instanced(merge(cards), windify(M.bambooLeaf.clone(), shared, 0.55, 13, 0.9), tops));
  // cherry, maple and pine
  const tree = (geo, list) => root.add(instanced(geo, M.rock, list));
  const spot = (x, z, s, col = true) => { if (col) world.addCyl(x, z, 0.4 * s, -2, 8); return { x, y: world.height(x, z) - 0.1, z, ry: R() * 6.28, s }; };
  tree(blobTreeGeo({ leaf: [0xffc9d6, 0xffe2e8, 0xf9aec2], h: 4.6, spread: 3.2, blobs: 11, seed: 3 }), [spot(-13, 33, 1.1), spot(12, 14, 1.0), spot(15.5, 34, 1.25), spot(-14, -37, 1.3), spot(13, -39, 1.2), spot(-9, 6, 0.9)]);
  tree(blobTreeGeo({ leaf: [0xc8401c, 0xe0702a, 0xa82a18], h: 4.2, spread: 2.8, blobs: 9, seed: 7 }), [spot(-17, 11, 1.0), spot(30, 16, 1.2), spot(-33, -30, 1.1), spot(27, -36, 1.2), spot(31, 2, 0.9)]);
  tree(blobTreeGeo({ leaf: [0x23412a, 0x2f5234, 0x1c3824], h: 5.2, spread: 2.6, blobs: 8, seed: 11, trunk: 0x2a2018 }), [spot(-34, 30, 1.2), spot(34, 30, 1.1), spot(-36, 6, 1.0), spot(36, -22, 1.2), spot(26, -62, 1.3), spot(-30, -64, 1.2), spot(20, -44, 1.6, false)]);
  root.add(instanced(rockGeo(5, 1), M.rock, rocks));
  const tufts = [], bushes = [];
  for (let i = 0; i < 9000; i++) {
    const x = (R() - 0.5) * 126, z = -76 + R() * 156;
    if (Math.abs(x - pathX(z)) < 1.5 || (z < -30 && Math.abs(x) < 33) || Math.hypot(x - POND.x, z - POND.z) < POND.r || (Math.abs(x + 27) < 8 && Math.abs(z - 22) < 6.5)) continue;
    tufts.push({ x, y: world.height(x, z), z, ry: R() * 6.28, s: [0.4 + R() * 0.5, 0.25 + R() * 0.5, 0.4 + R() * 0.5], c: R.pick([0x7a9a4a, 0x5a8038, 0x8aa858, 0x4a6a30]) });
  }
  root.add(instanced(tuftGeo(6, 0x7a8a5a, 0xffffff), windify(M.flat2.clone(), shared, 0.2, 1, 1.6), tufts, { cast: false }));
  for (let i = 0; i < 90; i++) { const x = (R() - 0.5) * 80, z = -70 + R() * 110; if (clearing(x, z) && !(Math.abs(x) > 28) && !(z > 9 && z < 38 && Math.abs(x) > 14)) continue; if (Math.hypot(x - POND.x, z - POND.z) < POND.r + 1) continue; const s = 0.6 + R() * 0.7; bushes.push({ x, y: world.height(x, z) + 0.2, z, ry: R() * 6, s: [s * 1.3, s * 0.8, s * 1.3], c: R.pick([0x35502c, 0x44663a, 0xb8506a, 0x2c4426]) }); }
  root.add(instanced(new THREE.IcosahedronGeometry(1, 1), M.rock, bushes));
  // distant hills and one great snow-capped mountain behind the shrine
  for (let i = 0; i < 16; i++) { const a = i / 16 * 6.283 + 0.2, r = 260 + (i % 3) * 60; B.geo(M.rock, new THREE.ConeGeometry(110 + (i % 4) * 30, 60 + (i * 37) % 70, 7), [Math.cos(a) * r, 10, Math.sin(a) * r], [0, i, 0], 1, 0x26343a); }
  B.geo(M.rock, new THREE.ConeGeometry(260, 250, 20), [-380, 60, -640], [0, 0, 0], 1, 0x2e3a52);
  B.geo(M.rock, new THREE.ConeGeometry(88, 86, 20), [-380, 144.5, -640], [0, 0, 0], 1, 0xf0e8ee);

  // ---- atmosphere ----------------------------------------------------------------------------------
  root.add(makeAmbient(shared, { count: 520, box: 30, boxY: 16, size: 0.085, colorA: 0xffc4d6, colorB: 0xfff0f4, petal: true, alpha: 0.95, fall: 0.55, wind: [0.5, 0, -0.25], flutter: 1.3 }));
  root.add(makeAmbient(shared, { count: 130, box: 36, boxY: 5, size: 0.11, colorA: 0xd8ff7a, colorB: 0xfff0a0, additive: true, blink: true, alpha: 1, bright: 2.6, fall: 0, wind: [0.05, 0, 0.03], flutter: 1.6 }));

  { // places to climb and to hide: a watch platform in the dojo court (up its ladder), a tea hut whose door is a crawl-in hatch
    const clearAt = (x, z, r) => { world.cyls = world.cyls.filter((c) => Math.hypot(c.x - x, c.z - z) > r + c.r); };
    clearAt(50, -18, 4); stand(B, M, 50, world.height(50, -18.3), -18.3, 0, { c: 0x6a4630, roof: 0x4e5c60 });
    clearAt(31, 30, 4); den(B, M, 31, world.height(31, 30.1) + 0.02, 30.1, 0, { mat: M.plaster, c: 0xe6dec8, floor: { mat: M.woodH, c: 0xb8a070 } }); B.box(M.thatch, 4.6, 0.5, 4.4, 31, world.height(31, 30.1) + 1.97, 30.1, { c: 0xa08a58 });
    extraPicks.push([31, 30.3, 0, 0.6]);
  }
  const enemies = [
    ['ninja', 4, 58, { ambush: 13 }], ['ninja', -5, 51, { ambush: 13 }], ['ninja', 5.5, 45, { ambush: 12 }],
    ['ronin', -8, 39, { yaw: 0 }], ['archer', 0, 23.5, { y: 3, static: true, yaw: 0 }], ['ninja', 14, 19, { ambush: 14 }],
    ['ronin', -20, 14, { patrol: true }], ['archer', 19.6, 21.4, { y: 2, static: true, yaw: 2.5 }],
    ['ronin', -14, -4, {}], ['ronin', 14, -9, { patrol: true }], ['ninja', -8, -16, { ambush: 15 }], ['ninja', 9, -19, { ambush: 15 }],
    ['archer', -3, -33.5, { y: 4, static: true, yaw: 0 }], ['archer', 3, -33.5, { y: 4, static: true, yaw: 0 }],
    ['ronin', -9, -42, {}], ['ronin', 9, -42, {}], ['japanBoss', 0, -47.5, { yaw: 0, patrol: false }],
    ['ronin', 43, -4, {}], ['ronin', 50.5, -7, { patrol: false, yaw: -1.57 }], ['ninja', 55, 5, { ambush: 12 }], ['archer', 46, 7, {}],
    ['ninja', -50, 24, { ambush: 9 }], ['ronin', -45, 27, {}], ['ninja', -3.6, -57.6, { y: 4.3, ambush: 9 }], ['ronin', 23, -10.5, { patrol: false }],
  ];
  const cake = merge([gSph(0.14, 0xf6f2e8, [0, 0, 0], [1, 0.8, 1]), gBox(0.18, 0.1, 0.03, 0x1c2a1c, [0, -0.04, 0.12]), gCyl(0.2, 0.2, 0.02, 0x8a6a3a, [0, -0.12, 0], [0, 0, 0], 1, 8)]);
  let mt = 0;
  return {
    env: {
      sunDir: [-0.5, 0.2, -0.84], sunColor: 0xff8a50, sunLight: 0xffa878, sunIntensity: 3.4, sunSize: 0.0012,
      skyTop: 0x1c2c66, skyHorizon: 0xf68a62, skyGround: 0x5a4a5a, haze: 0.5,
      fogColor: 0x8f6e80, fogDensity: 0.0078, hemiSky: 0x7f92d8, hemiGround: 0x3a3440, hemiIntensity: 1.9, envIntensity: 0.7,
      cloudCover: 0.52, cloudScale: 0.4, cloudLit: 0xffa888, cloudShade: 0x5a4a72, stars: 0.45, moonDir: [0.55, 0.6, 0.5],
      bloom: 0.55, bloomRadius: 0.75, bloomThreshold: 1.15, rays: 0.55, rayThreshold: 1.5, exposure: 1.2,
      saturation: 1.12, contrast: 1.06, vignette: 0.42, tintHi: 0xffeedd, tintLo: 0xdce4ff, shadowRange: 70,
    },
    spawn: { x: 0.3, z: 76.5, yaw: 0 },
    vista: { c: [-1, 3, 22], r: 15, h: 9.5, a: 1.2, speed: 0.03 },   // circles above the pond, clear of the bamboo
    enemies: enemies.concat(extraFoes), pickups: [[-2.5, 41], [18, 24, 2], [-23, -1.5, 2], [0, -30.5, 4], [14, -52, 4], [3.8, -58.6, 4.3], [50, -11, 1.5], [-51, 25, 1.5]].concat(extraPicks),
    dust: [0.42, 0.4, 0.34], water: [[POND.x, POND.z, 26]], heroLight: 70,
    makePickup: () => new THREE.Mesh(cake, M.flat),
    update(dt, t, g) {
      mt -= dt;
      if (mt <= 0) {                                                   // ground mist
        mt = 0.1;
        const p = g.gfx.camera.position, x = p.x + (Math.random() - 0.5) * 60, z = p.z + (Math.random() - 0.5) * 60;
        g.gfx.soft.spawn(x, world.height(x, z) + 0.3 + Math.random() * 0.6, z, 0.25, 0.02, -0.12, { life: 7 + Math.random() * 4, s0: 2.5, s1: 6, r: 0.72, g: 0.62, b: 0.74, a: 0.06, drag: 0 });
      }
    },
  };
}
