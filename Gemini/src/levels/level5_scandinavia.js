import * as THREE from 'three';
import {
  getWoodPlanks,
  getGroundTexture,
  getStoneTexture,
  createVikingShieldTexture,
  createSailTexture,
  createStripedTentTexture
} from '../engine/textures.js';
import { createSkyDome, createWaterMesh, createAuroraMesh } from '../engine/shaders.js';
import {
  buildHollowRoom,
  buildRaisedHide,
  buildCrawlDen,
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

  collision.bounds = { minX: -76, maxX: 76, minZ: -76, maxZ: 88 };

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
    new THREE.BoxGeometry(160, 1.2, 140),
    new THREE.MeshStandardMaterial({ map: snowTex.map, roughness: 0.86 })
  );
  ground.position.set(0, -0.6, -10);
  ground.receiveShadow = true;
  scene.add(ground);

  // Solid Fjord water collider south of shoreline (z = 60.2..90) so walkers MUST use the jetty, gangplanks & ship decks!
  collision.addBox(0, 0.35, 75.5, 160, 1.6, 30.6, 'water');

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

  // ---- 5. ENTERABLE BOAT SHED (NAUST — Boat inside on keel blocks, shore-side!) ----
  const boatShed = buildHollowRoom(scene, collision, {
    cx: -44, cz: 46, w: 11.0, d: 14.0, h: 4.5, floorY: 0.16,
    wallMat: matTimber, floorMat: matFloor, roofMat: matSnowRoof, roofStyle: 'gable',
    south: [{ type: 'door', offset: 0, width: 3.8, height: 3.4 }],
    north: [{ type: 'door', offset: 0, width: 3.4, height: 3.2 }],
    east: [{ type: 'window', offset: 0, width: 1.8 }],
    interiorLight: { color: 0xffb366, intensity: 1.5, distance: 15 }
  });
  // Clinker wooden boat resting on keel blocks inside the boat shed (tucked slightly west so wide aisle stays open!)
  {
    const bGrp = new THREE.Group();
    bGrp.position.set(-46.2, boatShed.floorY, 46);
    const bHull = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.95, 7.2), matDarkWood);
    bHull.position.y = 0.72;
    const bProw = new THREE.Mesh(new THREE.ConeGeometry(1.1, 1.8, 4), matDarkWood);
    bProw.rotation.x = Math.PI / 2;
    bProw.position.set(0, 0.9, 4.4);
    const bStern = bProw.clone();
    bStern.rotation.x = -Math.PI / 2;
    bStern.position.z = -4.4;
    bGrp.add(bHull, bProw, bStern);
    scene.add(bGrp);
    collision.addBox(-46.2, boatShed.floorY + 0.65, 46, 2.4, 1.3, 8.6, 'wood');
  }
  addSolidBox(scene, collision, -40.2, boatShed.floorY + 0.45, 42.5, 1.2, 0.9, 2.8, matDarkWood, 'wood');

  // ---- 6. OPEN NORDIC SMITHY (Timber-post shelter, glowing forge, iron anvil & axe rack!) ----
  {
    const smX = 44, smZ = 22;
    const smFloorY = 0.2;
    const smBase = new THREE.Mesh(new THREE.BoxGeometry(10.5, smFloorY, 9.5), matStone);
    smBase.position.set(smX, smFloorY * 0.5, smZ);
    smBase.receiveShadow = true;
    scene.add(smBase);
    collision.addWalkable(smX, smZ, 10.8, 9.8, smFloorY);
    for (const [px, pz] of [[-4.6, -4.1], [4.6, -4.1], [-4.6, 4.1], [4.6, 4.1]]) {
      addSolidBox(scene, collision, smX + px, smFloorY + 2.0, smZ + pz, 0.42, 4.0, 0.42, matDarkWood, 'wood');
    }
    const smRoof = new THREE.Mesh(new THREE.BoxGeometry(11.4, 0.32, 10.4), matSnowRoof);
    smRoof.position.set(smX, smFloorY + 4.15, smZ);
    scene.add(smRoof);
    // Stone Forge with blazing coals + chimney + point light
    addSolidBox(scene, collision, smX + 2.6, smFloorY + 0.65, smZ - 1.8, 2.2, 1.3, 2.2, matStone, 'stone');
    const smCoals = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.22, 1.3), new THREE.MeshBasicMaterial({ color: 0xff5a14 }));
    smCoals.position.set(smX + 2.6, smFloorY + 1.38, smZ - 1.8);
    const smChim = new THREE.Mesh(new THREE.BoxGeometry(1.3, 4.6, 1.3), matStone);
    smChim.position.set(smX + 2.8, smFloorY + 3.4, smZ - 2.0);
    const smLight = new THREE.PointLight(0xff7e26, 5.5, 16);
    smLight.position.set(smX + 2.2, smFloorY + 2.3, smZ - 1.5);
    scene.add(smCoals, smChim, smLight);
    // Iron Anvil on timber stump + quench barrel
    const matIron = new THREE.MeshStandardMaterial({ color: 0x363b42, metalness: 0.78, roughness: 0.34 });
    addSolidBox(scene, collision, smX + 0.2, smFloorY + 0.36, smZ + 1.6, 0.85, 0.72, 0.85, matDarkWood, 'wood');
    const anvil = new THREE.Mesh(new THREE.BoxGeometry(0.92, 0.32, 0.42), matIron);
    anvil.position.set(smX + 0.2, smFloorY + 0.88, smZ + 1.6);
    scene.add(anvil);
  }

  // ---- 7. TIMBER JETTY & FOUR BOARDABLE VIKING LONGSHIPS (DRAKKARS!) ----
  // Walkable Timber Jetty extending south into the fjord (x = 24, z = 58..83)
  const jettyY = 0.48;
  {
    const jMesh = new THREE.Mesh(new THREE.BoxGeometry(4.8, 0.32, 26.0), matTimber);
    jMesh.position.set(24, jettyY - 0.16, 70.2);
    jMesh.receiveShadow = true;
    scene.add(jMesh);
    collision.addWalkable(24, 70.2, 5.2, 26.8, jettyY);
    // Support pilings down into fjord water
    for (let pz = 60; pz <= 82; pz += 4.4) {
      for (const px of [22.0, 26.0]) {
        const pile = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.24, 2.2, 8), matDarkWood);
        pile.position.set(px, jettyY - 1.1, pz);
        scene.add(pile);
      }
    }
    // Gentle shore approach step (0.24m rise) at z = 57.4 + guiding shore side rails so walkers stay on the jetty!
    const jStep = new THREE.Mesh(new THREE.BoxGeometry(4.8, 0.24, 1.8), matTimber);
    jStep.position.set(24, 0.12, 57.4);
    scene.add(jStep);
    collision.addWalkable(24, 57.4, 5.2, 2.4, 0.24);
    // Low timber side bollards guiding from shore onto the jetty (clear of ship gangplanks at z=71 & z=73!)
    addSolidBox(scene, collision, 21.5, jettyY + 0.45, 63.2, 0.24, 0.9, 10.2, matDarkWood, 'wood');
    addSolidBox(scene, collision, 26.5, jettyY + 0.45, 62.6, 0.24, 0.9, 9.2, matDarkWood, 'wood');
  }

  const matStripedTent = new THREE.MeshStandardMaterial({ map: createStripedTentTexture(), side: THREE.DoubleSide, roughness: 0.84 });
  const matChestWood = new THREE.MeshStandardMaterial({ color: 0x4a301e, roughness: 0.82 });
  const matFurledSail = new THREE.MeshStandardMaterial({ color: 0xd9cbb2, roughness: 0.9 });
  const shTex1 = createVikingShieldTexture(1);
  const shTex2 = createVikingShieldTexture(2);
  const shMat1 = new THREE.MeshStandardMaterial({ map: shTex1, roughness: 0.72 });
  const shMat2 = new THREE.MeshStandardMaterial({ map: shTex2, roughness: 0.72 });

  /**
   * Builds a fully boardable, explorable Viking Longship (Drakkar) oriented North-South (bow pointing North -Z, stern South +Z):
   * - Walkable plank deck + raised bow & stern platforms (<= 0.38m step!)
   * - Solid bulwarks with a clean gangplank boarding opening (>= 2.8m)
   * - Sea chests, tall mast with set OR furled sail, shields along both rails, stowed oars, steering oar,
   *   carved dragon head at bow & curled tail at stern, optional striped chieftain's tent, and walkable gangplank!
   */
  function buildBoardableLongship(opts) {
    const {
      cx, cz,
      length = 16.5,
      beam = 4.6,
      deckY = 0.85,
      sailSet = true,
      hasTent = false,
      gangplankSide = 'north', // 'north' (beach bow) | 'west' (jetty east) | 'east' (jetty west)
      gangplankTarget = 59.5,  // z (for north) or x (for west/east) of land/jetty edge
      gangplankStartY = 0.0
    } = opts;

    const halfL = length * 0.5;
    const halfB = beam * 0.5;
    const platLen = 2.8;
    const platY = deckY + 0.36; // 0.36m <= STEP_MAX!
    const bulwarkH = 1.05;
    const bulwarkT = 0.28;

    // 1. Hull bottom & walkable flat plank deck
    const hull = new THREE.Mesh(new THREE.BoxGeometry(beam + 0.3, 1.35, length), matDarkWood);
    hull.position.set(cx, deckY - 0.68, cz);
    hull.receiveShadow = true;
    hull.castShadow = true;
    scene.add(hull);
    collision.addWalkable(cx, cz, beam - 0.2, length - 0.4, deckY);

    // 2. Raised walkable platforms at Bow (-Z) and Stern (+Z)
    for (const dir of [-1, 1]) {
      const pz = cz + dir * (halfL - platLen * 0.5);
      const plat = new THREE.Mesh(new THREE.BoxGeometry(beam - 0.3, 0.36, platLen), matTimber);
      plat.position.set(cx, deckY + 0.18, pz);
      plat.receiveShadow = true;
      scene.add(plat);
      collision.addWalkable(cx, pz, beam - 0.3, platLen + 0.25, platY);
    }

    // 3. Solid bulwarks along port (-X), starboard (+X), bow (-Z), and stern (+Z),
    //    leaving a wide clean boarding gap (>= 3.0m) on the gangplank side!
    const emitRail = (x0, z0, sx, sz) => {
      addSolidBox(scene, collision, x0, deckY + bulwarkH * 0.5, z0, sx, bulwarkH, sz, matTimber, 'wood');
    };
    if (gangplankSide === 'west') {
      // Gap at center of West (-X) rail for jetty gangplank
      const seg = (length - 3.4) * 0.5;
      emitRail(cx - halfB, cz - halfL + seg * 0.5, bulwarkT, seg);
      emitRail(cx - halfB, cz + halfL - seg * 0.5, bulwarkT, seg);
      emitRail(cx + halfB, cz, bulwarkT, length);
      emitRail(cx, cz - halfL, beam, bulwarkT);
      emitRail(cx, cz + halfL, beam, bulwarkT);
    } else if (gangplankSide === 'east') {
      // Gap at center of East (+X) rail for jetty gangplank
      const seg = (length - 3.4) * 0.5;
      emitRail(cx + halfB, cz - halfL + seg * 0.5, bulwarkT, seg);
      emitRail(cx + halfB, cz + halfL - seg * 0.5, bulwarkT, seg);
      emitRail(cx - halfB, cz, bulwarkT, length);
      emitRail(cx, cz - halfL, beam, bulwarkT);
      emitRail(cx, cz + halfL, beam, bulwarkT);
    } else {
      // Beach bow landing: wide boarding gap at the North (-Z) bow rail!
      emitRail(cx - halfB, cz, bulwarkT, length);
      emitRail(cx + halfB, cz, bulwarkT, length);
      emitRail(cx, cz + halfL, beam, bulwarkT);
    }

    // 4. Tall Mast, Yardarm & Sail (set billowing OR furled tightly along the yard)
    const mastH = hasTent ? 11.2 : 9.4;
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.19, mastH, 8), matTimber);
    mast.position.set(cx, deckY + mastH * 0.5, cz - 0.4);
    const yard = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, beam * 1.45, 8), matTimber);
    yard.rotation.z = Math.PI / 2;
    yard.position.set(cx, deckY + mastH * 0.78, cz - 0.15);
    scene.add(mast, yard);
    collision.addBox(cx, deckY + 2.0, cz - 0.4, 0.55, 4.0, 0.55, 'wood');
    if (sailSet) {
      const sail = new THREE.Mesh(new THREE.PlaneGeometry(beam * 1.38, mastH * 0.52), matSail);
      sail.position.set(cx, deckY + mastH * 0.56, cz - 0.05);
      scene.add(sail);
    } else {
      const furled = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, beam * 1.32, 10), matFurledSail);
      furled.rotation.z = Math.PI / 2;
      furled.position.set(cx, deckY + mastH * 0.74, cz - 0.15);
      scene.add(furled);
    }

    // 5. Painted Round Viking Shields mounted along BOTH outer rails!
    const shieldCount = Math.floor((length - 4.0) / 1.7);
    for (let i = 0; i < shieldCount; i++) {
      const sz = cz - (length - 4.4) * 0.5 + i * 1.7;
      for (const s of [-1, 1]) {
        const sh = new THREE.Mesh(
          new THREE.CylinderGeometry(0.46, 0.46, 0.06, 12),
          [matDarkWood, (i % 2 === 0 ? shMat1 : shMat2), matDarkWood]
        );
        sh.rotation.z = Math.PI / 2;
        sh.position.set(cx + s * (halfB + 0.18), deckY + 0.72, sz);
        scene.add(sh);
      }
    }

    // 6. Stowed Oars resting along inside port & starboard gunwales
    for (const s of [-1, 1]) {
      for (let k = -1; k <= 1; k++) {
        const oar = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.038, 4.2, 6), matTimber);
        oar.rotation.x = Math.PI / 2;
        oar.position.set(cx + s * (halfB - 0.42), deckY + 0.38, cz + k * 2.4);
        scene.add(oar);
      }
    }

    // 7. Steering Oar (Stýri) mounted on starboard stern quarter
    const steerOar = new THREE.Mesh(new THREE.BoxGeometry(0.12, 3.4, 0.55), matDarkWood);
    steerOar.position.set(cx + halfB + 0.24, deckY + 0.35, cz + halfL - 1.6);
    steerOar.rotation.x = 0.28;
    scene.add(steerOar);

    // 8. Carved Dragon's Head towering at the Bow (-Z) & Curled Dragon Tail at the Stern (+Z)
    const bowStem = new THREE.Mesh(new THREE.BoxGeometry(0.36, 3.2, 0.75), matDarkWood);
    bowStem.position.set(cx, deckY + 1.65, cz - halfL - 0.4);
    bowStem.rotation.x = 0.28;
    const dragonHead = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.65, 1.35), matDarkWood);
    dragonHead.position.set(cx, deckY + 3.25, cz - halfL - 1.05);
    const dragonCrest = new THREE.Mesh(new THREE.ConeGeometry(0.24, 0.7, 4), matGold);
    dragonCrest.position.set(cx, deckY + 3.72, cz - halfL - 0.85);
    scene.add(bowStem, dragonHead, dragonCrest);

    const sternPost = new THREE.Mesh(new THREE.BoxGeometry(0.32, 2.7, 0.65), matDarkWood);
    sternPost.position.set(cx, deckY + 1.4, cz + halfL + 0.35);
    sternPost.rotation.x = -0.25;
    const dragonTail = new THREE.Mesh(new THREE.TorusGeometry(0.52, 0.14, 8, 14, Math.PI * 1.45), matDarkWood);
    dragonTail.rotation.y = Math.PI / 2;
    dragonTail.position.set(cx, deckY + 2.85, cz + halfL + 0.7);
    scene.add(sternPost, dragonTail);

    // 9. Sea Chests on deck (tucked along gunwales so deck walkway stays wide!)
    for (const [ox, oz] of [[-halfB + 0.85, -2.8], [halfB - 0.85, 2.6]]) {
      addSolidBox(scene, collision, cx + ox, deckY + 0.34, cz + oz, 0.85, 0.68, 1.25, matChestWood, 'wood');
      const band = new THREE.Mesh(new THREE.BoxGeometry(0.88, 0.1, 1.28), matGold);
      band.position.set(cx + ox, deckY + 0.56, cz + oz);
      scene.add(band);
    }

    // 10. Optional Red-and-White Striped Tent pitched on Chieftain's Ship deck (open-ended canopy you can walk through!)
    if (hasTent) {
      const tentZ = cz + 2.4;
      const tentL = 5.4;
      const tentW = beam - 1.0;
      const ridgeY = deckY + 2.65;
      for (const s of [-1, 1]) {
        const slope = new THREE.Mesh(new THREE.PlaneGeometry(tentL, 2.6), matStripedTent);
        slope.rotation.y = Math.PI / 2;
        slope.rotation.x = s * 0.68;
        slope.position.set(cx + s * (tentW * 0.28), deckY + 1.65, tentZ);
        scene.add(slope);
      }
      const ridge = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, tentL + 0.4, 6), matDarkWood);
      ridge.rotation.x = Math.PI / 2;
      ridge.position.set(cx, ridgeY, tentZ);
      scene.add(ridge);
    }

    // 11. Wide Walkable Stepped Gangplank from Land or Jetty onto the Ship Deck!
    if (gangplankSide === 'north') {
      const bowEdgeZ = cz - halfL;
      const span = Math.max(1.2, bowEdgeZ - gangplankTarget);
      const steps = 4;
      for (let i = 0; i < steps; i++) {
        const frac = (i + 1) / steps;
        const sy = gangplankStartY + (platY - gangplankStartY) * frac;
        const sz = gangplankTarget + (i + 0.5) * (span / steps);
        const gp = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.2, span / steps + 0.3), matTimber);
        gp.position.set(cx, sy - 0.1, sz);
        scene.add(gp);
        collision.addWalkable(cx, sz, 3.6, span / steps + 0.65, sy);
      }
      // Subtle timber side-guides along beach gangplanks so walkers enter straight up the planks!
      for (const s of [-1, 1]) {
        addSolidBox(scene, collision, cx + s * 1.88, 0.65, gangplankTarget + span * 0.5, 0.18, 1.3, span + 0.2, matDarkWood, 'wood');
      }
    } else {
      const dir = gangplankSide === 'west' ? -1 : 1; // direction from ship toward jetty
      const railX = cx + dir * halfB;
      const span = Math.abs(gangplankTarget - railX);
      const steps = 2;
      for (let i = 0; i < steps; i++) {
        const frac = (i + 1) / steps;
        const sy = gangplankStartY + (deckY - gangplankStartY) * frac;
        const sx = gangplankTarget - dir * ((i + 0.5) * (span / steps));
        const gp = new THREE.Mesh(new THREE.BoxGeometry(span / steps + 0.35, 0.2, 3.0), matTimber);
        gp.position.set(sx, sy - 0.1, cz);
        scene.add(gp);
        collision.addWalkable(sx, cz, span / steps + 0.75, 3.4, sy);
      }
    }
  }

  // Ship 1: Moored East of Jetty (sail set!)
  buildBoardableLongship({
    cx: 32.2, cz: 71.0, length: 16.5, beam: 4.6, deckY: 0.85,
    sailSet: true, hasTent: false, gangplankSide: 'west', gangplankTarget: 26.3, gangplankStartY: jettyY
  });
  // Ship 2: Moored West of Jetty (sail furled!)
  buildBoardableLongship({
    cx: 15.8, cz: 73.0, length: 16.5, beam: 4.6, deckY: 0.85,
    sailSet: false, hasTent: false, gangplankSide: 'east', gangplankTarget: 21.7, gangplankStartY: jettyY
  });
  // Ship 3: Player's Own Longship at the Southern Beach (sail furled!)
  buildBoardableLongship({
    cx: -6.0, cz: 71.5, length: 16.5, beam: 4.6, deckY: 0.82,
    sailSet: false, hasTent: false, gangplankSide: 'north', gangplankTarget: 58.6, gangplankStartY: 0.0
  });
  // Ship 4: Larger Chieftain's Ship with Red-and-White Striped Tent on Deck (sail set!)
  buildBoardableLongship({
    cx: -28.0, cz: 74.0, length: 21.0, beam: 5.6, deckY: 0.90,
    sailSet: true, hasTent: true, gangplankSide: 'north', gangplankTarget: 58.6, gangplankStartY: 0.0
  });

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

  // ---- 6.4 RAISED TIMBER WATCH HIDE (2 jump blocks) & CROUCH-ONLY STORAGE DEN (1.25m door!) ----
  const scandiHide = buildRaisedHide(scene, collision, {
    cx: -14, cz: 36, deckY: 2.2, w: 4.2, d: 4.2, openSide: 'south',
    wallMat: matTimber, floorMat: matFloor, postMat: matDarkWood, jumpMat: matTimber
  });
  const scandiDen = buildCrawlDen(scene, collision, {
    cx: 15, cz: 36, w: 5.2, d: 4.8, doorSide: 'west',
    wallMat: matStone, floorMat: matFloor, roofMat: matSnowRoof
  });

  // ---- PICKUPS (including Boat Shed, Open Smithy, Viking Longship decks & Crouch-Only Den!) ----
  const pickupDefs = [
    { type: 'health', pos: new THREE.Vector3(-22, 0.9, 24),   label: 'LONGHOUSE MEAD (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(-52, 0.9, 26),   label: 'FARMHOUSE RATIONS (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(-42, 0.9, 46),   label: 'BOAT SHED MEAD (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(44, 1.0, 22),    label: 'SMITHY ALE (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(-6.0, 1.6, 73),  label: 'DRAKKAR SEA CHEST MEAD (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(-28, 1.7, 76),   label: "CHIEFTAIN'S SHIP MEAD (+35 HP)" },
    { type: 'health', pos: new THREE.Vector3(15.8, 1.6, 75),  label: 'JETTY SHIP RATIONS (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(50, 0.9, -34),   label: 'TEMPLE OFFERING (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(0, 1.0, -45),    label: 'GREAT HALL MEAD (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(scandiDen.insidePos.x, scandiDen.floorY + 0.55, scandiDen.insidePos.z), label: 'TURF DEN MEAD (+35 HP)', inDen: true },
    { type: 'ammo',   pos: new THREE.Vector3(22, 0.9, 24),    label: 'THROWING AXE RACK' },
    { type: 'ammo',   pos: new THREE.Vector3(-24, 0.9, -14),  label: 'FORGED IRON AXES' }
  ];
  for (const pd of pickupDefs) {
    const mesh = createPickupMesh(pd.type);
    mesh.position.copy(pd.pos);
    scene.add(mesh);
    pickups.push({ ...pd, mesh, collected: false });
  }

  // ---- 33 ENEMIES (including 4 Horned Chieftains, Vikings posted on Longship Decks, Boat Shed, Smithy & Horned Jarl!) ----
  const enemySpawns = [
    // Viking Longships (enemies posted on the decks — walk cleanly down gangplanks onto land!)
    { type: 'viking_warrior',   pos: new THREE.Vector3(32.2, 0.85, 73.0) },  // Moored East Ship deck
    { type: 'viking_archer',    pos: new THREE.Vector3(32.2, 0.85, 67.5) },  // Moored East Ship foredeck
    { type: 'viking_warrior',   pos: new THREE.Vector3(15.8, 0.85, 73.0) },  // Moored West Ship deck
    { type: 'viking_warrior',   pos: new THREE.Vector3(-28.0, 0.9, 71.0) },  // Chieftain's Ship deck
    { type: 'viking_archer',    pos: new THREE.Vector3(-28.0, 0.9, 77.0) },  // Chieftain's Ship tent deck
    // Shore, Boat Shed, Open Smithy & Southern Longhouses + Farm
    { type: 'viking_warrior',   pos: new THREE.Vector3(-42.5, 0.16, 46.5) }, // Inside Boat Shed
    { type: 'viking_warrior',   pos: new THREE.Vector3(42.5, 0.2, 22.0) },   // Inside Open Smithy
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
    { name: 'Boat Shed (Naust)', inside: new THREE.Vector3(-42.5, 0.16, 46), outside: new THREE.Vector3(-44, 0, 56) },
    { name: 'Open Smithy', inside: new THREE.Vector3(42.5, 0.2, 22), outside: new THREE.Vector3(36, 0, 22) },
    { name: 'East Jetty Longship', inside: new THREE.Vector3(32.2, 0.85, 71), outside: new THREE.Vector3(24, 0.64, 71) },
    { name: 'West Jetty Longship', inside: new THREE.Vector3(15.8, 0.85, 73), outside: new THREE.Vector3(24, 0.64, 73) },
    { name: "Player's Longship", inside: new THREE.Vector3(-6, 0.82, 71.5), outside: new THREE.Vector3(-6, 0, 57) },
    { name: "Chieftain's Longship", inside: new THREE.Vector3(-28, 0.9, 74), outside: new THREE.Vector3(-28, 0, 57) },
    { name: 'West Longhouse', inside: new THREE.Vector3(-24, 0.18, -14), outside: new THREE.Vector3(-16.5, 0, -14) },
    { name: 'Temple of the Old Gods', inside: new THREE.Vector3(50, 0.22, -34), outside: new THREE.Vector3(42.5, 0, -34) },
    { name: 'Outlying Farm', inside: new THREE.Vector3(-52, 0.18, 26), outside: new THREE.Vector3(-45, 0, 26) }
  ];

  const specialSpots = { raisedHide: scandiHide, crawlDen: scandiDen };
  return { enemySpawns, pickups, animated, disposables, enterableBuildings, specialSpots };
}
