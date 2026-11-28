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
  buildLadder,
  buildRaisedHide,
  buildCrawlDen,
  buildZigzagHill,
  addSegmentedFence,
  addSolidBox,
  addAltar,
  addPewRow,
  addDesk,
  addBunk,
  addStove,
  addPiano,
  addCrawlPassage,
  addTableAndChairs,
  addStairFlight
} from '../engine/buildings.js';
import { spawnBystanders } from '../entities/bystanders.js';

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
  // Sculpted Horse standing in the south livery stall!
  {
    const horseGrp = new THREE.Group();
    horseGrp.position.set(19.5, barn.floorY, 10.6);
    horseGrp.rotation.y = Math.PI * 0.5;
    const coatMat = new THREE.MeshStandardMaterial({ color: 0x6b3c1f, roughness: 0.88 });
    const maneMat = new THREE.MeshStandardMaterial({ color: 0x1d140f, roughness: 0.92 });
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.76, 0.85, 1.95), coatMat);
    body.position.y = 1.22;
    const neck = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.78, 0.5), coatMat);
    neck.position.set(0, 1.72, 0.92);
    neck.rotation.x = 0.25;
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.34, 0.65), coatMat);
    head.position.set(0, 2.02, 1.16);
    head.rotation.x = 0.35;
    const mane = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.68, 0.16), maneMat);
    mane.position.set(0, 1.78, 0.68);
    const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.1, 0.78, 6), maneMat);
    tail.position.set(0, 1.05, -1.04);
    tail.rotation.x = -0.25;
    horseGrp.add(body, neck, head, mane, tail);
    for (const [lx, lz] of [[-0.26, -0.72], [0.26, -0.72], [-0.26, 0.72], [0.26, 0.72]]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.96, 6), coatMat);
      leg.position.set(lx, 0.48, lz);
      horseGrp.add(leg);
    }
    scene.add(horseGrp);
    collision.addOrientedBox(19.5, barn.floorY + 1.0, 10.6, 0.92, 2.0, 2.05, Math.PI * 0.5, 'solid');
  }
  // Barn Hayloft (walkable timber loft over north stalls at y = 3.1m, reached by interior wooden ladder!)
  const hayloftY = 3.1;
  const hayloftDeck = new THREE.Mesh(new THREE.BoxGeometry(10.6, 0.22, 4.4), matWood);
  hayloftDeck.position.set(21.0, hayloftY - 0.11, 1.8);
  hayloftDeck.receiveShadow = true;
  scene.add(hayloftDeck);
  collision.addWalkable(21.0, 1.8, 10.6, 4.4, hayloftY, true);
  addSolidBox(scene, collision, 17.6, hayloftY + 0.55, 1.2, 1.8, 1.1, 1.3, matHay, 'wood');
  addSolidBox(scene, collision, 24.4, hayloftY + 0.55, 1.2, 1.8, 1.1, 1.3, matHay, 'wood');
  const barnHayloftLadder = buildLadder(scene, collision, {
    x: 22.8, z: 4.08, bottomY: barn.floorY, topY: hayloftY, normalX: 0, normalZ: 1, mat: matDarkWood
  });

  // ---- 5. ENTERABLE GENERAL STORE (East side north of Barn — counter, shelves & walkable flat roof + 3 jump crates!) ----
  const gen = buildHollowRoom(scene, collision, {
    cx: 20, cz: -14, w: 10, d: 11, h: 3.35, floorY: 0.16,
    wallMat: matWeathered, floorMat: matFloor, roofMat: matDarkWood, roofStyle: 'parapet',
    west: [
      { type: 'window', offset: -3.2, width: 1.8 },
      { type: 'door', offset: 0, width: 2.3, height: 2.8 },
      { type: 'window', offset: 3.2, width: 1.8 }
    ],
    interiorLight: { color: 0xffc472, intensity: 1.6, distance: 13 }
  });
  const genRoofY = gen.roofY + 0.28;
  collision.addWalkable(20, -14, 10.2, 11.2, genRoofY, true);
  // Street-facing false front sniper parapet on west edge of roof + rear ladder!
  addSolidBox(scene, collision, 15.1, genRoofY + 0.55, -14, 0.35, 1.1, 11.0, matWeathered, 'wood');
  const genLadder = buildLadder(scene, collision, {
    x: 25.12, z: -14, bottomY: 0, topY: genRoofY, normalX: 1, normalZ: 0, mat: matDarkWood
  });
  addSign(14.8, 5.1, -14, 6.8, 1.6, -Math.PI / 2, 'GENERAL', 'DRY GOODS & AMMO');
  addLantern(14.3, 3.4, -14);
  addSolidBox(scene, collision, 22.8, gen.floorY + 0.55, -14, 1.1, 1.1, 6.0, matWood, 'wood');
  // Stocked display shelves along north & south walls
  for (const sz of [-18.7, -9.3]) {
    addSolidBox(scene, collision, 20.5, gen.floorY + 1.1, sz, 5.6, 2.2, 0.7, matDarkWood, 'wood');
    for (let i = 0; i < 4; i++) {
      const jar = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.36, 0.34), i % 2 === 0 ? matGold : matSaloon);
      jar.position.set(18.4 + i * 1.4, gen.floorY + 1.55, sz + (sz < -14 ? 0.25 : -0.25));
      scene.add(jar);
    }
  }

  // ---- 5B. ENTERABLE SHERIFF'S OFFICE WITH ONE BARRED CELL & WALKABLE FLAT ROOF + 3 JUMP CRATES ----
  const sheriff = buildHollowRoom(scene, collision, {
    cx: -21, cz: -12, w: 10, d: 10, h: 3.35, floorY: 0.16,
    wallMat: matWood, floorMat: matFloor, roofMat: matDarkWood, roofStyle: 'parapet',
    east: [
      { type: 'window', offset: -3.0, width: 1.7 },
      { type: 'door', offset: 0.4, width: 2.3, height: 2.8 }
    ],
    west: [{ type: 'window', offset: -2.2, width: 1.4, barred: true }],
    interiorLight: { color: 0xffc87a, intensity: 1.7, distance: 13 }
  });
  const sheriffRoofY = sheriff.roofY + 0.28;
  collision.addWalkable(-21, -12, 10.2, 10.2, sheriffRoofY, true);
  addSolidBox(scene, collision, -16.1, sheriffRoofY + 0.55, -12, 0.35, 1.1, 10.0, matWood, 'wood');
  buildLadder(scene, collision, {
    x: -26.12, z: -12, bottomY: 0, topY: sheriffRoofY, normalX: -1, normalZ: 0, mat: matDarkWood
  });
  addSign(-15.75, 5.0, -12, 6.4, 1.55, Math.PI / 2, 'SHERIFF', 'LAW & ORDER', '#2e1d12');
  addLantern(-15.2, 3.4, -11.6);
  // One barred holding cell in north-west corner (open 2.3m cell door!)
  buildBarredWall(scene, collision, {
    axis: 'x', center: { x: -23.0, z: -12.6 }, baseY: sheriff.floorY, length: 5.2, height: 3.15,
    doors: [{ offset: 0.9, width: 2.3 }]
  });
  buildBarredWall(scene, collision, {
    axis: 'z', center: { x: -20.4, z: -14.6 }, baseY: sheriff.floorY, length: 4.0, height: 3.15, doors: []
  });
  addBunk(scene, collision, -24.7, sheriff.floorY, -15.2, true, matMetal, 0x5c4635);
  addDesk(scene, collision, -23.2, sheriff.floorY, -9.2, 1.7, 0.85, matDarkWood, -1);
  const shPoster = new THREE.Mesh(new THREE.PlaneGeometry(0.75, 0.95), wantedMat);
  shPoster.position.set(-25.55, sheriff.floorY + 1.95, -9.2);
  shPoster.rotation.y = Math.PI / 2;
  scene.add(shPoster);

  // ---- 5C. ENTERABLE BLACKSMITH (Forge, anvil & walkable flat roof behind false front + 3 jump crates!) ----
  const smithy = buildHollowRoom(scene, collision, {
    cx: -21, cz: 22, w: 10, d: 10, h: 3.35, floorY: 0.14,
    wallMat: matStone, floorMat: matStone, roofMat: matDarkWood, roofStyle: 'parapet',
    east: [{ type: 'door', offset: 0, width: 3.0, height: 2.85 }],
    south: [{ type: 'window', offset: 0, width: 1.8 }],
    interiorLight: { color: 0xff7b2e, intensity: 2.0, distance: 14 }
  });
  const smithyRoofY = smithy.roofY + 0.28;
  collision.addWalkable(-21, 22, 10.2, 10.2, smithyRoofY, true);
  addSolidBox(scene, collision, -16.1, smithyRoofY + 0.55, 22, 0.35, 1.1, 10.0, matStone, 'stone');
  buildLadder(scene, collision, {
    x: -26.12, z: 22, bottomY: 0, topY: smithyRoofY, normalX: -1, normalZ: 0, mat: matDarkWood
  });
  addSign(-15.75, 5.0, 22, 6.8, 1.55, Math.PI / 2, 'BLACKSMITH', 'FORGE & SHOEING', '#2b1812');
  // Brick Forge & glowing coal bed + chimney
  addSolidBox(scene, collision, -24.4, smithy.floorY + 0.65, 22, 2.0, 1.3, 2.8, matStone, 'stone');
  const coals = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.2, 1.6), new THREE.MeshBasicMaterial({ color: 0xff5a12 }));
  coals.position.set(-24.2, smithy.floorY + 1.36, 22);
  const smithChim = new THREE.Mesh(new THREE.BoxGeometry(1.4, 5.6, 1.4), matStone);
  smithChim.position.set(-24.8, smithy.floorY + 4.0, 22);
  scene.add(coals, smithChim);
  // Heavy Iron Anvil on timber stump block
  addSolidBox(scene, collision, -21.2, smithy.floorY + 0.35, 24.4, 0.85, 0.7, 0.85, matDarkWood, 'wood');
  const anvil = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.34, 0.42), matMetal);
  anvil.position.set(-21.2, smithy.floorY + 0.86, 24.4);
  const horn = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.42, 6), matMetal);
  horn.rotation.z = -Math.PI / 2;
  horn.position.set(-20.58, smithy.floorY + 0.9, 24.4);
  scene.add(anvil, horn);

  // ---- 5D. ENTERABLE TELEGRAPH OFFICE (Counter, safe & walkable flat roof + 3 jump crates!) ----
  const teleg = buildHollowRoom(scene, collision, {
    cx: 21, cz: 23, w: 9.5, d: 9.5, h: 3.35, floorY: 0.16,
    wallMat: matWeathered, floorMat: matFloor, roofMat: matDarkWood, roofStyle: 'parapet',
    west: [
      { type: 'window', offset: -2.8, width: 1.6 },
      { type: 'door', offset: 0.5, width: 2.3, height: 2.8 }
    ],
    interiorLight: { color: 0xffd088, intensity: 1.5, distance: 13 }
  });
  const telegRoofY = teleg.roofY + 0.28;
  collision.addWalkable(21, 23, 9.7, 9.7, telegRoofY, true);
  addSolidBox(scene, collision, 16.3, telegRoofY + 0.55, 23, 0.35, 1.1, 9.5, matWeathered, 'wood');
  buildLadder(scene, collision, {
    x: 25.88, z: 23, bottomY: 0, topY: telegRoofY, normalX: 1, normalZ: 0, mat: matDarkWood
  });
  addSign(16.05, 4.95, 23, 6.4, 1.5, -Math.PI / 2, 'TELEGRAPH', 'WESTERN WIRE', '#24221e');
  addSolidBox(scene, collision, 22.6, teleg.floorY + 0.55, 22.0, 1.0, 1.1, 4.6, matDarkWood, 'wood');
  const wireKey = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.14, 0.24), matGold);
  wireKey.position.set(22.6, teleg.floorY + 1.16, 22.0);
  scene.add(wireKey);
  addSolidBox(scene, collision, 24.2, teleg.floorY + 0.75, 26.2, 1.35, 1.5, 1.35, matMetal, 'solid');
  // Telegraph pole outside
  addSolidBox(scene, collision, 15.2, 4.2, 27.6, 0.28, 8.4, 0.28, matDarkWood, 'wood');

  // ---- 5E. ENTERABLE UNDERTAKER (Wooden coffins — East of Saloon toward Boot Hill!) ----
  const under = buildHollowRoom(scene, collision, {
    cx: 17.5, cz: -30, w: 10, d: 9.5, h: 4.3, floorY: 0.16,
    wallMat: matDarkWood, floorMat: matFloor, roofMat: matDarkWood, roofStyle: 'parapet',
    south: [
      { type: 'door', offset: 0, width: 2.4, height: 2.9 },
      { type: 'window', offset: 3.0, width: 1.6 }
    ],
    west: [{ type: 'window', offset: 0, width: 1.6 }],
    interiorLight: { color: 0xffb878, intensity: 1.4, distance: 13 }
  });
  addSign(17.5, 5.1, -25.05, 6.6, 1.65, 0, 'UNDERTAKER', 'COFFINS & BURIALS', '#181414');
  // Display coffins on trestles + upright pine coffin
  addSolidBox(scene, collision, 14.4, under.floorY + 0.52, -32.2, 0.9, 1.04, 2.2, matWood, 'wood');
  addSolidBox(scene, collision, 20.6, under.floorY + 0.52, -32.2, 0.9, 1.04, 2.2, matSaloon, 'wood');
  addSolidBox(scene, collision, 21.4, under.floorY + 1.15, -28.0, 0.8, 2.3, 0.55, matWood, 'wood');

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
    const canopy = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.25, 4.4, 14, 1, true, 0, Math.PI), matCanvas);
    canopy.rotation.z = Math.PI / 2;
    canopy.rotation.y = Math.PI / 2;
    canopy.position.y = 1.72;
    // Wooden hoop bows supporting the canvas bonnet!
    for (let bi = -2; bi <= 2; bi++) {
      const bow = new THREE.Mesh(new THREE.TorusGeometry(1.21, 0.032, 6, 14, Math.PI), matDarkWood);
      bow.position.set(0, 1.72, bi * 1.02);
      wgrp.add(bow);
    }
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

  // Water tower on stilts with walkable catwalk & ladder!
  const wtGrp = new THREE.Group();
  wtGrp.position.set(-32, 0, -28);
  const wtCatY = 8.9;
  for (const [lx, lz] of [[-2, -2], [2, -2], [-2, 2], [2, 2]]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.45, wtCatY, 0.45), matDarkWood);
    leg.position.set(lx, wtCatY * 0.5, lz);
    wtGrp.add(leg);
    collision.addBox(-32 + lx, wtCatY * 0.5, -28 + lz, 0.55, wtCatY, 0.55, 'wood');
  }
  const wtCatwalk = new THREE.Mesh(new THREE.BoxGeometry(8.4, 0.24, 8.4), matWood);
  wtCatwalk.position.y = wtCatY - 0.12;
  wtCatwalk.receiveShadow = true;
  const tank = new THREE.Mesh(new THREE.CylinderGeometry(2.7, 2.7, 4.8, 16), matWeathered);
  tank.position.y = wtCatY + 2.4;
  const wtRoof = new THREE.Mesh(new THREE.ConeGeometry(3.3, 2.4, 16), matDarkWood);
  wtRoof.position.y = wtCatY + 5.9;
  wtGrp.add(wtCatwalk, tank, wtRoof);
  scene.add(wtGrp);
  collision.addWalkable(-32, -28, 8.6, 8.6, wtCatY, true);
  collision.addBox(-32, wtCatY + 2.4, -28, 5.2, 4.8, 5.2, 'wood');
  // Waist-high catwalk rails on N/W/E edges (south open for ladder!)
  addSolidBox(scene, collision, -32, wtCatY + 0.52, -32.1, 8.4, 1.04, 0.2, matDarkWood, 'wood');
  addSolidBox(scene, collision, -36.1, wtCatY + 0.52, -28, 0.2, 1.04, 8.4, matDarkWood, 'wood');
  addSolidBox(scene, collision, -27.9, wtCatY + 0.52, -28, 0.2, 1.04, 8.4, matDarkWood, 'wood');
  const waterTowerLadder = buildLadder(scene, collision, {
    x: -32, z: -23.72, bottomY: 0, topY: wtCatY, normalX: 0, normalZ: 1, mat: matDarkWood
  });

  // ---- 7B. ENTERABLE WESTERN CHURCH (Nave, Pews, Altar, Choir Gallery & 11m Bell Tower Stair!) ----
  const matChurchWall = new THREE.MeshStandardMaterial({ color: 0xeae0cc, roughness: 0.85 });
  const churchX = -38, churchZ = -52;
  const church = buildHollowRoom(scene, collision, {
    cx: churchX, cz: churchZ, w: 12.0, d: 15.0, h: 6.2, floorY: 0.16,
    wallMat: matChurchWall, floorMat: matFloor, roofMat: matDarkWood, roofStyle: 'gable',
    south: [
      { type: 'window', offset: -3.8, width: 1.5 },
      { type: 'door', offset: 0, width: 2.6, height: 3.2 },
      { type: 'window', offset: 3.8, width: 1.5 }
    ],
    west: [{ type: 'window', offset: 0, width: 1.6 }],
    east: [{ type: 'window', offset: 0, width: 1.6 }],
    north: [{ type: 'door', offset: 0, width: 2.6, height: 3.2 }], // Open archway into Bell Tower base!
    interiorLight: { color: 0xffd288, intensity: 1.8, distance: 18 }
  });
  // Nave altar & pews
  addAltar(scene, collision, churchX, church.floorY, churchZ - 5.2, 2.8, 1.0, matDarkWood, 0x9c2626);
  addPewRow(scene, collision, churchX - 3.1, church.floorY, churchZ - 1.2, 3.0, matDarkWood);
  addPewRow(scene, collision, churchX + 3.1, church.floorY, churchZ - 1.2, 3.0, matDarkWood);
  addPewRow(scene, collision, churchX - 3.1, church.floorY, churchZ + 1.4, 3.0, matDarkWood);
  addPewRow(scene, collision, churchX + 3.1, church.floorY, churchZ + 1.4, 3.0, matDarkWood);
  // Choir Gallery over the south entrance (y = 3.0m) reached by an interior stair along the west wall!
  const choirY = 3.0;
  const choirDeck = new THREE.Mesh(new THREE.BoxGeometry(11.4, 0.24, 3.4), matWood);
  choirDeck.position.set(churchX, choirY - 0.12, churchZ + 5.6);
  scene.add(choirDeck);
  collision.addWalkable(churchX, churchZ + 5.6, 11.4, 3.4, choirY, true);
  addSolidBox(scene, collision, churchX + 1.4, choirY + 0.5, churchZ + 4.0, 8.6, 1.0, 0.2, matDarkWood, 'wood');
  for (let i = 0; i < 8; i++) {
    const sy = church.floorY + (choirY - church.floorY) * ((i + 1) / 8);
    const sz = churchZ - 2.6 + i * 0.88;
    const st = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.26, 0.94), matDarkWood);
    st.position.set(churchX - 4.9, sy - 0.13, sz);
    scene.add(st);
    collision.addWalkable(churchX - 4.9, sz, 1.6, 1.0, sy, true);
  }
  // Square Bell Tower directly behind nave (x = churchX, z = churchZ - 10.6, climbing round inner walls to 11.0m Belfry!)
  const twX = churchX, twZ = churchZ - 10.6, twSize = 6.2, belfryY = 11.0;
  const towerBase = buildHollowRoom(scene, collision, {
    cx: twX, cz: twZ, w: twSize, d: twSize, h: belfryY - 0.16, floorY: 0.16,
    wallMat: matChurchWall, floorMat: matFloor, roofMat: matDarkWood, roofStyle: 'none',
    south: [{ type: 'door', offset: 0, width: 2.6, height: 3.2 }],
    interiorLight: { color: 0xffd288, intensity: 1.5, distance: 14 }
  });
  // Wrapping interior staircase (4 flights around the 4 walls, 7 low steps per flight, <= 0.39m rise!)
  const flights = [
    { startX: twX - 1.9, startZ: twZ + 1.8, dx: 0, dz: -0.56, y0: 0.16, y1: 2.9, landX: twX - 1.9, landZ: twZ - 1.9 },
    { startX: twX - 1.8, startZ: twZ - 1.9, dx: 0.56, dz: 0, y0: 2.9, y1: 5.6, landX: twX + 1.9, landZ: twZ - 1.9 },
    { startX: twX + 1.9, startZ: twZ - 1.8, dx: 0, dz: 0.56, y0: 5.6, y1: 8.3, landX: twX + 1.9, landZ: twZ + 1.9 },
    { startX: twX + 1.8, startZ: twZ + 1.9, dx: -0.56, dz: 0, y0: 8.3, y1: belfryY, landX: twX - 1.9, landZ: twZ + 1.9 }
  ];
  for (const fl of flights) {
    const steps = 7;
    for (let s = 0; s < steps; s++) {
      const sy = fl.y0 + (fl.y1 - fl.y0) * ((s + 1) / steps);
      const sx = fl.startX + fl.dx * (s + 0.5);
      const sz = fl.startZ + fl.dz * (s + 0.5);
      const sw = fl.dx === 0 ? 1.55 : 0.72;
      const sd = fl.dz === 0 ? 1.55 : 0.72;
      const st = new THREE.Mesh(new THREE.BoxGeometry(sw, 0.24, sd), matDarkWood);
      st.position.set(sx, sy - 0.12, sz);
      scene.add(st);
      collision.addWalkable(sx, sz, sw + 0.16, sd + 0.16, sy, true);
    }
    const ld = new THREE.Mesh(new THREE.BoxGeometry(1.75, 0.26, 1.75), matDarkWood);
    ld.position.set(fl.landX, fl.y1 - 0.13, fl.landZ);
    scene.add(ld);
    collision.addWalkable(fl.landX, fl.landZ, 1.9, 1.9, fl.y1, true);
  }
  // Open Belfry deck at y = 11.0m (leaving stair arrival hole open on SW corner!) + cover parapets + corner posts + steeple + hanging brass BELL!
  const belfFloor1 = new THREE.Mesh(new THREE.BoxGeometry(twSize - 0.5, 0.26, 3.4), matWood);
  belfFloor1.position.set(twX, belfryY - 0.13, twZ - 1.1);
  const belfFloor2 = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.26, 2.5), matWood);
  belfFloor2.position.set(twX + 1.3, belfryY - 0.13, twZ + 1.6);
  scene.add(belfFloor1, belfFloor2);
  collision.addWalkable(twX, twZ - 1.1, twSize - 0.2, 3.6, belfryY, true);
  collision.addWalkable(twX + 1.3, twZ + 1.6, 3.4, 2.7, belfryY, true);
  // Belfry waist-high cover parapets (1.05m) on all 4 sides + 4 corner posts + pointed steeple roof + golden bell!
  addSolidBox(scene, collision, twX, belfryY + 0.52, twZ - twSize * 0.5 + 0.15, twSize, 1.04, 0.28, matChurchWall, 'wood');
  addSolidBox(scene, collision, twX, belfryY + 0.52, twZ + twSize * 0.5 - 0.15, twSize, 1.04, 0.28, matChurchWall, 'wood');
  addSolidBox(scene, collision, twX - twSize * 0.5 + 0.15, belfryY + 0.52, twZ, 0.28, 1.04, twSize, matChurchWall, 'wood');
  addSolidBox(scene, collision, twX + twSize * 0.5 - 0.15, belfryY + 0.52, twZ, 0.28, 1.04, twSize, matChurchWall, 'wood');
  for (const [px, pz] of [[-2.7, -2.7], [2.7, -2.7], [-2.7, 2.7], [2.7, 2.7]]) {
    addSolidBox(scene, collision, twX + px, belfryY + 1.85, twZ + pz, 0.42, 3.7, 0.42, matChurchWall, 'wood');
  }
  const steeple = new THREE.Mesh(new THREE.ConeGeometry(4.4, 5.2, 4), matDarkWood);
  steeple.rotation.y = Math.PI / 4;
  steeple.position.set(twX, belfryY + 6.2, twZ);
  const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.14, 1.4, 0.14), matGold);
  crossV.position.set(twX, belfryY + 9.4, twZ);
  const crossH = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.14, 0.14), matGold);
  crossH.position.set(twX, belfryY + 9.65, twZ);
  const bellBeam = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.24, 0.24), matDarkWood);
  bellBeam.position.set(twX, belfryY + 3.25, twZ - 0.6);
  const bell = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.72, 0.95, 14), matGold);
  bell.position.set(twX, belfryY + 2.65, twZ - 0.6);
  scene.add(steeple, crossV, crossH, bellBeam, bell);

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
    [-46, 38, 1.1], [42, 40, 1.2], [-48, -28, 1.3], [58, -24, 1.1],
    [50, 12, 1.25], [16, 52, 0.95], [-42, 62, 1.1], [34, 58, 1.15]
  ];
  for (const [cx, cz, sc] of cactiCoords) addCactus(cx, cz, sc);

  // ---- 6.1 CLIMBABLE 12m FLAT-TOPPED BUTTE WITH 4-LEG ZIGZAG ROCK PATH OVERLOOKING MAIN STREET! ----
  const butte = buildZigzagHill(scene, collision, {
    cx: -58, cz: 2, topW: 13, topD: 13, topY: 12.0,
    legs: 4, stepsPerLeg: 8, faceSide: 'east',
    rockMat: matRedRock, boulderMat: matStone
  });

  // ---- 6.4 RAISED TIMBER LOOKOUT HIDE (2 jump blocks) & CROUCH-ONLY CRAWL DEN (1.25m door!) ----
  const westHide = buildRaisedHide(scene, collision, {
    cx: 35, cz: 38, deckY: 2.2, w: 4.2, d: 4.2, openSide: 'west',
    wallMat: matWood, floorMat: matFloor, postMat: matDarkWood, jumpMat: matWeathered
  });
  const westDen = buildCrawlDen(scene, collision, {
    cx: 38, cz: 10, w: 5.4, d: 5.0, doorSide: 'west',
    wallMat: matStone, floorMat: matFloor, roofMat: matRedRock
  });

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

  // ---- STRATEGIC PICKUPS (including inside JAIL cell, BOOT HILL crypt & every new town building!) ----
  const pickupDefs = [
    { type: 'health', pos: new THREE.Vector3(-12.8, 0.9, -30.5), label: 'JAIL CELL TONIC (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(45.0, 0.9, -62.5),  label: 'CRYPT ELIXIR (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(-23.5, 0.9, 46.5),  label: 'HOMESTEAD TONIC (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(-22.2, 0.9, -14.2), label: 'SHERIFF CELL TONIC (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(-19.5, 0.9, 22.0),  label: 'BLACKSMITH TONIC (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(20.0, 0.9, 23.0),   label: 'TELEGRAPH TONIC (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(17.5, 0.9, -29.5),  label: 'UNDERTAKER ELIXIR (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(westDen.insidePos.x, westDen.floorY + 0.55, westDen.insidePos.z), label: 'HIDDEN CELLAR TONIC (+35 HP)', inDen: true },
    { type: 'ammo',   pos: new THREE.Vector3(-19.5, 0.9, 4.0),   label: 'BANK AMMO BOX' },
    { type: 'ammo',   pos: new THREE.Vector3(21.0, 0.9, 6.0),    label: 'LIVERY SHELL CRATE' },
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
    { type: 'bandito', pos: new THREE.Vector3(19, 0.16, -14) },    // Inside General Store
    { type: 'cowboy',  pos: new THREE.Vector3(-18.8, 0.16, -11.5) }, // Inside Sheriff's Office
    { type: 'bandito', pos: new THREE.Vector3(-19.5, 0.14, 21.5) },  // Inside Blacksmith
    { type: 'cowboy',  pos: new THREE.Vector3(19.5, 0.16, 23.0) },   // Inside Telegraph Office
    { type: 'bandito', pos: new THREE.Vector3(17.5, 0.16, -29.0) },  // Inside Undertaker
    // Jail & Saloon
    { type: 'cowboy',  pos: new THREE.Vector3(-14.5, 0.16, -25.8) }, // Outlaw inside JAIL!
    { type: 'bandito', pos: new THREE.Vector3(-2.5, 0.16, -28.0) },  // Inside Saloon
    { type: 'cowboy',  pos: new THREE.Vector3(3.0, 0.16, -28.0) },   // Inside Saloon
    { type: 'bandito', pos: new THREE.Vector3(-8, 0, -18) },
    { type: 'cowboy',  pos: new THREE.Vector3(9, 0, -21) },
    // North road & Boot Hill Cemetery (3 outlaws: 2 in graveyard + 1 hidden in Crypt!)
    { type: 'cowboy',  pos: new THREE.Vector3(17, 0, -37) },
    { type: 'bandito', pos: new THREE.Vector3(28, 0, -44) },
    { type: 'cowboy',  pos: new THREE.Vector3(38, 0, -49) },
    { type: 'bandito', pos: new THREE.Vector3(45, 0.16, -61.5), options: { hideUntilClose: true, ambushDist: 14 } },
    { type: 'bandito', pos: new THREE.Vector3(10, 0, -34) },
    // Western Church nave & 11m belfry guards
    { type: 'cowboy',  pos: new THREE.Vector3(churchX, church.floorY, churchZ - 2.0) },
    { type: 'cowboy',  pos: new THREE.Vector3(twX, belfryY, twZ - 1.4), options: { holdPost: true } },
    // Marksman holding the 12m flat-topped Butte summit!
    { type: 'cowboy',  pos: butte.summitPos.clone() },
    // Boss El Diablo
    { type: 'boss_west', pos: new THREE.Vector3(0, 0, -19), isBossWave: true }
  ];

  const enterableBuildings = [
    { name: 'Saloon', inside: new THREE.Vector3(0, 0.16, -27.5), outside: new THREE.Vector3(0, 0, -20.5) },
    { name: 'Jail', inside: new THREE.Vector3(-15.0, 0.16, -26.0), outside: new THREE.Vector3(-14.9, 0, -20.5) },
    { name: 'Church', inside: new THREE.Vector3(churchX, church.floorY, churchZ), outside: new THREE.Vector3(churchX, 0, churchZ + 9.5) },
    { name: "Sheriff's Office", inside: new THREE.Vector3(-19.5, 0.16, -11.5), outside: new THREE.Vector3(-14.0, 0, -11.5) },
    { name: 'Bank', inside: new THREE.Vector3(-19.2, 0.16, 4.0), outside: new THREE.Vector3(-14.0, 0, 4.0) },
    { name: 'Blacksmith', inside: new THREE.Vector3(-19.5, 0.14, 22.0), outside: new THREE.Vector3(-14.0, 0, 22.0) },
    { name: 'Livery Stable', inside: new THREE.Vector3(20.0, 0.12, 6.0), outside: new THREE.Vector3(13.5, 0, 6.0) },
    { name: 'General Store', inside: new THREE.Vector3(19.5, 0.16, -14.0), outside: new THREE.Vector3(13.5, 0, -14.0) },
    { name: 'Telegraph Office', inside: new THREE.Vector3(19.5, 0.16, 23.0), outside: new THREE.Vector3(14.0, 0, 23.0) },
    { name: 'Undertaker', inside: new THREE.Vector3(17.5, 0.16, -29.0), outside: new THREE.Vector3(17.5, 0, -23.5) },
    { name: 'Boot Hill Crypt', inside: new THREE.Vector3(45.0, 0.16, -61.8), outside: new THREE.Vector3(45.0, 0, -56.5) }
  ];

  // ---- STAGE 7 EXPANSION: RAILROAD DEPOT + BOXCAR CRAWL, SILVER MINE, HOTEL, BARBER, DOCTOR & DRY WASH ----
  // 1. Railroad Line along East Flank (x = 46, z = -42..58) with Steel Rails, Timber Depot, Loading Dock & Crawl-Under Boxcar!
  const matRailIron = new THREE.MeshStandardMaterial({ color: 0x3b3f45, metalness: 0.78, roughness: 0.36 });
  for (const rx of [45.2, 46.8]) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 100), matRailIron);
    rail.position.set(rx, 0.08, 8);
    scene.add(rail);
  }
  for (let tz = -40; tz <= 56; tz += 2.0) {
    const tie = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.08, 0.28), matDarkWood);
    tie.position.set(46, 0.04, tz);
    scene.add(tie);
  }
  const depot = buildHollowRoom(scene, collision, {
    cx: 56, cz: 10, w: 10.5, d: 13.0, h: 4.1, floorY: 0.25,
    wallMat: matWood, floorMat: matFloor, roofMat: matDarkWood, roofStyle: 'gable',
    west: [{ type: 'door', offset: 0, width: 2.6, height: 3.0 }],
    south: [{ type: 'door', offset: 0, width: 2.2, height: 2.8 }],
    interiorLight: { color: 0xffc470, intensity: 1.5, distance: 14 }
  });
  addSign(50.6, 4.3, 10, 5.4, 0.9, -Math.PI / 2, 'RAILROAD DEPOT', 'RED GULCH LINE', '#362115');
  addDesk(scene, collision, 58.6, depot.floorY, 10, 1.8, 0.9, matDarkWood, -1);
  // Crawl-under Boxcar parked on the rails (1.24m clear underneath!) + ladder onto boxcar roof!
  const boxcarCrawl = addCrawlPassage(scene, collision, {
    cx: 46, cz: 26, floorY: 0, w: 3.1, d: 8.4, clearH: 1.24, bodyH: 2.35, mat: matSaloon, postMat: matRailIron
  });
  collision.addWalkable(46, 26, 3.1, 8.4, 3.59, true);
  buildLadder(scene, collision, { x: 44.32, z: 26, bottomY: 0, topY: 3.59, normalX: -1, normalZ: 0, mat: matDarkWood });

  // 2. Silver Mine Drift on the far West cliff (x = -58, z = -12) with 1.24m low timber-framed drift entrance!
  const mineDrift = buildCrawlDen(scene, collision, {
    cx: -58, cz: -12, w: 7.4, d: 6.4, doorSide: 'east',
    wallMat: matStone, floorMat: matStone, roofMat: matDarkWood
  });
  addSign(-54.1, 3.0, -12, 4.4, 0.85, Math.PI / 2, 'SILVER QUEEN MINE', 'KEEP OUT', '#2b1e14');

  // 3. Enterable Frontier Hotel (Lobby, Upper Floor & Roof Ladder!) at South-West Flank (x = -42, z = 34, clear of Butte stair!)
  const hotel = buildHollowRoom(scene, collision, {
    cx: -42, cz: 34, w: 12.0, d: 13.0, h: 7.2, floorY: 0.16,
    wallMat: matWood, floorMat: matFloor, roofMat: matDarkWood, roofStyle: 'flat',
    east: [{ type: 'door', offset: 0, width: 2.6, height: 3.0 }, { type: 'window', offset: -3.8, width: 1.5 }, { type: 'window', offset: 3.8, width: 1.5 }],
    west: [{ type: 'door', offset: 0, width: 2.2, height: 2.8 }],
    interiorLight: { color: 0xffca7a, intensity: 1.8, distance: 16 }
  });
  addSign(-35.8, 7.6, 34, 6.2, 1.0, Math.PI / 2, 'GRAND HOTEL', 'ROOMS & BOARD', '#3b2416');
  addDesk(scene, collision, -45.5, hotel.floorY, 30.2, 2.2, 0.9, matDarkWood, 1);
  addBunk(scene, collision, -45.2, hotel.floorY, 37.8, false, matDarkWood, 0x8a382b);
  // Hotel upper balcony & roof ladder
  collision.addWalkable(-42, 34, 11.6, 12.6, 7.36, true);
  buildLadder(scene, collision, { x: -42, z: 40.68, bottomY: 0, topY: 7.36, normalX: 0, normalZ: 1, mat: matDarkWood });

  // 4. Enterable Barber & Doctor Offices on the South-East back street (x = 34, z = 36 & x = 34, z = 49)
  const barber = buildHollowRoom(scene, collision, {
    cx: 34, cz: 36, w: 8.6, d: 8.0, h: 3.8, floorY: 0.16,
    wallMat: matWeathered, floorMat: matFloor, roofMat: matDarkWood, roofStyle: 'flat',
    west: [{ type: 'door', offset: 0, width: 2.2, height: 2.8 }],
    east: [{ type: 'door', offset: 0, width: 2.0, height: 2.7 }],
    interiorLight: { color: 0xffd28a, intensity: 1.4, distance: 12 }
  });
  addSign(29.5, 4.1, 36, 4.4, 0.85, -Math.PI / 2, 'BARBER SHOP', 'SHAVE & HAIRCUT', '#4d201c');
  addTableAndChairs(scene, collision, 35.8, barber.floorY, 36, matDarkWood);

  const doctor = buildHollowRoom(scene, collision, {
    cx: 34, cz: 49, w: 8.6, d: 8.0, h: 3.8, floorY: 0.16,
    wallMat: matChurchWall, floorMat: matFloor, roofMat: matDarkWood, roofStyle: 'flat',
    west: [{ type: 'door', offset: 0, width: 2.2, height: 2.8 }],
    interiorLight: { color: 0xffe6b8, intensity: 1.4, distance: 12 }
  });
  addSign(29.5, 4.1, 49, 4.4, 0.85, -Math.PI / 2, 'DOC HOLLIDAY', 'PHYSICIAN', '#243642');
  addBunk(scene, collision, 36.2, doctor.floorY, 51.0, false, matDarkWood, 0xeee8dc);

  // 5. Dry Wash Trench flanking unseen from back-lot East street to Boot Hill (low cover banks!)
  for (const bz of [-36, -42, -48]) {
    addSolidBox(scene, collision, 33.5, 0.6, bz, 1.2, 1.2, 4.6, matStone, 'stone');
    addSolidBox(scene, collision, 39.5, 0.6, bz, 1.2, 1.2, 4.6, matStone, 'stone');
  }

  // 6. Thirteen Period West Bystanders (6 women, 7 men — never blocking doorways or paths!)
  const bystanders = spawnBystanders(scene, collision, animated, 'west', [
    { gender: 'female', role: 'barmaid', pos: new THREE.Vector3(3.4, 0.16, -29.2), yaw: 0 },
    { gender: 'male',   role: 'pianist', pos: new THREE.Vector3(-4.2, 0.16, -30.0), yaw: 0.4, seated: true },
    { gender: 'male',   role: 'storekeeper', pos: new THREE.Vector3(21.2, 0.16, -15.6), yaw: -1.5 },
    { gender: 'male',   role: 'telegraph', pos: new THREE.Vector3(21.2, 0.16, 21.6), yaw: -1.4 },
    { gender: 'female', role: 'hotelkeeper', pos: new THREE.Vector3(-44.0, 0.16, 30.6), yaw: 1.3 },
    { gender: 'male',   role: 'barber', pos: new THREE.Vector3(34.6, 0.16, 34.0), yaw: -1.2 },
    { gender: 'male',   role: 'doctor', pos: new THREE.Vector3(35.0, 0.16, 47.4), yaw: -1.3 },
    { gender: 'male',   role: 'undertaker', pos: new THREE.Vector3(19.2, 0.16, -30.5), yaw: -0.6 },
    { gender: 'male',   role: 'preacher', pos: new THREE.Vector3(churchX + 1.8, church.floorY, churchZ - 4.0), yaw: 0.2 },
    { gender: 'female', role: 'washerwoman', pos: new THREE.Vector3(-34.0, 0, 32.0), yaw: 0.8 },
    { gender: 'female', role: 'homestead_wife', pos: new THREE.Vector3(-25.5, 0, 56.0), yaw: 0.5 },
    { gender: 'female', role: 'townswoman', pos: new THREE.Vector3(53.2, 0.25, 13.4), yaw: -1.4 },
    { gender: 'female', role: 'mourner', pos: new THREE.Vector3(34.0, 0, -57.5), yaw: -0.4 }
  ]);

  const specialSpots = {
    zigzagHill: butte,
    jumpRoof: { roofPos: new THREE.Vector3(20, genRoofY, -14), ladder: genLadder },
    waterTowerLadder,
    barnHayloftLadder,
    churchBelfryPos: new THREE.Vector3(twX, belfryY, twZ - 1.4),
    churchTowerBasePos: new THREE.Vector3(twX - 1.9, 0.16, twZ + 2.1),
    raisedHide: westHide,
    crawlDen: westDen,
    extraCrawls: [boxcarCrawl, mineDrift]
  };

  return { enemySpawns, pickups, animated, disposables, enterableBuildings, specialSpots, bystanders };
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
