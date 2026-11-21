// Chapter IX - Tenochtitlan, the evening of 30 June 1520: the last rain, a low sun, the Great Temple and the causeway over the lake.
import * as THREE from 'three';
import { Heightfield, rockGeo } from '../build.js';
import { makeAmbient, makeWater, windify } from '../gfx.js';
import { instanced, room, steps, blobTreeGeo, tuftGeo, cactusGeo, brazier, gBox, gCyl, gCone, gSph, xf, merge, stand, den } from '../props.js';
import { fbm, ridged, smooth } from '../util.js';

export const aztec = {
  id: 'aztec', theme: 'theme-aztec', chapter: 'Chapter IX', title: 'Tenochtitlan', place: 'Tenochtitlan · the lake of Mexico · 30 June 1520',
  story: 'Dusk, and the rain is easing. The strangers who seized your king are stealing out of the city over the western causeway, heavy with the gold of the temples. The drum on the Great Temple has woken Tenochtitlan. Do not let them reach the shore.',
  weapon: 'dart', weaponName: 'Poisoned darts & obsidian club', alt: 'right mouse — club',
  heroes: [
    { look: 'cuauhtemoc', name: 'Cuauhtémoc', who: 'The Descending Eagle, last ruler of the Mexica', trait: 'Descending Eagle', effect: 'poisoned darts that fly faster and hit harder', mods: { power: 1.25 }, sleeve: 0xb07a50, cuff: 0xd9a820 },
    { look: 'tzilacatzin', name: 'Tzilacatzin', who: 'Warrior of Tlatelolco, who felled Spaniards with stones', trait: 'Stone thrower', effect: 'hurls heavy stones; starts with 130 health', weapon: 'stone', weaponName: 'Stones & obsidian club', mods: { hp: 130 }, sleeve: 0x2a8a4a, cuff: 0xd9a820 },
    { look: 'nezahualcoyotl', name: 'Nezahualcóyotl', who: 'The Fasting Coyote, poet-king of Texcoco', trait: 'Fasting Coyote', effect: 'bow and club; moves 15% faster', weapon: 'bow', weaponName: 'Bow & obsidian club', mods: { speed: 1.15 }, sleeve: 0xb07a50, cuff: 0x2ac8c0 },
  ],
  keys: '<kbd>↑</kbd><kbd>↓</kbd><kbd>←</kbd><kbd>→</kbd> move &nbsp; <kbd>Shift</kbd> run &nbsp; <kbd>Space</kbd> jump<br><kbd>Left mouse</kbd> throw or shoot &nbsp; <kbd>Right mouse</kbd> swing the club',
  foes: 'invaders remain', foesNone: 'The causeway is clear', bossName: 'Captain Luján of the rear guard', bossDown: 'The captain has fallen', pickupText: 'Cacao  +35',
  deadTitle: 'Mictlan', deadSub: 'The water of the lake closes over you.', clearTitle: 'The city is free tonight',
  build,
};

const STONE = 0xa8a294, STUC = 0xe6e0d0, RED = 0xa02c20, BLUE = 0x2a6a9a, GOLD = 0xe0b028, GOLD2 = 0xb8862a, BONE = 0xe2d8c0, TURQ = 0x2ac8c0, WOOD = 0x6a4a2c;
const mix = (a, b, t) => a + (b - a) * t;

/** A palm: a leaning trunk and a crown of drooping fronds. */
function palmGeo(seed = 1) {
  const parts = [gCyl(0.13, 0.19, 3.2, 0x5a4a34, [0.12, 1.6, 0], [0, 0, -0.08], 1, 6), gCyl(0.1, 0.13, 3.0, 0x5a4a34, [0.42, 4.5, 0], [0, 0, -0.14], 1, 6)];
  for (let i = 0; i < 9; i++) { const a = i / 9 * 6.283 + seed, t = 1.75 + (i % 3) * 0.16; parts.push(xf(new THREE.ConeGeometry(0.46, 3.0, 4), [0.62 + Math.sin(a) * 1.05, 5.75 - (i % 3) * 0.12, Math.cos(a) * 1.05], [t, a, 0], [1, 1, 0.22], i % 2 ? 0x4a9a4c : 0x3a8040)); }
  return merge(parts);
}
/** A clump of big leaves: the undergrowth. */
function bushGeo() {
  const parts = [];
  for (let i = 0; i < 6; i++) { const a = i * 1.05; parts.push(xf(new THREE.ConeGeometry(0.34, 1.5, 4), [Math.sin(a) * 0.42, 0.62, Math.cos(a) * 0.42], [0.85, a, 0], [1, 1, 0.3], [0x448e46, 0x56a650, 0x38783c][i % 3])); }
  parts.push(xf(new THREE.IcosahedronGeometry(0.5, 0), [0, 0.42, 0], [0, 0, 0], [1.1, 0.8, 1.1], 0x38783c));
  return merge(parts);
}

/** A tree for the far shores: the same shape as the near ones, in a fraction of the triangles. */
function farTreeGeo() {
  const parts = [gCyl(0.2, 0.34, 4.2, 0x5a4632, [0.1, 2.1, 0], [0, 0, -0.1], 1, 5)];
  for (const [x, y, z, s, c] of [[0, 6.2, 0, 2.3, 0x42904a], [1.6, 5.2, 0.6, 1.7, 0x56a652], [-1.3, 5.4, -0.9, 1.8, 0x387c40], [0.2, 7.4, 1.0, 1.5, 0x4c9a4e]]) parts.push(xf(new THREE.IcosahedronGeometry(s, 0), [x, y, z], [x, y, 0], [1, 0.74, 1], c));
  return merge(parts);
}

function build({ game, gfx, world, B, M, root, rand, shared }) {
  const R = rand;
  const GAPS = [2, -27, -56], CW = 4.5, VOL = [-150, -360], VR = 240, VH = 240, PY = 1.75;                     // gaps in the causeway, its half width, the volcano, the paved level of the precinct
  const CHIN = [[-22, 4, 14, 9], [24, 0, 12, 10], [-34, -14, 10, 12], [30, -22, 12, 9], [-20, -36, 9, 9], [54, 6, 10, 14], [-54, 2, 9, 12], [20, -44, 10, 8]];   // garden plots on the water
  // ---- terrain: a city island in a highland lake, the far shore, a ring of mountains and one volcano ----
  const hf = new Heightfield(1300, 400, (x, z) => {
    const n = fbm(x * 0.03, z * 0.03, 3, 7);
    let h = -3 - n * 0.6;                                                                   // the lake bed
    const isl = 1 - smooth(0.8, 1.0, Math.hypot(x / 86, (z - 76) / 64));
    h = mix(h, 1.5 + (n - 0.5) * 0.5, isl);                                                // the island of the city
    for (const [cx, cz, w, d] of CHIN) h = Math.max(h, mix(-3.2, 0.75, (1 - smooth(w / 2 - 1.6, w / 2, Math.abs(x - cx))) * (1 - smooth(d / 2 - 1.6, d / 2, Math.abs(z - cz)))));
    const ml = smooth(-86, -97, z);
    h = Math.max(h, mix(-3.4, 1.5 + (-z - 92) * 0.035 + (n - 0.5) * 1.5, ml));              // the western shore, where the causeway lands
    const r = Math.hypot(x, z), outer = smooth(190, 270, r);
    h = Math.max(h, mix(-3.4, 2 + outer * 12 + n * 3, outer));                              // the lake is ringed by land,
    h += smooth(300, 620, r) * (30 + ridged(x * 0.004 + 3, z * 0.004 + 9, 5, 4) * 260);     // and the land by mountains
    const dv = Math.hypot(x - VOL[0], z - VOL[1]), cone = Math.max(0, 1 - dv / VR);
    if (cone > 0) h = Math.max(h, VH * Math.pow(cone, 1.25) - (dv < 30 ? (1 - dv / 30) * 36 : 0) + n * 5 * cone);   // the volcano, with its crater
    return h;
  });
  world.height = (x, z) => hf.h(x, z);
  world.bounds = { x0: -82, x1: 82, z0: -116, z1: 134 };
  world.maxSlope = 0.95; world.waterY = -0.5;
  const cGrass = new THREE.Color(0x4a7a3a), cGrass2 = new THREE.Color(0x5e8c42), cEarth = new THREE.Color(0x7a6248), cMud = new THREE.Color(0x5a5040), cBed = new THREE.Color(0x1a2c2c),
    cRock = new THREE.Color(0x6e6a62), cAsh = new THREE.Color(0x4a4038), cSnow = new THREE.Color(0xeef2f6), cForest = new THREE.Color(0x2a5c30), tmp = new THREE.Color();
  root.add(hf.mesh(M.ground, (x, z, h, ny) => {
    if (h < 0.1) return tmp.copy(cMud).lerp(cBed, smooth(0.1, -2.5, h));
    const n = fbm(x * 0.05, z * 0.05, 3, 2), dv = Math.hypot(x - VOL[0], z - VOL[1]);
    tmp.copy(cGrass).lerp(cGrass2, n).lerp(cEarth, smooth(0.55, 0.75, fbm(x * 0.11, z * 0.11, 2, 5)) * 0.6);
    tmp.lerp(cMud, 1 - smooth(0.1, 0.9, h));
    tmp.lerp(cForest, smooth(6, 26, h)); tmp.lerp(cRock, smooth(120, 190, h));
    tmp.lerp(cRock, 1 - smooth(0.55, 0.78, ny));
    if (dv < VR) { tmp.lerp(cAsh, smooth(VR * 0.72, VR * 0.42, dv)); tmp.lerp(cSnow, smooth(VH * 0.6, VH * 0.72, h + (n - 0.5) * 30) * smooth(26, 44, dv)); }   // ash slopes, a cap of snow, bare rock at the rim
    return tmp;
  }));
  const lake = new THREE.Mesh(new THREE.PlaneGeometry(3000, 3000), makeWater(shared, { deep: 0x15424e, scale: 0.5, flow: [0.03, 0.05], alpha: 0.86 }));
  lake.rotation.x = -Math.PI / 2; root.add(lake);
  B.geo(M.glow, new THREE.SphereGeometry(27, 12, 6), [VOL[0], VH - 33, VOL[1]], [0, 0, 0], [1, 0.22, 1], 0xff5a1a);     // the fire in the crater

  const lights = [], fires = [];
  const torch = (x, y, z, i = 26, d = 15) => { const l = new THREE.PointLight(0xff9a48, i, d, 1.7); l.position.set(x, y, z); root.add(l); lights.push({ l, i, ph: R() * 9 }); };
  const fire = (x, y, z, s = 1.1, light = 0) => { fires.push(brazier(B, M, x, y, z, s).concat(s)); if (light) torch(x, y + 1.9 * s, z, light, 20); };
  const extraFoes = [], extraPicks = [];

  // ---- gold: what the temples held, and what the strangers are carrying off ----
  /** A small heap of goldwork. k = how many pieces (1 to 6). */
  const gold = (x, y, z, ry = 0, k = 5) => {
    const p = [];
    if (k > 0) p.push(gBox(0.34, 0.26, 0.03, GOLD, [0, 0.2, 0], [-0.5, 0, 0]), gSph(0.09, GOLD, [0, 0.36, -0.07], [1, 1.1, 0.8]), gCyl(0.19, 0.19, 0.025, GOLD2, [0, 0.45, -0.12], [1.05, 0, 0], [1, 1, 0.6], 12),   // a pectoral: plate, face, fan of feathers
      gSph(0.03, GOLD, [-0.13, 0.42, -0.1]), gSph(0.03, GOLD, [0.13, 0.42, -0.1]));
    if (k > 1) p.push(gCyl(0.2, 0.2, 0.025, GOLD, [0.36, 0.03, 0.1], [0, 0, 0], 1, 14), gCyl(0.07, 0.07, 0.03, GOLD2, [0.36, 0.045, 0.1], [0, 0, 0], 1, 10));                                               // a sun disc
    if (k > 2) p.push(gBox(0.3, 0.07, 0.12, GOLD, [-0.32, 0.035, 0.16], [0, 0.5, 0]), gBox(0.3, 0.07, 0.12, GOLD2, [-0.28, 0.1, 0.12], [0, -0.3, 0]));                                                         // two bars, melted down
    if (k > 3) p.push(gCyl(0.05, 0.065, 0.2, GOLD, [0.12, 0.1, 0.34], [0, 0, 0], 1, 7), gSph(0.06, GOLD, [0.12, 0.25, 0.34]), gBox(0.16, 0.04, 0.03, GOLD2, [0.12, 0.31, 0.34]));                               // a little figure with a headdress
    if (k > 4) for (let i = 0; i < 5; i++) p.push(gSph(0.035, i % 2 ? GOLD : GOLD2, [-0.1 + Math.cos(i * 1.3) * 0.16, 0.035, 0.42 + Math.sin(i * 1.3) * 0.1]));                                              // bells
    if (k > 5) p.push(gSph(0.13, GOLD, [-0.34, 0.2, -0.22], [1, 0.9, 1.15]), gBox(0.13, 0.06, 0.1, GOLD2, [-0.34, 0.08, -0.15]), gBox(0.04, 0.045, 0.03, TURQ, [-0.39, 0.22, -0.09]), gBox(0.04, 0.045, 0.03, TURQ, [-0.29, 0.22, -0.09]));   // a golden skull with turquoise eyes
    B.geo(M.metal, merge(p), [x, y, z], [0, ry, 0], 1.5);
  };
  /** A skull of bone. */
  const skullGeo = (c = BONE) => merge([gSph(0.11, c, [0, 0, 0], [1, 0.95, 1.15], 6), gBox(0.12, 0.07, 0.1, c, [0, -0.09, 0.05]), gBox(0.035, 0.04, 0.03, 0x15120f, [-0.04, 0.0, 0.115]), gBox(0.035, 0.04, 0.03, 0x15120f, [0.04, 0.0, 0.115])]);

  // ---- the causeway: a stone road on the water, cut by three canals ----
  for (const [z0, z1] of [[34, GAPS[0] + 2.3], [GAPS[0] - 2.3, GAPS[1] + 2.3], [GAPS[1] - 2.3, GAPS[2] + 2.3], [GAPS[2] - 2.3, -99]]) {
    B.box(M.stone, CW * 2, 4.4, z0 - z1, 0, -3, (z0 + z1) / 2, { c: STONE, solid: true });                              // its top is at 1.4
    for (const e of [-1, 1]) B.box(M.stone, 0.5, 0.62, z0 - z1, e * (CW - 0.25), 1.4, (z0 + z1) / 2, { c: 0x8e887a, solid: true });  // a low parapet: too high to step over, low enough to shoot over
  }
  B.box(M.stone, CW * 2, 1.2, 13.4, 0, 0.38, 36.4, { c: STONE, solid: true });                                          // the road from the gate to the water, a hand higher
  for (let z = 26; z > -96; z -= 11) for (const e of [-1, 1]) B.cyl(M.wood, 0.13, 0.15, 3.4, e * (CW + 0.5), -2.2, z + e * 2, { c: 0x3a2c1e, seg: 6 });   // mooring posts in the water
  // first canal: the timber bridge the strangers carried with them, still in place
  B.box(M.woodH, 5.4, 0.3, 5.6, 0, 1.12, GAPS[0], { c: WOOD, solid: true }); for (const e of [-1, 1]) B.box(M.wood, 0.25, 0.62, 6, e * 2.6, 1.4, GAPS[0], { c: 0x4a3420, solid: true });
  // (where a canal cuts the road, the parapet turns the corner and runs across to the crossing, so nobody walks into the water)
  const lip = (gz, xa, xb) => { for (const e of [-1, 1]) for (const [x0, x1] of [[-CW, xa], [xb, CW]]) if (x1 - x0 > 0.3) B.box(M.stone, x1 - x0, 0.62, 0.5, (x0 + x1) / 2, 1.4, gz + e * 2.55, { c: 0x8e887a, solid: true }); };
  lip(GAPS[0], -2.7, 2.7); lip(GAPS[1], -2.3, 1.2); lip(GAPS[2], -2.1, 1.15);
  for (const [gz, xa, xb] of [[GAPS[1], -2.5, 1.9], [GAPS[2], -2.25, 1.3]]) for (const x of [xa, xb]) B.box(M.wood, 0.22, 0.62, 5.2, x, 1.3, gz, { c: 0x4a3420, solid: true });   // side rails of the two rough crossings
  // second canal: no bridge; they are crossing on what fell in: chests, bales, a cart
  for (const [x, z, w, top, c] of [[-0.6, GAPS[1] + 1.4, 3.4, 1.25, 0x6a4a2c], [0.4, GAPS[1] - 0.1, 3.2, 1.0, 0x8a7458], [-0.3, GAPS[1] - 1.6, 3.6, 1.2, 0x5a4028]]) B.box(M.wood, w, top + 3, 1.95, x, -3, z, { c, solid: true });
  B.geo(M.wood, new THREE.CylinderGeometry(0.7, 0.7, 0.12, 10), [2.3, 0.5, GAPS[1] + 0.3], [1.1, 0.4, 0.3], 1, 0x4a3420); B.box(M.wood, 2.2, 0.5, 1.2, 2.4, -0.1, GAPS[1] - 0.9, { ry: 0.5, rz: 0.4, c: 0x5a4028 });
  gold(-0.5, 1.25, GAPS[1] + 1.4, 0.6, 3); gold(0.4, 1.0, GAPS[1] - 0.1, 2.2, 5);
  // third canal: two planks
  B.box(M.woodH, 1.6, 0.25, 5.6, -1.3, 1.17, GAPS[2], { c: WOOD, solid: true }); B.box(M.woodH, 1.6, 0.25, 5.6, 0.35, 1.15, GAPS[2], { ry: 0.04, c: 0x5a4028, solid: true });
  for (const [z, e] of [[24, 1], [-10, -1], [-38, 1], [-66, -1], [-88, 1]]) fire(e * (CW - 1.0), 1.4, z, 1.1, 26);       // braziers along the road
  for (const [x, z, k, ry] of [[1.6, 16, 2, 0.4], [-2.2, -8, 1, 2], [2.4, -18, 3, 4], [-1.8, -44, 2, 1], [1.2, -64, 1, 3], [-2.6, -76, 4, 5]]) gold(x, 1.4, z, ry, k);   // dropped as they ran

  // ---- the sacred precinct: a paved square within a wall, the Great Temple at its head ----
  B.box(M.stone, 76, 0.7, 66, 0, PY - 0.7, 75, { c: 0xbab4a6, solid: true });
  const wall = (x0, z0, x1, z1) => { const len = Math.hypot(x1 - x0, z1 - z0), ry = Math.atan2(-(z1 - z0), x1 - x0), mx = (x0 + x1) / 2, mz = (z0 + z1) / 2;
    B.box(M.plaster, len, 2.3, 0.9, mx, PY - 0.3, mz, { ry, c: STUC, solid: true }); B.box(M.flat, len + 0.04, 0.4, 0.98, mx, PY + 2.0, mz, { ry, c: RED }); };
  wall(-37, 42.5, -7, 42.5); wall(7, 42.5, 37, 42.5); wall(-37, 42.5, -37, 107.5); wall(37, 42.5, 37, 107.5); wall(-37, 107.5, 37, 107.5);
  for (const e of [-1, 1]) {                                                                // serpent heads at the gate
    B.box(M.stone, 1.5, 1.3, 2.6, e * 6.8, PY, 41.2, { c: 0x8a9484, solid: true }); B.box(M.stone, 1.3, 0.35, 1.1, e * 6.8, PY, 39.6, { c: 0x7a8474 });
    for (const k of [-1, 1]) B.box(M.flat, 0.16, 0.3, 0.16, e * 6.8 + k * 0.5, PY + 0.35, 39.75, { c: 0xf0ece0 });
    for (const k of [-1, 1]) B.box(M.glow, 0.2, 0.2, 0.06, e * 6.8 + k * 0.4, PY + 0.95, 39.88, { c: 0xff8a30 });
    fire(e * 9.4, PY, 40.6, 1.2, 30);
  }
  // The Great Temple: four terraces, a stair as steep as the pyramid's own face, two shrines on top.
  const F = 62, TOP = PY + 17, SX = 6.5, NS = 38, RISE = 17 / NS, RUN = 0.48, SET = NS * RUN / 4;   // front of the base, height of the top, half width of the stair, its steps
  for (let k = 0; k < 4; k++) {
    const z0 = F + SET * k, z1 = 102 - 2 * k, hw = 20 - 2.5 * k, top = PY + 4.25 * (k + 1), c = k % 2 ? 0xd8d2c2 : STUC;
    for (const e of [-1, 1]) B.box(M.plaster, hw - SX, top - PY + 1, z1 - z0, e * (hw + SX) / 2, PY - 1, (z0 + z1) / 2, { c, solid: true });      // the terrace on either side of the stair
    B.box(M.plaster, SX * 2, top - PY + 1, z1 - (z0 + SET), 0, PY - 1, (z0 + SET + z1) / 2, { c, solid: true });                                  // and behind it
    for (const e of [-1, 1]) B.box(M.flat, hw - SX + 0.1, 0.45, z1 - z0 + 0.1, e * (hw + SX) / 2, top - 0.45, (z0 + z1) / 2, { c: k % 2 ? BLUE : RED });
  }
  for (let j = 1; j <= NS; j++) B.box(M.stone, SX * 2, j * RISE + 1, RUN + 0.02, 0, PY - 1, F + (j - 0.5) * RUN, { c: j % 2 ? 0xbcb6a8 : 0xb2ac9e, solid: true });   // the stair: solid stone under every tread
  for (const e of [-1, 1]) {                                                                 // balustrades, each ending in a serpent's head
    B.box(M.stone, 1.3, 1.1, 2.0, e * (SX + 0.45), PY, F - 1.2, { c: 0x8a9484, solid: true }); for (const k of [-1, 1]) B.box(M.glow, 0.18, 0.18, 0.06, e * (SX + 0.45) + k * 0.35, PY + 0.8, F - 2.22, { c: 0xff8a30 });
  }
  for (const [e, col, nm] of [[-1, BLUE, 0xe8f0f8], [1, RED, 0xf0ece0]]) {                    // the shrine of the rain god and the shrine of the war god
    const x = e * 5.8, z = 90.5;
    room(B, M, x, TOP, z, { w: 8, d: 7, h: 4.6, t: 0.4, mat: M.plaster, c: STUC, base: 0.4, doors: [{ side: 'n', at: 0, w: 2.6, h: 3.1 }], floor: { mat: M.stone, c: 0x9a9488 }, ceil: { mat: M.plaster, c: 0xd8d2c2 } });
    B.box(M.flat, 8.5, 3.8, 3.2, x, TOP + 4.8, z + 0.6, { c: col }); B.box(M.flat, 8.7, 0.5, 3.4, x, TOP + 8.6, z + 0.6, { c: nm });               // the tall roof comb
    for (let i = 0; i < 5; i++) for (let j = 0; j < 2; j++) B.geo(M.flat, new THREE.CylinderGeometry(0.28, 0.28, 0.1, 10), [x - 2.8 + i * 1.4, TOP + 5.8 + j * 1.5, z - 1.02], [Math.PI / 2, 0, 0], 1, e < 0 ? 0xf0f4f8 : 0xf0ece0);
    for (const k of [-1, 1]) B.box(M.flat, 0.5, 3.1, 0.3, x + k * 1.6, TOP, z - 3.6, { c: col });                                                 // painted door posts
    B.box(M.stone, 1.6, 0.9, 1.0, x, TOP + 0.06, z + 2.3, { c: 0x7a7468, solid: true }); gold(x, TOP + 0.98, z + 2.3, e * 0.4, 6); gold(x - 2.4, TOP + 0.08, z + 1.2, 2, 4); gold(x + 2.4, TOP + 0.08, z + 1.4, 4.2, 5);   // an altar heaped with gold
    torch(x, TOP + 2.6, z, 30, 12);
  }
  B.cyl(M.wood, 0.6, 0.55, 1.3, 0, TOP, 85.6, { c: 0x5a3a22, seg: 12, solid: true }); B.geo(M.flat, new THREE.CylinderGeometry(0.58, 0.58, 0.06, 12), [0, TOP + 1.33, 85.6], [0, 0, 0], 1, 0xd8c8a0);   // the great drum
  for (const e of [-1, 1]) fire(e * 10.6, TOP, 83.4, 1.3, 34);
  extraPicks.push([0, 87.5, TOP + 0.5]);
  // the skull rack: rows of skulls on poles above a stone platform, and before it a golden skull on an altar
  { const x = -24, z = 53; B.box(M.stone, 12.6, 0.9, 4.2, x, PY, z, { c: 0x8e887a, solid: true });
    for (let i = 0; i < 7; i++) B.box(M.wood, 0.16, 3.3, 0.16, x - 6 + i * 2, PY + 0.9, z, { c: 0x3a2c1e });
    const sk = [];
    for (let r = 0; r < 5; r++) { B.box(M.wood, 12.2, 0.06, 0.06, x, PY + 1.45 + r * 0.56, z, { c: 0x3a2c1e });
      for (let i = 0; i < 26; i++) { if ((i * 7 + r * 3) % 13 === 5) continue; sk.push({ x: x - 5.85 + i * 0.468, y: PY + 1.45 + r * 0.56, z, ry: ((i + r) % 5 - 2) * 0.12, s: [1, 1, 1] }); } }
    root.add(instanced(skullGeo(), M.flat, sk, { cast: false }));
    world.addBox(x, z, 12.4, 0.5, 0, PY + 0.9, PY + 4.3);
    B.box(M.stone, 1.4, 1.0, 1.2, x, PY, z - 4.2, { c: 0x7a7468, solid: true }); gold(x + 0.34, PY + 0.84, z - 4.0, 0, 6); gold(x - 0.3, PY + 1.0, z - 4.2, 3, 2);
    for (const e of [-1, 1]) fire(x + e * 7.6, PY, z - 1.5, 1.1, e > 0 ? 24 : 0); }
  // the round temple of the wind god, with its thatched cone
  { const x = 23, z = 54; B.cyl(M.plaster, 4.4, 4.8, 1.6, x, PY, z, { c: STUC, seg: 16, solid: true }); B.cyl(M.plaster, 3.2, 3.2, 3.2, x, PY + 1.6, z, { c: 0xd8d2c2, seg: 14, solid: true });
    B.geo(M.thatch, new THREE.ConeGeometry(3.9, 4.2, 14), [x, PY + 6.9, z], [0, 0, 0], 1, 0xb89a58); B.box(M.flat, 1.5, 2.2, 0.2, x, PY + 1.6, z - 3.18, { c: 0x15120f }); }
  for (const [x, z] of [[-31, 99], [31, 99], [31, 48]]) fire(x, PY, z, 1.2, 0);

  // ---- houses, a watchtower of reeds, a steam bath to crawl into ----
  const house = (x, z, ry, w = 7, d = 6, band = RED) => {
    const y = Math.max(world.height(x, z), world.height(x + 3, z + 3), world.height(x - 3, z - 3)) + 0.1;
    const P = room(B, M, x, y, z, { w, d, h: 2.9, t: 0.35, ry, mat: M.plaster, c: STUC, base: 1.6, doors: [{ side: 's', at: 0, w: 1.8, h: 2.2 }], floor: { mat: M.ground, c: 0x6a5a48 }, ceil: { mat: M.plaster, c: 0xd0cabc } });
    B.box(M.flat, w + 0.1, 0.4, d + 0.1, x, y + 2.7, z, { ry, c: band }); B.box(M.plaster, w + 0.2, 0.3, d + 0.2, x, y + 3.1, z, { ry, c: STUC });
    return { P, y };
  };
  house(-21, 33.5, 0.2); house(23, 35, -0.3, 6.5, 6, BLUE); house(-50, 62, 1.57, 7, 6, BLUE); house(51, 78, -1.57); house(-17, -106, 3.0, 7, 6); house(22, -110, 3.4, 6.5, 6, BLUE);
  stand(B, M, 30, world.height(30, 31), 31, 0.4, { c: 0x8a7a4a, roof: 0xb89a58 });
  { const x = -33, z = 33.5, y = world.height(x, z) + 0.02; den(B, M, x, y, z, -0.5, { mat: M.plaster, c: 0xb8b0a0 }); B.geo(M.plaster, new THREE.SphereGeometry(2.7, 12, 8), [x, y + 1.3, z], [0, 0, 0], [1, 0.55, 1], 0xc8c0b0); extraPicks.push([x, z, 0, 0.6]); }

  // ---- greenery: the lake shore and the gardens run wild in the rain ----
  const open = (x, z) => (Math.abs(x) < 39.5 && z > 40 && z < 110) || (Math.abs(x) < 7.5 && z < 44 && z > -116) || Math.hypot(x, z + 104) < 9
    || [[-21, 33.5], [23, 35], [-50, 62], [51, 78], [-17, -106], [22, -110], [30, 31], [-33, 33.5]].some(([hx, hz]) => Math.hypot(x - hx, z - hz) < 6.5);
  const inPlay = (x, z) => Math.abs(x) < 84 && z > -118 && z < 136;
  const trees = [[], [], []], far = [], palms = [], bushes = [], reeds = [], cacti = [];
  // the jungle you walk in: trees set close, but never closer than a body needs to pass between them
  const taken = new Set();
  for (let i = 0; i < 14000; i++) {
    const x = (R() - 0.5) * 168, z = -118 + R() * 254, h = world.height(x, z);
    if (h < 0.85 || h > 16 || open(x, z)) continue;
    const key = Math.round(x / 2.7) + ',' + Math.round(z / 2.7); if (taken.has(key)) continue; taken.add(key);
    const s = 1.0 + R() * 0.9;
    trees[Math.floor(R() * 3)].push({ x, y: h - 0.3, z, ry: R() * 6.28, s: [s, s * (0.9 + R() * 0.5), s], c: R.pick([0xffffff, 0xd8e8d0, 0xc0d8b8, 0xe8f0d0]) });
    world.addCyl(x, z, 0.3 * s, h - 2, h + 7);
  }
  [[0x46964a, 0x5cae54, 0x3a8040], [0x5aa046, 0x72b852, 0x488a3a], [0x44946a, 0x58ac78, 0x387c58]].forEach((leaf, k) => root.add(instanced(blobTreeGeo({ leaf, trunk: 0x5a4632, h: 8 + k, spread: 3.0, blobs: 5, seed: 3 + k * 4 }), windify(M.rock.clone(), shared, 0.2, 8, 1.2), trees[k])));
  // the forest of the far shores and the lower slopes: the same trees, drawn more simply
  for (let i = 0; i < 120000 && far.length < 2600; i++) {
    const x = (R() - 0.5) * 1000, z = (R() - 0.5) * 1000, h = world.height(x, z);
    if (h < 0.9 || h > 120 || inPlay(x, z) || Math.hypot(x - VOL[0], z - VOL[1]) < VR * 0.55) continue;
    if (fbm(x * 0.012, z * 0.012 + 4, 3, 5) < 0.3 && R() < 0.7) continue;
    const s = 1.3 + R() * 1.4; far.push({ x, y: h - 0.3, z, ry: R() * 6.28, s: [s, s * (0.9 + R() * 0.4), s], c: R.pick([0xffffff, 0xd8e8d0, 0xb8d0b0, 0xe8f0c8]) });
  }
  root.add(instanced(farTreeGeo(), M.rock, far, { cast: false }));
  for (let i = 0; i < 40000 && palms.length < 520; i++) {
    const x = (R() - 0.5) * 520, z = (R() - 0.5) * 620, h = world.height(x, z), play = inPlay(x, z);
    if (h < 0.75 || h > 18 || (play && open(x, z))) continue;
    const s = 0.85 + R() * 0.7; palms.push({ x, y: h - 0.2, z, ry: R() * 6.28, s: [s, s * (0.9 + R() * 0.3), s], c: R.pick([0xffffff, 0xd8e8d0]) });
    if (play) world.addCyl(x, z, 0.2 * s, h - 2, h + 6);
  }
  root.add(instanced(palmGeo(2), windify(M.rock.clone(), shared, 0.3, 6, 1.5), palms));
  for (let i = 0; i < 60000 && bushes.length < 1500; i++) {
    const x = (R() - 0.5) * 176, z = -120 + R() * 258, h = world.height(x, z);
    if (h < 0.7 || h > 16 || open(x, z)) continue;
    const s = 0.5 + R() * 0.6; bushes.push({ x, y: h - 0.05, z, ry: R() * 6.28, s: [s, s * (0.7 + R() * 0.5), s], c: R.pick([0xffffff, 0xc8e0c0, 0xe8f0d0]) });
  }
  root.add(instanced(bushGeo(), windify(M.rock.clone(), shared, 0.25, 1.5, 1.8), bushes, { cast: false }));
  for (let i = 0; i < 60000 && reeds.length < 2600; i++) {
    const x = (R() - 0.5) * 200, z = (R() - 0.5) * 300, h = world.height(x, z);
    if (h < -0.7 || h > 0.9 || (Math.abs(x) < CW + 0.8 && z < 36)) continue;
    const s = 1.5 + R() * 1.6; reeds.push({ x, y: Math.max(h, -0.08) - 0.05, z, ry: R() * 6.28, s: [s * 0.8, s, s * 0.8], c: R.pick([0xb8c890, 0x98b070, 0xd0c890, 0x88a868]) });
  }
  root.add(instanced(tuftGeo(7, 0x4a6a3a, 0xffffff), windify(M.flat2.clone(), shared, 0.3, 1, 2.2), reeds, { cast: false }));
  for (const [cx, cz, w, d] of CHIN) for (let i = 0; i < 46; i++) { const x = cx + (R() - 0.5) * (w - 3.4), z = cz + (R() - 0.5) * (d - 3.4), s = 1.9 + R() * 0.7; cacti.push({ x, y: world.height(x, z) - 0.05, z, ry: R() * 6, s: [s * 0.55, s, s * 0.55], c: R.pick([0xd8e890, 0xb8d070]) }); }
  root.add(instanced(tuftGeo(5, 0x3a6a2a, 0xffffff), windify(M.flat2.clone(), shared, 0.24, 1, 1.8), cacti, { cast: false }));     // maize on the garden plots
  const nopal = [];
  for (let i = 0; i < 4000 && nopal.length < 60; i++) { const x = (R() - 0.5) * 130, z = -96 - R() * 22, h = world.height(x, z); if (h < 1 || open(x, z)) continue; const s = 0.7 + R() * 0.7; nopal.push({ x, y: h, z, ry: R() * 6, s: [s, s, s], c: 0xffffff }); }
  root.add(instanced(cactusGeo(), M.rock, nopal));
  // the great cypress by the landing, under which the story says their captain wept
  { const x = 13, z = -103, h = world.height(x, z); root.add(instanced(blobTreeGeo({ leaf: [0x1c3c22, 0x26502c, 0x183420], trunk: 0x3a2a1e, h: 7, spread: 3.4, blobs: 14, seed: 9 }), M.rock, [{ x, y: h - 0.4, z, ry: 1, s: [2.1, 2.0, 2.1], c: 0xffffff }])); world.addCyl(x, z, 0.9, h - 2, h + 12); }
  const rocks = [];
  for (let i = 0; i < 160; i++) { const x = (R() - 0.5) * 200, z = (R() - 0.5) * 320, h = world.height(x, z); if (h < 0.6 || open(x, z)) continue; const s = 0.3 + R() * R() * 1.6; rocks.push({ x, y: h + s * 0.15, z, ry: R() * 6, s: [s, s * 0.7, s], c: R.pick([0x5a5c58, 0x6a6c66, 0x4a4c48]) }); }
  root.add(instanced(rockGeo(4, 1), M.rock, rocks));

  // ---- the last of the rain, catching the low sun ----
  root.add(makeAmbient(shared, { count: 1500, box: 28, boxY: 18, size: 0.026, colorA: 0xffe2b8, colorB: 0xd8c8c0, alpha: 0.42, fall: 17, wind: [1.4, 0, 0.6], flutter: 0.04 }));

  // ---- the rear guard's cannon, turned back on the city, and the captain's chest ----
  { const z = -72, y = 1.4; B.box(M.wood, 0.5, 0.36, 1.9, 0, y + 0.42, z - 0.5, { rx: -0.2, c: 0x5a4028 });                                           // the trail of the carriage
    for (const e of [-1, 1]) B.geo(M.wood, new THREE.CylinderGeometry(0.62, 0.62, 0.12, 12), [e * 0.62, y + 0.62, z + 0.3], [0, 0, Math.PI / 2], 1, 0x4a3420);
    B.geo(M.metal, new THREE.CylinderGeometry(0.15, 0.2, 2.2, 10), [0, y + 0.95, z + 0.6], [Math.PI / 2 - 0.08, 0, 0], 1, 0x3a3c42); B.geo(M.metal, new THREE.CylinderGeometry(0.19, 0.19, 0.12, 10), [0, y + 1.03, z + 1.66], [Math.PI / 2 - 0.08, 0, 0], 1, 0x55585e);
    for (let i = 0; i < 6; i++) B.geo(M.metal, new THREE.SphereGeometry(0.13, 8, 6), [-1.3 + (i % 3) * 0.27, y + 0.13 + Math.floor(i / 3) * 0.22, z - 0.2 + Math.floor(i / 3) * 0.13], [0, 0, 0], 1, 0x2a2c30);
    world.addBox(0, z + 0.3, 1.5, 2.6, 0, y, y + 1.2); }
  { const x = 3.4, z = -105.5, y = world.height(x, z); B.box(M.wood, 1.5, 0.75, 0.95, x, y, z, { ry: 0.4, c: 0x4a3420, solid: true }); B.box(M.wood, 1.5, 0.1, 0.95, x - 0.2, y + 0.95, z - 0.42, { ry: 0.4, rx: -1.0, c: 0x5a4028 });
    gold(x, y + 0.75, z, 0.4, 6); gold(x + 1.1, y, z + 0.7, 2, 5); gold(x - 1.2, y, z + 0.5, 4, 4); }
  const enemies = [
    ['rodelero', -10, 47, {}], ['rodelero', 12, 60, { patrol: true }], ['ballestero', 24, 46, {}], ['ballestero', -26, 47.5, {}], ['arcabucero', -4, 86, { y: TOP + 0.5, static: true, yaw: Math.PI }], ['rodelero', 20, 64, {}],
    ['rodelero', -3, 38.5, {}], ['rodelero', 3, 36, {}], ['arcabucero', 0, 31.5, {}],
    ['ballestero', -26, 39, {}], ['rodelero', 29, 41, { patrol: true }], ['arcabucero', 30, 31, { up: 3.6, static: true, yaw: 3.6 }],
    ['rodelero', -2, 22, {}], ['ballestero', 2, 14, {}], ['jinete', 0, 9, {}],
    ['rodelero', 2, -6, {}], ['arcabucero', -2, -12, {}], ['rodelero', -1.5, -19, {}], ['ballestero', 2.2, -22, {}],
    ['jinete', 0, -36, {}], ['rodelero', -2, -42, {}], ['arcabucero', 2, -47, {}], ['ballestero', -2.4, -51, {}],
    ['cannoneer', 1.1, -73.6, { static: true, yaw: 0 }], ['arcabucero', -2.6, -72, { patrol: false }], ['rodelero', 2, -64, {}], ['rodelero', -2, -80, {}], ['ballestero', 2.5, -86, {}], ['jinete', 0, -92, {}],
    ['aztecBoss', 0, -104, { yaw: 0, patrol: false }], ['rodelero', -6, -102, {}], ['rodelero', 6, -101, {}], ['arcabucero', -12, -108, {}], ['ballestero', 14, -99, {}], ['jinete', -20, -100, {}], ['rodelero', 18, -107, {}],
  ];
  const cup = merge([gCyl(0.1, 0.075, 0.17, 0x6a3a22, [0, 0.085, 0], [0, 0, 0], 1, 9), gCyl(0.104, 0.104, 0.025, GOLD, [0, 0.17, 0], [0, 0, 0], 1, 9), gCyl(0.08, 0.08, 0.01, 0x3a1c10, [0, 0.185, 0], [0, 0, 0], 1, 9)]);
  let ft = 0;
  return {
    env: {
      sunDir: [0.52, 0.24, -0.82], sunColor: 0xff9a52, sunLight: 0xffbc84, sunIntensity: 4.2, sunSize: 0.0009,
      skyTop: 0x34488e, skyHorizon: 0xf2a462, skyGround: 0x7a5e58, haze: 0.5,
      fogColor: 0xd29c7a, fogDensity: 0.002, hemiSky: 0xa8b4e4, hemiGround: 0x8e7a5c, hemiIntensity: 2.3, envIntensity: 0.8,
      cloudCover: 0.62, cloudScale: 0.42, cloudLit: 0xffc88e, cloudShade: 0x6e4c5e,
      bloom: 0.36, bloomRadius: 0.65, bloomThreshold: 1.3, rays: 0.4, rayThreshold: 1.8, exposure: 1.12,
      saturation: 1.16, contrast: 1.08, vignette: 0.34, tintHi: 0xfff0dc, tintLo: 0xe6ecff, shadowRange: 90,
    },
    spawn: { x: 0, z: 52, yaw: 0 },
    vista: { c: [0, 8, 64], r: 64, h: 36, a: -1.6, speed: 0.03 },
    enemies: enemies.concat(extraFoes), pickups: [[12, 47], [-8, 20], [2, -14], [-2, -42], [2, -70], [-10, -100]].concat(extraPicks),
    dust: [1.0, 0.86, 0.7], water: [[0, 10, 30], [0, -40, 30]], heroLight: 46,
    makePickup: () => new THREE.Mesh(cup, M.flat),
    update(dt, t, g) {
      for (const L of lights) L.l.intensity = L.i * (0.8 + Math.sin(t * 13 + L.ph) * 0.11 + Math.sin(t * 5.7 + L.ph * 2) * 0.09);
      ft -= dt;
      if (ft <= 0) {
        ft = 0.06;
        for (const f of fires) {
          const k = f[3] || 1;
          g.gfx.glow.spawn(f[0] + (Math.random() - 0.5) * 0.3 * k, f[1], f[2] + (Math.random() - 0.5) * 0.3 * k, (Math.random() - 0.5) * 0.5, 1.3 + Math.random() * 1.2 * k, (Math.random() - 0.5) * 0.5, { life: 0.6 + Math.random() * 0.5, s0: 0.28 * k, s1: 0.03, r: 3, g: 1.1, b: 0.25, a: 0.9 });
        }
        if (Math.random() < 0.35) g.gfx.soft.spawn(VOL[0] + (Math.random() - 0.5) * 24, VH - 26, VOL[1] + (Math.random() - 0.5) * 24, 2.2, 6 + Math.random() * 4, 0.6, { life: 16, s0: 20, s1: 90, r: 0.5, g: 0.42, b: 0.42, a: 0.3, drag: 0.03 });   // the volcano smokes, lit from below
      }
    },
  };
}
