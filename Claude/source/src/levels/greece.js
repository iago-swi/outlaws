// Chapter IV - a Greek island in the age of heroes: beaches, a village, a temple on the hill.
import * as THREE from 'three';
import { Heightfield, prismGeo, rockGeo } from '../build.js';
import { makeAmbient, makeWater, windify } from '../gfx.js';
import { makeHumanoid } from '../actors.js';
import { drawTexture } from '../tex.js';
import { instanced, room, steps, tuftGeo, blobTreeGeo, ship, brazier, gBox, gCyl, gCone, gSph, xf, merge, stand, den } from '../props.js';
import { fbm, smooth } from '../util.js';

export const greece = {
  id: 'greece', theme: 'theme-greece', chapter: 'Chapter IV', title: 'Ithaca', kanji: 'Ἰθάκη', place: 'Ithaca · the Ionian Sea · the age of heroes',
  story: 'You come home across the wine-dark sea and find red cloaks on your shore. Spartan ships lie in the harbour and their captain feasts in the temple on the hill. Land on the beach, cross the village, and climb to the sanctuary.',
  weapon: 'javelin', weaponName: 'Javelins & sword', alt: 'right mouse — sword',
  heroes: [
    { look: 'ulysses', name: 'Ulysses', who: 'King of Ithaca, the man of many wiles', trait: 'Sure aim', effect: 'javelins fly faster and hit harder', mods: { power: 1.3 }, sleeve: 0xc8946c, cuff: 0x8a6424 },
    { look: 'achilles', name: 'Achilles', who: 'Greatest warrior of the Trojan War', trait: 'Nearly invulnerable', effect: 'takes 35% less damage', mods: { armor: 0.65 }, sleeve: 0xd8a882, cuff: 0xd9b23a },
    { look: 'heracles', name: 'Heracles', who: 'Strongest of heroes, of the twelve labours', trait: 'Strength of ten', effect: 'starts with 170 health', mods: { hp: 170 }, sleeve: 0xc0875c, cuff: 0xc9963a },
  ],
  keys: '<kbd>↑</kbd><kbd>↓</kbd><kbd>←</kbd><kbd>→</kbd> move &nbsp; <kbd>Shift</kbd> run &nbsp; <kbd>Space</kbd> jump<br><kbd>Left mouse</kbd> throw a javelin &nbsp; <kbd>Right mouse</kbd> sword cut',
  foes: 'Spartans remain', foesNone: 'The island is yours again', bossName: 'Lykos, captain of Sparta', bossDown: 'The Spartan captain has fallen', pickupText: 'Ambrosia  +35',
  deadTitle: 'To the shades', deadSub: 'The ferryman takes his coin.', clearTitle: 'Ithaca is home again',
  build,
};

const MARBLE = 0xece6d6, TERRA = 0xc4683a, BLUE = 0x2a5a9a;

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
  const PATH = [[0, 98], [0, 70], [5, 46], [0, 24], [0, 2], [0, -13]];
  const HILL = { x: 0, z: -52, top: 16 };
  const ISLETS = [[210, 70, 36, 13], [-230, -70, 46, 24], [70, 250, 30, 9], [-150, 230, 22, 15], [330, -160, 60, 30], [-60, -300, 50, 20]];
  // ---- terrain: one island with a harbour bay, a hill, and islets around ---------------
  const hf = new Heightfield(1000, 320, (x, z) => {
    const d = Math.hypot(x, z / 1.25);
    let land = 1 - smooth(74, 104, d);
    land = Math.max(land, 1 - smooth(16, 34, Math.hypot(x - 92, z - 58)));                // the fishermen's cape in the south-east
    land *= 1 - (1 - smooth(14, 32, Math.hypot(x + 98, z - 16))) * 0.92;                 // harbour bay in the west
    const calm = 1 - (1 - smooth(2, 9, dPoly(PATH, x, z))) * 0.85;
    let h = -7.5 + land * 12 + (fbm(x * 0.03, z * 0.03, 4, 3) - 0.5) * 3.4 * land * land * calm;
    h += 3.2 * Math.exp(-((x - 74) ** 2 + (z + 8) ** 2) / 260) * land;                   // headland of the round temple
    const hd = Math.hypot(x - HILL.x, z - HILL.z);
    let hill = 1 - smooth(25, 33.5, hd);
    if (Math.abs(x) < 5.2 && z > -34.5 && z < -7.5) hill = smooth(-9, -33, z);            // the stairway: 24 m long, so no step is higher than a walker can climb
    h = h * (1 - hill) + HILL.top * hill;
    for (const [ix, iz, r, ht] of ISLETS) h = Math.max(h, -7.5 + (ht + 7.5) * (1 - smooth(r * 0.3, r, Math.hypot(x - ix, z - iz))));
    return h;
  });
  world.height = (x, z) => hf.h(x, z);
  world.bounds = { x0: -104, x1: 128, z0: -92, z1: 116 };
  world.maxSlope = 0.95; world.waterY = -0.9;
  const cSand = new THREE.Color(0xeedcae), cDry = new THREE.Color(0xd2bc7c), cGreen = new THREE.Color(0xa3a45e), cRock = new THREE.Color(0xd8cfb8), cPath = new THREE.Color(0xd9c79c),
    cShallow = new THREE.Color(0x46b8b4), cDeep = new THREE.Color(0x0d587a), tmp = new THREE.Color();
  root.add(hf.mesh(M.ground, (x, z, h, ny) => {
    if (h < 0) return tmp.copy(cSand).lerp(cShallow, smooth(0, -1.4, h)).lerp(cDeep, smooth(-1.4, -5.5, h));
    tmp.copy(cDry).lerp(cGreen, smooth(0.5, 0.72, fbm(x * 0.022 + 9, z * 0.022, 3, 7)) * 0.8);
    tmp.lerp(cPath, (1 - smooth(1.0, 3.0, dPoly(PATH, x, z))) * 0.85);
    tmp.lerp(cSand, 1 - smooth(1.6, 3.6, h));
    tmp.lerp(cRock, 1 - smooth(0.62, 0.86, ny));
    return tmp;
  }));
  const sea = new THREE.Mesh(new THREE.PlaneGeometry(3000, 3000), makeWater(shared, { deep: 0x1c8cae, scale: 0.42, flow: [0.1, 0.06], alpha: 0.4 }));
  sea.rotation.x = -Math.PI / 2; root.add(sea);

  // ---- building blocks ----------------------------------------------------------------
  const frame = (x, z, ry) => { const c = Math.cos(ry), s = Math.sin(ry); return (lx, lz) => [x + lx * c + lz * s, z - lx * s + lz * c]; };
  const column = (x, y, z, h, r = 0.46) => {
    B.cyl(M.plaster, r * 0.85, r, h, x, y, z, { c: MARBLE, seg: 14 });
    B.cyl(M.plaster, r * 1.3, r * 0.86, 0.22, x, y + h, z, { c: MARBLE, seg: 14 });
    B.box(M.plaster, r * 2.7, 0.2, r * 2.7, x, y + h + 0.22, z, { c: MARBLE });
    world.addCyl(x, z, r + 0.04, y - 1, y + h);
  };
  const house = (x, z, ry, w = 7, d = 6, h = 3.1) => {
    const P = frame(x, z, ry), yf = Math.max(world.height(x, z), ...[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([a, b]) => world.height(...P(a * w / 2, b * d / 2)))) + 0.05, f = yf + 0.06;
    room(B, M, x, yf, z, { w, d, h, t: 0.3, ry, mat: M.plaster, c: 0xf2ede0, base: 2.6, doors: [{ side: 's', at: -w * 0.2, w: 1.6, h: 2.1 }],
      wins: [{ side: 's', at: w * 0.24, w: 0.9, y: 1.15, h: 0.85 }, { side: 'n', at: 0, w: 0.9, y: 1.15, h: 0.85 }], floor: { mat: M.cobble, c: 0xe0d6c0 }, ceil: { mat: M.woodH, c: 0x8a6a48 } });
    steps(B, M, ...P(-w * 0.2, d / 2), ry, f, 6, { w: 1.9, c: 0xe6dfcc });
    B.geo(M.kawara, prismGeo(w + 1.2, 1.35, d + 1.2, 1.6), [x, yf + h, z], [0, ry, 0], 1, TERRA);
    const [dx, dz] = P(-w * 0.2 - 0.85, d / 2 + 0.55); B.box(M.woodH, 0.1, 2.1, 1.1, dx, yf, dz, { ry, c: 0x2c5a8a });      // blue door, open
    const [wx, wz] = P(w * 0.24, d / 2 + 0.03); B.box(M.woodH, 1.0, 0.1, 0.14, wx, yf + 1.06, wz, { ry, c: 0x2c5a8a });
    const [bx, bz] = P(w * 0.38, d / 2 + 0.7), by = world.height(bx, bz);
    B.cyl(M.flat, 0.24, 0.13, 0.62, bx, by, bz, { c: TERRA, seg: 9 }); B.cyl(M.flat, 0.1, 0.14, 0.2, bx, by + 0.62, bz, { c: TERRA, seg: 9 });
    const [tx, tz] = P(w * 0.2, -d * 0.14); B.box(M.woodH, 1.2, 0.7, 0.7, tx, f, tz, { ry, c: 0x7a5a3a, solid: true }); B.cyl(M.flat, 0.16, 0.08, 0.14, tx, f + 0.7, tz, { c: TERRA, seg: 9 });
    const [ex, ez] = P(-w / 2 + 0.85, -d / 2 + 1.3); B.box(M.woodH, 0.9, 0.45, 1.8, ex, f, ez, { ry, c: 0x6a4a2e, solid: true }); B.box(M.cloth, 0.86, 0.08, 1.5, ex, f + 0.45, ez, { ry, c: 0x2c5a8a });
    for (const k of [0, 1]) { const [qx, qz] = P(w / 2 - 0.6 - k * 0.55, -d / 2 + 0.6); B.cyl(M.flat, 0.24, 0.13, 0.62, qx, f, qz, { c: TERRA, seg: 9 }); B.cyl(M.flat, 0.1, 0.14, 0.2, qx, f + 0.62, qz, { c: TERRA, seg: 9 }); world.addCyl(qx, qz, 0.24, f, f + 0.8); }
  };
  const statue = (x, z, ry, s = 1.5) => {
    const y = world.height(x, z), c = 0xe2dccc;
    B.box(M.plaster, 1.5, 1.3, 1.5, x, y - 0.2, z, { c: MARBLE, solid: true }); B.box(M.plaster, 1.8, 0.2, 1.8, x, y + 1.1, z, { c: MARBLE });
    const f = makeHumanoid(M, { lip: c, skin: c, hair: c, shirt: c, sleeve: c, pants: c, boots: c, belt: c, hat: 'corinthian', hatC: c, plume: c, extras: ['cuirass', 'kilt'], armor: c, kilt: c, kilt2: c, aspis: c, aspisBoss: c, weapon: 'spear', scale: s });
    f.group.position.set(x, y + 1.3, z); f.group.rotation.y = ry; f.armR.rotation.x = -1.25; f.armR.rotation.z = 0.12; root.add(f.group);
  };

  const extraFoes = [], extraPicks = [], grove = [];
  // mosaic floor: border, meander, a sun and four dolphins, cut into small stones
  const mosaicTex = drawTexture(512, 512, (g, w, h) => {
    g.fillStyle = '#e8dcc0'; g.fillRect(0, 0, w, h);
    g.strokeStyle = '#2a3a5a'; g.lineWidth = 12; g.strokeRect(14, 14, w - 28, h - 28); g.strokeStyle = '#a83a2a'; g.lineWidth = 6; g.strokeRect(40, 40, w - 80, h - 80);
    g.strokeStyle = '#2a3a5a'; g.lineWidth = 6;
    for (let i = 0; i < 12; i++) for (const y of [62, h - 92]) { const x = 62 + i * 33; g.beginPath(); g.moveTo(x, y + 30); g.lineTo(x, y); g.lineTo(x + 22, y); g.lineTo(x + 22, y + 20); g.lineTo(x + 10, y + 20); g.lineTo(x + 10, y + 10); g.stroke(); }
    for (let i = 0; i < 10; i++) for (const x of [62, w - 92]) { const y = 102 + i * 31; g.beginPath(); g.moveTo(x + 30, y); g.lineTo(x, y); g.lineTo(x, y + 22); g.lineTo(x + 20, y + 22); g.lineTo(x + 20, y + 10); g.lineTo(x + 10, y + 10); g.stroke(); }
    g.translate(w / 2, h / 2);
    g.fillStyle = '#1c5a7a'; g.beginPath(); g.arc(0, 0, 130, 0, 6.283); g.fill();
    g.fillStyle = '#e8dcc0'; g.beginPath(); g.arc(0, 0, 112, 0, 6.283); g.fill();
    for (let i = 0; i < 16; i++) { g.rotate(6.283 / 16); g.fillStyle = i % 2 ? '#c8862a' : '#a83a2a'; g.beginPath(); g.moveTo(0, -30); g.lineTo(13, -100); g.lineTo(-13, -100); g.closePath(); g.fill(); }
    g.fillStyle = '#d9b23a'; g.beginPath(); g.arc(0, 0, 32, 0, 6.283); g.fill();
    for (let i = 0; i < 4; i++) { g.rotate(1.5708); g.fillStyle = '#1c5a7a'; g.beginPath(); g.ellipse(0, -165, 34, 13, 0.3, 0, 6.283); g.fill(); g.beginPath(); g.moveTo(-30, -160); g.lineTo(-50, -177); g.lineTo(-47, -150); g.closePath(); g.fill(); }
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.strokeStyle = 'rgba(60,50,40,0.3)'; g.lineWidth = 1;
    for (let i = 0; i <= w; i += 8) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, h); g.stroke(); g.beginPath(); g.moveTo(0, i); g.lineTo(w, i); g.stroke(); }
  });
  mosaicTex.userData.own = true;
  const mosaicMat = new THREE.MeshStandardMaterial({ map: mosaicTex, roughness: 0.55 });
  const mosaic = (x, y, z, w, d, ry = 0) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, 0.05, d), mosaicMat); m.position.set(x, y, z); m.rotation.y = ry; m.receiveShadow = true; root.add(m); };
  /** Athena: helmet with a crest, long robe, shield and spear, on a plinth. */
  const athena = (x, z, ry, s, c, plinth = 1.5) => {
    const y = world.height(x, z) - 0.2;
    B.box(M.plaster, 1.25 * s, plinth, 1.25 * s, x, y, z, { c: MARBLE, solid: true }); B.box(M.plaster, 1.4 * s, 0.18, 1.4 * s, x, y + plinth - 0.18, z, { c: MARBLE });
    const f = makeHumanoid(M, { lip: c, brow: c, skin: c, hair: c, shirt: c, sleeve: c, pants: c, boots: c, belt: c, hat: 'corinthian', hatC: c, plume: c, face: ['longhair'], extras: ['robe', 'cuirass'], robe: c, sash: c, armor: c, aspis: c, aspisBoss: c, weapon: 'spear', scale: s });
    f.group.position.set(x, y + plinth, z); f.group.rotation.y = ry; f.armR.rotation.x = -1.25; f.armR.rotation.z = 0.12; root.add(f.group);
  };

  // ---- the temple on the hill ----------------------------------------------------------
  {
    const x = 0, z = -57, y0 = HILL.top - 0.1, w = 13, l = 25, ch = 6.4;
    for (let i = 0; i < 3; i++) B.box(M.plaster, w + 3.6 - i * 0.9, 0.4, l + 3.6 - i * 0.9, x, y0 + i * 0.4, z, { c: MARBLE, solid: true });
    const y = y0 + 1.2;
    for (let i = 0; i < 6; i++) for (const s of [-1, 1]) column(x - w / 2 + i * (w / 5), y, z + s * l / 2, ch);
    for (let i = 1; i < 10; i++) for (const s of [-1, 1]) column(x + s * w / 2, y, z - l / 2 + i * (l / 10), ch);
    room(B, M, x, y, z - 1.2, { w: w - 4.6, d: l - 9, h: ch + 0.2, t: 0.5, mat: M.plaster, c: 0xf0eadc, base: 0.05, doors: [{ side: 's', at: 0, w: 2.4, h: 4.2 }],
      floor: { mat: M.cobble, c: 0xe8e0d0 }, ceil: { mat: M.plaster, c: 0xe2dccc } });                                              // cella, open to the faithful
    for (const s of [-1, 1]) B.box(M.metal, 0.12, 4.2, 1.2, x + s * 1.3, y, z - 1.2 + (l - 9) / 2 + 0.62, { c: 0x9a7030 });       // bronze doors, thrown open
    for (const s of [-1, 1]) { B.cyl(M.metal, 0.3, 0.16, 0.9, x + s * 2.6, y + 0.06, z - 6.2, { c: 0xb8893a, seg: 8 }); B.geo(M.glow, new THREE.ConeGeometry(0.2, 0.5, 6), [x + s * 2.6, y + 1.2, z - 6.2], [0, 0, 0], 1, 0xff7a20); world.addCyl(x + s * 2.6, z - 6.2, 0.3, y, y + 1); }
    const ey = y + ch + 0.42;
    for (const s of [-1, 1]) { B.box(M.plaster, w + 1.4, 1.0, 1.3, x, ey, z + s * l / 2, { c: MARBLE }); B.box(M.plaster, 1.3, 1.0, l + 1.4, x + s * w / 2, ey, z, { c: MARBLE }); }
    for (let i = 0; i < 13; i++) for (const s of [-1, 1]) B.box(M.flat, 0.5, 0.42, 0.06, x - 6 + i, ey + 0.5, z + s * (l / 2 + 0.66), { c: i % 2 ? BLUE : 0xb83a2a });
    for (const s of [-1, 1]) {
      B.geo(M.plaster, prismGeo(w + 2.2, 2.7, 0.7, 3), [x, ey + 1.0, z + s * (l / 2 + 0.2)], [0, 0, 0], 1, MARBLE);
      B.geo(M.flat, prismGeo(w - 0.6, 1.9, 0.2, 3), [x, ey + 1.15, z + s * (l / 2 + 0.52)], [0, 0, 0], 1, BLUE);
      for (const k of [-1, 0, 1]) B.geo(M.metal, new THREE.ConeGeometry(0.28, 0.9, 6), [x + k * (w / 2 + 0.9), ey + (k ? 1.4 : 4.1), z + s * (l / 2 + 0.2)], [0, 0, 0], 1, 0xd9b23a);
    }
    B.geo(M.kawara, prismGeo(w + 2.6, 2.75, l + 2.2, 1.6), [x, ey + 1.0, z], [0, 0, 0], 1, TERRA);
    // altar and fire bowls in front
    B.box(M.plaster, 3.4, 1.1, 1.6, 0, HILL.top - 0.1, -36.5, { c: MARBLE, solid: true }); B.box(M.plaster, 3.8, 0.18, 2.0, 0, HILL.top + 1.0, -36.5, { c: MARBLE });
  }
  const fires = [brazier(B, M, -5.5, HILL.top, -34, 1.2), brazier(B, M, 5.5, HILL.top, -34, 1.2), brazier(B, M, -6, world.height(-6, -11), -11), brazier(B, M, 6, world.height(6, -11), -11)];
  statue(-11, -33, 0.4, 1.6); statue(11, -33, -0.4, 1.6); athena(0, -64.5, 0, 2.3, 0xd9b23a, 1.3); mosaic(0, HILL.top + 1.2, -56.6, 6.6, 6.6);
  athena(15.5, -40, -0.5, 3.0, 0x6a8a6e, 2.2);                                              // Athena in bronze, watching the stair                      // the god of the house, inside the cella
  // stairway (the terrain underneath is a ramp)
  for (let i = 0; i < 40; i++) { const z = -9 - i * 0.6; B.box(M.plaster, 9.6, 0.5, 0.66, 0, world.height(0, z - 0.3) - 0.42, z - 0.3, { c: i % 2 ? 0xe6dfcc : 0xdcd4c0, solid: true }); }
  for (const s of [-1, 1]) for (let i = 0; i < 7; i++) { const z = -9 - i * 3.6; B.box(M.plaster, 0.9, 1.6, 3.7, s * 5.3, world.height(s * 5.3, z - 1.8) - 0.5, z - 1.8, { c: MARBLE, solid: true }); }

  // ---- village and agora ------------------------------------------------------------------
  { const y = world.height(0, 24); B.box(M.cobble, 16, 0.14, 15, 0, y - 0.06, 24, { c: 0xf0e8d4 }); mosaic(0, y + 0.1, 24, 9, 9); }
  house(-17, 39, 0.3); house(-23, 23, 1.4, 8, 6); house(-15, 9, -0.2, 6, 6); house(17, 38, -0.4, 8, 6.5); house(-34, 36, 0.9, 6, 5.5); house(34, 44, 0.2, 6, 5.5);
  statue(0, 24, 0, 1.7);
  { // stoa on the east side of the agora, open toward the square
    const x = 24, z = 12, l = 24, y = world.height(x, z) - 0.2;
    B.box(M.plaster, 7.4, 0.5, l + 1.4, x, y, z, { c: MARBLE, solid: true });
    B.box(M.plaster, 0.6, 4.4, l, x + 3.2, y + 0.5, z, { c: 0xf0eadc, solid: true });
    for (let i = 0; i < 9; i++) column(x - 3.1, y + 0.5, z - l / 2 + 0.6 + i * (l - 1.2) / 8, 3.7, 0.34);
    B.box(M.plaster, 7.6, 0.5, l + 1.2, x, y + 4.6, z, { c: MARBLE });
    B.box(M.kawara, 8.2, 0.16, l + 1.8, x, y + 5.3, z, { rz: 0.1, c: TERRA });
    for (let i = 0; i < 6; i++) { const az = z - 9 + i * 3.6 + R(); B.cyl(M.flat, 0.26, 0.14, 0.7, x + 2.2, y + 0.5, az, { c: TERRA, seg: 9 }); B.cyl(M.flat, 0.1, 0.16, 0.22, x + 2.2, y + 1.2, az, { c: TERRA, seg: 9 }); }
  }
  { // well
    const y = world.height(-6, 30); B.cyl(M.stone, 0.9, 1.0, 0.8, -6, y - 0.1, 30, { c: 0xe0d8c4, solid: true, seg: 12 }); B.cyl(M.flat, 0.7, 0.7, 0.02, -6, y + 0.68, 30, { c: 0x14323c, seg: 12 });
  }
  // round temple on the eastern headland
  {
    const x = 74, z = -8, y = world.height(x, z) - 0.3;
    B.cyl(M.plaster, 5.4, 5.6, 0.9, x, y, z, { c: MARBLE, seg: 24, solid: true });
    for (let i = 0; i < 10; i++) column(x + Math.cos(i * 0.628) * 4.3, y + 0.9, z + Math.sin(i * 0.628) * 4.3, 4.2, 0.36);
    B.cyl(M.plaster, 2.2, 2.2, 4.6, x, y + 0.9, z, { c: 0xf0eadc, seg: 16, solid: true });
    B.cyl(M.plaster, 5.0, 5.0, 0.7, x, y + 5.55, z, { c: MARBLE, seg: 24 });
    B.geo(M.kawara, new THREE.ConeGeometry(5.5, 2.4, 24), [x, y + 7.45, z], [0, 0, 0], 1, TERRA);
    B.geo(M.metal, new THREE.SphereGeometry(0.3, 8, 6), [x, y + 8.8, z], [0, 0, 0], 1, 0xd9b23a);
  }

  // ---- a villa with a colonnaded court, a theatre, an olive grove --------------------------
  {
    const x = 50, z = 24, w = 14, d = 13, P = frame(x, z, 0), yf = Math.max(world.height(x, z), ...[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([a, b]) => world.height(...P(a * w / 2, b * d / 2)))) + 0.05, f = yf + 0.06;
    room(B, M, x, yf, z, { w, d, h: 3.4, t: 0.35, mat: M.plaster, c: 0xf2ede0, base: 2.6, doors: [{ side: 'w', at: 0, w: 2.4, h: 2.6 }], wins: [{ side: 's', at: -3, w: 1.0, y: 1.2, h: 0.9 }, { side: 'n', at: -3, w: 1.0, y: 1.2, h: 0.9 }],
      floor: { mat: M.cobble, c: 0xe0d6c0 }, ceil: false });
    steps(B, M, x - w / 2, z, -Math.PI / 2, f, 6, { w: 2.8, c: 0xe6dfcc });
    for (const [lx, lz] of [[-3, -2.7], [0.4, -2.7], [-3, 2.7], [0.4, 2.7]]) column(x + lx, f, z + lz, 3.0, 0.3);
    B.box(M.plaster, 3.0, 0.4, 2.4, x - 1.3, f, z, { c: MARBLE, solid: true }); B.box(M.glow, 2.5, 0.02, 1.9, x - 1.3, f + 0.36, z, { c: 0x1a5a6a });      // the pool that catches the rain
    mosaic(x - 1.3, f + 0.03, z, 6.4, 6.4);
    for (const s of [-1, 1]) {                                                                  // roofs over the walks; the court is open to the sky
      B.box(M.kawara, w, 0.16, 3.4, x, yf + 3.4, z + s * 4.8, { rx: s * 0.1, c: TERRA }); B.box(M.kawara, 3.2, 0.16, 6.4, x - 5.4, yf + 3.4, z, { c: TERRA });
      room(B, M, x + 4.9, yf, z + s * 4.0, { w: 3.4, d: 4.0, h: 3.0, t: 0.25, mat: M.plaster, c: 0xe8e0d0, base: 0.05, doors: [{ side: 'w', at: 0, w: 1.6, h: 2.2 }], floor: { mat: M.cobble, c: 0xd8cebc }, ceil: { mat: M.woodH, c: 0x8a6a48 } });
    }
    B.box(M.kawara, 3.8, 0.16, 12.4, x + 4.9, yf + 3.4, z, { c: TERRA });
    B.box(M.woodH, 0.8, 0.45, 1.9, x + 5.8, f, z - 4.2, { c: 0x6a4a2e, solid: true }); B.box(M.cloth, 0.76, 0.1, 1.6, x + 5.8, f + 0.45, z - 4.2, { c: 0x8a1c5a });
    B.box(M.stone, 1.0, 0.7, 1.0, x + 5.6, f, z + 4.9, { c: 0xb8ae98, solid: true }); B.geo(M.glow, new THREE.ConeGeometry(0.16, 0.4, 6), [x + 5.6, f + 0.9, z + 4.9], [0, 0, 0], 1, 0xff7a20);
    for (const [ax, az] of [[x - 6, z + 5.4], [x - 5.4, z + 5.6], [x - 6, z - 5.5]]) { B.cyl(M.flat, 0.26, 0.14, 0.7, ax, f, az, { c: TERRA, seg: 9 }); B.cyl(M.flat, 0.1, 0.16, 0.22, ax, f + 0.7, az, { c: TERRA, seg: 9 }); world.addCyl(ax, az, 0.26, f, f + 0.9); }
    extraFoes.push(['hoplite', x - 4.6, z + 1.2, { up: 1.8, patrol: false, yaw: -1.57 }], ['peltast', x + 4.8, z + 3.6, { up: 1.8, patrol: false, yaw: -1.57 }]); extraPicks.push([x + 4.6, z - 3.4, 0, 1.8]);
  }
  { // theatre: five rows of marble seats round a mosaic floor, and a stage house with three doors
    const cx = 42, cz = -24, yb = world.height(cx, cz);
    for (let k = 0; k < 5; k++) { const r = 5.2 + k * 1.1, n = 8 + k, L = r * 2.8 / n + 0.06; for (let i = 0; i < n; i++) { const a = -1.4 + (i + 0.5) * 2.8 / n; B.box(M.plaster, 1.1, (k + 1) * 0.4 + 3, L, cx + Math.cos(a) * r, yb - 3, cz + Math.sin(a) * r, { ry: -a, c: (i + k) % 2 ? MARBLE : 0xe2dccc, solid: true }); } }
    B.cyl(M.cobble, 4.6, 4.6, 0.1, cx, yb - 0.04, cz, { c: 0xe8e0d0, seg: 24 }); mosaic(cx, yb + 0.08, cz, 5.4, 5.4);
    room(B, M, cx - 7.4, yb, cz, { w: 2.6, d: 10, h: 3.2, t: 0.3, mat: M.plaster, c: 0xf0eadc, base: 2.6, doors: [{ side: 'e', at: -3, w: 1.6, h: 2.3 }, { side: 'e', at: 0, w: 1.6, h: 2.3 }, { side: 'e', at: 3, w: 1.6, h: 2.3 }, { side: 'w', at: 0, w: 1.6, h: 2.3 }],
      floor: { mat: M.cobble, c: 0xd8cebc }, ceil: { mat: M.plaster, c: MARBLE } });
    B.box(M.plaster, 3.2, 0.3, 10.6, cx - 7.4, yb + 3.4, cz, { c: MARBLE });
    for (const dz of [-4.4, -1.5, 1.5, 4.4]) column(cx - 5.7, yb, cz + dz, 2.9, 0.26);
    extraFoes.push(['hoplite', cx + 1.4, cz + 0.6, {}], ['peltast', cx - 7.4, cz - 3.2, { up: 1.6, patrol: false }]); extraPicks.push([cx - 7.4, cz + 3.4, 0, 1.6]);
  }
  { // olive grove with its press
    for (let i = 0; i < 5; i++) for (let j = 0; j < 5; j++) {
      const x = -46 + i * 4.3 + (R() - 0.5) * 1.4, z = -25 + j * 4.3 + (R() - 0.5) * 1.4, h = world.height(x, z); if (h < 2.6 || (i === 2 && j === 4)) continue;
      const s = 0.85 + R() * 0.5; grove.push({ x, y: h - 0.15, z, ry: R() * 6.28, s }); world.addCyl(x, z, 0.35 * s, h - 2, h + 5);
    }
    const px = -37.4, pz = -7.2, py = world.height(px, pz);
    B.cyl(M.stone, 1.3, 1.4, 0.6, px, py - 0.1, pz, { c: 0xd8cfb8, seg: 14, solid: true }); B.cyl(M.stone, 0.7, 0.7, 0.4, px + 0.3, py + 0.75, pz, { rx: Math.PI / 2, c: 0xb8ae98, seg: 14 });
    B.cyl(M.wood, 0.07, 0.07, 3.2, px, py + 0.95, pz, { rz: Math.PI / 2, c: 0x6a4a30, seg: 6 }); B.cyl(M.wood, 0.1, 0.1, 1.5, px, py + 0.5, pz, { c: 0x6a4a30, seg: 6 });
    for (const [ax, az] of [[px + 2, pz + 0.6], [px + 2.5, pz - 0.2], [px - 1.9, pz + 1.2]]) { const ay = world.height(ax, az); B.cyl(M.flat, 0.26, 0.14, 0.7, ax, ay, az, { c: TERRA, seg: 9 }); B.cyl(M.flat, 0.1, 0.16, 0.22, ax, ay + 0.7, az, { c: TERRA, seg: 9 }); world.addCyl(ax, az, 0.26, ay - 1, ay + 0.9); }
    extraFoes.push(['peltast', -36, -13, {}]);
  }

  // ---- the fishermen's cape: two houses and a beacon tower -------------------------------
  {
    house(88, 51, -1.2, 7, 6); house(97, 61, 2.4, 6, 5.5);
    const x = 101, z = 50, w = 5.4, d = 5.4, P = frame(x, z, 0), yf = Math.max(world.height(x, z), ...[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([a, b]) => world.height(...P(a * w / 2, b * d / 2)))) + 0.05;
    room(B, M, x, yf, z, { w, d, h: 3.2, t: 0.5, mat: M.plaster, c: MARBLE, base: 3, doors: [{ side: 'w', at: 0, w: 1.7, h: 2.2 }], wins: [{ side: 's', at: 0, w: 0.6, y: 1.2, h: 1.0 }, { side: 'e', at: 0, w: 0.6, y: 1.2, h: 1.0 }],
      floor: { mat: M.cobble, c: 0xe0d6c0 }, ceil: { mat: M.woodH, c: 0x8a6a48 } });
    steps(B, M, x - w / 2, z, -Math.PI / 2, yf + 0.06, 6, { w: 2.0, c: 0xe6dfcc });
    B.cyl(M.plaster, 1.9, 2.6, 6.4, x, yf + 3.4, z, { c: MARBLE, seg: 12 }); world.addBox(x, z, w, d, 0, yf + 3.3, yf + 10);
    B.cyl(M.plaster, 2.4, 2.0, 0.4, x, yf + 9.8, z, { c: MARBLE, seg: 12 }); B.cyl(M.metal, 0.9, 0.5, 0.5, x, yf + 10.2, z, { c: 0xb8893a, seg: 10 });
    B.geo(M.glow, new THREE.ConeGeometry(0.7, 1.6, 7), [x, yf + 11.4, z], [0, 0, 0], 1, 0xff7a20);
    for (const [ax, az] of [[x + 1.6, z - 1.6], [x + 1.5, z + 1.5], [x - 0.2, z + 1.8]]) { B.cyl(M.flat, 0.26, 0.14, 0.7, ax, yf + 0.06, az, { c: TERRA, seg: 9 }); B.cyl(M.flat, 0.1, 0.16, 0.22, ax, yf + 0.76, az, { c: TERRA, seg: 9 }); world.addCyl(ax, az, 0.26, yf, yf + 0.9); }
    for (const [nx, nz, ry] of [[92, 62, 0.4], [85, 58, 1.3]]) {                                           // nets drying on poles
      const y = world.height(nx, nz), c = Math.cos(ry), s = Math.sin(ry);
      for (const k of [-1, 1]) B.box(M.wood, 0.1, 2.3, 0.1, nx + k * 1.6 * c, y - 0.2, nz - k * 1.6 * s, { c: 0x6a4a30 });
      B.box(M.cloth, 3.2, 1.3, 0.03, nx, y + 0.75, nz, { ry, c: 0x8a9a8a }); B.box(M.wood, 3.4, 0.07, 0.07, nx, y + 2.05, nz, { ry, c: 0x6a4a30 }); world.addBox(nx, nz, 3.3, 0.25, ry, y - 1, y + 2.1);
    }
    for (const [bx, bz, ry] of [[104, 62, 0.7], [99, 68, 1.9]]) { const y = Math.max(0.2, world.height(bx, bz)); B.geo(M.flat, new THREE.SphereGeometry(1, 10, 6), [bx, y + 0.25, bz], [0, ry, 0], [0.75, 0.55, 2.4], 0x3a5a7a); B.box(M.woodH, 1.0, 0.08, 3.6, bx, y + 0.5, bz, { ry, c: 0x8a6a48 }); world.addBox(bx, bz, 1.5, 4.6, ry, y - 1, y + 0.9); }
  }

  // ---- ships ---------------------------------------------------------------------------------
  ship(B, M, -3, 0.25, 109.5, 0.25, { len: 13, hull: 0x3a2a1c, sail: 0xe8dcc0 });                    // your own ship, drawn up on the home beach
  const shore = (z) => { let x = -40; while (x > -110 && world.height(x, z) > 0.35) x -= 0.5; return x; };
  ship(B, M, shore(8) - 2, 0.3, 8, -1.3, { len: 17, sail: 0xa01414, lambda: true, shields: [0xb8893a, 0x8a1414] });
  ship(B, M, shore(24) - 2, 0.3, 24, -1.75, { len: 17, sail: 0xa01414, lambda: true, shields: [0xb8893a, 0x8a1414] });
  ship(B, M, -150, 0.25, 60, 0.9, { len: 18, sail: 0xa01414, lambda: true, shields: [0xb8893a, 0x8a1414] });
  { // landing stage and supplies in the harbour
    const x = shore(16), y = 0.5;
    B.box(M.woodH, 9, 0.2, 2.4, x - 2.5, y, 16, { c: 0x8a6a48, solid: true });
    for (let i = 0; i < 4; i++) for (const s of [-1, 1]) B.cyl(M.wood, 0.12, 0.12, 2.2, x - 6 + i * 2.3, -1.2, 16 + s * 1.1, { c: 0x6a4a30, seg: 6 });
    for (let i = 0; i < 9; i++) { const ax = x + 5 + R() * 6, az = 12 + R() * 9, ay = world.height(ax, az); B.cyl(M.flat, 0.26, 0.14, 0.7, ax, ay, az, { c: TERRA, seg: 9 }); B.cyl(M.flat, 0.1, 0.16, 0.22, ax, ay + 0.7, az, { c: TERRA, seg: 9 }); }
    B.geo(M.cloth, new THREE.ConeGeometry(2.4, 2.6, 4), [x + 14, world.height(x + 14, 26) + 1.3, 26], [0, 0.6, 0], 1, 0xa01414); world.addCyl(x + 14, 26, 1.7, -2, 6);
    B.geo(M.cloth, new THREE.ConeGeometry(2.4, 2.6, 4), [x + 16, world.height(x + 16, 4) + 1.3, 4], [0, 0.2, 0], 1, 0xa01414); world.addCyl(x + 16, 4, 1.7, -2, 6);
  }
  // islets: a small shrine on the nearest one
  { const [ix, iz] = ISLETS[0], y = world.height(ix, iz); B.box(M.plaster, 7, 4, 10, ix, y - 0.5, iz, { c: MARBLE }); B.geo(M.kawara, prismGeo(8.4, 1.8, 11.4, 1.6), [ix, y + 3.5, iz], [0, 0, 0], 1, TERRA); }
  for (let i = 0; i < 14; i++) { const a = i / 14 * 6.283 + 0.3, r = 520 + (i % 3) * 90; B.geo(M.flat, new THREE.SphereGeometry(1, 14, 8), [Math.cos(a) * r, -6, Math.sin(a) * r], [0, i, 0], [150 + (i % 4) * 60, 34 + (i * 37) % 40, 110 + (i % 3) * 50], 0x9db2c4); }

  // ---- vegetation -------------------------------------------------------------------------------
  const built = (x, z) => dPoly(PATH, x, z) < 3.6 || (Math.abs(x) < 9 && z < 34 && z > 14) || (x > 18 && x < 30 && z > -2 && z < 26) || Math.hypot(x - HILL.x, z - HILL.z) < 36 || Math.hypot(x - 74, z + 8) < 8 || Math.hypot(x - 93, z - 56) < 15 || Math.hypot(x - 50, z - 24) < 12 || Math.hypot(x - 41, z + 24) < 13 || Math.hypot(x + 37.4, z + 7.2) < 4
    || [[-17, 39], [-23, 23], [-15, 9], [17, 38], [-34, 36], [34, 44]].some(([hx, hz]) => Math.hypot(x - hx, z - hz) < 6.5);
  const olives = [], cypress = [], rocks = [], tufts = [], poppies = [], bushes = [];
  for (let i = 0; i < 4000 && olives.length < 60; i++) { const x = (R() - 0.5) * 190, z = -85 + R() * 195, h = world.height(x, z); if (h < 2.6 || h > 9 || built(x, z) || fbm(x * 0.04, z * 0.04, 2, 4) < 0.5) continue; const s = 0.8 + R() * 0.6; olives.push({ x, y: h - 0.15, z, ry: R() * 6.28, s }); world.addCyl(x, z, 0.35 * s, h - 2, h + 5); }
  for (let i = 0; i < 4000 && cypress.length < 46; i++) { const x = (R() - 0.5) * 180, z = -85 + R() * 190, h = world.height(x, z); if (h < 2.8 || h > 9 || built(x, z)) continue; const s = 0.8 + R() * 0.7; cypress.push({ x, y: h - 0.2, z, ry: R() * 6.28, s: [s, s * (1 + R() * 0.4), s] }); world.addCyl(x, z, 0.4 * s, h - 2, h + 8); }
  for (const o of grove) olives.push(o);
  root.add(instanced(blobTreeGeo({ leaf: [0x8f9f6a, 0xa8b47e, 0x7c8c5a], trunk: 0x5a4a3a, h: 3.4, spread: 2.5, blobs: 9, seed: 5 }), M.rock, olives));
  root.add(instanced(merge([gCyl(0.14, 0.2, 1.4, 0x4a3a2c, [0, 0.7, 0], [0, 0, 0], 1, 6), gCone(0.95, 8.6, 0x2f4d30, [0, 5.4, 0], [0, 0, 0], 1, 8), gCone(0.7, 4, 0x3a5a38, [0, 4.2, 0], [0, 1, 0], 1, 7)]), windify(M.rock.clone(), shared, 0.12, 9, 1.0), cypress));
  for (let i = 0; i < 300; i++) { const a = R() * 6.283, d = 80 + R() * 26, x = Math.cos(a) * d, z = Math.sin(a) * d * 1.25, h = world.height(x, z); if (h < -2.5 || h > 3) continue; const s = 0.4 + R() * R() * 2.6; rocks.push({ x, y: h + s * 0.2, z, ry: R() * 6, s: [s, s * 0.8, s], c: R.pick([0xd8cfb8, 0xc8bea6, 0xb8ae98]) }); if (s > 1 && h > -0.5) world.addCyl(x, z, s * 0.8, h - 2, h + s * 0.7); }
  for (const [ix, iz, r] of ISLETS) for (let k = 0; k < 6; k++) { const a = R() * 6.28, x = ix + Math.cos(a) * r * 0.9, z = iz + Math.sin(a) * r * 0.9, s = 2 + R() * 5; rocks.push({ x, y: world.height(x, z) + s * 0.3, z, ry: R() * 6, s: [s, s * 1.3, s], c: 0xc8bea6 }); }
  root.add(instanced(rockGeo(6, 1), M.rock, rocks));
  for (let i = 0; i < 60000 && tufts.length < 16000; i++) {
    const x = (R() - 0.5) * 200, z = -88 + R() * 200, h = world.height(x, z);
    if (h < 3.2 || dPoly(PATH, x, z) < 1.4 || Math.hypot(x - HILL.x, z - HILL.z) < 25 || (Math.abs(x) < 8.5 && z < 32 && z > 16)) continue;
    tufts.push({ x, y: h, z, ry: R() * 6.28, s: [0.35 + R() * 0.4, 0.2 + R() * 0.35, 0.35 + R() * 0.4], c: R.pick([0xd9c878, 0xc8b868, 0xa8ac5c, 0xe2d48a]) });
    if (i % 9 === 0) poppies.push({ x: x + 0.3, y: h, z: z + 0.2, ry: R() * 6, s: 0.7 + R() * 0.6, c: R.pick([0xe0301c, 0xe0301c, 0xf0d040, 0xffffff]) });
    if (i % 120 === 0 && !built(x, z)) { const s = 0.5 + R() * 0.6; bushes.push({ x, y: h + 0.2, z, ry: R() * 6, s: [s * 1.3, s * 0.8, s * 1.3], c: R.pick([0x5a7040, 0x6a7c4a, 0x4c6238]) }); }
  }
  root.add(instanced(tuftGeo(5, 0xa89a5a, 0xffffff), windify(M.flat2.clone(), shared, 0.22, 1, 2.0), tufts, { cast: false }));
  root.add(instanced(merge([gBox(0.012, 0.3, 0.012, 0x4a6a2a, [0, 0.15, 0]), xf(new THREE.IcosahedronGeometry(0.06, 0), [0, 0.32, 0], [0, 0, 0], [1, 0.6, 1], 0xffffff)]), windify(M.flat.clone(), shared, 0.2, 0.4, 2.0), poppies, { cast: false }));
  root.add(instanced(new THREE.IcosahedronGeometry(1, 1), M.rock, bushes));

  // ---- atmosphere ---------------------------------------------------------------------------------
  root.add(makeAmbient(shared, { count: 300, box: 40, boxY: 14, size: 0.04, colorA: 0xffffff, colorB: 0xfff4c8, alpha: 0.6, fall: -0.02, wind: [0.5, 0, 0.2], flutter: 0.8 }));
  const gullGeo = merge([gBox(1.5, 0.03, 0.26, 0xf4f4f0, [0, 0, 0]), gBox(0.2, 0.06, 0.6, 0xf4f4f0, [0, 0, 0.05])]);
  const gulls = [0, 1, 2, 3].map((i) => { const m = new THREE.Mesh(gullGeo, M.flat); root.add(m); return { m, r: 40 + i * 22, h: 26 + i * 6, sp: 0.16 + i * 0.03, ph: i * 1.7, cx: i % 2 ? -40 : 30, cz: i % 2 ? 60 : -10 }; });

  { // a lookout above the landing beach (up its ladder), an old cistern to crawl into
    const clearAt = (x, z, r) => { world.cyls = world.cyls.filter((c) => Math.hypot(c.x - x, c.z - z) > r + c.r); };
    clearAt(9, 84, 4); stand(B, M, 9, world.height(9, 83.7), 83.7, 0, { c: 0xb8a070, roof: 0xb86a42 });
    clearAt(-16, 71.5, 4); den(B, M, -16, world.height(-16, 71.1) + 0.02, 71.1, 0, { mat: M.plaster, c: 0xe8e0d0 }); extraPicks.push([-16, 71.3, 0, 0.6]);
  }
  const enemies = [
    ['hoplite', 5, 76, {}], ['peltast', -16, 66, {}], ['hoplite', 19, 58, { patrol: true }],
    ['peltast', -21, 31, {}], ['hoplite', -5, 33, {}], ['hoplite', 9, 20, { patrol: true }], ['peltast', 21, 10, { y: 6 }], ['hoplite', 12, 3, {}],
    ['hoplite', -58, 16, {}], ['peltast', -54, 26, {}], ['hoplite', -62, 5, { patrol: true }],
    ['peltast', 68, -3, {}], ['hoplite', 62, -11, {}],
    ['hoplite', -5, -7, {}], ['hoplite', 5, -7, {}],
    ['peltast', -12, -30, {}], ['peltast', 12, -30, {}], ['hoplite', -7, -39, {}], ['hoplite', 7, -39, {}], ['greeceBoss', 0, -42, { yaw: 0, patrol: false }],
    ['hoplite', -2.4, -58, { up: 1.8, patrol: false, yaw: 0 }], ['hoplite', 17, 38, { up: 1.8, patrol: false }],
    ['hoplite', 91, 57, {}], ['peltast', 95, 53, {}], ['hoplite', 100.4, 50.6, { up: 1.8, patrol: false }],
  ];
  const jar = merge([gCyl(0.16, 0.08, 0.3, 0xd9b23a, [0, 0, 0], [0, 0, 0], 1, 9), gCyl(0.06, 0.1, 0.12, 0xd9b23a, [0, 0.2, 0], [0, 0, 0], 1, 9), gCyl(0.09, 0.09, 0.03, 0xf0ece0, [0, 0.27, 0], [0, 0, 0], 1, 9)]);
  let ft = 0;
  return {
    env: {
      sunDir: [-0.42, 0.74, 0.52], sunColor: 0xfff2d8, sunLight: 0xfff6e6, sunIntensity: 4.6, sunSize: 0.0005,
      skyTop: 0x1462c6, skyHorizon: 0xa6d2f0, skyGround: 0x6aa8c8, haze: 0.6,
      fogColor: 0xa9d2ec, fogDensity: 0.0011, hemiSky: 0xb4d6ff, hemiGround: 0xd6c494, hemiIntensity: 1.7, envIntensity: 0.7,
      cloudCover: 0.44, cloudScale: 0.36, cloudLit: 0xffffff, cloudShade: 0xa6b6cc,
      bloom: 0.3, bloomRadius: 0.6, bloomThreshold: 1.5, rays: 0.2, rayThreshold: 2.8, exposure: 0.88,
      saturation: 1.2, contrast: 1.07, vignette: 0.28, tintHi: 0xfffaf0, tintLo: 0xe4f2ff, shadowRange: 95,
    },
    spawn: { x: 0, z: 99, yaw: 0 },
    vista: { c: [0, 6, 30], r: 60, h: 14, a: 1.5, speed: 0.03 },
    enemies: enemies.concat(extraFoes), pickups: [[-3, 62], [11, 27], [-52, 14], [66, -5], [0, -33.5], [2.6, -61, 0, 1.8], [101.8, 51.4, 0, 1.8], [-22.5, 23.5, 0, 1.8]].concat(extraPicks),
    dust: [0.78, 0.7, 0.52], water: [[0, 112, 30], [-70, 16, 34], [84, -8, 24]],
    makePickup: () => new THREE.Mesh(jar, M.flat),
    update(dt, t, g) {
      for (const b of gulls) { const a = t * b.sp + b.ph; b.m.position.set(b.cx + Math.cos(a) * b.r, b.h + Math.sin(t * 0.5 + b.ph) * 2, b.cz + Math.sin(a) * b.r); b.m.rotation.set(0, -a, 0.3); }
      ft -= dt;
      if (ft <= 0) {
        ft = 0.06;
        for (const f of fires) {
          g.gfx.glow.spawn(f[0] + (Math.random() - 0.5) * 0.2, f[1], f[2] + (Math.random() - 0.5) * 0.2, (Math.random() - 0.5) * 0.4, 1.2 + Math.random(), (Math.random() - 0.5) * 0.4, { life: 0.6 + Math.random() * 0.4, s0: 0.26, s1: 0.03, r: 3, g: 1.1, b: 0.25, a: 0.9 });
          if (Math.random() < 0.3) g.gfx.soft.spawn(f[0], f[1] + 0.6, f[2], 0.5, 1.3, 0.2, { life: 3, s0: 0.3, s1: 1.6, r: 0.6, g: 0.6, b: 0.6, a: 0.14, drag: 0.2 });
        }
      }
    },
  };
}
