// Chapter VI - Normandy, before dawn on 6 June 1944: hedgerows, a stone village, a coastal battery.
import * as THREE from 'three';
import { Heightfield, prismGeo, rockGeo } from '../build.js';
import { makeAmbient, makeWater, windify } from '../gfx.js';
import { instanced, room, steps, tuftGeo, blobTreeGeo, barrel, crate, gBox, gCyl, gCone, gSph, xf, merge } from '../props.js';
import { fbm, smooth } from '../util.js';

export const war = {
  id: 'war', theme: 'theme-war', chapter: 'Chapter VI', title: 'Sainte-Aubine', place: 'Sainte-Aubine · Normandy · 6 June 1944, before dawn',
  story: 'The invasion fleet is at sea, and the guns above Sainte-Aubine can reach it. London asks one agent on the ground to silence the battery before first light. Cross the hedgerows, slip through the village, and reach the bunkers on the cliff.',
  weapon: 'sten', weaponName: 'Sten gun & knife', alt: 'right mouse — aim   ·   F — knife', knife: true,
  heroes: [
    { look: 'pavlichenko', name: 'Lyudmila Pavlichenko', who: 'Soviet sniper, 309 confirmed kills', trait: 'Sniper', effect: 'scoped rifle: one shot fells a soldier', weapon: 'rifle', weaponName: 'Scoped rifle & knife', alt: 'right mouse — scope   ·   F — knife', mods: {}, sleeve: 0x6e6c3c, cuff: 0x4a3018 },
    { look: 'hall', name: 'Virginia Hall', who: 'American spy, “the limping lady”', trait: 'Spy', effect: 'Sten gun; sentries notice her much later', mods: { stealth: 0.55 }, sleeve: 0xa8946a, cuff: 0x7a6a48 },
    { look: 'bavaud', name: 'Maurice Bavaud', who: 'Of Neuchâtel, who set out to shoot Hitler in 1938', trait: 'Sure hand', effect: 'pistol whose shots hit 60% harder', weapon: 'revolver', weaponName: 'Pistol & knife', mods: { gun: 1.6 }, sleeve: 0x2a3040, cuff: 0xe0dcd0 },
  ],
  keys: '<kbd>W A S D</kbd> move &nbsp; <kbd>Shift</kbd> run &nbsp; <kbd>Space</kbd> jump<br><kbd>Left mouse</kbd> fire &nbsp; <kbd>Right mouse</kbd> aim &nbsp; <kbd>R</kbd> reload &nbsp; <kbd>F</kbd> knife',
  foes: 'sentries remain', foesNone: 'The guns are silent', bossName: 'Major Kessler', bossDown: 'The battery has lost its commander', pickupText: 'Calvados  +35',
  deadTitle: 'Missing in action', deadSub: 'London waits for a signal that never comes.', clearTitle: 'The guns are silent',
  build,
};

const GREY = 0x565e54, CONCRETE = 0x8a8c86, SLATE = 0x4a5058, STONE = 0xc9c0ae;

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
  const ROAD = [[0, 104], [0, 62], [-5, 32], [0, 6], [0, -30], [4, -60], [0, -86]];
  // ---- terrain: rolling fields ending in a chalk cliff above the sea --------------------
  const hf = new Heightfield(1000, 300, (x, z) => {
    const calm = 1 - (1 - smooth(2.5, 9, dPoly(ROAD, x, z))) * 0.85;
    let h = 9 + (fbm(x * 0.02 + 6, z * 0.02, 4, 17) - 0.5) * 3.6 * calm;
    const village = (1 - smooth(22, 34, Math.abs(x))) * (1 - smooth(26, 36, Math.abs(z - 2))); h = h * (1 - village * 0.8) + 9 * village * 0.8;
    const battery = (1 - smooth(40, 56, Math.abs(x))) * (1 - smooth(14, 22, Math.abs(z + 80))); h = h * (1 - battery * 0.9) + 9.4 * battery * 0.9;
    const sea = smooth(-98, -106, z);
    return h * (1 - sea) - 7 * sea;
  });
  world.height = (x, z) => hf.h(x, z);
  world.bounds = { x0: -118, x1: 118, z0: -97, z1: 106 };
  world.maxSlope = 0.95; world.waterY = 1;
  const cG1 = new THREE.Color(0x4c6636), cG2 = new THREE.Color(0x667c40), cWheat = new THREE.Color(0x978a52), cRoad = new THREE.Color(0x6c6456), cChalk = new THREE.Color(0xd9d5c6),
    cBed = new THREE.Color(0x2a3a48), tmp = new THREE.Color();
  root.add(hf.mesh(M.ground, (x, z, h, ny) => {
    if (h < 0.5) return tmp.copy(cChalk).lerp(cBed, smooth(0.5, -3, h));
    tmp.copy(cG1).lerp(cG2, fbm(x * 0.04, z * 0.04, 3, 6));
    tmp.lerp(cWheat, smooth(0.55, 0.62, fbm(x * 0.012 + 20, z * 0.012, 2, 9)) * 0.7);
    tmp.lerp(cRoad, (1 - smooth(1.6, 3.6, dPoly(ROAD, x, z))) * 0.9);
    tmp.lerp(cChalk, 1 - smooth(0.55, 0.85, ny));
    return tmp;
  }));
  const sea = new THREE.Mesh(new THREE.PlaneGeometry(4000, 4000), makeWater(shared, { deep: 0x101c2c, scale: 0.4, flow: [0.05, 0.12], alpha: 0.9 }));
  sea.rotation.x = -Math.PI / 2; root.add(sea);

  // ---- building blocks -----------------------------------------------------------------
  const frame = (x, z, ry) => { const c = Math.cos(ry), s = Math.sin(ry); return (lx, lz) => [x + lx * c + lz * s, z - lx * s + lz * c]; };
  const lamps = [];
  const lamp = (x, y, z, i = 26, d = 15, c = 0xffb060) => { const l = new THREE.PointLight(c, i, d, 1.7); l.position.set(x, y, z); root.add(l); lamps.push(l); };
  const bushes = [];
  const hedge = (x0, z0, x1, z1) => {
    const len = Math.hypot(x1 - x0, z1 - z0), ry = Math.atan2(-(z1 - z0), x1 - x0), mx = (x0 + x1) / 2, mz = (z0 + z1) / 2, y = world.height(mx, mz);
    B.box(M.ground, len, 1.1, 2.4, mx, y - 0.4, mz, { ry, c: 0x5a5238 });
    B.box(M.flat, len, 1.9, 1.5, mx, y + 0.6, mz, { ry, c: 0x2e4426 });
    for (let d = 0; d <= len; d += 1.3) { const t = d / len, s = 0.7 + R() * 0.7; bushes.push({ x: x0 + (x1 - x0) * t + (R() - 0.5) * 0.7, y: world.height(x0 + (x1 - x0) * t, z0 + (z1 - z0) * t) + 1.9 + R() * 0.9, z: z0 + (z1 - z0) * t + (R() - 0.5) * 0.7, ry: R() * 6, s: [s * 1.2, s, s * 1.2], c: R.pick([0x2e4426, 0x3a5230, 0x28401f]) }); }
    world.addBox(mx, mz, len, 1.9, ry, y - 2, y + 2.9);
  };
  /** Stone house with a slate roof; front (+Z local) has the door. */
  const house = (x, z, ry, w = 8, d = 7, h = 5.4, lit = false) => {
    const P = frame(x, z, ry), yf = Math.max(world.height(x, z), ...[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([a, b]) => world.height(...P(a * w / 2, b * d / 2)))) + 0.05, y = yf - 0.3, f = yf + 0.06;
    room(B, M, x, yf, z, { w, d, h: 2.7, t: 0.4, ry, mat: M.stone, c: STONE, base: 2.6, doors: [{ side: 's', at: -w * 0.22, w: 1.6, h: 2.15 }],
      wins: [{ side: 's', at: w * 0.2, w: 0.9, y: 1.05, h: 1.15 }, { side: 'n', at: 0, w: 0.9, y: 1.05, h: 1.15 }], floor: { mat: M.woodH, c: 0x5a4632 }, ceil: { mat: M.woodH, c: 0x4a3a2c } });
    B.box(M.stone, w, h - 2.9, d, x, yf + 2.9, z, { ry, c: STONE, solid: true });                                         // the upper floor stays shut
    steps(B, M, ...P(-w * 0.22, d / 2), ry, f, 6, { w: 1.8, c: 0xa8a294 });
    { const [tx, tz] = P(w * 0.16, -d * 0.12); B.box(M.woodH, 1.3, 0.74, 0.8, tx, f, tz, { ry, c: 0x5a4028, solid: true }); if (lit) B.box(M.glow, 0.1, 0.24, 0.1, tx, f + 0.74, tz, { c: 0xffb050 });
      const [cx, cz] = P(w * 0.16, -d * 0.12 + 0.75); B.box(M.wood, 0.42, 0.45, 0.42, cx, f, cz, { ry, c: 0x4a3626 });
      const [ex, ez] = P(-w / 2 + 0.9, -d / 2 + 1.35); B.box(M.woodH, 0.95, 0.5, 1.9, ex, f, ez, { ry, c: 0x4a3626, solid: true }); B.box(M.cloth, 0.9, 0.1, 1.55, ex, f + 0.5, ez, { ry, c: 0x6a7a8a });
      const [sx, sz] = P(w / 2 - 0.85, -d / 2 + 0.85); B.cyl(M.metal, 0.3, 0.34, 0.9, sx, f, sz, { c: 0x1c1c1e, solid: true, seg: 10 }); B.cyl(M.metal, 0.08, 0.08, 1.7, sx, f + 0.9, sz, { c: 0x1c1c1e, seg: 6 }); }
    B.geo(M.shingle, prismGeo(d + 0.8, 2.6, w + 0.9, 3), [x, y + h + 0.3, z], [0, ry + Math.PI / 2, 0], 1, SLATE);
    for (const e of [-1, 1]) { const [gx, gz] = P(e * (w / 2 + 0.01), 0); B.geo(M.stone, prismGeo(d, 2.3, 0.3, 3), [gx, y + h + 0.3, gz], [0, ry + Math.PI / 2, 0], 1, STONE); }
    const [dx, dz] = P(-w * 0.22 - 0.85, d / 2 + 0.55); B.box(M.woodH, 0.1, 2.15, 1.1, dx, yf, dz, { ry, c: 0x3a4a44 });      // door, standing open
    for (const [lx, ly] of [[w * 0.2, 1.3], [-w * 0.22, 3.4], [w * 0.2, 3.4]]) {
      const [wx, wz] = P(lx, d / 2 + 0.03);
      if (ly > 2) B.box(M.flat, 0.9, 1.2, 0.08, wx, y + ly, wz, { ry, c: 0x10161c });
      for (const s of [-1, 1]) { const [sx, sz] = P(lx + s * 0.68, d / 2 + 0.05); B.box(M.woodH, 0.42, 1.25, 0.05, sx, y + ly - 0.02, sz, { ry, c: 0x52686a }); }
    }
    const [cx, cz] = P(w * 0.3, 0); B.box(M.stone, 0.8, 1.7, 0.8, cx, y + h + 1.6, cz, { ry, c: 0xb0a898 });
  };
  const sandbags = (x0, z0, x1, z1, rows = 4) => {
    const len = Math.hypot(x1 - x0, z1 - z0), ry = Math.atan2(-(z1 - z0), x1 - x0), n = Math.max(2, Math.round(len / 0.62));
    for (let r = 0; r < rows; r++) for (let i = 0; i < n; i++) { const t = (i + (r % 2) * 0.5) / n; if (t > 1) continue; const x = x0 + (x1 - x0) * t, z = z0 + (z1 - z0) * t; B.box(M.cloth, 0.6, 0.22, 0.36, x, world.height(x, z) + r * 0.21 - 0.05, z, { ry: ry + (R() - 0.5) * 0.15, c: R.pick([0xa6976c, 0x968860, 0xb2a478]) }); }
    world.addBox((x0 + x1) / 2, (z0 + z1) / 2, len, 0.5, ry, -5, world.height((x0 + x1) / 2, (z0 + z1) / 2) + rows * 0.21);
  };
  const wire = (x0, z0, x1, z1) => {
    const len = Math.hypot(x1 - x0, z1 - z0), ry = Math.atan2(-(z1 - z0), x1 - x0), n = Math.round(len / 3);
    for (let i = 0; i <= n; i++) { const t = i / n, x = x0 + (x1 - x0) * t, z = z0 + (z1 - z0) * t; B.box(M.wood, 0.1, 1.5, 0.1, x, world.height(x, z) - 0.2, z, { c: 0x4a3c2c, rz: (i % 2 ? 0.12 : -0.1) }); }
    const y = world.height((x0 + x1) / 2, (z0 + z1) / 2);
    for (const hh of [0.35, 0.75, 1.15]) B.box(M.flat, len, 0.025, 0.025, (x0 + x1) / 2, y + hh, (z0 + z1) / 2, { ry, c: 0x2a2a2c });
    world.addBox((x0 + x1) / 2, (z0 + z1) / 2, len, 0.4, ry, -5, y + 1.3);
  };
  /** Plain military cross marking (white outline, black bars). */
  const cross = (x, y, z, ry, s = 0.5) => { const P = frame(x, z, ry); B.box(M.flat, s, s * 0.34, 0.03, x, y - s * 0.17, z, { ry, c: 0xf0f0f0 }); B.box(M.flat, s * 0.34, s, 0.03, x, y - s * 0.5, z, { ry, c: 0xf0f0f0 }); const [fx, fz] = P(0, 0.02); B.box(M.flat, s * 0.9, s * 0.18, 0.03, fx, y - s * 0.09, fz, { ry, c: 0x101010 }); B.box(M.flat, s * 0.18, s * 0.9, 0.03, fx, y - s * 0.45, fz, { ry, c: 0x101010 }); };
  const wheel = (x, y, z, ry, r = 0.45) => B.geo(M.flat, new THREE.CylinderGeometry(r, r, 0.26, 12), [x, y, z], [0, ry, Math.PI / 2], 1, 0x15151a);
  const truck = (x, z, ry) => {
    const P = frame(x, z, ry), y = world.height(x, z);
    B.box(M.flat, 2.1, 1.5, 1.7, ...(() => { const [a, b] = P(0, 2.1); return [a, y + 0.75, b]; })(), { ry, c: GREY });
    { const [a, b] = P(0, 3.25); B.box(M.flat, 1.7, 0.75, 0.9, a, y + 0.65, b, { ry, c: GREY }); }
    { const [a, b] = P(0, -0.7); B.box(M.woodH, 2.2, 0.25, 4.0, a, y + 0.85, b, { ry, c: 0x4e5648 }); B.geo(M.cloth, new THREE.CylinderGeometry(1.1, 1.1, 3.9, 12, 1, true, 0, Math.PI), [a, y + 1.1, b], [Math.PI / 2, ry + Math.PI / 2, 0], [1, 1, 1.25], 0x5a6050); }
    for (const [lx, lz] of [[1.05, 2.5], [-1.05, 2.5], [1.05, -1.3], [-1.05, -1.3]]) { const [a, b] = P(lx, lz); wheel(a, y + 0.45, b, ry); }
    { const [a, b] = P(1.07, 2.1); cross(a, y + 1.6, b, ry + Math.PI / 2, 0.5); }
    world.addBox(x + Math.sin(ry) * 0.6, z + Math.cos(ry) * 0.6, 2.4, 6.2, ry, y - 1, y + 2.6);
  };
  const tank = (x, z, ry) => {
    const P = frame(x, z, ry), y = world.height(x, z), C = 0x8a7c54;
    B.box(M.flat, 2.9, 0.95, 5.8, x, y + 0.55, z, { ry, c: C });
    for (const s of [-1, 1]) { const [a, b] = P(s * 1.5, 0); B.box(M.flat, 0.6, 0.8, 6.2, a, y + 0.05, b, { ry, c: 0x2a2a2c }); for (let i = 0; i < 6; i++) { const [wx, wz] = P(s * 1.82, -2.5 + i); wheel(wx, y + 0.42, wz, ry, 0.38); } }
    { const [a, b] = P(0, 2.7); B.box(M.flat, 2.9, 0.7, 1.2, a, y + 0.75, b, { ry, rx: 0.5, c: C }); }
    { const [a, b] = P(0, 0.2); B.box(M.flat, 2.2, 0.85, 2.6, a, y + 1.5, b, { ry, c: C }); B.cyl(M.flat, 0.4, 0.4, 0.3, a, y + 2.35, b - 0, { c: C, seg: 10 }); }
    { const [a, b] = P(0, 3.0); B.geo(M.metal, new THREE.CylinderGeometry(0.09, 0.11, 3.6, 8), [a, y + 1.95, b], [Math.PI / 2, ry, 0], 1, 0x3a3a3c); }
    for (const s of [-1, 1]) { const [a, b] = P(s * 1.12, 0.2); cross(a, y + 2.15, b, ry + s * Math.PI / 2, 0.55); }
    world.addBox(x, z, 3.7, 6.4, ry, y - 1, y + 2.5);
  };
  const casemate = (x, z) => {
    const y = world.height(x, z) - 0.4;
    B.box(M.plaster, 10, 5.2, 8.5, x, y, z, { c: CONCRETE, solid: true });
    B.box(M.plaster, 11.2, 0.9, 9.7, x, y + 5.2, z, { c: 0x7c7e78 });
    B.box(M.flat, 5.2, 2.2, 0.5, x, y + 1.7, z - 4.3, { c: 0x0c0e10 });
    B.geo(M.metal, new THREE.CylinderGeometry(0.3, 0.38, 6.5, 10), [x, y + 2.9, z - 6.4], [Math.PI / 2 - 0.12, 0, 0], 1, 0x3c4038);
    B.box(M.flat, 1.4, 2.3, 0.3, x, y + 0.4, z + 4.2, { c: 0x1a1c1e });
    for (const s of [-1, 1]) { B.box(M.plaster, 2.4, 3.2, 5, x + s * 6, y, z + 1.5, { rz: s * -0.5, c: 0x4e5a3c }); world.addBox(x + s * 6.3, z + 1.5, 2.6, 5, 0, y, y + 2.4); }   // earth banked against the walls
  };

  // ---- the landing: a crashed glider and a parachute in the orchard ---------------------
  {
    const x = 11, z = 98, y = world.height(x, z), ry = 0.5, P = frame(x, z, ry);
    B.geo(M.flat, new THREE.CylinderGeometry(1.0, 0.6, 11, 10), [x, y + 1.0, z], [Math.PI / 2, ry, 0.12], 1, 0x3a4234);
    { const [a, b] = P(0.6, 2.0); B.box(M.flat, 19, 0.22, 2.6, a, y + 1.9, b, { ry, rz: 0.16, c: 0x3a4234 }); for (const k of [-6.4, -5.6, 5.6, 6.4]) { const [sx, sz] = P(k + 0.6, 2.0); B.box(M.flat, 0.5, 0.24, 2.64, sx, y + 1.9 + k * 0.16, sz, { ry, rz: 0.16, c: Math.abs(k) > 6 ? 0xf0f0f0 : 0x101010 }); } }
    { const [a, b] = P(0, -5.2); B.box(M.flat, 5, 0.16, 1.4, a, y + 1.4, b, { ry, c: 0x3a4234 }); B.box(M.flat, 0.16, 1.8, 1.6, a, y + 1.2, b, { ry, c: 0x3a4234 }); }
    world.addBox(x, z, 2.4, 11, ry, y - 1, y + 2.4);
    lamp(x - 2.5, y + 1.4, z + 3.5, 30, 14, 0xff8a40);
  }
  const fires = [[8.5, world.height(8.5, 101.5) + 0.5, 101.5]];
  {
    const x = -7, z = 89, y = world.height(x, z);
    B.geo(M.cloth, new THREE.SphereGeometry(2.6, 12, 8, 0, 6.283, 0, Math.PI / 2), [x, y + 5.2, z], [0.5, 0, 0.3], [1, 0.6, 1], 0xe8e4d8);
    for (let i = 0; i < 6; i++) B.box(M.flat, 0.02, 3.4, 0.02, x + Math.cos(i * 1.05) * 1.2, y + 2.2, z + Math.sin(i * 1.05) * 1.2, { rz: Math.cos(i * 1.05) * 0.3, rx: Math.sin(i * 1.05) * -0.3, c: 0xd8d4c8 });
    B.cyl(M.metal, 0.3, 0.3, 1.5, x, y + 1.2, z, { rz: 0.3, c: 0x4a5248, seg: 10 });
  }

  // ---- hedgerows ----------------------------------------------------------------------------
  for (const h of [[-7, 100, -7, 68], [7, 94, 7, 70], [-62, 64, -11, 64], [11, 68, 64, 68], [-42, 64, -42, 30], [40, 68, 40, 30], [-78, 36, -42, 36], [40, 44, 80, 44],
    [-64, -30, -9, -30], [9, -34, 64, -34], [-34, -30, -34, -62], [36, -34, 36, -64], [-80, 0, -34, 0], [36, -4, 82, -4], [64, 6, 64, 40], [110, 2, 110, 42]]) hedge(...h);
  root.add(instanced(new THREE.IcosahedronGeometry(1, 1), M.rock, bushes));

  // ---- farm --------------------------------------------------------------------------------
  house(-25, 50, 0.1, 10, 7, 5.2, true); house(-13, 44, 1.5, 11, 7, 4.2);
  { const y = world.height(-20, 56); B.box(M.stone, 14, 1.4, 0.5, -24, y - 0.3, 57.5, { c: STONE, solid: true }); B.cyl(M.stone, 0.9, 1.0, 0.8, -18, world.height(-18, 50) - 0.1, 50, { c: STONE, solid: true, seg: 12 }); }
  lamp(-26, world.height(-26, 54) + 2.6, 54.5, 20, 12);

  // ---- the village ------------------------------------------------------------------------------
  house(-15, 20, Math.PI / 2, 9, 7.5, 5.6); house(15, 22, -Math.PI / 2, 9, 7.5, 5.8, true); house(-16, 5, Math.PI / 2, 10, 8, 6.2, true); house(-15, -11, Math.PI / 2, 9, 7.5, 5.4);
  house(15, -16, -Math.PI / 2, 9, 7.5, 5.6); house(-27, 14, 0.2, 8, 7, 5.2); house(28, -22, 2.9, 8, 7, 5.2);
  { // church with its tower
    const x = 24, z = 2, y = world.height(x, z) - 0.3;
    room(B, M, x, y + 0.3, z, { w: 9, d: 18, h: 7.2, t: 0.6, mat: M.stone, c: STONE, base: 2.4, doors: [{ side: 'w', at: 6, w: 2.0, h: 3.0 }], floor: { mat: M.cobble, c: 0xa8a294 }, ceil: { mat: M.woodH, c: 0x3a2e24 } });
    B.geo(M.shingle, prismGeo(10, 4.4, 18.8, 3), [x, y + 7.5, z], [0, 0, 0], 1, SLATE);
    B.box(M.woodH, 1.0, 3.0, 0.12, x - 5.1, y + 0.3, z + 4.9, { ry: 0.5, c: 0x3a2a1c });                                             // side door, ajar
    { const f = y + 0.36;
      B.box(M.stone, 2.4, 1.1, 1.0, x, f, z - 7.4, { c: 0xc8c2b4, solid: true }); B.box(M.cloth, 2.5, 0.04, 1.1, x, f + 1.1, z - 7.4, { c: 0xf0ece0 }); B.box(M.wood, 0.1, 1.5, 0.1, x, f + 1.6, z - 8.2, { c: 0x2a2018 }); B.box(M.wood, 0.7, 0.1, 0.1, x, f + 2.5, z - 8.2, { c: 0x2a2018 });
      for (const s of [-1, 1]) { B.cyl(M.flat, 0.03, 0.03, 0.3, x + s * 0.8, f + 1.12, z - 7.4, { c: 0xe8e0c8, seg: 5 }); B.geo(M.glow, new THREE.SphereGeometry(0.045, 5, 4), [x + s * 0.8, f + 1.48, z - 7.4], [0, 0, 0], [1, 1.6, 1], 0xffb040);
        for (let i = 0; i < 5; i++) { B.box(M.woodH, 2.6, 0.45, 0.45, x + s * 2.3, f, z - 4.4 + i * 1.7, { c: 0x4a3626, solid: true }); B.box(M.woodH, 2.6, 0.5, 0.07, x + s * 2.3, f + 0.45, z - 4.2 + i * 1.7, { c: 0x4a3626 }); } } }
    B.box(M.stone, 5.2, 15, 5.2, x, y, z + 11.4, { c: STONE, solid: true }); B.geo(M.shingle, new THREE.ConeGeometry(4.1, 8.5, 4), [x, y + 19.2, z + 11.4], [0, Math.PI / 4, 0], 1, SLATE);
    B.box(M.flat, 0.14, 1.6, 0.14, x, y + 23.4, z + 11.4, { c: 0x2a2a2a }); B.box(M.flat, 0.8, 0.14, 0.14, x, y + 24.3, z + 11.4, { c: 0x2a2a2a });
    B.box(M.woodH, 1.8, 3, 0.12, x - 2.62, y + 0.3, z + 11.4, { ry: Math.PI / 2, c: 0x3a2a1c });
    for (const zz of [-5, 0, 5]) B.box(M.flat, 0.1, 3.2, 1.2, x - 4.52, y + 2.6, z + zz, { c: 0x141c26 });
    for (const s of [-1, 1]) B.box(M.flat, 1.0, 1.8, 0.1, x, y + 11, z + 11.4 + s * 2.62, { c: 0x0c1014 });
  }
  { const y = world.height(0, 2); B.box(M.cobble, 20, 0.14, 44, 0, y - 0.06, 2, { c: 0xb8b2a4 }); B.cyl(M.stone, 1.9, 2.1, 0.8, 0, y, 2, { c: STONE, solid: true, seg: 14 }); B.cyl(M.stone, 0.35, 0.45, 1.9, 0, y + 0.3, 2, { c: STONE, seg: 8 }); B.cyl(M.flat, 1.6, 1.6, 0.02, 0, y + 0.7, 2, { c: 0x0c1820, seg: 14 }); }
  tank(6.5, -8, 0.25); truck(-6.5, 12, 3.3);
  // checkpoint at the southern entrance
  sandbags(2.5, 29, 9, 29); sandbags(2.5, 29, 2.5, 25.5); sandbags(-9.5, 29, -3.5, 29, 3);
  { const y = world.height(0, 30); B.box(M.wood, 0.18, 1.3, 0.18, -3.2, y - 0.1, 30.2, { c: 0x2a2a2a }); B.box(M.flat, 5.6, 0.1, 0.1, -0.5, y + 1.15, 30.2, { rz: 0.06, c: 0xd8d8d8 }); for (let i = 0; i < 4; i++) B.box(M.flat, 0.7, 0.104, 0.104, -2.4 + i * 1.4, y + 1.1 + i * 0.085, 30.2, { rz: 0.06, c: 0xb81c1c });
    B.geo(M.metal, new THREE.CylinderGeometry(0.035, 0.05, 1.3, 6), [5.4, y + 1.05, 28.6], [Math.PI / 2, 0.1, 0], 1, 0x2a2a2c); lamp(-3.5, y + 2.6, 27.5, 26, 14); B.box(M.wood, 0.12, 2.8, 0.12, -3.6, y, 27.2, { c: 0x3a3028 }); B.box(M.glow, 0.2, 0.22, 0.2, -3.6, y + 2.6, 27.4, { c: 0xffa040 }); }
  barrel(B, M, 9.6, world.height(9.6, 26), 26, 0x4a5248); barrel(B, M, 10.4, world.height(10.4, 26.6), 26.6, 0x4a5248); crate(B, M, -10, world.height(-10, 26), 26, 0.9, 0.3, 0x6a6a52);
  lamp(0, world.height(0, 2) + 3.2, -2, 22, 16, 0xffc890);

  // ---- the manor in the east, the mill in the west ----------------------------------------------
  {
    house(92, 22, -Math.PI / 2, 14, 9, 6.6, true);
    const wall = (ax, az, bx, bz) => { const L = Math.hypot(bx - ax, bz - az), ry = Math.atan2(-(bz - az), bx - ax), mx = (ax + bx) / 2, mz = (az + bz) / 2, y = Math.min(world.height(ax, az), world.height(bx, bz), world.height(mx, mz)) - 0.8;
      B.box(M.stone, L, 2.7, 0.55, mx, y, mz, { ry, c: STONE, solid: true }); B.box(M.stone, L + 0.1, 0.14, 0.75, mx, y + 2.7, mz, { ry, c: 0x8a8478 }); };
    wall(76, 7, 104, 7); wall(76, 37, 104, 37); wall(104, 7, 104, 37); wall(76, 7, 76, 18.5); wall(76, 25.5, 76, 37);
    for (const zz of [18.5, 25.5]) { const y = world.height(76, zz); B.box(M.stone, 0.9, 3.4, 0.9, 76, y - 0.8, zz, { c: STONE, solid: true }); B.geo(M.stone, new THREE.SphereGeometry(0.34, 8, 6), [76, y + 2.9, zz], [0, 0, 0], 1, 0x8a8478); }
    truck(83, 31, 0.5); barrel(B, M, 80, world.height(80, 12), 12, 0x4a5248); barrel(B, M, 80.8, world.height(80.8, 12.5), 12.5, 0x4a5248); crate(B, M, 82, world.height(82, 11), 11, 0.9, 0.2, 0x6a6a52); crate(B, M, 98, world.height(98, 33), 33, 1.0, 0.6, 0x6a6a52);
    { const y = world.height(86, 14); B.cyl(M.stone, 1.0, 1.1, 0.85, 86, y - 0.1, 14, { c: STONE, solid: true, seg: 12 }); B.cyl(M.flat, 0.8, 0.8, 0.02, 86, y + 0.7, 14, { c: 0x0c1820, seg: 12 }); }
    sandbags(72, 19, 72, 25, 4);
    // windmill
    const x = -92, z = -24, w = 6.6, d = 6.6, P = frame(x, z, 0), yf = Math.max(world.height(x, z), ...[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([a, b]) => world.height(...P(a * w / 2, b * d / 2)))) + 0.05;
    room(B, M, x, yf, z, { w, d, h: 3.2, t: 0.6, mat: M.stone, c: STONE, base: 3, doors: [{ side: 'e', at: 0, w: 1.7, h: 2.2 }], wins: [{ side: 's', at: 0, w: 0.8, y: 1.1, h: 1.0 }, { side: 'n', at: 0, w: 0.8, y: 1.1, h: 1.0 }],
      floor: { mat: M.woodH, c: 0x5a4632 }, ceil: { mat: M.woodH, c: 0x4a3a2c } });
    steps(B, M, x + w / 2, z, Math.PI / 2, yf + 0.06, 6, { w: 2.0, c: 0xa8a294 });
    B.cyl(M.stone, 2.3, 3.3, 7.5, x, yf + 3.4, z, { c: STONE, seg: 12 }); world.addBox(x, z, w, d, 0, yf + 3.3, yf + 11);
    B.geo(M.shingle, new THREE.ConeGeometry(2.8, 2.6, 12), [x, yf + 12.2, z], [0, 0, 0], 1, SLATE);
    B.cyl(M.wood, 0.14, 0.14, 1.6, x + 2.6, yf + 9.0, z, { rz: Math.PI / 2, c: 0x3a2e24, seg: 6 });
    for (let k = 0; k < 2; k++) B.box(M.wood, 0.1, 9.6, 0.16, x + 3.3, yf + 5.0, z, { rx: k * Math.PI / 2 + 0.4, c: 0x3a2e24 });
    for (let k = 0; k < 4; k++) { const a = k * Math.PI / 2 + 0.4; B.box(M.cloth, 0.04, 3.4, 1.0, x + 3.36, yf + 9.8 - 1.7 + Math.cos(a) * 2.9, z - Math.sin(a) * 2.9 + Math.cos(a) * 0.5, { rx: a, c: 0xb8b0a0 }); }
    B.box(M.woodH, 1.3, 0.8, 0.8, x - 1.6, yf + 0.06, z - 1.6, { c: 0x5a4028, solid: true }); for (const [qx, qz] of [[x - 1.7, z + 1.6], [x - 0.9, z + 1.9], [x - 1.4, z + 1.2]]) B.geo(M.cloth, new THREE.SphereGeometry(0.34, 8, 6), [qx, yf + 0.3, qz], [0, 0, 0], [1, 0.75, 1], 0xd8d0b8);
    world.addBox(x - 1.4, z + 1.6, 1.4, 1.2, 0, yf, yf + 0.6);
    sandbags(-86, -20, -82, -20, 4); sandbags(-82, -20, -82, -27, 4);
  }

  // ---- north: the field of stakes, the wire, the battery -------------------------------------------
  for (let i = 0; i < 46; i++) { const x = (R() - 0.5) * 60, z = -36 - R() * 26; if (Math.abs(x - dPoly(ROAD, x, z) * 0) < 0 || dPoly(ROAD, x, z) < 4) continue; const y = world.height(x, z); B.cyl(M.wood, 0.1, 0.13, 3.2, x, y - 0.3, z, { c: 0x5a4a38, seg: 6, rz: (R() - 0.5) * 0.12 }); world.addCyl(x, z, 0.14, y - 1, y + 3); }
  wire(-60, -65, -4.5, -65); wire(8.5, -65, 62, -65);
  casemate(-27, -86); casemate(27, -86);
  { // command bunker
    const x = 0, z = -86, y = world.height(x, z) - 0.4;
    room(B, M, x, y + 0.3, z, { w: 12, d: 8, h: 3.3, t: 0.7, mat: M.plaster, c: CONCRETE, base: 2, doors: [{ side: 's', at: -4, w: 1.7, h: 2.2 }], wins: [{ side: 's', at: 1.6, w: 6, y: 1.45, h: 0.5 }],
      floor: { mat: M.plaster, c: 0x5a5c58 }, ceil: { mat: M.plaster, c: CONCRETE } });
    B.box(M.plaster, 13.4, 0.8, 9.2, x, y + 3.6, z, { c: 0x7c7e78 });
    { const f = y + 0.36;                                                                                  // inside: map table, radio, bunks
      B.box(M.woodH, 2.6, 0.8, 1.4, x + 1.5, f, z - 0.6, { c: 0x4a3e30, solid: true }); B.box(M.flat, 2.2, 0.02, 1.1, x + 1.5, f + 0.8, z - 0.6, { c: 0xd8cfa8 });
      for (let i = 0; i < 5; i++) B.box(M.flat, 0.5 + (i % 2) * 0.3, 0.022, 0.03, x + 1.0 + (i % 3) * 0.4, f + 0.82, z - 0.9 + i * 0.16, { ry: i * 0.5, c: i % 2 ? 0xb81c1c : 0x1c3a7a });
      B.box(M.metal, 1.0, 0.7, 0.5, x + 5.0, f + 0.75, z - 3.0, { c: 0x3a4038 }); B.box(M.woodH, 1.3, 0.75, 0.6, x + 5.0, f, z - 3.0, { c: 0x4a3e30, solid: true }); B.box(M.glow, 0.12, 0.06, 0.02, x + 4.8, f + 1.2, z - 2.74, { c: 0x60ff80 });
      for (const k of [0, 1]) { B.box(M.metal, 0.9, 0.08, 1.9, x - 4.7, f + 0.4 + k * 0.95, z - 2.4, { c: 0x3a3e3a }); B.box(M.cloth, 0.85, 0.1, 1.8, x - 4.7, f + 0.48 + k * 0.95, z - 2.4, { c: 0x5c6458 }); }
      world.addBox(x - 4.7, z - 2.4, 0.9, 1.9, 0, f, f + 1.6);
      lamp(x + 1, f + 2.7, z - 0.5, 22, 11, 0xffd9a0); }
    B.cyl(M.wood, 0.06, 0.08, 7, x + 5, y + 4.4, z + 2, { c: 0x3a3a3a, seg: 6 }); B.box(M.cloth, 2.0, 1.3, 0.04, x + 6.05, y + 10.4, z + 2, { c: 0x3a3e3a });
    cross(x + 6.05, y + 11.3, z + 2.03, 0, 0.9);
    sandbags(-8, -79.5, -2.5, -79.5, 4); sandbags(2.5, -79.5, 8, -79.5, 4);
    lamp(-4, y + 3.2, z + 5.6, 30, 15); lamp(6, y + 3.2, z + 7, 26, 15);
  }
  const beams = [];
  for (const [x, z, ph] of [[-15, -74, 0], [16, -76, 2.1], [40, -80, 4.0]]) {
    const y = world.height(x, z); B.cyl(M.metal, 0.5, 0.6, 1.0, x, y, z, { c: 0x3a3e3a, seg: 10, solid: true }); B.cyl(M.metal, 0.7, 0.7, 0.5, x, y + 1.0, z, { c: 0x4a4e48, seg: 12 }); B.geo(M.glow, new THREE.CylinderGeometry(0.6, 0.6, 0.06, 12), [x, y + 1.55, z], [0, 0, 0], 1, 0xcfe0ff);
    const g = new THREE.ConeGeometry(9, 150, 16, 1, true); g.translate(0, -75, 0); g.rotateX(Math.PI);
    const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0xbfd4ff, transparent: true, opacity: 0.055, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false }));
    m.position.set(x, y + 1.6, z); m.renderOrder = 3; root.add(m); beams.push({ m, ph });
  }
  // the fleet on the horizon
  for (let i = 0; i < 70; i++) { const x = (R() - 0.5) * 1900, z = -620 - R() * 500, s = 0.6 + R() * 1.6; B.box(M.flat, 26 * s, 3.2 * s, 5 * s, x, 0, z, { c: 0x0c1016 }); B.box(M.flat, 8 * s, 4 * s, 4 * s, x + 2 * s, 3.2 * s, z, { c: 0x0c1016 }); B.box(M.flat, 0.8 * s, 6 * s, 0.8 * s, x - 3 * s, 4 * s, z, { c: 0x0c1016 }); }

  // ---- trees, grass, rocks --------------------------------------------------------------------------
  const built = (x, z) => dPoly(ROAD, x, z) < 5 || (Math.abs(x) < 34 && Math.abs(z - 2) < 30) || (Math.abs(x) < 50 && z < -66) || (x < -8 && x > -34 && z > 38 && z < 60) || Math.hypot(x - 11, z - 98) < 9 || (x > 62 && x < 110 && z > 2 && z < 42) || Math.hypot(x + 90, z + 23) < 12;
  const apples = [], poplars = [], tufts = [], rocks = [];
  for (let i = 0; i < 3000 && apples.length < 62; i++) { const x = (R() - 0.5) * 230, z = -60 + R() * 160, h = world.height(x, z); if (built(x, z) || fbm(x * 0.05, z * 0.05, 2, 5) < 0.52) continue; const s = 0.8 + R() * 0.5; apples.push({ x, y: h - 0.15, z, ry: R() * 6.28, s }); world.addCyl(x, z, 0.3 * s, h - 2, h + 5); }
  for (let i = 0; i < 3000 && poplars.length < 54; i++) { const x = (R() - 0.5) * 236, z = -64 + R() * 168, h = world.height(x, z); if (built(x, z)) continue; const s = 0.9 + R() * 0.6; poplars.push({ x, y: h - 0.2, z, ry: R() * 6.28, s: [s, s * (1.1 + R() * 0.5), s] }); world.addCyl(x, z, 0.35 * s, h - 2, h + 9); }
  apples.push({ x: -7, y: world.height(-7, 89) - 0.15, z: 89, ry: 1, s: 1.3 });
  root.add(instanced(blobTreeGeo({ leaf: [0x3c5a30, 0x4a6a3a, 0x33502a], trunk: 0x3a2e24, h: 3.6, spread: 2.4, blobs: 9, seed: 8 }), M.rock, apples));
  root.add(instanced(merge([gCyl(0.16, 0.24, 2.2, 0x4a3e30, [0, 1.1, 0], [0, 0, 0], 1, 6), gCone(1.1, 10, 0x35502e, [0, 6.8, 0], [0, 0, 0], 1, 8), gCone(0.85, 5, 0x41603a, [0, 5.4, 0], [0, 1, 0], 1, 7)]), windify(M.rock.clone(), shared, 0.2, 10, 1.1), poplars));
  for (let i = 0; i < 90000 && tufts.length < 22000; i++) {
    const x = (R() - 0.5) * 240, z = -96 + R() * 200, h = world.height(x, z);
    if (h < 6 || dPoly(ROAD, x, z) < 1.8 || (Math.abs(x) < 10 && Math.abs(z - 2) < 22)) continue;
    tufts.push({ x, y: h, z, ry: R() * 6.28, s: [0.35 + R() * 0.45, 0.25 + R() * 0.5, 0.35 + R() * 0.45], c: R.pick([0x5c7a3c, 0x4e6c34, 0x6a8644, 0x8a8a4c]) });
  }
  root.add(instanced(tuftGeo(5, 0x6a7a4a, 0xffffff), windify(M.flat2.clone(), shared, 0.22, 1, 1.8), tufts, { cast: false }));
  for (let i = 0; i < 40; i++) { const x = (R() - 0.5) * 200, z = -100 - R() * 6, s = 1 + R() * 3; rocks.push({ x, y: world.height(x, z) + s * 0.2, z, ry: R() * 6, s: [s, s * 0.8, s], c: 0xd0ccbc }); }
  root.add(instanced(rockGeo(3, 1), M.rock, rocks));

  // ---- atmosphere ---------------------------------------------------------------------------------
  root.add(makeAmbient(shared, { count: 380, box: 36, boxY: 12, size: 0.045, colorA: 0xffe0b0, colorB: 0xffffff, additive: true, alpha: 0.35, bright: 1.2, fall: -0.03, wind: [0.4, 0, 0.3], flutter: 0.6 }));

  const enemies = [
    ['soldier', 2, 76, {}], ['dog', -1, 72, {}], ['soldier', -4, 67, { patrol: true }],
    ['soldier', -19, 52, {}], ['officer', -27, 44.5, {}], ['dog', -17, 41, {}],
    ['gunner', 5.6, 27, { static: true, yaw: 0 }], ['soldier', -5, 31.5, {}], ['dog', 1, 33, {}],
    ['soldier', -8, 12, { patrol: true }], ['officer', 8, 6, {}], ['soldier', 10, -12, {}], ['dog', -6, -8, {}], ['soldier', -9, -19, {}],
    ['soldier', -6, -41, {}], ['dog', 6, -45, {}], ['soldier', 14, -53, { patrol: true }],
    ['gunner', -5.2, -78.2, { static: true, yaw: 0 }], ['soldier', 13, -73, {}], ['officer', -12, -72, {}], ['dog', 5, -70, {}], ['soldier', 24, -76, {}], ['warBoss', 0, -75, { yaw: 0, patrol: false }],
    ['officer', 3.5, -87.5, { up: 1.6, patrol: false, yaw: 0 }], ['soldier', -16, 5, { up: 1.8, patrol: false }],
    ['officer', 92, 22, { up: 1.8, patrol: false }], ['soldier', 82, 24, {}], ['soldier', 97, 31, { patrol: true }], ['dog', 80, 17, {}],
    ['gunner', -84.5, -22.5, { static: true, yaw: 1.2 }], ['soldier', -92, -24, { up: 1.8, patrol: false }],
  ];
  const bottle = merge([gCyl(0.07, 0.08, 0.22, 0x8a5a1c, [0, 0, 0], [0, 0, 0], 1, 8), gCyl(0.028, 0.06, 0.1, 0x8a5a1c, [0, 0.16, 0], [0, 0, 0], 1, 8), gCyl(0.032, 0.032, 0.035, 0xc8a878, [0, 0.225, 0], [0, 0, 0], 1, 6), gCyl(0.082, 0.082, 0.09, 0xe8dcc0, [0, -0.01, 0], [0, 0, 0], 1, 8)]);
  let ft = 0, flak = 0;
  return {
    env: {
      sunDir: [0.72, 0.075, -0.69], sunColor: 0xff9050, lightDir: [-0.42, 0.62, 0.66], sunLight: 0xa9bef2, sunIntensity: 2.3, sunSize: 0.0009,
      skyTop: 0x0b1836, skyHorizon: 0x6a6686, skyGround: 0x2a3040, haze: 0.5,
      fogColor: 0x4a5268, fogDensity: 0.0046, hemiSky: 0x8ea4e2, hemiGround: 0x5c6458, hemiIntensity: 2.3, envIntensity: 0.9,
      cloudCover: 0.52, cloudScale: 0.4, cloudLit: 0xd88c70, cloudShade: 0x262c44, stars: 0.5, moonDir: [-0.5, 0.6, 0.6],
      bloom: 0.5, bloomRadius: 0.7, bloomThreshold: 1.1, rays: 0.5, rayThreshold: 1.4, exposure: 1.5,
      saturation: 1.02, contrast: 1.08, vignette: 0.48, tintHi: 0xfff0e0, tintLo: 0xdfe6ff, shadowRange: 85,
    },
    spawn: { x: 0, z: 97.5, yaw: 0 },
    vista: { c: [0, 6, 20], r: 60, h: 14, a: 1.5, speed: 0.03 },
    enemies, pickups: [[-22, 47.5], [3.5, 23], [-10, 1], [8, -47], [10, -79], [-3, -88.6, 0, 1.6], [93.5, 24.5, 0, 1.8], [-93.6, -25.4, 0, 1.8], [24, -3, 0, 1.6]],
    dust: [0.5, 0.48, 0.42], water: [[0, -104, 30]], heroLight: 40,
    makePickup: () => new THREE.Mesh(bottle, M.flat),
    update(dt, t, g) {
      for (const b of beams) { b.m.rotation.set(0.35 + Math.sin(t * 0.21 + b.ph) * 0.3, 0, Math.sin(t * 0.13 + b.ph * 1.7) * 0.75, 'YXZ'); }
      lamps.forEach((l, i) => { if (i === 0) l.intensity = 26 + Math.sin(t * 13) * 6 + Math.sin(t * 7.1) * 4; });
      ft -= dt; flak -= dt;
      const G = g.gfx;
      if (ft <= 0) {
        ft = 0.06;
        for (const f of fires) { G.glow.spawn(f[0] + (Math.random() - 0.5) * 0.5, f[1], f[2] + (Math.random() - 0.5) * 0.5, (Math.random() - 0.5) * 0.5, 1.4 + Math.random() * 1.4, (Math.random() - 0.5) * 0.5, { life: 0.7 + Math.random() * 0.5, s0: 0.4, s1: 0.04, r: 3, g: 1.1, b: 0.25, a: 0.9 });
          if (Math.random() < 0.4) G.soft.spawn(f[0], f[1] + 0.8, f[2], 0.6, 1.6, 0.3, { life: 4, s0: 0.5, s1: 3, r: 0.2, g: 0.2, b: 0.22, a: 0.3, drag: 0.15 }); }
        const p = G.camera.position, x = p.x + (Math.random() - 0.5) * 60, z = p.z + (Math.random() - 0.5) * 60;              // ground mist
        G.soft.spawn(x, world.height(x, z) + 0.4 + Math.random() * 0.6, z, 0.3, 0.02, 0.15, { life: 7 + Math.random() * 4, s0: 2.5, s1: 6, r: 0.5, g: 0.54, b: 0.66, a: 0.05, drag: 0 });
      }
      if (flak <= 0) {                                                  // anti-aircraft fire far out over the sea
        flak = 0.25 + Math.random() * 0.9;
        const x = (Math.random() - 0.5) * 700, y = 70 + Math.random() * 160, z = -260 - Math.random() * 380;
        for (let i = 0; i < 5; i++) G.glow.spawn(x + (Math.random() - 0.5) * 10, y + (Math.random() - 0.5) * 10, z, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6, 0, { life: 0.5 + Math.random() * 0.4, s0: 7, s1: 1, r: 3, g: 1.8, b: 0.8, a: 0.9 });
        if (Math.random() < 0.5) { const tx = (Math.random() - 0.5) * 500, tz = -200 - Math.random() * 200, vx = (Math.random() - 0.5) * 30; for (let i = 0; i < 7; i++) G.glow.spawn(tx + vx * i * 0.12, 12 + i * 9, tz, vx, 75, 0, { life: 1.6, s0: 2.2, s1: 1.2, r: 3, g: 1.2, b: 0.3, a: 0.9 }); }
      }
    },
  };
}
