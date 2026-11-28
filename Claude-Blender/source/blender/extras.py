# Dry Gulch, things of its own: the train that comes in from the west (the game moves it, src/life.js: four vehicles, each
# in its own space, x along the track with the engine's front at +x, wheels on y = 0), and at the Silver Queen mine a
# headframe on the outcrop and an ore cart on the rails. Same sizes as the game's own train, so its colliders fit.
import math
from mathutils import Vector
from lib import Soup, loft
from town import lin, bar, prism, finish

BLACK, RED, BRASS, IRON = 0x1c1c20, 0x8a1c1c, 0xc9a050, 0x2a2a2e
TAU = math.tau


def cyl(S, mat, a, b, r, col, segs=14, r2=None, caps=True):
    a, b = Vector(a), Vector(b)
    d = (b - a).normalized()
    u = d.orthogonal().normalized(); v = d.cross(u)
    vts, f, _ = loft([dict(c=tuple(a), rx=r, rz=r), dict(c=tuple(b), rx=r2 if r2 is not None else r, rz=r2 if r2 is not None else r)], segs=segs, sub=1, cap0=caps, cap1=caps, u=tuple(u), v=tuple(v))
    S.add(vts, f, tint=col, mat=mat)


def wheel(S, T_, x, r, z, col, spokes=8):
    """A wheel on the axle through (x, r) across the track, at z: a rim, a web set back, a hub, spokes."""
    s = 1 if z > 0 else -1
    cyl(S, 'metal', (x, r, z - 0.06), (x, r, z + 0.06), r, lin(col), 18)
    cyl(S, 'metal', (x, r, z + s * 0.06), (x, r, z + s * 0.075), r * 0.86, lin(col, 0.45), 18)
    cyl(S, 'metal', (x, r, z + s * 0.05), (x, r, z + s * 0.13), max(0.07, r * 0.2), lin(col, 1.2), 10)
    if r < 0.5: return
    for k in range(spokes):
        a = TAU * k / spokes
        c, sn = math.cos(a), math.sin(a)
        px, py = -sn * 0.035, c * 0.035
        za, zb = z + s * 0.07, z + s * 0.1
        prism(T_, 'metal', [(x + c * r * 0.15 - px, r + sn * r * 0.15 - py, za), (x + c * r * 0.15 + px, r + sn * r * 0.15 + py, za), (x + c * r * 0.9 + px, r + sn * r * 0.9 + py, za), (x + c * r * 0.9 - px, r + sn * r * 0.9 - py, za),
                            (x + c * r * 0.15 - px, r + sn * r * 0.15 - py, zb), (x + c * r * 0.15 + px, r + sn * r * 0.15 + py, zb), (x + c * r * 0.9 + px, r + sn * r * 0.9 + py, zb), (x + c * r * 0.9 - px, r + sn * r * 0.9 - py, zb)], lin(col, 1.15))


def truck(S, T_, x, r=0.45):
    """Two axles under the end of a car, in an iron frame."""
    for dx in (-0.5, 0.5):
        for z in (-0.72, 0.72): wheel(S, T_, x + dx, r, z, IRON)
        cyl(S, 'metal', (x + dx, r, -0.72), (x + dx, r, 0.72), 0.05, lin(IRON), 8)
    for z in (-0.86, 0.86): bar(T_, 'metal', (x - 0.85, r - 0.08, z - 0.03), (x + 0.85, r + 0.1, z + 0.03), lin(IRON, 1.3))


def loco():
    S, T_ = Soup(), Soup(); T_.plain = S
    bk, rd, br = lin(BLACK), lin(RED), lin(BRASS)
    bar(T_, 'flat', (-3.2, 0.8, -1.15), (3.2, 1.12, 1.15), bk)                                            # the frame and the running boards
    for z in (-1.2, 1.2): bar(T_, 'flat', (-0.8, 1.42, z - 0.16), (3.0, 1.48, z + 0.16), lin(RED, 0.7))
    # boiler, smokebox, bands of brass
    cyl(S, 'metal', (-1.0, 2.05, 0), (2.55, 2.05, 0), 0.78, bk, 20)
    cyl(S, 'metal', (2.55, 2.05, 0), (3.3, 2.05, 0), 0.82, lin(0x0e0e10), 20)
    cyl(S, 'metal', (3.3, 2.05, 0), (3.36, 2.05, 0), 0.6, lin(0x18181c), 18)
    cyl(S, 'metal', (3.36, 2.05, 0), (3.4, 2.05, 0), 0.1, br, 10)
    for x in (-0.6, 0.35, 1.3, 2.2): cyl(S, 'metal', (x - 0.04, 2.05, 0), (x + 0.04, 2.05, 0), 0.8, br, 20)
    cyl(S, 'metal', (2.52, 2.05, 0), (2.6, 2.05, 0), 0.845, br, 20)
    # the stack with its spark arrester, the domes, the bell in its yoke, the headlamp
    cyl(S, 'metal', (2.75, 2.75, 0), (2.75, 3.25, 0), 0.2, bk, 12)
    cyl(S, 'metal', (2.75, 3.25, 0), (2.75, 3.95, 0), 0.22, bk, 14, r2=0.58)
    cyl(S, 'metal', (2.75, 3.95, 0), (2.75, 4.1, 0), 0.58, bk, 14, r2=0.42)
    cyl(S, 'metal', (2.75, 4.1, 0), (2.75, 4.16, 0), 0.44, br, 14)
    for (x, r) in ((0.5, 0.36), (1.65, 0.3)):
        cyl(S, 'metal', (x, 2.7, 0), (x, 3.05, 0), r, br if x < 1 else bk, 14)
        v, f, _ = loft([dict(y=3.05, cx=x, rx=r, rz=r), dict(y=3.2, cx=x, rx=r * 0.8, rz=r * 0.8), dict(y=3.3, cx=x, rx=r * 0.3, rz=r * 0.3)], segs=14, sub=2)
        S.add(v, f, tint=br if x < 1 else bk, mat='metal')
    for z in (-0.2, 0.2): bar(T_, 'metal', (1.08, 2.8, z - 0.02), (1.12, 3.3, z + 0.02), br)
    bar(T_, 'metal', (1.08, 3.28, -0.22), (1.12, 3.32, 0.22), br)
    v, f, _ = loft([dict(y=3.26, cx=1.1, rx=0.05, rz=0.05), dict(y=3.2, cx=1.1, rx=0.1, rz=0.1), dict(y=3.0, cx=1.1, rx=0.14, rz=0.14), dict(y=2.94, cx=1.1, rx=0.17, rz=0.17)], segs=12, sub=2)
    S.add(v, f, tint=br, mat='metal')
    bar(T_, 'flat', (3.05, 2.9, -0.25), (3.5, 3.4, 0.25), bk)
    bar(S, 'glow', (3.5, 2.97, -0.18), (3.52, 3.33, 0.18), (0.5, 0.42, 0.25))
    bar(T_, 'metal', (3.0, 2.82, -0.2), (3.3, 2.9, 0.2), bk)
    # cylinders, rods
    for z in (-0.98, 0.98):
        cyl(S, 'metal', (2.3, 0.95, z), (3.1, 0.95, z), 0.24, bk, 12)
        cyl(S, 'metal', (2.26, 0.95, z), (2.3, 0.95, z), 0.26, br, 12); cyl(S, 'metal', (3.1, 0.95, z), (3.14, 0.95, z), 0.26, br, 12)
        bar(T_, 'metal', (-1.7, 0.5, z - 0.02 + (0.06 if z > 0 else -0.06)), (2.3, 0.6, z + 0.02 + (0.06 if z > 0 else -0.06)), lin(0x8a8f96))
    # the cab: red boards, a window each side, a curved roof
    bar(T_, 'wood', (-3.15, 1.1, -1.25), (-0.85, 3.5, 1.25), rd)
    for z in (-1.26, 1.26):
        s = 1 if z > 0 else -1
        bar(T_, 'flat', (-2.5, 2.5, z - 0.02), (-1.5, 3.25, z + 0.02), lin(0x15120f))
        for (lo, hi) in (((-2.56, 2.44), (-1.44, 2.5)), ((-2.56, 3.25), (-1.44, 3.31)), ((-2.56, 2.44), (-2.5, 3.31)), ((-1.5, 2.44), (-1.44, 3.31))):
            bar(T_, 'flat', (lo[0], lo[1], z + s * 0.0 - 0.035), (hi[0], hi[1], z + s * 0.0 + 0.035), lin(BRASS, 0.8))
    for i in range(7):
        a0, a1 = -0.62 + i * 0.177, -0.62 + (i + 1) * 0.177
        y0, y1 = 3.5 + 0.38 * math.cos(a0 * 1.9) - 0.2, 3.5 + 0.38 * math.cos(a1 * 1.9) - 0.2
        z0, z1 = 2.3 * a0, 2.3 * a1
        prism(T_, 'flat', [(-3.35, y0, z0), (-0.65, y0, z0), (-0.65, y1, z1), (-3.35, y1, z1), (-3.35, y0 + 0.07, z0), (-0.65, y0 + 0.07, z0), (-0.65, y1 + 0.07, z1), (-3.35, y1 + 0.07, z1)], bk)
    # the cow-catcher: slats running down to a point
    for i in range(-4, 5):
        z = i * 0.14
        prism(T_, 'metal', [(3.2, 0.95, z - 0.03), (3.2, 0.95, z + 0.03), (4.25, 0.12, z * 0.25 + 0.03), (4.25, 0.12, z * 0.25 - 0.03),
                            (3.2, 1.05, z - 0.03), (3.2, 1.05, z + 0.03), (4.3, 0.2, z * 0.25 + 0.03), (4.3, 0.2, z * 0.25 - 0.03)], rd)
    bar(T_, 'metal', (3.15, 0.86, -0.7), (3.25, 1.06, 0.7), rd)
    for x in (1.8, 0.1, -1.6):
        for z in (-0.72, 0.72): wheel(S, T_, x, 0.72, z, RED, 10)
        cyl(S, 'metal', (x, 0.72, -0.72), (x, 0.72, 0.72), 0.07, lin(IRON), 8)
    for z in (-0.72, 0.72): wheel(S, T_, 3.0, 0.42, z, RED)
    return S, T_


def tender():
    S, T_ = Soup(), Soup(); T_.plain = S
    bk = lin(BLACK)
    bar(T_, 'flat', (-1.85, 0.72, -1.15), (1.85, 0.9, 1.15), bk)
    bar(T_, 'flat', (-1.8, 0.9, -1.2), (1.8, 2.15, 1.2), bk)
    for (lo, hi) in (((-1.85, 2.15, -1.25), (1.85, 2.3, -1.15)), ((-1.85, 2.15, 1.15), (1.85, 2.3, 1.25)), ((-1.9, 2.15, -1.25), (-1.8, 2.3, 1.25)), ((1.8, 2.15, -1.25), (1.9, 2.3, 1.25))):
        bar(T_, 'flat', lo, hi, lin(BLACK, 1.4))
    for z in (-1.21, 1.21): bar(T_, 'flat', (-1.5, 1.2, z - 0.01), (1.5, 1.9, z + 0.01), lin(RED, 0.8))                # a painted panel on each side
    import random
    r = random.Random(5)
    for i in range(26):                                                                                                  # coal
        x, z = -1.5 + r.random() * 3.0, -0.95 + r.random() * 1.9
        s = 0.16 + r.random() * 0.16
        v, f, _ = loft([dict(y=2.12, cx=x, cz=z, rx=s, rz=s * 0.8), dict(y=2.3 + s * 0.6, cx=x + 0.03, cz=z, rx=s * 0.7, rz=s * 0.6), dict(y=2.36 + s * 0.8, cx=x, cz=z, rx=s * 0.2, rz=s * 0.2)], segs=6, sub=1)
        S.add(v, f, tint=lin(0x0c0c0e, 0.8 + r.random() * 0.6), mat='flat')
    for x in (-1.1, 1.1): truck(S, T_, x)
    return S, T_


def boxcar():
    S, T_ = Soup(), Soup(); T_.plain = S
    c, dk = lin(0x7a3024), lin(0x5a2018)
    bar(T_, 'flat', (-4.35, 0.82, -1.25), (4.35, 1.0, 1.25), lin(IRON))
    bar(T_, 'flat', (-4.3, 1.0, -1.3), (4.3, 3.6, 1.3), lin(0x5a2018, 0.7))
    n = 34
    for i in range(n):                                                                                                   # upright boards, each a shade of its own
        x0, x1 = -4.3 + i * 8.6 / n, -4.3 + (i + 1) * 8.6 / n
        k = 0.85 + 0.3 * ((i * 37) % 11) / 11
        for z in (-1.3, 1.3):
            if abs((x0 + x1) / 2) < 0.8 and z > 0: continue
            bar(S, 'wood', (x0 + 0.012, 1.02, z - 0.02 if z > 0 else z - 0.035), (x1 - 0.012, 3.58, z + 0.035 if z > 0 else z + 0.02), tuple(v * k for v in c))
    for x in (-4.3, 4.3):
        for i in range(10):
            z0, z1 = -1.3 + i * 0.26, -1.3 + (i + 1) * 0.26
            bar(S, 'wood', (x - 0.035 if x < 0 else x - 0.02, 1.02, z0 + 0.012), (x + 0.02 if x < 0 else x + 0.035, 3.58, z1 - 0.012), tuple(v * (0.85 + 0.3 * ((i * 53) % 7) / 7) for v in c))
    bar(T_, 'wood', (-0.8, 1.05, 1.32), (0.8, 3.3, 1.38), dk)                                                            # the sliding door on its rail
    bar(T_, 'metal', (-1.7, 3.32, 1.33), (1.7, 3.38, 1.4), lin(IRON, 1.4))
    for y in (1.5, 2.2, 2.9): bar(T_, 'wood', (-0.8, y, 1.38), (0.8, y + 0.1, 1.41), lin(0x5a2018, 0.8))
    for i in range(9):                                                                                                   # a curved roof with a walk along the top
        a0, a1 = -0.62 + i * 0.138, -0.62 + (i + 1) * 0.138
        y0, y1 = 3.6 + 0.4 * math.cos(a0 * 1.9) - 0.2, 3.6 + 0.4 * math.cos(a1 * 1.9) - 0.2
        prism(T_, 'flat', [(-4.45, y0, 2.3 * a0), (4.45, y0, 2.3 * a0), (4.45, y1, 2.3 * a1), (-4.45, y1, 2.3 * a1), (-4.45, y0 + 0.06, 2.3 * a0), (4.45, y0 + 0.06, 2.3 * a0), (4.45, y1 + 0.06, 2.3 * a1), (-4.45, y1 + 0.06, 2.3 * a1)], dk)
    bar(T_, 'woodH', (-4.3, 3.84, -0.25), (4.3, 3.9, 0.25), lin(0x8a6a4a))
    for i in range(8): bar(T_, 'metal', (4.36, 1.2 + i * 0.3, 0.5), (4.4, 1.24 + i * 0.3, 0.95), lin(IRON, 1.4))         # a ladder at the end
    for z in (0.5, 0.95): bar(T_, 'metal', (4.36, 1.1, z - 0.02), (4.4, 3.5, z + 0.02), lin(IRON, 1.4))
    for x in (-2.7, 2.7): truck(S, T_, x)
    return S, T_


def coach():
    S, T_ = Soup(), Soup(); T_.plain = S
    g, dk = lin(0x2c4a32), lin(0x1c2a1e)
    bar(T_, 'flat', (-4.7, 0.82, -1.25), (4.7, 1.0, 1.25), lin(IRON))
    bar(T_, 'wood', (-4.5, 1.0, -1.3), (4.5, 2.25, 1.3), g)                                                              # below the windows
    bar(T_, 'wood', (-4.5, 2.95, -1.3), (4.5, 3.5, 1.3), g)                                                              # above them
    bar(T_, 'flat', (-4.5, 2.25, -1.26), (4.5, 2.95, 1.26), lin(0x15120f))
    for i in range(-3, 4):
        for z in (-1.3, 1.3):
            s = 1 if z > 0 else -1
            from town import face
            if s > 0: face(S, 'window', (i * 1.2 - 0.36, 2.3, z + 0.005), (0.72, 0, 0), (0, 0.6, 0), (1, 1, 1), uv='fit', step=9)
            else: face(S, 'window', (i * 1.2 + 0.36, 2.3, z - 0.005), (-0.72, 0, 0), (0, 0.6, 0), (1, 1, 1), uv='fit', step=9)
    for i in range(-4, 4):
        for z in (-1.3, 1.3): bar(T_, 'wood', (i * 1.2 + 0.36, 2.25, z - 0.03), (i * 1.2 + 0.84, 2.95, z + 0.03), g)       # the posts between the windows
    for z in (-1.31, 1.31):
        bar(T_, 'flat', (-4.5, 2.2, z - 0.025), (4.5, 2.27, z + 0.025), lin(0xc9a050))                                   # a gilt line under the windows
        bar(T_, 'flat', (-4.5, 1.02, z - 0.02), (4.5, 1.12, z + 0.02), dk)
    for i in range(9):
        a0, a1 = -0.62 + i * 0.138, -0.62 + (i + 1) * 0.138
        y0, y1 = 3.5 + 0.38 * math.cos(a0 * 1.9) - 0.2, 3.5 + 0.38 * math.cos(a1 * 1.9) - 0.2
        prism(T_, 'flat', [(-4.75, y0, 2.35 * a0), (4.75, y0, 2.35 * a0), (4.75, y1, 2.35 * a1), (-4.75, y1, 2.35 * a1), (-4.75, y0 + 0.07, 2.35 * a0), (4.75, y0 + 0.07, 2.35 * a0), (4.75, y1 + 0.07, 2.35 * a1), (-4.75, y1 + 0.07, 2.35 * a1)], dk)
    bar(T_, 'flat', (-3.9, 3.72, -0.55), (3.9, 3.98, 0.55), g)                                                           # the clerestory
    bar(T_, 'flat', (-4.0, 3.98, -0.62), (4.0, 4.04, 0.62), dk)
    for x in (-4.6, 4.6):                                                                                                # end platforms with their rails
        s = 1 if x > 0 else -1
        for z in (-1.1, 1.1): bar(T_, 'metal', (x - 0.02, 1.0, z - 0.02), (x + 0.02, 1.95, z + 0.02), lin(IRON, 1.5))
        bar(T_, 'metal', (x - 0.02, 1.9, -1.1), (x + 0.02, 1.95, 1.1), lin(IRON, 1.5))
    for x in (-2.9, 2.9): truck(S, T_, x)
    return S, T_


def headframe():
    """Over the mine: two tall legs and two back stays, braces, a sheave wheel at the top, a rope down to the shaft house."""
    S, T_ = Soup(), Soup(); T_.plain = S
    w = lin(0x6a4a30)
    H = 6.2
    def timber(a, b, t=0.22, col=w):
        a, b = Vector(a), Vector(b)
        d = (b - a).normalized()
        u = d.orthogonal().normalized() * (t / 2); v = d.cross(u).normalized() * (t / 2)
        prism(T_, 'wood', [tuple(a - u - v), tuple(a + u - v), tuple(a + u + v), tuple(a - u + v), tuple(b - u - v), tuple(b + u - v), tuple(b + u + v), tuple(b - u + v)], col)
    for z in (-1.0, 1.0):
        timber((0.9, 0, z * 1.5), (0.25, H, z * 0.75), 0.26)                 # the legs lean in towards the top
        timber((-2.6, 0, z * 1.5), (-0.1, H - 0.4, z * 0.75), 0.22)          # the back stays
        for y in (1.6, 3.4):
            f = y / H
            timber((0.9 - 0.65 * f, y, z * (1.5 - 0.75 * f)), (-2.6 + 2.5 * f * 0.96, y, z * (1.5 - 0.75 * f)), 0.14)
    for y in (1.6, 3.4, 5.0):
        f = y / H
        timber((0.9 - 0.65 * f, y, -(1.5 - 0.75 * f)), (0.9 - 0.65 * f, y, 1.5 - 0.75 * f), 0.16)
    timber((0.9 - 0.65 * 0.26, 1.6, -1.3), (0.9 - 0.65 * 0.55, 3.4, 1.09), 0.12)      # a cross brace on the front
    timber((0.9 - 0.65 * 0.26, 1.6, 1.3), (0.9 - 0.65 * 0.55, 3.4, -1.09), 0.12)
    bar(T_, 'woodH', (-0.2, H - 0.1, -1.0), (0.6, H + 0.14, 1.0), w)                      # the cap that carries the wheel
    # the sheave wheel: a rim, spokes, its axle
    for k in range(16):
        a0, a1 = TAU * k / 16, TAU * (k + 1) / 16
        r = 0.85
        timber((0.2 + r * math.cos(a0), H + 0.95 + r * math.sin(a0), 0), (0.2 + r * math.cos(a1), H + 0.95 + r * math.sin(a1), 0), 0.09, lin(IRON, 1.6))
    for k in range(6):
        a = TAU * k / 6
        timber((0.2, H + 0.95, 0), (0.2 + 0.82 * math.cos(a), H + 0.95 + 0.82 * math.sin(a), 0), 0.05, lin(IRON, 1.6))
    cyl(S, 'metal', (0.2, H + 0.95, -0.45), (0.2, H + 0.95, 0.45), 0.06, lin(IRON), 8)
    for z in (-0.4, 0.4): timber((0.2, H + 0.1, z), (0.2, H + 1.0, z), 0.14)
    cyl(S, 'flat', (1.05, H + 0.95, 0), (1.05, 0.3, 0), 0.02, lin(0x3a3028), 6)          # the rope down the shaft
    cyl(S, 'flat', (-0.65, H + 0.95, 0), (-3.4, 0.9, 0), 0.02, lin(0x3a3028), 6)         # and back to the winding drum
    # the winding drum in its frame, and a collar of boards round the shaft's mouth
    cyl(S, 'wood', (-3.4, 0.9, -0.45), (-3.4, 0.9, 0.45), 0.42, w, 12)
    for z in (-0.55, 0.55):
        bar(T_, 'wood', (-3.8, 0, z - 0.07), (-3.66, 1.3, z + 0.07), w); bar(T_, 'wood', (-3.14, 0, z - 0.07), (-3.0, 1.3, z + 0.07), w)
        bar(T_, 'woodH', (-3.85, 1.2, z - 0.07), (-2.95, 1.34, z + 0.07), w)
    cyl(S, 'metal', (-3.4, 0.9, 0.55), (-3.4, 0.9, 0.9), 0.03, lin(IRON), 6)
    bar(T_, 'metal', (-3.43, 0.5, 0.86), (-3.37, 0.93, 0.92), lin(IRON))
    for (lo, hi) in (((0.45, 0, -0.75), (0.6, 0.5, 0.75)), ((1.5, 0, -0.75), (1.65, 0.5, 0.75)), ((0.45, 0, -0.75), (1.65, 0.5, -0.6)), ((0.45, 0, 0.6), (1.65, 0.5, 0.75))):
        bar(T_, 'wood', lo, hi, lin(0x5a4030))
    bar(S, 'flat', (0.6, 0.02, -0.6), (1.5, 0.05, 0.6), (0.004, 0.004, 0.004))           # the dark of the shaft
    return S, T_


def minecart():
    """An ore cart on the mine's rails (x along the track): a tub of iron-bound boards, heaped with ore."""
    S, T_ = Soup(), Soup(); T_.plain = S
    w, ir = lin(0x6a4a30), lin(IRON, 1.5)
    bar(T_, 'woodH', (-0.6, 0.28, -0.26), (0.6, 0.36, 0.26), lin(0x4a3424))
    for z in (-0.4, 0.4):
        s = 1 if z > 0 else -1
        prism(T_, 'wood', [(-0.6, 0.36, s * 0.26), (0.6, 0.36, s * 0.26), (0.6, 0.36, s * 0.3), (-0.6, 0.36, s * 0.3), (-0.72, 0.95, s * 0.4), (0.72, 0.95, s * 0.4), (0.72, 0.95, s * 0.44), (-0.72, 0.95, s * 0.44)], w)
    for x in (-0.6, 0.6):
        s = 1 if x > 0 else -1
        prism(T_, 'wood', [(x, 0.36, -0.28), (x + s * 0.04, 0.36, -0.28), (x + s * 0.04, 0.36, 0.28), (x, 0.36, 0.28), (x + s * 0.12, 0.95, -0.42), (x + s * 0.16, 0.95, -0.42), (x + s * 0.16, 0.95, 0.42), (x + s * 0.12, 0.95, 0.42)], w)
    for x in (-0.35, 0.35):
        for z in (-0.3, 0.3):
            cyl(S, 'metal', (x, 0.17, z - 0.03), (x, 0.17, z + 0.03), 0.17, ir, 12)
        cyl(S, 'metal', (x, 0.17, -0.3), (x, 0.17, 0.3), 0.03, ir, 6)
    bar(T_, 'metal', (-0.74, 0.9, -0.46), (0.74, 0.97, -0.42), ir); bar(T_, 'metal', (-0.74, 0.9, 0.42), (0.74, 0.97, 0.46), ir)
    import random
    r = random.Random(9)
    for i in range(14):
        x, z = -0.5 + r.random(), -0.28 + r.random() * 0.56
        s = 0.1 + r.random() * 0.1
        v, f, _ = loft([dict(y=0.82, cx=x, cz=z, rx=s, rz=s * 0.8), dict(y=0.98 + s * 0.5, cx=x, cz=z, rx=s * 0.7, rz=s * 0.6), dict(y=1.02 + s * 0.8, cx=x, cz=z, rx=s * 0.2, rz=s * 0.2)], segs=6, sub=1)
        S.add(v, f, tint=lin(0x8a7a8a if i % 4 else 0xb8b8c8, 0.7 + r.random() * 0.5), mat='flat')
    return S, T_


def build():
    out = []
    for name, fn in (('loco', loco), ('tender', tender), ('boxcar', boxcar), ('coach', coach), ('headframe', headframe), ('minecart', minecart)):
        out.append((name, finish(name, *fn(), ao=(0.7, 0.6))))
    return out
