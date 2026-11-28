# The landmarks, redrawn. A landmark of the game is a plan of walls, openings and roofs (blender/dump/<chapter>.json has
# every one of its shapes). This module reads that plan back out of the shapes: which wall pieces lie in one plane, where
# the plane has its doors and windows, which side is outside. Then it adds what the game's boxes never had, in the manner
# of the place: surrounds to doors and windows, a plinth, a cornice, corner boards or quoins, a timber frame on plaster,
# rafters under curved eaves. What it adds belongs to the wall it is on (it goes when the wall is broken).
import math
from mathutils import Vector, Matrix
from refine import bar_box

LANDMARKS = {
    'west': [dict(name='church', x=62, z=-27, r=13), dict(name='depot', x=0, z=-50, r=22), dict(name='tower', x=-52, z=-17, r=9), dict(name='mine', x=-86, z=47, r=13)],
    'japan': [dict(name='shrine', x=0, z=-48, r=17), dict(name='pagoda', x=-21.5, z=-49.5, r=8), dict(name='castle', x=70, z=-58, r=14)],
    'swiss': [dict(name='chapel', x=-44, z=14, r=10), dict(name='keep', x=62, z=-47, r=10), dict(name='mill', x=48.6, z=13.2, r=10)],
}
WALLS = ('wood', 'plaster', 'stone')


def mul(c, k):
    return tuple(min(1.0, v * k) for v in c)


class Plane:
    """Wall pieces that lie in one plane: u along the wall, n across it, o the plane's place along n."""
    def __init__(self, mat, col, u, n, o, th):
        self.mat, self.col, self.u, self.n, self.o, self.th = mat, col, u, n, o, th
        self.rects = []                                   # (s0, s1, y0, y1, shape index, ground under it)

    def finish(self, centre):
        self.s0 = min(r[0] for r in self.rects); self.s1 = max(r[1] for r in self.rects)
        self.y0 = min(r[2] for r in self.rects); self.y1 = max(r[3] for r in self.rects)
        big = max(self.rects, key=lambda r: (r[1] - r[0]) * (r[3] - r[2]))
        self.pid, self.g = big[4], big[5]
        mid = self.u * ((self.s0 + self.s1) / 2) + self.n * self.o
        d = (mid - centre).dot(self.n)
        self.out = 0 if abs(d) < 1.0 else (1 if d > 0 else -1)          # which side is outside (0: a wall inside the building)
        self.holes = self.openings()

    def covered(self, s, y):
        return any(r[0] - 1e-3 <= s <= r[1] + 1e-3 and r[2] - 1e-3 <= y <= r[3] + 1e-3 for r in self.rects)

    def openings(self):
        xs = sorted({round(v, 2) for r in self.rects for v in (r[0], r[1])}); ys = sorted({round(v, 2) for r in self.rects for v in (r[2], r[3])})
        free = {(i, j) for i in range(len(xs) - 1) for j in range(len(ys) - 1)
                if xs[i + 1] - xs[i] > 0.12 and ys[j + 1] - ys[j] > 0.12 and not self.covered((xs[i] + xs[i + 1]) / 2, (ys[j] + ys[j + 1]) / 2)}
        out = []
        while free:
            stack, comp = [free.pop()], []
            while stack:
                c = stack.pop(); comp.append(c)
                for d in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    q = (c[0] + d[0], c[1] + d[1])
                    if q in free: free.remove(q); stack.append(q)
            i0, i1 = min(c[0] for c in comp), max(c[0] for c in comp); j0, j1 = min(c[1] for c in comp), max(c[1] for c in comp)
            a, b, ya, yb = xs[i0], xs[i1 + 1], ys[j0], ys[j1 + 1]
            if len(comp) != (i1 - i0 + 1) * (j1 - j0 + 1): continue                     # not a rectangle
            if not (0.45 <= b - a <= 4.5 and 0.5 <= yb - ya <= 5.5): continue
            m = (ya + yb) / 2
            if not (self.covered(a - 0.1, m) and self.covered(b + 0.1, m) and self.covered((a + b) / 2, yb + 0.1)): continue    # walled left, right and above
            out.append((a, b, ya, yb, ya <= self.y0 + 0.02 or not self.covered((a + b) / 2, ya - 0.1)))                       # last: a door (open to the floor)
        return out


def planes_of(prims, lm):
    cands = []
    for pid, q in enumerate(prims):
        p = q.get('prim')
        if not p or p['t'] != 'box' or q['m'] not in WALLS or not q.get('solid'): continue
        r = p.get('r') or [0, 0, 0]
        if abs(r[0]) > 1e-4 or abs(r[2]) > 1e-4: continue
        c = p['p']
        if math.hypot(c[0] - lm['x'], c[2] - lm['z']) > lm['r']: continue
        th, L = min(p['w'], p['d']), max(p['w'], p['d'])
        if p['h'] < 0.9 or th > 0.95 or L < th * 1.5: continue
        ry = r[1]
        u = Vector((math.cos(ry), 0, -math.sin(ry))) if p['w'] >= p['d'] else Vector((math.sin(ry), 0, math.cos(ry)))
        if u.x < -1e-6 or (abs(u.x) < 1e-6 and u.z < 0): u = -u
        n = Vector((-u.z, 0, u.x))
        cv = Vector(c)
        cands.append((q, pid, u, n, cv.dot(n), cv.dot(u), L, th, c[1], p['h']))
    if not cands: return [], Vector((lm['x'], 0, lm['z']))
    centre = sum((Vector((prims[c[1]]['prim']['p'][0], 0, prims[c[1]]['prim']['p'][2])) for c in cands), Vector()) / len(cands)
    planes = {}
    for (q, pid, u, n, o, s, L, th, y, h) in cands:
        key = (q['m'], tuple(round(v, 2) for v in q['c']), round(math.atan2(u.z, u.x), 2), round(o / 0.2), round(th, 1))
        pl = planes.get(key)
        if pl is None: pl = planes[key] = Plane(q['m'], tuple(q['c']), u, n, o, th)
        pl.rects.append((s - L / 2, s + L / 2, y - h / 2, y + h / 2, pid, q.get('g', 0.0)))
    out = []
    for pl in planes.values():
        pl.finish(centre)
        if pl.s1 - pl.s0 >= 1.8 and pl.y1 - pl.y0 >= 1.8: out.append(pl)
    return out, centre


class Dresser:
    def __init__(self, bag, chapter):
        self.bag, self.chapter = bag, chapter

    def bar(self, pl, side, s0, s1, y0, y1, d0, d1, col, mat='wood', tile=2.0):
        """A bar on the wall: s along it, y up, d out from its face on the given side (+1 / -1 along the plane's n)."""
        if s1 - s0 < 0.02 or y1 - y0 < 0.02 or d1 - d0 < 0.008: return
        n = pl.n * side
        face = side * pl.o + pl.th / 2
        c = pl.u * ((s0 + s1) / 2) + n * (face + (d0 + d1) / 2) + Vector((0, (y0 + y1) / 2, 0))
        R = Matrix(((pl.u.x, 0, n.x, c.x), (0, 1, 0, c.y), (pl.u.z, 0, n.z, c.z), (0, 0, 0, 1)))
        bar_box(self.bag, pl.pid, R, (s1 - s0, y1 - y0, d1 - d0), col, mat, tile)

    def hood(self, pl, side, s0, s1, y, h, d, col, mat='wood'):
        """A pointed hood over an opening: a low triangle standing out from the wall."""
        n = pl.n * side
        face = side * pl.o + pl.th / 2
        P = lambda s, yy, dd: tuple(pl.u * s + n * (face + dd) + Vector((0, yy, 0)))
        m = (s0 + s1) / 2
        v = [P(s0, y, 0), P(s1, y, 0), P(m, y + h, 0), P(s0, y, d), P(s1, y, d), P(m, y + h, d)]
        f = [(0, 1, 2), (3, 5, 4), (0, 3, 4, 1), (1, 4, 5, 2), (2, 5, 3, 0)]
        self.bag.add(False, pl.pid, v, f, col, mat, [[(0, 0)] * len(q) for q in f], auto=True)

    def surround(self, pl, side, hole, style, outside):
        a, b, ya, yb, door = hole
        w = b - a
        if style == 'wood':
            c = mul(pl.col, 0.62)
            for s in (a - 0.1, b): self.bar(pl, side, s, s + 0.1, ya, yb, 0, 0.045, c)
            self.bar(pl, side, a - 0.16, b + 0.16, yb, yb + 0.12, 0, 0.06, c)
            if outside: self.hood(pl, side, a - 0.2, b + 0.2, yb + 0.12, min(0.55, w * 0.45), 0.07, c)
            if not door: self.bar(pl, side, a - 0.18, b + 0.18, ya - 0.08, ya, 0, 0.11, c)
        elif style == 'stone':
            c = mul(pl.col, 1.18) if outside else mul(pl.col, 0.9)
            for s in (a - 0.18, b): self.bar(pl, side, s, s + 0.18, ya, yb, 0, 0.05, c, 'stone', 1.5)
            self.bar(pl, side, a - 0.28, b + 0.28, yb, yb + 0.28, 0, 0.07, c, 'stone', 1.5)
            if not door: self.bar(pl, side, a - 0.26, b + 0.26, ya - 0.14, ya, 0, 0.12, c, 'stone', 1.5)
            elif outside: self.bar(pl, side, a - 0.3, b + 0.3, ya - 0.0, ya + 0.06, 0, 0.3, mul(pl.col, 0.85), 'stone', 1.5)       # a threshold stone
        else:                                             # plaster: a dark wooden frame (Japan), a stone-coloured one elsewhere
            c = (0.05, 0.022, 0.014) if style == 'japan' else (0.42, 0.38, 0.31)
            m = 'wood' if style == 'japan' else 'stone'
            for s in (a - 0.11, b): self.bar(pl, side, s, s + 0.11, ya, yb, 0, 0.05, c, m)
            self.bar(pl, side, a - 0.2, b + 0.2, yb, yb + 0.14, 0, 0.07, c, m)
            if not door: self.bar(pl, side, a - 0.2, b + 0.2, ya - 0.09, ya, 0, 0.1, c, m)

    def along(self, pl, side, y0, y1, d, col, mat, skip, tile=2.0):
        """A band along the whole wall between two heights, broken where a door stands."""
        cuts = sorted((h[0] - 0.12, h[1] + 0.12) for h in skip)
        s = pl.s0 - d
        for (a, b) in cuts + [(pl.s1 + d, None)]:
            if a - s > 0.05: self.bar(pl, side, s, a, y0, y1, 0, d, col, mat, tile)
            s = b if b is not None else s

    def wall(self, pl):
        style = 'wood' if pl.mat == 'wood' else 'stone' if pl.mat == 'stone' else 'japan' if self.chapter == 'japan' else 'render'
        for side in (1, -1):
            outside = pl.out == side
            for h in pl.holes: self.surround(pl, side, h, style, outside)
            if not outside: continue
            H = pl.y1 - pl.y0
            base = max(pl.y0, pl.g - 0.25)
            doors = [h for h in pl.holes if h[4]]
            near = [h for h in pl.holes if h[2] < base + 0.6]
            if style == 'wood':
                trim = mul(pl.col, 0.62)
                if pl.y0 <= pl.g + 0.6: self.along(pl, side, base, base + 0.42, 0.045, trim, 'wood', near)                    # a skirting board
                self.along(pl, side, pl.y1 - 0.3, pl.y1, 0.05, trim, 'wood', [])                                                # a frieze under the eaves
                self.along(pl, side, pl.y1 - 0.06, pl.y1 + 0.04, 0.11, mul(pl.col, 0.75), 'woodH', [])
                for s in (pl.s0 - 0.03, pl.s1 - 0.17): self.bar(pl, side, s, s + 0.2, base, pl.y1, 0, 0.05, trim)                # corner boards
            elif style == 'stone':
                if pl.y0 <= pl.g + 0.6:
                    self.along(pl, side, base, base + 0.55, 0.09, mul(pl.col, 0.8), 'stone', near, 1.5)                          # a plinth, in two steps
                    self.along(pl, side, base + 0.55, base + 0.7, 0.045, mul(pl.col, 0.92), 'stone', near, 1.5)
                self.along(pl, side, pl.y1 - 0.22, pl.y1, 0.08, mul(pl.col, 1.12), 'stone', [], 1.5)                             # a course under the top
                if H > 6.5: self.along(pl, side, pl.y0 + H * 0.52, pl.y0 + H * 0.52 + 0.16, 0.06, mul(pl.col, 1.1), 'stone', [], 1.5)
                k, y = 0, base + 0.7
                while y + 0.4 < pl.y1 - 0.25:                                                                                    # quoins: long and short stones up both corners
                    ln = 0.62 if k % 2 == 0 else 0.36
                    self.bar(pl, side, pl.s0 - 0.03, pl.s0 - 0.03 + ln, y, y + 0.4, 0, 0.04, mul(pl.col, 1.2), 'stone', 1.5)
                    self.bar(pl, side, pl.s1 + 0.03 - ln, pl.s1 + 0.03, y, y + 0.4, 0, 0.04, mul(pl.col, 1.2), 'stone', 1.5)
                    y += 0.46; k += 1
            elif style == 'japan':                                                                                               # plaster between dark timbers
                dark = (0.05, 0.022, 0.014)
                self.along(pl, side, pl.y0, pl.y0 + 0.16, 0.045, dark, 'woodH', near)
                self.along(pl, side, pl.y1 - 0.2, pl.y1, 0.05, dark, 'woodH', [])
                yr = pl.y0 + H * 0.66
                if H > 2.6: self.along(pl, side, yr, yr + 0.12, 0.04, dark, 'woodH', [h for h in pl.holes if h[2] < yr + 0.12 and h[3] > yr])
                nst = max(1, round((pl.s1 - pl.s0) / 1.8))
                for i in range(nst + 1):
                    s = pl.s0 + (pl.s1 - pl.s0) * i / nst
                    if any(h[0] - 0.2 < s < h[1] + 0.2 for h in pl.holes): continue
                    self.bar(pl, side, s - 0.07, s + 0.07, pl.y0, pl.y1, 0, 0.045, dark)
            else:                                                                                                                # rendered walls: a stone plinth, a moulded cornice, pilasters at the corners
                st = (0.36, 0.33, 0.27)
                if pl.y0 <= pl.g + 0.6: self.along(pl, side, base, base + 0.6, 0.07, st, 'stone', near, 1.5)
                self.along(pl, side, pl.y1 - 0.26, pl.y1 - 0.1, 0.06, mul(pl.col, 0.86), 'plaster', [], 3.0)
                self.along(pl, side, pl.y1 - 0.1, pl.y1, 0.12, mul(pl.col, 0.95), 'plaster', [], 3.0)
                for s in (pl.s0 - 0.03, pl.s1 - 0.33): self.bar(pl, side, s, s + 0.36, base + 0.6, pl.y1 - 0.26, 0, 0.04, mul(pl.col, 0.93), 'plaster', 3.0)

    def beam(self, pid, p0, p1, w, h, col, mat='wood'):
        """A timber from p0 to p1, w wide and h deep."""
        p0, p1 = Vector(p0), Vector(p1)
        d = p1 - p0
        L = d.length
        if L < 0.05: return
        x = d / L
        up = Vector((0, 1, 0))
        z = x.cross(up)
        if z.length < 1e-4: z = Vector((0, 0, 1))
        z.normalize(); y = z.cross(x)
        c = (p0 + p1) / 2
        R = Matrix(((x.x, y.x, z.x, c.x), (x.y, y.y, z.y, c.y), (x.z, y.z, z.z, c.z), (0, 0, 0, 1)))
        bar_box(self.bag, pid, R, (L, h, w), col, mat, 2.0)

    def eaves(self, pid, q, col):
        """Under a curved roof: rafters running out to the eaves all round, a corner rafter under each hip."""
        p = q['prim']
        w, d, h, ridge, up, curve = p['w'], p['d'], p['h'], p.get('ridge', 0.45), p.get('up', 0.7), p.get('curve', 1.9)
        r = p.get('r') or [0, 0, 0]
        M = Matrix.Translation(Vector(p['p'])) @ Matrix.Rotation(r[1], 4, 'Y')
        ex, ez, rx = w / 2, d / 2, w / 2 * ridge
        sides = [((-rx, 0), (rx, 0), (-ex, ez), (ex, ez)), ((rx, 0), (-rx, 0), (ex, -ez), (-ex, -ez)), ((-rx, 0), (-rx, 0), (-ex, -ez), (-ex, ez)), ((rx, 0), (rx, 0), (ex, ez), (ex, -ez))]
        def pt(sd, s, t, drop):
            tx, tz = sd[0][0] + (sd[1][0] - sd[0][0]) * s, sd[0][1] + (sd[1][1] - sd[0][1]) * s
            bx, bz = sd[2][0] + (sd[3][0] - sd[2][0]) * s, sd[2][1] + (sd[3][1] - sd[2][1]) * s
            return M @ Vector((tx + (bx - tx) * t, h * (1 - t) ** curve + up * abs(2 * s - 1) ** 4 * t ** 3 - drop, tz + (bz - tz) * t))
        for sd in sides:
            L = math.hypot(sd[3][0] - sd[2][0], sd[3][1] - sd[2][1])
            n = max(4, round(L / 0.85))
            for i in range(n + 1):
                s = i / n
                self.beam(pid, pt(sd, s, 0.52, 0.2), pt(sd, s, 0.985, 0.17), 0.07, 0.09, col)


def apply(bag, prims, chapter):
    D = Dresser(bag, chapter)
    stats = {}
    for lm in LANDMARKS.get(chapter, []):
        planes, centre = planes_of(prims, lm)
        for pl in planes: D.wall(pl)
        n = 0
        for pid, q in enumerate(prims):
            p = q.get('prim')
            if p and p['t'] == 'croof' and math.hypot(p['p'][0] - lm['x'], p['p'][2] - lm['z']) <= lm['r']:
                D.eaves(pid, q, (0.36, 0.045, 0.03) if lm['name'] in ('shrine', 'pagoda') else (0.06, 0.03, 0.02)); n += 1
        stats[lm['name']] = (len(planes), sum(len(pl.holes) for pl in planes), n)
    print('DRESS', chapter, ' '.join('%s: %d walls, %d openings, %d curved roofs;' % ((k,) + v) for k, v in stats.items()), flush=True)
