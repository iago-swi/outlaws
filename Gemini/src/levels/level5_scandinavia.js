import * as THREE from 'three';
import {
  getWoodPlanks,
  getGroundTexture,
  getStoneTexture,
  createVikingShieldTexture,
  createSailTexture
} from '../engine/textures.js';
import { createSkyDome, createWaterMesh, createAuroraMesh } from '../engine/shaders.js';
import { createPickupMesh } from './level1_west.js';

export const LEVEL5_META = {
  id: 'scandinavia',
  index: 4,
  themeClass: 'theme-scandinavia',
  act: 'ACT V • 985 AD',
  title: 'FJORD OF THE NORTH',
  subtitle: 'Frost, Iron & Northern Lights',
  heroName: 'ERIK THE RED',
  objective: 'Storm the Palisade & Defeat Rival Jarl Hakon at the Great Hall',
  quote: '"Beneath dancing northern lights, longships grind upon frozen shingle. Cross the timber palisade and claim the Great Hall."',
  musicTheme: 'scandinavia',
  enemyIcon: 'ᛟ',
  currency: 'ℳ ',
  spawnPos: new THREE.Vector3(0, 0, 46),
  spawnYaw: 0,
  cameraPreview: { center: new THREE.Vector3(0, 6, -4), radius: 42, height: 15, speed: 0.12 }
};

export function buildLevel5(scene, collision, particles) {
  const disposables = [];
  const animated = [];
  const pickups = [];

  collision.bounds = { minX: -48, maxX: 48, minZ: -54, maxZ: 52 };

  // 1. Arctic Twilight Sky Dome + Animated GLSL Northern Lights (Aurora Borealis!)
  const moonDir = new THREE.Vector3(-0.35, 0.42, -0.84).normalize();
  const sky = createSkyDome({
    topColor: 0x050c24,
    midColor: 0x0d2247,
    horizonColor: 0x204d6e,
    sunColor: 0xd9f7ff,
    sunDirection: moonDir,
    cloudTint: 0x437a9c,
    cloudDensity: 0.25
  });
  scene.add(sky.mesh);
  animated.push((t) => { sky.uniforms.uTime.value = t; });

  // Twin sweeping GLSL Aurora Borealis curtains shimmering overhead!
  const aurora1 = createAuroraMesh(280, 68);
  aurora1.mesh.position.set(0, 68, -110);
  aurora1.mesh.rotation.x = 0.22;
  scene.add(aurora1.mesh);

  const aurora2 = createAuroraMesh(240, 56);
  aurora2.mesh.position.set(35, 76, -80);
  aurora2.mesh.rotation.y = -0.35;
  aurora2.mesh.rotation.x = 0.26;
  scene.add(aurora2.mesh);

  animated.push((t) => {
    aurora1.uniforms.uTime.value = t;
    aurora2.uniforms.uTime.value = t * 0.85 + 2.1;
  });

  scene.fog = new THREE.FogExp2(0x162d47, 0.0068);

  // Crisp Nordic moonlight + emerald aurora bounce fill!
  const hemi = new THREE.HemisphereLight(0x7ad6c8, 0x2a3b4f, 1.05);
  scene.add(hemi);

  const moonLight = new THREE.DirectionalLight(0xcbe8ff, 1.95);
  moonLight.position.copy(moonDir).multiplyScalar(110);
  moonLight.castShadow = true;
  moonLight.shadow.mapSize.set(2048, 2048);
  moonLight.shadow.camera.left = -68;
  moonLight.shadow.camera.right = 68;
  moonLight.shadow.camera.top = 68;
  moonLight.shadow.camera.bottom = -68;
  moonLight.shadow.near = 10;
  moonLight.shadow.far = 230;
  moonLight.shadow.bias = -0.0005;
  scene.add(moonLight);

  const auroraGlow = new THREE.DirectionalLight(0x3af0b0, 0.65);
  auroraGlow.position.set(45, 55, -70);
  scene.add(auroraGlow);

  // 2. Icy Norwegian Fjord Sea & Snow-Blanketed Peninsula
  const fjord = createWaterMesh(440, 440, {
    deepColor: 0x061d36,
    shallowColor: 0x164a6e,
    foamColor: 0xcbe8ff,
    sunColor: 0xaef7e6,
    sunDir: moonDir,
    opacity: 0.92,
    waveScale: 0.14
  });
  fjord.mesh.position.set(0, -0.25, 0);
  scene.add(fjord.mesh);
  animated.push((t) => { fjord.uniforms.uTime.value = t; });

  const snowTex = getGroundTexture('arctic_snow', 20, 22);
  const ground = new THREE.Mesh(
    new THREE.BoxGeometry(106, 1.2, 118),
    new THREE.MeshStandardMaterial({
      map: snowTex.map,
      bumpMap: snowTex.bumpMap,
      bumpScale: 0.22,
      roughness: 0.85
    })
  );
  ground.position.set(0, -0.6, -2);
  ground.receiveShadow = true;
  scene.add(ground);

  // Trodden frozen earth & stone road from Longship Landing to the Great Hall
  const cobbleTex = getGroundTexture('cobble', 3, 24);
  const trail = new THREE.Mesh(
    new THREE.PlaneGeometry(6.8, 88),
    new THREE.MeshStandardMaterial({ map: cobbleTex.map, color: 0xaab7c4, bumpMap: cobbleTex.bumpMap, bumpScale: 0.2, roughness: 0.88 })
  );
  trail.rotation.x = -Math.PI / 2;
  trail.position.set(0, 0.04, 1);
  trail.receiveShadow = true;
  scene.add(trail);

  // Shared Materials
  const darkTimberTex = getWoodPlanks('alpine', 2, 2);
  const stoneTex = getStoneTexture('castle', 2, 2);
  const matTimber = new THREE.MeshStandardMaterial({ map: darkTimberTex.map, bumpMap: darkTimberTex.bumpMap, bumpScale: 0.16, roughness: 0.86 });
  const matDarkWood = new THREE.MeshStandardMaterial({ color: 0x2b1d14, roughness: 0.88 });
  const matStone = new THREE.MeshStandardMaterial({ map: stoneTex.map, color: 0x6f7a85, bumpMap: stoneTex.bumpMap, bumpScale: 0.25, roughness: 0.9 });
  const matSnow = new THREE.MeshStandardMaterial({ color: 0xedf6ff, roughness: 0.72 });
  const matCliff = new THREE.MeshStandardMaterial({ color: 0x394452, roughness: 0.94 });
  const matPine = new THREE.MeshStandardMaterial({ color: 0x163829, roughness: 0.88 });
  const matWindowFire = new THREE.MeshStandardMaterial({ color: 0xffc666, emissive: 0xff8424, emissiveIntensity: 1.5, roughness: 0.3 });
  const matSail = new THREE.MeshStandardMaterial({ map: createSailTexture('scandinavia'), side: THREE.DoubleSide, roughness: 0.8 });
  const matFlame = new THREE.MeshBasicMaterial({ color: 0xffaa33 });

  // ---- TIMBER PALISADE WALL & OPEN GATE (Mid-South Settlement Defense!) ----
  function addPalisadeSegment(x1, z1, x2, z2) {
    const dx = x2 - x1, dz = z2 - z1;
    const len = Math.hypot(dx, dz);
    const angle = Math.atan2(dx, dz);
    const count = Math.max(3, Math.floor(len / 0.65));
    const g = new THREE.Group();
    g.position.set((x1 + x2) * 0.5, 0, (z1 + z2) * 0.5);
    g.rotation.y = angle;

    for (let i = 0; i <= count; i++) {
      const pz = -len * 0.5 + (i / count) * len;
      const h = 3.4 + ((i * 19) % 5) * 0.14;
      const stake = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.26, h, 7), matTimber);
      stake.position.set(0, h * 0.5, pz);
      stake.castShadow = true;
      g.add(stake);
    }
    const cross = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.26, len), matDarkWood);
    cross.position.y = 2.1;
    g.add(cross);
    scene.add(g);
    collision.addBox((x1 + x2) * 0.5, 1.8, (z1 + z2) * 0.5, Math.abs(dx) + 0.7, 3.6, Math.abs(dz) + 0.7, 'wood');
  }

  addPalisadeSegment(-34, 24, -6, 24);
  addPalisadeSegment(6, 24, 34, 24);

  // Palisade Gatehouse Timber Arch + Warm Torches
  for (const gx of [-6, 6]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.48, 6.2, 8), matDarkWood);
    post.position.set(gx, 3.1, 24);
    post.castShadow = true;
    scene.add(post);
  }
  const lintel = new THREE.Mesh(new THREE.BoxGeometry(13.6, 0.65, 0.85), matDarkWood);
  lintel.position.set(0, 5.7, 24);
  scene.add(lintel);

  // ---- VIKING LONGHOUSES & THE GRAND GREAT HALL (MEAD HALL) ----
  function buildLonghouse(x, z, w, h, d, rotY = 0, isGreatHall = false) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rotY;

    // Stone base plinth
    const base = new THREE.Mesh(new THREE.BoxGeometry(w + 1.0, 1.0, d + 1.0), matStone);
    base.position.y = 0.5;
    base.receiveShadow = true;
    g.add(base);

    // Timber walls
    const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), matTimber);
    body.position.y = 1.0 + h * 0.5;
    body.castShadow = true;
    body.receiveShadow = true;
    g.add(body);

    // Steep Snow-Blanketed Nordic Pitched Roof
    const roofH = isGreatHall ? 4.8 : 3.2;
    const roofShape = new THREE.Shape();
    roofShape.moveTo(-(w * 0.62), 0);
    roofShape.lineTo(w * 0.62, 0);
    roofShape.lineTo(0, roofH);
    roofShape.closePath();
    const roofGeo = new THREE.ExtrudeGeometry(roofShape, { depth: d + 2.2, bevelEnabled: false });
    roofGeo.translate(0, 0, -(d + 2.2) * 0.5);
    const roof = new THREE.Mesh(roofGeo, matSnow);
    roof.position.y = 1.0 + h - 0.15;
    roof.castShadow = true;
    g.add(roof);

    // Dark timber gable ridge beam & carved Viking Dragon-Head Finials!
    const ridge = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.45, d + 3.2), matDarkWood);
    ridge.position.y = 1.0 + h + roofH - 0.1;
    g.add(ridge);
    for (const fz of [-(d * 0.5 + 1.4), d * 0.5 + 1.4]) {
      const finial = new THREE.Mesh(new THREE.ConeGeometry(0.32, 1.4, 5), matDarkWood);
      finial.position.set(0, 1.0 + h + roofH + 0.45, fz);
      finial.rotation.x = fz > 0 ? 0.4 : -0.4;
      g.add(finial);
    }

    // Glowing fire-lit doorway & shields mounted beside entrance
    const door = new THREE.Mesh(new THREE.BoxGeometry(isGreatHall ? 3.2 : 2.1, isGreatHall ? 3.8 : 2.8, 0.25), matWindowFire);
    door.position.set(0, 1.0 + (isGreatHall ? 1.9 : 1.4), d * 0.5 + 0.06);
    g.add(door);

    const shMat = new THREE.MeshStandardMaterial({ map: createVikingShieldTexture(isGreatHall ? 3 : 1), roughness: 0.7 });
    for (const sx of [-w * 0.3, w * 0.3]) {
      const sh = new THREE.Mesh(new THREE.CylinderGeometry(0.68, 0.68, 0.1, 16), [matDarkWood, shMat, matDarkWood]);
      sh.rotation.x = Math.PI / 2;
      sh.position.set(sx, 3.0, d * 0.5 + 0.14);
      g.add(sh);
    }

    // Warm glowing hearth point light in front
    const hearthPt = new THREE.PointLight(0xff9238, isGreatHall ? 14 : 8, isGreatHall ? 28 : 18, 1.5);
    hearthPt.position.set(0, 3.2, d * 0.5 + 2.2);
    g.add(hearthPt);
    animated.push((t) => {
      hearthPt.intensity = (isGreatHall ? 13 : 7.5) + Math.sin(t * 9.5 + x) * 1.6;
    });

    scene.add(g);
    const cos = Math.abs(Math.cos(rotY));
    collision.addBox(x, (h + 2) * 0.5, z, cos > 0.5 ? w + 0.8 : d + 0.8, h + 3, cos > 0.5 ? d + 0.8 : w + 0.8, 'wood');
  }

  // Grand Great Hall (Mead Hall) at Northern Peak!
  buildLonghouse(0, -35, 16, 6.2, 13, 0, true);

  // Viking Longhouses lining the snowy fjord village
  buildLonghouse(-22, 8, 9.5, 4.2, 13.5, Math.PI / 2.2);
  buildLonghouse(22, 6, 9.5, 4.2, 13.5, -Math.PI / 2.2);
  buildLonghouse(-21, -15, 9.0, 4.0, 12.0, Math.PI / 3);
  buildLonghouse(21, -16, 9.0, 4.0, 12.0, -Math.PI / 3);

  // ---- VIKING LONGSHIPS (DRAKKAR) WITH ROW OF SHIELDS & STRIPED SAILS ----
  function addLongship(x, z, rotY) {
    const g = new THREE.Group();
    g.position.set(x, 0.08, z);
    g.rotation.y = rotY;

    const hull = new THREE.Mesh(new THREE.BoxGeometry(3.4, 1.25, 14.5), matTimber);
    hull.position.y = 0.65;
    hull.castShadow = true;
    // Sweeping Dragon Prow & Stern
    const prow = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.55, 4.2, 8), matDarkWood);
    prow.position.set(0, 2.2, 7.6);
    prow.rotation.x = 0.38;
    const dragonHead = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.55, 1.15), matDarkWood);
    dragonHead.position.set(0, 4.0, 8.5);
    const stern = prow.clone();
    stern.position.set(0, 2.0, -7.5);
    stern.rotation.x = -0.35;

    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.18, 8.6, 8), matDarkWood);
    mast.position.set(0, 5.0, 0);
    const yard = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 6.4, 8), matDarkWood);
    yard.rotation.z = Math.PI / 2;
    yard.position.set(0, 7.3, 0.15);
    const sail = new THREE.Mesh(new THREE.PlaneGeometry(5.9, 4.8), matSail);
    sail.position.set(0, 4.9, 0.35);

    g.add(hull, prow, dragonHead, stern, mast, yard, sail);

    // Row of painted historical Viking round shields mounted along both gunwales!
    for (let i = 0; i < 6; i++) {
      const sz = -4.5 + i * 1.8;
      const sMat = new THREE.MeshStandardMaterial({ map: createVikingShieldTexture(i), roughness: 0.7 });
      for (const side of [-1, 1]) {
        const sh = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.08, 14), [matDarkWood, sMat, matDarkWood]);
        sh.rotation.z = Math.PI / 2;
        sh.position.set(side * 1.78, 1.15, sz);
        g.add(sh);
      }
    }

    scene.add(g);
    animated.push((t) => {
      g.position.y = 0.12 + Math.sin(t * 1.6 + x) * 0.11;
      g.rotation.z = Math.sin(t * 1.2 + z) * 0.035;
    });
  }

  addLongship(56, 20, -0.38);
  addLongship(-56, 12, 0.42);
  addLongship(36, 48, -1.15);

  // ---- FLICKERING IRON FIRE BRAZIERS ALONG THE SNOWY PATH ----
  function addBrazier(bx, bz) {
    const stand = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.24, 1.3, 8), matStone);
    stand.position.set(bx, 0.65, bz);
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.85, 7), matFlame);
    flame.position.set(bx, 1.65, bz);
    const pt = new THREE.PointLight(0xff8e2b, 8.5, 19, 1.6);
    pt.position.set(bx, 2.0, bz);
    scene.add(stand, flame, pt);
    animated.push((t) => {
      pt.intensity = 8.0 + Math.sin(t * 11 + bx) * 1.5;
      flame.scale.y = 0.82 + Math.sin(t * 15 + bz) * 0.22;
    });
    collision.addBox(bx, 0.7, bz, 0.9, 1.5, 0.9, 'stone');
  }
  for (const bz of [34, 14, -6, -24]) {
    addBrazier(-5.2, bz);
    addBrazier(5.2, bz);
  }

  // Low Snowy Boulders & Timber Barricades for tactical cover
  const coverSpots = [
    [-9, 16, 4.6, 1.4, 1.2],
    [9, 10, 4.6, 1.4, 1.2],
    [-9, -4, 4.8, 1.45, 1.2],
    [9, -14, 4.8, 1.45, 1.2]
  ];
  for (const [cx, cz, cw, ch, cd] of coverSpots) {
    const b = new THREE.Mesh(new THREE.BoxGeometry(cw, ch, cd), matTimber);
    b.position.set(cx, ch * 0.5, cz);
    b.castShadow = true;
    const cap = new THREE.Mesh(new THREE.BoxGeometry(cw + 0.1, 0.22, cd + 0.1), matSnow);
    cap.position.set(cx, ch + 0.08, cz);
    scene.add(b, cap);
    collision.addBox(cx, ch * 0.5, cz, cw, ch, cd, 'wood');
  }

  // ---- SNOW-LADEN NORDIC PINE TREES ----
  function addSnowPine(tx, tz, scale = 1) {
    const g = new THREE.Group();
    g.position.set(tx, 0, tz);
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.36, 2.6, 7), matDarkWood);
    trunk.position.y = 1.3;
    trunk.castShadow = true;
    g.add(trunk);

    for (const [py, r, h] of [[3.5, 2.4, 3.2], [5.4, 1.85, 2.8], [7.1, 1.3, 2.4], [8.5, 0.8, 1.8]]) {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(r, h, 8), matPine);
      cone.position.y = py;
      cone.castShadow = true;
      const snowCap = new THREE.Mesh(new THREE.ConeGeometry(r * 0.88, h * 0.45, 8), matSnow);
      snowCap.position.y = py + h * 0.28;
      g.add(cone, snowCap);
    }
    g.scale.setScalar(scale);
    scene.add(g);
    collision.addBox(tx, 2.0, tz, 1.1 * scale, 4.0 * scale, 1.1 * scale, 'wood');
  }

  const pines = [
    [-14, 38, 1.2], [14, 38, 1.15], [-34, 34, 1.3], [34, 32, 1.25],
    [-36, 0, 1.35], [36, -2, 1.3], [-34, -26, 1.25], [34, -26, 1.3],
    [-15, -28, 1.15], [15, -28, 1.15]
  ];
  for (const [x, z, s] of pines) addSnowPine(x, z, s);

  // ---- SHEER SNOWY NORWEGIAN FJORD CLIFFS & ISLANDS ----
  const cliffs = [
    [-125, -135, 76, 95], [-10, -165, 88, 110], [105, -130, 80, 98],
    [-155, -20, 74, 88], [155, -15, 76, 92], [-135, 110, 68, 76], [135, 110, 70, 78]
  ];
  for (const [cx, cz, r, h] of cliffs) {
    const crag = new THREE.Mesh(new THREE.ConeGeometry(r, h, 7), matCliff);
    crag.position.set(cx, h * 0.44, cz);
    crag.rotation.y = cx * 0.2;
    const cap = new THREE.Mesh(new THREE.ConeGeometry(r * 0.58, h * 0.48, 7), matSnow);
    cap.position.set(cx, h * 0.72, cz);
    cap.rotation.y = cx * 0.2;
    scene.add(crag, cap);
  }

  // ---- FALLING WINTER SNOWFLAKES ----
  particles.initAmbient('snow', collision.bounds);

  // ---- PICKUPS ----
  const pickupDefs = [
    { type: 'health', pos: new THREE.Vector3(-11, 0.8, 30), label: 'WARM MEAD HORN (+35 HP)' },
    { type: 'ammo',   pos: new THREE.Vector3(11, 0.8, 16),  label: 'THROWING AXE BUNDLE' },
    { type: 'health', pos: new THREE.Vector3(-12, 0.8, 2),  label: 'LONGHOUSE FEAST (+35 HP)' },
    { type: 'ammo',   pos: new THREE.Vector3(12, 0.8, -12), label: 'RAIDER AXE RACK' },
    { type: 'health', pos: new THREE.Vector3(-11, 0.8, -22), label: 'HEARTH TONIC (+35 HP)' }
  ];
  for (const pd of pickupDefs) {
    const mesh = createPickupMesh(pd.type);
    mesh.position.copy(pd.pos);
    scene.add(mesh);
    pickups.push({ ...pd, mesh, collected: false });
  }

  // ---- ENEMIES (Viking Huscarls, Bowmen, Berserkers & Boss Jarl Hakon — NO Horned Helmets!) ----
  const enemySpawns = [
    { type: 'viking_archer',    pos: new THREE.Vector3(-8, 0, 20) },
    { type: 'viking_warrior',   pos: new THREE.Vector3(8, 0, 18) },
    { type: 'viking_berserker', pos: new THREE.Vector3(0, 0, 11) },
    { type: 'viking_archer',    pos: new THREE.Vector3(-12, 0, 4) },
    { type: 'viking_warrior',   pos: new THREE.Vector3(11, 0, -2) },
    { type: 'viking_berserker', pos: new THREE.Vector3(-6, 0, -9) },
    { type: 'viking_archer',    pos: new THREE.Vector3(10, 0, -15) },
    { type: 'viking_warrior',   pos: new THREE.Vector3(-10, 0, -20) },
    { type: 'viking_berserker', pos: new THREE.Vector3(6, 0, -23) },
    { type: 'viking_archer',    pos: new THREE.Vector3(-4, 0, -26) },
    { type: 'boss_scandinavia', pos: new THREE.Vector3(0, 0, -25), isBossWave: true }
  ];

  return { enemySpawns, pickups, animated, disposables };
}
