// Chapter III - an alpine valley on the Lake of Uri, 1307.
import * as THREE from 'three';
import { Heightfield, prismGeo, rockGeo } from '../build.js';
import { makeAmbient, makeWater, windify } from '../gfx.js';
import { drawTexture } from '../tex.js';
import { makeHumanoid, lookFor } from '../actors.js';
import { instanced, fence, barrel, crate, room, steps, tuftGeo, pineGeo, gBox, gCyl, gCone, gSph, gCap, xf, merge, stand, boulder, beast } from '../props.js';
import { fbm, ridged, smooth } from '../util.js';

export const swiss = {
  id: 'swiss', theme: 'theme-swiss', chapter: 'Chapter III', title: 'Uri', place: 'Lake of Uri · the Waldstätten · 1307',
  story: 'The Habsburg bailiff has set his hat on a pole and ordered free men to bow to it. You did not bow. Now his soldiers hold the village and the camp by the lake. Cross the valley, crossbow in hand, and end his rule.',
  weapon: 'crossbow',
  heroes: [
    { look: 'tell', name: 'Wilhelm Tell', who: 'The crossbowman of Bürglen, Uri', trait: 'Master shot', effect: 'reloads the crossbow 40% faster', mods: { reload: 0.6 }, sleeve: 0xcfc6ae, cuff: 0x6a5a40 },
    { look: 'winkelried', name: 'Arnold von Winkelried', who: 'Hero of Sempach, from Nidwalden', trait: 'Breaks the line', effect: 'starts with 150 health', mods: { hp: 150 }, sleeve: 0x8a8f96, cuff: 0x6a6f76 },
    { look: 'stauffacher', name: 'Werner Stauffacher', who: 'Man of Schwyz, of the Rütli oath', trait: 'Steadfast', effect: 'slowly recovers health out of danger', mods: { regen: 3 }, sleeve: 0x8a1c1c, cuff: 0x4a3020 },
  ], weaponName: 'Crossbow & halberd', alt: 'right mouse — aim   ·   F — halberd',
  keys: '<kbd>↑</kbd><kbd>↓</kbd><kbd>←</kbd><kbd>→</kbd> move &nbsp; <kbd>Shift</kbd> run &nbsp; <kbd>Space</kbd> jump<br><kbd>Left mouse</kbd> shoot a bolt &nbsp; <kbd>Right mouse</kbd> aim &nbsp; <kbd>F</kbd> halberd thrust',
  foes: 'soldiers remain', foesNone: 'The valley is free', bossName: 'The Bailiff', bossDown: 'The bailiff has fallen', pickupText: 'Alp cheese  +35',
  deadTitle: 'Fallen', deadSub: 'The mountains will remember.', clearTitle: 'The valley is free',
  build,
};

function dPoly(pts, x, z) {
  let best = 1e9;
  for (let i = 0; i < pts.length - 1; i++) {
    const ax = pts[i][0], az = pts[i][1], bx = pts[i + 1][0], bz = pts[i + 1][1];
    const vx = bx - ax, vz = bz - az, t = Math.max(0, Math.min(1, ((x - ax) * vx + (z - az) * vz) / (vx * vx + vz * vz)));
    best = Math.min(best, Math.hypot(x - ax - vx * t, z - az - vz * t));
  }
  return best;
}

function uriFlag(c, w, h) {
  c.fillStyle = '#f5c60c'; c.fillRect(0, 0, w, h);
  const cx = w / 2, cy = h * 0.5, s = h / 100;
  c.fillStyle = '#111';
  for (const k of [-1, 1]) {                                     // horns, ears
    c.beginPath(); c.moveTo(cx + k * 13 * s, cy - 24 * s); c.bezierCurveTo(cx + k * 30 * s, cy - 26 * s, cx + k * 41 * s, cy - 33 * s, cx + k * 37 * s, cy - 46 * s);
    c.bezierCurveTo(cx + k * 34 * s, cy - 36 * s, cx + k * 27 * s, cy - 31 * s, cx + k * 14 * s, cy - 14 * s); c.fill();
    c.beginPath(); c.ellipse(cx + k * 27 * s, cy - 11 * s, 10 * s, 5 * s, k * 0.45, 0, 7); c.fill();
  }
  c.beginPath(); c.moveTo(cx - 20 * s, cy - 24 * s); c.quadraticCurveTo(cx, cy - 33 * s, cx + 20 * s, cy - 24 * s);
  c.bezierCurveTo(cx + 25 * s, cy - 4 * s, cx + 16 * s, cy + 12 * s, cx + 13 * s, cy + 25 * s); c.quadraticCurveTo(cx, cy + 35 * s, cx - 13 * s, cy + 25 * s);
  c.bezierCurveTo(cx - 16 * s, cy + 12 * s, cx - 25 * s, cy - 4 * s, cx - 20 * s, cy - 24 * s); c.fill();
  for (const k of [-1, 1]) {
    c.fillStyle = '#fff'; c.beginPath(); c.ellipse(cx + k * 10 * s, cy - 8 * s, 5 * s, 3.4 * s, k * 0.3, 0, 7); c.fill();
    c.fillStyle = '#111'; c.beginPath(); c.arc(cx + k * 9.4 * s, cy - 8 * s, 1.8 * s, 0, 7); c.fill();
    c.fillStyle = '#f5c60c'; c.beginPath(); c.ellipse(cx + k * 5 * s, cy + 23 * s, 2.2 * s, 1.5 * s, 0, 0, 7); c.fill();
  }
  c.fillStyle = '#d81e1e'; c.beginPath(); c.ellipse(cx, cy + 37 * s, 4.2 * s, 7 * s, 0, 0, 7); c.fill();   // tongue
  c.strokeStyle = '#d81e1e'; c.lineWidth = 3.4 * s; c.beginPath(); c.arc(cx, cy + 27 * s, 10 * s, 0.12 * Math.PI, 0.88 * Math.PI); c.stroke();   // nose ring
}
const austriaFlag = (c, w, h) => { c.fillStyle = '#c81c1c'; c.fillRect(0, 0, w, h); c.fillStyle = '#f4f0e6'; c.fillRect(0, h / 3, w, h / 3); };
const schwyzFlag = (c, w, h) => { c.fillStyle = '#d01c1c'; c.fillRect(0, 0, w, h); c.fillStyle = '#fff'; c.fillRect(w * 0.72, h * 0.1, w * 0.06, h * 0.26); c.fillRect(w * 0.64, h * 0.19, w * 0.22, h * 0.08); };

function build({ game, gfx, world, B, M, root, rand, shared }) {
  const R = rand;
  const STREAM = [[96, 22], [62, 15], [36, 4], [14, -14], [0, -36], [-4, -60]];
  const PATH = [[-32, 60], [-22, 48], [-6, 34], [10, 18], [21, 1], [29, -11], [38, -20], [44, -30]];
  // ---- terrain: valley, lake basin, ring of mountains -------------------------------
  const hf = new Heightfield(1200, 400, (x, z) => {
    let base = 4.2 + (z + 50) * 0.07 + (fbm(x * 0.02, z * 0.02, 4, 2) - 0.5) * 4.5;
    const lake = smooth(-50, -76, z);
    base = base * (1 - lake) - 8 * lake;
    base -= (1 - smooth(1.5, 5.5, dPoly(STREAM, x, z))) * 1.4 * (1 - lake);
    base -= (1 - smooth(2.5, 6.5, Math.hypot(x - 101, z - 22.5))) * 0.8;                   // the basin the waterfall drops into
    const r = Math.hypot(x * 0.95, z < 0 ? z * 0.4 : z * 0.92);
    const m = smooth(124, 340, r);
    return base + m * (36 + ridged(x * 0.0042 + 3, z * 0.0042 + 7, 5, 4) * 340) + smooth(108, 168, r) * 16 * fbm(x * 0.02 + 7, z * 0.02, 3, 9);
  });
  world.height = (x, z) => hf.h(x, z);
  world.bounds = { r: 137, x: 6, z: 2 };
  world.maxSlope = 0.95; world.waterY = -0.9;
  const forest = (x, z) => fbm(x * 0.011 + 31, z * 0.011, 3, 5);
  const cG1 = new THREE.Color(0x587f36), cG2 = new THREE.Color(0x7c9c48), cF = new THREE.Color(0x36522a), cRock = new THREE.Color(0x85827c), cRock2 = new THREE.Color(0xa39d92),
    cSnow = new THREE.Color(0xf6f8fc), cShore = new THREE.Color(0xa59f8c), cPath = new THREE.Color(0x8a6f4c), tmp = new THREE.Color();
  root.add(hf.mesh(M.ground, (x, z, h, ny) => {
    const n = fbm(x * 0.03, z * 0.03, 3, 6);
    tmp.copy(cG1).lerp(cG2, n).lerp(cF, smooth(0.5, 0.62, forest(x, z)) * 0.6);
    tmp.lerp(cPath, (1 - smooth(0.8, 2.6, dPoly(PATH, x, z))) * 0.85);
    tmp.lerp(cShore, 1 - smooth(0.3, 1.6, h));
    const steep = 1 - smooth(0.66, 0.84, ny), high = smooth(80, 125, h + (n - 0.5) * 40);
    tmp.lerp(tmp.clone().copy(cRock).lerp(cRock2, n), Math.max(steep, high));
    tmp.lerp(cSnow, smooth(112, 150, h + (n - 0.5) * 50) * (1 - steep * 0.45));
    return tmp;
  }));
  // ---- water: lake, stream, waterfall ----------------------------------------------------
  const lake = new THREE.Mesh(new THREE.PlaneGeometry(2400, 2400), makeWater(shared, { deep: 0x0b3946, scale: 0.35, flow: [0.12, 0.05], alpha: 0.9 }));
  lake.rotation.x = -Math.PI / 2; lake.position.y = 0; root.add(lake);
  {
    const P = [], pts = [];
    for (let i = 0; i < STREAM.length - 1; i++) for (let k = 0; k < 8; k++) { const t = k / 8; pts.push([STREAM[i][0] + (STREAM[i + 1][0] - STREAM[i][0]) * t, STREAM[i][1] + (STREAM[i + 1][1] - STREAM[i][1]) * t]); }
    pts.push(STREAM[STREAM.length - 1]);
    for (let i = 0; i < pts.length - 1; i++) {
      const [ax, az] = pts[i], [bx, bz] = pts[i + 1], dx = bx - ax, dz = bz - az, l = Math.hypot(dx, dz), nx = -dz / l * 2.1, nz = dx / l * 2.1;
      const ya = Math.max(0.02, hf.h(ax, az) + 0.5), yb = Math.max(0.02, hf.h(bx, bz) + 0.5);
      P.push(ax - nx, ya, az - nz, ax + nx, ya, az + nz, bx + nx, yb, bz + nz, ax - nx, ya, az - nz, bx + nx, yb, bz + nz, bx - nx, yb, bz - nz);
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
    root.add(new THREE.Mesh(g, makeWater(shared, { deep: 0x1c5a60, scale: 2.2, flow: [-0.9, -0.7], alpha: 0.75 })));
  }
  const fallX = 97, fallZ = 22.5, poolY = hf.h(fallX, fallZ) + 0.9, topY = poolY + 34, ledgeY = poolY + 1.0;
  {
    for (let i = 0; i < 22; i++) { R(); R(); R(); R(); R(); R.pick([0, 0, 0]); }     // (the same draws as the old crag, so the rest of the valley stays where it was)
    // A crag built rock by rock around a grotto: the water leaps from an overhang, and a ledge runs behind it.
    const G = [0x7c7a76, 0x8c8880, 0x6e6c6a], crag = [], rock = (x, y, z, sx, sy, sz, ry = 0) => crag.push({ x, y: poolY + y, z: fallZ + z, ry, s: [sx, sy, sz], c: G[crag.length % 3] });
    for (const dz of [-13, -4.5, 4.5, 13]) rock(114.5, 3, dz, 5, 9, 5.6, dz > 0 ? 0 : Math.PI);           // the wall at the back of the grotto
    for (const k of [-1, 1]) rock(104.5, 3.5, k * 13.2, 6.5, 10, 4.5, k > 0 ? 0 : Math.PI);                // a buttress on each side
    for (const dz of [-6, 6]) rock(107.2, 10.6, dz, 5.6, 5.4, 8, dz > 0 ? 0 : Math.PI);                    // the overhang
    for (const dz of [-10, 0, 10]) rock(115, 12.5, dz, 6, 6, 7);
    for (const dz of [-9.5, -2, 6, 13.5]) rock(112, 18.5, dz, 6, 6, 6.5, 1);
    for (const dz of [-6.5, 3, 11]) rock(115, 25.5, dz, 5.5, 6, 6, 2);
    for (const k of [-1, 1]) { rock(108.5, 25, k * 7.2, 4.6, 8, 4.4, k); rock(117.5, 31.5, k * 5, 5, 5, 6, 3); }
    for (const dz of [-3.3, -1.4, 1.6, 3.4]) rock(101.5, 0.75, dz, 0.75, 0.55, 0.95, dz);                  // small rocks on the lip of the ledge
    root.add(instanced(rockGeo(9, 1), M.rock, crag));
    B.box(M.rock, 6.6, 3, 15, 104.7, ledgeY - 3, fallZ, { c: 0x6a6866, solid: true });                     // the ledge behind the water
    for (const k of [-1, 1]) {
      steps(B, M, 101.4, fallZ + k * 5.7, -Math.PI / 2, ledgeY, 3, { w: 3.4, rise: 0.3, run: 0.65, mat: M.rock, c: 0x7c7a76 });
      world.addBox(104.2, fallZ + k * 12.7, 9.2, 9.6, 0, poolY - 3, poolY + 10);
    }
    world.addBox(111.6, fallZ, 7, 42, 0, poolY - 3, poolY + 12);
    const prof = [[110.5, 34], [108, 30], [106, 25.5], [103.8, 20], [102, 15.2], [100.7, 11.6], [100.4, 7.5], [100.3, 3.5], [100.3, -0.1]], n = prof.length - 1, Pp = [], U = [];
    for (let i = 0; i < n; i++) {
      const x0 = prof[i][0], y0 = poolY + prof[i][1], x1 = prof[i + 1][0], y1 = poolY + prof[i + 1][1], w0 = 1.9 + i / n * 1.5, w1 = 1.9 + (i + 1) / n * 1.5;
      Pp.push(x0, y0, fallZ - w0, x0, y0, fallZ + w0, x1, y1, fallZ + w1, x0, y0, fallZ - w0, x1, y1, fallZ + w1, x1, y1, fallZ - w1);
      U.push(0, i / n, 1, i / n, 1, (i + 1) / n, 0, i / n, 1, (i + 1) / n, 0, (i + 1) / n);
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(Pp, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(U, 2));
    const fall = new THREE.Mesh(g, new THREE.ShaderMaterial({
      uniforms: { uTime: shared.uTime }, transparent: true, depthWrite: false, side: THREE.DoubleSide,
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }',
      fragmentShader: `varying vec2 vUv; uniform float uTime;
        float h(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
        float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f); return mix(mix(h(i),h(i+vec2(1,0)),f.x), mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x), f.y); }
        void main(){ float t = uTime*1.7; float a = n(vec2(vUv.x*16., vUv.y*5. - t*2.2))*0.6 + n(vec2(vUv.x*40., vUv.y*9. - t*3.4))*0.5;
          a = smoothstep(0.32, 0.9, a + 0.25); float edge = smoothstep(0., 0.22, vUv.x)*smoothstep(1., 0.78, vUv.x);
          gl_FragColor = vec4(mix(vec3(0.72,0.86,0.95), vec3(1.25), a), (0.4 + a*0.5)*edge); }`,
    }));
    fall.renderOrder = 3; root.add(fall);
    const pool = new THREE.Mesh(new THREE.CircleGeometry(7, 24), makeWater(shared, { deep: 0x1c5a60, scale: 2.4, flow: [-0.5, 0.2], alpha: 0.8 }));
    pool.rotation.x = -Math.PI / 2; pool.position.set(fallX + 0.5, poolY, fallZ); root.add(pool);
  }

  // ---- buildings --------------------------------------------------------------------------
  const frame = (x, z, ry) => { const c = Math.cos(ry), s = Math.sin(ry); return (lx, lz) => [x + lx * c + lz * s, z - lx * s + lz * c]; };
  const LOG = 0x9a6a40, LOG2 = 0x8a6240;
  const chalet = (x, z, ry, w = 8.5, d = 7.5) => {
    const P = frame(x, z, ry), yf = Math.max(world.height(x, z), ...[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([a, b]) => world.height(...P(a * w / 2, b * d / 2)))) + 0.05, y = yf + 1.7, rh = 2.3, rw = w + 3.2;
    // ground floor of stone: one room with a door under the balcony
    room(B, M, x, yf, z, { w: w + 0.3, d: d + 0.3, h: 2.6, t: 0.4, ry, mat: M.stone, c: 0xc4bdae, base: 2.6, doors: [{ side: 's', at: 0, w: 1.7, h: 2.1 }],
      wins: [{ side: 'e', at: 0, w: 1.1, y: 1.15, h: 0.85 }, { side: 'w', at: -1.3, w: 1.1, y: 1.15, h: 0.85 }, { side: 'n', at: 0, w: 1.1, y: 1.15, h: 0.85 }], floor: { mat: M.woodH, c: 0x6a4a30 }, ceil: { mat: M.woodH, c: 0x5a3c26 } });
    steps(B, M, ...P(0, d / 2 + 0.15), ry, yf + 0.06, 6, { w: 2.0, c: 0xb0a898 });
    { const f = yf + 0.06;
      const [tx, tz] = P(-w * 0.2, -d * 0.1); B.box(M.woodH, 1.5, 0.74, 0.8, tx, f, tz, { ry, c: 0x7a5232, solid: true });
      for (const k of [-1, 1]) { const [bx, bz] = P(-w * 0.2, -d * 0.1 + k * 0.75); B.box(M.woodH, 1.4, 0.42, 0.28, bx, f, bz, { ry, c: 0x6a4428 }); }
      const [cx, cz] = P(-w * 0.2 + 0.3, -d * 0.1); B.cyl(M.flat, 0.2, 0.2, 0.12, cx, f + 0.74, cz, { c: 0xe8b838, seg: 12 });
      const [ox, oz] = P(w * 0.32, 0); B.box(M.stone, 0.95, 1.3, 0.95, ox, f, oz, { ry, c: 0xb0a898, solid: true }); B.box(M.stone, 0.7, 1.3, 0.7, ox, f + 1.3, oz, { ry, c: 0xb0a898 });
      const [ex, ez] = P(w / 2 - 0.95, -d / 2 + 1.35); B.box(M.woodH, 0.95, 0.5, 1.9, ex, f, ez, { ry, c: 0x5a4030, solid: true }); B.box(M.cloth, 0.9, 0.1, 1.55, ex, f + 0.5, ez, { ry, c: 0xb01c1c }); }
    B.box(M.woodH, w + 0.3, 2.9, d + 0.3, x, y + 0.9, z, { ry, c: LOG, solid: true });
    for (const s of [-1, 1]) { const [gx, gz] = P(0, s * (d / 2 + 0.05)); B.geo(M.woodH, prismGeo(w + 0.3, rh - 0.3, 0.25, 2), [gx, y + 3.8, gz], [0, ry, 0], 1, LOG); }
    B.geo(M.shingle, prismGeo(rw, rh, d + 3, 3), [x, y + 3.8, z], [0, ry, 0], 1, 0x7c7468);
    const ang = Math.atan2(rh, rw / 2);
    for (const s of [-1, 1]) for (let i = 0; i < 4; i++) for (const k of [0.3, 0.72]) {                // stones weighing down the roof
      const [sx, sz] = P(s * k * rw / 2, -d / 2 - 0.9 + i * (d + 1.8) / 3 + (k > 0.5 ? 0.9 : 0));
      B.geo(M.rock, rockGeo(i + 2, 0), [sx, y + 3.8 + rh * (1 - k) + 0.12, sz], [0, ry + i, s * -ang], [0.3, 0.16, 0.26], 0x9a968c);
    }
    // balcony with flowers across the front (+Z)
    { const [bx, bz] = P(0, d / 2 + 0.75); B.box(M.woodH, w + 0.3, 0.14, 1.3, bx, y + 0.9, bz, { ry, c: LOG2 }); const [rx, rz] = P(0, d / 2 + 1.35); B.box(M.woodH, w + 0.3, 0.1, 0.08, rx, y + 1.85, rz, { ry, c: LOG2 });
      for (let i = 0; i <= 12; i++) { const [px, pz] = P(-w / 2 - 0.1 + i * (w + 0.2) / 12, d / 2 + 1.35); B.box(M.wood, 0.07, 0.9, 0.05, px, y + 1.0, pz, { ry, c: LOG2 }); }
      for (let i = 0; i < 16; i++) { const [fx, fz] = P(-w / 2 + 0.3 + i * (w - 0.6) / 15, d / 2 + 1.42); B.geo(M.flat, new THREE.IcosahedronGeometry(0.13, 0), [fx, y + 1.98 + (i % 2) * 0.04, fz], [i, i, 0], 1, i % 3 ? 0xd4202c : 0xf0607a); } }
    for (const lx of [-w * 0.27, w * 0.27]) {
      const [wx, wz] = P(lx, d / 2 + 0.17);
      B.box(M.flat, 1.0, 1.1, 0.06, wx, y + 1.55, wz, { ry, c: 0xf0ece0 }); B.box(M.flat, 0.78, 0.86, 0.08, wx, y + 1.67, wz, { ry, c: 0x1a232c });
      for (const s of [-1, 1]) { const [sx, sz] = P(lx + s * 0.72, d / 2 + 0.18); B.box(M.woodH, 0.4, 1.1, 0.05, sx, y + 1.55, sz, { ry, c: 0x35582f }); }
    }
    { const [dx, dz] = P(-1.0, d / 2 + 0.75); B.box(M.woodH, 0.1, 2.0, 1.1, dx, yf, dz, { ry, c: LOG2 }); }   // door, standing open
    { const [cx, cz] = P(w * 0.32, 0); B.box(M.stone, 0.8, 1.6, 0.8, cx, y + 4.6, cz, { ry, c: 0xb0a898 }); }
    { const [sx, sz] = P(-w / 2 - 0.55, 0.5); B.box(M.wood, 0.9, 1.9, 2.0, sx, yf - 0.9, sz, { ry, c: 0xc8a878 }); }   // firewood
  };
  let stadelN = 0;
  const stadel = (x, z, ry) => {                                 // barn on staddle stones, open to visit: hay, cheese or tools inside
    const P = frame(x, z, ry), y = world.height(x, z);
    for (const sx of [-1, 1]) for (const sz of [-1, 0, 1]) { const [px, pz] = P(sx * 1.9, sz * 1.7); B.cyl(M.wood, 0.16, 0.2, 0.8, px, y - 0.1, pz, { c: LOG2, seg: 6 }); B.cyl(M.rock, 0.5, 0.5, 0.12, px, y + 0.7, pz, { c: 0x9a968c, seg: 8 }); }
    const kind = ['hay', 'cheese', 'hay', 'tools'][stadelN++ % 4], f = y + 0.88;
    room(B, M, x, y + 0.82, z, { w: 5, d: 4.6, h: 2.7, t: 0.25, ry, mat: M.woodH, c: LOG2, base: 0.12, doors: [{ side: 's', at: 0, w: 1.7, h: 2.0 }], floor: { mat: M.woodH, c: 0x7a5a3a }, ceil: { mat: M.woodH, c: 0x5a4028 } });
    steps(B, M, ...P(0, 2.3), ry, f, 3, { w: 1.8, rise: 0.3, run: 0.45, mat: M.woodH, c: 0x6a4c30 });
    if (kind === 'hay') for (const [lx, lz, ly] of [[-1.3, -1.4, 0], [0.3, -1.5, 0], [-0.5, -1.45, 0.8], [1.5, -0.2, 0]]) { const [hx, hz] = P(lx, lz); B.box(M.thatch, 1.5, 0.8, 0.9, hx, f + ly, hz, { ry: ry + (ly ? 0.2 : 0), c: 0xd8bc68, solid: true }); }
    else if (kind === 'cheese') { const [sx, sz] = P(0, -1.75); B.box(M.woodH, 4, 1.9, 0.5, sx, f, sz, { ry, c: 0x6a4c30, solid: true }); for (let i = 0; i < 8; i++) { const [cx, cz] = P(-1.6 + (i % 4) * 1.05, -1.5); B.cyl(M.flat, 0.24, 0.24, 0.14, cx, f + 0.75 + Math.floor(i / 4) * 0.62, cz, { c: 0xe8b838, seg: 12 }); } }
    else { const [bx, bz] = P(1.5, -1.3); barrel(B, M, bx, f, bz); const [wx, wz] = P(-0.4, -1.4); crate(B, M, wx, f, wz, 0.9, ry);
      for (let i = 0; i < 3; i++) { const [tx, tz] = P(-2.05, -1.4 + i * 0.6); B.box(M.wood, 0.05, 2.0, 0.05, tx, f, tz, { rz: 0.15, c: 0x6a4c30 }); B.box(M.metal, 0.04, 0.08, 0.5, tx, f + 1.9, tz, { c: 0xb8bcc2 }); } }
    B.geo(M.shingle, prismGeo(6.6, 1.5, 6, 3), [x, y + 3.52, z], [0, ry, 0], 1, 0x6e6a64);
    const [dx, dz] = P(-1.45, 2.8); B.box(M.woodH, 0.08, 1.9, 1.0, dx, y + 0.88, dz, { ry, c: 0x2a1c12 });          // the door stands open
  };
  chalet(-45, 51, 0.9); stadel(-37, 69, 0.3); chalet(-8, 39, -0.35, 9, 7.5); chalet(11, 29, 0.95, 8, 7); stadel(2, 47, 1.2); stadel(18, 41, -0.4);
  chalet(-86, 22, 1.2, 7.5, 6.5); stadel(-78, 35, 0.5);                                     // the alp above the village
  // chapel
  {
    const x = -44, z = 14, ry = 0.5, P = frame(x, z, ry), w = 5, d = 8, y = Math.max(world.height(x, z), ...[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([a, b]) => world.height(...P(a * w / 2, b * d / 2)))) + 0.05;
    room(B, M, x, y, z, { w, d, h: 3.6, t: 0.35, ry, mat: M.plaster, c: 0xf2efe6, base: 2.6, doors: [{ side: 's', at: 0, w: 1.7, h: 2.3 }],
      wins: [{ side: 'e', at: 0, w: 0.6, y: 1.2, h: 1.4 }, { side: 'w', at: 0, w: 0.6, y: 1.2, h: 1.4 }], floor: { mat: M.stone, c: 0xb8b0a0 }, ceil: { mat: M.woodH, c: 0x5c463a } });
    steps(B, M, ...P(0, d / 2), ry, y + 0.06, 6, { w: 2.0, c: 0xb0a898 });
    { const f = y + 0.06;
      const [ax, az] = P(0, -3.1); B.box(M.stone, 1.4, 1.0, 0.7, ax, f, az, { ry, c: 0xd8d0c0, solid: true }); B.box(M.cloth, 1.5, 0.04, 0.8, ax, f + 1.0, az, { ry, c: 0xf0ece0 });
      const [kx, kz] = P(0, -3.55); B.box(M.wood, 0.08, 1.1, 0.08, kx, f + 1.5, kz, { c: 0x3a2618 }); B.box(M.wood, 0.5, 0.08, 0.08, kx, f + 2.2, kz, { ry, c: 0x3a2618 });
      for (const sx of [-1, 1]) { const [qx, qz] = P(sx * 0.5, -3.1); B.cyl(M.flat, 0.03, 0.03, 0.25, qx, f + 1.02, qz, { c: 0xe8e0c8, seg: 5 }); B.geo(M.glow, new THREE.SphereGeometry(0.04, 5, 4), [qx, f + 1.33, qz], [0, 0, 0], [1, 1.6, 1], 0xffb040);
        for (const lz of [-0.7, 0.8]) { const [px, pz] = P(sx * 1.45, lz); B.box(M.woodH, 1.2, 0.45, 0.4, px, f, pz, { ry, c: 0x5a3c26, solid: true }); } } }
    B.geo(M.shingle, prismGeo(6, 3.6, 9, 3), [x, y + 3.6, z], [0, ry, 0], 1, 0x5c463a);
    const [tx, tz] = P(0, 3); B.box(M.plaster, 1.5, 2.2, 1.5, tx, y + 6.2, tz, { ry, c: 0xf2efe6 });
    B.geo(M.shingle, new THREE.ConeGeometry(1.35, 2.8, 4), [tx, y + 9.8, tz], [0, ry + Math.PI / 4, 0], 1, 0x5c463a);
    B.box(M.flat, 0.1, 1.0, 0.1, tx, y + 11.2, tz, { c: 0x2a2a2a }); B.box(M.flat, 0.55, 0.1, 0.1, tx, y + 11.75, tz, { ry, c: 0x2a2a2a });
    { const [dx, dz] = P(-1.0, 4.6); B.box(M.woodH, 0.1, 2.3, 1.2, dx, y, dz, { ry, c: 0x3a2618 }); }
  }
  // Habsburg watchtower on the eastern meadow
  {
    const x = 74, z = 34, ry = 0, P = frame(x, z, ry), w = 6, d = 6, y = Math.max(world.height(x, z), ...[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([a, b]) => world.height(...P(a * w / 2, b * d / 2)))) + 0.05;
    room(B, M, x, y, z, { w, d, h: 3.4, t: 0.6, ry, mat: M.stone, c: 0xb8b0a2, base: 3, doors: [{ side: 'w', at: 0, w: 1.7, h: 2.3 }],
      wins: [{ side: 'n', at: 0, w: 0.5, y: 1.2, h: 1.2 }, { side: 's', at: 0, w: 0.5, y: 1.2, h: 1.2 }, { side: 'e', at: 0, w: 0.5, y: 1.2, h: 1.2 }], floor: { mat: M.stone, c: 0x8a8478 }, ceil: { mat: M.woodH, c: 0x4a3626 } });
    steps(B, M, x - w / 2, z, -Math.PI / 2, y + 0.06, 6, { w: 2.0, c: 0xa8a294 });
    B.box(M.stone, w, 5.2, d, x, y + 3.6, z, { c: 0xb8b0a2, solid: true });
    B.box(M.woodH, w + 1.6, 0.25, d + 1.6, x, y + 8.8, z, { c: 0x5a4028 }); B.box(M.woodH, w + 1.5, 1.5, d + 1.5, x, y + 9.05, z, { c: 0x6a4c30 });
    B.geo(M.shingle, new THREE.ConeGeometry(6.2, 3.6, 4), [x, y + 12.35, z], [0, Math.PI / 4, 0], 1, 0x5c463a);
    for (const s of [-1, 1]) B.box(M.flat, 0.5, 1.0, 0.1, x + s * 1.6, y + 6.2, z + d / 2 + 0.03, { c: 0x0c1014 });
    B.box(M.cloth, 1.5, 0.5, 0.05, x, y + 7.3, z + d / 2 + 0.06, { c: 0xb01c1c }); B.box(M.cloth, 1.5, 0.5, 0.05, x, y + 6.8, z + d / 2 + 0.06, { c: 0xf0ece0 }); B.box(M.cloth, 1.5, 0.5, 0.05, x, y + 6.3, z + d / 2 + 0.06, { c: 0xb01c1c });
    barrel(B, M, x + 1.6, y + 0.06, z - 1.6); crate(B, M, x + 1.5, y + 0.06, z + 1.5, 0.8, 0.3);
    B.box(M.woodH, 1.6, 1.4, 0.14, x - 1.2, y + 0.9, z - 2.3, { c: 0x4a3626 }); for (let i = 0; i < 4; i++) B.box(M.metal, 0.03, 1.9, 0.03, x - 1.8 + i * 0.4, y + 0.06, z - 2.2, { rx: 0.12, c: 0xc8ccd0 });
  }
  const extraFoes = [], extraPicks = [];
  { // the great hay barn: a cart can drive straight through
    const x = 26, z = 52, ry = 0.3, w = 9, d = 7, P = frame(x, z, ry);
    const yf = Math.max(world.height(x, z), ...[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([a, b]) => world.height(...P(a * w / 2, b * d / 2)))) + 0.05, f = yf + 0.06;
    room(B, M, x, yf, z, { w, d, h: 3.6, t: 0.3, ry, mat: M.woodH, c: LOG2, base: 2.6, doors: [{ side: 'e', at: 0, w: 3, h: 3 }, { side: 'w', at: 0, w: 3, h: 3 }], wins: [{ side: 's', at: 0, w: 1.2, y: 1.3, h: 0.9 }],
      floor: { mat: M.ground, c: 0xb89a62 }, ceil: { mat: M.woodH, c: 0x5a4028 } });
    B.geo(M.shingle, prismGeo(d + 1.8, 2.8, w + 1.6, 3), [x, yf + 3.6, z], [0, ry + Math.PI / 2, 0], 1, 0x6e6a64);
    steps(B, M, ...P(w / 2, 0), ry + Math.PI / 2, f, 6, { w: 3.2, c: 0xb0a898 }); steps(B, M, ...P(-w / 2, 0), ry - Math.PI / 2, f, 6, { w: 3.2, c: 0xb0a898 });
    for (const [lx, lz, ly, r] of [[-3.3, -2.6, 0, 0], [-1.8, -2.7, 0, 0.1], [-2.6, -2.65, 0.8, 0.2], [3.2, -2.6, 0, 0], [3.3, 2.6, 0, 0.1], [1.8, 2.7, 0, 0], [2.6, 2.65, 0.8, 0.3], [-3.4, 2.5, 0, 0.2]]) { const [hx, hz] = P(lx, lz); B.box(M.thatch, 1.5, 0.8, 0.9, hx, f + ly, hz, { ry: ry + r, c: 0xd8bc68, solid: true }); }
    { const [cx, cz] = P(0.2, -2.3); B.box(M.woodH, 2.2, 0.5, 1.2, cx, f + 0.5, cz, { ry, c: 0x7a5a3a }); B.geo(M.thatch, new THREE.SphereGeometry(0.8, 8, 6), [cx, f + 1.2, cz], [0, 0, 0], [1.3, 0.7, 0.75], 0xd8bc68); world.addBox(cx, cz, 2.2, 1.2, ry, f, f + 1.5);
      for (const k of [-0.8, 0.8]) { const [wx, wz] = P(0.2 + k, -1.65); B.cyl(M.wood, 0.4, 0.4, 0.08, wx, f + 0.02, wz, { rx: Math.PI / 2, ry, c: 0x4a3020, seg: 12 }); } }
    extraFoes.push(['halberdier', x, z, { up: 1.8, patrol: false }], ['crossbowman', 2, 47, { up: 1.7, patrol: false }], ['halberdier', 31, 46, {}]);
    extraPicks.push([18, 41, 0, 1.7]);
    extraFoes.push(['crossbowman', 105.2, fallZ + 1.5, { up: 1.2, patrol: false, yaw: -Math.PI / 2 }]); extraPicks.push([105.6, fallZ - 3.5, 0, 1.2]);   // behind the waterfall
  }
  // paddock with cows, fountain trough, hay
  fence(B, M, -22, 40, -22, 52, { c: 0x8a7458 }); fence(B, M, -22, 52, -8, 54, { c: 0x8a7458 }); fence(B, M, -8, 54, -4, 46, { c: 0x8a7458 }); fence(B, M, -22, 40, -14, 39, { c: 0x8a7458 });
  const cow = (c1, c2) => merge([gCap(0.44, 1.15, c1, [0, 1.12, 0], [Math.PI / 2, 0, 0], [1, 1, 1.1]), gSph(0.3, c2, [0.22, 1.3, 0.25], [1, 1, 1.5]), gSph(0.28, c2, [-0.25, 1.15, -0.5], [1, 1, 1.4]),
    gCap(0.19, 0.3, c1, [0, 1.2, 1.05], [1.3, 0, 0]), gBox(0.26, 0.2, 0.2, 0xe8c8b8, [0, 1.02, 1.36]), gCone(0.045, 0.2, 0xf0ece0, [0.17, 1.42, 1.05], [0, 0, -0.6]), gCone(0.045, 0.2, 0xf0ece0, [-0.17, 1.42, 1.05], [0, 0, 0.6]),
    ...[[0.24, 0.6], [-0.24, 0.6], [0.24, -0.6], [-0.24, -0.6]].flatMap(([x, z]) => [gCap(0.085, 0.6, c1, [x, 0.42, z]), gBox(0.14, 0.1, 0.16, 0x2a2018, [x, 0.05, z])]),
    gSph(0.17, 0xf0b8b8, [0, 0.72, -0.4]), gCap(0.03, 0.7, c1, [0, 0.95, -0.98], [0.15, 0, 0]), gCyl(0.07, 0.1, 0.13, 0xd9b23a, [0, 0.84, 0.9])]);
  for (const [x, z, ry, a, b] of [[-16, 46, 0.5, 0x7a4a2c, 0xf2ece0], [-11, 50, 2.6, 0xf2ece0, 0x3a2a20], [-18, 50.5, -1.2, 0x8a5a36, 0xf2ece0], [24, 22, 1.9, 0x7a4a2c, 0xf2ece0], [-28, 30, 0.2, 0x3a2a20, 0xf2ece0]]) {
    B.geo(M.flat, cow(a, b), [x, world.height(x, z), z], [0, ry, 0]); beast(world, x, z, ry, 1.0, 2.7, -5, world.height(x, z) + 1.55, 0.15);
  }
  { const x = 1, z = 35, y = world.height(x, z); B.box(M.woodH, 3.2, 0.6, 0.9, x, y, z, { ry: 0.4, c: 0x5a4028, solid: true }); B.box(M.glow, 2.8, 0.02, 0.55, x, y + 0.6, z, { ry: 0.4, c: 0x1c4450 }); B.box(M.wood, 0.22, 1.5, 0.22, x - 1.6, y, z + 0.7, { c: 0x5a4028 }); }
  for (const [x, z] of [[-27, 44], [5, 23], [-2, 52]]) { const y = world.height(x, z); B.geo(M.thatch, new THREE.ConeGeometry(1.5, 2.6, 9), [x, y + 1.2, z], [0, 0, 0], 1, 0xd8bc68); B.box(M.wood, 0.1, 3.2, 0.1, x, y, z, { c: 0x5a4028 }); world.addCyl(x, z, 1.1, y - 1, y + 2.4); }
  // wooden bridge over the stream
  {
    const x = 25, z = -5.5, ry = 0.89, P = frame(x, z, ry), y = Math.max(world.height(...P(-5, 0)), world.height(...P(5, 0))) + 0.15;
    B.box(M.woodH, 11, 0.28, 3, x, y - 0.28, z, { ry, c: 0x7a5a3a, solid: true });
    for (const s of [-1, 1]) { const [rx, rz] = P(0, s * 1.4); B.box(M.woodH, 11, 0.1, 0.1, rx, y + 0.95, rz, { ry, c: 0x5a4028 }); world.addBox(rx, rz, 11, 0.2, ry, y - 1, y + 1.1);
      for (let i = 0; i <= 5; i++) { const [px, pz] = P(-5.4 + i * 2.16, s * 1.4); B.box(M.wood, 0.14, 1.9, 0.14, px, y - 0.9, pz, { ry, c: 0x5a4028 }); } }
  }

  // ---- the Austrian camp ---------------------------------------------------------------------
  const palisade = (x0, z0, x1, z1) => {
    const len = Math.hypot(x1 - x0, z1 - z0), n = Math.round(len / 0.44);
    for (let i = 0; i <= n; i++) { const t = i / n, x = x0 + (x1 - x0) * t + (R() - 0.5) * 0.08, z = z0 + (z1 - z0) * t + (R() - 0.5) * 0.08, y = world.height(x, z), h = 2.9 + R() * 0.5;
      B.cyl(M.wood, 0.2, 0.22, h, x, y - 0.3, z, { c: R.pick([0x7a5a3a, 0x6a4c30, 0x86643e]), seg: 6 }); B.geo(M.wood, new THREE.ConeGeometry(0.2, 0.5, 6), [x, y + h - 0.05, z], [0, 0, 0], 1, 0x8a6a44); }
    world.addBox((x0 + x1) / 2, (z0 + z1) / 2, len, 0.5, Math.atan2(-(z1 - z0), x1 - x0), -5, world.height((x0 + x1) / 2, (z0 + z1) / 2) + 3);
  };
  palisade(30, -17, 40.5, -17); palisade(47.5, -17, 62, -17); palisade(30, -17, 30, -46); palisade(62, -17, 62, -34);
  const tent = (x, z, s = 1, top = 0xb81c1c) => {
    const y = world.height(x, z);
    B.geo(M.cloth, new THREE.ConeGeometry(2.3 * s, 3.1 * s, 8), [x, y + 1.5 * s, z], [0, R() * 3, 0], 1, 0xf0e8d8);
    B.geo(M.cloth, new THREE.ConeGeometry(1.0 * s, 1.36 * s, 8), [x, y + 2.42 * s, z], [0, 0, 0], 1.02, top);
    B.box(M.wood, 0.07, 1.0 * s, 0.07, x, y + 3.0 * s, z, { c: 0x4a3222 }); B.box(M.cloth, 0.5, 0.25, 0.02, x + 0.27, y + 3.7 * s, z, { c: top });
    world.addCyl(x, z, 1.8 * s, y - 1, y + 2.6 * s);
  };
  tent(36, -24); tent(35, -33); tent(55, -23); tent(36.5, -41, 0.9);
  {                                                              // the bailiff's pavilion
    const x = 52, z = -34, y = world.height(x, z);
    B.cyl(M.cloth, 3.3, 3.3, 2.3, x, y - 0.1, z, { c: 0xf0e8d8, seg: 14, open: true, solid: true });
    for (let i = 0; i < 7; i++) { const a = i / 7 * 6.283; B.box(M.cloth, 1.45, 2.32, 0.04, x + Math.cos(a) * 3.32, y - 0.1, z + Math.sin(a) * 3.32, { ry: -a + Math.PI / 2, c: 0xb81c1c }); }
    B.geo(M.cloth, new THREE.ConeGeometry(3.9, 2.8, 14), [x, y + 3.6, z], [0, 0, 0], 1, 0xb81c1c);
    B.geo(M.metal, new THREE.SphereGeometry(0.22, 8, 6), [x, y + 5.1, z], [0, 0, 0], 1, 0xd9b23a);
  }
  // campfire, racks, supplies
  const fire = { x: 45, z: -28, y: world.height(45, -28) };
  for (let i = 0; i < 5; i++) B.cyl(M.wood, 0.09, 0.1, 1.1, fire.x, fire.y + 0.1, fire.z, { rz: 1.2, ry: i * 1.25, c: 0x2a1a10, seg: 5 });
  for (let i = 0; i < 9; i++) B.geo(M.rock, rockGeo(i, 0), [fire.x + Math.cos(i * 0.7) * 0.75, fire.y + 0.08, fire.z + Math.sin(i * 0.7) * 0.75], [0, i, 0], 0.2, 0x8a8880);
  B.geo(M.glow, new THREE.ConeGeometry(0.28, 0.7, 6), [fire.x, fire.y + 0.5, fire.z], [0, 0, 0], 1, 0xff7a20);
  const fl = new THREE.PointLight(0xff8a3a, 40, 16, 1.8); fl.position.set(fire.x, fire.y + 1.1, fire.z); root.add(fl);
  for (const [x, z] of [[41, -19.5], [42, -20], [58, -30], [58.6, -31]]) barrel(B, M, x, world.height(x, z), z);
  crate(B, M, 33, world.height(33, -20), -20, 0.9, 0.3); crate(B, M, 33.2, world.height(33, -21.2), -21.2, 0.7, 0.9); crate(B, M, 57, world.height(57, -40), -40, 1.0, 0.2);
  { const x = 40, z = -36, y = world.height(x, z); B.box(M.wood, 2.4, 0.1, 0.1, x, y + 1.5, z, { c: 0x5a4028 }); for (const s of [-1, 1]) B.box(M.wood, 0.1, 1.6, 0.1, x + s * 1.2, y, z, { c: 0x5a4028 });
    for (let i = 0; i < 4; i++) { B.cyl(M.wood, 0.025, 0.025, 2.6, x - 0.9 + i * 0.6, y + 1.2, z + 0.25, { rx: -0.18, c: 0x6a4a2a, seg: 5 }); B.box(M.metal, 0.02, 0.34, 0.24, x - 0.9 + i * 0.6, y + 2.25, z + 0.48, { c: 0xc9ced6 }); } world.addBox(x, z, 2.6, 0.6, 0, y - 1, y + 1.6); }
  // the hat on the pole
  { const x = 44, z = -21.5, y = world.height(x, z); B.cyl(M.wood, 0.07, 0.09, 4.6, x, y - 0.2, z, { c: 0x5a4028, seg: 6, solid: true });
    B.cyl(M.flat, 0.36, 0.38, 0.04, x, y + 4.4, z, { c: 0x2a4a2a, seg: 12 }); B.geo(M.flat, new THREE.ConeGeometry(0.24, 0.42, 10), [x, y + 4.63, z], [0, 0, 0.15], 1, 0x2a4a2a);
    B.box(M.flat2, 0.03, 0.6, 0.12, x - 0.2, y + 4.7, z, { rz: 0.5, c: 0xf0f0f0 }); B.box(M.stone, 1.1, 0.4, 1.1, x, y - 0.1, z, { c: 0xa8a294 }); }
  // stone keep under construction ("Zwing Uri")
  {
    const x = 67, z = -47, y = world.height(x, z) - 0.6;
    B.box(M.stone, 7, 10.6, 7, x, y, z, { c: 0xb5ad9c, solid: true });
    for (let i = 0; i < 12; i++) { const a = i % 3, s = Math.floor(i / 3); const off = (a - 1) * 2.7; const p = s === 0 ? [x + off, z + 3.2] : s === 1 ? [x + off, z - 3.2] : s === 2 ? [x + 3.2, z + off] : [x - 3.2, z + off]; B.box(M.stone, s < 2 ? 1.5 : 0.6, 1.0, s < 2 ? 0.6 : 1.5, p[0], y + 10.6, p[1], { c: 0xb5ad9c }); }
    B.box(M.woodH, 1.4, 2.4, 0.12, x - 3.55, y + 0.6, z, { ry: Math.PI / 2, c: 0x3a2618 });
    for (const yy of [3, 6, 9]) { B.box(M.woodH, 2.2, 0.1, 7.6, x - 4.7, y + yy, z, { c: 0x8a6a44 }); }
    for (const zz of [-3.6, 0, 3.6]) B.box(M.wood, 0.14, 9.6, 0.14, x - 5.7, y, z + zz, { c: 0x7a5a3a });
  }
  // flags (they wave in the wind)
  const flag = (draw, x, y, z, w = 1.9, h = 1.9, pole = 5.2) => {
    const t = drawTexture(256, 256, draw); t.userData.own = true;
    const g = new THREE.PlaneGeometry(w, h, 16, 6); g.translate(w / 2, 0, 0);
    const mat = new THREE.MeshStandardMaterial({ map: t, side: THREE.DoubleSide, roughness: 0.9 });
    mat.onBeforeCompile = (sh) => { sh.uniforms.uTime = shared.uTime; sh.vertexShader = 'uniform float uTime;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      float fk = position.x / ${w.toFixed(2)}; transformed.z += sin(position.x*2.6 - uTime*4.2 + position.y) * 0.16 * fk; transformed.y += sin(position.x*1.7 - uTime*3.1) * 0.05 * fk;`); };
    mat.customProgramCacheKey = () => 'flag' + w;
    const m = new THREE.Mesh(g, mat); m.position.set(x, y + pole - h / 2 - 0.1, z); m.rotation.y = -0.5; m.castShadow = true; root.add(m);
    B.cyl(M.wood, 0.045, 0.06, pole, x, y, z, { c: 0x5a4028, seg: 6 }); B.geo(M.metal, new THREE.ConeGeometry(0.07, 0.3, 6), [x, y + pole + 0.15, z], [0, 0, 0], 1, 0xd9b23a);
  };
  flag(uriFlag, -36.5, world.height(-36.5, 56.5), 56.5, 2.2, 2.2, 5.6); flag(schwyzFlag, -27.5, world.height(-27.5, 64), 64, 1.6, 1.6, 4.6);
  flag(austriaFlag, 40.5, world.height(40.5, -17), -17, 2.2, 1.5, 6); flag(austriaFlag, 47.5, world.height(47.5, -17), -17, 2.2, 1.5, 6); flag(austriaFlag, 67, world.height(67, -47) + 10.4, -47, 2.6, 1.8, 4.5); flag(austriaFlag, 52.5, world.height(52, -34) + 4.6, -34, 1.4, 1.0, 2.2);
  // free men of the Waldstaetten, halberds in hand, see you off
  for (const [x, z, yaw] of [[-35.4, 57.6, 1.1], [-37.9, 55.6, 0.8], [-28.6, 62.6, -0.5]]) {
    const f = makeHumanoid(M, lookFor('confederate', R));
    f.group.position.set(x, world.height(x, z), z); f.group.rotation.y = yaw; f.armR.rotation.x = -1.25; f.armR.rotation.z = 0.12; f.armL.rotation.z = 0.1;
    root.add(f.group); world.addCyl(x, z, 0.4, -5, world.height(x, z) + 1.8);
  }

  // ---- forest, meadow, boulders ----------------------------------------------------------------
  const nearBuilt = (x, z) => dPoly(PATH, x, z) < 4 || dPoly(STREAM, x, z) < 5 || (x > 26 && x < 72 && z < -12 && z > -56) || (Math.hypot(x + 10, z - 44) < 34) || Math.hypot(x + 44, z - 14) < 8 || Math.hypot(x - fallX, z - fallZ) < 14 || Math.hypot(x + 34, z - 58) < 17 || Math.hypot(x + 84, z - 27) < 16 || Math.hypot(x - 26, z - 52) < 10 || Math.hypot(x + 52, z + 17) < 16 || Math.hypot(x - 74, z - 34) < 13;
  const pines = [];
  for (let i = 0; i < 60000 && pines.length < 2100; i++) {
    const x = (R() - 0.5) * 900, z = (R() - 0.5) * 900, h = world.height(x, z), d = Math.hypot(x - 6, z - 2);
    if (h < 1.5 || h > 128) continue;
    if (d < 131) { if (nearBuilt(x, z) || fbm(x * 0.035 + 50, z * 0.035, 2, 3) < 0.6) continue; } else if (forest(x, z) < 0.47 && R() < 0.85) continue;
    if (world.height(x + 2, z) - h > 3.2 || h - world.height(x - 2, z) > 3.2) continue;
    const s = 0.75 + R() * 0.9;
    pines.push({ x, y: h - 0.3, z, ry: R() * 6.28, s: [s, s * (0.9 + R() * 0.35), s], c: R.pick([0xffffff, 0xd8e8d0, 0xb8d0b0, 0xe8e0c0]) });
    if (d < 142) world.addCyl(x, z, 0.4 * s, h - 2, h + 9);
  }
  root.add(instanced(pineGeo(), windify(M.rock.clone(), shared, 0.16, 9, 1.1), pines));
  const tufts = [], flowers = [], rocks = [];
  for (let i = 0; i < 120000 && tufts.length < 42000; i++) {
    const a = R() * 6.283, r = Math.sqrt(R()) * 131, x = 6 + Math.cos(a) * r, z = 2 + Math.sin(a) * r, h = world.height(x, z);
    if (h < 0.7 || dPoly(PATH, x, z) < 1.3 || dPoly(STREAM, x, z) < 2.6) continue;
    tufts.push({ x, y: h, z, ry: R() * 6.28, s: [0.35 + R() * 0.4, 0.2 + R() * 0.4, 0.35 + R() * 0.4], c: R.pick([0x86a84e, 0x74983e, 0x94b058, 0x688c3a]) });
    if (i % 5 === 0) flowers.push({ x: x + 0.3, y: h, z: z + 0.2, ry: R() * 6, s: 0.7 + R() * 0.7, c: R.pick([0xffffff, 0xffe04a, 0xffffff, 0x6a8cf0, 0xf07aa8, 0xffe04a]) });
  }
  root.add(instanced(tuftGeo(5, 0x8a9a6a, 0xffffff), windify(M.flat2.clone(), shared, 0.22, 1, 1.9), tufts, { cast: false }));
  const flowerGeo = merge([gBox(0.012, 0.3, 0.012, 0x2a5a1c, [0, 0.15, 0]), xf(new THREE.IcosahedronGeometry(0.06, 0), [0, 0.32, 0], [0, 0, 0], [1, 0.6, 1], 0xffffff)]);
  root.add(instanced(flowerGeo, windify(M.flat.clone(), shared, 0.2, 0.4, 1.9), flowers, { cast: false }));
  for (let i = 0; i < 260; i++) {
    const x = (R() - 0.5) * 330, z = (R() - 0.5) * 330, h = world.height(x, z); if (h < 0.5 || nearBuilt(x, z)) continue;
    const s = 0.4 + R() * R() * 3;
    rocks.push({ x, y: h + s * 0.2, z, ry: R() * 6, s: [s, s * 0.8, s], c: R.pick([0x8a8882, 0x9a968e, 0x7a7a76]) });
    if (s > 1 && Math.hypot(x - 6, z - 2) < 140) world.addCyl(x, z, s * 0.85, h - 2, h + s * 0.7);
  }
  root.add(instanced(rockGeo(4, 1), M.rock, rocks));

  // ---- atmosphere ------------------------------------------------------------------------------
  root.add(makeAmbient(shared, { count: 420, box: 40, boxY: 14, size: 0.045, colorA: 0xffffff, colorB: 0xfff8d0, alpha: 0.7, fall: -0.03, wind: [0.5, 0, 0.3], flutter: 0.9 }));
  const eagle = new THREE.Mesh(merge([gBox(2.6, 0.03, 0.5, 0x2a2018, [0, 0, 0]), gBox(0.3, 0.06, 1.0, 0x2a2018, [0, 0, 0.1]), gBox(0.5, 0.03, 0.3, 0x2a2018, [0, 0, 0.6])]), M.flat);
  root.add(eagle);

  { // a great boulder in the meadow west of the path, with a summit cross on its grassy top and a ladder leaning against its flank; a hunter's high seat near the start
    const clearAt = (x, z, r) => { world.cyls = world.cyls.filter((c) => Math.hypot(c.x - x, c.z - z) > r + c.r); };
    clearAt(-52, -17, 15);
    const rk = boulder(B, M, -52, 5.1, -19, { rx: 8, rz: 7, h: 7.5, seed: 3, ladder: 0.35, cross: true });
    extraFoes.push(['crossbowman', -51, -20.5, { y: rk.top + 0.5, static: true, yaw: 0 }]); extraPicks.push([-54, -17.5, rk.top + 0.5]);
    clearAt(-44, 65, 4); stand(B, M, -44, world.height(-44, 64.7), 64.7, 0, { c: 0x7a5a3a, roof: 0x5a4632 });
  }
  const enemies = [
    ['halberdier', -15, 41, {}], ['crossbowman', -2, 44.5, {}], ['halberdier', 5, 24, { patrol: true }], ['crossbowman', 17, 33, {}],
    ['halberdier', -39, 18, { patrol: true }], ['halberdier', 21, 0, {}], ['crossbowman', 29.5, -10, {}], ['knight', 32, -15, {}],
    ['halberdier', 42, -23, {}], ['crossbowman', 37.5, -29, {}], ['halberdier', 48, -29.5, { patrol: true }], ['crossbowman', 56, -26, {}],
    ['knight', 46, -40, {}], ['halberdier', 58, -42, {}], ['crossbowman', 67, -47, { y: 30, static: true, yaw: -2.2 }], ['swissBoss', 60, -48, { yaw: -2.4, patrol: false }],
    ['halberdier', -8, 39, { up: 1.8, patrol: false }], ['halberdier', -79, 27, {}], ['crossbowman', -91, 31, {}],
    ['crossbowman', 74, 34, { up: 1.8, patrol: false }], ['halberdier', 67, 37, {}], ['halberdier', 79, 29, { patrol: true }],
  ];
  const cheese = merge([gCyl(0.2, 0.2, 0.12, 0xe8b838, [0, 0, 0], [0, 0, 0], 1, 12), gCyl(0.205, 0.205, 0.03, 0xb88a20, [0, 0.06, 0], [0, 0, 0], 1, 12), gCyl(0.205, 0.205, 0.03, 0xb88a20, [0, -0.06, 0], [0, 0, 0], 1, 12)]);
  cheese.rotateX(1.1);
  let ft = 0;
  return {
    env: {
      sunDir: [-0.72, 0.56, 0.22], sunColor: 0xfff0d0, sunLight: 0xfff4e0, sunIntensity: 4.6, sunSize: 0.0005,
      skyTop: 0x1857c4, skyHorizon: 0xb8d6f2, skyGround: 0x8aa8c0, haze: 0.62,
      fogColor: 0xb2cde6, fogDensity: 0.0011, hemiSky: 0xa9c9ff, hemiGround: 0x54703c, hemiIntensity: 1.9, envIntensity: 0.75,
      cloudCover: 0.55, cloudScale: 0.36, cloudLit: 0xffffff, cloudShade: 0x93a4bc,
      bloom: 0.28, bloomRadius: 0.6, bloomThreshold: 1.25, rays: 0.25, rayThreshold: 2.6, exposure: 0.95,
      saturation: 1.16, contrast: 1.07, vignette: 0.3, tintHi: 0xfffaf0, tintLo: 0xe8f0ff, shadowRange: 95,
    },
    spawn: { x: -32, z: 60, yaw: -0.71 },
    vista: { c: [0, 6, 20], r: 60, h: 14, a: 2.2, speed: 0.03 },
    enemies: enemies.concat(extraFoes), pickups: [[-9.5, 32.5], [19, 4], [38.5, -19.5], [53, -39.5], [-41, 20], [13.1, 28.65, 0, 1.8], [-44.96, 12.24, 0, 1.8], [75.6, 35.6, 0, 1.8]].concat(extraPicks),
    dust: [0.45, 0.42, 0.3], water: [[fallX, fallZ, 60], [25, -5.5, 16]],
    makePickup: () => new THREE.Mesh(cheese, M.flat),
    update(dt, t, g) {
      eagle.position.set(20 + Math.cos(t * 0.12) * 70, 85 + Math.sin(t * 0.3) * 4, -10 + Math.sin(t * 0.12) * 70); eagle.rotation.set(0, -t * 0.12, 0.25);
      fl.intensity = 34 + Math.sin(t * 17) * 6 + Math.sin(t * 7.3) * 5;
      ft -= dt;
      if (ft <= 0) {
        ft = 0.05;
        g.gfx.glow.spawn(fire.x + (Math.random() - 0.5) * 0.3, fire.y + 0.5, fire.z + (Math.random() - 0.5) * 0.3, (Math.random() - 0.5) * 0.6, 1.5 + Math.random() * 1.5, (Math.random() - 0.5) * 0.6, { life: 0.7 + Math.random() * 0.6, s0: 0.3, s1: 0.03, r: 3, g: 1.1, b: 0.25, a: 0.9 });
        g.gfx.soft.spawn(fire.x, fire.y + 1.2, fire.z, 0.4, 1.4, 0.2, { life: 3, s0: 0.3, s1: 1.8, r: 0.5, g: 0.5, b: 0.5, a: 0.18, drag: 0.2 });
        for (let i = 0; i < 2; i++) g.gfx.soft.spawn(fallX - 1 + (Math.random() - 0.5) * 4, poolY + 0.5, fallZ + (Math.random() - 0.5) * 5, -1.2 - Math.random(), 1.2 + Math.random() * 1.5, (Math.random() - 0.5) * 1.5, { life: 3 + Math.random() * 2, s0: 1.2, s1: 6, r: 0.95, g: 0.97, b: 1, a: 0.16, drag: 0.4 });
      }
    },
  };
}
