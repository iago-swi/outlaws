// The Blender version: figures and buildings modelled in Blender (see ../blender/) for Dry Gulch, Kagemori and Uri.
// ?classic in the address shows the game as it is without them.
// The models are .lhm files (blender/pack.py): small numbers, deflated, part of the page itself.
// A figure is dressed from ONE library of parts on one skeleton, whose joints sit exactly where makeHumanoid() puts
// its parts and have no rest rotation: the game's own animation code (rotation.x / .z of hips, arms, legs, shins) moves it.
import * as THREE from 'three';

const FILES = Object.fromEntries(Object.entries(import.meta.glob('./models/*.lhm', { query: '?inline', eager: true, import: 'default' })).map(([p, url]) => [p.match(/([^/]+)\.lhm$/)[1], url]));
const params = new URLSearchParams(location.search);
const CHAPTERS = new Set(['west', 'japan', 'swiss']);
export const BL = { on: !params.has('classic'), live: false, models: {}, ms: 0, bytes: 0 };

/** Called when a chapter is loaded: are its people and buildings the Blender ones? */
export function blendChapter(id) { BL.live = BL.on && CHAPTERS.has(id) && !!BL.models.people; return BL.live; }

async function inflate(url) {
  const s = atob(url.slice(url.indexOf(',') + 1)), a = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) a[i] = s.charCodeAt(i);
  const buf = await new Response(new Blob([a]).stream().pipeThrough(new DecompressionStream('deflate'))).arrayBuffer();
  const n = new DataView(buf).getUint32(0, true), head = JSON.parse(new TextDecoder().decode(new Uint8Array(buf, 4, n)));
  const T = { h: Int16Array, H: Uint16Array, I: Uint32Array, b: Int8Array, B: Uint8Array, f: Float32Array }, A = {};
  let off = 4 + n;
  for (const [name, code, , count] of head.arrays) { const C = T[code], len = count * C.BYTES_PER_ELEMENT; A[name] = new C(buf.slice(off, off + len)); off += len; }
  BL.bytes += a.length;
  return { head, A };
}

function prepFigure({ head, A }) {
  const n = head.nv, pos = new Float32Array(n * 3), si = new Uint16Array(n * 4), sw = new Float32Array(n * 4), shade = new Float32Array(n);
  for (let i = 0; i < n * 3; i++) pos[i] = A.pos[i] * head.q;
  for (let i = 0; i < n; i++) { const w = A.bw[i] / 255; si[i * 4] = A.bone[i * 2]; si[i * 4 + 1] = A.bone[i * 2 + 1]; sw[i * 4] = w; sw[i * 4 + 1] = 1 - w; shade[i] = (A.shade[i] / 255) ** 2; }
  const at = Object.fromEntries(head.bones.map((b) => [b.name, b.p]));
  return { head, key: A.key, shade, idx: A.idx, parts: new Map(head.parts.map((p) => [p.name, p])),
    position: new THREE.BufferAttribute(pos, 3), normal: new THREE.BufferAttribute(A.nrm, 3, true), skinIndex: new THREE.BufferAttribute(si, 4), skinWeight: new THREE.BufferAttribute(sw, 4),
    inverses: head.bones.map((b) => new THREE.Matrix4().makeTranslation(-b.p[0], -b.p[1], -b.p[2])),
    bones: head.bones.map((b) => ({ name: b.name, parent: b.parent, rel: b.parent ? [b.p[0] - at[b.parent][0], b.p[1] - at[b.parent][1], b.p[2] - at[b.parent][2]] : b.p })) };
}

function prepBuilding({ head, A }) {
  const sets = new Map();                         // object name -> [{ mat, position, normal, uv, color }] as plain triangles
  for (const g of head.groups) {
    const n = g.i1 - g.i0, P = new Float32Array(n * 3), N = new Float32Array(n * 3), U = new Float32Array(n * 2), C = new Float32Array(n * 3);
    for (let k = 0; k < n; k++) {
      const v = A.idx[g.i0 + k];
      for (let c = 0; c < 3; c++) { P[k * 3 + c] = A.pos[v * 3 + c] * head.q; N[k * 3 + c] = A.nrm[v * 3 + c] / 127; C[k * 3 + c] = (A.col[v * 3 + c] / 255) ** 2; }
      U[k * 2] = A.uv[v * 2] / 1024; U[k * 2 + 1] = A.uv[v * 2 + 1] / 1024;
    }
    if (!sets.has(g.name)) sets.set(g.name, []);
    sets.get(g.name).push({ mat: g.mat, P, N, U, C });
  }
  return { head, sets };
}

/** Read the models. Resolves at once when the switch is off. */
export async function loadModels() {
  if (!BL.on) return;
  const t0 = performance.now();
  await Promise.all(Object.entries(FILES).map(async ([k, url]) => { const m = await inflate(url); BL.models[k] = m.head.kind === 'figure' ? prepFigure(m) : m.head.kind === 'scenery' ? m : prepBuilding(m); }));
  BL.ms = performance.now() - t0;
}

// ---- figures ----------------------------------------------------------------------------------------------------
const NOHAIR = new Set(['hood', 'helm', 'tengai', 'kabuto', 'kettle', 'cowl']), NOFACE = new Set(['hood', 'helm', 'tengai']), LONG = new Set(['coat', 'robe', 'dress', 'poncho', 'kosode', 'tabard', 'lion']);
const HATC = { kasa: 0xc2a35e, kabuto: 0x1a1a1e, tengai: 0xcdb682, fedora: 0x2a2a2e };
const DEF = { sleeve: 'shirt', cuff: 'sleeve', glove: 'skin', hatBand: 0x1a1208, vest: 0x2a2018, coat: 0x15120f, accent: 0xa81c1c, lip: 0x8a4a3c, poncho: 0xa8522a, poncho2: 0xe8d8a0, dress: 'shirt', hem: 'dress',
  bodice: 'shirt', apron: 0xe6e0d0, shawl: 0x6a4a3a, robe: 'pants', sash: 'robe', trim: 0xe8e0d0, armor: 0x7a1c1c, armor2: 0x1a1a1e, cape: 0x8a1414, kerchief: 0xe6e0d0, tie: 'hair', plume: 0xffffff,
  umbrella: 0xb01c2c, umbrella2: 0xf0e8d8, cord: 0xc81c2c, shield: 0xb01c1c, fur: 0x5a4632, fur2: 0x8a7458 };
function colourOf(S, k) {
  if (k[0] === '#') return parseInt(k.slice(1), 16);
  if (k.startsWith('tabard')) return (S.tabard ?? [0xb01c1c, 0xf0ece0, 0xb01c1c])[+k[6]];
  if (k === 'obi') return S.accent ?? 0x1a1a1a;
  if (k === 'headband') return S.accent ?? 0xffffff;
  if (k === 'hair') return S.hair ?? S.skin;
  if (k === 'brow') return S.brow ?? S.hair ?? 0x3a2a1a;
  if (k === 'hatC') return S.hatC ?? HATC[S.hat] ?? 0x3a2a1a;
  const v = S[k] ?? DEF[k];
  return typeof v === 'string' ? colourOf(S, v) : v ?? 0x888888;
}
/** The parts a look wears, as makeHumanoid reads it. */
function wear(S, lib) {
  const ex = S.extras || [], face = S.face || [], hat = S.hat, P = ['body'], hid = NOFACE.has(hat);
  if (!hid) P.push('face');
  if (S.hair !== null && !NOHAIR.has(hat) && !face.includes('kerchief')) P.push('hair');
  if (hat) { P.push('hat:' + hat); if (hat === 'kabuto') P.push(S.crest ? 'kabuto:crest' : 'kabuto:horns'); if (hat === 'helm' && S.plume) P.push('helm:plume'); }
  for (const f of face) if (!hid || f === 'neckerchief') P.push('f:' + f);
  for (const e of ex) P.push('x:' + e);
  if (S.wideSleeve) P.push('wideSleeve');
  if (S.bootTop) P.push('bootTop');
  if (S.shield !== undefined) P.push('shield');
  if ((S.weapon === 'revolver' || S.weapon2 === 'revolver') && !ex.some((e) => LONG.has(e))) P.push('gunbelt');
  return P.map((k) => lib.parts.get(k)).filter(Boolean);
}
const _c = new THREE.Color(), SPHERE = new THREE.Sphere(new THREE.Vector3(0, 1.05, 0), 1.7);

/** A figure for the look S (already filled with makeHumanoid's defaults): the same rig object makeHumanoid returns. */
export function blendHumanoid(M, S) {
  const lib = BL.models.people, parts = wear(S, lib), cols = lib.head.keys.map((k) => { _c.set(colourOf(S, k)); return [_c.r, _c.g, _c.b]; });
  let n = 0; for (const p of parts) n += p.i1 - p.i0;
  const idx = new lib.idx.constructor(n), col = new Uint16Array(lib.head.nv * 3);
  let o = 0;
  for (const p of parts) {
    idx.set(lib.idx.subarray(p.i0, p.i1), o); o += p.i1 - p.i0;
    for (let i = p.v0; i < p.v1; i++) { const c = cols[lib.key[i]], s = lib.shade[i] * 65535; col[i * 3] = c[0] * s; col[i * 3 + 1] = c[1] * s; col[i * 3 + 2] = c[2] * s; }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', lib.position); g.setAttribute('normal', lib.normal); g.setAttribute('skinIndex', lib.skinIndex); g.setAttribute('skinWeight', lib.skinWeight);
  g.setAttribute('color', new THREE.BufferAttribute(col, 3, true)); g.setIndex(new THREE.BufferAttribute(idx, 1)); g.boundingSphere = SPHERE;
  const mat = M.flat.clone(); mat.userData.keep = false;
  const group = new THREE.Group(); group.rotation.order = 'YXZ';
  const B = {}, list = [];
  for (const b of lib.bones) { const q = new THREE.Bone(); q.name = b.name; q.position.set(b.rel[0], b.rel[1], b.rel[2]); (b.parent ? B[b.parent] : group).add(q); B[b.name] = q; list.push(q); }
  const mesh = new THREE.SkinnedMesh(g, mat); mesh.castShadow = true; mesh.receiveShadow = true; mesh.frustumCulled = false;
  group.add(mesh); group.updateMatrixWorld(true);
  mesh.bind(new THREE.Skeleton(list, lib.inverses.map((m) => m.clone())), new THREE.Matrix4());
  group.scale.setScalar(S.scale || 1);
  return { group, hips: B.hips, armL: B.armL, armR: B.armR, legL: B.legL, legR: B.legR, shinL: B.shinL, shinR: B.shinR, mat, scale: S.scale || 1, blend: true };
}

// ---- the rest of the scenery ----------------------------------------------------------------------------------------
// Everything else that stands in a chapter (churches, shrines, towers, barns, fences, bridges, furniture) is built by the level's own code
// as before; the builder sets these shapes aside (Builder.capture) and each is replaced by its Blender version (blender/refine.py:
// planed edges, boards in relief, baked shade), found by a signature of the shape. A shape Blender has no version of goes into the scenery
// as it is. A wall the game can break keeps its piece: the range of its Blender triangles is handed to it.
const DUMP = params.has('dump');
function sigOf(key, geo) {
  geo.computeBoundingBox();
  const b = geo.boundingBox; let h = 2166136261;
  const mix = (v) => { h = Math.imul(h ^ (v & 0xffff), 16777619); h = Math.imul(h ^ ((v >> 16) & 0xffff), 16777619); };
  for (const v of [b.min.x, b.min.y, b.min.z, b.max.x, b.max.y, b.max.z]) mix(Math.round(v * 100));
  for (let i = 0; i < key.length; i++) mix(key.charCodeAt(i));
  mix(geo.attributes.position.count);
  return h >>> 0;
}
/** What is to be done with the shapes a chapter builds: 'dump' (?dump: write them down for Blender), the chapter's model, or null (leave them). */
export function sceneryFor(id) { return DUMP ? 'dump' : (BL.live && BL.models[id + '-scenery']) || null; }
export function blendRelease(B, list, scen, id) {
  if (scen === 'dump') {
    const r4 = (a) => Array.from(a, (v) => Math.round(v * 10000) / 10000);
    BL.dump = { id, prims: list.map(({ mat, geo, piece }) => {
      const A = geo.attributes, col = A.color.array, p = geo.userData.prim;
      const o = { m: mat.userData.key, sig: sigOf(mat.userData.key, geo), c: r4(col.subarray(0, 3)), solid: !!geo.userData.solid, piece: !!piece };
      { const b = geo.boundingBox; o.g = Math.round(B.world.height((b.min.x + b.max.x) / 2, (b.min.z + b.max.z) / 2) * 100) / 100; }      // the ground under it
      if (p) o.prim = p;
      else {
        o.P = r4(A.position.array); if (A.uv) o.U = r4(A.uv.array); if (A.normal) o.N = r4(A.normal.array);
        let same = true; for (let i = 3; i < col.length && same; i++) same = Math.abs(col[i] - col[i % 3]) < 1e-4;
        if (!same) o.C = r4(col);
      }
      return o; }) };
    for (const e of list) B.put(e.mat, e.geo, e.piece);
    return;
  }
  const { head, A } = scen, pool = new Map(), per = head.groups.map(() => ({ prims: [], n: 0, links: [] }));
  if (!scen.rows) { scen.rows = Array.from({ length: A.sig.length }, () => []); for (let r = 0; r < A.rp.length; r++) scen.rows[A.rp[r]].push(r); }      // a shape has a row for each material it uses
  for (let i = 0; i < A.sig.length; i++) { const s = A.sig[i]; if (!s) continue; if (!pool.has(s)) pool.set(s, []); pool.get(s).push(i); }
  let used = 0;
  for (const e of list) {
    const q = pool.get(sigOf(e.mat.userData.key, e.geo)), i = q && q.length ? q.pop() : -1;
    if (i < 0) { B.put(e.mat, e.geo, e.piece); continue; }
    for (const r of scen.rows[i]) { const g = per[A.pg[r]]; if (e.piece) g.links.push({ piece: e.piece, start: g.n, count: A.pc[r] }); g.prims.push(r); g.n += A.pc[r]; }
    used++; e.geo.dispose();
  }
  BL.scenery = { id, taken: list.length, used };
  per.forEach((g, gi) => {
    if (!g.n) return;
    const P = new Float32Array(g.n * 3), N = new Float32Array(g.n * 3), U = new Float32Array(g.n * 2), C = new Float32Array(g.n * 3);
    let o = 0;
    for (const i of g.prims) {
      const ox = A.po[i * 3], oy = A.po[i * 3 + 1], oz = A.po[i * 3 + 2], q = A.pq[i], s = A.ps[i], n = A.pc[i];
      for (let k = 0; k < n; k++, o++) {
        const v = A.idx[s + k];
        P[o * 3] = ox + A.pos[v * 3] * q; P[o * 3 + 1] = oy + A.pos[v * 3 + 1] * q; P[o * 3 + 2] = oz + A.pos[v * 3 + 2] * q;
        N[o * 3] = A.nrm[v * 3] / 127; N[o * 3 + 1] = A.nrm[v * 3 + 1] / 127; N[o * 3 + 2] = A.nrm[v * 3 + 2] / 127;
        U[o * 2] = A.uv[v * 2] / 1024; U[o * 2 + 1] = A.uv[v * 2 + 1] / 1024;
        C[o * 3] = (A.col[v * 3] / 255) ** 2; C[o * 3 + 1] = (A.col[v * 3 + 1] / 255) ** 2; C[o * 3 + 2] = (A.col[v * 3 + 2] / 255) ** 2;
      }
    }
    const name = head.groups[gi].mat;
    if (!queue.has(name)) queue.set(name, []);
    queue.get(name).push({ P, N, U, C, links: g.links });
  });
}

// ---- buildings ----------------------------------------------------------------------------------------------------
const queue = new Map();                          // material name -> lists of arrays, until blendFlush()
/** Put the object `name` of the model file `file` at (x, y, z), turned by ry about the vertical. */
export function blendPlace(file, name, x, y, z, ry = 0) {
  const set = BL.models[file] && BL.models[file].sets.get(name);
  if (!set) return false;
  const c = Math.cos(ry), s = Math.sin(ry);
  for (const g of set) {
    const n = g.P.length / 3, P = new Float32Array(n * 3), N = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const px = g.P[i * 3], pz = g.P[i * 3 + 2], nx = g.N[i * 3], nz = g.N[i * 3 + 2];
      P[i * 3] = x + px * c + pz * s; P[i * 3 + 1] = y + g.P[i * 3 + 1]; P[i * 3 + 2] = z - px * s + pz * c;
      N[i * 3] = nx * c + nz * s; N[i * 3 + 1] = g.N[i * 3 + 1]; N[i * 3 + 2] = -nx * s + nz * c;
    }
    if (!queue.has(g.mat)) queue.set(g.mat, []);
    queue.get(g.mat).push({ P, N, U: g.U, C: g.C });
  }
  return true;
}
/** The object `name` of a model file as a group of its own, in its own space (the train's vehicles, which the game moves). */
export function blendGroup(file, name, M) {
  const set = BL.models[file] && BL.models[file].sets && BL.models[file].sets.get(name);
  if (!set) return null;
  const grp = new THREE.Group();
  for (const g of set) {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(g.P, 3)); geo.setAttribute('normal', new THREE.BufferAttribute(g.N, 3)); geo.setAttribute('uv', new THREE.BufferAttribute(g.U, 2)); geo.setAttribute('color', new THREE.BufferAttribute(g.C, 3));
    const mat = M[g.mat] || M.flat, m = new THREE.Mesh(geo, mat);
    m.castShadow = !mat.userData.noShadow; m.receiveShadow = !mat.userData.noShadow;
    grp.add(m);
  }
  return grp;
}
/** One mesh per material for everything placed since the last call. They are plain triangles in the game's own
 *  materials, like the merged scenery: shots and sight lines stop at them, and their roofs can be stood on. */
export function blendFlush(M, parent) {
  const out = [];
  for (const [name, list] of queue) {
    let n = 0; for (const a of list) n += a.P.length / 3;
    const P = new Float32Array(n * 3), N = new Float32Array(n * 3), U = new Float32Array(n * 2), C = new Float32Array(n * 3);
    let o = 0;
    const links = [];
    for (const a of list) { P.set(a.P, o * 3); N.set(a.N, o * 3); U.set(a.U, o * 2); C.set(a.C, o * 3); for (const l of a.links || []) links.push({ piece: l.piece, start: o + l.start, count: l.count }); o += a.P.length / 3; }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(P, 3)); g.setAttribute('normal', new THREE.BufferAttribute(N, 3)); g.setAttribute('uv', new THREE.BufferAttribute(U, 2)); g.setAttribute('color', new THREE.BufferAttribute(C, 3));
    const mat = M[name] || M.flat, m = new THREE.Mesh(g, mat);
    m.castShadow = !mat.userData.noShadow; m.receiveShadow = !mat.userData.noShadow;
    for (const l of links) l.piece.ranges.push({ mesh: m, start: l.start, count: l.count });      // a wall that can be broken: these are its triangles
    parent.add(m); out.push(m);
  }
  queue.clear();
  return out;
}
