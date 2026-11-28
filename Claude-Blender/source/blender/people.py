# The people of the Blender version: ONE library of parts on one skeleton, from which the game dresses every figure
# of Dry Gulch, Kagemori and Uri (enemies, heroes, bystanders, duel villains) according to its look, exactly as
# makeHumanoid() in src/actors.js does with its coloured shapes: a body, a face, hair, a hat, garments, beards.
# Same size and joints as there: hips at 0.92, shoulders at (+-0.275, 1.42), hip joints at (+-0.1, 0.92), knees 0.45
# lower, hands 0.6 under the shoulders, feet on y = 0. x is the figure's left, +z its front.
# A vertex carries a colour KEY: the name of an entry of the look ('shirt', 'hatC', 'cape' ...) or a fixed '#rrggbb'.
import math
from lib import Soup, loft, ellipsoid, lathe, box, xform, make_mesh, reset, TAU
from pack import shade_figure, export_figure

BONES = [('hips', None, (0, 0.92, 0)), ('armL', 'hips', (0.275, 1.42, 0)), ('armR', 'hips', (-0.275, 1.42, 0)),
         ('legL', None, (0.1, 0.92, 0)), ('shinL', 'legL', (0.1, 0.47, 0)), ('legR', None, (-0.1, 0.92, 0)), ('shinR', 'legR', (-0.1, 0.47, 0))]
HIPS = {'hips': 1.0}
FRONT = math.pi / 2
STEEL, DARKSTEEL, GOLD, BLACK, LEATHER = '#c9ced6', '#70757c', '#d9b23a', '#0c0c0c', '#3a2414'

TK = [(0.97, 0.158, 0.104, 0.108), (1.08, 0.155, 0.100, 0.104), (1.22, 0.176, 0.118, 0.112), (1.34, 0.202, 0.130, 0.120),
      (1.43, 0.222, 0.118, 0.118), (1.485, 0.165, 0.092, 0.098), (1.525, 0.075, 0.062, 0.070)]            # the trunk: y, rx, rz front, rz back
HK = [(1.548, 0.040, 0.028, 0.028, 0.030), (1.565, 0.028, 0.055, 0.060, 0.050), (1.60, 0.012, 0.083, 0.094, 0.085), (1.645, 0.004, 0.098, 0.106, 0.104),
      (1.69, 0.0, 0.104, 0.107, 0.116), (1.74, 0.0, 0.103, 0.105, 0.120), (1.79, 0.0, 0.090, 0.090, 0.106), (1.822, 0.0, 0.055, 0.055, 0.066),
      (1.835, 0.0, 0.012, 0.012, 0.012)]                                                                 # the head: y, cz, rx, rz front, rz back


def clamp01(t):
    return max(0.0, min(1.0, t))


def _at(table, y):
    if y <= table[0][0]: return table[0][1:]
    for a, b in zip(table, table[1:]):
        if y <= b[0]:
            t = (y - a[0]) / (b[0] - a[0])
            return tuple(a[i] + (b[i] - a[i]) * t for i in range(1, len(a)))
    return table[-1][1:]


def tkeys(ys, grow=0.0, n=2.5, gz=None):
    """Sections of a garment that follows the trunk at the heights ys, `grow` metres outside it (gz: for front and back)."""
    out = []
    for y in ys:
        rx, rz, zb = _at(TK, y)
        g2 = grow if gz is None else gz
        out.append(dict(y=y, rx=rx + grow, rz=rz + g2, zb=zb + g2, n=n))
    return out


def hkeys(ys, grow=0.0, front=None, n=2.2):
    """Sections that follow the head. front(y) -> the front radius instead (smaller than the face: the face shows)."""
    out = []
    for y in ys:
        cz, rx, rz, zb = _at(HK, y)
        out.append(dict(y=y, cz=cz, rx=rx + grow, rz=(rz + grow) if front is None else front(y), zb=zb + grow, n=n))
    return out


def wskirt(top, span, kf=0.7, kb=0.45):
    """The weights of a skirt or coat tail: the further down, the more it goes with the leg on its side."""
    def w(p):
        t = clamp01((top - p[1]) / span)
        k = (kf if p[2] > -0.02 else kb) * t * clamp01(abs(p[0]) / 0.05)
        return {'hips': 1 - k, ('legL' if p[0] > 0 else 'legR'): k}
    return w


class Maker:
    def __init__(self):
        self.S = Soup()

    def part(self, name):
        self.S.begin(name); return self

    def L(self, keys, zone, w=HIPS, segs=14, sub=2, grp='body', tint=1.0, both=False, **kw):
        v, f, _ = loft(keys, segs=segs, sub=sub, **kw)
        self.S.add(v, f, zone, w, tint=tint, grp=grp)
        if both:                                              # the inside of a skirt, a cape, a brim: the same faces turned over, darker
            self.S.add(v, f, zone, w, tint=(tint if isinstance(tint, (int, float)) else 1.0) * 0.55, grp=grp, flip=True)

    def E(self, c, r, zone, w=HIPS, rot=(0, 0, 0), segs=8, rings=5, grp='body', tint=1.0):
        v, f = ellipsoid(c, r, rot, segs, rings)
        self.S.add(v, f, zone, w, tint=tint, grp=grp)

    def B(self, c, s, zone, w=HIPS, rot=(0, 0, 0), grp='body', tint=1.0):
        v, f = box(c, s, rot)
        self.S.add(v, f, zone, w, tint=tint, grp=grp)

    def T(self, prof, zone, c=(0, 0, 0), segs=24, sx=1.0, sz=1.0, mod=None, rot=None, about=None, move=(0, 0, 0), w=HIPS, tint=1.0, both=False):
        v, f = lathe(prof, c=c, segs=segs, sx=sx, sz=sz, mod=mod)
        if rot: v = xform(v, rot=rot, about=about or c, move=move)
        self.S.add(v, f, zone, w, tint=tint)
        if both: self.S.add(v, f, zone, w, tint=0.55, flip=True)

    # ------------------------------------------------------------------------------------------------------------
    def body(self):
        m = self.part('body')
        for s, side in ((1, 'L'), (-1, 'R')):
            x0 = 0.1 * s
            leg, shin = 'leg' + side, 'shin' + side

            def wleg(p, leg=leg, shin=shin):
                t = clamp01((0.56 - p[1]) / 0.18)
                return {leg: 1 - t, shin: t}
            K = [dict(y=0.99, rx=0.088, rz=0.100), dict(y=0.88, rx=0.092, rz=0.104), dict(y=0.70, rx=0.082, rz=0.092), dict(y=0.53, rx=0.068, rz=0.076, cz=0.006),
                 dict(y=0.44, rx=0.064, rz=0.070, cz=0.004), dict(y=0.30, rx=0.062, rz=0.071, cz=-0.006), dict(y=0.15, rx=0.060, rz=0.066),
                 dict(y=0.075, rx=0.068, rz=0.078, cz=0.008)]
            for k in K: k['cx'] = x0
            m.L(K, 'pants', wleg, segs=12, sub=3, tint=lambda p: 0.82 + 0.18 * clamp01((p[1] - 0.06) / 0.3))
            K = [dict(c=(x0, 0.045, -0.092), rx=0.020, rz=0.030), dict(c=(x0, 0.060, -0.072), rx=0.040, rz=0.060), dict(c=(x0, 0.070, -0.02), rx=0.046, rz=0.070),
                 dict(c=(x0, 0.050, 0.05), rx=0.049, rz=0.050), dict(c=(x0, 0.040, 0.12), rx=0.048, rz=0.040), dict(c=(x0, 0.032, 0.185), rx=0.040, rz=0.032),
                 dict(c=(x0, 0.028, 0.215), rx=0.018, rz=0.020)]
            for k in K: k['n'] = 3.0
            m.L(K, 'boots', {shin: 1.0}, segs=12, sub=2, u=(1, 0, 0), v=(0, 1, 0), tint=lambda p: 0.55 + 0.45 * clamp01(p[1] / 0.03))
            m.L([dict(y=0.05, rx=0.050, rz=0.056, cz=-0.014, cx=x0), dict(y=0.20, rx=0.052, rz=0.058, cz=-0.01, cx=x0)], 'boots', {shin: 1.0}, segs=12)
            m.B((x0, 0.016, -0.058), (0.074, 0.032, 0.062), 'boots', {shin: 1.0}, tint=0.5)
        K = [dict(y=0.80, rx=0.06, rz=0.05), dict(y=0.84, rx=0.14, rz=0.095), dict(y=0.92, rx=0.165, rz=0.112, zb=0.118), dict(y=0.99, rx=0.160, rz=0.108)]
        for k in K: k['n'] = 2.4
        m.L(K, 'pants', segs=16, sub=3)
        K = [dict(y=0.950, rx=0.162, rz=0.110, zb=0.114), dict(y=0.958, rx=0.170, rz=0.117, zb=0.121), dict(y=0.997, rx=0.170, rz=0.116, zb=0.120), dict(y=1.005, rx=0.160, rz=0.106, zb=0.110)]
        for k in K: k['n'] = 2.4
        m.L(K, 'belt', segs=16, sub=1)
        m.B((0, 0.978, 0.117), (0.055, 0.042, 0.012), GOLD)
        m.L(tkeys([t[0] for t in TK]), 'shirt', segs=18, sub=3)
        m.L([dict(y=1.49, rx=0.050, rz=0.052), dict(y=1.60, rx=0.054, rz=0.056, cz=0.008)], 'skin', segs=12)
        m.L([dict(y=1.512, rx=0.066, rz=0.062, zb=0.066), dict(y=1.556, rx=0.075, rz=0.07, zb=0.074)], 'shirt', cap0=False, cap1=False, a0=FRONT + 0.35, a1=FRONT + TAU - 0.35)
        for s, side in ((1, 'L'), (-1, 'R')):
            x0 = 0.275 * s
            arm, g = {'arm' + side: 1.0}, 'arm' + side
            K = [dict(y=1.492, rx=0.028, rz=0.030), dict(y=1.475, rx=0.058, rz=0.062), dict(y=1.42, rx=0.070, rz=0.074), dict(y=1.31, rx=0.058, rz=0.062),
                 dict(y=1.17, rx=0.050, rz=0.054, cz=-0.006), dict(y=1.03, rx=0.047, rz=0.050, cz=0.004), dict(y=0.90, rx=0.041, rz=0.044, cz=0.012),
                 dict(y=0.878, rx=0.043, rz=0.046, cz=0.014)]
            for k in K: k['cx'] = x0
            m.L(K, 'sleeve', arm, segs=12, sub=3, grp=g)
            m.L([dict(y=0.912, rx=0.045, rz=0.048, cz=0.012, cx=x0), dict(y=0.872, rx=0.046, rz=0.049, cz=0.014, cx=x0)], 'cuff', arm, segs=12, sub=1, grp=g)
            m.E((x0, 0.826, 0.016), (0.023, 0.050, 0.040), 'glove', arm, segs=10, rings=7, grp=g)
            m.E((x0, 0.778, 0.032), (0.022, 0.028, 0.034), 'glove', arm, rot=(0.3, 0, 0), segs=10, rings=6, grp=g)
            m.E((x0 - s * 0.014, 0.812, 0.052), (0.012, 0.028, 0.013), 'glove', arm, rot=(0.5, 0, 0), grp=g)
        m.L(hkeys([h[0] for h in HK]), 'skin', segs=18, sub=3)

        m.part('face')
        m.E((0, 1.670, 0.104), (0.016, 0.033, 0.021), 'skin', rot=(-0.35, 0, 0), rings=6)
        for s in (1, -1):
            m.E((s * 0.104, 1.672, -0.004), (0.012, 0.030, 0.018), 'skin')
            m.E((s * 0.040, 1.702, 0.097), (0.014, 0.009, 0.008), BLACK)
            m.E((s * 0.042, 1.725, 0.099), (0.025, 0.0065, 0.008), 'brow', rot=(0, 0, s * 0.10), rings=4)
        m.E((0, 1.603, 0.102), (0.026, 0.0055, 0.007), 'lip', rings=4)

        m.part('hair')
        K = [dict(y=1.60, cz=-0.030, rx=0.080, rz=0.030, zb=0.075), dict(y=1.66, cz=-0.012, rx=0.105, rz=0.050, zb=0.104), dict(y=1.72, cz=-0.006, rx=0.109, rz=0.070, zb=0.124),
             dict(y=1.775, cz=-0.004, rx=0.104, rz=0.092, zb=0.118), dict(y=1.83, rx=0.060, rz=0.060, zb=0.070), dict(y=1.845, rx=0.012, rz=0.012)]
        m.L(K, 'hair', segs=16)

        # things on the arms and legs that some looks have
        m.part('wideSleeve')
        for s, side in ((1, 'L'), (-1, 'R')):
            m.E((0.275 * s, 1.05, -0.035), (0.062, 0.20, 0.12), 'sleeve', {'arm' + side: 1.0}, segs=10, rings=7, grp='arm' + side)
        m.part('bootTop')
        for s, side in ((1, 'L'), (-1, 'R')):
            m.L([dict(y=0.09, rx=0.066, rz=0.073, cx=0.1 * s), dict(y=0.40, rx=0.070, rz=0.077, cx=0.1 * s, cz=-0.004), dict(y=0.43, rx=0.073, rz=0.08, cx=0.1 * s, cz=-0.004)],
                'boots', {'shin' + side: 1.0}, segs=12)
        m.part('shield')                                           # a heater shield on the left arm, a pale stripe down it
        m.L([dict(c=(0.345, 1.26, 0.05), rx=0.03, rz=0.20), dict(c=(0.35, 1.2, 0.05), rx=0.03, rz=0.215), dict(c=(0.35, 0.95, 0.05), rx=0.03, rz=0.2), dict(c=(0.348, 0.72, 0.05), rx=0.022, rz=0.03)],
            'shield', {'armL': 1.0}, segs=10, grp='armL')
        m.B((0.383, 1.0, 0.05), (0.012, 0.44, 0.07), '#f0ece0', {'armL': 1.0}, grp='armL')
        m.B((0.383, 1.12, 0.05), (0.012, 0.07, 0.32), '#f0ece0', {'armL': 1.0}, grp='armL')

        m.part('gunbelt')                                          # slanting to the right hip, cartridges at the back, the holster on the thigh
        n = (-0.16, 0.987, 0.0)
        K = [dict(c=(n[0] * d, 0.905 + n[1] * d, 0.002), rx=r, rz=r * 0.70, n=2.4) for d, r in ((-0.022, 0.172), (-0.016, 0.181), (0.016, 0.181), (0.022, 0.172))]
        m.L(K, LEATHER, segs=16, sub=1, u=(0.987, 0.16, 0), v=(0, 0, 1))
        for i in range(7):
            a = math.pi * 1.5 + (i - 3) * 0.16
            x, z = 0.183 * math.cos(a), 0.128 * math.sin(a)
            m.E((x, 0.905 + 0.16 * x, z), (0.007, 0.022, 0.007), GOLD, segs=6, rings=4)
        m.L([dict(c=(-0.196, 0.90, 0.012), rx=0.030, rz=0.052), dict(c=(-0.200, 0.82, 0.012), rx=0.030, rz=0.050), dict(c=(-0.198, 0.70, 0.018), rx=0.022, rz=0.030),
             dict(c=(-0.197, 0.675, 0.02), rx=0.010, rz=0.014)], LEATHER, {'hips': 0.45, 'legR': 0.55}, segs=10)

    # ------------------------------------------------------------------------------------------------------------
    def hats(self):
        m = self
        hy = 1.772

        def brimmed(curl, brim, crown_h, crown_r, pinch=0.30, crease=0.032):
            def shape(x, y, z, r, th):
                if r > crown_r + 0.012 and y < 0.04:
                    t = ((r - crown_r - 0.012) / max(0.01, brim - crown_r - 0.012)) ** 2
                    y += curl * t * math.cos(th) ** 2 - 0.018 * t * math.sin(th) ** 2
                if y > 0.05:
                    t = clamp01((y - 0.05) / max(0.02, crown_h - 0.06))
                    y -= crease * t * t * math.exp(-(x / 0.04) ** 2)
                    if z > 0: x *= 1 - pinch * t * clamp01(z / 0.12)
                return (x, y, z)
            b, c, h = brim, crown_r, crown_h
            return [(0.095, 0.0), (c + (b - c) * 0.3, 0.002), (c + (b - c) * 0.65, 0.006), (b - 0.009, 0.011), (b, 0.019), (b - 0.009, 0.027), (c + (b - c) * 0.65, 0.022),
                    (c + (b - c) * 0.3, 0.018), (c + 0.012, 0.016), (c + 0.002, 0.05), (c - 0.004, h * 0.62), (c - 0.013, h * 0.86), (c - 0.034, h), (0.045, h - 0.003), (0.0, h - 0.006)], shape
        under = lambda b: (lambda p: 0.6 if p[1] < hy + 0.016 and (p[0] ** 2 + (p[2] / 1.12) ** 2) < (b - 0.012) ** 2 else 1.0)

        m.part('hat:cowboy')
        prof, shape = brimmed(0.075, 0.275, 0.163, 0.116)
        m.T(prof, 'hatC', c=(0, hy, 0), segs=28, sz=1.12, mod=shape, rot=(0.06, 0, 0), tint=under(0.275))
        m.T([(0.1295, 0.018), (0.131, 0.02), (0.1225, 0.052), (0.119, 0.05)], 'hatBand', c=(0, hy, 0), segs=28, sz=1.12, rot=(0.06, 0, 0))

        m.part('hat:fedora')
        prof, shape = brimmed(0.02, 0.215, 0.128, 0.114, pinch=0.36, crease=0.028)
        m.T(prof, 'hatC', c=(0, hy - 0.004, 0), segs=24, sz=1.1, mod=shape, rot=(0.07, 0, 0), tint=under(0.215))
        m.T([(0.1275, 0.018), (0.129, 0.02), (0.1215, 0.05), (0.118, 0.048)], 'hatBand', c=(0, hy - 0.004, 0), segs=24, sz=1.1, rot=(0.07, 0, 0))

        m.part('hat:sombrero')                                    # a wide brim turned up at the rim, a tall crown
        prof = [(0.095, 0.0), (0.25, 0.0), (0.37, 0.012), (0.405, 0.05), (0.41, 0.075), (0.398, 0.07), (0.365, 0.032), (0.25, 0.02), (0.145, 0.02),
                (0.12, 0.08), (0.095, 0.17), (0.065, 0.235), (0.03, 0.255), (0.0, 0.258)]
        m.T(prof, 'hatC', c=(0, hy - 0.01, 0), segs=28, tint=lambda p: 0.62 if p[1] < hy + 0.004 and math.hypot(p[0], p[2]) < 0.36 else 1.0)
        m.T([(0.148, 0.02), (0.151, 0.024), (0.128, 0.078), (0.124, 0.074)], 'hatBand', c=(0, hy - 0.01, 0), segs=28)
        m.T([(0.409, 0.062), (0.414, 0.068), (0.412, 0.08), (0.405, 0.076)], 'hatBand', c=(0, hy - 0.01, 0), segs=28)

        m.part('hat:kasa')                                        # the conical straw hat
        m.T([(0.10, 0.075), (0.25, 0.022), (0.338, -0.006), (0.345, 0.004), (0.25, 0.05), (0.12, 0.118), (0.03, 0.16), (0.0, 0.165)], 'hatC', c=(0, 1.745, 0), segs=24,
            tint=lambda p: 0.6 if p[1] < 1.745 + 0.02 + (0.338 - math.hypot(p[0], p[2])) * 0.33 else 1.0)
        m.T([(0.0, 0.165), (0.022, 0.158), (0.022, 0.18), (0.0, 0.185)], '#8a7446', c=(0, 1.745, 0), segs=8)

        m.part('hat:hood')                                        # the ninja's hood: all of the head but the eyes
        m.L(hkeys([1.50, 1.548, 1.565, 1.60, 1.645, 1.69, 1.74, 1.79, 1.822, 1.84], grow=0.011), 'shirt', segs=18, sub=2, cap0=False)
        m.L(hkeys([1.682, 1.70, 1.722], grow=0.0125), 'skin', segs=18, sub=1, cap0=False, cap1=False, a0=FRONT - 0.95, a1=FRONT + 0.95)
        for s in (1, -1):
            m.E((s * 0.040, 1.702, 0.112), (0.014, 0.009, 0.008), BLACK)

        m.part('hat:kabuto')                                      # helmet bowl, a neck guard flaring out behind, a face guard
        m.T([(0.0, 0.118), (0.06, 0.112), (0.115, 0.075), (0.146, 0.02), (0.153, -0.03), (0.146, -0.034)], 'hatC', c=(0, 1.75, -0.005), segs=20, sz=1.06)
        for i, (y, g) in enumerate(((1.735, 0.035), (1.69, 0.075), (1.645, 0.115))):
            m.L([dict(y=y, rx=0.118 + g, rz=0.05, zb=0.128 + g, cz=-0.005), dict(y=y - 0.05, rx=0.135 + g, rz=0.05, zb=0.15 + g, cz=-0.005)], 'hatC', segs=20, sub=1,
                cap0=False, cap1=False, a0=FRONT + 1.25, a1=FRONT + TAU - 1.25, both=True, tint=1.0 - 0.1 * i)
        m.B((0, 1.775, 0.14), (0.20, 0.03, 0.05), 'hatC', rot=(-0.3, 0, 0))                                # the peak
        m.B((0, 1.61, 0.105), (0.15, 0.085, 0.02), '#8a1c1c')                                               # the face guard
        m.part('kabuto:horns')
        for s in (1, -1):
            m.B((s * 0.075, 1.89, 0.115), (0.022, 0.21, 0.01), GOLD, rot=(0, 0, -s * 0.5))
        m.part('kabuto:crest')                                    # Date's crescent moon
        for i in range(9):
            a = math.pi * (0.08 + 0.84 * i / 8) + 0.42
            m.B((0.02 + 0.2 * math.cos(a), 1.88 + 0.2 * math.sin(a) * 0.9 + 0.03, 0.125), (0.062, 0.034 - abs(i - 4) * 0.004, 0.012), GOLD, rot=(0, 0, a + math.pi / 2))

        m.part('hat:tengai')                                      # the komuso's basket of reed, over the whole head
        m.T([(0.0, 0.365), (0.185, 0.36), (0.193, 0.345), (0.168, 0.0), (0.16, 0.004)], 'hatC', c=(0, 1.52, 0), segs=20, both=True)
        for dy in (0.04, 0.11, 0.29, 0.335):
            r = 0.168 + 0.025 * dy / 0.345
            m.T([(r, dy - 0.007), (r + 0.004, dy - 0.007), (r + 0.004, dy + 0.007), (r, dy + 0.007)], '#a48c58', c=(0, 1.52, 0), segs=20)
        m.B((0, 1.70, 0.176), (0.19, 0.07, 0.014), '#6a5636')

        m.part('hat:kettle')                                      # an iron hat with a wide brim over a coif of mail
        m.T([(0.0, 0.105), (0.075, 0.097), (0.128, 0.05), (0.142, 0.0), (0.2, -0.014), (0.255, -0.035), (0.257, -0.045), (0.2, -0.026), (0.13, -0.014)], STEEL, c=(0, 1.775, 0), segs=24,
            tint=lambda p: 0.6 if p[1] < 1.775 - 0.02 else 1.0)
        m.L(hkeys([1.50, 1.56, 1.61, 1.66, 1.71, 1.76, 1.80], grow=0.008, front=lambda y: 0.03 if 1.585 < y < 1.75 else None) if False else
            [dict(y=1.47, rx=0.12, rz=0.075, zb=0.10), dict(y=1.53, rx=0.085, rz=0.075, zb=0.085), dict(y=1.585, cz=0.01, rx=0.093, rz=0.10, zb=0.095),
             dict(y=1.62, rx=0.108, rz=0.07, zb=0.112), dict(y=1.69, rx=0.113, rz=0.066, zb=0.125), dict(y=1.76, rx=0.108, rz=0.092, zb=0.125), dict(y=1.80, rx=0.085, rz=0.085, zb=0.1)],
            '#8a8f96', segs=18, cap0=False)

        m.part('hat:helm')                                        # the great helm: a flat-topped barrel with a sight and a cross
        m.T([(0.0, 0.335), (0.105, 0.33), (0.137, 0.30), (0.143, 0.16), (0.14, 0.0), (0.132, 0.004)], STEEL, c=(0, 1.535, 0), segs=20, sz=1.05)
        m.B((0, 1.705, 0.145), (0.19, 0.02, 0.02), BLACK)
        m.B((0, 1.655, 0.148), (0.022, 0.2, 0.016), DARKSTEEL)
        m.B((0, 1.74, 0.148), (0.23, 0.02, 0.016), DARKSTEEL)
        for s in (1, -1):
            for k in range(3):
                m.E((s * (0.05 + k * 0.028), 1.60 + k * 0.012, 0.136 - k * 0.012), (0.006, 0.006, 0.004), BLACK, segs=6, rings=3)
        m.part('helm:plume')
        m.E((0, 2.0, -0.07), (0.04, 0.19, 0.06), 'plume', rot=(-0.4, 0, 0), rings=6)

        m.part('hat:felt')                                        # a felt hat, its crown leaning back, a feather in it
        def lean(x, y, z, r, th):
            if y > 0.03: z -= (y - 0.03) * 0.5
            return (x, y, z)
        m.T([(0.095, 0.0), (0.16, 0.002), (0.195, 0.012), (0.2, 0.024), (0.16, 0.022), (0.128, 0.02), (0.115, 0.07), (0.085, 0.14), (0.04, 0.19), (0.0, 0.205)], 'hatC',
            c=(0, hy - 0.004, 0.015), segs=22, sz=1.25, mod=lean, rot=(0.1, 0, 0), tint=under(0.2))
        m.B((0.105, hy + 0.15, -0.075), (0.012, 0.32, 0.05), 'plume', rot=(-0.5, 0, 0.2))

        m.part('hat:cowl')                                        # the herdsman's hood, falling over the shoulders
        m.L([dict(y=1.535, rx=0.10, rz=0.062, zb=0.092), dict(y=1.60, cz=0.0, rx=0.098, rz=0.06, zb=0.10), dict(y=1.66, rx=0.113, rz=0.06, zb=0.118), dict(y=1.72, rx=0.117, rz=0.078, zb=0.133),
             dict(y=1.775, rx=0.113, rz=0.104, zb=0.128), dict(y=1.83, rx=0.075, rz=0.075, zb=0.09), dict(y=1.853, rx=0.02, rz=0.02, zb=0.045)], 'hatC', segs=18, cap0=False)
        m.L([dict(y=1.57, rx=0.092, rz=0.085, zb=0.09), dict(y=1.49, rx=0.2, rz=0.125, zb=0.13), dict(y=1.40, rx=0.262, rz=0.17, zb=0.17), dict(y=1.345, rx=0.27, rz=0.178, zb=0.178)],
            'hatC', segs=18, cap0=False, cap1=False, both=True)

    # ------------------------------------------------------------------------------------------------------------
    def faces(self):
        m = self
        m.part('f:moustache')
        for s in (1, -1):
            m.E((s * 0.027, 1.624, 0.106), (0.030, 0.011, 0.012), 'hair', rot=(0, 0, -s * 0.30))
        m.part('f:bigmoustache')
        for s in (1, -1):
            m.E((s * 0.030, 1.622, 0.106), (0.036, 0.013, 0.013), 'hair', rot=(0, 0, -s * 0.38))
            m.E((s * 0.061, 1.603, 0.094), (0.012, 0.021, 0.010), 'hair', rot=(0, 0, -s * 0.2))
        m.part('f:bandana')                                       # over nose and mouth, its point on the chest
        K = [dict(y=1.497, cz=0.058, rx=0.022, rz=0.016), dict(y=1.545, cz=0.030, rx=0.062, rz=0.058, zb=0.030), dict(y=1.60, cz=0.012, rx=0.090, rz=0.104, zb=0.091),
             dict(y=1.648, cz=0.004, rx=0.106, rz=0.137, zb=0.111), dict(y=1.690, rx=0.110, rz=0.124, zb=0.121)]
        for k in K: k['n'] = 2.2
        m.L(K, 'accent', segs=18, sub=3, tint=lambda p: 0.86 + 0.14 * clamp01((p[1] - 1.5) / 0.15))
        m.part('f:neckerchief')
        m.L([dict(y=1.497, rx=0.073, rz=0.068, zb=0.072), dict(y=1.517, rx=0.076, rz=0.072, zb=0.075), dict(y=1.538, rx=0.068, rz=0.064, zb=0.068)], 'accent')
        m.T([(0.0, 0.0), (0.05, 0.055), (0.062, 0.085), (0.0, 0.09)], 'accent', c=(0, 1.415, 0.0), segs=10, sz=0.22, rot=(-0.16, 0, 0), about=(0, 1.46, 0), move=(0, 0, 0.118))
        m.part('f:beard')
        beard = [dict(y=1.535, cz=0.045, rx=0.040, rz=0.040, zb=0.02), dict(y=1.565, cz=0.030, rx=0.072, rz=0.072, zb=0.035), dict(y=1.61, cz=0.012, rx=0.092, rz=0.105, zb=0.05),
                 dict(y=1.648, cz=0.004, rx=0.101, rz=0.098, zb=0.04), dict(y=1.67, cz=0.004, rx=0.103, rz=0.06, zb=0.03)]
        m.L(beard, 'hair', segs=16)
        for s in (1, -1):
            m.E((s * 0.03, 1.627, 0.107), (0.034, 0.012, 0.012), 'hair', rot=(0, 0, -s * 0.3))
        m.part('f:longbeard')
        m.L(beard, 'hair', segs=16)
        m.L([dict(y=1.585, cz=0.05, rx=0.072, rz=0.06, zb=0.04), dict(y=1.50, cz=0.075, rx=0.06, rz=0.045, zb=0.035), dict(y=1.42, cz=0.105, rx=0.04, rz=0.028), dict(y=1.365, cz=0.112, rx=0.012, rz=0.01)],
            'hair', segs=12)
        for s in (1, -1):
            m.E((s * 0.03, 1.627, 0.107), (0.036, 0.013, 0.012), 'hair', rot=(0, 0, -s * 0.3))
        m.part('f:longhair')
        m.L([dict(y=1.77, cz=-0.02, rx=0.110, rz=0.05, zb=0.118), dict(y=1.64, cz=-0.035, rx=0.115, rz=0.035, zb=0.105), dict(y=1.50, cz=-0.07, rx=0.105, rz=0.02, zb=0.07),
             dict(y=1.38, cz=-0.095, rx=0.085, rz=0.015, zb=0.05), dict(y=1.33, cz=-0.1, rx=0.04, rz=0.01, zb=0.03)], 'hair', segs=14)
        m.part('f:bun')
        m.E((0, 1.715, -0.145), (0.058, 0.058, 0.052), 'hair', rings=6)
        m.part('f:topknot')
        m.E((0, 1.855, -0.03), (0.032, 0.045, 0.032), 'hair', rings=6)
        m.E((0, 1.83, -0.03), (0.04, 0.012, 0.04), '#e8e0d0', rings=4)
        m.part('f:headband')
        m.L(hkeys([1.722, 1.735, 1.752], grow=0.006), 'headband', segs=18, sub=1, cap0=False, cap1=False)
        m.E((0, 1.72, -0.135), (0.02, 0.05, 0.012), 'headband', rot=(0.3, 0, 0.3))
        m.part('f:eyepatch')
        m.E((-0.04, 1.702, 0.1), (0.026, 0.021, 0.007), BLACK)
        m.L([dict(c=(0, 1.725, 0.002), rx=0.108, rz=0.111, zb=0.124), dict(c=(0, 1.737, 0.002), rx=0.108, rz=0.111, zb=0.124)], BLACK, segs=18, sub=1, cap0=False, cap1=False,
            u=(0.975, -0.22, 0), v=(0, 0, 1))
        m.part('f:glasses')
        for s in (1, -1):
            m.T([(0.019, -0.003), (0.025, -0.003), (0.025, 0.003), (0.019, 0.003)], '#15151a', c=(0, 0, 0), segs=12, rot=(math.pi / 2, 0, 0), about=(0, 0, 0), move=(s * 0.041, 1.702, 0.112))
            m.B((s * 0.085, 1.704, 0.06), (0.006, 0.006, 0.11), '#15151a')
        m.B((0, 1.706, 0.113), (0.034, 0.006, 0.006), '#15151a')
        m.part('f:shimada')                                       # a geisha's hair, swept up: knot, loop behind, wings, a pin and a flower
        m.E((0, 1.89, -0.05), (0.105, 0.065, 0.085), 'hair', rings=6, segs=10)
        m.E((0, 1.75, -0.165), (0.09, 0.062, 0.058), 'hair', rings=6, segs=10)
        for s in (1, -1):
            m.E((s * 0.125, 1.70, -0.02), (0.04, 0.068, 0.075), 'hair', rings=6)
        m.B((0, 1.89, -0.05), (0.33, 0.012, 0.012), GOLD)
        m.E((0.09, 1.83, 0.06), (0.03, 0.03, 0.02), 'cord')
        m.E((0.115, 1.795, 0.075), (0.022, 0.022, 0.014), '#f6c6d4')
        m.part('f:plaits')                                        # two long plaits over the shoulders
        for s in (1, -1):
            m.L([dict(c=(s * 0.105, 1.67, -0.03), rx=0.028), dict(c=(s * 0.118, 1.54, 0.06), rx=0.03), dict(c=(s * 0.12, 1.38, 0.125), rx=0.027), dict(c=(s * 0.12, 1.22, 0.142), rx=0.02)],
                'hair', segs=8)
            m.E((s * 0.12, 1.205, 0.143), (0.026, 0.026, 0.026), 'tie')
        m.part('f:kerchief')                                      # a headscarf, knotted at the nape
        m.L([dict(y=1.59, cz=-0.03, rx=0.088, rz=0.030, zb=0.083), dict(y=1.66, cz=-0.012, rx=0.113, rz=0.052, zb=0.112), dict(y=1.72, cz=-0.006, rx=0.117, rz=0.082, zb=0.132),
             dict(y=1.775, cz=-0.004, rx=0.112, rz=0.108, zb=0.126), dict(y=1.83, rx=0.068, rz=0.068, zb=0.08), dict(y=1.853, rx=0.014, rz=0.014)], 'kerchief', segs=16)
        m.E((0, 1.55, -0.105), (0.06, 0.075, 0.028), 'kerchief', rot=(0.25, 0, 0))

    # ------------------------------------------------------------------------------------------------------------
    def shellbands(self, bands, grow, n=3.2, tail=True):
        """A surcoat over the trunk to mid-thigh: bands = [(y top, y bottom, colour key)], from the shoulders down."""
        m = self
        low = [(0.97, 0.180, 0.125, 0.128), (0.75, 0.2, 0.14, 0.144), (0.52, 0.212, 0.152, 0.156)]
        for (ya, yb, zone) in bands:
            ys = [y for y in (1.475, 1.43, 1.34, 1.22, 1.08, 0.97, 0.75, 0.52) if yb - 1e-6 <= y <= ya + 1e-6]
            for y in (ya, yb):
                if y not in ys: ys.append(y)
            ys.sort(reverse=True)
            K = []
            for y in ys:
                if y >= 0.97:
                    rx, rz, zb = _at(TK, y); K.append(dict(y=y, rx=rx + grow, rz=rz + grow, zb=zb + grow, n=n))
                else:
                    rx, rz, zb = _at(list(reversed(low)), y); K.append(dict(y=y, rx=rx, rz=rz, zb=zb, n=n))
            m.L(K, zone, wskirt(0.97, 0.4, 0.6, 0.4), segs=20, sub=2, cap0=(ya >= 1.47), cap1=False, both=(yb < 0.9))

    def clothes(self):
        m = self
        m.part('x:vest')
        K = tkeys([1.0, 1.08, 1.22, 1.34, 1.43, 1.485], 0.013)
        for k, g in zip(K, (0.34, 0.26, 0.27, 0.40, 0.66, 1.0)):
            k['a0'], k['a1'] = FRONT + g, FRONT + TAU - g
        m.L(K, 'vest', segs=20, sub=3, cap0=False, cap1=False)

        m.part('x:bandolier')
        a = 0.95; ux, uy = math.cos(a), math.sin(a); nx, ny = -uy, ux
        K = [dict(c=(nx * d, 1.235 + ny * d, 0.0), rx=r, rz=0.136 + (r - 0.3) * 0.5, n=2.6) for d, r in ((-0.03, 0.288), (-0.024, 0.3), (0.024, 0.3), (0.03, 0.288))]
        m.L(K, LEATHER, segs=18, sub=1, u=(ux, uy, 0), v=(0, 0, 1))
        for i in range(6):
            t = -0.5 + i * 0.2
            m.E((ux * 0.3 * t * 0.6 + 0.0, 1.235 + uy * 0.3 * t * 0.6, 0.139), (0.008, 0.022, 0.008), GOLD, rot=(0, 0, a - math.pi / 2), segs=6, rings=4)

        m.part('x:poncho')                                        # a blanket with a hole for the head: its corners hang in front, behind and over the arms
        PK = [(1.50, 0.085, 0.08), (1.455, 0.25, 0.16), (1.30, 0.39, 0.27), (1.10, 0.47, 0.335), (1.0, 0.485, 0.345)]
        m.L([dict(y=y, rx=rx, rz=rz, n=1.45) for (y, rx, rz) in PK], 'poncho', segs=24, sub=2, cap0=False, cap1=False, both=True)
        for (ya, yb) in ((1.08, 1.04), (1.2, 1.17)):
            K = []
            for y in (ya, yb):
                rx, rz = _at(PK[::-1], y) if False else _at(sorted(PK), y)
                K.append(dict(y=y, rx=rx + 0.004, rz=rz + 0.004, n=1.45))
            m.L(K, 'poncho2', segs=24, sub=1, cap0=False, cap1=False)
        m.L([dict(y=1.49, rx=0.09, rz=0.085), dict(y=1.525, rx=0.082, rz=0.078)], 'poncho2', segs=14, sub=1, cap0=False, cap1=False)

        m.part('x:coat')                                          # a frock coat to the knee, open over the shirt; its skirts go with the legs
        rows = [(0.60, 0.200, 0.143, 0.152, 0.22), (0.78, 0.190, 0.136, 0.142, 0.14), (0.95, 0.178, 0.126, 0.130, 0.07), (1.06, 0.171, 0.116, 0.120, 0.06),
                (1.22, 0.192, 0.134, 0.128, 0.16), (1.34, 0.218, 0.146, 0.136, 0.34), (1.43, 0.238, 0.134, 0.134, 0.56), (1.487, 0.180, 0.106, 0.112, 0.95)]
        K = [dict(y=y, rx=rx, rz=rz, zb=zb, n=2.5, a0=FRONT + g, a1=FRONT + TAU - g) for (y, rx, rz, zb, g) in rows]
        m.L(K, 'coat', wskirt(0.97, 0.34, 0.75, 0.45), segs=22, sub=3, cap0=False, cap1=False, both=True)
        m.L([dict(y=1.488, rx=0.086, rz=0.070, zb=0.080), dict(y=1.545, rx=0.084, rz=0.070, zb=0.080)], 'coat', cap0=False, cap1=False, a0=FRONT + 0.95, a1=FRONT + TAU - 0.95)
        for s, side in ((1, 'L'), (-1, 'R')):                     # its sleeves, a little wider than the shirt's
            Ks = [dict(y=1.494, rx=0.032, rz=0.034), dict(y=1.477, rx=0.064, rz=0.068), dict(y=1.42, rx=0.076, rz=0.080), dict(y=1.31, rx=0.064, rz=0.068),
                  dict(y=1.17, rx=0.056, rz=0.060, cz=-0.006), dict(y=1.03, rx=0.053, rz=0.056, cz=0.004), dict(y=0.93, rx=0.05, rz=0.053, cz=0.012)]
            for k in Ks: k['cx'] = 0.275 * s
            m.L(Ks, 'coat', {'arm' + side: 1.0}, segs=12, grp='arm' + side)
        for y in (1.02, 1.09, 1.16):
            m.E((-0.022, y, 0.137 + (y - 1.02) * 0.07), (0.009, 0.009, 0.005), BLACK, rings=4)

        m.part('x:star')
        pts = []
        for i in range(10):
            a = TAU * i / 10 + math.pi / 2
            r = 0.030 if i % 2 == 0 else 0.013
            pts.append((r * math.cos(a), r * math.sin(a)))
        v = [(x, y, 0.004) for x, y in pts] + [(x, y, -0.004) for x, y in pts] + [(0, 0, 0.007), (0, 0, -0.004)]
        f = [(i, (i + 1) % 10, 20) for i in range(10)] + [((i + 1) % 10 + 10, i + 10, 21) for i in range(10)] + [(i, i + 10, (i + 1) % 10 + 10, (i + 1) % 10) for i in range(10)]
        self.S.add(xform(v, rot=(-0.12, 0.42, 0), move=(0.105, 1.325, 0.142)), f, GOLD, HIPS)

        skirt = lambda rows, n=2.3: [dict(y=y, rx=rx, rz=rz, zb=rz * 1.03, n=n) for (y, rx, rz) in rows]
        m.part('x:dress')                                         # a skirt to the ankles with a band at the hem, a fitted bodice
        DR = [(1.03, 0.160, 0.112), (0.93, 0.19, 0.142), (0.62, 0.25, 0.21), (0.3, 0.3, 0.262), (0.1, 0.33, 0.29)]
        m.L(skirt(DR), 'dress', wskirt(1.0, 0.55), segs=22, sub=3, cap0=False, cap1=False, both=True)
        m.L(skirt([(0.16, 0.324, 0.284), (0.1, 0.334, 0.294)]), 'hem', wskirt(1.0, 0.55), segs=22, sub=1, cap0=False, cap1=False)
        m.E((0, 1.305, 0.058), (0.152, 0.088, 0.086), 'bodice', segs=12, rings=7)
        m.L(tkeys([1.0, 1.06], 0.006), 'dress', segs=18, sub=1, cap0=False, cap1=False)

        m.part('x:apron')
        K = []
        for (y, rx, rz) in DR[:4]:
            K.append(dict(y=y, rx=rx + 0.007, rz=rz + 0.007, n=2.3, a0=FRONT - 0.78, a1=FRONT + 0.78))
        m.L(K, 'apron', wskirt(1.0, 0.55), segs=12, sub=3, cap0=False, cap1=False)
        m.L(tkeys([1.0, 1.045], 0.012), 'apron', segs=18, sub=1, cap0=False, cap1=False)

        m.part('x:shawl')
        m.L([dict(y=1.505, rx=0.095, rz=0.08, zb=0.085), dict(y=1.45, rx=0.245, rz=0.145, zb=0.15), dict(y=1.32, rx=0.262, rz=0.172, zb=0.172), dict(y=1.23, rx=0.25, rz=0.168, zb=0.17)],
            'shawl', segs=20, cap0=False, cap1=False, both=True)
        m.E((0, 1.36, 0.165), (0.03, 0.05, 0.015), 'shawl')

        m.part('x:robe')                                          # a long robe, a sash across the chest
        RB = [(1.03, 0.165, 0.115), (0.9, 0.185, 0.14), (0.55, 0.225, 0.185), (0.1, 0.275, 0.235)]
        m.L(skirt(RB), 'robe', wskirt(1.0, 0.6), segs=20, sub=3, cap0=False, cap1=False, both=True)
        m.L(tkeys([0.985, 1.07], 0.008), 'robe', segs=18, sub=1, cap0=False, cap1=False)
        a = 0.88; ux, uy = math.cos(a), math.sin(a); nx, ny = -uy, ux
        K = [dict(c=(nx * d, 1.25 + ny * d, 0.0), rx=r, rz=0.138 + (r - 0.3) * 0.5, n=2.6) for d, r in ((-0.045, 0.29), (-0.038, 0.299), (0.038, 0.299), (0.045, 0.29))]
        m.L(K, 'sash', segs=18, sub=1, u=(ux, uy, 0), v=(0, 0, 1))

        m.part('x:scabbard')
        m.E((-0.2, 0.93, -0.13), (0.016, 0.026, 0.42), '#15151a', rot=(-0.38, 0.08, 0), segs=8, rings=7)
        m.part('x:kimono')                                        # the crossed collar of a kimono
        for s in (1, -1):
            m.E((s * 0.047, 1.31, 0.128), (0.024, 0.25, 0.009), 'trim', rot=(0.05, 0, s * 0.3), rings=6)
        m.part('x:obi')
        m.L(tkeys([0.955, 0.975, 1.065, 1.085], 0.012), 'obi', segs=18, sub=1)
        m.part('x:hakama')                                        # wide pleated trousers
        for s, side in ((1, 'L'), (-1, 'R')):
            def wleg(p, leg='leg' + side, shin='shin' + side):
                t = clamp01((0.56 - p[1]) / 0.18)
                return {leg: 1 - t, shin: t}
            K = [dict(y=1.03, cx=s * 0.082, rx=0.095, rz=0.115), dict(y=0.88, cx=s * 0.098, rx=0.112, rz=0.128), dict(y=0.5, cx=s * 0.11, rx=0.132, rz=0.145), dict(y=0.13, cx=s * 0.118, rx=0.152, rz=0.16)]
            for k in K: k['n'] = 3.4
            m.L(K, 'pants', wleg, segs=14, sub=3, cap0=False, cap1=False, both=True, tint=lambda p: 0.8 + 0.2 * clamp01((p[1] - 0.1) / 0.5))
        m.L(tkeys([0.96, 1.05], 0.011), 'pants', segs=18, sub=1, cap0=False, cap1=False)
        m.part('x:quiver')
        m.L([dict(c=(0.0, 1.0, -0.17), rx=0.042), dict(c=(0.1, 1.25, -0.172), rx=0.047), dict(c=(0.2, 1.5, -0.174), rx=0.05)], '#4a2c14', segs=10)
        for k in range(3):
            m.B((0.215 + k * 0.012, 1.55 + k * 0.01, -0.174 + (k - 1) * 0.022), (0.012, 0.11, 0.03), '#e8e0d0', rot=(0, 0, -0.38))

        m.part('x:armor')                                         # a lacquered cuirass, shoulder guards, plates over the thighs
        m.L(tkeys([0.985, 1.08, 1.22, 1.34, 1.43, 1.47], 0.02, n=3.2), 'armor', segs=18, sub=2)
        for i, y in enumerate((1.36, 1.25, 1.14)):
            m.L(tkeys([y, y - 0.012], 0.024, n=3.2), 'armor2', segs=18, sub=1, cap0=False, cap1=False)
        for s, side in ((1, 'L'), (-1, 'R')):
            for i in range(3):
                m.B((s * (0.305 + i * 0.012), 1.455 - i * 0.07, 0.0), (0.12, 0.075, 0.21), 'armor' if i % 2 == 0 else 'armor2', {'arm' + side: 0.6, 'hips': 0.4}, rot=(0, 0, -s * 0.25), grp='arm' + side)
        for i, (a0, a1) in enumerate(((FRONT - 0.7, FRONT + 0.7), (FRONT + 0.85, FRONT + 2.3), (FRONT + 2.45, FRONT + 3.85), (FRONT + 4.0, FRONT + 5.43))):
            K = [dict(y=1.0, rx=0.19, rz=0.135, n=3.0, a0=a0, a1=a1), dict(y=0.74, rx=0.222, rz=0.168, n=3.0, a0=a0, a1=a1)]
            m.L(K, 'armor2' if i % 2 else 'armor', wskirt(1.0, 0.3, 0.5, 0.35), segs=6, sub=2, cap0=False, cap1=False, both=True)

        m.part('x:kosode')                                        # a narrow kimono to the ankles, a wide sash knotted behind, a crossed collar
        KS = [(1.03, 0.16, 0.112), (0.9, 0.172, 0.13), (0.5, 0.185, 0.155), (0.1, 0.2, 0.172)]
        m.L(skirt(KS, n=2.6), 'robe', wskirt(1.0, 0.7, 0.55, 0.4), segs=20, sub=3, cap0=False, cap1=False, both=True)
        m.L(skirt([(0.17, 0.199, 0.171), (0.1, 0.205, 0.177)], n=2.6), 'hem', wskirt(1.0, 0.7, 0.55, 0.4), segs=20, sub=1, cap0=False, cap1=False)
        m.L(tkeys([0.985, 1.01, 1.16, 1.185], 0.014), 'obi', segs=18, sub=1)
        m.L(tkeys([1.075, 1.095], 0.019), 'cord', segs=18, sub=1, cap0=False, cap1=False)
        m.B((0, 1.12, -0.155), (0.27, 0.23, 0.09), 'obi')
        for s in (1, -1):
            m.E((s * 0.045, 1.33, 0.128), (0.024, 0.2, 0.009), 'trim', rot=(0.05, 0, s * 0.3), rings=6)

        m.part('x:shakuhachi')                                    # the bamboo flute held to the mouth, the alms box on its cord
        m.E((0, 1.385, 0.29), (0.017, 0.29, 0.017), '#b89a5a', rot=(-0.68, 0, 0), rings=6)
        m.B((0.02, 1.18, 0.155), (0.13, 0.09, 0.06), '#3a2618')
        m.part('x:wagasa')                                        # an oil-paper umbrella on the right shoulder
        d, apex = (0.039, 0.857, -0.514), (-0.12, 2.12, -0.30)
        m.E((-0.1475, 1.52, 0.06), (0.011, 0.7, 0.011), '#8a6a3a', rot=(-0.541, 0, -0.039), segs=6, rings=6)
        m.T([(0.0, 0.1), (0.03, 0.098), (0.35, 0.045), (0.64, -0.09)], 'umbrella', c=apex, segs=24, rot=(-0.541, 0, -0.039), both=True)
        m.T([(0.36, 0.049), (0.48, 0.0), (0.48, -0.006), (0.36, 0.043)], 'umbrella2', c=apex, segs=24, rot=(-0.541, 0, -0.039))
        m.T([(0.0, 0.14), (0.03, 0.13), (0.045, 0.09), (0.0, 0.09)], '#2a2018', c=apex, segs=8, rot=(-0.541, 0, -0.039))

        m.part('x:tabard')                                        # red, white, red: the surcoat of the Habsburg soldiers
        m.shellbands([(1.475, 1.19, 'tabard0'), (1.19, 0.91, 'tabard1'), (0.91, 0.52, 'tabard2')], 0.018)
        m.part('x:lion')                                          # the bailiff's yellow surcoat with a red lion on the chest
        m.shellbands([(1.475, 0.52, '#e0b020')], 0.018)
        m.E((0.0, 1.27, 0.158), (0.07, 0.11, 0.012), '#b01c1c', rings=6)
        m.E((0.05, 1.4, 0.15), (0.04, 0.045, 0.012), '#b01c1c')
        m.E((-0.07, 1.2, 0.152), (0.05, 0.02, 0.01), '#b01c1c', rot=(0, 0, 0.5))
        m.part('x:cape')
        K = [dict(y=1.48, rx=0.19, rz=0.1, zb=0.115), dict(y=1.42, rx=0.25, rz=0.1, zb=0.15), dict(y=1.2, rx=0.262, rz=0.1, zb=0.19), dict(y=0.8, rx=0.285, rz=0.1, zb=0.23),
             dict(y=0.36, rx=0.305, rz=0.1, zb=0.26)]
        m.L(K, 'cape', segs=14, sub=3, cap0=False, cap1=False, both=True, a0=math.pi - 0.12, a1=TAU + 0.12, tint=lambda p: 0.85 + 0.15 * clamp01((p[1] - 0.3) / 0.6))
        m.L([dict(y=1.47, rx=0.2, rz=0.118, zb=0.12), dict(y=1.5, rx=0.13, rz=0.09, zb=0.1)], 'cape', segs=16, sub=1, cap0=False, cap1=False)
        m.part('x:smock')                                         # the tunic's skirt below the belt
        m.L(skirt([(1.0, 0.166, 0.116), (0.84, 0.2, 0.15), (0.68, 0.222, 0.168)]), 'shirt', wskirt(1.0, 0.32, 0.6, 0.4), segs=20, sub=2, cap0=False, cap1=False, both=True)
        m.part('x:fur')                                           # a pelt over the back, a ruff of fur at the neck
        m.L([dict(y=1.5, rx=0.2, rz=0.1, zb=0.13), dict(y=1.4, rx=0.262, rz=0.1, zb=0.185), dict(y=1.1, rx=0.27, rz=0.1, zb=0.2), dict(y=0.95, rx=0.24, rz=0.1, zb=0.19)],
            'fur', segs=12, sub=2, cap0=False, cap1=False, both=True, a0=math.pi - 0.1, a1=TAU + 0.1)
        m.L([dict(y=1.47, rx=0.21, rz=0.13, zb=0.14), dict(y=1.52, rx=0.2, rz=0.125, zb=0.14), dict(y=1.56, rx=0.12, rz=0.09, zb=0.1)], 'fur2', segs=14, sub=2)
        m.part('x:chain')
        for i in range(9):
            a = math.pi * (0.15 + 0.7 * i / 8)
            m.E((0.15 * math.cos(a), 1.46 - 0.1 * math.sin(a), 0.105 + 0.05 * math.sin(a)), (0.014, 0.012, 0.008), GOLD, segs=6, rings=4)
        m.E((0, 1.335, 0.158), (0.028, 0.028, 0.012), GOLD)
        m.part('x:cuirass')
        m.L(tkeys([0.985, 1.08, 1.22, 1.34, 1.43, 1.47], 0.017, n=2.6), 'armor', segs=18, sub=2)
        m.L(tkeys([1.0, 1.02], 0.021, n=2.6), '#8a6424', segs=18, sub=1, cap0=False, cap1=False)

    def all(self):
        self.body(); self.hats(); self.faces(); self.clothes()
        return self.S


def build(path):
    reset()
    soup = Maker().all()
    ob = make_mesh('people', soup, smooth_angle=62.0)
    shades = shade_figure(ob, soup)
    export_figure(path, ob, soup, shades, BONES)
