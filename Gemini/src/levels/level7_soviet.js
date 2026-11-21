import * as THREE from 'three';
import {
  getGroundTexture,
  getConcreteTexture,
  getSovietPanelTexture,
  createSloganBannerTexture,
  getWoodPlanks
} from '../engine/textures.js';
import { createSkyDome } from '../engine/shaders.js';
import {
  buildHollowRoom,
  buildBarredWall,
  addSolidBox,
  addDesk,
  addBunk,
  addPiano,
  addPewRow
} from '../engine/buildings.js';
import { createPickupMesh } from './level1_west.js';

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

  // ---- 2. TWO ENTERABLE GARAGES (East side south!) ----
  for (let i = 0; i < 2; i++) {
    const gz = 34 + i * 12;
    const gar = buildHollowRoom(scene, collision, {
      cx: 21, cz: gz, w: 10, d: 9.0, h: 3.8, floorY: 0.14,
      wallMat: matConc, floorMat: matConc, roofMat: matSteel, roofStyle: 'flat',
      west: [{ type: 'door', offset: 0, width: 3.4, height: 3.1 }],
      interiorLight: { color: 0xdde8ff, intensity: 1.2, distance: 11 }
    });
    addDesk(scene, collision, 24.4, gar.floorY, gz, 1.6, 0.85, matSteel, 1);
  }

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
  // Massive Statue of a Leader with Outstretched Arm on Red Granite Plinth!
  addSolidBox(scene, collision, 0, 1.7, -8, 4.4, 3.4, 4.4, matGranite, 'stone');
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

  // Red Flags on Poles flanking the Square
  for (const [fx, fz] of [[-14, -2], [14, -2], [-14, -18], [14, -18]]) {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.11, 7.8, 8), matSteel);
    pole.position.set(fx, 3.9, fz);
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 1.5), matRed);
    flag.position.set(fx + 1.32, 6.8, fz);
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

  // Ministry Block with Rooftop Cyrillic Slogan ("СЛАВА ТРУДУ!") on West Square Edge
  addSolidBox(scene, collision, -42, 7.0, -8, 16, 14, 26, matCream, 'stone');
  const slogan = new THREE.Mesh(
    new THREE.BoxGeometry(0.4, 2.6, 18),
    new THREE.MeshStandardMaterial({ map: createSloganBannerTexture('СЛАВА ТРУДУ!', '#a61c1c', '#fff4cc') })
  );
  slogan.position.set(-34.2, 15.6, -8);
  scene.add(slogan);

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
  scene.add(porticoRoof);
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
  scene.add(step1, step2, step3, spire, redStar);
  collision.addBox(0, comm.roofY + 3.2, -62, 28.4, 6.4, 18.4, 'stone');

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
    { type: 'health', variant: 'tea_glass', pos: new THREE.Vector3(-40, 0.9, -38), label: 'PALACE HOT TEA (+35 HP)' },
    { type: 'health', variant: 'tea_glass', pos: new THREE.Vector3(48, 0.9, -38),  label: 'FACTORY HOT TEA (+35 HP)' },
    { type: 'health', variant: 'tea_glass', pos: new THREE.Vector3(0, 0.9, -62),   label: 'COMMITTEE HOT TEA (+35 HP)' },
    { type: 'ammo',   pos: new THREE.Vector3(21, 0.9, 34),   label: 'GARAGE AMMO BOX' },
    { type: 'ammo',   pos: new THREE.Vector3(-12, 0.9, -22), label: 'MILITIA AMMO CRATE' }
  ];
  for (const pd of pickupDefs) {
    const mesh = createPickupMesh(pd.type, pd.variant || 'default');
    mesh.position.copy(pd.pos);
    scene.add(mesh);
    pickups.push({ ...pd, mesh, collected: false });
  }

  // ---- 32 ENEMIES (KGB Agents, Soviet Militia, Guard Dogs & Boss Colonel Voronin!) ----
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
    // Checkpoint & Avenue Approach
    { type: 'soviet_militia', pos: new THREE.Vector3(-4, 0, 20) },
    { type: 'kgb_agent',      pos: new THREE.Vector3(3, 0, 15) },
    { type: 'guard_dog',      pos: new THREE.Vector3(-12, 0, 14) },
    { type: 'soviet_militia', pos: new THREE.Vector3(16, 0, 12) },
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
    // Factory Hall (East)
    { type: 'soviet_militia', pos: new THREE.Vector3(34, 0, -36) },
    { type: 'guard_dog',      pos: new THREE.Vector3(38, 0, -40) },
    { type: 'soviet_militia', pos: new THREE.Vector3(46, 0.16, -38) },  // Inside Factory Hall
    { type: 'kgb_agent',      pos: new THREE.Vector3(52, 0.16, -38) },  // Inside Factory Hall
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
    { name: 'Palace of Culture', inside: new THREE.Vector3(-39, 0.25, -38), outside: new THREE.Vector3(-27, 0, -38) },
    { name: 'Factory Hall', inside: new THREE.Vector3(46, 0.16, -38), outside: new THREE.Vector3(36, 0, -38) },
    { name: 'Committee Building', inside: new THREE.Vector3(0, 0.25, -61), outside: new THREE.Vector3(0, 0, -50) }
  ];

  return { enemySpawns, pickups, animated, disposables, enterableBuildings };
}
