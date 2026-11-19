// World construction + physics.
//  - Builder:  collects thousands of small shapes and merges them into a few
//              big meshes (one per material) so the GPU draws them in one go.
//  - World:    the invisible collision model (boxes, cylinders, terrain) used
//              for walking, bullets and enemy line of sight.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { clamp } from './util.js';

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler();
const _p = new THREE.Vector3(), _s = new THREE.Vector3(), _c = new THREE.Color();

/** Give every vertex of a geometry the same colour. */
export function paint(g, color) {
  _c.set(color);
  const n = g.attributes.position.count, arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = _c.r; arr[i * 3 + 1] = _c.g; arr[i * 3 + 2] = _c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return g;
}

/** Move/rotate/scale + colour a fresh geometry and make it merge-ready. */
export function xf(geo, p = [0, 0, 0], r = [0, 0, 0], s = 1, c = 0xffffff) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  _e.set(r[0], r[1], r[2], 'YXZ'); _q.setFromEuler(_e);
  _p.set(p[0], p[1], p[2]);
  if (typeof s === 'number') _s.setScalar(s); else _s.set(s[0], s[1], s[2]);
  g.applyMatrix4(_m.compose(_p, _q, _s));
  if (!g.attributes.color) paint(g, c);
  if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
  for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv', 'color'].includes(k)) g.deleteAttribute(k);
  return g;
}

export const merge = (list) => mergeGeometries(list, false);

/** Box whose texture repeats every `tile` metres regardless of its size. */
export function boxGeo(w, h, d, tile = 1) {
  const g = new THREE.BoxGeometry(w, h, d), uv = g.attributes.uv;
  const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
  const ou = Math.random(), ov = Math.random();
  for (let f = 0; f < 6; f++) for (let i = 0; i < 4; i++) {
    const k = f * 4 + i;
    uv.setXY(k, uv.getX(k) * dims[f][0] / tile + ou, uv.getY(k) * dims[f][1] / tile + ov);
  }
  return g;
}

function rawGeo(P, U) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(P), 3));
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(U), 2));
  g.computeVertexNormals();
  return g;
}

/** Gable roof: triangular prism, ridge along Z. Base at y=0. */
export function prismGeo(w, h, d, tile = 1) {
  const x = w / 2, z = d / 2, sl = Math.hypot(x, h) / tile, dl = d / tile;
  const P = [], U = [];
  const quad = (a, b, c, e) => { P.push(...a, ...b, ...c, ...a, ...c, ...e); U.push(0, 0, 0, sl, dl, sl, 0, 0, dl, sl, dl, 0); };
  quad([-x, 0, z], [0, h, z], [0, h, -z], [-x, 0, -z]);
  quad([x, 0, -z], [0, h, -z], [0, h, z], [x, 0, z]);
  P.push(-x, 0, z, x, 0, z, 0, h, z, x, 0, -z, -x, 0, -z, 0, h, -z);
  U.push(0, 0, w / tile, 0, x / tile, h / tile, 0, 0, w / tile, 0, x / tile, h / tile);
  return rawGeo(P, U);
}

/**
 * Japanese-style hipped roof: concave slopes and corners that sweep upward.
 * Eaves at y=0, ridge (along X) at y=h.
 */
export function curvedRoofGeo(w, d, h, o = {}) {
  const { ridge = 0.45, up = 0.7, curve = 1.9, tile = 1, nt = 7, ns = 10 } = o;
  const ex = w / 2, ez = d / 2, rx = ex * ridge;
  const sides = [
    [[-rx, 0], [rx, 0], [-ex, ez], [ex, ez]],
    [[rx, 0], [-rx, 0], [ex, -ez], [-ex, -ez]],
    [[-rx, 0], [-rx, 0], [-ex, -ez], [-ex, ez]],
    [[rx, 0], [rx, 0], [ex, ez], [ex, -ez]],
  ];
  const P = [], U = [];
  const pt = (sd, s, t) => {
    const tx = sd[0][0] + (sd[1][0] - sd[0][0]) * s, tz = sd[0][1] + (sd[1][1] - sd[0][1]) * s;
    const bx = sd[2][0] + (sd[3][0] - sd[2][0]) * s, bz = sd[2][1] + (sd[3][1] - sd[2][1]) * s;
    const y = h * Math.pow(1 - t, curve) + up * Math.pow(Math.abs(2 * s - 1), 4) * t * t * t;
    return [tx + (bx - tx) * t, y, tz + (bz - tz) * t];
  };
  for (const sd of sides) {
    const len = Math.hypot(sd[3][0] - sd[2][0], sd[3][1] - sd[2][1]) / tile;
    const sl = Math.hypot(h, Math.hypot(sd[2][0] - sd[0][0], sd[2][1] - sd[0][1])) / tile;
    for (let i = 0; i < ns; i++) for (let j = 0; j < nt; j++) {
      const s0 = i / ns, s1 = (i + 1) / ns, t0 = j / nt, t1 = (j + 1) / nt;
      const a = pt(sd, s0, t0), b = pt(sd, s0, t1), c = pt(sd, s1, t1), e = pt(sd, s1, t0);
      const tri = (p, q, r, up_, uq, ur) => {
        // keep the triangle facing upward/outward
        const ny = (q[2] - p[2]) * (r[0] - p[0]) - (q[0] - p[0]) * (r[2] - p[2]);
        if (ny >= 0) { P.push(...p, ...q, ...r); U.push(...up_, ...uq, ...ur); }
        else { P.push(...p, ...r, ...q); U.push(...up_, ...ur, ...uq); }
      };
      tri(a, b, c, [s0 * len, t0 * sl], [s0 * len, t1 * sl], [s1 * len, t1 * sl]);
      tri(a, c, e, [s0 * len, t0 * sl], [s1 * len, t1 * sl], [s1 * len, t0 * sl]);
    }
  }
  return rawGeo(P, U);
}

/** Lumpy boulder. */
export function rockGeo(seed = 1, detail = 1) {
  const g = new THREE.IcosahedronGeometry(1, detail);
  const pos = g.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const n = Math.sin(x * 3.1 + seed) * Math.cos(y * 2.7 + seed * 1.7) * Math.sin(z * 3.3 + seed * 0.3);
    const k = 1 + n * 0.28;
    pos.setXYZ(i, x * k, y * k * 0.75, z * k);
  }
  g.computeVertexNormals();
  return g;
}

// ---------------------------------------------------------------------------

export class Builder {
  constructor(world) { this.world = world; this.parts = new Map(); }

  add(mat, geo) {
    let a = this.parts.get(mat);
    if (!a) this.parts.set(mat, (a = []));
    a.push(geo);
    return this;
  }
  /** Box with (x,y,z) = centre of its BASE. o: {ry, rx, rz, c (colour), solid} */
  box(mat, w, h, d, x, y, z, o = {}) {
    const g = boxGeo(w, h, d, mat.userData.tile || 1);
    this.add(mat, xf(g, [x, y + h / 2, z], [o.rx || 0, o.ry || 0, o.rz || 0], 1, o.c ?? 0xffffff));
    if (o.solid) this.world.addBox(x, z, w, d, o.ry || 0, y, y + h);
    return this;
  }
  /** Vertical cylinder/cone standing on (x,y,z). */
  cyl(mat, rt, rb, h, x, y, z, o = {}) {
    const g = new THREE.CylinderGeometry(rt, rb, h, o.seg || 10, 1, !!o.open);
    const t = mat.userData.tile || 1, uv = g.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * Math.max(1, Math.round(6.28 * Math.max(rt, rb) / t)), uv.getY(i) * h / t);
    this.add(mat, xf(g, [x, y + h / 2, z], [o.rx || 0, o.ry || 0, o.rz || 0], 1, o.c ?? 0xffffff));
    if (o.solid) this.world.addCyl(x, z, Math.max(rt, rb), y, y + h);
    return this;
  }
  /** Any geometry. */
  geo(mat, g, p, r, s, c) { return this.add(mat, xf(g, p, r, s, c)); }

  build(parent) {
    const out = [];
    for (const [mat, list] of this.parts) {
      const mesh = new THREE.Mesh(merge(list), mat);
      mesh.castShadow = !mat.userData.noShadow;
      mesh.receiveShadow = !mat.userData.noShadow;
      parent.add(mesh); out.push(mesh);
      list.forEach((g) => g.dispose());
    }
    this.parts.clear();
    return out;
  }
}

// ---------------------------------------------------------------------------

/** Regular grid of terrain heights with smooth (bilinear) lookup. */
export class Heightfield {
  constructor(size, segs, fn) {
    this.size = size; this.segs = segs; this.n = segs + 1; this.cell = size / segs;
    this.data = new Float32Array(this.n * this.n);
    const half = size / 2;
    for (let j = 0; j < this.n; j++) for (let i = 0; i < this.n; i++)
      this.data[j * this.n + i] = fn(-half + i * this.cell, -half + j * this.cell);
  }
  h(x, z) {
    const n = this.n;
    const fx = clamp((x + this.size / 2) / this.cell, 0, n - 1.0001);
    const fz = clamp((z + this.size / 2) / this.cell, 0, n - 1.0001);
    const i = fx | 0, j = fz | 0, u = fx - i, v = fz - j, d = this.data, k = j * n + i;
    return d[k] * (1 - u) * (1 - v) + d[k + 1] * u * (1 - v) + d[k + n] * (1 - u) * v + d[k + n + 1] * u * v;
  }
  /** colorFn(x, z, h, normalY) -> THREE.Color (linear) */
  mesh(material, colorFn) {
    const g = new THREE.PlaneGeometry(this.size, this.size, this.segs, this.segs);
    g.rotateX(-Math.PI / 2);
    const pos = g.attributes.position, uv = g.attributes.uv, tile = material.userData.tile || 4;
    for (let i = 0; i < pos.count; i++) {
      pos.setY(i, this.data[i]);
      uv.setXY(i, pos.getX(i) / tile, pos.getZ(i) / tile);
    }
    g.computeVertexNormals();
    const nor = g.attributes.normal, col = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i++) {
      const c = colorFn(pos.getX(i), pos.getZ(i), pos.getY(i), nor.getY(i));
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const m = new THREE.Mesh(g, material);
    m.receiveShadow = true; m.castShadow = false;
    return m;
  }
}

// ---------------------------------------------------------------------------

const STEP = 0.5;   // highest ledge you can walk up without jumping

export class World {
  constructor() {
    this.boxes = []; this.cyls = [];
    this.height = () => 0;         // terrain height function
    this.bounds = null;            // {x0,x1,z0,z1} or {r} hard limits
    this.maxSlope = 1.15;          // steeper terrain cannot be climbed
    this.waterY = -Infinity;       // terrain below this is too deep to enter
  }
  addBox(x, z, w, d, ry, y0, y1) {
    this.boxes.push({ x, z, hw: w / 2, hd: d / 2, c: Math.cos(ry), s: Math.sin(ry), y0, y1, r: Math.hypot(w, d) / 2 });
  }
  addCyl(x, z, r, y0, y1) { this.cyls.push({ x, z, r, y0, y1 }); }

  /** Height of the floor under a point for something whose feet are at feetY. */
  groundAt(x, z, feetY) {
    let g = this.height(x, z);
    const lim = feetY + STEP;
    for (const b of this.boxes) {
      if (b.y1 <= g || b.y1 > lim) continue;
      const dx = x - b.x, dz = z - b.z;
      if (dx * dx + dz * dz > b.r * b.r) continue;
      const lx = dx * b.c - dz * b.s, lz = dx * b.s + dz * b.c;
      if (Math.abs(lx) <= b.hw && Math.abs(lz) <= b.hd) g = b.y1;
    }
    return g;
  }

  /** Can a walker go from (x0,z0) toward (x1,z1) given slope and water? */
  walkable(x0, z0, x1, z1) {
    const dx = x1 - x0, dz = z1 - z0, d = Math.hypot(dx, dz);
    if (d < 1e-6) return true;
    const px = x0 + (dx / d) * 0.6, pz = z0 + (dz / d) * 0.6;
    const h0 = this.height(x0, z0), h1 = this.height(px, pz);
    if (h1 < this.waterY && h1 < h0) return false;
    return (h1 - h0) / 0.6 < this.maxSlope;
  }

  /** Push a vertical capsule (radius r, height h, feet at p.y) out of obstacles. */
  collide(p, r, h) {
    for (let pass = 0; pass < 2; pass++) {
      for (const b of this.boxes) {
        if (b.y1 <= p.y + STEP || b.y0 >= p.y + h) continue;
        const dx = p.x - b.x, dz = p.z - b.z, rr = b.r + r;
        if (dx * dx + dz * dz > rr * rr) continue;
        let lx = dx * b.c - dz * b.s, lz = dx * b.s + dz * b.c;
        const cx = clamp(lx, -b.hw, b.hw), cz = clamp(lz, -b.hd, b.hd);
        const ex = lx - cx, ez = lz - cz, d2 = ex * ex + ez * ez;
        if (d2 >= r * r) continue;
        if (d2 > 1e-9) {
          const d = Math.sqrt(d2), k = (r - d) / d;
          lx += ex * k; lz += ez * k;
        } else if (b.hw - Math.abs(lx) < b.hd - Math.abs(lz)) lx = Math.sign(lx || 1) * (b.hw + r);
        else lz = Math.sign(lz || 1) * (b.hd + r);
        p.x = b.x + lx * b.c + lz * b.s;
        p.z = b.z - lx * b.s + lz * b.c;
      }
      for (const c of this.cyls) {
        if (c.y1 <= p.y + STEP || c.y0 >= p.y + h) continue;
        const dx = p.x - c.x, dz = p.z - c.z, rr = c.r + r, d2 = dx * dx + dz * dz;
        if (d2 >= rr * rr) continue;
        const d = Math.sqrt(d2) || 1e-4;
        p.x = c.x + (dx / d) * rr; p.z = c.z + (dz / d) * rr;
      }
    }
    const B = this.bounds;
    if (B) {
      if (B.r) {
        const d = Math.hypot(p.x - (B.x || 0), p.z - (B.z || 0));
        if (d > B.r) { p.x = (B.x || 0) + ((p.x - (B.x || 0)) / d) * B.r; p.z = (B.z || 0) + ((p.z - (B.z || 0)) / d) * B.r; }
      } else {
        p.x = clamp(p.x, B.x0, B.x1); p.z = clamp(p.z, B.z0, B.z1);
      }
    }
  }

  /**
   * Cast a ray (origin o, unit direction d). Returns the nearest hit
   * {t, nx, ny, nz} within `max` metres, or null.
   */
  raycast(o, d, max = 300) {
    let best = max, nx = 0, ny = 1, nz = 0, hit = false;
    for (const b of this.boxes) {
      const ox = o.x - b.x, oz = o.z - b.z;
      const lox = ox * b.c - oz * b.s, loz = ox * b.s + oz * b.c;
      const ldx = d.x * b.c - d.z * b.s, ldz = d.x * b.s + d.z * b.c;
      let t0 = 0, t1 = best, axis = -1, sgn = 0, ok = true;
      // x slab
      if (Math.abs(ldx) < 1e-8) { if (Math.abs(lox) > b.hw) ok = false; }
      else {
        let a = (-b.hw - lox) / ldx, c = (b.hw - lox) / ldx, s = -1;
        if (a > c) { const t = a; a = c; c = t; s = 1; }
        if (a > t0) { t0 = a; axis = 0; sgn = s; }
        if (c < t1) t1 = c;
        if (t0 > t1) ok = false;
      }
      if (!ok) continue;
      // y slab
      if (Math.abs(d.y) < 1e-8) { if (o.y < b.y0 || o.y > b.y1) continue; }
      else {
        let a = (b.y0 - o.y) / d.y, c = (b.y1 - o.y) / d.y, s = -1;
        if (a > c) { const t = a; a = c; c = t; s = 1; }
        if (a > t0) { t0 = a; axis = 1; sgn = s; }
        if (c < t1) t1 = c;
        if (t0 > t1) continue;
      }
      // z slab
      if (Math.abs(ldz) < 1e-8) { if (Math.abs(loz) > b.hd) continue; }
      else {
        let a = (-b.hd - loz) / ldz, c = (b.hd - loz) / ldz, s = -1;
        if (a > c) { const t = a; a = c; c = t; s = 1; }
        if (a > t0) { t0 = a; axis = 2; sgn = s; }
        if (c < t1) t1 = c;
        if (t0 > t1) continue;
      }
      if (axis < 0 || t0 >= best) continue;
      best = t0; hit = true;
      if (axis === 1) { nx = 0; ny = sgn; nz = 0; }
      else if (axis === 0) { nx = sgn * b.c; ny = 0; nz = -sgn * b.s; }
      else { nx = sgn * b.s; ny = 0; nz = sgn * b.c; }
    }
    for (const c of this.cyls) {
      const ox = o.x - c.x, oz = o.z - c.z;
      const A = d.x * d.x + d.z * d.z;
      if (A < 1e-8) continue;
      const Bq = ox * d.x + oz * d.z, C = ox * ox + oz * oz - c.r * c.r;
      const disc = Bq * Bq - A * C;
      if (disc < 0) continue;
      const t = (-Bq - Math.sqrt(disc)) / A;
      if (t <= 0 || t >= best) continue;
      const y = o.y + d.y * t;
      if (y < c.y0 || y > c.y1) continue;
      best = t; hit = true;
      nx = (ox + d.x * t) / c.r; ny = 0; nz = (oz + d.z * t) / c.r;
    }
    // terrain: march, then refine
    const step = 0.7;
    let pt = 0, above = o.y - this.height(o.x, o.z) > 0;
    if (above) {
      for (let t = step; t < best + step; t += step) {
        const tt = Math.min(t, best);
        const y = o.y + d.y * tt, gh = this.height(o.x + d.x * tt, o.z + d.z * tt);
        if (y < gh) {
          let lo = pt, hi = tt;
          for (let i = 0; i < 6; i++) {
            const mid = (lo + hi) / 2;
            if (o.y + d.y * mid < this.height(o.x + d.x * mid, o.z + d.z * mid)) hi = mid; else lo = mid;
          }
          best = lo; hit = true; nx = 0; ny = 1; nz = 0;
          break;
        }
        pt = tt;
        if (tt >= best) break;
      }
    }
    return hit ? { t: best, nx, ny, nz } : null;
  }

  /** True if nothing solid lies between two points. */
  clear(ax, ay, az, bx, by, bz) {
    const dx = bx - ax, dy = by - ay, dz = bz - az, len = Math.hypot(dx, dy, dz);
    if (len < 0.01) return true;
    _ro.x = ax; _ro.y = ay; _ro.z = az;
    _rd.x = dx / len; _rd.y = dy / len; _rd.z = dz / len;
    return this.raycast(_ro, _rd, len - 0.05) === null;
  }
}
const _ro = { x: 0, y: 0, z: 0 }, _rd = { x: 0, y: 0, z: 0 };
