# Shared helpers for the Blender models of Lone Hand (pilot).
# Everything is written in GAME coordinates (x to the figure's left, y up, +z in front, metres) and
# converted to Blender's (z up, -y in front) when the mesh is made, so numbers can be compared with src/actors.js.
import bpy, math, random
from mathutils import Vector, Matrix, Euler
from mathutils.bvhtree import BVHTree

TAU = math.tau
ZONES = 32                                     # colour zones are stored in the texture coordinate u = (zone + 0.5) / ZONES


def G(p):
    return Vector((p[0], -p[2], p[1]))


def _sgn_pow(c, n):
    return math.copysign(abs(c) ** (2.0 / n), c)


def _cr(p0, p1, p2, p3, t):
    """Catmull-Rom between p1 and p2."""
    return 0.5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t * t + (-p0 + 3 * p1 - 3 * p2 + p3) * t * t * t)


class Soup:
    """The vertices and faces of one model. Per vertex: colour zone, tint (a multiplier baked with the ambient
    occlusion), bone weights, and the group whose faces may shade it. Per face: a material name."""

    def __init__(self):
        self.v, self.f, self.zone, self.tint, self.w, self.grp, self.mat, self.uv = [], [], [], [], [], [], [], []
        self.keys, self.parts, self.part, self.cur = [], ['body'], [], 0     # colour keys by name; the parts of a figure, and the part of each vertex

    def begin(self, name):
        """What is added from here on belongs to the part `name` (a hat, a garment: the game shows the parts a look wears)."""
        if name not in self.parts: self.parts.append(name)
        self.cur = self.parts.index(name)
        return self

    def key(self, name):
        if name not in self.keys: self.keys.append(name)
        return self.keys.index(name)

    def add(self, verts, faces, zone=0, w=None, tint=1.0, grp='body', mat='flat', flip=False, uv=None, auto=True):
        verts = [tuple(p) for p in verts]
        if not verts or not faces:
            return self
        # outward faces: the signed volume about the part's own middle must be positive
        cx = sum(p[0] for p in verts) / len(verts); cy = sum(p[1] for p in verts) / len(verts); cz = sum(p[2] for p in verts) / len(verts)
        vol = 0.0
        for f in faces:
            a = Vector(verts[f[0]]) - Vector((cx, cy, cz))
            for k in range(1, len(f) - 1):
                b = Vector(verts[f[k]]) - Vector((cx, cy, cz)); c = Vector(verts[f[k + 1]]) - Vector((cx, cy, cz))
                vol += a.dot(b.cross(c))
        # game coordinates are right-handed like Blender's, the conversion G() is a rotation: the sign carries over
        if auto and (vol < 0) != flip:
            faces = [tuple(reversed(f)) for f in faces]
        base = len(self.v)
        for i, p in enumerate(verts):
            self.v.append(p)
            z = zone(p) if callable(zone) else zone
            self.zone.append(self.key(z) if isinstance(z, str) else z); self.part.append(self.cur)
            t = tint(p) if callable(tint) else tint
            self.tint.append((t, t, t) if isinstance(t, (int, float)) else tuple(t))
            ww = w(p) if callable(w) else (w[i] if isinstance(w, list) else w)
            self.w.append(dict(ww or {}))
            self.grp.append(grp)
        for k, f in enumerate(faces):
            self.f.append(tuple(base + i for i in f)); self.mat.append(mat)
            self.uv.append(uv[k] if uv else None)          # uv: per face, the (u, v) of each of its corners
        return self


def ring(c, rx, rz, segs, n=2.0, zb=None, u=(1, 0, 0), v=(0, 0, 1), a0=0.0, a1=TAU):
    """Points of one cross-section: a superellipse (n = 2: ellipse, larger: boxier) about c in the plane (u, v).
    zb: the radius on the -v side when it differs. A part of the turn (a0..a1) gives an open strip."""
    c, u, v = Vector(c), Vector(u), Vector(v)
    full = abs((a1 - a0) - TAU) < 1e-6
    out = []
    for i in range(segs if full else segs + 1):
        t = a0 + (a1 - a0) * i / segs
        cs, sn = math.cos(t), math.sin(t)
        out.append(tuple(c + u * (_sgn_pow(cs, n) * rx) + v * (_sgn_pow(sn, n) * (rz if sn >= 0 or zb is None else zb))))
    return out


def loft(keys, segs=14, sub=3, cap0=True, cap1=True, u=(1, 0, 0), v=(0, 0, 1), a0=0.0, a1=TAU, along=(0, 1, 0)):
    """A skin over cross-sections. keys: dicts with 'c' (centre) or 'y' (+ 'cx', 'cz'), 'rx', 'rz', optional 'zb', 'n',
    'a0', 'a1' (opening of a partial strip). Between the keys `sub` sections are interpolated smoothly.
    Returns (verts, faces, t) where t[i] is the position of vertex i along the keys (0 .. len(keys) - 1)."""
    K = []
    for k in keys:
        c = k.get('c') or (k.get('cx', 0.0), k['y'], k.get('cz', 0.0))
        K.append(dict(c=Vector(c), rx=k['rx'], rz=k.get('rz', k['rx']), zb=k.get('zb', k.get('rz', k['rx'])), n=k.get('n', 2.0),
                      a0=k.get('a0', a0), a1=k.get('a1', a1)))
    full = abs((a1 - a0) - TAU) < 1e-6 and all(abs((k['a1'] - k['a0']) - TAU) < 1e-6 for k in K)
    rings, ts = [], []
    N = len(K)
    for i in range(N - 1):
        p0, p1, p2, p3 = K[max(i - 1, 0)], K[i], K[i + 1], K[min(i + 2, N - 1)]
        for s in range(sub):
            t = s / sub
            f = lambda key: _cr(p0[key], p1[key], p2[key], p3[key], t)
            rings.append(dict(c=_cr(p0['c'], p1['c'], p2['c'], p3['c'], t), rx=max(1e-4, f('rx')), rz=max(1e-4, f('rz')), zb=max(1e-4, f('zb')),
                              n=p1['n'] + (p2['n'] - p1['n']) * t, a0=p1['a0'] + (p2['a0'] - p1['a0']) * t, a1=p1['a1'] + (p2['a1'] - p1['a1']) * t))
            ts.append(i + t)
    last = K[-1]; rings.append(dict(last)); ts.append(N - 1.0)
    verts, faces, tt = [], [], []
    per = segs if full else segs + 1
    for r, t in zip(rings, ts):
        verts += ring(r['c'], r['rx'], r['rz'], segs, r['n'], r['zb'], u, v, r['a0'], r['a1'])
        tt += [t] * per
    for j in range(len(rings) - 1):
        for i in range(segs):
            a = j * per + i; b = j * per + (i + 1) % per
            faces.append((a, b, b + per, a + per))
    if full:
        for end, do in ((0, cap0), (len(rings) - 1, cap1)):
            if not do:
                continue
            verts.append(tuple(rings[end]['c'])); tt.append(ts[end]); m = len(verts) - 1
            for i in range(segs):
                faces.append((end * per + i, end * per + (i + 1) % per, m))
    return verts, faces, tt


def ellipsoid(c, r, rot=(0, 0, 0), segs=10, rings=7):
    """An ellipsoid with radii r = (rx, ry, rz), turned by the Euler angles rot (about x, y, z in game coordinates)."""
    M = Euler(rot, 'XYZ').to_matrix()
    c = Vector(c)
    verts, faces = [], []
    for j in range(1, rings):
        ph = math.pi * j / rings
        for i in range(segs):
            th = TAU * i / segs
            p = Vector((r[0] * math.sin(ph) * math.cos(th), r[1] * math.cos(ph), r[2] * math.sin(ph) * math.sin(th)))
            verts.append(tuple(c + M @ p))
    top = len(verts); verts.append(tuple(c + M @ Vector((0, r[1], 0))))
    bot = len(verts); verts.append(tuple(c + M @ Vector((0, -r[1], 0))))
    for j in range(rings - 2):
        for i in range(segs):
            a = j * segs + i; b = j * segs + (i + 1) % segs
            faces.append((a, b, b + segs, a + segs))
    for i in range(segs):
        faces.append((i, (i + 1) % segs, top))
        a = (rings - 2) * segs
        faces.append((a + i, a + (i + 1) % segs, bot))
    return verts, faces


def lathe(profile, c=(0, 0, 0), segs=20, sx=1.0, sz=1.0, mod=None):
    """Turn a profile [(radius, height), ...] about the vertical through c. A radius of 0 gives a pole.
    mod(x, y, z, r, theta) -> (x, y, z) reshapes the result (a curled brim, a creased crown), before c is added."""
    verts, faces, rows = [], [], []
    for (r, y) in profile:
        if r <= 1e-6:
            rows.append([len(verts)]); p = (0.0, y, 0.0)
            if mod: p = mod(p[0], p[1], p[2], 0.0, 0.0)
            verts.append(p)
        else:
            row = []
            for i in range(segs):
                th = TAU * i / segs
                p = (r * math.cos(th) * sx, y, r * math.sin(th) * sz)
                if mod: p = mod(p[0], p[1], p[2], r, th)
                row.append(len(verts)); verts.append(p)
            rows.append(row)
    for a, b in zip(rows, rows[1:]):
        for i in range(segs):
            i2 = (i + 1) % segs
            if len(a) == 1 and len(b) == 1: continue
            if len(a) == 1: faces.append((a[0], b[i], b[i2]))
            elif len(b) == 1: faces.append((a[i], a[i2], b[0]))
            else: faces.append((a[i], a[i2], b[i2], b[i]))
    verts = [(p[0] + c[0], p[1] + c[1], p[2] + c[2]) for p in verts]
    return verts, faces


def box(c, s, rot=(0, 0, 0)):
    """A box of size s = (w, h, d) centred on c."""
    M = Euler(rot, 'XYZ').to_matrix(); c = Vector(c)
    hx, hy, hz = s[0] / 2, s[1] / 2, s[2] / 2
    P = [(-hx, -hy, -hz), (hx, -hy, -hz), (hx, hy, -hz), (-hx, hy, -hz), (-hx, -hy, hz), (hx, -hy, hz), (hx, hy, hz), (-hx, hy, hz)]
    F = [(0, 1, 2, 3), (5, 4, 7, 6), (4, 0, 3, 7), (1, 5, 6, 2), (3, 2, 6, 7), (4, 5, 1, 0)]
    return [tuple(c + M @ Vector(p)) for p in P], F


def xform(verts, rot=(0, 0, 0), move=(0, 0, 0), about=(0, 0, 0)):
    M = Euler(rot, 'XYZ').to_matrix(); a = Vector(about); m = Vector(move)
    return [tuple(a + M @ (Vector(p) - a) + m) for p in verts]


# ------------------------------------------------------------------------------------------------------------------

def make_mesh(name, soup, smooth_angle=50.0):
    me = bpy.data.meshes.new(name)
    me.from_pydata([G(p) for p in soup.v], [], soup.f)
    me.update()
    mats = []
    for m in soup.mat:
        if m not in mats: mats.append(m)
    for m in mats:
        me.materials.append(bpy.data.materials.get(m) or bpy.data.materials.new(m))
    for poly, m in zip(me.polygons, soup.mat):
        poly.material_index = mats.index(m)
    uvl = me.uv_layers.new(name='uv')
    for poly, fuv in zip(me.polygons, soup.uv):
        for k, li in enumerate(poly.loop_indices):
            vi = me.loops[li].vertex_index
            uvl.data[li].uv = (fuv[k][0], 1.0 - fuv[k][1]) if fuv else ((soup.zone[vi] + 0.5) / ZONES, 0.5)     # the exporter turns v over: turned here first, the game gets it as written
    me.shade_smooth()
    me.set_sharp_from_angle(angle=math.radians(smooth_angle))
    ob = bpy.data.objects.new(name, me)
    bpy.context.scene.collection.objects.link(ob)
    return ob


def bake_light(ob, soup, dist=0.25, strength=0.8, samples=56, seed=7, floor=None):
    """Ambient occlusion, per vertex: how much of the sky above a point is hidden by faces nearer than `dist`.
    Only faces of the point's own group count (an arm does not darken the chest: it moves). floor: the height of
    a ground plane that darkens what is close above it. The result, times the tint, becomes the colour attribute."""
    me = ob.data
    me.calc_loop_triangles()
    tris = {}
    for t in me.loop_triangles:
        g = soup.grp[t.vertices[0]]
        tris.setdefault(g, []).append(tuple(t.vertices))
    co = [v.co.copy() for v in me.vertices]
    trees = {g: BVHTree.FromPolygons(co, tl, all_triangles=True) for g, tl in tris.items()}
    rnd = random.Random(seed)
    dirs = []
    while len(dirs) < samples:                         # cosine-weighted directions about +z
        a, b = rnd.random(), rnd.random()
        r, th = math.sqrt(a), TAU * b
        dirs.append(Vector((r * math.cos(th), r * math.sin(th), math.sqrt(max(0.0, 1 - a)))))
    col = me.color_attributes.new(name='Col', type='FLOAT_COLOR', domain='POINT')
    for i, v in enumerate(me.vertices):
        n = v.normal
        if n.length < 1e-6:
            n = Vector((0, 0, 1))
        q = Vector((0, 0, 1)).rotation_difference(n)
        o = v.co + n * 0.004
        tree = trees.get(soup.grp[i])
        occ = 0.0
        if tree:
            for d in dirs:
                hit = tree.ray_cast(o, q @ d, dist)
                if hit[0] is not None:
                    occ += 1.0 - hit[3] / dist
                elif floor is not None:
                    dd = q @ d
                    if dd.z < -1e-4:
                        t = (floor - o.z) / dd.z
                        if 0 < t < dist: occ += 1.0 - t / dist
        ao = 1.0 - strength * occ / samples
        t = soup.tint[i]
        col.data[i].color = (max(0.0, min(1.0, t[0] * ao)), max(0.0, min(1.0, t[1] * ao)), max(0.0, min(1.0, t[2] * ao)), 1.0)
    me.color_attributes.active_color = col
    me.color_attributes.render_color_index = 0


def make_rig(name, bones):
    """bones: [(name, parent or None, (x, y, z) pivot in game coordinates)]. Every bone stands upright with no roll, so
    that in the exported file its rest rotation is none: the game turns the joints by setting rotation.x / .z itself."""
    arm = bpy.data.armatures.new(name)
    ob = bpy.data.objects.new(name, arm)
    bpy.context.scene.collection.objects.link(ob)
    bpy.context.view_layer.objects.active = ob
    bpy.ops.object.mode_set(mode='EDIT')
    for bn, parent, p in bones:
        eb = arm.edit_bones.new(bn)
        eb.head = G(p); eb.tail = G(p) + Vector((0, 0, 0.1)); eb.roll = 0.0
        if parent:
            eb.parent = arm.edit_bones[parent]; eb.use_connect = False
    bpy.ops.object.mode_set(mode='OBJECT')
    return ob


def skin(ob, rig, soup):
    ob.parent = rig
    mod = ob.modifiers.new('Armature', 'ARMATURE'); mod.object = rig
    groups = {b.name: ob.vertex_groups.new(name=b.name) for b in rig.data.bones}
    for i, wd in enumerate(soup.w):
        tot = sum(wd.values()) or 1.0
        for bn, w in wd.items():
            if w > 1e-4: groups[bn].add([i], w / tot, 'REPLACE')


def export(path, objects):
    bpy.ops.object.select_all(action='DESELECT')
    for o in objects:
        o.select_set(True)
    bpy.context.view_layer.objects.active = objects[0]
    bpy.ops.export_scene.gltf(filepath=path, export_format='GLB', use_selection=True, export_apply=False, export_yup=True,
                              export_skins=True, export_animations=False, export_morph=False, export_vertex_color='ACTIVE',
                              export_all_vertex_colors=False, export_active_vertex_color_when_no_material=True,
                              export_materials='EXPORT', export_normals=True, export_texcoords=True, export_all_influences=False)


def reset():
    bpy.ops.wm.read_factory_settings(use_empty=True)


def paint(ob, soup):
    """The tint of every vertex as the colour attribute (before modifiers, which carry it along)."""
    me = ob.data
    col = me.color_attributes.new(name='Col', type='FLOAT_COLOR', domain='POINT')
    for i, t in enumerate(soup.tint):
        col.data[i].color = (t[0], t[1], t[2], 1.0)
    me.color_attributes.active_color = col
    me.color_attributes.render_color_index = 0


def shade(ob, dist=1.2, strength=0.75, samples=64, seed=3, floor=None, floor_k=1.0):
    """Ambient occlusion of a finished mesh against all of its own faces (and a ground plane at height floor),
    multiplied into the colour attribute it already has."""
    me = ob.data
    me.calc_loop_triangles()
    co = [v.co.copy() for v in me.vertices]
    tree = BVHTree.FromPolygons(co, [tuple(t.vertices) for t in me.loop_triangles], all_triangles=True)
    rnd = random.Random(seed)
    dirs = []
    while len(dirs) < samples:
        a, b = rnd.random(), rnd.random()
        r, th = math.sqrt(a), TAU * b
        dirs.append(Vector((r * math.cos(th), r * math.sin(th), math.sqrt(max(0.0, 1 - a)))))
    col = me.color_attributes['Col']
    up = Vector((0, 0, 1))
    for i, v in enumerate(me.vertices):
        n = v.normal if v.normal.length > 1e-6 else up
        q = up.rotation_difference(n)
        o = v.co + n * 0.012
        occ = 0.0
        for d in dirs:
            dd = q @ d
            hit = tree.ray_cast(o, dd, dist)
            if hit[0] is not None:
                occ += 1.0 - hit[3] / dist
            elif floor is not None and dd.z < -1e-4:
                t = (floor - o.z) / dd.z
                if 0 < t < dist: occ += (1.0 - t / dist) * floor_k
        ao = 1.0 - strength * occ / samples
        c = col.data[i].color
        col.data[i].color = (c[0] * ao, c[1] * ao, c[2] * ao, 1.0)
