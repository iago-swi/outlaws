import * as THREE from 'three';
import {
  getWoodPlanks,
  getGroundTexture,
  getStoneTexture,
  createVikingShieldTexture,
  createSailTexture
} from '../engine/textures.js';
import { createSkyDome, createWaterMesh, createAuroraMesh } from '../engine/shaders.js';
import {
  buildHollowRoom,
  addSolidBox,
  addHearth,
  addPewRow,
  addAltar,
  addBunk
} from '../engine/buildings.js';
import { createPickupMesh } from './level1_west.js';

export const LEVEL5_META = {
  id: 'scandinavia',
  index: 4,
  themeClass: 'theme-scandinavia',
  act: 'ACT V • 985 AD',
  title: 'FJORD OF THE NORTH',
  subtitle: 'Frost, Iron & Northern Lights',
  heroName: 'ERIK THE RED',
  objective: 'Storm the Palisade, Defeat the Horned Chieftains & Claim the Great Hall',
  quote: '"Beneath dancing northern lights, longships grind upon frozen shingle. Cross the timber palisade and claim the Great Hall."',
  musicTheme: 'scandinavia',
  enemyIcon: 'ᛟ',
  currency: 'ℳ ',
  spawnPos: new THREE.Vector3(0, 0, 54),
  spawnYaw: 0,
  cameraPreview: { center: new THREE.Vector3(0, 6, -8), radius: 32, height: 21, speed: 0.11 }
};

export function buildLevel5(scene, collision, particles) {
  const disposables = [];
  const animated = [];
  const pickups = [];

  collision.bounds = { minX: -74, maxX: 74, minZ: -76, maxZ: 70 };

  // 1. Arctic Twilight Sky Dome + Animated GLSL Northern Lights (Aurora Borealis!)
  const moonDir = new THREE.Vector3(-0.35, 0.42, -0.84).normalize();
  const sky = createSkyDome({
    topColor: 0x050c24, midColor: 0x0d2247, horizonColor: 0x204d6e,
    sunColor: 0xd9f7ff, sunDirection: moonDir, cloudTint: 0x437a9c, cloudDensity: 0.25
  });
  scene.add(sky.mesh);
  animated.push((t) => { sky.uniforms.uTime.value = t; });

  const aurora1 = createAuroraMesh(320, 74);
  aurora1.mesh.position.set(0, 72, -125);
  aurora1.mesh.rotation.x = 0.22;
  scene.add(aurora1.mesh);

  const aurora2 = createAuroraMesh(270, 60);
  aurora2.mesh.position.set(40, 80, -90);
  aurora2.mesh.rotation.y = -0.35;
  aurora2.mesh.rotation.x = 0.26;
  scene.add(aurora2.mesh);
  animated.push((t) => {
    aurora1.uniforms.uTime.value = t;
    aurora2.uniforms.uTime.value = t * 0.85 + 2.1;
  });

  scene.fog = new THREE.FogExp2(0x162d47, 0.0058);
  scene.add(new THREE.HemisphereLight(0x7ad6c8, 0x2a3b4f, 1.05));

  const moonLight = new THREE.DirectionalLight(0xcbe8ff, 1.9);
  moonLight.position.copy(moonDir).multiplyScalar(120);
  moonLight.castShadow = true;
  moonLight.shadow.mapSize.set(2048, 2048);
  moonLight.shadow.camera.left = -85;
  moonLight.shadow.camera.right = 85;
  moonLight.shadow.camera.top = 85;
  moonLight.shadow.camera.bottom = -85;
  moonLight.shadow.near = 10;
  moonLight.shadow.far = 260;
  moonLight.shadow.bias = -0.0005;
  scene.add(moonLight);

  const auroraGlow = new THREE.DirectionalLight(0x3af0b0, 0.6);
  auroraGlow.position.set(45, 55, -70);
  scene.add(auroraGlow);

  // 2. Icy Norwegian Fjord & Snow Peninsula
  const fjord = createWaterMesh(540, 540, {
    deepColor: 0x061d36, shallowColor: 0x164a6e, foamColor: 0xcbe8ff,
    sunColor: 0xaef7e6, sunDir: moonDir, opacity: 0.92, waveScale: 0.14
  });
  fjord.mesh.position.set(0, -0.25, 0);
  scene.add(fjord.mesh);
  animated.push((t) => { fjord.uniforms.uTime.value = t; });

  const snowTex = getGroundTexture('arctic_snow', 28, 28);
  const ground = new THREE.Mesh(
    new THREE.BoxGeometry(160, 1.2, 158),
    new THREE.MeshStandardMaterial({ map: snowTex.map, roughness: 0.86 })
  );
  ground.position.set(0, -0.6, -2);
  ground.receiveShadow = true;
  scene.add(ground);

  const cobbleTex = getGroundTexture('cobble', 3, 28);
  const trail = new THREE.Mesh(
    new THREE.PlaneGeometry(7.2, 114),
    new THREE.MeshStandardMaterial({ map: cobbleTex.map, color: 0xaab7c4, roughness: 0.88 })
  );
  trail.rotation.x = -Math.PI / 2;
  trail.position.set(0, 0.04, 4);
  trail.receiveShadow = true;
  scene.add(trail);

  // Shared materials
  const nordicWood = getWoodPlanks('alpine', 2, 2);
  const stoneTex = getStoneTexture('castle', 2, 2);
  const matTimber = new THREE.MeshStandardMaterial({ map: nordicWood.map, color: 0x6b523c, roughness: 0.86 });
  const matDarkWood = new THREE.MeshStandardMaterial({ color: 0x2e2119, roughness: 0.88 });
  const matFloor = new THREE.MeshStandardMaterial({ color: 0x453428, roughness: 0.9 });
  const matSnowRoof = new THREE.MeshStandardMaterial({ color: 0xe3edf7, roughness: 0.78 });
  const matStone = new THREE.MeshStandardMaterial({ map: stoneTex.map, color: 0x7b8590, roughness: 0.9 });
  const matPine = new THREE.MeshStandardMaterial({ color: 0x1c3d2d, roughness: 0.88 });
  const matGold = new THREE.MeshStandardMaterial({ color: 0xdca43a, metalness: 0.75, roughness: 0.3 });
  const matHay = new THREE.MeshStandardMaterial({ color: 0xc29e4a, roughness: 0.95 });
  const matSail = new THREE.MeshStandardMaterial({ map: createSailTexture('scandinavia'), side: THREE.DoubleSide, roughness: 0.82 });

  // ---- TIMBER PALISADE WALL WITH WIDE OPEN MAIN GATE (z = 6) ----
  addSolidBox(scene, collision, -24, 2.0, 6, 36, 4.0, 1.1, matTimber, 'wood');
  addSolidBox(scene, collision, 24, 2.0, 6, 36, 4.0, 1.1, matTimber, 'wood');
  // Gate watch posts
  addSolidBox(scene, collision, -5.6, 2.6, 6, 1.2, 5.2, 1.4, matDarkWood, 'wood');
  addSolidBox(scene, collision, 5.6, 2.6, 6, 1.2, 5.2, 1.4, matDarkWood, 'wood');
  const gateBeam = new THREE.Mesh(new THREE.BoxGeometry(12.6, 0.8, 1.2), matDarkWood);
  gateBeam.position.set(0, 4.8, 6);
  scene.add(gateBeam);

  // ---- 1. ENTERABLE JARL'S GREAT HALL (North Climax — posts, central hearth, benches, high seat!) ----
  const greatHall = buildHollowRoom(scene, collision, {
    cx: 0, cz: -42, w: 16, d: 16, h: 5.0, floorY: 0.25,
    wallMat: matTimber, floorMat: matFloor, roofMat: matSnowRoof, roofStyle: 'gable',
    south: [
      { type: 'door', offset: 0, width: 3.4, height: 3.4 },
      { type: 'window', offset: -5.2, width: 1.8 },
      { type: 'window', offset: 5.2, width: 1.8 }
    ],
    west: [{ type: 'window', offset: 0, width: 2.0 }],
    east: [{ type: 'window', offset: 0, width: 2.0 }],
    interiorLight: { color: 0xffa64d, intensity: 2.5, distance: 20 }
  });
  // Interior carved roof posts (solid!), central long hearth, benches, Jarl's high seat!
  for (const [px, pz] of [[-5.0, -38], [5.0, -38], [-5.0, -45], [5.0, -45]]) {
    addSolidBox(scene, collision, px, greatHall.floorY + 2.5, pz, 0.45, 5.0, 0.45, matDarkWood, 'wood');
  }
  addHearth(scene, collision, 0, greatHall.floorY, -41.5, 1.25);
  addPewRow(scene, collision, -5.6, greatHall.floorY, -41.5, 1.2, matDarkWood);
  addPewRow(scene, collision, 5.6, greatHall.floorY, -41.5, 1.2, matDarkWood);
  // Jarl's carved High Seat throne at north end
  addSolidBox(scene, collision, 0, greatHall.floorY + 0.55, -48.2, 2.2, 1.1, 1.3, matDarkWood, 'wood');
  const throneBack = new THREE.Mesh(new THREE.BoxGeometry(1.8, 2.4, 0.28), matDarkWood);
  throneBack.position.set(0, greatHall.floorY + 1.8, -48.7);
  const dragonFinial = new THREE.Mesh(new THREE.OctahedronGeometry(0.32, 0), matGold);
  dragonFinial.position.set(0, greatHall.floorY + 3.15, -48.7);
  scene.add(throneBack, dragonFinial);

  // ---- 2. EVERY LONGHOUSE IS ENTERABLE (hearth & benches inside!) ----
  function buildLonghouse(cx, cz, w, d, doorSide) {
    const opts = {
      cx, cz, w, d, h: 4.0, floorY: 0.18,
      wallMat: matTimber, floorMat: matFloor, roofMat: matSnowRoof, roofStyle: 'gable',
      interiorLight: { color: 0xffa652, intensity: 1.6, distance: 14 }
    };
    opts[doorSide] = [{ type: 'door', offset: 0, width: 2.5, height: 2.9 }];
    const opp = doorSide === 'east' ? 'west' : doorSide === 'west' ? 'east' : 'north';
    opts[opp] = [{ type: 'window', offset: 0, width: 1.6 }];
    const room = buildHollowRoom(scene, collision, opts);
    // Central hearth & wooden benches tucked along walls
    addHearth(scene, collision, cx, room.floorY, cz, 0.85);
    addSolidBox(scene, collision, cx, room.floorY + 0.36, cz - d * 0.36, w * 0.52, 0.72, 0.65, matDarkWood, 'wood');
    addSolidBox(scene, collision, cx, room.floorY + 0.36, cz + d * 0.36, w * 0.52, 0.72, 0.65, matDarkWood, 'wood');
    return room;
  }

  buildLonghouse(-24, -14, 11, 13, 'east');
  buildLonghouse(24, -14, 11, 13, 'west');
  buildLonghouse(-22, 24, 11, 12, 'east');
  buildLonghouse(22, 24, 11, 12, 'west');

  // ---- 3. OUTLYING NORDIC FARM (West snow clearing) ----
  const farm = buildHollowRoom(scene, collision, {
    cx: -52, cz: 26, w: 10, d: 9, h: 3.7, floorY: 0.18,
    wallMat: matTimber, floorMat: matFloor, roofMat: matSnowRoof, roofStyle: 'gable',
    east: [{ type: 'door', offset: 0, width: 2.3, height: 2.8 }],
    south: [{ type: 'window', offset: 0, width: 1.6 }],
    interiorLight: { color: 0xffb366, intensity: 1.4, distance: 12 }
  });
  addBunk(scene, collision, -55.0, farm.floorY, 28.6, false, matDarkWood, 0x5c3e2c);
  addSolidBox(scene, collision, -44, 0.6, 32, 1.8, 1.2, 1.3, matHay, 'wood');
  addSolidBox(scene, collision, -41.5, 0.6, 32, 1.8, 1.2, 1.3, matHay, 'wood');

  // ---- 4. SMALL TEMPLE OF THE OLD GODS (East ridge clearing!) ----
  const hov = buildHollowRoom(scene, collision, {
    cx: 50, cz: -34, w: 10.5, d: 10.5, h: 4.4, floorY: 0.22,
    wallMat: matDarkWood, floorMat: matFloor, roofMat: matSnowRoof, roofStyle: 'hip',
    west: [{ type: 'door', offset: 0, width: 2.5, height: 3.0 }],
    south: [{ type: 'window', offset: 0, width: 1.6 }],
    interiorLight: { color: 0x62f2c8, intensity: 1.7, distance: 14 }
  });
  // Carved timber pagan altar & standing runestone inside
  addAltar(scene, collision, 53.2, hov.floorY, -34, 1.2, 2.8, matStone, 0x8f2424);
  addSolidBox(scene, collision, 53.4, hov.floorY + 1.9, -34, 0.65, 2.0, 1.1, matStone, 'stone');

  // ---- VIKING LONGSHIPS ON SOUTHERN SHORE (solid!) ----
  function addLongship(lx, lz, rotY) {
    const g = new THREE.Group();
    g.position.set(lx, 0, lz);
    g.rotation.y = rotY;
    const hull = new THREE.Mesh(new THREE.BoxGeometry(3.4, 1.35, 13.0), matDarkWood);
    hull.position.y = 0.7;
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.18, 9.2, 8), matTimber);
    mast.position.y = 4.9;
    const sail = new THREE.Mesh(new THREE.PlaneGeometry(6.0, 5.0), matSail);
    sail.position.set(0, 5.4, 0.35);
    g.add(hull, mast, sail);
    const shTex = createVikingShieldTexture(1);
    const shMat = new THREE.MeshStandardMaterial({ map: shTex, roughness: 0.72 });
    for (let i = -2; i <= 2; i++) {
      for (const s of [-1.75, 1.75]) {
        const sh = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.06, 12), [matDarkWood, shMat, matDarkWood]);
        sh.rotation.z = Math.PI / 2;
        sh.position.set(s, 1.15, i * 1.9);
        g.add(sh);
      }
    }
    scene.add(g);
    collision.addBox(lx, 1.3, lz, 4.4, 2.6, 13.0, 'wood');
  }
  addLongship(-34, 56, 0.22);
  addLongship(34, 54, -0.28);

  // Snow-Blanketed Nordic Pines & Fjord Cliffs (ALL solid!)
  function addSnowPine(tx, tz, scale = 1) {
    const g = new THREE.Group();
    g.position.set(tx, 0, tz);
    const tr = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.36, 2.5, 7), matDarkWood);
    tr.position.y = 1.25;
    g.add(tr);
    for (const [py, r, h] of [[3.2, 2.4, 3.0], [5.1, 1.85, 2.6], [6.8, 1.25, 2.1]]) {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(r, h, 8), matPine);
      cone.position.y = py;
      const cap = new THREE.Mesh(new THREE.ConeGeometry(r * 0.72, h * 0.45, 8), matSnowRoof);
      cap.position.y = py + h * 0.3;
      g.add(cone, cap);
    }
    g.scale.setScalar(scale);
    scene.add(g);
    collision.addBox(tx, 2.0, tz, 1.15 * scale, 4.0 * scale, 1.15 * scale, 'wood');
  }
  for (const [px, pz, sc] of [
    [-14, 42, 1.2], [14, 42, 1.2], [-38, 12, 1.3], [38, 12, 1.25],
    [-42, -16, 1.3], [42, -16, 1.25], [-34, -46, 1.35], [34, -48, 1.3],
    [-58, -32, 1.25], [58, 22, 1.2], [-60, 44, 1.2]
  ]) addSnowPine(px, pz, sc);

  // Distant Fjord Mountains
  for (const [mx, mz, r, h] of [
    [-125, -155, 75, 88], [0, -175, 92, 112], [125, -150, 78, 92],
    [-165, 10, 74, 86], [165, 15, 76, 88]
  ]) {
    const m = new THREE.Mesh(new THREE.ConeGeometry(r, h, 7), matStone);
    m.position.set(mx, h * 0.45, mz);
    const s = new THREE.Mesh(new THREE.ConeGeometry(r * 0.56, h * 0.52, 7), matSnowRoof);
    s.position.set(mx, h * 0.72, mz);
    scene.add(m, s);
  }

  // Tactical timber barricades & crates
  for (const [bx, bz, bw, bd] of [
    [-8, 34, 4.2, 1.0], [8, 32, 4.2, 1.0], [-9, -2, 4.4, 1.0], [9, -2, 4.4, 1.0],
    [-9, -24, 4.6, 1.0], [9, -24, 4.6, 1.0]
  ]) addSolidBox(scene, collision, bx, 0.7, bz, bw, 1.4, bd, matTimber, 'wood');

  particles.initAmbient('snow', collision.bounds);

  // ---- PICKUPS ----
  const pickupDefs = [
    { type: 'health', pos: new THREE.Vector3(-22, 0.9, 24),  label: 'LONGHOUSE MEAD (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(-52, 0.9, 26),  label: 'FARMHOUSE RATIONS (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(50, 0.9, -34),  label: 'TEMPLE OFFERING (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(0, 1.0, -45),   label: 'GREAT HALL MEAD (+35 HP)' },
    { type: 'ammo',   pos: new THREE.Vector3(22, 0.9, 24),   label: 'THROWING AXE RACK' },
    { type: 'ammo',   pos: new THREE.Vector3(-24, 0.9, -14), label: 'FORGED IRON AXES' }
  ];
  for (const pd of pickupDefs) {
    const mesh = createPickupMesh(pd.type);
    mesh.position.copy(pd.pos);
    scene.add(mesh);
    pickups.push({ ...pd, mesh, collected: false });
  }

  // ---- 27 ENEMIES (including 4 Horned Viking Chieftains + Horned Jarl Hakon Boss + random horned Vikings!) ----
  const enemySpawns = [
    // Shore & Southern Longhouses + Farm
    { type: 'viking_warrior',   pos: new THREE.Vector3(-8, 0, 38) },
    { type: 'viking_archer',    pos: new THREE.Vector3(8, 0, 36) },
    { type: 'viking_warrior',   pos: new THREE.Vector3(-21, 0.18, 24) }, // SW Longhouse
    { type: 'viking_archer',    pos: new THREE.Vector3(21, 0.18, 24) },  // SE Longhouse
    { type: 'viking_chieftain', pos: new THREE.Vector3(0, 0, 18) },      // Chieftain #1 guarding palisade approach
    { type: 'viking_berserker', pos: new THREE.Vector3(-36, 0, 26) },
    { type: 'viking_warrior',   pos: new THREE.Vector3(-51, 0.18, 26) }, // Outlying Farm
    { type: 'viking_archer',    pos: new THREE.Vector3(-12, 0, 14) },
    { type: 'viking_warrior',   pos: new THREE.Vector3(12, 0, 14) },
    // Beyond Palisade Gate & Middle Longhouses
    { type: 'viking_berserker', pos: new THREE.Vector3(-6, 0, -2) },
    { type: 'viking_archer',    pos: new THREE.Vector3(7, 0, -4) },
    { type: 'viking_chieftain', pos: new THREE.Vector3(-14, 0, -14) },   // Chieftain #2 by West Longhouse
    { type: 'viking_warrior',   pos: new THREE.Vector3(-23, 0.18, -14) }, // Inside West Longhouse
    { type: 'viking_warrior',   pos: new THREE.Vector3(23, 0.18, -14) },  // Inside East Longhouse
    { type: 'viking_archer',    pos: new THREE.Vector3(14, 0, -16) },
    { type: 'viking_berserker', pos: new THREE.Vector3(0, 0, -16) },
    // East Temple of the Old Gods
    { type: 'viking_warrior',   pos: new THREE.Vector3(36, 0, -28) },
    { type: 'viking_chieftain', pos: new THREE.Vector3(42, 0, -34) },    // Chieftain #3 guarding Temple of Old Gods
    { type: 'viking_archer',    pos: new THREE.Vector3(50, 0.22, -34) }, // Inside Temple of Old Gods
    // Great Hall Approaches & Interior
    { type: 'viking_archer',    pos: new THREE.Vector3(-12, 0, -28) },
    { type: 'viking_warrior',   pos: new THREE.Vector3(12, 0, -28) },
    { type: 'viking_berserker', pos: new THREE.Vector3(-6, 0, -30) },
    { type: 'viking_warrior',   pos: new THREE.Vector3(6, 0, -30) },
    { type: 'viking_chieftain', pos: new THREE.Vector3(0, 0.25, -39) },  // Chieftain #4 inside Jarl's Great Hall!
    { type: 'viking_warrior',   pos: new THREE.Vector3(-4, 0.25, -43) }, // Inside Great Hall
    { type: 'viking_archer',    pos: new THREE.Vector3(4, 0.25, -43) },  // Inside Great Hall
    // Boss Jarl Hakon (wearing horned helmet!)
    { type: 'boss_scandinavia', pos: new THREE.Vector3(0, 0, -28), isBossWave: true }
  ];

  const enterableBuildings = [
    { name: "Jarl's Great Hall", inside: new THREE.Vector3(-2.6, 0.25, -39.5), outside: new THREE.Vector3(0, 0, -31.5) },
    { name: 'West Longhouse', inside: new THREE.Vector3(-24, 0.18, -14), outside: new THREE.Vector3(-16.5, 0, -14) },
    { name: 'Temple of the Old Gods', inside: new THREE.Vector3(50, 0.22, -34), outside: new THREE.Vector3(42.5, 0, -34) },
    { name: 'Outlying Farm', inside: new THREE.Vector3(-52, 0.18, 26), outside: new THREE.Vector3(-45, 0, 26) }
  ];

  return { enemySpawns, pickups, animated, disposables, enterableBuildings };
}
