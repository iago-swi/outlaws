import * as THREE from 'three';
import {
  getGroundTexture,
  getStoneTexture,
  getConcreteTexture,
  getWoodPlanks,
  createBalkenkreuzTexture
} from '../engine/textures.js';
import { createSkyDome, createWaterMesh } from '../engine/shaders.js';
import { createPickupMesh } from './level1_west.js';

export const LEVEL6_META = {
  id: 'normandy',
  index: 5,
  themeClass: 'theme-normandy',
  act: 'ACT VI • 6 JUNE 1944',
  title: 'NORMANDY',
  subtitle: 'Before First Light',
  heroName: 'LYUDMILA PAVLICHENKO',
  objective: 'Cross the Village & Silence the Coastal Gun Battery Before Dawn',
  quote: '"The armada waits on the dark Channel horizon. Cross the bocage lanes and occupied village, and silence the cliffside battery before first light."',
  historicalNote: 'Historical note: these three real resistance figures did not meet in Normandy in June 1944; they appear together here as legends.',
  musicTheme: 'normandy',
  enemyIcon: '✚',
  currency: '★ ',
  spawnPos: new THREE.Vector3(0, 0, 48),
  spawnYaw: 0,
  cameraPreview: { center: new THREE.Vector3(0, 6, -6), radius: 44, height: 15, speed: 0.11 }
};

export function buildLevel6(scene, collision, particles) {
  const disposables = [];
  const animated = [];
  const pickups = [];

  collision.bounds = { minX: -48, maxX: 48, minZ: -52, maxZ: 52 };

  // 1. Pre-Dawn Twilight Sky & Playable Moonlight + Fill Lighting (bright & readable!)
  const dawnDir = new THREE.Vector3(0.32, 0.24, -0.92).normalize();
  const sky = createSkyDome({
    topColor: 0x101836,
    midColor: 0x4b3a66,
    horizonColor: 0xd99b88,
    sunColor: 0xffd7b5,
    sunDirection: dawnDir,
    cloudTint: 0x997ca6,
    cloudDensity: 0.42
  });
  scene.add(sky.mesh);
  animated.push((t) => { sky.uniforms.uTime.value = t; });

  scene.fog = new THREE.FogExp2(0x3a3752, 0.0062);

  // Generous cool silver-blue moonlight + hemisphere + warm horizon fill so gameplay is crisp & clearly lit!
  const hemi = new THREE.HemisphereLight(0xa3bce6, 0x3b4536, 1.15);
  scene.add(hemi);

  const moonLight = new THREE.DirectionalLight(0xcce0ff, 2.25);
  moonLight.position.set(-48, 72, 62);
  moonLight.castShadow = true;
  moonLight.shadow.mapSize.set(2048, 2048);
  moonLight.shadow.camera.left = -72;
  moonLight.shadow.camera.right = 72;
  moonLight.shadow.camera.top = 72;
  moonLight.shadow.camera.bottom = -72;
  moonLight.shadow.near = 10;
  moonLight.shadow.far = 230;
  moonLight.shadow.bias = -0.0005;
  scene.add(moonLight);

  const dawnFill = new THREE.DirectionalLight(0xffbfa3, 0.65);
  dawnFill.position.copy(dawnDir).multiplyScalar(100);
  scene.add(dawnFill);

  // 2. English Channel Sea Beyond the Northern Cliff & Invasion Fleet on the Horizon!
  const channel = createWaterMesh(460, 260, {
    deepColor: 0x0d2138,
    shallowColor: 0x224766,
    foamColor: 0xaec6de,
    sunColor: 0xffcfb5,
    sunDir: dawnDir,
    opacity: 0.94,
    waveScale: 0.16
  });
  channel.mesh.position.set(0, -4.5, -182);
  scene.add(channel.mesh);
  animated.push((t) => { channel.uniforms.uTime.value = t; });

  // Distant Allied Invasion Fleet silhouettes stretching across the Channel horizon
  const shipMat = new THREE.MeshBasicMaterial({ color: 0x161b29 });
  const shipLights = new THREE.MeshBasicMaterial({ color: 0xffe4a3 });
  for (let i = 0; i < 16; i++) {
    const sx = -150 + i * 20 + ((i * 13) % 9);
    const sz = -170 - (i % 4) * 26;
    const isLarge = i % 3 === 0;
    const hull = new THREE.Mesh(new THREE.BoxGeometry(isLarge ? 14 : 7.5, isLarge ? 3.2 : 1.8, 3.6), shipMat);
    hull.position.set(sx, -3.2, sz);
    const bridge = new THREE.Mesh(new THREE.BoxGeometry(isLarge ? 4.2 : 2.2, isLarge ? 4.5 : 2.2, 2.4), shipMat);
    bridge.position.set(sx, -0.5, sz);
    const signal = new THREE.Mesh(new THREE.SphereGeometry(0.32, 6, 6), shipLights);
    signal.position.set(sx, isLarge ? 2.1 : 0.8, sz);
    scene.add(hull, bridge, signal);
  }

  // Sweeping Pre-Dawn Searchlight Beams from behind the Cliff Bunkers!
  const beamMat = new THREE.MeshBasicMaterial({
    color: 0xd9ecff,
    transparent: true,
    opacity: 0.16,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide
  });
  const searchlights = [
    { x: -24, z: -46, phase: 0, speed: 0.45, range: 0.48 },
    { x: 0,   z: -48, phase: 2.1, speed: 0.36, range: 0.42 },
    { x: 25,  z: -45, phase: 4.0, speed: 0.52, range: 0.5 }
  ];
  for (const sl of searchlights) {
    const pivot = new THREE.Group();
    pivot.position.set(sl.x, 4.5, sl.z);
    const cone = new THREE.Mesh(new THREE.ConeGeometry(9.5, 115, 14, 1, true), beamMat);
    cone.position.y = 57.5;
    cone.rotation.x = Math.PI;
    pivot.add(cone);
    scene.add(pivot);
    animated.push((t) => {
      pivot.rotation.z = Math.sin(t * sl.speed + sl.phase) * sl.range;
      pivot.rotation.x = -0.22 + Math.cos(t * sl.speed * 0.7 + sl.phase) * 0.14;
    });
  }

  // Animated High-Altitude Anti-Aircraft Flak Bursts over the Channel Sky!
  const flakSpots = [];
  for (let i = 0; i < 6; i++) {
    const flash = new THREE.Mesh(
      new THREE.SphereGeometry(1.9, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0xffb347, transparent: true, opacity: 0 })
    );
    flash.position.set(-55 + i * 22, 34 + (i % 3) * 10, -110 - (i % 2) * 25);
    scene.add(flash);
    flakSpots.push({ mesh: flash, offset: i * 1.35, period: 3.8 + (i % 3) * 1.1 });
  }
  animated.push((t) => {
    for (const f of flakSpots) {
      const cyc = (t + f.offset) % f.period;
      if (cyc < 0.28) {
        const p = 1 - cyc / 0.28;
        f.mesh.material.opacity = p * 0.95;
        f.mesh.scale.setScalar(0.6 + (1 - p) * 2.2);
      } else {
        f.mesh.material.opacity = 0;
      }
    }
  });

  // 3. Norman Countryside & Village Ground + Cobblestone Road
  const meadowTex = getGroundTexture('alpine_meadow', 22, 22);
  const ground = new THREE.Mesh(
    new THREE.BoxGeometry(116, 8, 120),
    new THREE.MeshStandardMaterial({
      map: meadowTex.map,
      color: 0x7b9468,
      bumpMap: meadowTex.bumpMap,
      bumpScale: 0.2,
      roughness: 0.94
    })
  );
  ground.position.set(0, -4, 2);
  ground.receiveShadow = true;
  scene.add(ground);

  const cobbleTex = getGroundTexture('cobble', 3, 28);
  const mainLane = new THREE.Mesh(
    new THREE.PlaneGeometry(7.2, 98),
    new THREE.MeshStandardMaterial({ map: cobbleTex.map, color: 0xadb0ad, bumpMap: cobbleTex.bumpMap, bumpScale: 0.22, roughness: 0.88 })
  );
  mainLane.rotation.x = -Math.PI / 2;
  mainLane.position.set(0, 0.04, 2);
  mainLane.receiveShadow = true;
  scene.add(mainLane);

  // Shared Materials
  const stoneTex = getStoneTexture('castle', 2, 2);
  const concreteTex = getConcreteTexture(2, 2);
  const woodTex = getWoodPlanks('weathered', 2, 2);
  const barCrossTex = createBalkenkreuzTexture('#535950');

  const matNormanStone = new THREE.MeshStandardMaterial({ map: stoneTex.map, color: 0xc9c2b2, bumpMap: stoneTex.bumpMap, bumpScale: 0.22, roughness: 0.88 });
  const matSlateRoof = new THREE.MeshStandardMaterial({ color: 0x3b424d, roughness: 0.78 });
  const matConcrete = new THREE.MeshStandardMaterial({ map: concreteTex.map, bumpMap: concreteTex.bumpMap, bumpScale: 0.24, roughness: 0.92 });
  const matWood = new THREE.MeshStandardMaterial({ map: woodTex.map, roughness: 0.86 });
  const matDarkWood = new THREE.MeshStandardMaterial({ color: 0x36281e, roughness: 0.88 });
  const matHedge = new THREE.MeshStandardMaterial({ color: 0x2f4d28, roughness: 0.94 });
  const matHedgeTop = new THREE.MeshStandardMaterial({ color: 0x3d6132, roughness: 0.94 });
  const matSandbag = new THREE.MeshStandardMaterial({ color: 0x9c8b6b, roughness: 0.95 });
  const matMilGrey = new THREE.MeshStandardMaterial({ color: 0x4f554e, roughness: 0.72, metalness: 0.25 });
  const matMilDark = new THREE.MeshStandardMaterial({ color: 0x2c302c, roughness: 0.65, metalness: 0.45 });
  const matBarCross = new THREE.MeshStandardMaterial({ map: barCrossTex, roughness: 0.72, side: THREE.DoubleSide });
  const matWindowDim = new THREE.MeshStandardMaterial({ color: 0xffd58a, emissive: 0xff9d3b, emissiveIntensity: 0.65 });
  const matRedStripe = new THREE.MeshStandardMaterial({ color: 0xb82c26, roughness: 0.7 });
  const matWhiteStripe = new THREE.MeshStandardMaterial({ color: 0xebe6da, roughness: 0.75 });

  // ---- SOUTH BOCAGE HEDGEROWS & SUNKEN LANE ----
  function addHedgerow(x, z, w, d, h = 2.4) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    const base = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), matHedge);
    base.position.y = h * 0.5;
    base.castShadow = true;
    base.receiveShadow = true;
    g.add(base);
    const puffs = Math.max(2, Math.floor(Math.max(w, d) / 3.2));
    for (let i = 0; i < puffs; i++) {
      const t = (i + 0.5) / puffs - 0.5;
      const p = new THREE.Mesh(new THREE.DodecahedronGeometry(1.35, 0), matHedgeTop);
      p.position.set(w > d ? t * w : 0, h + 0.2, d >= w ? t * d : 0);
      p.scale.set(1.2, 0.75, 1.2);
      g.add(p);
    }
    scene.add(g);
    collision.addBox(x, h * 0.5, z, w, h + 0.6, d, 'wood');
  }

  addHedgerow(-7.5, 36, 2.6, 18, 2.3);
  addHedgerow(7.5, 36, 2.6, 18, 2.3);
  addHedgerow(-22, 42, 26, 2.8, 2.5);
  addHedgerow(22, 42, 26, 2.8, 2.5);
  addHedgerow(-30, 22, 14, 2.6, 2.4);
  addHedgerow(30, 22, 14, 2.6, 2.4);

  // ---- NORMAN STONE FARMHOUSE & VILLAGE HOUSES ----
  function buildNormanHouse(x, z, w, h, d, rotY = 0) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rotY;

    const walls = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), matNormanStone);
    walls.position.y = h * 0.5;
    walls.castShadow = true;
    walls.receiveShadow = true;
    g.add(walls);

    // Pitched Normandy slate roof
    const roofH = 2.8;
    const roofShape = new THREE.Shape();
    roofShape.moveTo(-(w * 0.55), 0);
    roofShape.lineTo(w * 0.55, 0);
    roofShape.lineTo(0, roofH);
    roofShape.closePath();
    const rGeo = new THREE.ExtrudeGeometry(roofShape, { depth: d + 0.8, bevelEnabled: false });
    rGeo.translate(0, 0, -(d + 0.8) * 0.5);
    const roof = new THREE.Mesh(rGeo, matSlateRoof);
    roof.position.y = h - 0.05;
    roof.castShadow = true;
    g.add(roof);

    // Shuttered windows & wooden door
    const door = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.5, 0.2), matDarkWood);
    door.position.set(0, 1.25, d * 0.5 + 0.04);
    g.add(door);
    for (const wx of [-w * 0.3, w * 0.3]) {
      const win = new THREE.Mesh(new THREE.BoxGeometry(1.15, 1.35, 0.18), matWindowDim);
      win.position.set(wx, h * 0.62, d * 0.5 + 0.04);
      g.add(win);
    }

    scene.add(g);
    const cos = Math.abs(Math.cos(rotY));
    collision.addBox(x, h * 0.5, z, cos > 0.5 ? w : d, h + 3, cos > 0.5 ? d : w, 'stone');
  }

  // Countryside Norman Farm (Southwest)
  buildNormanHouse(-19, 32, 11, 4.8, 8.5, Math.PI / 2);
  // Village Stone Houses
  buildNormanHouse(19, 14, 10.5, 5.6, 8.5, -Math.PI / 2);
  buildNormanHouse(-20, -2, 11, 5.8, 9.0, Math.PI / 2);
  buildNormanHouse(21, -8, 10, 5.2, 8.5, -Math.PI / 2);

  // ---- NORMAN STONE PARISH CHURCH WITH BELL TOWER & SPIRE (West Village Square) ----
  const church = new THREE.Group();
  church.position.set(-20, 0, 14);
  church.rotation.y = Math.PI / 2;
  const nave = new THREE.Mesh(new THREE.BoxGeometry(9.5, 6.8, 14.5), matNormanStone);
  nave.position.y = 3.4;
  nave.castShadow = true;
  nave.receiveShadow = true;
  const belfry = new THREE.Mesh(new THREE.BoxGeometry(4.8, 13.5, 4.8), matNormanStone);
  belfry.position.set(0, 6.75, 5.4);
  belfry.castShadow = true;
  const spire = new THREE.Mesh(new THREE.ConeGeometry(3.2, 8.2, 4), matSlateRoof);
  spire.rotation.y = Math.PI / 4;
  spire.position.set(0, 17.5, 5.4);
  spire.castShadow = true;
  const churchArch = new THREE.Mesh(new THREE.BoxGeometry(2.4, 3.6, 0.25), matDarkWood);
  churchArch.position.set(0, 1.8, 7.9);
  church.add(nave, belfry, spire, churchArch);
  scene.add(church);
  collision.addBox(-20, 4.0, 14, 15.0, 14.0, 10.0, 'stone');

  // Warm Village Street Lamps along the cobble square
  for (const [lx, lz] of [[-5.2, 18], [5.2, 6], [-5.2, -10], [5.2, -22]]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, 4.4, 8), matMilDark);
    post.position.set(lx, 2.2, lz);
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 8), matWindowDim);
    bulb.position.set(lx, 4.5, lz);
    const pt = new THREE.PointLight(0xffb866, 7.5, 19, 1.5);
    pt.position.set(lx, 4.3, lz);
    scene.add(post, bulb, pt);
  }

  // ---- SCENERY VEHICLES (Plain Military Bar Cross ONLY — Zero Forbidden Symbols) ----
  // 1. Parked Military Cargo Truck (East side of village)
  const truck = new THREE.Group();
  truck.position.set(10.2, 0, 22);
  truck.rotation.y = -0.22;
  const cab = new THREE.Mesh(new THREE.BoxGeometry(2.3, 2.1, 2.4), matMilGrey);
  cab.position.set(0, 1.55, 2.1);
  cab.castShadow = true;
  const canopy = new THREE.Mesh(new THREE.BoxGeometry(2.5, 2.3, 4.8), matSandbag);
  canopy.position.set(0, 1.9, -1.6);
  canopy.castShadow = true;
  const bed = new THREE.Mesh(new THREE.BoxGeometry(2.55, 0.65, 5.0), matMilGrey);
  bed.position.set(0, 0.85, -1.6);
  for (const [wx, wz] of [[-1.2, 2.2], [1.2, 2.2], [-1.2, -2.6], [1.2, -2.6]]) {
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.56, 0.56, 0.36, 12), matMilDark);
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(wx, 0.56, wz);
    truck.add(wheel);
  }
  const truckCross = new THREE.Mesh(new THREE.PlaneGeometry(0.85, 0.85), matBarCross);
  truckCross.position.set(-1.18, 1.45, 2.1);
  truckCross.rotation.y = -Math.PI / 2;
  truck.add(cab, canopy, bed, truckCross);
  scene.add(truck);
  collision.addBox(10.2, 1.5, 22, 3.2, 3.0, 7.6, 'stone');

  // 2. Parked Armored Tank in Village Square (West-Center cover!)
  const tank = new THREE.Group();
  tank.position.set(-9.5, 0, 2);
  tank.rotation.y = 0.34;
  const hull = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.35, 6.0), matMilGrey);
  hull.position.y = 1.05;
  hull.castShadow = true;
  const trackL = new THREE.Mesh(new THREE.BoxGeometry(0.68, 1.05, 6.2), matMilDark);
  trackL.position.set(-1.55, 0.55, 0);
  const trackR = trackL.clone();
  trackR.position.x = 1.55;
  const turret = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.0, 2.5), matMilGrey);
  turret.position.set(0, 2.15, -0.2);
  turret.castShadow = true;
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.14, 4.2, 10), matMilDark);
  barrel.rotation.x = Math.PI / 2;
  barrel.position.set(0, 2.15, 2.7);
  const tankCrossL = new THREE.Mesh(new THREE.PlaneGeometry(0.85, 0.85), matBarCross);
  tankCrossL.position.set(1.13, 2.15, -0.2);
  tankCrossL.rotation.y = Math.PI / 2;
  const tankCrossR = tankCrossL.clone();
  tankCrossR.position.x = -1.13;
  tankCrossR.rotation.y = -Math.PI / 2;
  tank.add(hull, trackL, trackR, turret, barrel, tankCrossL, tankCrossR);
  scene.add(tank);
  collision.addBox(-9.5, 1.4, 2, 4.4, 2.8, 6.6, 'stone');

  // ---- GUARDED CHECKPOINT & SANDBAGGED MACHINE-GUN POSITION (Mid-North) ----
  // Guard booth + striped barrier arm
  const booth = new THREE.Mesh(new THREE.BoxGeometry(2.2, 2.9, 2.2), matWood);
  booth.position.set(6.5, 1.45, -14);
  booth.castShadow = true;
  const boothRoof = new THREE.Mesh(new THREE.ConeGeometry(1.9, 1.1, 4), matSlateRoof);
  boothRoof.rotation.y = Math.PI / 4;
  boothRoof.position.set(6.5, 3.45, -14);
  scene.add(booth, boothRoof);
  collision.addBox(6.5, 1.5, -14, 2.4, 3.0, 2.4, 'wood');

  // Raised red-and-white striped checkpoint pole
  for (let i = 0; i < 6; i++) {
    const seg = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.18, 0.18), i % 2 === 0 ? matRedStripe : matWhiteStripe);
    seg.position.set(4.5 - i * 1.1, 2.5 + i * 0.26, -14);
    seg.rotation.z = -0.24;
    scene.add(seg);
  }

  // Sandbagged Machine-Gun Nest overlooking the checkpoint & road!
  function addSandbagNest(x, z, w = 5.4) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    for (let row = 0; row < 3; row++) {
      const bags = Math.floor(w / 0.85);
      for (let i = 0; i < bags; i++) {
        const bag = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.44, 0.72), matSandbag);
        bag.position.set(-w * 0.5 + 0.45 + i * 0.85 + (row % 2) * 0.2, 0.22 + row * 0.42, 0);
        bag.castShadow = true;
        bag.receiveShadow = true;
        g.add(bag);
      }
    }
    scene.add(g);
    collision.addBox(x, 0.65, z, w, 1.3, 1.0, 'stone');
  }
  addSandbagNest(-2.5, -16, 5.2);
  addSandbagNest(8.5, -4, 4.4);
  addSandbagNest(-8.5, -26, 4.8);
  addSandbagNest(8.5, -26, 4.8);

  // ---- GERMAN COASTAL CONCRETE GUN BATTERY BUNKERS ON THE CLIFF (North Climax!) ----
  const bunkerGrp = new THREE.Group();
  bunkerGrp.position.set(0, 0, -40);

  // Main Reinforced-Concrete Casemate Bunker
  const mainBunker = new THREE.Mesh(new THREE.BoxGeometry(20, 6.2, 12), matConcrete);
  mainBunker.position.y = 3.1;
  mainBunker.castShadow = true;
  mainBunker.receiveShadow = true;
  const overhang = new THREE.Mesh(new THREE.BoxGeometry(22.4, 1.4, 14), matConcrete);
  overhang.position.y = 6.5;
  overhang.castShadow = true;
  // Dark embrasure firing slit
  const slit = new THREE.Mesh(new THREE.BoxGeometry(11.5, 1.6, 0.6), matMilDark);
  slit.position.set(0, 3.6, 5.9);
  // Heavy Coastal Artillery Gun Barrels protruding from Casemate!
  for (const gx of [-3.6, 3.6]) {
    const gun = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.34, 7.2, 12), matMilDark);
    gun.rotation.x = Math.PI / 2 - 0.08;
    gun.position.set(gx, 3.6, 8.2);
    gun.castShadow = true;
    bunkerGrp.add(gun);
  }
  // Flanking Concrete Pillboxes
  for (const fx of [-16, 16]) {
    const pill = new THREE.Mesh(new THREE.BoxGeometry(8.5, 4.6, 8.5), matConcrete);
    pill.position.set(fx, 2.3, 1.5);
    pill.castShadow = true;
    const roofP = new THREE.Mesh(new THREE.BoxGeometry(9.4, 1.0, 9.4), matConcrete);
    roofP.position.set(fx, 4.9, 1.5);
    bunkerGrp.add(pill, roofP);
  }
  // Plain Military Bar-Cross Flag on Bunker Roof (Zero forbidden symbols)
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 6.5, 8), matMilDark);
  pole.position.set(0, 10.2, 0);
  const flag = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 1.8), matBarCross);
  flag.position.set(1.4, 12.2, 0);
  bunkerGrp.add(mainBunker, overhang, slit, pole, flag);
  animated.push((t) => { flag.rotation.y = Math.sin(t * 3.1) * 0.22; });

  scene.add(bunkerGrp);
  collision.addBox(0, 3.5, -40, 21, 7.5, 12.5, 'stone');
  collision.addBox(-16, 2.5, -38.5, 9, 5.5, 9, 'stone');
  collision.addBox(16, 2.5, -38.5, 9, 5.5, 9, 'stone');

  // ---- AMBIENT PRE-DAWN SEA MIST & ASH PARTICLES ----
  particles.initAmbient('alpine', collision.bounds);

  // ---- PICKUPS ----
  const pickupDefs = [
    { type: 'health', pos: new THREE.Vector3(-10, 0.8, 30), label: 'FIELD BANDAGE (+35 HP)' },
    { type: 'ammo',   pos: new THREE.Vector3(9, 0.8, 14),   label: 'AMMUNITION CASE' },
    { type: 'health', pos: new THREE.Vector3(-11, 0.8, 8),  label: 'RESISTANCE MEDKIT (+35 HP)' },
    { type: 'ammo',   pos: new THREE.Vector3(10, 0.8, -14), label: 'CHECKPOINT AMMO CRATE' },
    { type: 'health', pos: new THREE.Vector3(-9, 0.8, -22), label: 'FIELD RATIONS (+35 HP)' }
  ];
  for (const pd of pickupDefs) {
    const mesh = createPickupMesh(pd.type);
    mesh.position.copy(pd.pos);
    scene.add(mesh);
    pickups.push({ ...pd, mesh, collected: false });
  }

  // ---- ENEMY ROSTER (German Riflemen, Officers, Sandbag MG Gunner, 2 Guard Dogs & Boss Major Vogel) ----
  const enemySpawns = [
    { type: 'german_rifleman', pos: new THREE.Vector3(-4, 0, 24) },
    { type: 'guard_dog',       pos: new THREE.Vector3(3.5, 0, 20) },
    { type: 'german_officer',  pos: new THREE.Vector3(9, 0, 12) },
    { type: 'german_rifleman', pos: new THREE.Vector3(-9, 0, 10) },
    { type: 'german_rifleman', pos: new THREE.Vector3(6, 0, -1) },
    { type: 'guard_dog',       pos: new THREE.Vector3(-6, 0, -6) },
    { type: 'german_mg',       pos: new THREE.Vector3(-2.5, 0, -17.5) },
    { type: 'german_officer',  pos: new THREE.Vector3(8, 0, -18) },
    { type: 'german_rifleman', pos: new THREE.Vector3(-8, 0, -28) },
    { type: 'german_rifleman', pos: new THREE.Vector3(8, 0, -28) },
    { type: 'boss_normandy',   pos: new THREE.Vector3(0, 0, -30), isBossWave: true }
  ];

  return { enemySpawns, pickups, animated, disposables };
}
