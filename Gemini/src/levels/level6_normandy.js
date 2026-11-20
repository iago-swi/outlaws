import * as THREE from 'three';
import {
  getGroundTexture,
  getStoneTexture,
  getConcreteTexture,
  getWoodPlanks,
  createBalkenkreuzTexture
} from '../engine/textures.js';
import { createSkyDome, createWaterMesh } from '../engine/shaders.js';
import {
  buildHollowRoom,
  addSolidBox,
  addAltar,
  addPewRow,
  addDesk,
  addBunk
} from '../engine/buildings.js';
import { createPickupMesh } from './level1_west.js';

export const LEVEL6_META = {
  id: 'normandy',
  index: 5,
  themeClass: 'theme-normandy',
  act: 'ACT VI • 6 JUNE 1944',
  title: 'NORMANDY',
  subtitle: 'Before First Light',
  heroName: 'LYUDMILA PAVLICHENKO',
  objective: 'Cross the Village, Manor & Church and Silence the Cliff Battery',
  quote: '"The armada waits on the dark Channel horizon. Cross the bocage lanes and occupied village, and silence the cliffside battery before first light."',
  historicalNote: 'Historical note: these three real resistance figures did not meet in Normandy in June 1944; they appear together here as legends.',
  musicTheme: 'normandy',
  enemyIcon: '✚',
  currency: '★ ',
  spawnPos: new THREE.Vector3(0, 0, 56),
  spawnYaw: 0,
  cameraPreview: { center: new THREE.Vector3(0, 6, -8), radius: 48, height: 16, speed: 0.11 }
};

export function buildLevel6(scene, collision, particles) {
  const disposables = [];
  const animated = [];
  const pickups = [];

  collision.bounds = { minX: -76, maxX: 76, minZ: -74, maxZ: 72 };

  // 1. Pre-Dawn Twilight Sky & Crisp Moonlight
  const dawnDir = new THREE.Vector3(0.32, 0.24, -0.92).normalize();
  const sky = createSkyDome({
    topColor: 0x101836, midColor: 0x4b3a66, horizonColor: 0xd99b88,
    sunColor: 0xffd7b5, sunDirection: dawnDir, cloudTint: 0x997ca6, cloudDensity: 0.42
  });
  scene.add(sky.mesh);
  animated.push((t) => { sky.uniforms.uTime.value = t; });

  scene.fog = new THREE.FogExp2(0x3a3752, 0.0052);
  scene.add(new THREE.HemisphereLight(0xa3bce6, 0x3b4536, 1.15));

  const moonLight = new THREE.DirectionalLight(0xcce0ff, 2.2);
  moonLight.position.set(-48, 72, 62);
  moonLight.castShadow = true;
  moonLight.shadow.mapSize.set(2048, 2048);
  moonLight.shadow.camera.left = -88;
  moonLight.shadow.camera.right = 88;
  moonLight.shadow.camera.top = 88;
  moonLight.shadow.camera.bottom = -88;
  moonLight.shadow.near = 10;
  moonLight.shadow.far = 260;
  moonLight.shadow.bias = -0.0005;
  scene.add(moonLight);

  const dawnFill = new THREE.DirectionalLight(0xffbfa3, 0.6);
  dawnFill.position.copy(dawnDir).multiplyScalar(110);
  scene.add(dawnFill);

  // 2. English Channel & Distant Allied Invasion Fleet
  const channel = createWaterMesh(540, 280, {
    deepColor: 0x0d2138, shallowColor: 0x224766, foamColor: 0xaec6de,
    sunColor: 0xffcfb5, sunDir: dawnDir, opacity: 0.94, waveScale: 0.16
  });
  channel.mesh.position.set(0, -4.5, -210);
  scene.add(channel.mesh);
  animated.push((t) => { channel.uniforms.uTime.value = t; });

  const shipMat = new THREE.MeshBasicMaterial({ color: 0x161b29 });
  const shipLights = new THREE.MeshBasicMaterial({ color: 0xffe4a3 });
  for (let i = 0; i < 18; i++) {
    const sx = -170 + i * 20;
    const sz = -195 - (i % 4) * 26;
    const big = i % 3 === 0;
    const hull = new THREE.Mesh(new THREE.BoxGeometry(big ? 14 : 7.5, big ? 3.2 : 1.8, 3.6), shipMat);
    hull.position.set(sx, -3.2, sz);
    const bridge = new THREE.Mesh(new THREE.BoxGeometry(big ? 4.2 : 2.2, big ? 4.5 : 2.2, 2.4), shipMat);
    bridge.position.set(sx, -0.5, sz);
    const sig = new THREE.Mesh(new THREE.SphereGeometry(0.32, 6, 6), shipLights);
    sig.position.set(sx, big ? 2.1 : 0.8, sz);
    scene.add(hull, bridge, sig);
  }

  // Sweeping Pre-Dawn Searchlights & AA Flak Bursts
  const beamMat = new THREE.MeshBasicMaterial({
    color: 0xd9ecff, transparent: true, opacity: 0.15,
    blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide
  });
  for (const sl of [
    { x: -28, z: -64, phase: 0, speed: 0.45, range: 0.48 },
    { x: 0,   z: -66, phase: 2.1, speed: 0.36, range: 0.42 },
    { x: 28,  z: -64, phase: 4.0, speed: 0.52, range: 0.5 }
  ]) {
    const pivot = new THREE.Group();
    pivot.position.set(sl.x, 4.5, sl.z);
    const cone = new THREE.Mesh(new THREE.ConeGeometry(9.5, 125, 14, 1, true), beamMat);
    cone.position.y = 62;
    cone.rotation.x = Math.PI;
    pivot.add(cone);
    scene.add(pivot);
    animated.push((t) => {
      pivot.rotation.z = Math.sin(t * sl.speed + sl.phase) * sl.range;
      pivot.rotation.x = -0.22 + Math.cos(t * sl.speed * 0.7 + sl.phase) * 0.14;
    });
  }
  const flakSpots = [[-36, 44, -82, 0.4], [12, 52, -96, 1.7], [42, 42, -78, 3.1], [-12, 48, -110, 4.5]];
  for (const [fx, fy, fz, ph] of flakSpots) {
    const puff = new THREE.Mesh(
      new THREE.SphereGeometry(2.6, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0xffc670, transparent: true, opacity: 0 })
    );
    puff.position.set(fx, fy, fz);
    scene.add(puff);
    animated.push((t) => {
      const cyc = (t * 0.65 + ph) % 3.0;
      puff.material.opacity = cyc < 0.25 ? (1 - cyc / 0.25) * 0.85 : 0;
      puff.scale.setScalar(1 + cyc * 0.6);
    });
  }

  // 3. Norman Bocage Ground & Cobble Village Road
  const grassTex = getGroundTexture('alpine_meadow', 32, 32);
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(360, 260),
    new THREE.MeshStandardMaterial({ map: grassTex.map, color: 0x627359, roughness: 0.94 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(0, 0, 50);
  ground.receiveShadow = true;
  scene.add(ground);

  const cobbleTex = getGroundTexture('cobble', 3, 28);
  const road = new THREE.Mesh(
    new THREE.PlaneGeometry(7.2, 128),
    new THREE.MeshStandardMaterial({ map: cobbleTex.map, color: 0x8a8c88, roughness: 0.88 })
  );
  road.rotation.x = -Math.PI / 2;
  road.position.set(0, 0.04, 4);
  road.receiveShadow = true;
  scene.add(road);

  // Shared Materials
  const stoneTex = getStoneTexture('castle', 2, 2);
  const concTex = getConcreteTexture(2, 2);
  const woodTex = getWoodPlanks('weathered', 2, 2);
  const matStone = new THREE.MeshStandardMaterial({ map: stoneTex.map, color: 0xb0aa9c, roughness: 0.9 });
  const matConc = new THREE.MeshStandardMaterial({ map: concTex.map, roughness: 0.88 });
  const matSlate = new THREE.MeshStandardMaterial({ color: 0x3b424d, roughness: 0.82 });
  const matWood = new THREE.MeshStandardMaterial({ map: woodTex.map, roughness: 0.86 });
  const matDarkWood = new THREE.MeshStandardMaterial({ color: 0x33241a, roughness: 0.86 });
  const matHedge = new THREE.MeshStandardMaterial({ color: 0x2a4526, roughness: 0.95 });
  const matSandbag = new THREE.MeshStandardMaterial({ color: 0x998c6e, roughness: 0.94 });
  const matMilGrey = new THREE.MeshStandardMaterial({ color: 0x525951, roughness: 0.65, metalness: 0.35 });
  const matSteel = new THREE.MeshStandardMaterial({ color: 0x2c3034, metalness: 0.72, roughness: 0.38 });
  const matCross = new THREE.MeshStandardMaterial({ map: createBalkenkreuzTexture('#525951'), roughness: 0.65 });
  const matCanvas = new THREE.MeshStandardMaterial({ color: 0x626656, roughness: 0.9 });

  // ---- BOCAGE HEDGEROWS LINING THE SUNKEN LANE (South Approach — solid!) ----
  for (const [hx, hz, hw, hd] of [
    [-10, 44, 10, 2.2], [10, 44, 10, 2.2], [-22, 36, 2.4, 16], [22, 36, 2.4, 16],
    [-12, 30, 12, 2.2], [12, 30, 12, 2.2]
  ]) addSolidBox(scene, collision, hx, 1.35, hz, hw, 2.7, hd, matHedge, 'wood');

  // ---- 1. ENTERABLE STONE NORMAN VILLAGE HOUSES (Ground floor hollow + upper stone story!) ----
  function buildNormanHouse(cx, cz, w, d, doorSide) {
    const opts = {
      cx, cz, w, d, h: 3.6, floorY: 0.16,
      wallMat: matStone, floorMat: matWood, roofMat: matSlate, roofStyle: 'none',
      interiorLight: { color: 0xffc688, intensity: 1.4, distance: 12 }
    };
    opts[doorSide] = [
      { type: 'door', offset: 0, width: 2.3, height: 2.8 },
      { type: 'window', offset: 3.2, width: 1.5 }
    ];
    const opp = doorSide === 'east' ? 'west' : doorSide === 'west' ? 'east' : 'north';
    opts[opp] = [{ type: 'window', offset: 0, width: 1.6 }];
    const room = buildHollowRoom(scene, collision, opts);

    const upper = new THREE.Mesh(new THREE.BoxGeometry(w, 3.0, d), matStone);
    upper.position.set(cx, room.roofY + 1.5, cz);
    const roof = new THREE.Mesh(new THREE.ConeGeometry(Math.max(w, d) * 0.82, 2.8, 4), matSlate);
    roof.rotation.y = Math.PI / 4;
    roof.position.set(cx, room.roofY + 4.4, cz);
    scene.add(upper, roof);
    collision.addBox(cx, room.roofY + 1.5, cz, w, 3.0, d, 'stone');
    addDesk(scene, collision, cx + (doorSide === 'east' ? -2.4 : 2.4), room.floorY, cz, 1.5, 0.85, matDarkWood, 1);
    return room;
  }

  buildNormanHouse(-19, 16, 10, 10, 'east');
  buildNormanHouse(19, 16, 10, 10, 'west');
  buildNormanHouse(-19, -4, 10, 10, 'east');

  // ---- 2. ENTERABLE NORMAN PARISH CHURCH (Pews, Altar & Tall Stone Bell Tower!) ----
  const church = buildHollowRoom(scene, collision, {
    cx: 21, cz: -12, w: 11.5, d: 16, h: 5.0, floorY: 0.2,
    wallMat: matStone, floorMat: matStone, roofMat: matSlate, roofStyle: 'gable',
    west: [
      { type: 'door', offset: 0, width: 2.4, height: 3.1 },
      { type: 'window', offset: -4.5, width: 1.5 },
      { type: 'window', offset: 4.5, width: 1.5 }
    ],
    south: [{ type: 'door', offset: 0, width: 2.3, height: 3.0 }],
    interiorLight: { color: 0xffd299, intensity: 1.7, distance: 16 }
  });
  const steeple = new THREE.Mesh(new THREE.BoxGeometry(3.4, 6.5, 3.4), matStone);
  steeple.position.set(21, church.roofY + 3.4, -17.5);
  const spire = new THREE.Mesh(new THREE.ConeGeometry(2.6, 5.5, 4), matSlate);
  spire.rotation.y = Math.PI / 4;
  spire.position.set(21, church.roofY + 9.2, -17.5);
  scene.add(steeple, spire);
  addAltar(scene, collision, 21, church.floorY, -18.2, 2.8, 1.0, matStone, 0x8f2222);
  addPewRow(scene, collision, 23.2, church.floorY, -13.5, 3.2, matDarkWood);
  addPewRow(scene, collision, 23.2, church.floorY, -10.5, 3.2, matDarkWood);
  addPewRow(scene, collision, 23.2, church.floorY, -7.5, 3.2, matDarkWood);

  // ---- 3. ENTERABLE CONCRETE COMMAND BUNKER ON CLIFF ABOVE THE SEA ----
  const bunker = buildHollowRoom(scene, collision, {
    cx: 0, cz: -46, w: 16, d: 12, h: 4.2, floorY: 0.2,
    wallMat: matConc, floorMat: matConc, roofMat: matConc, roofStyle: 'flat',
    south: [
      { type: 'window', offset: -5.2, width: 2.4, sill: 1.15, top: 2.25 },
      { type: 'door', offset: 0, width: 2.8, height: 3.0 },
      { type: 'window', offset: 5.2, width: 2.4, sill: 1.15, top: 2.25 }
    ],
    west: [{ type: 'door', offset: 0, width: 2.2, height: 2.8 }],
    east: [{ type: 'door', offset: 0, width: 2.2, height: 2.8 }],
    interiorLight: { color: 0xffd288, intensity: 2.0, distance: 18 }
  });
  // Heavy coastal artillery gun barrel pointing north over the Channel
  const cannon = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.38, 9.5, 10), matSteel);
  cannon.rotation.x = Math.PI / 2 - 0.12;
  cannon.position.set(0, 3.4, -55);
  scene.add(cannon);
  // Bunker interior: tactical map table, military radio desk, soldiers' bunks!
  addSolidBox(scene, collision, 0, bunker.floorY + 0.48, -46, 2.6, 0.96, 1.5, matDarkWood, 'wood');
  const mapSheet = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 1.15), new THREE.MeshStandardMaterial({ color: 0xe6dec8, roughness: 0.85 }));
  mapSheet.rotation.x = -Math.PI / 2;
  mapSheet.position.set(0, bunker.floorY + 0.98, -46);
  scene.add(mapSheet);
  addDesk(scene, collision, -5.6, bunker.floorY, -49.5, 1.8, 0.85, matSteel, 1);
  const radio = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.55, 0.45), matSteel);
  radio.position.set(-5.6, bunker.floorY + 1.12, -49.5);
  scene.add(radio);
  addBunk(scene, collision, 5.6, bunker.floorY, -49.5, false, matSteel, 0x4b5246);

  // ---- 4. OUTLYING WALLED MANOR (West Countryside!) ----
  addSolidBox(scene, collision, -50, 1.4, -28, 28, 2.8, 0.6, matStone, 'stone');
  addSolidBox(scene, collision, -50, 1.4, 2, 28, 2.8, 0.6, matStone, 'stone');
  addSolidBox(scene, collision, -64, 1.4, -13, 0.6, 2.8, 30, matStone, 'stone');
  addSolidBox(scene, collision, -36, 1.4, -22, 0.6, 2.8, 12, matStone, 'stone');
  addSolidBox(scene, collision, -36, 1.4, -4, 0.6, 2.8, 12, matStone, 'stone');
  // Open 6m gate on east manor wall (z = -16..-10)
  const manor = buildHollowRoom(scene, collision, {
    cx: -52, cz: -13, w: 12, d: 14, h: 4.2, floorY: 0.18,
    wallMat: matStone, floorMat: matWood, roofMat: matSlate, roofStyle: 'gable',
    east: [
      { type: 'window', offset: -4.0, width: 1.8 },
      { type: 'door', offset: 0, width: 2.5, height: 3.0 },
      { type: 'window', offset: 4.0, width: 1.8 }
    ],
    interiorLight: { color: 0xffc688, intensity: 1.7, distance: 15 }
  });
  addDesk(scene, collision, -55.2, manor.floorY, -13, 1.8, 0.9, matDarkWood, 1);
  addBunk(scene, collision, -55.0, manor.floorY, -18.0, false, matDarkWood, 0x6b3a3a);

  // ---- 5. OUTLYING NORMAN WINDMILL (East Ridge — Enterable base + rotating sails!) ----
  const mill = buildHollowRoom(scene, collision, {
    cx: 50, cz: 24, w: 9.0, d: 9.0, h: 4.0, floorY: 0.2,
    wallMat: matStone, floorMat: matWood, roofMat: matSlate, roofStyle: 'none',
    west: [{ type: 'door', offset: 0, width: 2.3, height: 2.8 }],
    south: [{ type: 'window', offset: 0, width: 1.5 }],
    interiorLight: { color: 0xffbe72, intensity: 1.4, distance: 12 }
  });
  const millUpper = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 4.4, 7.5, 10), matStone);
  millUpper.position.set(50, mill.roofY + 3.75, 24);
  const millCap = new THREE.Mesh(new THREE.ConeGeometry(3.6, 2.8, 10), matSlate);
  millCap.position.set(50, mill.roofY + 8.9, 24);
  scene.add(millUpper, millCap);
  // Slowly rotating wooden windmill sails!
  const sailHub = new THREE.Group();
  sailHub.position.set(46.2, mill.roofY + 6.8, 24);
  for (let i = 0; i < 4; i++) {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.14, 5.2, 0.9), matWood);
    blade.position.set(0, Math.cos((i * Math.PI) / 2) * 2.6, Math.sin((i * Math.PI) / 2) * 2.6);
    blade.rotation.x = (i * Math.PI) / 2;
    sailHub.add(blade);
  }
  scene.add(sailHub);
  animated.push((t) => { sailHub.rotation.x = t * 0.42; });

  // ---- PARKED MILITARY VEHICLES (Plain Bar Cross Only — ALL SOLID!) ----
  // Parked Tank near checkpoint
  const tankGrp = new THREE.Group();
  tankGrp.position.set(-10, 0, -24);
  tankGrp.rotation.y = 0.28;
  const hull = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.35, 5.8), matMilGrey);
  hull.position.y = 0.95;
  const turret = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.95, 2.4), matCross);
  turret.position.set(0, 2.05, 0.2);
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.13, 3.6, 8), matSteel);
  barrel.rotation.x = Math.PI / 2;
  barrel.position.set(0, 2.05, 2.6);
  tankGrp.add(hull, turret, barrel);
  scene.add(tankGrp);
  collision.addBox(-10, 1.3, -24, 3.8, 2.6, 6.2, 'solid');

  // Parked Military Supply Truck
  const truckGrp = new THREE.Group();
  truckGrp.position.set(11, 0, 28);
  truckGrp.rotation.y = -0.2;
  const cab = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.1, 2.1), matMilGrey);
  cab.position.set(0, 1.45, 2.2);
  const bed = new THREE.Mesh(new THREE.BoxGeometry(2.5, 2.3, 4.4), matCanvas);
  bed.position.set(0, 1.7, -1.0);
  truckGrp.add(cab, bed);
  scene.add(truckGrp);
  collision.addBox(11, 1.4, 28, 3.0, 2.8, 6.8, 'solid');

  // Sandbag MG Emplacements (solid!)
  for (const [sx, sz] of [[-7, -30], [7, -30], [0, -14]]) {
    addSolidBox(scene, collision, sx, 0.58, sz, 3.8, 1.16, 1.1, matSandbag, 'stone');
  }

  // Checkpoint barrier & trees (solid!)
  addSolidBox(scene, collision, -4.5, 1.2, -14, 1.8, 2.4, 1.8, matWood, 'wood');
  for (const [tx, tz] of [[-32, 30], [34, 36], [-30, 8], [38, 4], [-32, -38], [38, -32], [58, -10]]) {
    const tr = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.44, 4.0, 7), matDarkWood);
    tr.position.set(tx, 2.0, tz);
    const cr = new THREE.Mesh(new THREE.IcosahedronGeometry(2.5, 1), matHedge);
    cr.position.set(tx, 4.8, tz);
    scene.add(tr, cr);
    collision.addBox(tx, 2.2, tz, 1.2, 4.4, 1.2, 'wood');
  }

  particles.initAmbient('alpine', collision.bounds);

  // ---- PICKUPS ----
  const pickupDefs = [
    { type: 'health', pos: new THREE.Vector3(-19, 0.9, 16),   label: 'RESISTANCE MEDKIT (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(21, 0.9, -12),   label: 'CHURCH FIRST AID (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(-52, 0.9, -13),  label: 'MANOR BANDAGES (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(50, 0.9, 24),    label: 'WINDMILL RATIONS (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(0, 0.9, -43),    label: 'BUNKER MEDKIT (+35 HP)' },
    { type: 'ammo',   pos: new THREE.Vector3(19, 0.9, 16),    label: 'ALLIED AMMO DROP' },
    { type: 'ammo',   pos: new THREE.Vector3(-19, 0.9, -4),   label: 'RESISTANCE AMMO CACHE' }
  ];
  for (const pd of pickupDefs) {
    const mesh = createPickupMesh(pd.type);
    mesh.position.copy(pd.pos);
    scene.add(mesh);
    pickups.push({ ...pd, mesh, collected: false });
  }

  // ---- 31 ENEMIES (Riflemen, Officers, Sandbag MG Gunners, Guard Dogs, Boss Major Vogel) ----
  const enemySpawns = [
    // Sunken lane & village south
    { type: 'german_rifleman', pos: new THREE.Vector3(-5, 0, 38) },
    { type: 'guard_dog',       pos: new THREE.Vector3(4, 0, 36) },
    { type: 'german_rifleman', pos: new THREE.Vector3(6, 0, 26) },
    { type: 'german_officer',  pos: new THREE.Vector3(-6, 0, 22) },
    { type: 'german_rifleman', pos: new THREE.Vector3(-18, 0.16, 16) }, // House 1
    { type: 'german_rifleman', pos: new THREE.Vector3(18, 0.16, 16) },  // House 2
    // Windmill East Ridge
    { type: 'german_rifleman', pos: new THREE.Vector3(34, 0, 22) },
    { type: 'guard_dog',       pos: new THREE.Vector3(41, 0, 24) },
    { type: 'german_officer',  pos: new THREE.Vector3(50, 0.2, 24) },   // Inside Windmill
    // Village Center & Church
    { type: 'german_rifleman', pos: new THREE.Vector3(0, 0, 10) },
    { type: 'guard_dog',       pos: new THREE.Vector3(-8, 0, 4) },
    { type: 'german_rifleman', pos: new THREE.Vector3(-18, 0.16, -4) }, // House 3
    { type: 'german_officer',  pos: new THREE.Vector3(10, 0, -4) },
    { type: 'german_rifleman', pos: new THREE.Vector3(20, 0.2, -12) },  // Inside Church
    { type: 'german_officer',  pos: new THREE.Vector3(20, 0.2, -16) },  // Inside Church
    // Walled Manor West Countryside
    { type: 'german_rifleman', pos: new THREE.Vector3(-30, 0, -12) },
    { type: 'guard_dog',       pos: new THREE.Vector3(-42, 0, -13) },
    { type: 'german_officer',  pos: new THREE.Vector3(-51, 0.18, -13) }, // Inside Manor
    { type: 'german_rifleman', pos: new THREE.Vector3(-52, 0.18, -9) },  // Inside Manor
    // Checkpoint & Sandbag MG Positions
    { type: 'german_mg',       pos: new THREE.Vector3(0, 0, -15.5) },
    { type: 'german_rifleman', pos: new THREE.Vector3(-11, 0, -18) },
    { type: 'german_rifleman', pos: new THREE.Vector3(11, 0, -22) },
    { type: 'guard_dog',       pos: new THREE.Vector3(4, 0, -24) },
    // Battery Approach & Command Bunker
    { type: 'german_mg',       pos: new THREE.Vector3(-7, 0, -31.5) },
    { type: 'german_mg',       pos: new THREE.Vector3(7, 0, -31.5) },
    { type: 'german_rifleman', pos: new THREE.Vector3(-16, 0, -36) },
    { type: 'german_officer',  pos: new THREE.Vector3(16, 0, -36) },
    { type: 'german_rifleman', pos: new THREE.Vector3(-4, 0.2, -45) },  // Inside Bunker
    { type: 'german_officer',  pos: new THREE.Vector3(4, 0.2, -45) },   // Inside Bunker
    { type: 'guard_dog',       pos: new THREE.Vector3(-8, 0, -38) },
    // Boss Major Vogel
    { type: 'boss_normandy',   pos: new THREE.Vector3(0, 0, -36), isBossWave: true }
  ];

  const enterableBuildings = [
    { name: 'Parish Church', inside: new THREE.Vector3(20.5, 0.2, -12), outside: new THREE.Vector3(13, 0, -12) },
    { name: 'Command Bunker', inside: new THREE.Vector3(0, 0.2, -44), outside: new THREE.Vector3(0, 0, -37.5) },
    { name: 'Walled Manor', inside: new THREE.Vector3(-52, 0.18, -13), outside: new THREE.Vector3(-43, 0, -13) },
    { name: 'Norman Windmill', inside: new THREE.Vector3(50, 0.2, 24), outside: new THREE.Vector3(43, 0, 24) }
  ];

  return { enemySpawns, pickups, animated, disposables, enterableBuildings };
}
