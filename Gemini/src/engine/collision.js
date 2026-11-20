import * as THREE from 'three';

const STEP_MAX = 0.52; // Steps up to 0.5m are climbable; anything higher is a wall

export class CollisionWorld {
  constructor(bounds = { minX: -90, maxX: 90, minZ: -90, maxZ: 90 }) {
    this.boxes = [];      // Solid blocking AABBs { minX, maxX, minY, maxY, minZ, maxZ, tag }
    this.walkables = [];  // Elevated surfaces { minX, maxX, minZ, maxZ, topY }
    this.bounds = bounds;
    this.heightFn = () => 0;

    // Navigation grid (built from the exact collision shapes after level construction)
    this.nav = null;
  }

  setHeightFunction(fn) {
    this.heightFn = fn;
  }

  addBox(cx, cy, cz, sx, sy, sz, tag = 'solid') {
    const hx = sx * 0.5;
    const hy = sy * 0.5;
    const hz = sz * 0.5;
    this.boxes.push({
      minX: cx - hx, maxX: cx + hx,
      minY: cy - hy, maxY: cy + hy,
      minZ: cz - hz, maxZ: cz + hz,
      tag
    });
  }

  addBoxMinMax(minX, minY, minZ, maxX, maxY, maxZ, tag = 'solid') {
    this.boxes.push({ minX, minY, minZ, maxX, maxY, maxZ, tag });
  }

  addWalkable(cx, cz, sx, sz, topY) {
    this.walkables.push({
      minX: cx - sx * 0.5,
      maxX: cx + sx * 0.5,
      minZ: cz - sz * 0.5,
      maxZ: cz + sz * 0.5,
      topY
    });
  }

  /**
   * Computes walkable floor elevation at (x, z) reachable from currentFeetY (climbing up to STEP_MAX)
   */
  getFloorHeight(x, z, currentFeetY = 0) {
    let h = this.heightFn(x, z);
    for (const w of this.walkables) {
      if (x >= w.minX && x <= w.maxX && z >= w.minZ && z <= w.maxZ) {
        if (w.topY <= currentFeetY + STEP_MAX) {
          h = Math.max(h, w.topY);
        }
      }
    }
    // Also allow stepping onto low solid boxes (e.g. stair steps <= 0.5m rise)
    for (const b of this.boxes) {
      if (b.tag === 'water' || b.tag === 'bars') continue;
      if (x >= b.minX - 0.12 && x <= b.maxX + 0.12 && z >= b.minZ - 0.12 && z <= b.maxZ + 0.12) {
        if (b.maxY <= currentFeetY + STEP_MAX && b.maxY > h) {
          h = b.maxY;
        }
      }
    }
    return h;
  }

  /**
   * Resolves horizontal circle vs AABB collisions.
   * Boxes whose top is <= feetY + STEP_MAX are climbable steps (unless tagged water/bars);
   * everything higher stops bodies solidly.
   */
  resolveHorizontal(pos, radius, feetY, height = 1.75) {
    pos.x = Math.max(this.bounds.minX + radius, Math.min(this.bounds.maxX - radius, pos.x));
    pos.z = Math.max(this.bounds.minZ + radius, Math.min(this.bounds.maxZ - radius, pos.z));

    for (let iter = 0; iter < 3; iter++) {
      for (const b of this.boxes) {
        // Ignore boxes strictly above head
        if (feetY + height <= b.minY + 0.05) continue;
        // Ignore boxes strictly below feet or climbable low steps (except water/bars)
        if (b.tag !== 'water' && b.tag !== 'bars' && b.maxY <= feetY + STEP_MAX) continue;
        if (feetY >= b.maxY - 0.05) continue;

        const closestX = Math.max(b.minX, Math.min(pos.x, b.maxX));
        const closestZ = Math.max(b.minZ, Math.min(pos.z, b.maxZ));
        const dx = pos.x - closestX;
        const dz = pos.z - closestZ;
        const distSq = dx * dx + dz * dz;

        if (distSq < radius * radius) {
          if (distSq > 0.000001) {
            const dist = Math.sqrt(distSq);
            const push = radius - dist;
            pos.x += (dx / dist) * push;
            pos.z += (dz / dist) * push;
          } else {
            const penLeft = Math.abs(pos.x - b.minX);
            const penRight = Math.abs(b.maxX - pos.x);
            const penFront = Math.abs(pos.z - b.minZ);
            const penBack = Math.abs(b.maxZ - pos.z);
            const m = Math.min(penLeft, penRight, penFront, penBack);
            if (m === penLeft) pos.x = b.minX - radius;
            else if (m === penRight) pos.x = b.maxX + radius;
            else if (m === penFront) pos.z = b.minZ - radius;
            else pos.z = b.maxZ + radius;
          }
        }
      }
    }
  }

  /**
   * Sub-stepped horizontal movement so fast runners never tunnel through thin walls or bars.
   */
  moveHorizontal(pos, dx, dz, radius, feetY, height = 1.75) {
    const dist = Math.hypot(dx, dz);
    if (dist < 1e-6) {
      this.resolveHorizontal(pos, radius, feetY, height);
      return;
    }
    const maxStep = 0.22;
    const steps = Math.max(1, Math.ceil(dist / maxStep));
    const sx = dx / steps;
    const sz = dz / steps;
    let curY = feetY;
    for (let i = 0; i < steps; i++) {
      pos.x += sx;
      pos.z += sz;
      this.resolveHorizontal(pos, radius, curY, height);
      const nextFloor = this.getFloorHeight(pos.x, pos.z, curY);
      if (nextFloor > curY && nextFloor <= curY + STEP_MAX) {
        curY = nextFloor;
      }
    }
  }

  /**
   * Checks whether a circle at (x, z, feetY) is clear of all non-step obstacles
   */
  isClear(x, z, radius, feetY, height = 1.75) {
    if (x < this.bounds.minX + radius || x > this.bounds.maxX - radius ||
        z < this.bounds.minZ + radius || z > this.bounds.maxZ - radius) {
      return false;
    }
    for (const b of this.boxes) {
      if (feetY + height <= b.minY + 0.05) continue;
      if (b.tag !== 'water' && b.tag !== 'bars' && b.maxY <= feetY + STEP_MAX) continue;
      if (feetY >= b.maxY - 0.05) continue;
      const cx = Math.max(b.minX, Math.min(x, b.maxX));
      const cz = Math.max(b.minZ, Math.min(z, b.maxZ));
      const dx = x - cx;
      const dz = z - cz;
      if (dx * dx + dz * dz < radius * radius) return false;
    }
    return true;
  }

  /**
   * Ray vs AABB slab intersection for bullets, line-of-sight, melee walls, and death fall checks.
   * Bars are solid for bullets and bodies.
   */
  raycast(origin, dir, maxDist = 200) {
    let closest = maxDist;
    let hitBox = null;
    let hitNormal = new THREE.Vector3(0, 1, 0);

    const invX = dir.x !== 0 ? 1 / dir.x : 1e9;
    const invY = dir.y !== 0 ? 1 / dir.y : 1e9;
    const invZ = dir.z !== 0 ? 1 / dir.z : 1e9;

    for (const b of this.boxes) {
      if (b.tag === 'water') continue; // Bullets fly over water
      const t1 = (b.minX - origin.x) * invX;
      const t2 = (b.maxX - origin.x) * invX;
      const t3 = (b.minY - origin.y) * invY;
      const t4 = (b.maxY - origin.y) * invY;
      const t5 = (b.minZ - origin.z) * invZ;
      const t6 = (b.maxZ - origin.z) * invZ;

      const tminX = Math.min(t1, t2);
      const tmaxX = Math.max(t1, t2);
      const tminY = Math.min(t3, t4);
      const tmaxY = Math.max(t3, t4);
      const tminZ = Math.min(t5, t6);
      const tmaxZ = Math.max(t5, t6);

      const tmin = Math.max(tminX, tminY, tminZ);
      const tmax = Math.min(tmaxX, tmaxY, tmaxZ);

      if (tmax >= 0 && tmin <= tmax && tmin > 0.02 && tmin < closest) {
        closest = tmin;
        hitBox = b;
        if (tmin === tminX) hitNormal.set(dir.x > 0 ? -1 : 1, 0, 0);
        else if (tmin === tminY) hitNormal.set(0, dir.y > 0 ? -1 : 1, 0);
        else hitNormal.set(0, 0, dir.z > 0 ? -1 : 1);
      }
    }

    if (dir.y < -0.001) {
      const groundY = this.heightFn(origin.x, origin.z);
      const tg = (groundY - origin.y) / dir.y;
      if (tg > 0.02 && tg < closest) {
        closest = tg;
        hitBox = { tag: 'ground' };
        hitNormal.set(0, 1, 0);
      }
    }

    if (!hitBox) return null;
    const point = origin.clone().addScaledVector(dir, closest);
    return { hit: true, dist: closest, point, normal: hitNormal, tag: hitBox.tag };
  }

  hasLineOfSight(a, b) {
    const diff = new THREE.Vector3().subVectors(b, a);
    const dist = diff.length();
    if (dist < 0.05) return true;
    diff.divideScalar(dist);
    const hit = this.raycast(a, diff, dist - 0.15);
    return !hit;
  }

  /**
   * Builds a 2D navigation grid directly from the registered collision shapes
   * so enemies route cleanly around walls, through doorways (>= 1.6m) and up stairs (<= 0.5m).
   */
  buildNavGrid(cellSize = 1.35) {
    const minX = this.bounds.minX;
    const minZ = this.bounds.minZ;
    const cols = Math.ceil((this.bounds.maxX - minX) / cellSize);
    const rows = Math.ceil((this.bounds.maxZ - minZ) / cellSize);
    const walkable = new Uint8Array(cols * rows);
    const heights = new Float32Array(cols * rows);
    const agentRadius = 0.44;

    for (let r = 0; r < rows; r++) {
      const wz = minZ + (r + 0.5) * cellSize;
      for (let c = 0; c < cols; c++) {
        const wx = minX + (c + 0.5) * cellSize;
        // Iteratively find highest climbable surface at (wx, wz)
        let fy = this.heightFn(wx, wz);
        for (let k = 0; k < 8; k++) {
          const next = this.getFloorHeight(wx, wz, fy);
          if (next <= fy + 0.001) break;
          fy = next;
        }
        const idx = r * cols + c;
        heights[idx] = fy;
        walkable[idx] = this.isClear(wx, wz, agentRadius, fy, 1.65) ? 1 : 0;
      }
    }

    this.nav = { minX, minZ, cellSize, cols, rows, walkable, heights };
  }

  _worldToCell(x, z) {
    const { minX, minZ, cellSize, cols, rows } = this.nav;
    const c = Math.max(0, Math.min(cols - 1, Math.floor((x - minX) / cellSize)));
    const r = Math.max(0, Math.min(rows - 1, Math.floor((z - minZ) / cellSize)));
    return { c, r };
  }

  _nearestWalkable(c, r) {
    const { cols, rows, walkable } = this.nav;
    if (walkable[r * cols + c]) return { c, r };
    for (let rad = 1; rad <= 5; rad++) {
      for (let dr = -rad; dr <= rad; dr++) {
        for (let dc = -rad; dc <= rad; dc++) {
          const nc = c + dc, nr = r + dr;
          if (nc >= 0 && nc < cols && nr >= 0 && nr < rows && walkable[nr * cols + nc]) {
            return { c: nc, r: nr };
          }
        }
      }
    }
    return null;
  }

  /**
   * Fast A* route finder returning array of world-space THREE.Vector3 waypoints
   */
  findPath(startPos, goalPos, maxExpanded = 1800) {
    if (!this.nav) return null;
    const { minX, minZ, cellSize, cols, rows, walkable, heights } = this.nav;
    const sc0 = this._worldToCell(startPos.x, startPos.z);
    const gc0 = this._worldToCell(goalPos.x, goalPos.z);
    const start = this._nearestWalkable(sc0.c, sc0.r);
    const goal = this._nearestWalkable(gc0.c, gc0.r);
    if (!start || !goal) return null;

    const startIdx = start.r * cols + start.c;
    const goalIdx = goal.r * cols + goal.c;
    if (startIdx === goalIdx) return [goalPos.clone()];

    const total = cols * rows;
    const gScore = new Float32Array(total).fill(1e9);
    const parent = new Int32Array(total).fill(-1);
    const closed = new Uint8Array(total);
    gScore[startIdx] = 0;

    // Simple binary min-heap for fast A*
    const heapIdx = [];
    const heapF = [];
    const push = (idx, f) => {
      heapIdx.push(idx);
      heapF.push(f);
      let i = heapIdx.length - 1;
      while (i > 0) {
        const p = (i - 1) >> 1;
        if (heapF[p] <= heapF[i]) break;
        [heapIdx[p], heapIdx[i]] = [heapIdx[i], heapIdx[p]];
        [heapF[p], heapF[i]] = [heapF[i], heapF[p]];
        i = p;
      }
    };
    const pop = () => {
      const top = heapIdx[0];
      const lastIdx = heapIdx.pop();
      const lastF = heapF.pop();
      if (heapIdx.length > 0) {
        heapIdx[0] = lastIdx;
        heapF[0] = lastF;
        let i = 0;
        const n = heapIdx.length;
        while (true) {
          let l = i * 2 + 1, r = l + 1, best = i;
          if (l < n && heapF[l] < heapF[best]) best = l;
          if (r < n && heapF[r] < heapF[best]) best = r;
          if (best === i) break;
          [heapIdx[best], heapIdx[i]] = [heapIdx[i], heapIdx[best]];
          [heapF[best], heapF[i]] = [heapF[i], heapF[best]];
          i = best;
        }
      }
      return top;
    };

    const dirs = [
      [1, 0, 1], [-1, 0, 1], [0, 1, 1], [0, -1, 1],
      [1, 1, 1.414], [-1, 1, 1.414], [1, -1, 1.414], [-1, -1, 1.414]
    ];

    push(startIdx, Math.hypot(goal.c - start.c, goal.r - start.r));
    let expanded = 0;
    let found = false;

    while (heapIdx.length > 0 && expanded < maxExpanded) {
      const cur = pop();
      if (closed[cur]) continue;
      closed[cur] = 1;
      expanded++;

      if (cur === goalIdx) {
        found = true;
        break;
      }

      const cc = cur % cols;
      const cr = (cur - cc) / cols;
      const ch = heights[cur];

      for (let d = 0; d < 8; d++) {
        const dc = dirs[d][0], dr = dirs[d][1], cost = dirs[d][2];
        const nc = cc + dc, nr = cr + dr;
        if (nc < 0 || nc >= cols || nr < 0 || nr >= rows) continue;
        const nIdx = nr * cols + nc;
        if (closed[nIdx] || !walkable[nIdx]) continue;
        // Prevent corner clipping on diagonal steps
        if (dc !== 0 && dr !== 0) {
          if (!walkable[cr * cols + nc] || !walkable[nr * cols + cc]) continue;
        }
        // Step height check: <= 0.5m climbable
        if (Math.abs(heights[nIdx] - ch) > STEP_MAX) continue;

        const tentative = gScore[cur] + cost;
        if (tentative < gScore[nIdx]) {
          gScore[nIdx] = tentative;
          parent[nIdx] = cur;
          const h = Math.hypot(goal.c - nc, goal.r - nr);
          push(nIdx, tentative + h);
        }
      }
    }

    if (!found) return null;

    // Reconstruct path waypoints (thin slightly to skip collinear points)
    const raw = [];
    let cur = goalIdx;
    while (cur !== -1 && cur !== startIdx) {
      const c = cur % cols;
      const r = (cur - c) / cols;
      raw.push(new THREE.Vector3(minX + (c + 0.5) * cellSize, heights[cur], minZ + (r + 0.5) * cellSize));
      cur = parent[cur];
    }
    raw.reverse();
    return raw;
  }

  /**
   * Checks reachability from a reference point (e.g., player spawn) to a target point via A*
   */
  canReach(fromPos, toPos) {
    return this.findPath(fromPos, toPos, 6000) !== null;
  }
}
