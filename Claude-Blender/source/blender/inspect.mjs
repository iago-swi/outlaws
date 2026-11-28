// node blender/inspect.mjs <chapter> <x> <z> <radius> [min size]: the larger shapes of the dump near a place, one per line
import fs from 'fs';
const [ch, X, Z, R, MIN = '1.2'] = process.argv.slice(2);
const d = JSON.parse(fs.readFileSync(new URL('./dump/' + ch + '.json', import.meta.url)));
const hex = (c) => '#' + c.map((v) => Math.round(255 * (v <= 0.0031308 ? v * 12.92 : 1.055 * v ** (1 / 2.4) - 0.055)).toString(16).padStart(2, '0')).join('');
const f = (v) => +(+v).toFixed(2);
let small = 0; const out = [];
d.prims.forEach((q, i) => {
  const p = q.prim;
  let c, size, t;
  if (p) { c = p.p; t = p.t; size = t === 'box' ? [p.w, p.h, p.d] : t === 'cyl' ? [2 * Math.max(p.rt, p.rb), p.h, 2 * Math.max(p.rt, p.rb)] : [p.w, p.h, p.d]; }
  else { const P = q.P; let lo = [1e9, 1e9, 1e9], hi = [-1e9, -1e9, -1e9]; for (let k = 0; k < P.length; k += 3) for (let a = 0; a < 3; a++) { lo[a] = Math.min(lo[a], P[k + a]); hi[a] = Math.max(hi[a], P[k + a]); } c = lo.map((v, a) => (v + hi[a]) / 2); size = lo.map((v, a) => hi[a] - v); t = 'raw' + P.length / 9; }
  if (Math.hypot(c[0] - X, c[2] - Z) > +R) return;
  if (Math.max(...size) < +MIN) { small++; return; }
  const r = p && p.r ? p.r : [0, 0, 0];
  out.push({ i, y: c[1], s: `${i} ${t} ${q.m} ${hex(q.c)} size ${size.map(f).join('x')} at ${c.map(f).join(',')}` + (r[1] ? ` ry${f(r[1])}` : '') + (r[0] ? ` rx${f(r[0])}` : '') + (r[2] ? ` rz${f(r[2])}` : '') + (p && p.t === 'cyl' ? ` rt${f(p.rt)} rb${f(p.rb)} seg${p.seg}` : '') + (p && p.t === 'croof' ? ` up${p.up} ridge${p.ridge}` : '') + (q.piece ? ' PIECE' : '') + (q.solid ? ' solid' : '') + ` g${q.g}` });
});
out.sort((a, b) => a.i - b.i);
console.log(out.map((o) => o.s).join('\n'));
console.log('... and', small, 'smaller shapes');
