// Chapter VIII - the road south of Lhasa, March 1959.
import * as THREE from 'three';
import { Heightfield, prismGeo, rockGeo } from '../build.js';
import { makeAmbient, windify } from '../gfx.js';
import { signTexture } from '../tex.js';
import { makeHumanoid, lookFor } from '../actors.js';
import { instanced, room, steps, crate, tuftGeo, horseGeo, gBox, gCyl, gCone, gSph, gCap, xf, merge, stand, den } from '../props.js';
import { fbm, ridged, smooth } from '../util.js';

export const tibet = {
  id: 'tibet', theme: 'theme-tibet', chapter: 'Chapter VIII', title: 'Che La', place: 'The road south of Lhasa · Tibet · March 1959',
  story: 'On the night of 17 March the Dalai Lama left Lhasa in a soldier’s cloak. He rides south for the passes, and the army is closing the road ahead of him. Go before the caravan: clear the valley, the village and the monastery on the ridge, so that he can cross to India.',
  weapon: 'carbine', weaponName: 'Rifle & knife', alt: 'right mouse — aim   ·   F — knife', knife: true,
  heroes: [
    { look: 'gompo', name: 'Gompo Tashi Andrugtsang', who: 'Khampa leader of the Chushi Gangdruk', trait: 'Marksman', effect: 'rifle: one shot fells a soldier', mods: {}, sleeve: 0x5a3422, cuff: 0xc8a878 },
    { look: 'pachen', name: 'Ani Pachen', who: 'The warrior nun who led her clan on horseback', trait: 'Rider', effect: 'pistol; moves 20% faster', weapon: 'revolver', weaponName: 'Pistol & knife', mods: { speed: 1.2 }, sleeve: 0x7a1c22, cuff: 0xd9a020 },
    { look: 'songtsen', name: 'Songtsen Gampo', who: 'The king who founded the Tibetan empire', trait: 'King of old', effect: 'bow and sword; takes 20% less damage', weapon: 'bow', weaponName: 'Bow & sword', alt: 'right mouse — sword', mods: { armor: 0.8 }, sleeve: 0xa01c1c, cuff: 0xd9b23a },
  ],
  keys: '<kbd>↑</kbd><kbd>↓</kbd><kbd>←</kbd><kbd>→</kbd> move &nbsp; <kbd>Shift</kbd> run &nbsp; <kbd>Space</kbd> jump<br><kbd>Left mouse</kbd> fire &nbsp; <kbd>Right mouse</kbd> aim &nbsp; <kbd>R</kbd> reload &nbsp; <kbd>F</kbd> knife',
  foes: 'soldiers remain', foesNone: 'The pass is open', bossName: 'Commander Zhao', bossDown: 'The column has lost its commander', pickupText: 'Butter tea  +35',
  deadTitle: 'Snow closes the road', deadSub: 'The caravan waits for a scout who does not return.', clearTitle: 'The pass is open',
  build,
};

const WHITE = 0xf2eee2, MAROON = 0x7a2420, GOLD = 0xd9b23a, FLAGS = [0x2a5ac8, 0xf4f4f0, 0xc82a22, 0x2a9a4a, 0xe8c020];

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
  const R = rand, PI = Math.PI;
  const PATH = [[0, 106], [2, 70], [9, 42], [7, 10], [0, -20], [0, -32]];
  const HILL = { x: 0, z: -78, top: 13.5 };
  // ---- terrain: a high valley under a ring of snow peaks -----------------------------------
  const hf = new Heightfield(1300, 400, (x, z) => {
    const calm = 1 - (1 - smooth(3, 10, dPoly(PATH, x, z))) * 0.85;
    let h = 3 + (30 - z) * 0.035 + (fbm(x * 0.022 + 5, z * 0.022, 4, 31) - 0.5) * 4.2 * calm;
    const vil = 1 - smooth(22, 34, Math.hypot(x - 14, z - 26)); h = h * (1 - vil * 0.85) + 3.3 * vil * 0.85;       // the village terrace
    h -= (1 - smooth(9, 22, Math.hypot(x + 58, z - 4))) * 3.2;                                                      // the lake
    let hill = 1 - smooth(25, 43, Math.hypot(x - HILL.x, z - HILL.z));
    if (Math.abs(x) < 5.2 && z > -54 && z < -29) hill = smooth(-30, -53, z);                                        // the stairway
    h = h * (1 - hill) + HILL.top * hill;
    const r = Math.hypot(x, z), m = smooth(140, 430, r);
    return h + m * (36 + ridged(x * 0.004 + 2, z * 0.004 + 9, 5, 13) * 250) + smooth(116, 190, r) * 14 * fbm(x * 0.02 + 1, z * 0.02, 3, 8);
  });
  world.height = (x, z) => hf.h(x, z);
  world.bounds = { x0: -112, x1: 112, z0: -106, z1: 108 };
  world.maxSlope = 0.95; world.waterY = -50;
  const cA = new THREE.Color(0xb09a5e), cB = new THREE.Color(0x8a7646), cP = new THREE.Color(0xc4b08a), cR = new THREE.Color(0x7c6a58), cS = new THREE.Color(0xf4f6fa), cF = new THREE.Color(0xd8dcd8), tmp = new THREE.Color();
  root.add(hf.mesh(M.ground, (x, z, h, ny) => {
    tmp.copy(cA).lerp(cB, fbm(x * 0.03 + 3, z * 0.03, 3, 9));
    tmp.lerp(cP, (1 - smooth(1.2, 3.4, dPoly(PATH, x, z))) * 0.85);
    tmp.lerp(cF, (1 - smooth(13, 20, Math.hypot(x + 58, z - 4))) * 0.7);
    tmp.lerp(cR, 1 - smooth(0.62, 0.84, ny));
    tmp.lerp(cS, smooth(34, 62, h + fbm(x * 0.02, z * 0.02, 3, 2) * 16) * smooth(0.45, 0.7, ny));
    return tmp;
  }));

  // ---- pieces ---------------------------------------------------------------------------------
  const frame = (x, z, ry) => { const c = Math.cos(ry), s = Math.sin(ry); return (lx, lz) => [x + lx * c + lz * s, z - lx * s + lz * c]; };
  const top = (P, w, d, x, z) => Math.max(world.height(x, z), ...[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([a, b]) => world.height(...P(a * w / 2, b * d / 2)))) + 0.05;
  const lights = [], fires = [];
  const lamp = (x, y, z, i = 26, d = 15, c = 0xffb060) => { if (lights.length >= 6) return; const l = new THREE.PointLight(c, i, d, 1.7); l.position.set(x, y, z); root.add(l); lights.push(l); };
  /** String of prayer flags between two points. */
  const flags = (x0, y0, z0, x1, y1, z1, n = 12) => {
    const ry = Math.atan2(-(z1 - z0), x1 - x0), L = Math.hypot(x1 - x0, y1 - y0, z1 - z0);
    for (let i = 0; i < n; i++) { const t = (i + 0.5) / n, sag = Math.sin(t * PI) * L * 0.07; B.box(M.cloth, 0.42, 0.3, 0.015, x0 + (x1 - x0) * t, y0 + (y1 - y0) * t - sag - 0.3, z0 + (z1 - z0) * t, { ry, rz: (i % 3 - 1) * 0.12, c: FLAGS[i % 5] }); }
    for (let i = 0; i < 6; i++) { const t0 = i / 6, t1 = (i + 1) / 6, m = (t0 + t1) / 2, sag = Math.sin(m * PI) * L * 0.07; B.box(M.flat, L / 6 + 0.05, 0.015, 0.015, x0 + (x1 - x0) * m, y0 + (y1 - y0) * m - sag - 0.02, z0 + (z1 - z0) * m, { ry, rz: Math.atan2((y1 - y0) / 6 - (Math.sin(t1 * PI) - Math.sin(t0 * PI)) * L * 0.07, Math.hypot(x1 - x0, z1 - z0) / 6), c: 0x3a3028 }); }
  };
  /** Whitewashed stupa. */
  const chorten = (x, z, s = 1) => {
    const y = world.height(x, z) - 0.3;
    B.box(M.plaster, 3.0 * s, 0.8 * s, 3.0 * s, x, y, z, { c: WHITE, solid: true }); B.box(M.plaster, 2.4 * s, 0.5 * s, 2.4 * s, x, y + 0.8 * s, z, { c: WHITE }); B.box(M.plaster, 1.9 * s, 0.5 * s, 1.9 * s, x, y + 1.3 * s, z, { c: WHITE });
    B.box(M.plaster, 3.1 * s, 0.14 * s, 3.1 * s, x, y + 0.66 * s, z, { c: MAROON });
    B.geo(M.plaster, new THREE.SphereGeometry(0.95 * s, 14, 10), [x, y + 2.55 * s, z], [0, 0, 0], [1, 1.05, 1], WHITE);
    B.box(M.plaster, 0.6 * s, 0.4 * s, 0.6 * s, x, y + 3.45 * s, z, { c: WHITE }); B.geo(M.metal, new THREE.ConeGeometry(0.3 * s, 1.4 * s, 10), [x, y + 4.55 * s, z], [0, 0, 0], 1, GOLD);
    B.geo(M.metal, new THREE.SphereGeometry(0.16 * s, 8, 6), [x, y + 5.35 * s, z], [0, 0, 0], 1, GOLD);
  };
  /** Flat-roofed Tibetan house; front (+Z local) has the door. */
  const house = (x, z, ry, w = 8, d = 7, h = 3.3) => {
    const P = frame(x, z, ry), yf = top(P, w, d, x, z), f = yf + 0.06, INK = 0x15120f;
    room(B, M, x, yf, z, { w, d, h, t: 0.45, ry, mat: M.plaster, c: WHITE, base: 2.6, doors: [{ side: 's', at: -w * 0.18, w: 1.7, h: 2.15 }],
      wins: [{ side: 's', at: w * 0.24, w: 1.0, y: 1.2, h: 0.9 }, { side: 'e', at: 0, w: 1.0, y: 1.2, h: 0.9 }], floor: { mat: M.ground, c: 0x8a7a62 }, ceil: { mat: M.woodH, c: 0x5a4030 } });
    steps(B, M, ...P(-w * 0.18, d / 2), ry, f, 6, { w: 2, c: 0xd8d0c0 });
    B.box(M.plaster, w + 0.3, 0.6, d + 0.3, x, yf + h + 0.2, z, { ry, c: MAROON }); B.box(M.flat, w + 0.5, 0.18, d + 0.5, x, yf + h + 0.8, z, { ry, c: 0x2a2018 });
    for (const [lx, ww] of [[w * 0.24, 1.0], [-w * 0.18, 1.7]]) {                              // black frames widening downward, a yellow valance
      const [fx, fz] = P(lx, d / 2 + 0.04), yt = ww > 1.2 ? 2.15 : 2.1;
      B.box(M.flat, ww + 0.5, 0.16, 0.1, fx, yf + yt, fz, { ry, c: INK }); B.box(M.cloth, ww + 0.4, 0.2, 0.06, fx, yf + yt + 0.16, fz, { ry, c: 0xe0a82a });
      for (const s of [-1, 1]) { const [sx, sz] = P(lx + s * (ww / 2 + 0.14), d / 2 + 0.04); B.box(M.flat, 0.2, ww > 1.2 ? 2.15 : 1.0, 0.1, sx, yf + (ww > 1.2 ? 0 : 1.15), sz, { ry, rz: s * 0.05, c: INK }); }
    }
    for (const [a, b] of [[-1, -1], [1, 1]]) { const [px, pz] = P(a * (w / 2 - 0.25), b * (d / 2 - 0.25)); B.cyl(M.wood, 0.03, 0.03, 2.4, px, yf + h + 0.9, pz, { c: 0x6a4a30, seg: 5 }); for (let k = 0; k < 5; k++) B.box(M.cloth, 0.5, 0.3, 0.02, px + 0.28, yf + h + 1.4 + k * 0.36, pz, { ry, c: FLAGS[k] }); }
    const [hx, hz] = P(w * 0.2, -d * 0.12); B.box(M.stone, 1.0, 0.55, 1.0, hx, f, hz, { ry, c: 0x4a4038, solid: true }); B.geo(M.glow, new THREE.ConeGeometry(0.16, 0.4, 6), [hx, f + 0.75, hz], [0, 0, 0], 1, 0xff7a20); B.cyl(M.metal, 0.22, 0.26, 0.3, hx, f + 0.55, hz, { c: 0x2a2a2e, seg: 9 });
    const [bx, bz] = P(-w / 2 + 0.85, -d * 0.08); B.box(M.woodH, 0.8, 0.42, d * 0.5, bx, f, bz, { ry, c: 0x6a3a22, solid: true }); B.box(M.cloth, 0.76, 0.05, d * 0.48, bx, f + 0.42, bz, { ry, c: 0x9a2a2a });
    const [ax, az] = P(0.4, -d / 2 + 0.75); B.box(M.woodH, 1.6, 1.0, 0.45, ax, f, az, { ry, c: 0xb8862a, solid: true });
    for (const k of [-0.5, 0, 0.5]) { const [lx, lz] = P(0.4 + k, -d / 2 + 0.75); B.cyl(M.metal, 0.05, 0.03, 0.1, lx, f + 1.0, lz, { c: GOLD, seg: 7 }); B.geo(M.glow, new THREE.SphereGeometry(0.035, 5, 4), [lx, f + 1.16, lz], [0, 0, 0], [1, 1.7, 1], 0xffb040); }
    return yf + h + 0.98;
  };
  const extraFoes = [], extraPicks = [];
  /** Seated Buddha, gilded: lotus throne, crossed legs, the right hand touching the earth, a bowl in the left, a halo. About 2.5 m high at s = 1; faces local +Z. */
  const buddha = (x, y, z, ry = 0, s = 1) => {
    const HAIR = 0x1a2a6a, G2 = 0xb8862a, X = PI / 2, g = [], f = [];
    g.push(gCyl(1.2, 1.25, 0.12, G2, [0, 0.06, 0], [0, 0, 0], 1, 16), gCyl(1.05, 0.9, 0.26, GOLD, [0, 0.25, 0], [0, 0, 0], 1, 16));
    for (let i = 0; i < 14; i++) { const a = i / 14 * 6.283; f.push(gCone(0.2, 0.34, i % 2 ? 0xd86a4a : 0xe89a6a, [Math.cos(a) * 1.02, 0.2, Math.sin(a) * 1.02], [Math.sin(a) * 0.9, 0, -Math.cos(a) * 0.9], 1, 6)); }   // lotus petals
    g.push(gSph(0.5, GOLD, [0, 0.62, 0.1], [1.8, 0.5, 1.2]), gSph(0.27, GOLD, [0.62, 0.62, 0.22], [1.2, 0.8, 1.3]), gSph(0.27, GOLD, [-0.62, 0.62, 0.22], [1.2, 0.8, 1.3]));                                             // crossed legs
    g.push(gCyl(0.36, 0.45, 0.78, GOLD, [0, 1.17, 0], [0, 0, 0], [1, 1, 0.72], 12), gSph(0.4, GOLD, [0, 1.38, 0.02], [1.06, 0.8, 0.76]), gSph(0.2, GOLD, [0.43, 1.5, 0]), gSph(0.2, GOLD, [-0.43, 1.5, 0]));
    f.push(gBox(0.84, 0.1, 0.52, 0xb8501c, [0.02, 1.3, 0], [0, 0, 0.72]));                                                                                                                                              // the robe over one shoulder
    g.push(gCap(0.105, 0.42, GOLD, [0.5, 1.22, 0.05], [0.2, 0, 0.14]), gCap(0.105, 0.42, GOLD, [-0.5, 1.22, 0.05], [0.2, 0, -0.14]));
    g.push(gCap(0.09, 0.4, GOLD, [0.3, 0.9, 0.36], [X, -0.95, 0]), gSph(0.11, GOLD, [0.04, 0.86, 0.5], [1.4, 0.6, 1]));                                                                                                  // left hand in the lap
    g.push(gCap(0.09, 0.38, GOLD, [-0.55, 0.92, 0.3], [0.95, 0, 0]), gSph(0.1, GOLD, [-0.56, 0.68, 0.52], [1, 1.4, 0.8]));                                                                                               // right hand touches the earth
    f.push(gSph(0.14, HAIR, [0.04, 0.97, 0.5], [1, 0.7, 1]));                                                                                                                                                           // alms bowl
    g.push(gCyl(0.13, 0.15, 0.16, GOLD, [0, 1.62, 0]), gSph(0.3, GOLD, [0, 1.94, 0.02], [0.95, 1.1, 0.98]), gBox(0.05, 0.32, 0.08, GOLD, [0.285, 1.88, 0]), gBox(0.05, 0.32, 0.08, GOLD, [-0.285, 1.88, 0]), gBox(0.045, 0.1, 0.05, GOLD, [0, 1.91, 0.3]));
    f.push(gSph(0.305, HAIR, [0, 2.06, -0.03], [0.99, 0.9, 1]), gSph(0.13, HAIR, [0, 2.33, -0.04]), gBox(0.1, 0.02, 0.02, 0x15120f, [0.11, 1.97, 0.287]), gBox(0.1, 0.02, 0.02, 0x15120f, [-0.11, 1.97, 0.287]),
      gBox(0.11, 0.025, 0.02, 0xb83a2a, [0, 1.82, 0.29]), gSph(0.025, 0xf4f4f0, [0, 2.05, 0.29]));
    g.push(gCone(0.05, 0.14, GOLD, [0, 2.5, -0.04]), xf(new THREE.TorusGeometry(0.6, 0.04, 6, 24), [0, 1.98, -0.34], [0, 0, 0], 1, GOLD), xf(new THREE.TorusGeometry(1.0, 0.045, 6, 26), [0, 1.2, -0.42], [0, 0, 0], 1, GOLD));
    f.push(gCyl(0.6, 0.6, 0.04, 0xa01c1c, [0, 1.98, -0.34], [X, 0, 0], 1, 20), gCyl(1.0, 1.0, 0.04, 0x1a5a3a, [0, 1.2, -0.42], [X, 0, 0], 1, 22));                                                                    // halo and aureole
    B.geo(M.metal, merge(g), [x, y, z], [0, ry, 0], s); B.geo(M.flat, merge(f), [x, y, z], [0, ry, 0], s);
    world.addBox(x, z, 2.3 * s, 2.0 * s, ry, y - 0.2, y + 2.5 * s);
  };
  /** Small temple; the door is on the local +Z side. Returns { P, yf, f }. */
  const temple = (x, z, ry, w, d, h, c = 0xa83a2a) => {
    const P = frame(x, z, ry), yf = top(P, w, d, x, z), f = yf + 0.06;
    room(B, M, x, yf, z, { w, d, h, t: 0.55, ry, mat: M.plaster, c, base: 2.6, doors: [{ side: 's', at: 0, w: 2.4, h: 2.8 }], floor: { mat: M.woodH, c: 0x6a3a22 }, ceil: { mat: M.woodH, c: MAROON } });
    steps(B, M, ...P(0, d / 2), ry, f, 6, { w: 3, c: 0xd8d0c0 });
    B.box(M.plaster, w + 0.3, 0.9, d + 0.3, x, yf + h + 0.2, z, { ry, c: MAROON }); B.box(M.flat, w + 0.6, 0.2, d + 0.6, x, yf + h + 1.1, z, { ry, c: 0x2a2018 });
    for (let i = 0; i < Math.floor(w / 1.1); i++) { const [a, b] = P(-w / 2 + 0.6 + i * 1.1, d / 2 + 0.17); B.cyl(M.flat, 0.2, 0.2, 0.06, a, yf + h + 0.45, b, { rx: PI / 2, ry, c: WHITE, seg: 10 }); }
    B.box(M.plaster, w * 0.45, 0.5, d * 0.45, x, yf + h + 1.25, z, { ry, c: MAROON }); B.geo(M.metal, new THREE.ConeGeometry(Math.min(w, d) * 0.3, 1.5, 4), [x, yf + h + 2.5, z], [0, ry + PI / 4, 0], 1, GOLD);
    for (const sg of [-1, 1]) {                                               // a row of prayer wheels on each side of the door
      for (let k = 0; k < 3; k++) { const [a, b] = P(sg * (w / 4 + 0.2 + k * 0.75), d / 2 + 0.45); B.cyl(M.metal, 0.24, 0.24, 0.7, a, yf + 0.75, b, { c: k % 2 ? GOLD : 0xb8862a, seg: 10 }); }
      const [a, b] = P(sg * (w / 4 + 0.95), d / 2 + 0.45); B.box(M.woodH, 2.4, 0.12, 0.5, a, yf + 1.5, b, { ry, c: MAROON }); B.box(M.woodH, 2.4, 0.12, 0.5, a, yf + 0.6, b, { ry, c: MAROON }); world.addBox(a, b, 2.4, 0.6, ry, yf - 3, yf + 1.6);
    }
    return { P, yf, f };
  };
  const yakGeo = (c) => merge([gCap(0.5, 1.2, c, [0, 1.05, 0], [PI / 2, 0, 0], [1, 1, 1.1]), gBox(0.96, 0.55, 1.6, c, [0, 0.62, 0]), gSph(0.4, c, [0, 1.52, 0.45], [1, 1, 1.3]), gCap(0.23, 0.3, c, [0, 1.0, 1.15], [1.2, 0, 0]),
    gBox(0.3, 0.22, 0.24, 0x4a3c30, [0, 0.8, 1.42]), gCone(0.05, 0.4, 0xd8d0c0, [0.3, 1.32, 1.12], [0, 0, -0.9]), gCone(0.05, 0.4, 0xd8d0c0, [-0.3, 1.32, 1.12], [0, 0, 0.9]),
    ...[[0.28, 0.55], [-0.28, 0.55], [0.28, -0.55], [-0.28, -0.55]].map(([lx, lz]) => gCap(0.1, 0.5, c, [lx, 0.3, lz])), gBox(0.16, 0.75, 0.16, c, [0, 0.78, -0.98])]);
  const yak = (x, z, ry, c = 0x1a1410) => { B.geo(M.flat, yakGeo(c), [x, world.height(x, z), z], [0, ry, 0]); world.addCyl(x, z, 0.95, -5, world.height(x, z) + 1.7); };
  const figure = (look, x, z, yaw, pose) => {
    const f = makeHumanoid(M, lookFor(look, R));
    f.group.position.set(x, world.height(x, z), z); f.group.rotation.y = yaw; if (pose) pose(f); root.add(f.group); world.addCyl(x, z, 0.4, -5, world.height(x, z) + 1.8);
  };
  const tent = (x, z, ry) => { const y = world.height(x, z) - 0.2; B.geo(M.cloth, prismGeo(4.2, 2.3, 5.4, 2), [x, y, z], [0, ry, 0], 1, 0x5a6038); world.addBox(x, z, 3.6, 5.2, ry, y - 1, y + 2); };
  const truck = (x, z, ry) => {
    const P = frame(x, z, ry), y = world.height(x, z), C = 0x4e5a34;
    { const [a, b] = P(0, 2.0); B.box(M.flat, 2.1, 1.5, 1.7, a, y + 0.75, b, { ry, c: C }); B.box(M.flat, 2.12, 0.5, 1.2, a, y + 1.55, b, { ry, c: 0x1c2630 }); }
    { const [a, b] = P(0, 3.2); B.box(M.flat, 1.7, 0.8, 0.9, a, y + 0.65, b, { ry, c: C }); }
    { const [a, b] = P(0, -0.8); B.box(M.woodH, 2.2, 0.25, 4.0, a, y + 0.85, b, { ry, c: C }); B.geo(M.cloth, new THREE.CylinderGeometry(1.1, 1.1, 3.9, 12, 1, true, 0, PI), [a, y + 1.1, b], [PI / 2, ry + PI / 2, 0], [1, 1, 1.25], 0x66704a); }
    for (const [lx, lz] of [[1.05, 2.4], [-1.05, 2.4], [1.05, -1.4], [-1.05, -1.4]]) { const [a, b] = P(lx, lz); B.geo(M.flat, new THREE.CylinderGeometry(0.45, 0.45, 0.26, 12), [a, y + 0.45, b], [0, ry, PI / 2], 1, 0x15151a); }
    { const [a, b] = P(1.07, 2.0); B.box(M.flat, 0.03, 0.3, 0.3, a, y + 1.0, b, { ry, rx: PI / 4, c: 0xc81c1c }); }
    world.addBox(x + Math.sin(ry) * 0.6, z + Math.cos(ry) * 0.6, 2.4, 6.2, ry, y - 1, y + 2.6);
  };

  // ---- the caravan at the start: the Dalai Lama, two monks, two Khampa riders ------------------
  figure('dalai', -4.6, 95.2, 0.65, (f) => { f.armR.rotation.x = -1.35; f.armR.rotation.z = 0.25; f.armL.rotation.x = -0.4; });
  figure('khampa', -7.4, 93.6, 0.5, (f) => { f.armR.rotation.x = -1.25; f.armR.rotation.z = 0.12; }); figure('khampa', -2.4, 92.4, 0.9, (f) => { f.armR.rotation.x = -1.25; f.armR.rotation.z = 0.12; });
  figure('monk', -6.4, 96.8, 0.8, (f) => { f.armR.rotation.x = -0.9; f.armL.rotation.x = -0.9; f.armR.rotation.z = 0.5; f.armL.rotation.z = -0.5; }); figure('monk', -3.4, 97.6, 0.4);
  for (const [x, z, ry, c, m] of [[-10, 98.5, 1.3, 0x6a4428, 0x14100c], [-8.2, 101.4, 0.9, 0xb8a080, 0xe8e0d0], [-5.2, 103.2, 0.6, 0x2a1c14, 0x14100c]]) {
    B.geo(M.flat, horseGeo(c, m), [x, world.height(x, z), z], [0, ry, 0]); world.addCyl(x, z, 0.9, -5, world.height(x, z) + 2);
    B.box(M.cloth, 0.75, 0.08, 0.9, x, world.height(x, z) + 1.42, z, { ry, c: [0x9a2a2a, 0x2a4a8a, 0xb8862a][Math.round(ry * 10) % 3] });
  }
  { const y = world.height(-12, 94); B.cyl(M.wood, 0.05, 0.07, 6, -12, y - 0.2, 94, { c: 0x6a4a30, seg: 6 }); world.addCyl(-12, 94, 0.1, y - 1, y + 6); flags(-12, y + 5.8, 94, -4, world.height(-4, 88) + 0.4, 88, 14); flags(-12, y + 5.8, 94, -16, world.height(-16, 100) + 0.4, 100, 10); }
  chorten(8, 92, 1.1);

  // ---- chortens and the mani wall on the way ---------------------------------------------------
  for (let i = 0; i < 7; i++) chorten(-40 + i * 3.6, 60 - (i % 2) * 0.6, 0.8);
  { const x0 = 16, z0 = 52, x1 = 30, z1 = 55, L = Math.hypot(x1 - x0, z1 - z0), ry = Math.atan2(-(z1 - z0), x1 - x0), y = Math.min(world.height(x0, z0), world.height(x1, z1)) - 0.5;
    B.box(M.stone, L, 1.7, 1.0, (x0 + x1) / 2, y, (z0 + z1) / 2, { ry, c: 0xb8ae9c, solid: true });
    for (let i = 0; i < 16; i++) { const t = (i + 0.5) / 16; B.box(M.flat, 0.6, 0.4, 0.06, x0 + (x1 - x0) * t, y + 0.9 + (i % 2) * 0.25, z0 + (z1 - z0) * t + 0.52, { ry, rx: -0.2, c: [0xc82a22, 0x2a5ac8, 0xe8c020, 0xf4f4f0, 0x2a9a4a][i % 5] }); } }
  // ---- the village ----------------------------------------------------------------------------
  const r1 = house(-3, 35, 0.25), r2 = house(27, 37, -0.3, 9, 7); house(31, 19, -1.5, 8, 6.5); house(-5, 16, 1.4, 8, 7); house(22, 6, 2.8, 8, 6.5);
  chorten(13, 27, 1.3);
  { const y = world.height(13, 27); flags(-3, r1, 35, 13, y + 6.2, 27, 14); flags(27, r2, 37, 13, y + 6.2, 27, 14); }
  for (const [x, z] of [[10, 34], [18, 31]]) { const y = world.height(x, z); B.geo(M.thatch, new THREE.ConeGeometry(1.4, 2.2, 9), [x, y + 1.0, z], [0, 0, 0], 1, 0xc8a858); world.addCyl(x, z, 1.1, y - 1, y + 2); }
  { const lowWall = (ax, az, bx, bz) => { const L = Math.hypot(bx - ax, bz - az), ry = Math.atan2(-(bz - az), bx - ax), mx = (ax + bx) / 2, mz = (az + bz) / 2, y = Math.min(world.height(ax, az), world.height(bx, bz), world.height(mx, mz)) - 0.6; B.box(M.stone, L, 1.75, 0.6, mx, y, mz, { ry, c: 0xa89c88, solid: true }); };
    lowWall(34, 28, 46, 28); lowWall(46, 28, 46, 38); lowWall(34, 38, 46, 38); lowWall(34, 28, 34, 31.5); }
  yak(40, 33, 0.6); yak(42.5, 30.5, 2.4, 0x3a2a1c); yak(-15, 27, 1.4); yak(44, 9, -0.6, 0x2a1c14); yak(-72, 38, 0.3); yak(-68, 42, 2.0, 0x4a3a2a); yak(60, 60, 1.1); yak(-30, 80, 2.6);
  // nomad tent of black yak hair, a ruined fort
  { const x = -74, z = 30, ry = 0.3, P = frame(x, z, ry), yf = top(P, 6.4, 5.4, x, z), f = yf + 0.06;      // you can go in
    room(B, M, x, yf, z, { w: 6.4, d: 5.4, h: 2.05, t: 0.18, ry, mat: M.cloth, c: 0x1c1814, base: 1.6, doors: [{ side: 's', at: 0, w: 1.8, h: 1.9 }], floor: { mat: M.ground, c: 0x6a5a48 }, ceil: false });
    B.geo(M.cloth, prismGeo(7.0, 1.9, 6.0, 2), [x, yf + 2.0, z], [0, ry, 0], 1, 0x1c1814);
    for (const sg of [-1, 1]) { const [a, b] = P(sg * 4.0, 0); B.box(M.wood, 0.08, 3.2, 0.08, a, yf - 0.3, b, { ry, rz: sg * -0.3, c: 0x5a4028 }); }
    { const [a, b] = P(0, -0.3); B.cyl(M.stone, 0.45, 0.5, 0.3, a, f, b, { c: 0x4a4038, seg: 9, solid: true }); B.geo(M.glow, new THREE.ConeGeometry(0.2, 0.5, 6), [a, f + 0.55, b], [0, 0, 0], 1, 0xff7a20); fires.push([a, f + 0.5, b]); }
    for (const [lx, lz, c] of [[-2.1, -1.2, 0x8a2a2a], [2.1, -1.0, 0x2a4a8a]]) { const [a, b] = P(lx, lz); B.box(M.cloth, 1.2, 0.14, 2.2, a, f, b, { ry, c }); }
    { const [a, b] = P(-1.9, 1.6); B.box(M.woodH, 0.9, 0.6, 0.6, a, f, b, { ry, c: 0xb8862a, solid: true }); }
    extraPicks.push([...P(2.0, 1.4), 0, 1.6]);
  }
  { // the village temple: a great gilded Buddha, butter lamps, painted pillars, thangkas
    const R2 = PI / 2, t = temple(-24, 2, R2, 10, 9, 5.2), { P, f } = t;
    { const [a, b] = P(0, -2.2); B.box(M.woodH, 4.6, 0.5, 3.6, a, f, b, { ry: R2, c: 0xa01c1c, solid: true }); B.box(M.metal, 4.8, 0.08, 3.8, a, f + 0.5, b, { ry: R2, c: GOLD }); buddha(a, f + 0.58, b, R2, 1.45); }
    for (const sg of [-1, 1]) { const [a, b] = P(sg * 3.2, 1.0); B.cyl(M.flat, 0.24, 0.28, 5.2, a, f, b, { c: 0xa01c1c, seg: 10 }); B.box(M.flat, 0.8, 0.26, 0.8, a, f + 4.9, b, { ry: R2, c: 0x2a5ac8 }); world.addCyl(a, b, 0.3, f - 0.2, f + 5.2); }
    { const [a, b] = P(0, 0.5); B.box(M.woodH, 3.2, 0.8, 0.7, a, f, b, { ry: R2, c: 0x6a3a22, solid: true }); for (let k = 0; k < 7; k++) { const [c1, c2] = P(-1.35 + k * 0.45, 0.5); B.cyl(M.metal, 0.07, 0.04, 0.12, c1, f + 0.8, c2, { c: GOLD, seg: 7 }); B.geo(M.glow, new THREE.SphereGeometry(0.04, 5, 4), [c1, f + 1.0, c2], [0, 0, 0], [1, 1.8, 1], 0xffb040); } }
    for (const sg of [-1, 1]) for (let k = 0; k < 2; k++) { const [a, b] = P(sg * 4.41, -1.6 + k * 3.2); B.box(M.cloth, 1.5, 2.4, 0.05, a, f + 1.6, b, { ry: PI, c: [0x2a5ac8, 0xc82a22][k] }); B.box(M.cloth, 0.9, 1.5, 0.08, a, f + 2.05, b, { ry: PI, c: GOLD }); }
    for (const sg of [-1, 1]) { const [a, b] = P(sg * 1.7, 2.7); B.box(M.cloth, 1.0, 0.22, 2.2, a, f, b, { ry: R2, c: MAROON }); }
    extraFoes.push(['redguard', ...P(-2.8, 2.4), { up: 1.8, patrol: false }], ['pla', -14, 7, {}]); extraPicks.push([...P(3.4, -0.4), 0, 1.8]);
    { const y = world.height(-14.5, -4); B.cyl(M.wood, 0.06, 0.09, 7, -14.5, y - 0.2, -4, { c: 0x6a4a30, seg: 6 }); world.addCyl(-14.5, -4, 0.12, y - 1, y + 7); flags(-14.5, y + 6.8, -4, -19.6, t.yf + 6.2, 6.8, 10); flags(-14.5, y + 6.8, -4, -19.6, t.yf + 6.2, -2.8, 8); }
  }
  {
    const x = 80, z = 40, w = 8, d = 8, P = frame(x, z, 0), yf = top(P, w, d, x, z);
    room(B, M, x, yf, z, { w, d, h: 4, t: 0.7, mat: M.stone, c: 0xb8ac98, base: 3, doors: [{ side: 'w', at: 0, w: 1.8, h: 2.3 }], wins: [{ side: 's', at: 0, w: 0.6, y: 1.2, h: 1.2 }, { side: 'n', at: 0, w: 0.6, y: 1.2, h: 1.2 }],
      floor: { mat: M.ground, c: 0x7a6a56 }, ceil: { mat: M.woodH, c: 0x4a3626 } });
    steps(B, M, x - w / 2, z, -PI / 2, yf + 0.06, 6, { w: 2, c: 0xb8ac98 });
    B.box(M.stone, 8.3, 0.5, 8.3, x, yf + 4.2, z, { c: MAROON }); for (const [a, b, hh] of [[-1, -1, 2.6], [1, -1, 1.4], [1, 1, 3.2], [-1, 1, 0.8]]) B.box(M.stone, 2.2, hh, 2.2, x + a * 2.9, yf + 4.7, z + b * 2.9, { c: 0xb8ac98 });
    for (const [rx, rz, s] of [[72, 46, 1.3], [86, 33, 1.0], [74, 33, 0.8]]) { const y = world.height(rx, rz); B.geo(M.rock, rockGeo(3, 1), [rx, y + s * 0.3, rz], [0, rx, 0], [s * 1.3, s * 0.8, s], 0xa89c88); world.addCyl(rx, rz, s * 0.9, y - 1, y + s * 0.9); }
    crate(B, M, x + 2.2, yf + 0.06, z - 2.2, 0.9, 0.3, 0x5a6038);
  }
  // ---- the frozen lake ------------------------------------------------------------------------
  { const iy = world.height(-58, 4) + 1.1; B.cyl(M.metal, 16.5, 16.5, 0.1, -58, iy - 0.1, 4, { c: 0x8fd6dc, seg: 30 }); world.addBox(-58, 4, 31, 31, 0, iy - 3, iy); chorten(-40, 12, 0.9); }
  // ---- the army camp ---------------------------------------------------------------------------
  {
    tent(44, -12, 0.2); tent(52, -14, -0.2); tent(40, -27, 1.4); truck(54, -26, 2.2); truck(47, -32, 1.9);
    const y = world.height(48, -20);
    for (const [cx, cz, s, r] of [[46, -19, 0.9, 0.2], [47.1, -19.4, 0.8, 0.6], [46.4, -19.2, 0.7, 0.1], [51, -21, 1.0, 0.4]]) crate(B, M, cx, world.height(cx, cz) + (s === 0.7 ? 0.9 : 0), cz, s, r, 0x5a6038);
    B.cyl(M.metal, 0.05, 0.07, 9, 49, y - 0.2, -17, { c: 0xb8bcc2, seg: 6 }); B.box(M.cloth, 2.4, 1.5, 0.04, 50.3, y + 7.2, -17, { c: 0xc81c1c }); world.addCyl(49, -17, 0.1, y - 1, y + 9);
    B.cyl(M.metal, 0.04, 0.12, 14, 56, world.height(56, -18) - 0.2, -18, { c: 0x3a3e3a, seg: 5 }); for (let k = 0; k < 3; k++) B.box(M.metal, 1.6 - k * 0.4, 0.04, 0.04, 56, world.height(56, -18) + 9 + k * 1.6, -18, { c: 0x3a3e3a });
    const t = signTexture('人民解放军', { font: '"Microsoft YaHei", SimHei, sans-serif', bg: '#a81c1c', fg: '#f0d040', border: false }); t.userData.own = true;
    const m = new THREE.Mesh(new THREE.BoxGeometry(4.6, 1.2, 0.1), new THREE.MeshStandardMaterial({ map: t, roughness: 0.9 })); m.position.set(42, world.height(42, -19) + 2.2, -19); m.rotation.y = 0.5; root.add(m);
    for (const s of [-1, 1]) B.box(M.wood, 0.12, 2.9, 0.12, 42 + s * 1.9, world.height(42, -19) - 0.2, -19 - s * 1.05, { c: 0x4a3c2c }); world.addBox(42, -19, 4.6, 0.3, 0.5, y - 2, y + 3);
    for (const [fx, fz] of [[48, -23]]) { const fy = world.height(fx, fz); for (let i = 0; i < 6; i++) B.cyl(M.wood, 0.07, 0.08, 1.0, fx, fy + 0.05, fz, { rz: 1.2, ry: i * 1.05, c: 0x2a1a10, seg: 5 }); B.geo(M.glow, new THREE.ConeGeometry(0.34, 0.9, 7), [fx, fy + 0.6, fz], [0, 0, 0], 1, 0xff7a20); fires.push([fx, fy + 0.7, fz]); world.addCyl(fx, fz, 0.7, fy - 1, fy + 0.9); }
  }
  // ---- the stairway and the monastery on the ridge ------------------------------------------------
  for (let i = 0; i < 37; i++) { const z = -29.6 - i * 0.62; B.box(M.stone, 9.6, 0.5, 0.68, 0, world.height(0, z) - 0.42, z, { c: i % 2 ? 0xd8d0c0 : 0xcfc6b4, solid: true }); }
  for (const s of [-1, 1]) for (let i = 0; i < 6; i++) { const z = -30.5 - i * 3.7; B.box(M.plaster, 0.9, 1.7, 3.7, s * 5.3, world.height(s * 5.3, z - 1.8) - 0.5, z - 1.8, { c: WHITE, solid: true }); B.box(M.plaster, 1.0, 0.16, 3.7, s * 5.3, world.height(s * 5.3, z - 1.8) + 1.2, z - 1.8, { c: MAROON }); }
  { // gateway chorten at the foot of the stair
    const y = world.height(0, -27) - 0.3; for (const s of [-1, 1]) B.box(M.plaster, 2.2, 4.2, 2.6, s * 3.3, y, -27, { c: WHITE, solid: true });
    B.box(M.plaster, 9.2, 0.9, 2.9, 0, y + 4.2, -27, { c: WHITE }); B.box(M.plaster, 9.4, 0.2, 3.1, 0, y + 4.0, -27, { c: MAROON });
    B.geo(M.plaster, new THREE.SphereGeometry(1.2, 14, 10), [0, y + 6.0, -27], [0, 0, 0], [1, 1.05, 1], WHITE); B.geo(M.metal, new THREE.ConeGeometry(0.34, 1.7, 10), [0, y + 8.0, -27], [0, 0, 0], 1, GOLD);
    flags(-3.3, y + 5.1, -27, -14, world.height(-14, -20) + 0.5, -20, 12); flags(3.3, y + 5.1, -27, 14, world.height(14, -20) + 0.5, -20, 12);
  }
  {
    const x = 0, z = -84, Y = HILL.top + 0.05, F = Y + 0.06;
    room(B, M, x, Y, z, { w: 26, d: 18, h: 7, t: 0.7, mat: M.plaster, c: WHITE, base: 1.6, doors: [{ side: 's', at: 0, w: 3.4, h: 3.4 }], floor: { mat: M.woodH, c: 0x6a3a22 }, ceil: { mat: M.woodH, c: MAROON } });
    B.box(M.plaster, 26.3, 2.2, 18.3, x, Y + 7.2, z, { c: MAROON, solid: true }); B.box(M.flat, 26.6, 0.2, 18.6, x, Y + 9.4, z, { c: 0x2a2018 });
    for (let i = 0; i < 12; i++) B.cyl(M.flat, 0.22, 0.22, 0.06, x - 11 + i * 2, Y + 8.3, z + 9.18, { rx: PI / 2, c: WHITE, seg: 10 });
    B.geo(M.metal, new THREE.ConeGeometry(6.4, 2.8, 4), [x, Y + 11.0, z], [0, PI / 4, 0], [1.25, 1, 0.9], GOLD); B.box(M.plaster, 9, 0.9, 6.4, x, Y + 9.5, z, { c: MAROON });
    B.cyl(M.metal, 0.3, 0.4, 1.4, x, Y + 12.2, z, { c: GOLD, seg: 10 }); B.geo(M.metal, new THREE.SphereGeometry(0.34, 8, 6), [x, Y + 13.8, z], [0, 0, 0], 1, GOLD);
    for (const s of [-1, 1]) { B.cyl(M.metal, 0.26, 0.3, 1.6, x + s * 12.4, Y + 9.6, z + 8.4, { c: GOLD, seg: 9 }); B.geo(M.metal, new THREE.ConeGeometry(0.28, 0.6, 9), [x + s * 12.4, Y + 11.5, z + 8.4], [0, 0, 0], 1, GOLD); }
    B.geo(M.metal, new THREE.TorusGeometry(0.62, 0.09, 6, 16), [x, Y + 10.4, z + 9.3], [0, 0, 0], 1, GOLD); for (let k = 0; k < 4; k++) B.box(M.metal, 0.05, 1.2, 0.05, x, Y + 9.8, z + 9.3, { rz: k * PI / 4, c: GOLD });
    for (const s of [-1, 1]) B.box(M.metal, 0.3, 0.5, 0.7, x + s * 1.5, Y + 9.6, z + 9.3, { ry: s * 0.2, c: GOLD });                     // the two deer beside the wheel
    // porch
    B.box(M.woodH, 14, 0.3, 3.2, x, Y + 4.6, z + 10.4, { c: MAROON }); B.box(M.cloth, 14, 0.5, 0.05, x, Y + 4.1, z + 11.95, { c: 0xe0a82a });
    for (const px of [-6, -2.4, 2.4, 6]) { B.cyl(M.flat, 0.28, 0.32, 4.6, x + px, Y, z + 11.4, { c: 0xa01c1c, seg: 10 }); B.box(M.flat, 0.9, 0.3, 0.9, x + px, Y + 4.3, z + 11.4, { c: 0x2a5ac8 }); world.addCyl(x + px, z + 11.4, 0.34, Y - 1, Y + 4.6); }
    for (const s of [-1, 1]) { B.box(M.cloth, 0.6, 3.4, 0.05, x + s * 2.0, Y, z + 9.06, { c: 0x15120f }); B.box(M.woodH, 5.4, 0.12, 0.5, x + s * 10, Y + 1.5, z + 9.4, { c: MAROON }); B.box(M.woodH, 5.4, 0.12, 0.5, x + s * 10, Y + 0.6, z + 9.4, { c: MAROON });
      for (let k = 0; k < 6; k++) B.cyl(M.metal, 0.26, 0.26, 0.74, x + s * (7.8 + k * 0.88), Y + 0.72, z + 9.4, { c: k % 2 ? GOLD : 0xb8862a, seg: 10 });               // prayer wheels
      world.addBox(x + s * 10, z + 9.4, 5.4, 0.6, 0, Y, Y + 1.6); }
    // inside: pillars, cushions, the great image, butter lamps
    for (const px of [-4.6, 4.6]) for (const pz of [5.2, 1.6, -2, -5.6]) { B.cyl(M.flat, 0.3, 0.34, 7, x + px, F, z + pz, { c: 0xa01c1c, seg: 10 }); B.box(M.flat, 1.0, 0.3, 1.0, x + px, F + 6.6, z + pz, { c: 0x2a5ac8 }); B.box(M.cloth, 0.5, 2.6, 0.5, x + px, F + 3.6, z + pz, { c: FLAGS[(pz + 6) % 5 | 0] }); world.addCyl(x + px, z + pz, 0.36, F - 0.2, F + 7); }
    for (const px of [-2.3, 2.3, -7.4, 7.4]) B.box(M.cloth, 1.1, 0.24, 9.4, x + px, F, z - 0.2, { c: px * px > 20 ? 0x8a2a2a : MAROON });
    B.box(M.woodH, 5.6, 1.3, 4.0, x, F, z - 6.3, { c: 0xa01c1c, solid: true }); B.box(M.metal, 5.8, 0.14, 4.2, x, F + 1.3, z - 6.3, { c: GOLD });
    buddha(x, F + 1.44, z - 6.35, 0, 1.5);                                                                    // the great image
    B.box(M.woodH, 4.4, 0.85, 0.8, x, F, z - 3.3, { c: 0x6a3a22, solid: true });
    for (let k = 0; k < 9; k++) { B.cyl(M.metal, 0.07, 0.04, 0.12, x - 1.8 + k * 0.45, F + 0.85, z - 3.3, { c: GOLD, seg: 7 }); B.geo(M.glow, new THREE.SphereGeometry(0.04, 5, 4), [x - 1.8 + k * 0.45, F + 1.05, z - 3.3], [0, 0, 0], [1, 1.8, 1], 0xffb040); }
    for (const s of [-1, 1]) for (let k = 0; k < 3; k++) { B.box(M.cloth, 0.06, 2.6, 1.7, x + s * 12.2, F + 2.2, z - 5 + k * 4.4, { c: [0x2a5ac8, 0xc82a22, 0x2a9a4a][k] }); B.box(M.cloth, 0.08, 1.6, 1.0, x + s * 12.16, F + 2.7, z - 5 + k * 4.4, { c: GOLD }); }
    lamp(x, F + 3.2, z - 3.6, 60, 22, 0xffb060);
    steps(B, M, x, z + 9, 0, F, 2, { w: 14, rise: 0.06, run: 0.4, c: 0xd8d0c0 });
    // courtyard: the bonfire of scriptures, the tall prayer pole, the great chorten, monks' houses
    const fy = world.height(0, -64);
    for (let i = 0; i < 8; i++) B.box(M.woodH, 0.9, 0.12, 0.3, (R() - 0.5) * 1.6, fy + 0.05 + i * 0.07, -64 + (R() - 0.5) * 1.6, { ry: R() * 3, rz: (R() - 0.5) * 0.4, c: [0xb8862a, 0x8a2a2a, 0xe8dcc0][i % 3] });
    B.geo(M.glow, new THREE.ConeGeometry(0.6, 1.5, 7), [0, fy + 1.1, -64], [0, 0, 0], 1, 0xff7a20); fires.push([0, fy + 1.0, -64]); world.addCyl(0, -64, 1.1, fy - 1, fy + 1.2); lamp(0, fy + 1.6, -64, 46, 18, 0xff8a40);
    B.box(M.cloth, 3.4, 1.0, 0.05, -5.5, fy + 2.6, -60.5, { ry: 0.5, c: 0xc81c1c }); for (const s of [-1, 1]) B.box(M.wood, 0.08, 3.4, 0.08, -5.5 + s * 1.5, fy, -60.5 - s * 0.8, { c: 0x4a3c2c });
    chorten(15, -62, 2); house(-21, -68, 0.4, 9, 6.5); house(22, -72, -0.5, 8, 6.5);
    { // the mani chapel beside the great hall: one huge prayer wheel and a small Buddha
      const t = temple(21.5, -88.5, 0, 7, 7, 4.2, WHITE), P2 = t.P, f2 = t.f;
      { const [a, b] = P2(0, 0.3); B.cyl(M.metal, 0.85, 0.85, 2.3, a, f2 + 0.35, b, { c: 0xa01c1c, seg: 14 }); for (const yy of [0.35, 1.43, 2.51]) B.cyl(M.metal, 0.88, 0.88, 0.14, a, f2 + yy, b, { c: GOLD, seg: 14 }); B.cyl(M.wood, 0.07, 0.07, 3.6, a, f2, b, { c: 0x4a3626, seg: 6 }); world.addCyl(a, b, 0.9, f2 - 0.2, f2 + 2.8); }
      { const [a, b] = P2(0, -2.3); B.box(M.woodH, 2.6, 0.7, 1.4, a, f2, b, { c: 0xa01c1c, solid: true }); buddha(a, f2 + 0.7, b, 0, 0.7); }
      extraPicks.push([...P2(2.3, 1.7), 0, 1.8]); extraFoes.push(['plaGunner', 17, -80, {}]);
    }
    const py = world.height(-11, -60); B.cyl(M.wood, 0.08, 0.12, 10, -11, py - 0.2, -60, { c: 0x6a4a30, seg: 6 }); world.addCyl(-11, -60, 0.14, py - 1, py + 10);
    for (const [ex, ez] of [[-20, -56], [-4, -54], [-16, -64], [-6, -66]]) flags(-11, py + 9.6, -60, ex, world.height(ex, ez) + 0.5, ez, 12);
  }

  // ---- rocks, juniper, dry grass ------------------------------------------------------------------
  const built = (x, z) => dPoly(PATH, x, z) < 4 || Math.hypot(x - 14, z - 26) < 30 || Math.hypot(x - HILL.x, z - HILL.z) < 40 || Math.hypot(x - 48, z + 21) < 15 || Math.hypot(x + 58, z - 4) < 18 || Math.hypot(x + 6, z - 97) < 10
    || Math.hypot(x - 80, z - 40) < 9 || Math.hypot(x + 74, z - 30) < 7 || (Math.abs(x) < 7 && z < -26 && z > -54) || (x < -22 && x > -44 && Math.abs(z - 60) < 4);
  const rocks = [], shrubs = [], tufts = [];
  for (let i = 0; i < 340; i++) {
    const x = (R() - 0.5) * 360, z = (R() - 0.5) * 360, h = world.height(x, z); if (built(x, z)) continue;
    const s = 0.4 + R() * R() * 3.2;
    rocks.push({ x, y: h + s * 0.2, z, ry: R() * 6, s: [s, s * 0.8, s], c: R.pick([0x8a7c6a, 0x9a8c7a, 0x7a6e60]) });
    if (Math.hypot(x + 24, z - 2) < 10) { rocks.pop(); continue; }
    if (s > 1 && Math.abs(x) < 116 && Math.abs(z) < 112) world.addCyl(x, z, s * 0.85, h - 2, h + s * 0.7);
  }
  for (let i = 0; i < 260; i++) { const x = (R() - 0.5) * 230, z = (R() - 0.5) * 220, h = world.height(x, z); if (built(x, z) || h > 40 || fbm(x * 0.04, z * 0.04, 2, 6) < 0.5) continue; const s = 0.5 + R() * 0.8; shrubs.push({ x, y: h + 0.2, z, ry: R() * 6, s: [s * 1.3, s * 0.75, s * 1.3], c: R.pick([0x3a4a2c, 0x4a5632, 0x2e3e26]) }); if (Math.hypot(x + 24, z - 2) < 10) shrubs.pop(); }
  for (let i = 0; i < 90000 && tufts.length < 20000; i++) {
    const x = (R() - 0.5) * 236, z = (R() - 0.5) * 226, h = world.height(x, z);
    if (h > 34 || dPoly(PATH, x, z) < 1.6 || Math.hypot(x + 58, z - 4) < 17 || Math.hypot(x - HILL.x, z - HILL.z) < 27 || (Math.abs(x) < 5.5 && z < -28 && z > -54)) continue;
    tufts.push({ x, y: h, z, ry: R() * 6.28, s: [0.35 + R() * 0.4, 0.2 + R() * 0.35, 0.35 + R() * 0.4], c: R.pick([0xd8c070, 0xc8ae60, 0xb89a50, 0xe2cc84]) });
    if (Math.hypot(x + 24, z - 2) < 9 || Math.hypot(x + 74, z - 30) < 4.8) tufts.pop();
  }
  root.add(instanced(rockGeo(5, 1), M.rock, rocks));
  root.add(instanced(new THREE.IcosahedronGeometry(1, 1), M.rock, shrubs));
  root.add(instanced(tuftGeo(5, 0xa8904a, 0xffffff), windify(M.flat2.clone(), shared, 0.26, 1, 2.4), tufts, { cast: false }));
  root.add(makeAmbient(shared, { count: 320, box: 40, boxY: 14, size: 0.04, colorA: 0xffffff, colorB: 0xfff4d8, alpha: 0.55, fall: -0.02, wind: [0.9, 0, 0.3], flutter: 0.9 }));
  const eagle = new THREE.Mesh(merge([gBox(2.8, 0.03, 0.55, 0x2a2018, [0, 0, 0]), gBox(0.3, 0.06, 1.0, 0x2a2018, [0, 0, 0.1]), gBox(0.5, 0.03, 0.3, 0x2a2018, [0, 0, 0.6])]), M.flat); root.add(eagle);

  { // a lookout beside the road (up its ladder), a hermit's cell to crawl into
    const clearAt = (x, z, r) => { world.cyls = world.cyls.filter((c) => Math.hypot(c.x - x, c.z - z) > r + c.r); };
    clearAt(20, 59, 4); stand(B, M, 20, world.height(20, 58.7), 58.7, 0, { c: 0x8a6a48, roof: 0x7a2420 });
    clearAt(-20, 49.5, 4); den(B, M, -20, world.height(-20, 49.1) + 0.02, 49.1, 0, { mat: M.stone, c: 0xa89c88 }); extraPicks.push([-20, 49.3, 0, 0.6]);
  }
  const enemies = [
    ['pla', 4, 78, {}], ['pla', -6, 71, { patrol: true }], ['redguard', 8, 65, {}], ['pla', -30, 56, {}], ['redguard', -38, 64, {}],
    ['pla', 12, 42, {}], ['redguard', 6, 30, {}], ['redguard', 18, 23, {}], ['plaGunner', 24, 15, {}], ['pla', -3, 35, { up: 1.8, patrol: false }], ['pla', 31, 19, { up: 1.8, patrol: false }], ['redguard', 38, 25, {}],
    ['plaGunner', 80, 40, { up: 1.8, patrol: false }], ['pla', 71, 37, {}], ['pla', -44, 14, {}], ['redguard', -68, 33, {}],
    ['pla', 45, -17, {}], ['pla', 53, -20, { patrol: true }], ['plaGunner', 49, -27, {}], ['pla', 41, -23, {}],
    ['pla', -3, -24, {}], ['pla', 3.4, -24, {}], ['redguard', 0, -41, {}],
    ['redguard', -5, -61, {}], ['redguard', 5, -62, {}], ['redguard', -2.5, -67.5, {}], ['pla', 11, -67, {}], ['plaGunner', -14, -71, {}], ['pla', -21, -68, { up: 1.8, patrol: false }],
    ['redguard', 7.5, -82, { up: 1.8, patrol: false, yaw: 0 }], ['pla', -7.5, -80, { up: 1.8, patrol: false, yaw: 0 }], ['tibetBoss', 0, -70.5, { yaw: 0, patrol: false }],
  ];
  const bowl = merge([gCyl(0.13, 0.07, 0.1, 0x7a4a26, [0, 0, 0], [0, 0, 0], 1, 10), gCyl(0.115, 0.115, 0.012, 0xd8b88a, [0, 0.045, 0], [0, 0, 0], 1, 10), gCyl(0.075, 0.09, 0.03, 0xc8ccd0, [0, -0.06, 0], [0, 0, 0], 1, 10), gCone(0.12, 0.08, 0xc8ccd0, [0, 0.11, 0], [0, 0, 0], 1, 10)]);
  let ft = 0;
  return {
    env: {
      sunDir: [0.46, 0.72, 0.52], sunColor: 0xfff4e0, sunLight: 0xfff6ea, sunIntensity: 4.9, sunSize: 0.0005,
      skyTop: 0x0c40a8, skyHorizon: 0x9ac6ee, skyGround: 0x8aa0b8, haze: 0.45,
      fogColor: 0xb2d0ec, fogDensity: 0.0009, hemiSky: 0xa8c8ff, hemiGround: 0x9a8a62, hemiIntensity: 1.7, envIntensity: 0.7,
      cloudCover: 0.42, cloudScale: 0.34, cloudLit: 0xffffff, cloudShade: 0xa0b0c8,
      bloom: 0.3, bloomRadius: 0.6, bloomThreshold: 1.4, rays: 0.22, rayThreshold: 2.6, exposure: 0.9,
      saturation: 1.18, contrast: 1.08, vignette: 0.3, tintHi: 0xfffaf0, tintLo: 0xe4f0ff, shadowRange: 95,
    },
    spawn: { x: 0, z: 101, yaw: 0 },
    vista: { c: [0, 6, 20], r: 62, h: 15, a: 1.6, speed: 0.03 },
    enemies: enemies.concat(extraFoes), pickups: [[3, 84], [-1.2, 36.6, 0, 1.8], [13, 21], [50.5, -17.5], [-44, 8], [81.4, 42, 0, 1.8], [0, -56], [8.4, -88.4, 0, 1.8], [23.2, -70.6, 0, 1.8]].concat(extraPicks),
    dust: [0.8, 0.72, 0.54], water: [], heroLight: 30,
    makePickup: () => new THREE.Mesh(bowl, M.flat),
    update(dt, t, g) {
      eagle.position.set(Math.cos(t * 0.11) * 60, 58 + Math.sin(t * 0.3) * 4, -20 + Math.sin(t * 0.11) * 60); eagle.rotation.y = -t * 0.11; eagle.rotation.z = 0.25;
      if (lights[0]) lights[0].intensity = 60 + Math.sin(t * 9) * 6 + Math.sin(t * 5.3) * 5;
      ft -= dt;
      if (ft <= 0) {
        ft = 0.06; const G = g.gfx;
        for (const f of fires) { G.glow.spawn(f[0] + (Math.random() - 0.5) * 0.6, f[1], f[2] + (Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 0.5, 1.4 + Math.random() * 1.6, (Math.random() - 0.5) * 0.5, { life: 0.7 + Math.random() * 0.5, s0: 0.45, s1: 0.04, r: 3, g: 1.1, b: 0.25, a: 0.9 });
          if (Math.random() < 0.4) G.soft.spawn(f[0], f[1] + 0.9, f[2], 1.0, 1.7, 0.3, { life: 5, s0: 0.6, s1: 3.6, r: 0.22, g: 0.2, b: 0.2, a: 0.3, drag: 0.12 }); }
      }
    },
  };
}
