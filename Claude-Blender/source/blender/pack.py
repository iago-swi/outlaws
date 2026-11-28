# The compact model file of the Blender version (.lhm): everything the game needs and nothing else, in small numbers,
# deflated. A figure library of 14 000 vertices takes about a tenth of what glTF needs.
#   file  = zlib( u32 length of the header | header (JSON, utf-8) | arrays, one after the other, in the header's order )
#   positions: int16 * q;  normals: int8 / 127;  colours: uint8, v = (c / 255) ^ 2;  texture coordinates: int16 / 1024
import bpy, json, math, random, struct, zlib
from array import array
from mathutils import Vector
from mathutils.bvhtree import BVHTree

TAU = math.tau


def _dirs(samples, seed):
    rnd = random.Random(seed); out = []
    while len(out) < samples:                              # cosine-weighted directions about +z
        a, b = rnd.random(), rnd.random()
        r, th = math.sqrt(a), TAU * b
        out.append(Vector((r * math.cos(th), r * math.sin(th), math.sqrt(max(0.0, 1 - a)))))
    return out


def shade_figure(ob, soup, dist=0.22, strength=0.85, samples=48, base=('body',)):
    """Ambient occlusion per vertex -> list of shades (0..1, times the tint's first number). A vertex is shaded by the
    faces of the body and of its own part only (other garments may not be worn), and only by faces of its own group
    (an arm moves: it does not darken the chest)."""
    me = ob.data
    me.calc_loop_triangles()
    co = [v.co.copy() for v in me.vertices]
    base_ids = {soup.parts.index(b) for b in base if b in soup.parts}
    tris = {}
    for t in me.loop_triangles:
        v0 = t.vertices[0]
        tris.setdefault((soup.part[v0], soup.grp[v0]), []).append(tuple(t.vertices))
    trees = {}

    def tree(part, grp):
        k = (part, grp)
        if k not in trees:
            tl = []
            for p in base_ids | {part}:
                tl += tris.get((p, grp), [])
            trees[k] = BVHTree.FromPolygons(co, tl, all_triangles=True) if tl else None
        return trees[k]
    dirs = _dirs(samples, 7)
    up = Vector((0, 0, 1))
    out = []
    for i, v in enumerate(me.vertices):
        n = v.normal if v.normal.length > 1e-6 else up
        q = up.rotation_difference(n)
        o = v.co + n * 0.004
        tr = tree(soup.part[i], soup.grp[i])
        occ = 0.0
        if tr:
            for d in dirs:
                hit = tr.ray_cast(o, q @ d, dist)
                if hit[0] is not None: occ += 1.0 - hit[3] / dist
        out.append(max(0.0, min(1.0, soup.tint[i][0] * (1.0 - strength * occ / samples))))
    return out


def _write(path, head, arrays):
    names = []
    blob = b''
    for name, code, size, data in arrays:
        a = array(code, data)
        names.append([name, code, size, len(a)])
        blob += a.tobytes()
    head['arrays'] = names
    h = json.dumps(head, separators=(',', ':')).encode('utf-8')
    raw = struct.pack('<I', len(h)) + h + blob
    z = zlib.compress(raw, 9)
    with open(path, 'wb') as f:
        f.write(z)
    return len(raw), len(z)


def export_figure(path, ob, soup, shades, bones):
    """One library of parts sharing a skeleton. Vertices and triangles are sorted by part, so that the game can take
    the parts a look wears as ranges."""
    me = ob.data
    me.calc_loop_triangles()
    q = 4.0 / 32767
    bone_ix = {b[0]: i for i, b in enumerate(bones)}
    verts, index = {}, {}                                   # per part: list of vertex records / dict record -> local index
    tris = {}
    for t in me.loop_triangles:
        part = soup.part[t.vertices[0]]
        vl, ix, tl = verts.setdefault(part, []), index.setdefault(part, {}), tris.setdefault(part, [])
        tri = []
        for vi, li in zip(t.vertices, t.loops):
            n = me.corner_normals[li].vector
            # game axes: x = x, y = z (up), z = -y
            rec = (vi, int(round(n.x * 127)), int(round(n.z * 127)), int(round(-n.y * 127)))
            k = ix.get(rec)
            if k is None:
                k = ix[rec] = len(vl); vl.append(rec)
            tri.append(k)
        tl.append(tri)
    pos, nrm, key, shd, bone, bw, idx, parts = [], [], [], [], [], [], [], []
    v0 = 0
    for part in sorted(verts):
        vl = verts[part]
        for (vi, nx, ny, nz) in vl:
            p = soup.v[vi]
            pos += [int(round(p[0] / q)), int(round(p[1] / q)), int(round(p[2] / q))]
            nrm += [nx, ny, nz]
            key.append(soup.zone[vi]); shd.append(int(round(math.sqrt(shades[vi]) * 255)))
            w = sorted(soup.w[vi].items(), key=lambda kv: -kv[1])[:2] or [('hips', 1.0)]
            tot = sum(x[1] for x in w)
            bone += [bone_ix[w[0][0]], bone_ix[w[1][0]] if len(w) > 1 else bone_ix[w[0][0]]]
            bw.append(int(round(w[0][1] / tot * 255)))
        i0 = len(idx)
        for tri in tris[part]:
            idx += [v0 + k for k in tri]
        parts.append({'name': soup.parts[part], 'v0': v0, 'v1': v0 + len(vl), 'i0': i0, 'i1': len(idx)})
        v0 += len(vl)
    head = {'kind': 'figure', 'q': q, 'nv': v0, 'ni': len(idx), 'parts': parts, 'keys': soup.keys,
            'bones': [{'name': b[0], 'parent': b[1], 'p': list(b[2])} for b in bones]}
    arrays = [('pos', 'h', 3, pos), ('idx', 'H' if v0 < 65536 else 'I', 1, idx), ('nrm', 'b', 3, nrm), ('key', 'B', 1, key), ('shade', 'B', 1, shd),
              ('bone', 'B', 2, bone), ('bw', 'B', 1, bw)]
    raw, z = _write(path, head, arrays)
    print('LHM', path.replace('\\', '/').split('/')[-1], 'parts', len(parts), 'vertices', v0, 'triangles', len(idx) // 3, 'bytes', raw, 'deflated', z)


def export_building(path, objects, extra=None):
    """Static scenery. objects: [(name, mesh object)]; each becomes a set of ranges, one per material, of one shared
    vertex pool. The colour attribute 'Col' holds the final colour (paint x shade)."""
    pos, nrm, col, uv, idx, groups = [], [], [], [], [], []
    v0 = 0
    maxabs = 1e-6
    recs_all = []
    for name, ob in objects:
        me = ob.data
        me.calc_loop_triangles()
        colattr = me.color_attributes['Col']
        uvl = me.uv_layers.active.data if me.uv_layers.active else None
        mats = [m.name for m in me.materials]
        by_mat = {}
        for t in me.loop_triangles:
            by_mat.setdefault(mats[t.material_index] if mats else 'flat', []).append(t)
        for mat, tl in by_mat.items():
            ix = {}
            i0 = len(idx)
            for t in tl:
                for vi, li in zip(t.vertices, t.loops):
                    n = me.corner_normals[li].vector
                    u = uvl[li].uv if uvl else (0.0, 0.0)
                    rec = (vi, int(round(n.x * 127)), int(round(n.z * 127)), int(round(-n.y * 127)), int(round(u[0] * 1024)), int(round((1.0 - u[1]) * 1024)))
                    k = ix.get(rec)
                    if k is None:
                        k = ix[rec] = v0 + len(ix)
                        c = me.vertices[vi].co; cc = colattr.data[vi].color
                        recs_all.append((c.x, c.z, -c.y, rec[1], rec[2], rec[3], rec[4], rec[5], cc[0], cc[1], cc[2]))
                        maxabs = max(maxabs, abs(c.x), abs(c.y), abs(c.z))
                    idx.append(k)
            v0 += len(ix)
            groups.append({'name': name, 'mat': mat, 'i0': i0, 'i1': len(idx)})
    q = maxabs / 32767
    enc = lambda c: int(round(math.sqrt(max(0.0, min(1.0, c))) * 255))
    for r in recs_all:
        pos += [int(round(r[0] / q)), int(round(r[1] / q)), int(round(r[2] / q))]
        nrm += [r[3], r[4], r[5]]
        uv += [max(-32768, min(32767, r[6])), max(-32768, min(32767, r[7]))]
        col += [enc(r[8]), enc(r[9]), enc(r[10])]
    head = {'kind': 'building', 'q': q, 'nv': v0, 'ni': len(idx), 'groups': groups}
    if extra: head.update(extra)
    arrays = [('pos', 'h', 3, pos), ('uv', 'h', 2, uv), ('idx', 'H' if v0 < 65536 else 'I', 1, idx), ('nrm', 'b', 3, nrm), ('col', 'B', 3, col)]
    raw, z = _write(path, head, arrays)
    print('LHM', path.replace('\\', '/').split('/')[-1], 'groups', len(groups), 'vertices', v0, 'triangles', len(idx) // 3, 'bytes', raw, 'deflated', z)
