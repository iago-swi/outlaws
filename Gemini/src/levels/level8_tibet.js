import * as THREE from 'three';
import {
  getGroundTexture,
  getStoneTexture,
  createSloganBannerTexture,
  createThangkaTexture
} from '../engine/textures.js';
import { createSkyDome } from '../engine/shaders.js';
import {
  buildHollowRoom,
  buildRaisedHide,
  buildCrawlDen,
  addSolidBox,
  addHearth,
  addAltar
} from '../engine/buildings.js';
import { createPickupMesh } from './level1_west.js';

export const LEVEL8_META = {
  id: 'tibet',
  index: 7,
  themeClass: 'theme-tibet',
  act: 'ACT VIII • MARCH 1959',
  title: 'ROAD TO LHASA',
  subtitle: 'High Valley & Ridge Monastery',
  heroName: 'GOMPO TASHI ANDRUGTSANG',
  objective: 'Break the Army Camp & Free the Ridge Monastery Above the Valley',
  quote: '"In March 1959 the caravan moves south beneath five-coloured prayer flags. Clear the road and drive the garrison from the monastery on the ridge."',
  historicalNote: 'Historical note: Gompo Tashi Andrugtsang, Ani Pachen, and King Songtsen Gampo appear together as legends; Red Guards belong historically to the years after 1966.',
  musicTheme: 'tibet',
  enemyIcon: '☸',
  currency: 'ༀ ',
  spawnPos: new THREE.Vector3(0, 0, 74),
  spawnYaw: 0,
  cameraPreview: { center: new THREE.Vector3(0, 8, 8), radius: 26, height: 24, speed: 0.10 }
};

export function buildLevel8(scene, collision, particles) {
  const disposables = [];
  const animated = [];
  const pickups = [];

  collision.bounds = { minX: -84, maxX: 84, minZ: -86, maxZ: 84 };

  // 1. Deep Cobalt High-Altitude Tibetan Sky & Crisp Mountain Sunlight
  const sunDir = new THREE.Vector3(0.42, 0.62, -0.66).normalize();
  const sky = createSkyDome({
    topColor: 0x072c78, midColor: 0x1e66c4, horizonColor: 0xaad4f5,
    sunColor: 0xfffce6, sunDirection: sunDir, cloudTint: 0xffffff, cloudDensity: 0.24
  });
  scene.add(sky.mesh);
  animated.push((t) => { sky.uniforms.uTime.value = t; });

  scene.fog = new THREE.FogExp2(0x9bc4e6, 0.0036);
  scene.add(new THREE.HemisphereLight(0xd9eeff, 0x7d6138, 0.88));

  const sunLight = new THREE.DirectionalLight(0xfff7e0, 2.25);
  sunLight.position.copy(sunDir).multiplyScalar(130);
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

  // 2. High Valley Ochre Winter Grass & Packed Mountain Road
  const ochreTex = getGroundTexture('tibet_ochre', 36, 36);
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(480, 480),
    new THREE.MeshStandardMaterial({ map: ochreTex.map, roughness: 0.94 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  const roadMat = new THREE.MeshStandardMaterial({ color: 0x9b8259, roughness: 0.94 });
  const road = new THREE.Mesh(new THREE.PlaneGeometry(9.0, 126), roadMat);
  road.rotation.x = -Math.PI / 2;
  road.position.set(0, 0.03, 18);
  road.receiveShadow = true;
  scene.add(road);

  // Shared Materials (matte whitewash roughness >= 0.84 to stay crisp & bloom-safe)
  const stoneTex = getStoneTexture('castle', 2, 2);
  const matWhite = new THREE.MeshStandardMaterial({ color: 0xeee9dc, roughness: 0.86 });
  const matMaroon = new THREE.MeshStandardMaterial({ color: 0x6b1c1f, roughness: 0.82 });
  const matSaffron = new THREE.MeshStandardMaterial({ color: 0xe4b228, roughness: 0.72 });
  const matGold = new THREE.MeshStandardMaterial({ color: 0xe6b438, metalness: 0.82, roughness: 0.28 });
  const matRedPillar = new THREE.MeshStandardMaterial({ color: 0x991e1e, roughness: 0.65 });
  const matDarkWood = new THREE.MeshStandardMaterial({ color: 0x3b2619, roughness: 0.86 });
  const matStone = new THREE.MeshStandardMaterial({ map: stoneTex.map, color: 0x9e9585, roughness: 0.92 });
  const matBlack = new THREE.MeshStandardMaterial({ color: 0x1e1d1d, roughness: 0.88 });
  const matOlive = new THREE.MeshStandardMaterial({ color: 0x5d6644, roughness: 0.9 });
  const matRedFlag = new THREE.MeshStandardMaterial({ color: 0xb81c1c, side: THREE.DoubleSide, roughness: 0.68 });
  const matSnow = new THREE.MeshStandardMaterial({ color: 0xf0f4f8, roughness: 0.78 });
  const matCliff = new THREE.MeshStandardMaterial({ color: 0x6f6860, roughness: 0.94 });
  const matTurqIce = new THREE.MeshStandardMaterial({ color: 0x45b8c2, roughness: 0.3, metalness: 0.15 });
  const matThangka = new THREE.MeshStandardMaterial({ map: createThangkaTexture(), roughness: 0.75 });

  // Helper: Five-Coloured Tibetan Prayer-Flag String (Blue, White, Red, Green, Yellow)
  const flagColors = [0x1e60b5, 0xf2f0e8, 0xc42525, 0x288246, 0xebb82a];
  function addPrayerFlagLine(x1, y1, z1, x2, y2, z2, count = 12) {
    for (let i = 1; i < count; i++) {
      const t = i / count;
      const fx = x1 + (x2 - x1) * t;
      const fz = z1 + (z2 - z1) * t;
      const sag = Math.sin(t * Math.PI) * 0.85;
      const fy = y1 + (y2 - y1) * t - sag;
      const fl = new THREE.Mesh(
        new THREE.PlaneGeometry(0.55, 0.7),
        new THREE.MeshStandardMaterial({ color: flagColors[i % 5], side: THREE.DoubleSide, roughness: 0.82 })
      );
      fl.position.set(fx, fy, fz);
      fl.rotation.y = Math.atan2(x2 - x1, z2 - z1) + Math.PI / 2;
      scene.add(fl);
      animated.push((tm) => { fl.rotation.x = Math.sin(tm * 5.2 + i) * 0.25; });
    }
  }

  // Helper: White Chorten (Tibetan Stupa) with Gold Spire
  function addChorten(cx, cy, cz, scale = 1.0) {
    const g = new THREE.Group();
    g.position.set(cx, cy, cz);
    const base = new THREE.Mesh(new THREE.BoxGeometry(2.6 * scale, 1.5 * scale, 2.6 * scale), matWhite);
    base.position.y = 0.75 * scale;
    const dome = new THREE.Mesh(new THREE.SphereGeometry(1.1 * scale, 12, 10), matWhite);
    dome.position.y = 2.2 * scale;
    const spire = new THREE.Mesh(new THREE.ConeGeometry(0.55 * scale, 2.1 * scale, 8), matGold);
    spire.position.y = 4.0 * scale;
    g.add(base, dome, spire);
    scene.add(g);
    collision.addBox(cx, cy + 2.0 * scale, cz, 2.7 * scale, 4.0 * scale, 2.7 * scale, 'stone');
  }

  // ---- UNARMED DALAI LAMA & CARAVAN AT START (Strictly Non-Combatant, Never Enemy/Target!) ----
  function addNonCombatantPerson(x, z, rotY, opts) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rotY;
    const skin = new THREE.MeshStandardMaterial({ color: 0xdca77e, roughness: 0.72 });
    const robe = new THREE.MeshStandardMaterial({ color: opts.robeColor, roughness: 0.84 });
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.38, 1.38, 10), robe);
    torso.position.y = 0.72;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 10), skin);
    head.position.y = 1.62;
    g.add(torso, head);
    if (opts.sashYellow) {
      const sash = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.34, 0.38), matSaffron);
      sash.position.set(0, 1.15, 0.04);
      g.add(sash);
    }
    if (opts.glasses) {
      const l1 = new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.01, 6, 10), matBlack);
      l1.position.set(-0.07, 1.64, 0.19);
      const l2 = l1.clone();
      l2.position.x = 0.07;
      g.add(l1, l2);
    }
    if (opts.blessingHand) {
      // Right hand raised gently in blessing
      const armR = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.07, 0.52, 8), matMaroon);
      armR.position.set(0.32, 1.24, 0.16);
      armR.rotation.x = -0.9;
      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8), skin);
      hand.position.set(0.32, 1.46, 0.35);
      g.add(armR, hand);
    }
    if (opts.khampaHat) {
      const hat = new THREE.Mesh(new THREE.TorusGeometry(0.21, 0.08, 8, 12), new THREE.MeshStandardMaterial({ color: 0xc27a38, roughness: 0.9 }));
      hat.rotation.x = Math.PI / 2;
      hat.position.y = 1.78;
      const rifle = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.028, 1.15, 6), matDarkWood);
      rifle.position.set(0.34, 1.15, 0.12);
      g.add(hat, rifle);
    }
    scene.add(g);
    collision.addBox(x, 0.9, z, 0.85, 1.8, 0.85, 'solid');
  }

  // The Dalai Lama (young, glasses, dark red & yellow robes, blessing hand)
  addNonCombatantPerson(-5.8, 72, 0.6, { robeColor: 0x6b1c1f, sashYellow: true, glasses: true, blessingHand: true });
  // Two monks
  addNonCombatantPerson(-8.2, 73.5, 0.5, { robeColor: 0x6b1c1f, sashYellow: false });
  addNonCombatantPerson(-7.5, 70.0, 0.7, { robeColor: 0x6b1c1f, sashYellow: false });
  // Two Khampa riders with rifles
  addNonCombatantPerson(-11.0, 72.0, 0.4, { robeColor: 0x4f3524, khampaHat: true });
  addNonCombatantPerson(-10.2, 68.5, 0.4, { robeColor: 0x4f3524, khampaHat: true });
  // Three Caravan Horses (solid!)
  function addHorseOrYak(x, z, rotY, color, isYak = false) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rotY;
    const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.92 });
    const body = new THREE.Mesh(new THREE.BoxGeometry(isYak ? 1.1 : 0.78, isYak ? 1.15 : 0.85, isYak ? 2.1 : 1.95), mat);
    body.position.y = isYak ? 1.05 : 1.15;
    const neck = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.75, 0.55), mat);
    neck.position.set(0, isYak ? 1.35 : 1.65, isYak ? 1.05 : 0.95);
    g.add(body, neck);
    for (const [lx, lz] of [[-0.28, -0.7], [0.28, -0.7], [-0.28, 0.7], [0.28, 0.7]]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.95, 6), mat);
      leg.position.set(lx, 0.48, lz);
      g.add(leg);
    }
    if (isYak) {
      const hornMat = new THREE.MeshStandardMaterial({ color: 0xe6dec8, roughness: 0.6 });
      for (const s of [-1, 1]) {
        const h = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.55, 6), hornMat);
        h.position.set(s * 0.34, 1.62, 1.15);
        h.rotation.z = -s * 0.7;
        g.add(h);
      }
    }
    scene.add(g);
    collision.addBox(x, 0.95, z, 1.5, 1.9, 2.3, 'solid');
  }
  addHorseOrYak(-14.0, 74, 0.4, 0x6b4226, false);
  addHorseOrYak(-16.5, 70, 0.25, 0x3b2a1e, false);
  addHorseOrYak(-13.5, 66.5, 0.6, 0x8f6b48, false);
  // Tall caravan prayer pole
  addSolidBox(scene, collision, -4.5, 3.6, 68, 0.2, 7.2, 0.2, matDarkWood, 'wood');
  addPrayerFlagLine(-4.5, 6.8, 68, -14, 4.2, 74, 10);

  // ---- RAISED STONE LOOKOUT HIDE & LOW STONE CROUCH-IN DEN (Near Valley Entrance) ----
  const tibetHide = buildRaisedHide(scene, collision, {
    cx: 15, cz: 59, w: 4.4, d: 4.4, deckY: 3.0, openSide: 'south',
    postMat: matDarkWood, deckMat: matDarkWood, wallMat: matStone, jumpMat: matStone
  });
  const tibetDen = buildCrawlDen(scene, collision, {
    cx: 15, cz: 71.5, w: 5.2, d: 4.8, doorSide: 'west',
    wallMat: matStone, floorMat: matStone, roofMat: matDarkWood
  });

  // ---- 1. ENTERABLE TIBETAN VILLAGE HOUSES (Whitewashed, dark red parapets, black frames, hearth, bench, altar!) ----
  function buildTibetanHouse(cx, cz, w, d, doorSide) {
    const opts = {
      cx, cz, w, d, h: 4.0, floorY: 0.16,
      wallMat: matWhite, floorMat: matStone, roofMat: matDarkWood, roofStyle: 'parapet',
      parapetColor: 0x6b1c1f,
      interiorLight: { color: 0xffc670, intensity: 1.5, distance: 13 }
    };
    opts[doorSide] = [
      { type: 'door', offset: 0, width: 2.3, height: 2.8 },
      { type: 'window', offset: 3.0, width: 1.4 }
    ];
    const opp = doorSide === 'east' ? 'west' : doorSide === 'west' ? 'east' : 'north';
    opts[opp] = [{ type: 'window', offset: 0, width: 1.5 }];
    const room = buildHollowRoom(scene, collision, opts);

    // Rooftop prayer-flag poles on corners
    for (const [px, pz] of [[-w * 0.44, -d * 0.44], [w * 0.44, d * 0.44]]) {
      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 2.8, 6), matDarkWood);
      p.position.set(cx + px, room.roofY + 1.8, cz + pz);
      scene.add(p);
    }
    // Interior: hearth, bench with carpets, family altar with glowing butter lamps
    addHearth(scene, collision, cx, room.floorY, cz, 0.72);
    const benchOffX = doorSide === 'east' ? -w * 0.34 : w * 0.34;
    addSolidBox(scene, collision, cx + benchOffX, room.floorY + 0.32, cz - d * 0.24, 1.1, 0.64, 2.4, matRedPillar, 'wood');
    addAltar(scene, collision, cx + benchOffX, room.floorY, cz + d * 0.26, 1.1, 2.0, matDarkWood, 0xe4b228);
    return room;
  }

  buildTibetanHouse(-22, 46, 10.5, 9.5, 'east');
  buildTibetanHouse(22, 46, 10.5, 9.5, 'west');
  buildTibetanHouse(-22, 24, 10.5, 9.5, 'east');
  buildTibetanHouse(22, 24, 10.5, 9.5, 'west');

  // Prayer-flag strings criss-crossing the village road + Mani Wall + White Chortens
  addPrayerFlagLine(-16, 4.6, 46, 16, 4.6, 46, 16);
  addPrayerFlagLine(-16, 4.6, 24, 16, 4.6, 24, 16);
  addChorten(-12, 0, 56, 1.0);
  addChorten(12, 0, 35, 0.95);
  // Carved Stone Mani Wall (solid!)
  addSolidBox(scene, collision, -11, 0.85, 35, 1.2, 1.7, 9.0, matStone, 'stone');

  // ---- REUSABLE LARGE GILDED SEATED BUDDHA (Lotus throne, crossed legs, right hand touching earth, bowl in left hand, blue hair & halo!) ----
  const matBlueHair = new THREE.MeshStandardMaterial({ color: 0x162d6e, roughness: 0.72 });
  const matLotusPink = new THREE.MeshStandardMaterial({ color: 0xc9424b, roughness: 0.65 });
  const matAlmsBowl = new THREE.MeshStandardMaterial({ color: 0x262936, metalness: 0.65, roughness: 0.35 });

  function buildSeatedBuddha(scale = 1.0) {
    const g = new THREE.Group();
    // Carved Lotus Throne Base + Ring of 12 Lotus Petals
    const dais = new THREE.Mesh(new THREE.CylinderGeometry(1.55, 1.75, 0.72, 16), matMaroon);
    dais.position.y = 0.36;
    const lotusCore = new THREE.Mesh(new THREE.CylinderGeometry(1.42, 1.5, 0.42, 16), matGold);
    lotusCore.position.y = 0.88;
    g.add(dais, lotusCore);
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      const petal = new THREE.Mesh(new THREE.SphereGeometry(0.34, 8, 8), i % 2 === 0 ? matGold : matLotusPink);
      petal.scale.set(0.85, 1.15, 0.48);
      petal.position.set(Math.cos(a) * 1.42, 0.92, Math.sin(a) * 1.42);
      petal.rotation.y = -a + Math.PI / 2;
      g.add(petal);
    }
    // Crossed Legs (Padmasana lotus posture)
    const lapBase = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.25, 0.48, 14), matGold);
    lapBase.position.y = 1.28;
    const kneeL = new THREE.Mesh(new THREE.SphereGeometry(0.46, 10, 8), matGold);
    kneeL.scale.set(1.3, 0.65, 1.0);
    kneeL.position.set(-0.76, 1.24, 0.36);
    const kneeR = kneeL.clone();
    kneeR.position.x = 0.76;
    g.add(lapBase, kneeL, kneeR);
    // Draped Gilded Torso & Monastic Robe Fold
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.54, 0.68, 1.38, 14), matGold);
    torso.position.y = 2.15;
    const shoulderRobe = new THREE.Mesh(new THREE.BoxGeometry(1.22, 0.38, 0.62), matSaffron);
    shoulderRobe.position.set(-0.08, 2.52, 0.04);
    shoulderRobe.rotation.z = 0.24;
    g.add(torso, shoulderRobe);
    // Right Arm & Hand reaching down to touch the earth (Bhumisparsha Mudra — viewer's left / Buddha's right -X!)
    const armR = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.14, 1.22, 8), matGold);
    armR.position.set(-0.68, 1.98, 0.32);
    armR.rotation.set(0.32, 0, -0.18);
    const handR = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), matGold);
    handR.position.set(-0.78, 1.34, 0.56);
    // Left Arm resting in lap holding dark Alms Bowl!
    const armL = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.14, 0.92, 8), matGold);
    armL.position.set(0.54, 1.95, 0.28);
    armL.rotation.set(-0.55, 0, 0.45);
    const handL = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 8), matGold);
    handL.position.set(0.18, 1.56, 0.58);
    const bowl = new THREE.Mesh(new THREE.SphereGeometry(0.26, 12, 10, 0, Math.PI * 2, Math.PI * 0.42, Math.PI * 0.58), matAlmsBowl);
    bowl.position.set(0.08, 1.76, 0.58);
    g.add(armR, handR, armL, handL, bowl);
    // Serene Golden Head, Elongated Ears & Deep Blue Curled Hair with Ushnisha Topknot
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.46, 14, 12), matGold);
    head.position.y = 3.24;
    for (const s of [-1, 1]) {
      const ear = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.05, 0.36, 6), matGold);
      ear.position.set(s * 0.46, 3.16, 0);
      g.add(ear);
    }
    const blueHair = new THREE.Mesh(new THREE.SphereGeometry(0.48, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.54), matBlueHair);
    blueHair.position.set(0, 3.32, -0.02);
    const ushnisha = new THREE.Mesh(new THREE.SphereGeometry(0.21, 10, 8), matBlueHair);
    ushnisha.position.set(0, 3.84, -0.02);
    // Ornate Circular Golden Halo behind Head & Shoulders
    const haloOuter = new THREE.Mesh(new THREE.TorusGeometry(1.18, 0.09, 8, 24), matGold);
    haloOuter.position.set(0, 3.22, -0.52);
    const haloInner = new THREE.Mesh(new THREE.TorusGeometry(0.86, 0.05, 8, 20), matSaffron);
    haloInner.position.set(0, 3.22, -0.52);
    g.add(head, blueHair, ushnisha, haloOuter, haloInner);
    g.scale.setScalar(scale);
    return g;
  }

  // ---- GRAZING YAKS, FROZEN TURQUOISE LAKE, ENTERABLE BLACK NOMAD TENT, VILLAGE TEMPLE & RUINED FORT ----
  addHorseOrYak(-42, 48, 0.9, 0x241e1a, true);
  addHorseOrYak(-47, 42, -0.4, 0x2e2520, true);
  addHorseOrYak(-39, 36, 1.4, 0x1e1917, true);

  // Frozen Turquoise Lake (East Valley)
  const lake = new THREE.Mesh(new THREE.CylinderGeometry(16, 16, 0.12, 22), matTurqIce);
  lake.position.set(52, 0.06, 24);
  scene.add(lake);

  // Enterable Black Nomad Yak-Hair Tent beside Lake!
  const nomadTent = buildHollowRoom(scene, collision, {
    cx: 44, cz: 48, w: 9.0, d: 8.5, h: 2.9, floorY: 0.1,
    wallMat: matBlack, floorMat: matStone, roofMat: matBlack, roofStyle: 'hip',
    west: [{ type: 'door', offset: 0, width: 2.6, height: 2.5 }],
    south: [{ type: 'window', offset: 0, width: 1.5 }],
    interiorLight: { color: 0xffa852, intensity: 1.5, distance: 12 }
  });
  addHearth(scene, collision, 44.5, nomadTent.floorY, 48.0, 0.72);
  addSolidBox(scene, collision, 46.8, nomadTent.floorY + 0.35, 45.4, 1.4, 0.7, 2.0, matDarkWood, 'wood');
  const tentRug = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 2.4), matRedPillar);
  tentRug.rotation.x = -Math.PI / 2;
  tentRug.position.set(44.2, nomadTent.floorY + 0.04, 50.6);
  scene.add(tentRug);

  // New Enterable Village Temple (West side of Village — holds a Large Gilded Seated Buddha!)
  const vTemple = buildHollowRoom(scene, collision, {
    cx: -40, cz: 22, w: 12.5, d: 12.0, h: 5.2, floorY: 0.22,
    wallMat: matWhite, floorMat: matDarkWood, roofMat: matGold, roofStyle: 'parapet',
    parapetColor: 0x6b1c1f,
    east: [
      { type: 'window', offset: -3.8, width: 1.8 },
      { type: 'door', offset: 0, width: 2.8, height: 3.2 },
      { type: 'window', offset: 3.8, width: 1.8 }
    ],
    south: [{ type: 'door', offset: 0, width: 2.4, height: 3.0 }],
    interiorLight: { color: 0xffcf70, intensity: 2.0, distance: 18 }
  });
  const vtCanopy = new THREE.Mesh(new THREE.ConeGeometry(7.2, 2.4, 4), matGold);
  vtCanopy.rotation.y = Math.PI / 4;
  vtCanopy.position.set(-40, vTemple.roofY + 1.8, 22);
  scene.add(vtCanopy);
  const vtBuddha = buildSeatedBuddha(0.95);
  vtBuddha.position.set(-43.6, vTemple.floorY, 22);
  vtBuddha.rotation.y = Math.PI / 2;
  scene.add(vtBuddha);
  collision.addBox(-43.6, vTemple.floorY + 1.8, 22, 3.0, 3.6, 3.2, 'solid');
  addAltar(scene, collision, -40.2, vTemple.floorY, 22, 1.0, 2.6, matDarkWood, 0xe4b228);

  // Enterable Ruined Stone Fort (West Ridge Flank!)
  const fort = buildHollowRoom(scene, collision, {
    cx: -50, cz: 4, w: 12, d: 12, h: 3.9, floorY: 0.2,
    wallMat: matStone, floorMat: matStone, roofMat: matStone, roofStyle: 'none',
    east: [{ type: 'door', offset: 0, width: 2.8, height: 3.0 }],
    south: [{ type: 'door', offset: 0, width: 2.4, height: 2.9 }],
    interiorLight: { color: 0xffd288, intensity: 1.2, distance: 12 }
  });
  addSolidBox(scene, collision, -53, fort.floorY + 0.6, 4, 1.4, 1.2, 2.4, matStone, 'stone');

  // ---- OCCUPYING ARMY CAMP (Center-North Valley before Monastery Stairway!) ----
  // Olive army tents (solid!)
  for (const [tx, tz] of [[-24, -4], [-14, -10], [20, -4]]) {
    addSolidBox(scene, collision, tx, 1.35, tz, 4.6, 2.7, 6.4, matOlive, 'solid');
  }
  // Army Trucks (solid!)
  for (const [vx, vz] of [[12, 4], [-12, 6]]) {
    addSolidBox(scene, collision, vx, 1.4, vz, 2.6, 2.8, 6.2, matOlive, 'solid');
  }
  // Red Flag, Tall Radio Mast & Camp Signboard with Chinese Characters ("前进")
  const flagPole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.11, 8.2, 8), matBlack);
  flagPole.position.set(8, 4.1, -12);
  const redCampFlag = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 1.7), matRedFlag);
  redCampFlag.position.set(9.45, 7.1, -12);
  scene.add(flagPole, redCampFlag);
  collision.addBox(8, 4.0, -12, 0.5, 8.0, 0.5, 'solid');

  const radioMast = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.48, 22, 6), matBlack);
  radioMast.position.set(30, 11, -14);
  scene.add(radioMast);
  collision.addBox(30, 5.0, -14, 1.2, 10.0, 1.2, 'solid');

  const campBoard = new THREE.Mesh(
    new THREE.BoxGeometry(5.6, 1.8, 0.22),
    new THREE.MeshStandardMaterial({ map: createSloganBannerTexture('前进 • 营地', '#a61c1c', '#ffe866') })
  );
  campBoard.position.set(-10, 2.2, 12);
  scene.add(campBoard);
  collision.addBox(-10, 1.5, 12, 5.8, 3.0, 0.5, 'wood');

  // ---- STONE STAIRWAY WITH GATEWAY CHORTEN UP TO RIDGE MONASTERY PLATEAU (y = 3.2m!) ----
  const plateauY = 3.2;
  // 9 gentle climbable stone steps (each step rise = 0.355m <= 0.5m STEP_MAX!) from z = -18 to z = -34
  const stepCount = 9;
  for (let i = 0; i < stepCount; i++) {
    const topY = plateauY * ((i + 1) / stepCount);
    const sz = -18 - i * 1.9;
    const stepMesh = new THREE.Mesh(new THREE.BoxGeometry(10.0, topY, 2.0), matStone);
    stepMesh.position.set(0, topY * 0.5, sz);
    stepMesh.receiveShadow = true;
    scene.add(stepMesh);
    collision.addWalkable(0, sz, 10.4, 2.2, topY);
  }
  // Gateway Chorten straddling the middle of the stone stairway (walk right underneath!)
  addSolidBox(scene, collision, -5.6, 3.5, -26, 2.2, 7.0, 2.6, matWhite, 'stone');
  addSolidBox(scene, collision, 5.6, 3.5, -26, 2.2, 7.0, 2.6, matWhite, 'stone');
  const gateTop = new THREE.Mesh(new THREE.BoxGeometry(14.0, 1.8, 2.8), matWhite);
  gateTop.position.set(0, 7.2, -26);
  const gateDome = new THREE.Mesh(new THREE.SphereGeometry(1.5, 10, 8), matWhite);
  gateDome.position.set(0, 9.0, -26);
  const gateSpire = new THREE.Mesh(new THREE.ConeGeometry(0.65, 2.4, 8), matGold);
  gateSpire.position.set(0, 11.2, -26);
  scene.add(gateTop, gateDome, gateSpire);

  // Raised Ridge Monastery Plateau (z = -84..-35, x = -66..66, height = 3.2m!)
  const plateauMesh = new THREE.Mesh(new THREE.BoxGeometry(132, plateauY, 50), matStone);
  plateauMesh.position.set(0, plateauY * 0.5, -60);
  plateauMesh.receiveShadow = true;
  scene.add(plateauMesh);
  collision.addWalkable(0, -60, 132, 50.5, plateauY);
  // Retaining cliff walls & waist-high terrace parapet on left & right of stairway so walkers stay safely on the ridge!
  addSolidBox(scene, collision, -36, (plateauY + 0.95) * 0.5, -35.2, 61, plateauY + 0.95, 1.2, matStone, 'stone');
  addSolidBox(scene, collision, 36, (plateauY + 0.95) * 0.5, -35.2, 61, plateauY + 0.95, 1.2, matStone, 'stone');

  // ---- ENTERABLE GREAT MONASTERY ASSEMBLY HALL (White walls, dark red upper band, gilded roof, Dharma wheel & deer, red pillars, prayer wheels, golden Buddha, cushions, thangkas!) ----
  const hall = buildHollowRoom(scene, collision, {
    cx: 0, cz: -66, w: 22, d: 18, h: 6.0, floorY: plateauY + 0.2,
    wallMat: matWhite, floorMat: matDarkWood, roofMat: matGold, roofStyle: 'parapet',
    parapetColor: 0x6b1c1f,
    south: [
      { type: 'window', offset: -6.8, width: 2.2 },
      { type: 'door', offset: 0, width: 3.6, height: 3.8 },
      { type: 'window', offset: 6.8, width: 2.2 }
    ],
    west: [{ type: 'door', offset: 0, width: 2.4, height: 3.2 }],
    east: [{ type: 'door', offset: 0, width: 2.4, height: 3.2 }],
    interiorLight: { color: 0xffcf70, intensity: 2.6, distance: 26 }
  });
  // Gilded pagoda-style roof canopy & Golden Dharma Wheel flanked by Two Golden Deer above door!
  const giltRoof = new THREE.Mesh(new THREE.ConeGeometry(13, 3.2, 4), matGold);
  giltRoof.rotation.y = Math.PI / 4;
  giltRoof.position.set(0, hall.roofY + 2.2, -66);
  const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.95, 0.14, 8, 16), matGold);
  wheel.position.set(0, hall.roofY + 1.4, -56.6);
  const deerL = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.75, 0.45), matGold);
  deerL.position.set(-1.6, hall.roofY + 1.0, -56.6);
  const deerR = deerL.clone();
  deerR.position.x = 1.6;
  scene.add(giltRoof, wheel, deerL, deerR);

  // Exterior Rows of Spinning Gold Prayer Wheels flanking entrance + Red Pillars
  for (const s of [-1, 1]) {
    for (let i = 0; i < 4; i++) {
      const pw = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.65, 10), matGold);
      pw.position.set(s * (3.2 + i * 1.15), hall.floorY + 1.05, -56.5);
      scene.add(pw);
      animated.push((t) => { pw.rotation.y = t * 1.6 + i; });
    }
  }
  for (const [px, pz] of [[-5.5, -62], [5.5, -62], [-5.5, -69], [5.5, -69]]) {
    addSolidBox(scene, collision, px, hall.floorY + 3.0, pz, 0.62, 6.0, 0.62, matRedPillar, 'wood');
  }
  // Assembly Hall Interior: Large Gilded Seated Buddha (lotus throne, crossed legs, earth-touching right hand, alms bowl, blue hair & halo!), Butter-Lamp Table, Cushions & Thangkas!
  const hallBuddha = buildSeatedBuddha(1.22);
  hallBuddha.position.set(0, hall.floorY, -72.2);
  scene.add(hallBuddha);
  collision.addBox(0, hall.floorY + 2.2, -72.2, 4.0, 4.4, 3.6, 'solid');
  // Butter-lamp offering table + floor cushions
  addAltar(scene, collision, 0, hall.floorY, -68.8, 3.2, 0.9, matDarkWood, 0xe4b228);
  for (const [cx, cz] of [[-7.2, -65], [7.2, -65]]) {
    addSolidBox(scene, collision, cx, hall.floorY + 0.2, cz, 1.2, 0.4, 4.4, matSaffron, 'wood');
  }
  for (const tx of [-7.5, 7.5]) {
    const th = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 3.2), matThangka);
    th.position.set(tx, hall.floorY + 3.2, -74.5);
    scene.add(th);
  }

  // ---- ENTERABLE MONKS' HOUSES, GREAT CHORTEN, PRAYER POLE & SCRIPTURE BONFIRE ON RIDGE ----
  const mHouseW = buildHollowRoom(scene, collision, {
    cx: -28, cz: -56, w: 10, d: 10, h: 3.9, floorY: plateauY + 0.16,
    wallMat: matWhite, floorMat: matStone, roofMat: matDarkWood, roofStyle: 'parapet',
    parapetColor: 0x6b1c1f,
    east: [{ type: 'door', offset: 0, width: 2.3, height: 2.8 }],
    south: [{ type: 'window', offset: 0, width: 1.6 }],
    interiorLight: { color: 0xffc670, intensity: 1.5, distance: 12 }
  });
  addAltar(scene, collision, -31.2, mHouseW.floorY, -56, 1.1, 2.0, matDarkWood, 0xe4b228);

  const mHouseE = buildHollowRoom(scene, collision, {
    cx: 28, cz: -56, w: 10, d: 10, h: 3.9, floorY: plateauY + 0.16,
    wallMat: matWhite, floorMat: matStone, roofMat: matDarkWood, roofStyle: 'parapet',
    parapetColor: 0x6b1c1f,
    west: [{ type: 'door', offset: 0, width: 2.3, height: 2.8 }],
    south: [{ type: 'window', offset: 0, width: 1.6 }],
    interiorLight: { color: 0xffc670, intensity: 1.5, distance: 12 }
  });
  addAltar(scene, collision, 31.2, mHouseE.floorY, -56, 1.1, 2.0, matDarkWood, 0xe4b228);

  // ---- NEW ENTERABLE SMALL CHAPEL ON RIDGE PLATEAU (Gilded Seated Buddha + ONE HUGE SPINNING PRAYER WHEEL!) ----
  const chapel = buildHollowRoom(scene, collision, {
    cx: 46, cz: -56, w: 12.0, d: 12.0, h: 5.2, floorY: plateauY + 0.2,
    wallMat: matWhite, floorMat: matDarkWood, roofMat: matGold, roofStyle: 'parapet',
    parapetColor: 0x6b1c1f,
    south: [
      { type: 'door', offset: 0, width: 2.8, height: 3.2 },
      { type: 'window', offset: -3.6, width: 1.6 },
      { type: 'window', offset: 3.6, width: 1.6 }
    ],
    west: [{ type: 'window', offset: 0, width: 1.8 }],
    interiorLight: { color: 0xffd278, intensity: 2.1, distance: 16 }
  });
  const chCanopy = new THREE.Mesh(new THREE.ConeGeometry(6.8, 2.4, 4), matGold);
  chCanopy.rotation.y = Math.PI / 4;
  chCanopy.position.set(46, chapel.roofY + 1.7, -56);
  scene.add(chCanopy);
  // Gilded Seated Buddha at the north end of the Chapel
  const chapelBuddha = buildSeatedBuddha(0.92);
  chapelBuddha.position.set(46, chapel.floorY, -59.8);
  scene.add(chapelBuddha);
  collision.addBox(46, chapel.floorY + 1.8, -59.8, 3.0, 3.6, 2.8, 'solid');
  // ONE HUGE SPINNING GILDED PRAYER WHEEL inside the Chapel!
  {
    const wheelGrp = new THREE.Group();
    wheelGrp.position.set(49.2, chapel.floorY, -54.8);
    const axle = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 4.6, 8), matDarkWood);
    axle.position.y = 2.3;
    const drum = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.05, 2.85, 18), matGold);
    drum.position.y = 2.15;
    const bandTop = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.28, 18), matMaroon);
    bandTop.position.y = 3.35;
    const bandMid = new THREE.Mesh(new THREE.CylinderGeometry(1.09, 1.09, 0.42, 18), matRedPillar);
    bandMid.position.y = 2.15;
    const bandBot = bandTop.clone();
    bandBot.position.y = 0.95;
    const cap = new THREE.Mesh(new THREE.ConeGeometry(1.08, 0.65, 14), matGold);
    cap.position.y = 3.88;
    wheelGrp.add(axle, drum, bandTop, bandMid, bandBot, cap);
    scene.add(wheelGrp);
    collision.addBox(49.2, chapel.floorY + 2.0, -54.8, 2.3, 4.0, 2.3, 'solid');
    animated.push((t) => { wheelGrp.rotation.y = t * 0.9; });
  }

  // Great Chorten & Tall Monastery Prayer Pole
  addChorten(-22, plateauY, -42, 1.55);
  addSolidBox(scene, collision, 20, plateauY + 5.0, -42, 0.25, 10.0, 0.25, matDarkWood, 'wood');
  addPrayerFlagLine(20, plateauY + 9.4, -42, 0, hall.roofY + 0.5, -57, 14);

  // Courtyard Bonfire of Scriptures under a Red Banner!
  addSolidBox(scene, collision, 0, plateauY + 0.35, -45, 2.2, 0.7, 2.2, matDarkWood, 'wood');
  const fireFlame = new THREE.Mesh(new THREE.ConeGeometry(1.1, 2.2, 8), new THREE.MeshBasicMaterial({ color: 0xff6e1a }));
  fireFlame.position.set(0, plateauY + 1.5, -45);
  const firePt = new THREE.PointLight(0xff7e22, 6, 16, 1.5);
  firePt.position.set(0, plateauY + 2.2, -45);
  scene.add(fireFlame, firePt);
  animated.push((t) => {
    fireFlame.scale.y = 0.85 + Math.sin(t * 11) * 0.22;
    firePt.intensity = 5.5 + Math.sin(t * 9) * 1.2;
  });
  const redBan = new THREE.Mesh(
    new THREE.BoxGeometry(7.2, 1.4, 0.16),
    new THREE.MeshStandardMaterial({ map: createSloganBannerTexture('破旧立新', '#a61c1c', '#ffe866') })
  );
  redBan.position.set(0, plateauY + 4.4, -52);
  scene.add(redBan);

  // ---- TOWERING SNOW-CAPPED HIMALAYAN PEAKS RINGING THE VALLEY ----
  for (const [px, pz, r, h] of [
    [-145, -180, 92, 118], [-25, -195, 105, 138], [105, -175, 95, 124],
    [195, -75, 90, 114], [195, 55, 95, 122], [155, 165, 88, 108],
    [35, 195, 96, 118], [-85, 185, 92, 112], [-185, 95, 94, 118], [-185, -45, 96, 124]
  ]) {
    const mtn = new THREE.Mesh(new THREE.ConeGeometry(r, h, 7), matCliff);
    mtn.position.set(px, h * 0.45, pz);
    const snowCap = new THREE.Mesh(new THREE.ConeGeometry(r * 0.58, h * 0.54, 7), matSnow);
    snowCap.position.set(px, h * 0.72, pz);
    scene.add(mtn, snowCap);
  }

  particles.initAmbient('alpine', collision.bounds);

  // ---- PICKUPS: Bowls of Butter Tea (+35 HP) & Ammo ----
  const pickupDefs = [
    { type: 'health', variant: 'butter_tea', pos: new THREE.Vector3(-22, 0.9, 46),           label: 'BOWL OF BUTTER TEA (+35 HP)' },
    { type: 'health', variant: 'butter_tea', pos: new THREE.Vector3(-37.5, 0.9, 22),         label: 'VILLAGE TEMPLE TEA (+35 HP)' },
    { type: 'health', variant: 'butter_tea', pos: new THREE.Vector3(42.5, 0.85, 48),         label: 'NOMAD TENT BUTTER TEA (+35 HP)' },
    { type: 'health', variant: 'butter_tea', pos: new THREE.Vector3(-50, 0.9, 4),            label: 'FORT BUTTER TEA (+35 HP)' },
    { type: 'health', variant: 'butter_tea', pos: new THREE.Vector3(22, 0.9, 24),            label: 'VILLAGE BUTTER TEA (+35 HP)' },
    { type: 'health', variant: 'butter_tea', pos: new THREE.Vector3(-28, plateauY + 1.0, -56), label: 'MONKS BUTTER TEA (+35 HP)' },
    { type: 'health', variant: 'butter_tea', pos: new THREE.Vector3(44, plateauY + 1.0, -55),  label: 'CHAPEL BUTTER TEA (+35 HP)' },
    { type: 'health', variant: 'butter_tea', pos: new THREE.Vector3(0, plateauY + 1.0, -64),   label: 'ASSEMBLY HALL BUTTER TEA (+35 HP)' },
    { type: 'health', variant: 'butter_tea', pos: new THREE.Vector3(15, 0.72, 71.5),         label: 'DEN BUTTER TEA (+35 HP)', inDen: true },
    { type: 'ammo',   pos: new THREE.Vector3(22, 0.9, 46),  label: 'KHAMPA CARTRIDGE POUCH' },
    { type: 'ammo',   pos: new THREE.Vector3(28, plateauY + 1.0, -56), label: 'MONASTERY ARROWS & ROUNDS' }
  ];
  for (const pd of pickupDefs) {
    const mesh = createPickupMesh(pd.type, pd.variant || 'default');
    mesh.position.copy(pd.pos);
    scene.add(mesh);
    pickups.push({ ...pd, mesh, collected: false });
  }

  // ---- 35 ENEMIES (PLA Riflemen, PLA MGs, Red Guards, Nomad Tent, Village Temple, Chapel & Boss Commander Zhao) ----
  const enemySpawns = [
    // Village South & Enterable Houses + Nomad Tent + Village Temple
    { type: 'pla_rifleman', pos: new THREE.Vector3(-6, 0, 56) },
    { type: 'pla_rifleman', pos: new THREE.Vector3(7, 0, 52) },
    { type: 'red_guard',    pos: new THREE.Vector3(0, 0, 44) },
    { type: 'pla_rifleman', pos: new THREE.Vector3(-21, 0.16, 46) },  // Village House 1
    { type: 'pla_rifleman', pos: new THREE.Vector3(21, 0.16, 46) },   // Village House 2
    { type: 'red_guard',    pos: new THREE.Vector3(34, 0, 40) },      // Near nomad tent
    { type: 'pla_rifleman', pos: new THREE.Vector3(42.2, 0.1, 48.0) }, // Inside Enterable Nomad Tent
    { type: 'pla_rifleman', pos: new THREE.Vector3(-21, 0.16, 24) },  // Village House 3
    { type: 'pla_rifleman', pos: new THREE.Vector3(-37.2, 0.22, 22) }, // Inside Village Temple
    { type: 'pla_rifleman', pos: new THREE.Vector3(21, 0.16, 24) },   // Village House 4
    { type: 'pla_mg',       pos: new THREE.Vector3(0, 0, 26) },
    // Ruined Stone Fort (West)
    { type: 'pla_rifleman', pos: new THREE.Vector3(-36, 0, 12) },
    { type: 'red_guard',    pos: new THREE.Vector3(-42, 0, 6) },
    { type: 'pla_rifleman', pos: new THREE.Vector3(-49, 0.2, 4) },   // Inside Ruined Fort
    { type: 'pla_mg',       pos: new THREE.Vector3(-51, 0.2, 1) },   // Inside Ruined Fort
    // Occupying Army Camp
    { type: 'pla_rifleman', pos: new THREE.Vector3(-6, 0, 10) },
    { type: 'pla_rifleman', pos: new THREE.Vector3(6, 0, 10) },
    { type: 'red_guard',    pos: new THREE.Vector3(-16, 0, 0) },
    { type: 'pla_mg',       pos: new THREE.Vector3(0, 0, -2) },
    { type: 'pla_rifleman', pos: new THREE.Vector3(14, 0, -4) },
    { type: 'pla_rifleman', pos: new THREE.Vector3(-8, 0, -10) },
    { type: 'red_guard',    pos: new THREE.Vector3(6, 0, -14) },
    { type: 'pla_rifleman', pos: new THREE.Vector3(24, 0, -10) },
    // Stone Stairway & Ridge Monastery Courtyard
    { type: 'pla_rifleman', pos: new THREE.Vector3(0, 1.8, -26) },   // Under Gateway Chorten
    { type: 'pla_mg',       pos: new THREE.Vector3(-10, plateauY, -40) },
    { type: 'pla_rifleman', pos: new THREE.Vector3(10, plateauY, -40) },
    { type: 'red_guard',    pos: new THREE.Vector3(-5, plateauY, -46) },
    { type: 'red_guard',    pos: new THREE.Vector3(5, plateauY, -46) },
    { type: 'pla_rifleman', pos: new THREE.Vector3(-27, plateauY + 0.16, -56) }, // Monks House West
    { type: 'pla_rifleman', pos: new THREE.Vector3(27, plateauY + 0.16, -56) },  // Monks House East
    { type: 'red_guard',    pos: new THREE.Vector3(44.5, plateauY + 0.2, -55) }, // Inside Small Chapel!
    // Great Assembly Hall Interior
    { type: 'pla_rifleman', pos: new THREE.Vector3(-5, plateauY + 0.2, -64) },
    { type: 'pla_mg',       pos: new THREE.Vector3(5, plateauY + 0.2, -64) },
    { type: 'red_guard',    pos: new THREE.Vector3(0, plateauY + 0.2, -60) },
    // Boss Commander Zhao
    { type: 'boss_tibet',   pos: new THREE.Vector3(0, plateauY, -50), isBossWave: true }
  ];

  const enterableBuildings = [
    { name: 'Tibetan Village House', inside: new THREE.Vector3(-22, 0.16, 46), outside: new THREE.Vector3(-14.5, 0, 46) },
    { name: 'Village Temple', inside: new THREE.Vector3(-37.2, 0.22, 22), outside: new THREE.Vector3(-32, 0, 22) },
    { name: 'Nomad Yak-Hair Tent', inside: new THREE.Vector3(42.2, 0.1, 48), outside: new THREE.Vector3(37, 0, 48) },
    { name: 'Ruined Stone Fort', inside: new THREE.Vector3(-50, 0.2, 4), outside: new THREE.Vector3(-42, 0, 4) },
    { name: 'Monastery Assembly Hall', inside: new THREE.Vector3(0, plateauY + 0.2, -64), outside: new THREE.Vector3(0, plateauY, -54) },
    { name: 'Ridge Prayer-Wheel Chapel', inside: new THREE.Vector3(44.5, plateauY + 0.2, -55), outside: new THREE.Vector3(46, plateauY, -47) },
    { name: "Monks' House West", inside: new THREE.Vector3(-28, plateauY + 0.16, -56), outside: new THREE.Vector3(-21, plateauY, -56) }
  ];

  const specialSpots = {
    raisedHide: tibetHide,
    crawlDen: tibetDen
  };

  return { enemySpawns, pickups, animated, disposables, enterableBuildings, specialSpots };
}
