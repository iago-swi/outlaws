import * as THREE from 'three';
import {
  getWoodPlanks,
  getGroundTexture,
  getStoneTexture,
  getShojiTexture,
  getRoofTileTexture,
  createBannerTexture
} from '../engine/textures.js';
import { createSkyDome, createWaterMesh } from '../engine/shaders.js';
import {
  buildHollowRoom,
  addSolidBox,
  addAltar,
  addDesk
} from '../engine/buildings.js';
import { createPickupMesh } from './level1_west.js';

export const LEVEL2_META = {
  id: 'japan',
  index: 1,
  themeClass: 'theme-japan',
  act: 'ACT II • 1603',
  title: 'KYOTO MIST',
  subtitle: 'Blossom & Steel',
  heroName: 'KENSHIN THE SAMURAI',
  objective: 'Purge the Shrine, Dojo & Hermitage, and Defeat Lord Kurogane',
  quote: '"Beneath falling blossoms, honor is weighed by the quiet edge of steel. Step through the Torii gate and reclaim the sacred hill."',
  musicTheme: 'japan',
  enemyIcon: '⚔',
  currency: '両 ',
  arsenalSummary: [
    ['1 • Muramasa Katana', 'Swift folded-steel blade. RMB unleashes Iaido cleave.'],
    ['2 • Yumi Longbow', 'Silent piercing arrows with Spirit Focus Zoom (RMB).'],
    ['3 • Shinobi Shuriken', 'Rapid steel stars. RMB throws a 3-star fan.'],
    ['4 • Tanegashima Musket', 'Thunderous Edo black-powder firepower.']
  ],
  spawnPos: new THREE.Vector3(0, 0, 52),
  spawnYaw: 0,
  cameraPreview: { center: new THREE.Vector3(0, 6, -4), radius: 30, height: 22, speed: 0.11 }
};

export function buildLevel2(scene, collision, particles) {
  const disposables = [];
  const animated = [];
  const pickups = [];

  collision.bounds = { minX: -80, maxX: 80, minZ: -82, maxZ: 74 };

  // 1. Ethereal Sakura Twilight Sky & Misty Lighting
  const sunDir = new THREE.Vector3(-0.35, 0.22, -0.9).normalize();
  const sky = createSkyDome({
    topColor: 0x1b2347,
    midColor: 0x8f4e6d,
    horizonColor: 0xffc4ad,
    sunColor: 0xffe8cc,
    sunDirection: sunDir,
    cloudTint: 0xffb3ba,
    cloudDensity: 0.48
  });
  scene.add(sky.mesh);
  animated.push((t) => { sky.uniforms.uTime.value = t; });

  scene.fog = new THREE.FogExp2(0x7c5a6e, 0.0072);

  const hemi = new THREE.HemisphereLight(0xffd0d6, 0x2d3b2c, 0.92);
  scene.add(hemi);

  const sunLight = new THREE.DirectionalLight(0xffcfb8, 2.3);
  sunLight.position.copy(sunDir).multiplyScalar(110);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(2048, 2048);
  sunLight.shadow.camera.left = -85;
  sunLight.shadow.camera.right = 85;
  sunLight.shadow.camera.top = 85;
  sunLight.shadow.camera.bottom = -85;
  sunLight.shadow.near = 10;
  sunLight.shadow.far = 250;
  sunLight.shadow.bias = -0.0005;
  scene.add(sunLight);

  const rimLight = new THREE.DirectionalLight(0x7996e8, 0.55);
  rimLight.position.set(50, 26, 55);
  scene.add(rimLight);

  // 2. Mossy Shrine Grounds & Flagstone Avenue
  const mossTex = getGroundTexture('japan_moss', 34, 34);
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(420, 420),
    new THREE.MeshStandardMaterial({
      map: mossTex.map,
      bumpMap: mossTex.bumpMap,
      bumpScale: 0.2,
      roughness: 0.92
    })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  const cobbleTex = getGroundTexture('cobble', 3, 28);
  const walkway = new THREE.Mesh(
    new THREE.PlaneGeometry(7.2, 118),
    new THREE.MeshStandardMaterial({ map: cobbleTex.map, bumpMap: cobbleTex.bumpMap, bumpScale: 0.18, roughness: 0.85 })
  );
  walkway.rotation.x = -Math.PI / 2;
  walkway.position.set(0, 0.04, 4);
  walkway.receiveShadow = true;
  scene.add(walkway);

  // Shared materials
  const darkWood = getWoodPlanks('darkJapan', 2, 2);
  const redWood = getWoodPlanks('redLacquer', 2, 2);
  const stoneTex = getStoneTexture('temple', 2, 2);
  const roofTex = getRoofTileTexture('japan', 4, 2);
  const shojiTex = getShojiTexture(2, 1);
  const zenSand = getGroundTexture('zen_sand', 4, 4);
  const bannerTex = createBannerTexture('japan');

  const matDarkWood = new THREE.MeshStandardMaterial({ map: darkWood.map, bumpMap: darkWood.bumpMap, bumpScale: 0.1, roughness: 0.78 });
  const matVermilion = new THREE.MeshStandardMaterial({ map: redWood.map, roughness: 0.48, metalness: 0.08 });
  const matStone = new THREE.MeshStandardMaterial({ map: stoneTex.map, bumpMap: stoneTex.bumpMap, bumpScale: 0.2, roughness: 0.88 });
  const matRoof = new THREE.MeshStandardMaterial({ map: roofTex.map, bumpMap: roofTex.bumpMap, bumpScale: 0.18, roughness: 0.58, metalness: 0.15 });
  const matShoji = new THREE.MeshStandardMaterial({ map: shojiTex, emissive: 0xffb35c, emissiveIntensity: 0.35, roughness: 0.6 });
  const matTatami = new THREE.MeshStandardMaterial({ color: 0xb9aa78, roughness: 0.9 });
  const matLanternGlow = new THREE.MeshStandardMaterial({ color: 0xffe4a8, emissive: 0xff9436, emissiveIntensity: 1.5, roughness: 0.25 });
  const matGold = new THREE.MeshStandardMaterial({ color: 0xe6b647, metalness: 0.85, roughness: 0.28 });
  const matBamboo = new THREE.MeshStandardMaterial({ color: 0x4b873c, roughness: 0.45 });
  const matBambooLeaf = new THREE.MeshStandardMaterial({ color: 0x3b6e32, roughness: 0.8 });
  const matSakura = new THREE.MeshStandardMaterial({ color: 0xffb3cb, emissive: 0x5c1a30, emissiveIntensity: 0.2, roughness: 0.85 });
  const matSakuraLight = new THREE.MeshStandardMaterial({ color: 0xffd6e4, emissive: 0x6b243b, emissiveIntensity: 0.22, roughness: 0.85 });
  const matBanner = new THREE.MeshStandardMaterial({ map: bannerTex, side: THREE.DoubleSide, roughness: 0.7 });
  const matPlaster = new THREE.MeshStandardMaterial({ color: 0xe4ddd0, roughness: 0.85 });

  // ---- ICONIC VERMILION TORII GATES ----
  function addToriiGate(x, z, scale = 1, rotY = 0) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rotY;
    g.scale.setScalar(scale);
    for (const px of [-3.2, 3.2]) {
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.55, 1.1, 10), matStone);
      base.position.set(px, 0.55, 0);
      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.38, 6.8, 12), matVermilion);
      col.position.set(px, 4.0, 0);
      col.castShadow = true;
      g.add(base, col);
    }
    const nuki = new THREE.Mesh(new THREE.BoxGeometry(8.6, 0.42, 0.44), matVermilion);
    nuki.position.set(0, 5.9, 0);
    const kasagi = new THREE.Mesh(new THREE.BoxGeometry(9.8, 0.54, 0.68), matVermilion);
    kasagi.position.set(0, 7.25, 0);
    const cap = new THREE.Mesh(new THREE.BoxGeometry(10.3, 0.34, 0.86), matRoof);
    cap.position.set(0, 7.62, 0);
    const plaque = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.15, 0.26), matDarkWood);
    plaque.position.set(0, 6.55, 0);
    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.98, 1.24, 0.16), matGold);
    frame.position.set(0, 6.55, 0);
    g.add(nuki, kasagi, cap, plaque, frame);
    scene.add(g);

    const cos = Math.cos(rotY), sin = Math.sin(rotY);
    for (const px of [-3.2 * scale, 3.2 * scale]) {
      collision.addBox(x + px * cos, 3.5, z - px * sin, 1.1 * scale, 7.5 * scale, 1.1 * scale, 'wood');
    }
  }
  addToriiGate(0, 38, 1.15);
  addToriiGate(0, 22, 1.0);
  addToriiGate(0, -14, 1.1);
  // Dojo compound entrance Torii
  addToriiGate(34, -36, 0.92, Math.PI / 2);

  // ---- KOI POND & ARCHED VERMILION BRIDGE ----
  const pond = createWaterMesh(22, 14, {
    deepColor: 0x103c45, shallowColor: 0x267578, foamColor: 0xffd9e6,
    sunColor: 0xffd0b5, sunDir, opacity: 0.9, waveScale: 0.05
  });
  pond.mesh.position.set(16, 0.08, 4);
  scene.add(pond.mesh);
  animated.push((t) => { pond.uniforms.uTime.value = t; });

  // Water colliders on left and right sides of the bridge so player crosses ON the bridge
  collision.addBox(9.5, 0.8, 4, 8.2, 1.6, 13.5, 'water');
  collision.addBox(22.5, 0.8, 4, 8.2, 1.6, 13.5, 'water');

  const koiMat = new THREE.MeshBasicMaterial({ color: 0xff6e2e });
  const koiMatW = new THREE.MeshBasicMaterial({ color: 0xfff0e6 });
  for (let i = 0; i < 6; i++) {
    const koi = new THREE.Mesh(new THREE.CapsuleGeometry(0.12, 0.45, 4, 6), i % 2 === 0 ? koiMat : koiMatW);
    koi.rotation.x = Math.PI / 2;
    scene.add(koi);
    const orbitR = 3.2 + (i % 3) * 1.9;
    const speed = 0.45 + i * 0.1;
    const phase = i * 1.1;
    animated.push((t) => {
      const a = t * speed + phase;
      koi.position.set(16 + Math.cos(a) * orbitR, 0.05, 4 + Math.sin(a) * (orbitR * 0.65));
      koi.rotation.z = a;
    });
  }

  // Arched bridge with climbable gentle end steps (<= 0.4m)
  const deck = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.35, 16), matDarkWood);
  deck.position.set(16, 0.25, 4);
  deck.receiveShadow = true;
  scene.add(deck);
  collision.addWalkable(16, 4, 4.8, 16.4, 0.42);
  for (const bx of [13.8, 18.2]) {
    addSolidBox(scene, collision, bx, 1.0, 4, 0.22, 1.35, 15.6, matVermilion, 'wood');
  }

  // ---- ZEN ROCK GARDEN (West Courtyard) ----
  const zenBed = new THREE.Mesh(
    new THREE.BoxGeometry(18, 0.18, 16),
    new THREE.MeshStandardMaterial({ map: zenSand.map, bumpMap: zenSand.bumpMap, bumpScale: 0.22, roughness: 0.95 })
  );
  zenBed.position.set(-19, 0.09, 4);
  zenBed.receiveShadow = true;
  scene.add(zenBed);
  for (const [sx, sz, sr] of [[-22, 2, 1.6], [-15, 7, 1.35], [-20, 8, 1.15], [-16, -1, 1.45]]) {
    const st = new THREE.Mesh(new THREE.DodecahedronGeometry(sr, 1), matStone);
    st.position.set(sx, sr * 0.65, sz);
    st.castShadow = true;
    scene.add(st);
    collision.addBox(sx, sr * 0.6, sz, sr * 2.0, sr * 1.5, sr * 1.8, 'stone');
  }

  // ---- 1. ENTERABLE GRAND SHINTO SHRINE HALL (North Peak) ----
  const shrine = buildHollowRoom(scene, collision, {
    cx: 0, cz: -34, w: 16, d: 11, h: 4.8, floorY: 0.36,
    wallMat: matShoji, floorMat: matTatami, roofMat: matRoof, roofStyle: 'hip',
    south: [
      { type: 'window', offset: -5.0, width: 2.2 },
      { type: 'door', offset: 0, width: 3.2, height: 3.2 },
      { type: 'window', offset: 5.0, width: 2.2 }
    ],
    west: [{ type: 'door', offset: 0, width: 2.2, height: 2.8 }],
    east: [{ type: 'door', offset: 0, width: 2.2, height: 2.8 }],
    stepMat: matStone,
    interiorLight: { color: 0xffb35c, intensity: 2.2, distance: 18 }
  });
  // Second Pagoda Tier + Golden Spire & Clan Banners above Shrine
  const tier2 = new THREE.Mesh(new THREE.BoxGeometry(9.0, 2.8, 6.6), matVermilion);
  tier2.position.set(0, shrine.roofY + 2.8, -34);
  const roof2 = new THREE.Mesh(new THREE.ConeGeometry(8.5, 3.0, 4), matRoof);
  roof2.rotation.y = Math.PI / 4;
  roof2.position.set(0, shrine.roofY + 5.6, -34);
  const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.18, 2.4, 8), matGold);
  spire.position.set(0, shrine.roofY + 8.0, -34);
  scene.add(tier2, roof2, spire);
  for (const bx of [-5.2, 5.2]) {
    const ban = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 3.2), matBanner);
    ban.position.set(bx, 3.2, -28.2);
    scene.add(ban);
  }
  // Shrine interior sacred altar
  addAltar(scene, collision, 0, shrine.floorY, -37.8, 3.6, 1.1, matVermilion, 0xd4a437);

  // ---- 2. WALK-THROUGH JAPANESE HOUSES WITH OPEN SCREENS ----
  const teaW = buildHollowRoom(scene, collision, {
    cx: -23, cz: -16, w: 10.5, d: 9.0, h: 3.9, floorY: 0.25,
    wallMat: matShoji, floorMat: matTatami, roofMat: matRoof, roofStyle: 'hip',
    east: [{ type: 'door', offset: 0, width: 2.4, height: 2.8 }],
    south: [{ type: 'door', offset: 0, width: 2.4, height: 2.8 }],
    north: [{ type: 'window', offset: 0, width: 2.2 }],
    interiorLight: { color: 0xffbe72, intensity: 1.5, distance: 13 }
  });
  addDesk(scene, collision, -25.8, teaW.floorY, -17.5, 1.6, 0.9, matDarkWood, 1);

  const teaE = buildHollowRoom(scene, collision, {
    cx: 23, cz: -16, w: 10.5, d: 9.0, h: 3.9, floorY: 0.25,
    wallMat: matShoji, floorMat: matTatami, roofMat: matRoof, roofStyle: 'hip',
    west: [{ type: 'door', offset: 0, width: 2.4, height: 2.8 }],
    south: [{ type: 'door', offset: 0, width: 2.4, height: 2.8 }],
    north: [{ type: 'window', offset: 0, width: 2.2 }],
    interiorLight: { color: 0xffbe72, intensity: 1.5, distance: 13 }
  });
  addDesk(scene, collision, 25.8, teaE.floorY, -17.5, 1.6, 0.9, matDarkWood, 1);

  const teaS = buildHollowRoom(scene, collision, {
    cx: -24, cz: 24, w: 10.0, d: 8.5, h: 3.8, floorY: 0.25,
    wallMat: matShoji, floorMat: matTatami, roofMat: matRoof, roofStyle: 'hip',
    east: [{ type: 'door', offset: 0, width: 2.4, height: 2.8 }],
    north: [{ type: 'door', offset: 0, width: 2.2, height: 2.8 }],
    interiorLight: { color: 0xffbe72, intensity: 1.5, distance: 12 }
  });
  addDesk(scene, collision, -26.5, teaS.floorY, 25.6, 1.5, 0.9, matDarkWood, -1);

  // ---- 3. OUTLYING WALLED DOJO COMPOUND WITH TORII GATE (North-East) ----
  // Perimeter plaster walls with open west Torii gateway (z = -36)
  addSolidBox(scene, collision, 47, 1.6, -54, 26, 3.2, 0.55, matPlaster, 'stone');
  addSolidBox(scene, collision, 47, 1.6, -24, 26, 3.2, 0.55, matPlaster, 'stone');
  addSolidBox(scene, collision, 60, 1.6, -39, 0.55, 3.2, 30, matPlaster, 'stone');
  addSolidBox(scene, collision, 34, 1.6, -47.5, 0.55, 3.2, 13, matPlaster, 'stone');
  addSolidBox(scene, collision, 34, 1.6, -28.0, 0.55, 3.2, 8.5, matPlaster, 'stone');

  const dojo = buildHollowRoom(scene, collision, {
    cx: 49, cz: -39, w: 12, d: 13, h: 4.5, floorY: 0.28,
    wallMat: matShoji, floorMat: matTatami, roofMat: matRoof, roofStyle: 'hip',
    west: [
      { type: 'window', offset: -3.6, width: 2.0 },
      { type: 'door', offset: 0, width: 2.8, height: 3.0 },
      { type: 'window', offset: 3.6, width: 2.0 }
    ],
    interiorLight: { color: 0xffcc80, intensity: 1.8, distance: 16 }
  });
  addAltar(scene, collision, 53.4, dojo.floorY, -39, 1.2, 3.0, matDarkWood, 0x9c1e1e);

  // ---- 4. OUTLYING BAMBOO HERMITAGE (West beyond Zen Garden) ----
  const hermit = buildHollowRoom(scene, collision, {
    cx: -52, cz: 32, w: 9.0, d: 8.0, h: 3.6, floorY: 0.22,
    wallMat: matDarkWood, floorMat: matTatami, roofMat: matRoof, roofStyle: 'gable',
    east: [{ type: 'door', offset: 0, width: 2.3, height: 2.7 }],
    north: [{ type: 'window', offset: 0, width: 1.8 }],
    interiorLight: { color: 0xffb866, intensity: 1.4, distance: 12 }
  });
  addDesk(scene, collision, -54.5, hermit.floorY, 32, 1.4, 0.85, matDarkWood, 1);

  // ---- STONE LANTERNS, SAKURA TREES & BAMBOO GROVES (ALL SOLID!) ----
  function addStoneLantern(lx, lz) {
    const g = new THREE.Group();
    g.position.set(lx, 0, lz);
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.26, 1.5, 8), matStone);
    post.position.y = 0.75;
    const firebox = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.45, 0.45), matLanternGlow);
    firebox.position.y = 1.72;
    const roof = new THREE.Mesh(new THREE.ConeGeometry(0.58, 0.38, 6), matStone);
    roof.position.y = 2.12;
    g.add(post, firebox, roof);
    scene.add(g);
    collision.addBox(lx, 1.0, lz, 0.75, 2.2, 0.75, 'stone');
  }
  for (const lz of [32, 16, 0, -10, -22]) {
    addStoneLantern(-4.8, lz);
    addStoneLantern(4.8, lz);
  }

  function addSakuraTree(tx, tz, scale = 1) {
    const g = new THREE.Group();
    g.position.set(tx, 0, tz);
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.56, 4.4, 8), matDarkWood);
    trunk.position.y = 2.2;
    trunk.castShadow = true;
    g.add(trunk);
    for (const [px, py, pz, r, m] of [
      [0, 5.2, 0, 2.7, matSakura], [-1.9, 4.5, 0.8, 2.1, matSakuraLight],
      [1.8, 4.7, -0.7, 2.2, matSakura], [0.4, 6.2, 0.5, 1.9, matSakuraLight]
    ]) {
      const c = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 1), m);
      c.position.set(px, py, pz);
      c.scale.set(1.25, 0.72, 1.15);
      g.add(c);
    }
    g.scale.setScalar(scale);
    scene.add(g);
    collision.addBox(tx, 2.0, tz, 1.2 * scale, 4.2 * scale, 1.2 * scale, 'wood');
  }
  for (const [sx, sz, sc] of [
    [-12, -26, 1.2], [12, -26, 1.25], [-10, 16, 1.05], [10, 18, 1.1],
    [-33, 4, 1.3], [32, -4, 1.2], [-14, -6, 1.0], [38, -46, 1.15], [-40, 26, 1.1]
  ]) addSakuraTree(sx, sz, sc);

  function addBambooCluster(cx, cz, count = 12, radius = 4.2) {
    const g = new THREE.Group();
    for (let i = 0; i < count; i++) {
      const ang = (i / count) * Math.PI * 2 + cx * 0.3;
      const r = 0.6 + ((i * 1.37) % 1) * radius;
      const bx = cx + Math.cos(ang) * r;
      const bz = cz + Math.sin(ang) * r;
      const h = 11 + ((i * 3.1) % 5);
      const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.15, h, 6), matBamboo);
      stalk.position.set(bx, h * 0.5, bz);
      g.add(stalk);
      if (i % 2 === 0) {
        const leaf = new THREE.Mesh(new THREE.DodecahedronGeometry(1.5, 0), matBambooLeaf);
        leaf.position.set(bx, h - 1.0, bz);
        leaf.scale.set(1.4, 0.48, 1.4);
        g.add(leaf);
      }
    }
    scene.add(g);
    collision.addBox(cx, 3.0, cz, radius * 1.15, 6.0, radius * 1.15, 'wood');
  }
  for (const [bx, bz, c, r] of [
    [-14, 42, 12, 4.5], [14, 42, 12, 4.5], [-38, 44, 12, 4.5], [32, 36, 12, 4.8],
    [42, 16, 12, 4.8], [44, -8, 12, 4.5], [-44, -10, 12, 4.8], [-42, -36, 12, 4.8], [-64, 18, 12, 5.0]
  ]) addBambooCluster(bx, bz, c, r);

  // Mount Fuji Silhouette
  const fujiBase = new THREE.Mesh(new THREE.ConeGeometry(110, 76, 24), new THREE.MeshStandardMaterial({ color: 0x3b3d63, roughness: 0.95 }));
  fujiBase.position.set(0, 36, -190);
  const fujiSnow = new THREE.Mesh(new THREE.ConeGeometry(40, 28, 24), new THREE.MeshStandardMaterial({ color: 0xffebe6, roughness: 0.85 }));
  fujiSnow.position.set(0, 62, -190);
  scene.add(fujiBase, fujiSnow);

  particles.initAmbient('petals', collision.bounds);

  // ---- STRATEGIC PICKUPS ----
  const pickupDefs = [
    { type: 'health', pos: new THREE.Vector3(-23.0, 0.9, -16.0), label: 'TEA HOUSE HERBS (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(-51.5, 0.9, 32.0),  label: 'HERMITAGE TONIC (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(48.0, 0.9, -39.0),  label: 'DOJO SALVE (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(0, 1.1, -34.0),     label: 'SHRINE ELIXIR (+35 HP)' },
    { type: 'ammo',   pos: new THREE.Vector3(23.0, 0.9, -16.0),  label: 'ARROW & SHURIKEN QUIVER' },
    { type: 'ammo',   pos: new THREE.Vector3(-24.0, 0.9, 24.0),  label: 'POWDER & STARS' }
  ];
  for (const pd of pickupDefs) {
    const mesh = createPickupMesh(pd.type);
    mesh.position.copy(pd.pos);
    scene.add(mesh);
    pickups.push({ ...pd, mesh, collected: false });
  }

  // ---- 25 ENEMIES (Courtyard, Walk-through Houses, Zen Garden, Koi Bridge, Hermitage, Dojo Compound, Shrine, Boss) ----
  const enemySpawns = [
    { type: 'ninja', pos: new THREE.Vector3(-8, 0, 32) },
    { type: 'ninja', pos: new THREE.Vector3(8, 0, 30) },
    { type: 'ronin', pos: new THREE.Vector3(0, 0, 18) },
    { type: 'ninja', pos: new THREE.Vector3(-12, 0, 12) },
    { type: 'ronin', pos: new THREE.Vector3(-23, 0.25, 24) }, // Inside south-west house
    { type: 'ninja', pos: new THREE.Vector3(-36, 0, 28) },
    { type: 'ronin', pos: new THREE.Vector3(-50, 0.22, 32) }, // Inside Bamboo Hermitage
    { type: 'ninja', pos: new THREE.Vector3(-25, 0, 4) },
    { type: 'ronin', pos: new THREE.Vector3(16, 0.42, 4) },    // On Koi Bridge
    { type: 'ninja', pos: new THREE.Vector3(16, 0, 16) },
    { type: 'ronin', pos: new THREE.Vector3(0, 0, -4) },
    { type: 'ninja', pos: new THREE.Vector3(-12, 0, -10) },
    { type: 'ronin', pos: new THREE.Vector3(-22, 0.25, -16) }, // Inside West Tea House
    { type: 'ninja', pos: new THREE.Vector3(14, 0, -10) },
    { type: 'ronin', pos: new THREE.Vector3(22, 0.25, -16) },  // Inside East Tea House
    { type: 'ninja', pos: new THREE.Vector3(26, 0, -34) },
    { type: 'ronin', pos: new THREE.Vector3(39, 0, -38) },     // Dojo courtyard
    { type: 'ninja', pos: new THREE.Vector3(41, 0, -46) },
    { type: 'ronin', pos: new THREE.Vector3(48, 0.28, -39) },  // Inside Dojo Hall
    { type: 'ninja', pos: new THREE.Vector3(49, 0.28, -35) },  // Inside Dojo Hall
    { type: 'ronin', pos: new THREE.Vector3(-8, 0, -24) },
    { type: 'ninja', pos: new THREE.Vector3(8, 0, -24) },
    { type: 'ronin', pos: new THREE.Vector3(-3, 0.36, -33) },  // Inside Grand Shrine
    { type: 'ninja', pos: new THREE.Vector3(3, 0.36, -33) },   // Inside Grand Shrine
    { type: 'boss_japan', pos: new THREE.Vector3(0, 0, -23), isBossWave: true }
  ];

  const enterableBuildings = [
    { name: 'Shinto Shrine Hall', inside: new THREE.Vector3(0, 0.36, -33.5), outside: new THREE.Vector3(0, 0, -26.5) },
    { name: 'West Tea House', inside: new THREE.Vector3(-23, 0.25, -16), outside: new THREE.Vector3(-16, 0, -16) },
    { name: 'Dojo Hall', inside: new THREE.Vector3(48, 0.28, -39), outside: new THREE.Vector3(40, 0, -39) },
    { name: 'Bamboo Hermitage', inside: new THREE.Vector3(-51.5, 0.22, 32), outside: new THREE.Vector3(-45.5, 0, 32) }
  ];

  return { enemySpawns, pickups, animated, disposables, enterableBuildings };
}
