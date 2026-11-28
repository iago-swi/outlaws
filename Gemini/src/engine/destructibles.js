import * as THREE from 'three';

const NON_POWDER_ERAS = new Set(['swiss', 'greece', 'scandinavia']);
const INDESTRUCTIBLE_TAGS = new Set(['stone', 'rock', 'bars', 'metal', 'concrete', 'masonry', 'tree', 'water', 'floor', 'wall_stone', 'shrine', 'chorten', 'altar']);

export class DestructibleWorld {
  constructor() {
    this.props = [];
    this.meshList = [];
    this.pendingExplosions = [];
    this.navDirty = false;
    this.navRebuildCooldown = 0;
    this.raycaster = new THREE.Raycaster();
  }

  _isStoneOrTreeColor(hex) {
    const r = (hex >> 16) & 255;
    const g = (hex >> 8) & 255;
    const b = hex & 255;
    // Neutral grey stone/plaster (low saturation)
    const maxC = Math.max(r, g, b);
    const minC = Math.min(r, g, b);
    if (maxC - minC < 16 && maxC > 95 && maxC < 215) return true;
    // Pure bright foliage green
    if (g > r + 24 && g > b + 20) return true;
    return false;
  }

  scanAndRegister(worldGroup, collision, eraId, particles) {
    this.props = [];
    this.meshList = [];
    this.pendingExplosions = [];
    this.navDirty = false;
    this.worldGroup = worldGroup;
    this.collision = collision;
    this.particles = particles;
    this.eraId = eraId;

    const isPowderEra = !NON_POWDER_ERAS.has(eraId);
    const redKegMat = new THREE.MeshStandardMaterial({ color: 0xb8221e, roughness: 0.65 });
    const paleLidMat = new THREE.MeshStandardMaterial({ color: 0xe8d5ae, roughness: 0.78 });
    const hoopMat = new THREE.MeshStandardMaterial({ color: 0x26292e, metalness: 0.75, roughness: 0.42 });

    let propId = 0;
    let barrelCount = 0;
    const candidates = [];

    worldGroup.updateMatrixWorld(true);
    worldGroup.traverse((obj) => {
      if (!obj.isMesh || !obj.geometry || !obj.material) return;
      if (obj.userData.enemy || obj.userData.bystander || obj.userData.isTerrain || obj.userData.noBreak) return;
      // Skip child meshes of enemies, bystanders, or pickups
      let p = obj.parent;
      while (p && p !== worldGroup) {
        if (p.userData && (p.userData.enemy || p.userData.bystander || p.userData.noBreak)) return;
        p = p.parent;
      }

      const tag = String(obj.userData.tag || '').toLowerCase();
      if (INDESTRUCTIBLE_TAGS.has(tag)) return;

      const geoType = obj.geometry.type;
      if (geoType !== 'BoxGeometry' && geoType !== 'CylinderGeometry') return;

      const box3 = new THREE.Box3().setFromObject(obj);
      const size = new THREE.Vector3();
      const center = new THREE.Vector3();
      box3.getSize(size);
      box3.getCenter(center);

      // Ignore flat ground/roof slabs, tiny sub-millimeter trims, and giant structural walls
      if (size.y < 0.16 || size.x > 7.5 || size.z > 7.5 || size.y > 4.2) return;
      if (size.x > 4.8 && size.y > 2.4 && tag !== 'wood' && tag !== 'door') return;
      // Skip thin tall tree trunks
      if (geoType === 'CylinderGeometry' && size.y > 2.4 && Math.max(size.x, size.z) < 0.9) return;

      const matColor = (obj.material.color && typeof obj.material.color.getHex === 'function')
        ? obj.material.color.getHex()
        : 0x8a6440;
      if (tag !== 'wood' && tag !== 'crate' && tag !== 'barrel' && tag !== 'fence' && tag !== 'door' && this._isStoneOrTreeColor(matColor)) {
        return;
      }

      candidates.push({ mesh: obj, size, center, tag, geoType, matColor });
    });

    for (const c of candidates) {
      const maxDim = Math.max(c.size.x, c.size.y, c.size.z);
      const isSmall = maxDim < 0.72;
      const isBarrelLike = c.geoType === 'CylinderGeometry' && c.size.y >= 0.65 && c.size.y <= 1.45 && c.size.x >= 0.45 && c.size.x <= 1.2;
      let isKeg = false;
      if (isPowderEra && isBarrelLike) {
        barrelCount++;
        if (barrelCount % 3 === 0) {
          isKeg = true;
          c.mesh.material = redKegMat.clone();
          const lid = new THREE.Mesh(new THREE.CylinderGeometry(c.size.x * 0.46, c.size.x * 0.46, 0.05, 10), paleLidMat);
          lid.position.y = c.size.y * 0.5 + 0.025;
          const hoop = new THREE.Mesh(new THREE.CylinderGeometry(c.size.x * 0.52, c.size.x * 0.52, 0.06, 10), hoopMat);
          c.mesh.add(lid, hoop);
        }
      }

      // Match collider box if not directly attached
      let colBox = c.mesh.userData.collisionBox || null;
      if (!colBox) {
        for (const b of collision.boxes) {
          if (INDESTRUCTIBLE_TAGS.has(b.tag)) continue;
          const bcx = (b.minX + b.maxX) * 0.5;
          const bcy = (b.minY + b.maxY) * 0.5;
          const bcz = (b.minZ + b.maxZ) * 0.5;
          if (Math.abs(bcx - c.center.x) < 0.45 && Math.abs(bcy - c.center.y) < 0.45 && Math.abs(bcz - c.center.z) < 0.45) {
            const bW = b.maxX - b.minX;
            const bH = b.maxY - b.minY;
            const bD = b.maxZ - b.minZ;
            if (Math.abs(bW - c.size.x) < 0.6 && Math.abs(bH - c.size.y) < 0.6 && Math.abs(bD - c.size.z) < 0.6) {
              colBox = b;
              break;
            }
          }
        }
      }

      const maxHp = isKeg ? 22 : isSmall ? 15 : (c.size.y > 2.2 ? 110 : 60);
      const prop = {
        id: propId++,
        mesh: c.mesh,
        collisionBox: colBox,
        center: c.center.clone(),
        size: c.size.clone(),
        color: isKeg ? 0xb8221e : c.matColor,
        hp: maxHp,
        maxHp,
        isSmall,
        isKeg,
        passThrough: isSmall,
        broken: false,
        origRotZ: c.mesh.rotation.z,
        origRotX: c.mesh.rotation.x
      };
      c.mesh.userData.destructibleProp = prop;
      this.props.push(prop);
      this.meshList.push(c.mesh);
    }

    // In every gunpowder/fuel chapter, ensure a tactical cluster of 3 powder kegs exists (great for chain blasts!)
    if (isPowderEra) {
      const kegCoords = [
        { x: 6.5, z: 26 },
        { x: 8.4, z: 26.2 },
        { x: 10.3, z: 25.8 }
      ];
      for (const kc of kegCoords) {
        const fy = collision.getFloorHeight(kc.x, kc.z, 2);
        const keg = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.38, 0.96, 12), redKegMat.clone());
        keg.position.set(kc.x, fy + 0.48, kc.z);
        keg.castShadow = true;
        keg.receiveShadow = true;
        const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.05, 12), paleLidMat);
        lid.position.y = 0.50;
        const hoop1 = new THREE.Mesh(new THREE.CylinderGeometry(0.385, 0.385, 0.05, 12), hoopMat);
        hoop1.position.y = 0.25;
        const hoop2 = hoop1.clone();
        hoop2.position.y = -0.25;
        keg.add(lid, hoop1, hoop2);
        worldGroup.add(keg);
        const box = collision.addBox(kc.x, fy + 0.48, kc.z, 0.78, 0.96, 0.78, 'barrel');
        const prop = {
          id: propId++,
          mesh: keg,
          collisionBox: box,
          center: new THREE.Vector3(kc.x, fy + 0.48, kc.z),
          size: new THREE.Vector3(0.78, 0.96, 0.78),
          color: 0xb8221e,
          hp: 22,
          maxHp: 22,
          isSmall: false,
          isKeg: true,
          passThrough: false,
          broken: false,
          origRotZ: 0,
          origRotX: 0
        };
        keg.userData.destructibleProp = prop;
        this.props.push(prop);
        this.meshList.push(keg);
      }
    }
  }

  _damageProp(prop, dmg, hitPoint, callbacks = {}) {
    if (!prop || prop.broken) return false;
    prop.hp -= dmg;

    // Spawn chips in the prop's exact color!
    if (this.particles) {
      this.particles.spawnImpact(hitPoint || prop.center, prop.color, prop.isSmall ? 8 : 6, 6);
    }

    if (prop.hp > 0) {
      // Darken & lean progressively as damage accumulates
      const ratio = 1 - Math.max(0, prop.hp / prop.maxHp);
      if (prop.mesh.material && prop.mesh.material.color) {
        if (!prop.clonedMat) {
          prop.mesh.material = prop.mesh.material.clone();
          prop.clonedMat = true;
        }
        prop.mesh.material.color.multiplyScalar(0.86);
      }
      prop.mesh.rotation.z = prop.origRotZ + ratio * 0.24;
      prop.mesh.rotation.x = prop.origRotX + ratio * 0.14;
      return false;
    }

    // Collapse & splinter!
    prop.broken = true;
    prop.mesh.visible = false;
    if (prop.collisionBox && this.collision) {
      this.collision.removeBox(prop.collisionBox);
      this.navDirty = true;
    }
    if (this.particles) {
      this.particles.spawnImpact(prop.center, prop.color, 16, 8);
      this.particles.spawnSmoke(prop.center, 0xcabaa2, 4, 0.45);
    }
    if (callbacks.onPropBroken) callbacks.onPropBroken(prop);

    if (prop.isKeg) {
      this._triggerKegBlast(prop, callbacks);
    }
    return true;
  }

  _triggerKegBlast(prop, callbacks) {
    const center = prop.center.clone();
    const radius = 6.0;
    if (this.particles) this.particles.spawnExplosion(center, radius);
    if (callbacks.onKegExplode) callbacks.onKegExplode(center, radius, 140);

    // Break surrounding destructibles & chain-detonate other powder kegs after a crisp cascade!
    for (const other of this.props) {
      if (other.broken || other === prop) continue;
      const d = other.center.distanceTo(center);
      if (d <= radius) {
        if (other.isKeg) {
          this.pendingExplosions.push({ prop: other, delay: 0.12 + d * 0.025, callbacks });
        } else {
          this._damageProp(other, 140 * (1 - d / (radius * 1.25)), other.center, callbacks);
        }
      }
    }
  }

  hitRay(origin, dir, maxDist, dmg, callbacks = {}) {
    if (this.meshList.length === 0) return null;
    this.raycaster.set(origin, dir);
    this.raycaster.far = maxDist;
    const hits = this.raycaster.intersectObjects(this.meshList, false);
    for (const h of hits) {
      const prop = h.object.userData.destructibleProp;
      if (!prop || prop.broken) continue;
      const broke = this._damageProp(prop, dmg, h.point, callbacks);
      if (broke && prop.passThrough) continue; // Small bottles/pots/lamps let bullets pass through!
      return { prop, point: h.point, dist: h.distance, broke };
    }
    return null;
  }

  hitArc(origin, forward, range, dmg, callbacks = {}) {
    let best = null;
    let bestD = range + 0.5;
    for (const prop of this.props) {
      if (prop.broken) continue;
      const toP = new THREE.Vector3().subVectors(prop.center, origin);
      const d = toP.length();
      if (d > bestD) continue;
      toP.normalize();
      if (toP.dot(forward) > 0.35) {
        best = prop;
        bestD = d;
      }
    }
    if (best) {
      this._damageProp(best, dmg, best.center, callbacks);
      return best;
    }
    return null;
  }

  hitSphere(center, radius, dmg, callbacks = {}) {
    let brokenCount = 0;
    for (const prop of this.props) {
      if (prop.broken) continue;
      const d = prop.center.distanceTo(center);
      if (d <= radius + Math.max(prop.size.x, prop.size.z) * 0.4) {
        if (this._damageProp(prop, dmg * (1 - (d / (radius + 2)) * 0.5), prop.center, callbacks)) {
          brokenCount++;
        }
      }
    }
    return brokenCount;
  }

  breakById(id, callbacks = {}) {
    const prop = this.props[id];
    if (prop && !prop.broken) {
      this._damageProp(prop, prop.maxHp + 10, prop.center, callbacks);
    }
  }

  update(dt) {
    // Process chain-detonating powder kegs
    for (let i = this.pendingExplosions.length - 1; i >= 0; i--) {
      const pe = this.pendingExplosions[i];
      pe.delay -= dt;
      if (pe.delay <= 0) {
        this.pendingExplosions.splice(i, 1);
        if (pe.prop && !pe.prop.broken) {
          this._damageProp(pe.prop, pe.prop.maxHp + 10, pe.prop.center, pe.callbacks);
        }
      }
    }
    // Debounced navigation grid rebuild when solid wooden cover/doors/fences break!
    if (this.navDirty) {
      this.navRebuildCooldown -= dt;
      if (this.navRebuildCooldown <= 0) {
        this.navDirty = false;
        this.navRebuildCooldown = 0.25;
        if (this.collision) this.collision.buildNavGrid(1.2);
      }
    }
  }
}
