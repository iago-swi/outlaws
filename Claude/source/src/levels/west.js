// Chapter I - a frontier town at golden hour.
import * as THREE from 'three';
import { Heightfield, prismGeo, rockGeo } from '../build.js';
import { makeAmbient, windify } from '../gfx.js';
import { signTexture } from '../tex.js';
import { instanced, fence, barrel, crate, tuftGeo, cactusGeo, horseGeo, gBox, gCyl, gCone, gSph, xf, merge } from '../props.js';
import { fbm, vnoise, smooth } from '../util.js';

export const west = {
  id: 'west', theme: 'theme-west', chapter: 'Chapter I', title: 'Dry Gulch', place: 'Dry Gulch · Arizona Territory · 1881',
  story: 'The Crowe gang rode in at noon and took the town. The sheriff is dead, the telegraph is cut, and you are the last man with a badge and a loaded gun. Clear the street before sundown.',
  weapon: 'revolver',
  heroes: [
    { look: 'earp', name: 'Wyatt Earp', who: 'Lawman of Tombstone, 1881', trait: 'Iron nerve', effect: 'takes 25% less damage', mods: { armor: 0.75 }, sleeve: 0x18181c, cuff: 0xe8e4d8 },
    { look: 'calamity', name: 'Calamity Jane', who: 'Scout and sharpshooter of Deadwood', trait: 'Frontier scout', effect: 'moves 18% faster', mods: { speed: 1.18 }, sleeve: 0xa67848, cuff: 0x8a623a },
    { look: 'billy', name: 'Billy the Kid', who: 'The fastest gun in New Mexico', trait: 'Quick draw', effect: 'fires and reloads much faster', mods: { fire: 0.68, reload: 0.6 }, sleeve: 0xd9d2c0, cuff: 0x3a2a1c },
  ], weaponName: 'Six-shooter', alt: 'right mouse — take aim',
  keys: '<kbd>W A S D</kbd> move &nbsp; <kbd>Shift</kbd> run &nbsp; <kbd>Space</kbd> jump<br><kbd>Left mouse</kbd> fire &nbsp; <kbd>Right mouse</kbd> aim &nbsp; <kbd>R</kbd> reload',
  foes: 'outlaws left', foesNone: 'The street is yours', bossName: 'Silas Crowe', bossDown: 'Silas Crowe is down', pickupText: 'Tonic  +35',
  deadTitle: 'Boot Hill', deadSub: 'They buried you where you fell.', clearTitle: 'Dry Gulch is free',
  build,
};

function build({ game, gfx, world, B, M, root, rand, shared }) {
  const R = rand;
  // ---- terrain: flat town, dunes beyond ---------------------------------------
  const hf = new Heightfield(700, 230, (x, z) => {
    const out = Math.max(smooth(84, 170, Math.abs(x)), smooth(46, 120, Math.abs(z)));
    return out * (fbm(x * 0.011 + 3, z * 0.011, 4, 5) * 20 - 5) + out * out * 3;
  });
  world.height = (x, z) => hf.h(x, z);
  world.bounds = { x0: -90, x1: 84, z0: -50, z1: 50 };
  const cA = new THREE.Color(0xc99866), cB = new THREE.Color(0xa87048), cS = new THREE.Color(0x9c7a58), cR = new THREE.Color(0xb5613c), tmp = new THREE.Color();
  root.add(hf.mesh(M.ground, (x, z, h) => {
    const n = fbm(x * 0.03, z * 0.03, 4, 9);
    tmp.copy(cA).lerp(cB, n);
    tmp.lerp(cR, smooth(0.55, 0.8, fbm(x * 0.008 + 40, z * 0.008, 3, 2)) * 0.6);
    const street = (1 - smooth(6, 11, Math.abs(z))) * (1 - smooth(70, 86, Math.abs(x)));
    const rut = 0.82 + 0.18 * vnoise(x * 0.15, z * 2.2, 4);
    tmp.lerp(cS, street * 0.75).multiplyScalar(1 - street * (1 - rut) * 0.9);
    return tmp;
  }));

  // ---- generic frontier building ----------------------------------------------
  const lights = [];
  const win = (x, y, z, w = 1.1, h = 1.5) => B.geo(M.window, new THREE.BoxGeometry(w, h, 0.07), [x, y + h / 2, z]);
  const signs = [];
  const sign = (text, x, y, z, w, h, o = {}) => {
    const t = signTexture(text, o); t.userData.own = true;
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.08), new THREE.MeshStandardMaterial({ map: t, roughness: 0.9 }));
    m.position.set(x, y, z); if (o.ry) m.rotation.y = o.ry; m.receiveShadow = true; root.add(m); signs.push(m);
    return m;
  };
  function bld(o) {
    const { x, w, d, h, dir, wall, trim = 0x4a3526, roofC = 0x8a6a52, balcony = false, interior = false, text, signO, door = true } = o;
    const zf = -8 * dir, zc = zf - dir * d / 2, zp = zf + dir * 1.3, zo = zf + dir * 0.27;
    B.box(M.woodH, w + 1, 0.3, 2.7, x, 0, zp, { c: 0x9a8468, solid: true });
    const H2 = h + 1.5;
    if (!interior) {
      B.box(M.wood, w, h, d, x, 0, zc, { c: wall, solid: true });
      B.box(M.wood, w + 0.5, H2, 0.3, x, 0, zf + dir * 0.1, { c: wall });
      if (door) { B.box(M.woodH, 1.3, 2.3, 0.08, x, 0.3, zo, { c: 0x3a2618 }); B.box(M.wood, 1.6, 0.14, 0.12, x, 2.6, zo, { c: trim }); }
    } else {
      const T = 0.35, gap = 2.2, sw = (w + 0.5 - gap) / 2;
      B.box(M.wood, w, h, T, x, 0, zf - dir * (d - T / 2), { c: wall, solid: true });
      B.box(M.wood, T, h, d, x - w / 2 + T / 2, 0, zc, { c: wall, solid: true });
      B.box(M.wood, T, h, d, x + w / 2 - T / 2, 0, zc, { c: wall, solid: true });
      B.box(M.wood, sw, H2, T, x - gap / 2 - sw / 2, 0, zf - dir * T / 2 + dir * 0.1, { c: wall, solid: true });
      B.box(M.wood, sw, H2, T, x + gap / 2 + sw / 2, 0, zf - dir * T / 2 + dir * 0.1, { c: wall, solid: true });
      B.box(M.wood, gap, H2 - 2.9, T, x, 2.9, zf - dir * T / 2 + dir * 0.1, { c: wall, solid: true });
      B.box(M.woodH, w - 0.6, 0.3, d - 0.6, x, 0, zc, { c: 0x7a5a3e, solid: true });
      B.box(M.woodH, w - 0.6, 0.2, d - 0.6, x, 3.8, zc, { c: 0x5a4030, solid: true });
      // dark panelling inside
      B.box(M.wood, w - 0.72, 3.5, 0.06, x, 0.3, zf - dir * (d - T - 0.04), { c: 0x5a2c22 });
      B.box(M.wood, 0.06, 3.5, d - 0.72, x - w / 2 + T + 0.04, 0.3, zc, { c: 0x5a2c22 });
      B.box(M.wood, 0.06, 3.5, d - 0.72, x + w / 2 - T - 0.04, 0.3, zc, { c: 0x5a2c22 });
    }
    // cornice + corner boards
    B.box(M.woodH, w + 1, 0.24, 0.6, x, H2, zf + dir * 0.15, { c: trim });
    B.box(M.woodH, w * 0.5, 0.5, 0.3, x, H2 + 0.24, zf + dir * 0.1, { c: wall });
    B.box(M.woodH, w * 0.5 + 0.4, 0.16, 0.5, x, H2 + 0.74, zf + dir * 0.12, { c: trim });
    for (const s of [-1, 1]) B.box(M.wood, 0.22, H2, 0.36, x + s * (w / 2 + 0.2), 0, zf + dir * 0.12, { c: trim });
    B.geo(M.shingle, prismGeo(w + 0.3, 1.5, d + 0.1, 3), [x, h, zc], [0, 0, 0], 1, roofC);
    // windows
    const wx = w * 0.3;
    for (const s of [-1, 1]) { win(x + s * wx, 1.25, zo); B.box(M.woodH, 1.35, 0.1, 0.16, x + s * wx, 1.18, zo, { c: trim }); }
    if (h > 6) for (const s of [-1, 0, 1]) { win(x + s * wx, 4.5, zo); B.box(M.woodH, 1.35, 0.1, 0.16, x + s * wx, 4.43, zo, { c: trim }); }
    // porch
    const n = Math.max(2, Math.round(w / 3.4)) + 1, zpost = zf + dir * 2.45;
    for (let i = 0; i < n; i++) {
      const px = x - w / 2 + 0.1 + (w - 0.2) * i / (n - 1);
      B.box(M.wood, 0.17, balcony ? 6.0 : 2.85, 0.17, px, 0.3, zpost, { c: trim });
      world.addCyl(px, zpost, 0.13, 0, 3);
    }
    if (balcony) {
      B.box(M.woodH, w + 1, 0.16, 2.7, x, 3.2, zp, { c: 0x8a6a4e, solid: true });
      B.box(M.woodH, w + 1, 0.09, 0.09, x, 4.3, zpost, { c: trim });
      for (let px = x - w / 2 - 0.4; px <= x + w / 2 + 0.4; px += 0.42) B.box(M.wood, 0.05, 0.95, 0.05, px, 3.36, zpost, { c: trim });
      B.box(M.shingle, w + 1.2, 0.1, 3.0, x, 6.3, zf + dir * 1.35, { rx: dir * 0.17, c: roofC });
    } else B.box(M.shingle, w + 1.2, 0.1, 3.0, x, 3.1, zf + dir * 1.35, { rx: dir * 0.17, c: roofC });
    if (text) sign(text, x, balcony ? h + 0.55 : h + 0.3, zf + dir * 0.3, w * 0.74, 0.95, { ...signO, ry: dir > 0 ? 0 : Math.PI });
    return { zf, zc, zp };
  }

  // north side (fronts face south, +z) and south side
  bld({ x: -40, w: 12, d: 12, h: 5.4, dir: 1, wall: 0x8a4a34, text: 'LIVERY & FEED', signO: { bg: '#e8d8b0', fg: '#4a1c10' }, roofC: 0x7a5a44 });
  bld({ x: -24, w: 11, d: 10, h: 4.7, dir: 1, wall: 0xc9b68a, text: 'GENERAL STORE', signO: { bg: '#2a4a3a', fg: '#f0e2b0' } });
  const sal = bld({ x: -4, w: 16, d: 13, h: 7.4, dir: 1, wall: 0x9a3a2a, trim: 0xe8d8b0, balcony: true, interior: true, text: 'SALOON', signO: { bg: '#f0e0b0', fg: '#7a1810', size: 100 } });
  bld({ x: 13, w: 9, d: 9, h: 5.0, dir: 1, wall: 0xb8a48a, trim: 0x3a3a3a, text: 'BANK', signO: { bg: '#1c1c1c', fg: '#d9b23a' } });
  bld({ x: 26, w: 8, d: 8, h: 4.3, dir: 1, wall: 0x8a7a64, text: 'SHERIFF', signO: { bg: '#e8d8b0', fg: '#1c1c1c' } });
  bld({ x: 38, w: 8, d: 8, h: 4.5, dir: 1, wall: 0x6a7a80, text: 'ASSAY OFFICE', signO: { bg: '#e8d8b0', fg: '#2a3a4a' } });
  bld({ x: -38, w: 10, d: 9, h: 4.5, dir: -1, wall: 0x5a4a3e, text: 'BLACKSMITH', signO: { bg: '#1c1410', fg: '#e0a040' } });
  bld({ x: -21, w: 14, d: 11, h: 7.6, dir: -1, wall: 0xd8ceb0, trim: 0x5a6a5a, balcony: true, text: 'GRAND HOTEL', signO: { bg: '#3a5a4a', fg: '#f0e2b0' } });
  bld({ x: -4, w: 8, d: 8, h: 4.5, dir: -1, wall: 0x3a3a40, trim: 0x1c1c1c, text: 'UNDERTAKER', signO: { bg: '#1c1c1c', fg: '#c9c9c9' } });
  bld({ x: 8, w: 7, d: 8, h: 4.3, dir: -1, wall: 0xb8c4c8, trim: 0x8a2a2a, text: 'BARBER', signO: { bg: '#f0f0e8', fg: '#8a1c1c' } });
  bld({ x: 21, w: 8, d: 8, h: 4.5, dir: -1, wall: 0xa88a5a, text: 'TELEGRAPH', signO: { bg: '#e8d8b0', fg: '#3a2a1a' } });
  bld({ x: 35, w: 9, d: 9, h: 4.7, dir: -1, wall: 0xc8b8a0, trim: 0x4a5a6a, text: 'DOCTOR', signO: { bg: '#f0f0e8', fg: '#1c3a5a' } });

  // ---- saloon interior ---------------------------------------------------------
  {
    const x = -4, zb = -8 - 13 + 0.5;
    B.box(M.woodH, 8.5, 1.05, 0.8, x - 1.5, 0.3, zb + 2.2, { c: 0x5a3420, solid: true });
    B.box(M.woodH, 8.9, 0.08, 1.0, x - 1.5, 1.35, zb + 2.2, { c: 0x8a5a36 });
    B.box(M.woodH, 8.5, 2.4, 0.4, x - 1.5, 0.3, zb + 0.35, { c: 0x4a2c1c });
    B.geo(M.window, new THREE.BoxGeometry(3.2, 1.3, 0.05), [x - 1.5, 2.1, zb + 0.58]);
    for (let i = 0; i < 26; i++) {
      const bx = x - 5.4 + (i % 13) * 0.62 + (R() - 0.5) * 0.1, by = i < 13 ? 1.42 : 3.0;
      if (i < 13 || Math.abs(bx - (x - 1.5)) > 1.8) B.cyl(M.flat, 0.035, 0.06, 0.3, bx, by - (i < 13 ? 0 : 0.3), zb + 0.5 + (i < 13 ? 1.4 : 0.08), { c: R.pick([0x3a6a3a, 0x9a5a1c, 0xc8c0a0, 0x5a2a1a]), seg: 6 });
    }
    for (const [tx, tz] of [[-8.5, -13.5], [0.8, -12.5], [-3.5, -11.2]]) {
      B.cyl(M.woodH, 0.62, 0.62, 0.07, tx, 1.02, tz, { c: 0x7a4a2a, seg: 14 }); B.cyl(M.wood, 0.07, 0.12, 0.74, tx, 0.3, tz, { c: 0x4a2c1c });
      world.addCyl(tx, tz, 0.5, 0.3, 1.1);
      for (let k = 0; k < 3; k++) {
        const a = k * 2.1 + tx, cx = tx + Math.cos(a) * 1.05, cz = tz + Math.sin(a) * 1.05;
        B.box(M.wood, 0.42, 0.06, 0.42, cx, 0.76, cz, { ry: -a, c: 0x6a4428 }); B.box(M.wood, 0.42, 0.55, 0.05, cx + Math.cos(a) * 0.2, 0.8, cz + Math.sin(a) * 0.2, { ry: -a + Math.PI / 2, c: 0x6a4428 });
        for (const [lx, lz] of [[0.17, 0.17], [-0.17, 0.17], [0.17, -0.17], [-0.17, -0.17]]) B.box(M.wood, 0.05, 0.46, 0.05, cx + lx, 0.3, cz + lz, { c: 0x4a2c1c });
      }
    }
    // piano
    B.box(M.woodH, 1.6, 1.25, 0.65, x + 5.6, 0.3, -18.5, { c: 0x2a1810, solid: true }); B.box(M.flat, 1.4, 0.05, 0.25, x + 5.6, 1.05, -18.05, { c: 0xf0ece0 });
    // wagon-wheel chandeliers
    for (const cz of [-12, -17]) {
      B.geo(M.wood, new THREE.TorusGeometry(0.9, 0.05, 6, 18), [x, 3.1, cz], [Math.PI / 2, 0, 0], 1, 0x4a2c1c);
      B.box(M.metal, 0.03, 0.75, 0.03, x, 3.1, cz, { c: 0x2a2a2a });
      for (let k = 0; k < 6; k++) B.geo(M.glow, new THREE.SphereGeometry(0.07, 6, 5), [x + Math.cos(k * 1.047) * 0.9, 3.25, cz + Math.sin(k * 1.047) * 0.9], [0, 0, 0], 1, 0xffa040);
      const pl = new THREE.PointLight(0xffa650, 46, 15, 1.8); pl.position.set(x, 2.9, cz); root.add(pl);
    }
  }
  // batwing doors
  const doors = [];
  for (const s of [-1, 1]) {
    const m = new THREE.Mesh(merge([gBox(0.95, 1.15, 0.05, 0x6a3a22, [s * -0.5, 0, 0]), gBox(0.95, 0.08, 0.07, 0xe8d8b0, [s * -0.5, 0.56, 0])]), M.flat);
    m.position.set(-4 + s * 1.05, 1.45, -8.1); m.castShadow = true; root.add(m); doors.push({ m, s, a: 0, v: 0 });
  }

  // ---- street dressing ----------------------------------------------------------
  const hitch = (x, z) => { for (const s of [-1.3, 1.3]) B.box(M.wood, 0.14, 1.1, 0.14, x + s, 0, z, { c: 0x6a4a30 }); B.box(M.woodH, 3.0, 0.1, 0.1, x, 1.0, z, { c: 0x6a4a30 }); world.addBox(x, z, 3, 0.2, 0, 0, 1.05); };
  hitch(-24, -4.8); hitch(13, -4.8); hitch(-21, 4.8); hitch(21, 4.8); hitch(35, 4.8);
  const trough = (x, z) => { B.box(M.woodH, 2.2, 0.55, 0.8, x, 0, z, { c: 0x6a5038, solid: true }); B.box(M.glow, 1.9, 0.02, 0.5, x, 0.54, z, { c: 0x1a3a44 }); };
  trough(-9, 4.6); trough(30, -4.6);
  for (const [x, z, y] of [[-17.2, -6.9, 0.3], [-16.6, -6.2, 0.3], [9.2, -6.6, 0.3], [-30.2, 6.7, 0.3], [0.9, 6.6, 0.3], [16, 6.7, 0.3], [30.8, -6.8, 0.3], [-46.5, -7, 0.3], [43, -6.5, 0.3], [42.4, -7.1, 0.3]]) barrel(B, M, x, y, z);
  crate(B, M, -18.4, 0.3, -6.7, 0.8, 0.2); crate(B, M, -18.3, 1.1, -6.7, 0.6, 0.5); crate(B, M, 3.4, 0.3, 6.6, 0.9, 0.1); crate(B, M, 25.6, 0.3, 6.7, 0.75, 0.3); crate(B, M, 26.4, 0.3, 6.5, 0.6, 0.8);
  crate(B, M, 20, 0, 2.5, 1.0, 0.4); crate(B, M, 21.1, 0, 2.9, 0.8, 1.0); crate(B, M, 20.4, 1.0, 2.6, 0.7, 0.7);
  // lamp posts
  for (const [x, z] of [[-30, -5.1], [-12, 5.1], [4, -5.1], [17, 5.1], [32, -5.1], [44, 5.1]]) {
    B.box(M.wood, 0.14, 3.4, 0.14, x, 0, z, { c: 0x2a2018 }); B.box(M.woodH, 0.7, 0.08, 0.08, x + 0.3, 3.3, z, { c: 0x2a2018 });
    B.box(M.glow, 0.2, 0.28, 0.2, x + 0.55, 2.9, z, { c: 0xffa040 }); B.cyl(M.metal, 0.02, 0.2, 0.12, x + 0.55, 3.18, z, { c: 0x1a1a1a, seg: 4 });
    world.addCyl(x, z, 0.12, 0, 3.4);
  }
  // covered wagon
  const wheel = () => merge([xf(new THREE.TorusGeometry(0.62, 0.055, 6, 18), [0, 0, 0], [0, Math.PI / 2, 0], 1, 0x4a3020), gBox(0.05, 1.2, 0.07, 0x5a3a24, [0, 0, 0]), gBox(0.05, 1.2, 0.07, 0x5a3a24, [0, 0, 0], [Math.PI / 3, 0, 0]), gBox(0.05, 1.2, 0.07, 0x5a3a24, [0, 0, 0], [-Math.PI / 3, 0, 0]), gCyl(0.1, 0.1, 0.16, 0x3a2416, [0, 0, 0], [0, 0, Math.PI / 2])]);
  const wagon = (x, z, ry, cover) => {
    const c = Math.cos(ry), s = Math.sin(ry), P = (lx, lz) => [x + lx * c + lz * s, z - lx * s + lz * c];
    B.box(M.woodH, 1.6, 0.6, 3.4, x, 0.78, z, { ry, c: 0x7a5434 }); B.box(M.woodH, 1.5, 0.1, 3.3, x, 0.7, z, { ry, c: 0x4a3020 });
    for (const [lx, lz] of [[0.92, 1.1], [-0.92, 1.1], [0.92, -1.1], [-0.92, -1.1]]) { const [wx, wz] = P(lx, lz); B.geo(M.flat, wheel(), [wx, 0.67, wz], [0, ry, 0]); }
    const [tx, tz] = P(0, 2.9); B.box(M.wood, 0.1, 0.1, 2.6, tx, 0.62, tz, { ry, rx: 0.2, c: 0x5a3a24 });
    if (cover) {
      const g = new THREE.CylinderGeometry(0.95, 0.95, 3.3, 14, 1, true, 0, Math.PI);
      B.geo(M.cloth, g, [x, 1.3, z], [Math.PI / 2, ry + Math.PI / 2, 0], [1, 1, 1.25], 0xe0d6c0);
    }
    world.addBox(x, z, 2.0, 3.6, ry, 0, cover ? 2.4 : 1.4);
  };
  wagon(-13, 1.5, 0.5, true); wagon(46, -2.5, 1.9, false);
  // stone well at the crossroads
  B.cyl(M.stone, 1.15, 1.25, 0.9, 6, 0, 0.5, { c: 0xb8a890, solid: true, seg: 14 }); B.cyl(M.flat, 0.9, 0.9, 0.02, 6, 0.9, 0.5, { c: 0x10181c, seg: 14 });
  for (const s of [-1, 1]) B.box(M.wood, 0.16, 2.4, 0.16, 6 + s * 1.05, 0.4, 0.5, { c: 0x5a3a24 });
  B.geo(M.shingle, prismGeo(1.8, 0.7, 3.0, 3), [6, 2.8, 0.5], [0, Math.PI / 2, 0], 1, 0x8a6a52); B.cyl(M.wood, 0.06, 0.06, 2.2, 6, 2.5, 0.5, { rz: Math.PI / 2, c: 0x4a3020, seg: 6 });

  // ---- water tower, windmill ------------------------------------------------------
  {
    const x = -52, z = -17;
    for (const [sx, sz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) { B.box(M.wood, 0.3, 7.4, 0.3, x + sx * 2, 0, z + sz * 2, { rz: sx * 0.06, rx: -sz * 0.06, c: 0x6a4a30 }); world.addCyl(x + sx * 2, z + sz * 2, 0.25, 0, 7); }
    for (const y of [2.4, 5]) { B.box(M.woodH, 4.3, 0.16, 0.12, x, y, z + 2, { c: 0x6a4a30 }); B.box(M.woodH, 4.3, 0.16, 0.12, x, y, z - 2, { c: 0x6a4a30 }); B.box(M.woodH, 0.12, 0.16, 4.3, x + 2, y, z, { c: 0x6a4a30 }); B.box(M.woodH, 0.12, 0.16, 4.3, x - 2, y, z, { c: 0x6a4a30 }); }
    B.box(M.woodH, 5.4, 0.25, 5.4, x, 7.3, z, { c: 0x5a4030 });
    B.cyl(M.wood, 2.5, 2.4, 3.4, x, 7.55, z, { c: 0x8a6444, seg: 18 });
    for (const y of [8.2, 10.2]) B.cyl(M.metal, 2.53, 2.53, 0.1, x, y, z, { c: 0x2a2a2e, seg: 18, open: true });
    B.geo(M.shingle, new THREE.ConeGeometry(2.9, 1.5, 18), [x, 11.7, z], [0, 0, 0], 1, 0x6a4e3c);
  }
  const fan = new THREE.Group();
  {
    const x = -60, z = 24;
    for (const [sx, sz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) { B.box(M.wood, 0.16, 9.2, 0.16, x + sx * 0.75, 0, z + sz * 0.75, { rz: sx * 0.11, rx: -sz * 0.11, c: 0x7a6a58 }); }
    for (const y of [2, 4.4, 6.6]) { const k = 1.5 * (1 - y / 12); B.box(M.woodH, k * 2, 0.08, 0.08, x, y, z + k, { c: 0x7a6a58 }); B.box(M.woodH, k * 2, 0.08, 0.08, x, y, z - k, { c: 0x7a6a58 }); B.box(M.woodH, 0.08, 0.08, k * 2, x + k, y, z, { c: 0x7a6a58 }); B.box(M.woodH, 0.08, 0.08, k * 2, x - k, y, z, { c: 0x7a6a58 }); }
    world.addCyl(x, z, 1.1, 0, 9);
    const blades = [];
    for (let i = 0; i < 16; i++) { const a = i / 16 * 6.283; blades.push(gBox(0.34, 1.25, 0.02, 0xb8b0a0, [Math.sin(a) * 1.05, Math.cos(a) * 1.05, 0], [0, 0.35, -a])); }
    blades.push(xf(new THREE.TorusGeometry(1.65, 0.03, 5, 24), [0, 0, 0], [0, 0, 0], 1, 0x8a8478), xf(new THREE.TorusGeometry(0.45, 0.03, 5, 16), [0, 0, 0], [0, 0, 0], 1, 0x8a8478));
    const fm = new THREE.Mesh(merge(blades), M.flat2); fm.castShadow = true; fan.add(fm);
    fan.position.set(x - 0.5, 9.4, z); fan.rotation.y = Math.PI / 2; root.add(fan);
    B.box(M.flat, 1.6, 0.06, 0.06, x + 0.5, 9.37, z, { c: 0x6a6258 }); B.box(M.flat2, 0.9, 0.7, 0.03, x + 1.6, 9.05, z, { c: 0xa83a2a });
  }

  // ---- church + boot hill -----------------------------------------------------------
  {
    const x = 62, z = -27;
    B.box(M.wood, 8, 5.6, 13, x, 0, z, { c: 0xe8e2d2, solid: true });
    B.geo(M.shingle, prismGeo(8.8, 3.2, 13.6, 3), [x, 5.6, z], [0, 0, 0], 1, 0x5a4a44);
    B.box(M.wood, 3.2, 11, 3.2, x, 0, z + 7.6, { c: 0xe8e2d2, solid: true });
    for (const [sx, sz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) B.box(M.wood, 0.3, 2.2, 0.3, x + sx * 1.35, 11, z + 7.6 + sz * 1.35, { c: 0xe8e2d2 });
    B.geo(M.metal, new THREE.SphereGeometry(0.55, 10, 8), [x, 12.2, z + 7.6], [0, 0, 0], [1, 1.2, 1], 0xb8923a);
    B.geo(M.shingle, new THREE.ConeGeometry(2.6, 4.2, 4), [x, 15.3, z + 7.6], [0, Math.PI / 4, 0], 1, 0x5a4a44);
    B.box(M.flat, 0.12, 1.4, 0.12, x, 17.3, z + 7.6, { c: 0xf0f0f0 }); B.box(M.flat, 0.7, 0.12, 0.12, x, 18.1, z + 7.6, { c: 0xf0f0f0 });
    B.box(M.woodH, 1.5, 2.6, 0.1, x, 0, z + 9.22, { c: 0x4a3020 });
    for (const s of [-1, 1]) for (const zz of [-3.5, 0, 3.5]) B.geo(M.window, new THREE.BoxGeometry(0.07, 2.2, 1.0), [x + s * 4.02, 2.9, z + zz]);
    for (let i = 0; i < 14; i++) {
      const gx = x + 9 + (i % 5) * 2.4 + (R() - 0.5), gz = z - 3 + Math.floor(i / 5) * 3.4 + (R() - 0.5);
      if (i % 3) { B.box(M.wood, 0.1, 1.2, 0.1, gx, 0, gz, { c: 0xd8d0c0, rz: (R() - 0.5) * 0.2 }); B.box(M.wood, 0.7, 0.1, 0.1, gx, 0.8, gz, { c: 0xd8d0c0 }); }
      else B.box(M.stone, 0.6, 0.9, 0.16, gx, 0, gz, { c: 0xb0a898, rx: (R() - 0.5) * 0.2 });
      B.box(M.ground, 0.9, 0.16, 2.0, gx, -0.02, gz + 1.2, { c: 0x9a7048 });
    }
    fence(B, M, x + 7.4, z - 5, x + 21, z - 5, { h: 1.0, rails: 2, c: 0xd8d0c0 }); fence(B, M, x + 21, z - 5, x + 21, z + 9, { h: 1.0, rails: 2, c: 0xd8d0c0 });
  }

  // ---- corral, barn ----------------------------------------------------------------
  {
    fence(B, M, -80, 4, -54, 4); fence(B, M, -80, 22, -54, 22); fence(B, M, -80, 4, -80, 22); fence(B, M, -54, 4, -54, 9.5); fence(B, M, -54, 13.5, -54, 22);
    const horses = [[-70, 12, 0.6, 0x6a4428], [-63, 17, 2.4, 0x2a1c14], [-74, 18, -1.2, 0xb8a080], [-60, 8, 3.6, 0x8a5a36]];
    for (const [hx, hz, ry, c] of horses) { B.geo(M.flat, horseGeo(c, c === 0xb8a080 ? 0xe8e0d0 : 0x14100c), [hx, 0, hz], [0, ry, 0]); world.addCyl(hx, hz, 0.9, 0, 2); }
    for (const [hx, hz, ry] of [[-77, 6, 0.2], [-76.4, 7.4, 1.2], [-77.2, 6.4, 0.4]]) B.box(M.thatch, 1.5, 0.8, 0.9, hx, hz === 6.4 ? 0.8 : 0, hz, { ry, c: 0xd8b860, solid: true });
    B.box(M.woodH, 2.6, 0.55, 0.8, -56, 0, 19, { c: 0x6a5038, solid: true }); B.box(M.glow, 2.3, 0.02, 0.5, -56, 0.54, 19, { c: 0x1a3a44 });
    // barn
    const x = -70, z = -20;
    B.box(M.wood, 13, 6.2, 17, x, 0, z, { c: 0x8a2c22, solid: true });
    B.geo(M.shingle, prismGeo(14, 4.2, 17.8, 3), [x, 6.2, z], [0, 0, 0], 1, 0x4a3c38);
    B.box(M.wood, 4.4, 4.6, 0.12, x, 0, z + 8.56, { c: 0x6a2018 });
    for (const s of [-1, 1]) { B.box(M.woodH, 0.22, 4.7, 0.16, x + s * 2.2, 0, z + 8.6, { c: 0xe8e0d0 }); B.box(M.woodH, 4.9, 0.2, 0.14, x, 2.2, z + 8.62, { rz: s * 0.76, c: 0xe8e0d0 }); }
    B.box(M.woodH, 4.8, 0.22, 0.16, x, 4.6, z + 8.6, { c: 0xe8e0d0 });
    B.box(M.flat, 1.5, 1.5, 0.1, x, 7, z + 8.9, { c: 0x1a1210 });
    for (const [bx, bz] of [[-63, -10.8], [-62.2, -10.2], [-76.5, -10.6]]) barrel(B, M, bx, 0, bz);
    B.box(M.thatch, 1.5, 0.8, 0.9, -65.5, 0, -10.6, { c: 0xd8b860, solid: true }); B.box(M.thatch, 1.5, 0.8, 0.9, -74, 0, -10.4, { ry: 0.3, c: 0xd8b860, solid: true });
  }

  // ---- far mesas ----------------------------------------------------------------------
  const mesa = (x, z, rx, rz, h, ry) => {
    const y0 = world.height(x, z) - 4, bands = [0x9a4a2e, 0xb8623a, 0xc98a5a, 0xa85436, 0xd09a6a];
    let y = y0, k = 1;
    B.geo(M.rock, new THREE.CylinderGeometry(0.8, 1.6, 1, 9), [x, y0 + h * 0.2, z], [0, ry, 0], [rx, h * 0.4, rz], 0x9a5a3a);
    for (let i = 0; i < 5; i++) {
      const hh = h * (0.14 + ((i * 7) % 5) * 0.035);
      B.geo(M.rock, new THREE.CylinderGeometry(0.93 + (i % 2) * 0.05, 1, 1, 9 + (i % 3)), [x, y + h * 0.3 + hh / 2, z], [0, ry + i * 0.4, 0], [rx * k, hh, rz * k], bands[i]);
      y += hh; k *= 0.93 + (i % 2) * 0.05;
    }
  };
  mesa(-260, -150, 60, 42, 62, 0.3); mesa(-330, 40, 46, 70, 80, 0.8); mesa(-210, 190, 70, 40, 50, 1.2); mesa(60, -280, 90, 50, 70, 0.1);
  mesa(250, -160, 50, 60, 58, 0.5); mesa(300, 90, 60, 44, 74, 2.0); mesa(120, 270, 80, 46, 56, 0.9); mesa(-90, -300, 40, 40, 90, 0.2);
  mesa(-170, -60, 22, 18, 38, 0.6); mesa(190, 30, 20, 26, 34, 1.4); mesa(-140, 120, 18, 22, 30, 0.2);

  // ---- vegetation and rocks ----------------------------------------------------------
  const openLand = (x, z) => (Math.abs(z) > 27 || Math.abs(x) > 92) && !(x > 54 && x < 86 && z < -14 && z > -40) && !(x < -60 && x > -80 && z < -8 && z > -32);
  const cacti = [], rocks = [], sage = [], tufts = [];
  for (let i = 0; i < 2600 && cacti.length < 90; i++) { const x = (R() - 0.5) * 420, z = (R() - 0.5) * 300; if (openLand(x, z)) { cacti.push({ x, y: world.height(x, z) - 0.1, z, ry: R() * 6.28, s: 0.7 + R() * 0.7 }); if (Math.abs(x) < 95 && Math.abs(z) < 55) world.addCyl(x, z, 0.4, -5, 20); } }
  for (let i = 0; i < 400; i++) { const x = (R() - 0.5) * 460, z = (R() - 0.5) * 340; if (openLand(x, z)) { const s = 0.5 + R() * R() * 3.2; rocks.push({ x, y: world.height(x, z) + s * 0.15, z, ry: R() * 6.28, s: [s, s * (0.6 + R() * 0.5), s], c: R.pick([0xb07a52, 0x9a6442, 0xc08a60]) }); if (s > 1.1 && Math.abs(x) < 95 && Math.abs(z) < 55) world.addCyl(x, z, s * 0.85, -5, world.height(x, z) + s * 0.6); } }
  for (let i = 0; i < 1500; i++) { const x = (R() - 0.5) * 380, z = (R() - 0.5) * 280; if (openLand(x, z)) sage.push({ x, y: world.height(x, z) + 0.15, z, ry: R() * 6.28, s: [0.5 + R() * 0.7, 0.35 + R() * 0.35, 0.5 + R() * 0.7], c: R.pick([0x8a9a6a, 0x9aa878, 0x7a8a5a, 0xa89a6a]) }); }
  for (let i = 0; i < 7000; i++) {
    const x = (R() - 0.5) * 300, z = (R() - 0.5) * 200;
    const inStreet = Math.abs(z) < 5.2 && Math.abs(x) < 50;
    if (inStreet || (Math.abs(z) < 21 && Math.abs(z) > 5 && Math.abs(x) < 46 && !(Math.abs(z) > 8 && false))) continue;
    if (Math.abs(z) < 21 && Math.abs(x) < 46) continue;
    tufts.push({ x, y: world.height(x, z), z, ry: R() * 6.28, s: [0.3 + R() * 0.3, 0.18 + R() * 0.3, 0.3 + R() * 0.3], c: R.pick([0xe8d090, 0xd8b870, 0xc8aa68, 0xf0dca0]) });
  }
  root.add(instanced(cactusGeo(), M.flat, cacti));
  root.add(instanced(rockGeo(3, 1), M.rock, rocks));
  root.add(instanced(new THREE.IcosahedronGeometry(1, 1), M.rock, sage, { cast: true }));
  const grassMat = windify(M.flat2.clone(), shared, 0.22, 1, 2.2);
  root.add(instanced(tuftGeo(7, 0xb89a60, 0xffffff), grassMat, tufts, { cast: false }));

  // ---- things that move ----------------------------------------------------------------
  const weeds = [];
  const twigs = [];
  for (let k = 0; k < 46; k++) twigs.push(xf(new THREE.TorusGeometry(0.3 + R() * 0.25, 0.008, 3, 9, 2 + R() * 4), [(R() - 0.5) * 0.25, (R() - 0.5) * 0.25, (R() - 0.5) * 0.25], [R() * 6.3, R() * 6.3, R() * 6.3], 1, R.pick([0x9a7a48, 0x7a5a34, 0xb89a60])));
  const weedGeo = merge(twigs);
  for (let i = 0; i < 5; i++) {
    const m = new THREE.Mesh(weedGeo, M.flat); m.scale.setScalar(0.9 + R() * 0.5); m.castShadow = true; root.add(m);
    weeds.push({ m, x: -80 + R() * 160, z: (R() - 0.5) * 12 + (i > 2 ? 30 : 0), v: 2.5 + R() * 2.5, ph: R() * 6, r: 0.55 });
  }
  root.add(makeAmbient(shared, { count: 1100, box: 34, boxY: 14, size: 0.05, colorA: 0xffd9a0, colorB: 0xffb870, additive: true, alpha: 0.55, bright: 1.5, fall: -0.04, wind: [0.9, 0, 0.25], flutter: 0.5 }));

  const enemies = [
    ['cowboy', 44, 3, { yaw: 1.4 }], ['cowboy', 33, -3.5, {}], ['bandit', 22, 4.8, {}], ['cowboy', 9, -4, { patrol: true }],
    ['bandit', -21, 9.3, { y: 4, static: true, yaw: 3.1 }], ['cowboy', -6.5, -9.4, { y: 4, static: true, yaw: 0 }],
    ['cowboy', -8, -15, { y: 1, patrol: false, yaw: 0.6 }], ['bandit', -0.5, -17.5, { y: 1, patrol: false, yaw: -0.4 }],
    ['cowboy', -14.5, -1.5, {}], ['bandit', -27, -4.5, {}], ['cowboy', -34, 3.5, { patrol: true }], ['bandit', -46, -2, {}],
    ['cowboy', -57, 11.5, {}], ['bandit', -62, -6, { patrol: true }], ['westBoss', -68, -9, { yaw: 1.2, patrol: false }],
  ];
  const tonicGeo = merge([gCyl(0.075, 0.085, 0.24, 0x8a4a14, [0, 0, 0], [0, 0, 0], 1, 8), gCyl(0.03, 0.06, 0.1, 0x8a4a14, [0, 0.17, 0], [0, 0, 0], 1, 8), gCyl(0.034, 0.034, 0.04, 0xc8a878, [0, 0.24, 0], [0, 0, 0], 1, 6), gCyl(0.088, 0.088, 0.1, 0xf0e8d0, [0, -0.01, 0], [0, 0, 0], 1, 8)]);

  let t0 = 0;
  return {
    env: {
      sunDir: [-0.86, 0.31, 0.40], sunColor: 0xffb26b, sunLight: 0xffc993, sunIntensity: 4.4,
      skyTop: 0x2f6ac2, skyHorizon: 0xf6bf80, skyGround: 0xb98a5e, haze: 0.42,
      fogColor: 0xe6b88a, fogDensity: 0.0024, hemiSky: 0x9db6e6, hemiGround: 0x8f5c3a, hemiIntensity: 1.7, envIntensity: 0.6,
      cloudCover: 0.5, cloudScale: 0.42, cloudLit: 0xffe6c4, cloudShade: 0xd08a72,
      bloom: 0.32, bloomRadius: 0.65, bloomThreshold: 1.35, rays: 0.42, rayThreshold: 1.75, exposure: 1.18,
      saturation: 1.1, contrast: 1.08, vignette: 0.32, tintHi: 0xfff0dc, tintLo: 0xe6ecff, shadowRange: 85,
    },
    spawn: { x: 72, z: 0.5, yaw: Math.PI / 2 },
    vista: { c: [0, 4, 0], r: 60, h: 4.5, a: 0.0, swing: 0.11, speed: 0.08, up: 1.5 },
    enemies, pickups: [[27.5, -6.6, 1], [-9.5, -18.5, 1], [-31, 6.6, 1], [-50, 1, 1], [-58, -12, 1]],
    dust: [0.72, 0.52, 0.34],
    makePickup: () => new THREE.Mesh(tonicGeo, M.flat),
    update(dt, t, g) {
      fan.rotation.z -= dt * 2.4;
      for (const w of weeds) {
        w.x += w.v * dt; w.z += Math.sin(t * 0.3 + w.ph) * dt * 0.4;
        if (w.x > 90) { w.x = -92; w.z = (R() - 0.5) * 12; }
        const y = world.height(w.x, w.z) + w.r + Math.abs(Math.sin(t * 2.2 + w.ph)) * 0.35;
        w.m.position.set(w.x, y, w.z); w.m.rotation.z -= w.v * dt / w.r; w.m.rotation.x += dt * 0.3;
      }
      // batwing doors swing when someone walks through
      const near = (px, pz) => Math.hypot(px + 4, pz + 8.1) < 1.5;
      let push = 0;
      if (near(g.player.pos.x, g.player.pos.z)) push = g.player.vel.z < 0 ? -1 : 1;
      for (const e of g.enemies) if (e.alive && near(e.pos.x, e.pos.z)) push = 1;
      for (const d of doors) {
        d.v += (-d.a * 30 - d.v * 2.2 + push * 60 * d.s * -1) * dt; d.a += d.v * dt; d.a = Math.max(-1.4, Math.min(1.4, d.a));
        d.m.rotation.y = d.a * d.s * -1 * (push >= 0 ? 1 : 1);
      }
      // low dust drifting across the street
      t0 -= dt;
      if (t0 <= 0) {
        t0 = 0.12;
        const p = g.gfx.camera.position;
        g.gfx.soft.spawn(p.x + (Math.random() - 0.6) * 50, world.height(p.x, p.z) + 0.2 + Math.random() * 0.5, p.z + (Math.random() - 0.5) * 40, 2.2 + Math.random() * 2, 0.15, 0.6,
          { life: 4 + Math.random() * 3, s0: 0.6, s1: 3.4, r: 0.9, g: 0.62, b: 0.4, a: 0.07, drag: 0.05 });
      }
    },
  };
}
