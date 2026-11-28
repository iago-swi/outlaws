# The rest of the scenery of a chapter, reworked in Blender. The game builds its churches, shrines, towers, barns, fences,
# bridges and furniture from boxes, cylinders, prisms and a few free shapes; with ?dump in the address it writes them
# down (blender/dump/<chapter>.json, see sceneryFor() in src/blend.js). Here every shape gets its Blender version, by rule:
#   a wooden wall, floor, door or table top   boards in relief, each a shade of its own, dark joints between them
#   a post, a beam, a block                   its edges planed off (bevel), normals weighted so that flat sides stay flat
#   a cylinder                                more sides, smooth
#   a gable roof, a curved roof               a thickness, boards underneath, an edge to the eaves
#   anything else                             as it is
# then ambient occlusion is baked over the whole place, with dirt and damp where things meet the ground.
# The game finds the Blender version of a shape by the shape's signature, so each one is exported as a range of its own.
import bpy, json, math, os, random
from mathutils import Vector, Matrix
from mathutils.bvhtree import BVHTree
from lib import Soup, make_mesh, paint, reset, G
from pack import export_scenery

rnd = random.Random(11)
TAU = math.tau
WOODS = ('wood', 'woodH')


class Bag:
    """Two meshes in the making (flat faces; woodwork to bevel) and, for every face, the shape it belongs to."""
    def __init__(self):
        self.S, self.T = Soup(), Soup()
        self.fs, self.ft = [], []

    def add(self, bevel, pid, verts, faces, col, mat, uv, auto=False):
        soup, fl = (self.T, self.ft) if bevel else (self.S, self.fs)
        n0 = len(soup.f)
        soup.add(verts, faces, tint=col, mat=mat, uv=uv, auto=auto)
        fl += [pid] * (len(soup.f) - n0)


def matrix(p):
    """Position, rotation (three.js order YXZ) and scale of a shape, as one matrix in game coordinates."""
    r = p.get('r') or [0, 0, 0]
    M = Matrix.Translation(Vector(p.get('p') or (0, 0, 0))) @ Matrix.Rotation(r[1], 4, 'Y') @ Matrix.Rotation(r[0], 4, 'X') @ Matrix.Rotation(r[2], 4, 'Z')
    s = p.get('s', 1)
    if isinstance(s, (int, float)): s = (s, s, s)
    return M @ Matrix.Diagonal((s[0], s[1], s[2], 1.0))


def tf(M, pts):
    return [tuple(M @ Vector(q)) for q in pts]


def grid(bag, bevel, pid, M, p0, du, dv, n_out, col, mat, uvf, step=1.3):
    """A rectangle p0 + s du + t dv in the shape's own space, cut into a grid, facing n_out."""
    p0, du, dv = Vector(p0), Vector(du), Vector(dv)
    if du.cross(dv).dot(Vector(n_out)) < 0: p0, du, dv = p0 + du, -du, dv
    nu, nv = max(1, math.ceil(du.length / step)), max(1, math.ceil(dv.length / step))
    P = [p0 + du * (i / nu) + dv * (j / nv) for j in range(nv + 1) for i in range(nu + 1)]
    F, U = [], []
    for j in range(nv):
        for i in range(nu):
            a = j * (nu + 1) + i
            f = (a, a + 1, a + nu + 2, a + nu + 1)
            F.append(f); U.append([uvf(P[k]) for k in f])
    bag.add(bevel, pid, tf(M, P), F, col, mat, U)


AXES = {0: (2, 1), 1: (0, 2), 2: (0, 1)}            # the face across axis a: its texture runs u along AXES[a][0], v along AXES[a][1] (as boxGeo in src/build.js)


def box_uv(a, size, tile):
    ua, va = AXES[a]
    return lambda q: ((q[ua] + size[ua] / 2) / tile, (q[va] + size[va] / 2) / tile)


def unit(a, s=1.0):
    v = [0.0, 0.0, 0.0]; v[a] = s
    return Vector(v)


def plain_box(bag, pid, M, size, col, mat, tile, step=1.3, skip=()):
    for a in range(3):
        ua, va = AXES[a]
        for sgn in (1, -1):
            if (a, sgn) in skip: continue
            p0 = unit(a, sgn * size[a] / 2) - unit(ua, size[ua] / 2) - unit(va, size[va] / 2)
            grid(bag, False, pid, M, p0, unit(ua, size[ua]), unit(va, size[va]), unit(a, sgn), col, mat, box_uv(a, size, tile), step)


def bar_box(bag, pid, M, size, col, mat, tile, seg=1.6):
    """A box with shared corners, cut across its length: Blender bevels it."""
    ax = max(range(3), key=lambda k: size[k]); a1, a2 = [k for k in range(3) if k != ax]
    n = max(1, math.ceil(size[ax] / seg))
    P = []
    for i in range(n + 1):
        for (s1, s2) in ((-1, -1), (1, -1), (1, 1), (-1, 1)):
            q = [0.0, 0.0, 0.0]; q[ax] = -size[ax] / 2 + size[ax] * i / n; q[a1] = s1 * size[a1] / 2; q[a2] = s2 * size[a2] / 2
            P.append(Vector(q))
    F = []
    for i in range(n):
        for k in range(4):
            a, b = i * 4 + k, i * 4 + (k + 1) % 4
            F.append((a, b, b + 4, a + 4))
    F.append((3, 2, 1, 0)); F.append((n * 4, n * 4 + 1, n * 4 + 2, n * 4 + 3))
    U = []
    for f in F:
        nrm = (P[f[1]] - P[f[0]]).cross(P[f[2]] - P[f[0]])
        a = max(range(3), key=lambda k: abs(nrm[k]))
        uvf = box_uv(a, size, tile)
        U.append([uvf(P[k]) for k in f])
    bag.add(True, pid, tf(M, P), F, col, mat, U, auto=True)


def boards(bag, pid, M, size, col, mat, tile):
    """A wooden wall, floor, door or table top: boards in relief on its two large faces."""
    a = min(range(3), key=lambda k: size[k])                      # the thin axis
    ua, va = AXES[a]
    along, cross = (va, ua) if mat == 'wood' else (ua, va)        # 'wood': the planks of the texture run along v; 'woodH': along u
    bw = tile / 8.0
    nb = max(1, math.ceil(size[cross] / bw - 1e-6))
    uvf = box_uv(a, size, tile)
    dark = tuple(c * 0.4 for c in col)
    for sgn in (1, -1):
        base = unit(a, sgn * size[a] / 2)
        p0 = base - unit(ua, size[ua] / 2) - unit(va, size[va] / 2)
        grid(bag, False, pid, M, p0, unit(ua, size[ua]), unit(va, size[va]), unit(a, sgn), dark, mat, uvf, 50)       # the joints: the wall itself, in shade
        for k in range(nb):
            c0 = -size[cross] / 2 + k * bw; c1 = min(c0 + bw, size[cross] / 2)
            if c1 - c0 < 0.03: continue
            gap = min(0.009, (c1 - c0) * 0.2)
            lift = 0.006 + (0.004 if k % 2 else 0.0)
            j = 0.86 + 0.26 * rnd.random()
            q0 = base + unit(a, sgn * lift) + unit(cross, c0 + gap) - unit(along, size[along] / 2)
            grid(bag, False, pid, M, q0, unit(cross, c1 - c0 - 2 * gap), unit(along, size[along]), unit(a, sgn), tuple(min(1.0, c * j) for c in col), mat, uvf, 1.6)
    skip = {(a, 1), (a, -1)}
    plain_box(bag, pid, M, size, tuple(c * 0.8 for c in col), mat, tile, 50, skip)


def cylinder(bag, pid, M, p, col, mat):
    rt, rb, h, seg0, tile = p['rt'], p['rb'], p['h'], p.get('seg', 10), p.get('tile', 1)
    r = max(rt, rb)
    seg = max(seg0, 16 if r >= 0.3 else 10)
    if seg0 <= 6 and r > 0.12: seg = seg0                          # few sides on purpose (a hexagonal post, a staddle): kept
    rep = max(1, round(6.28 * r / tile))
    P, F, U = [], [], []
    for j, (rr, y) in enumerate(((rb, -h / 2), (rt, h / 2))):
        for i in range(seg):
            a = TAU * i / seg
            P.append(Vector((rr * math.sin(a), y, rr * math.cos(a))))
    for i in range(seg):
        i2 = (i + 1) % seg
        F.append((i, i2, seg + i2, seg + i))
        U.append([(i / seg * rep, 0), ((i + 1) / seg * rep, 0), ((i + 1) / seg * rep, h / tile), (i / seg * rep, h / tile)])
    bag.add(False, pid, tf(M, P), F, col, mat, U, auto=True)
    if p.get('open'): return
    for rr, y, s in ((rt, h / 2, 1), (rb, -h / 2, -1)):
        if rr < 1e-4: continue
        ring = [Vector((rr * math.sin(TAU * i / seg), y, rr * math.cos(TAU * i / seg))) for i in range(seg)]
        if s < 0: ring.reverse()
        bag.add(False, pid, tf(M, ring), [tuple(range(seg))], col, mat, [[(q.x / tile, q.z / tile) for q in ring]])


def prism(bag, pid, M, p, col, mat):
    """prismGeo: a gable, ridge along z, base at y = 0. Roofing gets a thickness and boards underneath."""
    w, h, d, tile = p['w'], p['h'], p['d'], p.get('tile', 1)
    x, z = w / 2, d / 2
    sl = math.hypot(x, h)
    roof = mat in ('shingle', 'thatch', 'kawara')
    def slope(sx, top):
        p0 = Vector((sx * x, 0, -sx * z)) if top else Vector((sx * x, 0, sx * z))
        du = Vector((0, 0, sx * d)) if top else Vector((0, 0, -sx * d))
        dv = Vector((-sx * x, h, 0))
        return p0, du, dv
    uvt = lambda q: ((q.z + z) / tile, math.hypot(x - abs(q.x), q.y) / tile)
    for sx in (-1, 1):
        p0, du, dv = slope(sx, True)
        grid(bag, False, pid, M, p0, du, dv, Vector((sx * h, x, 0)), col, mat, uvt, 1.4)
    if roof and sl > 0.5:
        t = 0.1 if mat != 'thatch' else 0.28
        nx, ny = h / sl * t, x / sl * t
        under = (0.16, 0.105, 0.062)                                                       # boards under the roofing
        wood = (0.085, 0.052, 0.03)
        for sx in (-1, 1):
            p0, du, dv = slope(sx, False)
            p0 = p0 + Vector((-sx * nx, -ny, 0)); dv = dv + Vector((sx * nx, 0, 0))
            grid(bag, False, pid, M, p0, du, dv, Vector((-sx * h, -x, 0)), under, 'woodH', lambda q: (q.z / 2, q.x / 2 + q.y), 1.4)
            e0 = Vector((sx * x, 0, -z))                                                      # the edge of the eaves
            grid(bag, False, pid, M, e0, Vector((0, 0, d)), Vector((-sx * nx, -ny, 0)), Vector((sx, -0.2, 0)), tuple(c * 0.6 for c in col), mat, uvt, 50)
            for sz in (-1, 1):                                                                # the cut edge at each gable
                a, b = Vector((sx * x, 0, sz * z)), Vector((0, h, sz * z))
                P4 = [a, b, b + Vector((0, -ny - 0.02, 0)), a + Vector((-sx * nx, -ny, 0))]
                if (P4[1] - P4[0]).cross(P4[3] - P4[0]).z * sz < 0: P4.reverse()
                bag.add(False, pid, tf(M, P4), [(0, 1, 2, 3)], tuple(c * 0.6 for c in col), mat, [[uvt(q) for q in P4]])
                if w > 2.5:                                                                   # a barge board along the edge of each gable
                    mid = Vector((sx * x / 2, h / 2 - 0.1, sz * (z + 0.03)))
                    M2 = M @ Matrix.Translation(mid) @ Matrix.Rotation(math.atan2(h, -sx * x) if sx > 0 else math.atan2(h, x), 4, 'Z')
                    bar_box(bag, pid, M2, (sl + 0.1, 0.2, 0.05), wood, 'wood', 2.0)
        if w > 2.5: bar_box(bag, pid, M @ Matrix.Translation(Vector((0, h + 0.02, 0))), (0.16, 0.1, d + 0.1), wood, 'woodH', 2.0)           # the ridge board
    ends = tuple(c * (0.8 if roof else 1.0) for c in col)
    inset = 0.06 if roof and d > 0.6 else 0.0
    for sz in (-1, 1):
        P3 = [Vector((-x, 0, sz * (z - inset))), Vector((x, 0, sz * (z - inset))), Vector((0, h, sz * (z - inset)))]
        if sz < 0: P3.reverse()
        bag.add(False, pid, tf(M, P3), [(0, 1, 2)], ends, mat, [[((q.x + x) / tile, q.y / tile) for q in P3]])


def croof(bag, pid, M, p, col, mat):
    """curvedRoofGeo: the game's own curved surface, with an edge to the eaves and an underside behind it."""
    w, d, h, ridge, up, curve, tile = p['w'], p['d'], p['h'], p.get('ridge', 0.45), p.get('up', 0.7), p.get('curve', 1.9), p.get('tile', 1)
    ex, ez, rx = w / 2, d / 2, w / 2 * ridge
    sides = [((-rx, 0), (rx, 0), (-ex, ez), (ex, ez)), ((rx, 0), (-rx, 0), (ex, -ez), (-ex, -ez)), ((-rx, 0), (-rx, 0), (-ex, -ez), (-ex, ez)), ((rx, 0), (rx, 0), (ex, ez), (ex, -ez))]
    def pt(sd, s, t, drop=0.0):
        tx, tz = sd[0][0] + (sd[1][0] - sd[0][0]) * s, sd[0][1] + (sd[1][1] - sd[0][1]) * s
        bx, bz = sd[2][0] + (sd[3][0] - sd[2][0]) * s, sd[2][1] + (sd[3][1] - sd[2][1]) * s
        return Vector((tx + (bx - tx) * t, h * (1 - t) ** curve + up * abs(2 * s - 1) ** 4 * t ** 3 - drop, tz + (bz - tz) * t))
    NS, NT = 10, 7
    edge = 0.3 if mat == 'thatch' else 0.11
    for sd in sides:
        ln = math.hypot(sd[3][0] - sd[2][0], sd[3][1] - sd[2][1]) / tile
        sl = math.hypot(h, math.hypot(sd[2][0] - sd[0][0], sd[2][1] - sd[0][1])) / tile
        V = [pt(sd, i / NS, j / NT) for i in range(NS + 1) for j in range(NT + 1)]
        UV = [(i / NS * ln, j / NT * sl) for i in range(NS + 1) for j in range(NT + 1)]
        ix = lambda i, j: i * (NT + 1) + j
        a, b, c = V[ix(NS // 2, 1)], V[ix(NS // 2, 2)], V[ix(NS // 2 + 1, 2)]
        up_ok = (b - a).cross(c - a).y >= 0
        F, FU = [], []
        for i in range(NS):
            for j in range(NT):
                for tri in ((ix(i, j), ix(i, j + 1), ix(i + 1, j + 1)), (ix(i, j), ix(i + 1, j + 1), ix(i + 1, j))):
                    if (V[tri[1]] - V[tri[0]]).cross(V[tri[2]] - V[tri[0]]).length < 1e-9: continue
                    if not up_ok: tri = (tri[0], tri[2], tri[1])
                    F.append(tri); FU.append([UV[k] for k in tri])
        bag.add(False, pid, tf(M, V), F, col, mat, FU)
        for i in range(NS):
            s0, s1 = i / NS, (i + 1) / NS
            a, e, a2, e2 = pt(sd, s0, 1.0), pt(sd, s1, 1.0), pt(sd, s0, 1.0, edge), pt(sd, s1, 1.0, edge)
            b2, c2 = pt(sd, s0, 0.5, edge + 0.1), pt(sd, s1, 0.5, edge + 0.1)
            P4 = [a, e, e2, a2]
            n = (P4[1] - P4[0]).cross(P4[3] - P4[0])
            if n.x * (a.x + e.x) + n.z * (a.z + e.z) < 0: P4 = [P4[1], P4[0], P4[3], P4[2]]
            bag.add(False, pid, tf(M, P4), [(0, 1, 2, 3)], tuple(c * 0.62 for c in col), mat, [[(0, 0), (0.3, 0), (0.3, 0.1), (0, 0.1)]])
            un = [a2, b2, c2, e2]
            if (un[1] - un[0]).cross(un[3] - un[0]).y > 0: un.reverse()
            bag.add(False, pid, tf(M, un), [(0, 1, 2, 3)], tuple(c * 0.36 for c in col), mat, [[(0, 0), (0.8, 0), (0.8, 0.5), (0, 0.5)]])


def raw(bag, pid, q, col, mat):
    """A free shape, as the game made it: its triangles, with corners that share a place and a colour joined so that it shades smoothly."""
    P, U, C = q['P'], q.get('U'), q.get('C')
    ix, V, VC, F, FU = {}, [], [], [], []
    for t in range(len(P) // 9):
        f, fu = [], []
        for k in range(3):
            i = t * 3 + k
            pos = (P[i * 3], P[i * 3 + 1], P[i * 3 + 2])
            c = (C[i * 3], C[i * 3 + 1], C[i * 3 + 2]) if C else col
            key = (round(pos[0], 3), round(pos[1], 3), round(pos[2], 3), round(c[0], 2), round(c[1], 2), round(c[2], 2))
            if key not in ix: ix[key] = len(V); V.append(pos); VC.append(c)
            f.append(ix[key]); fu.append((U[i * 2], U[i * 2 + 1]) if U else (0.0, 0.0))
        if len(set(f)) == 3: F.append(tuple(f)); FU.append(fu)
    if not F: return
    soup, fl = bag.S, bag.fs
    n0, v0 = len(soup.f), len(soup.v)
    soup.add(V, F, tint=col, mat=mat, uv=FU, auto=False)
    for k, c in enumerate(VC): soup.tint[v0 + k] = c
    fl += [pid] * (len(soup.f) - n0)


def window(bag, pid, corners):
    """A frame round a window pane (the pane stays as the game made it): jambs, a head, a sill, a cross of bars."""
    c = sum((Vector(q) for q in corners), Vector()) / len(corners)
    n, best = None, 0.0
    for i in range(0, len(corners) - 2, 3):
        a, b, d = Vector(corners[i]), Vector(corners[i + 1]), Vector(corners[i + 2])
        cr = (b - a).cross(d - a)
        if cr.length > best: best, n = cr.length, cr.normalized()
    if n is None: return
    up = Vector((0, 1, 0))
    ev = up - n * up.dot(n)
    if ev.length < 0.2: return                                                               # a pane lying flat: no frame
    ev.normalize(); eu = ev.cross(n)
    hu = max(abs((Vector(q) - c).dot(eu)) for q in corners); hv = max(abs((Vector(q) - c).dot(ev)) for q in corners); t = 2 * max(abs((Vector(q) - c).dot(n)) for q in corners)
    if hu < 0.2 or hv < 0.2 or hu > 2.5 or hv > 2.5: return
    F = Matrix(((eu.x, ev.x, n.x, c.x), (eu.y, ev.y, n.y, c.y), (eu.z, ev.z, n.z, c.z), (0, 0, 0, 1)))
    wood, pale = (0.045, 0.028, 0.018), (0.55, 0.5, 0.4)
    for (pos, size, col2) in (((hu + 0.035, 0, 0), (0.07, 2 * hv + 0.14, t + 0.06), wood), ((-hu - 0.035, 0, 0), (0.07, 2 * hv + 0.14, t + 0.06), wood),
                              ((0, hv + 0.04, 0), (2 * hu + 0.2, 0.08, t + 0.09), wood), ((0, -hv - 0.035, 0), (2 * hu + 0.26, 0.07, t + 0.16), wood),
                              ((0, 0, 0), (0.032, 2 * hv, t + 0.03), pale), ((0, 0, 0), (2 * hu, 0.032, t + 0.03), pale)):
        bar_box(bag, pid, F @ Matrix.Translation(Vector(pos)), size, col2, 'wood', 2.0)


def build_bag(prims):
    bag = Bag()
    for pid, q in enumerate(prims):
        col, mat, p = tuple(q['c']), q['m'], q.get('prim')
        if not p:
            raw(bag, pid, q, col, mat)
            if mat == 'window': window(bag, pid, [(q['P'][i], q['P'][i + 1], q['P'][i + 2]) for i in range(0, len(q['P']), 3)])
            continue
        M = matrix(p)
        t = p['t']
        if t == 'box':
            size = (p['w'], p['h'], p['d']); tile = p.get('tile', 1)
            s = sorted(size)
            if mat == 'window':
                plain_box(bag, pid, M, size, col, mat, tile, 50)
                cs = [tuple(M @ Vector((a * size[0] / 2, b * size[1] / 2, c * size[2] / 2))) for a in (-1, 1) for b in (-1, 1) for c in (-1, 1)]
                tri = [cs[0], cs[1], cs[2], cs[1], cs[3], cs[2], cs[4], cs[6], cs[5], cs[5], cs[6], cs[7], cs[0], cs[4], cs[1], cs[1], cs[4], cs[5], cs[2], cs[3], cs[6], cs[3], cs[7], cs[6],
                       cs[0], cs[2], cs[4], cs[2], cs[6], cs[4], cs[1], cs[5], cs[3], cs[3], cs[5], cs[7]]
                window(bag, pid, tri); continue
            if mat in WOODS and s[0] <= 0.5 and s[1] >= 0.9 and s[0] >= 0.012: boards(bag, pid, M, size, col, mat, tile)
            elif s[1] >= 1.5 and s[0] >= 0.012: plain_box(bag, pid, M, size, col, mat, tile)                    # a wall, a floor, a large block: its faces in a grid, for the shading
            elif s[0] >= 0.07 and s[2] >= 0.3: bar_box(bag, pid, M, size, col, mat, tile)
            else: plain_box(bag, pid, M, size, col, mat, tile, 50)
        elif t == 'cyl': cylinder(bag, pid, M, p, col, mat)
        elif t == 'prism': prism(bag, pid, M, p, col, mat)
        elif t == 'croof': croof(bag, pid, M, p, col, mat)
    return bag


def face_attr(ob, values):
    a = ob.data.attributes.new('prim', 'INT', 'FACE')
    a.data.foreach_set('value', values)


def shade(ob, prims, dist=1.0, strength=0.62, samples=32):
    """Ambient occlusion per vertex against the whole place and against the ground under each shape; dirt near the ground on wood, plaster and stone."""
    me = ob.data
    me.calc_loop_triangles()
    co = [v.co.copy() for v in me.vertices]
    tree = BVHTree.FromPolygons(co, [tuple(t.vertices) for t in me.loop_triangles], all_triangles=True)
    pa = me.attributes['prim'].data
    vp = [0] * len(me.vertices)
    for poly in me.polygons:
        k = pa[poly.index].value
        for vi in poly.vertices: vp[vi] = k
    r = random.Random(3); dirs = []
    while len(dirs) < samples:
        a, b = r.random(), r.random()
        rr, th = math.sqrt(a), TAU * b
        dirs.append(Vector((rr * math.cos(th), rr * math.sin(th), math.sqrt(max(0.0, 1 - a)))))
    col = me.color_attributes['Col']
    up = Vector((0, 0, 1))
    # read everything first and write the colours in one go: writing an attribute makes Blender work out the normals again
    normals = [v.normal.copy() for v in me.vertices]
    cols = [0.0] * (len(me.vertices) * 4)
    col.data.foreach_get('color', cols)
    for i in range(len(co)):
        n = normals[i] if normals[i].length > 1e-6 else up
        qt = up.rotation_difference(n)
        o = co[i] + n * 0.012
        q = prims[vp[i]]
        g = q.get('g')
        occ = 0.0
        for d in dirs:
            dd = qt @ d
            hit = tree.ray_cast(o, dd, dist)
            if hit[0] is not None: occ += 1.0 - hit[3] / dist
            elif g is not None and dd.z < -1e-4:
                t = (g - o.z) / dd.z
                if 0 < t < dist: occ += (1.0 - t / dist) * 0.5
        k = 1.0 - strength * occ / samples
        if g is not None and q['m'] in ('wood', 'woodH', 'plaster', 'stone') and n.z < 0.7:
            k *= 0.8 + 0.2 * min(1.0, max(0.0, (co[i].z - g) / 0.7))
        cols[i * 4] *= k; cols[i * 4 + 1] *= k; cols[i * 4 + 2] *= k
    col.data.foreach_set('color', cols)

def build(chapter, out):
    here = os.path.dirname(os.path.abspath(__file__))
    prims = json.load(open(os.path.join(here, 'dump', chapter + '.json')))['prims']
    import time; T0 = time.time(); tick = lambda m: print('TIME', chapter, m, round(time.time() - T0, 1), flush=True)
    reset()
    bag = build_bag(prims)
    tick('shapes: %d + %d faces' % (len(bag.S.f), len(bag.T.f)))
    a = make_mesh(chapter, bag.S, smooth_angle=44.0); paint(a, bag.S); face_attr(a, bag.fs)
    if bag.T.f:
        b = make_mesh(chapter + 'Trim', bag.T, smooth_angle=44.0); paint(b, bag.T); face_attr(b, bag.ft)
        bpy.context.view_layer.objects.active = b
        mod = b.modifiers.new('Bevel', 'BEVEL')
        mod.width = 0.012; mod.segments = 1; mod.limit_method = 'ANGLE'; mod.angle_limit = math.radians(40)
        bpy.ops.object.modifier_apply(modifier='Bevel')
        b.data.shade_smooth()
        mod = b.modifiers.new('Normals', 'WEIGHTED_NORMAL'); mod.keep_sharp = False; mod.weight = 60; mod.mode = 'FACE_AREA'
        bpy.ops.object.modifier_apply(modifier='Normals')
        bpy.ops.object.select_all(action='DESELECT')
        a.select_set(True); b.select_set(True); bpy.context.view_layer.objects.active = a
        bpy.ops.object.join()
    tick('meshes: %d vertices' % len(a.data.vertices))
    shade(a, prims)
    tick('shaded')
    export_scenery(out, a, prims)
    tick('written')
