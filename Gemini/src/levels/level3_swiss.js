import * as THREE from 'three';
import {
  getWoodPlanks,
  getGroundTexture,
  getStoneTexture,
  getRoofTileTexture,
  getAlpineTimberWall,
  createBannerTexture
} from '../engine/textures.js';
import { createSkyDome, createWaterMesh, createWaterfallMesh } from '../engine/shaders.js';
import { createPickupMesh } from './level1_west.js';

export const LEVEL3_META = {
  id: 'swiss',
  index: 2,
  themeClass: 'theme-swiss',
  act: 'ACT III • 1307',
  title: 'RÜTLI VALLEY',
  subtitle: "Tell's Arrow & The Uri Banner",
  heroName: 'WILHELM TELL (URI)',
  objective: 'Drive the Austrian Army from the Valley & Defeat Capt. von Gessler',
  quote: '"Upon the Rütli meadow we swore our oath beneath the Uri Bull: Uri, Schwyz, and Unterwalden shall bow to no tyrant’s hat!"',
  musicTheme: 'swiss',
  enemyIcon: '✚',
  currency: 'Fl ',
  arsenalSummary: [
    ["1 • Tell's Armbrust", 'Precision Swiss crossbow with Eagle-Eye Zoom (RMB).'],
    ['2 • Swiss Halberd', 'Cleaves Austrian steel armor at close quarters.'],
    ['3 • Alpine Repeater', 'Rapid-fire light crossbow for skirmishes.'],
    ['4 • Alpine Fire-Pot', 'Blazing medieval black-powder grenade.']
  ],
  spawnPos: new THREE.Vector3(-4, 0, 44),
  spawnYaw: 0,
  cameraPreview: { center: new THREE.Vector3(-4, 6, -4), radius: 42, height: 15, speed: 0.12 }
};

export function buildLevel3(scene, collision, particles) {
  const disposables = [];
  const animated = [];
  const pickups = [];

  collision.bounds = { minX: -52, maxX: 44, minZ: -54, maxZ: 54 };

  // 1. Crisp Radiant Alpine Sky & Bright Mountain Sunlight
  const sunDir = new THREE.Vector3(0.48, 0.52, -0.7).normalize();
  const sky = createSkyDome({
    topColor: 0x1656a8,
    midColor: 0x5da4e8,
    horizonColor: 0xd9f0ff,
    sunColor: 0xfffbe0,
    sunDirection: sunDir,
    cloudTint: 0xffffff,
    cloudDensity: 0.48
  });
  scene.add(sky.mesh);
  animated.push((t) => { sky.uniforms.uTime.value = t; });

  scene.fog = new THREE.FogExp2(0xc4dff2, 0.0052);

  const hemi = new THREE.HemisphereLight(0xdff2ff, 0x3b6331, 0.95);
  scene.add(hemi);

  const sunLight = new THREE.DirectionalLight(0xfff5dc, 2.7);
  sunLight.position.copy(sunDir).multiplyScalar(110);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(2048, 2048);
  sunLight.shadow.camera.left = -70;
  sunLight.shadow.camera.right = 70;
  sunLight.shadow.camera.top = 70;
  sunLight.shadow.camera.bottom = -70;
  sunLight.shadow.near = 10;
  sunLight.shadow.far = 230;
  sunLight.shadow.bias = -0.0005;
  scene.add(sunLight);

  const alpineBounce = new THREE.DirectionalLight(0x8fd4ff, 0.5);
  alpineBounce.position.set(-55, 22, 40);
  scene.add(alpineBounce);

  // 2. Emerald Alpine Wildflower Meadow
  const meadowTex = getGroundTexture('alpine_meadow', 26, 26);
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(360, 360),
    new THREE.MeshStandardMaterial({
      map: meadowTex.map,
      bumpMap: meadowTex.bumpMap,
      bumpScale: 0.22,
      roughness: 0.92
    })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // Winding Alpine Cobble / Dirt Trail from Rütli Camp to Austrian Watchtower
  const cobbleTex = getGroundTexture('cobble', 3, 24);
  const road = new THREE.Mesh(
    new THREE.PlaneGeometry(6.5, 86),
    new THREE.MeshStandardMaterial({ map: cobbleTex.map, bumpMap: cobbleTex.bumpMap, bumpScale: 0.18, roughness: 0.88 })
  );
  road.rotation.x = -Math.PI / 2;
  road.position.set(-4, 0.04, 2);
  road.receiveShadow = true;
  scene.add(road);

  // Shared PBR Materials
  const alpineWood = getWoodPlanks('alpine', 2, 2);
  const castleStone = getStoneTexture('castle', 2, 2);
  const shingleTex = getRoofTileTexture('swiss', 4, 2);
  const fachwerkTex = getAlpineTimberWall(2, 1);

  const matTimber = new THREE.MeshStandardMaterial({ map: alpineWood.map, bumpMap: alpineWood.bumpMap, bumpScale: 0.14, roughness: 0.85 });
  const matDarkWood = new THREE.MeshStandardMaterial({ color: 0x362013, roughness: 0.86 });
  const matStone = new THREE.MeshStandardMaterial({ map: castleStone.map, bumpMap: castleStone.bumpMap, bumpScale: 0.26, roughness: 0.88 });
  const matRoof = new THREE.MeshStandardMaterial({ map: shingleTex.map, bumpMap: shingleTex.bumpMap, bumpScale: 0.18, roughness: 0.84 });
  const matFachwerk = new THREE.MeshStandardMaterial({ map: fachwerkTex, roughness: 0.82 });
  const matSnow = new THREE.MeshStandardMaterial({ color: 0xf4f9ff, roughness: 0.72 });
  const matCliff = new THREE.MeshStandardMaterial({ color: 0x676b70, roughness: 0.92 });
  const matPine1 = new THREE.MeshStandardMaterial({ color: 0x1f4d2b, roughness: 0.88 });
  const matPine2 = new THREE.MeshStandardMaterial({ color: 0x2b6336, roughness: 0.88 });
  const matFlowerRed = new THREE.MeshStandardMaterial({ color: 0xd92b2b, roughness: 0.7 });
  const matWindowWarm = new THREE.MeshStandardMaterial({ color: 0xffdb8a, emissive: 0xffa033, emissiveIntensity: 0.75 });
  const matAustria = new THREE.MeshStandardMaterial({ map: createBannerTexture('austria'), side: THREE.DoubleSide, roughness: 0.65 });
  const matUri = new THREE.MeshStandardMaterial({ map: createBannerTexture('uri'), side: THREE.DoubleSide, roughness: 0.65 });
  const matSwiss = new THREE.MeshStandardMaterial({ map: createBannerTexture('swiss'), side: THREE.DoubleSide, roughness: 0.65 });

  // ---- TURQUOISE GLACIAL LAKE (VIERWALDSTÄTTERSEE) ON EAST FLANK ----
  const lake = createWaterMesh(140, 220, {
    deepColor: 0x0b5878,
    shallowColor: 0x2ec4cc,
    foamColor: 0xebfcff,
    sunColor: 0xfffce0,
    sunDir,
    opacity: 0.9,
    waveScale: 0.16
  });
  lake.mesh.position.set(92, 0.08, 0);
  scene.add(lake.mesh);
  animated.push((t) => { lake.uniforms.uTime.value = t; });

  // Rocky shoreline + Wooden Lake Pier & Rowboat!
  for (let rz = -52; rz <= 52; rz += 6.5) {
    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(1.5 + ((Math.abs(rz) * 3) % 1.4), 1), matStone);
    rock.position.set(22.5 + Math.sin(rz * 0.14) * 2.5, 0.35, rz);
    rock.scale.set(1.4, 0.65, 1.3);
    scene.add(rock);
  }
  collision.addBox(34, 2.0, 0, 20, 4.0, 120, 'water'); // Keep player dry along lake shore

  // Wooden Pier jutting into Lake Lucerne
  const pier = new THREE.Mesh(new THREE.BoxGeometry(10, 0.35, 3.6), matTimber);
  pier.position.set(26, 0.6, 16);
  pier.castShadow = true;
  scene.add(pier);
  for (const px of [22, 26, 30]) {
    for (const pz of [14.5, 17.5]) {
      const pile = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.18, 1.8, 8), matDarkWood);
      pile.position.set(px, 0.3, pz);
      scene.add(pile);
    }
  }
  // Bobbing wooden rowboat moored at pier
  const boat = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.65, 1.35), matTimber);
  boat.position.set(32, 0.25, 19);
  scene.add(boat);
  animated.push((t) => {
    boat.position.y = 0.28 + Math.sin(t * 2.2) * 0.1;
    boat.rotation.z = Math.sin(t * 1.7) * 0.05;
  });

  // ---- ROARING MULTI-TIER ALPINE WATERFALL & MOUNTAIN STREAM (West Cliffs!) ----
  const cliffGroup = new THREE.Group();
  for (let i = 0; i < 6; i++) {
    const cz = -40 + i * 16;
    const h = 28 + (i % 3) * 8;
    const crag = new THREE.Mesh(new THREE.DodecahedronGeometry(14, 1), matCliff);
    crag.position.set(-64, h * 0.45, cz);
    crag.scale.set(1.1, h / 14, 1.45);
    crag.castShadow = true;
    cliffGroup.add(crag);

    // Snow cap on cliff ledges
    const cap = new THREE.Mesh(new THREE.DodecahedronGeometry(9, 1), matSnow);
    cap.position.set(-66, h * 0.9, cz);
    cap.scale.set(1.2, 0.45, 1.3);
    cliffGroup.add(cap);
  }
  scene.add(cliffGroup);

  // Main Cascading Waterfall Ribbon plunging down the rock wall (visible right from the valley vista!)
  const wf1 = createWaterfallMesh(9.5, 31);
  wf1.mesh.position.set(-48.5, 15.0, -18);
  wf1.mesh.rotation.y = Math.PI / 2 - 0.28;
  scene.add(wf1.mesh);

  const wf2 = createWaterfallMesh(6.2, 23);
  wf2.mesh.position.set(-47.5, 11.5, -26);
  wf2.mesh.rotation.y = Math.PI / 2 - 0.18;
  scene.add(wf2.mesh);

  animated.push((t) => {
    wf1.uniforms.uTime.value = t;
    wf2.uniforms.uTime.value = t * 1.15;
  });

  // Waterfall plunge pool + rising mist plumes!
  const pool = createWaterMesh(20, 24, {
    deepColor: 0x167896,
    shallowColor: 0x62e1eb,
    foamColor: 0xffffff,
    sunColor: 0xfffce0,
    sunDir,
    opacity: 0.92,
    waveScale: 0.12
  });
  pool.mesh.position.set(-44, 0.09, -18);
  scene.add(pool.mesh);
  animated.push((t) => { pool.uniforms.uTime.value = t * 1.3; });

  particles.addMistEmitter(new THREE.Vector3(-46, 0.8, -18), 4.5);
  particles.addMistEmitter(new THREE.Vector3(-46, 0.8, -25), 3.2);

  // Mountain stream crossing from waterfall pool to Lake Lucerne + Rustic Wooden Bridge!
  const stream = createWaterMesh(68, 6.4, {
    deepColor: 0x1b7996,
    shallowColor: 0x5cdce8,
    foamColor: 0xffffff,
    sunColor: 0xfffce0,
    sunDir,
    opacity: 0.88,
    waveScale: 0.08
  });
  stream.mesh.position.set(-10, 0.06, -8);
  scene.add(stream.mesh);
  animated.push((t) => { stream.uniforms.uTime.value = t * 1.5; });

  // Wooden Alpine Bridge across the Mountain Stream
  const bridge = new THREE.Group();
  bridge.position.set(-4, 0, -8);
  const bDeck = new THREE.Mesh(new THREE.BoxGeometry(7.2, 0.35, 9.2), matTimber);
  bDeck.position.y = 0.55;
  bDeck.receiveShadow = true;
  bridge.add(bDeck);
  for (const bx of [-3.4, 3.4]) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.2, 9.2), matDarkWood);
    rail.position.set(bx, 1.55, 0);
    bridge.add(rail);
    for (const bz of [-4.2, 0, 4.2]) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.26, 1.35, 0.26), matDarkWood);
      post.position.set(bx, 1.1, bz);
      bridge.add(post);
    }
  }
  scene.add(bridge);
  collision.addWalkable(-4, -8, 7.2, 9.5, 0.72);

  // ---- RÜTLI OATH CAMP: BEARDED WALDSTÄTTEN COMRADES WITH HALBERDS & WAVING URI BULL FLAG! ----
  function addBeardedWaldstaetten(x, z, rotY = 0, withFlag = true) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rotY;

    const skinMat = new THREE.MeshStandardMaterial({ color: 0xe3b18a, roughness: 0.72 });
    const beardMat = new THREE.MeshStandardMaterial({ color: 0x4d3320, roughness: 0.92 });
    const tunicMat = new THREE.MeshStandardMaterial({ color: 0x5c4a34, roughness: 0.85 });
    const capeMat = new THREE.MeshStandardMaterial({ color: 0x8f2424, roughness: 0.8 });
    const bootMat = new THREE.MeshStandardMaterial({ color: 0x2b1d14, roughness: 0.85 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xf2c629, roughness: 0.65 });
    const steelMat = new THREE.MeshStandardMaterial({ color: 0xd0dae6, metalness: 0.88, roughness: 0.22 });

    // Sturdy boots & legs
    for (const lx of [-0.17, 0.17]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.1, 0.84, 8), bootMat);
      leg.position.set(lx, 0.42, 0);
      leg.castShadow = true;
      g.add(leg);
    }
    // Broad alpine woolen tunic & yellow-black Uri sash
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.78, 0.36), tunicMat);
    torso.position.set(0, 1.18, 0);
    torso.castShadow = true;
    const sash = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.18, 0.38), goldMat);
    sash.position.set(0, 1.0, 0);
    const cape = new THREE.Mesh(new THREE.BoxGeometry(0.64, 0.95, 0.1), capeMat);
    cape.position.set(0, 1.05, -0.22);
    cape.rotation.x = 0.12;
    g.add(torso, sash, cape);

    // Head + Full Thick Alpine Beard & Mustache!
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 10), skinMat);
    head.position.set(0, 1.76, 0);
    head.castShadow = true;
    const beard = new THREE.Mesh(new THREE.ConeGeometry(0.21, 0.38, 10), beardMat);
    beard.rotation.x = Math.PI;
    beard.position.set(0, 1.54, 0.11);
    const stache = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.07, 0.09), beardMat);
    stache.position.set(0, 1.67, 0.19);
    // Feathered medieval Swiss cap
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.25, 0.16, 12), capeMat);
    cap.position.set(0, 1.94, 0);
    const feather = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.42, 6), matSnow);
    feather.position.set(0.18, 2.1, -0.04);
    feather.rotation.z = -0.35;
    g.add(head, beard, stache, cap, feather);

    // Arms
    const armL = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.62, 8), tunicMat);
    armL.position.set(-0.42, 1.24, 0.16);
    armL.rotation.x = -0.85;
    const armR = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.66, 8), tunicMat);
    armR.position.set(0.42, 1.28, 0.22);
    armR.rotation.x = -1.1;
    g.add(armL, armR);

    // Iconic Tall Swiss Halberd (Hallebarde) held in left hand!
    const hPole = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.04, 3.05, 8), matDarkWood);
    hPole.position.set(-0.46, 1.55, 0.35);
    hPole.castShadow = true;
    const hSpike = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.55, 4), steelMat);
    hSpike.position.set(-0.46, 3.3, 0.35);
    const hAxe = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.44, 0.36), steelMat);
    hAxe.position.set(-0.46, 2.86, 0.52);
    const hHook = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.28, 4), steelMat);
    hHook.rotation.x = -Math.PI / 2;
    hHook.position.set(-0.46, 2.86, 0.18);
    const hTassel = new THREE.Mesh(new THREE.ConeGeometry(0.075, 0.22, 8), goldMat);
    hTassel.position.set(-0.46, 2.58, 0.35);
    g.add(hPole, hSpike, hAxe, hHook, hTassel);

    if (withFlag) {
      // Tall Flagpole + Iconic Yellow-Black URI BULL BANNER waving!
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.055, 5.4, 8), matDarkWood);
      pole.position.set(0.48, 2.7, 0.42);
      pole.castShadow = true;
      const finial = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.3, 6), goldMat);
      finial.position.set(0.48, 5.5, 0.42);

      const uriFlagGeo = new THREE.PlaneGeometry(1.75, 2.6, 8, 4);
      const uriFlag = new THREE.Mesh(uriFlagGeo, matUri);
      uriFlag.position.set(1.36, 4.05, 0.42);
      g.add(pole, finial, uriFlag);

      // Gentle breeze ripple on the Uri flag!
      const basePos = uriFlagGeo.attributes.position.array.slice();
      animated.push((t) => {
        const pos = uriFlagGeo.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          const bx = basePos[i * 3];
          const by = basePos[i * 3 + 1];
          const distFromPole = bx + 0.875;
          pos.setZ(i, Math.sin(t * 4.5 + distFromPole * 2.6 + by * 0.8) * 0.14 * distFromPole);
        }
        pos.needsUpdate = true;
      });
    } else {
      // Second halberdier gripping the halberd two-handed / holding a crossbow
      const h2 = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.04, 2.9, 8), matDarkWood);
      h2.position.set(0.48, 1.48, 0.36);
      const s2 = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.5, 4), steelMat);
      s2.position.set(0.48, 3.12, 0.36);
      const a2 = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.4, 0.34), steelMat);
      a2.position.set(0.48, 2.72, 0.52);
      g.add(h2, s2, a2);
    }

    scene.add(g);
    collision.addBox(x, 1.2, z, 1.2, 2.4, 1.2, 'wood');
  }

  // Proud Bearded Waldstätten Banner-Bearer & Halberdier Guard overlooking the Rütli start!
  addBeardedWaldstaetten(2.8, 37.5, -0.55, true);
  addBeardedWaldstaetten(-9.2, 37.2, 0.45, false);

  // Accompanying Schwyz & Uri Standard Poles cleanly separated from the halberdiers
  function addFlagPole(x, z, mat) {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 6.2, 8), matDarkWood);
    pole.position.set(x, 3.1, z);
    pole.castShadow = true;
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(1.9, 3.0), mat);
    flag.position.set(x + 0.98, 4.5, z);
    scene.add(pole, flag);
    animated.push((t) => {
      flag.rotation.y = Math.sin(t * 2.8 + x) * 0.18;
    });
  }
  addFlagPole(-13.8, 39.5, matSwiss);
  addFlagPole(-15.2, 33.5, matUri);

  // Warm Rütli Campfire
  const fireLight = new THREE.PointLight(0xff8c33, 8, 16, 1.6);
  fireLight.position.set(-9, 1.1, 39);
  scene.add(fireLight);
  const fireCone = new THREE.Mesh(new THREE.ConeGeometry(0.42, 0.95, 7), new THREE.MeshBasicMaterial({ color: 0xffa833 }));
  fireCone.position.set(-9, 0.55, 39);
  scene.add(fireCone);
  animated.push((t) => {
    fireLight.intensity = 7.5 + Math.sin(t * 11) * 1.4;
    fireCone.scale.y = 0.85 + Math.sin(t * 14) * 0.2;
  });

  // ---- WILHELM TELL EASTER EGG: RED APPLE ON WOODEN STAKE! ----
  const appleStake = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 1.75, 8), matDarkWood);
  appleStake.position.set(5.5, 0.875, 33);
  scene.add(appleStake);
  const tellApple = new THREE.Mesh(
    new THREE.SphereGeometry(0.24, 12, 10),
    new THREE.MeshStandardMaterial({ color: 0xd92121, roughness: 0.3, emissive: 0x3a0505, emissiveIntensity: 0.35 })
  );
  tellApple.position.set(5.5, 1.92, 33);
  tellApple.userData.isTellApple = true;
  scene.add(tellApple);

  // ---- SWISS ALPINE TIMBER BARNS (STADEL) & HALF-TIMBERED CHALETS ----
  function buildSwissBarn(x, z, w, h, d, rotY = 0, isChalet = false) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rotY;

    // Stone basement plinth
    const base = new THREE.Mesh(new THREE.BoxGeometry(w + 0.4, 1.1, d + 0.4), matStone);
    base.position.y = 0.55;
    base.castShadow = true;
    base.receiveShadow = true;
    g.add(base);

    // Main walls (dark alpine timber or Fachwerk half-timber plaster)
    const wall = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), isChalet ? matFachwerk : matTimber);
    wall.position.y = 1.1 + h * 0.5;
    wall.castShadow = true;
    wall.receiveShadow = true;
    g.add(wall);

    // Wide Overhanging Alpine Gable Roof!
    const roofH = 2.9;
    const roofGeo = new THREE.ConeGeometry(Math.max(w, d) * 0.84, roofH, 4);
    const roof = new THREE.Mesh(roofGeo, matRoof);
    roof.rotation.y = Math.PI / 4;
    roof.scale.set((w + 2.4) / Math.max(w, d), 1, (d + 2.4) / Math.max(w, d));
    roof.position.y = 1.1 + h + roofH * 0.48;
    roof.castShadow = true;
    g.add(roof);

    // Wooden balcony + Crimson Geranium Flower Boxes (quintessential Swiss chalet!)
    if (isChalet) {
      const bal = new THREE.Mesh(new THREE.BoxGeometry(w * 0.72, 0.22, 1.3), matTimber);
      bal.position.set(0, 3.6, d * 0.5 + 0.65);
      const rail = new THREE.Mesh(new THREE.BoxGeometry(w * 0.72, 0.85, 0.14), matDarkWood);
      rail.position.set(0, 4.1, d * 0.5 + 1.22);
      const flowers = new THREE.Mesh(new THREE.BoxGeometry(w * 0.65, 0.34, 0.36), matFlowerRed);
      flowers.position.set(0, 4.58, d * 0.5 + 1.32);
      g.add(bal, rail, flowers);
    }

    // Warm lit alpine windows & wooden barn door
    const door = new THREE.Mesh(new THREE.BoxGeometry(2.2, 2.7, 0.2), matDarkWood);
    door.position.set(0, 2.35, d * 0.5 + 0.08);
    g.add(door);
    for (const wx of [-w * 0.32, w * 0.32]) {
      const win = new THREE.Mesh(new THREE.BoxGeometry(1.25, 1.25, 0.18), matWindowWarm);
      win.position.set(wx, 2.8, d * 0.5 + 0.08);
      g.add(win);
    }

    // Stacked firewood pile along the side
    const logs = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.2, 3.4), matDarkWood);
    logs.position.set(w * 0.5 + 0.6, 0.6, 0);
    logs.castShadow = true;
    g.add(logs);

    scene.add(g);

    const cos = Math.abs(Math.cos(rotY));
    const colW = cos > 0.5 ? w + 0.8 : d + 0.8;
    const colD = cos > 0.5 ? d + 0.8 : w + 0.8;
    collision.addBox(x, (h + 2) * 0.5, z, colW, h + 3, colD, 'wood');
  }

  buildSwissBarn(-21, 22, 10, 4.6, 8.5, Math.PI / 2, true);
  buildSwissBarn(12, 21, 9.5, 4.2, 8.0, -Math.PI / 2, false);
  buildSwissBarn(-24, 3, 10.5, 4.4, 8.5, Math.PI / 2.2, false);
  buildSwissBarn(11, -19, 9.5, 4.5, 8.0, -Math.PI / 2.5, true);

  // ---- HABSBURG AUSTRIAN STONE WATCHTOWER & FORTIFIED OUTPOST (North End!) ----
  const fortX = -4, fortZ = -35;
  const fortGrp = new THREE.Group();
  fortGrp.position.set(fortX, 0, fortZ);

  // Main Keep Tower
  const tower = new THREE.Mesh(new THREE.BoxGeometry(11, 14, 11), matStone);
  tower.position.y = 7;
  tower.castShadow = true;
  tower.receiveShadow = true;
  fortGrp.add(tower);

  // Crenellations / Battlements atop tower
  for (let cx = -4.8; cx <= 4.8; cx += 2.4) {
    for (const cz of [-5.2, 5.2]) {
      const merlon = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.4, 0.8), matStone);
      merlon.position.set(cx, 14.7, cz);
      fortGrp.add(merlon);
    }
  }

  // Flanking Stone Wing Walls
  for (const sx of [-10.5, 10.5]) {
    const wing = new THREE.Mesh(new THREE.BoxGeometry(11, 5.2, 2.4), matStone);
    wing.position.set(sx, 2.6, 3.2);
    wing.castShadow = true;
    wing.receiveShadow = true;
    fortGrp.add(wing);
  }

  // Giant Waving Red-White-Red Austrian Habsburg Banners hanging from Keep!
  for (const bx of [-3.4, 3.4]) {
    const ban = new THREE.Mesh(new THREE.PlaneGeometry(2.3, 5.6), matAustria);
    ban.position.set(bx, 8.6, 5.75);
    fortGrp.add(ban);
  }
  // Roof flagpole with Austrian Banner
  const fortPole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 6, 8), matDarkWood);
  fortPole.position.set(0, 17, 0);
  const fortFlag = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 2.0), matAustria);
  fortFlag.position.set(1.6, 18.6, 0);
  fortGrp.add(fortPole, fortFlag);
  animated.push((t) => { fortFlag.rotation.y = Math.sin(t * 3.4) * 0.25; });

  scene.add(fortGrp);
  collision.addBox(fortX, 7, fortZ, 11.4, 14.5, 11.4, 'stone');
  collision.addBox(fortX - 10.5, 2.6, fortZ + 3.2, 11.2, 5.4, 2.8, 'stone');
  collision.addBox(fortX + 10.5, 2.6, fortZ + 3.2, 11.2, 5.4, 2.8, 'stone');

  // Low Stone Pasture Walls & Hay Carts for tactical Alpine cover!
  const stoneCover = [
    [-11, 14, 5.5, 1.35, 1.1],
    [4, 10, 5.2, 1.35, 1.1],
    [-12, -18, 5.5, 1.4, 1.1],
    [3, -22, 5.5, 1.4, 1.1]
  ];
  for (const [sx, sz, sw, sh, sd] of stoneCover) {
    const w = new THREE.Mesh(new THREE.BoxGeometry(sw, sh, sd), matStone);
    w.position.set(sx, sh * 0.5, sz);
    w.castShadow = true;
    w.receiveShadow = true;
    scene.add(w);
    collision.addBox(sx, sh * 0.5, sz, sw, sh, sd, 'stone');
  }

  // ---- LUSH ALPINE SPRUCE / PINE FORESTS ----
  function addPineTree(tx, tz, scale = 1) {
    const g = new THREE.Group();
    g.position.set(tx, 0, tz);
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.36, 2.6, 7), matDarkWood);
    trunk.position.y = 1.3;
    trunk.castShadow = true;
    g.add(trunk);

    const tiers = [
      [3.4, 2.4, 3.2, matPine1],
      [5.2, 1.9, 2.8, matPine2],
      [6.9, 1.35, 2.4, matPine1],
      [8.3, 0.85, 1.9, matPine2]
    ];
    for (const [py, r, h, m] of tiers) {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(r, h, 8), m);
      cone.position.y = py;
      cone.castShadow = true;
      g.add(cone);
    }
    g.scale.setScalar(scale);
    scene.add(g);
    collision.addBox(tx, 2.0, tz, 1.1 * scale, 4.0 * scale, 1.1 * scale, 'wood');
  }

  const pineCoords = [
    [-34, 34, 1.25], [-38, 18, 1.35], [-34, -22, 1.2], [-30, -36, 1.4],
    [16, 36, 1.15], [17, 6, 1.1], [16, -34, 1.3], [-18, -32, 1.25],
    [-26, 44, 1.2], [9, 44, 1.15], [-34, 6, 1.15], [-16, 11, 0.95]
  ];
  for (const [px, pz, sc] of pineCoords) addPineTree(px, pz, sc);

  // ---- TOWERING SNOW-CAPPED SWISS ALPS PANORAMA (360° RING!) ----
  const peakSpecs = [
    [-110, -150, 75, 92], [-20, -165, 86, 115], [75, -150, 78, 102],
    [165, -90, 72, 95], [175, 20, 82, 108], [155, 115, 76, 88],
    [60, 160, 80, 96], [-45, 165, 76, 88], [-145, 115, 78, 95],
    [-155, -25, 82, 104]
  ];
  for (const [px, pz, r, h] of peakSpecs) {
    const mtn = new THREE.Mesh(new THREE.ConeGeometry(r, h, 7), matCliff);
    mtn.position.set(px, h * 0.45, pz);
    mtn.rotation.y = px * 0.2;
    scene.add(mtn);

    const snowCap = new THREE.Mesh(new THREE.ConeGeometry(r * 0.56, h * 0.52, 7), matSnow);
    snowCap.position.set(px, h * 0.72, pz);
    snowCap.rotation.y = px * 0.2;
    scene.add(snowCap);
  }

  // ---- ALPINE POLLEN / GLACIAL MIST PARTICLES ----
  particles.initAmbient('alpine', collision.bounds);

  // ---- PICKUPS ----
  const pickupDefs = [
    { type: 'health', pos: new THREE.Vector3(-14, 0.8, 22), label: 'ALPINE CHEESE & CIDER (+35 HP)' },
    { type: 'ammo',   pos: new THREE.Vector3(7, 0.8, 16),   label: 'STEEL QUARREL BOLTS' },
    { type: 'health', pos: new THREE.Vector3(-18, 0.8, -1), label: 'MOUNTAIN HERB TONIC (+35 HP)' },
    { type: 'ammo',   pos: new THREE.Vector3(6, 0.8, -16),  label: 'CROSSBOW & FIRE-POT CRATE' },
    { type: 'health', pos: new THREE.Vector3(-12, 0.8, -22), label: 'WALDSTÄTTEN RATIONS (+35 HP)' }
  ];
  for (const pd of pickupDefs) {
    const mesh = createPickupMesh(pd.type);
    mesh.position.copy(pd.pos);
    scene.add(mesh);
    pickups.push({ ...pd, mesh, collected: false });
  }

  // ---- ENEMIES (Austrian Habsburg Halberdiers, Arquebusiers & Capt. von Gessler!) ----
  const enemySpawns = [
    { type: 'halberdier',  pos: new THREE.Vector3(-10, 0, 20) },
    { type: 'arquebusier', pos: new THREE.Vector3(5, 0, 15) },
    { type: 'halberdier',  pos: new THREE.Vector3(-2, 0, 7) },
    { type: 'arquebusier', pos: new THREE.Vector3(-15, 0, 2) },
    { type: 'halberdier',  pos: new THREE.Vector3(8, 0, 1) },
    { type: 'arquebusier', pos: new THREE.Vector3(-4, 0.75, -8) },
    { type: 'halberdier',  pos: new THREE.Vector3(-14, 0, -16) },
    { type: 'arquebusier', pos: new THREE.Vector3(6, 0, -18) },
    { type: 'halberdier',  pos: new THREE.Vector3(-6, 0, -24) },
    { type: 'arquebusier', pos: new THREE.Vector3(2, 0, -26) },
    { type: 'boss_swiss',  pos: new THREE.Vector3(-4, 0, -26), isBossWave: true }
  ];

  return { enemySpawns, pickups, animated, disposables, tellApple };
}
