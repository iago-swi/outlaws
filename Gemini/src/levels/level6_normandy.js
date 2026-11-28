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
  buildLadder,
  buildRaisedHide,
  buildCrawlDen,
  addSolidBox,
  addAltar,
  addPewRow,
  addDesk,
  addBunk,
  addCrawlPassage,
  addTableAndChairs
} from '../engine/buildings.js';
import { createPickupMesh } from './level1_west.js';
import { spawnBystanders } from '../entities/bystanders.js';

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
  cameraPreview: { center: new THREE.Vector3(0, 6, -6), radius: 32, height: 22, speed: 0.11 }
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

  // ---- 2. BOMBED-OUT NORMAN PARISH CHURCH RUIN (No roof, breached walls, jagged fragments, broken tower, fallen bell, charred beams, rubble & small fire!) ----
  {
    const cx = 21, cz = -12, cw = 11.5, cd = 16, fy = 0.2;
    const matCharred = new THREE.MeshStandardMaterial({ color: 0x1a1715, roughness: 0.96 });
    const matRubble = new THREE.MeshStandardMaterial({ color: 0x827d73, roughness: 0.96 });
    const matBell = new THREE.MeshStandardMaterial({ color: 0x4b5c48, metalness: 0.72, roughness: 0.36 });

    // Stone church floor slab (open to the pre-dawn sky — NO ROOF!)
    const floorMesh = new THREE.Mesh(new THREE.BoxGeometry(cw, 0.5, cd), matStone);
    floorMesh.position.set(cx, fy - 0.25, cz);
    floorMesh.receiveShadow = true;
    scene.add(floorMesh);
    collision.addWalkable(cx, cz, cw + 0.3, cd + 0.3, fy);

    // Standing jagged wall fragments with wide bomb breaches (all passages >= 2.6m wide!)
    // West wall fragments (breached in the middle)
    addSolidBox(scene, collision, cx - cw * 0.5 + 0.25, fy + 2.3, cz - 5.6, 0.5, 4.6, 4.8, matStone, 'stone');
    addSolidBox(scene, collision, cx - cw * 0.5 + 0.25, fy + 1.4, cz + 5.8, 0.5, 2.8, 4.4, matStone, 'stone');
    // East wall fragments (blown-out wide shell breach!)
    addSolidBox(scene, collision, cx + cw * 0.5 - 0.25, fy + 2.4, cz - 5.4, 0.5, 4.8, 5.2, matStone, 'stone');
    addSolidBox(scene, collision, cx + cw * 0.5 - 0.25, fy + 1.7, cz + 5.4, 0.5, 3.4, 5.2, matStone, 'stone');
    // South gable wall fragments flanking wide portal
    addSolidBox(scene, collision, cx - 3.6, fy + 2.1, cz + cd * 0.5 - 0.25, 4.2, 4.2, 0.5, matStone, 'stone');
    addSolidBox(scene, collision, cx + 3.6, fy + 1.5, cz + cd * 0.5 - 0.25, 4.2, 3.0, 0.5, matStone, 'stone');
    // North apse wall fragments
    addSolidBox(scene, collision, cx - 3.4, fy + 2.5, cz - cd * 0.5 + 0.25, 4.6, 5.0, 0.5, matStone, 'stone');
    addSolidBox(scene, collision, cx + 3.4, fy + 1.9, cz - cd * 0.5 + 0.25, 4.6, 3.8, 0.5, matStone, 'stone');

    // Broken-off jagged stone bell tower stub on north-east corner (no spire!)
    addSolidBox(scene, collision, cx + 4.0, fy + 3.6, cz - 6.8, 3.2, 7.2, 3.2, matStone, 'stone');
    const jag1 = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.8, 1.2), matStone);
    jag1.position.set(cx + 3.1, fy + 7.9, cz - 7.6);
    const jag2 = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.2, 1.5), matStone);
    jag2.position.set(cx + 4.9, fy + 7.5, cz - 6.0);
    scene.add(jag1, jag2);

    // Fallen Bronze Bell lying half-buried in rubble!
    const bellGrp = new THREE.Group();
    bellGrp.position.set(cx + 2.4, fy + 0.65, cz - 3.2);
    bellGrp.rotation.set(1.15, 0.4, 0.55);
    const bellBody = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.72, 1.35, 14), matBell);
    const bellCrown = new THREE.Mesh(new THREE.SphereGeometry(0.42, 10, 8), matBell);
    bellCrown.position.y = 0.68;
    bellGrp.add(bellBody, bellCrown);
    scene.add(bellGrp);
    collision.addBox(cx + 2.4, fy + 0.6, cz - 3.2, 1.4, 1.2, 1.4, 'solid');

    // Stone rubble piles & tilted charred fallen roof beams
    for (const [rx, rz, rw, rh, rd] of [
      [cx - 3.4, cz - 2.6, 1.8, 0.85, 1.6],
      [cx + 3.8, cz + 2.4, 1.6, 0.75, 1.8],
      [cx - 3.8, cz + 3.8, 1.5, 0.65, 1.4]
    ]) {
      addSolidBox(scene, collision, rx, fy + rh * 0.5, rz, rw, rh, rd, matRubble, 'stone');
    }
    for (const [bx, by, bz, len, rx, rz] of [
      [cx - 3.2, fy + 1.45, cz - 2.2, 5.2, 0.15, -0.52],
      [cx + 3.4, fy + 1.3, cz + 2.6, 4.8, -0.2, 0.48],
      [cx - 2.0, fy + 0.32, cz + 4.4, 3.6, 0.05, 1.45]
    ]) {
      const beam = new THREE.Mesh(new THREE.BoxGeometry(0.28, len, 0.28), matCharred);
      beam.position.set(bx, by, bz);
      beam.rotation.set(rx, 0.2, rz);
      scene.add(beam);
    }

    // Small flickering ruin fire amidst charred timbers (warm glow + rising smoke!)
    const fireEmbers = new THREE.Mesh(new THREE.CylinderGeometry(0.68, 0.82, 0.26, 8), new THREE.MeshBasicMaterial({ color: 0xff4c12 }));
    fireEmbers.position.set(cx - 2.6, fy + 0.13, cz + 1.2);
    const ruinFlame = new THREE.Mesh(new THREE.ConeGeometry(0.55, 1.35, 8), new THREE.MeshBasicMaterial({ color: 0xff9224 }));
    ruinFlame.position.set(cx - 2.6, fy + 0.85, cz + 1.2);
    const ruinFireLight = new THREE.PointLight(0xff7e26, 6.5, 18);
    ruinFireLight.position.set(cx - 2.6, fy + 1.6, cz + 1.2);
    scene.add(fireEmbers, ruinFlame, ruinFireLight);
    animated.push((t) => {
      ruinFlame.scale.y = 0.82 + Math.sin(t * 11.5) * 0.24;
      ruinFireLight.intensity = 6.0 + Math.sin(t * 9.3) * 1.4;
    });
    particles.addMistEmitter(new THREE.Vector3(cx - 2.6, fy + 1.4, cz + 1.2), 1.4);

    // Surviving stone altar & two splintered pews
    addAltar(scene, collision, cx, fy, cz - 6.6, 2.6, 1.0, matStone, 0x8f2222);
    addPewRow(scene, collision, cx + 3.2, fy, cz - 0.5, 2.8, matDarkWood);
  }

  // ---- 2B. ENTERABLE NORMAN FARM BARN (West of Southern Village — hay bales, stalls & farm cart!) ----
  const farmBarn = buildHollowRoom(scene, collision, {
    cx: -36, cz: 20, w: 11.5, d: 13.0, h: 4.8, floorY: 0.14,
    wallMat: matStone, floorMat: matWood, roofMat: matSlate, roofStyle: 'gable',
    east: [{ type: 'door', offset: 0, width: 3.4, height: 3.4 }],
    south: [{ type: 'door', offset: 0, width: 2.6, height: 3.0 }],
    west: [{ type: 'window', offset: 0, width: 1.8 }],
    interiorLight: { color: 0xffbf72, intensity: 1.5, distance: 15 }
  });
  const matHay = new THREE.MeshStandardMaterial({ color: 0xc9a44a, roughness: 0.95 });
  addSolidBox(scene, collision, -39.4, farmBarn.floorY + 0.65, 16.0, 2.4, 1.3, 2.0, matHay, 'wood');
  addSolidBox(scene, collision, -39.4, farmBarn.floorY + 0.65, 24.0, 2.4, 1.3, 2.0, matHay, 'wood');
  addSolidBox(scene, collision, -34.2, farmBarn.floorY + 0.6, 15.2, 2.8, 1.2, 1.6, matDarkWood, 'wood');

  // ---- BOMB CRATERS (Blasted earth rings with dark scorched centers!) ----
  const matScorched = new THREE.MeshStandardMaterial({ color: 0x1e1916, roughness: 0.98 });
  const matDirtRim = new THREE.MeshStandardMaterial({ color: 0x524536, roughness: 0.96 });
  for (const [cx, cz, cr] of [
    [9.5, -10.0, 2.7], [28.5, -4.0, 3.0], [-10.0, 6.0, 2.6],
    [12.0, -34.0, 3.2], [-22.0, -32.0, 2.8], [-25.0, 28.0, 2.5]
  ]) {
    const pit = new THREE.Mesh(new THREE.CircleGeometry(cr * 0.78, 16), matScorched);
    pit.rotation.x = -Math.PI / 2;
    pit.position.set(cx, 0.05, cz);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(cr * 0.92, 0.36, 7, 16), matDirtRim);
    rim.rotation.x = Math.PI / 2;
    rim.position.set(cx, 0.12, cz);
    scene.add(pit, rim);
  }

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

  // ---- 6.4 RAISED BOCAGE SNIPER HIDE (2 jump crates) & CROUCH-ONLY RESISTANCE DEN (1.25m door!) ----
  const normandyHide = buildRaisedHide(scene, collision, {
    cx: 13, cz: 37, deckY: 2.2, w: 4.2, d: 4.2, openSide: 'south',
    wallMat: matWood, floorMat: matWood, postMat: matDarkWood, jumpMat: matWood
  });
  const normandyDen = buildCrawlDen(scene, collision, {
    cx: -12, cz: 25, w: 5.2, d: 4.8, doorSide: 'east',
    wallMat: matConc, floorMat: matStone, roofMat: matConc
  });

  // ---- PICKUPS ----
  const pickupDefs = [
    { type: 'health', pos: new THREE.Vector3(-19, 0.9, 16),   label: 'RESISTANCE MEDKIT (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(-35, 0.9, 20),   label: 'FARM BARN BANDAGES (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(21, 0.9, -12),   label: 'CHURCH RUIN FIRST AID (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(-52, 0.9, -13),  label: 'MANOR BANDAGES (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(50, 0.9, 24),    label: 'WINDMILL RATIONS (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(0, 0.9, -43),    label: 'BUNKER MEDKIT (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(normandyDen.insidePos.x, normandyDen.floorY + 0.55, normandyDen.insidePos.z), label: 'HIDDEN CELLAR MEDKIT (+35 HP)', inDen: true },
    { type: 'ammo',   pos: new THREE.Vector3(19, 0.9, 16),    label: 'ALLIED AMMO DROP' },
    { type: 'ammo',   pos: new THREE.Vector3(-19, 0.9, -4),   label: 'RESISTANCE AMMO CACHE' }
  ];
  for (const pd of pickupDefs) {
    const mesh = createPickupMesh(pd.type);
    mesh.position.copy(pd.pos);
    scene.add(mesh);
    pickups.push({ ...pd, mesh, collected: false });
  }

  // ---- 32 ENEMIES (Riflemen, Officers, Sandbag MG Gunners, Guard Dogs, Farm Barn, Church Ruin, Boss Major Vogel) ----
  const enemySpawns = [
    // Sunken lane & village south
    { type: 'german_rifleman', pos: new THREE.Vector3(-5, 0, 38) },
    { type: 'guard_dog',       pos: new THREE.Vector3(4, 0, 36) },
    { type: 'german_rifleman', pos: new THREE.Vector3(6, 0, 26) },
    { type: 'german_officer',  pos: new THREE.Vector3(-6, 0, 22) },
    { type: 'german_rifleman', pos: new THREE.Vector3(-18, 0.16, 16) }, // House 1
    { type: 'german_rifleman', pos: new THREE.Vector3(-35, 0.14, 20) }, // Inside Farm Barn
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
    { name: 'Bombed Parish Church Ruin', inside: new THREE.Vector3(20.5, 0.2, -12), outside: new THREE.Vector3(13, 0, -12) },
    { name: 'Farm Barn', inside: new THREE.Vector3(-35, 0.14, 20), outside: new THREE.Vector3(-28, 0, 20) },
    { name: 'Command Bunker', inside: new THREE.Vector3(0, 0.2, -44), outside: new THREE.Vector3(0, 0, -37.5) },
    { name: 'Walled Manor', inside: new THREE.Vector3(-52, 0.18, -13), outside: new THREE.Vector3(-43, 0, -13) },
    { name: 'Norman Windmill', inside: new THREE.Vector3(50, 0.2, 24), outside: new THREE.Vector3(43, 0, 24) }
  ];

  // ---- STAGE 7 EXPANSION: 14 BOCAGE HEDGEROW CRAWL HOLES, RAILWAY HALT WITH 2 BOXCARS, CIDER FARM, SCHOOL, GLIDER WRECK & 12 SHELTERED BYSTANDERS ----
  const n7Hedge = new THREE.MeshStandardMaterial({ color: 0x243b1e, roughness: 0.96 });
  const n7Stone = new THREE.MeshStandardMaterial({ color: 0x7a766d, roughness: 0.9 });
  const n7Wood = new THREE.MeshStandardMaterial({ color: 0x4b3524, roughness: 0.88 });
  const n7Slate = new THREE.MeshStandardMaterial({ color: 0x3b424c, roughness: 0.82 });
  const n7Iron = new THREE.MeshStandardMaterial({ color: 0x383c42, metalness: 0.72, roughness: 0.4 });

  // 1. Fourteen Bocage Hedgerow Crawl Holes (1.24m clear height!) opening off both flanks of the road!
  const hedgeHoles = [];
  const hedgeCoords = [
    [-12, 34], [-26, 26], [-12, 10], [-12, 2], [-12, -10], [-12, -20], [-26, -26],
    [12, 34],  [28, 26],  [12, 10],  [12, 2],  [12, -10],  [12, -20],  [12, -30]
  ];
  for (const [hx, hz] of hedgeCoords) {
    hedgeHoles.push(addCrawlPassage(scene, collision, {
      cx: hx, cz: hz, floorY: 0, w: 2.2, d: 2.8, clearH: 1.24, bodyH: 1.65, mat: n7Hedge, postMat: n7Hedge, tag: 'wood'
    }));
  }

  // 2. Railway Halt on Far East Flank (x = 46, z = -10..-34) with 2 Crawl-Under Boxcars (1.24m!) + ladder
  const railCar1 = addCrawlPassage(scene, collision, {
    cx: 46, cz: -12, floorY: 0, w: 3.1, d: 7.4, clearH: 1.24, bodyH: 2.25, mat: n7Wood, postMat: n7Iron
  });
  const railCar2 = addCrawlPassage(scene, collision, {
    cx: 46, cz: -24, floorY: 0, w: 3.1, d: 7.4, clearH: 1.24, bodyH: 2.25, mat: n7Slate, postMat: n7Iron
  });
  collision.addWalkable(46, -12, 3.1, 7.4, 3.49, true);
  buildLadder(scene, collision, { x: 44.3, z: -12, bottomY: 0, topY: 3.49, normalX: -1, normalZ: 0, mat: n7Wood });

  // 3. Enterable Cider Farm (West South, x = -44, z = 36) & Village School/Café (East South, x = 36, z = 40)
  const ciderFarm = buildHollowRoom(scene, collision, {
    cx: -44, cz: 36, w: 9.5, d: 9.0, h: 3.9, floorY: 0.16,
    wallMat: n7Stone, floorMat: n7Stone, roofMat: n7Slate, roofStyle: 'gable',
    east: [{ type: 'door', offset: 0, width: 2.3, height: 2.8 }],
    interiorLight: { color: 0xffc670, intensity: 1.4, distance: 12 }
  });
  addTableAndChairs(scene, collision, -46.2, ciderFarm.floorY, 36, n7Wood);

  const schoolCafe = buildHollowRoom(scene, collision, {
    cx: 36, cz: 40, w: 9.5, d: 9.0, h: 3.9, floorY: 0.16,
    wallMat: n7Stone, floorMat: n7Stone, roofMat: n7Slate, roofStyle: 'gable',
    west: [{ type: 'door', offset: 0, width: 2.3, height: 2.8 }],
    interiorLight: { color: 0xffd088, intensity: 1.4, distance: 12 }
  });
  addTableAndChairs(scene, collision, 38.0, schoolCafe.floorY, 40, n7Wood);

  // 4. Church Tower Ladder (climbable inside the bombed parish church tower at x = 23.5, z = -12)
  collision.addWalkable(24.5, -12, 4.2, 4.2, 5.4, true);
  buildLadder(scene, collision, { x: 22.25, z: -12, bottomY: 0.2, topY: 5.4, normalX: -1, normalZ: 0, mat: n7Wood });

  // 5. Crashed Allied Glider Wreck near player start (x = -8.5, z = 50) where the wounded pilot shelters!
  const gliderBody = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.5, 5.6), new THREE.MeshStandardMaterial({ color: 0x4b543b, roughness: 0.88 }));
  gliderBody.position.set(-8.5, 0.85, 50);
  gliderBody.rotation.set(0.14, 0.35, -0.22);
  const gliderWing = new THREE.Mesh(new THREE.BoxGeometry(7.2, 0.16, 1.6), new THREE.MeshStandardMaterial({ color: 0x4b543b, roughness: 0.88 }));
  gliderWing.position.set(-8.5, 1.35, 49.5);
  gliderWing.rotation.z = -0.26;
  scene.add(gliderBody, gliderWing);

  // 6. Twelve Sheltered/Indoor Pre-Dawn Normandy Bystanders (6 women, 6 men — all indoors or under shelter!)
  const bystanders = spawnBystanders(scene, collision, animated, 'normandy', [
    { gender: 'male',   role: 'baker', pos: new THREE.Vector3(-20.2, 0.16, 18.2), yaw: 1.4 },
    { gender: 'female', role: 'baker_wife', pos: new THREE.Vector3(-19.8, 0.16, 14.0), yaw: 1.2 },
    { gender: 'female', role: 'cafe_woman', pos: new THREE.Vector3(34.5, schoolCafe.floorY, 42.5), yaw: -1.4 },
    { gender: 'female', role: 'schoolmistress', pos: new THREE.Vector3(38.0, schoolCafe.floorY, 37.2), yaw: -1.2 },
    { gender: 'female', role: 'church_elder', pos: new THREE.Vector3(18.0, 0.2, -9.8), yaw: -0.5, seated: true },
    { gender: 'female', role: 'farm_woman', pos: new THREE.Vector3(-37.0, 0.14, 22.5), yaw: 1.3 },
    { gender: 'male',   role: 'priest', pos: new THREE.Vector3(18.0, 0.2, -14.8), yaw: -1.2 },
    { gender: 'male',   role: 'farmer', pos: new THREE.Vector3(-42.2, ciderFarm.floorY, 33.2), yaw: 1.1 },
    { gender: 'male',   role: 'railwayman', pos: new THREE.Vector3(48.8, 0, -14.0), yaw: -1.4 },
    { gender: 'male',   role: 'resistance', pos: new THREE.Vector3(-20.2, 0.16, -6.2), yaw: 1.3 },
    { gender: 'male',   role: 'pilot', pos: new THREE.Vector3(-6.2, 0, 50.2), yaw: 0.7, seated: true },
    { gender: 'female', role: 'housemaid', pos: new THREE.Vector3(-54.0, 0.18, -15.5), yaw: 1.4 }
  ]);

  const specialSpots = {
    raisedHide: normandyHide,
    crawlDen: normandyDen,
    extraCrawls: [...hedgeHoles, railCar1, railCar2]
  };
  return { enemySpawns, pickups, animated, disposables, enterableBuildings, specialSpots, bystanders };
}
