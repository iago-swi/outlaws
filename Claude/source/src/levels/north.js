// Chapter V - a Norwegian fjord in winter, under the northern lights.
import * as THREE from 'three';
import { Heightfield, prismGeo, rockGeo } from '../build.js';
import { makeAmbient, makeWater, windify } from '../gfx.js';
import { instanced, pineGeo, ship, brazier, barrel, gBox, gCyl, gCone, gSph, xf, merge } from '../props.js';
import { fbm, ridged, smooth } from '../util.js';

export const north = {
  id: 'north', theme: 'theme-north', chapter: 'Chapter V', title: 'Jarnvik', place: 'Jarnvik · Norway · winter of 985',
  story: 'You sail home through the ice and find another jarl\'s shields hanging on your hall. His raiders hold the village and the gate. Land under the northern lights, fight through the snow, and take back the high seat.',
  weapon: 'axe', weaponName: 'Throwing axes & sword', alt: 'right mouse — sword',
  heroes: [
    { look: 'erik', name: 'Erik the Red', who: 'Outlaw and founder of Greenland', trait: 'Hot temper', effect: 'throws axes much faster', mods: { fire: 0.6 }, sleeve: 0x3a5a3a, cuff: 0x5a4632 },
    { look: 'leif', name: 'Leif Erikson', who: 'Leif the Lucky, who sailed to Vinland', trait: 'The Lucky', effect: 'takes 30% less damage', mods: { armor: 0.7 }, sleeve: 0x9a9fa6, cuff: 0x1c4a8a },
    { look: 'ragnar', name: 'Ragnar Lothbrok', who: 'Legendary sea-king and raider', trait: 'Raider', effect: 'faster, harder sword blows', mods: { melee: 0.75, meleeDmg: 1.7, reach: 0.4 }, sleeve: 0x4a3a2a, cuff: 0x3a3028 },
  ],
  keys: '<kbd>W A S D</kbd> move &nbsp; <kbd>Shift</kbd> run &nbsp; <kbd>Space</kbd> jump<br><kbd>Left mouse</kbd> throw an axe &nbsp; <kbd>Right mouse</kbd> sword cut',
  foes: 'raiders remain', foesNone: 'The hall is yours', bossName: 'Jarl Hrafn the Grey', bossDown: 'The grey jarl has fallen', pickupText: 'Mead  +35',
  deadTitle: 'Valhalla', deadSub: 'The valkyries lift you from the snow.', clearTitle: 'The high seat is yours',
  build,
};

const TIMBER = 0x6a4a30, DARKT = 0x4a3220, SNOW = 0xe9f1fa;

function dPoly(pts, x, z) {
  let best = 1e9;
  for (let i = 0; i < pts.length - 1; i++) {
    const ax = pts[i][0], az = pts[i][1], vx = pts[i + 1][0] - ax, vz = pts[i + 1][1] - az;
    const t = Math.max(0, Math.min(1, ((x - ax) * vx + (z - az) * vz) / (vx * vx + vz * vz)));
    best = Math.min(best, Math.hypot(x - ax - vx * t, z - az - vz * t));
  }
  return best;
}

function build({ game, gfx, world, B, M, root, rand, shared }) {
  const R = rand;
  const PATH = [[2, 58], [0, 40], [-4, 22], [0, 2], [0, -24], [0, -40]];
  const SKERRIES = [[-55, 150, 26, 9], [75, 190, 34, 14], [15, 270, 30, 11], [-120, 240, 24, 8]];
  // ---- terrain: snowfield sloping to the fjord, mountains on three sides ---------------
  const hf = new Heightfield(1200, 380, (x, z) => {
    let base = 3.2 + (30 - z) * 0.045 + (fbm(x * 0.025, z * 0.025, 4, 12) - 0.5) * 3.2 * (1 - (1 - smooth(2, 8, dPoly(PATH, x, z))) * 0.8);
    base += 5 * (1 - smooth(20, 40, Math.hypot(x, z + 52)));                               // rise of the jarl's hall
    const sea = smooth(56, 86, z);
    base = base * (1 - sea) - 7.5 * sea;
    const r = Math.hypot(x * 0.95, z > 0 ? z * 0.34 : z * 0.9);
    const m = smooth(98, 320, r);
    let h = base + m * (34 + ridged(x * 0.0044 + 11, z * 0.0044 + 2, 5, 9) * 330) + smooth(86, 150, r) * 15 * fbm(x * 0.02 + 3, z * 0.02, 3, 4);
    for (const [ix, iz, rr, ht] of SKERRIES) h = Math.max(h, -7.5 + (ht + 7.5) * (1 - smooth(rr * 0.25, rr, Math.hypot(x - ix, z - iz))));
    return h;
  });
  world.height = (x, z) => hf.h(x, z);
  world.bounds = { x0: -96, x1: 96, z0: -84, z1: 70 };
  world.maxSlope = 0.95; world.waterY = -0.8;
  const cSnow = new THREE.Color(SNOW), cSnow2 = new THREE.Color(0xcfdcec), cRock = new THREE.Color(0x4a505a), cRock2 = new THREE.Color(0x6a707a), cShore = new THREE.Color(0x565c66),
    cPath = new THREE.Color(0xb9c4d2), cBed = new THREE.Color(0x0c1c2c), tmp = new THREE.Color(), tmp2 = new THREE.Color();
  root.add(hf.mesh(M.ground, (x, z, h, ny) => {
    if (h < -0.2) return tmp.copy(cShore).lerp(cBed, smooth(-0.2, -3, h));
    const n = fbm(x * 0.04, z * 0.04, 3, 6);
    tmp.copy(cSnow).lerp(cSnow2, n);
    tmp.lerp(cPath, (1 - smooth(0.8, 2.6, dPoly(PATH, x, z))) * 0.7);
    tmp.lerp(cShore, 1 - smooth(0.2, 1.3, h));
    tmp.lerp(tmp2.copy(cRock).lerp(cRock2, n), 1 - smooth(0.6, 0.8, ny));
    return tmp;
  }));
  const sea = new THREE.Mesh(new THREE.PlaneGeometry(3000, 3000), makeWater(shared, { deep: 0x06141f, scale: 0.4, flow: [0.06, 0.1], alpha: 0.86 }));
  sea.rotation.x = -Math.PI / 2; root.add(sea);
  for (let i = 0; i < 46; i++) {                                                             // ice floes
    const x = (R() - 0.5) * 260, z = 68 + R() * 150, s = 1.5 + R() * R() * 7;
    if (world.height(x, z) > -1) continue;
    B.cyl(M.flat, s, s * 0.94, 0.22, x, -0.08, z, { c: R.pick([0xdfeaf6, 0xc9d8ea, 0xeef4fb]), seg: 5 + Math.floor(R() * 3), ry: R() * 3 });
  }

  // ---- buildings --------------------------------------------------------------------------
  const lights = [], fires = [], smokes = [];
  const torch = (x, y, z, i = 26, d = 15) => { const l = new THREE.PointLight(0xff9a48, i, d, 1.7); l.position.set(x, y, z); root.add(l); lights.push({ l, i, ph: R() * 9 }); };
  const frame = (x, z, ry) => { const c = Math.cos(ry), s = Math.sin(ry); return (lx, lz) => [x + lx * c + lz * s, z - lx * s + lz * c]; };
  /** Timber longhouse with a steep snow-laden roof; long axis = local Z, door on the +X side. */
  const longhouse = (x, z, ry, l = 15, w = 6.2, o = {}) => {
    const P = frame(x, z, ry), y = world.height(x, z) - 0.3, wall = o.wall ?? 2.1, rh = o.roof ?? 3.4;
    B.box(M.woodH, w, wall + 0.3, l, x, y, z, { ry, c: TIMBER, solid: true });
    B.geo(M.shingle, prismGeo(w + 1.6, rh, l + 1.2, 3), [x, y + wall + 0.3, z], [0, ry, 0], 1, SNOW);
    for (const e of [-1, 1]) {
      const [gx, gz] = P(0, e * (l / 2 + 0.02)); B.geo(M.woodH, prismGeo(w, rh - 0.4, 0.3, 2), [gx, y + wall + 0.3, gz], [0, ry, 0], 1, DARKT);
      for (const k of [-1, 1]) { const [cx, cz] = P(k * 0.55, e * (l / 2 + 0.55)); B.box(M.wood, 0.16, 2.6, 0.16, cx, y + wall + rh - 0.9, cz, { ry, rz: k * -0.5, c: DARKT }); }   // crossed gable boards
    }
    const [dx, dz] = P(w / 2 + 0.03, -l * 0.18); B.box(M.woodH, 0.1, 1.9, 1.2, dx, y + 0.3, dz, { ry, c: 0x2a1c12 });
    for (const zz of [0.12, 0.34]) { const [wx, wz] = P(w / 2 + 0.03, l * zz); B.geo(M.window, new THREE.BoxGeometry(0.07, 0.5, 0.7), [wx, y + 1.55, wz], [0, ry, 0]); }
    for (let i = 0; i < 3; i++) { const [sx, sz] = P(w / 2 + 0.06, -l * 0.42 + i * 0.95); B.geo(M.flat, new THREE.CylinderGeometry(0.36, 0.36, 0.05, 12), [sx, y + 1.45, sz], [0, ry, Math.PI / 2], 1, R.pick([0x8a1c1c, 0x1c4a7a, 0xc8a030, 0x2a5a2a])); }
    const [fx, fz] = P(0, l * 0.1); smokes.push([fx, y + wall + rh + 0.4, fz]);
    return { P, y };
  };
  const palisade = (x0, z0, x1, z1) => {
    const len = Math.hypot(x1 - x0, z1 - z0), n = Math.round(len / 0.46);
    for (let i = 0; i <= n; i++) { const t = i / n, x = x0 + (x1 - x0) * t + (R() - 0.5) * 0.08, z = z0 + (z1 - z0) * t + (R() - 0.5) * 0.08, y = world.height(x, z), h = 3.1 + R() * 0.5;
      B.cyl(M.wood, 0.21, 0.23, h, x, y - 0.3, z, { c: R.pick([0x6a4c30, 0x5a4028, 0x76583a]), seg: 6 }); B.geo(M.flat, new THREE.ConeGeometry(0.23, 0.5, 6), [x, y + h - 0.05, z], [0, 0, 0], 1, SNOW); }
    world.addBox((x0 + x1) / 2, (z0 + z1) / 2, len, 0.55, Math.atan2(-(z1 - z0), x1 - x0), -5, world.height((x0 + x1) / 2, (z0 + z1) / 2) + 3.2);
  };
  const runestone = (x, z, s = 1) => {
    const y = world.height(x, z);
    B.geo(M.rock, rockGeo(7, 1), [x, y + 1.2 * s, z], [0, R() * 3, 0.06], [0.75 * s, 2.2 * s, 0.32 * s], 0x6a707a);
    for (let i = 0; i < 7; i++) B.box(M.glow, 0.05, 0.2 + (i % 3) * 0.08, 0.02, x - 0.3 * s + (i % 4) * 0.2 * s, y + (0.9 + Math.floor(i / 4) * 0.7) * s, z + 0.33 * s, { rz: (i % 2 ? 0.5 : -0.4), c: 0x3ad8ff });
    world.addCyl(x, z, 0.6 * s, y - 1, y + 2.4 * s);
  };

  // village
  longhouse(-19, 30, 0.25); longhouse(18, 27, -0.3, 14); longhouse(-27, 9, 1.35, 12, 5.6); longhouse(27, 7, 1.75, 12, 5.6); longhouse(40, 38, 0.1, 10, 5.2);
  { // bonfire in the middle of the village
    const x = 0, z = 22, y = world.height(x, z);
    for (let i = 0; i < 7; i++) B.cyl(M.wood, 0.12, 0.14, 1.6, x, y + 0.1, z, { rz: 1.15, ry: i * 0.9, c: 0x2a1a10, seg: 5 });
    for (let i = 0; i < 10; i++) B.geo(M.rock, rockGeo(i, 0), [x + Math.cos(i * 0.63) * 1.15, y + 0.1, z + Math.sin(i * 0.63) * 1.15], [0, i, 0], 0.26, 0x6a707a);
    B.geo(M.glow, new THREE.ConeGeometry(0.5, 1.3, 7), [x, y + 0.9, z], [0, 0, 0], 1, 0xff7a20);
    fires.push([x, y + 1.0, z, 2.2]); torch(x, y + 1.6, z, 60, 22); world.addCyl(x, z, 1.1, y - 1, y + 1.4);
  }
  for (const [x, z] of [[-9, 34], [10, 14], [-12, 16]]) {                                  // fish-drying racks
    const y = world.height(x, z); for (const s of [-1, 1]) B.box(M.wood, 0.12, 2.2, 0.12, x + s * 1.3, y - 0.1, z, { c: DARKT }); B.box(M.wood, 2.8, 0.1, 0.1, x, y + 2.0, z, { c: DARKT });
    for (let i = 0; i < 6; i++) B.box(M.flat, 0.12, 0.5, 0.04, x - 1 + i * 0.4, y + 1.48, z, { c: 0xb8b0a0, rz: (i % 2) * 0.1 });
    world.addBox(x, z, 2.8, 0.3, 0, y - 1, y + 2.1);
  }
  barrel(B, M, -14.6, world.height(-14.6, 25), 25); barrel(B, M, 21.5, world.height(21.5, 20), 20); barrel(B, M, 22.3, world.height(22.3, 20.6), 20.6);
  // palisade with a gate, torches on the gateposts
  palisade(-36, -3, -3.6, -3); palisade(3.6, -3, 36, -3); palisade(-36, -3, -40, -46); palisade(36, -3, 40, -46);
  for (const s of [-1, 1]) { const y = world.height(s * 4.2, -3); B.box(M.wood, 0.5, 4.6, 0.5, s * 4.2, y - 0.3, -3, { c: DARKT, solid: true }); fires.push(brazier(B, M, s * 5.6, y, 0.2, 1.1).concat(1)); }
  B.box(M.woodH, 9.4, 0.5, 0.6, 0, world.height(0, -3) + 4.2, -3, { c: DARKT });
  torch(0, world.height(0, 0) + 2.4, 0.6, 46, 18);
  // the jarl's great hall
  {
    const x = 0, z = -56, h = longhouse(x, z, Math.PI / 2, 27, 9.5, { wall: 2.9, roof: 5.2 }), y = h.y;
    for (const e of [-1, 1]) { B.box(M.wood, 0.4, 5.5, 0.4, e * 2.2, y, z + 5.1, { c: DARKT }); B.box(M.flat, 0.3, 0.5, 0.8, e * 2.2, y + 5.5, z + 5.3, { rx: 0.4, c: 0xc9a030 }); }   // carved door posts
    B.box(M.woodH, 3.2, 3.0, 0.14, x, y + 0.3, z + 4.82, { c: 0x2a1c12 }); B.box(M.woodH, 5.4, 0.4, 0.6, x, y + 3.4, z + 5.1, { c: DARKT });
    for (let i = 0; i < 5; i++) B.box(M.stone, 6 - i * 0.2, 0.3, 0.7, x, y - 1.2 + i * 0.3, z + 8.3 - i * 0.7, { c: 0x7a808a, solid: true });
    for (const e of [-1, 1]) { fires.push(brazier(B, M, e * 4.6, world.height(e * 4.6, z + 9), z + 9, 1.3).concat(1.2)); for (let i = 0; i < 4; i++) B.geo(M.flat, new THREE.CylinderGeometry(0.42, 0.42, 0.06, 12), [e * (4.2 + i * 2.2), y + 1.9, z + 4.82], [Math.PI / 2, 0, 0], 1, [0x8a1c1c, 0xc8a030, 0x1c4a7a, 0xe8e0d0][i]); }
    torch(0, y + 3, z + 10, 70, 24);
  }
  runestone(-9, -30, 1.2); runestone(9, -30, 1.2); runestone(-48, 30, 1.0); runestone(30, 50, 0.9);
  { // burial mound with standing stones
    const x = 56, z = 6, y = world.height(x, z); B.geo(M.ground, new THREE.SphereGeometry(7, 14, 8), [x, y - 3.2, z], [0, 0, 0], [1, 0.7, 1], SNOW); world.addCyl(x, z, 5.2, y - 3, y + 2);
    for (let i = 0; i < 7; i++) { const a = i * 0.9; B.geo(M.rock, rockGeo(i + 2, 1), [x + Math.cos(a) * 8.6, world.height(x + Math.cos(a) * 8.6, z + Math.sin(a) * 8.6) + 0.8, z + Math.sin(a) * 8.6], [0, a, 0], [0.5, 1.3, 0.35], 0x6a707a); }
  }
  // jetty and ships
  { const x = -40; B.box(M.woodH, 3, 0.25, 18, x, 0.55, 70, { c: 0x6a5238, solid: true }); for (let i = 0; i < 6; i++) for (const s of [-1, 1]) B.cyl(M.wood, 0.14, 0.14, 2.6, x + s * 1.4, -1.6, 62 + i * 3.2, { c: 0x4a3828, seg: 6 }); fires.push(brazier(B, M, x + 2.2, world.height(x + 2.2, 59), 59, 1).concat(1)); torch(x + 2.2, 2.6, 59, 34, 16); }
  ship(B, M, -45.5, 0.2, 72, 0.05, { len: 19, viking: true, hull: 0x3a2a1c, sail: 0x8a1c1c, sail2: 0xe8e0d0, shields: [0x8a1c1c, 0xc8a030, 0x1c4a7a] });
  ship(B, M, -34.5, 0.2, 74, -0.08, { len: 17, viking: true, hull: 0x3a2a1c, sail: 0x1a1a1a, sail2: 0x8a1c1c, shields: [0x1a1a1a, 0x8a1c1c] });
  ship(B, M, 9, 0.35, 65, 0.3, { len: 17, viking: true, hull: 0x4a3626, sail: 0x1c4a8a, sail2: 0xe8e0d0, shields: [0x1c4a8a, 0xe8e0d0] });   // your own ship

  // ---- forest, rocks ---------------------------------------------------------------------------
  const nearBuilt = (x, z) => dPoly(PATH, x, z) < 4.5 || (Math.abs(x) < 46 && z < 48 && z > -70 && (Math.abs(z + 3) < 2.5 || Math.hypot(x, z - 22) < 7 || Math.hypot(x, z + 56) < 20))
    || [[-19, 30], [18, 27], [-27, 9], [27, 7], [40, 38]].some(([hx, hz]) => Math.hypot(x - hx, z - hz) < 10) || Math.hypot(x - 56, z - 6) < 10 || z > 52;
  const pines = [], rocks = [];
  for (let i = 0; i < 70000 && pines.length < 1900; i++) {
    const x = (R() - 0.5) * 900, z = (R() - 0.5) * 900, h = world.height(x, z), inPlay = Math.abs(x) < 100 && z > -88 && z < 60;
    if (h < 1.6 || h > 120) continue;
    if (inPlay) { if (nearBuilt(x, z) || fbm(x * 0.04 + 20, z * 0.04, 2, 3) < 0.56) continue; } else if (fbm(x * 0.011, z * 0.011 + 8, 3, 5) < 0.47 && R() < 0.85) continue;
    if (Math.abs(world.height(x + 2, z) - h) > 3.2) continue;
    const s = 0.75 + R() * 0.9;
    pines.push({ x, y: h - 0.3, z, ry: R() * 6.28, s: [s, s * (0.9 + R() * 0.4), s], c: R.pick([0xffffff, 0xe8f0f8, 0xd8e4f0]) });
    if (inPlay) world.addCyl(x, z, 0.4 * s, h - 2, h + 9);
  }
  root.add(instanced(pineGeo(0x21402e, 0xe6eef8), windify(M.rock.clone(), shared, 0.14, 9, 1.0), pines));
  for (let i = 0; i < 300; i++) {
    const x = (R() - 0.5) * 340, z = (R() - 0.5) * 340, h = world.height(x, z); if (h < -1.5 || nearBuilt(x, z)) continue;
    const s = 0.4 + R() * R() * 3;
    rocks.push({ x, y: h + s * 0.2, z, ry: R() * 6, s: [s, s * 0.8, s], c: R.pick([0x5a606a, 0x6a707a, 0xdfe8f2]) });
    if (s > 1 && Math.abs(x) < 100 && z > -88 && z < 66) world.addCyl(x, z, s * 0.85, h - 2, h + s * 0.7);
  }
  for (const [ix, iz, rr] of SKERRIES) for (let k = 0; k < 7; k++) { const a = R() * 6.28, x = ix + Math.cos(a) * rr * 0.7, z = iz + Math.sin(a) * rr * 0.7, s = 2 + R() * 6; rocks.push({ x, y: world.height(x, z) + s * 0.3, z, ry: R() * 6, s: [s, s * 1.5, s], c: 0x565c66 }); }
  root.add(instanced(rockGeo(4, 1), M.rock, rocks));

  // ---- atmosphere ---------------------------------------------------------------------------------
  root.add(makeAmbient(shared, { count: 1700, box: 34, boxY: 18, size: 0.05, colorA: 0xffffff, colorB: 0xdfeaff, alpha: 0.9, fall: 1.5, wind: [0.9, 0, 0.4], flutter: 0.7 }));

  const enemies = [
    ['viking', -9, 44, {}], ['bowman', 15, 41, {}], ['viking', -21, 22, { patrol: true }], ['berserker', 6, 26, {}], ['bowman', 30, 17, {}], ['viking', -7, 11, {}],
    ['viking', -40, 54, {}], ['berserker', -46, 48, {}], ['bowman', -33, 50, {}],
    ['viking', -3, 1, {}], ['viking', 3.5, 1, {}], ['bowman', -10, -8, {}], ['bowman', 10, -8, {}],
    ['berserker', -15, -22, {}], ['viking', 13, -24, { patrol: true }], ['bowman', 19, -36, {}], ['viking', -7, -40, {}], ['berserker', 7, -40, {}], ['northBoss', 0, -45, { yaw: 0, patrol: false }],
  ];
  const horn = merge([xf(new THREE.TorusGeometry(0.2, 0.05, 6, 10, Math.PI * 0.9), [0, 0, 0], [0, 0, 0.3], 1, 0xe8dcc0), gCyl(0.062, 0.062, 0.04, 0xc9a030, [0.2, 0.06, 0], [0, 0, 1.2], 1, 8)]);
  let ft = 0;
  return {
    env: {
      sunDir: [0.5, 0.56, 0.66], sunColor: 0x8fa8dc, sunLight: 0xa9c2ff, sunIntensity: 2.3, sunSize: 0.0022,
      skyTop: 0x040b20, skyHorizon: 0x12304c, skyGround: 0x0a1a2c, haze: 0.5,
      fogColor: 0x14263a, fogDensity: 0.0034, hemiSky: 0x7e9be0, hemiGround: 0x9db0d2, hemiIntensity: 1.5, envIntensity: 0.65,
      cloudCover: 0.3, cloudScale: 0.4, cloudLit: 0x30446a, cloudShade: 0x0e1828, stars: 1.1, moonDir: [0.5, 0.56, 0.66], aurora: 1,
      bloom: 0.6, bloomRadius: 0.75, bloomThreshold: 1.0, rays: 0.05, rayThreshold: 3.0, exposure: 1.4,
      saturation: 1.08, contrast: 1.06, vignette: 0.45, tintHi: 0xfff2e2, tintLo: 0xdbe6ff, shadowRange: 90,
    },
    spawn: { x: 2, z: 57.5, yaw: 0 },
    vista: { c: [0, 6, 20], r: 60, h: 14, a: 1.5, speed: 0.03 },
    enemies, pickups: [[-13, 27], [12, 8], [-36, 52], [-12, -14], [14, -44]],
    dust: [0.9, 0.94, 1.0], water: [[0, 68, 26], [-40, 66, 26]], heroLight: 46,
    makePickup: () => new THREE.Mesh(horn, M.flat),
    update(dt, t, g) {
      for (const L of lights) L.l.intensity = L.i * (0.82 + Math.sin(t * 13 + L.ph) * 0.1 + Math.sin(t * 5.7 + L.ph * 2) * 0.08);
      ft -= dt;
      if (ft <= 0) {
        ft = 0.06;
        for (const f of fires) {
          const k = f[3] || 1;
          g.gfx.glow.spawn(f[0] + (Math.random() - 0.5) * 0.3 * k, f[1], f[2] + (Math.random() - 0.5) * 0.3 * k, (Math.random() - 0.5) * 0.5, 1.3 + Math.random() * 1.2 * k, (Math.random() - 0.5) * 0.5, { life: 0.6 + Math.random() * 0.5, s0: 0.28 * k, s1: 0.03, r: 3, g: 1.1, b: 0.25, a: 0.9 });
        }
        const s = smokes[Math.floor(Math.random() * smokes.length)];
        g.gfx.soft.spawn(s[0], s[1], s[2], 0.7, 1.1, 0.3, { life: 5, s0: 0.5, s1: 3.2, r: 0.55, g: 0.6, b: 0.7, a: 0.16, drag: 0.1 });
      }
    },
  };
}
