import * as THREE from 'three';

export class CollisionWorld {
  constructor(bounds = { minX: -60, maxX: 60, minZ: -60, maxZ: 60 }) {
    this.boxes = [];        // Solid blocking AABBs { minX, maxX, minY, maxY, minZ, maxZ, tag }
    this.walkables = [];    // Elevated surfaces player can stand on { minX, maxX, minZ, maxZ, topY }
    this.bounds = bounds;
    this.heightFn = () => 0;
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

  getFloorHeight(x, z, currentFeetY = 0) {
    let h = this.heightFn(x, z);
    for (const w of this.walkables) {
      if (x >= w.minX && x <= w.maxX && z >= w.minZ && z <= w.maxZ) {
        if (currentFeetY >= w.topY - 0.65) {
          h = Math.max(h, w.topY);
        }
      }
    }
    return h;
  }

  /**
   * Resolves horizontal circle vs AABB collisions for player or enemies
   */
  resolveHorizontal(pos, radius, feetY, height = 1.75) {
    pos.x = Math.max(this.bounds.minX + radius, Math.min(this.bounds.maxX - radius, pos.x));
    pos.z = Math.max(this.bounds.minZ + radius, Math.min(this.bounds.maxZ - radius, pos.z));

    for (let iter = 0; iter < 2; iter++) {
      for (const b of this.boxes) {
        // Ignore if strictly above or below
        if (feetY + height <= b.minY + 0.05 || feetY >= b.maxY - 0.15) continue;

        const closestX = Math.max(b.minX, Math.min(pos.x, b.maxX));
        const closestZ = Math.max(b.minZ, Math.min(pos.z, b.maxZ));
        const dx = pos.x - closestX;
        const dz = pos.z - closestZ;
        const distSq = dx * dx + dz * dz;

        if (distSq < radius * radius) {
          if (distSq > 0.00001) {
            const dist = Math.sqrt(distSq);
            const push = radius - dist;
            pos.x += (dx / dist) * push;
            pos.z += (dz / dist) * push;
          } else {
            // Center inside box — push out nearest face
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
   * Ray vs AABB slab intersection for line-of-sight and hitscan shots
   * Returns { hit, dist, point, normal, tag } or null
   */
  raycast(origin, dir, maxDist = 200) {
    let closest = maxDist;
    let hitBox = null;
    let hitNormal = new THREE.Vector3(0, 1, 0);

    const invX = dir.x !== 0 ? 1 / dir.x : 1e9;
    const invY = dir.y !== 0 ? 1 / dir.y : 1e9;
    const invZ = dir.z !== 0 ? 1 / dir.z : 1e9;

    for (const b of this.boxes) {
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

    // Check ground plane intersection (approx)
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
    if (dist < 0.01) return true;
    diff.divideScalar(dist);
    const hit = this.raycast(a, diff, dist - 0.25);
    return !hit;
  }
}
