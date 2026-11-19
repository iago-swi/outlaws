import * as THREE from 'three';
import {
  getWoodPlanks,
  getGroundTexture,
  getStoneTexture,
  createSignTexture,
  createWantedPosterTexture
} from '../engine/textures.js';
import { createSkyDome } from '../engine/shaders.js';

export const LEVEL1_META = {
  id: 'west',
  index: 0,
  themeClass: '',
  act: 'ACT I • 1884',
  title: 'RED GULCH',
  subtitle: 'Dust & Reckoning',
  heroName: 'MARSHAL ANDERSON',
  objective: 'Clear Red Gulch of Outlaws & Defeat El Diablo',
  quote: '"They burned my homestead and took everything I loved. Today, Red Gulch learns that a marshal never buries his badge."',
  musicTheme: 'west',
  enemyIcon: '★',
  currency: '$',
  arsenalSummary: [
    ['1 • .45 Peacemaker', 'Reliable 6-shooter. RMB fans the hammer.'],
    ['2 • 10-Gauge Coach Gun', 'Devastating spread for saloon clearouts.'],
    ['3 • Henry .44 Scoped', 'Vintage brass telescope zoom (RMB).'],
    ['4 • Dynamite Sticks', 'Blasts outlaws out from behind cover.']
  ],
  spawnPos: new THREE.Vector3(0, 0, 44),
  spawnYaw: 0,
  cameraPreview: { center: new THREE.Vector3(0, 4, 2), radius: 36, height: 12, speed: 0.14 }
};

export function buildLevel1(scene, collision, particles) {
  const disposables = [];
  const animated = [];
  const pickups = [];

  collision.bounds = { minX: -54, maxX: 54, minZ: -54, maxZ: 54 };

  // 1. Blazing Sunset Sky Dome & Golden Hour Lighting
  const sunDir = new THREE.Vector3(0.35, 0.24, -0.9).normalize();
  const sky = createSkyDome({
    topColor: 0x261d42,
    midColor: 0xc95826,
    horizonColor: 0xffbf66,
    sunColor: 0xfff3c4,
    sunDirection: sunDir,
    cloudTint: 0xffaa63,
    cloudDensity: 0.42
  });
  scene.add(sky.mesh);
  animated.push((t) => { sky.uniforms.uTime.value = t; });

  scene.fog = new THREE.FogExp2(0xd9854a, 0.0085);

  const hemi = new THREE.HemisphereLight(0xffcb8c, 0x6b3a22, 0.85);
  scene.add(hemi);

  const sunLight = new THREE.DirectionalLight(0xffcf82, 2.75);
  sunLight.position.copy(sunDir).multiplyScalar(95);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(2048, 2048);
  sunLight.shadow.camera.left = -65;
  sunLight.shadow.camera.right = 65;
  sunLight.shadow.camera.top = 65;
  sunLight.shadow.camera.bottom = -65;
  sunLight.shadow.camera.near = 10;
  sunLight.shadow.camera.far = 210;
  sunLight.shadow.bias = -0.0005;
  scene.add(sunLight);

  // Warm sunset rim fill light from opposite side
  const fillLight = new THREE.DirectionalLight(0x885c94, 0.45);
  fillLight.position.set(-40, 20, 60);
  scene.add(fillLight);

  // 2. Desert Ground & Dusty Main Street
  const groundTex = getGroundTexture('desert', 26, 26);
  const groundMat = new THREE.MeshStandardMaterial({
    map: groundTex.map,
    bumpMap: groundTex.bumpMap,
    bumpScale: 0.28,
    roughness: 0.94,
    metalness: 0.02
  });
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(340, 340), groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // Shared materials
  const woodWest = getWoodPlanks('western', 2, 2);
  const woodSaloon = getWoodPlanks('saloon', 2, 2);
  const woodWeath = getWoodPlanks('weathered', 2, 2);
  const redRock = getStoneTexture('redrock', 3, 2);

  const matWood = new THREE.MeshStandardMaterial({ map: woodWest.map, bumpMap: woodWest.bumpMap, bumpScale: 0.12, roughness: 0.85 });
  const matSaloon = new THREE.MeshStandardMaterial({ map: woodSaloon.map, bumpMap: woodSaloon.bumpMap, bumpScale: 0.14, roughness: 0.8 });
  const matWeathered = new THREE.MeshStandardMaterial({ map: woodWeath.map, bumpMap: woodWeath.bumpMap, bumpScale: 0.12, roughness: 0.9 });
  const matDarkWood = new THREE.MeshStandardMaterial({ color: 0x3b2314, roughness: 0.88 });
  const matRedRock = new THREE.MeshStandardMaterial({ map: redRock.map, bumpMap: redRock.bumpMap, bumpScale: 0.35, roughness: 0.92 });
  const matWindowGlow = new THREE.MeshStandardMaterial({ color: 0xffd27a, emissive: 0xff9a2e, emissiveIntensity: 1.4, roughness: 0.25 });
  const matHay = new THREE.MeshStandardMaterial({ color: 0xd1a94b, roughness: 0.95 });
  const matCactus = new THREE.MeshStandardMaterial({ color: 0x3f6b36, roughness: 0.82 });
  const matCanvas = new THREE.MeshStandardMaterial({ color: 0xeadbc0, roughness: 0.92, side: THREE.DoubleSide });
  const matMetal = new THREE.MeshStandardMaterial({ color: 0x453e3a, metalness: 0.72, roughness: 0.4 });
  const wantedMat = new THREE.MeshStandardMaterial({ map: createWantedPosterTexture(), roughness: 0.85 });

  // Helper: Western Frontier Building with Porch, False-Front Facade, Glowing Windows, Sign & Lantern!
  function buildWesternBuilding(opts) {
    const {
      x, z, w, h, d, rotY = 0,
      wallMat = matWood,
      signText = '',
      signSub = '',
      twoStory = false,
      addLantern = true
    } = opts;

    const grp = new THREE.Group();
    grp.position.set(x, 0, z);
    grp.rotation.y = rotY;

    // Main building body
    const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wallMat);
    body.position.y = h * 0.5;
    body.castShadow = true;
    body.receiveShadow = true;
    grp.add(body);

    // Classic Wild West False-Front Parapet Wall
    const parapetH = twoStory ? 2.4 : 1.9;
    const facade = new THREE.Mesh(new THREE.BoxGeometry(w + 0.3, parapetH, 0.45), wallMat);
    facade.position.set(0, h + parapetH * 0.5 - 0.1, d * 0.5 - 0.15);
    facade.castShadow = true;
    grp.add(facade);

    // Decorative cornice molding
    const cornice = new THREE.Mesh(new THREE.BoxGeometry(w + 0.75, 0.32, 0.75), matDarkWood);
    cornice.position.set(0, h + parapetH - 0.05, d * 0.5 - 0.05);
    grp.add(cornice);

    // Raised wooden boardwalk porch
    const porchD = 2.8;
    const porchDeck = new THREE.Mesh(new THREE.BoxGeometry(w + 0.4, 0.36, porchD), matWeathered);
    porchDeck.position.set(0, 0.18, d * 0.5 + porchD * 0.5);
    porchDeck.receiveShadow = true;
    grp.add(porchDeck);

    // Porch awning roof
    const awningY = twoStory ? 4.2 : h - 0.4;
    const awning = new THREE.Mesh(new THREE.BoxGeometry(w + 0.6, 0.22, porchD + 0.5), matDarkWood);
    awning.position.set(0, awningY, d * 0.5 + porchD * 0.5);
    awning.rotation.x = 0.14;
    awning.castShadow = true;
    grp.add(awning);

    // Porch support posts
    const postCount = Math.max(2, Math.floor(w / 3.4) + 1);
    for (let i = 0; i < postCount; i++) {
      const px = -w * 0.46 + (i / (postCount - 1)) * (w * 0.92);
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.24, awningY - 0.2, 0.24), matDarkWood);
      post.position.set(px, (awningY + 0.2) * 0.5, d * 0.5 + porchD - 0.22);
      post.castShadow = true;
      grp.add(post);
    }

    // Upper Balcony for Two-Story Saloon
    if (twoStory) {
      const railFront = new THREE.Mesh(new THREE.BoxGeometry(w + 0.3, 0.14, 0.14), matDarkWood);
      railFront.position.set(0, awningY + 1.15, d * 0.5 + porchD - 0.2);
      grp.add(railFront);
      for (let rx = -w * 0.45; rx <= w * 0.45; rx += 1.1) {
        const bal = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.0, 0.1), matDarkWood);
        bal.position.set(rx, awningY + 0.65, d * 0.5 + porchD - 0.2);
        grp.add(bal);
      }
    }

    // Door & Batwing Saloon Doors or Recessed Doorway
    const doorFrame = new THREE.Mesh(new THREE.BoxGeometry(2.1, 2.9, 0.24), matDarkWood);
    doorFrame.position.set(0, 1.8, d * 0.5 + 0.04);
    grp.add(doorFrame);
    const doorWarm = new THREE.Mesh(new THREE.BoxGeometry(1.72, 2.55, 0.28), matWindowGlow);
    doorWarm.position.set(0, 1.75, d * 0.5 + 0.05);
    grp.add(doorWarm);

    if (signText === 'SALOON') {
      // Iconic Saloon Batwing swinging doors
      for (const side of [-1, 1]) {
        const wing = new THREE.Mesh(new THREE.BoxGeometry(0.78, 1.55, 0.1), matSaloon);
        wing.position.set(side * 0.44, 1.5, d * 0.5 + 0.22);
        wing.rotation.y = side * 0.22;
        grp.add(wing);
      }
    }

    // Glowing framed windows
    const winPositions = [-w * 0.32, w * 0.32];
    for (const wx of winPositions) {
      const wf = new THREE.Mesh(new THREE.BoxGeometry(1.65, 1.75, 0.2), matDarkWood);
      wf.position.set(wx, 2.1, d * 0.5 + 0.04);
      const wg = new THREE.Mesh(new THREE.BoxGeometry(1.35, 1.45, 0.24), matWindowGlow);
      wg.position.set(wx, 2.1, d * 0.5 + 0.06);
      grp.add(wf, wg);

      if (twoStory) {
        const wf2 = wf.clone();
        wf2.position.y = 6.2;
        const wg2 = wg.clone();
        wg2.position.y = 6.2;
        grp.add(wf2, wg2);
      }
    }

    // Vintage Painted Wooden Sign
    if (signText) {
      const signTex = createSignTexture(signText, {
        sub: signSub,
        bg: signText === 'SALOON' ? '#4a1812' : '#2d1b10',
        border: '#e8ad4a',
        fg: '#fff2d2'
      });
      const signW = Math.min(w * 0.82, 7.6);
      const signH = 2.1;
      const signMesh = new THREE.Mesh(
        new THREE.BoxGeometry(signW, signH, 0.18),
        [matDarkWood, matDarkWood, matDarkWood, matDarkWood, new THREE.MeshStandardMaterial({ map: signTex, roughness: 0.65 }), matDarkWood]
      );
      signMesh.position.set(0, h + parapetH * 0.45, d * 0.5 + 0.16);
      grp.add(signMesh);
    }

    // Hanging glowing porch lantern
    if (addLantern) {
      const lantern = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.12, 0.36, 8), matWindowGlow);
      lantern.position.set(0, awningY - 0.55, d * 0.5 + porchD - 0.35);
      grp.add(lantern);
      const pt = new THREE.PointLight(0xffa947, 7.5, 16, 1.6);
      pt.position.set(0, awningY - 0.7, d * 0.5 + porchD - 0.35);
      grp.add(pt);
      animated.push((t) => {
        pt.intensity = 7.0 + Math.sin(t * 7.2 + x) * 1.1;
      });
    }

    // Wanted poster tacked onto building front
    const poster = new THREE.Mesh(new THREE.PlaneGeometry(0.75, 1.0), wantedMat);
    poster.position.set(w * 0.16, 2.0, d * 0.5 + 0.16);
    grp.add(poster);

    scene.add(grp);

    // Collision AABB (compute rotated dimensions for 0, PI/2, -PI/2, PI)
    const cos = Math.abs(Math.cos(rotY));
    const colW = cos > 0.5 ? w : d;
    const colD = cos > 0.5 ? d : w;
    collision.addBox(x, h * 0.5, z, colW, h + 3, colD, 'wood');
  }

  // ---- GRAND SALOON at North End of Main Street ----
  buildWesternBuilding({
    x: 0, z: -30, w: 17, h: 8.6, d: 11, rotY: 0,
    wallMat: matSaloon, signText: 'SALOON', signSub: 'WHISKEY • FARO • POKER', twoStory: true
  });

  // ---- WEST SIDE OF MAIN STREET (facing East, rotY = Math.PI/2) ----
  buildWesternBuilding({
    x: -20, z: -10, w: 11, h: 5.5, d: 9, rotY: Math.PI / 2,
    wallMat: matWood, signText: 'SHERIFF', signSub: 'RED GULCH JAIL'
  });
  buildWesternBuilding({
    x: -21, z: 8, w: 12, h: 6.2, d: 9, rotY: Math.PI / 2,
    wallMat: matWeathered, signText: 'BANK', signSub: 'GOLD & BULLION'
  });
  buildWesternBuilding({
    x: -20, z: 26, w: 10, h: 5.0, d: 8.5, rotY: Math.PI / 2,
    wallMat: matWood, signText: 'LIVERY', signSub: 'STABLES & FEED', addLantern: false
  });

  // ---- EAST SIDE OF MAIN STREET (facing West, rotY = -Math.PI/2) ----
  buildWesternBuilding({
    x: 20, z: -11, w: 11.5, h: 5.8, d: 9, rotY: -Math.PI / 2,
    wallMat: matWeathered, signText: 'GENERAL', signSub: 'DRY GOODS & AMMO'
  });
  buildWesternBuilding({
    x: 21, z: 7, w: 11, h: 5.4, d: 8.5, rotY: -Math.PI / 2,
    wallMat: matSaloon, signText: 'HOTEL', signSub: 'FRONTIER INN'
  });

  // ---- WOODEN CORRAL (Southeast quadrant, with split-rail fences, hay bales, trough & wagon!) ----
  const corralGroup = new THREE.Group();
  const corralX = 24, corralZ = 27, corralW = 16, corralD = 14;
  function addFenceSegment(x1, z1, x2, z2) {
    const dx = x2 - x1, dz = z2 - z1;
    const len = Math.hypot(dx, dz);
    const angle = Math.atan2(dx, dz);
    const seg = new THREE.Group();
    seg.position.set((x1 + x2) * 0.5, 0, (z1 + z2) * 0.5);
    seg.rotation.y = angle;

    for (const ry of [0.55, 1.15, 1.7]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.14, len), matWeathered);
      rail.position.y = ry;
      rail.castShadow = true;
      seg.add(rail);
    }
    const posts = Math.max(2, Math.round(len / 3));
    for (let i = 0; i <= posts; i++) {
      const pz = -len * 0.5 + (i / posts) * len;
      const p = new THREE.Mesh(new THREE.BoxGeometry(0.22, 2.0, 0.22), matDarkWood);
      p.position.set(0, 1.0, pz);
      p.castShadow = true;
      seg.add(p);
    }
    corralGroup.add(seg);
    collision.addBox((x1 + x2) * 0.5, 1.0, (z1 + z2) * 0.5, Math.abs(dx) + 0.5, 2.0, Math.abs(dz) + 0.5, 'wood');
  }

  addFenceSegment(corralX - corralW / 2, corralZ - corralD / 2, corralX + corralW / 2, corralZ - corralD / 2);
  addFenceSegment(corralX + corralW / 2, corralZ - corralD / 2, corralX + corralW / 2, corralZ + corralD / 2);
  addFenceSegment(corralX - corralW / 2, corralZ + corralD / 2, corralX + corralW / 2, corralZ + corralD / 2);
  // Leave an open gate on the West side so the player can dart into the corral!
  addFenceSegment(corralX - corralW / 2, corralZ - corralD / 2, corralX - corralW / 2, corralZ - 2.5);
  addFenceSegment(corralX - corralW / 2, corralZ + 2.5, corralX - corralW / 2, corralZ + corralD / 2);
  scene.add(corralGroup);

  // Hay bales inside corral & main street cover
  const hayPositions = [
    [23, 25], [25, 25], [24, 24, 1.1], [27, 30], [18, 22],
    [-9, 18], [9, 12], [-8, -6], [8, -14]
  ];
  for (const [hx, hz, hy = 0.55] of hayPositions) {
    const bale = new THREE.Mesh(new THREE.BoxGeometry(1.9, 1.1, 1.3), matHay);
    bale.position.set(hx, hy, hz);
    bale.rotation.y = (hx * 0.37) % 1.2;
    bale.castShadow = true;
    bale.receiveShadow = true;
    scene.add(bale);
    if (hy < 0.8) collision.addBox(hx, 0.55, hz, 1.9, 1.1, 1.3, 'wood');
  }

  // ---- COVERED FRONTIER WAGON (Center-East Main Street cover!) ----
  function addWagon(wx, wz, rotY) {
    const wgrp = new THREE.Group();
    wgrp.position.set(wx, 0, wz);
    wgrp.rotation.y = rotY;

    const bed = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.9, 4.6), matWood);
    bed.position.y = 1.25;
    bed.castShadow = true;
    wgrp.add(bed);

    // Arched canvas cover
    const canopy = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.25, 4.4, 12, 1, true, 0, Math.PI), matCanvas);
    canopy.rotation.z = Math.PI / 2;
    canopy.rotation.y = Math.PI / 2;
    canopy.position.y = 1.72;
    canopy.castShadow = true;
    wgrp.add(canopy);

    // 4 spoked wheels
    for (const [lx, lz] of [[-1.3, -1.5], [1.3, -1.5], [-1.3, 1.5], [1.3, 1.5]]) {
      const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.68, 0.08, 6, 14), matDarkWood);
      wheel.rotation.y = Math.PI / 2;
      wheel.position.set(lx, 0.72, lz);
      wheel.castShadow = true;
      wgrp.add(wheel);
    }
    scene.add(wgrp);
    collision.addBox(wx, 1.4, wz, 3.0, 2.8, 4.8, 'wood');
  }
  addWagon(6.5, 22, 0.35);
  addWagon(-7.5, 2, -0.25);

  // ---- WATER TOWER ON TIMBER STILTS ----
  const wtGrp = new THREE.Group();
  wtGrp.position.set(-22, 0, -28);
  for (const [lx, lz] of [[-2, -2], [2, -2], [-2, 2], [2, 2]]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.45, 9.5, 0.45), matDarkWood);
    leg.position.set(lx, 4.75, lz);
    leg.castShadow = true;
    wtGrp.add(leg);
  }
  const tank = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.2, 4.8, 16), matWeathered);
  tank.position.y = 11.4;
  tank.castShadow = true;
  const hoop1 = new THREE.Mesh(new THREE.TorusGeometry(3.25, 0.09, 6, 20), matMetal);
  hoop1.rotation.x = Math.PI / 2;
  hoop1.position.y = 10.2;
  const hoop2 = hoop1.clone();
  hoop2.position.y = 12.6;
  const wtRoof = new THREE.Mesh(new THREE.ConeGeometry(3.7, 2.4, 16), matDarkWood);
  wtRoof.position.y = 15.0;
  wtRoof.castShadow = true;
  wtGrp.add(tank, hoop1, hoop2, wtRoof);
  scene.add(wtGrp);
  collision.addBox(-22, 4.5, -28, 4.8, 9.0, 4.8, 'wood');

  // ---- WOODEN BARRELS & CRATES (tactical street cover!) ----
  const coverSpots = [
    [-6, 30], [7, 34], [-11, 14], [11, 4], [-5, -16], [6, -18], [13, -24], [-13, -22]
  ];
  for (const [cx, cz] of coverSpots) {
    const crate = new THREE.Mesh(new THREE.BoxGeometry(1.45, 1.35, 1.45), matWood);
    crate.position.set(cx, 0.675, cz);
    crate.rotation.y = cx * 0.5;
    crate.castShadow = true;
    crate.receiveShadow = true;
    scene.add(crate);

    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.44, 1.25, 12), matSaloon);
    barrel.position.set(cx + 1.15, 0.625, cz + 0.4);
    barrel.castShadow = true;
    scene.add(barrel);

    collision.addBox(cx + 0.4, 0.7, cz + 0.15, 2.5, 1.4, 1.9, 'wood');
  }

  // ---- DESERT SAGUARO CACTI & RED-ROCK MONUMENT VALLEY MESAS ----
  function addCactus(cx, cz, scale = 1) {
    const g = new THREE.Group();
    g.position.set(cx, 0, cz);
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.38, 4.2, 10), matCactus);
    trunk.position.y = 2.1;
    trunk.castShadow = true;
    const arm1 = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.24, 1.6, 8), matCactus);
    arm1.position.set(0.75, 2.7, 0);
    const elbow1 = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.38, 0.38), matCactus);
    elbow1.position.set(0.42, 2.0, 0);
    const arm2 = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.24, 1.4, 8), matCactus);
    arm2.position.set(-0.72, 3.1, 0);
    const elbow2 = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.38, 0.38), matCactus);
    elbow2.position.set(-0.4, 2.5, 0);
    g.add(trunk, arm1, elbow1, arm2, elbow2);
    g.rotation.y = cx * 0.8;
    g.scale.setScalar(scale);
    scene.add(g);
  }
  const cactiCoords = [
    [-34, 38, 1.1], [36, 40, 1.2], [-38, -22, 1.3], [38, -28, 1.05],
    [-42, 6, 1.15], [44, 12, 1.25], [14, 44, 0.95], [-16, 42, 1.0]
  ];
  for (const [cx, cz, sc] of cactiCoords) addCactus(cx, cz, sc);

  // Monument Valley Distant Mesas & Canyon Rim!
  const mesaSpecs = [
    [0, -115, 58, 36, 26],
    [-82, -96, 44, 42, 32],
    [85, -90, 48, 38, 30],
    [-118, -10, 34, 34, 54],
    [118, 5, 36, 32, 58],
    [-85, 95, 52, 28, 34],
    [76, 102, 56, 30, 32]
  ];
  for (const [mx, mz, mw, mh, md] of mesaSpecs) {
    const base = new THREE.Mesh(new THREE.CylinderGeometry(mw * 0.42, mw * 0.68, mh, 7), matRedRock);
    base.position.set(mx, mh * 0.5 - 1, mz);
    base.rotation.y = mx * 0.1;
    scene.add(base);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(mw * 0.46, mw * 0.42, 4.5, 7), matRedRock);
    cap.position.set(mx, mh - 1.5, mz);
    cap.rotation.y = mx * 0.1;
    scene.add(cap);
  }

  // ---- AMBIENT DUST & ROLLING TUMBLEWEEDS ----
  particles.initAmbient('dust', collision.bounds);
  particles.addTumbleweed(new THREE.Vector3(-25, 0.7, 15), 1);
  particles.addTumbleweed(new THREE.Vector3(20, 0.7, -4), -1);

  // ---- STRATEGIC PICKUPS (Health Whiskey & Ammo Crates) ----
  const pickupDefs = [
    { type: 'health', pos: new THREE.Vector3(-12, 0.8, 20), label: 'FRONTIER ELIXIR (+35 HP)' },
    { type: 'ammo',   pos: new THREE.Vector3(12, 0.8, 10),  label: 'AMMO BANDOLIER' },
    { type: 'health', pos: new THREE.Vector3(24, 0.8, 28),  label: 'CORRAL MEDKIT (+35 HP)' },
    { type: 'ammo',   pos: new THREE.Vector3(-10, 0.8, -14), label: 'RIFLE & SHELL BOX' },
    { type: 'health', pos: new THREE.Vector3(11, 0.8, -22), label: 'SALOON TONIC (+35 HP)' }
  ];
  for (const pd of pickupDefs) {
    const mesh = createPickupMesh(pd.type);
    mesh.position.copy(pd.pos);
    scene.add(mesh);
    pickups.push({ ...pd, mesh, collected: false });
  }

  // ---- ENEMY ROSTER (Cowboys, Mexican Banditos & Boss El Diablo) ----
  const enemySpawns = [
    { type: 'cowboy',  pos: new THREE.Vector3(-6, 0, 18) },
    { type: 'cowboy',  pos: new THREE.Vector3(9, 0, 14) },
    { type: 'bandito', pos: new THREE.Vector3(-11, 0, 3) },
    { type: 'cowboy',  pos: new THREE.Vector3(11, 0, -2) },
    { type: 'bandito', pos: new THREE.Vector3(23, 0, 24) },
    { type: 'bandito', pos: new THREE.Vector3(-4, 0, -10) },
    { type: 'cowboy',  pos: new THREE.Vector3(9, 0, -15) },
    { type: 'bandito', pos: new THREE.Vector3(-11, 0, -20) },
    { type: 'cowboy',  pos: new THREE.Vector3(12, 0, -24) },
    { type: 'bandito', pos: new THREE.Vector3(0, 0, -18) },
    { type: 'boss_west', pos: new THREE.Vector3(0, 0, -21), isBossWave: true }
  ];

  return { enemySpawns, pickups, animated, disposables };
}

export function createPickupMesh(type) {
  const grp = new THREE.Group();
  const isHealth = type === 'health';
  const mat = new THREE.MeshStandardMaterial({
    color: isHealth ? 0x2ecc71 : 0xf2b749,
    emissive: isHealth ? 0x168043 : 0xb37412,
    emissiveIntensity: 0.75,
    metalness: 0.35,
    roughness: 0.3
  });
  const body = isHealth
    ? new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.34, 0.72, 10), mat)
    : new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.48, 0.52), mat);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.55, 0.04, 6, 18),
    new THREE.MeshBasicMaterial({ color: isHealth ? 0x6dffaa : 0xffe484 })
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = -0.32;
  grp.add(body, ring);
  return grp;
}
