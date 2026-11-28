import * as THREE from 'three';
import { getGroundTexture, getStoneTexture, getWoodPlanks } from '../engine/textures.js';
import { createSkyDome, createWaterMesh } from '../engine/shaders.js';
import {
  buildHollowRoom,
  buildCrawlDen,
  buildLadder,
  addSolidBox,
  addAltar,
  addTableAndChairs,
  addStairFlight
} from '../engine/buildings.js';
import { createPickupMesh } from './level1_west.js';

export const LEVEL9_META = {
  id: 'aztec',
  index: 8,
  themeClass: 'theme-aztec',
  act: 'ACT IX • 30 JUNE 1520',
  title: 'TENOCHTITLAN',
  subtitle: 'Evening on Lake Texcoco · Noche Triste',
  heroName: 'CUAUHTÉMOC',
  objective: 'Storm the Great Temple, Cross Lake Texcoco & Stop Captain Luján on the Far Shore',
  quote: '"The great drum sounds from the temple crown. The strangers steal out over the western causeway heavy with gold — do not let them reach the shore."',
  musicTheme: 'aztec',
  enemyIcon: '☀',
  currency: '◎',
  spawnPos: new THREE.Vector3(0, 0, 19),
  spawnYaw: 0,
  cameraPreview: { center: new THREE.Vector3(0, 10, 24), radius: 52, height: 26, speed: 0.085 }
};

export function buildLevel9(scene, collision, particles) {
  const disposables = [];
  const animated = [];
  const pickups = [];

  collision.bounds = { minX: -88, maxX: 88, minZ: -122, maxZ: 108 };

  // Continuous terrain height function:
  // - Tenochtitlan island: x in [-74, 74], z in [-16, 98] -> y = 0 (except city canal at x in [-54, -46], z in [-16, 26] -> -1.35)
  // - Lake Texcoco: z in (-88, -16) -> deep sunken lakebed y = -1.45 (enables deep-water rescue & blocks wading!)
  // - Far mainland shore: z <= -88 -> gentle rise 0.0 .. 1.4
  const terrainH = (x, z) => {
    if (z <= -88) {
      return Math.min(1.4, Math.max(0, (-88 - z) * 0.032));
    }
    if (z >= -16 && Math.abs(x) <= 74) {
      if (x >= -54 && x <= -46 && z >= -16 && z <= 26) {
        return -1.35; // City canal cut through urban island
      }
      return 0;
    }
    return -1.45; // Open Lake Texcoco sunken bed
  };
  collision.setHeightFunction(terrainH);
  collision.setWaterLevel(0.0);

  // 1. Evening Sky (low warm sun, rain easing, far shores & smoking volcano clearly visible!)
  const sunDir = new THREE.Vector3(-0.62, 0.24, -0.75).normalize();
  const sky = createSkyDome({
    topColor: 0x222645, midColor: 0x6b3d4a, horizonColor: 0xd97d42,
    sunColor: 0xffb85c, sunDirection: sunDir, cloudTint: 0x8f6664, cloudDensity: 0.42
  });
  scene.add(sky.mesh);
  animated.push((t) => { sky.uniforms.uTime.value = t; });

  scene.fog = new THREE.FogExp2(0x634b4c, 0.0026);
  scene.add(new THREE.HemisphereLight(0xf5b884, 0x3b483d, 1.15));

  const sun = new THREE.DirectionalLight(0xffb56b, 2.2);
  sun.position.copy(sunDir).multiplyScalar(140);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -105;
  sun.shadow.camera.right = 105;
  sun.shadow.camera.top = 105;
  sun.shadow.camera.bottom = -105;
  sun.shadow.near = 10;
  sun.shadow.far = 310;
  sun.shadow.bias = -0.0005;
  scene.add(sun);

  // 2. Lake Texcoco Water Surface (y = -0.08 visual, waterLevel = 0.0 in collision)
  const lake = createWaterMesh(640, 640, {
    deepColor: 0x10303b, shallowColor: 0x265e68, foamColor: 0xdccbb8,
    sunColor: 0xffae66, sunDir, opacity: 0.90, waveScale: 0.10
  });
  lake.mesh.position.set(0, -0.08, -32);
  scene.add(lake.mesh);
  animated.push((t) => { lake.uniforms.uTime.value = t; });

  // Shared PBR Materials
  const stoneTex = getStoneTexture('castle', 2, 2);
  const cobbleTex = getGroundTexture('cobble', 8, 8);
  const grassTex = getGroundTexture('alpine_grass', 10, 10);
  const woodTex = getWoodPlanks('western', 2, 2);

  const matVolcanic = new THREE.MeshStandardMaterial({ map: stoneTex.map, color: 0x7b7168, roughness: 0.92 });
  const matDarkStone = new THREE.MeshStandardMaterial({ map: stoneTex.map, color: 0x4f4742, roughness: 0.94 });
  const matStucco = new THREE.MeshStandardMaterial({ color: 0xefe6d4, roughness: 0.86 });
  const matRedOchre = new THREE.MeshStandardMaterial({ color: 0xa83226, roughness: 0.80 });
  const matBlueTlaloc = new THREE.MeshStandardMaterial({ color: 0x246e8f, roughness: 0.78 });
  const matPlaza = new THREE.MeshStandardMaterial({ map: cobbleTex.map, color: 0xbcb09c, roughness: 0.88 });
  const matGrass = new THREE.MeshStandardMaterial({ map: grassTex.map, color: 0x4a6b38, roughness: 0.92 });
  const matTimber = new THREE.MeshStandardMaterial({ map: woodTex.map, color: 0x6e4729, roughness: 0.86 });
  const matDarkWood = new THREE.MeshStandardMaterial({ color: 0x3b2516, roughness: 0.90 });
  const matReed = new THREE.MeshStandardMaterial({ color: 0xb89c56, roughness: 0.95 });
  const matGold = new THREE.MeshStandardMaterial({ color: 0xf7c53b, metalness: 0.92, roughness: 0.18, emissive: 0x4a3104, emissiveIntensity: 0.25 });
  const matBone = new THREE.MeshStandardMaterial({ color: 0xebe3d0, roughness: 0.76 });
  const matLeaf = new THREE.MeshStandardMaterial({ color: 0x2f5e2c, roughness: 0.88 });
  const matDarkLeaf = new THREE.MeshStandardMaterial({ color: 0x1e4020, roughness: 0.90 });
  const matFlame = new THREE.MeshBasicMaterial({ color: 0xff922b });

  // Island Ground Slab (split around the city canal at x = -54..-46, z = -16..26!)
  const addGroundSlab = (cx, cz, w, d, mat = matPlaza) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, 1.5, d), mat);
    m.position.set(cx, -0.75, cz);
    m.receiveShadow = true;
    scene.add(m);
  };
  addGroundSlab(14, 47, 120, 126, matPlaza);       // Main island east of canal (x = -46..74, z = -16..110)
  addGroundSlab(-64, 47, 20, 126, matPlaza);       // West bank of city canal (x = -74..-54, z = -16..110)
  addGroundSlab(-50, 68, 8, 84, matPlaza);         // South of canal (x = -54..-46, z = 26..110)
  // Stone canal quay retaining walls (just up to water rim so players can step cleanly on/off bridges)
  const qL = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.4, 42), matDarkStone);
  qL.position.set(-54.1, -0.68, 5);
  const qR = qL.clone();
  qR.position.x = -45.9;
  scene.add(qL, qR);

  // Far Mainland Shore visual mesh (z = -88..-132)
  {
    const mGeo = new THREE.PlaneGeometry(220, 56, 24, 12);
    mGeo.rotateX(-Math.PI / 2);
    const pos = mGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const vx = pos.getX(i);
      const vz = pos.getZ(i) - 114;
      pos.setY(i, terrainH(vx, vz));
    }
    mGeo.computeVertexNormals();
    const mMesh = new THREE.Mesh(mGeo, matGrass);
    mMesh.position.set(0, 0, -114);
    mMesh.receiveShadow = true;
    scene.add(mMesh);
  }

  // Helper: Gleaming Dropped / Altar Gold Objects (Item 36: pectorals, sun discs, bars, small figures, bells, golden skulls!)
  function addGoldTreasure(x, y, z, kind = 'mixed') {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    if (kind === 'sun' || kind === 'mixed') {
      const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.04, 12), matGold);
      disc.rotation.x = 0.2;
      disc.position.set(0, 0.06, 0);
      g.add(disc);
    }
    if (kind === 'bars' || kind === 'mixed') {
      for (let i = 0; i < 3; i++) {
        const bar = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.09, 0.12), matGold);
        bar.position.set((i - 1) * 0.22, 0.05 + (i === 1 ? 0.08 : 0), 0.16);
        bar.rotation.y = i * 0.4;
        g.add(bar);
      }
    }
    if (kind === 'pectoral' || kind === 'mixed') {
      const pec = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.045, 6, 12, Math.PI), matGold);
      pec.rotation.x = Math.PI / 2;
      pec.position.set(-0.24, 0.05, -0.14);
      g.add(pec);
    }
    if (kind === 'figure' || kind === 'mixed') {
      const fig = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.28, 7), matGold);
      fig.position.set(0.26, 0.14, -0.12);
      const fHead = new THREE.Mesh(new THREE.SphereGeometry(0.07, 7, 6), matGold);
      fHead.position.set(0.26, 0.30, -0.12);
      g.add(fig, fHead);
    }
    if (kind === 'skull') {
      const sk = new THREE.Mesh(new THREE.SphereGeometry(0.14, 9, 8), matGold);
      sk.position.set(0, 0.14, 0);
      const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.09, 0.14), matGold);
      jaw.position.set(0, 0.05, 0.05);
      g.add(sk, jaw);
    }
    if (kind === 'bell') {
      const bell = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.20, 8), matGold);
      bell.position.set(0, 0.10, 0);
      g.add(bell);
    }
    scene.add(g);
  }

  // Helper: Flaming Stone Brazier
  function addBrazier(x, y, z) {
    addSolidBox(scene, collision, x, y + 0.45, z, 0.85, 0.9, 0.85, matDarkStone, 'stone');
    const fl = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.72, 6), matFlame);
    fl.position.set(x, y + 1.18, z);
    scene.add(fl);
    animated.push((t) => { fl.scale.y = 0.85 + Math.sin(t * 14 + x) * 0.22; });
  }

  // =========================================================================
  // 3. THE GREAT TEMPLE (TEMPLO MAYOR — ~17m CLIMBABLE STEPPED PYRAMID!)
  // =========================================================================
  const pyrTopY = 16.8;
  {
    // 6 massive stepped stone pyramid tiers (centered at x = 0, z = 86.5 so north summit edge sits flush at z = 79.5!)
    const pyrZ = 86.5;
    const tiers = [
      { w: 30, d: 24,   y0: 0.0,  y1: 2.8 },
      { w: 27, d: 21.5, y0: 2.8,  y1: 5.6 },
      { w: 24, d: 19.0, y0: 5.6,  y1: 8.4 },
      { w: 21, d: 16.5, y0: 8.4,  y1: 11.2 },
      { w: 19, d: 15.0, y0: 11.2, y1: 14.0 },
      { w: 18, d: 14.0, y0: 14.0, y1: pyrTopY }
    ];
    for (const tr of tiers) {
      const h = tr.y1 - tr.y0;
      const box = new THREE.Mesh(new THREE.BoxGeometry(tr.w, h, tr.d), matVolcanic);
      box.position.set(0, tr.y0 + h * 0.5, pyrZ);
      box.castShadow = true;
      box.receiveShadow = true;
      scene.add(box);
      collision.addBox(0, tr.y0 + h * 0.5, pyrZ, tr.w, h, tr.d, 'stone');
      collision.addWalkable(0, pyrZ, tr.w - 0.3, tr.d - 0.3, tr.y1);
    }

    // Broad Front Staircase up North face (z = 22.0 at ground -> z = 79.5 flush onto summit y = 16.8m!)
    // 46 low steps (rise = 0.365m, tread = 1.25m > 1.2m nav cell): adjacent nav cells NEVER skip a step
    // (max Delta-h = 0.365m <= 0.48m), SOLID masonry underneath so BOTH player & A* enemies climb cleanly!
    const stairSteps = 46;
    const stairW = 9.2;
    const stairStartZ = 22.0;
    const stairEndZ = 79.5;
    const stepTread = (stairEndZ - stairStartZ) / stairSteps;
    const stepRise = pyrTopY / stairSteps;

    for (let i = 0; i < stairSteps; i++) {
      const sy = (i + 1) * stepRise;
      const sz = stairStartZ + (i + 0.5) * stepTread;
      const m = new THREE.Mesh(new THREE.BoxGeometry(stairW, sy, stepTread + 0.04), i % 4 === 0 ? matDarkStone : matVolcanic);
      m.position.set(0, sy * 0.5, sz);
      m.receiveShadow = true;
      scene.add(m);
      collision.addWalkable(0, sz, stairW + 0.2, stepTread + 0.06, sy);
    }
    // Flush summit landing bridge connecting the top stair step cleanly onto the y=16.8m terrace!
    collision.addWalkable(0, 80.2, stairW + 1.2, 2.6, pyrTopY);
    // Sloped flanking stair balustrades (alfardas) guiding walkers cleanly up the stair!
    for (const s of [-1, 1]) {
      for (let k = 0; k < 14; k++) {
        const frac = (k + 0.5) / 14;
        const bz = stairStartZ + frac * (stairEndZ - stairStartZ);
        const by = frac * pyrTopY;
        addSolidBox(scene, collision, s * (stairW * 0.5 + 0.55), by * 0.5 + 0.45, bz, 0.9, by + 0.9, 4.3, matDarkStone, 'stone');
      }
    }

    // Two Top Shrines (Tlaloc in blue on West, Huitzilopochtli in red on East) with tall Roof Combs, Gold Altars & Braziers!
    for (const [sx, sMat] of [[-4.8, matBlueTlaloc], [4.8, matRedOchre]]) {
      const sh = buildHollowRoom(scene, collision, {
        cx: sx, cz: 89.0, w: 6.0, d: 6.2, h: 4.2, floorY: pyrTopY,
        wallMat: matStucco, floorMat: matVolcanic, roofMat: sMat, roofStyle: 'flat',
        north: [{ type: 'door', offset: 0, width: 2.8, height: 3.1 }]
      });
      const comb = new THREE.Mesh(new THREE.BoxGeometry(5.6, 2.8, 0.65), sMat);
      comb.position.set(sx, pyrTopY + 5.7, 89.0);
      const crest = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.9, 0.72), matStucco);
      crest.position.set(sx, pyrTopY + 7.4, 89.0);
      scene.add(comb, crest);
      addAltar(scene, collision, sx, sh.floorY, 91.0, 1.8, 1.0, matDarkStone, sx < 0 ? 0x246e8f : 0xa83226);
      addGoldTreasure(sx, sh.floorY + 1.12, 91.0, 'mixed');
      addGoldTreasure(sx + 0.55, sh.floorY + 1.12, 90.9, 'skull');
      addBrazier(sx < 0 ? -7.8 : 7.8, pyrTopY, 84.2);
    }

    // Great War Drum (Huehuetl) & Unarmed Mexica Drummer on the Great Temple crown!
    const drumX = 0, drumZ = 83.2;
    const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.38, 1.25, 12), matTimber);
    drum.position.set(drumX, pyrTopY + 0.625, drumZ);
    const drumHead = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.04, 12), matBone);
    drumHead.position.set(drumX, pyrTopY + 1.26, drumZ);
    scene.add(drum, drumHead);
    collision.addBox(drumX, pyrTopY + 0.65, drumZ, 1.0, 1.3, 1.0, 'wood');

    // Unarmed Mexica Drummer standing south of the drum beating it steadily
    const drGrp = new THREE.Group();
    drGrp.position.set(drumX, pyrTopY, drumZ + 0.95);
    drGrp.rotation.y = Math.PI;
    const drSkin = new THREE.MeshStandardMaterial({ color: 0xb87b52, roughness: 0.78 });
    const drBody = new THREE.Mesh(new THREE.BoxGeometry(0.50, 0.72, 0.28), matStucco);
    drBody.position.y = 1.16;
    const drKilt = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.34, 0.48, 8), matRedOchre);
    drKilt.position.y = 0.72;
    const drLegL = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.8, 7), drSkin);
    drLegL.position.set(-0.14, 0.4, 0);
    const drLegR = drLegL.clone();
    drLegR.position.x = 0.14;
    const drHead = new THREE.Mesh(new THREE.SphereGeometry(0.20, 10, 8), drSkin);
    drHead.position.y = 1.72;
    const drPlume = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.36, 6), new THREE.MeshStandardMaterial({ color: 0x1bb58c, roughness: 0.65 }));
    drPlume.position.set(0, 1.98, 0);
    const drArmL = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.065, 0.56, 7), drSkin);
    drArmL.position.set(-0.32, 1.26, 0.24);
    drArmL.rotation.x = -1.1;
    const drArmR = drArmL.clone();
    drArmR.position.x = 0.32;
    drGrp.add(drBody, drKilt, drLegL, drLegR, drHead, drPlume, drArmL, drArmR);
    scene.add(drGrp);
    animated.push((t) => {
      drArmL.rotation.x = -1.05 + Math.sin(t * 7.5) * 0.32;
      drArmR.rotation.x = -1.05 - Math.sin(t * 7.5) * 0.32;
    });
  }

  // =========================================================================
  // 4. SACRED PRECINCT WALL (COATEPANTLI) & PRECINCT LANDMARKS (Item 32)
  // =========================================================================
  // North Precinct Wall at z = 14 with wide Main Gate (x = -4..4) + Crouch-Only Drain (x = -25..-22.5, height 1.25m!)
  addSolidBox(scene, collision, -33.5, 1.75, 14, 14.5, 3.5, 1.2, matVolcanic, 'stone');
  // Drain lintel above x = -24 (1.25m clear crawl height!)
  addSolidBox(scene, collision, -24.0, 2.38, 14, 4.6, 2.25, 1.2, matVolcanic, 'stone');
  addSolidBox(scene, collision, -13.0, 1.75, 14, 17.5, 3.5, 1.2, matVolcanic, 'stone');
  addSolidBox(scene, collision, 22.0, 1.75, 14, 36.0, 3.5, 1.2, matVolcanic, 'stone');
  // Gate pillars
  addSolidBox(scene, collision, -4.6, 2.4, 14, 1.4, 4.8, 1.6, matRedOchre, 'stone');
  addSolidBox(scene, collision, 4.6, 2.4, 14, 1.4, 4.8, 1.6, matRedOchre, 'stone');
  addBrazier(-6.2, 0, 12.6);
  addBrazier(6.2, 0, 12.6);

  // West & East Precinct Walls (x = ±40, z = 14..104) with wide Side Gates at z = 44 (gap z = 41..47)
  for (const wx of [-40, 40]) {
    addSolidBox(scene, collision, wx, 1.75, 27.5, 1.2, 3.5, 27.0, matVolcanic, 'stone');
    addSolidBox(scene, collision, wx, 1.75, 76.0, 1.2, 3.5, 57.0, matVolcanic, 'stone');
  }
  // South Precinct Wall (z = 104)
  addSolidBox(scene, collision, 0, 1.75, 104, 81.2, 3.5, 1.2, matVolcanic, 'stone');

  // 4.1 Skull Rack (Tzompantli — rows of skulls on cross-poles over a stone plinth, x = -16, z = 32)
  {
    addSolidBox(scene, collision, -16, 0.55, 32, 6.2, 1.1, 2.2, matDarkStone, 'stone');
    for (const px of [-18.4, -16, -13.6]) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, 3.4, 7), matDarkWood);
      post.position.set(px, 2.6, 32);
      scene.add(post);
    }
    for (let row = 0; row < 4; row++) {
      const ry = 1.6 + row * 0.52;
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 5.2, 6), matTimber);
      pole.rotation.z = Math.PI / 2;
      pole.position.set(-16, ry, 32);
      scene.add(pole);
      for (let s = 0; s < 10; s++) {
        const sk = new THREE.Mesh(new THREE.SphereGeometry(0.13, 6, 6), matBone);
        sk.position.set(-18.2 + s * 0.49, ry, 32);
        scene.add(sk);
      }
    }
  }

  // 4.2 Enterable Round Temple of the Wind God (Ehecatl — cylindrical stone temple with conical roof, x = 24, z = 44)
  {
    const ex = 24, ez = 44, r = 5.2, h = 4.0, floorY = 0.28;
    const base = new THREE.Mesh(new THREE.CylinderGeometry(r + 0.4, r + 0.6, floorY, 16), matVolcanic);
    base.position.set(ex, floorY * 0.5, ez);
    base.receiveShadow = true;
    scene.add(base);
    collision.addWalkable(ex, ez, (r + 0.4) * 2, (r + 0.4) * 2, floorY);
    // 10 cylindrical masonry wall segments leaving a wide 3.0m doorway on the West side (angle ~PI)
    const segs = 10;
    for (let i = 0; i < segs; i++) {
      const a = (i / segs) * Math.PI * 2;
      if (Math.abs(a - Math.PI) < 0.42) continue; // Wide West doorway!
      const sx = ex + Math.cos(a) * r;
      const sz = ez + Math.sin(a) * r;
      const segLen = (2 * Math.PI * r) / segs + 0.35;
      const wall = new THREE.Mesh(new THREE.BoxGeometry(0.55, h, segLen), matStucco);
      wall.position.set(sx, floorY + h * 0.5, sz);
      wall.rotation.y = -a;
      scene.add(wall);
      collision.addOrientedBox(sx, floorY + h * 0.5, sz, 0.62, h, segLen, -a, 'stone');
    }
    const coneRoof = new THREE.Mesh(new THREE.ConeGeometry(r + 1.0, 4.4, 16), matReed);
    coneRoof.position.set(ex, floorY + h + 2.2, ez);
    scene.add(coneRoof);
    addAltar(scene, collision, ex + 2.2, floorY, ez, 1.3, 2.2, matDarkStone, 0x246e8f);
    addGoldTreasure(ex + 2.2, floorY + 1.12, ez, 'sun');
  }

  // 4.3 Enterable House of the Eagles (Cuauhcalli — pillared stone hall, x = -26, z = 54)
  {
    const eagleHall = buildHollowRoom(scene, collision, {
      cx: -26, cz: 54, w: 12, d: 14, h: 4.3, floorY: 0.25,
      wallMat: matStucco, floorMat: matVolcanic, roofMat: matRedOchre, roofStyle: 'flat',
      east: [
        { type: 'door', offset: -3.2, width: 2.6, height: 3.1 },
        { type: 'door', offset: 3.2, width: 2.6, height: 3.1 }
      ],
      north: [{ type: 'door', offset: 0, width: 2.6, height: 3.0 }],
      interiorLight: { color: 0xffa652, intensity: 2.2, distance: 16 }
    });
    for (const [px, pz] of [[-28.5, 50], [-28.5, 58], [-23.5, 50], [-23.5, 58]]) {
      addSolidBox(scene, collision, px, eagleHall.floorY + 2.15, pz, 0.55, 4.3, 0.55, matRedOchre, 'stone');
    }
    addAltar(scene, collision, -30.5, eagleHall.floorY, 54, 1.2, 3.0, matDarkStone, 0xa83226);
    addGoldTreasure(-30.5, eagleHall.floorY + 1.12, 54, 'pectoral');
  }

  // 4.4 Mesoamerican Ball Court (Tlachtli — x = 22, z = 24)
  {
    for (const s of [-1, 1]) {
      addSolidBox(scene, collision, 22 + s * 6.5, 1.4, 24, 2.4, 2.8, 12.0, matVolcanic, 'stone');
      // Stone scoring ring mounted mid-wall
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.11, 7, 12), matStucco);
      ring.rotation.y = Math.PI / 2;
      ring.position.set(22 + s * 5.05, 2.25, 24);
      scene.add(ring);
    }
  }

  // 4.5 Low-Door Steam Bath (Temazcal — 1.25m crouch-only door!, x = -26, z = 28)
  const temazcal = buildCrawlDen(scene, collision, {
    cx: -26, cz: 28, w: 5.2, d: 5.2, doorSide: 'east',
    wallMat: matStucco, floorMat: matDarkStone, roofMat: matRedOchre
  });

  // 4.6 Reed Watchtower (x = -35, z = 19) & Reed Lookout (x = 35, z = 19) with Wooden Ladders!
  function buildReedTower(cx, cz, deckY) {
    const w = 3.8, d = 3.8;
    for (const [ox, oz] of [[-1.6, -1.6], [1.6, -1.6], [-1.6, 1.6], [1.6, 1.6]]) {
      addSolidBox(scene, collision, cx + ox, deckY * 0.5, cz + oz, 0.28, deckY, 0.28, matTimber, 'wood');
    }
    const deck = new THREE.Mesh(new THREE.BoxGeometry(w, 0.22, d), matTimber);
    deck.position.set(cx, deckY - 0.11, cz);
    scene.add(deck);
    collision.addWalkable(cx, cz, w + 0.1, d + 0.1, deckY, true);
    // Low reed parapet on 3 sides (open south for ladder)
    addSolidBox(scene, collision, cx, deckY + 0.52, cz - 1.8, w, 1.04, 0.18, matReed, 'wood');
    addSolidBox(scene, collision, cx - 1.8, deckY + 0.52, cz, 0.18, 1.04, d, matReed, 'wood');
    addSolidBox(scene, collision, cx + 1.8, deckY + 0.52, cz, 0.18, 1.04, d, matReed, 'wood');
    const roof = new THREE.Mesh(new THREE.ConeGeometry(3.1, 1.6, 4), matReed);
    roof.rotation.y = Math.PI / 4;
    roof.position.set(cx, deckY + 3.0, cz);
    scene.add(roof);
    buildLadder(scene, collision, {
      x: cx, z: cz + 1.98, bottomY: 0, topY: deckY, normalX: 0, normalZ: 1, woodMat: matTimber
    });
  }
  buildReedTower(-35, 19, 3.6);
  buildReedTower(35, 19, 3.2);

  // =========================================================================
  // 5. BUILT-UP ISLAND CITY AROUND THE PRECINCT (Item 33)
  // =========================================================================
  // 5.1 Palace of Axayacatl (x = -62, z = 50: rooms round patio + stair to roof!)
  {
    const px = -60, pz = 50, roofY = 3.8;
    const northWing = buildHollowRoom(scene, collision, {
      cx: px, cz: pz - 8, w: 18, d: 6, h: roofY, floorY: 0.2,
      wallMat: matStucco, floorMat: matVolcanic, roofMat: matRedOchre, roofStyle: 'flat',
      south: [{ type: 'door', offset: 0, width: 2.8, height: 3.0 }],
      east: [{ type: 'door', offset: 0, width: 2.4, height: 2.9 }]
    });
    buildHollowRoom(scene, collision, {
      cx: px, cz: pz + 8, w: 18, d: 6, h: roofY, floorY: 0.2,
      wallMat: matStucco, floorMat: matVolcanic, roofMat: matRedOchre, roofStyle: 'flat',
      north: [{ type: 'door', offset: 0, width: 2.8, height: 3.0 }]
    });
    buildHollowRoom(scene, collision, {
      cx: px - 6.5, cz: pz, w: 5, d: 10, h: roofY, floorY: 0.2,
      wallMat: matStucco, floorMat: matVolcanic, roofMat: matRedOchre, roofStyle: 'flat',
      east: [{ type: 'door', offset: 0, width: 2.6, height: 3.0 }]
    });
    addTableAndChairs(scene, collision, px, northWing.floorY, pz - 8.5, matTimber);
    addGoldTreasure(px + 2.5, northWing.floorY + 0.02, pz - 7.5, 'bars');
    // Walkable flat roof on Palace north wing + stone stair climbing from patio!
    collision.addWalkable(px, pz - 8, 17.6, 5.6, roofY + 0.2, true);
    addStairFlight(scene, collision, {
      x: px + 6.5, zStart: pz + 3.2, zEnd: pz - 4.8, yStart: 0, yEnd: roofY + 0.2,
      width: 2.2, steps: 11, mat: matVolcanic
    });
  }

  // 5.2 Market (Tianguis — 6 stalls on raised wooden floors with 1.25m clear crawl space underneath!, x = 56, z = 24..46)
  {
    const awningCols = [0xc9382b, 0x1fb89a, 0xe3a832, 0x2a6c9c];
    for (let i = 0; i < 6; i++) {
      const sx = 52 + (i % 2) * 11;
      const sz = 24 + Math.floor(i / 2) * 10;
      const deckY = 1.25;
      // 4 slim corner posts + raised platform at y = 1.25..1.45 so player can CROUCH underneath!
      for (const [ox, oz] of [[-1.7, -1.5], [1.7, -1.5], [-1.7, 1.5], [1.7, 1.5]]) {
        addSolidBox(scene, collision, sx + ox, 1.45, sz + oz, 0.2, 2.9, 0.2, matTimber, 'wood');
      }
      addSolidBox(scene, collision, sx, deckY + 0.12, sz, 3.6, 0.24, 3.2, matTimber, 'wood');
      const awn = new THREE.Mesh(
        new THREE.BoxGeometry(4.0, 0.12, 3.6),
        new THREE.MeshStandardMaterial({ color: awningCols[i % awningCols.length], roughness: 0.85 })
      );
      awn.position.set(sx, 2.95, sz);
      scene.add(awn);
      // Market goods jars on top of the raised stall floor
      const jar = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.28, 0.45, 8), matRedOchre);
      jar.position.set(sx - 0.6, deckY + 0.45, sz);
      scene.add(jar);
    }
  }

  // 5.3 City Canal Bridges (Stone Bridge at z = 12, Plank Bridge at z = -4 over canal x = -54..-46)
  {
    // Stone Bridge (z = 12)
    const sb = new THREE.Mesh(new THREE.BoxGeometry(10.5, 0.35, 3.8), matVolcanic);
    sb.position.set(-50, 0.28, 12);
    scene.add(sb);
    collision.addWalkable(-50, 12, 11.4, 4.0, 0.45);
    addSolidBox(scene, collision, -50, 0.9, 10.0, 10.0, 0.9, 0.28, matDarkStone, 'stone');
    addSolidBox(scene, collision, -50, 0.9, 14.0, 10.0, 0.9, 0.28, matDarkStone, 'stone');
    // Timber Plank Bridge (z = -4)
    const pb = new THREE.Mesh(new THREE.BoxGeometry(10.5, 0.22, 2.8), matTimber);
    pb.position.set(-50, 0.18, -4);
    scene.add(pb);
    collision.addWalkable(-50, -4, 11.4, 3.2, 0.29);
  }

  // 5.4 Row of 4 White Flat-Roofed Houses whose roofs are bridged by planks! (x = 42, 51, 60, 69; z = -4)
  {
    const roofH = 3.4;
    const xs = [42, 51, 60, 69];
    for (let i = 0; i < xs.length; i++) {
      const hx = xs[i];
      buildHollowRoom(scene, collision, {
        cx: hx, cz: -4, w: 6.4, d: 6.8, h: roofH, floorY: 0.16,
        wallMat: matStucco, floorMat: matVolcanic, roofMat: matStucco, roofStyle: 'flat',
        south: [{ type: 'door', offset: 0, width: 2.1, height: 2.6 }],
        north: [{ type: 'window', offset: 0, width: 1.4 }]
      });
      collision.addWalkable(hx, -4, 6.2, 6.6, roofH + 0.16, true);
      if (i < xs.length - 1) {
        const midX = (hx + xs[i + 1]) * 0.5;
        const plank = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.14, 1.5), matTimber);
        plank.position.set(midX, roofH + 0.12, -4);
        scene.add(plank);
        collision.addWalkable(midX, -4, 3.8, 1.7, roofH + 0.19, true);
      }
    }
    buildLadder(scene, collision, {
      x: 42 - 3.35, z: -4, bottomY: 0, topY: roofH + 0.16, normalX: -1, normalZ: 0, woodMat: matTimber
    });
  }

  // 5.5 Upturned Canoes to Crawl Under (1.25m clear height on wooden trestles!)
  for (const [cx, cz] of [[18, -9], [-20, -9]]) {
    for (const ox of [-2.4, 2.4]) {
      addSolidBox(scene, collision, cx + ox, 0.62, cz, 0.24, 1.24, 1.6, matTimber, 'wood');
    }
    addSolidBox(scene, collision, cx, 1.55, cz, 5.4, 0.58, 1.8, matDarkWood, 'wood');
  }

  // =========================================================================
  // 6. THREE WAYS ACROSS LAKE TEXCOCO TO THE FAR MAINLAND (Item 34, z = -16..-88)
  // =========================================================================
  // 6.1 ROUTE 1: THE WESTERN CAUSEWAY (x = 0, width = 6.4m, deckY = 0.65m, 3 Canal Gaps + Parapets + Crossing Rails!)
  const causeY = 0.65;
  {
    // Gentle stepped shore approaches at South island edge (z = -15..-16) and North mainland (z = -88..-89)
    collision.addWalkable(0, -15.2, 6.6, 2.2, 0.32);
    const stepS = new THREE.Mesh(new THREE.BoxGeometry(6.4, 0.32, 1.8), matVolcanic);
    stepS.position.set(0, 0.16, -15.2);
    scene.add(stepS);

    collision.addWalkable(0, -88.4, 6.6, 2.2, 0.32);
    const stepN = new THREE.Mesh(new THREE.BoxGeometry(6.4, 0.32, 1.8), matVolcanic);
    stepN.position.set(0, 0.16, -88.4);
    scene.add(stepN);

    // 4 solid stone causeway segments separated by 3 Canal Gaps (at z = -34, -54, -72)!
    const segs = [
      [-16.0, -31.5],
      [-36.5, -51.2],
      [-56.8, -69.5],
      [-74.5, -88.0]
    ];
    for (const [zA, zB] of segs) {
      const len = Math.abs(zA - zB);
      const cz = (zA + zB) * 0.5;
      const road = new THREE.Mesh(new THREE.BoxGeometry(6.4, 2.1, len), matVolcanic);
      road.position.set(0, causeY - 1.05, cz);
      road.receiveShadow = true;
      scene.add(road);
      collision.addWalkable(0, cz, 6.4, len + 0.4, causeY);
      // Low stone parapets on BOTH sides (prevents walkers & horsemen from falling into Lake Texcoco!)
      addSolidBox(scene, collision, -3.15, causeY + 0.42, cz, 0.45, 0.84, len, matDarkStone, 'stone');
      addSolidBox(scene, collision, 3.15, causeY + 0.42, cz, 0.45, 0.84, len, matDarkStone, 'stone');
    }

    // CANAL 1 (z = -31.5..-36.5): Sturdy Timber Bridge + side rails
    const c1 = new THREE.Mesh(new THREE.BoxGeometry(5.4, 0.24, 5.8), matTimber);
    c1.position.set(0, causeY - 0.10, -34.0);
    scene.add(c1);
    collision.addWalkable(0, -34.0, 5.4, 6.2, causeY + 0.02);
    addSolidBox(scene, collision, -2.8, causeY + 0.45, -34.0, 0.22, 0.9, 5.6, matDarkWood, 'wood');
    addSolidBox(scene, collision, 2.8, causeY + 0.45, -34.0, 0.22, 0.9, 5.6, matDarkWood, 'wood');

    // CANAL 2 (z = -51.2..-56.8): Wreckage of the Spaniards' Portable Timber Bridge + continuous planks & rails
    const c2Deck = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.24, 6.4), matTimber);
    c2Deck.position.set(0, causeY - 0.10, -54.0);
    scene.add(c2Deck);
    // Dramatic skewed wrecked bridge timbers sticking out on the sides
    for (const [wx, wy, wz, rz] of [[-2.5, 0.9, -53.2, 0.35], [2.4, 0.8, -54.8, -0.42], [-2.2, 0.7, -55.4, -0.25]]) {
      const beam = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.28, 3.2), matDarkWood);
      beam.position.set(wx, wy, wz);
      beam.rotation.z = rz;
      beam.rotation.y = rz * 0.6;
      scene.add(beam);
    }
    collision.addWalkable(0, -54.0, 4.4, 6.6, causeY + 0.02);
    addSolidBox(scene, collision, -2.35, causeY + 0.45, -54.0, 0.22, 0.9, 6.2, matDarkWood, 'wood');
    addSolidBox(scene, collision, 2.35, causeY + 0.45, -54.0, 0.22, 0.9, 6.2, matDarkWood, 'wood');

    // CANAL 3 (z = -69.5..-74.5): Two Wide Parallel Planks + low guide rails
    for (const px of [-0.95, 0.95]) {
      const pl = new THREE.Mesh(new THREE.BoxGeometry(1.45, 0.18, 5.8), matTimber);
      pl.position.set(px, causeY - 0.07, -72.0);
      scene.add(pl);
    }
    collision.addWalkable(0, -72.0, 3.4, 6.2, causeY + 0.02);
    addSolidBox(scene, collision, -1.9, causeY + 0.42, -72.0, 0.2, 0.84, 5.6, matDarkWood, 'wood');
    addSolidBox(scene, collision, 1.9, causeY + 0.42, -72.0, 0.2, 0.84, 5.6, matDarkWood, 'wood');

    // Gleaming Dropped Spanish Gold scattered along the Causeway!
    addGoldTreasure(-1.4, causeY, -24, 'bars');
    addGoldTreasure(1.5, causeY, -41, 'sun');
    addGoldTreasure(-1.2, causeY, -48, 'pectoral');
    addGoldTreasure(1.4, causeY, -64, 'skull');
    addGoldTreasure(-1.3, causeY, -80, 'bell');
    addGoldTreasure(1.2, causeY, -83, 'figure');
  }

  // 6.2 ROUTE 2: CHINAMPA GARDEN PLOTS IN LAKE TEXCOCO JOINED BY PLANKS (x = -28, z = -16..-88)
  {
    const plotZs = [-23, -37, -51, -65, -79];
    for (let i = 0; i < plotZs.length; i++) {
      const pz = plotZs[i];
      const island = new THREE.Mesh(new THREE.BoxGeometry(7.2, 1.8, 9.6), matGrass);
      island.position.set(-28, -0.58, pz);
      island.receiveShadow = true;
      scene.add(island);
      collision.addWalkable(-28, pz, 7.2, 9.8, 0.32);
      // Decorative willow posts & maize stalks on edges (clear of center walkway!)
      for (const ox of [-3.1, 3.1]) {
        const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 1.7, 5), matLeaf);
        stalk.position.set(-28 + ox, 1.15, pz);
        scene.add(stalk);
      }
      // Connecting plank bridge south of this chinampa (to island or previous chinampa)
      const prevEnd = i === 0 ? -15.8 : plotZs[i - 1] - 4.7;
      const curStart = pz + 4.7;
      const midZ = (prevEnd + curStart) * 0.5;
      const span = Math.abs(prevEnd - curStart) + 0.8;
      const pl = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.18, span), matTimber);
      pl.position.set(-28, 0.24, midZ);
      scene.add(pl);
      collision.addWalkable(-28, midZ, 3.4, span + 0.6, 0.33);
    }
    // Final plank from northernmost chinampa (z = -83.8) to far mainland shore (z = -88.2)
    const plEnd = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.18, 5.2), matTimber);
    plEnd.position.set(-28, 0.24, -86.0);
    scene.add(plEnd);
    collision.addWalkable(-28, -86.0, 3.4, 5.8, 0.33);
  }

  // 6.3 ROUTE 3: CHAPULTEPEC STONE AQUEDUCT WITH ONE BROKEN SPAN BRIDGED BY A PLANK (x = +28, z = -16..-88)
  {
    const aqX = 28, aqY = 1.02;
    // Stepped ramps at south island end & north mainland end (3 steps <= 0.35m each!)
    addStairFlight(scene, collision, {
      x: aqX, zStart: -13.0, zEnd: -16.5, yStart: 0, yEnd: aqY, width: 3.2, steps: 3, mat: matVolcanic
    });
    addStairFlight(scene, collision, {
      x: aqX, zStart: -91.5, zEnd: -88.0, yStart: 0, yEnd: aqY, width: 3.2, steps: 3, mat: matVolcanic
    });
    // South & North aqueduct spans with arched piers, broken at z = -49..-55
    for (const [zA, zB] of [[-16.0, -49.0], [-55.0, -88.0]]) {
      const len = Math.abs(zA - zB);
      const cz = (zA + zB) * 0.5;
      const top = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.42, len), matVolcanic);
      top.position.set(aqX, aqY - 0.21, cz);
      scene.add(top);
      collision.addWalkable(aqX, cz, 3.4, len + 0.5, aqY);
      // Low water-channel curbs
      addSolidBox(scene, collision, aqX - 1.55, aqY + 0.28, cz, 0.26, 0.56, len, matDarkStone, 'stone');
      addSolidBox(scene, collision, aqX + 1.55, aqY + 0.28, cz, 0.26, 0.56, len, matDarkStone, 'stone');
      for (let pz = Math.min(zA, zB) + 2; pz < Math.max(zA, zB); pz += 6) {
        const pier = new THREE.Mesh(new THREE.BoxGeometry(2.6, 2.2, 1.4), matDarkStone);
        pier.position.set(aqX, -0.2, pz);
        scene.add(pier);
      }
    }
    // Wide sturdy plank bridging the broken aqueduct span (z = -49..-55)!
    const aqPlank = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.18, 6.8), matTimber);
    aqPlank.position.set(aqX, aqY - 0.06, -52.0);
    scene.add(aqPlank);
    collision.addWalkable(aqX, -52.0, 3.0, 7.2, aqY + 0.03);
  }

  // =========================================================================
  // 7. FAR MAINLAND LANDING VILLAGE, CLIMBABLE ROCK & VOLCANO HORIZON (Items 34-35)
  // =========================================================================
  for (const [vx, vz, dSide] of [[-10, -104, 'east'], [12, -104, 'west'], [24, -98, 'south']]) {
    const gy = terrainH(vx, vz);
    const vHouse = buildHollowRoom(scene, collision, {
      cx: vx, cz: vz, w: 7.5, d: 7.5, h: 3.4, floorY: gy + 0.16,
      wallMat: matStucco, floorMat: matVolcanic, roofMat: matRedOchre, roofStyle: 'flat',
      [dSide]: [{ type: 'door', offset: 0, width: 2.2, height: 2.7 }]
    });
    addTableAndChairs(scene, collision, vx, vHouse.floorY, vz, matTimber);
  }

  // Climbable lakeside rock with a wooden ladder at the mainland landing (x = -18, z = -95)
  {
    const rx = -18, rz = -95, ry = terrainH(rx, rz), topY = ry + 3.8;
    const rock = new THREE.Mesh(new THREE.CylinderGeometry(3.1, 3.8, 3.8, 9), matDarkStone);
    rock.position.set(rx, ry + 1.9, rz);
    scene.add(rock);
    collision.addBox(rx, ry + 1.9, rz, 6.2, 3.8, 6.2, 'stone');
    collision.addWalkable(rx, rz, 5.8, 5.8, topY, true);
    buildLadder(scene, collision, {
      x: rx, z: rz + 3.25, bottomY: ry, topY, normalX: 0, normalZ: 1, woodMat: matTimber
    });
  }

  // Great Ancient Cypress (Ahuehuete — "Tree of the Sad Night") on the far shore (x = -34, z = -102)
  {
    const cyY = terrainH(-34, -102);
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 2.2, 7.5, 9), matDarkWood);
    trunk.position.set(-34, cyY + 3.75, -102);
    const crown1 = new THREE.Mesh(new THREE.DodecahedronGeometry(6.8, 1), matDarkLeaf);
    crown1.scale.set(1.2, 0.72, 1.15);
    crown1.position.set(-34, cyY + 9.2, -102);
    scene.add(trunk, crown1);
    collision.addBox(-34, cyY + 3.5, -102, 3.6, 7.0, 3.6, 'wood');
  }

  // Garden Groves at the Island Rim (palms, broad-leaved trees, reeds, prickly pear cacti)
  function addIslandTree(tx, tz, palm = false) {
    const tr = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.34, palm ? 6.2 : 3.2, 6), matTimber);
    tr.position.set(tx, palm ? 3.1 : 1.6, tz);
    scene.add(tr);
    if (palm) {
      for (let f = 0; f < 5; f++) {
        const a = (f / 5) * Math.PI * 2;
        const frond = new THREE.Mesh(new THREE.ConeGeometry(0.55, 3.2, 4), matLeaf);
        frond.position.set(tx + Math.cos(a) * 1.3, 6.1, tz + Math.sin(a) * 1.3);
        frond.rotation.z = -Math.cos(a) * 1.1;
        frond.rotation.x = Math.sin(a) * 1.1;
        scene.add(frond);
      }
    } else {
      const top = new THREE.Mesh(new THREE.DodecahedronGeometry(2.4, 0), matLeaf);
      top.position.set(tx, 4.6, tz);
      scene.add(top);
    }
    collision.addBox(tx, 2.0, tz, 1.0, 4.0, 1.0, 'wood');
  }
  for (const [tx, tz, palm] of [
    [-68, -10, true], [-36, -11, false], [12, -11, true], [36, -11, false],
    [68, 12, true], [68, 48, false], [-68, 22, false], [-68, 74, true],
    [54, 72, false], [68, 82, true]
  ]) addIslandTree(tx, tz, palm);

  // Prickly pear (nopal) cacti & reeds along water rim
  const matCactus = new THREE.MeshStandardMaterial({ color: 0x3b6e35, roughness: 0.9 });
  for (const [cx, cz] of [[-12, -12], [11, -13], [-42, -12], [35, -13]]) {
    const pad1 = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.72, 0.14), matCactus);
    pad1.position.set(cx, 0.36, cz);
    const pad2 = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.56, 0.12), matCactus);
    pad2.position.set(cx + 0.24, 0.84, cz);
    pad2.rotation.z = -0.35;
    scene.add(pad1, pad2);
  }

  // Far View: Simple Low-Poly Woods along Far Shores (5-sided cones -> ultra-low triangle count!)
  for (let i = -9; i <= 9; i++) {
    const fx = i * 16 + (i % 2) * 5;
    const fz = -126 - Math.abs(i % 3) * 8;
    const h = 9 + (Math.abs(i) % 3) * 3;
    const c = new THREE.Mesh(new THREE.ConeGeometry(4.2, h, 5), matDarkLeaf);
    c.position.set(fx, h * 0.5 + 1.0, fz);
    scene.add(c);
  }

  // Snow-Capped Volcano (Popocatépetl) on Northern Horizon with Smoke Plume & Faint Crater Glow!
  {
    const vx = 35, vz = -245;
    const volMat = new THREE.MeshStandardMaterial({ color: 0x483f4d, roughness: 0.96 });
    const snowMat = new THREE.MeshStandardMaterial({ color: 0xebe6ee, roughness: 0.78 });
    const cone = new THREE.Mesh(new THREE.ConeGeometry(92, 98, 12), volMat);
    cone.position.set(vx, 48, vz);
    const snowCap = new THREE.Mesh(new THREE.ConeGeometry(34, 36, 12), snowMat);
    snowCap.position.set(vx, 82, vz);
    const craterGlow = new THREE.Mesh(
      new THREE.SphereGeometry(7.5, 8, 6),
      new THREE.MeshBasicMaterial({ color: 0xff5a22, transparent: true, opacity: 0.55 })
    );
    craterGlow.position.set(vx, 98, vz);
    scene.add(cone, snowCap, craterGlow);

    // Gently rising volcanic smoke puffs
    const puffs = [];
    const puffMat = new THREE.MeshBasicMaterial({ color: 0x9e9296, transparent: true, opacity: 0.34 });
    for (let p = 0; p < 5; p++) {
      const pf = new THREE.Mesh(new THREE.DodecahedronGeometry(6.5 + p * 2.2, 0), puffMat);
      pf.position.set(vx + p * 5.5, 104 + p * 9, vz - p * 3);
      scene.add(pf);
      puffs.push(pf);
    }
    animated.push((t) => {
      craterGlow.material.opacity = 0.42 + Math.sin(t * 2.4) * 0.16;
      for (let p = 0; p < puffs.length; p++) {
        const cycle = (t * 0.14 + p * 0.2) % 1;
        puffs[p].position.set(vx + cycle * 34, 102 + cycle * 44, vz - cycle * 14);
        puffs[p].scale.setScalar(0.8 + cycle * 1.1);
      }
    });
  }

  // Light easing evening rain
  particles.initAmbient('rain', collision.bounds);

  // =========================================================================
  // 8. PICKUPS (Healing item: Cup of Cacao!)
  // =========================================================================
  const pickupDefs = [
    { type: 'health', pos: new THREE.Vector3(temazcal.insidePos.x, temazcal.floorY + 0.55, temazcal.insidePos.z), label: 'CUP OF CACAO (+35 HP)', inDen: true },
    { type: 'health', pos: new THREE.Vector3(-4.8, pyrTopY + 0.85, 88.2), label: 'TEMPLE CACAO (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(24, 1.0, 44), label: 'WIND TEMPLE CACAO (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(-26, 1.0, 54), label: 'EAGLE HALL CACAO (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(-60, 0.9, 42), label: 'PALACE CACAO (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(56, 1.0, 34), label: 'MARKET CACAO (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(-28, 1.0, -51), label: 'CHINAMPA CACAO (+35 HP)' },
    { type: 'health', pos: new THREE.Vector3(12, 1.2, -104), label: 'VILLAGE CACAO (+35 HP)' },
    { type: 'ammo',   pos: new THREE.Vector3(-12, 0.9, 22), label: 'QUIVER & DARTS' },
    { type: 'ammo',   pos: new THREE.Vector3(0, causeY + 0.8, -42), label: 'CAUSEWAY ARMS' }
  ];
  for (const pd of pickupDefs) {
    const mesh = createPickupMesh(pd.type);
    mesh.position.copy(pd.pos);
    scene.add(mesh);
    pickups.push({ ...pd, mesh, collected: false });
  }

  // =========================================================================
  // 9. 30 ENEMIES MAX (Spaniards of 1520: Swordsmen, Crossbowmen, Arquebusiers,
  //    Horsemen with Lances, 1 Stationary Causeway Cannon, Boss Captain Luján!)
  // =========================================================================
  const enemySpawns = [
    // Great Temple Summit Shrines & Middle Terrace
    { type: 'spanish_crossbow',    pos: new THREE.Vector3(-4.8, pyrTopY, 87.5) },
    { type: 'spanish_swordsman',   pos: new THREE.Vector3(4.8, pyrTopY, 87.5) },
    { type: 'spanish_arquebusier', pos: new THREE.Vector3(-8.0, 8.4, 78.2), options: { holdPost: true } }, // Middle terrace gunner!
    // Sacred Precinct & Precinct Buildings
    { type: 'spanish_swordsman',   pos: new THREE.Vector3(-12, 0, 38) },
    { type: 'spanish_crossbow',    pos: new THREE.Vector3(14, 0, 36) },
    { type: 'spanish_swordsman',   pos: new THREE.Vector3(24, 0.28, 44) },   // Inside Round Wind Temple
    { type: 'spanish_arquebusier', pos: new THREE.Vector3(-26, 0.25, 54) },  // Inside House of the Eagles
    { type: 'spanish_crossbow',    pos: new THREE.Vector3(22, 0, 24) },      // Ball court
    { type: 'spanish_swordsman',   pos: new THREE.Vector3(-10, 0, 18) },
    { type: 'spanish_arquebusier', pos: new THREE.Vector3(10, 0, 18) },
    // Island City (Palace of Axayacatl, Market, Canal, Northern Plaza)
    { type: 'spanish_swordsman',   pos: new THREE.Vector3(-56, 0.2, 42) },   // Palace North Wing
    { type: 'spanish_crossbow',    pos: new THREE.Vector3(-60, 0, 50) },     // Palace Patio
    { type: 'spanish_arquebusier', pos: new THREE.Vector3(56, 0, 30) },      // Market Plaza
    { type: 'spanish_swordsman',   pos: new THREE.Vector3(46, 0, 8) },       // East urban road
    { type: 'spanish_crossbow',    pos: new THREE.Vector3(-42, 0, 12) },     // Canal Stone Bridge
    { type: 'spanish_horseman',    pos: new THREE.Vector3(-8, 0, 2) },       // North Plaza Lancer #1
    { type: 'spanish_swordsman',   pos: new THREE.Vector3(8, 0, 0) },
    // Three Ways Across Lake Texcoco!
    { type: 'spanish_horseman',    pos: new THREE.Vector3(0, causeY, -25) }, // Causeway Lancer #2
    { type: 'spanish_crossbow',    pos: new THREE.Vector3(0, causeY, -44) }, // Causeway Segment 2
    { type: 'spanish_cannon',      pos: new THREE.Vector3(0, causeY, -61) }, // Stationary Causeway Cannon + Gunner!
    { type: 'spanish_swordsman',   pos: new THREE.Vector3(-28, 0.32, -37) }, // Chinampa Route
    { type: 'spanish_crossbow',    pos: new THREE.Vector3(-28, 0.32, -65) }, // Chinampa Route North
    { type: 'spanish_arquebusier', pos: new THREE.Vector3(28, 1.02, -32) },  // Aqueduct Route
    { type: 'spanish_swordsman',   pos: new THREE.Vector3(28, 1.02, -68) },  // Aqueduct Route North
    // Far Mainland Landing & Village
    { type: 'spanish_horseman',    pos: new THREE.Vector3(0, terrainH(0, -93), -93) },   // Far Shore Lancer #3
    { type: 'spanish_arquebusier', pos: new THREE.Vector3(-10, terrainH(-10, -96), -96) },
    { type: 'spanish_crossbow',    pos: new THREE.Vector3(12, terrainH(12, -96), -96) },
    { type: 'spanish_swordsman',   pos: new THREE.Vector3(-10, terrainH(-10, -104) + 0.16, -104) },
    { type: 'spanish_arquebusier', pos: new THREE.Vector3(12, terrainH(12, -104) + 0.16, -104) },
    // Boss Captain Luján (invented rear-guard captain on the far shore!)
    { type: 'boss_aztec',          pos: new THREE.Vector3(0, terrainH(0, -102), -102), isBossWave: true }
  ];

  const enterableBuildings = [
    { name: 'Round Temple of Ehecatl', inside: new THREE.Vector3(24, 0.28, 44), outside: new THREE.Vector3(16, 0, 44) },
    { name: 'House of the Eagles', inside: new THREE.Vector3(-26, 0.25, 54), outside: new THREE.Vector3(-18, 0, 54) },
    { name: 'Palace of Axayacatl', inside: new THREE.Vector3(-60, 0.2, 42), outside: new THREE.Vector3(-60, 0, 50) },
    { name: 'Temazcal Steam Bath', inside: temazcal.insidePos, outside: temazcal.outsidePos }
  ];

  const specialSpots = {
    crawlDen: temazcal,
    greatTempleSummit: new THREE.Vector3(0, pyrTopY, 71.0),
    causewayStart: new THREE.Vector3(0, 0, 12.0),
    farShore: new THREE.Vector3(0, terrainH(0, -92), -92)
  };
  return { enemySpawns, pickups, animated, disposables, enterableBuildings, specialSpots };
}
