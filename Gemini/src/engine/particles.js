import * as THREE from 'three';

export class ParticleSystem {
  constructor(scene) {
    this.scene = scene;
    this.bursts = [];      // Transient particles (sparks, smoke, debris, petals burst)
    this.tracers = [];     // Fast fading bullet/bolt lines
    this.rings = [];       // Expanding shockwave / slash rings
    this.ambient = null;   // Ambient points system
    this.ambientVel = [];
    this.ambientBounds = null;
    this.tumbleweeds = [];
    this.mistEmitters = [];

    this.sharedBoxGeo = new THREE.BoxGeometry(1, 1, 1);
    this.sharedSphereGeo = new THREE.SphereGeometry(0.5, 6, 6);
  }

  /**
   * Sets up drifting ambient particles tailored to each world
   */
  initAmbient(mode, bounds) {
    this.ambientBounds = bounds;
    const count = mode === 'sakura' ? 520 : mode === 'alpine' ? 420 : 340;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    this.ambientVel = [];

    const c1 = new THREE.Color(
      mode === 'sakura' ? 0xffb7cf :
      mode === 'alpine' ? 0xe8f9ff : 0xffd28a
    );
    const c2 = new THREE.Color(
      mode === 'sakura' ? 0xffe4ec :
      mode === 'alpine' ? 0xfff5cc : 0xe39e54
    );

    const spanX = bounds.maxX - bounds.minX;
    const spanZ = bounds.maxZ - bounds.minZ;
    const tmp = new THREE.Color();

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = bounds.minX + Math.random() * spanX;
      positions[i * 3 + 1] = 0.5 + Math.random() * 16;
      positions[i * 3 + 2] = bounds.minZ + Math.random() * spanZ;

      tmp.copy(c1).lerp(c2, Math.random());
      colors[i * 3]     = tmp.r;
      colors[i * 3 + 1] = tmp.g;
      colors[i * 3 + 2] = tmp.b;

      if (mode === 'sakura') {
        this.ambientVel.push({
          vx: 0.9 + Math.random() * 1.1,
          vy: -(0.55 + Math.random() * 0.7),
          vz: 0.35 + Math.random() * 0.6,
          phase: Math.random() * Math.PI * 2
        });
      } else if (mode === 'alpine') {
        this.ambientVel.push({
          vx: 0.4 + Math.random() * 0.7,
          vy: -0.15 + Math.random() * 0.35,
          vz: -0.3 + Math.random() * 0.6,
          phase: Math.random() * Math.PI * 2
        });
      } else {
        // Desert dust motes
        this.ambientVel.push({
          vx: 1.4 + Math.random() * 1.5,
          vy: -0.05 + Math.random() * 0.25,
          vz: -0.3 + Math.random() * 0.6,
          phase: Math.random() * Math.PI * 2
        });
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: mode === 'sakura' ? 0.26 : mode === 'alpine' ? 0.19 : 0.16,
      vertexColors: true,
      transparent: true,
      opacity: mode === 'sakura' ? 0.9 : 0.68,
      depthWrite: false
    });

    this.ambient = new THREE.Points(geo, mat);
    this.scene.add(this.ambient);
  }

  addTumbleweed(pos, dirX = 1) {
    const group = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({
      color: 0x7d5d38,
      roughness: 0.95,
      wireframe: true
    });
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.65, 1), mat);
    const outer = new THREE.Mesh(new THREE.DodecahedronGeometry(0.72, 0), mat);
    group.add(core, outer);
    group.position.copy(pos);
    this.scene.add(group);
    this.tumbleweeds.push({
      mesh: group,
      vx: dirX * (2.6 + Math.random() * 1.4),
      vz: (Math.random() - 0.5) * 0.8,
      bouncePhase: Math.random() * Math.PI * 2
    });
  }

  addMistEmitter(pos, radius = 3.5) {
    this.mistEmitters.push({ pos: pos.clone(), radius, timer: 0 });
  }

  spawnImpact(pos, color = 0xffcc66, count = 12, speed = 7) {
    for (let i = 0; i < count; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 1
      });
      const mesh = new THREE.Mesh(this.sharedBoxGeo, mat);
      const s = 0.06 + Math.random() * 0.09;
      mesh.scale.set(s, s, s);
      mesh.position.copy(pos);
      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        Math.random() * 1.4 + 0.3,
        (Math.random() - 0.5) * 2
      ).normalize().multiplyScalar(speed * (0.4 + Math.random() * 0.8));

      this.scene.add(mesh);
      this.bursts.push({
        mesh,
        vel,
        gravity: 15,
        life: 0.28 + Math.random() * 0.32,
        maxLife: 0.6,
        grow: 0
      });
    }
  }

  spawnSmoke(pos, color = 0xddd4c6, count = 6, scale = 0.4) {
    for (let i = 0; i < count; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.55,
        depthWrite: false
      });
      const mesh = new THREE.Mesh(this.sharedSphereGeo, mat);
      const s = scale * (0.6 + Math.random() * 0.7);
      mesh.scale.set(s, s, s);
      mesh.position.copy(pos).add(new THREE.Vector3(
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3
      ));
      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 1.4,
        1.1 + Math.random() * 1.6,
        (Math.random() - 0.5) * 1.4
      );
      this.scene.add(mesh);
      this.bursts.push({
        mesh,
        vel,
        gravity: -0.8,
        life: 0.45 + Math.random() * 0.45,
        maxLife: 0.9,
        grow: 1.6
      });
    }
  }

  spawnExplosion(pos, radius = 6) {
    // Fiery core & embers
    this.spawnImpact(pos, 0xffae33, 28, 14);
    this.spawnImpact(pos, 0xff4514, 22, 10);
    this.spawnSmoke(pos, 0x382e29, 14, 1.3);

    // Expanding shockwave ring
    const ringGeo = new THREE.RingGeometry(0.4, 0.9, 28);
    ringGeo.rotateX(-Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffb347,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.copy(pos);
    ring.position.y += 0.25;
    this.scene.add(ring);
    this.rings.push({ mesh: ring, life: 0.45, maxLife: 0.45, targetScale: radius * 1.4 });

    // Glowing flash sphere
    const flashMat = new THREE.MeshBasicMaterial({
      color: 0xffe494,
      transparent: true,
      opacity: 0.95
    });
    const flash = new THREE.Mesh(new THREE.SphereGeometry(1.0, 12, 10), flashMat);
    flash.position.copy(pos);
    this.scene.add(flash);
    this.rings.push({ mesh: flash, life: 0.25, maxLife: 0.25, targetScale: radius * 0.72 });
  }

  spawnTracer(start, end, color = 0xffe599, life = 0.085) {
    const geo = new THREE.BufferGeometry().setFromPoints([start, end]);
    const mat = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0.95
    });
    const line = new THREE.Line(geo, mat);
    this.scene.add(line);
    this.tracers.push({ line, life, maxLife: life });
  }

  spawnSlashArc(origin, forward, right, color = 0xdff6ff) {
    const curvePoints = [];
    for (let i = 0; i <= 12; i++) {
      const a = -1.05 + (i / 12) * 2.1;
      const p = origin.clone()
        .addScaledVector(forward, Math.cos(a) * 1.9)
        .addScaledVector(right, Math.sin(a) * 1.7);
      p.y += Math.sin(a) * 0.22 - 0.15;
      curvePoints.push(p);
    }
    const geo = new THREE.BufferGeometry().setFromPoints(curvePoints);
    const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 1 });
    const line = new THREE.Line(geo, mat);
    this.scene.add(line);
    this.tracers.push({ line, life: 0.16, maxLife: 0.16 });
  }

  update(dt, elapsed) {
    // Update ambient particles
    if (this.ambient && this.ambientBounds) {
      const posArr = this.ambient.geometry.attributes.position.array;
      const b = this.ambientBounds;
      for (let i = 0; i < this.ambientVel.length; i++) {
        const v = this.ambientVel[i];
        const idx = i * 3;
        posArr[idx]     += (v.vx + Math.sin(elapsed * 1.5 + v.phase) * 0.5) * dt;
        posArr[idx + 1] += v.vy * dt;
        posArr[idx + 2] += (v.vz + Math.cos(elapsed * 1.3 + v.phase) * 0.4) * dt;

        if (posArr[idx] > b.maxX) posArr[idx] = b.minX;
        if (posArr[idx] < b.minX) posArr[idx] = b.maxX;
        if (posArr[idx + 2] > b.maxZ) posArr[idx + 2] = b.minZ;
        if (posArr[idx + 2] < b.minZ) posArr[idx + 2] = b.maxZ;
        if (posArr[idx + 1] < 0.2) posArr[idx + 1] = 15 + Math.random() * 4;
        if (posArr[idx + 1] > 20) posArr[idx + 1] = 1.0;
      }
      this.ambient.geometry.attributes.position.needsUpdate = true;
    }

    // Update rolling tumbleweeds
    for (const tw of this.tumbleweeds) {
      tw.mesh.position.x += tw.vx * dt;
      tw.mesh.position.z += tw.vz * dt;
      tw.mesh.rotation.z -= tw.vx * dt * 1.4;
      tw.mesh.rotation.x += tw.vz * dt * 0.8;
      tw.mesh.position.y = 0.68 + Math.abs(Math.sin(elapsed * 3.8 + tw.bouncePhase)) * 0.35;
      if (this.ambientBounds) {
        if (tw.mesh.position.x > this.ambientBounds.maxX - 4) tw.mesh.position.x = this.ambientBounds.minX + 4;
        if (tw.mesh.position.x < this.ambientBounds.minX + 4) tw.mesh.position.x = this.ambientBounds.maxX - 4;
      }
    }

    // Update waterfall mist emitters
    for (const em of this.mistEmitters) {
      em.timer -= dt;
      if (em.timer <= 0) {
        em.timer = 0.12;
        const p = em.pos.clone().add(new THREE.Vector3(
          (Math.random() - 0.5) * em.radius * 2,
          Math.random() * 1.2,
          (Math.random() - 0.5) * em.radius
        ));
        this.spawnSmoke(p, 0xe8f9ff, 1, 1.35);
      }
    }

    // Update burst particles
    for (let i = this.bursts.length - 1; i >= 0; i--) {
      const p = this.bursts[i];
      p.life -= dt;
      if (p.life <= 0) {
        this.scene.remove(p.mesh);
        p.mesh.material.dispose();
        this.bursts.splice(i, 1);
        continue;
      }
      p.vel.y -= p.gravity * dt;
      p.mesh.position.addScaledVector(p.vel, dt);
      p.mesh.rotation.x += dt * 4;
      p.mesh.rotation.y += dt * 3;
      if (p.grow > 0) {
        p.mesh.scale.addScalar(p.grow * dt);
      }
      p.mesh.material.opacity = Math.max(0, (p.life / p.maxLife) * 0.85);
    }

    // Update tracers
    for (let i = this.tracers.length - 1; i >= 0; i--) {
      const t = this.tracers[i];
      t.life -= dt;
      if (t.life <= 0) {
        this.scene.remove(t.line);
        t.line.geometry.dispose();
        t.line.material.dispose();
        this.tracers.splice(i, 1);
        continue;
      }
      t.line.material.opacity = t.life / t.maxLife;
    }

    // Update expanding shockwaves
    for (let i = this.rings.length - 1; i >= 0; i--) {
      const r = this.rings[i];
      r.life -= dt;
      if (r.life <= 0) {
        this.scene.remove(r.mesh);
        r.mesh.geometry.dispose();
        r.mesh.material.dispose();
        this.rings.splice(i, 1);
        continue;
      }
      const prog = 1 - r.life / r.maxLife;
      const s = 0.5 + prog * r.targetScale;
      r.mesh.scale.set(s, s, s);
      r.mesh.material.opacity = (1 - prog) * 0.85;
    }
  }
}
