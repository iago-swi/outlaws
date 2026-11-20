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
import {
  buildHollowRoom,
  addSolidBox,
  addAltar,
  addPewRow,
  addHearth,
  addBunk,
  addDesk
} from '../engine/buildings.js';
import { createPickupMesh } from './level1_west.js';

export const LEVEL3_META = {
  id: 'swiss',
  index: 2,
  themeClass: 'theme-swiss',
  act: 'ACT III • 1307',
  title: 'RÜTLI VALLEY',
  subtitle: "Tell's Arrow & The Uri Banner",
  heroName: 'WILHELM TELL (URI)',
  objective: 'Drive the Austrian Army from the Valley, Chapel & Watchtower',
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
  spawnPos: new THREE.Vector3(-4, 0, 50),
  spawnYaw: 0,
  cameraPreview: { center: new THREE.Vector3(-4, 6, -6), radius: 44, height: 15, speed: 0.12 }
};

export function buildLevel3(scene, collision, particles) {
  const disposables = [];
  const animated = [];
  const pickups = [];

  collision.bounds = { minX: -72, maxX: 46, minZ: -80, maxZ: 70 };

  // 1. Crisp Radiant Alpine Sky & Sunlight
  const sunDir = new THREE.Vector3(0.48, 0.52, -0.7).normalize();
  const sky = createSkyDome({
    topColor: 0x1656a8, midColor: 0x5da4e8, horizonColor: 0xd9f0ff,
    sunColor: 0xfffbe0, sunDirection: sunDir, cloudTint: 0xffffff, cloudDensity: 0.48
  });
  scene.add(sky.mesh);
  animated.push((t) => { sky.uniforms.uTime.value = t; });

  scene.fog = new THREE.FogExp2(0xc4dff2, 0.0046);
  scene.add(new THREE.HemisphereLight(0xdff2ff, 0x3b6331, 0.95));

  const sunLight = new THREE.DirectionalLight(0xfff5dc, 2.4);
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

  const alpineBounce = new THREE.DirectionalLight(0x8fd4ff, 0.5);
  alpineBounce.position.set(-55, 22, 40);
  scene.add(alpineBounce);

  // 2. Emerald Alpine Meadow & Cobble Road
  const meadowTex = getGroundTexture('alpine_meadow', 34, 34);
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(420, 420),
    new THREE.MeshStandardMaterial({ map: meadowTex.map, bumpMap: meadowTex.bumpMap, bumpScale: 0.2, roughness: 0.92 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  const cobbleTex = getGroundTexture('cobble', 3, 28);
  const road = new THREE.Mesh(
    new THREE.PlaneGeometry(6.8, 114),
    new THREE.MeshStandardMaterial({ map: cobbleTex.map, bumpMap: cobbleTex.bumpMap, bumpScale: 0.16, roughness: 0.88 })
  );
  road.rotation.x = -Math.PI / 2;
  road.position.set(-4, 0.04, 4);
  road.receiveShadow = true;
  scene.add(road);

  const alpineWood = getWoodPlanks('alpine', 2, 2);
  const castleStone = getStoneTexture('castle', 2, 2);
  const shingleTex = getRoofTileTexture('swiss', 4, 2);
  const fachwerkTex = getAlpineTimberWall(2, 1);

  const matTimber = new THREE.MeshStandardMaterial({ map: alpineWood.map, bumpMap: alpineWood.bumpMap, bumpScale: 0.12, roughness: 0.85 });
  const matDarkWood = new THREE.MeshStandardMaterial({ color: 0x362013, roughness: 0.86 });
  const matStone = new THREE.MeshStandardMaterial({ map: castleStone.map, bumpMap: castleStone.bumpMap, bumpScale: 0.22, roughness: 0.88 });
  const matRoof = new THREE.MeshStandardMaterial({ map: shingleTex.map, bumpMap: shingleTex.bumpMap, bumpScale: 0.16, roughness: 0.84 });
  const matFachwerk = new THREE.MeshStandardMaterial({ map: fachwerkTex, roughness: 0.82 });
  const matSnow = new THREE.MeshStandardMaterial({ color: 0xf4f9ff, roughness: 0.72 });
  const matCliff = new THREE.MeshStandardMaterial({ color: 0x676b70, roughness: 0.92 });
  const matPine1 = new THREE.MeshStandardMaterial({ color: 0x1f4d2b, roughness: 0.88 });
  const matPine2 = new THREE.MeshStandardMaterial({ color: 0x2b6336, roughness: 0.88 });
  const matFlowerRed = new THREE.MeshStandardMaterial({ color: 0xd92b2b, roughness: 0.7 });
  const matPlaster = new THREE.MeshStandardMaterial({ color: 0xede5d4, roughness: 0.82 });
  const matAustria = new THREE.MeshStandardMaterial({ map: createBannerTexture('austria'), side: THREE.DoubleSide, roughness: 0.65 });
  const matUri = new THREE.MeshStandardMaterial({ map: createBannerTexture('uri'), side: THREE.DoubleSide, roughness: 0.65 });
  const matSwiss = new THREE.MeshStandardMaterial({ map: createBannerTexture('swiss'), side: THREE.DoubleSide, roughness: 0.65 });

  // ---- LAKE LUCERNE (VIERWALDSTÄTTERSEE) ON EAST FLANK ----
  const lake = createWaterMesh(150, 260, {
    deepColor: 0x0b5878, shallowColor: 0x2ec4cc, foamColor: 0xebfcff,
    sunColor: 0xfffce0, sunDir, opacity: 0.9, waveScale: 0.16
  });
  lake.mesh.position.set(98, 0.08, 0);
  scene.add(lake.mesh);
  animated.push((t) => { lake.uniforms.uTime.value = t; });
  collision.addBox(36, 2.0, 0, 22, 4.0, 180, 'water');

  // Shoreline rocks + Pier + Rowboat
  for (let rz = -64; rz <= 60; rz += 8.0) {
    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(1.5, 1), matStone);
    rock.position.set(24.5 + Math.sin(rz * 0.14) * 1.8, 0.4, rz);
    rock.scale.set(1.3, 0.65, 1.2);
    scene.add(rock);
    collision.addBox(rock.position.x, 0.6, rz, 2.4, 1.2, 2.2, 'stone');
  }
  const pier = new THREE.Mesh(new THREE.BoxGeometry(10, 0.35, 3.6), matTimber);
  pier.position.set(28, 0.4, 18);
  scene.add(pier);
  const boat = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.65, 1.35), matTimber);
  boat.position.set(34, 0.25, 21);
  scene.add(boat);
  animated.push((t) => { boat.position.y = 0.28 + Math.sin(t * 2.2) * 0.1; });

  // ---- WATERFALL & MOUNTAIN STREAM + BRIDGE ----
  for (let i = 0; i < 6; i++) {
    const cz = -50 + i * 18;
    const h = 30 + (i % 3) * 8;
    const crag = new THREE.Mesh(new THREE.DodecahedronGeometry(15, 1), matCliff);
    crag.position.set(-84, h * 0.45, cz);
    crag.scale.set(1.1, h / 14, 1.45);
    scene.add(crag);
  }
  const wf1 = createWaterfallMesh(9.5, 32);
  wf1.mesh.position.set(-68.5, 15.5, -18);
  wf1.mesh.rotation.y = Math.PI / 2 - 0.25;
  scene.add(wf1.mesh);
  animated.push((t) => { wf1.uniforms.uTime.value = t; });
  particles.addMistEmitter(new THREE.Vector3(-64, 0.8, -18), 4.5);

  const stream = createWaterMesh(94, 6.0, {
    deepColor: 0x1b7996, shallowColor: 0x5cdce8, foamColor: 0xffffff,
    sunColor: 0xfffce0, sunDir, opacity: 0.88, waveScale: 0.08
  });
  stream.mesh.position.set(-22, 0.06, -8);
  scene.add(stream.mesh);
  animated.push((t) => { stream.uniforms.uTime.value = t * 1.5; });

  // Solid stream water colliders on both sides of the bridge (bridge spans x = -8..0)
  collision.addBox(-42, 0.8, -8, 66, 1.6, 5.4, 'water');
  collision.addBox(14, 0.8, -8, 26, 1.6, 5.4, 'water');

  // Alpine Wooden Bridge (walkable floor at 0.4m, solid railings)
  const bDeck = new THREE.Mesh(new THREE.BoxGeometry(8.4, 0.35, 9.6), matTimber);
  bDeck.position.set(-4, 0.24, -8);
  bDeck.receiveShadow = true;
  scene.add(bDeck);
  collision.addWalkable(-4, -8, 8.6, 10.0, 0.42);
  for (const bx of [-8.0, 0.0]) {
    addSolidBox(scene, collision, bx, 0.95, -8, 0.24, 1.3, 9.2, matDarkWood, 'wood');
  }

  // ---- BEARDED WALDSTÄTTEN COMRADES WITH HALBERDS & URI BULL FLAG ----
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

    for (const lx of [-0.17, 0.17]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.1, 0.84, 8), bootMat);
      leg.position.set(lx, 0.42, 0);
      g.add(leg);
    }
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.78, 0.36), tunicMat);
    torso.position.set(0, 1.18, 0);
    const sash = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.18, 0.38), goldMat);
    sash.position.set(0, 1.0, 0);
    const cape = new THREE.Mesh(new THREE.BoxGeometry(0.64, 0.95, 0.1), capeMat);
    cape.position.set(0, 1.05, -0.22);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 10), skinMat);
    head.position.set(0, 1.76, 0);
    const beard = new THREE.Mesh(new THREE.ConeGeometry(0.21, 0.38, 10), beardMat);
    beard.rotation.x = Math.PI;
    beard.position.set(0, 1.54, 0.11);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.25, 0.16, 12), capeMat);
    cap.position.set(0, 1.94, 0);
    g.add(torso, sash, cape, head, beard, cap);

    // Tall Swiss Halberd
    const hPole = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.04, 3.05, 8), matDarkWood);
    hPole.position.set(-0.46, 1.55, 0.35);
    const hSpike = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.55, 4), steelMat);
    hSpike.position.set(-0.46, 3.3, 0.35);
    const hAxe = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.44, 0.36), steelMat);
    hAxe.position.set(-0.46, 2.86, 0.52);
    g.add(hPole, hSpike, hAxe);

    if (withFlag) {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.055, 5.4, 8), matDarkWood);
      pole.position.set(0.48, 2.7, 0.42);
      const uriFlagGeo = new THREE.PlaneGeometry(1.75, 2.6, 8, 4);
      const uriFlag = new THREE.Mesh(uriFlagGeo, matUri);
      uriFlag.position.set(1.36, 4.05, 0.42);
      g.add(pole, uriFlag);
      const basePos = uriFlagGeo.attributes.position.array.slice();
      animated.push((t) => {
        const pos = uriFlagGeo.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          const dist = basePos[i * 3] + 0.875;
          pos.setZ(i, Math.sin(t * 4.5 + dist * 2.6) * 0.14 * dist);
        }
        pos.needsUpdate = true;
      });
    }
    scene.add(g);
    collision.addBox(x, 1.2, z, 1.2, 2.4, 1.2, 'wood');
  }
  addBeardedWaldstaetten(2.8, 43.5, -0.55, true);
  addBeardedWaldstaetten(-9.2, 43.2, 0.45, false);

  // Tell's Red Apple Easter Egg
  const appleStake = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 1.75, 8), matDarkWood);
  appleStake.position.set(5.5, 0.875, 38);
  scene.add(appleStake);
  collision.addBox(5.5, 0.88, 38, 0.36, 1.75, 0.36, 'wood');
  const tellApple = new THREE.Mesh(
    new THREE.SphereGeometry(0.24, 12, 10),
    new THREE.MeshStandardMaterial({ color: 0xd92121, roughness: 0.3, emissive: 0x3a0505, emissiveIntensity: 0.35 })
  );
  tellApple.position.set(5.5, 1.92, 38);
  tellApple.userData.isTellApple = true;
  scene.add(tellApple);

  // ---- 1. ENTERABLE SWISS CHALETS (Open stone ground floor + overhanging timber upper story!) ----
  function buildEnterableChalet(cx, cz, w, d, doorSide) {
    const opts = {
      cx, cz, w, d, h: 3.6, floorY: 0.18,
      wallMat: matStone, floorMat: matTimber, roofMat: matRoof, roofStyle: 'none',
      interiorLight: { color: 0xffc478, intensity: 1.5, distance: 12 }
    };
    opts[doorSide] = [{ type: 'door', offset: 0, width: 2.3, height: 2.8 }];
    const opp = doorSide === 'east' ? 'west' : doorSide === 'west' ? 'east' : 'north';
    opts[opp] = [{ type: 'window', offset: 0, width: 1.8 }];
    const room = buildHollowRoom(scene, collision, opts);

    // Upper Fachwerk timber story + crimson geranium balcony + overhanging shingle roof
    const upper = new THREE.Mesh(new THREE.BoxGeometry(w + 0.6, 3.0, d + 0.6), matFachwerk);
    upper.position.set(cx, room.roofY + 1.5, cz);
    upper.castShadow = true;
    const roof = new THREE.Mesh(new THREE.ConeGeometry(Math.max(w, d) * 0.88, 2.8, 4), matRoof);
    roof.rotation.y = Math.PI / 4;
    roof.position.set(cx, room.roofY + 4.3, cz);
    const flowers = new THREE.Mesh(new THREE.BoxGeometry(w * 0.6, 0.36, 0.4), matFlowerRed);
    flowers.position.set(cx + (doorSide === 'east' ? w * 0.5 + 0.5 : doorSide === 'west' ? -(w * 0.5 + 0.5) : 0), room.roofY + 0.5, cz);
    scene.add(upper, roof, flowers);
    collision.addBox(cx, room.roofY + 1.6, cz, w + 0.6, 3.2, d + 0.6, 'wood');
    return room;
  }

  const ch1 = buildEnterableChalet(-22, 22, 10, 9, 'east');
  addHearth(scene, collision, -25.2, ch1.floorY, 22, 0.85);
  addBunk(scene, collision, -23.5, ch1.floorY, 18.6, false, matDarkWood, 0x8f2424);

  const ch2 = buildEnterableChalet(11, 20, 9.5, 8.5, 'west');
  addDesk(scene, collision, 13.8, ch2.floorY, 20, 1.5, 0.85, matTimber, 1);

  const ch3 = buildEnterableChalet(-24, 4, 10, 9, 'east');
  addHearth(scene, collision, -27.2, ch3.floorY, 4, 0.85);

  // ---- 2. ENTERABLE ALPINE CHAPEL (East side north of stream — altar & pews!) ----
  const chapel = buildHollowRoom(scene, collision, {
    cx: 11, cz: -22, w: 10.5, d: 13.5, h: 4.6, floorY: 0.2,
    wallMat: matPlaster, floorMat: matStone, roofMat: matRoof, roofStyle: 'gable',
    west: [
      { type: 'door', offset: 0, width: 2.3, height: 3.0 },
      { type: 'window', offset: -4.0, width: 1.5 },
      { type: 'window', offset: 4.0, width: 1.5 }
    ],
    south: [{ type: 'door', offset: 0, width: 2.2, height: 2.9 }],
    interiorLight: { color: 0xffcf88, intensity: 1.8, distance: 15 }
  });
  // Chapel Steeple Belfry on roof
  const belfry = new THREE.Mesh(new THREE.BoxGeometry(2.6, 4.2, 2.6), matPlaster);
  belfry.position.set(11, chapel.roofY + 2.4, -26.5);
  const spire = new THREE.Mesh(new THREE.ConeGeometry(2.1, 4.8, 4), matRoof);
  spire.rotation.y = Math.PI / 4;
  spire.position.set(11, chapel.roofY + 6.9, -26.5);
  scene.add(belfry, spire);
  // Chapel interior: Altar + 2 rows of wooden pews (clear aisle!)
  addAltar(scene, collision, 11, chapel.floorY, -27.2, 2.8, 1.0, matStone, 0xa81c1c);
  addPewRow(scene, collision, 13.2, chapel.floorY, -23.0, 3.0, matDarkWood);
  addPewRow(scene, collision, 13.2, chapel.floorY, -20.5, 3.0, matDarkWood);

  // ---- 3. ENTERABLE HABSBURG STONE WATCHTOWER (North End!) ----
  const tower = buildHollowRoom(scene, collision, {
    cx: -4, cz: -40, w: 11.5, d: 11.5, h: 4.8, floorY: 0.22,
    wallMat: matStone, floorMat: matStone, roofMat: matStone, roofStyle: 'none',
    south: [{ type: 'door', offset: 0, width: 2.8, height: 3.2 }],
    west: [{ type: 'window', offset: 0, width: 1.6 }],
    east: [{ type: 'window', offset: 0, width: 1.6 }],
    interiorLight: { color: 0xffaa55, intensity: 1.9, distance: 14 }
  });
  // Upper stone keep shaft + battlements + Austrian banners
  const keepUpper = new THREE.Mesh(new THREE.BoxGeometry(11.5, 9.2, 11.5), matStone);
  keepUpper.position.set(-4, tower.roofY + 4.6, -40);
  keepUpper.castShadow = true;
  scene.add(keepUpper);
  collision.addBox(-4, tower.roofY + 4.6, -40, 11.5, 9.2, 11.5, 'stone');
  for (const bx of [-7.2, -0.8]) {
    const ban = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 5.2), matAustria);
    ban.position.set(bx, 9.4, -34.0);
    scene.add(ban);
  }
  addDesk(scene, collision, -7.2, tower.floorY, -43.0, 1.8, 0.9, matDarkWood, 1);

  // ---- 4. OUTLYING ALP HUT ABOVE THE VILLAGE (North-West!) ----
  const alpHut = buildHollowRoom(scene, collision, {
    cx: -44, cz: -48, w: 9.5, d: 8.5, h: 3.6, floorY: 0.2,
    wallMat: matTimber, floorMat: matTimber, roofMat: matRoof, roofStyle: 'gable',
    east: [{ type: 'door', offset: 0, width: 2.2, height: 2.7 }],
    south: [{ type: 'window', offset: 0, width: 1.7 }],
    interiorLight: { color: 0xffb866, intensity: 1.4, distance: 11 }
  });
  addHearth(scene, collision, -47.2, alpHut.floorY, -48, 0.85);
  addBunk(scene, collision, -45.5, alpHut.floorY, -51.0, false, matDarkWood, 0x556b44);

  // Stone cover walls & Alpine Pine Trees (ALL solid!)
  for (const [sx, sz, sw, sh, sd] of [
    [-11, 14, 5.2, 1.35, 1.1], [4, 10, 5.0, 1.35, 1.1],
    [-12, -20, 5.2, 1.4, 1.1], [1, -26, 5.2, 1.4, 1.1], [-26, -34, 5.0, 1.35, 1.1]
  ]) addSolidBox(scene, collision, sx, sh * 0.5, sz, sw, sh, sd, matStone, 'stone');

  function addPineTree(tx, tz, scale = 1) {
    const g = new THREE.Group();
    g.position.set(tx, 0, tz);
    const tr = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.36, 2.6, 7), matDarkWood);
    tr.position.y = 1.3;
    g.add(tr);
    for (const [py, r, h, m] of [[3.4, 2.4, 3.2, matPine1], [5.4, 1.85, 2.8, matPine2], [7.2, 1.25, 2.2, matPine1]]) {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(r, h, 8), m);
      cone.position.y = py;
      g.add(cone);
    }
    g.scale.setScalar(scale);
    scene.add(g);
    collision.addBox(tx, 2.0, tz, 1.1 * scale, 4.0 * scale, 1.1 * scale, 'wood');
  }
  for (const [px, pz, sc] of [
    [-36, 36, 1.25], [-42, 18, 1.35], [-36, -24, 1.2], [-30, -38, 1.3], [-56, -38, 1.3],
    [16, 36, 1.15], [17, 6, 1.1], [16, -42, 1.3], [-18, -32, 1.2], [-28, 48, 1.2], [10, 48, 1.15]
  ]) addPineTree(px, pz, sc);

  // Towering Snow-Capped Alps Ring
  for (const [px, pz, r, h] of [
    [-125, -165, 80, 98], [-20, -180, 92, 122], [80, -165, 84, 108],
    [175, -90, 76, 98], [185, 25, 86, 112], [160, 125, 80, 92],
    [60, 170, 84, 98], [-50, 175, 80, 92], [-155, 115, 82, 98], [-165, -25, 86, 108]
  ]) {
    const mtn = new THREE.Mesh(new THREE.ConeGeometry(r, h, 7), matCliff);
    mtn.position.set(px, h * 0.45, pz);
    const snowCap = new THREE.Mesh(new THREE.ConeGeometry(r * 0.56, h * 0.52, 7), matSnow);
    snowCap.position.set(px, h * 0.72, pz);
    scene.add(mtn, snowCap);
  }

  particles.initAmbient('alpine', collision.bounds);

  // ---- PICKUPS ----
  const pickupDefs = [
    { type: 'health', pos: new THREE.Vector3(-21.5, 0.9, 22),  label: 'CHALET CHEESE & CIDER (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(11.0, 0.9, -22),  label: 'CHAPEL TONIC (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(-43.5, 0.9, -48), label: 'ALP HUT RATIONS (+35 HP)' },
    { type: 'ammo',   pos: new THREE.Vector3(11.0, 0.9, 20),   label: 'STEEL QUARREL BOLTS' },
    { type: 'ammo',   pos: new THREE.Vector3(-4.0, 0.9, -40),  label: 'WATCHTOWER BOLT CRATE' },
    { type: 'health', pos: new THREE.Vector3(-23.0, 0.9, 4),   label: 'MOUNTAIN HERB TONIC (+35 HP)' }
  ];
  for (const pd of pickupDefs) {
    const mesh = createPickupMesh(pd.type);
    mesh.position.copy(pd.pos);
    scene.add(mesh);
    pickups.push({ ...pd, mesh, collected: false });
  }

  // ---- 22 ENEMIES (Village, Chalets, Bridge, Chapel, Alp Hut, Watchtower, Boss Capt. von Gessler) ----
  const enemySpawns = [
    { type: 'halberdier',  pos: new THREE.Vector3(-10, 0, 30) },
    { type: 'arquebusier', pos: new THREE.Vector3(6, 0, 26) },
    { type: 'halberdier',  pos: new THREE.Vector3(-21, 0.18, 22) }, // Inside Chalet 1
    { type: 'arquebusier', pos: new THREE.Vector3(11, 0.18, 20) },  // Inside Chalet 2
    { type: 'halberdier',  pos: new THREE.Vector3(-4, 0, 12) },
    { type: 'arquebusier', pos: new THREE.Vector3(-15, 0, 4) },
    { type: 'halberdier',  pos: new THREE.Vector3(-23, 0.18, 4) },  // Inside Chalet 3
    { type: 'arquebusier', pos: new THREE.Vector3(8, 0, 2) },
    { type: 'halberdier',  pos: new THREE.Vector3(-4, 0.42, -8) },  // On Alpine Bridge
    { type: 'arquebusier', pos: new THREE.Vector3(-14, 0, -18) },
    { type: 'halberdier',  pos: new THREE.Vector3(2, 0, -18) },
    { type: 'arquebusier', pos: new THREE.Vector3(10, 0.2, -22) },  // Inside Chapel
    { type: 'halberdier',  pos: new THREE.Vector3(11, 0.2, -18) },  // Inside Chapel
    { type: 'arquebusier', pos: new THREE.Vector3(-24, 0, -30) },
    { type: 'halberdier',  pos: new THREE.Vector3(-34, 0, -40) },
    { type: 'arquebusier', pos: new THREE.Vector3(-43, 0.2, -48) }, // Inside Alp Hut
    { type: 'halberdier',  pos: new THREE.Vector3(-12, 0, -32) },
    { type: 'arquebusier', pos: new THREE.Vector3(4, 0, -32) },
    { type: 'halberdier',  pos: new THREE.Vector3(-4, 0.22, -39) }, // Inside Watchtower
    { type: 'arquebusier', pos: new THREE.Vector3(-1, 0.22, -42) }, // Inside Watchtower
    { type: 'halberdier',  pos: new THREE.Vector3(-4, 0, -28) },
    { type: 'boss_swiss',  pos: new THREE.Vector3(-4, 0, -31), isBossWave: true }
  ];

  const enterableBuildings = [
    { name: 'Alpine Chapel', inside: new THREE.Vector3(10.5, 0.2, -22), outside: new THREE.Vector3(3.5, 0, -22) },
    { name: 'Habsburg Watchtower', inside: new THREE.Vector3(-4, 0.22, -40), outside: new THREE.Vector3(-4, 0, -32) },
    { name: 'West Chalet', inside: new THREE.Vector3(-22, 0.18, 22), outside: new THREE.Vector3(-14.5, 0, 22) },
    { name: 'Alp Hut', inside: new THREE.Vector3(-43.5, 0.2, -48), outside: new THREE.Vector3(-37, 0, -48) }
  ];

  return { enemySpawns, pickups, animated, disposables, tellApple, enterableBuildings };
}
