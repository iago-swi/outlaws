import * as THREE from 'three';

/**
 * Helper for Stage 9 Aimed-Throw Trajectory Preview (Item 63) & Molotov Fire Pools (Item 54).
 * Computes exact stepped flight paths (including bomb bounces) matching the real projectile physics.
 */
export class AimThrowPreview {
  constructor(worldGroup) {
    this.worldGroup = worldGroup;
    this.group = new THREE.Group();
    this.group.visible = false;

    const maxPts = 64;
    this.positions = new Float32Array(maxPts * 3);
    const ptGeo = new THREE.BufferGeometry();
    ptGeo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.dotMat = new THREE.PointsMaterial({ color: 0xf5ebd6, size: 0.14, sizeAttenuation: true, transparent: true, opacity: 0.9 });
    this.dots = new THREE.Points(ptGeo, this.dotMat);
    this.dots.frustumCulled = false;

    this.ringMat = new THREE.MeshBasicMaterial({ color: 0xf5ebd6, side: THREE.DoubleSide, transparent: true, opacity: 0.85 });
    this.landRing = new THREE.Mesh(new THREE.RingGeometry(0.18, 0.28, 24), this.ringMat);
    this.landRing.rotation.x = -Math.PI / 2;

    this.blastMat = new THREE.MeshBasicMaterial({ color: 0xff4438, side: THREE.DoubleSide, transparent: true, opacity: 0.45 });
    this.blastRing = new THREE.Mesh(new THREE.RingGeometry(0.92, 1.0, 32), this.blastMat);
    this.blastRing.rotation.x = -Math.PI / 2;
    this.blastRing.visible = false;

    this.group.add(this.dots, this.landRing, this.blastRing);
    this.worldGroup.add(this.group);
    this.lastHitEnemy = false;
    this.lastEndPos = new THREE.Vector3();
  }

  hide() {
    this.group.visible = false;
  }

  update(origin, forward, right, spec, collision, enemies, remoteFighter = null) {
    this.group.visible = true;
    const isBomb = spec.kind === 'throwable' && !spec.isMolotov;
    const isMolotov = !!spec.isMolotov;
    const pos = origin.clone().addScaledVector(forward, 0.72).addScaledVector(right, 0.14).add(new THREE.Vector3(0, -0.08, 0));
    const vel = spec.kind === 'throwable'
      ? forward.clone().multiplyScalar(spec.throwSpeed || 20).add(new THREE.Vector3(0, spec.throwUp || 5.2, 0))
      : forward.clone().multiplyScalar(spec.projSpeed || 34);
    const grav = spec.kind === 'throwable' ? 17.5 : (spec.projGravity !== undefined ? spec.projGravity : 9.8);
    const maxTime = isBomb ? (spec.fuseTime || 2.0) : 2.6;
    const dt = 0.04;

    let count = 0;
    let hitEnemy = false;
    let t = 0;

    while (t < maxTime && count < 64) {
      this.positions[count * 3] = pos.x;
      this.positions[count * 3 + 1] = pos.y;
      this.positions[count * 3 + 2] = pos.z;
      count++;

      vel.y -= grav * dt;
      const step = vel.clone().multiplyScalar(dt);
      const stepLen = step.length();
      const dir = stepLen > 1e-5 ? step.clone().divideScalar(stepLen) : new THREE.Vector3(0, -1, 0);

      // Direct enemy collision check along step
      if (!isBomb) {
        for (const e of enemies) {
          if (!e.alive || !e.mesh.visible) continue;
          const dx = pos.x - e.mesh.position.x;
          const dz = pos.z - e.mesh.position.z;
          const dy = pos.y - (e.mesh.position.y + 1.0);
          if (dx * dx + dz * dz < 0.75 * 0.75 && Math.abs(dy) < 1.1) {
            hitEnemy = true;
            break;
          }
        }
        if (!hitEnemy && remoteFighter && remoteFighter.alive) {
          const dx = pos.x - remoteFighter.root.position.x;
          const dz = pos.z - remoteFighter.root.position.z;
          const dy = pos.y - (remoteFighter.root.position.y + 1.0);
          if (dx * dx + dz * dz < 0.75 * 0.75 && Math.abs(dy) < 1.1) hitEnemy = true;
        }
        if (hitEnemy) break;
      }

      const wall = collision.raycast(pos, dir, stepLen + 0.1);
      if (wall) {
        pos.copy(wall.point);
        if (isBomb) {
          vel.x *= -0.4;
          vel.z *= -0.4;
        } else {
          break;
        }
      } else {
        pos.add(step);
      }

      const fy = collision.getFloorHeight(pos.x, pos.z, pos.y + 0.15);
      if (pos.y <= fy + 0.12) {
        pos.y = fy + 0.12;
        if (isBomb) {
          vel.y *= -0.4;
          vel.x *= 0.65;
          vel.z *= 0.65;
        } else {
          break;
        }
      }
      t += dt;
    }

    if (count < 64) {
      this.positions[count * 3] = pos.x;
      this.positions[count * 3 + 1] = pos.y;
      this.positions[count * 3 + 2] = pos.z;
      count++;
    }
    this.dots.geometry.setDrawRange(0, count);
    this.dots.geometry.attributes.position.needsUpdate = true;
    this.lastEndPos.copy(pos);

    const blastR = (isBomb || isMolotov) ? (spec.blastRadius || 6.5) : 0;
    if (blastR > 0 && !hitEnemy) {
      for (const e of enemies) {
        if (!e.alive || !e.mesh.visible) continue;
        if (e.mesh.position.distanceTo(pos) <= blastR) { hitEnemy = true; break; }
      }
      if (!hitEnemy && remoteFighter && remoteFighter.alive && remoteFighter.root.position.distanceTo(pos) <= blastR) {
        hitEnemy = true;
      }
    }

    this.lastHitEnemy = hitEnemy;
    const col = hitEnemy ? 0xff4438 : 0xf5ebd6;
    this.dotMat.color.setHex(col);
    this.ringMat.color.setHex(col);
    this.landRing.position.set(pos.x, pos.y + 0.05, pos.z);

    if (blastR > 0) {
      this.blastRing.visible = true;
      this.blastRing.position.set(pos.x, pos.y + 0.06, pos.z);
      this.blastRing.scale.setScalar(blastR);
    } else {
      this.blastRing.visible = false;
    }
  }
}

export function spawnFirePoolMesh(worldGroup, pos, radius = 3.0) {
  const g = new THREE.Group();
  g.position.set(pos.x, pos.y + 0.06, pos.z);
  const disc = new THREE.Mesh(
    new THREE.CircleGeometry(radius, 20),
    new THREE.MeshBasicMaterial({ color: 0xff5a14, transparent: true, opacity: 0.45, side: THREE.DoubleSide })
  );
  disc.rotation.x = -Math.PI / 2;
  g.add(disc);
  const flameMat = new THREE.MeshBasicMaterial({ color: 0xffae34, transparent: true, opacity: 0.8 });
  const flames = [];
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    const r = (i % 2 === 0 ? 0.45 : 0.8) * radius;
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.95, 5), flameMat);
    cone.position.set(Math.cos(a) * r, 0.45, Math.sin(a) * r);
    g.add(cone);
    flames.push(cone);
  }
  const light = new THREE.PointLight(0xff7722, 6, radius * 3.2, 1.8);
  light.position.set(0, 0.9, 0);
  g.add(light);
  worldGroup.add(g);
  return { group: g, flames, light };
}
