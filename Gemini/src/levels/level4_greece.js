import * as THREE from 'three';
import {
  getGroundTexture,
  getMarbleTexture,
  getRoofTileTexture,
  getStoneTexture,
  createSailTexture
} from '../engine/textures.js';
import { createSkyDome, createWaterMesh } from '../engine/shaders.js';
import {
  buildHollowRoom,
  addSolidBox,
  addDesk,
  addBunk,
  addAltar
} from '../engine/buildings.js';
import { createPickupMesh } from './level1_west.js';

export const LEVEL4_META = {
  id: 'greece',
  index: 3,
  themeClass: 'theme-greece',
  act: 'ACT IV • 480 BC',
  title: 'AEGEAN ISLE',
  subtitle: 'Marble & Turquoise Sea',
  heroName: 'ULYSSES',
  objective: 'Break the Spartan Garrison & Claim the Marble Temple Sanctuary',
  quote: '"Under the blazing Aegean sun, bronze rings against marble. Walk from the sandy shore to the pillared sanctuary."',
  musicTheme: 'greece',
  enemyIcon: 'Λ',
  currency: 'Δ ',
  spawnPos: new THREE.Vector3(0, 0, 52),
  spawnYaw: 0,
  cameraPreview: { center: new THREE.Vector3(0, 6, -6), radius: 46, height: 16, speed: 0.13 }
};

export function buildLevel4(scene, collision, particles) {
  const disposables = [];
  const animated = [];
  const pickups = [];

  collision.bounds = { minX: -72, maxX: 74, minZ: -74, maxZ: 68 };

  // 1. Mediterranean Sun & Azure Sky
  const sunDir = new THREE.Vector3(0.45, 0.58, -0.68).normalize();
  const sky = createSkyDome({
    topColor: 0x0a489c, midColor: 0x3b96eb, horizonColor: 0xdff5ff,
    sunColor: 0xfffbe0, sunDirection: sunDir, cloudTint: 0xffffff, cloudDensity: 0.34
  });
  scene.add(sky.mesh);
  animated.push((t) => { sky.uniforms.uTime.value = t; });

  scene.fog = new THREE.FogExp2(0xc4e8f7, 0.004);
  scene.add(new THREE.HemisphereLight(0xe8f6ff, 0xc7a974, 0.86));

  const sunLight = new THREE.DirectionalLight(0xfff6dc, 2.25);
  sunLight.position.copy(sunDir).multiplyScalar(120);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(2048, 2048);
  sunLight.shadow.camera.left = -85;
  sunLight.shadow.camera.right = 85;
  sunLight.shadow.camera.top = 85;
  sunLight.shadow.camera.bottom = -85;
  sunLight.shadow.near = 10;
  sunLight.shadow.far = 260;
  sunLight.shadow.bias = -0.0005;
  scene.add(sunLight);

  const seaBounce = new THREE.DirectionalLight(0x64e0eb, 0.5);
  seaBounce.position.set(-55, 18, 40);
  scene.add(seaBounce);

  // 2. Turquoise Aegean Sea & Main Sunlit Sandy Island
  const sea = createWaterMesh(520, 520, {
    deepColor: 0x065c87, shallowColor: 0x26d0ce, foamColor: 0xf0fdff,
    sunColor: 0xfffce0, sunDir, opacity: 0.92, waveScale: 0.16
  });
  sea.mesh.position.set(0, -0.22, 0);
  scene.add(sea.mesh);
  animated.push((t) => { sea.uniforms.uTime.value = t; });

  const sandTex = getGroundTexture('greek_sand', 26, 26);
  const island = new THREE.Mesh(
    new THREE.BoxGeometry(156, 1.2, 152),
    new THREE.MeshStandardMaterial({ map: sandTex.map, bumpMap: sandTex.bumpMap, bumpScale: 0.18, roughness: 0.92 })
  );
  island.position.set(2, -0.6, -2);
  island.receiveShadow = true;
  scene.add(island);

  // White Marble Sacred Way (no bumpMap on bright white marble to prevent bloom NaN!)
  const marbleTex = getMarbleTexture(3, 24);
  const sacredWay = new THREE.Mesh(
    new THREE.PlaneGeometry(7.6, 108),
    new THREE.MeshStandardMaterial({ map: marbleTex.map, roughness: 0.68, metalness: 0.04 })
  );
  sacredWay.rotation.x = -Math.PI / 2;
  sacredWay.position.set(0, 0.04, 4);
  sacredWay.receiveShadow = true;
  scene.add(sacredWay);

  const marbleMat = new THREE.MeshStandardMaterial({ map: marbleTex.map, roughness: 0.64, metalness: 0.04 });
  const plasterMat = new THREE.MeshStandardMaterial({ color: 0xf4efe4, roughness: 0.84 });
  const aegeanBlue = new THREE.MeshStandardMaterial({ color: 0x1d6ec2, roughness: 0.58 });
  const terraTex = getRoofTileTexture('terracotta', 3, 2);
  const terraMat = new THREE.MeshStandardMaterial({ map: terraTex.map, bumpMap: terraTex.bumpMap, bumpScale: 0.16, roughness: 0.78 });
  const clayMat = new THREE.MeshStandardMaterial({ color: 0xc2653c, roughness: 0.78 });
  const stoneTex = getStoneTexture('castle', 2, 2);
  const rockMat = new THREE.MeshStandardMaterial({ map: stoneTex.map, color: 0xd9cdb8, roughness: 0.9 });
  const woodMat = new THREE.MeshStandardMaterial({ color: 0x6b4426, roughness: 0.85 });
  const bronzeMat = new THREE.MeshStandardMaterial({ color: 0xdca442, metalness: 0.82, roughness: 0.28 });
  const oliveLeaf = new THREE.MeshStandardMaterial({ color: 0x6f8c56, roughness: 0.85 });
  const cypressLeaf = new THREE.MeshStandardMaterial({ color: 0x244d2a, roughness: 0.88 });
  const sailMat = new THREE.MeshStandardMaterial({ map: createSailTexture('greece'), side: THREE.DoubleSide, roughness: 0.8 });
  const flameMat = new THREE.MeshBasicMaterial({ color: 0xffb338 });

  // ---- 1. ENTERABLE MARBLE ACROPOLIS TEMPLE WITH INNER CELLA & GREAT GOLDEN STATUE ----
  // Wide walkable stylobate plinth (0.38m climbable)
  const stylobate = new THREE.Mesh(new THREE.BoxGeometry(24, 0.38, 22), marbleMat);
  stylobate.position.set(0, 0.19, -40);
  stylobate.receiveShadow = true;
  scene.add(stylobate);
  collision.addWalkable(0, -40, 24.6, 22.6, 0.38);

  // Hollow inner Temple Cella room
  const cella = buildHollowRoom(scene, collision, {
    cx: 0, cz: -40, w: 14, d: 13, h: 5.4, floorY: 0.38,
    wallMat: marbleMat, floorMat: marbleMat, roofMat: terraMat, roofStyle: 'gable',
    south: [{ type: 'door', offset: 0, width: 3.4, height: 3.8 }],
    west: [{ type: 'window', offset: 0, width: 2.0 }],
    east: [{ type: 'window', offset: 0, width: 2.0 }],
    interiorLight: { color: 0xffe4a8, intensity: 2.0, distance: 18 }
  });

  // Outer Ring of Fluted Doric Marble Columns (EVERY column has solid collision!)
  const colPositions = [
    [-10, -50], [-5, -50], [0, -50], [5, -50], [10, -50],
    [-10, -30], [-5, -30], [5, -30], [10, -30],
    [-10, -45], [-10, -40], [-10, -35],
    [10, -45], [10, -40], [10, -35]
  ];
  for (const [cx, cz] of colPositions) {
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.54, 5.8, 12), marbleMat);
    col.position.set(cx, 0.38 + 2.9, cz);
    col.castShadow = true;
    const cap = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.34, 1.3), marbleMat);
    cap.position.set(cx, 0.38 + 5.9, cz);
    scene.add(col, cap);
    collision.addBox(cx, 3.2, cz, 1.15, 6.0, 1.15, 'stone');
  }
  // Marble Entablature Beams around the perimeter
  for (const [bx, bz, bw, bd] of [
    [0, -50, 22, 1.4], [0, -30, 22, 1.4], [-10, -40, 1.4, 21], [10, -40, 1.4, 21]
  ]) {
    const beam = new THREE.Mesh(new THREE.BoxGeometry(bw, 0.85, bd), marbleMat);
    beam.position.set(bx, 6.65, bz);
    scene.add(beam);
  }

  // Great Golden Cult Statue inside the Temple inner room!
  addSolidBox(scene, collision, 0, cella.floorY + 0.6, -43.5, 2.4, 1.2, 2.2, marbleMat, 'stone');
  const statTorso = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.72, 2.4, 10), bronzeMat);
  statTorso.position.set(0, cella.floorY + 2.4, -43.5);
  const statHead = new THREE.Mesh(new THREE.SphereGeometry(0.42, 10, 10), bronzeMat);
  statHead.position.set(0, cella.floorY + 3.9, -43.5);
  const statSpear = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 4.2, 6), bronzeMat);
  statSpear.position.set(0.9, cella.floorY + 2.8, -43.2);
  scene.add(statTorso, statHead, statSpear);

  // ---- 2. EVERY WHITEWASHED GREEK VILLAGE HOUSE IS ENTERABLE ----
  function buildGreekHouse(cx, cz, w, d, doorSide) {
    const opts = {
      cx, cz, w, d, h: 3.8, floorY: 0.16,
      wallMat: plasterMat, floorMat: rockMat, roofMat: terraMat, roofStyle: 'parapet',
      parapetColor: 0x1d6ec2,
      interiorLight: { color: 0xffd599, intensity: 1.5, distance: 12 }
    };
    opts[doorSide] = [{ type: 'door', offset: 0, width: 2.3, height: 2.8 }];
    const opp = doorSide === 'east' ? 'west' : doorSide === 'west' ? 'east' : doorSide === 'south' ? 'north' : 'south';
    opts[opp] = [{ type: 'window', offset: 0, width: 1.7 }];
    const room = buildHollowRoom(scene, collision, opts);
    // Blue shutters / trim + interior table & clay amphorae
    addDesk(scene, collision, cx + (doorSide === 'east' ? -2.2 : 2.2), room.floorY, cz, 1.5, 0.85, woodMat, 1);
    const amp = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.34, 0.95, 10), clayMat);
    amp.position.set(cx, room.floorY + 0.48, cz - d * 0.32);
    scene.add(amp);
    collision.addBox(cx, room.floorY + 0.48, cz - d * 0.32, 0.72, 0.96, 0.72, 'stone');
    return room;
  }

  buildGreekHouse(-22, 22, 9.5, 9.0, 'east');
  buildGreekHouse(22, 22, 9.5, 9.0, 'west');
  buildGreekHouse(-22, -6, 10.0, 9.5, 'east');
  buildGreekHouse(22, -6, 10.0, 9.5, 'west');

  // ---- 3. OUTLYING FISHERMEN'S CAPE (2 Enterable Houses + Beacon Tower + Ships!) ----
  const fh1 = buildGreekHouse(44, 34, 9.0, 8.5, 'west');
  addBunk(scene, collision, 46.2, fh1.floorY, 36.4, false, woodMat, 0x2665a8);
  const fh2 = buildGreekHouse(48, 16, 9.0, 8.5, 'west');
  addAltar(scene, collision, 50.8, fh2.floorY, 16, 1.2, 2.2, rockMat, 0x1d6ec2);

  // Enterable Coastal Beacon Tower (far east cape!)
  const beacon = buildHollowRoom(scene, collision, {
    cx: 56, cz: -14, w: 8.5, d: 8.5, h: 4.2, floorY: 0.2,
    wallMat: rockMat, floorMat: rockMat, roofMat: rockMat, roofStyle: 'none',
    west: [{ type: 'door', offset: 0, width: 2.3, height: 2.8 }],
    south: [{ type: 'window', offset: 0, width: 1.5 }],
    interiorLight: { color: 0xffb355, intensity: 1.4, distance: 12 }
  });
  const towerUpper = new THREE.Mesh(new THREE.CylinderGeometry(3.4, 4.0, 8.5, 10), rockMat);
  towerUpper.position.set(56, beacon.roofY + 4.25, -14);
  const brazier = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.1, 0.9, 10), bronzeMat);
  brazier.position.set(56, beacon.roofY + 8.9, -14);
  const beaconFlame = new THREE.Mesh(new THREE.ConeGeometry(1.3, 2.6, 8), flameMat);
  beaconFlame.position.set(56, beacon.roofY + 10.5, -14);
  scene.add(towerUpper, brazier, beaconFlame);
  animated.push((t) => { beaconFlame.scale.y = 0.85 + Math.sin(t * 9) * 0.22; });

  // Greek Trireme / Fishing Ships on the southern & eastern shores (solid!)
  function addGreekShip(sx, sz, rotY) {
    const g = new THREE.Group();
    g.position.set(sx, 0, sz);
    g.rotation.y = rotY;
    const hull = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.4, 10.5), woodMat);
    hull.position.y = 0.7;
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.18, 8.5, 8), woodMat);
    mast.position.y = 4.6;
    const sail = new THREE.Mesh(new THREE.PlaneGeometry(5.6, 4.8), sailMat);
    sail.position.set(0, 5.2, 0.35);
    g.add(hull, mast, sail);
    scene.add(g);
    collision.addBox(sx, 1.2, sz, 4.2, 2.4, 10.5, 'wood');
  }
  addGreekShip(-36, 54, 0.3);
  addGreekShip(34, 56, -0.35);

  // Olive Trees, Cypresses, Marble Columns & Low Walls (ALL solid!)
  function addOliveTree(tx, tz) {
    const tr = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.42, 3.0, 7), woodMat);
    tr.position.set(tx, 1.5, tz);
    const crown = new THREE.Mesh(new THREE.IcosahedronGeometry(2.3, 1), oliveLeaf);
    crown.position.set(tx, 3.6, tz);
    crown.scale.set(1.3, 0.72, 1.2);
    scene.add(tr, crown);
    collision.addBox(tx, 1.8, tz, 1.0, 3.6, 1.0, 'wood');
  }
  function addCypress(tx, tz) {
    const tr = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.28, 2.0, 6), woodMat);
    tr.position.set(tx, 1.0, tz);
    const leaf = new THREE.Mesh(new THREE.ConeGeometry(1.15, 7.2, 8), cypressLeaf);
    leaf.position.set(tx, 5.2, tz);
    scene.add(tr, leaf);
    collision.addBox(tx, 2.2, tz, 1.1, 4.4, 1.1, 'wood');
  }
  for (const [ox, oz] of [[-12, 34], [12, 36], [-36, 12], [-44, -18], [36, 4], [40, -28], [-28, -32], [28, -34]]) addOliveTree(ox, oz);
  for (const [cx, cz] of [[-10, 12], [10, 12], [-12, -20], [12, -20], [-34, -40], [34, -40], [56, 28], [-50, 26]]) addCypress(cx, cz);

  // Low Marble Cover Parapets
  for (const [wx, wz, ww, wd] of [
    [-7, 30, 4.5, 1.0], [8, 26, 4.5, 1.0], [-8, 4, 4.5, 1.0], [8, 0, 4.5, 1.0],
    [-8, -18, 4.8, 1.0], [8, -18, 4.8, 1.0], [34, 24, 1.0, 4.5]
  ]) addSolidBox(scene, collision, wx, 0.65, wz, ww, 1.3, wd, marbleMat, 'stone');

  particles.initAmbient('dust', collision.bounds);

  // ---- PICKUPS ----
  const pickupDefs = [
    { type: 'health', pos: new THREE.Vector3(-22, 0.9, 22),  label: 'AEGEAN WINE & OLIVES (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(44, 0.9, 34),   label: 'FISHERMAN STEW (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(56, 0.9, -14),  label: 'BEACON TOWER TONIC (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(0, 1.1, -39),   label: 'TEMPLE AMBROSIA (+35 HP)' },
    { type: 'ammo',   pos: new THREE.Vector3(22, 0.9, 22),   label: 'BRONZE JAVELIN BUNDLE' },
    { type: 'ammo',   pos: new THREE.Vector3(-22, 0.9, -6),  label: 'SPARTAN JAVELIN RACK' }
  ];
  for (const pd of pickupDefs) {
    const mesh = createPickupMesh(pd.type);
    mesh.position.copy(pd.pos);
    scene.add(mesh);
    pickups.push({ ...pd, mesh, collected: false });
  }

  // ---- 25 ENEMIES (Shore, Village Houses, Fishermen's Cape, Beacon Tower, Acropolis Temple, Boss Archidamos) ----
  const enemySpawns = [
    { type: 'spartan_hoplite',    pos: new THREE.Vector3(-8, 0, 36) },
    { type: 'spartan_skirmisher', pos: new THREE.Vector3(8, 0, 34) },
    { type: 'spartan_hoplite',    pos: new THREE.Vector3(-21, 0.16, 22) }, // House 1
    { type: 'spartan_skirmisher', pos: new THREE.Vector3(21, 0.16, 22) },  // House 2
    { type: 'spartan_hoplite',    pos: new THREE.Vector3(0, 0, 16) },
    { type: 'spartan_skirmisher', pos: new THREE.Vector3(-12, 0, 10) },
    { type: 'spartan_hoplite',    pos: new THREE.Vector3(12, 0, 8) },
    { type: 'spartan_skirmisher', pos: new THREE.Vector3(34, 0, 30) },
    { type: 'spartan_hoplite',    pos: new THREE.Vector3(44, 0.16, 33) },  // Cape House 1
    { type: 'spartan_skirmisher', pos: new THREE.Vector3(47, 0.16, 16) },  // Cape House 2
    { type: 'spartan_hoplite',    pos: new THREE.Vector3(46, 0, -4) },
    { type: 'spartan_skirmisher', pos: new THREE.Vector3(55, 0.2, -14) },  // Inside Beacon Tower
    { type: 'spartan_hoplite',    pos: new THREE.Vector3(-21, 0.16, -6) }, // House 3
    { type: 'spartan_skirmisher', pos: new THREE.Vector3(21, 0.16, -6) },  // House 4
    { type: 'spartan_hoplite',    pos: new THREE.Vector3(-8, 0, -14) },
    { type: 'spartan_skirmisher', pos: new THREE.Vector3(8, 0, -14) },
    { type: 'spartan_hoplite',    pos: new THREE.Vector3(-16, 0, -24) },
    { type: 'spartan_skirmisher', pos: new THREE.Vector3(16, 0, -24) },
    { type: 'spartan_hoplite',    pos: new THREE.Vector3(-6, 0, -26) },
    { type: 'spartan_skirmisher', pos: new THREE.Vector3(6, 0, -26) },
    { type: 'spartan_hoplite',    pos: new THREE.Vector3(-3, 0.38, -38) }, // Inside Temple Cella
    { type: 'spartan_skirmisher', pos: new THREE.Vector3(3, 0.38, -38) },  // Inside Temple Cella
    { type: 'spartan_hoplite',    pos: new THREE.Vector3(-16, 0, -40) },
    { type: 'spartan_skirmisher', pos: new THREE.Vector3(16, 0, -40) },
    { type: 'boss_greece',        pos: new THREE.Vector3(0, 0.38, -32), isBossWave: true }
  ];

  const enterableBuildings = [
    { name: 'Marble Temple Cella', inside: new THREE.Vector3(0, 0.38, -39), outside: new THREE.Vector3(0, 0.38, -31) },
    { name: 'Beacon Tower', inside: new THREE.Vector3(56, 0.2, -14), outside: new THREE.Vector3(49, 0, -14) },
    { name: 'Village House', inside: new THREE.Vector3(-22, 0.16, 22), outside: new THREE.Vector3(-14.5, 0, 22) }
  ];

  return { enemySpawns, pickups, animated, disposables, enterableBuildings };
}
