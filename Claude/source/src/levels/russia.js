// Chapter VII - a Soviet city in winter, 1974.
import * as THREE from 'three';
import { Heightfield, prismGeo } from '../build.js';
import { makeAmbient } from '../gfx.js';
import { signTexture, drawTexture } from '../tex.js';
import { makeHumanoid } from '../actors.js';
import { instanced, room, bars, steps, shelf, barrel, crate, gCyl, merge, stepsUp, den } from '../props.js';
import { fbm, smooth } from '../util.js';

export const russia = {
  id: 'russia', theme: 'theme-russia', chapter: 'Chapter VII', title: 'Stalnogorsk', place: 'Stalnogorsk · Soviet Union · winter of 1974',
  story: 'The Committee has seized the manuscript that names every camp and every grave. It lies in the grey tower on the square, behind agents, militia and dogs. Cross the district, break into the Committee building and bring the truth out.',
  weapon: 'revolver', weaponName: 'Pistol & knife', alt: 'right mouse — aim   ·   F — knife', knife: true,
  heroes: [
    { look: 'solzhenitsyn', name: 'Aleksandr Solzhenitsyn', who: 'Artillery captain, prisoner, writer', trait: 'Frontline officer', effect: 'submachine gun; takes 15% less damage', weapon: 'sten', weaponName: 'Submachine gun & knife', mods: { armor: 0.85 }, sleeve: 0x4e4e46, cuff: 0x3a3a34 },
    { look: 'sakharov', name: 'Andrei Sakharov', who: 'Physicist, and the conscience of a country', trait: 'Precision', effect: 'pistol whose shots hit 60% harder', mods: { gun: 1.6 }, sleeve: 0x4a4a54, cuff: 0xe8e4d8 },
    { look: 'nureyev', name: 'Rudolf Nureyev', who: 'The dancer who leapt to freedom in 1961', trait: 'The leap', effect: 'moves 25% faster; agents notice him later', mods: { speed: 1.25, stealth: 0.75 }, sleeve: 0x1c1c22, cuff: 0xf0ece0 },
  ],
  keys: '<kbd>W A S D</kbd> move &nbsp; <kbd>Shift</kbd> run &nbsp; <kbd>Space</kbd> jump<br><kbd>Left mouse</kbd> fire &nbsp; <kbd>Right mouse</kbd> aim &nbsp; <kbd>R</kbd> reload &nbsp; <kbd>F</kbd> knife',
  foes: 'agents remain', foesNone: 'The square is silent', bossName: 'Colonel Voronin', bossDown: 'The Committee has lost its colonel', pickupText: 'Hot tea  +35',
  deadTitle: 'The cellar', deadSub: 'No one will ask where you went.', clearTitle: 'The manuscript is out',
  build,
};

const SNOW = 0xe6eaf0, CONC = 0x9a9c9c, GRAN = 0x6e6a6c, RED = 0xb81c1c, IRON = 0x4a4c50;

function build({ game, gfx, world, B, M, root, rand, shared }) {
  const R = rand, PI = Math.PI;
  // ---- ground: flat, snowed-in, with cleared roads ------------------------------------
  const hf = new Heightfield(760, 150, (x, z) => {
    const paved = Math.max(1 - smooth(9, 13, Math.abs(x)), (1 - smooth(46, 52, Math.abs(x))) * (1 - smooth(30, 36, Math.abs(z + 6))), z < -30 ? 1 - smooth(52, 58, Math.abs(x)) : 0);
    return (fbm(x * 0.06, z * 0.06, 3, 4) - 0.5) * 0.4 * (1 - paved);
  });
  world.height = (x, z) => hf.h(x, z);
  world.bounds = { x0: -104, x1: 104, z0: -86, z1: 104 };
  world.maxSlope = 0.95; world.waterY = -50;
  const cS = new THREE.Color(0xdfe5ec), cS2 = new THREE.Color(0xc4ccd6), cD = new THREE.Color(0x8a8e94), tmp = new THREE.Color();
  root.add(hf.mesh(M.ground, (x, z) => tmp.copy(cS).lerp(cS2, fbm(x * 0.05, z * 0.05, 3, 6)).lerp(cD, (1 - smooth(8, 16, Math.abs(x))) * 0.5)));
  B.box(M.flat, 15, 0.08, 140, 0, -0.03, 34, { c: 0x46484c });                             // the prospekt
  for (const s of [-1, 1]) { B.box(M.metal, 0.09, 0.03, 140, s * 0.75, 0.05, 34, { c: 0x7a7c80 }); B.box(M.flat, 0.5, 0.2, 140, s * 7.7, -0.04, 34, { c: 0x8a8c90 }); }
  for (let z = 100; z > -30; z -= 6) B.box(M.flat, 0.16, 0.01, 2.4, 3.6, 0.055, z, { c: 0xc8c8c4 });
  B.box(M.cobble, 100, 0.1, 62, 0, -0.04, -6, { c: 0x9a9a9e });                           // the square
  B.box(M.flat, 100, 0.08, 24, 0, -0.03, -46, { c: 0x505256 });

  // ---- pieces ---------------------------------------------------------------------------
  const lights = [];
  const lamp = (x, y, z, i = 26, d = 16, c = 0xffc070) => { if (lights.length >= 7) return; const l = new THREE.PointLight(c, i, d, 1.7); l.position.set(x, y, z); root.add(l); lights.push(l); };
  const sign = (text, x, y, z, w, h, o = {}) => {
    const t = signTexture(text, { font: '"Arial Black", Arial, sans-serif', border: false, bg: '#8a1414', fg: '#f0e0b8', ...o }); t.userData.own = true;
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.14), new THREE.MeshStandardMaterial({ map: t, roughness: 0.9 }));
    m.position.set(x, y, z); m.rotation.y = o.ry || 0; root.add(m);
  };
  // panel-block facade: 8 x 8 windows, some of them lit, tiled over plain boxes
  const pat = []; for (let i = 0; i < 64; i++) pat.push(R() < 0.26);
  const drawF = (lit) => (g, w, h) => {
    g.fillStyle = lit ? '#000' : '#cacac6'; g.fillRect(0, 0, w, h);
    for (let j = 0; j < 8; j++) for (let i = 0; i < 8; i++) {
      const x = i * 32, y = j * 32, on = pat[j * 8 + i];
      if (lit) { if (on) { g.fillStyle = '#f2c468'; g.fillRect(x + 7, y + 8, 18, 15); } continue; }
      g.strokeStyle = 'rgba(40,40,44,0.4)'; g.lineWidth = 1; g.strokeRect(x + 0.5, y + 0.5, 32, 32);
      g.fillStyle = on ? '#f2c468' : '#2a3442'; g.fillRect(x + 7, y + 8, 18, 15); g.fillStyle = 'rgba(30,30,34,0.55)'; g.fillRect(x + 15.5, y + 8, 1, 15);
      if ((i + j) % 3 === 0) { g.fillStyle = '#8c8e8e'; g.fillRect(x + 4, y + 24, 24, 5); }
    }
  };
  const mkT = (lit) => { const t = drawTexture(256, 256, drawF(lit)); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.userData.own = true; return t; };
  const FAC = new THREE.MeshStandardMaterial({ map: mkT(false), emissiveMap: mkT(true), emissive: new THREE.Color(1.5, 1.05, 0.5), vertexColors: true, roughness: 0.95 });
  FAC.userData.tile = 24;
  const roofed = (x, y, z, w, d) => { B.box(M.flat, w + 0.4, 0.5, d + 0.4, x, y, z, { c: 0x4a4c50 }); B.box(M.flat, w - 0.4, 0.22, d - 0.4, x, y + 0.5, z, { c: SNOW }); };
  /** Prefabricated block. o.doors: -1 / +1 = side of the stairwell doors. */
  const block = (x, z, w, d, h, c = 0xffffff, o = {}) => {
    B.box(FAC, w, h, d, x, -0.3, z, { c, solid: true }); roofed(x, h - 0.3, z, w, d);
    if (!o.doors) return;
    const along = w >= d, n = Math.max(1, Math.round((along ? w : d) / 12)), s = o.doors;
    for (let i = 0; i < n; i++) {
      const t = ((i + 0.5) / n - 0.5) * (along ? w : d), px = along ? x + t : x + s * (w / 2 + 0.7), pz = along ? z + s * (d / 2 + 0.7) : z + t;
      B.box(M.flat, along ? 2.6 : 1.5, 0.18, along ? 1.5 : 2.6, px, 2.5, pz, { c: 0x5a5c60 });
      B.box(M.flat, along ? 1.3 : 0.12, 2.2, along ? 0.12 : 1.3, along ? px : x + s * (w / 2 + 0.04), 0, along ? z + s * (d / 2 + 0.04) : pz, { c: 0x4a3626 });
      B.box(M.stone, along ? 2.4 : 1.3, 0.3, along ? 1.3 : 2.4, px, -0.14, pz, { c: 0x8a8a8a, solid: true });
    }
  };
  const car = (x, z, ry, c = 0x16161a, van = false) => {
    const cs = Math.cos(ry), sn = Math.sin(ry), P = (lx, lz) => [x + lx * cs + lz * sn, z - lx * sn + lz * cs];
    B.box(M.flat, 1.75, van ? 1.5 : 0.6, van ? 4.4 : 4.3, x, 0.32, z, { ry, c });
    if (!van) { const [a, b] = P(0, -0.2); B.box(M.flat, 1.55, 0.52, 2.1, a, 0.92, b, { ry, c }); B.box(M.flat, 1.58, 0.34, 1.86, a, 1.0, b, { ry, c: 0x1c2630 }); B.box(M.flat, 1.4, 0.06, 1.9, a, 1.44, b, { ry, c: SNOW }); }
    else { const [a, b] = P(0, 1.35); B.box(M.flat, 1.77, 0.5, 1.2, a, 1.22, b, { ry, c: 0x1c2630 }); B.box(M.flat, 1.78, 0.2, 4.42, x, 0.95, z, { ry, c: 0x2a4a9a }); B.box(M.glow, 0.3, 0.14, 0.2, x, 1.84, z, { ry, c: 0x3a6aff }); }
    for (const [lx, lz] of [[0.85, 1.4], [-0.85, 1.4], [0.85, -1.4], [-0.85, -1.4]]) { const [a, b] = P(lx, lz); B.geo(M.flat, new THREE.CylinderGeometry(0.33, 0.33, 0.22, 10), [a, 0.33, b], [0, ry, PI / 2], 1, 0x121214); }
    for (const k of [-0.6, 0.6]) { const [a, b] = P(k, van ? 2.21 : 2.16); B.box(M.glow, 0.24, 0.12, 0.04, a, 0.66, b, { ry, c: 0xfff0c0 }); }
    world.addBox(x, z, 1.9, 4.5, ry, -1, van ? 1.9 : 1.5);
  };
  const street = (x, z, lit = false) => {
    const s = x > 0 ? -1 : 1;
    B.cyl(M.metal, 0.07, 0.1, 7, x, 0, z, { c: IRON, seg: 6 }); B.box(M.metal, 1.7, 0.08, 0.08, x + s * 0.8, 6.9, z, { c: IRON }); B.box(M.glow, 0.5, 0.12, 0.22, x + s * 1.5, 6.78, z, { c: 0xffd9a0 });
    world.addCyl(x, z, 0.12, 0, 7); if (lit) lamp(x + s * 1.5, 6.1, z, 70, 24, 0xffd0a0);
  };
  const cwall = (ax, az, bx, bz, h = 2.6, c = CONC) => {
    const L = Math.hypot(bx - ax, bz - az), ry = Math.atan2(-(bz - az), bx - ax), mx = (ax + bx) / 2, mz = (az + bz) / 2;
    B.box(M.plaster, L, h + 0.4, 0.3, mx, -0.4, mz, { ry, c, solid: true }); B.box(M.flat, L, 0.12, 0.4, mx, h, mz, { ry, c: SNOW });
  };
  const bench = (x, z, ry = 0) => { B.box(M.woodH, 1.8, 0.1, 0.45, x, 0.4, z, { ry, c: 0x6a5a3a }); B.box(M.woodH, 1.8, 0.4, 0.08, x - Math.sin(ry) * 0.2, 0.55, z - Math.cos(ry) * 0.2, { ry, c: 0x6a5a3a }); world.addBox(x, z, 1.8, 0.5, ry, 0, 0.9); };
  const statue = (x, y, z, ry, s, spec, pose) => {
    const c = 0x5e6468, f = makeHumanoid(M, { lip: c, skin: c, hair: c, shirt: c, sleeve: c, pants: c, boots: c, belt: c, coat: c, ...spec, scale: s });
    f.group.position.set(x, y, z); f.group.rotation.y = ry; pose(f); root.add(f.group);
  };
  const trees = [];
  const birch = (x, z) => { trees.push({ x, y: world.height(x, z) - 0.1, z, ry: R() * 6.28, s: 0.8 + R() * 0.5 }); world.addCyl(x, z, 0.2, -1, 6); };

  // ---- the prospekt -----------------------------------------------------------------------
  for (const [z, lit] of [[90, 0], [66, 1], [42, 0], [14, 1]]) { street(-9.2, z, !!lit); street(9.2, z + 6, false); }
  car(-5.6, 84, 0.04, 0x8a2a22); car(5.4, 74, PI + 0.03, 0xc8c4b8); car(-5.6, 46, 0, 0x3a5a6a); car(5.5, 56, PI, 0x16161a);
  { // bus shelter
    const x = 11.6, z = 68; B.box(M.flat, 0.1, 2.3, 4.2, x + 1.0, 0, z, { c: 0x7a9aa6, solid: true }); B.box(M.flat, 2.2, 0.12, 4.6, x, 2.3, z, { c: 0x5a5c60 }); B.box(M.flat, 2.0, 0.1, 4.4, x, 2.42, z, { c: SNOW });
    for (const k of [-2, 2]) { B.cyl(M.metal, 0.05, 0.05, 2.3, x - 0.9, 0, z + k, { c: IRON, seg: 5 }); world.addCyl(x - 0.9, z + k, 0.08, 0, 2.3); }
    B.box(M.woodH, 0.4, 0.08, 3.2, x + 0.6, 0.45, z, { c: 0x6a5a3a }); B.box(M.flat, 0.5, 0.5, 0.04, x - 0.9, 2.7, z + 2, { c: 0xe8c020 });
  }
  { // news kiosk
    const x = -12.5, z = 31; B.box(M.plaster, 2.6, 2.5, 2.6, x, -0.2, z, { c: 0x4a6a8a, solid: true }); B.box(M.flat, 3.0, 0.14, 3.0, x, 2.3, z, { c: 0x3a4a5a }); B.box(M.flat, 2.8, 0.1, 2.8, x, 2.44, z, { c: SNOW });
    B.box(M.glow, 0.05, 0.8, 1.6, x + 1.31, 1.1, z, { c: 0xffe0a0 }); sign('ГАЗЕТЫ', x + 1.34, 2.05, z, 2.2, 0.36, { ry: PI / 2, bg: '#e8e0d0', fg: '#1c2a4a' });
  }
  // ---- the south-west courtyard ---------------------------------------------------------------
  block(-36, 80, 44, 11, 15, 0xd8d8d2, { doors: -1 }); block(-62, 52, 11, 42, 15, 0xcfd4d0, { doors: 1 }); block(-32, 36, 40, 11, 15, 0xd4d0c8, { doors: 1 });
  {
    // swing
    for (const s of [-1, 1]) for (const k of [-1, 1]) B.cyl(M.metal, 0.045, 0.045, 2.6, -40 + s * 1.5, 0, 62 + k * 0.5, { rx: k * -0.2, c: 0x3a6a9a, seg: 6 });
    B.box(M.metal, 3.2, 0.08, 0.08, -40, 2.45, 62, { c: 0x3a6a9a }); for (const k of [-0.5, 0.5]) { B.box(M.metal, 0.02, 1.8, 0.02, -40 + k, 0.65, 62, { c: 0x2a2a2e }); } B.box(M.woodH, 0.5, 0.05, 0.22, -40.5, 0.62, 62, { c: 0xb83a2a }); B.box(M.woodH, 0.5, 0.05, 0.22, -39.5, 0.62, 62, { c: 0xb83a2a });
    world.addBox(-40, 62, 3.2, 0.5, 0, 0, 2.5);
    // the rocket every Soviet playground had
    B.cyl(M.metal, 0.55, 0.7, 2.6, -28, 0.6, 58, { c: 0xb8bcc2, seg: 10 }); B.geo(M.metal, new THREE.ConeGeometry(0.55, 1.5, 10), [-28, 3.95, 58], [0, 0, 0], 1, RED);
    for (let k = 0; k < 3; k++) B.box(M.metal, 0.06, 1.3, 0.9, -28 + Math.cos(k * 2.09) * 0.75, 0, 58 + Math.sin(k * 2.09) * 0.75, { ry: -k * 2.09 + PI / 2, c: RED }); world.addCyl(-28, 58, 0.9, 0, 4);
    B.box(M.woodH, 3, 0.3, 3, -34, -0.1, 52, { c: 0x8a6a3a, solid: true }); B.box(M.flat, 2.6, 0.06, 2.6, -34, 0.2, 52, { c: SNOW });
    for (const s of [-1, 1]) B.cyl(M.metal, 0.04, 0.04, 2.0, -46 + s * 1.3, 0, 66, { c: IRON, seg: 5 }); B.box(M.metal, 2.7, 0.05, 0.05, -46, 1.95, 66, { c: IRON }); B.box(M.cloth, 2.0, 1.3, 0.04, -46, 0.62, 66, { c: 0x8a3a3a }); world.addBox(-46, 66, 2.7, 0.2, 0, 0, 2);
    bench(-22, 66, 0.2); bench(-48, 48, 1.4);
    for (const [x, z] of [[-18, 48], [-17, 49.6]]) { B.box(M.metal, 1.5, 1.25, 1.1, x, 0, z, { c: 0x4a6a4a, solid: true }); B.box(M.flat, 1.4, 0.08, 1.0, x, 1.25, z, { c: SNOW }); }
    for (const [x, z] of [[-24, 50], [-44, 58], [-36, 68], [-20, 62], [-50, 68], [-30, 46]]) birch(x, z);
    car(-16.5, 58, 0.1, 0x5a6a3a);
  }
  // ---- the south-east: blocks, the food shop, garages -------------------------------------------
  block(38, 86, 44, 11, 15, 0xd6d6d0, { doors: -1 }); block(68, 56, 11, 46, 15, 0xccd0d0, { doors: -1 });
  {
    const x = 28, z = 50;
    room(B, M, x, 0, z, { w: 22, d: 11, h: 4.2, t: 0.4, mat: M.plaster, c: 0xb8b6ae, base: 0.6, doors: [{ side: 'w', at: 0, w: 2.4, h: 2.5 }], wins: [{ side: 's', at: -5.5, w: 4, y: 1.0, h: 1.8 }, { side: 's', at: 4.5, w: 4, y: 1.0, h: 1.8 }],
      floor: { mat: M.cobble, c: 0x8a8a84 }, ceil: { mat: M.plaster, c: 0x9a9a94 } });
    roofed(x, 4.4, z, 22, 11);
    sign('ГАСТРОНОМ', x - 11.1, 3.4, z, 8, 0.9, { ry: -PI / 2, bg: '#1c3a2a', fg: '#f0e8c8' }); sign('ПРОДУКТЫ', x, 3.4, z + 5.58, 9, 0.9, { bg: '#1c3a2a', fg: '#f0e8c8' });
    B.box(M.woodH, 14, 1.05, 0.8, x + 2, 0.06, z - 2.4, { c: 0x6a6a62, solid: true }); B.box(M.flat, 14.1, 0.05, 0.9, x + 2, 1.11, z - 2.4, { c: 0xc8c8c0 });
    B.box(M.woodH, 16, 2.3, 0.5, x + 2, 0.06, z - 4.7, { c: 0x7a6a52, solid: true }); for (let i = 0; i < 9; i++) B.box(M.flat, 0.3, 0.3, 0.22, x - 4.5 + i * 1.6, 0.9 + (i % 3) * 0.55, z - 4.4, { c: [0xb83a2a, 0x3a5a8a, 0xd8c060][i % 3] });
    B.box(M.metal, 0.5, 0.3, 0.4, x - 1, 1.14, z - 2.4, { c: 0xc8ccd0 }); B.box(M.flat, 1.2, 1.0, 1.2, x - 8.6, 0.06, z + 3.6, { c: 0x5a5a52, solid: true }); B.box(M.metal, 0.5, 0.35, 0.45, x - 8.6, 1.06, z + 3.6, { c: 0x3a3a3e });
    crate(B, M, x + 9.4, 0.06, z + 3.6, 0.9, 0.2, 0x8a7a5a); crate(B, M, x + 8.2, 0.06, z + 4.2, 0.7, 0.6, 0x8a7a5a); crate(B, M, x + 9.5, 0.96, z + 3.7, 0.6, 0.4, 0x8a7a5a);
    for (const k of [-1, 1]) B.box(M.glow, 3.0, 0.08, 0.3, x + k * 5, 4.1, z, { c: 0xf0f4ff }); lamp(x, 3.7, z, 30, 15, 0xf0f4ff);
    // garages
    for (const [gx, open] of [[46, 0], [50.4, 1], [54.8, 0], [59.2, 1]]) {
      if (open) room(B, M, gx, 0, 73, { w: 4.2, d: 6.6, h: 2.5, t: 0.25, mat: M.plaster, c: 0x8a8c8c, base: 0.5, doors: [{ side: 's', at: 0, w: 3.0, h: 2.2 }], floor: { mat: M.flat, c: 0x5a5a5c }, ceil: { mat: M.flat, c: 0x6a6c6c } });
      else { B.box(M.plaster, 4.2, 2.9, 6.6, gx, -0.3, 73, { c: 0x8a8c8c, solid: true }); B.box(M.metal, 3.0, 2.2, 0.08, gx, 0, 76.32, { c: 0x4a6a4a }); }
      B.box(M.flat, 4.3, 0.14, 6.8, gx, 2.62, 73, { c: SNOW });
    }
    barrel(B, M, 51.6, 0.06, 71, 0x5a6a7a); barrel(B, M, 50.6, 0.06, 70.6, 0x5a6a7a); crate(B, M, 59.4, 0.06, 71, 1.0, 0.3, 0x7a7a6a); B.box(M.woodH, 1.6, 0.85, 0.7, 60.3, 0.06, 73.6, { c: 0x5a4a3a, solid: true });
    car(48, 64, 1.5, 0xb8a04a); car(40, 62, 0.2, 0x2a3a5a);
    for (const [bx, bz] of [[22, 62], [30, 66], [56, 46], [44, 40], [36, 72]]) birch(bx, bz);
    bench(15, 46, PI / 2);
  }
  // ---- checkpoint before the square -------------------------------------------------------------
  for (const s of [-1, 1]) { B.box(M.plaster, 3.2, 1.0, 0.9, s * 5.6, -0.1, 25, { c: CONC, solid: true }); B.box(M.flat, 3.0, 0.08, 0.8, s * 5.6, 0.9, 25, { c: SNOW }); }
  B.box(M.plaster, 2.2, 2.7, 2.2, -10.4, -0.2, 25, { c: 0x5a6a5a, solid: true }); B.box(M.glow, 1.2, 0.6, 0.04, -10.4, 1.4, 26.12, { c: 0xffe0a0 }); B.box(M.flat, 2.5, 0.14, 2.5, -10.4, 2.5, 25, { c: SNOW });
  B.cyl(M.metal, 0.06, 0.06, 1.2, -4.2, 0, 25, { c: IRON, seg: 6 }); for (let i = 0; i < 6; i++) B.box(M.flat, 0.09, 1.05, 0.09, -4.2 + 0.26 * (i + 1), 1.1 + i * 0.98, 25, { rz: -0.26, c: i % 2 ? 0xf0f0f0 : RED });   // barrier, raised
  car(5.6, 31, 0.12, 0xd8c020, true);

  // ---- the square: the monument, the flags ---------------------------------------------------------
  B.box(M.stone, 10, 0.9, 10, 0, -0.2, -4, { c: GRAN, solid: true }); B.box(M.stone, 6.4, 6.6, 6.4, 0, 0.7, -4, { c: 0x7a3a36, solid: true }); B.box(M.stone, 7.2, 0.4, 7.2, 0, 7.3, -4, { c: GRAN });
  statue(0, 7.7, -4, 0, 7, { face: ['baldtop', 'beard'], extras: ['coat'] }, (f) => { f.armR.rotation.x = -1.45; f.armR.rotation.z = 0.2; f.armL.rotation.x = -0.35; f.legL.rotation.x = -0.18; f.legR.rotation.x = 0.14; });
  sign('ВПЕРЁД К ПОБЕДЕ', 0, 4.0, -0.74, 5.4, 0.9, { bg: '#5a2a26', fg: '#e0c890' });
  for (const s of [-1, 1]) for (const k of [14, 24, 34]) { B.cyl(M.metal, 0.06, 0.09, 10, s * k, 0, -31, { c: 0xb8bcc2, seg: 6 }); B.box(M.cloth, 2.6, 1.6, 0.04, s * k + 1.4, 8.2, -31, { c: RED }); world.addCyl(s * k, -31, 0.12, 0, 10); }
  for (const [x, z, ry] of [[-18, 12, 0.3], [20, 14, -0.4], [-26, -14, 1.2], [24, -18, 0.9]]) bench(x, z, ry);
  for (const [x, z] of [[-30, 14], [-36, 6], [32, 16], [38, -2], [-34, -22], [36, -24]]) { B.box(M.stone, 3, 0.5, 3, x, -0.1, z, { c: GRAN, solid: true }); B.geo(M.flat, new THREE.ConeGeometry(1.1, 3.6, 7), [x, 2.2, z], [0, 0, 0], 1, 0x2a4a3a); B.geo(M.flat, new THREE.ConeGeometry(0.9, 1.4, 7), [x, 3.6, z], [0, 0, 0], 1, SNOW); world.addCyl(x, z, 0.8, 0, 4); }
  street(-44, 20, false); street(44, -26, false);
  // east side: the ministry and the pair of workers
  block(68, -6, 16, 44, 24, 0xc8c8c8); for (const k of [-10, 10]) B.box(M.metal, 0.2, 4.2, 0.2, 60.4, 23.7, -6 + k, { c: IRON });
  sign('СЛАВА ТРУДУ', 60.2, 26.4, -6, 26, 3.2, { ry: -PI / 2 });
  B.box(M.stone, 6, 4.4, 5, 44, -0.2, -6, { c: GRAN, solid: true });
  statue(44, 4.2, -5.2, -PI / 2, 4.2, { hair: 0x5e6468, extras: ['smock'], weapon: 'club' }, (f) => { f.armR.rotation.x = -2.7; f.armR.rotation.z = -0.2; f.legL.rotation.x = -0.45; f.legR.rotation.x = 0.4; });
  statue(44, 4.2, -6.8, -PI / 2, 4.0, { face: ['longhair'], extras: ['smock', 'robe'], robe: 0x5e6468 }, (f) => { f.armL.rotation.x = -2.7; f.armL.rotation.z = 0.2; f.legL.rotation.x = 0.35; f.legR.rotation.x = -0.4; });
  // west side: the Palace of Culture, with its hall
  {
    const x = -64, z = -6, F = 0.96;
    room(B, M, x, 0.9, z, { w: 30, d: 22, h: 8, t: 0.6, mat: M.plaster, c: 0xd8d0b4, base: 1.6, doors: [{ side: 'e', at: 0, w: 3.2, h: 3.2 }], floor: { mat: M.woodH, c: 0x6a4a30 }, ceil: { mat: M.plaster, c: 0xc8c0a8 } });
    B.box(M.plaster, 30, 4.2, 22, x, 9.1, z, { c: 0xd8d0b4, solid: true }); roofed(x, 13.3, z, 30, 22);
    B.box(M.stone, 4.6, 1.2, 21, -46.7, -0.3, z, { c: GRAN, solid: true }); steps(B, M, -44.4, z, PI / 2, 0.9, 3, { w: 21, rise: 0.3, run: 0.6, c: GRAN });
    for (let i = 0; i < 6; i++) { const cz = z - 8.5 + i * 3.4; if (i === 2 || i === 3) { B.cyl(M.plaster, 0.5, 0.56, 8.6, -45.4, 0.9, cz + (i === 2 ? -0.5 : 0.5), { c: 0xe8e2d0, seg: 12 }); world.addCyl(-45.4, cz + (i === 2 ? -0.5 : 0.5), 0.6, 0, 9.5); } else { B.cyl(M.plaster, 0.5, 0.56, 8.6, -45.4, 0.9, cz, { c: 0xe8e2d0, seg: 12 }); world.addCyl(-45.4, cz, 0.6, 0, 9.5); } }
    B.box(M.plaster, 3.2, 1.6, 21, -46.4, 9.5, z, { c: 0xe8e2d0 }); B.geo(M.plaster, prismGeo(21, 3.0, 3.2, 3), [-46.4, 11.1, z], [0, PI / 2, 0], 1, 0xe8e2d0);
    sign('ДВОРЕЦ КУЛЬТУРЫ', -44.74, 10.3, z, 15, 1.0, { ry: PI / 2, bg: '#d8d0b4', fg: '#7a1c1c' });
    B.box(M.woodH, 7, 1.0, 17, x - 10.6, F, z, { c: 0x5a3c26, solid: true }); steps(B, M, x - 7.1, z, PI / 2, F + 1.0, 3, { w: 3, rise: 0.25, run: 0.6, mat: M.woodH, c: 0x5a3c26 });
    for (const s of [-1, 1]) B.box(M.cloth, 0.3, 6.4, 3.4, x - 7.4, F, z + s * 8.2, { c: 0x8a1414 }); B.box(M.cloth, 0.3, 1.3, 20, x - 7.4, F + 5.6, z, { c: 0x7a1010 });
    B.box(M.woodH, 2.6, 1.0, 1.5, x - 11.5, F + 1.0, z - 3, { c: 0x121214, solid: true }); B.box(M.flat, 1.3, 0.05, 0.3, x - 10.1, F + 1.75, z - 3, { c: 0xf0ece0 });
    for (let r = 0; r < 6; r++) for (const s of [-1, 1]) { B.box(M.cloth, 0.75, 0.95, 6.6, x - 4 + r * 2.5, F, z + s * 5.4, { c: 0x8a1c1c, solid: true }); }
    B.geo(M.metal, new THREE.TorusGeometry(1.5, 0.07, 6, 18), [x + 2, 7.6, z], [PI / 2, 0, 0], 1, 0xc9a23a); for (let k = 0; k < 8; k++) B.geo(M.glow, new THREE.SphereGeometry(0.12, 6, 5), [x + 2 + Math.cos(k * 0.785) * 1.5, 7.75, z + Math.sin(k * 0.785) * 1.5], [0, 0, 0], 1, 0xffd9a0);
    lamp(x + 2, 6.6, z, 50, 26, 0xffe0b0);
  }
  // the park behind the Palace of Culture
  {
    B.cyl(M.metal, 6.5, 6.5, 0.06, -80, world.height(-80, 20) + 0.02, 20, { c: 0x8ab8c8, seg: 22 });
    const bx = -62, bz = 20; B.cyl(M.woodH, 3.4, 3.4, 0.5, bx, -0.1, bz, { c: 0x8a8a84, seg: 8, solid: true }); for (let k = 0; k < 8; k++) { const a = k * 0.785 + 0.39; B.cyl(M.wood, 0.1, 0.1, 3, bx + Math.cos(a) * 3, 0.4, bz + Math.sin(a) * 3, { c: 0xe8e4d8, seg: 6 }); world.addCyl(bx + Math.cos(a) * 3, bz + Math.sin(a) * 3, 0.14, 0, 3.5); }
    B.geo(M.shingle, new THREE.ConeGeometry(4.2, 1.8, 8), [bx, 4.3, bz], [0, 0.39, 0], 1, 0x4a6a5a); B.geo(M.flat, new THREE.ConeGeometry(3.6, 1.1, 8), [bx, 4.9, bz], [0, 0.39, 0], 1, SNOW);
    for (const [x, z] of [[-96, 12], [-90, 26], [-86, 10], [-72, 28], [-70, 10], [-94, 20], [-66, 27], [-58, 12], [-76, 34], [-88, 34], [-100, 30], [-56, 26]]) birch(x, z);
    bench(-72, 14, 0.4); bench(-86, 22, -1.2);
  }

  // ---- the Committee: lobby, cells and archive under the tower ----------------------------------------
  {
    const F = 1.46, WALL = 0x8a8682;
    cwall(-52, -34, -10.2, -34, 3); cwall(10.2, -34, 52, -34, 3);
    for (const s of [-1, 1]) { B.box(M.stone, 1.3, 3.8, 1.3, s * 9.5, -0.2, -34, { c: GRAN, solid: true }); B.geo(M.glow, new THREE.SphereGeometry(0.3, 8, 6), [s * 9.5, 3.9, -34], [0, 0, 0], 1, 0xffe0b0);
      B.box(M.plaster, 2, 2.6, 2, s * 12.4, -0.2, -37.2, { c: 0x5a6a5a, solid: true }); B.box(M.flat, 2.3, 0.14, 2.3, s * 12.4, 2.4, -37.2, { c: SNOW }); }
    car(22, -38.5, PI / 2, 0x0c0c0e); car(29, -38.5, PI / 2, 0x0c0c0e); car(-24, -38.5, -PI / 2, 0x0c0c0e);
    B.box(M.stone, 18, 1.7, 5.2, 0, -0.3, -41.5, { c: GRAN, solid: true }); steps(B, M, 0, -38.9, 0, 1.4, 4, { w: 18, rise: 0.34, run: 0.6, c: GRAN });
    for (const px of [-7.4, -3.4, 3.4, 7.4]) { B.box(M.stone, 1.1, 9.4, 1.1, px, 1.4, -40.4, { c: WALL }); world.addBox(px, -40.4, 1.1, 1.1, 0, 0, 11); }
    B.box(M.stone, 18, 1.6, 2.2, 0, 10.8, -40.6, { c: WALL }); sign('КОМИТЕТ', 0, 11.6, -39.46, 8, 1.0, { bg: '#2a2826', fg: '#c9a23a' });
    room(B, M, 0, 1.4, -52, { w: 32, d: 16, h: 6.4, t: 0.7, mat: M.stone, c: WALL, base: 2, doors: [{ side: 's', at: 0, w: 4, h: 3.6 }, { side: 'w', at: 2, w: 1.8, h: 2.4 }], floor: { mat: M.cobble, c: 0x8a7a76 }, ceil: { mat: M.plaster, c: 0x9a9690 } });
    room(B, M, -27, 1.4, -52, { w: 22, d: 16, h: 4.2, t: 0.6, mat: M.plaster, c: WALL, base: 2, doors: [{ side: 'e', at: 2, w: 1.8, h: 2.4 }], floor: { mat: M.plaster, c: 0x6a6a6a }, ceil: { mat: M.plaster, c: 0x7a7a78 } });
    B.box(FAC, 32, 18, 16, 0, 8, -52, { c: 0xa29e98, solid: true }); B.box(FAC, 22, 20, 16, -27, 5.8, -52, { c: 0x9a9690, solid: true }); B.box(FAC, 22, 26, 16, 27, -0.3, -52, { c: 0x9a9690, solid: true });
    roofed(0, 26, -52, 32, 16); roofed(-27, 25.8, -52, 22, 16); roofed(27, 25.7, -52, 22, 16);
    B.box(FAC, 24, 54, 20, 0, -0.3, -72, { c: 0xa6a29c, solid: true }); B.box(FAC, 17, 12, 14, 0, 53.7, -72, { c: 0xa6a29c }); B.box(M.plaster, 9, 9, 9, 0, 65.7, -72, { c: 0xa6a29c });
    B.geo(M.metal, new THREE.ConeGeometry(2.6, 18, 8), [0, 83.7, -72], [0, 0, 0], 1, 0xb8a060); B.geo(M.glow, new THREE.OctahedronGeometry(1.5, 0), [0, 94, -72], [0, 0, 0], [1, 1, 0.4], 0xff2a1a);
    for (const s of [-1, 1]) { B.box(FAC, 30, 21, 16, s * 37, -0.3, -72, { c: 0x9a9690, solid: true }); roofed(s * 37, 20.7, -72, 30, 16); B.box(M.plaster, 5, 6, 5, s * 9, 53.7, -65, { c: 0xa6a29c }); B.geo(M.metal, new THREE.ConeGeometry(1.6, 6, 6), [s * 9, 62.7, -65], [0, 0, 0], 1, 0xb8a060); }
    // lobby
    for (const px of [-6, 6]) for (const pz of [-49, -55]) { B.box(M.stone, 1.0, 6.4, 1.0, px, F, pz, { c: 0x7a3a36 }); world.addBox(px, pz, 1.0, 1.0, 0, F - 0.2, F + 6.4); }
    B.box(M.cloth, 2.6, 0.02, 9, 0, F + 0.01, -49.5, { c: 0x8a1414 });
    B.box(M.woodH, 4.4, 1.1, 1.0, -10.5, F, -47.2, { c: 0x3a2a1c, solid: true }); B.box(M.glow, 0.14, 0.3, 0.14, -9, F + 1.1, -47.2, { c: 0x60ff90 }); B.box(M.metal, 0.4, 0.2, 0.3, -11.6, F + 1.1, -47.2, { c: 0x1a1a1c });
    B.box(M.cloth, 7, 3.4, 0.06, 0, F + 2.6, -59.24, { c: RED }); B.box(M.woodH, 1.9, 2.4, 0.1, 0, F + 3.1, -59.18, { c: 0xc9a23a }); B.box(M.flat, 1.6, 2.1, 0.12, 0, F + 3.25, -59.16, { c: 0x4a4a4e });
    for (const pz of [-48, -55]) { B.box(M.woodH, 0.6, 0.45, 3, 14.6, F, pz, { c: 0x4a3626, solid: true }); }
    // archive cage behind bars, with the manuscript
    bars(B, M, -8, -56.4, -1.1, -56.4, F, F + 3.4); bars(B, M, 1.1, -56.4, 8, -56.4, F, F + 3.4); bars(B, M, -1.1, -56.4, 1.1, -56.4, F + 2.5, F + 3.4); bars(B, M, -8, -56.4, -8, -59.3, F, F + 3.4); bars(B, M, 8, -56.4, 8, -59.3, F, F + 3.4);
    bars(B, M, 1.1, -56.4, 2.2, -55.2, F, F + 2.5);
    for (const s of [-1, 1]) { B.box(M.metal, 2.2, 2.4, 0.6, s * 5.6, F, -58.8, { c: 0x4a5248, solid: true }); for (let i = 0; i < 10; i++) B.box(M.flat, 0.16, 0.34, 0.3, s * 5.6 - 0.9 + i * 0.2, F + 0.5 + (i % 3) * 0.6, -58.5, { c: [0x8a7a5a, 0x5a6a7a, 0x7a5a4a][i % 3] }); }
    B.box(M.woodH, 1.4, 0.8, 0.8, 0, F, -58.5, { c: 0x4a3626, solid: true }); B.box(M.glow, 0.34, 0.07, 0.46, 0, F + 0.8, -58.5, { ry: 0.3, c: 0xfff2c0 });
    lamp(0, F + 5.6, -52, 50, 24, 0xffe8c0);
    // cells in the west wing
    const X0 = -37.4, X1 = -16.6, ZC = -55.2, ZB = -59.4;
    bars(B, M, X0, ZC, -34.6, ZC, F, F + 4.2); bars(B, M, -32.9, ZC, -27.6, ZC, F, F + 4.2); bars(B, M, -25.9, ZC, -20.6, ZC, F, F + 4.2); bars(B, M, -18.9, ZC, X1, ZC, F, F + 4.2);
    for (const gx of [-33.75, -26.75, -19.75]) { bars(B, M, gx - 0.85, ZC, gx + 0.85, ZC, F + 2.4, F + 4.2); bars(B, M, gx + 0.85, ZC, gx + 1.6, ZC + 1.5, F, F + 2.4); }
    bars(B, M, -30.3, ZC, -30.3, ZB, F, F + 4.2); bars(B, M, -23.3, ZC, -23.3, ZB, F, F + 4.2);
    for (const bx of [-36.6, -29.5, -22.5]) { B.box(M.metal, 0.8, 0.4, 1.9, bx, F, -57.6, { c: 0x4a4c50, solid: true }); B.box(M.cloth, 0.76, 0.08, 1.8, bx, F + 0.4, -57.6, { c: 0x6a6a62 }); }
    B.box(M.woodH, 1.8, 0.8, 0.9, -32, F, -47.4, { c: 0x3a2a1c, solid: true }); B.box(M.glow, 0.2, 0.2, 0.2, -31.4, F + 1.3, -47.4, { c: 0xfff0c0 }); B.cyl(M.metal, 0.02, 0.02, 0.5, -31.4, F + 0.8, -47.4, { c: 0x1a1a1c, seg: 5 });
    B.box(M.wood, 0.45, 0.45, 0.45, -32, F, -48.6, { c: 0x4a3626 }); B.box(M.wood, 0.45, 0.45, 0.45, -32, F, -46.0, { c: 0x4a3626 });
    for (let i = 0; i < 3; i++) B.box(M.metal, 0.8, 1.7, 0.6, -24 + i * 0.9, F, -45.2, { c: 0x5a6258, solid: i === 0 }); world.addBox(-23.1, -45.2, 2.7, 0.6, 0, F, F + 1.7);
    lamp(-27, F + 3.4, -51, 22, 14, 0xd0e0ff);
  }
  // ---- the works in the north-east ---------------------------------------------------------------------
  {
    const x = 80, z = -50;
    room(B, M, x, 0, z, { w: 28, d: 16, h: 7, t: 0.5, mat: M.plaster, c: 0x8a6a5a, base: 0.6, doors: [{ side: 'w', at: 0, w: 3.6, h: 3.6 }, { side: 's', at: 8, w: 1.8, h: 2.4 }], wins: [{ side: 's', at: -4, w: 5, y: 2.2, h: 2.0 }],
      floor: { mat: M.plaster, c: 0x5a5a5c }, ceil: { mat: M.metal, c: 0x5a5c60 } });
    roofed(x, 7.2, z, 28, 16); sign('ЗАВОД', x - 14.1, 5.4, z, 6, 1.1, { ry: -PI / 2, bg: '#3a3a3e', fg: '#e0d8c0' });
    for (const [mx, mz, w] of [[76, -54, 3], [84, -54, 2.4], [88, -47, 2.6], [74, -46, 2]]) { B.box(M.metal, w, 1.5, 1.4, mx, 0.06, mz, { c: 0x4a6a5a, solid: true }); B.cyl(M.metal, 0.5, 0.5, 0.2, mx, 1.56, mz, { rx: PI / 2, c: 0x8a8c90, seg: 12 }); B.box(M.metal, 0.3, 0.8, 0.3, mx + w * 0.3, 1.56, mz, { c: 0x3a3a3e }); }
    crate(B, M, 70, 0.06, -55, 1.1, 0.2, 0x7a7a6a); crate(B, M, 70.2, 1.16, -55, 0.8, 0.5, 0x7a7a6a); crate(B, M, 91, 0.06, -55, 1.0, 0.4, 0x7a7a6a);
    for (const [cx, cz, h] of [[86, -66, 36], [94, -64, 28]]) { B.cyl(M.plaster, 1.1, 1.8, h, cx, -0.3, cz, { c: 0x9a5a4a, seg: 12, solid: true }); for (let k = 0; k < 3; k++) B.cyl(M.flat, 1.14 + (2 - k) * 0.05, 1.2 + (2 - k) * 0.05, 1.5, cx, h - 2.2 - k * 3.4, cz, { c: k % 2 ? 0xe8e4dc : RED, seg: 12, open: true }); }
    B.cyl(M.metal, 0.28, 0.28, 22, 64, 3.6, -62.5, { rz: PI / 2, c: 0x8a8478, seg: 8 }); for (const px of [56, 64, 72]) { B.box(M.metal, 0.2, 3.6, 0.2, px, 0, -62.5, { c: IRON }); world.addCyl(px, -62.5, 0.2, 0, 3.6); }
    cwall(60, -36, 60, -64, 2.4, 0x8a8c8c); car(66, -40, 1.6, 0x5a6a4a, true);
  }
  root.add(instanced(merge([gCyl(0.07, 0.13, 5, 0xe6e4de, [0, 2.5, 0], [0, 0, 0], 1, 6), gCyl(0.02, 0.07, 2.6, 0xd8d6d0, [0, 6.2, 0], [0, 0, 0], 1, 5),
    ...[0, 1, 2, 3, 4, 5, 6].map((i) => gCyl(0.012, 0.045, 2.4, 0x3a3432, [Math.cos(i * 2.2) * 0.75, 3.7 + i * 0.36, Math.sin(i * 2.2) * 0.75], [Math.sin(i * 2.2) * 0.8, 0, -Math.cos(i * 2.2) * 0.8], 1, 4))]), M.flat, trees));
  // ---- the hammer and sickle: on the flags, the tower, the monument, the palace -------------------------
  const extraFoes = [], extraPicks = [];
  const EMB = new THREE.MeshStandardMaterial({ roughness: 0.9, side: THREE.DoubleSide, map: (() => {
    const t = drawTexture(256, 256, (g, w, h) => {
      g.fillStyle = '#b01414'; g.fillRect(0, 0, w, h); g.fillStyle = g.strokeStyle = '#f2c230'; g.lineCap = 'round';
      const D = Math.PI / 180;
      g.beginPath(); g.arc(128, 118, 82, 125 * D, -125 * D, true); g.arc(120, 112, 64, -118 * D, 118 * D, false); g.closePath(); g.fill();      // the sickle's blade
      g.lineWidth = 20; g.beginPath(); g.moveTo(86, 176); g.lineTo(58, 212); g.stroke();                                                    // its handle
      g.lineWidth = 15; g.beginPath(); g.moveTo(198, 214); g.lineTo(96, 104); g.stroke();                                                   // the hammer's handle
      g.save(); g.translate(88, 96); g.rotate(Math.atan2(-110, -102)); g.fillRect(-14, -36, 30, 72); g.restore();                           // and its head
    });
    t.userData.own = true; return t; })() });
  const emblem = (x, y, z, sz, ry = 0) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(sz, sz), EMB); m.position.set(x, y, z); m.rotation.y = ry; root.add(m); };
  for (const sg of [-1, 1]) for (const k of [14, 24, 34]) { emblem(sg * k + 0.72, 9.32, -30.97, 0.78); emblem(sg * k + 0.72, 9.32, -31.03, 0.78, PI); }
  emblem(0, 41, -61.9, 7.5); emblem(0, 5.95, -0.76, 1.7); emblem(-44.7, 12.35, -6, 1.9, PI / 2); emblem(59.9, 19.5, -6, 4.6, -PI / 2);

  { // metro pavilion south of the square: turnstiles, a ticket window, the way down closed by a grille
    const x = 28, z = 34.5;
    room(B, M, x, 0, z, { w: 12, d: 8, h: 4.4, t: 0.4, mat: M.plaster, c: 0xc8c2b4, base: 0.6, doors: [{ side: 'w', at: 0, w: 2.8, h: 2.8 }, { side: 'n', at: -2.5, w: 2.8, h: 2.8 }], wins: [{ side: 's', at: -1.5, w: 5, y: 1.2, h: 1.8 }],
      floor: { mat: M.cobble, c: 0x9a8a80 }, ceil: { mat: M.plaster, c: 0xb8b2a4 } });
    roofed(x, 4.6, z, 12, 8);
    sign('МЕТРО', x - 6.1, 3.65, z, 4.2, 0.8, { ry: -PI / 2, bg: '#1c2a4a', fg: '#f0e8c8' }); sign('МЕТРО', x - 2.5, 3.65, z - 4.1, 4.2, 0.8, { ry: PI, bg: '#1c2a4a', fg: '#f0e8c8' });
    B.box(M.metal, 0.16, 2.0, 0.16, x - 5, 5.3, z - 3, { c: IRON }); sign('М', x - 5, 8.1, z - 3, 1.7, 1.7, { ry: -PI / 4, bg: '#f0ece0', fg: '#d01818' });
    for (const k of [-3.3, -1.25, 0.8]) { B.box(M.metal, 1.3, 1.0, 0.35, x - 1.5, 0.06, z + k, { c: 0x6a6e74, solid: true }); B.box(M.glow, 0.16, 0.06, 0.2, x - 2.0, 1.07, z + k, { c: 0x40ff70 }); }
    B.box(M.plaster, 2.4, 2.7, 2.5, x - 1.5, 0.06, z + 2.3, { c: 0x8a9aa6, solid: true }); B.box(M.glow, 0.05, 0.7, 1.2, x - 2.72, 1.2, z + 2.3, { c: 0xffe0a0 }); sign('КАССА', x - 2.74, 2.25, z + 2.3, 1.6, 0.36, { ry: -PI / 2, bg: '#e8e0d0', fg: '#1c2a4a' });
    bars(B, M, x + 1.2, z - 3.6, x + 1.2, z + 1.05, 0.06, 3.2); sign('ЗАКРЫТО', x + 1.12, 2.3, z - 1.3, 2.4, 0.5, { ry: -PI / 2, bg: '#e8e0d0', fg: '#a01818' });
    B.box(M.flat, 0.1, 3.0, 3.8, x + 5.5, 0.06, z - 1.4, { c: 0x0c0c10 }); for (const k of [-2.6, -1.4, -0.2]) B.box(M.metal, 3.6, 0.12, 0.16, x + 3.6, 0.55, z + k, { rz: -0.32, c: 0x2a2a2e });
    emblem(x + 5.42, 3.55, z - 1.4, 1.0, -PI / 2);
    B.box(M.woodH, 0.5, 0.45, 2.6, x - 5.2, 0.06, z + 2.4, { c: 0x6a5a3a, solid: true });
    for (const k of [-3, 3]) B.box(M.glow, 2.6, 0.08, 0.3, x + k, 4.3, z, { c: 0xf0f4ff });
    extraFoes.push(['militia', x - 3.6, z - 0.4, { patrol: false }]); extraPicks.push([x - 4.4, z - 2.8]);
  }
  { // the district library: rows of shelves to hide between
    const x = -80, z = -44;
    room(B, M, x, 0, z, { w: 18, d: 12, h: 4.4, t: 0.45, mat: M.plaster, c: 0xd0c8b0, base: 0.6, doors: [{ side: 'e', at: 2.5, w: 2.4, h: 2.6 }, { side: 's', at: 5.5, w: 2.0, h: 2.5 }], wins: [{ side: 's', at: -3, w: 5, y: 1.1, h: 1.9 }],
      floor: { mat: M.woodH, c: 0x7a5a3a }, ceil: { mat: M.plaster, c: 0xc0b8a0 } });
    roofed(x, 4.6, z, 18, 12); sign('БИБЛИОТЕКА', x + 9.1, 3.7, z + 2.5, 6.4, 0.8, { ry: PI / 2, bg: '#d0c8b0', fg: '#2a2a4a' });
    for (let i = 0; i < 4; i++) shelf(B, M, x - 6.2 + i * 2.6, 0.06, z - 2.7, PI / 2, 5.6, 2.3, { c: 0x5a4028, goods: [0x7a2a22, 0x2a4a6a, 0x8a7a4a, 0x3a5a3a] });
    for (const [tx, tz] of [[x - 3.5, z + 3.3], [x + 1.5, z + 3.3]]) { B.box(M.woodH, 2.6, 0.78, 1.1, tx, 0.06, tz, { c: 0x6a4a30, solid: true }); B.box(M.glow, 0.3, 0.16, 0.2, tx, 1.1, tz, { c: 0x60d080 }); B.cyl(M.metal, 0.02, 0.02, 0.3, tx, 0.84, tz, { c: 0x2a2a2e, seg: 5 }); B.box(M.flat, 0.4, 0.04, 0.3, tx + 0.7, 0.84, tz, { ry: 0.3, c: 0xe8e0d0 }); }
    B.box(M.woodH, 1.0, 1.05, 2.6, x + 6.4, 0.06, z - 2.6, { c: 0x4a3626, solid: true }); B.box(M.woodH, 1.8, 1.5, 0.5, x + 4.4, 0.06, z - 5.2, { c: 0x5a4028, solid: true });
    B.box(M.cloth, 2.4, 1.5, 0.05, x + 6, 2.3, z - 5.5, { c: RED }); emblem(x + 6, 3.05, z - 5.46, 1.0);
    for (const k of [-5, 0, 5]) B.box(M.glow, 0.3, 0.08, 4, x + k, 4.3, z, { c: 0xfff0d0 });
    extraFoes.push(['agent', x - 4.9, z - 3, { patrol: false }], ['agent', x + 4, z + 0.6, { patrol: false }]); extraPicks.push([x - 7.6, z - 4.6]);
  }
  { // a new block going up: bare concrete frame, a slab you can climb to, a tower crane, the builders' hut
    const x = -86, z = 62, C2 = 0xa8a8a4, YEL = 0xd8a020;
    for (const px of [-7, 0, 7]) for (const pz of [-5, 0, 5]) { B.box(M.plaster, 0.6, 6.4, 0.6, x + px, -0.2, z + pz, { c: C2 }); world.addBox(x + px, z + pz, 0.6, 0.6, 0, -1, 6.2); }
    B.box(M.plaster, 15, 0.3, 11, x, 2.9, z, { c: C2, solid: true }); B.box(M.plaster, 8, 0.3, 11, x - 3.5, 5.9, z, { c: C2, solid: true });
    steps(B, M, x + 4.6, z + 5.5, 0, 3.2, 9, { w: 2.2, rise: 0.355, run: 0.55, mat: M.plaster, c: C2 });
    B.box(M.plaster, 6.6, 2.9, 0.25, x - 3.5, 0, z - 5.3, { c: 0xb8b4ac, solid: true }); B.box(M.plaster, 0.25, 2.9, 4.6, x - 7.3, 0, z - 2.6, { c: 0xb8b4ac, solid: true }); B.box(M.plaster, 7, 1.1, 0.25, x - 3.5, 3.2, z - 5.3, { c: 0xb8b4ac, solid: true });
    for (let k = 0; k < 4; k++) B.box(M.plaster, 3, 0.22, 2.6, x + 11.5, -0.05 + k * 0.26, z - 2.5, { ry: k * 0.03, c: 0xb8b4ac }); world.addBox(x + 11.5, z - 2.5, 3, 2.6, 0, -1, 1.0);
    crate(B, M, x - 5, 3.2, z + 3, 0.9, 0.3, 0x8a7a5a); crate(B, M, x + 2, 0.02, z - 2, 1.0, 0.5, 0x8a7a5a); barrel(B, M, x + 3.4, 0.02, z - 2.6, 0x5a6a7a);
    B.geo(M.flat, new THREE.ConeGeometry(2.2, 1.3, 9), [x + 10, 0.6, z + 6.5], [0, 0, 0], 1, 0xc8b88a); world.addCyl(x + 10, z + 6.5, 1.5, -1, 0.9);
    B.cyl(M.metal, 0.55, 0.7, 1.0, x + 7.6, 0.5, z + 9.5, { rx: 0.5, c: 0xc86a20, seg: 10 }); B.box(M.metal, 0.9, 0.5, 1.2, x + 7.6, 0, z + 9.3, { c: 0x3a3a3e }); world.addCyl(x + 7.6, z + 9.4, 0.8, -1, 1.6);
    { const cx = x - 11.5, cz = z + 8.5;                                                               // the crane
      B.box(M.metal, 2.4, 0.5, 2.4, cx, -0.1, cz, { c: 0x4a4a4e, solid: true });
      for (const a of [-1, 1]) for (const b of [-1, 1]) B.box(M.metal, 0.14, 26, 0.14, cx + a * 0.55, 0.3, cz + b * 0.55, { c: YEL });
      for (let k = 0; k < 13; k++) for (const a of [-1, 1]) { B.box(M.metal, 0.06, 2.3, 0.06, cx + a * 0.55, 0.3 + k * 2, cz, { rx: (k % 2 ? 1 : -1) * 0.5, c: YEL }); B.box(M.metal, 0.06, 2.3, 0.06, cx, 0.3 + k * 2, cz + a * 0.55, { rz: (k % 2 ? 1 : -1) * 0.5, c: YEL }); }
      world.addBox(cx, cz, 1.3, 1.3, 0, 0, 26);
      B.box(M.metal, 2.0, 1.8, 2.0, cx, 26.3, cz, { c: 0xe8e4dc }); B.box(M.flat, 1.6, 0.8, 0.05, cx + 0.2, 27.0, cz - 1.01, { c: 0x1c2630 });
      B.box(M.metal, 24, 0.7, 0.7, cx + 11, 28.1, cz - 1.5, { ry: 0.3, c: YEL }); B.box(M.metal, 7, 0.7, 0.7, cx - 3.6, 28.1, cz + 1.2, { ry: 0.3, c: YEL }); B.box(M.plaster, 2, 1.4, 1.2, cx - 6, 26.9, cz + 1.9, { ry: 0.3, c: 0x7a7a7e });
      B.box(M.metal, 0.05, 15.6, 0.05, x + 1, 12.5, z - 2, { c: 0x2a2a2e }); B.box(M.plaster, 3.2, 2.6, 0.22, x + 1, 9.9, z - 2, { ry: 0.3, c: 0xb8b4ac });
    }
    { const hx = x + 13.5, hz = z - 8.5;                                                               // the builders' hut
      room(B, M, hx, 0, hz, { w: 5, d: 3.2, h: 2.5, t: 0.2, mat: M.plaster, c: 0x4a6a8a, base: 0.5, doors: [{ side: 'w', at: 0, w: 1.7, h: 2.1 }], wins: [{ side: 's', at: 0.6, w: 1.2, y: 1.0, h: 0.9 }], floor: { mat: M.woodH, c: 0x6a5a3a }, ceil: { mat: M.woodH, c: 0x5a4a3a } });
      B.box(M.flat, 5.3, 0.14, 3.5, hx, 2.56, hz, { c: SNOW }); B.box(M.woodH, 1.6, 0.75, 0.7, hx + 1.4, 0.06, hz - 0.9, { c: 0x5a4a3a, solid: true }); B.cyl(M.metal, 0.3, 0.3, 0.9, hx + 1.9, 0.06, hz + 0.9, { c: 0x2a2a2e, seg: 9, solid: true }); B.geo(M.glow, new THREE.SphereGeometry(0.1, 6, 5), [hx + 1.58, 0.5, hz + 0.9], [0, 0, 0], 1, 0xff7a20);
      extraPicks.push([hx + 0.2, hz + 0.6]);
    }
    cwall(-99, 76, -72, 76, 2.2, 0x7a6a4a); cwall(-99, 47, -80, 47, 2.2, 0x7a6a4a); cwall(-99, 47, -99, 76, 2.2, 0x7a6a4a);
    sign('СТРОЙКА  ·  ОПАСНО', -84, 1.5, 76.22, 6, 0.6, { bg: '#e8c020', fg: '#1a1a1a' });
    extraFoes.push(['militia', x + 3, z + 1.5, {}], ['agent', x - 4, z - 9, {}]); extraPicks.push([x - 2, z + 2, 3.6]);
  }

  { // onto the garage roofs by one jump from a crate, then along the whole row; a cellar hatch to crawl into
    stepsUp(B, M, 41.8, 72.6, 1, 0, 2, { rise: 0.92, mat: M.woodH, c: 0x7a7a6a, c2: 0x6a6a5c });
    B.box(M.flat, 17.6, 0.12, 6.8, 52.6, 2.62, 73, { c: SNOW, solid: true }); B.box(M.plaster, 17.6, 0.6, 0.2, 52.6, 2.74, 69.7, { c: 0x8a8c8c, solid: true });
    den(B, M, -18, 0, 67.6, 0, { mat: M.plaster, c: 0x8a8c8c, floor: { mat: M.flat, c: 0x5a5a5c } }); B.box(M.flat, 3.8, 0.14, 3.6, -18, 1.97, 67.6, { c: SNOW }); extraPicks.push([-18, 67.8, 0.6]);
  }

  // ---- the rest of the city, beyond reach ------------------------------------------------------------
  for (let i = 0; i < 44; i++) {
    const a = i / 44 * 6.283 + R() * 0.1, r = 135 + R() * 120, x = Math.cos(a) * r, z = Math.sin(a) * r - 10, h = 15 + Math.floor(R() * 4) * 6, along = R() < 0.5;
    B.box(FAC, along ? 40 + R() * 20 : 12, h, along ? 12 : 40 + R() * 20, x, -0.3, z, { ry: R() < 0.3 ? 0.4 : 0, c: [0xc8c8c4, 0xb8bcc0, 0xd0ccc4][i % 3] });
  }
  B.cyl(M.plaster, 1.2, 4, 150, -210, 0, -230, { c: 0x9a9c9c, seg: 10 }); B.cyl(M.metal, 0.3, 1.0, 60, -210, 150, -230, { c: 0xb83a2a, seg: 6 }); B.cyl(M.plaster, 6, 4, 8, -210, 96, -230, { c: 0x8a8c8c, seg: 12 });
  for (const [x, z, h] of [[190, -150, 60], [205, -138, 48], [-170, 190, 54]]) B.cyl(M.plaster, 2, 3.4, h, x, 0, z, { c: 0x8a5a4a, seg: 10 });

  root.add(makeAmbient(shared, { count: 1500, box: 34, boxY: 18, size: 0.05, colorA: 0xffffff, colorB: 0xdfeaff, alpha: 0.9, fall: 1.1, wind: [0.5, 0, 0.3], flutter: 0.8 }));

  const enemies = [
    ['agent', 3, 80, {}], ['dog', -2, 75, {}], ['militia', -5, 64, { patrol: true }], ['agent', 12.2, 61, {}],
    ['agent', -30, 61, {}], ['dog', -41, 54, {}], ['militia', -21, 52, {}],
    ['agent', 24, 51, { patrol: false }], ['militia', 34, 52.5, { patrol: false }], ['agent', 53, 66, {}], ['dog', 45, 60, {}],
    ['militia', -4.5, 28, {}], ['agent', 3.6, 21, {}], ['dog', 0, 18, {}],
    ['agent', -15, 5, { patrol: true }], ['agent', 16, -9, {}], ['militia', -21, -19, {}], ['militia', 29, 7, {}], ['dog', 9, -21, {}],
    ['agent', -58, -6, { up: 1.8, patrol: false }], ['agent', -74, -9, { up: 2.6, patrol: false, yaw: 1.57 }], ['agent', -75, 22, {}], ['dog', -64, 13, {}],
    ['militia', 78, -50, { patrol: false }], ['agent', 62, -42, {}],
    ['militia', -7, -36.5, {}], ['militia', 7, -36.5, {}], ['dog', 0, -30, {}],
    ['agent', -11, -51, { up: 1.9, patrol: false }], ['agent', 10, -54, { up: 1.9, patrol: false }], ['agent', -27, -49.5, { up: 1.9, patrol: false }],
    ['russiaBoss', 0, -47.5, { up: 1.9, yaw: 0, patrol: false }],
  ];
  const tea = merge([gCyl(0.07, 0.06, 0.2, 0xb8601c, [0, 0, 0], [0, 0, 0], 1, 9), gCyl(0.078, 0.07, 0.11, 0xc8ccd0, [0, -0.05, 0], [0, 0, 0], 1, 9), gCyl(0.012, 0.012, 0.1, 0xc8ccd0, [0.1, -0.02, 0], [0, 0, 0], 1, 5), gCyl(0.012, 0.012, 0.06, 0xc8ccd0, [0.085, 0.03, 0], [0, 0, 1.2], 1, 5)]);
  let st = 0;
  return {
    env: {
      sunDir: [-0.52, 0.2, 0.62], sunColor: 0xffc8a0, sunLight: 0xd6dcea, sunIntensity: 1.7, sunSize: 0.0006,
      skyTop: 0x5c6676, skyHorizon: 0xb8b4b2, skyGround: 0x6a6e76, haze: 0.75,
      fogColor: 0xa2a6ae, fogDensity: 0.0072, hemiSky: 0xc4d0e4, hemiGround: 0x8a8e98, hemiIntensity: 2.3, envIntensity: 0.8,
      cloudCover: 0.93, cloudScale: 0.3, cloudLit: 0xd8d4d0, cloudShade: 0x6a7080,
      bloom: 0.42, bloomRadius: 0.7, bloomThreshold: 1.2, rays: 0.12, rayThreshold: 2.4, exposure: 1.02,
      saturation: 0.84, contrast: 1.08, vignette: 0.42, tintHi: 0xf2f6ff, tintLo: 0xe0e8ff, shadowRange: 85,
    },
    spawn: { x: 0, z: 97, yaw: 0 },
    vista: { c: [0, 8, -6], r: 62, h: 18, a: 1.5, speed: 0.03 },
    enemies: enemies.concat(extraFoes), pickups: [[-12.6, 34.4], [34.5, 53], [-36, 57], [1, 12], [-55, -12, 0, 1.8], [82, -56, 0, 1], [-34, -57.6, 0, 1.9], [6.4, -57.4, 0, 1.9]].concat(extraPicks),
    dust: [0.86, 0.9, 0.94], water: [], heroLight: 40,
    makePickup: () => new THREE.Mesh(tea, M.flat),
    update(dt, t, g) {
      st -= dt;
      if (st <= 0) {                                                      // smoke from the works' chimneys
        st = 0.22;
        for (const [x, y, z] of [[86, 36, -66], [94, 28, -64]]) g.gfx.soft.spawn(x + (Math.random() - 0.5), y, z + (Math.random() - 0.5), 2.2 + Math.random(), 2.2, 1.2, { life: 9 + Math.random() * 4, s0: 2.5, s1: 13, r: 0.42, g: 0.42, b: 0.45, a: 0.3, drag: 0.04 });
      }
    },
  };
}
