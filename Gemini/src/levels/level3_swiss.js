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
  buildLadder,
  buildRaisedHide,
  buildCrawlDen,
  addSolidBox,
  addAltar,
  addPewRow,
  addHearth,
  addBunk,
  addDesk,
  addCrawlPassage,
  addTableAndChairs
} from '../engine/buildings.js';
import { createPickupMesh } from './level1_west.js';
import { spawnBystanders } from '../entities/bystanders.js';

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
  cameraPreview: { center: new THREE.Vector3(-4, 6, -4), radius: 28, height: 21, speed: 0.11 }
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

  // ---- UNIQUE FEATURE: WALK-BEHIND WATERFALL & STONE GROTTO (West Valley Cliff, x = -56, z = 10!) ----
  {
    const gx = -56, gz = 10;
    const ledgeY = 0.72;
    // Solid cliff back wall behind the grotto (x = -62.5) + flanking rock pillars
    addSolidBox(scene, collision, -63.0, 7.5, gz, 4.5, 15.0, 18.0, matCliff, 'stone');
    addSolidBox(scene, collision, -57.0, 5.5, gz - 10.2, 7.5, 11.0, 3.0, matCliff, 'stone');
    addSolidBox(scene, collision, -57.0, 5.5, gz + 10.2, 7.5, 11.0, 3.0, matCliff, 'stone');
    // Dramatic jutting rock overhang high above head height (y = 5.6..14.8, extending out to x = -50.8!)
    addSolidBox(scene, collision, -56.4, 10.2, gz, 11.2, 9.2, 16.5, matCliff, 'stone');
    // Dry stone grotto floor ledge behind the falling water (x = -60..-53.5, z = 3.5..16.5)
    const grottoFloor = new THREE.Mesh(new THREE.BoxGeometry(6.8, ledgeY, 13.4), matStone);
    grottoFloor.position.set(-56.8, ledgeY * 0.5, gz);
    grottoFloor.receiveShadow = true;
    scene.add(grottoFloor);
    collision.addWalkable(-56.8, gz, 7.0, 13.6, ledgeY);
    // Gentle stone steps on BOTH north (z = 2.0) and south (z = 18.0) sides leading into the grotto!
    for (const dirZ of [-1, 1]) {
      const s1z = gz + dirZ * 7.4;
      const s2z = gz + dirZ * 8.6;
      const st1 = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.48, 1.3), matStone);
      st1.position.set(-56.4, 0.24, s1z);
      const st2 = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.24, 1.3), matStone);
      st2.position.set(-56.4, 0.12, s2z);
      scene.add(st1, st2);
      collision.addWalkable(-56.4, s1z, 5.5, 1.5, 0.48);
      collision.addWalkable(-56.4, s2z, 5.5, 1.5, 0.24);
    }
    // Grotto warm ambient glow so the stone ledge & cavern read clearly
    const grottoLight = new THREE.PointLight(0x9ce8ff, 1.8, 16);
    grottoLight.position.set(-56.8, 3.6, gz);
    scene.add(grottoLight);

    // Free-falling HALF-TRANSPARENT waterfall leaping out from the overhang (x = -51.4) into the plunge pool!
    const grottoFalls = createWaterfallMesh(11.6, 13.5, 0.52);
    grottoFalls.mesh.position.set(-51.4, 6.75, gz);
    grottoFalls.mesh.rotation.y = Math.PI / 2;
    scene.add(grottoFalls.mesh);
    animated.push((t) => { grottoFalls.uniforms.uTime.value = t * 1.15; });
    particles.addMistEmitter(new THREE.Vector3(-50.5, 0.7, gz), 3.4);

    // Plunge pool right in front of the falling water (x = -51.5..-44.5)
    const pool = createWaterMesh(8.0, 13.0, {
      deepColor: 0x126685, shallowColor: 0x52e0eb, foamColor: 0xffffff,
      sunColor: 0xfffce0, sunDir, opacity: 0.86, waveScale: 0.12
    });
    pool.mesh.position.set(-48.0, 0.08, gz);
    scene.add(pool.mesh);
    animated.push((t) => { pool.uniforms.uTime.value = t * 1.6; });
    collision.addBox(-48.2, 0.8, gz, 6.4, 1.6, 11.4, 'water');
  }

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

  // ---- 5. ENTERABLE SWISS BARNS ON STONE STILTS (Speicher / Gadä — hay, cheese wheels, tools!) ----
  const matHay = new THREE.MeshStandardMaterial({ color: 0xd1a847, roughness: 0.94 });
  const matCheese = new THREE.MeshStandardMaterial({ color: 0xeec448, roughness: 0.62 });
  const matIron = new THREE.MeshStandardMaterial({ color: 0x3b4046, metalness: 0.72, roughness: 0.38 });

  function buildStiltBarn(cx, cz, w, d, doorSide, content) {
    const stiltH = 0.88;
    // Stone stilts with classic flat stone mouse-guard caps ("Mäuseplatten") underneath the barn!
    for (const sx of [-w * 0.42, 0, w * 0.42]) {
      for (const sz of [-d * 0.42, d * 0.42]) {
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.3, stiltH, 8), matStone);
        post.position.set(cx + sx, stiltH * 0.5, cz + sz);
        const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.12, 10), matStone);
        cap.position.set(cx + sx, stiltH - 0.06, cz + sz);
        scene.add(post, cap);
      }
    }
    const opts = {
      cx, cz, w, d, h: 3.5, floorY: stiltH,
      wallMat: matTimber, floorMat: matTimber, roofMat: matRoof, roofStyle: 'gable',
      stepMat: matTimber,
      raisedFloorThickness: 0.28,
      interiorLight: { color: 0xffc67a, intensity: 1.4, distance: 11 }
    };
    opts[doorSide] = [{ type: 'door', offset: 0, width: 2.3, height: 2.7 }];
    const opp = doorSide === 'east' ? 'west' : doorSide === 'west' ? 'east' : 'north';
    opts[opp] = [{ type: 'window', offset: 0, width: 1.5 }];
    const room = buildHollowRoom(scene, collision, opts);

    const backX = doorSide === 'east' ? cx - w * 0.3 : doorSide === 'west' ? cx + w * 0.3 : cx;
    if (content === 'hay') {
      addSolidBox(scene, collision, backX, room.floorY + 0.55, cz - 1.6, 1.8, 1.1, 1.4, matHay, 'wood');
      addSolidBox(scene, collision, backX, room.floorY + 0.55, cz + 1.6, 1.8, 1.1, 1.4, matHay, 'wood');
      const forkPole = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.7, 6), matDarkWood);
      forkPole.position.set(backX + (doorSide === 'east' ? 1.1 : -1.1), room.floorY + 0.9, cz + 1.6);
      forkPole.rotation.z = 0.25;
      scene.add(forkPole);
    } else if (content === 'cheese') {
      // Wooden curing racks holding golden Alpine cheese wheels!
      addSolidBox(scene, collision, backX, room.floorY + 1.0, cz, 1.1, 2.0, d - 2.6, matDarkWood, 'wood');
      for (let r = 0; r < 2; r++) {
        for (let c = -2; c <= 2; c++) {
          const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.22, 14), matCheese);
          wheel.position.set(backX + (doorSide === 'east' ? 0.45 : -0.45), room.floorY + 0.72 + r * 0.75, cz + c * 0.92);
          scene.add(wheel);
        }
      }
    } else if (content === 'tools') {
      // Workbench, barrels & farm tools
      addDesk(scene, collision, backX, room.floorY, cz - 1.2, 1.6, 0.85, matDarkWood, 1);
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.42, 1.05, 10), matTimber);
      barrel.position.set(backX, room.floorY + 0.52, cz + 1.8);
      scene.add(barrel);
      collision.addBox(backX, room.floorY + 0.52, cz + 1.8, 0.95, 1.05, 0.95, 'wood');
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.55, 0.24), matIron);
      blade.position.set(backX + (doorSide === 'east' ? 0.5 : -0.5), room.floorY + 1.1, cz - 1.2);
      scene.add(blade);
    }
    return room;
  }

  buildStiltBarn(-38, 28, 8.8, 7.8, 'east', 'hay');
  buildStiltBarn(-42, -24, 8.8, 7.8, 'east', 'cheese');
  buildStiltBarn(12, -40, 8.8, 7.8, 'west', 'tools');

  // ---- 6. DRIVE-THROUGH HAY BARN (Wide open doors on BOTH ends, stacked hay bales & wooden farm cart!) ----
  const driveBarn = buildHollowRoom(scene, collision, {
    cx: -26, cz: 40, w: 12.0, d: 10.5, h: 4.5, floorY: 0.14,
    wallMat: matTimber, floorMat: matTimber, roofMat: matRoof, roofStyle: 'gable',
    east: [{ type: 'door', offset: 0, width: 3.6, height: 3.4 }],
    west: [{ type: 'door', offset: 0, width: 3.6, height: 3.4 }],
    interiorLight: { color: 0xffc670, intensity: 1.5, distance: 15 }
  });
  // Stacked hay bales along north & south bays (keeping wide center drive-through lane open!)
  addSolidBox(scene, collision, -28.5, driveBarn.floorY + 0.65, 36.6, 2.8, 1.3, 1.8, matHay, 'wood');
  addSolidBox(scene, collision, -23.5, driveBarn.floorY + 0.65, 36.6, 2.4, 1.3, 1.8, matHay, 'wood');
  addSolidBox(scene, collision, -28.2, driveBarn.floorY + 0.65, 43.4, 2.6, 1.3, 1.8, matHay, 'wood');
  // Wooden farm cart parked inside the south bay
  {
    const cart = new THREE.Group();
    cart.position.set(-23.2, driveBarn.floorY, 43.2);
    const bed = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.65, 1.55), matDarkWood);
    bed.position.y = 0.85;
    const hayLoad = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.55, 1.25), matHay);
    hayLoad.position.y = 1.35;
    cart.add(bed, hayLoad);
    for (const [wx, wz] of [[-0.9, -0.82], [0.9, -0.82], [-0.9, 0.82], [0.9, 0.82]]) {
      const wh = new THREE.Mesh(new THREE.TorusGeometry(0.48, 0.06, 6, 12), matDarkWood);
      wh.position.set(wx, 0.5, wz);
      cart.add(wh);
    }
    scene.add(cart);
    collision.addBox(-23.2, driveBarn.floorY + 0.85, 43.2, 3.0, 1.7, 1.85, 'wood');
  }

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
    [-48, 38, 1.25], [-36, 12, 1.2], [-34, -28, 1.2], [-56, -38, 1.3],
    [16, 36, 1.15], [17, 6, 1.1], [19, -46, 1.3], [-16, -24, 1.2], [-18, 49, 1.2], [10, 48, 1.15]
  ]) addPineTree(px, pz, sc);

  // ---- GREAT NATURAL ALPINE BOULDER (~16m x 14m x 7.5m, leaning ladder & dark iron summit cross!) ----
  const bX = -26, bZ = -46, bTopY = 7.5;
  const boulderSummit = new THREE.Vector3(bX, bTopY, bZ);
  let boulderLadder = null;
  {
    const rockDark = new THREE.MeshStandardMaterial({ color: 0x565b61, roughness: 0.94 });
    const rockMid = new THREE.MeshStandardMaterial({ color: 0x6f757c, roughness: 0.92 });
    const rockLight = new THREE.MeshStandardMaterial({ color: 0x858b92, roughness: 0.90 });
    const grassTopMat = new THREE.MeshStandardMaterial({ color: 0x3f7533, roughness: 0.92 });
    const mossMat = new THREE.MeshStandardMaterial({ color: 0x4b6e35, roughness: 0.95 });
    const ironCrossMat = new THREE.MeshStandardMaterial({ color: 0x202326, metalness: 0.78, roughness: 0.36 });

    // Organic irregular sculpted boulder body from overlapping rounded dodecahedron lobes
    const lobes = [
      [0, 3.5, 0, 7.2, 4.0, 6.2, rockMid],
      [-3.2, 3.0, -2.0, 5.4, 3.8, 4.8, rockDark],
      [3.0, 2.8, 1.8, 5.2, 3.6, 4.6, rockLight],
      [2.8, 3.2, -2.2, 4.9, 3.8, 4.5, rockDark],
      [-2.8, 2.9, 2.4, 5.0, 3.5, 4.6, rockLight],
      [0.4, 5.2, 0.2, 6.2, 2.4, 5.2, rockMid]
    ];
    for (const [ox, oy, oz, rx, ry, rz, m] of lobes) {
      const mesh = new THREE.Mesh(new THREE.DodecahedronGeometry(1.0, 2), m);
      mesh.scale.set(rx, ry, rz);
      mesh.position.set(bX + ox, oy, bZ + oz);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);
    }
    // Flat grassy summit cap & grassy ledges + moss patches on leaning faces
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(5.6, 6.4, 0.45, 12), grassTopMat);
    cap.scale.set(1.08, 1.0, 0.92);
    cap.position.set(bX, bTopY - 0.18, bZ);
    cap.receiveShadow = true;
    scene.add(cap);
    for (const [mx, my, mz, s] of [[-5.6, 4.2, -1.2, 1.8], [4.8, 3.6, 3.4, 1.5], [-2.0, 4.8, 5.0, 1.7], [3.6, 4.4, -4.6, 1.6]]) {
      const patch = new THREE.Mesh(new THREE.DodecahedronGeometry(s, 1), mossMat);
      patch.scale.set(1.2, 0.35, 1.1);
      patch.position.set(bX + mx, my, bZ + mz);
      scene.add(patch);
    }
    // Fallen rocks & grass tussocks around the boulder's foot
    for (const [fx, fz, sc] of [[-8.6, -4.0, 1.3], [-9.2, 2.4, 1.1], [6.5, -6.2, 1.2], [7.2, 5.4, 1.15], [-3.2, 7.6, 1.25]]) {
      const r = new THREE.Mesh(new THREE.DodecahedronGeometry(sc, 1), rockDark);
      r.scale.set(1.2, 0.68, 1.0);
      r.position.set(bX + fx, sc * 0.45, bZ + fz);
      scene.add(r);
      collision.addBox(bX + fx, sc * 0.45, bZ + fz, sc * 1.9, sc * 1.1, sc * 1.6, 'stone');
      const tuss = new THREE.Mesh(new THREE.ConeGeometry(0.55, 0.7, 6), grassTopMat);
      tuss.position.set(bX + fx + 0.9, 0.35, bZ + fz + 0.6);
      scene.add(tuss);
    }
    // Solid core blocking body below summit + flat walkable grassy summit (navIgnore: true -> reached by ladder!)
    collision.addBox(bX, (bTopY - 0.35) * 0.5, bZ, 12.6, bTopY - 0.35, 10.8, 'stone');
    collision.addWalkable(bX, bZ, 11.4, 9.6, bTopY, true);

    // Three natural cover stones on the summit
    for (const [cx, cz] of [[2.8, -1.8], [3.0, 2.0], [-1.4, 2.8]]) {
      const st = new THREE.Mesh(new THREE.DodecahedronGeometry(0.75, 1), rockMid);
      st.scale.set(1.0, 0.8, 1.2);
      st.position.set(bX + cx, bTopY + 0.52, bZ + cz);
      scene.add(st);
      collision.addBox(bX + cx, bTopY + 0.52, bZ + cz, 1.2, 1.05, 1.4, 'stone');
    }

    // Slim 3.5m Dark Iron Summit Cross with slightly flared ends set in a rough stone block (no inscription!)
    const crossX = bX - 3.4, crossZ = bZ - 2.6;
    const cPlinth = new THREE.Mesh(new THREE.DodecahedronGeometry(0.68, 1), rockDark);
    cPlinth.scale.set(1.1, 0.75, 1.1);
    cPlinth.position.set(crossX, bTopY + 0.35, crossZ);
    const cShaft = new THREE.Mesh(new THREE.BoxGeometry(0.11, 3.5, 0.11), ironCrossMat);
    cShaft.position.set(crossX, bTopY + 2.15, crossZ);
    const cArm = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.11, 0.11), ironCrossMat);
    cArm.position.set(crossX, bTopY + 3.02, crossZ);
    // Slightly flared ends on shaft top & both arms
    const flTop = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.18, 0.14), ironCrossMat);
    flTop.position.set(crossX, bTopY + 3.85, crossZ);
    const flL = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.22, 0.14), ironCrossMat);
    flL.position.set(crossX - 0.78, bTopY + 3.02, crossZ);
    const flR = flL.clone();
    flR.position.x = crossX + 0.78;
    scene.add(cPlinth, cShaft, cArm, flTop, flL, flR);
    collision.addBox(crossX, bTopY + 1.4, crossZ, 0.9, 2.8, 0.9, 'solid');

    // Plain wooden LEANING LADDER standing 1.5m out at its foot on the east flank and touching the summit rim!
    boulderLadder = buildLadder(scene, collision, {
      x: bX + 7.2, z: bZ, bottomY: 0, topY: bTopY,
      normalX: 1, normalZ: 0, leanOffset: 1.5, topExitDist: 0.78, mat: matTimber
    });
  }
  const hunterSeat = buildRaisedHide(scene, collision, {
    cx: 8.5, cz: 42, deckY: 2.25, w: 4.0, d: 4.0, openSide: 'south',
    wallMat: matTimber, floorMat: matTimber, postMat: matDarkWood, jumpMat: matTimber
  });
  const swissDen = buildCrawlDen(scene, collision, {
    cx: 15, cz: 8, w: 5.2, d: 4.8, doorSide: 'west',
    wallMat: matStone, floorMat: matTimber, roofMat: matRoof
  });

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

  // ---- PICKUPS (including Waterfall Grotto, Stilt Barns & Drive-Through Barn!) ----
  const pickupDefs = [
    { type: 'health', pos: new THREE.Vector3(-21.5, 0.9, 22),  label: 'CHALET CHEESE & CIDER (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(11.0, 0.9, -22),  label: 'CHAPEL TONIC (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(-43.5, 0.9, -48), label: 'ALP HUT RATIONS (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(-56.8, 1.45, 12), label: 'GROTTO SPRING TONIC (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(-37.0, 1.6, 28),  label: 'HAY BARN CIDER (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(11.0, 1.6, -40),  label: 'TOOL BARN TONIC (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(-26.0, 0.9, 40),  label: 'HAY WAGON RATIONS (+35 HP)' },
    { type: 'ammo',   pos: new THREE.Vector3(11.0, 0.9, 20),   label: 'STEEL QUARREL BOLTS' },
    { type: 'ammo',   pos: new THREE.Vector3(-4.0, 0.9, -40),  label: 'WATCHTOWER BOLT CRATE' },
    { type: 'health', pos: new THREE.Vector3(-23.0, 0.9, 4),   label: 'MOUNTAIN HERB TONIC (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(bX + 1.4, bTopY + 0.85, bZ - 1.2), label: 'SUMMIT CROSS TONIC (+35 HP)', onHighPerch: true },
    { type: 'health', pos: new THREE.Vector3(swissDen.insidePos.x, swissDen.floorY + 0.55, swissDen.insidePos.z), label: 'ROOT CELLAR CIDER (+35 HP)', inDen: true }
  ];
  for (const pd of pickupDefs) {
    const mesh = createPickupMesh(pd.type);
    mesh.position.copy(pd.pos);
    scene.add(mesh);
    pickups.push({ ...pd, mesh, collected: false });
  }

  // ---- 27 ENEMIES (Village, Chalets, Stilt Barns, Drive-Through Barn, Waterfall Grotto, Bridge, Chapel, Alp Hut, Watchtower, Boss) ----
  const enemySpawns = [
    { type: 'halberdier',  pos: new THREE.Vector3(-10, 0, 30) },
    { type: 'arquebusier', pos: new THREE.Vector3(6, 0, 26) },
    { type: 'halberdier',  pos: new THREE.Vector3(-25.5, 0.14, 40) }, // Inside Drive-Through Hay Barn
    { type: 'arquebusier', pos: new THREE.Vector3(-36.5, 0.88, 28) }, // Inside Hay Stilt Barn
    { type: 'halberdier',  pos: new THREE.Vector3(-21, 0.18, 22) },   // Inside Chalet 1
    { type: 'arquebusier', pos: new THREE.Vector3(11, 0.18, 20) },    // Inside Chalet 2
    { type: 'halberdier',  pos: new THREE.Vector3(-4, 0, 12) },
    { type: 'arquebusier', pos: new THREE.Vector3(-15, 0, 4) },
    { type: 'halberdier',  pos: new THREE.Vector3(-23, 0.18, 4) },    // Inside Chalet 3
    { type: 'halberdier',  pos: new THREE.Vector3(-56.8, 0.72, 8.8) }, // Inside Waterfall Grotto behind falling water!
    { type: 'arquebusier', pos: new THREE.Vector3(8, 0, 2) },
    { type: 'halberdier',  pos: new THREE.Vector3(-4, 0.42, -8) },    // On Alpine Bridge
    { type: 'arquebusier', pos: new THREE.Vector3(-14, 0, -18) },
    { type: 'halberdier',  pos: new THREE.Vector3(2, 0, -18) },
    { type: 'arquebusier', pos: new THREE.Vector3(-40.5, 0.88, -24) }, // Inside Cheese Stilt Barn
    { type: 'arquebusier', pos: new THREE.Vector3(10, 0.2, -22) },     // Inside Chapel
    { type: 'halberdier',  pos: new THREE.Vector3(11, 0.2, -18) },     // Inside Chapel
    { type: 'halberdier',  pos: new THREE.Vector3(10.5, 0.88, -40) },  // Inside Tools Stilt Barn
    { type: 'arquebusier', pos: new THREE.Vector3(-24, 0, -30) },
    { type: 'halberdier',  pos: new THREE.Vector3(-34, 0, -40) },
    { type: 'arquebusier', pos: new THREE.Vector3(-43, 0.2, -48) },    // Inside Alp Hut
    { type: 'halberdier',  pos: new THREE.Vector3(-12, 0, -32) },
    { type: 'arquebusier', pos: new THREE.Vector3(4, 0, -32) },
    { type: 'halberdier',  pos: new THREE.Vector3(-4, 0.22, -39) },    // Inside Watchtower
    { type: 'arquebusier', pos: new THREE.Vector3(-1, 0.22, -42) },    // Inside Watchtower
    { type: 'halberdier',  pos: new THREE.Vector3(-4, 0, -28) },
    // Arquebusier marksman holding the Great Natural Boulder summit!
    { type: 'arquebusier', pos: boulderSummit.clone(), options: { holdPost: true } },
    { type: 'boss_swiss',  pos: new THREE.Vector3(-4, 0, -31), isBossWave: true }
  ];

  const enterableBuildings = [
    { name: 'Waterfall Grotto', inside: new THREE.Vector3(-56.8, 0.72, 10), outside: new THREE.Vector3(-56.4, 0, 20.5) },
    { name: 'Drive-Through Hay Barn', inside: new THREE.Vector3(-26, 0.14, 40), outside: new THREE.Vector3(-18, 0, 40) },
    { name: 'Hay Stilt Barn', inside: new THREE.Vector3(-37, 0.88, 28), outside: new THREE.Vector3(-31, 0, 28) },
    { name: 'Cheese Stilt Barn', inside: new THREE.Vector3(-41, 0.88, -24), outside: new THREE.Vector3(-35, 0, -24) },
    { name: 'Tools Stilt Barn', inside: new THREE.Vector3(11, 0.88, -40), outside: new THREE.Vector3(5, 0, -40) },
    { name: 'Alpine Chapel', inside: new THREE.Vector3(10.5, 0.2, -22), outside: new THREE.Vector3(3.5, 0, -22) },
    { name: 'Habsburg Watchtower', inside: new THREE.Vector3(-4, 0.22, -40), outside: new THREE.Vector3(-4, 0, -32) },
    { name: 'West Chalet', inside: new THREE.Vector3(-22, 0.18, 22), outside: new THREE.Vector3(-14.5, 0, 22) },
    { name: 'Alp Hut', inside: new THREE.Vector3(-43.5, 0.2, -48), outside: new THREE.Vector3(-37, 0, -48) }
  ];

  // ---- STAGE 7 EXPANSION: WATERMILL WITH TURNING WHEEL, LAKE SUST GOODS STORE, 3-LADDER KEEP SCAFFOLD, PALISADE CRAWL & 15 BYSTANDERS ----
  // 1. Alpine Watermill with Turning Timber Wheel (x = -46, z = 4)
  const mill = buildHollowRoom(scene, collision, {
    cx: -46, cz: 4, w: 9.0, d: 8.5, h: 4.0, floorY: 0.18,
    wallMat: matStone, floorMat: matTimber, roofMat: matRoof, roofStyle: 'gable',
    east: [{ type: 'door', offset: 0, width: 2.3, height: 2.8 }],
    interiorLight: { color: 0xffc670, intensity: 1.3, distance: 12 }
  });
  addTableAndChairs(scene, collision, -48.0, mill.floorY, 4, matDarkWood);
  const wheelGrp = new THREE.Group();
  wheelGrp.position.set(-46, 1.8, -0.55);
  const wheelRim = new THREE.Mesh(new THREE.TorusGeometry(1.45, 0.14, 7, 14), matDarkWood);
  wheelGrp.add(wheelRim);
  for (let k = 0; k < 6; k++) {
    const sp = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.12, 0.24), matTimber);
    sp.rotation.z = (k * Math.PI) / 6;
    wheelGrp.add(sp);
  }
  scene.add(wheelGrp);
  animated.push((t) => { wheelGrp.rotation.z = -t * 1.1; });

  // 2. Lake Landing Goods Store (The Sust) at East Shore (x = 24, z = 34) + Bailiff's Open Pavilion (x = 22, z = -34)
  const sust = buildHollowRoom(scene, collision, {
    cx: 24, cz: 34, w: 9.0, d: 8.5, h: 3.9, floorY: 0.18,
    wallMat: matTimber, floorMat: matTimber, roofMat: matRoof, roofStyle: 'gable',
    west: [{ type: 'door', offset: 0, width: 2.4, height: 2.9 }],
    interiorLight: { color: 0xffc670, intensity: 1.3, distance: 12 }
  });
  addSolidBox(scene, collision, 26.2, sust.floorY + 0.55, 34, 1.8, 1.1, 3.2, matDarkWood, 'wood');

  // 3. Keep Under Construction with a 3-Ladder Timber Scaffold climbing to top (x = 22, z = -10)!
  const scafX = 22, scafZ = -10;
  addSolidBox(scene, collision, scafX, 4.0, scafZ, 6.2, 8.0, 6.2, matStone, 'stone');
  collision.addWalkable(scafX, scafZ, 6.0, 6.0, 8.0, true);
  // 3 stepped scaffold landings (y = 2.6, 5.3, 8.0) with 3 wooden ladders!
  for (const [lx, lz, y0, y1, nx, nz] of [
    [scafX - 3.9, scafZ + 1.5, 0, 2.6, -1, 0],
    [scafX - 3.9, scafZ - 1.5, 2.6, 5.3, -1, 0],
    [scafX - 1.5, scafZ - 3.9, 5.3, 8.0, 0, -1]
  ]) {
    const plat = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.18, 3.4), matTimber);
    plat.position.set(lx, y1 - 0.09, lz);
    scene.add(plat);
    collision.addWalkable(lx, lz, 2.4, 3.6, y1, true);
    buildLadder(scene, collision, { x: lx + nx * 0.9, z: lz + nz * 0.9, bottomY: y0, topY: y1, normalX: nx, normalZ: nz, mat: matTimber });
  }

  // 4. Low Crawl Gap under Camp Palisade (1.24m clear height at x = -14, z = -34)
  const palisadeGap = addCrawlPassage(scene, collision, {
    cx: -14, cz: -34, floorY: 0, w: 3.4, d: 1.8, clearH: 1.24, bodyH: 1.9, mat: matDarkWood, postMat: matDarkWood
  });

  // 5. Fifteen Period Swiss Bystanders (including Rütli 3 oath men raising right hands, 6 women!)
  const bystanders = spawnBystanders(scene, collision, animated, 'swiss', [
    { gender: 'male',   role: 'confederate', pos: new THREE.Vector3(-8.5, 0, 44.0), yaw: 0.4 },
    { gender: 'male',   role: 'confederate', pos: new THREE.Vector3(-6.2, 0, 45.2), yaw: 0.2 },
    { gender: 'male',   role: 'confederate', pos: new THREE.Vector3(6.5, 0, 44.5), yaw: -0.4 },
    { gender: 'male',   role: 'senn', pos: new THREE.Vector3(-39.0, 0, 33.0), yaw: 1.2 },
    { gender: 'female', role: 'dairywoman', pos: new THREE.Vector3(-36.0, 0, 35.0), yaw: 0.9 },
    { gender: 'female', role: 'spinner', pos: new THREE.Vector3(-19.5, 0.18, 24.5), yaw: 1.4, prop: 'distaff' },
    { gender: 'female', role: 'miller_wife', pos: new THREE.Vector3(-44.0, 0.18, 6.2), yaw: 1.5 },
    { gender: 'male',   role: 'priest', pos: new THREE.Vector3(12.2, 0.2, -23.5), yaw: -1.4 },
    { gender: 'male',   role: 'boatman', pos: new THREE.Vector3(24.0, 0, 26.0), yaw: -1.1, prop: 'paddle' },
    { gender: 'female', role: 'net_mender', pos: new THREE.Vector3(22.0, 0, 28.5), yaw: -1.3 },
    { gender: 'female', role: 'weaver', pos: new THREE.Vector3(12.2, 0.18, 22.0), yaw: -1.4 },
    { gender: 'female', role: 'herdsman_wife', pos: new THREE.Vector3(-42.0, 0.2, -46.0), yaw: 1.1 },
    // Rütli Oath Meadow: Three men raising their right hands in the oath of 1307!
    { gender: 'male',   role: 'oath_man', pos: new THREE.Vector3(16.0, 0, 46.0), yaw: -0.4 },
    { gender: 'male',   role: 'oath_man', pos: new THREE.Vector3(18.0, 0, 46.6), yaw: -0.7 },
    { gender: 'male',   role: 'oath_man', pos: new THREE.Vector3(17.2, 0, 48.2), yaw: -1.6 }
  ]);

  const specialSpots = { boulderLadder, boulderSummit, raisedHide: hunterSeat, crawlDen: swissDen, extraCrawls: [palisadeGap] };
  return { enemySpawns, pickups, animated, disposables, tellApple, enterableBuildings, specialSpots, bystanders };
}
