import * as THREE from 'three';
import {
  getWoodPlanks,
  getGroundTexture,
  getStoneTexture,
  createSignTexture,
  createWantedPosterTexture
} from '../engine/textures.js';
import { createSkyDome } from '../engine/shaders.js';
import {
  buildHollowRoom,
  buildBarredWall,
  addSolidBox,
  addDesk,
  addBunk,
  addStove,
  addPiano
} from '../engine/buildings.js';

export const LEVEL1_META = {
  id: 'west',
  index: 0,
  themeClass: '',
  act: 'ACT I • 1884',
  title: 'RED GULCH',
  subtitle: 'Dust & Reckoning',
  heroName: 'MARSHAL ANDERSON',
  objective: 'Clear Red Gulch, the Jail & Boot Hill, and Defeat El Diablo',
  quote: '"They burned my homestead and took everything I loved. Today, Red Gulch learns that a marshal never buries his badge."',
  musicTheme: 'west',
  enemyIcon: '★',
  currency: '$',
  arsenalSummary: [
    ['1 • .45 Peacemaker', 'Reliable 6-shooter. RMB fans the hammer.'],
    ['2 • 10-Gauge Coach Gun', 'Devastating spread for saloon clearouts.'],
    ['3 • Henry .44 Scoped', 'Vintage brass telescope zoom (RMB).'],
    ['4 • Dynamite Sticks', 'Blasts outlaws out from behind cover.']
  ],
  spawnPos: new THREE.Vector3(0, 0, 52),
  spawnYaw: 0,
  cameraPreview: { center: new THREE.Vector3(0, 5, -6), radius: 34, height: 20, speed: 0.12 }
};

export function buildLevel1(scene, collision, particles) {
  const disposables = [];
  const animated = [];
  const pickups = [];

  collision.bounds = { minX: -82, maxX: 82, minZ: -84, maxZ: 76 };

  // 1. Blazing Sunset Sky Dome & Golden Hour Lighting
  const sunDir = new THREE.Vector3(0.35, 0.24, -0.9).normalize();
  const sky = createSkyDome({
    topColor: 0x261d42,
    midColor: 0xc95826,
    horizonColor: 0xffbf66,
    sunColor: 0xfff3c4,
    sunDirection: sunDir,
    cloudTint: 0xffaa63,
    cloudDensity: 0.42
  });
  scene.add(sky.mesh);
  animated.push((t) => { sky.uniforms.uTime.value = t; });

  scene.fog = new THREE.FogExp2(0xd9854a, 0.0068);

  const hemi = new THREE.HemisphereLight(0xffcb8c, 0x6b3a22, 0.88);
  scene.add(hemi);

  const sunLight = new THREE.DirectionalLight(0xffcf82, 2.5);
  sunLight.position.copy(sunDir).multiplyScalar(110);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(2048, 2048);
  sunLight.shadow.camera.left = -85;
  sunLight.shadow.camera.right = 85;
  sunLight.shadow.camera.top = 85;
  sunLight.shadow.camera.bottom = -85;
  sunLight.shadow.camera.near = 10;
  sunLight.shadow.camera.far = 250;
  sunLight.shadow.bias = -0.0005;
  scene.add(sunLight);

  const fillLight = new THREE.DirectionalLight(0x885c94, 0.45);
  fillLight.position.set(-40, 20, 60);
  scene.add(fillLight);

  // 2. Desert Ground
  const groundTex = getGroundTexture('desert', 34, 34);
  const groundMat = new THREE.MeshStandardMaterial({
    map: groundTex.map,
    bumpMap: groundTex.bumpMap,
    bumpScale: 0.24,
    roughness: 0.94,
    metalness: 0.02
  });
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(420, 420), groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // Shared materials
  const woodWest = getWoodPlanks('western', 2, 2);
  const woodSaloon = getWoodPlanks('saloon', 2, 2);
  const woodWeath = getWoodPlanks('weathered', 2, 2);
  const redRock = getStoneTexture('redrock', 3, 2);
  const stoneTex = getStoneTexture('castle', 2, 2);

  const matWood = new THREE.MeshStandardMaterial({ map: woodWest.map, bumpMap: woodWest.bumpMap, bumpScale: 0.1, roughness: 0.85 });
  const matSaloon = new THREE.MeshStandardMaterial({ map: woodSaloon.map, bumpMap: woodSaloon.bumpMap, bumpScale: 0.12, roughness: 0.8 });
  const matWeathered = new THREE.MeshStandardMaterial({ map: woodWeath.map, bumpMap: woodWeath.bumpMap, bumpScale: 0.1, roughness: 0.9 });
  const matDarkWood = new THREE.MeshStandardMaterial({ color: 0x3b2314, roughness: 0.88 });
  const matFloor = new THREE.MeshStandardMaterial({ color: 0x5c3c22, roughness: 0.9 });
  const matRedRock = new THREE.MeshStandardMaterial({ map: redRock.map, bumpMap: redRock.bumpMap, bumpScale: 0.3, roughness: 0.92 });
  const matStone = new THREE.MeshStandardMaterial({ map: stoneTex.map, bumpMap: stoneTex.bumpMap, bumpScale: 0.18, roughness: 0.88 });
  const matWindowGlow = new THREE.MeshStandardMaterial({ color: 0xffd27a, emissive: 0xff9a2e, emissiveIntensity: 1.2, roughness: 0.3 });
  const matHay = new THREE.MeshStandardMaterial({ color: 0xd1a94b, roughness: 0.95 });
  const matCactus = new THREE.MeshStandardMaterial({ color: 0x3f6b36, roughness: 0.82 });
  const matCanvas = new THREE.MeshStandardMaterial({ color: 0xeadbc0, roughness: 0.92, side: THREE.DoubleSide });
  const matMetal = new THREE.MeshStandardMaterial({ color: 0x2c2a2a, metalness: 0.72, roughness: 0.4 });
  const matGold = new THREE.MeshStandardMaterial({ color: 0xeeb934, metalness: 0.86, roughness: 0.24 });
  const wantedMat = new THREE.MeshStandardMaterial({ map: createWantedPosterTexture(), roughness: 0.85 });

  function addSign(x, y, z, w, h, rotY, text, sub = '', bg = '#2d1b10') {
    const tex = createSignTexture(text, { sub, bg, border: '#e8ad4a', fg: '#fff2d2' });
    const m = new THREE.Mesh(
      new THREE.BoxGeometry(w, h, 0.16),
      [matDarkWood, matDarkWood, matDarkWood, matDarkWood, new THREE.MeshStandardMaterial({ map: tex, roughness: 0.65 }), matDarkWood]
    );
    m.position.set(x, y, z);
    m.rotation.y = rotY;
    scene.add(m);
  }

  function addLantern(x, y, z) {
    const l = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.12, 0.34, 8), matWindowGlow);
    l.position.set(x, y, z);
    scene.add(l);
    const pt = new THREE.PointLight(0xffa947, 5.5, 15, 1.6);
    pt.position.set(x, y - 0.15, z);
    scene.add(pt);
    animated.push((t) => { pt.intensity = 5.0 + Math.sin(t * 7.2 + x) * 0.9; });
  }

  // ---- 1. ENTERABLE GRAND SALOON (North end of Main Street) ----
  const saloon = buildHollowRoom(scene, collision, {
    cx: 0, cz: -28, w: 16, d: 11, h: 4.8, floorY: 0.16,
    wallMat: matSaloon, floorMat: matFloor, roofMat: matDarkWood, roofStyle: 'parapet',
    south: [
      { type: 'window', offset: -5.0, width: 2.2 },
      { type: 'door', offset: 0, width: 2.8, height: 3.1 },
      { type: 'window', offset: 5.0, width: 2.2 }
    ],
    west: [{ type: 'window', offset: 0, width: 2.0 }],
    east: [{ type: 'window', offset: 0, width: 2.0 }],
    interiorLight: { color: 0xffb35c, intensity: 2.2, distance: 18 }
  });
  // Decorative second-story saloon false-front & balcony overhang
  const salUpper = new THREE.Mesh(new THREE.BoxGeometry(16.2, 3.6, 1.2), matSaloon);
  salUpper.position.set(0, 6.8, -23.0);
  salUpper.castShadow = true;
  scene.add(salUpper);
  addSign(0, 7.1, -22.25, 7.8, 2.1, 0, 'SALOON', 'WHISKEY • FARO • POKER', '#4a1812');
  addLantern(0, 4.1, -21.8);
  // Saloon interior: long bar counter, upright piano, card tables (keeping center aisle wide!)
  addSolidBox(scene, collision, -1.2, saloon.floorY + 0.58, -31.2, 8.2, 1.16, 1.0, matDarkWood, 'wood');
  addPiano(scene, collision, 5.8, saloon.floorY, -31.8, 0);
  addSolidBox(scene, collision, -4.8, saloon.floorY + 0.42, -26.2, 1.6, 0.84, 1.6, matWood, 'wood');
  addSolidBox(scene, collision, 4.8, saloon.floorY + 0.42, -26.2, 1.6, 0.84, 1.6, matWood, 'wood');

  // ---- 2. ENTERABLE PRISON ("JAIL") DIRECTLY NEXT TO THE SALOON ----
  // Marshal's office in front (south half) + 2 cells behind a solid wall of iron bars (north half)!
  const jail = buildHollowRoom(scene, collision, {
    cx: -15.5, cz: -27.5, w: 11, d: 10.5, h: 4.3, floorY: 0.16,
    wallMat: matStone, floorMat: matFloor, roofMat: matDarkWood, roofStyle: 'parapet',
    south: [
      { type: 'window', offset: -3.2, width: 1.8 },
      { type: 'door', offset: 0.6, width: 2.2, height: 2.9 }
    ],
    north: [
      { type: 'window', offset: -2.6, width: 1.5, barred: true },
      { type: 'window', offset: 2.6, width: 1.5, barred: true }
    ],
    interiorLight: { color: 0xffc478, intensity: 1.8, distance: 14 }
  });
  addSign(-15.5, 5.2, -22.1, 6.2, 1.75, 0, 'JAIL', 'RED GULCH MARSHAL', '#2a221c');
  addLantern(-14.9, 3.8, -21.6);
  // Solid iron-bar cell wall dividing front office (z > -28.2) from two back cells (z < -28.2)
  // Two open cell doors (>= 1.9m wide!) so player & A* enemies can enter both cells; bars stop bodies AND bullets!
  buildBarredWall(scene, collision, {
    axis: 'x',
    center: { x: -15.5, z: -28.2 },
    baseY: jail.floorY,
    length: 10.2,
    height: 4.1,
    doors: [
      { offset: -2.6, width: 1.95 },
      { offset: 2.6, width: 1.95 }
    ]
  });
  // Iron-bar divider between the two cells
  buildBarredWall(scene, collision, {
    axis: 'z',
    center: { x: -15.5, z: -30.4 },
    baseY: jail.floorY,
    length: 4.2,
    height: 4.1,
    doors: []
  });
  // Marshal's Office furniture: desk, chair, rifle rack, wanted posters, iron stove
  addDesk(scene, collision, -18.5, jail.floorY, -25.2, 1.7, 0.85, matDarkWood, -1);
  addStove(scene, collision, -11.5, jail.floorY, -24.2, 3.0);
  // Rifle rack on west wall
  const rack = new THREE.Mesh(new THREE.BoxGeometry(0.25, 1.6, 1.4), matDarkWood);
  rack.position.set(-20.4, jail.floorY + 1.0, -26.8);
  scene.add(rack);
  for (let i = 0; i < 3; i++) {
    const rif = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.25, 6), matMetal);
    rif.position.set(-20.28, jail.floorY + 1.0, -27.2 + i * 0.4);
    scene.add(rif);
  }
  // Wanted posters on office wall
  for (const pz of [-24.5, -25.6]) {
    const post = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.92), wantedMat);
    post.position.set(-10.45, jail.floorY + 1.9, pz);
    post.rotation.y = -Math.PI / 2;
    scene.add(post);
  }
  // Cell bunks (one per cell, tucked against side walls)
  addBunk(scene, collision, -19.8, jail.floorY, -31.2, true, matMetal, 0x5c4635);
  addBunk(scene, collision, -11.2, jail.floorY, -31.2, true, matMetal, 0x4f493e);

  // ---- 3. ENTERABLE BANK (West side of Main Street, open to East) ----
  const bank = buildHollowRoom(scene, collision, {
    cx: -21, cz: 4, w: 10.5, d: 12, h: 4.8, floorY: 0.16,
    wallMat: matWeathered, floorMat: matFloor, roofMat: matDarkWood, roofStyle: 'parapet',
    east: [
      { type: 'window', offset: -3.6, width: 1.9 },
      { type: 'door', offset: 0, width: 2.3, height: 3.0 },
      { type: 'window', offset: 3.6, width: 1.9 }
    ],
    interiorLight: { color: 0xffd288, intensity: 1.7, distance: 14 }
  });
  addSign(-15.55, 5.7, 4, 6.8, 1.9, Math.PI / 2, 'BANK', 'GOLD & BULLION');
  addLantern(-15.0, 4.0, 4);
  // Bank counter + barred teller's cage + heavy iron safe + gleaming gold bars
  addSolidBox(scene, collision, -22.2, bank.floorY + 0.58, 3.0, 1.0, 1.16, 6.4, matDarkWood, 'wood');
  buildBarredWall(scene, collision, {
    axis: 'z',
    center: { x: -22.2, z: 3.0 },
    baseY: bank.floorY + 1.16,
    length: 6.4,
    height: 1.6,
    doors: []
  });
  addSolidBox(scene, collision, -24.8, bank.floorY + 0.85, 7.8, 1.6, 1.7, 1.5, matMetal, 'solid');
  for (let i = 0; i < 4; i++) {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.14, 0.62), matGold);
    bar.position.set(-24.8 + (i % 2) * 0.36 - 0.18, bank.floorY + 1.78 + Math.floor(i / 2) * 0.15, 7.8);
    scene.add(bar);
  }

  // ---- 4. ENTERABLE BARN / LIVERY (East side of Main Street, open to West) ----
  const barn = buildHollowRoom(scene, collision, {
    cx: 21, cz: 6, w: 11.5, d: 13.5, h: 5.2, floorY: 0.12,
    wallMat: matWood, floorMat: matFloor, roofMat: matDarkWood, roofStyle: 'gable',
    west: [
      { type: 'door', offset: 0, width: 3.4, height: 3.6 }
    ],
    east: [
      { type: 'door', offset: 0, width: 2.6, height: 3.2 }
    ],
    interiorLight: { color: 0xffb866, intensity: 1.5, distance: 16 }
  });
  addSign(15.0, 5.8, 6, 6.2, 1.8, -Math.PI / 2, 'BARN', 'LIVERY & STABLES', '#3f1e14');
  // Horse stalls, timber posts, hay bales inside barn (wide center aisle open!)
  for (const sz of [1.2, 10.8]) {
    addSolidBox(scene, collision, 21.0, barn.floorY + 0.75, sz, 4.2, 1.5, 0.32, matDarkWood, 'wood');
  }
  for (const [px, pz] of [[18.5, 2.8], [23.5, 2.8], [18.5, 9.2], [23.5, 9.2]]) {
    addSolidBox(scene, collision, px, barn.floorY + 2.5, pz, 0.36, 5.0, 0.36, matDarkWood, 'wood');
  }
  addSolidBox(scene, collision, 24.4, barn.floorY + 0.55, 1.2, 1.8, 1.1, 1.3, matHay, 'wood');
  addSolidBox(scene, collision, 24.4, barn.floorY + 0.55, 10.8, 1.8, 1.1, 1.3, matHay, 'wood');

  // ---- 5. ENTERABLE GENERAL STORE (East side north of Barn) ----
  const gen = buildHollowRoom(scene, collision, {
    cx: 20, cz: -14, w: 10, d: 11, h: 4.5, floorY: 0.16,
    wallMat: matWeathered, floorMat: matFloor, roofMat: matDarkWood, roofStyle: 'parapet',
    west: [
      { type: 'window', offset: -3.2, width: 1.8 },
      { type: 'door', offset: 0, width: 2.3, height: 2.9 },
      { type: 'window', offset: 3.2, width: 1.8 }
    ],
    interiorLight: { color: 0xffc472, intensity: 1.6, distance: 13 }
  });
  addSign(14.8, 5.4, -14, 6.8, 1.8, -Math.PI / 2, 'GENERAL', 'DRY GOODS & AMMO');
  addLantern(14.3, 3.8, -14);
  addSolidBox(scene, collision, 22.8, gen.floorY + 0.55, -14, 1.1, 1.1, 6.0, matWood, 'wood');

  // ---- 6. SMALL HOMESTEAD WITH FENCE SOUTH OF TOWN ----
  const home = buildHollowRoom(scene, collision, {
    cx: -24, cz: 46, w: 9.5, d: 8.5, h: 3.8, floorY: 0.15,
    wallMat: matWeathered, floorMat: matFloor, roofMat: matDarkWood, roofStyle: 'gable',
    east: [
      { type: 'door', offset: 0, width: 2.2, height: 2.7 },
      { type: 'window', offset: 2.6, width: 1.5 }
    ],
    north: [{ type: 'window', offset: 0, width: 1.6 }],
    interiorLight: { color: 0xffbc68, intensity: 1.3, distance: 12 }
  });
  addStove(scene, collision, -27.2, home.floorY, 43.2, 2.8);
  addBunk(scene, collision, -26.8, home.floorY, 48.6, false, matDarkWood, 0x7c4a32);
  addDesk(scene, collision, -22.5, home.floorY, 43.4, 1.5, 0.85, matWood, 1);

  // Split-rail fence helper (solid collision!)
  function addFenceSegment(x1, z1, x2, z2, mat = matWeathered, height = 1.8) {
    const dx = x2 - x1, dz = z2 - z1;
    const len = Math.hypot(dx, dz);
    const angle = Math.atan2(dx, dz);
    const seg = new THREE.Group();
    seg.position.set((x1 + x2) * 0.5, 0, (z1 + z2) * 0.5);
    seg.rotation.y = angle;
    for (const ry of [0.5, 1.05, 1.55]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.14, len), mat);
      rail.position.y = ry;
      rail.castShadow = true;
      seg.add(rail);
    }
    const posts = Math.max(2, Math.round(len / 3));
    for (let i = 0; i <= posts; i++) {
      const pz = -len * 0.5 + (i / posts) * len;
      const p = new THREE.Mesh(new THREE.BoxGeometry(0.22, height, 0.22), matDarkWood);
      p.position.set(0, height * 0.5, pz);
      seg.add(p);
    }
    scene.add(seg);
    collision.addBox((x1 + x2) * 0.5, height * 0.5, (z1 + z2) * 0.5, Math.abs(dx) + 0.4, height, Math.abs(dz) + 0.4, 'wood');
  }
  // Homestead yard fence with wide east gate
  addFenceSegment(-32, 38, -14, 38);
  addFenceSegment(-32, 54, -14, 54);
  addFenceSegment(-32, 38, -32, 54);
  addFenceSegment(-14, 38, -14, 43);
  addFenceSegment(-14, 49, -14, 54);

  // ---- 7. BOOT HILL CEMETERY (Outside town, north-east beyond the last houses!) ----
  const cemMinX = 20, cemMaxX = 54, cemMinZ = -70, cemMaxZ = -40;
  function addIronFence(x1, z1, x2, z2) {
    const dx = x2 - x1, dz = z2 - z1;
    const len = Math.hypot(dx, dz);
    const count = Math.max(4, Math.floor(len / 0.55));
    for (let i = 0; i <= count; i++) {
      const t = i / count;
      const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 2.1, 6), matMetal);
      bar.position.set(x1 + dx * t, 1.05, z1 + dz * t);
      scene.add(bar);
    }
    const cx = (x1 + x2) * 0.5, cz = (z1 + z2) * 0.5;
    const rail = new THREE.Mesh(
      new THREE.BoxGeometry(Math.abs(dx) + 0.14, 0.12, Math.abs(dz) + 0.14),
      matMetal
    );
    rail.position.set(cx, 1.85, cz);
    scene.add(rail);
    collision.addBox(cx, 1.05, cz, Math.abs(dx) + 0.32, 2.1, Math.abs(dz) + 0.32, 'bars');
  }
  addIronFence(cemMinX, cemMinZ, cemMaxX, cemMinZ);
  addIronFence(cemMaxX, cemMinZ, cemMaxX, cemMaxZ);
  addIronFence(cemMinX, cemMinZ, cemMinX, cemMaxZ);
  // South iron fence with 4m wide stone archway gate at x = 34
  addIronFence(cemMinX, cemMaxZ, 31.8, cemMaxZ);
  addIronFence(36.2, cemMaxZ, cemMaxX, cemMaxZ);
  // Stone gate pillars + lintel + BOOT HILL sign
  addSolidBox(scene, collision, 31.4, 1.9, cemMaxZ, 1.0, 3.8, 1.0, matStone, 'stone');
  addSolidBox(scene, collision, 36.6, 1.9, cemMaxZ, 1.0, 3.8, 1.0, matStone, 'stone');
  const gateArch = new THREE.Mesh(new THREE.BoxGeometry(6.6, 0.75, 1.1), matStone);
  gateArch.position.set(34.0, 4.1, cemMaxZ);
  scene.add(gateArch);
  addSign(34.0, 4.95, cemMaxZ + 0.45, 5.4, 1.35, 0, 'BOOT HILL', 'CEMETERY', '#1e1916');

  // Undertaker's black cart parked near the gate (solid!)
  const cartGrp = new THREE.Group();
  cartGrp.position.set(27.5, 0, -35.5);
  cartGrp.rotation.y = 0.25;
  const cartMat = new THREE.MeshStandardMaterial({ color: 0x1b1919, roughness: 0.75 });
  const hearseBody = new THREE.Mesh(new THREE.BoxGeometry(2.0, 1.5, 3.8), cartMat);
  hearseBody.position.y = 1.45;
  hearseBody.castShadow = true;
  cartGrp.add(hearseBody);
  for (const [lx, lz] of [[-1.1, -1.2], [1.1, -1.2], [-1.1, 1.2], [1.1, 1.2]]) {
    const wh = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.07, 6, 12), matDarkWood);
    wh.rotation.y = Math.PI / 2;
    wh.position.set(lx, 0.64, lz);
    cartGrp.add(wh);
  }
  scene.add(cartGrp);
  collision.addBox(27.5, 1.2, -35.5, 2.6, 2.4, 4.2, 'wood');

  // Rows of graves: wooden crosses, stone headstones, earth mounds
  const dirtMat = new THREE.MeshStandardMaterial({ color: 0x6e4a2e, roughness: 0.96 });
  const graveSpots = [
    [25, -46], [29, -46], [25, -52], [29, -52], [25, -58], [29, -58],
    [40, -46], [44, -46], [48, -46], [48, -52]
  ];
  for (let i = 0; i < graveSpots.length; i++) {
    const [gx, gz] = graveSpots[i];
    const mound = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.24, 2.1), dirtMat);
    mound.position.set(gx, 0.12, gz);
    scene.add(mound);
    if (i % 2 === 0) {
      const stone = new THREE.Mesh(new THREE.BoxGeometry(0.78, 1.2, 0.22), matStone);
      stone.position.set(gx, 0.6, gz - 1.15);
      stone.castShadow = true;
      scene.add(stone);
      collision.addBox(gx, 0.6, gz - 1.15, 0.84, 1.2, 0.34, 'stone');
    } else {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.14, 1.35, 0.14), matWeathered);
      post.position.set(gx, 0.68, gz - 1.15);
      const cross = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.14, 0.14), matWeathered);
      cross.position.set(gx, 1.0, gz - 1.15);
      scene.add(post, cross);
      collision.addBox(gx, 0.68, gz - 1.15, 0.5, 1.35, 0.32, 'wood');
    }
  }

  // Open grave with coffin and shovel!
  const openPit = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.08, 2.3), new THREE.MeshStandardMaterial({ color: 0x1a120c, roughness: 1 }));
  openPit.position.set(36, 0.04, -52);
  scene.add(openPit);
  const spoil = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.45, 2.0), dirtMat);
  spoil.position.set(34.5, 0.22, -52);
  scene.add(spoil);
  // Wooden pine coffin beside open grave
  addSolidBox(scene, collision, 37.8, 0.32, -52.0, 0.85, 0.64, 2.05, matWood, 'wood');
  // Shovel stuck into the dirt pile
  const shHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.4, 6), matWeathered);
  shHandle.position.set(34.5, 0.9, -51.4);
  shHandle.rotation.z = 0.22;
  const shBlade = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.36, 0.04), matMetal);
  shBlade.position.set(34.35, 0.35, -51.4);
  scene.add(shHandle, shBlade);

  // Dead hanging tree with gnarled limbs & hanging rope (solid trunk!)
  const treeGrp = new THREE.Group();
  treeGrp.position.set(24.5, 0, -64.5);
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.62, 5.2, 8), matDarkWood);
  trunk.position.y = 2.6;
  trunk.castShadow = true;
  const limb = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.28, 3.8, 6), matDarkWood);
  limb.position.set(1.6, 4.4, 0.3);
  limb.rotation.z = -1.25;
  const limb2 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.2, 2.6, 6), matDarkWood);
  limb2.position.set(-1.1, 4.8, -0.4);
  limb2.rotation.z = 0.9;
  const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 1.8, 6), matHay);
  rope.position.set(2.5, 3.3, 0.3);
  const loop = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.028, 6, 12), matHay);
  loop.position.set(2.5, 2.3, 0.3);
  treeGrp.add(trunk, limb, limb2, rope, loop);
  scene.add(treeGrp);
  collision.addBox(24.5, 2.6, -64.5, 1.25, 5.2, 1.25, 'wood');

  // Enterable Stone Crypt at Boot Hill (north-east corner of graveyard)
  const crypt = buildHollowRoom(scene, collision, {
    cx: 45, cz: -62.5, w: 8.0, d: 8.0, h: 3.9, floorY: 0.16,
    wallMat: matStone, floorMat: matStone, roofMat: matStone, roofStyle: 'gable',
    south: [{ type: 'door', offset: 0, width: 2.3, height: 2.9 }],
    interiorLight: { color: 0x99bbff, intensity: 1.1, distance: 11 }
  });
  addSign(45, 4.35, -58.3, 3.6, 0.9, 0, 'CRYPT', 'R.I.P.', '#242428');
  // Stone sarcophagus along north interior wall (wide floor space in front!)
  addSolidBox(scene, collision, 45, crypt.floorY + 0.55, -65.0, 2.6, 1.1, 1.2, matStone, 'stone');

  // ---- COVERED WAGONS, WATER TOWER, CRATES & CACTI (ALL WITH SOLID COLLISION!) ----
  function addWagon(wx, wz, rotY) {
    const wgrp = new THREE.Group();
    wgrp.position.set(wx, 0, wz);
    wgrp.rotation.y = rotY;
    const bed = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.9, 4.6), matWood);
    bed.position.y = 1.25;
    bed.castShadow = true;
    wgrp.add(bed);
    const canopy = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.25, 4.4, 12, 1, true, 0, Math.PI), matCanvas);
    canopy.rotation.z = Math.PI / 2;
    canopy.rotation.y = Math.PI / 2;
    canopy.position.y = 1.72;
    wgrp.add(canopy);
    for (const [lx, lz] of [[-1.3, -1.5], [1.3, -1.5], [-1.3, 1.5], [1.3, 1.5]]) {
      const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.68, 0.08, 6, 14), matDarkWood);
      wheel.rotation.y = Math.PI / 2;
      wheel.position.set(lx, 0.72, lz);
      wgrp.add(wheel);
    }
    scene.add(wgrp);
    collision.addBox(wx, 1.4, wz, 3.0, 2.8, 4.8, 'wood');
  }
  addWagon(6.5, 24, 0.35);
  addWagon(-7.5, -2, -0.25);

  // Water tower on stilts
  const wtGrp = new THREE.Group();
  wtGrp.position.set(-32, 0, -28);
  for (const [lx, lz] of [[-2, -2], [2, -2], [-2, 2], [2, 2]]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.45, 9.5, 0.45), matDarkWood);
    leg.position.set(lx, 4.75, lz);
    wtGrp.add(leg);
  }
  const tank = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.2, 4.8, 16), matWeathered);
  tank.position.y = 11.4;
  const wtRoof = new THREE.Mesh(new THREE.ConeGeometry(3.7, 2.4, 16), matDarkWood);
  wtRoof.position.y = 15.0;
  wtGrp.add(tank, wtRoof);
  scene.add(wtGrp);
  collision.addBox(-32, 4.5, -28, 4.8, 9.0, 4.8, 'wood');

  // Street cover crates & barrels
  const coverSpots = [
    [-6, 34], [7, 36], [-10, 16], [10, 14], [-6, -12], [6, -15], [10, -25], [-9, -18]
  ];
  for (const [cx, cz] of coverSpots) {
    addSolidBox(scene, collision, cx, 0.68, cz, 1.45, 1.36, 1.45, matWood, 'wood');
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.42, 1.25, 10), matSaloon);
    barrel.position.set(cx + 1.1, 0.62, cz + 0.35);
    scene.add(barrel);
    collision.addBox(cx + 1.1, 0.62, cz + 0.35, 0.96, 1.25, 0.96, 'wood');
  }

  // Desert Saguaro Cacti (ALL registered with solid collision!)
  function addCactus(cx, cz, scale = 1) {
    const g = new THREE.Group();
    g.position.set(cx, 0, cz);
    const tr = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.38, 4.2, 10), matCactus);
    tr.position.y = 2.1;
    const arm1 = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.24, 1.6, 8), matCactus);
    arm1.position.set(0.75, 2.7, 0);
    const arm2 = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.24, 1.4, 8), matCactus);
    arm2.position.set(-0.72, 3.1, 0);
    g.add(tr, arm1, arm2);
    g.rotation.y = cx * 0.8;
    g.scale.setScalar(scale);
    scene.add(g);
    collision.addBox(cx, 2.1 * scale, cz, 0.9 * scale, 4.2 * scale, 0.9 * scale, 'solid');
  }
  const cactiCoords = [
    [-46, 38, 1.1], [42, 40, 1.2], [-48, -22, 1.3], [58, -24, 1.1],
    [-52, 6, 1.15], [50, 12, 1.25], [16, 52, 0.95], [-42, 62, 1.1], [34, 58, 1.15]
  ];
  for (const [cx, cz, sc] of cactiCoords) addCactus(cx, cz, sc);

  // Monument Valley Distant Mesas
  const mesaSpecs = [
    [0, -135, 62, 38, 28], [-98, -112, 48, 44, 34], [102, -108, 52, 40, 32],
    [-132, -10, 36, 36, 58], [134, 8, 38, 34, 62], [-95, 110, 56, 30, 36], [88, 114, 58, 32, 34]
  ];
  for (const [mx, mz, mw, mh] of mesaSpecs) {
    const base = new THREE.Mesh(new THREE.CylinderGeometry(mw * 0.42, mw * 0.68, mh, 7), matRedRock);
    base.position.set(mx, mh * 0.5 - 1, mz);
    scene.add(base);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(mw * 0.46, mw * 0.42, 4.5, 7), matRedRock);
    cap.position.set(mx, mh - 1.5, mz);
    scene.add(cap);
  }

  particles.initAmbient('dust', collision.bounds);
  particles.addTumbleweed(new THREE.Vector3(-25, 0.7, 22), 1);
  particles.addTumbleweed(new THREE.Vector3(24, 0.7, -4), -1);

  // ---- STRATEGIC PICKUPS (including inside JAIL cell and inside BOOT HILL crypt!) ----
  const pickupDefs = [
    { type: 'health', pos: new THREE.Vector3(-12.8, 0.9, -30.5), label: 'JAIL CELL TONIC (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(45.0, 0.9, -62.5),  label: 'CRYPT ELIXIR (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(-23.5, 0.9, 46.5),  label: 'HOMESTEAD TONIC (+35 HP)' },
    { type: 'ammo',   pos: new THREE.Vector3(-19.5, 0.9, 4.0),   label: 'BANK AMMO BOX' },
    { type: 'ammo',   pos: new THREE.Vector3(21.0, 0.9, 6.0),    label: 'BARN SHELL CRATE' },
    { type: 'health', pos: new THREE.Vector3(3.5, 0.9, -29.0),   label: 'SALOON WHISKEY (+35 HP)' },
    { type: 'ammo',   pos: new THREE.Vector3(19.0, 0.9, -14.0),  label: 'GENERAL STORE AMMO' }
  ];
  for (const pd of pickupDefs) {
    const mesh = createPickupMesh(pd.type);
    mesh.position.copy(pd.pos);
    scene.add(mesh);
    pickups.push({ ...pd, mesh, collected: false });
  }

  // ---- 23 ENEMIES (Street, Saloon, Jail, Bank, Barn, Homestead, Boot Hill + Hidden Crypt Outlaw, Boss El Diablo) ----
  const enemySpawns = [
    // South approach & Homestead
    { type: 'cowboy',  pos: new THREE.Vector3(-8, 0, 38) },
    { type: 'cowboy',  pos: new THREE.Vector3(9, 0, 34) },
    { type: 'bandito', pos: new THREE.Vector3(-17, 0, 46) },
    { type: 'cowboy',  pos: new THREE.Vector3(-23, 0.16, 46) }, // Inside homestead
    // Main Street & Bank / Barn
    { type: 'cowboy',  pos: new THREE.Vector3(-10, 0, 20) },
    { type: 'bandito', pos: new THREE.Vector3(10, 0, 18) },
    { type: 'bandito', pos: new THREE.Vector3(-19, 0.16, 5) },  // Inside Bank
    { type: 'cowboy',  pos: new THREE.Vector3(20, 0.12, 6) },   // Inside Barn
    { type: 'cowboy',  pos: new THREE.Vector3(0, 0, 10) },
    { type: 'bandito', pos: new THREE.Vector3(-10, 0, -4) },
    { type: 'cowboy',  pos: new THREE.Vector3(10, 0, -6) },
    { type: 'bandito', pos: new THREE.Vector3(19, 0.16, -14) }, // Inside General Store
    // Jail & Saloon
    { type: 'cowboy',  pos: new THREE.Vector3(-14.5, 0.16, -25.8) }, // Outlaw inside JAIL!
    { type: 'bandito', pos: new THREE.Vector3(-2.5, 0.16, -28.0) },  // Inside Saloon
    { type: 'cowboy',  pos: new THREE.Vector3(3.0, 0.16, -28.0) },   // Inside Saloon
    { type: 'bandito', pos: new THREE.Vector3(-8, 0, -18) },
    { type: 'cowboy',  pos: new THREE.Vector3(9, 0, -21) },
    // North road & Boot Hill Cemetery (3 outlaws: 2 in graveyard + 1 hidden in Crypt!)
    { type: 'cowboy',  pos: new THREE.Vector3(18, 0, -34) },
    { type: 'bandito', pos: new THREE.Vector3(28, 0, -44) },
    { type: 'cowboy',  pos: new THREE.Vector3(38, 0, -49) },
    { type: 'bandito', pos: new THREE.Vector3(45, 0.16, -61.5), options: { hideUntilClose: true, ambushDist: 14 } },
    { type: 'bandito', pos: new THREE.Vector3(10, 0, -34) },
    // Boss El Diablo
    { type: 'boss_west', pos: new THREE.Vector3(0, 0, -19), isBossWave: true }
  ];

  const enterableBuildings = [
    { name: 'Saloon', inside: new THREE.Vector3(0, 0.16, -27.5), outside: new THREE.Vector3(0, 0, -20.5) },
    { name: 'Jail', inside: new THREE.Vector3(-15.0, 0.16, -26.0), outside: new THREE.Vector3(-14.9, 0, -20.5) },
    { name: 'Bank', inside: new THREE.Vector3(-19.2, 0.16, 4.0), outside: new THREE.Vector3(-14.0, 0, 4.0) },
    { name: 'Barn', inside: new THREE.Vector3(20.0, 0.12, 6.0), outside: new THREE.Vector3(13.5, 0, 6.0) },
    { name: 'Boot Hill Crypt', inside: new THREE.Vector3(45.0, 0.16, -61.8), outside: new THREE.Vector3(45.0, 0, -56.5) }
  ];

  return { enemySpawns, pickups, animated, disposables, enterableBuildings };
}

export function createPickupMesh(type, variant = 'default') {
  const grp = new THREE.Group();
  const isHealth = type === 'health';

  if (isHealth && variant === 'tea_glass') {
    // Soviet glass of hot tea in a metal podstakannik holder
    const glassMat = new THREE.MeshStandardMaterial({ color: 0xc96e28, emissive: 0x6b2f08, emissiveIntensity: 0.7, roughness: 0.25 });
    const holderMat = new THREE.MeshStandardMaterial({ color: 0xb8c0c8, metalness: 0.85, roughness: 0.25 });
    const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.2, 0.56, 12), glassMat);
    const holder = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.23, 0.34, 12), holderMat);
    holder.position.y = -0.11;
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.03, 6, 10), holderMat);
    handle.position.set(0.27, -0.06, 0);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.46, 0.035, 6, 18), new THREE.MeshBasicMaterial({ color: 0xffc168 }));
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -0.3;
    grp.add(glass, holder, handle, ring);
    return grp;
  }

  if (isHealth && variant === 'butter_tea') {
    // Tibetan wooden bowl of warm butter tea (po cha)
    const bowlMat = new THREE.MeshStandardMaterial({ color: 0x8a2c1e, roughness: 0.55 });
    const teaMat = new THREE.MeshStandardMaterial({ color: 0xe6b868, emissive: 0x8c5a18, emissiveIntensity: 0.65, roughness: 0.3 });
    const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.18, 0.32, 14), bowlMat);
    const tea = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.08, 14), teaMat);
    tea.position.y = 0.13;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.48, 0.035, 6, 18), new THREE.MeshBasicMaterial({ color: 0xf7d06b }));
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -0.22;
    grp.add(bowl, tea, ring);
    return grp;
  }

  const mat = new THREE.MeshStandardMaterial({
    color: isHealth ? 0x2ecc71 : 0xf2b749,
    emissive: isHealth ? 0x168043 : 0xb37412,
    emissiveIntensity: 0.75,
    metalness: 0.35,
    roughness: 0.3
  });
  const body = isHealth
    ? new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.34, 0.72, 10), mat)
    : new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.48, 0.52), mat);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.55, 0.04, 6, 18),
    new THREE.MeshBasicMaterial({ color: isHealth ? 0x6dffaa : 0xffe484 })
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = -0.32;
  grp.add(body, ring);
  return grp;
}
