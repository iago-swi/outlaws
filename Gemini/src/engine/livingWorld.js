import * as THREE from 'three';

const ANIMAL_SPECS = {
  horse: { hp: 90, damage: 20, speed: 6.4, retaliation: 0.50, len: 1.9, h: 1.38, w: 0.65, color: 0x6b4226, neckLen: 0.62 },
  mule:  { hp: 75, damage: 16, speed: 5.2, retaliation: 0.33, len: 1.65, h: 1.22, w: 0.58, color: 0x6e6258, neckLen: 0.52 },
  hen:   { hp: 14, damage: 0,  speed: 3.6, retaliation: 0.0,  len: 0.42, h: 0.38, w: 0.24, color: 0xd9c2a0, neckLen: 0.16, isBird: true },
  ox:    { hp: 110, damage: 22, speed: 4.8, retaliation: 0.50, len: 2.1, h: 1.42, w: 0.82, color: 0x3b2c22, neckLen: 0.45, horns: true },
  cow:   { hp: 95, damage: 18, speed: 4.6, retaliation: 0.33, len: 2.0, h: 1.35, w: 0.78, color: 0xefe9dc, neckLen: 0.45, horns: true },
  goat:  { hp: 45, damage: 14, speed: 5.5, retaliation: 0.33, len: 1.05, h: 0.82, w: 0.42, color: 0xd9d2c4, neckLen: 0.32, horns: true },
  pig:   { hp: 50, damage: 12, speed: 4.8, retaliation: 0.25, len: 1.08, h: 0.66, w: 0.52, color: 0xd99e94, neckLen: 0.18 },
  dog:   { hp: 55, damage: 16, speed: 7.2, retaliation: 0.95, len: 0.95, h: 0.64, w: 0.36, color: 0x7a5b3e, neckLen: 0.26 },
  pony:  { hp: 80, damage: 18, speed: 5.8, retaliation: 0.50, len: 1.55, h: 1.12, w: 0.58, color: 0x8a6d4b, neckLen: 0.46 },
  sheep: { hp: 38, damage: 0,  speed: 4.2, retaliation: 0.0,  len: 1.05, h: 0.78, w: 0.52, color: 0xf0ece2, neckLen: 0.24 },
  yak:   { hp: 120, damage: 24, speed: 5.0, retaliation: 0.50, len: 2.15, h: 1.48, w: 0.88, color: 0x26211e, neckLen: 0.42, horns: true }
};

const CHAPTER_ANIMALS = {
  west: [
    { kind: 'horse', x: -24, z: 22 }, { kind: 'horse', x: 24, z: 16 },
    { kind: 'mule',  x: 10, z: 32 },  { kind: 'hen', x: -9, z: 28 }, { kind: 'hen', x: -7.5, z: 29.5 }
  ],
  japan: [
    { kind: 'ox', x: -34, z: 16 }
  ],
  swiss: [
    { kind: 'cow', x: 18, z: 28 }, { kind: 'cow', x: 24, z: 22 },
    { kind: 'mule', x: -12, z: 34 }, { kind: 'mule', x: -16, z: 26 }
  ],
  greece: [
    { kind: 'goat', x: 16, z: 26 }, { kind: 'goat', x: -26, z: 4 },
    { kind: 'pig', x: -14, z: 26 }, { kind: 'dog', x: -16, z: 18, name: 'Argos' }
  ],
  scandinavia: [
    { kind: 'pony', x: 28, z: 16 }, { kind: 'sheep', x: 34, z: 12 }, { kind: 'sheep', x: 36, z: 15 }
  ],
  normandy: [
    { kind: 'cow', x: -36, z: -2 }
  ],
  soviet: [],
  tibet: [
    { kind: 'yak', x: 18, z: 34 }, { kind: 'yak', x: -18, z: 28 }, { kind: 'horse', x: 10, z: 42 }
  ],
  aztec: []
};

export function spawnChapterAnimals(worldGroup, collision, eraId) {
  const defs = CHAPTER_ANIMALS[eraId] || [];
  const animals = [];

  for (let i = 0; i < defs.length; i++) {
    const d = defs[i];
    const sp = ANIMAL_SPECS[d.kind] || ANIMAL_SPECS.horse;
    const fy = collision.getFloorHeight(d.x, d.z, 2);
    const root = new THREE.Group();
    root.position.set(d.x, fy, d.z);
    root.rotation.y = (i * 1.4) % (Math.PI * 2);

    const bodyMat = new THREE.MeshStandardMaterial({ color: sp.color, roughness: 0.88 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x221b16, roughness: 0.85 });
    const hornMat = new THREE.MeshStandardMaterial({ color: 0xe6dec8, roughness: 0.6 });

    const body = new THREE.Mesh(new THREE.BoxGeometry(sp.w, sp.h * 0.45, sp.len), bodyMat);
    body.position.y = sp.h * 0.62;
    body.castShadow = true;
    root.add(body);

    const headGrp = new THREE.Group();
    headGrp.position.set(0, sp.h * 0.72, sp.len * 0.48);
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(sp.w * 0.24, sp.w * 0.3, sp.neckLen, 7), bodyMat);
    neck.position.set(0, sp.neckLen * 0.3, sp.neckLen * 0.25);
    neck.rotation.x = 0.55;
    const head = new THREE.Mesh(new THREE.BoxGeometry(sp.w * 0.48, sp.h * 0.24, sp.len * 0.28), bodyMat);
    head.position.set(0, sp.neckLen * 0.58, sp.neckLen * 0.52);
    headGrp.add(neck, head);
    if (sp.horns) {
      for (const s of [-1, 1]) {
        const hMesh = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.26, 5), hornMat);
        hMesh.position.set(s * sp.w * 0.28, sp.neckLen * 0.7, sp.neckLen * 0.45);
        hMesh.rotation.z = -s * 0.65;
        headGrp.add(hMesh);
      }
    }
    root.add(headGrp);

    const legs = [];
    const legOffsets = sp.isBird
      ? [[-sp.w * 0.28, 0], [sp.w * 0.28, 0]]
      : [[-sp.w * 0.34, sp.len * 0.34], [sp.w * 0.34, sp.len * 0.34], [-sp.w * 0.34, -sp.len * 0.34], [sp.w * 0.34, -sp.len * 0.34]];
    for (const [lx, lz] of legOffsets) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(sp.w * 0.1, sp.w * 0.08, sp.h * 0.5, 6), darkMat);
      leg.position.set(lx, sp.h * 0.25, lz);
      root.add(leg);
      legs.push(leg);
    }

    worldGroup.add(root);
    const boxCol = collision.addBox(d.x, fy + sp.h * 0.5, d.z, sp.w + 0.1, sp.h, sp.len * 0.85, 'animal');

    const animal = {
      kind: d.kind,
      name: d.name || d.kind,
      mesh: root,
      homePos: new THREE.Vector3(d.x, fy, d.z),
      hp: sp.hp,
      maxHp: sp.hp,
      damage: sp.damage,
      speed: sp.speed,
      retaliationChance: sp.retaliation,
      alive: true,
      hostile: false,
      fleeTimer: 0,
      fleeDir: new THREE.Vector3(1, 0, 0),
      attackCooldown: 0,
      phase: i * 1.7,
      headGrp,
      legs,
      boxCol,
      getHitMeshes() {
        if (!this.alive || !this.mesh.visible) return [];
        const out = [];
        this.mesh.traverse((o) => { if (o.isMesh) { o.userData.animal = this; out.push(o); } });
        return out;
      },
      triggerFright(dangerPos) {
        if (!this.alive || this.hostile) return;
        const dx = this.mesh.position.x - dangerPos.x;
        const dz = this.mesh.position.z - dangerPos.z;
        const len = Math.hypot(dx, dz);
        if (len > 0.01) this.fleeDir.set(dx / len, 0, dz / len);
        else this.fleeDir.set(1, 0, 0);
        this.fleeTimer = 3.2;
      },
      takeDamage(dmg, hitPoint, particles, forceRetaliate = null) {
        if (!this.alive) return { killed: false, turnedHostile: false };
        this.hp -= dmg;
        if (particles && hitPoint) particles.spawnImpact(hitPoint, 0xc42222, 8, 6);
        if (this.hp <= 0) {
          this.alive = false;
          this.hp = 0;
          this.hostile = false;
          this.mesh.rotation.z = Math.PI * 0.48;
          this.mesh.position.y = collision.getFloorHeight(this.mesh.position.x, this.mesh.position.z, this.mesh.position.y) + 0.16;
          if (this.boxCol) {
            collision.removeBox(this.boxCol);
            this.boxCol = null;
          }
          return { killed: true, turnedHostile: false };
        }
        let turnedHostile = false;
        if (!this.hostile && this.retaliationChance > 0) {
          const roll = forceRetaliate !== null ? forceRetaliate : (Math.random() < this.retaliationChance);
          if (roll) {
            this.hostile = true;
            this.fleeTimer = 0;
            turnedHostile = true;
          } else {
            this.fleeTimer = 4.0;
          }
        }
        return { killed: false, turnedHostile };
      },
      update(dt, t, playerPos, col, onHitPlayer) {
        if (!this.alive) return;
        if (this.attackCooldown > 0) this.attackCooldown -= dt;

        const moveAnimal = (dx, dz, rad) => {
          const saved = this.boxCol;
          if (saved) { saved.minY = 9999; saved.maxY = 9999; }
          col.moveHorizontal(this.mesh.position, dx, dz, rad, this.mesh.position.y);
          this.mesh.position.y = col.getFloorHeight(this.mesh.position.x, this.mesh.position.z, this.mesh.position.y);
          if (saved) {
            saved.minX = this.mesh.position.x - sp.w * 0.55; saved.maxX = this.mesh.position.x + sp.w * 0.55;
            saved.minY = this.mesh.position.y;               saved.maxY = this.mesh.position.y + sp.h;
            saved.minZ = this.mesh.position.z - sp.len * 0.45; saved.maxZ = this.mesh.position.z + sp.len * 0.45;
          }
        };

        if (this.hostile) {
          const dx = playerPos.x - this.mesh.position.x;
          const dz = playerPos.z - this.mesh.position.z;
          const dist = Math.hypot(dx, dz) || 1;
          this.mesh.rotation.y = Math.atan2(dx, dz);
          if (dist > 1.85) {
            const step = this.speed * dt;
            moveAnimal((dx / dist) * step, (dz / dist) * step, 0.55);
            for (let li = 0; li < this.legs.length; li++) {
              this.legs[li].rotation.x = Math.sin(t * 12 + li * Math.PI) * 0.65;
            }
          } else if (this.attackCooldown <= 0 && onHitPlayer) {
            this.attackCooldown = 1.05;
            onHitPlayer(this.damage);
          }
          return;
        }

        if (this.fleeTimer > 0) {
          this.fleeTimer -= dt;
          const step = this.speed * 0.78 * dt;
          moveAnimal(this.fleeDir.x * step, this.fleeDir.z * step, 0.5);
          this.mesh.rotation.y = Math.atan2(this.fleeDir.x, this.fleeDir.z);
          for (let li = 0; li < this.legs.length; li++) {
            this.legs[li].rotation.x = Math.sin(t * 10 + li * Math.PI) * 0.55;
          }
          return;
        }

        // Grazing & gentle breathing
        this.headGrp.rotation.x = 0.25 + Math.max(0, Math.sin(t * 0.75 + this.phase)) * 0.55;
        for (const l of this.legs) l.rotation.x *= 0.85;
      }
    };
    animals.push(animal);
  }
  return animals;
}

/**
 * Stage 13 Items 87 & 90: Flocks of birds that take wing, dust/snow gusts, dust devils (West/Tibet),
 * moving West steam train, moving Soviet tank & avenue car, and billowing clouds + high cirrus!
 */
export function spawnAmbientLife(worldGroup, collision, animated, eraId, onVehicleHit) {
  const birds = [];
  const birdMat = new THREE.MeshBasicMaterial({ color: eraId === 'scandinavia' || eraId === 'greece' ? 0xf2f0eb : 0x383430 });

  // 1. Small flocks of ground-pecking birds that take wing on noise or proximity!
  const flockCenters = [{ x: -6, z: 30 }, { x: 10, z: 8 }];
  for (let fi = 0; fi < flockCenters.length; fi++) {
    const fc = flockCenters[fi];
    const fy = collision.getFloorHeight(fc.x, fc.z, 2);
    for (let bi = 0; bi < 4; bi++) {
      const g = new THREE.Group();
      const bx = fc.x + (bi - 1.5) * 0.9;
      const bz = fc.z + ((bi % 2) - 0.5) * 1.1;
      g.position.set(bx, fy + 0.14, bz);
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.11, 6, 5), birdMat);
      body.scale.set(0.8, 0.7, 1.4);
      const wingL = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.02, 0.12), birdMat);
      wingL.position.x = -0.14;
      const wingR = wingL.clone();
      wingR.position.x = 0.14;
      g.add(body, wingL, wingR);
      worldGroup.add(g);
      birds.push({ group: g, wingL, wingR, flying: false, vel: new THREE.Vector3(), home: g.position.clone(), phase: bi * 1.5 + fi });
    }
  }

  // 2. Dust devils on dry plains (West & Tibet)
  if (eraId === 'west' || eraId === 'tibet') {
    const dd = new THREE.Group();
    const dMat = new THREE.MeshBasicMaterial({ color: eraId === 'west' ? 0xd9b382 : 0xd4b68c, transparent: true, opacity: 0.24, side: THREE.DoubleSide });
    for (let k = 0; k < 5; k++) {
      const ring = new THREE.Mesh(new THREE.ConeGeometry(0.45 + k * 0.38, 1.3, 9, 1, true), dMat);
      ring.position.y = 0.65 + k * 1.15;
      dd.add(ring);
    }
    dd.position.set(-28, 0, 12);
    worldGroup.add(dd);
    animated.push((t) => {
      dd.position.x = -26 + Math.sin(t * 0.18) * 16;
      dd.position.z = 10 + Math.cos(t * 0.14) * 18;
      dd.position.y = collision.getFloorHeight(dd.position.x, dd.position.z, 2);
      dd.rotation.y = t * 5.2;
    });
  }

  // 3. Moving West Steam Train (along East railroad line x = 40) stopping at depot with bell & backing out!
  let trainObj = null;
  if (eraId === 'west') {
    const train = new THREE.Group();
    const ironMat = new THREE.MeshStandardMaterial({ color: 0x222428, metalness: 0.65, roughness: 0.4 });
    const brassMat = new THREE.MeshStandardMaterial({ color: 0xd9a441, metalness: 0.85, roughness: 0.25 });
    const carMat = new THREE.MeshStandardMaterial({ color: 0x6b3226, roughness: 0.8 });
    const boiler = new THREE.Mesh(new THREE.CylinderGeometry(0.92, 0.92, 5.2, 12), ironMat);
    boiler.rotation.x = Math.PI / 2;
    boiler.position.set(0, 1.75, 0);
    const stack = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.22, 1.4, 8), ironMat);
    stack.position.set(0, 2.9, -1.8);
    const cab = new THREE.Mesh(new THREE.BoxGeometry(2.3, 2.6, 2.4), carMat);
    cab.position.set(0, 2.1, 3.2);
    const bell = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.3, 8), brassMat);
    bell.position.set(0, 2.85, -0.4);
    const tender = new THREE.Mesh(new THREE.BoxGeometry(2.1, 1.9, 4.4), ironMat);
    tender.position.set(0, 1.6, 7.2);
    train.add(boiler, stack, cab, bell, tender);
    train.position.set(40.5, 0, 56);
    worldGroup.add(train);
    trainObj = { group: train, halfW: 1.4, halfL: 6.2 };
    animated.push((t) => {
      // Smooth 40-second cycle: rolls in to depot (z=22), pauses 8s, backs out to z=68!
      const cyc = t % 40;
      let zPos = 64;
      if (cyc < 14) zPos = 64 - (cyc / 14) * 42;
      else if (cyc < 22) zPos = 22;
      else if (cyc < 36) zPos = 22 + ((cyc - 22) / 14) * 42;
      train.position.set(40.5, 0, zPos);
      if (onVehicleHit) onVehicleHit(train.position, 2.2, 6.2, 24);
    });
  }

  // 4. Moving Soviet Tank & Sedan Car (Stalnogorsk avenue)
  if (eraId === 'soviet') {
    const tank = new THREE.Group();
    const oliveMat = new THREE.MeshStandardMaterial({ color: 0x3b4a34, roughness: 0.78 });
    const trackMat = new THREE.MeshStandardMaterial({ color: 0x1e2022, roughness: 0.9 });
    const hull = new THREE.Mesh(new THREE.BoxGeometry(3.1, 1.15, 5.8), oliveMat);
    hull.position.y = 0.95;
    const turret = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.2, 0.85, 10), oliveMat);
    turret.position.set(0, 1.9, 0.2);
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.14, 4.2, 8), oliveMat);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(0, 1.95, -2.5);
    const trL = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.9, 6.0), trackMat);
    trL.position.set(-1.55, 0.45, 0);
    const trR = trL.clone();
    trR.position.x = 1.55;
    tank.add(hull, turret, barrel, trL, trR);
    worldGroup.add(tank);

    const car = new THREE.Group();
    const carMat = new THREE.MeshStandardMaterial({ color: 0x38495c, roughness: 0.45, metalness: 0.35 });
    const cBody = new THREE.Mesh(new THREE.BoxGeometry(1.75, 0.75, 4.1), carMat);
    cBody.position.y = 0.65;
    const cTop = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.6, 2.0), carMat);
    cTop.position.set(0, 1.25, 0.2);
    car.add(cBody, cTop);
    worldGroup.add(car);

    animated.push((t) => {
      // Tank crosses east-west along z = -22
      const tx = -52 + ((t * 4.2) % 104);
      tank.position.set(tx, 0, -22);
      tank.rotation.y = Math.PI * 0.5;
      if (onVehicleHit) onVehicleHit(tank.position, 3.2, 2.0, 28);

      // Car drives north along x = 5.5 to checkpoint (z = -6), turns and drives back!
      const cCyc = (t * 0.08) % 2;
      const cz = cCyc < 1 ? (46 - cCyc * 52) : (-6 + (cCyc - 1) * 52);
      car.position.set(5.5, 0, cz);
      car.rotation.y = cCyc < 1 ? Math.PI : 0;
    });
  }

  // 5. High thin cirrus clouds + billowing sky clouds (Item 90)
  const cirrusMat = new THREE.MeshBasicMaterial({ color: 0xfff8ee, transparent: true, opacity: 0.26, side: THREE.DoubleSide });
  for (let ci = 0; ci < 6; ci++) {
    const streak = new THREE.Mesh(new THREE.PlaneGeometry(36 + ci * 8, 5 + (ci % 3) * 2), cirrusMat);
    streak.rotation.x = Math.PI / 2;
    streak.rotation.z = ci * 0.45;
    streak.position.set(-70 + ci * 28, 72 + (ci % 2) * 8, -50 + (ci % 3) * 40);
    worldGroup.add(streak);
    animated.push((t) => { streak.position.x += 0.008; if (streak.position.x > 110) streak.position.x = -110; });
  }

  return {
    birds,
    trainObj,
    scareBirds(pos, radius = 16) {
      for (const b of birds) {
        if (b.flying) continue;
        if (b.group.position.distanceTo(pos) <= radius) {
          b.flying = true;
          b.vel.set((Math.random() - 0.5) * 8, 5.5 + Math.random() * 3, (Math.random() - 0.5) * 8);
        }
      }
    },
    updateBirds(dt, t, playerPos) {
      for (const b of birds) {
        if (!b.flying) {
          b.group.rotation.x = Math.max(0, Math.sin(t * 5 + b.phase)) * 0.45; // pecking!
          if (b.group.position.distanceTo(playerPos) < 5.5) {
            b.flying = true;
            b.vel.set((Math.random() - 0.5) * 9, 5.8 + Math.random() * 2.5, (Math.random() - 0.5) * 9);
          }
        } else {
          b.group.position.addScaledVector(b.vel, dt);
          b.wingL.rotation.z = Math.sin(t * 22 + b.phase) * 0.7;
          b.wingR.rotation.z = -Math.sin(t * 22 + b.phase) * 0.7;
          if (b.group.position.y > 46) b.group.visible = false;
        }
      }
    }
  };
}
