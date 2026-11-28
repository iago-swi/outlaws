import * as THREE from 'three';
import {
  getGroundTexture,
  getConcreteTexture,
  getSovietPanelTexture,
  createSloganBannerTexture,
  createHammerSickleTexture,
  getWoodPlanks
} from '../engine/textures.js';
import { createSkyDome } from '../engine/shaders.js';
import {
  buildHollowRoom,
  buildBarredWall,
  buildLadder,
  buildCrawlDen,
  addSolidBox,
  addDesk,
  addBunk,
  addPiano,
  addPewRow,
  addCrawlPassage,
  addTableAndChairs
} from '../engine/buildings.js';
import { createPickupMesh } from './level1_west.js';
import { spawnBystanders } from '../entities/bystanders.js';

export const LEVEL7_META = {
  id: 'soviet',
  index: 6,
  themeClass: 'theme-soviet',
  act: 'ACT VII • WINTER 1974',
  title: 'STALNOGORSK',
  subtitle: 'Snow, Concrete & The Manuscript',
  heroName: 'ALEKSANDR SOLZHENITSYN',
  objective: 'Cross the District, Break into the Committee Building & Reclaim the Manuscript',
  quote: '"The Committee seized the manuscript naming every camp and every grave. Cross the frozen avenue and bring the truth back out."',
  historicalNote: 'Stalnogorsk is an invented 1974 Soviet city; three real figures who defied Soviet tyranny stand together here as legends.',
  musicTheme: 'soviet',
  enemyIcon: '★',
  currency: '₽ ',
  spawnPos: new THREE.Vector3(0, 0, 74),
  spawnYaw: 0,
  cameraPreview: { center: new THREE.Vector3(0, 9, 4), radius: 26, height: 22, speed: 0.10 }
};

export function buildLevel7(scene, collision, particles) {
  const disposables = [];
  const animated = [];
  const pickups = [];

  collision.bounds = { minX: -84, maxX: 84, minZ: -86, maxZ: 84 };

  // 1. Overcast Winter Sky Dome & Cold Grey Lighting
  const sunDir = new THREE.Vector3(0.25, 0.36, -0.88).normalize();
  const sky = createSkyDome({
    topColor: 0x4b535c, midColor: 0x7e8790, horizonColor: 0xbcc4cc,
    sunColor: 0xe6e8eb, sunDirection: sunDir, cloudTint: 0x9aa3ad, cloudDensity: 0.72
  });
  scene.add(sky.mesh);
  animated.push((t) => { sky.uniforms.uTime.value = t; });

  scene.fog = new THREE.FogExp2(0x9ca4ad, 0.0056);
  scene.add(new THREE.HemisphereLight(0xcdd5de, 0x4d5257, 1.1));

  const sunLight = new THREE.DirectionalLight(0xeef2f7, 1.85);
  sunLight.position.copy(sunDir).multiplyScalar(120);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(2048, 2048);
  sunLight.shadow.camera.left = -95;
  sunLight.shadow.camera.right = 95;
  sunLight.shadow.camera.top = 95;
  sunLight.shadow.camera.bottom = -95;
  sunLight.shadow.near = 10;
  sunLight.shadow.far = 280;
  sunLight.shadow.bias = -0.0005;
  scene.add(sunLight);

  // 2. Snow-Dusted Concrete Ground, Wide Avenue, Tram Rails & Cobbled Square
  const snowTex = getGroundTexture('soviet_snow', 36, 36);
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(460, 460),
    new THREE.MeshStandardMaterial({ map: snowTex.map, roughness: 0.9 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // Wide Asphalt Avenue (running north-south along x = 0)
  const asphaltMat = new THREE.MeshStandardMaterial({ color: 0x3b3f44, roughness: 0.92 });
  const avenue = new THREE.Mesh(new THREE.PlaneGeometry(14, 155), asphaltMat);
  avenue.rotation.x = -Math.PI / 2;
  avenue.position.set(0, 0.03, 2);
  avenue.receiveShadow = true;
  scene.add(avenue);

  // Steel Tram Rails embedded down the Avenue
  const railMat = new THREE.MeshStandardMaterial({ color: 0x7e858c, metalness: 0.82, roughness: 0.32 });
  for (const rx of [-2.4, -1.0, 1.0, 2.4]) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.05, 148), railMat);
    rail.position.set(rx, 0.05, 4);
    scene.add(rail);
  }

  // Large Cobbled Central Square (z = -24..10)
  const cobbleTex = getGroundTexture('cobble', 10, 10);
  const square = new THREE.Mesh(
    new THREE.PlaneGeometry(46, 36),
    new THREE.MeshStandardMaterial({ map: cobbleTex.map, color: 0x7c8085, roughness: 0.88 })
  );
  square.rotation.x = -Math.PI / 2;
  square.position.set(0, 0.04, -8);
  square.receiveShadow = true;
  scene.add(square);

  // Shared Materials
  const panelTex = getSovietPanelTexture(3, 2);
  const concTex = getConcreteTexture(2, 2);
  const woodTex = getWoodPlanks('weathered', 2, 2);
  const matPanel = new THREE.MeshStandardMaterial({ map: panelTex, roughness: 0.85 });
  const matConc = new THREE.MeshStandardMaterial({ map: concTex.map, color: 0x999d9e, roughness: 0.88 });
  const matCream = new THREE.MeshStandardMaterial({ color: 0xcfc8b8, roughness: 0.84 });
  const matBrick = new THREE.MeshStandardMaterial({ color: 0x7b4a3d, roughness: 0.88 });
  const matGranite = new THREE.MeshStandardMaterial({ color: 0x6e2420, roughness: 0.55, metalness: 0.12 });
  const matBronze = new THREE.MeshStandardMaterial({ color: 0x3b443e, metalness: 0.65, roughness: 0.42 });
  const matRed = new THREE.MeshStandardMaterial({ color: 0xb21c1c, roughness: 0.65 });
  const matHsFlag = new THREE.MeshStandardMaterial({ map: createHammerSickleTexture(true), side: THREE.DoubleSide, roughness: 0.62 });
  const matHsEmblem = new THREE.MeshStandardMaterial({ map: createHammerSickleTexture(false), roughness: 0.55 });
  const matRedGlow = new THREE.MeshStandardMaterial({ color: 0xe62222, emissive: 0xc41212, emissiveIntensity: 1.35, roughness: 0.35 });
  const matSteel = new THREE.MeshStandardMaterial({ color: 0x383d42, metalness: 0.7, roughness: 0.38 });
  const matFloor = new THREE.MeshStandardMaterial({ color: 0x69645e, roughness: 0.88 });
  const matWood = new THREE.MeshStandardMaterial({ map: woodTex.map, roughness: 0.85 });
  const matBirch = new THREE.MeshStandardMaterial({ color: 0xe4e0d8, roughness: 0.86 });
  const matIce = new THREE.MeshStandardMaterial({ color: 0x8dbad4, roughness: 0.25, metalness: 0.2 });

  // Street Lamps along Avenue (solid posts!)
  const lampGlow = new THREE.MeshBasicMaterial({ color: 0xffe4a8 });
  for (const lz of [64, 42, 20, -24, -44]) {
    for (const lx of [-8.2, 8.2]) {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.16, 6.2, 8), matSteel);
      pole.position.set(lx, 3.1, lz);
      const arm = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.12, 0.12), matSteel);
      arm.position.set(lx + (lx < 0 ? 0.65 : -0.65), 6.1, lz);
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.24, 8, 8), lampGlow);
      bulb.position.set(lx + (lx < 0 ? 1.25 : -1.25), 5.95, lz);
      scene.add(pole, arm, bulb);
      collision.addBox(lx, 3.0, lz, 0.48, 6.0, 0.48, 'solid');
    }
  }

  // ---- PREFABRICATED FIVE-STOREY APARTMENT BLOCKS AROUND COURTYARDS ----
  const blockSpecs = [
    [-44, 56, 28, 16, 11],
    [-64, 30, 11, 16, 26],
    [46, 56, 28, 16, 11],
    [66, 30, 11, 16, 26]
  ];
  for (const [bx, bz, bw, bh, bd] of blockSpecs) {
    addSolidBox(scene, collision, bx, bh * 0.5, bz, bw, bh, bd, matPanel, 'stone');
  }

  // Courtyard Playground (West courtyard: swing, rocket climbing frame, benches, bins, birch trees!)
  // Swing set (solid!)
  addSolidBox(scene, collision, -38, 1.5, 34, 0.22, 3.0, 0.22, matSteel, 'solid');
  addSolidBox(scene, collision, -34, 1.5, 34, 0.22, 3.0, 0.22, matSteel, 'solid');
  const swTop = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.18, 0.18), matSteel);
  swTop.position.set(-36, 3.0, 34);
  const swSeat = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.08, 0.35), matRed);
  swSeat.position.set(-36, 0.75, 34);
  scene.add(swTop, swSeat);

  // Retro Soviet Rocket Climbing Frame (solid!)
  const rocketBody = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.85, 3.2, 8), matRed);
  rocketBody.position.set(-44, 2.2, 26);
  const rocketNose = new THREE.Mesh(new THREE.ConeGeometry(0.46, 1.1, 8), matBirch);
  rocketNose.position.set(-44, 4.35, 26);
  scene.add(rocketBody, rocketNose);
  collision.addBox(-44, 2.2, 26, 1.8, 4.4, 1.8, 'solid');

  // Courtyard Benches & Bins + Birch Trees (solid!)
  for (const [bx, bz] of [[-32, 42], [-48, 42], [30, 42]]) {
    addSolidBox(scene, collision, bx, 0.45, bz, 2.0, 0.9, 0.65, matWood, 'wood');
    addSolidBox(scene, collision, bx + 1.5, 0.42, bz, 0.5, 0.84, 0.5, matSteel, 'solid');
  }
  function addBirch(tx, tz) {
    const tr = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.24, 6.2, 7), matBirch);
    tr.position.set(tx, 3.1, tz);
    const twigs = new THREE.Mesh(new THREE.IcosahedronGeometry(1.8, 0), new THREE.MeshStandardMaterial({ color: 0x666a6e, wireframe: true }));
    twigs.position.set(tx, 6.4, tz);
    scene.add(tr, twigs);
    collision.addBox(tx, 3.0, tz, 0.7, 6.0, 0.7, 'wood');
  }
  for (const [tx, tz] of [
    [-28, 38], [-50, 36], [-36, 18], [32, 34], [52, 40], [-34, -30], [34, -32], [58, -12], [68, -6]
  ]) addBirch(tx, tz);

  // ---- 1. ENTERABLE FOOD SHOP ("ПРОДУКТЫ") ----
  const shop = buildHollowRoom(scene, collision, {
    cx: -19, cz: 46, w: 11, d: 10, h: 4.0, floorY: 0.16,
    wallMat: matCream, floorMat: matFloor, roofMat: matConc, roofStyle: 'flat',
    east: [
      { type: 'window', offset: -3.0, width: 2.2 },
      { type: 'door', offset: 0, width: 2.3, height: 2.9 },
      { type: 'window', offset: 3.0, width: 2.2 }
    ],
    interiorLight: { color: 0xffdf99, intensity: 1.6, distance: 13 }
  });
  const shopSign = new THREE.Mesh(
    new THREE.PlaneGeometry(6.4, 1.3),
    new THREE.MeshStandardMaterial({ map: createSloganBannerTexture('ПРОДУКТЫ', '#1c4f7a', '#f7f4eb'), roughness: 0.65 })
  );
  shopSign.position.set(-13.3, 4.6, 46);
  shopSign.rotation.y = Math.PI / 2;
  scene.add(shopSign);
  addSolidBox(scene, collision, -22.2, shop.floorY + 0.55, 46, 1.1, 1.1, 6.0, matWood, 'wood');

  // ---- 2. TWO ENTERABLE GARAGES WITH WALKABLE CONNECTED ROOFS (East side south!) ----
  for (let i = 0; i < 2; i++) {
    const gz = 34 + i * 12;
    const gar = buildHollowRoom(scene, collision, {
      cx: 21, cz: gz, w: 10, d: 9.0, h: 2.66, floorY: 0.14,
      wallMat: matConc, floorMat: matConc, roofMat: matSteel, roofStyle: 'flat',
      west: [{ type: 'door', offset: 0, width: 3.4, height: 2.52 }],
      interiorLight: { color: 0xdde8ff, intensity: 1.2, distance: 11 }
    });
    addDesk(scene, collision, 24.4, gar.floorY, gz, 1.6, 0.85, matSteel, 1);
  }
  // Connect both garage roofs into one continuous walkable roof row (topY = 3.08m) + 2 jump crates at south end!
  const garRoofBridge = new THREE.Mesh(new THREE.BoxGeometry(10.2, 0.28, 3.3), matSteel);
  garRoofBridge.position.set(21, 2.94, 40);
  garRoofBridge.castShadow = true;
  garRoofBridge.receiveShadow = true;
  scene.add(garRoofBridge);
  collision.addBox(21, 2.94, 40, 10.2, 0.28, 3.3, 'solid');
  collision.addWalkable(21, 40, 10.4, 21.4, 3.08, true);
  const garageLadder = buildLadder(scene, collision, {
    x: 21, z: 50.62, bottomY: 0, topY: 3.08, normalX: 0, normalZ: 1, mat: matSteel
  });

  // ---- CONCRETE CELLAR HATCH CROUCH-IN DEN (West of South Avenue, 1.25m door!) ----
  const cellarDen = buildCrawlDen(scene, collision, {
    cx: -14.5, cz: 58, w: 5.4, d: 5.0, doorSide: 'east',
    wallMat: matConc, floorMat: matFloor, roofMat: matSteel
  });
  // Tilted open iron cellar-hatch lid above the low entrance
  const hatchLid = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.1, 2.1), matSteel);
  hatchLid.position.set(-11.2, 1.72, 58);
  hatchLid.rotation.z = 0.55;
  scene.add(hatchLid);

  // ---- BUS SHELTER, NEWS KIOSK & PARKED SOVIET CARS (ALL SOLID!) ----
  // Bus shelter
  addSolidBox(scene, collision, 11, 1.4, 58, 0.3, 2.8, 4.6, matSteel, 'solid');
  const bRoof = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.2, 5.0), matSteel);
  bRoof.position.set(10, 2.85, 58);
  scene.add(bRoof);
  // News kiosk (СОЮЗПЕЧАТЬ)
  addSolidBox(scene, collision, -11.5, 1.4, 24, 3.0, 2.8, 3.8, matCream, 'solid');
  const kioskSign = new THREE.Mesh(
    new THREE.PlaneGeometry(3.2, 0.7),
    new THREE.MeshStandardMaterial({ map: createSloganBannerTexture('СОЮЗПЕЧАТЬ', '#9e1c1c', '#fff4d4') })
  );
  kioskSign.position.set(-9.9, 2.55, 24);
  kioskSign.rotation.y = Math.PI / 2;
  scene.add(kioskSign);

  // Parked Soviet Cars & Militia Van at Checkpoint
  function addSovietCar(cx, cz, rotY, bodyColor, isVan = false) {
    const g = new THREE.Group();
    g.position.set(cx, 0, cz);
    g.rotation.y = rotY;
    const cMat = new THREE.MeshStandardMaterial({ color: bodyColor, roughness: 0.45, metalness: 0.35 });
    const base = new THREE.Mesh(new THREE.BoxGeometry(isVan ? 2.1 : 1.85, isVan ? 1.8 : 0.9, isVan ? 4.8 : 4.2), cMat);
    base.position.y = isVan ? 1.15 : 0.75;
    g.add(base);
    if (!isVan) {
      const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.75, 2.1), cMat);
      cabin.position.set(0, 1.52, -0.15);
      g.add(cabin);
    } else {
      // Blue stripe & beacon on militia van
      const stripe = new THREE.Mesh(new THREE.BoxGeometry(2.14, 0.25, 4.84), new THREE.MeshStandardMaterial({ color: 0x1c4b9e }));
      stripe.position.y = 1.15;
      const beacon = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.22, 8), new THREE.MeshBasicMaterial({ color: 0x3b8cff }));
      beacon.position.set(0, 2.16, 1.5);
      g.add(stripe, beacon);
    }
    scene.add(g);
    const sw = Math.abs(Math.sin(rotY)) > 0.5 ? (isVan ? 5.0 : 4.4) : (isVan ? 2.3 : 2.1);
    const sd = Math.abs(Math.sin(rotY)) > 0.5 ? (isVan ? 2.3 : 2.1) : (isVan ? 5.0 : 4.4);
    collision.addBox(cx, 1.2, cz, sw, 2.4, sd, 'solid');
  }
  addSovietCar(-5.2, 54, 0.05, 0x385e75);
  addSovietCar(5.4, 42, -0.06, 0x7c8276);
  // Checkpoint raised barrier & Militia Van (z = 16)
  addSolidBox(scene, collision, -7.8, 1.4, 16, 2.2, 2.8, 2.2, matConc, 'stone');
  const barrierPole = new THREE.Mesh(new THREE.BoxGeometry(0.14, 5.2, 0.14), matRed);
  barrierPole.position.set(-6.0, 3.2, 16);
  barrierPole.rotation.z = -0.35; // Raised barrier arm!
  scene.add(barrierPole);
  addSovietCar(7.2, 16, 0.18, 0xd4b632, true);

  // ---- COBBLED SQUARE MONUMENTS & MINISTRY BLOCK WITH ROOFTOP CYRILLIC SLOGAN ----
  // Massive Statue of a Leader with Outstretched Arm on Red Granite Plinth + Hammer & Sickle Emblem!
  addSolidBox(scene, collision, 0, 1.7, -8, 4.4, 3.4, 4.4, matGranite, 'stone');
  for (const [pz, ry] of [[-5.76, 0], [-10.24, Math.PI]]) {
    const hsPlinth = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 2.0), matHsEmblem);
    hsPlinth.position.set(0, 1.85, pz);
    hsPlinth.rotation.y = ry;
    scene.add(hsPlinth);
  }
  const lLegs = new THREE.Mesh(new THREE.BoxGeometry(1.4, 2.2, 1.0), matBronze);
  lLegs.position.set(0, 4.5, -8);
  const lTorso = new THREE.Mesh(new THREE.BoxGeometry(1.8, 2.2, 1.1), matBronze);
  lTorso.position.set(0, 6.7, -8);
  const lHead = new THREE.Mesh(new THREE.SphereGeometry(0.58, 10, 10), matBronze);
  lHead.position.set(0, 8.4, -8);
  const lArm = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 2.6, 8), matBronze);
  lArm.rotation.x = Math.PI / 2 - 0.3;
  lArm.position.set(0.9, 7.6, -6.5);
  scene.add(lLegs, lTorso, lHead, lArm);

  // Red Soviet Flags with Yellow Hammer & Sickle on Poles flanking the Square
  for (const [fx, fz] of [[-14, -2], [14, -2], [-14, -18], [14, -18]]) {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.11, 7.8, 8), matSteel);
    pole.position.set(fx, 3.9, fz);
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 1.5), matHsFlag);
    flag.position.set(fx + 1.42, 6.8, fz);
    scene.add(pole, flag);
    collision.addBox(fx, 3.8, fz, 0.45, 7.6, 0.45, 'solid');
    animated.push((t) => { flag.rotation.y = Math.sin(t * 3.0 + fx) * 0.16; });
  }

  // Second Monument of Two Workers (east side of square)
  addSolidBox(scene, collision, 21, 1.2, -10, 3.6, 2.4, 2.6, matGranite, 'stone');
  for (const wx of [20.1, 21.9]) {
    const wb = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.55, 3.2, 8), matBronze);
    wb.position.set(wx, 4.0, -10);
    const wh = new THREE.Mesh(new THREE.SphereGeometry(0.38, 8, 8), matBronze);
    wh.position.set(wx, 5.9, -10);
    scene.add(wb, wh);
  }
  const archTool = new THREE.Mesh(new THREE.TorusGeometry(0.95, 0.12, 6, 14, Math.PI), matBronze);
  archTool.position.set(21, 6.2, -10);
  scene.add(archTool);

  // Ministry Block with Rooftop Cyrillic Slogan ("СЛАВА ТРУДУ!") & Hammer-and-Sickle Emblem on West Square Edge
  addSolidBox(scene, collision, -42, 7.0, -8, 16, 14, 26, matCream, 'stone');
  const hsMinistry = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 4.2), matHsEmblem);
  hsMinistry.position.set(-33.9, 9.2, -8);
  hsMinistry.rotation.y = Math.PI / 2;
  scene.add(hsMinistry);
  const slogan = new THREE.Mesh(
    new THREE.BoxGeometry(0.4, 2.6, 18),
    new THREE.MeshStandardMaterial({ map: createSloganBannerTexture('СЛАВА ТРУДУ!', '#a61c1c', '#fff4cc') })
  );
  slogan.position.set(-34.2, 15.6, -8);
  scene.add(slogan);

  // ---- 2B. ENTERABLE METRO PAVILION (Red M sign, ticket window, turnstiles & iron grille over stairs down!) ----
  const metro = buildHollowRoom(scene, collision, {
    cx: 21, cz: 17, w: 11.0, d: 10.5, h: 4.5, floorY: 0.18,
    wallMat: matCream, floorMat: matFloor, roofMat: matConc, roofStyle: 'parapet',
    parapetColor: 0x6e2420,
    west: [
      { type: 'window', offset: -3.4, width: 1.8 },
      { type: 'door', offset: 0, width: 3.2, height: 3.3 },
      { type: 'window', offset: 3.4, width: 1.8 }
    ],
    interiorLight: { color: 0xfff0cc, intensity: 1.9, distance: 15 }
  });
  // Glowing Red "M" Sign above the Metro Pavilion entrance!
  const metroSign = new THREE.Mesh(
    new THREE.BoxGeometry(0.32, 2.2, 2.4),
    new THREE.MeshStandardMaterial({ map: createSloganBannerTexture('M', '#1b1d20', '#ff2a2a', 256, 256), emissive: 0x6b0c0c, emissiveIntensity: 0.85 })
  );
  metroSign.position.set(15.2, metro.roofY + 1.3, 17);
  scene.add(metroSign);
  // Ticket Window booth ("КАССА") along south wall + Turnstiles across hall (leaving wide 2.3m center gap!)
  addSolidBox(scene, collision, 19.6, metro.floorY + 1.2, 21.1, 3.6, 2.4, 1.3, matWood, 'wood');
  const kassaSign = new THREE.Mesh(
    new THREE.PlaneGeometry(2.6, 0.55),
    new THREE.MeshStandardMaterial({ map: createSloganBannerTexture('КАССА', '#1c4f7a', '#fff4d4') })
  );
  kassaSign.position.set(19.6, metro.floorY + 2.65, 20.4);
  kassaSign.rotation.y = Math.PI;
  scene.add(kassaSign);
  for (const tz of [13.5, 14.9, 19.1]) {
    addSolidBox(scene, collision, 21.0, metro.floorY + 0.55, tz, 0.45, 1.1, 0.65, matSteel, 'solid');
  }
  // Escalator way down on east end closed off by a solid iron grille!
  buildBarredWall(scene, collision, {
    axis: 'z', center: { x: 24.4, z: 17.0 }, baseY: metro.floorY, length: 9.2, height: 4.2, doors: []
  });
  const downVoid = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 7.6), new THREE.MeshBasicMaterial({ color: 0x111316 }));
  downVoid.rotation.x = -Math.PI / 2;
  downVoid.position.set(25.4, metro.floorY + 0.04, 17.0);
  scene.add(downVoid);

  // ---- 2C. ENTERABLE DISTRICT LIBRARY ("БИБЛИОТЕКА" — Rows of tall wooden bookshelves to hide between!) ----
  const library = buildHollowRoom(scene, collision, {
    cx: -24, cz: 15, w: 13.0, d: 11.5, h: 4.5, floorY: 0.18,
    wallMat: matCream, floorMat: matWood, roofMat: matConc, roofStyle: 'parapet',
    east: [
      { type: 'window', offset: -3.6, width: 2.0 },
      { type: 'door', offset: 0, width: 2.8, height: 3.1 },
      { type: 'window', offset: 3.6, width: 2.0 }
    ],
    north: [{ type: 'door', offset: 0, width: 2.4, height: 3.0 }],
    interiorLight: { color: 0xffe6b8, intensity: 1.8, distance: 16 }
  });
  const libSign = new THREE.Mesh(
    new THREE.PlaneGeometry(6.8, 1.25),
    new THREE.MeshStandardMaterial({ map: createSloganBannerTexture('БИБЛИОТЕКА', '#59231d', '#fff4cc') })
  );
  libSign.position.set(-17.3, library.roofY + 0.35, 15);
  libSign.rotation.y = Math.PI / 2;
  scene.add(libSign);
  // Three parallel rows of tall wooden bookcases (2.3m aisles wide enough to weave & fight between!)
  const bookRed = new THREE.MeshStandardMaterial({ color: 0x8f2424, roughness: 0.85 });
  const bookBlue = new THREE.MeshStandardMaterial({ color: 0x244a7c, roughness: 0.85 });
  for (let i = 0; i < 3; i++) {
    const sx = -27.8 + i * 2.6;
    addSolidBox(scene, collision, sx, library.floorY + 1.25, 16.0, 0.72, 2.5, 5.4, matWood, 'wood');
    const spine = new THREE.Mesh(new THREE.BoxGeometry(0.76, 1.9, 4.8), i % 2 === 0 ? bookRed : bookBlue);
    spine.position.set(sx, library.floorY + 1.35, 16.0);
    scene.add(spine);
  }
  addDesk(scene, collision, -19.8, library.floorY, 11.6, 1.8, 0.85, matWood, 1);

  // ---- 3. ENTERABLE PALACE OF CULTURE (Classical columns, red seats, stage with curtains & piano!) ----
  const palace = buildHollowRoom(scene, collision, {
    cx: -40, cz: -38, w: 18, d: 18, h: 5.4, floorY: 0.25,
    wallMat: matCream, floorMat: matWood, roofMat: matConc, roofStyle: 'flat',
    east: [
      { type: 'window', offset: -5.5, width: 2.2 },
      { type: 'door', offset: 0, width: 3.2, height: 3.4 },
      { type: 'window', offset: 5.5, width: 2.2 }
    ],
    south: [{ type: 'door', offset: 0, width: 2.6, height: 3.2 }],
    interiorLight: { color: 0xffdfaa, intensity: 2.0, distance: 20 }
  });
  // Portico columns outside East entrance (solid!)
  for (const cz of [-44, -40, -36, -32]) {
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.42, 5.4, 10), matCream);
    col.position.set(-29.2, 2.7, cz);
    scene.add(col);
    collision.addBox(-29.2, 2.7, cz, 0.9, 5.4, 0.9, 'stone');
  }
  const porticoRoof = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.65, 16), matCream);
  porticoRoof.position.set(-30.0, 5.7, -38);
  const hsPalace = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 2.6), matHsEmblem);
  hsPalace.position.set(-28.25, 7.1, -38);
  hsPalace.rotation.y = Math.PI / 2;
  scene.add(porticoRoof, hsPalace);
  // Interior Auditorium: rows of red seats, stage platform, crimson curtains & upright piano!
  const matRedSeat = new THREE.MeshStandardMaterial({ color: 0x991b1e, roughness: 0.8 });
  for (const sx of [-35.5, -38.5]) {
    addPewRow(scene, collision, sx, palace.floorY, -42.5, 4.2, matRedSeat);
    addPewRow(scene, collision, sx, palace.floorY, -33.5, 4.2, matRedSeat);
  }
  // Stage at west end + crimson curtains + piano
  addSolidBox(scene, collision, -46.6, palace.floorY + 0.22, -38, 3.8, 0.44, 14.0, matWood, 'wood');
  for (const cz of [-44.5, -31.5]) {
    const curt = new THREE.Mesh(new THREE.BoxGeometry(0.4, 4.8, 2.2), matRed);
    curt.position.set(-44.8, palace.floorY + 2.6, cz);
    scene.add(curt);
  }
  addPiano(scene, collision, -46.2, palace.floorY + 0.44, -38, Math.PI / 2);

  // ---- 4. ENTERABLE FACTORY HALL WITH 2 SMOKING CHIMNEYS (East!) ----
  const factory = buildHollowRoom(scene, collision, {
    cx: 48, cz: -38, w: 18, d: 16, h: 5.8, floorY: 0.16,
    wallMat: matBrick, floorMat: matConc, roofMat: matSteel, roofStyle: 'gable',
    west: [{ type: 'door', offset: 0, width: 3.6, height: 3.6 }],
    south: [{ type: 'door', offset: 0, width: 2.8, height: 3.2 }],
    interiorLight: { color: 0xd8e8ff, intensity: 1.6, distance: 18 }
  });
  // Two tall brick smoking chimneys
  for (const cz of [-43, -33]) {
    const chim = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.7, 24, 10), matBrick);
    chim.position.set(58, 12, cz);
    scene.add(chim);
    collision.addBox(58, 6.0, cz, 3.4, 12.0, 3.4, 'stone');
    particles.addMistEmitter(new THREE.Vector3(58, 24.5, cz), 2.8);
  }
  // Heavy factory lathe/press blocks inside
  addSolidBox(scene, collision, 51, factory.floorY + 0.9, -42, 3.6, 1.8, 1.8, matSteel, 'solid');
  addSolidBox(scene, collision, 51, factory.floorY + 0.9, -34, 3.6, 1.8, 1.8, matSteel, 'solid');

  // ---- PARK WITH FROZEN POND & BANDSTAND (East of Square!) ----
  const pond = new THREE.Mesh(new THREE.CylinderGeometry(9.5, 9.5, 0.1, 18), matIce);
  pond.position.set(44, 0.05, 4);
  scene.add(pond);
  // Bandstand pavilion beside pond
  const bandFloor = new THREE.Mesh(new THREE.CylinderGeometry(3.6, 3.8, 0.35, 8), matWood);
  bandFloor.position.set(60, 0.18, 4);
  const bandRoof = new THREE.Mesh(new THREE.ConeGeometry(4.2, 2.2, 8), matSteel);
  bandRoof.position.set(60, 4.4, 4);
  scene.add(bandFloor, bandRoof);
  collision.addWalkable(60, 4, 7.2, 7.2, 0.36);

  // ---- 5. ENTERABLE COMMITTEE BUILDING (Stepped Tower, Spire & Glowing Red Star!) ----
  // Pillared lobby, reception desk, red carpet, barred archive cage holding the seized manuscript,
  // and wing of 3 barred cells + interrogation desk!
  const comm = buildHollowRoom(scene, collision, {
    cx: 0, cz: -62, w: 28, d: 18, h: 5.2, floorY: 0.25,
    wallMat: matCream, floorMat: matFloor, roofMat: matConc, roofStyle: 'none',
    south: [
      { type: 'window', offset: -8.5, width: 2.4 },
      { type: 'door', offset: 0, width: 3.6, height: 3.6 },
      { type: 'window', offset: 8.5, width: 2.4 }
    ],
    west: [{ type: 'door', offset: 0, width: 2.4, height: 3.0 }],
    east: [{ type: 'door', offset: 0, width: 2.4, height: 3.0 }],
    interiorLight: { color: 0xffe4b8, intensity: 2.2, distance: 26 }
  });
  // Stepped Stalinist High-Rise Tower, Spire & Glowing Red Star atop Committee Building!
  const step1 = new THREE.Mesh(new THREE.BoxGeometry(28.4, 6.0, 18.4), matCream);
  step1.position.set(0, comm.roofY + 3.0, -62);
  const step2 = new THREE.Mesh(new THREE.BoxGeometry(16, 8.5, 12), matCream);
  step2.position.set(0, comm.roofY + 10.2, -62);
  const step3 = new THREE.Mesh(new THREE.BoxGeometry(8, 6.5, 8), matCream);
  step3.position.set(0, comm.roofY + 17.5, -62);
  const spire = new THREE.Mesh(new THREE.ConeGeometry(1.1, 10, 8), matSteel);
  spire.position.set(0, comm.roofY + 25.5, -62);
  const redStar = new THREE.Mesh(new THREE.OctahedronGeometry(1.45, 0), matRedGlow);
  redStar.position.set(0, comm.roofY + 31.2, -62);
  // Prominent Hammer & Sickle Emblem on the Committee Stepped Tower facade!
  const hsTower = new THREE.Mesh(new THREE.PlaneGeometry(4.4, 4.4), matHsEmblem);
  hsTower.position.set(0, comm.roofY + 10.2, -55.9);
  scene.add(step1, step2, step3, spire, redStar, hsTower);
  collision.addBox(0, comm.roofY + 3.2, -62, 28.4, 6.4, 18.4, 'stone');

  // ---- 6. SOVIET BUILDING SITE (Bare concrete frame, upper slab reached by stairs, tower crane & enterable builders' hut!) ----
  {
    const bx = 50, bz = -64, bw = 14.0, bd = 11.0, slabY = 3.2;
    // Bare concrete column frame rising 6.8m high + perimeter roof beams
    for (const cx of [-6.4, 0, 6.4]) {
      for (const cz of [-4.9, 4.9]) {
        addSolidBox(scene, collision, bx + cx, 3.4, bz + cz, 0.72, 6.8, 0.72, matConc, 'stone');
      }
    }
    for (const rz of [-4.9, 4.9]) {
      const bm = new THREE.Mesh(new THREE.BoxGeometry(bw, 0.55, 0.65), matConc);
      bm.position.set(bx, 6.8, bz + rz);
      scene.add(bm);
    }
    for (const rx of [-6.4, 6.4]) {
      const bm = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.55, bd), matConc);
      bm.position.set(bx + rx, 6.8, bz);
      scene.add(bm);
    }
    // Concrete foundation block supporting the elevated slab (so walkers climb the stairs cleanly instead of walking underneath)
    addSolidBox(scene, collision, bx, (slabY - 0.35) * 0.5, bz, bw - 0.4, slabY - 0.35, bd - 0.4, matConc, 'stone');
    // Walkable elevated concrete slab (y = 3.2m!)
    const slab = new THREE.Mesh(new THREE.BoxGeometry(bw, 0.38, bd), matConc);
    slab.position.set(bx, slabY - 0.19, bz);
    slab.receiveShadow = true;
    slab.castShadow = true;
    scene.add(slab);
    collision.addWalkable(bx, bz, bw + 0.3, bd + 0.3, slabY);
    // Low safety guard rail along north, south & east edges of upper slab (leaving west stair landing open!)
    addSolidBox(scene, collision, bx, slabY + 0.55, bz - bd * 0.5, bw, 1.1, 0.2, matSteel, 'solid');
    addSolidBox(scene, collision, bx, slabY + 0.55, bz + bd * 0.5, bw, 1.1, 0.2, matSteel, 'solid');
    addSolidBox(scene, collision, bx + bw * 0.5, slabY + 0.55, bz, 0.2, 1.1, bd, matSteel, 'solid');

    // Climbable Concrete Staircase ascending from open West plaza (x = 31.5, y = 0) up to Slab (x = 43.0, y = 3.2)!
    const stCount = 9;
    for (let i = 0; i < stCount; i++) {
      const sy = slabY * ((i + 1) / stCount);
      const sx = 31.4 + i * 1.38;
      const step = new THREE.Mesh(new THREE.BoxGeometry(1.48, sy, 3.2), matConc);
      step.position.set(sx, sy * 0.5, bz);
      step.receiveShadow = true;
      scene.add(step);
      if (sy > 0.52) {
        collision.addBox(sx, (sy - 0.12) * 0.5, bz, 1.44, sy - 0.12, 3.1, 'stone');
      }
      collision.addWalkable(sx, bz, 1.7, 3.4, sy);
    }
    // Concrete stair side curbs guiding walkers straight up from the west foot (x=31.4) onto the slab
    for (const side of [-1, 1]) {
      addSolidBox(scene, collision, 37.5, 1.85, bz + side * 1.76, 11.4, 3.7, 0.24, matConc, 'stone');
    }

    // Tall Yellow-and-Red Lattice Tower Crane beside the Concrete Frame!
    const craneMat = new THREE.MeshStandardMaterial({ color: 0xd99b24, roughness: 0.55, metalness: 0.45 });
    const crX = 64, crZ = -66;
    addSolidBox(scene, collision, crX, 1.2, crZ, 3.0, 2.4, 3.0, matConc, 'stone');
    const crMast = new THREE.Mesh(new THREE.BoxGeometry(1.6, 26, 1.6), craneMat);
    crMast.position.set(crX, 15.0, crZ);
    const crCab = new THREE.Mesh(new THREE.BoxGeometry(2.2, 2.4, 2.2), matRed);
    crCab.position.set(crX - 1.2, 25.0, crZ);
    const crJib = new THREE.Mesh(new THREE.BoxGeometry(26, 1.4, 1.4), craneMat);
    crJib.position.set(crX - 7.5, 27.6, crZ);
    const crCounter = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.8, 2.0), matConc);
    crCounter.position.set(crX + 5.2, 27.4, crZ);
    const cable = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 14, 6), matSteel);
    cable.position.set(crX - 14.0, 20.4, crZ);
    const hookSlab = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.45, 2.0), matConc);
    hookSlab.position.set(crX - 14.0, 13.4, crZ);
    scene.add(crMast, crCab, crJib, crCounter, cable, hookSlab);

    // Enterable Builders' Hut (бытовка) beside the Building Site!
    const hut = buildHollowRoom(scene, collision, {
      cx: 27, cz: -54, w: 8.5, d: 7.5, h: 3.4, floorY: 0.16,
      wallMat: matWood, floorMat: matFloor, roofMat: matSteel, roofStyle: 'flat',
      south: [{ type: 'door', offset: 0, width: 2.3, height: 2.7 }],
      east: [{ type: 'window', offset: 0, width: 1.8 }],
      interiorLight: { color: 0xffd288, intensity: 1.4, distance: 11 }
    });
    addDesk(scene, collision, 25.0, hut.floorY, -56.0, 1.8, 0.85, matWood, 1);
    addBunk(scene, collision, 29.4, hut.floorY, -56.2, true, matSteel, 0x5c4b3c);
  }

  // Lobby Red Carpet & Pillars + Reception Desk
  const carpet = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 14.5), matRed);
  carpet.rotation.x = -Math.PI / 2;
  carpet.position.set(0, comm.floorY + 0.03, -61.5);
  scene.add(carpet);
  for (const [px, pz] of [[-4.2, -57.5], [4.2, -57.5], [-4.2, -64.5], [4.2, -64.5]]) {
    addSolidBox(scene, collision, px, comm.floorY + 2.6, pz, 0.72, 5.2, 0.72, matCream, 'stone');
  }
  addDesk(scene, collision, -1.8, comm.floorY, -58.5, 2.2, 0.9, matWood, 1);

  // Barred Archive Cage (North-West section) holding the Seized Manuscript!
  buildBarredWall(scene, collision, {
    axis: 'x', center: { x: -9.0, z: -65.0 }, baseY: comm.floorY, length: 9.0, height: 4.8,
    doors: [{ offset: 1.5, width: 2.1 }]
  });
  buildBarredWall(scene, collision, {
    axis: 'z', center: { x: -4.5, z: -68.0 }, baseY: comm.floorY, length: 6.0, height: 4.8, doors: []
  });
  // Seized Manuscript on archive pedestal (glowing stack of typed pages!)
  addSolidBox(scene, collision, -10.0, comm.floorY + 0.45, -68.5, 1.4, 0.9, 1.0, matWood, 'wood');
  const manuscript = new THREE.Mesh(
    new THREE.BoxGeometry(0.65, 0.22, 0.48),
    new THREE.MeshStandardMaterial({ color: 0xfff8e6, emissive: 0xffd27a, emissiveIntensity: 0.75, roughness: 0.4 })
  );
  manuscript.position.set(-10.0, comm.floorY + 1.02, -68.5);
  scene.add(manuscript);

  // Wing of 3 Barred Cells + Interrogation Desk (East section of Committee Building!)
  buildBarredWall(scene, collision, {
    axis: 'x', center: { x: 8.5, z: -65.2 }, baseY: comm.floorY, length: 10.6, height: 4.8,
    doors: [{ offset: -3.2, width: 1.9 }, { offset: 0.2, width: 1.9 }, { offset: 3.4, width: 1.9 }]
  });
  buildBarredWall(scene, collision, {
    axis: 'z', center: { x: 6.8, z: -68.0 }, baseY: comm.floorY, length: 5.5, height: 4.8, doors: []
  });
  buildBarredWall(scene, collision, {
    axis: 'z', center: { x: 10.4, z: -68.0 }, baseY: comm.floorY, length: 5.5, height: 4.8, doors: []
  });
  addDesk(scene, collision, 8.8, comm.floorY, -60.5, 1.8, 0.9, matSteel, 1);

  // Distant Soviet Skyline Blocks & Tall TV Tower (Ostankino-inspired!)
  for (const [dx, dz, dw, dh] of [[-125, -145, 38, 28], [120, -140, 42, 32], [-145, 30, 32, 24], [148, 20, 36, 26]]) {
    const dBlk = new THREE.Mesh(new THREE.BoxGeometry(dw, dh, 18), matPanel);
    dBlk.position.set(dx, dh * 0.5, dz);
    scene.add(dBlk);
  }
  const tvTower = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 5.2, 118, 12), matConc);
  tvTower.position.set(78, 59, -155);
  const tvDeck = new THREE.Mesh(new THREE.CylinderGeometry(5.5, 4.2, 4.5, 12), matSteel);
  tvDeck.position.set(78, 86, -155);
  const tvSpire = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.8, 36, 8), matRed);
  tvSpire.position.set(78, 134, -155);
  scene.add(tvTower, tvDeck, tvSpire);

  particles.initAmbient('snow', collision.bounds);

  // ---- PICKUPS: Glasses of Hot Tea (+35 HP) & Ammo ----
  const pickupDefs = [
    { type: 'health', variant: 'tea_glass', pos: new THREE.Vector3(-19, 0.9, 46),  label: 'GLASS OF HOT TEA (+35 HP)' },
    { type: 'health', variant: 'tea_glass', pos: new THREE.Vector3(21, 0.9, 46),   label: 'GARAGE HOT TEA (+35 HP)' },
    { type: 'health', variant: 'tea_glass', pos: new THREE.Vector3(19, 0.9, 17),   label: 'METRO PAVILION TEA (+35 HP)' },
    { type: 'health', variant: 'tea_glass', pos: new THREE.Vector3(-23, 0.9, 13),  label: 'LIBRARY HOT TEA (+35 HP)' },
    { type: 'health', variant: 'tea_glass', pos: new THREE.Vector3(27, 0.9, -53),  label: "BUILDERS' HUT TEA (+35 HP)" },
    { type: 'health', variant: 'tea_glass', pos: new THREE.Vector3(-40, 0.9, -38), label: 'PALACE HOT TEA (+35 HP)' },
    { type: 'health', variant: 'tea_glass', pos: new THREE.Vector3(48, 0.9, -38),  label: 'FACTORY HOT TEA (+35 HP)' },
    { type: 'health', variant: 'tea_glass', pos: new THREE.Vector3(0, 0.9, -62),   label: 'COMMITTEE HOT TEA (+35 HP)' },
    { type: 'health', variant: 'tea_glass', pos: new THREE.Vector3(-14.5, 0.72, 58), label: 'CELLAR HATCH TEA (+35 HP)', inDen: true },
    { type: 'ammo',   pos: new THREE.Vector3(21, 0.9, 34),   label: 'GARAGE AMMO BOX' },
    { type: 'ammo',   pos: new THREE.Vector3(-12, 0.9, -22), label: 'MILITIA AMMO CRATE' }
  ];
  for (const pd of pickupDefs) {
    const mesh = createPickupMesh(pd.type, pd.variant || 'default');
    mesh.position.copy(pd.pos);
    scene.add(mesh);
    pickups.push({ ...pd, mesh, collected: false });
  }

  // ---- 36 ENEMIES (KGB Agents, Soviet Militia, Guard Dogs, Metro, Library, Building Site & Boss Colonel Voronin!) ----
  const enemySpawns = [
    // Southern Avenue & Courtyards
    { type: 'soviet_militia', pos: new THREE.Vector3(-6, 0, 58) },
    { type: 'kgb_agent',      pos: new THREE.Vector3(6, 0, 54) },
    { type: 'kgb_agent',      pos: new THREE.Vector3(-18, 0.16, 46) }, // Food Shop
    { type: 'guard_dog',      pos: new THREE.Vector3(-28, 0, 44) },
    { type: 'soviet_militia', pos: new THREE.Vector3(-36, 0, 28) },    // Playground courtyard
    { type: 'soviet_militia', pos: new THREE.Vector3(21, 0.14, 46) },  // Garage 2
    { type: 'kgb_agent',      pos: new THREE.Vector3(21, 0.14, 34) },  // Garage 1
    { type: 'guard_dog',      pos: new THREE.Vector3(5, 0, 32) },
    // Checkpoint, Metro Pavilion & District Library
    { type: 'soviet_militia', pos: new THREE.Vector3(-4, 0, 20) },
    { type: 'kgb_agent',      pos: new THREE.Vector3(3, 0, 15) },
    { type: 'guard_dog',      pos: new THREE.Vector3(-12, 0, 14) },
    { type: 'soviet_militia', pos: new THREE.Vector3(14, 0, 10) },
    { type: 'kgb_agent',      pos: new THREE.Vector3(19.2, 0.18, 17.0) },  // Inside Metro Pavilion
    { type: 'soviet_militia', pos: new THREE.Vector3(-23.8, 0.18, 15.0) }, // Inside District Library
    // Cobbled Square & Park
    { type: 'kgb_agent',      pos: new THREE.Vector3(-10, 0, -2) },
    { type: 'soviet_militia', pos: new THREE.Vector3(10, 0, -2) },
    { type: 'soviet_militia', pos: new THREE.Vector3(32, 0, 4) },      // Park pond
    { type: 'kgb_agent',      pos: new THREE.Vector3(56, 0, 4) },      // Park bandstand
    { type: 'kgb_agent',      pos: new THREE.Vector3(-16, 0, -16) },
    { type: 'soviet_militia', pos: new THREE.Vector3(16, 0, -16) },
    // Palace of Culture (West)
    { type: 'kgb_agent',      pos: new THREE.Vector3(-26, 0, -34) },
    { type: 'soviet_militia', pos: new THREE.Vector3(-34, 0.25, -38) }, // Inside Palace of Culture
    { type: 'kgb_agent',      pos: new THREE.Vector3(-42, 0.25, -38) }, // Inside Palace of Culture
    // Factory Hall & Building Site (East / North-East)
    { type: 'soviet_militia', pos: new THREE.Vector3(34, 0, -36) },
    { type: 'guard_dog',      pos: new THREE.Vector3(38, 0, -40) },
    { type: 'soviet_militia', pos: new THREE.Vector3(46, 0.16, -38) },  // Inside Factory Hall
    { type: 'kgb_agent',      pos: new THREE.Vector3(52, 0.16, -38) },  // Inside Factory Hall
    { type: 'soviet_militia', pos: new THREE.Vector3(50.0, 3.2, -64.0) }, // On Building Site Concrete Upper Slab!
    { type: 'kgb_agent',      pos: new THREE.Vector3(27.0, 0.16, -53.0) }, // Inside Builders' Hut!
    // Committee Building Plaza & Interior (Lobby, Archive Cage, Cell Wing)
    { type: 'soviet_militia', pos: new THREE.Vector3(-8, 0, -34) },
    { type: 'soviet_militia', pos: new THREE.Vector3(8, 0, -34) },
    { type: 'guard_dog',      pos: new THREE.Vector3(0, 0, -44) },
    { type: 'kgb_agent',      pos: new THREE.Vector3(-8, 0.25, -60) },  // Inside Committee Lobby
    { type: 'soviet_militia', pos: new THREE.Vector3(8, 0.25, -62) },   // Inside Committee Cell Wing
    { type: 'kgb_agent',      pos: new THREE.Vector3(-9, 0.25, -67) },  // Guarding Manuscript Archive
    // Boss Colonel Voronin
    { type: 'boss_soviet',    pos: new THREE.Vector3(0, 0.25, -62), isBossWave: true }
  ];

  const enterableBuildings = [
    { name: 'Food Shop', inside: new THREE.Vector3(-19, 0.16, 46), outside: new THREE.Vector3(-12, 0, 46) },
    { name: 'Metro Pavilion', inside: new THREE.Vector3(19.2, 0.18, 17), outside: new THREE.Vector3(13, 0, 17) },
    { name: 'District Library', inside: new THREE.Vector3(-23.8, 0.18, 15), outside: new THREE.Vector3(-15, 0, 15) },
    { name: 'Building Site Slab', inside: new THREE.Vector3(50.0, 3.2, -64.0), outside: new THREE.Vector3(28.5, 0, -64) },
    { name: "Builders' Hut", inside: new THREE.Vector3(27, 0.16, -53), outside: new THREE.Vector3(27, 0, -47) },
    { name: 'Palace of Culture', inside: new THREE.Vector3(-39, 0.25, -38), outside: new THREE.Vector3(-27, 0, -38) },
    { name: 'Factory Hall', inside: new THREE.Vector3(46, 0.16, -38), outside: new THREE.Vector3(36, 0, -38) },
    { name: 'Committee Building', inside: new THREE.Vector3(0, 0.25, -61), outside: new THREE.Vector3(0, 0, -50) }
  ];

  // ---- STAGE 7 EXPANSION: CLOSED ORTHODOX CHURCH WITH OLD PRIEST (ITEM 42), FLATS WITH SAMOVAR, GOODS SIDING, BOILER HOUSE, COMMITTEE DRAIN & 29 BYSTANDERS ----
  const s7Plaster = new THREE.MeshStandardMaterial({ color: 0xded9cf, roughness: 0.88 });
  const s7Board = new THREE.MeshStandardMaterial({ color: 0x5c432c, roughness: 0.9 });
  const s7Roof = new THREE.MeshStandardMaterial({ color: 0x4b555c, roughness: 0.85 });
  const s7Floor = new THREE.MeshStandardMaterial({ color: 0x55524d, roughness: 0.92 });
  const s7Brass = new THREE.MeshStandardMaterial({ color: 0xd9a838, metalness: 0.85, roughness: 0.25 });

  // 1. Item 42: Small Closed Orthodox Church used as a store (cross removed from dome, boarded windows, crates inside; respectful!)
  const closedChurch = buildHollowRoom(scene, collision, {
    cx: 50, cz: 34, w: 10.5, d: 11.5, h: 4.8, floorY: 0.22,
    wallMat: s7Plaster, floorMat: s7Floor, roofMat: s7Roof, roofStyle: 'hip',
    west: [{ type: 'door', offset: 0, width: 2.5, height: 3.0 }],
    south: [{ type: 'window', offset: 0, width: 1.5 }],
    interiorLight: { color: 0xffd08a, intensity: 1.6, distance: 14 }
  });
  // Onion-dome cupola with its cross removed (empty stub) + wooden boards across the south window
  const domeDrum = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.5, 1.6, 12), s7Plaster);
  domeDrum.position.set(50, 6.2, 34);
  const domeBulb = new THREE.Mesh(new THREE.SphereGeometry(1.75, 12, 10), s7Roof);
  domeBulb.scale.set(1.0, 1.25, 1.0);
  domeBulb.position.set(50, 7.8, 34);
  const boardWin = new THREE.Mesh(new THREE.BoxGeometry(1.7, 1.4, 0.14), s7Board);
  boardWin.position.set(50, 1.85, 39.85);
  scene.add(domeDrum, domeBulb, boardWin);
  // Storage crates stacked respectfully near the north-west corner (leaving space around the priest at east apse)
  addSolidBox(scene, collision, 47.4, closedChurch.floorY + 0.65, 30.2, 1.4, 1.3, 1.4, s7Board, 'wood');
  addSolidBox(scene, collision, 49.0, closedChurch.floorY + 0.55, 30.0, 1.2, 1.1, 1.2, s7Board, 'wood');
  // Committee agent posted near the church doorway, clearly away from the old priest!
  enemySpawns.push({ type: 'kgb_agent', pos: new THREE.Vector3(46.2, closedChurch.floorY, 35.6) });

  // 2. Walk-Through Block of Flats with Furnished Room & Brass Samovar (x = -52, z = 44)
  const flatWalk = buildHollowRoom(scene, collision, {
    cx: -52, cz: 44, w: 11.0, d: 10.0, h: 3.8, floorY: 0.16,
    wallMat: s7Plaster, floorMat: s7Floor, roofMat: s7Roof, roofStyle: 'flat',
    east: [{ type: 'door', offset: 0, width: 2.3, height: 2.8 }],
    west: [{ type: 'door', offset: 0, width: 2.3, height: 2.8 }],
    interiorLight: { color: 0xffd288, intensity: 1.5, distance: 13 }
  });
  addTableAndChairs(scene, collision, -52, flatWalk.floorY, 47.0, s7Board);
  const samovar = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.12, 0.48, 10), s7Brass);
  samovar.position.set(-52, flatWalk.floorY + 1.08, 47.0);
  scene.add(samovar);

  // 3. Goods Siding Crawl-Under Boxcar (1.24m) + Drain Tunnel under Committee Side Wall (1.24m) + Crane Perch Ladder!
  const sovietBoxcar = addCrawlPassage(scene, collision, {
    cx: 56, cz: -14, floorY: 0, w: 3.2, d: 8.6, clearH: 1.24, bodyH: 2.4, mat: s7Roof, postMat: s7Board
  });
  const committeeDrain = addCrawlPassage(scene, collision, {
    cx: -19, cz: -52, floorY: 0, w: 3.0, d: 2.4, clearH: 1.24, bodyH: 1.8, mat: s7Floor, postMat: s7Floor, tag: 'stone'
  });
  // Perch platform & ladder on the Building Site Tower Crane (x = 42, z = -66)
  collision.addWalkable(42, -66, 3.6, 3.6, 7.2, true);
  const craneDeck = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.22, 3.6), s7Roof);
  craneDeck.position.set(42, 7.09, -66);
  scene.add(craneDeck);
  buildLadder(scene, collision, { x: 42, z: -64.05, bottomY: 0, topY: 7.2, normalX: 0, normalZ: 1, mat: s7Board });

  // 4. Twenty-Nine Period Soviet Bystanders (14 women + 14 men + Item 42 Old Orthodox Priest!)
  const bystanders = spawnBystanders(scene, collision, animated, 'soviet', [
    // Item 42: Old Orthodox Priest inside the closed church (east apse, lit taper & raised blessing hand!)
    { gender: 'male',   role: 'orthodox_priest', pos: new THREE.Vector3(53.2, closedChurch.floorY, 34.0), yaw: -Math.PI / 2 },
    // Saleswoman & queue outside Food Shop
    { gender: 'female', role: 'saleswoman', pos: new THREE.Vector3(-21.2, 0.16, 48.0), yaw: 1.4 },
    { gender: 'female', role: 'shopper', pos: new THREE.Vector3(-14.2, 0, 49.0), yaw: -1.4, prop: 'tote' },
    { gender: 'male',   role: 'shopper', pos: new THREE.Vector3(-13.8, 0, 50.6), yaw: -1.5 },
    { gender: 'female', role: 'shopper', pos: new THREE.Vector3(-14.4, 0, 52.1), yaw: -1.3, prop: 'tote' },
    { gender: 'male',   role: 'shopper', pos: new THREE.Vector3(-13.6, 0, 53.6), yaw: -1.5 },
    { gender: 'female', role: 'shopper', pos: new THREE.Vector3(-14.1, 0, 55.2), yaw: -1.2 },
    { gender: 'male',   role: 'shopper', pos: new THREE.Vector3(-13.7, 0, 56.7), yaw: -1.5 },
    // Two men at chess in the courtyard
    { gender: 'male',   role: 'chess_player', pos: new THREE.Vector3(-34.0, 0, 34.0), yaw: 1.5, seated: true },
    { gender: 'male',   role: 'chess_player', pos: new THREE.Vector3(-32.2, 0, 34.0), yaw: -1.5, seated: true },
    // Yard-keeper, librarian, market stallholders, ice fisherman, lathe worker
    { gender: 'female', role: 'yard_keeper', pos: new THREE.Vector3(-40.0, 0, 40.0), yaw: 0.7, prop: 'staff' },
    { gender: 'female', role: 'librarian', pos: new THREE.Vector3(-26.0, 0.18, 12.2), yaw: 1.4 },
    { gender: 'female', role: 'stallholder', pos: new THREE.Vector3(34.0, 0, 22.0), yaw: -1.3 },
    { gender: 'female', role: 'stallholder', pos: new THREE.Vector3(34.0, 0, 26.5), yaw: -1.4 },
    { gender: 'male',   role: 'ice_fisherman', pos: new THREE.Vector3(44.0, 0, 6.0), yaw: -0.6, seated: true },
    { gender: 'male',   role: 'lathe_worker', pos: new THREE.Vector3(54.0, 0.16, -34.0), yaw: -1.5 },
    // Two anonymous prisoners in plain grey on Committee cell bunks
    { gender: 'male',   role: 'prisoner', pos: new THREE.Vector3(11.5, 0.25, -67.5), yaw: -1.5, seated: true },
    { gender: 'male',   role: 'prisoner', pos: new THREE.Vector3(11.5, 0.25, -63.0), yaw: -1.5, seated: true },
    // Citizens around Metro pavilion, Palace of Culture, walk-through flat & snowy avenue
    { gender: 'female', role: 'commuter', pos: new THREE.Vector3(16.0, 0, 22.0), yaw: -1.2, prop: 'tote' },
    { gender: 'male',   role: 'commuter', pos: new THREE.Vector3(16.5, 0, 11.5), yaw: -1.0 },
    { gender: 'female', role: 'commuter', pos: new THREE.Vector3(12.2, 0, 26.0), yaw: -0.8 },
    { gender: 'female', role: 'resident', pos: new THREE.Vector3(-54.0, flatWalk.floorY, 41.2), yaw: 0.4 },
    { gender: 'male',   role: 'resident', pos: new THREE.Vector3(-49.5, flatWalk.floorY, 47.0), yaw: -0.8 },
    { gender: 'female', role: 'visitor', pos: new THREE.Vector3(-36.5, 0.25, -42.5), yaw: 0.6 },
    { gender: 'male',   role: 'visitor', pos: new THREE.Vector3(-41.0, 0.25, -34.0), yaw: 1.2 },
    { gender: 'female', role: 'pedestrian', pos: new THREE.Vector3(-12.5, 0, 34.0), yaw: 0.3 },
    { gender: 'male',   role: 'pedestrian', pos: new THREE.Vector3(12.5, 0, 38.0), yaw: -0.4 },
    { gender: 'female', role: 'pedestrian', pos: new THREE.Vector3(36.0, 0, 14.0), yaw: -1.1 },
    { gender: 'male',   role: 'pedestrian', pos: new THREE.Vector3(-28.0, 0, 2.0), yaw: 0.5 }
  ]);

  const specialSpots = {
    raisedHide: {
      deckY: 3.08,
      deckPos: new THREE.Vector3(21, 3.08, 40),
      ladder: garageLadder
    },
    crawlDen: cellarDen,
    extraCrawls: [sovietBoxcar, committeeDrain]
  };

  return { enemySpawns, pickups, animated, disposables, enterableBuildings, specialSpots, bystanders };
}
