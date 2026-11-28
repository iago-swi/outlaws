# Dry Gulch: the false-fronted houses of Main Street, each from the same options the game gives its own bld()
# in src/levels/west.js (blender/west.json is taken from there), whose colliders stay in use: walls, doors,
# floors, stairwells and posts here stand where they stand there.
# Origin of a house: the middle of its front at ground level; x to the right seen from the street, y up, +z to the street.
import bpy, json, math, os, random
from mathutils import Vector
from lib import Soup, make_mesh, paint, shade, reset

T = 0.35                                            # wall thickness
ROOF, FLOOR, CEIL, DECK = 0x8a6a52, 0x7a5a3e, 0x5a4030, 0x9a8468
rnd = random.Random(38)


def lin(c, k=1.0):
    f = lambda v: (v / 12.92 if v <= 0.04045 else ((v + 0.055) / 1.055) ** 2.4)
    return tuple(min(1.0, f(((c >> s) & 255) / 255.0) * k) for s in (16, 8, 0))


def face(S, mat, p0, du, dv, col, step=0.9, uv=None, tile=2.0, uo=0.0, vo=0.0):
    """A flat rectangle p0 + s du + t dv, cut into a grid (the shading is stored per vertex). Its front is du x dv.
    uv: None = metres / tile along du and dv (+ uo, vo); 'fit' = the whole texture once."""
    p0, du, dv = Vector(p0), Vector(du), Vector(dv)
    lu, lv = du.length, dv.length
    if lu < 1e-4 or lv < 1e-4: return
    nu, nv = max(1, math.ceil(lu / step)), max(1, math.ceil(lv / step))
    verts, faces, uvs = [], [], []
    for j in range(nv + 1):
        for i in range(nu + 1):
            verts.append(tuple(p0 + du * (i / nu) + dv * (j / nv)))
    def tex(i, j):
        return (i / nu, j / nv) if uv == 'fit' else (uo + lu * i / nu / tile, vo + lv * j / nv / tile)
    for j in range(nv):
        for i in range(nu):
            a = j * (nu + 1) + i
            faces.append((a, a + 1, a + nu + 2, a + nu + 1)); uvs.append([tex(i, j), tex(i + 1, j), tex(i + 1, j + 1), tex(i, j + 1)])
    S.add(verts, faces, tint=col, mat=mat, uv=uvs, auto=False)


def bar(S, mat, lo, hi, col, seg=1.6, tile=2.0):
    """A box from corner lo to corner hi with shared corners (so that Blender can bevel it), cut across its length."""
    lo, hi = tuple(min(a, b) for a, b in zip(lo, hi)), tuple(max(a, b) for a, b in zip(lo, hi))
    size = [hi[k] - lo[k] for k in range(3)]
    if min(size) < 1e-4: return
    if min(size) < 0.06 and hasattr(S, 'plain'): S = S.plain          # too thin to plane its edges: a plain box, among the flat faces
    ax = max(range(3), key=lambda k: size[k]); a1, a2 = [k for k in range(3) if k != ax]
    n = max(1, math.ceil(size[ax] / seg))
    verts, faces, uvs = [], [], []
    for i in range(n + 1):
        for (s1, s2) in ((0, 0), (1, 0), (1, 1), (0, 1)):
            p = [0, 0, 0]; p[ax] = lo[ax] + size[ax] * i / n; p[a1] = lo[a1] + size[a1] * s1; p[a2] = lo[a2] + size[a2] * s2
            verts.append(tuple(p))
    for i in range(n):
        for k in range(4):
            a, b = i * 4 + k, i * 4 + (k + 1) % 4
            faces.append((a, b, b + 4, a + 4))
    faces.append((3, 2, 1, 0)); faces.append((n * 4, n * 4 + 1, n * 4 + 2, n * 4 + 3))
    for f in faces:
        u = [verts[i][ax] / tile for i in f]
        acr = [(verts[i][a1] + verts[i][a2]) / tile for i in f]
        uvs.append([(a, u_) for a, u_ in zip(acr, u)] if mat == 'wood' else [(u_, a) for a, u_ in zip(acr, u)])
    S.add(verts, faces, tint=col, mat=mat, uv=uvs)


def prism(S, mat, pts8, col):
    """A box given by its eight corners (bottom four, top four, in the same order round)."""
    S.add(pts8, [(0, 1, 2, 3), (5, 4, 7, 6), (4, 0, 3, 7), (1, 5, 6, 2), (3, 2, 6, 7), (4, 5, 1, 0)], tint=col, mat=mat, uv=[[(0, 0), (0.1, 0), (0.1, 0.4), (0, 0.4)]] * 6)


def cut(width, y0, y1, holes):
    """The rectangle [0, width] x [y0, y1] without the holes (x0, x1, y0, y1): a list of rectangles."""
    xs = sorted({0.0, width} | {min(max(h[k], 0.0), width) for h in holes for k in (0, 1)})
    ys = sorted({y0, y1} | {min(max(h[k], y0), y1) for h in holes for k in (2, 3)})
    out = []
    for ya, yb in zip(ys, ys[1:]):
        run = None
        for xa, xb in zip(xs, xs[1:]):
            mx, my = (xa + xb) / 2, (ya + yb) / 2
            if xb - xa < 1e-6 or yb - ya < 1e-6 or any(h[0] < mx < h[1] and h[2] < my < h[3] for h in holes):
                if run: out.append(run); run = None
            elif run: run = (run[0], xb, ya, yb)
            else: run = (xa, xb, ya, yb)
        if run: out.append(run)
    return out


def siding(S, origin, right, out, width, y0, y1, holes=(), col=0xb8a48a, clip=None, dirt=True):
    """Clapboards: boards 25 cm high, each leaning out at its lower edge and casting a line of shade on the next.
    origin: the lower left corner seen from outside (its y is ignored); right x up = out. clip(y) -> (a, b) narrows a row."""
    origin, right, out = Vector((origin[0], 0, origin[2])), Vector(right), Vector(out)
    up = Vector((0, 1, 0))
    rows = int(round((y1 - y0) / 0.25))
    for k in range(rows):
        yb, yt = y0 + k * 0.25, y0 + (k + 1) * 0.25
        shade_k = 1.0 + 0.2 * rnd.random()
        if dirt: shade_k *= 0.8 + 0.2 * min(1.0, (yb - y0) / 0.8)        # splashed and dusty near the ground
        a0, b0 = clip((yb + yt) / 2) if clip else (0.0, width)
        if b0 - a0 < 0.05: continue
        for (a, b, _, _) in cut(width, yb, yt, [h for h in holes if min(h[3], yt) - max(h[2], yb) > 0.125]):
            a, b = max(a, a0), min(b, b0)
            if b - a < 0.02: continue
            p = origin + right * a + up * yb
            uo = rnd.random()
            face(S, 'woodH', p + out * 0.024, right * (b - a), up * 0.25 - out * 0.02, lin(col, shade_k), uo=uo, vo=(k % 8) / 8.0, step=2.4)
            face(S, 'woodH', p, right * (b - a), out * 0.024, lin(col, shade_k * 0.5), uo=uo, step=50)


def window(S, T_, cx, y0, w, h, z, trim, inside=True):
    """A sash window in the front wall: lit panes set back in a moulded frame, a sill, a small pediment."""
    x0, x1 = cx - w / 2, cx + w / 2
    face(S, 'window', (x0, y0, z - 0.06), (w, 0, 0), (0, h, 0), (1, 1, 1), uv='fit', step=9)
    for (lo, hi) in (((x0 - 0.11, y0, z - 0.08), (x0, y0 + h, z + 0.05)), ((x1, y0, z - 0.08), (x1 + 0.11, y0 + h, z + 0.05)),
                     ((x0 - 0.16, y0 + h, z - 0.08), (x1 + 0.16, y0 + h + 0.13, z + 0.07)), ((x0 - 0.2, y0 + h + 0.13, z - 0.08), (x1 + 0.2, y0 + h + 0.18, z + 0.11)),
                     ((x0 - 0.2, y0 - 0.09, z - 0.08), (x1 + 0.2, y0, z + 0.14)), ((x0 - 0.13, y0 - 0.2, z - 0.08), (x1 + 0.13, y0 - 0.09, z + 0.05))):
        bar(T_, 'flat', lo, hi, lin(trim))
    for (lo, hi) in (((x0, y0 + h / 2 - 0.022, z - 0.055), (x1, y0 + h / 2 + 0.022, z - 0.02)), ((cx - 0.016, y0, z - 0.055), (cx + 0.016, y0 + h, z - 0.03)),
                     ((x0, y0, z - 0.055), (x0 + 0.035, y0 + h, z - 0.025)), ((x1 - 0.035, y0, z - 0.055), (x1, y0 + h, z - 0.025)),
                     ((x0, y0, z - 0.055), (x1, y0 + 0.04, z - 0.025)), ((x0, y0 + h - 0.04, z - 0.055), (x1, y0 + h, z - 0.025))):
        bar(T_, 'flat', lo, hi, lin(0xd8cfb8))
    if not inside: return
    zi = -T + 0.1                                    # the same window from the room: daylight in the panes, a plain frame
    face(S, 'glow', (x1, y0, zi - 0.012), (-w, 0, 0), (0, h, 0), (0.30, 0.21, 0.12), step=9)
    for (lo, hi) in (((x0 - 0.09, y0 - 0.09, zi - 0.03), (x0, y0 + h + 0.09, zi)), ((x1, y0 - 0.09, zi - 0.03), (x1 + 0.09, y0 + h + 0.09, zi)),
                     ((x0, y0 + h, zi - 0.03), (x1, y0 + h + 0.09, zi)), ((x0, y0 - 0.09, zi - 0.045), (x1, y0, zi)),
                     ((x0, y0 + h / 2 - 0.02, zi - 0.02), (x1, y0 + h / 2 + 0.02, zi)), ((cx - 0.015, y0, zi - 0.02), (cx + 0.015, y0 + h, zi))):
        bar(T_, 'flat', lo, hi, lin(0x2a2420))


def door_leaf(T_, lo, hi, thin, col):
    """A panelled door leaf filling the box lo..hi; thin: the axis (0 = x, 2 = z) across its thickness."""
    wide = 2 if thin == 0 else 0
    bar(T_, 'wood', lo, hi, lin(col))
    for (ya, yb) in ((lo[1] + 0.16, lo[1] + 0.95), (lo[1] + 1.1, hi[1] - 0.16)):
        for side in (0, 1):
            a = [0, 0, 0]; b = [0, 0, 0]
            a[wide] = lo[wide] + 0.12; b[wide] = hi[wide] - 0.12
            a[1], b[1] = ya, yb
            a[thin] = (hi[thin] if side else lo[thin]) - (0.0 if side else 0.012); b[thin] = a[thin] + 0.012
            bar(T_, 'wood', tuple(a), tuple(b), lin(col, 0.7))


def frontier(o):
    """One false-fronted house. o: the options of bld() in west.js. Returns (flat faces, woodwork to bevel)."""
    S, T_ = Soup(), Soup()
    T_.plain = S
    W, D, H, d = o['w'], o['d'], o['h'], o['dir']
    H2 = H + 1.5
    WALL, TRIM, ROOFC = o['wall'], o.get('trim', 0x4a3526), o.get('roofC', ROOF)
    PANEL, FLOORC, CEILC = o.get('panel', 0x5a2c22), o.get('floorC', FLOOR), o.get('ceilC', CEIL)
    balc, up, flat = o.get('balcony', False), o.get('up', False), o.get('flat', False)
    XB = o['back'] * d if 'back' in o else None       # the back door: the game counts it along the world's x, whichever way the house faces
    well = None
    if 'well' in o:
        a, b, e, f = o['well']
        xs, zs = sorted(((a - o['x']) * d, (b - o['x']) * d)), sorted(((e + 8 * d) * d, (f + 8 * d) * d))
        well = (xs[0], xs[1], zs[0], zs[1])           # in the house's own x and z
    zf, zi = 0.1, -T + 0.1
    Lx, Rx, FW = -W / 2, W / 2, W / 2 + 0.25
    wx = W * 0.3
    sy = (H + 0.55) if balc else (H + 0.3)
    sw = W * 0.74 / 2

    # ---- outside walls in clapboard ------------------------------------------------------------------------
    fh = [(FW - 1.22, FW + 1.22, 0, 3.02 if balc else 3.6), (FW - sw - 0.07, FW + sw + 0.07, sy - 0.535, sy + 0.535)]
    for s in (-1, 1): fh.append((FW + s * wx - 0.66, FW + s * wx + 0.66, 1.16, 2.93))
    if H > 6:
        for s in ((-1, 1) if up else (-1, 0, 1)): fh.append((FW + s * wx - 0.66, FW + s * wx + 0.66, 4.41, 6.18))
    if up: fh.append((FW - 1.22, FW + 1.22, 4.0, 6.2))
    siding(S, (-FW, 0, zf), (1, 0, 0), (0, 0, 1), 2 * FW, 0.25, H2, fh, WALL)
    siding(S, (Rx, 0, 0), (0, 0, -1), (1, 0, 0), D, 0, H, col=WALL)
    siding(S, (Lx, 0, -D), (0, 0, 1), (-1, 0, 0), D, 0, H, col=WALL)
    siding(S, (Rx, 0, -D), (-1, 0, 0), (0, 0, -1), W, 0, H, [(W / 2 - XB - 0.92, W / 2 - XB + 0.92, 0, 2.86)] if XB is not None else [], WALL)
    face(S, 'wood', (FW, H - 0.3, zi), (-2 * FW, 0, 0), (0, H2 - H + 0.3, 0), lin(WALL, 0.7))                           # the back of the false front, above the roof
    for s in (-1, 1):                                                                                                # corner boards, front and back
        bar(T_, 'wood', (s * (W / 2 + 0.2) - 0.13, 0, -T + 0.08), (s * (W / 2 + 0.2) + 0.13, H2, 0.31), lin(TRIM))
        bar(T_, 'wood', (s * W / 2 - (0.02 if s > 0 else 0.1), 0, -D - 0.06), (s * W / 2 + (0.1 if s > 0 else 0.02), H, -D + 0.1), lin(TRIM))
    bar(T_, 'wood', (-FW - 0.01, 0.0, zf), (FW + 0.01, 0.3, zf + 0.05), lin(TRIM))                                     # skirting board along the porch

    # ---- roof ---------------------------------------------------------------------------------------------------
    hw = W / 2 + 0.15
    if flat:                                                                    # a deck to stand on behind the false front, a low wall each side, the ladder at the back
        face(S, 'woodH', (-hw, H + 0.2, 0.05), (2 * hw, 0, 0), (0, 0, -(D + 0.1)), lin(0x6a5240), step=1.2)
        bar(T_, 'woodH', (-hw, H - 0.02, -D - 0.06), (hw, H + 0.2, -D - 0.0), lin(TRIM))
        for s in (-1, 1):
            bar(T_, 'wood', (s * (W / 2 + 0.05) - 0.1, H + 0.2, -D), (s * (W / 2 + 0.05) + 0.1, H + 0.7, 0.0), lin(WALL, 0.9))
            bar(T_, 'wood', (s * hw - 0.02, H - 0.02, -D - 0.05), (s * hw + 0.03, H + 0.2, 0.0), lin(TRIM))
        lx, lz, c = -d * W / 4, -(D + 0.19), lin(0x8a6a44)
        for k in (-1, 1): bar(T_, 'wood', (lx + k * 0.3 - 0.035, -0.2, lz - 0.035), (lx + k * 0.3 + 0.035, H + 1.15, lz + 0.035), c)
        y = 0.3
        while y < H + 1.05:
            bar(T_, 'wood', (lx - 0.31, y, lz - 0.022), (lx + 0.31, y + 0.045, lz + 0.022), c); y += 0.32
    else:
        siding(S, (hw, 0, -D - 0.05), (-1, 0, 0), (0, 0, -1), 2 * hw, H, H2, col=WALL, dirt=False,
               clip=lambda y: (hw * (y - H) / 1.5 + 0.06, 2 * hw - hw * (y - H) / 1.5 - 0.06))                             # the back gable
        face(S, 'shingle', (-hw, H, -D - 0.05), (0, 0, D + 0.1), (hw, 1.5, 0), lin(ROOFC), tile=3.0, step=1.3)
        face(S, 'shingle', (hw, H, 0.05), (0, 0, -(D + 0.1)), (-hw, 1.5, 0), lin(ROOFC), tile=3.0, step=1.3)
        for s in (-1, 1):
            bar(T_, 'wood', (s * hw - 0.07, H - 0.12, -D - 0.1), (s * hw + 0.07, H + 0.03, 0.0), lin(TRIM))
            n = 5
            for i in range(n):
                xa, xb = s * hw * (1 - i / n), s * hw * (1 - (i + 1) / n)
                ya, yb = H + 1.5 * i / n, H + 1.5 * (i + 1) / n
                prism(T_, 'wood', [(xa, ya - 0.14, -D - 0.13), (xb, yb - 0.14, -D - 0.13), (xb, yb + 0.03, -D - 0.13), (xa, ya + 0.03, -D - 0.13),
                                   (xa, ya - 0.14, -D - 0.04), (xb, yb - 0.14, -D - 0.04), (xb, yb + 0.03, -D - 0.04), (xa, ya + 0.03, -D - 0.04)], lin(TRIM))
        bar(T_, 'wood', (-0.09, H2 - 0.03, -D - 0.1), (0.09, H2 + 0.05, -T + 0.1), lin(TRIM, 1.3))                          # ridge board
        cx, cz = -W * 0.27 * d, -D * 0.7                                                                             # chimney
        bar(T_, 'stone', (cx - 0.33, H + 0.6, cz - 0.3), (cx + 0.33, H + 2.25, cz + 0.3), lin(0x9a6a56), tile=1.5)
        bar(T_, 'stone', (cx - 0.4, H + 2.25, cz - 0.37), (cx + 0.4, H + 2.39, cz + 0.37), lin(0x7a5244), tile=1.5)
        bar(T_, 'flat', (cx - 0.2, H + 2.39, cz - 0.17), (cx + 0.2, H + 2.47, cz + 0.17), lin(0x1a1614))

    # ---- false front: cornice on brackets and dentils, a raised middle with its cap ----------------------------
    cw = W / 2 + 0.5
    bar(T_, 'woodH', (-cw, H2 - 0.02, -0.16), (cw, H2 + 0.08, 0.36), lin(TRIM))
    bar(T_, 'woodH', (-cw - 0.08, H2 + 0.08, -0.2), (cw + 0.08, H2 + 0.17, 0.46), lin(TRIM, 1.25))
    bar(T_, 'woodH', (-cw - 0.14, H2 + 0.17, -0.22), (cw + 0.14, H2 + 0.24, 0.54), lin(TRIM, 1.1))
    bar(T_, 'woodH', (-FW + 0.01, H2 - 0.2, zf), (FW - 0.01, H2 - 0.02, zf + 0.07), lin(TRIM, 1.15))                      # frieze board
    nd = int(round(W / 0.25))
    for i in range(nd + 1):
        x = -W / 2 + i * W / nd
        bar(T_, 'flat', (x - 0.05, H2 - 0.14, zf + 0.07), (x + 0.05, H2 - 0.02, zf + 0.17), lin(0xcfc4a6))             # dentils
    for x in (-W / 2 - 0.06, -W / 6, W / 6, W / 2 + 0.06):                                                           # brackets
        bar(T_, 'wood', (x - 0.07, H2 - 0.48, zf + 0.03), (x + 0.07, H2 - 0.02, zf + 0.15), lin(TRIM, 1.2))
        bar(T_, 'wood', (x - 0.07, H2 - 0.22, zf + 0.15), (x + 0.07, H2 - 0.02, zf + 0.32), lin(TRIM, 1.2))
    mw = W * 0.25
    siding(S, (-mw, 0, zf), (1, 0, 0), (0, 0, 1), 2 * mw, H2 + 0.24, H2 + 0.74, col=WALL, dirt=False)                    # the raised middle
    face(S, 'wood', (mw, H2 + 0.24, -0.2), (-2 * mw, 0, 0), (0, 0.5, 0), lin(WALL, 0.7))
    for s in (-1, 1):
        bar(T_, 'wood', (s * mw - 0.09, H2 + 0.24, -0.2), (s * mw + 0.09, H2 + 0.76, 0.2), lin(TRIM))
    bar(T_, 'woodH', (-mw - 0.25, H2 + 0.74, -0.24), (mw + 0.25, H2 + 0.82, 0.3), lin(TRIM))
    bar(T_, 'woodH', (-mw - 0.33, H2 + 0.82, -0.28), (mw + 0.33, H2 + 0.9, 0.4), lin(TRIM, 1.2))
    bar(T_, 'flat', (-0.07, H2 + 0.9, 0.0), (0.07, H2 + 1.25, 0.14), lin(TRIM, 1.2))                                   # a finial
    bar(T_, 'flat', (-0.13, H2 + 1.25, -0.06), (0.13, H2 + 1.37, 0.2), lin(0xd9b23a))

    # ---- the sign's board and frame (the lettering is the game's own sign, set in it) ---------------------------
    sy0, sy1 = sy - 0.475, sy + 0.475
    bar(T_, 'wood', (-sw - 0.12, sy0 - 0.12, zf + 0.02), (sw + 0.12, sy1 + 0.12, zf + 0.15), lin(0x241c14))
    for (lo, hi) in (((-sw - 0.14, sy1, zf + 0.13), (sw + 0.14, sy1 + 0.14, zf + 0.3)), ((-sw - 0.14, sy0 - 0.14, zf + 0.13), (sw + 0.14, sy0, zf + 0.3)),
                     ((-sw - 0.14, sy0, zf + 0.13), (-sw, sy1, zf + 0.3)), ((sw, sy0, zf + 0.13), (sw + 0.14, sy1, zf + 0.3))):
        bar(T_, 'flat', lo, hi, lin(0xb8923a))

    # ---- front door: frame, fanlight, two leaves standing open into the room; windows --------------------------
    for s in (-1, 1):
        bar(T_, 'wood', (s * 1.16 - 0.08, 0.3, zi - 0.03), (s * 1.16 + 0.08, 2.98, zf + 0.07), lin(TRIM))
    bar(T_, 'wood', (-1.3, 2.9, zi - 0.03), (1.3, 3.04, zf + 0.09), lin(TRIM))
    if not balc:
        face(S, 'window', (-1.1, 3.04, zf - 0.05), (2.2, 0, 0), (0, 0.44, 0), (1, 1, 1), uv='fit', step=9)                # fanlight
        face(S, 'glow', (1.1, 3.04, zi - 0.012), (-2.2, 0, 0), (0, 0.44, 0), (0.30, 0.21, 0.12), step=9)
        bar(T_, 'wood', (-1.3, 3.48, zi - 0.03), (1.3, 3.6, zf + 0.09), lin(TRIM))
        bar(T_, 'wood', (-1.38, 3.6, zf - 0.02), (1.38, 3.67, zf + 0.14), lin(TRIM, 1.2))
        for x in (-0.37, 0.37):
            bar(T_, 'flat', (x - 0.02, 3.04, zf - 0.05), (x + 0.02, 3.48, zf - 0.01), lin(TRIM))
    for s in (-1, 1):                                                                                                # the leaves, back against the wall inside
        door_leaf(T_, (min(s * 1.24, s * 2.3), 0.3, zi - 0.075), (max(s * 1.24, s * 2.3), 2.86, zi - 0.03), 2, 0x4a2c1c)
        bar(T_, 'metal', (s * 2.18 - 0.03, 1.32, zi - 0.11), (s * 2.18 + 0.03, 1.38, zi - 0.075), lin(0xc9a23a))
    face(S, 'woodH', (-1.1, 0.3, -0.03), (2.2, 0, 0), (0, 0, -0.29), lin(0x5a4030))                                    # threshold
    for s in (-1, 1): window(S, T_, s * wx, 1.25, 1.1, 1.5, zf, TRIM)
    if H > 6:
        for s in ((-1, 1) if up else (-1, 0, 1)): window(S, T_, s * wx, 4.5, 1.1, 1.5, zf, TRIM, inside=up)
    if up:                                                                       # the door onto the balcony: its frame, the step outside it
        for s in (-1, 1):
            bar(T_, 'wood', (s * 1.16 - 0.08, 4.0, zi - 0.03), (s * 1.16 + 0.08, 6.12, zf + 0.07), lin(TRIM))
        bar(T_, 'wood', (-1.3, 6.1, zi - 0.03), (1.3, 6.24, zf + 0.09), lin(TRIM))
        face(S, 'woodH', (-1.1, 4.0, zf), (2.2, 0, 0), (0, 0, -0.6), lin(CEILC))
        bar(T_, 'woodH', (-1.0, 3.36, 0.1), (1.0, 3.68, 0.7), lin(0x8a6a4e))

    # ---- porch: deck, posts with caps and braces, the beam, a shingled roof on rafters; a balcony for the tall houses ----
    PW = W / 2 + 0.5
    face(S, 'wood', (-PW, 0.3, 2.65), (2 * PW, 0, 0), (0, 0, -2.7), lin(DECK), step=1.0)
    bar(T_, 'woodH', (-PW, 0.0, 2.6), (PW, 0.3, 2.66), lin(DECK, 0.7))
    for s in (-1, 1):
        bar(T_, 'wood', (s * PW - 0.03, 0.0, -0.05), (s * PW + 0.03, 0.3, 2.66), lin(DECK, 0.7))
    ry = 6.3 if balc else 3.1                                                    # the porch roof: its base height in bld()
    a = 0.17; ca, sa = math.cos(a), math.sin(a)
    R = lambda y, z: (ry + 0.05 + y * ca - z * sa, 1.35 + y * sa + z * ca)
    top = R(-0.05, 1.1)[0] - 0.17                                                # the posts stop under the beam
    n = max(2, round(W / 3.4)) + 1
    posts = [-W / 2 + 0.1 + (W - 0.2) * i / (n - 1) for i in range(n)]
    for px in posts:
        bar(T_, 'wood', (px - 0.085, 0.3, 2.365), (px + 0.085, top, 2.535), lin(TRIM), seg=1.2)
        bar(T_, 'wood', (px - 0.12, 0.3, 2.33), (px + 0.12, 0.52, 2.57), lin(TRIM, 1.15))
        bar(T_, 'wood', (px - 0.12, top - 0.14, 2.33), (px + 0.12, top, 2.57), lin(TRIM, 1.15))
        for s in (-1, 1):                                                        # braces under the beam
            if abs(px + s * 0.4) > W / 2 + 0.2: continue
            for yb in ([top, 3.2] if balc else [top]):
                prism(T_, 'wood', [(px + s * 0.085, yb - 0.49, 2.41), (px + s * 0.085, yb - 0.36, 2.41), (px + s * 0.5, yb, 2.41), (px + s * 0.37, yb, 2.41),
                                   (px + s * 0.085, yb - 0.49, 2.49), (px + s * 0.085, yb - 0.36, 2.49), (px + s * 0.5, yb, 2.49), (px + s * 0.37, yb, 2.49)], lin(TRIM, 1.1))
    bar(T_, 'woodH', (-PW - 0.05, top, 2.36), (PW + 0.05, top + 0.16, 2.54), lin(TRIM))
    (y0, z0), (y1, z1) = R(0.05, -1.5), R(0.05, 1.5)
    face(S, 'shingle', (-PW - 0.1, y1, z1), (2 * PW + 0.2, 0, 0), (0, y0 - y1, z0 - z1), lin(ROOFC), tile=3.0, step=1.2)
    (yu0, zu0), (yu1, zu1) = R(-0.05, -1.5), R(-0.05, 1.5)
    face(S, 'woodH', (PW + 0.1, yu1, zu1), (-2 * PW - 0.2, 0, 0), (0, yu0 - yu1, zu0 - zu1), lin(0x8a745a), step=1.2)
    bar(T_, 'woodH', (-PW - 0.12, yu1 - 0.07, zu1 - 0.02), (PW + 0.12, y1 + 0.02, zu1 + 0.05), lin(TRIM))                # fascia
    nr = max(4, round(2 * PW / 1.2))
    for i in range(nr + 1):
        x = -PW + 0.2 + i * (2 * PW - 0.4) / nr
        ya, za = R(-0.05, -1.3); yb, zb = R(-0.05, 1.42)
        prism(T_, 'wood', [(x - 0.035, ya - 0.11, za), (x + 0.035, ya - 0.11, za), (x + 0.035, ya, za), (x - 0.035, ya, za),
                           (x - 0.035, yb - 0.11, zb), (x + 0.035, yb - 0.11, zb), (x + 0.035, yb, zb), (x - 0.035, yb, zb)], lin(0x5a4632))
    if balc:                                                                     # the balcony: its floor on joists, the rail and its balusters
        face(S, 'wood', (-PW, 3.36, 2.65), (2 * PW, 0, 0), (0, 0, -2.7), lin(0x8a6a4e), step=1.0)
        face(S, 'woodH', (PW, 3.2, 2.65), (-2 * PW, 0, 0), (0, 0, -2.7), lin(0x7a5c42), step=1.0)
        bar(T_, 'woodH', (-PW, 3.18, 2.6), (PW, 3.38, 2.67), lin(TRIM))
        for s in (-1, 1): bar(T_, 'wood', (s * PW - 0.03, 3.18, -0.05), (s * PW + 0.03, 3.38, 2.66), lin(TRIM))
        for i in range(nr + 1):
            x = -PW + 0.2 + i * (2 * PW - 0.4) / nr
            bar(T_, 'wood', (x - 0.035, 3.08, 0.1), (x + 0.035, 3.2, 2.6), lin(0x5a4632))
        bar(T_, 'woodH', (-PW, 4.26, 2.4), (PW, 4.36, 2.5), lin(TRIM))
        bar(T_, 'woodH', (-PW, 3.42, 2.42), (PW, 3.48, 2.48), lin(TRIM))
        x = -W / 2 - 0.4
        while x <= W / 2 + 0.4 + 1e-6:
            bar(T_, 'wood', (x - 0.025, 3.36, 2.425), (x + 0.025, 4.3, 2.475), lin(TRIM, 1.1)); x += 0.42
        if up:
            for s in (-1, 1):
                bar(T_, 'woodH', (s * (W / 2 + 0.45) - 0.045, 4.26, 0.05), (s * (W / 2 + 0.45) + 0.045, 4.36, 2.55), lin(TRIM))
                bar(T_, 'woodH', (s * (W / 2 + 0.45) - 0.03, 3.77, 0.05), (s * (W / 2 + 0.45) + 0.03, 3.83, 2.55), lin(TRIM))
    # a lantern on its bracket beside the door
    bar(T_, 'metal', (1.62, 2.34, zf + 0.05), (1.66, 2.38, zf + 0.42), lin(0x2a2a2a))
    bar(T_, 'metal', (1.55, 2.02, zf + 0.3), (1.73, 2.06, zf + 0.48), lin(0x2a2a2a))
    bar(T_, 'metal', (1.55, 2.28, zf + 0.3), (1.73, 2.34, zf + 0.48), lin(0x2a2a2a))
    bar(S, 'glow', (1.58, 2.06, zf + 0.33), (1.70, 2.28, zf + 0.45), (0.5, 0.3, 0.1))

    # ---- the rooms: boarded floor, wainscot, plastered walls, beamed ceiling; a stairwell and an upper floor in the tall houses ----
    IW, ID = W - 2 * T, D - T - 0.25                                              # the room between the walls
    face(S, 'woodH', (-W / 2 + 0.3, 0.3, -0.25), (W - 0.6, 0, 0), (0, 0, -(D - 0.6) + 0.05), lin(FLOORC), step=1.0)
    wh = [(well[0] + W / 2 - 0.25, well[1] + W / 2 - 0.25, -well[3] - 0.25, -well[2] - 0.25)] if well else []         # in the ceiling's own (x from the left wall, depth from the front)
    for (xa, xb, za, zb) in cut(W - 0.5, 0.0, D - 0.5, wh):
        face(S, 'woodH', (-W / 2 + 0.25 + xa, 3.8, -0.25 - zb), (xb - xa, 0, 0), (0, 0, zb - za), lin(CEILC, 1.5), step=1.0)             # the ceiling from below
        if up: face(S, 'woodH', (-W / 2 + 0.25 + xa, 4.0, -0.25 - za), (xb - xa, 0, 0), (0, 0, -(zb - za)), lin(FLOORC), step=1.0)       # the upper floor
    nb = max(2, round((D - 1.5) / 1.65))
    for i in range(nb + 1):
        z = -1.0 - i * (D - 2.0) / nb
        if well and well[2] - 0.2 < z < well[3] + 0.2:
            bar(T_, 'woodH', (-W / 2 + 0.3, 3.64, z - 0.07), (well[0] - 0.02, 3.8, z + 0.07), lin(CEILC, 0.8)); bar(T_, 'woodH', (well[1] + 0.02, 3.64, z - 0.07), (W / 2 - 0.3, 3.8, z + 0.07), lin(CEILC, 0.8))
        else: bar(T_, 'woodH', (-W / 2 + 0.3, 3.64, z - 0.07), (W / 2 - 0.3, 3.8, z + 0.07), lin(CEILC, 0.8))
    walls = [((Rx - T, 0, zi), (-1, 0, 0), (0, 0, -1), IW, [(IW / 2 - 1.24, IW / 2 + 1.24, 0.3, 3.04)] + ([(IW / 2 - 1.24, IW / 2 + 1.24, 4.0, 6.2)] if up else [])),
             ((Lx + T, 0, -D + T), (1, 0, 0), (0, 0, 1), IW, [(IW / 2 + XB - 0.9, IW / 2 + XB + 0.9, 0.3, 2.78)] if XB is not None else []),
             ((Lx + T, 0, zi), (0, 0, -1), (1, 0, 0), ID, []),
             ((Rx - T, 0, -D + T), (0, 0, 1), (-1, 0, 0), ID, [])]
    for (og, right, out, width, hs) in walls:
        og, right, out = Vector(og), Vector(right), Vector(out)
        at = lambda xa, y: og + right * xa + Vector((0, y, 0))
        for (xa, xb, ya, yb) in cut(width, 0.3, 1.2, hs):
            face(S, 'wood', at(xa, ya) + out * 0.03, right * (xb - xa), (0, yb - ya, 0), lin(PANEL), uo=rnd.random(), step=1.2)
        for (xa, xb, ya, yb) in cut(width, 1.2, 3.8, hs):
            face(S, 'plaster', at(xa, ya), right * (xb - xa), (0, yb - ya, 0), lin(0xcabf9e), tile=3.0, step=1.2)
        for (xa, xb, ya, yb) in cut(width, 0.3, 0.5, hs) + cut(width, 1.2, 1.28, hs) + cut(width, 3.66, 3.8, hs):      # skirting, dado rail, cornice
            p, q = at(xa, ya), at(xb, yb) + out * (0.06 if ya < 1 or ya > 3 else 0.075)
            bar(T_, 'woodH', tuple(p), tuple(q), lin(PANEL, 0.6) if ya < 3 else lin(0x4a3424))
        if up:
            for (xa, xb, ya, yb) in cut(width, 4.0, H - 0.2, hs):
                face(S, 'plaster', at(xa, ya), right * (xb - xa), (0, yb - ya, 0), lin(0xcfc6aa), tile=3.0, step=1.2)
            for (xa, xb, ya, yb) in cut(width, 4.0, 4.16, hs):
                bar(T_, 'woodH', tuple(at(xa, ya)), tuple(at(xb, yb) + out * 0.05), lin(0x4a3424))
    if up: face(S, 'woodH', (-W / 2 + 0.35, H - 0.2, -D + 0.35), (W - 0.7, 0, 0), (0, 0, D - 0.7), lin(CEILC, 1.5), step=1.2)

    # ---- back door: frame, the leaf standing open outside, the step ---------------------------------------------
    if XB is not None:
        for s in (-1, 1):
            bar(T_, 'wood', (XB + s * 0.86 - 0.07, 0.3, -D - 0.06), (XB + s * 0.86 + 0.07, 2.78, -D + T + 0.03), lin(TRIM))
        bar(T_, 'wood', (XB - 0.95, 2.7, -D - 0.07), (XB + 0.95, 2.84, -D + T + 0.03), lin(TRIM))
        face(S, 'woodH', (XB - 0.8, 0.3, -D + T + 0.02), (1.6, 0, 0), (0, 0, -T - 0.07), lin(FLOORC))
        bar(T_, 'woodH', (XB - 0.95, 0.0, -D - 0.8), (XB + 0.95, 0.15, -D), lin(DECK))
        e = XB + 0.84 * d                                                         # the leaf stands open on the world's +x side of the door
        door_leaf(T_, (e - 0.04, 0.3, -D - 0.845), (e + 0.04, 2.6, -D + 0.005), 0, 0x3a2618)
    return S, T_


def finish(name, S, T_, ao=(1.0, 0.62)):
    """Bevel the woodwork, join it to the flat faces, bake the shading."""
    a = make_mesh(name, S, smooth_angle=30.0); paint(a, S)
    b = make_mesh(name + 'Trim', T_, smooth_angle=30.0); paint(b, T_)
    bpy.context.view_layer.objects.active = b
    mod = b.modifiers.new('Bevel', 'BEVEL')                 # every edge of the woodwork is planed off: it catches the light
    mod.width = 0.011; mod.segments = 1; mod.limit_method = 'ANGLE'; mod.angle_limit = math.radians(40)
    bpy.ops.object.modifier_apply(modifier='Bevel')
    # smooth over the planed edges, the normals weighted by the size of the faces: the flat sides stay flat, the edges turn the light,
    # and a corner is one vertex instead of several (which is most of the weight of such a model)
    b.data.shade_smooth()
    mod = b.modifiers.new('Normals', 'WEIGHTED_NORMAL'); mod.keep_sharp = False; mod.weight = 60; mod.mode = 'FACE_AREA'
    bpy.ops.object.modifier_apply(modifier='Normals')
    bpy.ops.object.select_all(action='DESELECT')
    a.select_set(True); b.select_set(True); bpy.context.view_layer.objects.active = a
    bpy.ops.object.join()
    shade(a, dist=ao[0], strength=ao[1], samples=48, floor=0.0, floor_k=0.5)
    return a


def build():
    here = os.path.dirname(os.path.abspath(__file__))
    out, seen = [], set()
    for o in json.load(open(os.path.join(here, 'west.json'))):
        if o['text'] in seen: continue
        seen.add(o['text'])
        S, T_ = frontier(o)
        out.append((o['text'], finish(o['text'], S, T_)))
    return out
