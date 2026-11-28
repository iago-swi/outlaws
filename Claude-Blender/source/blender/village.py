# Kagemori and Uri: the houses the game builds with house() (src/levels/japan.js), chalet() and stadel()
# (src/levels/swiss.js). Same plans and sizes: the game keeps its colliders, its paper screens (which can be broken),
# its stairs, furniture, roof stones and flowers; walls, timber, roofs, balconies, shutters and doors come from here.
# Origin of a house: its middle at the level the game builds it on; x along its width, y up, +z its front.
import math, random
from mathutils import Vector
from lib import Soup, loft
from town import lin, face, bar, prism, cut, finish

rnd = random.Random(7)
DARK = 0x2e2018


def tri_face(S, mat, pts, uvs, col):
    S.add(pts, [(0, 1, 2)], tint=col, mat=mat, uv=[uvs], auto=False)


def quad(S, mat, a, b, c, d, col, uv=((0, 0), (1, 0), (1, 1), (0, 1))):
    S.add([a, b, c, d], [(0, 1, 2, 3)], tint=col, mat=mat, uv=[list(uv)], auto=False)


def wall(S, mat, origin, right, out, width, y0, y1, holes, col, tile=3.0, step=1.2):
    """A wall face with openings. origin: its lower left corner seen from the side it faces; right x up = out."""
    origin, right = Vector(origin), Vector(right)
    for (xa, xb, ya, yb) in cut(width, y0, y1, holes):
        face(S, mat, origin + right * xa + Vector((0, ya, 0)), right * (xb - xa), (0, yb - ya, 0), col, tile=tile, step=step, uo=xa / tile, vo=ya / tile)


def room_walls(S, T_, w, d, t, y0, y1, openings, mat_out, col_out, mat_in, col_in, frame=None, tile=3.0, y_in0=None):
    """The four walls of room() (outer size w x d, thickness t), outside and inside faces, with their openings
    openings: {side: [(at, width, y bottom, y top)]}, sides as in room(): 's' = +z, 'n' = -z, 'e' = +x, 'w' = -x; at: along x (n, s) or z (e, w).
    frame: the colour of a wooden frame set in every opening."""
    hw, hd = w / 2, d / 2
    sides = {'s': ((-hw, 0, hd), (1, 0, 0), (0, 0, 1), w, lambda a: a + hw), 'n': ((hw, 0, -hd), (-1, 0, 0), (0, 0, -1), w, lambda a: hw - a),
             'e': ((hw, 0, hd), (0, 0, -1), (1, 0, 0), d, lambda a: hd - a), 'w': ((-hw, 0, -hd), (0, 0, 1), (-1, 0, 0), d, lambda a: a + hd)}
    yi = y0 if y_in0 is None else y_in0
    for side, (og, right, out, width, pos) in sides.items():
        ops = openings.get(side, [])
        holes = [(pos(a) - ww / 2, pos(a) + ww / 2, ya, yb) for (a, ww, ya, yb) in ops]
        wall(S, mat_out, og, right, out, width, y0, y1, holes, col_out, tile)
        og2 = Vector(og) - Vector(out) * t                                   # the inside face, seen from the room: it runs the other way
        r2 = Vector(right) * -1
        start = og2 + Vector(right) * (width - t)
        wall(S, mat_in, start, r2, Vector(out) * -1, width - 2 * t, yi, y1, [(width - t - b, width - t - a, ya, yb) for (a, b, ya, yb) in holes], col_in, tile)
        if frame is None: continue
        for (a, b, ya, yb) in holes:                                         # a frame through the thickness of the wall
            for xx in (a, b):
                p = Vector(og) + Vector(right) * xx
                q = p - Vector(out) * t
                lo = (min(p.x, q.x) - (0.05 if abs(right[0]) > 0.5 else 0.03), ya, min(p.z, q.z) - (0.05 if abs(right[2]) > 0.5 else 0.03))
                hi = (max(p.x, q.x) + (0.05 if abs(right[0]) > 0.5 else 0.03), yb, max(p.z, q.z) + (0.05 if abs(right[2]) > 0.5 else 0.03))
                bar(T_, 'wood', lo, hi, lin(frame))
            for yy in ((ya, yb) if ya > y0 + 0.3 else (yb,)):
                p = Vector(og) + Vector(right) * (a - 0.06); q = Vector(og) + Vector(right) * (b + 0.06) - Vector(out) * t
                lo = (min(p.x, q.x) - 0.03, yy - 0.05, min(p.z, q.z) - 0.03); hi = (max(p.x, q.x) + 0.03, yy + 0.05, max(p.z, q.z) + 0.03)
                bar(T_, 'woodH', lo, hi, lin(frame))


def gable_roof(S, T_, w, h, d, y, zc, col, wood, thick=0.14, rafters=True):
    """prismGeo(w, h, d) as the game places it (ridge along z, eaves at +-w/2 on height y), with a thickness:
    shingles above, boards below, barge boards at both ends, the ridge, the ends of the purlins under the eaves."""
    hw, z0, z1 = w / 2, zc - d / 2, zc + d / 2
    sl = math.hypot(hw, h)
    nx, ny = h / sl * thick, hw / sl * thick                                  # the offset of the underside
    face(S, 'shingle', (-hw, y, z0), (0, 0, d), (hw, h, 0), lin(col), tile=3.0, step=1.3)
    face(S, 'shingle', (hw, y, z1), (0, 0, -d), (-hw, h, 0), lin(col), tile=3.0, step=1.3)
    face(S, 'woodH', (-hw + nx, y - ny, z1), (0, 0, -d), (hw - nx, h, 0), lin(wood, 0.8), step=1.3)
    face(S, 'woodH', (hw - nx, y - ny, z0), (0, 0, d), (-(hw - nx), h, 0), lin(wood, 0.8), step=1.3)
    for s in (-1, 1):
        bar(T_, 'woodH', (s * hw - 0.05, y - ny - 0.04, z0), (s * hw + 0.05, y + 0.03, z1), lin(wood, 0.7))           # eaves boards
        for zz in (z0, z1):                                                   # barge boards
            n = 4
            for i in range(n):
                xa, xb = s * hw * (1 - i / n), s * hw * (1 - (i + 1) / n)
                ya, yb = y + h * i / n, y + h * (i + 1) / n
                za, zb = (zz - 0.06, zz + 0.04) if zz == z1 else (zz - 0.04, zz + 0.06)
                prism(T_, 'wood', [(xa, ya - 0.2, za), (xb, yb - 0.2, za), (xb, yb + 0.04, za), (xa, ya + 0.04, za),
                                   (xa, ya - 0.2, zb), (xb, yb - 0.2, zb), (xb, yb + 0.04, zb), (xa, ya + 0.04, zb)], lin(wood, 0.75))
    bar(T_, 'woodH', (-0.1, y + h - 0.05, z0 - 0.02), (0.1, y + h + 0.06, z1 + 0.02), lin(wood, 0.7))
    if rafters:                                                                # purlins: the roof's long timbers show at both gables
        bar(T_, 'woodH', (-0.09, y + h - 0.34, z0 + 0.12), (0.09, y + h - 0.16, z1 - 0.12), lin(wood, 0.6))
        for f in (0.34, 0.68):
            for s in (-1, 1):
                x, yy = s * hw * (1 - f), y + h * f - 0.3
                bar(T_, 'woodH', (x - 0.09, yy, z0 + 0.12), (x + 0.09, yy + 0.18, z1 - 0.12), lin(wood, 0.6))


def logs(T_, w, d, t, y0, y1, openings, col, course=0.3):
    """Walls of squared logs, laid course by course and crossing at the corners (each sticks out past the wall it meets).
    Sizes and openings as room_walls()."""
    hw, hd = w / 2, d / 2
    n = max(1, round((y1 - y0) / course)); ch = (y1 - y0) / n
    for k in range(n):
        ya, yb = y0 + k * ch, y0 + (k + 1) * ch
        c = lin(col, 0.82 + 0.3 * rnd.random())
        for side in ('s', 'n', 'e', 'w'):
            ns = side in ('s', 'n')
            ext = 0.16 if (k % 2 == 0) == ns else -t + 0.0                   # alternate courses run past the corner
            length = (hw if ns else hd)
            ops = sorted([(a - ww / 2, a + ww / 2) for (a, ww, oa, ob) in openings.get(side, []) if min(ob, yb) - max(oa, ya) > ch * 0.5])
            cur = -length - ext
            for (a, b) in ops + [(length + ext, None)]:
                if a - cur > 0.04:
                    if ns:
                        z = (hd - t / 2) * (1 if side == 's' else -1)
                        bar(T_, 'woodH', (cur, ya + 0.008, z - t / 2 - 0.012), (a, yb - 0.008, z + t / 2 + 0.012), c, seg=2.6)
                    else:
                        x = (hw - t / 2) * (1 if side == 'e' else -1)
                        bar(T_, 'woodH', (x - t / 2 - 0.012, ya + 0.008, cur), (x + t / 2 + 0.012, yb - 0.008, a), c, seg=2.6)
                cur = b if b is not None else cur


def shutter(T_, lo, hi, col):
    bar(T_, 'wood', lo, hi, lin(col))
    w = hi[0] - lo[0]
    for f in (0.2, 0.8):
        y = lo[1] + (hi[1] - lo[1]) * f
        bar(T_, 'woodH', (lo[0] + 0.03, y - 0.04, hi[2]), (hi[0] - 0.03, y + 0.04, hi[2] + 0.02), lin(col, 0.7))


def window_frame(S, T_, cx, y0, w, h, z, out, col=0xf0ece0, glass=(0.02, 0.03, 0.05)):
    # glass=None: a real opening (the game lets shots and looks through it): the frame only
    """A small window in a wall facing +-z at depth z: frame, a cross of bars, dark glass."""
    for (lo, hi) in (((cx - w / 2 - 0.06, y0 - 0.06, z), (cx - w / 2, y0 + h + 0.06, z + out * 0.06)), ((cx + w / 2, y0 - 0.06, z), (cx + w / 2 + 0.06, y0 + h + 0.06, z + out * 0.06)),
                     ((cx - w / 2, y0 + h, z), (cx + w / 2, y0 + h + 0.06, z + out * 0.06)), ((cx - w / 2 - 0.1, y0 - 0.08, z), (cx + w / 2 + 0.1, y0, z + out * 0.1)),
                     ((cx - 0.02, y0, z), (cx + 0.02, y0 + h, z + out * 0.04)), ((cx - w / 2, y0 + h / 2 - 0.02, z), (cx + w / 2, y0 + h / 2 + 0.02, z + out * 0.04))):
        bar(T_, 'flat', lo, hi, lin(col))
    if glass is None: return
    if out > 0: face(S, 'flat', (cx - w / 2, y0, z + 0.012), (w, 0, 0), (0, h, 0), glass, step=9)
    else: face(S, 'flat', (cx + w / 2, y0, z - 0.012), (-w, 0, 0), (0, h, 0), glass, step=9)


# ---- Kagemori ---------------------------------------------------------------------------------------------------
HOUSES = [dict(w=7, d=5.5, roofC=0x4e5c60, h=2.6, roofH=2.2), dict(w=9, d=6.5, roof='thatch', roofC=0xa08a58, roofH=3.6, up=0.2, over=1.2),
          dict(w=10, d=7, roof='thatch', roofC=0x9a8454, roofH=3.8, up=0.2, over=1.2), dict(w=6, d=5, roofC=0x56646a, roofH=2.2, h=2.5),
          dict(w=13, d=8, roofC=0x4a5a60, h=3.0, roofH=3.0), dict(w=6, d=5, roof='thatch', roofC=0x9a8454, roofH=2.8, up=0.2, over=1.1, h=2.5)]


def house(o):
    S, T_ = Soup(), Soup(); T_.plain = S
    w, d, h, roofH = o['w'], o['d'], o.get('h', 2.9), o.get('roofH', 2.6)
    up, base, over, wallC, roofC, rmat = o.get('up', 0.7), 0.5, o.get('over', 1.5), 0xe8e0cc, o.get('roofC', 0x56646a), o.get('roof', 'kawara')
    thatch = rmat == 'thatch'
    n = max(2, math.floor(w / 2.1)); bw = w / n; mid = n // 2; lxm = -w / 2 + (mid + 0.5) * bw
    dk = lin(DARK)
    # the veranda: a deck of boards on a low frame, stones to step up on
    pw, pd = w / 2 + 0.8, d / 2 + 0.8
    face(S, 'woodH', (-pw, base, pd), (2 * pw, 0, 0), (0, 0, -2 * pd), lin(0x6a4a34), step=1.2)
    for (lo, hi) in (((-pw, base - 0.14, pd - 0.08), (pw, base + 0.0, pd)), ((-pw, base - 0.14, -pd), (pw, base, -pd + 0.08)), ((-pw, base - 0.14, -pd), (-pw + 0.08, base, pd)), ((pw - 0.08, base - 0.14, -pd), (pw, base, pd))):
        bar(T_, 'woodH', lo, hi, lin(0x4a3424))
    for (og, right, out, width) in (((-pw + 0.06, 0, pd - 0.06), (1, 0, 0), (0, 0, 1), 2 * pw - 0.12), ((pw - 0.06, 0, -pd + 0.06), (-1, 0, 0), (0, 0, -1), 2 * pw - 0.12),
                                    ((pw - 0.06, 0, pd - 0.06), (0, 0, -1), (1, 0, 0), 2 * pd - 0.12), ((-pw + 0.06, 0, -pd + 0.06), (0, 0, 1), (-1, 0, 0), 2 * pd - 0.12)):
        wall(S, 'wood', (og[0], -0.5, og[2]), right, out, width, 0.0, base + 0.36, [], lin(0x3a2a1e), tile=2.0)
    for sx in (-1, 1):
        for i in range(max(3, round(2 * pw / 2.2)) + 1):
            x = -pw + 0.2 + i * (2 * pw - 0.4) / max(3, round(2 * pw / 2.2))
            for zz in (pd - 0.2, -pd + 0.2):
                if sx > 0: bar(T_, 'stone', (x - 0.17, -0.5, zz - 0.17), (x + 0.17, base - 0.14, zz + 0.17), lin(0x8c8a80), tile=1.5)
    for sz in (-1, 1):
        bar(T_, 'stone', (lxm - 0.75, -0.5, sz * (d / 2 + 1.2) - 0.35), (lxm + 0.75, 0.25, sz * (d / 2 + 1.2) + 0.35), lin(0x8c8a80), tile=1.5)
    # the room: plaster between timbers, a floor of mats
    t = 0.2
    ops = {'s': [(lxm, bw - 0.25, 0.0, 2.1)], 'n': [(lxm, bw - 0.25, 0.0, 2.1)]}
    ops = {k: [(a, ww, base + ya, base + yb) for (a, ww, ya, yb) in v] for k, v in ops.items()}
    room_walls(S, T_, w, d, t, base - 0.04, base + h, ops, 'plaster', lin(wallC), 'plaster', lin(wallC, 0.92), frame=DARK, y_in0=base + 0.06)
    face(S, 'thatch', (-w / 2 + t, base + 0.06, d / 2 - t), (w - 2 * t, 0, 0), (0, 0, -(d - 2 * t)), lin(0xb8aa70), step=1.2)
    nm = max(2, round((w - 2 * t) / 1.8))
    for i in range(1, nm):                                                     # the borders of the mats
        x = -w / 2 + t + i * (w - 2 * t) / nm
        bar(S, 'flat', (x - 0.025, base + 0.06, -d / 2 + t), (x + 0.025, base + 0.068, d / 2 - t), lin(0x2a3a2a))
    bar(S, 'flat', (-w / 2 + t, base + 0.06, -0.025), (w / 2 - t, base + 0.068, 0.025), lin(0x2a3a2a))
    for sx in (-1, 1):
        for sz in (-1, 1):
            bar(T_, 'wood', (sx * w / 2 - 0.12, base, sz * d / 2 - 0.12), (sx * w / 2 + 0.12, base + h, sz * d / 2 + 0.12), dk)
    for sz in (-1, 1):
        zz = sz * (d / 2 + 0.02)
        bar(T_, 'woodH', (-w / 2 - 0.1, base + h - 0.2, zz - 0.06), (w / 2 + 0.1, base + h, zz + 0.06), dk)
        bar(T_, 'woodH', (-w / 2 - 0.1, base, zz - 0.06), (w / 2 + 0.1, base + 0.16, zz + 0.06), dk)
        for i in range(n + 1):
            x = -w / 2 + i * bw
            bar(T_, 'wood', (x - 0.07, base, sz * (d / 2 + 0.05) - 0.05), (x + 0.07, base + h, sz * (d / 2 + 0.05) + 0.05), dk)
    for sx in (-1, 1):                                                         # the gable walls: a top beam, a rail, studs
        xx = sx * (w / 2 + 0.02)
        bar(T_, 'woodH', (xx - 0.06, base + h - 0.2, -d / 2 - 0.1), (xx + 0.06, base + h, d / 2 + 0.1), dk)
        bar(T_, 'woodH', (xx - 0.05, base + h * 0.62, -d / 2), (xx + 0.05, base + h * 0.62 + 0.12, d / 2), dk)
        bar(T_, 'woodH', (xx - 0.05, base, -d / 2), (xx + 0.05, base + 0.14, d / 2), dk)
        ns_ = max(2, round(d / 1.6))
        for i in range(1, ns_):
            z = -d / 2 + i * d / ns_
            bar(T_, 'wood', (xx - 0.05, base, z - 0.06), (xx + 0.05, base + h, z + 0.06), dk)
        for i in range(4):                                                     # the posts of the veranda, each on its stone
            z = -d / 2 - 0.5 + i * (d + 1) / 3
            px = sx * (w / 2 + 0.6)
            bar(T_, 'wood', (px - 0.08, base, z - 0.08), (px + 0.08, base + h + 0.1, z + 0.08), dk)
            bar(T_, 'stone', (px - 0.14, base, z - 0.14), (px + 0.14, base + 0.07, z + 0.14), lin(0x8c8a80))
    # under the roof: a board ceiling, rafters running out to the eaves on all four sides
    Y = base + h
    ew, ed = w / 2 + over, d / 2 + over
    face(S, 'woodH', (-w / 2 - 1.2, Y + 0.02, -d / 2 - 1.2), (w + 2.4, 0, 0), (0, 0, d + 2.4), lin(0x4a3626), step=1.3)
    for (lo, hi) in (((-w / 2 - 1.2, Y, d / 2 + 1.08), (w / 2 + 1.2, Y + 0.16, d / 2 + 1.2)), ((-w / 2 - 1.2, Y, -d / 2 - 1.2), (w / 2 + 1.2, Y + 0.16, -d / 2 - 1.08)),
                     ((-w / 2 - 1.2, Y, -d / 2 - 1.2), (-w / 2 - 1.08, Y + 0.16, d / 2 + 1.2)), ((w / 2 + 1.08, Y, -d / 2 - 1.2), (w / 2 + 1.2, Y + 0.16, d / 2 + 1.2))):
        bar(T_, 'woodH', lo, hi, lin(0x3a2a20))
    # the roof: the game's own curved surface (so that it is walked on as before), given an underside and an edge
    ridge = 0.5; rxr = ew * ridge; yr = Y + 0.14
    sides = [((-rxr, 0), (rxr, 0), (-ew, ed), (ew, ed)), ((rxr, 0), (-rxr, 0), (ew, -ed), (-ew, -ed)), ((-rxr, 0), (-rxr, 0), (-ew, -ed), (-ew, ed)), ((rxr, 0), (rxr, 0), (ew, ed), (ew, -ed))]

    def pt(sd, s, tt, drop=0.0):
        tx, tz = sd[0][0] + (sd[1][0] - sd[0][0]) * s, sd[0][1] + (sd[1][1] - sd[0][1]) * s
        bx, bz = sd[2][0] + (sd[3][0] - sd[2][0]) * s, sd[2][1] + (sd[3][1] - sd[2][1]) * s
        y = roofH * (1 - tt) ** 1.9 + up * abs(2 * s - 1) ** 4 * tt ** 3
        return (tx + (bx - tx) * tt, yr + y - drop, tz + (bz - tz) * tt)
    NS, NT = 10, 7
    tile = 2.0 if thatch else 1.6
    edge = 0.34 if thatch else 0.12
    rc = lin(roofC)
    for sd in sides:
        ln = math.hypot(sd[3][0] - sd[2][0], sd[3][1] - sd[2][1]) / tile
        sl = math.hypot(roofH, math.hypot(sd[2][0] - sd[0][0], sd[2][1] - sd[0][1])) / tile
        V = [pt(sd, i / NS, j / NT) for i in range(NS + 1) for j in range(NT + 1)]
        UV = [(i / NS * ln, j / NT * sl) for i in range(NS + 1) for j in range(NT + 1)]
        ix = lambda i, j: i * (NT + 1) + j
        a, b, c = V[ix(NS // 2, 1)], V[ix(NS // 2, 2)], V[ix(NS // 2 + 1, 2)]
        up_ok = (b[2] - a[2]) * (c[0] - a[0]) - (b[0] - a[0]) * (c[2] - a[2]) >= 0
        F, FU = [], []
        for i in range(NS):
            for j in range(NT):
                for tri in ((ix(i, j), ix(i, j + 1), ix(i + 1, j + 1)), (ix(i, j), ix(i + 1, j + 1), ix(i + 1, j))):
                    pa, pb, pc = V[tri[0]], V[tri[1]], V[tri[2]]
                    if (Vector(pb) - Vector(pa)).cross(Vector(pc) - Vector(pa)).length < 1e-9: continue
                    if not up_ok: tri = (tri[0], tri[2], tri[1])
                    F.append(tri); FU.append([UV[k] for k in tri])
        S.add(V, F, tint=rc, mat=rmat, uv=FU, auto=False)
        cedge = lin(0xcbb78a if thatch else 0x3a4448)
        for i in range(NS):                                                    # the edge of the eaves, and the underside behind it
            s0, s1 = i / NS, (i + 1) / NS
            a, e = pt(sd, s0, 1.0), pt(sd, s1, 1.0)
            a2, e2 = pt(sd, s0, 1.0, edge), pt(sd, s1, 1.0, edge)
            b2, c2 = pt(sd, s0, 0.5, edge + 0.1), pt(sd, s1, 0.5, edge + 0.1)
            P4 = [a, e, e2, a2]
            nrm = (Vector(P4[1]) - Vector(P4[0])).cross(Vector(P4[3]) - Vector(P4[0]))
            if nrm.x * (a[0] + e[0]) + nrm.z * (a[2] + e[2]) < 0: P4 = [P4[1], P4[0], P4[3], P4[2]]
            quad(S, 'thatch' if thatch else 'flat', P4[0], P4[1], P4[2], P4[3], cedge)
            under = [a2, b2, c2, e2]
            if (Vector(under[1]) - Vector(under[0])).cross(Vector(under[3]) - Vector(under[0])).y > 0: under = [under[3], under[2], under[1], under[0]]
            quad(S, 'woodH', under[0], under[1], under[2], under[3], lin(0x4a3626), uv=((0, 0), (0.8, 0), (0.8, 0.5), (0, 0.5)))
    # ridge and the four hips
    rl = (w * 0.52 + over) / 2
    if thatch:
        bar(T_, 'thatch', (-rl, yr + roofH - 0.06, -0.3), (rl, yr + roofH + 0.26, 0.3), lin(roofC, 0.8))
        for k in range(5):
            x = -rl + 0.3 + k * (2 * rl - 0.6) / 4
            bar(T_, 'wood', (x - 0.06, yr + roofH + 0.2, -0.5), (x + 0.06, yr + roofH + 0.32, 0.5), lin(0x5a4630))
    else:
        bar(T_, 'flat', (-rl, yr + roofH - 0.02, -0.15), (rl, yr + roofH + 0.22, 0.15), lin(0x2a3034))
        bar(T_, 'flat', (-rl - 0.08, yr + roofH + 0.22, -0.2), (rl + 0.08, yr + roofH + 0.3, 0.2), lin(0x343c40))
        for s in (-1, 1):
            bar(T_, 'flat', (s * rl - 0.12, yr + roofH - 0.05, -0.24), (s * rl + 0.12, yr + roofH + 0.48, 0.24), lin(0x2a3034))
        for sd in sides[:2]:
            for s in (0.0, 1.0):
                P = [Vector(pt(sd, s, j / NT)) for j in range(NT + 1)]
                for p0, p1 in zip(P, P[1:]):
                    dx, dz = p1.x - p0.x, p1.z - p0.z
                    ln2 = math.hypot(dx, dz) or 1.0
                    ex, ez = -dz / ln2 * 0.09, dx / ln2 * 0.09
                    prism(T_, 'flat', [(p0.x - ex, p0.y - 0.03, p0.z - ez), (p0.x + ex, p0.y - 0.03, p0.z + ez), (p1.x + ex, p1.y - 0.03, p1.z + ez), (p1.x - ex, p1.y - 0.03, p1.z - ez),
                                       (p0.x - ex, p0.y + 0.15, p0.z - ez), (p0.x + ex, p0.y + 0.15, p0.z + ez), (p1.x + ex, p1.y + 0.15, p1.z + ez), (p1.x - ex, p1.y + 0.15, p1.z - ez)], lin(0x2a3034))
    return S, T_


# ---- Uri ---------------------------------------------------------------------------------------------------------
LOG, LOG2 = 0x9a6a40, 0x8a6240


def chalet(w, d, upper):
    S, T_ = Soup(), Soup(); T_.plain = S
    W, D = w + 0.3, d + 0.3
    rh, rw = 2.3, w + 3.2
    U = 2.8                                             # the upper floor, above the level the house stands on
    zr = d / 2 + (2.0 if upper else 1.35)
    stone = lin(0xc4bdae)
    # the ground floor of stone, its walls going down into the slope
    ops = {'s': [(0, 1.7, 0.0, 2.1)], 'w': [(-1.3, 1.1, 1.15, 2.0)], 'n': [(0, 1.1, 1.15, 2.0)]}
    if not upper: ops['e'] = [(0, 1.1, 1.15, 2.0)]
    room_walls(S, T_, W, D, 0.4, -2.6, 2.6, ops, 'stone', stone, 'stone', lin(0xc4bdae, 0.85), frame=0x4a3424, y_in0=0.06)
    face(S, 'woodH', (-W / 2 + 0.4, 0.06, D / 2 - 0.4), (W - 0.8, 0, 0), (0, 0, -(D - 0.8)), lin(0x6a4a30), step=1.2)
    face(S, 'woodH', (-W / 2 + 0.4, 2.6, -D / 2 + 0.4), (W - 0.8, 0, 0), (0, 0, D - 0.8), lin(0x5a3c26, 1.3), step=1.2)
    for i in range(4):
        z = -D / 2 + 1.0 + i * (D - 2.0) / 3
        bar(T_, 'woodH', (-W / 2 + 0.4, 2.44, z - 0.08), (W / 2 - 0.4, 2.6, z + 0.08), lin(0x4a3020))
    # corner stones a shade lighter, a string course under the timber floor
    for sx in (-1, 1):
        for sz in (-1, 1):
            for k in range(6):
                y = -0.3 + k * 0.46
                lw, ld = (0.5, 0.3) if k % 2 else (0.3, 0.5)
                bar(T_, 'stone', (sx * (W / 2 + 0.02), y, sz * (D / 2 + 0.02)), (sx * (W / 2 - lw), y + 0.4, sz * (D / 2 - ld)), lin(0xd6d0c2), tile=1.5)
    bar(T_, 'woodH', (-W / 2 - 0.06, 2.52, -D / 2 - 0.06), (W / 2 + 0.06, 2.66, -D / 2 + 0.02), lin(LOG2, 0.7))
    bar(T_, 'woodH', (-W / 2 - 0.06, 2.52, D / 2 - 0.02), (W / 2 + 0.06, 2.66, D / 2 + 0.06), lin(LOG2, 0.7))
    for sx in (-1, 1): bar(T_, 'woodH', (sx * W / 2 - 0.04, 2.52, -D / 2), (sx * W / 2 + 0.04, 2.66, D / 2), lin(LOG2, 0.7))
    # the upper storey of squared logs
    if upper:
        uo = {'s': [(0, 1.5, U, U + 2.1), (-w * 0.27, 0.8, U + 0.6, U + 1.45), (w * 0.27, 0.8, U + 0.6, U + 1.45)], 'n': [(0, 1.0, U + 0.8, U + 1.65)], 'w': [(0, 1.0, U + 0.8, U + 1.65)]}
        logs(T_, W, D, 0.3, 2.6, U + 2.6, uo, LOG)
        face(S, 'woodH', (-W / 2 + 0.3, U + 0.03, D / 2 - 0.3), (W - 0.6, 0, 0), (0, 0, -(D - 0.6)), lin(0xb08a5a), step=1.2)
        face(S, 'woodH', (-W / 2 + 0.3, U + 2.6, -D / 2 + 0.3), (W - 0.6, 0, 0), (0, 0, D - 0.6), lin(0x9a7a52), step=1.2)
        for (a, ww, ya, yb) in uo['s'][1:]: window_frame(S, T_, a, ya, ww, yb - ya, D / 2 - 0.02, 1, glass=None)
        window_frame(S, T_, 0, U + 0.8, 1.0, 0.85, -D / 2 + 0.02, -1, glass=None)
        for sx in (-0.75, 0.75):
            bar(T_, 'wood', (sx - 0.05, U, D / 2 - 0.32), (sx + 0.05, U + 2.14, D / 2 + 0.04), lin(LOG2, 0.6))
        bar(T_, 'woodH', (-0.86, U + 2.1, D / 2 - 0.32), (0.86, U + 2.2, D / 2 + 0.05), lin(LOG2, 0.6))
        shutter(T_, (-0.84, U, D / 2 + 0.17), (-0.76, U + 2.05, D / 2 + 1.07), LOG2)                                        # the door to the balcony, standing open
    else:
        logs(T_, W, D, 0.3, 2.6, 5.5, {}, LOG)
        face(S, 'woodH', (-W / 2 + 0.3, 5.5, D / 2 - 0.3), (W - 0.6, 0, 0), (0, 0, -(D - 0.6)), lin(LOG, 0.5), step=3)
        for lx in (-w * 0.27, w * 0.27):
            window_frame(S, T_, lx, 3.37, 0.8, 0.86, D / 2 + 0.016, 1)
    # gables in upright boards, the roof, the chimney
    yg = 5.5
    for s in (-1, 1):
        zz = s * (d / 2 + 0.05)
        nb = max(6, round(W / 0.45))
        for i in range(nb):
            xa, xb = -W / 2 + i * W / nb, -W / 2 + (i + 1) * W / nb
            gh = lambda x: 2.3 * (1 - abs(x) / (rw / 2)) - 0.13
            ha, hb, hm = gh(xa), gh(xb), gh((xa + xb) / 2)
            c = lin(LOG, 0.8 + 0.3 * rnd.random())
            pts = [(xa, yg, zz + s * 0.13), (xb, yg, zz + s * 0.13), (xb, yg + max(hb, 0.02), zz + s * 0.13), ((xa + xb) / 2, yg + hm, zz + s * 0.13), (xa, yg + max(ha, 0.02), zz + s * 0.13)]
            if s < 0: pts = [pts[1], pts[0], pts[4], pts[3], pts[2]]
            S.add(pts, [(0, 1, 2, 3, 4)], tint=c, mat='wood', uv=[[(p[0] / 2, p[1] / 2) for p in pts]], auto=False)
    for sx in (-1, 1):
        bar(T_, 'woodH', (sx * (W / 2 - 0.3), yg - 0.02, -D / 2), (sx * W / 2, yg + 2.3 * (1 - (W / 2) / (rw / 2)) - 0.12, D / 2), lin(LOG, 0.8))
    zc = 0.3 if upper else 0.0
    gable_roof(S, T_, rw, rh, d + (3.6 if upper else 3.0), yg, zc, 0x7c7468, LOG2)
    cx = w * 0.32
    bar(T_, 'stone', (cx - 0.4, 6.3, -0.4), (cx + 0.4, 7.9, 0.4), lin(0xb0a898), tile=1.5)
    bar(T_, 'stone', (cx - 0.48, 7.9, -0.48), (cx + 0.48, 8.02, 0.48), lin(0x9a9488), tile=1.5)
    for sx in (-1, 1):
        for sz in (-1, 1): bar(T_, 'stone', (cx + sx * 0.3 - 0.08, 8.02, sz * 0.3 - 0.08), (cx + sx * 0.3 + 0.08, 8.2, sz * 0.3 + 0.08), lin(0x9a9488))
    bar(T_, 'stone', (cx - 0.5, 8.2, -0.5), (cx + 0.5, 8.3, 0.5), lin(0x8a8478), tile=1.5)
    # the balcony on its brackets, a rail of flat balusters
    if upper:
        bw, bx, bz = w + 2.2, 0.95, d / 2 + 1.1
        face(S, 'woodH', (bx - bw / 2, U, bz + 0.95), (bw, 0, 0), (0, 0, -1.9), lin(LOG2, 1.1), step=1.2)
        face(S, 'woodH', (bx + bw / 2, U - 0.2, bz + 0.95), (-bw, 0, 0), (0, 0, -1.9), lin(LOG2, 0.6), step=1.2)
        bar(T_, 'woodH', (bx - bw / 2, U - 0.22, bz + 0.87), (bx + bw / 2, U + 0.02, bz + 0.97), lin(LOG2, 0.7))
        for sx in (bx - bw / 2, bx + bw / 2 - 0.08): bar(T_, 'woodH', (sx, U - 0.22, bz - 0.95), (sx + 0.08, U + 0.02, bz + 0.95), lin(LOG2, 0.7))
        rails = [((0.95, zr), bw, False), ((-w / 2 - 0.1, d / 2 + 1.1), 1.9, True), ((w / 2 + 2.0, d / 2 + 1.1), 1.9, True)]
        for i in range(7):
            x = bx - bw / 2 + 0.3 + i * (bw - 0.6) / 6
            prism(T_, 'wood', [(x - 0.06, U - 0.75, D / 2), (x + 0.06, U - 0.75, D / 2), (x + 0.06, U - 0.2, D / 2), (x - 0.06, U - 0.2, D / 2),
                               (x - 0.06, U - 0.32, bz + 0.85), (x + 0.06, U - 0.32, bz + 0.85), (x + 0.06, U - 0.2, bz + 0.85), (x - 0.06, U - 0.2, bz + 0.85)], lin(LOG2, 0.7))
        ytop = U
    else:
        bz = d / 2 + 0.75
        face(S, 'woodH', (-W / 2, 2.74, bz + 0.65), (W, 0, 0), (0, 0, -1.3), lin(LOG2, 1.1), step=1.2)
        face(S, 'woodH', (W / 2, 2.6, bz + 0.65), (-W, 0, 0), (0, 0, -1.3), lin(LOG2, 0.6), step=1.2)
        bar(T_, 'woodH', (-W / 2, 2.58, bz + 0.57), (W / 2, 2.76, bz + 0.67), lin(LOG2, 0.7))
        for i in range(6):
            x = -W / 2 + 0.3 + i * (W - 0.6) / 5
            prism(T_, 'wood', [(x - 0.06, 2.05, D / 2), (x + 0.06, 2.05, D / 2), (x + 0.06, 2.6, D / 2), (x - 0.06, 2.6, D / 2),
                               (x - 0.06, 2.48, bz + 0.55), (x + 0.06, 2.48, bz + 0.55), (x + 0.06, 2.6, bz + 0.55), (x - 0.06, 2.6, bz + 0.55)], lin(LOG2, 0.7))
        rails = [((0, zr), W, False)]
        ytop = 2.7
    for ((lx, lz), ln, along) in rails:
        if along:
            bar(T_, 'woodH', (lx - 0.05, ytop + 0.9, lz - ln / 2), (lx + 0.05, ytop + 1.0, lz + ln / 2), lin(LOG2))
            bar(T_, 'woodH', (lx - 0.03, ytop + 0.1, lz - ln / 2), (lx + 0.03, ytop + 0.16, lz + ln / 2), lin(LOG2))
        else:
            bar(T_, 'woodH', (lx - ln / 2, ytop + 0.9, lz - 0.05), (lx + ln / 2, ytop + 1.0, lz + 0.05), lin(LOG2))
            bar(T_, 'woodH', (lx - ln / 2, ytop + 0.1, lz - 0.03), (lx + ln / 2, ytop + 0.16, lz + 0.03), lin(LOG2))
        nb = max(3, round(ln / 0.22))
        for i in range(nb + 1):
            tt = -ln / 2 + 0.05 + i * (ln - 0.1) / nb
            c = lin(LOG2, 0.85 + 0.25 * rnd.random())
            if along: bar(S, 'wood', (lx - 0.012, ytop + 0.16, lz + tt - 0.07), (lx + 0.012, ytop + 0.9, lz + tt + 0.07), c)
            else: bar(S, 'wood', (lx + tt - 0.07, ytop + 0.16, lz - 0.012), (lx + tt + 0.07, ytop + 0.9, lz + 0.012), c)
        for e in ((-1, 1) if not along else ()):
            bar(T_, 'wood', (lx + e * ln / 2 - 0.05, ytop, lz - 0.05), (lx + e * ln / 2 + 0.05, ytop + 1.05, lz + 0.05), lin(LOG2, 0.8))
    # green shutters beside the front windows, the door standing open below, firewood stacked against the side wall
    for lx in (-w * 0.27, w * 0.27):
        for s in (-1, 1):
            cx2 = lx + s * (0.62 if upper else 0.72)
            y0 = (U + 0.48) if upper else 3.25
            shutter(T_, (cx2 - 0.2, y0, D / 2 + 0.005), (cx2 + 0.2, y0 + 1.1, D / 2 + 0.045), 0x35582f)
    shutter(T_, (-1.05, 0.0, D / 2 + 0.07), (-0.95, 2.0, D / 2 + 1.17), LOG2)
    for row in range(6):
        for col in range(7):
            y = -0.75 + row * 0.3; z = -0.42 + col * 0.285 + (0.14 if row % 2 else 0)
            if z > 1.42: continue
            r = 0.13 + 0.02 * rnd.random()
            v, f, _ = loft([dict(c=(-w / 2 - 1.0, y, z), rx=r), dict(c=(-w / 2 - 0.2, y, z), rx=r)], segs=7, sub=1, u=(0, 1, 0), v=(0, 0, 1))
            k = 0.8 + 0.3 * rnd.random()
            S.add(v, f, tint=lambda p, k=k: lin(0xd8b078 if p[0] < -w / 2 - 0.95 else 0x8a6238, k), mat='flat', uv=[[(0, 0)] * len(ff) for ff in f])
    return S, T_


def stadel():
    S, T_ = Soup(), Soup(); T_.plain = S
    w, d, y0 = 5.0, 4.6, 0.82
    ops = {'s': [(0, 1.7, y0, y0 + 2.0)]}
    logs(T_, w, d, 0.25, y0 - 0.12, y0 + 2.7, ops, LOG2, course=0.28)
    face(S, 'woodH', (-w / 2 + 0.25, y0 + 0.06, d / 2 - 0.25), (w - 0.5, 0, 0), (0, 0, -(d - 0.5)), lin(0x7a5a3a), step=1.2)
    face(S, 'woodH', (-w / 2 + 0.25, y0 + 2.7, -d / 2 + 0.25), (w - 0.5, 0, 0), (0, 0, d - 0.5), lin(0x5a4028, 1.3), step=1.2)
    face(S, 'woodH', (-w / 2, y0 - 0.12, -d / 2), (w, 0, 0), (0, 0, d), lin(0x4a3422), step=3)
    for sx in (-0.9, 0.9):
        bar(T_, 'wood', (sx - 0.06, y0, d / 2 - 0.27), (sx + 0.06, y0 + 2.05, d / 2 + 0.04), lin(0x3a2818))
    bar(T_, 'woodH', (-1.0, y0 + 2.0, d / 2 - 0.27), (1.0, y0 + 2.12, d / 2 + 0.05), lin(0x3a2818))
    for sx in (-1, 1):                                                         # the sills the walls rest on, across the staddle stones
        bar(T_, 'woodH', (sx * 1.9 - 0.14, y0 - 0.3, -d / 2 - 0.25), (sx * 1.9 + 0.14, y0 - 0.1, d / 2 + 0.25), lin(LOG2, 0.6))
    yg = 3.52
    for s in (-1, 1):
        zz = s * (d / 2 - 0.02)
        nb = 10
        for i in range(nb):
            xa, xb = -w / 2 + i * w / nb, -w / 2 + (i + 1) * w / nb
            hk = 1.5 * (w / 2) / 3.3
            ha, hb, hm = hk * (1 - abs(xa) / (w / 2)), hk * (1 - abs(xb) / (w / 2)), hk * (1 - abs((xa + xb) / 2) / (w / 2))
            c = lin(LOG2, 0.8 + 0.3 * rnd.random())
            pts = [(xa, yg - 0.1, zz), (xb, yg - 0.1, zz), (xb, yg + hb + 0.33, zz), ((xa + xb) / 2, yg + hm + 0.33, zz), (xa, yg + ha + 0.33, zz)]
            if s < 0: pts = [pts[1], pts[0], pts[4], pts[3], pts[2]]
            S.add(pts, [(0, 1, 2, 3, 4)], tint=c, mat='wood', uv=[[(p[0] / 2, p[1] / 2) for p in pts]], auto=False)
    gable_roof(S, T_, 6.6, 1.5, 6.0, yg, 0.0, 0x6e6a64, LOG2)
    shutter(T_, (-1.49, 0.88, 2.3), (-1.41, 2.78, 3.3), 0x2a1c12)               # the door stands open
    return S, T_


def build_japan():
    return [('house%d' % i, finish('house%d' % i, *house(o), ao=(1.0, 0.6))) for i, o in enumerate(HOUSES)]


def build_swiss():
    out = [('chalet', finish('chalet', *chalet(8.5, 7.5, False), ao=(1.0, 0.6))), ('chaletUp', finish('chaletUp', *chalet(9, 7.5, True), ao=(1.0, 0.6))),
           ('stadel', finish('stadel', *stadel(), ao=(1.0, 0.6)))]
    return out
