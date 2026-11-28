import * as THREE from 'three';
import { addSolidBox, addStairFlight, addTableAndChairs } from './buildings.js';
import { spawnBystanders } from '../entities/bystanders.js';

function makeLabelTexture(text, bg = '#e8c43a', fg = '#7a1c14') {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 96;
  const ctx = c.getContext('2d');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 256, 96);
  ctx.fillStyle = fg;
  ctx.font = 'bold 54px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 128, 50);
  return new THREE.CanvasTexture(c);
}

/**
 * Builds Stage 14 Items 92–96 for the given chapter:
 * - Item 92: Soviet Underground Metro (10m down), 5-Floor Stairwell Block, Open Church of St Nicholas, Library & Builders' Hut
 * - Item 93: All 9 Cultural Landmarks (named on map)
 * - Item 94: Japan Bamboo Shishi-odoshi Deer Scarer (6s knock audible to 34m)
 * - Item 95: Tibet Prostrating Pilgrim circling chorten (never fights)
 * - Item 96: Swiss 100m Valais Suone (intake, cliff plank walk, 6 trestles, meadow ditch with 5 sluices, breakable wood & knocking hammer, keeper & woman)
 */
export function buildStage14Landmarks(scene, collision, animated, eraId, extras = {}) {
  const landmarks = [];
  const bystanders = [];
  const audioHooks = []; // (dt, playerPos, sound) => void
  const suoneSegments = []; // breakable wood troughs for Swiss Suone!
  const matWhite = new THREE.MeshStandardMaterial({ color: 0xf0ebe0, roughness: 0.85 });
  const matWood = new THREE.MeshStandardMaterial({ color: 0x6b4728, roughness: 0.88 });
  const matDarkWood = new THREE.MeshStandardMaterial({ color: 0x3f2818, roughness: 0.9 });
  const matStone = new THREE.MeshStandardMaterial({ color: 0x8a8780, roughness: 0.92 });
  const matGold = new THREE.MeshStandardMaterial({ color: 0xebb938, metalness: 0.85, roughness: 0.25 });
  const matRed = new THREE.MeshStandardMaterial({ color: 0xa82e24, roughness: 0.72 });
  const matBlue = new THREE.MeshStandardMaterial({ color: 0x224c8c, roughness: 0.5 });
  const matWater = new THREE.MeshStandardMaterial({ color: 0x3b8bb8, roughness: 0.25, metalness: 0.2, transparent: true, opacity: 0.85 });

  // ==================== ACT I (WEST): SONORAN SPANISH MISSION ====================
  if (eraId === 'west') {
    const mx = -44, mz = -42;
    const fy = collision.getFloorHeight(mx, mz, 2);
    const terraMat = new THREE.MeshStandardMaterial({ color: 0x9e4b32, roughness: 0.85 });
    // Nave walls (open south doorway)
    addSolidBox(scene, collision, mx, fy + 3.2, mz - 6, 9, 6.4, 0.5, matWhite, 'stone');
    addSolidBox(scene, collision, mx - 4.5, fy + 3.2, mz, 0.5, 6.4, 12, matWhite, 'stone');
    addSolidBox(scene, collision, mx + 4.5, fy + 3.2, mz, 0.5, 6.4, 12, matWhite, 'stone');
    addSolidBox(scene, collision, mx - 3.1, fy + 3.2, mz + 6, 2.8, 6.4, 0.5, matWhite, 'stone');
    addSolidBox(scene, collision, mx + 3.1, fy + 3.2, mz + 6, 2.8, 6.4, 0.5, matWhite, 'stone');
    addSolidBox(scene, collision, mx, fy + 5.1, mz + 6, 3.6, 2.6, 0.5, terraMat, 'stone'); // carved red-brown portal!
    // Twin bell towers with bells & sanctuary dome
    for (const s of [-1, 1]) {
      addSolidBox(scene, collision, mx + s * 4.4, fy + 5.5, mz + 5.8, 2.4, 11, 2.4, matWhite, 'stone');
      const domeT = new THREE.Mesh(new THREE.SphereGeometry(1.15, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.5), matWhite);
      domeT.position.set(mx + s * 4.4, fy + 11, mz + 5.8);
      const bell = new THREE.Mesh(new THREE.ConeGeometry(0.36, 0.5, 8), matGold);
      bell.position.set(mx + s * 4.4, fy + 9.2, mz + 5.8);
      scene.add(domeT, bell);
    }
    const sancDome = new THREE.Mesh(new THREE.SphereGeometry(2.6, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.5), matWhite);
    sancDome.position.set(mx, fy + 6.4, mz - 3.5);
    const roof = new THREE.Mesh(new THREE.BoxGeometry(9.4, 0.4, 12.4), matWhite);
    roof.position.set(mx, fy + 6.5, mz);
    scene.add(sancDome, roof);
    collision.addWalkable(mx, mz, 9.2, 12.2, fy + 6.7, true);
    // Pews, gilded altarpiece & candles
    for (let pi = 0; pi < 3; pi++) {
      addSolidBox(scene, collision, mx - 2.0, fy + 0.45, mz + 2.2 - pi * 1.8, 2.6, 0.9, 0.55, matWood, 'wood');
      addSolidBox(scene, collision, mx + 2.0, fy + 0.45, mz + 2.2 - pi * 1.8, 2.6, 0.9, 0.55, matWood, 'wood');
    }
    addSolidBox(scene, collision, mx, fy + 2.0, mz - 5.2, 3.6, 4.0, 0.4, matGold, 'altar');
    const cLight = new THREE.PointLight(0xffbe55, 5, 14);
    cLight.position.set(mx, fy + 3.2, mz - 4.2);
    scene.add(cLight);
    bystanders.push(...spawnBystanders(scene, collision, animated, 'west', [
      { gender: 'male', role: 'priest', pos: new THREE.Vector3(mx - 1.2, fy, mz - 3.6), yaw: 0.2 },
      { gender: 'female', role: 'pilgrim', pos: new THREE.Vector3(mx + 1.4, fy, mz + 0.5), yaw: Math.PI, seated: true }
    ]));
    landmarks.push({ name: 'San Xavier Mission', x: mx, z: mz, radius: 14 });
  }

  // ==================== ACT II (JAPAN): 3-STOREY HILLSIDE CASTLE & SHISHI-ODOSHI ====================
  if (eraId === 'japan') {
    // 1. Hillside 3-Storey Castle Keep (Kiri Castle)
    const kx = 54, kz = -10;
    const baseY = collision.getFloorHeight(kx, kz, 2);
    const tileMat = new THREE.MeshStandardMaterial({ color: 0x353b42, roughness: 0.78 });
    const blackBoard = new THREE.MeshStandardMaterial({ color: 0x1e1f22, roughness: 0.85 });
    // Battered stone base (ishigaki)
    const ishigaki = new THREE.Mesh(new THREE.CylinderGeometry(5.8, 7.6, 4.2, 4), matStone);
    ishigaki.rotation.y = Math.PI * 0.25;
    ishigaki.position.set(kx, baseY + 2.1, kz);
    scene.add(ishigaki);
    collision.addBox(kx, baseY + 2.1, kz, 9.8, 4.2, 9.8, 'stone');
    collision.addWalkable(kx, kz, 8.2, 8.2, baseY + 4.2);
    // Walkable hillside stair up onto stone base
    addStairFlight(scene, collision, { x: kx, zStart: kz + 16.5, zEnd: kz + 4.1, yStart: baseY, yEnd: baseY + 4.2, width: 2.6, steps: 10, mat: matStone });
    // 3 tiered storeys + curved grey tile roofs + gilded shachihoko fish on ridge!
    const tiers = [{ w: 7.4, h: 2.8, y: 4.2 }, { w: 5.6, h: 2.6, y: 7.0 }, { w: 3.8, h: 2.4, y: 9.6 }];
    for (const tr of tiers) {
      const lower = new THREE.Mesh(new THREE.BoxGeometry(tr.w, tr.h * 0.45, tr.w), blackBoard);
      lower.position.set(kx, baseY + tr.y + tr.h * 0.22, kz);
      const upper = new THREE.Mesh(new THREE.BoxGeometry(tr.w * 0.96, tr.h * 0.55, tr.w * 0.96), matWhite);
      upper.position.set(kx, baseY + tr.y + tr.h * 0.72, kz);
      const eave = new THREE.Mesh(new THREE.ConeGeometry(tr.w * 0.92, 1.35, 4), tileMat);
      eave.rotation.y = Math.PI * 0.25;
      eave.position.set(kx, baseY + tr.y + tr.h + 0.55, kz);
      scene.add(lower, upper, eave);
    }
    for (const s of [-1, 1]) {
      const fish = new THREE.Mesh(new THREE.ConeGeometry(0.24, 0.75, 6), matGold);
      fish.position.set(kx + s * 1.1, baseY + 13.6, kz);
      fish.rotation.z = s * 0.3;
      scene.add(fish);
    }
    landmarks.push({ name: 'Kiri Castle', x: kx, z: kz, radius: 16 });

    // 2. Item 94: Bamboo Shishi-odoshi Deer Scarer in Tea Garden (knocks every 6.0s, audible to 34m!)
    const sx = -16, sz = -18;
    const bambooMat = new THREE.MeshStandardMaterial({ color: 0x6f8c44, roughness: 0.68 });
    const basin = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.62, 0.36, 12), matStone);
    basin.position.set(sx, 0.18, sz);
    const spout = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.045, 0.72, 8), bambooMat);
    spout.rotation.z = 1.15;
    spout.position.set(sx - 0.55, 0.95, sz);
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.04, 0.65, 6), bambooMat);
    post.position.set(sx + 0.05, 0.32, sz);
    const rocker = new THREE.Group();
    rocker.position.set(sx + 0.05, 0.64, sz);
    const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.05, 0.92, 8), bambooMat);
    tube.rotation.z = Math.PI * 0.5;
    rocker.add(tube);
    const knockStone = new THREE.Mesh(new THREE.DodecahedronGeometry(0.18, 0), matStone);
    knockStone.position.set(sx + 0.48, 0.16, sz);
    scene.add(basin, spout, post, rocker, knockStone);

    let shishiAccum = 0;
    let knockedThisCycle = false;
    audioHooks.push((dt, playerPos, sound) => {
      shishiAccum = (shishiAccum + dt) % 6.0;
      if (shishiAccum < 4.6) {
        rocker.rotation.z = -0.35 + (shishiAccum / 4.6) * 0.25;
        knockedThisCycle = false;
      } else if (shishiAccum < 5.3) {
        rocker.rotation.z = 0.55; // tips & empties!
      } else {
        rocker.rotation.z = -0.45; // snaps back & knocks on stone!
        if (!knockedThisCycle) {
          knockedThisCycle = true;
          const dist = Math.hypot(playerPos.x - sx, playerPos.z - sz);
          if (dist <= 34 && sound && typeof sound.playWoodKnock === 'function') {
            sound.playWoodKnock(1 - dist / 36);
          }
        }
      }
    });
    landmarks.push({ name: 'Tea Garden Shishi-odoshi', x: sx, z: sz, radius: 10 });
  }

  // ==================== ACT III (SWITZERLAND): DEVIL'S BRIDGE & 100m VALAIS SUONE ====================
  if (eraId === 'swiss') {
    // 1. Devil's Bridge over rocky gorge with spray & grazing goat!
    const bx = -22, bz = -42;
    const by = collision.getFloorHeight(bx, bz, 3);
    const archDeck = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.36, 12.5), matWood);
    archDeck.position.set(bx, by + 2.4, bz);
    scene.add(archDeck);
    collision.addWalkable(bx, bz, 3.2, 12.5, by + 2.58);
    addStairFlight(scene, collision, { x: bx, zStart: bz + 14.2, zEnd: bz + 6.2, yStart: by, yEnd: by + 2.58, width: 2.8, steps: 7, mat: matStone });
    addStairFlight(scene, collision, { x: bx, zStart: bz - 14.2, zEnd: bz - 6.2, yStart: by, yEnd: by + 2.58, width: 2.8, steps: 7, mat: matStone });
    for (const s of [-1, 1]) {
      const strut = new THREE.Mesh(new THREE.BoxGeometry(0.32, 3.6, 0.32), matDarkWood);
      strut.position.set(bx + s * 1.2, by + 1.2, bz + s * 3.0);
      strut.rotation.x = s * 0.55;
      scene.add(strut);
    }
    // Grazing goat at the far end of Devil's Bridge!
    const goat = new THREE.Group();
    goat.position.set(bx, collision.getFloorHeight(bx, bz - 10, 2), bz - 10);
    const gBody = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.45, 0.95), matWhite);
    gBody.position.y = 0.56;
    const gHead = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.24, 0.32), matWhite);
    gHead.position.set(0, 0.72, 0.56);
    goat.add(gBody, gHead);
    scene.add(goat);
    animated.push((t) => { gHead.position.y = 0.62 + Math.sin(t * 1.6) * 0.14; });
    landmarks.push({ name: "Devil's Bridge", x: bx, z: bz, radius: 14 });

    // 2. Item 96: 100m Valais Suone (Bisse) from waterfall (-38,-34) -> cliff plank -> 6 trestles -> meadow ditch with 5 sluices -> knocking hammer & keeper's hut (14, 34)!
    const suonePath = [];
    for (let i = 0; i <= 14; i++) {
      const t = i / 14;
      const sx = -38 + t * 52;
      const sz = -34 + t * 68; // total path length = hypot(52, 68) = 86m + meadow extensions = ~100m!
      const sy = i <= 4 ? 3.2 - i * 0.15 : (i <= 10 ? 2.6 - (i - 4) * 0.22 : 0.45);
      suonePath.push(new THREE.Vector3(sx, sy, sz));
    }
    for (let i = 0; i < suonePath.length - 1; i++) {
      const a = suonePath[i];
      const b = suonePath[i + 1];
      const mid = a.clone().lerp(b, 0.5);
      const segLen = a.distanceTo(b);
      const yaw = Math.atan2(b.x - a.x, b.z - a.z);

      const trough = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.38, segLen + 0.15), matWood.clone());
      trough.position.copy(mid);
      trough.rotation.y = yaw;
      trough.userData.tag = 'wood';
      scene.add(trough);

      const stream = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.14, segLen + 0.1), matWater);
      stream.position.set(mid.x, mid.y + 0.12, mid.z);
      stream.rotation.y = yaw;
      scene.add(stream);

      // Cliff keeper's walkable plank alongside rock-face segments (i = 1..4)
      if (i >= 1 && i <= 4) {
        const plank = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.12, segLen), matDarkWood);
        plank.position.set(mid.x + 0.78, mid.y - 0.1, mid.z);
        plank.rotation.y = yaw;
        scene.add(plank);
        collision.addWalkable(mid.x + 0.78, mid.z, 1.3, 4.5, mid.y);
      }
      // 6 Tall Trestles over the hollow (i = 5..10, high enough to pass under!)
      if (i >= 5 && i <= 10) {
        const fy = collision.getFloorHeight(mid.x, mid.z, 1);
        const hT = Math.max(2.1, mid.y - fy);
        for (const s of [-0.45, 0.45]) {
          const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, hT, 6), matDarkWood);
          leg.position.set(mid.x + s, fy + hT * 0.5, mid.z);
          scene.add(leg);
        }
      }
      // 5 Meadow Sluice Boards (i = 10..13): 3 closed, 2 open spreading water over grass!
      if (i >= 9 && i <= 13) {
        const isOpen = (i === 10 || i === 12);
        const board = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.48, 0.42), matDarkWood);
        board.position.set(mid.x + 0.42, mid.y + (isOpen ? 0.35 : 0.06), mid.z);
        scene.add(board);
        if (isOpen) {
          const wet = new THREE.Mesh(new THREE.CircleGeometry(2.8, 12), matWater);
          wet.rotation.x = -Math.PI / 2;
          wet.position.set(mid.x + 2.8, collision.getFloorHeight(mid.x + 2.8, mid.z, 1) + 0.05, mid.z);
          scene.add(wet);
        }
      }
      suoneSegments.push({ index: i, trough, stream });
    }
    // Keeper's shingle hut + knocking water-hammer wheel (knocks every 1.5s while all upstream wood stands!)
    const hx = 16, hz = 35;
    const hy = collision.getFloorHeight(hx, hz, 2);
    addSolidBox(scene, collision, hx, hy + 1.3, hz - 1.8, 3.6, 2.6, 0.28, matWood, 'wood');
    addSolidBox(scene, collision, hx - 1.8, hy + 1.3, hz, 0.28, 2.6, 3.6, matWood, 'wood');
    addSolidBox(scene, collision, hx + 1.8, hy + 1.3, hz, 0.28, 2.6, 3.6, matWood, 'wood');
    const hutRoof = new THREE.Mesh(new THREE.ConeGeometry(3.1, 1.4, 4), matDarkWood);
    hutRoof.rotation.y = Math.PI * 0.25;
    hutRoof.position.set(hx, hy + 3.2, hz);
    const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.52, 0.08, 6, 12), matDarkWood);
    wheel.position.set(14, hy + 0.75, 34);
    const mallet = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.65, 0.14), matWood);
    mallet.position.set(14.5, hy + 0.85, 34);
    scene.add(hutRoof, wheel, mallet);

    let hammerAccum = 0;
    audioHooks.push((dt, playerPos, sound) => {
      // Check if any wooden Suone trough broke (Stage 11 integration!)
      let waterBrokenAt = -1;
      for (let i = 0; i < suoneSegments.length; i++) {
        const seg = suoneSegments[i];
        const broken = seg.trough.userData.destructibleProp && seg.trough.userData.destructibleProp.broken;
        if (broken && waterBrokenAt < 0) waterBrokenAt = i;
        seg.stream.visible = waterBrokenAt < 0;
      }
      if (waterBrokenAt < 0) {
        wheel.rotation.z -= dt * 2.4;
        hammerAccum += dt;
        mallet.rotation.z = Math.sin(hammerAccum * 4.2) * 0.45;
        if (hammerAccum >= 1.5) {
          hammerAccum -= 1.5;
          const dist = Math.hypot(playerPos.x - 14, playerPos.z - 34);
          if (dist <= 34 && sound && typeof sound.playWoodKnock === 'function') {
            sound.playWoodKnock(1 - dist / 36);
          }
        }
      }
    });
    bystanders.push(...spawnBystanders(scene, collision, animated, 'swiss', [
      { gender: 'male',   role: 'suone_keeper', pos: new THREE.Vector3(12, hy, 32), yaw: 0.6, prop: 'staff' },
      { gender: 'female', role: 'meadow_woman', pos: new THREE.Vector3(4, collision.getFloorHeight(4, 18, 2), 18), yaw: -0.5 }
    ]));
    landmarks.push({ name: 'Valais Suone', x: -6, z: 4, radius: 22 });
  }

  // ==================== ACT IV (GREECE): CONTEST OF THE TWELVE AXES ====================
  if (eraId === 'greece') {
    const ax = -12, az = 18;
    const ay = collision.getFloorHeight(ax, az, 2);
    const bronzeMat = new THREE.MeshStandardMaterial({ color: 0xb88438, metalness: 0.78, roughness: 0.3 });
    for (let i = 0; i < 12; i++) {
      const gz = az - i * 0.72;
      const haft = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.032, 1.35, 6), matDarkWood);
      haft.position.set(ax, ay + 0.68, gz);
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.22, 0.04), bronzeMat);
      blade.position.set(ax, ay + 1.15, gz);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.085, 0.018, 6, 12), matGold);
      ring.position.set(ax, ay + 1.42, gz);
      scene.add(haft, blade, ring);
    }
    // Great Bow of Odysseus on a stand with quiver!
    const stand = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.9, 0.4), matWood);
    stand.position.set(ax, ay + 0.45, az + 1.3);
    const bow = new THREE.Mesh(new THREE.TorusGeometry(0.58, 0.035, 6, 16, Math.PI), matGold);
    bow.position.set(ax, ay + 1.12, az + 1.3);
    scene.add(stand, bow);
    landmarks.push({ name: 'Contest of the Twelve Axes', x: ax, z: az - 3, radius: 12 });
  }

  // ==================== ACT V (VIKINGS): THE THING FIELD ====================
  if (eraId === 'scandinavia') {
    const tx = -38, tz = -34;
    const ty = collision.getFloorHeight(tx, tz, 2);
    const mound = new THREE.Mesh(new THREE.CylinderGeometry(3.8, 5.2, 0.9, 14), new THREE.MeshStandardMaterial({ color: 0x4b6344, roughness: 0.95 }));
    mound.position.set(tx, ty + 0.45, tz);
    const lawRock = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.7, 1.6), matStone);
    lawRock.position.set(tx, ty + 1.1, tz);
    scene.add(mound, lawRock);
    collision.addWalkable(tx, tz, 7.2, 7.2, ty + 0.9);
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      const sx = tx + Math.cos(a) * 8.2;
      const sz = tz + Math.sin(a) * 8.2;
      const h = 2.1 + (i % 3) * 0.45;
      addSolidBox(scene, collision, sx, ty + h * 0.5, sz, 0.72, h, 0.55, matStone, 'stone');
    }
    bystanders.push(...spawnBystanders(scene, collision, animated, 'scandinavia', [
      { gender: 'male', role: 'lawspeaker', pos: new THREE.Vector3(tx + 1.5, ty + 0.9, tz), yaw: 0.4, prop: 'staff' }
    ]));
    landmarks.push({ name: 'The Thing Field', x: tx, z: tz, radius: 15 });
  }

  // ==================== ACT VI (NORMANDY): PARATROOPER ON CHURCH TOWER ====================
  if (eraId === 'normandy') {
    const px = -19.8, pz = 12.2;
    const paraMat = new THREE.MeshStandardMaterial({ color: 0x5c664a, roughness: 0.85, side: THREE.DoubleSide });
    const canopy = new THREE.Mesh(new THREE.SphereGeometry(2.4, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.55), paraMat);
    canopy.position.set(px, 9.8, pz);
    canopy.rotation.z = 0.35;
    const trooper = new THREE.Group();
    trooper.position.set(px + 1.1, 6.2, pz + 0.6);
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.72, 0.28), paraMat);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.19, 8, 8), new THREE.MeshStandardMaterial({ color: 0x454d38, roughness: 0.7 }));
    head.position.y = 0.54;
    const legL = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.68, 6), paraMat);
    legL.position.set(-0.13, -0.64, 0);
    const legR = legL.clone(); legR.position.x = 0.13;
    const armL = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.06, 0.62, 6), paraMat);
    armL.position.set(-0.28, 0.42, 0); armL.rotation.z = 0.25;
    const armR = armL.clone(); armR.position.x = 0.28; armR.rotation.z = -0.25;
    trooper.add(body, head, legL, legR, armL, armR);
    scene.add(canopy, trooper);
    animated.push((t) => {
      legL.rotation.x = Math.sin(t * 5.2) * 0.55;
      legR.rotation.x = -Math.sin(t * 5.2) * 0.55;
      trooper.rotation.z = Math.sin(t * 1.4) * 0.08;
    });
    landmarks.push({ name: 'Sainte-Mère Church Tower', x: -20, z: 10, radius: 13 });
  }

  // ==================== ACT VII (SOVIET): METRO (-10m), 5-FLOOR STAIRWELL, OPEN CHURCH OF ST NICHOLAS, KVAS TANKER ====================
  if (eraId === 'soviet') {
    // 1. Underground Metro Station (10m down, navigable escalator stairs!)
    const mx = 18, mz = 26;
    const marbleMat = new THREE.MeshStandardMaterial({ color: 0xe6e0d4, roughness: 0.45 });
    const metroSign = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.4, 0.3), matRed);
    metroSign.position.set(mx, 4.2, mz + 3.2);
    scene.add(metroSign);
    // Broad navigable stair descending from y=0 (z=26) down to y=-10.0 (z=-9) along -Z (28 steps, rise 0.357m, tread 1.25m!)
    addStairFlight(scene, collision, { x: mx, zStart: mz, zEnd: mz - 35.0, yStart: 0, yEnd: -10.0, width: 4.4, steps: 28, mat: marbleMat });
    // Metro underground hall at y = -10.0 (centered at mx, mz - 42)
    const platZ = mz - 42;
    const platFloor = new THREE.Mesh(new THREE.BoxGeometry(14, 0.4, 34), marbleMat);
    platFloor.position.set(mx, -10.2, platZ);
    const platCeil = new THREE.Mesh(new THREE.BoxGeometry(15, 0.5, 35), matWhite);
    platCeil.position.set(mx, -4.6, platZ);
    scene.add(platFloor, platCeil);
    collision.addWalkable(mx, platZ, 14, 34, -10.0);
    // Marble columns & chandeliers
    for (let ci = -12; ci <= 12; ci += 6) {
      for (const s of [-4.2, 4.2]) {
        addSolidBox(scene, collision, mx + s, -7.4, platZ + ci, 0.8, 5.2, 0.8, marbleMat, 'stone');
      }
      const chand = new THREE.PointLight(0xfff1c4, 6, 16);
      chand.position.set(mx, -5.6, platZ + ci);
      scene.add(chand);
    }
    // Standing blue metro train car beside platform with open doors!
    const trainCar = new THREE.Mesh(new THREE.BoxGeometry(2.8, 2.8, 16), matBlue);
    trainCar.position.set(mx + 6.4, -8.5, platZ);
    scene.add(trainCar);
    bystanders.push(...spawnBystanders(scene, collision, animated, 'soviet', [
      { gender: 'female', role: 'passenger', pos: new THREE.Vector3(mx - 1.5, -10.0, platZ + 4), yaw: 0.4 },
      { gender: 'male',   role: 'passenger', pos: new THREE.Vector3(mx + 1.8, -10.0, platZ - 5), yaw: -0.9 },
      { gender: 'female', role: 'cleaner',   pos: new THREE.Vector3(mx - 2.4, -10.0, platZ - 10), yaw: 1.1, prop: 'staff' }
    ]));
    landmarks.push({ name: 'Stalnogorskaya Metro', x: mx, z: mz - 12, radius: 16 });

    // 2. Five-Floor Courtyard Stairwell Block (x = -46) with continuous navigable flights & furnished flat on EVERY landing!
    const fx = -46;
    const concreteMat = new THREE.MeshStandardMaterial({ color: 0x9ca2a8, roughness: 0.85 });
    // 5 stepped landings along Z (non-overlapping in XZ so 2D A* climbs cleanly floor 1 -> 2 -> 3 -> 4 -> 5!)
    const landings = [
      { x: fx, z: 12,  y: 0.0,  sx: 8, sz: 5 },
      { x: fx, z: -2,  y: 3.0,  sx: 8, sz: 5 },
      { x: fx, z: -16, y: 6.0,  sx: 8, sz: 5 }, // 3rd floor!
      { x: fx, z: -30, y: 9.0,  sx: 8, sz: 5 },
      { x: fx, z: -44, y: 12.0, sx: 8, sz: 5 }
    ];
    for (let fl = 0; fl < landings.length; fl++) {
      const ld = landings[fl];
      const slab = new THREE.Mesh(new THREE.BoxGeometry(ld.sx, 0.28, ld.sz), concreteMat);
      slab.position.set(ld.x, ld.y - 0.14, ld.z);
      scene.add(slab);
      collision.addWalkable(ld.x, ld.z, ld.sx, ld.sz, ld.y);
      addTableAndChairs(scene, collision, ld.x - 2.0, ld.y, ld.z - 0.8, matWood);
      if (fl > 0 && fl <= 3) {
        bystanders.push(...spawnBystanders(scene, collision, animated, 'soviet', [
          { gender: fl % 2 === 0 ? 'female' : 'male', role: 'resident', pos: new THREE.Vector3(ld.x - 2.4, ld.y, ld.z + 1.0), yaw: 0.7 }
        ]));
      }
      if (fl < landings.length - 1) {
        // 9m run, 8 steps -> tread 1.125m, rise 0.375m (strictly <= 0.48m per 1.2m nav cell!)
        addStairFlight(scene, collision, {
          x: fx + 2.2,
          zStart: ld.z - 2.4,
          zEnd: landings[fl + 1].z + 2.4,
          yStart: ld.y,
          yEnd: landings[fl + 1].y,
          width: 2.8,
          steps: 8,
          mat: concreteMat
        });
      }
    }
    landmarks.push({ name: 'Five-Floor Block', x: fx, z: -16, radius: 16 });

    // 3. Open Church of St Nicholas (5 blue-and-gold onion domes, iconostasis, priest & women at prayer!)
    const nx = 46, nz = 4;
    addSolidBox(scene, collision, nx, 3.0, nz - 5.5, 10, 6, 0.48, matWhite, 'stone');
    addSolidBox(scene, collision, nx - 5, 3.0, nz, 0.48, 6, 11, matWhite, 'stone');
    addSolidBox(scene, collision, nx + 5, 3.0, nz, 0.48, 6, 11, matWhite, 'stone');
    addSolidBox(scene, collision, nx - 3.4, 3.0, nz + 5.5, 3.2, 6, 0.48, matWhite, 'stone');
    addSolidBox(scene, collision, nx + 3.4, 3.0, nz + 5.5, 3.2, 6, 0.48, matWhite, 'stone');
    const cRoof = new THREE.Mesh(new THREE.BoxGeometry(10.4, 0.4, 11.4), matWhite);
    cRoof.position.set(nx, 6.1, nz);
    scene.add(cRoof);
    collision.addWalkable(nx, nz, 10.2, 11.2, 6.3, true);
    // Five blue-and-gold onion domes with gold crosses!
    const domeOffsets = [[0, 0, 1.35, 8.8], [-3.2, -3.2, 0.85, 7.6], [3.2, -3.2, 0.85, 7.6], [-3.2, 3.2, 0.85, 7.6], [3.2, 3.2, 0.85, 7.6]];
    for (const [dx, dz, rad, dy] of domeOffsets) {
      const drum = new THREE.Mesh(new THREE.CylinderGeometry(rad * 0.78, rad * 0.82, 1.6, 12), matWhite);
      drum.position.set(nx + dx, dy - 1.1, nz + dz);
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(rad, 12, 10), dx === 0 ? matGold : matBlue);
      bulb.scale.set(1, 1.25, 1);
      bulb.position.set(nx + dx, dy, nz + dz);
      const spire = new THREE.Mesh(new THREE.ConeGeometry(rad * 0.45, rad * 1.1, 8), matGold);
      spire.position.set(nx + dx, dy + rad * 1.25, nz + dz);
      scene.add(drum, bulb, spire);
    }
    // Gilded Iconostasis screen with royal doors
    addSolidBox(scene, collision, nx, 2.2, nz - 4.4, 6.2, 4.4, 0.35, matGold, 'altar');
    bystanders.push(...spawnBystanders(scene, collision, animated, 'soviet', [
      { gender: 'male',   role: 'orthodox_priest', pos: new THREE.Vector3(nx, 0, nz - 2.8), yaw: 0 },
      { gender: 'female', role: 'pilgrim', pos: new THREE.Vector3(nx - 2.0, 0, nz + 1.2), yaw: Math.PI },
      { gender: 'female', role: 'pilgrim', pos: new THREE.Vector3(nx + 2.0, 0, nz + 1.5), yaw: Math.PI }
    ]));
    landmarks.push({ name: 'Church of St Nicholas', x: nx, z: nz, radius: 14 });

    // 4. Yellow Kvas Tanker (КВАС) + 2 Soda-Water Machines!
    const kx = 12, kz = 18;
    const kvasMat = new THREE.MeshStandardMaterial({ map: makeLabelTexture('КВАС', '#ebbf2d', '#7d1b14'), roughness: 0.45 });
    const tank = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 0.95, 2.6, 16), kvasMat);
    tank.rotation.z = Math.PI * 0.5;
    tank.position.set(kx, 1.35, kz);
    scene.add(tank);
    collision.addBox(kx, 1.1, kz, 2.8, 2.2, 2.0, 'metal');
    for (const sx of [-1.2, 1.2]) {
      const soda = new THREE.Mesh(new THREE.BoxGeometry(0.85, 1.9, 0.72), matBlue);
      soda.position.set(-34 + sx * 1.4, 0.95, 22);
      scene.add(soda);
    }
    bystanders.push(...spawnBystanders(scene, collision, animated, 'soviet', [
      { gender: 'female', role: 'kvas_seller', pos: new THREE.Vector3(kx + 1.9, 0, kz), yaw: -1.4, clothColor: 0xf4f4f0 }
    ]));
    landmarks.push({ name: 'Kvas Tanker', x: kx, z: kz, radius: 11 });
  }

  // ==================== ACT VIII (TIBET): IRON CHAIN BRIDGE & PROSTRATING PILGRIM ====================
  if (eraId === 'tibet') {
    // 1. Thangtong Gyalpo Iron Chain Bridge (x = 12, z = -22)
    const cx = 12, cz = -22;
    const cy = collision.getFloorHeight(cx, cz, 2);
    const ironMat = new THREE.MeshStandardMaterial({ color: 0x2a2d32, metalness: 0.8, roughness: 0.4 });
    for (const s of [-1, 1]) {
      addSolidBox(scene, collision, cx + s * 6.5, cy + 1.8, cz - 1.5, 1.2, 3.6, 1.2, matWhite, 'stone');
      addSolidBox(scene, collision, cx + s * 6.5, cy + 1.8, cz + 1.5, 1.2, 3.6, 1.2, matWhite, 'stone');
      addSolidBox(scene, collision, cx + s * 6.5, cy + 3.8, cz, 1.4, 0.7, 4.2, matWhite, 'stone');
      const smallChorten = new THREE.Mesh(new THREE.ConeGeometry(0.42, 1.1, 6), matGold);
      smallChorten.position.set(cx + s * 6.5, cy + 4.7, cz);
      scene.add(smallChorten);
    }
    const deck = new THREE.Mesh(new THREE.BoxGeometry(12.2, 0.22, 2.2), matWood);
    deck.position.set(cx, cy + 0.55, cz);
    scene.add(deck);
    collision.addWalkable(cx, cz, 12.4, 2.4, cy + 0.66);
    for (const sz of [-1.2, 1.2]) {
      const chain = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 13.0, 6), ironMat);
      chain.rotation.z = Math.PI * 0.5;
      chain.position.set(cx, cy + 1.85, cz + sz);
      scene.add(chain);
    }
    landmarks.push({ name: 'Iron Chain Bridge', x: cx, z: cz, radius: 14 });

    // 2. Item 95: Prostrating Pilgrim circling chorten near Tibet start (NEVER takes up arms!)
    const px = -9, pz = 42;
    const py = collision.getFloorHeight(px, pz, 2);
    const chorten = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 1.4, 3.2, 8), matWhite);
    chorten.position.set(px, py + 1.6, pz);
    const spire = new THREE.Mesh(new THREE.ConeGeometry(0.45, 1.2, 8), matGold);
    spire.position.set(px, py + 3.8, pz);
    scene.add(chorten, spire);
    collision.addBox(px, py + 1.6, pz, 2.6, 3.4, 2.6, 'chorten');

    const pilgrimList = spawnBystanders(scene, collision, animated, 'tibet', [
      { gender: 'female', role: 'prostrating_pilgrim', pos: new THREE.Vector3(px + 3.6, py, pz), yaw: 0 }
    ]);
    const pil = pilgrimList[0];
    if (pil) {
      pil.noFight = true;
      pil.willFightBack = false;
      let pAng = 0;
      const origUpdate = pil.update.bind(pil);
      pil.update = (dt, t, playerPos, playerFwd, col, sound) => {
        if (!pil.alive || pil.frightTimer > 0 || pil.state === 'hands_up') {
          origUpdate(dt, t, playerPos, playerFwd, col, sound);
          return;
        }
        // Full 5-second prostration cycle: crown -> face -> heart -> kneel -> flat -> rise & advance!
        const cyc = (t * 0.2) % 1;
        if (cyc < 0.25) {
          pil.mesh.rotation.x = 0;
          pil.parts.armL.rotation.x = -2.4;
          pil.parts.armR.rotation.x = -2.4;
        } else if (cyc < 0.72) {
          const frac = Math.sin(((cyc - 0.25) / 0.47) * Math.PI);
          pil.mesh.rotation.x = frac * 1.48; // slides flat onto ground on wooden hand boards!
          pil.mesh.position.y = py + (1 - frac) * 0.02 + frac * 0.22;
        } else {
          pil.mesh.rotation.x = 0;
          pAng += dt * 0.28;
          pil.mesh.position.set(px + Math.cos(pAng) * 3.8, py, pz + Math.sin(pAng) * 3.8);
          pil.mesh.rotation.y = -pAng;
        }
      };
      bystanders.push(pil);
    }
    landmarks.push({ name: 'Pilgrim Chorten', x: px, z: pz, radius: 12 });
  }

  // ==================== ACT IX (TENOCHTITLAN): HOUSE OF BIRDS (MOCTEZUMA'S AVIARY) ====================
  if (eraId === 'aztec') {
    const vx = -36, vz = 20;
    const vy = collision.getFloorHeight(vx, vz, 2);
    const caneMat = new THREE.MeshStandardMaterial({ color: 0xb59b62, roughness: 0.88 });
    // Great cane cage frame with lattice roof
    for (const sx of [-5, 0, 5]) {
      for (const sz of [-4, 4]) {
        addSolidBox(scene, collision, vx + sx, vy + 2.4, vz + sz, 0.28, 4.8, 0.28, caneMat, 'wood');
      }
    }
    const latticeRoof = new THREE.Mesh(new THREE.BoxGeometry(10.6, 0.22, 8.6), new THREE.MeshStandardMaterial({ color: 0xbfa56b, wireframe: true }));
    latticeRoof.position.set(vx, vy + 4.9, vz);
    // Shallow aviary pool in front
    const pool = new THREE.Mesh(new THREE.CircleGeometry(3.2, 16), matWater);
    pool.rotation.x = -Math.PI / 2;
    pool.position.set(vx, vy + 0.06, vz + 7.2);
    scene.add(latticeRoof, pool);

    // Macaws, parrots & emerald quetzals perched and circling on the wing!
    const birdCols = [0xe62e2e, 0x24b85e, 0x2675d9, 0xf2c230, 0x1fc7a2];
    const flyingBirds = [];
    for (let bi = 0; bi < 8; bi++) {
      const bMat = new THREE.MeshStandardMaterial({ color: birdCols[bi % birdCols.length], roughness: 0.6 });
      const bg = new THREE.Group();
      const bd = new THREE.Mesh(new THREE.SphereGeometry(0.18, 7, 6), bMat);
      const tail = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.55, 5), bMat);
      tail.rotation.x = -Math.PI * 0.5;
      tail.position.z = -0.32;
      bg.add(bd, tail);
      bg.position.set(vx + (bi - 3.5) * 1.1, vy + (bi < 4 ? 2.6 : 3.7), vz + (bi % 2 === 0 ? -1.5 : 1.5));
      scene.add(bg);
      if (bi >= 4) flyingBirds.push({ bg, idx: bi });
    }
    animated.push((t) => {
      for (const fb of flyingBirds) {
        const a = t * 1.6 + fb.idx * 1.5;
        fb.bg.position.set(vx + Math.cos(a) * 3.2, vy + 3.4 + Math.sin(t * 3 + fb.idx) * 0.35, vz + Math.sin(a) * 2.4);
        fb.bg.rotation.y = -a;
      }
    });
    bystanders.push(...spawnBystanders(scene, collision, animated, 'aztec', [
      { gender: 'male', role: 'aviary_keeper', pos: new THREE.Vector3(vx + 5.8, vy, vz + 4.5), yaw: -0.7 }
    ]));
    landmarks.push({ name: 'House of Birds', x: vx, z: vz, radius: 14 });
  }

  return { landmarks, bystanders, audioHooks, suoneSegments };
}
