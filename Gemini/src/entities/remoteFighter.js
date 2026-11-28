import * as THREE from 'three';
import { buildFighterFigure } from './villains.js';

export class RemoteFighter {
  constructor(fighter, era, spawnPos) {
    this.fighter = fighter;
    this.era = era;
    this.name = fighter.name;
    this.isVillain = !!fighter.isVillain;
    this.radius = (fighter.mods && fighter.mods.hitRadius) || 0.52;
    this.figureScale = (fighter.mods && fighter.mods.figureScale) || 1.0;

    this.root = new THREE.Group();
    this.figure = buildFighterFigure(fighter.id, era, false);
    this.baseFigScale = this.figure.scale.x || 1.0;
    this.root.add(this.figure);

    // Tag meshes for hitscan & melee raycasting (head vs body)
    this.hitMeshes = [];
    this.figure.updateMatrixWorld(true);
    this.figure.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
        o.userData.remoteFighter = this;
        if (!o.userData.hitZone) {
          const wp = new THREE.Vector3();
          o.getWorldPosition(wp);
          o.userData.hitZone = wp.y >= 1.52 * this.figureScale ? 'head' : 'body';
        }
        this.hitMeshes.push(o);
      }
    });

    // Muzzle flash sphere near weapon hand
    this.muzzle = new THREE.Mesh(
      new THREE.SphereGeometry(0.18, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0xffd25a, transparent: true, opacity: 0 })
    );
    this.muzzle.position.set(0.35, 1.32 * this.figureScale, 0.72);
    this.root.add(this.muzzle);

    // Floating compact health bar
    this.hpBg = new THREE.Mesh(
      new THREE.PlaneGeometry(1.05, 0.12),
      new THREE.MeshBasicMaterial({ color: 0x160d0a, side: THREE.DoubleSide })
    );
    this.hpBg.position.set(0, 2.38 * this.figureScale, 0);
    this.hpFill = new THREE.Mesh(
      new THREE.PlaneGeometry(1.0, 0.08),
      new THREE.MeshBasicMaterial({ color: this.isVillain ? 0xe63939 : 0xf2c244, side: THREE.DoubleSide })
    );
    this.hpFill.position.set(0, 0, 0.01);
    this.hpBg.add(this.hpFill);
    this.root.add(this.hpBg);

    this.root.position.copy(spawnPos);
    this.targetPos = spawnPos.clone();
    this.targetYaw = 0;
    this.targetPitch = 0;
    this.moving = false;
    this.crouched = false;
    this.sneaking = false;
    this.vanished = false;
    this.crouchBlend = 0;
    this.alive = true;
    this.hp = 100;
    this.maxHp = 100;
    this.walkPhase = 0;
    this.muzzleFlash = 0;
    this.swingAnim = 0;
    this.deathTimer = 0;
    this._clonedMats = false;
  }

  _setVanished(isVanished) {
    if (this.vanished === isVanished) return;
    this.vanished = isVanished;
    if (!this._clonedMats) {
      this._clonedMats = true;
      for (const m of this.hitMeshes) {
        if (m.material && typeof m.material.clone === 'function') {
          m.material = m.material.clone();
          m.userData._origTransparent = !!m.material.transparent;
          m.userData._origOpacity = typeof m.material.opacity === 'number' ? m.material.opacity : 1;
        }
      }
    }
    for (const m of this.hitMeshes) {
      if (!m.material) continue;
      if (isVanished) {
        m.material.transparent = true;
        m.material.opacity = 0.2;
      } else {
        m.material.transparent = !!m.userData._origTransparent;
        m.material.opacity = m.userData._origOpacity ?? 1;
      }
      m.material.needsUpdate = true;
    }
  }

  getHitMeshes() {
    return this.alive ? this.hitMeshes : [];
  }

  setState(state) {
    if (typeof state.x === 'number') {
      this.targetPos.set(state.x, state.y || 0, state.z || 0);
    }
    if (typeof state.yaw === 'number') this.targetYaw = state.yaw;
    if (typeof state.pitch === 'number') this.targetPitch = state.pitch;
    if (typeof state.moving === 'boolean') this.moving = state.moving;
    if (typeof state.cr === 'number' || typeof state.cr === 'boolean') this.crouched = !!state.cr;
    if (typeof state.sn === 'number' || typeof state.sn === 'boolean') this.sneaking = !!state.sn;
    if (typeof state.van === 'number' || typeof state.van === 'boolean') this._setVanished(!!state.van);
    if (typeof state.hp === 'number') this.hp = state.hp;
    if (typeof state.maxHp === 'number' && state.maxHp > 0) this.maxHp = state.maxHp;
    if (typeof state.alive === 'boolean') {
      if (state.alive && !this.alive) {
        // Respawned cleanly!
        this.deathTimer = 0;
        this.figure.rotation.x = 0;
        this.root.position.copy(this.targetPos);
      }
      this.alive = state.alive;
    }
    const pct = Math.max(0, Math.min(1, this.hp / Math.max(1, this.maxHp)));
    this.hpFill.scale.x = Math.max(0.001, pct);
    this.hpFill.position.x = -(1 - pct) * 0.5;
    this.hpBg.visible = this.alive;
  }

  teleport(pos, yaw = 0) {
    this.root.position.copy(pos);
    this.targetPos.copy(pos);
    this.targetYaw = yaw;
    this.root.rotation.y = yaw + Math.PI;
    this.alive = true;
    this.deathTimer = 0;
    this.figure.rotation.x = 0;
    this.hpBg.visible = true;
  }

  triggerFireVisual() {
    this.muzzleFlash = 0.14;
  }

  triggerMeleeVisual() {
    this.swingAnim = 1.0;
  }

  getMuzzleWorldPos() {
    const v = new THREE.Vector3();
    this.muzzle.getWorldPosition(v);
    return v;
  }

  update(dt, viewerPos) {
    if (this.hpBg.visible) {
      this.hpBg.lookAt(viewerPos.x, this.root.position.y + 2.38 * this.figureScale, viewerPos.z);
    }

    if (this.muzzleFlash > 0) {
      this.muzzleFlash = Math.max(0, this.muzzleFlash - dt);
      this.muzzle.material.opacity = Math.min(1, this.muzzleFlash * 9);
    }

    if (this.swingAnim > 0) {
      this.swingAnim = Math.max(0, this.swingAnim - dt * 5.0);
    }

    if (!this.alive) {
      this.deathTimer = Math.min(1, this.deathTimer + dt * 3.0);
      this.figure.rotation.x = -this.deathTimer * (Math.PI * 0.48);
      return;
    }

    // Smooth network interpolation (snap if teleported > 12m away)
    const dist = this.root.position.distanceTo(this.targetPos);
    if (dist > 12) {
      this.root.position.copy(this.targetPos);
    } else {
      this.root.position.lerp(this.targetPos, Math.min(1, dt * 16));
    }

    // Player camera yaw faces -Z when yaw=0; character figures face +Z, so add PI
    const desiredY = this.targetYaw + Math.PI;
    let diff = desiredY - this.root.rotation.y;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    this.root.rotation.y += diff * Math.min(1, dt * 15);

    // Smooth kneeling / crouching stance & lowered hit shape!
    const targetCr = this.crouched ? 1 : 0;
    this.crouchBlend += (targetCr - this.crouchBlend) * Math.min(1, dt * 14);
    const cr = this.crouchBlend;

    // Subtle stride, kneeling crouch & melee swing animation
    const parts = this.figure.userData.parts;
    const stride = (this.moving || dist > 0.12) ? (this.crouched ? 0.28 : 0.55) : 0;
    if (stride > 0) this.walkPhase += dt * (this.crouched ? 7.0 : 10.5);

    // Lower the entire 3D figure & hit meshes smoothly when kneeling
    const baseY = -cr * 0.46 * this.figureScale;
    this.figure.scale.set(
      this.baseFigScale,
      this.baseFigScale * (1 - cr * 0.18),
      this.baseFigScale
    );
    this.figure.position.y = baseY + (stride > 0 && !parts ? Math.abs(Math.sin(this.walkPhase)) * 0.06 : 0);
    this.muzzle.position.y = (1.32 - cr * 0.55) * this.figureScale;
    this.hpBg.position.y = (2.38 - cr * 0.65) * this.figureScale;

    if (parts) {
      const legStride = stride > 0 ? Math.sin(this.walkPhase) * stride : 0;
      parts.legL.rotation.x = cr * 1.05 + legStride;
      parts.legR.rotation.x = -cr * 0.92 - legStride;
    }

    if (parts && parts.armR) {
      parts.armR.rotation.x = -0.65 - this.targetPitch * 0.55 - this.swingAnim * 1.45;
    }
  }
}
