import * as THREE from 'three';
import { addSolidBox, addTableAndChairs, addSegmentedFence } from './buildings.js';
import { spawnBystanders } from '../entities/bystanders.js';

export function makeSeededRng(seed) {
  let a = (seed >>> 0) || 1;
  return function next() {
    a |= 0;
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const HAMLET_NAMES = {
  west:        ['Dry Creek', 'Coyote Flats', 'Copper Crossing', 'Mesa Bend', 'Rattler Hollow', 'Sagebrush Camp', 'Red Rock Wash'],
  japan:       ['Kiri-mura', 'Take-sato', 'Ume-dani', 'Kawa-be', 'Matsu-oka', 'Tani-guchi', 'Hana-mura'],
  swiss:       ['Oberalp', 'Tannenmatt', 'Bachtal', 'Felseneck', 'Wiesengrund', 'Lindenhof', 'Moosbach'],
  greece:      ['Elaion', 'Kallipolis', 'Aigialos', 'Petra', 'Myrtos', 'Thalassa', 'Ambelos'],
  scandinavia: ['Ulfvik', 'Skogheim', 'Bjornstad', 'Fjellbu', 'Kaldvik', 'Steinnes', 'Eikholm'],
  normandy:    ['Le Verger', 'Croix-Neuve', 'Les Haies', 'La Mare', 'Moulin-Bas', 'Val-Vert', 'Clos-Saint-Luc'],
  soviet:      ['Severny', 'Beryozki', 'Zavodskoy', 'Zarechnaya', 'Sosnovka', 'Ozyorny', 'Peschany'],
  tibet:       ['Lungta Gang', 'Chorten Dzong', 'Serkhang', 'Tsangpo', 'Norbu Ling', 'Drakpa', 'Yarlung'],
  aztec:       ['Xochimilco', 'Tlacopan', 'Iztapalapa', 'Coyoacán', 'Azcapotzalco', 'Texcoco', 'Tlatelolco']
};

const ERA_HAMLET_PALETTE = {
  west:        { wall: 0x9b744d, roof: 0x5c3e26, ground: 0xb98d59, enemy: 'cowboy' },
  japan:       { wall: 0xdfd4be, roof: 0x2f343c, ground: 0x5d7a47, enemy: 'ninja' },
  swiss:       { wall: 0x7a5436, roof: 0x4b3b30, ground: 0x567f44, enemy: 'arquebusier' },
  greece:      { wall: 0xebe6db, roof: 0xb55336, ground: 0xb7a070, enemy: 'spartan_skirmisher' },
  scandinavia: { wall: 0x5d4632, roof: 0x3b4a36, ground: 0x6d7d74, enemy: 'viking_warrior' },
  normandy:    { wall: 0x8e8374, roof: 0x454a54, ground: 0x4e6e3e, enemy: 'german_rifleman' },
  soviet:      { wall: 0x9fa6ac, roof: 0x52575c, ground: 0xdce4ec, enemy: 'soviet_militia' },
  tibet:       { wall: 0xc9a06c, roof: 0x6b2c26, ground: 0xb58f5e, enemy: 'pla_rifleman' },
  aztec:       { wall: 0xe6dfd1, roof: 0x9a4834, ground: 0x6f7a4d, enemy: 'spanish_crossbow' }
};

/**
 * Applies Stage 12 Map Size ('small' | 'medium' | 'large'):
 * - Small: rope & red/white flags framing the heart corridor (x in [-34, 34]), trimming outer enemies.
 * - Large: expands bounds 1.5x (±132m) with 7 era-styled furnished outskirts hamlets, chimney smoke,
 *   trees, fences, bystanders, extra enemies, and named map landmarks!
 */
export function applyMapSize(scene, collision, animated, eraId, mapSize, enemySpawns, spawnPos, bossPos, rng = Math.random) {
  const extraLandmarks = [];
  const extraBystanders = [];
  const extraEnemies = [];

  if (mapSize === 'small') {
    const minX = -34, maxX = 34;
    const minZ = Math.min(spawnPos.z, bossPos ? bossPos.z : -38) - 14;
    const maxZ = Math.max(spawnPos.z, bossPos ? bossPos.z : -38) + 12;

    // Boundary invisible solid walls + visual stakes, rope, and red/white triangular flags!
    collision.addBoxMinMax(minX - 1.5, -4, minZ, minX, 12, maxZ, 'stone');
    collision.addBoxMinMax(maxX, -4, minZ, maxX + 1.5, 12, maxZ, 'stone');
    collision.addBoxMinMax(minX, -4, minZ - 1.5, maxX, 12, minZ, 'stone');
    collision.addBoxMinMax(minX, -4, maxZ, maxX, 12, maxZ + 1.5, 'stone');

    const postMat = new THREE.MeshStandardMaterial({ color: 0x5c3c22, roughness: 0.9 });
    const ropeMat = new THREE.MeshStandardMaterial({ color: 0xd9c79e, roughness: 0.9 });
    const redFlagMat = new THREE.MeshStandardMaterial({ color: 0xd42c24, side: THREE.DoubleSide });
    const whiteFlagMat = new THREE.MeshStandardMaterial({ color: 0xf5f2ea, side: THREE.DoubleSide });

    const drawRopeEdge = (x0, z0, x1, z1) => {
      const len = Math.hypot(x1 - x0, z1 - z0);
      const segs = Math.max(2, Math.round(len / 5));
      for (let i = 0; i <= segs; i++) {
        const t = i / segs;
        const px = x0 + (x1 - x0) * t;
        const pz = z0 + (z1 - z0) * t;
        const py = collision.getFloorHeight(px, pz, 2);
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 1.35, 6), postMat);
        post.position.set(px, py + 0.65, pz);
        scene.add(post);
        if (i < segs) {
          const nx = x0 + (x1 - x0) * ((i + 1) / segs);
          const nz = z0 + (z1 - z0) * ((i + 1) / segs);
          const ny = collision.getFloorHeight(nx, nz, 2);
          const mx = (px + nx) * 0.5;
          const my = (py + ny) * 0.5 + 1.1;
          const mz = (pz + nz) * 0.5;
          const segLen = Math.hypot(nx - px, nz - pz);
          const rope = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, segLen), ropeMat);
          rope.position.set(mx, my, mz);
          rope.lookAt(nx, ny + 1.1, nz);
          scene.add(rope);
          // Alternating red & white triangular boundary flags!
          const flag = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.34, 3), i % 2 === 0 ? redFlagMat : whiteFlagMat);
          flag.rotation.x = Math.PI;
          flag.position.set(mx, my - 0.17, mz);
          scene.add(flag);
        }
      }
    };
    drawRopeEdge(minX, minZ, minX, maxZ);
    drawRopeEdge(maxX, minZ, maxX, maxZ);
    drawRopeEdge(minX, minZ, maxX, minZ);
    drawRopeEdge(minX, maxZ, maxX, maxZ);

    const filtered = enemySpawns.filter((sp) => {
      if (sp.isBossWave) return true;
      return sp.pos.x >= minX + 1.5 && sp.pos.x <= maxX - 1.5 && sp.pos.z >= minZ + 1.5 && sp.pos.z <= maxZ - 1.5;
    });
    return {
      enemySpawns: filtered,
      extraLandmarks,
      extraBystanders,
      bounds: { minX: minX - 10, maxX: maxX + 10, minZ: minZ - 10, maxZ: maxZ + 10 }
    };
  }

  if (mapSize === 'large') {
    const pal = ERA_HAMLET_PALETTE[eraId] || ERA_HAMLET_PALETTE.west;
    const names = HAMLET_NAMES[eraId] || HAMLET_NAMES.west;
    const wallMat = new THREE.MeshStandardMaterial({ color: pal.wall, roughness: 0.85 });
    const roofMat = new THREE.MeshStandardMaterial({ color: pal.roof, roughness: 0.88 });
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x6b472a, roughness: 0.88 });
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x3a6434, roughness: 0.92 });
    const smokeMat = new THREE.MeshBasicMaterial({ color: 0xdedad2, transparent: true, opacity: 0.42 });

    // Remove tight outer boundary walls (> 75m away) and expand outer bounds to ±132m!
    collision.boxes = collision.boxes.filter((b) => {
      const w = b.maxX - b.minX;
      const d = b.maxZ - b.minZ;
      return !(w > 130 || d > 130);
    });
    collision.bounds = { minX: -132, maxX: 132, minZ: -132, maxZ: 132 };
    collision.addBoxMinMax(-134, -5, -134, -132, 16, 134, 'stone');
    collision.addBoxMinMax(132, -5, -134, 134, 16, 134, 'stone');
    collision.addBoxMinMax(-134, -5, -134, 134, 16, -132, 'stone');
    collision.addBoxMinMax(-134, -5, 132, 134, 16, 134, 'stone');

    // Wide outer ground skirt so Large outskirts never fall into void!
    const skirt = new THREE.Mesh(
      new THREE.PlaneGeometry(290, 290),
      new THREE.MeshStandardMaterial({ color: pal.ground, roughness: 0.95 })
    );
    skirt.rotation.x = -Math.PI / 2;
    skirt.position.y = -0.06;
    skirt.receiveShadow = true;
    skirt.userData.isTerrain = true;
    scene.add(skirt);

    const hamletAnchors = [
      { x: -94, z: 42 },
      { x: 94,  z: 42 },
      { x: -98, z: -12 },
      { x: 98,  z: -12 },
      { x: -86, z: -78 },
      { x: 86,  z: -78 },
      { x: 0,   z: -102 }
    ];

    const waterY = collision.waterLevel !== null ? collision.waterLevel : -999;

    for (let hi = 0; hi < hamletAnchors.length; hi++) {
      const ha = hamletAnchors[hi];
      const hName = names[hi % names.length];
      const groundH = collision.getTerrainHeight ? collision.getTerrainHeight(ha.x, ha.z) : 0;
      extraLandmarks.push({ name: hName, x: ha.x, z: ha.z, radius: 18 });

      if (groundH < waterY) {
        // Anchored boat with crew on outskirts water!
        const by = waterY + 0.1;
        const hull = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.7, 7.2), woodMat);
        hull.position.set(ha.x, by, ha.z);
        const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 4.2, 6), woodMat);
        mast.position.set(ha.x, by + 2.2, ha.z);
        scene.add(hull, mast);
        collision.addWalkable(ha.x, ha.z, 2.4, 6.8, by + 0.35);
        extraBystanders.push(...spawnBystanders(scene, collision, animated, eraId, [
          { gender: 'male', role: 'boatman', pos: new THREE.Vector3(ha.x, by + 0.35, ha.z - 1.2), yaw: 0.3 }
        ]));
        continue;
      }

      const fy = Math.max(0, groundH);
      // Level pad for hamlet on hillside
      collision.addWalkable(ha.x, ha.z, 22, 20, fy);
      const pad = new THREE.Mesh(new THREE.BoxGeometry(22, 0.2, 20), new THREE.MeshStandardMaterial({ color: pal.ground, roughness: 0.95 }));
      pad.position.set(ha.x, fy - 0.08, ha.z);
      pad.receiveShadow = true;
      pad.userData.isTerrain = true;
      scene.add(pad);

      // Build 2 furnished enterable cottages per hamlet!
      for (let ci = 0; ci < 2; ci++) {
        const cx = ha.x + (ci === 0 ? -5.8 : 5.8);
        const cz = ha.z + (ci === 0 ? -2.2 : 2.4);
        const w = 5.6, d = 5.2, h = 3.2;
        addSolidBox(scene, collision, cx, fy + h * 0.5, cz - d * 0.5, w, h, 0.34, wallMat, 'solid');
        addSolidBox(scene, collision, cx - w * 0.5, fy + h * 0.5, cz, 0.34, h, d, wallMat, 'solid');
        addSolidBox(scene, collision, cx + w * 0.5, fy + h * 0.5, cz, 0.34, h, d, wallMat, 'solid');
        // Front wall with wide 2.0m doorway!
        addSolidBox(scene, collision, cx - 1.9, fy + h * 0.5, cz + d * 0.5, 1.8, h, 0.34, wallMat, 'solid');
        addSolidBox(scene, collision, cx + 1.9, fy + h * 0.5, cz + d * 0.5, 1.8, h, 0.34, wallMat, 'solid');
        addSolidBox(scene, collision, cx, fy + 2.9, cz + d * 0.5, 2.0, 0.6, 0.34, wallMat, 'solid');
        // Roof + chimney with rising smoke puff!
        const roof = new THREE.Mesh(new THREE.ConeGeometry(4.4, 1.7, 4), roofMat);
        roof.rotation.y = Math.PI * 0.25;
        roof.position.set(cx, fy + h + 0.85, cz);
        scene.add(roof);
        const chim = new THREE.Mesh(new THREE.BoxGeometry(0.65, 1.5, 0.65), roofMat);
        chim.position.set(cx + 1.4, fy + h + 0.9, cz - 1.2);
        scene.add(chim);
        const puff = new THREE.Mesh(new THREE.SphereGeometry(0.42, 7, 6), smokeMat);
        puff.position.set(cx + 1.4, fy + h + 2.1, cz - 1.2);
        scene.add(puff);
        animated.push((t) => {
          const cycle = (t * 0.45 + hi + ci) % 1;
          puff.position.y = fy + h + 1.8 + cycle * 3.5;
          puff.position.x = cx + 1.4 + Math.sin(t + hi) * 0.5;
          puff.scale.setScalar(0.6 + cycle * 1.4);
        });
        // Interior furniture: table, chairs, wooden chest!
        addTableAndChairs(scene, collision, cx, fy, cz - 0.5, woodMat);
        addSolidBox(scene, collision, cx - 1.8, fy + 0.4, cz - 1.8, 1.1, 0.8, 0.65, woodMat, 'wood');
      }

      // Yard fence & 2 trees
      addSegmentedFence(scene, collision, ha.x - 9.5, ha.z + 7.5, ha.x + 9.5, ha.z + 7.5, woodMat, 3);
      for (const tx of [-9.5, 9.5]) {
        const tr = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.32, 3.2, 6), woodMat);
        tr.position.set(ha.x + tx, fy + 1.6, ha.z - 7.5);
        const crown = new THREE.Mesh(new THREE.ConeGeometry(2.1, 4.2, 7), leafMat);
        crown.position.set(ha.x + tx, fy + 4.4, ha.z - 7.5);
        scene.add(tr, crown);
      }

      // 2 hamlet bystanders (one woman, one man)
      extraBystanders.push(...spawnBystanders(scene, collision, animated, eraId, [
        { gender: 'female', role: 'villager', pos: new THREE.Vector3(ha.x - 1.2, fy, ha.z + 4.8), yaw: 0.4 },
        { gender: 'male',   role: 'villager', pos: new THREE.Vector3(ha.x + 1.8, fy, ha.z - 5.2), yaw: -1.1 }
      ]));

      // 2 hamlet enemies
      extraEnemies.push(
        { type: pal.enemy, pos: new THREE.Vector3(ha.x, fy, ha.z + 1.5) },
        { type: pal.enemy, pos: new THREE.Vector3(ha.x + (rng() - 0.5) * 6, fy, ha.z - 4.0) }
      );
    }

    return {
      enemySpawns: [...enemySpawns, ...extraEnemies],
      extraLandmarks,
      extraBystanders,
      bounds: { minX: -132, maxX: 132, minZ: -132, maxZ: 132 }
    };
  }

  return { enemySpawns, extraLandmarks, extraBystanders, bounds: null };
}

/**
 * Stage 12 Item 77: Randomizes ground-walking enemy spawn positions each game
 * (most within ~30m of their usual post, some anywhere, always >= 20m from player start & A*-reachable).
 * Bosses, perched/roof enemies (y > 0.6), holdPost guards, and hidden ambush enemies keep their posts.
 */
export function randomizeGroundSpawns(spawns, collision, spawnPos, rng = Math.random) {
  return spawns.map((sp) => {
    if (sp.isBossWave || sp.pos.y > 0.65 || (sp.options && (sp.options.holdPost || sp.options.hideUntilClose))) {
      return sp;
    }
    const maxR = rng() < 0.78 ? 28 : 55;
    for (let attempt = 0; attempt < 18; attempt++) {
      const ang = rng() * Math.PI * 2;
      const dist = 4 + rng() * maxR;
      const nx = sp.pos.x + Math.cos(ang) * dist;
      const nz = sp.pos.z + Math.sin(ang) * dist;
      if (nx < collision.bounds.minX + 6 || nx > collision.bounds.maxX - 6 || nz < collision.bounds.minZ + 6 || nz > collision.bounds.maxZ - 6) continue;
      if (Math.hypot(nx - spawnPos.x, nz - spawnPos.z) < 20) continue;
      const ny = collision.getFloorHeight(nx, nz, 1.5);
      if (collision.isSubmergedInWater(nx, ny, nz)) continue;
      // Check clear of solid walls
      let blocked = false;
      for (const b of collision.boxes) {
        if (ny + 0.25 < b.maxY && ny + 1.65 > b.minY && nx + 0.7 > b.minX && nx - 0.7 < b.maxX && nz + 0.7 > b.minZ && nz - 0.7 < b.maxZ) {
          blocked = true;
          break;
        }
      }
      if (blocked) continue;
      const cand = new THREE.Vector3(nx, ny, nz);
      if (collision.nav) {
        const path = collision.findPath(cand, spawnPos, 1800);
        if (!path || path.length === 0) continue;
      }
      return { ...sp, pos: cand };
    }
    return sp;
  });
}
