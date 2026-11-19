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
import { createPickupMesh } from './level1_west.js';

export const LEVEL2_META = {
  id: 'japan',
  index: 1,
  themeClass: 'theme-japan',
  act: 'ACT II • 1603',
  title: 'KYOTO MIST',
  subtitle: 'Blossom & Steel',
  heroName: 'KENSHIN THE SAMURAI',
  objective: 'Purge the Shrine of Ninjas & Rōnin, Defeat Lord Kurogane',
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
  spawnPos: new THREE.Vector3(0, 0, 46),
  spawnYaw: 0,
  cameraPreview: { center: new THREE.Vector3(0, 5, -4), radius: 38, height: 14, speed: 0.13 }
};

export function buildLevel2(scene, collision, particles) {
  const disposables = [];
  const animated = [];
  const pickups = [];

  collision.bounds = { minX: -54, maxX: 54, minZ: -54, maxZ: 54 };

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

  scene.fog = new THREE.FogExp2(0x7c5a6e, 0.0092);

  const hemi = new THREE.HemisphereLight(0xffd0d6, 0x2d3b2c, 0.9);
  scene.add(hemi);

  const sunLight = new THREE.DirectionalLight(0xffcfb8, 2.35);
  sunLight.position.copy(sunDir).multiplyScalar(95);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(2048, 2048);
  sunLight.shadow.camera.left = -65;
  sunLight.shadow.camera.right = 65;
  sunLight.shadow.camera.top = 65;
  sunLight.shadow.camera.bottom = -65;
  sunLight.shadow.near = 10;
  sunLight.shadow.far = 210;
  sunLight.shadow.bias = -0.0005;
  scene.add(sunLight);

  // Soft cool indigo moonlight rim from opposite horizon
  const rimLight = new THREE.DirectionalLight(0x7996e8, 0.55);
  rimLight.position.set(50, 26, 55);
  scene.add(rimLight);

  // 2. Mossy Shrine Grounds & Flagstone Avenue
  const mossTex = getGroundTexture('japan_moss', 26, 26);
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(340, 340),
    new THREE.MeshStandardMaterial({
      map: mossTex.map,
      bumpMap: mossTex.bumpMap,
      bumpScale: 0.22,
      roughness: 0.92
    })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // Central stone shrine walkway
  const cobbleTex = getGroundTexture('cobble', 3, 22);
  const walkway = new THREE.Mesh(
    new THREE.PlaneGeometry(6.8, 92),
    new THREE.MeshStandardMaterial({ map: cobbleTex.map, bumpMap: cobbleTex.bumpMap, bumpScale: 0.2, roughness: 0.85 })
  );
  walkway.rotation.x = -Math.PI / 2;
  walkway.position.set(0, 0.04, 2);
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
  const matShoji = new THREE.MeshStandardMaterial({ map: shojiTex, emissive: 0xffb35c, emissiveIntensity: 0.52, roughness: 0.55 });
  const matLanternGlow = new THREE.MeshStandardMaterial({ color: 0xffe4a8, emissive: 0xff9436, emissiveIntensity: 1.9, roughness: 0.2 });
  const matGold = new THREE.MeshStandardMaterial({ color: 0xe6b647, metalness: 0.85, roughness: 0.28 });
  const matBamboo = new THREE.MeshStandardMaterial({ color: 0x4b873c, roughness: 0.45 });
  const matBambooLeaf = new THREE.MeshStandardMaterial({ color: 0x3b6e32, roughness: 0.8 });
  const matSakura = new THREE.MeshStandardMaterial({ color: 0xffb3cb, emissive: 0x5c1a30, emissiveIntensity: 0.22, roughness: 0.85 });
  const matSakuraLight = new THREE.MeshStandardMaterial({ color: 0xffd6e4, emissive: 0x6b243b, emissiveIntensity: 0.25, roughness: 0.85 });
  const matBanner = new THREE.MeshStandardMaterial({ map: bannerTex, side: THREE.DoubleSide, roughness: 0.7 });

  // ---- ICONIC VERMILION TORII GATES ----
  function addToriiGate(x, z, scale = 1, rotY = 0) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rotY;
    g.scale.setScalar(scale);

    // Stone pillar bases
    for (const px of [-3.2, 3.2]) {
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.55, 1.1, 10), matStone);
      base.position.set(px, 0.55, 0);
      base.castShadow = true;
      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.38, 6.8, 12), matVermilion);
      col.position.set(px, 4.0, 0);
      col.castShadow = true;
      g.add(base, col);
    }
    // Lower tie beam (Nuki)
    const nuki = new THREE.Mesh(new THREE.BoxGeometry(8.6, 0.42, 0.44), matVermilion);
    nuki.position.set(0, 5.9, 0);
    nuki.castShadow = true;
    // Upper lintel (Kasagi) + black curved cap
    const kasagi = new THREE.Mesh(new THREE.BoxGeometry(9.8, 0.54, 0.68), matVermilion);
    kasagi.position.set(0, 7.25, 0);
    kasagi.castShadow = true;
    const cap = new THREE.Mesh(new THREE.BoxGeometry(10.3, 0.34, 0.86), matRoof);
    cap.position.set(0, 7.62, 0);
    // Center gold plaque
    const plaque = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.15, 0.26), matDarkWood);
    plaque.position.set(0, 6.55, 0);
    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.98, 1.24, 0.16), matGold);
    frame.position.set(0, 6.55, 0);

    g.add(nuki, kasagi, cap, plaque, frame);
    scene.add(g);

    // Pillar collisions only so player runs right through the gate!
    const cos = Math.cos(rotY), sin = Math.sin(rotY);
    for (const px of [-3.2 * scale, 3.2 * scale]) {
      const wx = x + px * cos;
      const wz = z - px * sin;
      collision.addBox(wx, 3.5, wz, 1.1 * scale, 7.5 * scale, 1.1 * scale, 'wood');
    }
  }

  addToriiGate(0, 34, 1.15);
  addToriiGate(0, 21, 1.0);
  addToriiGate(0, -14, 1.1);

  // ---- SHIMMERING KOI POND & ARCHED VERMILION BRIDGE (Center-East) ----
  const pond = createWaterMesh(24, 15, {
    deepColor: 0x103c45,
    shallowColor: 0x267578,
    foamColor: 0xffd9e6,
    sunColor: 0xffd0b5,
    sunDir,
    opacity: 0.9,
    waveScale: 0.05
  });
  pond.mesh.position.set(16, 0.08, 4);
  scene.add(pond.mesh);
  animated.push((t) => { pond.uniforms.uTime.value = t; });

  // Pond stone rim & water bounds (except bridge corridor)
  const pondRocks = [
    [6, -3], [11, -3.5], [18, -3.5], [26, -3], [28, 3], [27, 10],
    [22, 11.5], [12, 11.5], [6, 10], [4.5, 4]
  ];
  for (const [rx, rz] of pondRocks) {
    const r = new THREE.Mesh(new THREE.DodecahedronGeometry(1.1 + ((rx * 7) % 1.0), 1), matStone);
    r.position.set(rx, 0.45, rz);
    r.scale.set(1.3, 0.72, 1.1);
    r.castShadow = true;
    scene.add(r);
  }
  // Animated glowing Koi fish swimming in the pond!
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

  // Arched Red Wooden Bridge over Koi Pond
  const bridgeGrp = new THREE.Group();
  bridgeGrp.position.set(16, 0, 4);
  const deck = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.35, 16), matDarkWood);
  deck.position.y = 0.75;
  deck.receiveShadow = true;
  deck.castShadow = true;
  bridgeGrp.add(deck);
  for (const bx of [-2.0, 2.0]) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.16, 16), matVermilion);
    rail.position.set(bx, 1.85, 0);
    bridgeGrp.add(rail);
    for (let bz = -7; bz <= 7; bz += 3.5) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.24, 1.35, 0.24), matVermilion);
      post.position.set(bx, 1.35, bz);
      const finial = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 8), matGold);
      finial.position.set(bx, 2.08, bz);
      bridgeGrp.add(post, finial);
    }
  }
  scene.add(bridgeGrp);
  collision.addWalkable(16, 4, 4.4, 16.5, 0.92);

  // ---- ZEN ROCK GARDEN (West Courtyard) ----
  const zenX = -19, zenZ = 4, zenW = 18, zenD = 16;
  const zenBed = new THREE.Mesh(
    new THREE.BoxGeometry(zenW, 0.26, zenD),
    new THREE.MeshStandardMaterial({ map: zenSand.map, bumpMap: zenSand.bumpMap, bumpScale: 0.24, roughness: 0.95 })
  );
  zenBed.position.set(zenX, 0.13, zenZ);
  zenBed.receiveShadow = true;
  scene.add(zenBed);

  // Cedar framing around Zen garden
  for (const [fx, fz, fw, fd] of [
    [zenX, zenZ - zenD / 2, zenW + 0.5, 0.45],
    [zenX, zenZ + zenD / 2, zenW + 0.5, 0.45],
    [zenX - zenW / 2, zenZ, 0.45, zenD],
    [zenX + zenW / 2, zenZ, 0.45, zenD]
  ]) {
    const curb = new THREE.Mesh(new THREE.BoxGeometry(fw, 0.45, fd), matDarkWood);
    curb.position.set(fx, 0.22, fz);
    scene.add(curb);
  }

  // Sculptural Zen boulders (also great tactical cover!)
  const zenStones = [
    [-22, 2, 1.7], [-15, 7, 1.4], [-20, 8, 1.15], [-16, -1, 1.55]
  ];
  for (const [sx, sz, sr] of zenStones) {
    const st = new THREE.Mesh(new THREE.DodecahedronGeometry(sr, 1), matStone);
    st.position.set(sx, sr * 0.65, sz);
    st.scale.set(1.25, 0.95, 1.0);
    st.castShadow = true;
    st.receiveShadow = true;
    scene.add(st);
    collision.addBox(sx, sr * 0.6, sz, sr * 2.1, sr * 1.6, sr * 1.8, 'stone');
  }

  // ---- TRADITIONAL JAPANESE HOUSES / TEA PAVILIONS & GRAND SHINTO TEMPLE ----
  function buildJapaneseBuilding(opts) {
    const { x, z, w, h, d, rotY = 0, isTemple = false } = opts;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rotY;

    // Stone plinth foundation
    const plinthH = isTemple ? 1.4 : 0.7;
    const plinth = new THREE.Mesh(new THREE.BoxGeometry(w + 2.2, plinthH, d + 2.2), matStone);
    plinth.position.y = plinthH * 0.5;
    plinth.receiveShadow = true;
    plinth.castShadow = true;
    g.add(plinth);

    // Engawa wooden veranda deck
    const veranda = new THREE.Mesh(new THREE.BoxGeometry(w + 1.6, 0.22, d + 1.6), matDarkWood);
    veranda.position.y = plinthH + 0.11;
    veranda.receiveShadow = true;
    g.add(veranda);

    // Main Shoji screen wall core
    const wallY = plinthH + 0.22 + h * 0.5;
    const walls = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), matShoji);
    walls.position.y = wallY;
    walls.castShadow = true;
    walls.receiveShadow = true;
    g.add(walls);

    // Vermilion or Dark Cedar Corner Columns
    const pillarMat = isTemple ? matVermilion : matDarkWood;
    for (const px of [-w * 0.52, 0, w * 0.52]) {
      for (const pz of [-d * 0.52, d * 0.52]) {
        const p = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.25, h + 0.3, 10), pillarMat);
        p.position.set(px, wallY, pz);
        p.castShadow = true;
        g.add(p);
      }
    }

    // Sweeping Curved Kawara Tiled Roof (tiered for Grand Shinto Temple!)
    const roofBaseY = plinthH + 0.22 + h;
    const roof1 = new THREE.Mesh(new THREE.ConeGeometry(Math.max(w, d) * 0.92, isTemple ? 3.2 : 2.6, 4), matRoof);
    roof1.rotation.y = Math.PI / 4;
    roof1.scale.set(w / Math.max(w, d) * 1.15, 1, d / Math.max(w, d) * 1.15);
    roof1.position.y = roofBaseY + (isTemple ? 1.4 : 1.1);
    roof1.castShadow = true;
    g.add(roof1);

    // Upturned Gold Ridge Ornament
    const ridge = new THREE.Mesh(new THREE.BoxGeometry(w * 0.72, 0.36, 0.42), matGold);
    ridge.position.y = roofBaseY + (isTemple ? 2.85 : 2.35);
    g.add(ridge);

    if (isTemple) {
      // Second pagoda tier!
      const tier2 = new THREE.Mesh(new THREE.BoxGeometry(w * 0.56, 2.8, d * 0.56), matVermilion);
      tier2.position.y = roofBaseY + 3.4;
      tier2.castShadow = true;
      const roof2 = new THREE.Mesh(new THREE.ConeGeometry(Math.max(w, d) * 0.62, 3.0, 4), matRoof);
      roof2.rotation.y = Math.PI / 4;
      roof2.position.y = roofBaseY + 5.9;
      roof2.castShadow = true;
      const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.18, 2.4, 8), matGold);
      spire.position.y = roofBaseY + 8.3;
      g.add(tier2, roof2, spire);

      // Hanging Japanese Clan Banners flanking the Temple entrance
      for (const bx of [-w * 0.32, w * 0.32]) {
        const ban = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 3.4), matBanner);
        ban.position.set(bx, wallY + 0.2, d * 0.5 + 0.55);
        g.add(ban);
      }
    }

    // Warm paper lantern glow in front
    const lan = new THREE.Mesh(new THREE.SphereGeometry(0.32, 10, 8), matLanternGlow);
    lan.scale.set(0.85, 1.3, 0.85);
    lan.position.set(0, roofBaseY - 0.5, d * 0.5 + 0.9);
    g.add(lan);
    const pt = new THREE.PointLight(0xffa042, isTemple ? 11 : 7, 20, 1.6);
    pt.position.set(0, roofBaseY - 0.8, d * 0.5 + 1.2);
    g.add(pt);

    scene.add(g);

    const cos = Math.abs(Math.cos(rotY));
    const colW = (cos > 0.5 ? w : d) + 1.8;
    const colD = (cos > 0.5 ? d : w) + 1.8;
    collision.addBox(x, (plinthH + h) * 0.5, z, colW, plinthH + h + 2, colD, 'wood');
  }

  // Grand Shinto Temple at North Peak of the Shrine
  buildJapaneseBuilding({ x: 0, z: -34, w: 16, h: 5.4, d: 11, rotY: 0, isTemple: true });

  // Traditional Japanese Houses / Tea Pavilions framing the Courtyard
  buildJapaneseBuilding({ x: -24, z: -18, w: 11, h: 4.0, d: 8.5, rotY: Math.PI / 3 });
  buildJapaneseBuilding({ x: 24, z: -17, w: 11, h: 4.0, d: 8.5, rotY: -Math.PI / 3 });
  buildJapaneseBuilding({ x: -28, z: 24, w: 10.5, h: 3.8, d: 8, rotY: Math.PI / 2 });

  // ---- STONE TŌRŌ LANTERNS LINING THE WALKWAY ----
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
  for (const lz of [28, 14, 0, -10, -22]) {
    addStoneLantern(-4.5, lz);
    addStoneLantern(4.5, lz);
  }

  // ---- BLOOMING SAKURA CHERRY BLOSSOM TREES ----
  function addSakuraTree(tx, tz, scale = 1) {
    const g = new THREE.Group();
    g.position.set(tx, 0, tz);
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.56, 4.4, 8), matDarkWood);
    trunk.position.y = 2.2;
    trunk.rotation.z = 0.12;
    trunk.castShadow = true;
    g.add(trunk);

    const puffs = [
      [0, 5.2, 0, 2.7, matSakura],
      [-1.9, 4.5, 0.8, 2.1, matSakuraLight],
      [1.8, 4.7, -0.7, 2.2, matSakura],
      [0.4, 6.2, 0.5, 1.9, matSakuraLight],
      [-0.9, 4.3, -1.6, 1.85, matSakura]
    ];
    for (const [px, py, pz, r, m] of puffs) {
      const c = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 1), m);
      c.position.set(px, py, pz);
      c.scale.set(1.25, 0.72, 1.15);
      c.castShadow = true;
      g.add(c);
    }
    g.scale.setScalar(scale);
    scene.add(g);
    collision.addBox(tx, 2.0, tz, 1.2 * scale, 4.2 * scale, 1.2 * scale, 'wood');
  }

  const sakuraSpots = [
    [-12, -26, 1.2], [12, -26, 1.25], [-10, 16, 1.05], [10, 18, 1.1],
    [-31, 4, 1.3], [32, -4, 1.2], [-14, -6, 1.0], [30, 16, 1.15]
  ];
  for (const [sx, sz, sc] of sakuraSpots) addSakuraTree(sx, sz, sc);

  // ---- TOWERING BAMBOO FOREST GROVES ----
  function addBambooCluster(cx, cz, count = 12, radius = 4.5) {
    const g = new THREE.Group();
    for (let i = 0; i < count; i++) {
      const ang = (i / count) * Math.PI * 2 + (cx * 0.3);
      const r = 0.6 + ((i * 1.37) % 1) * radius;
      const bx = cx + Math.cos(ang) * r;
      const bz = cz + Math.sin(ang) * r;
      const h = 11 + ((i * 3.1) % 6);
      const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.15, h, 6), matBamboo);
      stalk.position.set(bx, h * 0.5, bz);
      stalk.rotation.z = ((i % 3) - 1) * 0.04;
      stalk.castShadow = true;
      g.add(stalk);

      // High feathery bamboo canopy puff
      if (i % 2 === 0) {
        const leaf = new THREE.Mesh(new THREE.DodecahedronGeometry(1.5, 0), matBambooLeaf);
        leaf.position.set(bx, h - 1.0, bz);
        leaf.scale.set(1.4, 0.48, 1.4);
        g.add(leaf);
      }
    }
    scene.add(g);
    collision.addBox(cx, 3.0, cz, radius * 1.1, 6.0, radius * 1.1, 'wood');
  }

  // Dense bamboo grove corridor framing Southern entrance & Eastern/Western edges
  const bambooGroves = [
    [-14, 38, 14, 5], [14, 38, 14, 5], [-26, 42, 12, 5.5], [26, 36, 14, 5.5],
    [36, 26, 14, 5.5], [38, 6, 14, 5.5], [-40, -6, 14, 5.5], [38, -26, 14, 5.5],
    [-38, -32, 14, 5.5], [20, 26, 10, 3.6]
  ];
  for (const [bx, bz, c, r] of bambooGroves) addBambooCluster(bx, bz, c, r);

  // ---- MAJESTIC DISTANT MOUNT FUJI SILHOUETTE ON HORIZON ----
  const fujiGroup = new THREE.Group();
  const fujiBase = new THREE.Mesh(
    new THREE.ConeGeometry(92, 68, 24),
    new THREE.MeshStandardMaterial({ color: 0x3b3d63, roughness: 0.95 })
  );
  fujiBase.position.set(0, 32, -165);
  const fujiSnow = new THREE.Mesh(
    new THREE.ConeGeometry(34, 25, 24),
    new THREE.MeshStandardMaterial({ color: 0xffebe6, emissive: 0x3b222a, emissiveIntensity: 0.2, roughness: 0.85 })
  );
  fujiSnow.position.set(0, 54, -165);
  fujiGroup.add(fujiBase, fujiSnow);
  scene.add(fujiGroup);

  // Surrounding misty hills
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    if (Math.abs(Math.sin(a) + 1) < 0.2) continue; // Keep Mount Fuji unobstructed
    const hill = new THREE.Mesh(
      new THREE.ConeGeometry(46 + (i % 3) * 14, 28 + (i % 4) * 8, 9),
      new THREE.MeshStandardMaterial({ color: 0x2f3b3c, roughness: 0.95 })
    );
    hill.position.set(Math.cos(a) * 138, 12, Math.sin(a) * 138);
    scene.add(hill);
  }

  // ---- FALLING SAKURA PETALS ----
  particles.initAmbient('sakura', collision.bounds);

  // ---- PICKUPS ----
  const pickupDefs = [
    { type: 'health', pos: new THREE.Vector3(-12, 0.8, 26), label: 'MATCHA TEA ELIXIR (+35 HP)' },
    { type: 'ammo',   pos: new THREE.Vector3(16, 1.5, 4),   label: 'ARROWS & SHURIKEN POUCH' },
    { type: 'health', pos: new THREE.Vector3(-18, 0.8, 4),  label: 'ZEN SANCTUARY HERBS (+35 HP)' },
    { type: 'ammo',   pos: new THREE.Vector3(11, 0.8, -14), label: 'POWDER & QUIVER CACHE' },
    { type: 'health', pos: new THREE.Vector3(-11, 0.8, -20), label: 'SHRINE BLESSING (+35 HP)' }
  ];
  for (const pd of pickupDefs) {
    const mesh = createPickupMesh(pd.type);
    mesh.position.copy(pd.pos);
    scene.add(mesh);
    pickups.push({ ...pd, mesh, collected: false });
  }

  // ---- ENEMIES (Shadow Ninjas, Rōnin Samurai & Boss Lord Kurogane) ----
  const enemySpawns = [
    { type: 'ninja', pos: new THREE.Vector3(-8, 0, 26) },
    { type: 'ninja', pos: new THREE.Vector3(9, 0, 24) },
    { type: 'ronin', pos: new THREE.Vector3(-15, 0, 8) },
    { type: 'ninja', pos: new THREE.Vector3(16, 0.95, 4) },
    { type: 'ronin', pos: new THREE.Vector3(4, 0, 6) },
    { type: 'ninja', pos: new THREE.Vector3(-17, 0, -4) },
    { type: 'ronin', pos: new THREE.Vector3(12, 0, -10) },
    { type: 'ninja', pos: new THREE.Vector3(-9, 0, -18) },
    { type: 'ronin', pos: new THREE.Vector3(8, 0, -21) },
    { type: 'ninja', pos: new THREE.Vector3(0, 0, -23) },
    { type: 'boss_japan', pos: new THREE.Vector3(0, 0, -24), isBossWave: true }
  ];

  return { enemySpawns, pickups, animated, disposables };
}
