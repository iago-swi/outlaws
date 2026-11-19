// Props shared by the levels: instancing helper, fences, barrels, plants.
import * as THREE from 'three';
import { xf, merge, paint } from './build.js';
import { gBox, gCyl, gSph, gCone, gCap } from './actors.js';

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _p = new THREE.Vector3(), _s = new THREE.Vector3(), _c = new THREE.Color();

/**
 * Draw one geometry many times in a single GPU call.
 * items: [{x,y,z, ry, s | [sx,sy,sz], c (tint)}]
 */
export function instanced(geo, mat, items, o = {}) {
  if (!geo.attributes.color) paint(geo, 0xffffff);      // materials multiply by vertex colour
  const im = new THREE.InstancedMesh(geo, mat, items.length);
  items.forEach((it, i) => {
    _e.set(it.rx || 0, it.ry || 0, it.rz || 0, 'YXZ'); _q.setFromEuler(_e);
    _p.set(it.x, it.y, it.z);
    if (Array.isArray(it.s)) _s.set(it.s[0], it.s[1], it.s[2]); else _s.setScalar(it.s ?? 1);
    im.setMatrixAt(i, _m.compose(_p, _q, _s));
    if (it.c !== undefined) im.setColorAt(i, _c.set(it.c));
  });
  im.instanceMatrix.needsUpdate = true;
  if (im.instanceColor) im.instanceColor.needsUpdate = true;
  im.castShadow = o.cast ?? true; im.receiveShadow = o.receive ?? true;
  im.frustumCulled = false;
  return im;
}

/** Post-and-rail fence from (x0,z0) to (x1,z1) on terrain. */
export function fence(B, M, x0, z0, x1, z1, o = {}) {
  const { h = 1.25, rails = 3, c = 0x8a6a4a, solid = true, gap = 2.3 } = o;
  const W = B.world, len = Math.hypot(x1 - x0, z1 - z0), n = Math.max(1, Math.round(len / gap)), ry = Math.atan2(-(z1 - z0), x1 - x0);
  for (let i = 0; i <= n; i++) {
    const t = i / n, x = x0 + (x1 - x0) * t, z = z0 + (z1 - z0) * t, y = W.height(x, z);
    B.box(M.wood, 0.14, h + 0.15, 0.14, x, y - 0.05, z, { ry: ry + (i % 3) * 0.1, c });
    if (i < n) {
      const xb = x0 + (x1 - x0) * (i + 1) / n, zb = z0 + (z1 - z0) * (i + 1) / n, yb = W.height(xb, zb);
      const seg = Math.hypot(xb - x, zb - z), tilt = Math.atan2(yb - y, seg);
      for (let k = 0; k < rails; k++) {
        const ry_ = h * (0.3 + 0.6 * k / Math.max(1, rails - 1));
        B.box(M.woodH, seg + 0.1, 0.09, 0.05, (x + xb) / 2, (y + yb) / 2 + ry_, (z + zb) / 2, { ry, rz: tilt, c });
      }
    }
  }
  if (solid) W.addBox((x0 + x1) / 2, (z0 + z1) / 2, len, 0.2, ry, W.height((x0 + x1) / 2, (z0 + z1) / 2) - 1, W.height((x0 + x1) / 2, (z0 + z1) / 2) + h);
}

export function barrel(B, M, x, y, z, c = 0x8a623a) {
  B.cyl(M.wood, 0.36, 0.33, 0.95, x, y, z, { c, solid: true, seg: 12 });
  B.cyl(M.metal, 0.372, 0.372, 0.05, x, y + 0.2, z, { c: 0x3a3a3e, seg: 12, open: true });
  B.cyl(M.metal, 0.372, 0.372, 0.05, x, y + 0.7, z, { c: 0x3a3a3e, seg: 12, open: true });
}

export function crate(B, M, x, y, z, s = 0.8, ry = 0, c = 0xa07a4a) {
  B.box(M.wood, s, s, s, x, y, z, { ry, c, solid: true });
  B.box(M.woodH, s + 0.04, 0.1, s + 0.04, x, y + s - 0.1, z, { ry, c: 0x6a4a2a });
  B.box(M.woodH, s + 0.04, 0.1, s + 0.04, x, y, z, { ry, c: 0x6a4a2a });
}

/** A tuft of grass blades (for instancing). Height 1, blades lean outward. */
export function tuftGeo(blades = 6, c0 = 0x3a5a22, c1 = 0x9ab84a) {
  const P = [], C = [], U = [], a = new THREE.Color(c0), b = new THREE.Color(c1);
  for (let i = 0; i < blades; i++) {
    const ang = (i / blades) * 6.283 + Math.sin(i * 7.1), lean = 0.25 + (i % 3) * 0.14, w = 0.045, hh = 0.6 + ((i * 37) % 10) / 25;
    const dx = Math.cos(ang), dz = Math.sin(ang), px = -dz * w, pz = dx * w, ox = dx * 0.06, oz = dz * 0.06;
    const tip = [ox + dx * lean * hh, hh, oz + dz * lean * hh], mid = [ox + dx * lean * hh * 0.35, hh * 0.55, oz + dz * lean * hh * 0.35];
    P.push(ox - px, 0, oz - pz, ox + px, 0, oz + pz, mid[0] + px * 0.7, mid[1], mid[2] + pz * 0.7,
      ox - px, 0, oz - pz, mid[0] + px * 0.7, mid[1], mid[2] + pz * 0.7, mid[0] - px * 0.7, mid[1], mid[2] - pz * 0.7,
      mid[0] - px * 0.7, mid[1], mid[2] - pz * 0.7, mid[0] + px * 0.7, mid[1], mid[2] + pz * 0.7, tip[0], tip[1], tip[2]);
    for (const k of [0, 0, 0.55, 0, 0.55, 0.55, 0.55, 0.55, 1]) { const c = a.clone().lerp(b, k); C.push(c.r, c.g, c.b); U.push(0, k); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(C, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(U, 2));
  // all normals point up so grass is lit like the ground it stands on
  g.setAttribute('normal', new THREE.Float32BufferAttribute(new Array(P.length / 3).fill([0, 1, 0]).flat(), 3));
  return g;
}

/** Saguaro cactus. */
export function cactusGeo() {
  const G = 0x4f7a3c, parts = [gCap(0.3, 3.2, G, [0, 1.9, 0])];
  parts.push(gCap(0.2, 0.9, G, [0.6, 1.9, 0], [0, 0, Math.PI / 2]), gCap(0.2, 1.3, G, [1.05, 2.6, 0]));
  parts.push(gCap(0.18, 0.7, G, [-0.5, 2.5, 0], [0, 0, Math.PI / 2]), gCap(0.18, 0.9, G, [-0.85, 3.05, 0]));
  return merge(parts);
}

/** Conifer: trunk + stacked cones. Height ~ 9. */
export function pineGeo(dark = 0x2e5c34, light = 0x427c42) {
  const parts = [gCyl(0.16, 0.3, 3.2, 0x4a3220, [0, 1.6, 0], [0, 0, 0], 1, 6)];
  const n = 6;
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1), r = 2.3 * (1 - t * 0.82), y = 1.9 + t * 6.2;
    parts.push(gCone(r, 2.6 - t * 0.8, i % 2 ? dark : light, [Math.sin(i * 2.3) * 0.1, y + 0.9, Math.cos(i * 1.7) * 0.1], [0, i * 0.7, 0], 1, 7));
  }
  return merge(parts);
}

/** Broadleaf tree made of a bent trunk and foliage blobs. */
export function blobTreeGeo(o = {}) {
  const { trunk = 0x3a2a20, leaf = [0xf2b8c6, 0xf7d0d8, 0xe89ab0], h = 5, spread = 3, blobs = 9, seed = 1 } = o;
  const parts = [], rnd = (i) => { const s = Math.sin(i * 127.1 + seed * 311.7) * 43758.5453; return s - Math.floor(s); };
  parts.push(gCyl(0.2, 0.36, h * 0.5, trunk, [0.1, h * 0.25, 0], [0, 0, -0.12], 1, 7));
  parts.push(gCyl(0.12, 0.2, h * 0.45, trunk, [0.5, h * 0.62, 0.1], [0.2, 0, -0.55], 1, 6), gCyl(0.1, 0.18, h * 0.45, trunk, [-0.35, h * 0.64, -0.2], [-0.3, 0, 0.6], 1, 6));
  for (let i = 0; i < blobs; i++) {
    const a = rnd(i) * 6.283, r = Math.sqrt(rnd(i + 20)) * spread, y = h * 0.78 + rnd(i + 40) * h * 0.4, s = 0.9 + rnd(i + 60) * 0.9;
    const g = new THREE.IcosahedronGeometry(s, 1);
    parts.push(xf(g, [Math.cos(a) * r, y, Math.sin(a) * r], [rnd(i) * 3, rnd(i + 5) * 3, 0], [1, 0.72, 1], leaf[i % leaf.length]));
  }
  return merge(parts);
}

/** Simple low-poly horse (static). */
export function horseGeo(coat = 0x6a4428, mane = 0x1c120c) {
  const p = [];
  p.push(gCap(0.36, 1.1, coat, [0, 1.35, 0], [Math.PI / 2, 0, 0], [1, 1, 1.1]));
  p.push(gCap(0.17, 0.75, coat, [0, 1.95, 0.85], [0.75, 0, 0]));                       // neck
  p.push(gCap(0.14, 0.36, coat, [0, 2.28, 1.3], [1.85, 0, 0]), gBox(0.2, 0.2, 0.2, 0x2a1c14, [0, 2.17, 1.55]));
  p.push(gCone(0.05, 0.14, coat, [0.09, 2.5, 1.12]), gCone(0.05, 0.14, coat, [-0.09, 2.5, 1.12]));
  p.push(gBox(0.06, 0.7, 0.12, mane, [0, 2.1, 0.72], [0.75, 0, 0]));
  for (const [x, z] of [[0.2, 0.6], [-0.2, 0.6], [0.2, -0.65], [-0.2, -0.65]]) p.push(gCap(0.075, 0.9, coat, [x, 0.55, z]), gBox(0.14, 0.12, 0.16, 0x1a120c, [x, 0.06, z]));
  p.push(gCone(0.1, 0.9, mane, [0, 1.1, -1.0], [-2.7, 0, 0]));
  return merge(p);
}

export { gBox, gCyl, gSph, gCone, gCap, xf, merge, paint };
