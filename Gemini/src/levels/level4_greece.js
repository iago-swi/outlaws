import * as THREE from 'three';
import {
  getGroundTexture,
  getMarbleTexture,
  getRoofTileTexture,
  getStoneTexture,
  createSailTexture
} from '../engine/textures.js';
import { createSkyDome, createWaterMesh } from '../engine/shaders.js';
import { createPickupMesh } from './level1_west.js';

export const LEVEL4_META = {
  id: 'greece',
  index: 3,
  themeClass: 'theme-greece',
  act: 'ACT IV • 480 BC',
  title: 'AEGEAN ISLE',
  subtitle: 'Marble & Turquoise Sea',
  heroName: 'ULYSSES',
  objective: 'Break the Spartan Garrison & Claim the Marble Temple',
  quote: '"Under the blazing Aegean sun, bronze rings against marble. Walk from the sandy shore to the pillared sanctuary."',
  musicTheme: 'greece',
  enemyIcon: 'Λ',
  currency: 'Δ ',
  spawnPos: new THREE.Vector3(0, 0, 44),
  spawnYaw: 0,
  cameraPreview: { center: new THREE.Vector3(0, 6, -4), radius: 42, height: 15, speed: 0.13 }
};

export function buildLevel4(scene, collision, particles) {
  const disposables = [];
  const animated = [];
  const pickups = [];

  collision.bounds = { minX: -46, maxX: 46, minZ: -52, maxZ: 50 };

  // 1. Blazing Mediterranean Sun & Cobalt Azure Sky Dome
  const sunDir = new THREE.Vector3(0.45, 0.58, -0.68).normalize();
  const sky = createSkyDome({
    topColor: 0x0a489c,
    midColor: 0x3b96eb,
    horizonColor: 0xdff5ff,
    sunColor: 0xfffbe0,
    sunDirection: sunDir,
    cloudTint: 0xffffff,
    cloudDensity: 0.34
  });
  scene.add(sky.mesh);
  animated.push((t) => { sky.uniforms.uTime.value = t; });

  scene.fog = new THREE.FogExp2(0xc4e8f7, 0.0044);

  const hemi = new THREE.HemisphereLight(0xe8f6ff, 0xc7a974, 0.85);
  scene.add(hemi);

  const sunLight = new THREE.DirectionalLight(0xfff6dc, 2.35);
  sunLight.position.copy(sunDir).multiplyScalar(115);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(2048, 2048);
  sunLight.shadow.camera.left = -68;
  sunLight.shadow.camera.right = 68;
  sunLight.shadow.camera.top = 68;
  sunLight.shadow.camera.bottom = -68;
  sunLight.shadow.near = 10;
  sunLight.shadow.far = 230;
  sunLight.shadow.bias = -0.0005;
  scene.add(sunLight);

  const seaBounce = new THREE.DirectionalLight(0x64e0eb, 0.55);
  seaBounce.position.set(-55, 18, 40);
  scene.add(seaBounce);

  // 2. Expansive Turquoise Aegean Sea surrounding the Greek Island!
  const sea = createWaterMesh(440, 440, {
    deepColor: 0x065c87,
    shallowColor: 0x26d0ce,
    foamColor: 0xf0fdff,
    sunColor: 0xfffce0,
    sunDir,
    opacity: 0.92,
    waveScale: 0.16
  });
  sea.mesh.position.set(0, -0.22, 0);
  scene.add(sea.mesh);
  animated.push((t) => { sea.uniforms.uTime.value = t; });

  // Main Sunlit Sandy Island Platform
  const sandTex = getGroundTexture('greek_sand', 18, 20);
  const islandGeo = new THREE.BoxGeometry(102, 1.2, 114);
  const island = new THREE.Mesh(
    islandGeo,
    new THREE.MeshStandardMaterial({
      map: sandTex.map,
      bumpMap: sandTex.bumpMap,
      bumpScale: 0.2,
      roughness: 0.92
    })
  );
  island.position.set(0, -0.6, -2);
  island.receiveShadow = true;
  scene.add(island);

  // White Marble Sacred Way leading from the Beach Village to the Acropolis Temple
  const marbleTex = getMarbleTexture(3, 22);
  const sacredWay = new THREE.Mesh(
    new THREE.PlaneGeometry(7.2, 86),
    new THREE.MeshStandardMaterial({ map: marbleTex.map, roughness: 0.68, metalness: 0.04 })
  );
  sacredWay.rotation.x = -Math.PI / 2;
  sacredWay.position.set(0, 0.04, 1);
  sacredWay.receiveShadow = true;
  scene.add(sacredWay);

  // Shared Materials
  const marbleMat = new THREE.MeshStandardMaterial({ map: marbleTex.map, roughness: 0.62, metalness: 0.05 });
  const plasterMat = new THREE.MeshStandardMaterial({ color: 0xfaf7f0, roughness: 0.84 });
  const aegeanBlue = new THREE.MeshStandardMaterial({ color: 0x1d6ec2, roughness: 0.55 });
  const terraTex = getRoofTileTexture('terracotta', 3, 2);
  const terraMat = new THREE.MeshStandardMaterial({ map: terraTex.map, bumpMap: terraTex.bumpMap, bumpScale: 0.18, roughness: 0.78 });
  const clayMat = new THREE.MeshStandardMaterial({ color: 0xc2653c, roughness: 0.78 });
  const stoneTex = getStoneTexture('castle', 2, 2);
  const rockMat = new THREE.MeshStandardMaterial({ map: stoneTex.map, color: 0xd9cdb8, roughness: 0.9 });
  const woodMat = new THREE.MeshStandardMaterial({ color: 0x6b4426, roughness: 0.85 });
  const bronzeMat = new THREE.MeshStandardMaterial({ color: 0xdca442, metalness: 0.85, roughness: 0.28 });
  const oliveLeaf = new THREE.MeshStandardMaterial({ color: 0x6f8c56, roughness: 0.85 });
  const cypressLeaf = new THREE.MeshStandardMaterial({ color: 0x244d2a, roughness: 0.88 });
  const sailMat = new THREE.MeshStandardMaterial({ map: createSailTexture('greece'), side: THREE.DoubleSide, roughness: 0.8 });
  const flameMat = new THREE.MeshBasicMaterial({ color: 0xffb338 });

  // ---- WHITE MARBLE ACROPOLIS TEMPLE (Northern Climax!) ----
  const templeGrp = new THREE.Group();
  templeGrp.position.set(0, 0, -36);

  // 3-tier Stepped Marble Stylobate Platform
  const step1 = new THREE.Mesh(new THREE.BoxGeometry(24, 0.55, 17), marbleMat);
  step1.position.y = 0.275;
  step1.receiveShadow = true;
  const step2 = new THREE.Mesh(new THREE.BoxGeometry(22.4, 0.55, 15.6), marbleMat);
  step2.position.y = 0.825;
  step2.receiveShadow = true;
  const step3 = new THREE.Mesh(new THREE.BoxGeometry(20.8, 0.55, 14.2), marbleMat);
  step3.position.y = 1.375;
  step3.receiveShadow = true;
  templeGrp.add(step1, step2, step3);

  // Inner Cella Sanctuary Chamber
  const cella = new THREE.Mesh(new THREE.BoxGeometry(11.5, 7.2, 8.2), marbleMat);
  cella.position.set(0, 1.65 + 3.6, -0.5);
  cella.castShadow = true;
  cella.receiveShadow = true;
  templeGrp.add(cella);

  // Tall Fluted Doric Marble Columns around the Peristyle!
  const colPositions = [
    [-9.2, 5.8], [-5.5, 5.8], [-1.85, 5.8], [1.85, 5.8], [5.5, 5.8], [9.2, 5.8],
    [-9.2, -5.8], [-5.5, -5.8], [-1.85, -5.8], [1.85, -5.8], [5.5, -5.8], [9.2, -5.8],
    [-9.2, 0], [9.2, 0]
  ];
  for (const [cx, cz] of colPositions) {
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.56, 7.6, 14), marbleMat);
    col.position.set(cx, 1.65 + 3.8, cz);
    col.castShadow = true;
    const cap = new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.36, 1.25), marbleMat);
    cap.position.set(cx, 1.65 + 7.75, cz);
    templeGrp.add(col, cap);
  }

  // Marble Entablature & Carved Triangular Pediment Roof
  const architrave = new THREE.Mesh(new THREE.BoxGeometry(21.2, 1.15, 14.4), marbleMat);
  architrave.position.y = 1.65 + 8.45;
  architrave.castShadow = true;
  const pedShape = new THREE.Shape();
  pedShape.moveTo(-10.8, 0);
  pedShape.lineTo(10.8, 0);
  pedShape.lineTo(0, 3.5);
  pedShape.closePath();
  const pedGeo = new THREE.ExtrudeGeometry(pedShape, { depth: 14.6, bevelEnabled: false });
  pedGeo.translate(0, 0, -7.3);
  const pediment = new THREE.Mesh(pedGeo, marbleMat);
  pediment.position.y = 1.65 + 9.0;
  pediment.castShadow = true;
  templeGrp.add(architrave, pediment);

  // Flickering Golden Bronze Brazier Bowls flanking the Temple Steps
  for (const bx of [-5.2, 5.2]) {
    const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.25, 1.35, 10), bronzeMat);
    bowl.position.set(bx, 1.65 + 0.65, 8.2);
    const fire = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.85, 7), flameMat);
    fire.position.set(bx, 1.65 + 1.65, 8.2);
    const pt = new THREE.PointLight(0xffa43b, 9, 20, 1.6);
    pt.position.set(bx, 1.65 + 2.0, 8.2);
    templeGrp.add(bowl, fire, pt);
    animated.push((t) => {
      pt.intensity = 8.5 + Math.sin(t * 9 + bx) * 1.4;
      fire.scale.y = 0.85 + Math.sin(t * 13 + bx) * 0.2;
    });
  }
  scene.add(templeGrp);
  collision.addBox(0, 5.0, -36, 22, 10, 15, 'stone');

  // ---- WHITEWASHED CYCLADIC GREEK VILLAGE HOUSES ----
  function buildGreekHouse(x, z, w, h, d, rotY = 0) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rotY;

    const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), plasterMat);
    body.position.y = h * 0.5;
    body.castShadow = true;
    body.receiveShadow = true;
    g.add(body);

    // Sun-baked Terracotta pitched roof
    const roof = new THREE.Mesh(new THREE.ConeGeometry(Math.max(w, d) * 0.82, 2.2, 4), terraMat);
    roof.rotation.y = Math.PI / 4;
    roof.scale.set((w + 1.2) / Math.max(w, d), 1, (d + 1.2) / Math.max(w, d));
    roof.position.y = h + 1.05;
    roof.castShadow = true;
    g.add(roof);

    // Bright Aegean-blue door & framed shutters
    const door = new THREE.Mesh(new THREE.BoxGeometry(1.7, 2.5, 0.2), aegeanBlue);
    door.position.set(0, 1.25, d * 0.5 + 0.04);
    g.add(door);
    for (const wx of [-w * 0.3, w * 0.3]) {
      const shutter = new THREE.Mesh(new THREE.BoxGeometry(1.25, 1.25, 0.18), aegeanBlue);
      shutter.position.set(wx, h * 0.58, d * 0.5 + 0.04);
      g.add(shutter);
    }

    // Clay Amphora jars beside doorway
    for (const ax of [-1.45, 1.55]) {
      const jar = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.3, 0.88, 10), clayMat);
      jar.position.set(ax, 0.44, d * 0.5 + 0.52);
      jar.castShadow = true;
      g.add(jar);
    }

    scene.add(g);
    const cos = Math.abs(Math.cos(rotY));
    collision.addBox(x, h * 0.5, z, cos > 0.5 ? w : d, h + 2.5, cos > 0.5 ? d : w, 'stone');
  }

  buildGreekHouse(-20, 22, 10, 4.8, 8.2, Math.PI / 2);
  buildGreekHouse(20, 20, 10.5, 5.2, 8.4, -Math.PI / 2);
  buildGreekHouse(-22, 0, 11, 5.0, 8.6, Math.PI / 2.1);
  buildGreekHouse(21, -4, 9.5, 4.6, 8.0, -Math.PI / 1.9);
  buildGreekHouse(-19, -20, 9.5, 4.5, 7.8, Math.PI / 3);

  // ---- ANCIENT GREEK SHIPS (TRIREMES) ON THE SANDY SHORE ----
  function addGreekShip(x, z, rotY) {
    const g = new THREE.Group();
    g.position.set(x, 0.1, z);
    g.rotation.y = rotY;

    const hull = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.4, 13.5), woodMat);
    hull.position.y = 0.7;
    hull.castShadow = true;
    const prow = new THREE.Mesh(new THREE.ConeGeometry(1.6, 3.8, 4), woodMat);
    prow.rotation.x = Math.PI / 2;
    prow.position.set(0, 0.85, 8.2);
    const ram = new THREE.Mesh(new THREE.ConeGeometry(0.42, 1.8, 6), bronzeMat);
    ram.rotation.x = Math.PI / 2;
    ram.position.set(0, 0.42, 10.2);
    const stern = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.6, 3.2, 8), woodMat);
    stern.position.set(0, 2.2, -6.5);
    stern.rotation.x = -0.35;
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.2, 8.5, 8), woodMat);
    mast.position.set(0, 5.0, 0);
    const yard = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 6.2, 8), woodMat);
    yard.rotation.z = Math.PI / 2;
    yard.position.set(0, 7.2, 0.2);
    const sail = new THREE.Mesh(new THREE.PlaneGeometry(5.8, 4.6, 6, 4), sailMat);
    sail.position.set(0, 4.9, 0.5);

    g.add(hull, prow, ram, stern, mast, yard, sail);
    scene.add(g);
    animated.push((t) => {
      g.position.y = 0.15 + Math.sin(t * 1.7 + x) * 0.12;
      g.rotation.z = Math.sin(t * 1.3 + z) * 0.04;
    });
  }
  addGreekShip(54, 24, -0.45);
  addGreekShip(-54, 14, 0.55);
  addGreekShip(34, 48, -1.25); // Pulled right onto the sandy beach near spawn!

  // ---- TACTICAL MARBLE LOW WALLS & BROKEN FLUTED COLUMNS ----
  const coverWalls = [
    [-8.5, 28, 5.4, 1.4, 1.1],
    [8.5, 16, 5.2, 1.4, 1.1],
    [-9.5, 6, 5.6, 1.4, 1.1],
    [9.5, -14, 5.4, 1.45, 1.1],
    [-8.5, -18, 5.4, 1.45, 1.1]
  ];
  for (const [wx, wz, ww, wh, wd] of coverWalls) {
    const wall = new THREE.Mesh(new THREE.BoxGeometry(ww, wh, wd), marbleMat);
    wall.position.set(wx, wh * 0.5, wz);
    wall.castShadow = true;
    wall.receiveShadow = true;
    scene.add(wall);
    collision.addBox(wx, wh * 0.5, wz, ww, wh, wd, 'stone');

    // Decorative marble pillar stub beside wall
    const stub = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.5, 2.8, 12), marbleMat);
    stub.position.set(wx + ww * 0.5 + 0.6, 1.4, wz);
    stub.castShadow = true;
    scene.add(stub);
    collision.addBox(wx + ww * 0.5 + 0.6, 1.4, wz, 1.1, 2.8, 1.1, 'stone');
  }

  // ---- OLIVE TREES & MEDITERRANEAN CYPRESSES ----
  function addOliveTree(tx, tz, scale = 1) {
    const g = new THREE.Group();
    g.position.set(tx, 0, tz);
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.45, 2.6, 8), woodMat);
    trunk.position.y = 1.3;
    trunk.rotation.z = 0.14;
    trunk.castShadow = true;
    g.add(trunk);
    for (const [px, py, pz, r] of [[0, 3.2, 0, 2.0], [-1.3, 2.8, 0.6, 1.4], [1.4, 2.9, -0.5, 1.5]]) {
      const f = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 1), oliveLeaf);
      f.position.set(px, py, pz);
      f.scale.set(1.3, 0.72, 1.2);
      f.castShadow = true;
      g.add(f);
    }
    g.scale.setScalar(scale);
    scene.add(g);
    collision.addBox(tx, 1.6, tz, 1.0 * scale, 3.2 * scale, 1.0 * scale, 'wood');
  }

  function addCypress(tx, tz, scale = 1) {
    const g = new THREE.Group();
    g.position.set(tx, 0, tz);
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.24, 2.0, 7), woodMat);
    trunk.position.y = 1.0;
    const crown = new THREE.Mesh(new THREE.ConeGeometry(1.15, 9.5, 10), cypressLeaf);
    crown.position.y = 6.0;
    crown.castShadow = true;
    g.add(trunk, crown);
    g.scale.setScalar(scale);
    scene.add(g);
    collision.addBox(tx, 2.0, tz, 0.9 * scale, 4.0 * scale, 0.9 * scale, 'wood');
  }

  const olives = [[-13, 34, 1.1], [14, 32, 1.0], [-30, 12, 1.25], [32, 8, 1.2], [-32, -14, 1.15], [30, -18, 1.2]];
  for (const [x, z, s] of olives) addOliveTree(x, z, s);

  const cypresses = [[-12, -26, 1.15], [12, -26, 1.15], [-14, -34, 1.25], [14, -34, 1.25], [-14, 14, 1.0], [14, 10, 1.05], [-28, 30, 1.1], [28, -28, 1.2]];
  for (const [x, z, s] of cypresses) addCypress(x, z, s);

  // ---- DISTANT ROCKY GREEK ISLETS RISING FROM THE AEGEAN SEA ----
  const islets = [
    [-115, -95, 38, 22], [110, -85, 42, 26], [-125, 45, 34, 18], [128, 52, 40, 20], [10, -145, 58, 34]
  ];
  for (const [ix, iz, r, h] of islets) {
    const isl = new THREE.Mesh(new THREE.ConeGeometry(r, h, 8), rockMat);
    isl.position.set(ix, h * 0.42 - 1, iz);
    scene.add(isl);
  }

  // ---- AMBIENT AEGEAN SUNLIGHT BREEZE PARTICLES ----
  particles.initAmbient('aegean', collision.bounds);

  // ---- PICKUPS ----
  const pickupDefs = [
    { type: 'health', pos: new THREE.Vector3(-11, 0.8, 24), label: 'AEGEAN AMBROSIA (+35 HP)' },
    { type: 'ammo',   pos: new THREE.Vector3(11, 0.8, 14),  label: 'BRONZE JAVELIN BUNDLE' },
    { type: 'health', pos: new THREE.Vector3(-12, 0.8, 2),  label: 'OLIVE OIL & HONEY (+35 HP)' },
    { type: 'ammo',   pos: new THREE.Vector3(12, 0.8, -14), label: 'HOPLITE JAVELIN RACK' },
    { type: 'health', pos: new THREE.Vector3(-11, 0.8, -22), label: 'TEMPLE OFFERING (+35 HP)' }
  ];
  for (const pd of pickupDefs) {
    const mesh = createPickupMesh(pd.type);
    mesh.position.copy(pd.pos);
    scene.add(mesh);
    pickups.push({ ...pd, mesh, collected: false });
  }

  // ---- ENEMY ROSTER (Spartan Hoplites, Spartan Javelineers & Boss Archidamos) ----
  const enemySpawns = [
    { type: 'spartan_hoplite',    pos: new THREE.Vector3(-8, 0, 22) },
    { type: 'spartan_skirmisher', pos: new THREE.Vector3(9, 0, 18) },
    { type: 'spartan_hoplite',    pos: new THREE.Vector3(-4, 0, 10) },
    { type: 'spartan_skirmisher', pos: new THREE.Vector3(-12, 0, 4) },
    { type: 'spartan_hoplite',    pos: new THREE.Vector3(10, 0, -2) },
    { type: 'spartan_skirmisher', pos: new THREE.Vector3(0, 0, -8) },
    { type: 'spartan_hoplite',    pos: new THREE.Vector3(-10, 0, -14) },
    { type: 'spartan_skirmisher', pos: new THREE.Vector3(10, 0, -18) },
    { type: 'spartan_hoplite',    pos: new THREE.Vector3(-5, 0, -24) },
    { type: 'spartan_skirmisher', pos: new THREE.Vector3(6, 0, -24) },
    { type: 'boss_greece',        pos: new THREE.Vector3(0, 0, -25), isBossWave: true }
  ];

  return { enemySpawns, pickups, animated, disposables };
}
