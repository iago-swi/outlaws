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
  buildLadder,
  buildRaisedHide,
  buildCrawlDen,
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

  // Full pond water collider (bridges/decks above water automatically allow crossing!)
  collision.addBox(16, 0.8, 4, 21.6, 1.6, 13.5, 'water');

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

  // True Arched Vermilion Bridge (9 smooth stepped deck planks rising gently <= 0.25m per step to 1.15m crest!)
  const archSegs = 9;
  const bridgeLen = 16.4;
  const segLen = bridgeLen / archSegs;
  for (let i = 0; i < archSegs; i++) {
    const t = (i + 0.5) / archSegs; // 0..1
    const archY = 0.22 + Math.sin(t * Math.PI) * 0.94;
    const segZ = 4 - bridgeLen * 0.5 + (i + 0.5) * segLen;
    const plank = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.26, segLen + 0.14), matDarkWood);
    plank.position.set(16, archY - 0.13, segZ);
    plank.receiveShadow = true;
    plank.castShadow = true;
    scene.add(plank);
    collision.addWalkable(16, segZ, 4.7, segLen + 0.35, archY);
    // Vermilion arched side railings & posts
    for (const bx of [13.8, 18.2]) {
      addSolidBox(scene, collision, bx, archY + 0.58, segZ, 0.22, 1.16, segLen + 0.05, matVermilion, 'wood');
      if (i % 2 === 0) {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.3, 1.35, 0.3), matVermilion);
        post.position.set(bx, archY + 0.68, segZ);
        const cap = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), matGold);
        cap.position.set(bx, archY + 1.42, segZ);
        scene.add(post, cap);
      }
    }
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

  // ---- 5. ENTERABLE TWO-STOREY FIVE-TIER PAGODA (Ground floor + interior ladder to 2nd storey with window slits!) ----
  const pagoda = buildHollowRoom(scene, collision, {
    cx: -26, cz: -38, w: 10.2, d: 10.2, h: 4.1, floorY: 0.3,
    wallMat: matVermilion, floorMat: matTatami, roofMat: matRoof, roofStyle: 'none',
    south: [{ type: 'door', offset: 0, width: 2.6, height: 3.0 }],
    east: [{ type: 'door', offset: 0, width: 2.4, height: 2.9 }],
    west: [{ type: 'window', offset: 0, width: 2.0 }],
    stepMat: matStone,
    interiorLight: { color: 0xffbe6b, intensity: 2.0, distance: 16 }
  });
  const pag2Y = pagoda.roofY + 0.24; // 4.64m
  // Ground-floor eave overhang + 2nd-storey floor slabs leaving ladder hatch open on SE side (-23.8, -36.0)
  const pagEave1 = new THREE.Mesh(new THREE.ConeGeometry(9.6, 1.35, 4), matRoof);
  pagEave1.rotation.y = Math.PI / 4;
  pagEave1.position.set(-26, pag2Y + 0.35, -38);
  scene.add(pagEave1);
  // 2nd storey walkable floor (north half + west half, leaving clean SE hatch for the interior ladder!)
  const pFlN = new THREE.Mesh(new THREE.BoxGeometry(9.8, 0.22, 6.2), matTatami);
  pFlN.position.set(-26, pag2Y - 0.11, -39.9);
  const pFlW = new THREE.Mesh(new THREE.BoxGeometry(6.0, 0.22, 3.6), matTatami);
  pFlW.position.set(-27.9, pag2Y - 0.11, -35.0);
  scene.add(pFlN, pFlW);
  collision.addWalkable(-26, -39.9, 9.8, 6.2, pag2Y, true);
  collision.addWalkable(-27.9, -35.0, 6.0, 3.6, pag2Y, true);
  // 2nd storey hollow room walls with archer/lookout window slits on all 4 sides!
  const pagoda2 = buildHollowRoom(scene, collision, {
    cx: -26, cz: -38, w: 8.6, d: 8.6, h: 3.2, floorY: pag2Y,
    wallMat: matVermilion, floorMat: matTatami, roofMat: matRoof, roofStyle: 'flat',
    north: [{ type: 'window', offset: 0, width: 1.4, sill: 0.9, top: 2.35 }],
    south: [{ type: 'window', offset: 0, width: 1.4, sill: 0.9, top: 2.35 }],
    west:  [{ type: 'window', offset: 0, width: 1.4, sill: 0.9, top: 2.35 }],
    east:  [{ type: 'window', offset: 0, width: 1.4, sill: 0.9, top: 2.35 }],
    interiorLight: { color: 0xffc878, intensity: 1.5, distance: 12 }
  });
  // Keep 2nd storey floor navIgnore so ground floor nav grid stays 100% open!
  for (const w of collision.walkables) {
    if (Math.abs(w.topY - pag2Y) < 0.05 && Math.abs((w.minX + w.maxX) * 0.5 + 26) < 6) w.navIgnore = true;
  }
  // Interior wooden ladder climbing from ground floor up through SE hatch into the 2nd storey!
  const pagodaLadder = buildLadder(scene, collision, {
    x: -23.6, z: -36.5, bottomY: pagoda.floorY, topY: pag2Y, normalX: 0, normalZ: 1, topExitDist: 0.72, mat: matDarkWood
  });
  // Three upper tapered pagoda tiers + curved eaves + golden sōrin spire above 2nd storey
  for (let tier = 0; tier < 3; tier++) {
    const tw = 7.4 - tier * 1.45;
    const th = 2.4 - tier * 0.2;
    const ty = pagoda2.roofY + 0.9 + tier * 2.85;
    const eave = new THREE.Mesh(new THREE.ConeGeometry(tw * 0.94, 1.4, 4), matRoof);
    eave.rotation.y = Math.PI / 4;
    eave.position.set(-26, ty + th * 0.48, -38);
    const body = new THREE.Mesh(new THREE.BoxGeometry(tw * 0.72, th, tw * 0.72), matVermilion);
    body.position.set(-26, ty, -38);
    scene.add(body, eave);
  }
  const pagSpire = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.16, 3.6, 8), matGold);
  pagSpire.position.set(-26, pagoda2.roofY + 10.6, -38);
  scene.add(pagSpire);
  // Pagoda interior: central shinbashira pillar rising through both storeys, incense altar & censer untouched!
  addSolidBox(scene, collision, -26, pagoda.floorY + 3.8, -38, 0.68, 7.6, 0.68, matDarkWood, 'wood');
  addSolidBox(scene, collision, -28.8, pagoda.floorY + 0.55, -40.8, 1.4, 1.1, 1.2, matDarkWood, 'wood');
  const censer = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.24, 0.45, 10), matGold);
  censer.position.set(-28.8, pagoda.floorY + 1.32, -40.8);
  scene.add(censer);

  // ---- 6. ENTERABLE KURA STOREHOUSE (Thick white plaster walls, dark roof, rice bales & sake casks!) ----
  const kura = buildHollowRoom(scene, collision, {
    cx: 22, cz: 24, w: 10.0, d: 9.0, h: 4.2, floorY: 0.26,
    wallMat: matPlaster, floorMat: matDarkWood, roofMat: matRoof, roofStyle: 'gable',
    west: [{ type: 'door', offset: 0, width: 2.5, height: 2.9 }],
    north: [{ type: 'window', offset: 0, width: 1.4, barred: true }],
    stepMat: matStone,
    interiorLight: { color: 0xffcf88, intensity: 1.5, distance: 13 }
  });
  // Heavy dark plaster wainscot band around exterior + rice bales, sake casks & chests inside
  const matStraw = new THREE.MeshStandardMaterial({ color: 0xd4b668, roughness: 0.94 });
  addSolidBox(scene, collision, 25.0, kura.floorY + 0.55, 21.2, 2.2, 1.1, 1.4, matStraw, 'wood');
  addSolidBox(scene, collision, 25.0, kura.floorY + 0.55, 26.8, 2.0, 1.1, 1.6, matDarkWood, 'wood');
  for (const cz of [23.2, 24.8]) {
    const cask = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.95, 10), matStraw);
    cask.position.set(25.2, kura.floorY + 0.48, cz);
    scene.add(cask);
    collision.addBox(25.2, kura.floorY + 0.48, cz, 0.95, 0.96, 0.95, 'wood');
  }

  // ---- 7. WALKABLE BELL TOWER (SHŌRŌ — Open pavilion with huge cast-bronze temple bell!) ----
  const btX = 37, btZ = 4;
  const btFloorY = 0.68;
  const btBase = new THREE.Mesh(new THREE.BoxGeometry(7.8, btFloorY, 7.8), matStone);
  btBase.position.set(btX, btFloorY * 0.5, btZ);
  btBase.receiveShadow = true;
  scene.add(btBase);
  collision.addWalkable(btX, btZ, 8.0, 8.0, btFloorY);
  // Two gentle stone steps on West & South sides (0.34m rise each <= STEP_MAX)
  for (const [sx, sz, sw, sd] of [[btX - 4.4, btZ, 1.1, 3.0], [btX, btZ + 4.4, 3.0, 1.1]]) {
    const st = new THREE.Mesh(new THREE.BoxGeometry(sw, 0.34, sd), matStone);
    st.position.set(sx, 0.17, sz);
    scene.add(st);
    collision.addWalkable(sx, sz, sw + 0.2, sd + 0.2, 0.34);
  }
  for (const [px, pz] of [[-3.1, -3.1], [3.1, -3.1], [-3.1, 3.1], [3.1, 3.1]]) {
    addSolidBox(scene, collision, btX + px, btFloorY + 2.4, btZ + pz, 0.45, 4.8, 0.45, matVermilion, 'wood');
  }
  const btRoof = new THREE.Mesh(new THREE.ConeGeometry(6.6, 2.8, 4), matRoof);
  btRoof.rotation.y = Math.PI / 4;
  btRoof.position.set(btX, btFloorY + 6.0, btZ);
  scene.add(btRoof);
  // Huge Cast-Bronze Temple Bell (Bonshō) suspended overhead + horizontal wooden striking log!
  const matBronzeBell = new THREE.MeshStandardMaterial({ color: 0x3b4d3e, metalness: 0.72, roughness: 0.38 });
  const bell = new THREE.Mesh(new THREE.CylinderGeometry(0.68, 0.96, 1.95, 16), matBronzeBell);
  bell.position.set(btX, btFloorY + 3.05, btZ);
  const bellCap = new THREE.Mesh(new THREE.SphereGeometry(0.68, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.5), matBronzeBell);
  bellCap.position.set(btX, btFloorY + 4.02, btZ);
  const striker = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 2.8, 8), matDarkWood);
  striker.rotation.z = Math.PI / 2;
  striker.position.set(btX - 2.1, btFloorY + 2.55, btZ);
  scene.add(bell, bellCap, striker);

  // ---- BYSTANDER CHARACTERS IN JAPAN (Solid, Peaceful, Never Fight!) ----
  // 1. Komuso (Wandering Flute Monks): woven reed basket hat covering whole head, black robe with white collar,
  //    gold stole (kesa) over one shoulder, white socks, bamboo shakuhachi flute held to mouth with both hands
  function addKomuso(kx, kz, rotY) {
    const g = new THREE.Group();
    g.position.set(kx, 0, kz);
    g.rotation.y = rotY;
    const blackRobe = new THREE.MeshStandardMaterial({ color: 0x16161a, roughness: 0.86 });
    const whiteCloth = new THREE.MeshStandardMaterial({ color: 0xf4f1e8, roughness: 0.82 });
    const reedHat = new THREE.MeshStandardMaterial({ color: 0xc9a865, roughness: 0.92 });
    const bambooFlute = new THREE.MeshStandardMaterial({ color: 0x9c7b3b, roughness: 0.55 });
    const skinM = new THREE.MeshStandardMaterial({ color: 0xe3b490, roughness: 0.74 });

    // White tabi socks & sandals
    for (const lx of [-0.13, 0.13]) {
      const sock = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.18, 0.24), whiteCloth);
      sock.position.set(lx, 0.09, 0.03);
      g.add(sock);
    }
    // Black kimono robe + wide sleeves + crisp white inner collar
    const robe = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.36, 1.38, 12), blackRobe);
    robe.position.y = 0.84;
    const collar = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.045, 6, 14), whiteCloth);
    collar.rotation.x = Math.PI / 2;
    collar.position.set(0, 1.5, 0.02);
    // Gold kesa stole draped diagonally over one shoulder
    const stole = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.92, 0.34), matGold);
    stole.position.set(0.12, 1.15, 0.02);
    stole.rotation.z = 0.28;
    // Woven deep reed basket hat (tengai) covering the ENTIRE head!
    const tengai = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.25, 0.44, 14), reedHat);
    tengai.position.set(0, 1.78, 0);
    const tengaiTop = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.5), reedHat);
    tengaiTop.position.set(0, 2.0, 0);
    // Both arms raised holding bamboo shakuhachi flute to mouth beneath basket hat
    const armL = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.56, 8), blackRobe);
    armL.position.set(-0.26, 1.32, 0.16);
    armL.rotation.set(-0.85, 0, -0.35);
    const armR = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.56, 8), blackRobe);
    armR.position.set(0.26, 1.32, 0.16);
    armR.rotation.set(-0.85, 0, 0.35);
    const handL = new THREE.Mesh(new THREE.SphereGeometry(0.055, 6, 6), skinM);
    handL.position.set(-0.04, 1.35, 0.34);
    const handR = new THREE.Mesh(new THREE.SphereGeometry(0.055, 6, 6), skinM);
    handR.position.set(0.04, 1.24, 0.38);
    const flute = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.024, 0.62, 8), bambooFlute);
    flute.position.set(0, 1.38, 0.31);
    flute.rotation.x = 0.52;
    g.add(robe, collar, stole, tengai, tengaiTop, armL, armR, handL, handR, flute);
    scene.add(g);
    collision.addBox(kx, 1.0, kz, 0.85, 2.0, 0.85, 'solid');
    animated.push((t) => { g.rotation.y = rotY + Math.sin(t * 1.1 + kx) * 0.08; });
  }
  addKomuso(-7.2, 31, 0.55);
  addKomuso(8.2, 17, -0.75);
  addKomuso(-8.4, -20, 0.65);

  // 2. Geisha carrying an oil-paper umbrella (wagasa) on the shoulder:
  //    white face, red lips, black swept-up hair with pins & flowers, narrow ankle kimono, wide obi bow in back
  function addGeisha(gx, gz, rotY, opts) {
    const g = new THREE.Group();
    g.position.set(gx, 0, gz);
    g.rotation.y = rotY;
    const whiteFace = new THREE.MeshStandardMaterial({ color: 0xfbf8f4, roughness: 0.65 });
    const redLip = new THREE.MeshStandardMaterial({ color: 0xc91828, roughness: 0.4 });
    const blackHair = new THREE.MeshStandardMaterial({ color: 0x121114, roughness: 0.45 });
    const kimonoMat = new THREE.MeshStandardMaterial({ color: opts.kimonoColor, roughness: 0.72 });
    const obiMat = new THREE.MeshStandardMaterial({ color: opts.obiColor, roughness: 0.6 });
    const umbrellaMat = new THREE.MeshStandardMaterial({ color: opts.umbrellaColor, roughness: 0.75, side: THREE.DoubleSide });
    const whiteCloth = new THREE.MeshStandardMaterial({ color: 0xf8f6f0, roughness: 0.78 });

    // Narrow floor-length kimono to the ankles + white tabi feet
    const skirt = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 1.4, 12), kimonoMat);
    skirt.position.y = 0.76;
    const collar = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.032, 6, 12), whiteCloth);
    collar.rotation.x = Math.PI / 2;
    collar.position.set(0, 1.46, 0.02);
    // Wide obi sash & large knotted drum bow (taiko musubi) at the back!
    const obi = new THREE.Mesh(new THREE.CylinderGeometry(0.225, 0.225, 0.34, 12), obiMat);
    obi.position.y = 1.02;
    const obiBow = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.3, 0.16), obiMat);
    obiBow.position.set(0, 1.05, -0.24);
    // Flowing kimono sleeves
    const sleeveL = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.52, 0.22), kimonoMat);
    sleeveL.position.set(-0.24, 1.18, 0.02);
    const sleeveR = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.52, 0.22), kimonoMat);
    sleeveR.position.set(0.24, 1.24, 0.08);
    sleeveR.rotation.x = -0.5;
    // White face, dark eyes & crisp red lips
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.175, 14, 12), whiteFace);
    head.position.set(0, 1.66, 0);
    const eyeM = new THREE.MeshBasicMaterial({ color: 0x161214 });
    const eL = new THREE.Mesh(new THREE.SphereGeometry(0.019, 6, 6), eyeM);
    eL.position.set(-0.058, 0.02, 0.16);
    const eR = eL.clone();
    eR.position.x = 0.058;
    const lips = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.02, 0.02), redLip);
    lips.position.set(0, -0.055, 0.168);
    head.add(eL, eR, lips);
    // Black swept-up shimada hair with gold pins & flowers (or white silk hood for all-white bridal geisha!)
    const bun = new THREE.Mesh(new THREE.SphereGeometry(0.185, 12, 10), blackHair);
    bun.scale.set(1.08, 0.92, 1.05);
    bun.position.set(0, 0.07, -0.04);
    const topKnot = new THREE.Mesh(new THREE.SphereGeometry(0.105, 10, 8), blackHair);
    topKnot.position.set(0, 0.22, -0.06);
    const pin = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.36, 6), matGold);
    pin.rotation.z = Math.PI / 2 - 0.2;
    pin.position.set(0, 0.2, -0.04);
    const flower = new THREE.Mesh(new THREE.SphereGeometry(0.045, 7, 7), opts.allWhite ? whiteCloth : matSakura);
    flower.position.set(0.13, 0.15, 0.06);
    head.add(bun, topKnot, pin, flower);
    if (opts.allWhite) {
      // Draped white silk watabōshi hood framing face and shoulders
      const hood = new THREE.Mesh(new THREE.SphereGeometry(0.245, 14, 12, 0, Math.PI * 2, 0, Math.PI * 0.62), whiteCloth);
      hood.position.set(0, 0.08, -0.03);
      const hoodBack = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.34, 0.14), whiteCloth);
      hoodBack.position.set(0, -0.05, -0.18);
      head.add(hood, hoodBack);
    }
    // Oil-paper umbrella (wagasa) resting gracefully over right shoulder!
    const wagasa = new THREE.Group();
    wagasa.position.set(0.24, 1.54, -0.04);
    wagasa.rotation.set(-0.42, 0, -0.28);
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 1.15, 6), matDarkWood);
    handle.position.y = 0.28;
    const canopy = new THREE.Mesh(new THREE.ConeGeometry(0.76, 0.26, 16, 1, true), umbrellaMat);
    canopy.position.y = 0.82;
    const finial = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.04, 0.09, 8), matDarkWood);
    finial.position.y = 0.96;
    wagasa.add(handle, canopy, finial);

    g.add(skirt, collar, obi, obiBow, sleeveL, sleeveR, head, wagasa);
    scene.add(g);
    collision.addBox(gx, 0.95, gz, 0.82, 1.9, 0.82, 'solid');
    animated.push((t) => { wagasa.rotation.y = Math.sin(t * 0.9 + gx) * 0.22; });
  }
  addGeisha(7.4, 33, -0.6, { kimonoColor: 0xb51e2c, obiColor: 0xe6b83e, umbrellaColor: 0xc92c24 });
  addGeisha(-8.6, 15, 0.7, { kimonoColor: 0x22417a, obiColor: 0xf4a8c0, umbrellaColor: 0xf4b6c8 });
  addGeisha(9.8, -18, -0.8, { kimonoColor: 0x1e6b52, obiColor: 0x702652, umbrellaColor: 0xdca438 });
  addGeisha(-10.2, -28, 0.5, { kimonoColor: 0xf7f5ef, obiColor: 0xf2eee2, umbrellaColor: 0xf8f6f0, allWhite: true });

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
    [-33, 4, 1.3], [30, -9, 1.15], [-14, -6, 1.0], [38, -46, 1.15], [-40, 26, 1.1]
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

  // ---- 6.4 RAISED TIMBER WATCH HIDE (2 jump blocks) & CROUCH-ONLY GARDEN DEN (1.25m door!) ----
  const japanHide = buildRaisedHide(scene, collision, {
    cx: -12, cz: 29, deckY: 2.2, w: 4.2, d: 4.2, openSide: 'south',
    wallMat: matDarkWood, floorMat: matTatami, postMat: matVermilion, jumpMat: matDarkWood
  });
  const japanDen = buildCrawlDen(scene, collision, {
    cx: 15, cz: -32, w: 5.2, d: 4.8, doorSide: 'south',
    wallMat: matStone, floorMat: matTatami, roofMat: matRoof
  });

  // ---- STRATEGIC PICKUPS ----
  const pickupDefs = [
    { type: 'health', pos: new THREE.Vector3(-23.0, 0.9, -16.0), label: 'TEA HOUSE HERBS (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(-51.5, 0.9, 32.0),  label: 'HERMITAGE TONIC (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(48.0, 0.9, -39.0),  label: 'DOJO SALVE (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(0, 1.1, -34.0),     label: 'SHRINE ELIXIR (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(-24.2, 1.0, -37.2), label: 'PAGODA INCENSE TONIC (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(21.0, 1.0, 24.0),   label: 'KURA SAKE ELIXIR (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(37.0, 1.4, 4.0),    label: 'BELL TOWER HERBS (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(japanDen.insidePos.x, japanDen.floorY + 0.55, japanDen.insidePos.z), label: 'HIDDEN DEN ELIXIR (+35 HP)', inDen: true },
    { type: 'ammo',   pos: new THREE.Vector3(23.0, 0.9, -16.0),  label: 'ARROW & SHURIKEN QUIVER' },
    { type: 'ammo',   pos: new THREE.Vector3(-24.0, 0.9, 24.0),  label: 'POWDER & STARS' }
  ];
  for (const pd of pickupDefs) {
    const mesh = createPickupMesh(pd.type);
    mesh.position.copy(pd.pos);
    scene.add(mesh);
    pickups.push({ ...pd, mesh, collected: false });
  }

  // ---- 28 ENEMIES (Courtyard, Houses, Pagoda, Kura, Bell Tower, Koi Bridge, Hermitage, Dojo, Shrine, Boss) ----
  const enemySpawns = [
    { type: 'ninja', pos: new THREE.Vector3(-8, 0, 32) },
    { type: 'ninja', pos: new THREE.Vector3(8, 0, 30) },
    { type: 'ronin', pos: new THREE.Vector3(0, 0, 18) },
    { type: 'ninja', pos: new THREE.Vector3(-12, 0, 12) },
    { type: 'ronin', pos: new THREE.Vector3(-23, 0.25, 24) }, // Inside south-west house
    { type: 'ronin', pos: new THREE.Vector3(21.2, 0.26, 24) }, // Inside Kura Storehouse
    { type: 'ninja', pos: new THREE.Vector3(-36, 0, 28) },
    { type: 'ronin', pos: new THREE.Vector3(-50, 0.22, 32) }, // Inside Bamboo Hermitage
    { type: 'ninja', pos: new THREE.Vector3(-25, 0, 4) },
    { type: 'ronin', pos: new THREE.Vector3(16, 1.16, 4) },    // On Arched Koi Bridge crest!
    { type: 'ninja', pos: new THREE.Vector3(36.2, 0.68, 5.2) }, // Inside Bell Tower pavilion
    { type: 'ninja', pos: new THREE.Vector3(16, 0, 16) },
    { type: 'ronin', pos: new THREE.Vector3(0, 0, -4) },
    { type: 'ninja', pos: new THREE.Vector3(-12, 0, -10) },
    { type: 'ronin', pos: new THREE.Vector3(-22, 0.25, -16) }, // Inside West Tea House
    { type: 'ninja', pos: new THREE.Vector3(14, 0, -10) },
    { type: 'ronin', pos: new THREE.Vector3(22, 0.25, -16) },  // Inside East Tea House
    { type: 'ronin', pos: new THREE.Vector3(-24.2, 0.3, -36.5) }, // Inside Pagoda Ground Floor!
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
    { name: 'Five-Tier Pagoda', inside: new THREE.Vector3(-24.2, 0.3, -37.2), outside: new THREE.Vector3(-26, 0, -31) },
    { name: 'Kura Storehouse', inside: new THREE.Vector3(21, 0.26, 24), outside: new THREE.Vector3(15, 0, 24) },
    { name: 'Bell Tower', inside: new THREE.Vector3(37, 0.68, 4), outside: new THREE.Vector3(31, 0, 4) },
    { name: 'West Tea House', inside: new THREE.Vector3(-23, 0.25, -16), outside: new THREE.Vector3(-16, 0, -16) },
    { name: 'Dojo Hall', inside: new THREE.Vector3(48, 0.28, -39), outside: new THREE.Vector3(40, 0, -39) },
    { name: 'Bamboo Hermitage', inside: new THREE.Vector3(-51.5, 0.22, 32), outside: new THREE.Vector3(-45.5, 0, 32) }
  ];

  const specialSpots = { raisedHide: japanHide, crawlDen: japanDen, pagodaLadder };
  return { enemySpawns, pickups, animated, disposables, enterableBuildings, specialSpots };
}
