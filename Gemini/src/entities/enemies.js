import * as THREE from 'three';
import { createSpartanShieldTexture, createVikingShieldTexture } from '../engine/textures.js';

const ENEMY_SPECS = {
  cowboy: {
    name: 'Outlaw Cowboy',
    hp: 65,
    speed: 3.6,
    range: 34,
    fireRate: 1.55,
    damage: 11,
    score: 150,
    style: 'ranged',
    projectileColor: 0xffd266
  },
  bandito: {
    name: 'Mexican Bandito',
    hp: 75,
    speed: 4.5,
    range: 30,
    fireRate: 1.25,
    damage: 13,
    score: 200,
    style: 'ranged',
    projectileColor: 0xffae42
  },
  boss_west: {
    name: 'EL DIABLO — KING OF RED GULCH',
    hp: 360,
    speed: 4.2,
    range: 42,
    fireRate: 0.78,
    damage: 16,
    score: 1200,
    style: 'boss_ranged',
    scale: 1.28,
    projectileColor: 0xff6b2b
  },
  ninja: {
    name: 'Shadow Ninja',
    hp: 60,
    speed: 6.4,
    range: 24,
    fireRate: 1.15,
    damage: 12,
    score: 200,
    style: 'skirmisher',
    projectileColor: 0xd4f1ff
  },
  ronin: {
    name: 'Rōnin Samurai',
    hp: 95,
    speed: 4.6,
    range: 22,
    fireRate: 1.4,
    damage: 16,
    score: 260,
    style: 'hybrid',
    projectileColor: 0xffb85c
  },
  boss_japan: {
    name: 'LORD KUROGANE — IRON SHOGUN',
    hp: 420,
    speed: 5.0,
    range: 34,
    fireRate: 0.85,
    damage: 18,
    score: 1500,
    style: 'boss_hybrid',
    scale: 1.32,
    projectileColor: 0xff5a36
  },
  halberdier: {
    name: 'Austrian Halberdier',
    hp: 95,
    speed: 4.9,
    range: 3.4,
    fireRate: 1.05,
    damage: 18,
    score: 220,
    style: 'melee',
    projectileColor: 0xffffff
  },
  arquebusier: {
    name: 'Habsburg Arquebusier',
    hp: 75,
    speed: 3.4,
    range: 38,
    fireRate: 1.5,
    damage: 15,
    score: 240,
    style: 'ranged',
    projectileColor: 0xffe49c
  },
  boss_swiss: {
    name: 'CAPTAIN VON GESSLER — HABSBURG VOGT',
    hp: 460,
    speed: 4.6,
    range: 38,
    fireRate: 0.8,
    damage: 19,
    score: 1800,
    style: 'boss_ranged',
    scale: 1.32,
    projectileColor: 0xff5238
  },
  // Level 4: Ancient Greece (Spartan Warriors)
  spartan_hoplite: {
    name: 'Spartan Hoplite',
    hp: 95,
    speed: 4.8,
    range: 3.5,
    fireRate: 1.05,
    damage: 17,
    score: 230,
    style: 'melee',
    projectileColor: 0xffd266
  },
  spartan_skirmisher: {
    name: 'Spartan Javelineer',
    hp: 78,
    speed: 4.1,
    range: 35,
    fireRate: 1.4,
    damage: 14,
    score: 240,
    style: 'ranged',
    projectileColor: 0xffd266
  },
  boss_greece: {
    name: 'ARCHIDAMOS — SPARTAN POLEMARCH',
    hp: 460,
    speed: 4.7,
    range: 36,
    fireRate: 0.85,
    damage: 18,
    score: 1800,
    style: 'boss_hybrid',
    scale: 1.32,
    projectileColor: 0xff8c2b
  },
  // Level 5: Scandinavia (Historical Vikings — No Horned Helmets!)
  viking_warrior: {
    name: 'Viking Huscarl',
    hp: 95,
    speed: 4.6,
    range: 24,
    fireRate: 1.35,
    damage: 16,
    score: 240,
    style: 'hybrid',
    projectileColor: 0xaef0ff
  },
  viking_archer: {
    name: 'Norse Bowman',
    hp: 74,
    speed: 3.8,
    range: 38,
    fireRate: 1.45,
    damage: 14,
    score: 230,
    style: 'ranged',
    projectileColor: 0xd9f6ff
  },
  viking_berserker: {
    name: 'Viking Berserker',
    hp: 105,
    speed: 6.2,
    range: 3.4,
    fireRate: 0.88,
    damage: 19,
    score: 280,
    style: 'melee',
    projectileColor: 0xffffff
  },
  viking_chieftain: {
    name: 'Viking Chieftain',
    hp: 190,
    speed: 5.0,
    range: 3.6,
    fireRate: 0.92,
    damage: 21,
    score: 420,
    style: 'melee',
    scale: 1.18,
    projectileColor: 0xffffff
  },
  boss_scandinavia: {
    name: 'JARL HAKON — LORD OF THE FJORD',
    hp: 490,
    speed: 4.9,
    range: 36,
    fireRate: 0.82,
    damage: 19,
    score: 2000,
    style: 'boss_hybrid',
    scale: 1.34,
    projectileColor: 0x62f2c8
  },
  // Level 6: Normandy, 6 June 1944 (German Occupying Forces & Guard Dogs — Plain Military Markings Only)
  german_rifleman: {
    name: 'German Rifleman',
    hp: 85,
    speed: 3.9,
    range: 40,
    fireRate: 1.45,
    damage: 15,
    score: 240,
    style: 'ranged',
    projectileColor: 0xffe08a
  },
  german_officer: {
    name: 'German Officer',
    hp: 85,
    speed: 4.5,
    range: 32,
    fireRate: 1.05,
    damage: 13,
    score: 270,
    style: 'ranged',
    projectileColor: 0xffc666
  },
  german_mg: {
    name: 'MG Bunker Gunner',
    hp: 115,
    speed: 0,
    range: 44,
    fireRate: 0.36,
    damage: 7,
    score: 340,
    style: 'turret',
    projectileColor: 0xff9e42
  },
  guard_dog: {
    name: 'Guard Dog',
    hp: 38,
    speed: 7.8,
    range: 2.35,
    fireRate: 0.85,
    damage: 14,
    score: 180,
    style: 'dog',
    projectileColor: 0xffffff
  },
  boss_normandy: {
    name: 'MAJOR VOGEL — BATTERY COMMANDER',
    hp: 460,
    speed: 4.4,
    range: 42,
    fireRate: 0.65,
    damage: 15,
    score: 2200,
    style: 'boss_ranged',
    scale: 1.28,
    projectileColor: 0xff6e38
  },
  // Level 7: Soviet Russia — Stalnogorsk, Winter 1974
  kgb_agent: {
    name: 'Committee Agent',
    hp: 80,
    speed: 4.5,
    range: 34,
    fireRate: 1.2,
    damage: 14,
    score: 260,
    style: 'ranged',
    projectileColor: 0xffd570
  },
  soviet_militia: {
    name: 'Soviet Militiaman',
    hp: 90,
    speed: 4.1,
    range: 36,
    fireRate: 0.72,
    damage: 10,
    score: 280,
    style: 'ranged',
    projectileColor: 0xffa64d
  },
  boss_soviet: {
    name: 'COLONEL VORONIN — COMMITTEE CHIEF',
    hp: 490,
    speed: 4.7,
    range: 42,
    fireRate: 0.58,
    damage: 16,
    score: 2400,
    style: 'boss_ranged',
    scale: 1.28,
    projectileColor: 0xff4c38
  },
  // Level 8: Tibet — Road South of Lhasa, March 1959
  pla_rifleman: {
    name: 'Occupying Rifleman',
    hp: 85,
    speed: 4.0,
    range: 40,
    fireRate: 1.38,
    damage: 14,
    score: 260,
    style: 'ranged',
    projectileColor: 0xffe08a
  },
  pla_mg: {
    name: 'Machine-Gunner',
    hp: 100,
    speed: 3.1,
    range: 42,
    fireRate: 0.55,
    damage: 8,
    score: 310,
    style: 'ranged',
    projectileColor: 0xff9e42
  },
  red_guard: {
    name: 'Red Guard',
    hp: 80,
    speed: 6.1,
    range: 3.2,
    fireRate: 0.9,
    damage: 16,
    score: 240,
    style: 'melee',
    projectileColor: 0xffffff
  },
  boss_tibet: {
    name: 'COMMANDER ZHAO — GARRISON CHIEF',
    hp: 510,
    speed: 4.6,
    range: 42,
    fireRate: 0.62,
    damage: 17,
    score: 2600,
    style: 'boss_ranged',
    scale: 1.3,
    projectileColor: 0xff5a36
  }
};

function buildEnemyMesh(type) {
  const root = new THREE.Group();
  const isBoss = type.startsWith('boss_');

  // Dedicated low quadruped Guard Dog figure (smaller, lower, fast biter)
  if (type === 'guard_dog') {
    const tanFur = new THREE.MeshStandardMaterial({ color: 0x8f663c, roughness: 0.92 });
    const saddleFur = new THREE.MeshStandardMaterial({ color: 0x261f1a, roughness: 0.94 });
    const noseMat = new THREE.MeshStandardMaterial({ color: 0x141110, roughness: 0.6 });
    const collarMat = new THREE.MeshStandardMaterial({ color: 0x70241c, roughness: 0.7 });

    // Horizontal torso (~0.52m off ground — noticeably lower than human soldiers!)
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.32, 0.78), tanFur);
    torso.position.set(0, 0.50, 0);
    torso.castShadow = true;
    torso.userData.hitZone = 'body';

    const saddle = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.2, 0.48), saddleFur);
    saddle.position.set(0, 0.58, -0.02);
    const collar = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.032, 6, 12), collarMat);
    collar.position.set(0, 0.56, 0.34);

    // 4 animated quadruped legs
    const legGeo = new THREE.CylinderGeometry(0.052, 0.044, 0.42, 7);
    const legL = new THREE.Mesh(legGeo, tanFur);
    legL.position.set(-0.11, 0.21, 0.26);
    const legR = new THREE.Mesh(legGeo, tanFur);
    legR.position.set(0.11, 0.21, 0.26);
    const armL = new THREE.Mesh(legGeo, tanFur);
    armL.position.set(-0.11, 0.21, -0.26);
    const armR = new THREE.Mesh(legGeo, tanFur);
    armR.position.set(0.11, 0.21, -0.26);

    // Canine head, snout & pointed ears
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.24, 0.3), tanFur);
    head.position.set(0, 0.68, 0.44);
    head.userData.hitZone = 'head';
    const snout = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.13, 0.22), saddleFur);
    snout.position.set(0, -0.03, 0.2);
    const nose = new THREE.Mesh(new THREE.SphereGeometry(0.036, 6, 6), noseMat);
    nose.position.set(0, 0.0, 0.31);
    const earL = new THREE.Mesh(new THREE.ConeGeometry(0.055, 0.16, 4), saddleFur);
    earL.position.set(-0.08, 0.17, -0.02);
    const earR = earL.clone();
    earR.position.x = 0.08;
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0xffe066 });
    const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.022, 6, 6), eyeMat);
    eyeL.position.set(-0.06, 0.04, 0.14);
    const eyeR = eyeL.clone();
    eyeR.position.x = 0.06;
    head.add(snout, nose, earL, earR, eyeL, eyeR);

    const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.045, 0.42, 6), saddleFur);
    tail.position.set(0, 0.56, -0.5);
    tail.rotation.x = -0.65;

    const muzzle = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 4, 4),
      new THREE.MeshBasicMaterial({ color: 0xffd25a, transparent: true, opacity: 0 })
    );
    head.add(muzzle);

    const hpBg = new THREE.Mesh(
      new THREE.PlaneGeometry(0.75, 0.09),
      new THREE.MeshBasicMaterial({ color: 0x160d0a, side: THREE.DoubleSide })
    );
    hpBg.position.set(0, 1.15, 0);
    hpBg.visible = false;
    const hpFill = new THREE.Mesh(
      new THREE.PlaneGeometry(0.7, 0.06),
      new THREE.MeshBasicMaterial({ color: 0xe83b2c, side: THREE.DoubleSide })
    );
    hpFill.position.set(0, 0, 0.01);
    hpBg.add(hpFill);

    root.add(torso, saddle, collar, legL, legR, armL, armR, head, tail, hpBg);
    return { root, legL, legR, armL, armR, torso, head, muzzle, hpBg, hpFill };
  }

  const skinMat = new THREE.MeshStandardMaterial({
    color: type === 'bandito' ? 0xc68a5c : 0xe3b18a,
    roughness: 0.72
  });
  const darkLeather = new THREE.MeshStandardMaterial({ color: 0x2a1c14, roughness: 0.8 });
  const steelMat = new THREE.MeshStandardMaterial({ color: 0xb6c2cf, metalness: 0.85, roughness: 0.25 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xe6b647, metalness: 0.85, roughness: 0.25 });
  const redMat = new THREE.MeshStandardMaterial({ color: 0xb82222, roughness: 0.6 });
  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xeee8dc, roughness: 0.7 });

  // Torso colors by archetype
  let coatColor = 0x5c3c24;
  let pantsColor = 0x2f2b28;
  if (type === 'bandito') { coatColor = 0x9e341e; pantsColor = 0x3b2c20; }
  else if (type === 'boss_west') { coatColor = 0x1e1714; pantsColor = 0x161210; }
  else if (type === 'ninja') { coatColor = 0x181c26; pantsColor = 0x141720; }
  else if (type === 'ronin') { coatColor = 0x243b5c; pantsColor = 0x1e2430; }
  else if (type === 'boss_japan') { coatColor = 0x7d1414; pantsColor = 0x1a1414; }
  else if (type === 'halberdier' || type === 'arquebusier') { coatColor = 0xb52424; pantsColor = 0x363230; }
  else if (type === 'boss_swiss') { coatColor = 0x8f1818; pantsColor = 0x282628; }
  else if (type === 'spartan_hoplite' || type === 'spartan_skirmisher' || type === 'boss_greece') { coatColor = 0xb87e2d; pantsColor = 0xa82020; }
  else if (type === 'viking_warrior' || type === 'viking_archer') { coatColor = 0x4b4f58; pantsColor = 0x3a2e25; }
  else if (type === 'viking_berserker') { coatColor = 0x5c4330; pantsColor = 0x2d231c; }
  else if (type === 'viking_chieftain') { coatColor = 0x3b2c2a; pantsColor = 0x26201c; }
  else if (type === 'boss_scandinavia') { coatColor = 0x293342; pantsColor = 0x26201c; }
  else if (type === 'german_rifleman' || type === 'german_mg') { coatColor = 0x565e55; pantsColor = 0x474d46; }
  else if (type === 'german_officer' || type === 'boss_normandy') { coatColor = 0x3c433c; pantsColor = 0x303630; }
  else if (type === 'kgb_agent') { coatColor = 0x4d4a44; pantsColor = 0x2e2d2b; }
  else if (type === 'soviet_militia') { coatColor = 0x4f5546; pantsColor = 0x3e4238; }
  else if (type === 'boss_soviet') { coatColor = 0x2c3630; pantsColor = 0x242c28; }
  else if (type === 'pla_rifleman' || type === 'pla_mg') { coatColor = 0x8a8255; pantsColor = 0x777049; }
  else if (type === 'red_guard') { coatColor = 0x5c6b47; pantsColor = 0x454f38; }
  else if (type === 'boss_tibet') { coatColor = 0x6b6642; pantsColor = 0x545034; }

  const coatMat = new THREE.MeshStandardMaterial({ color: coatColor, roughness: 0.68 });
  const pantsMat = new THREE.MeshStandardMaterial({ color: pantsColor, roughness: 0.78 });

  // Legs (articulated)
  const legGeo = new THREE.CylinderGeometry(0.11, 0.095, 0.82, 8);
  const legL = new THREE.Mesh(legGeo, pantsMat);
  legL.position.set(-0.15, 0.41, 0);
  legL.castShadow = true;
  const legR = new THREE.Mesh(legGeo, pantsMat);
  legR.position.set(0.15, 0.41, 0);
  legR.castShadow = true;

  // Boots
  const bootGeo = new THREE.BoxGeometry(0.17, 0.22, 0.28);
  const bootL = new THREE.Mesh(bootGeo, darkLeather);
  bootL.position.set(0, -0.34, 0.04);
  legL.add(bootL);
  const bootR = bootL.clone();
  legR.add(bootR);

  // Torso
  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.72, 0.32), coatMat);
  torso.position.set(0, 1.16, 0);
  torso.castShadow = true;
  torso.userData.hitZone = 'body';

  // Arms
  const armGeo = new THREE.CylinderGeometry(0.085, 0.075, 0.62, 8);
  const armL = new THREE.Mesh(armGeo, coatMat);
  armL.position.set(-0.37, 1.18, 0.08);
  armL.rotation.x = -0.35;
  armL.castShadow = true;

  const armR = new THREE.Mesh(armGeo, coatMat);
  armR.position.set(0.37, 1.18, 0.2);
  armR.rotation.x = -1.1;
  armR.castShadow = true;

  // Head
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.21, 12, 10), type === 'ninja' ? coatMat : skinMat);
  head.position.set(0, 1.72, 0);
  head.castShadow = true;
  head.userData.hitZone = 'head';

  // Eyes / facial detail
  const eyeMat = new THREE.MeshBasicMaterial({ color: isBoss ? 0xffbb33 : 0x120c08 });
  const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.026, 6, 6), eyeMat);
  eyeL.position.set(-0.07, 0.03, 0.19);
  const eyeR = eyeL.clone();
  eyeR.position.x = 0.07;
  head.add(eyeL, eyeR);

  // Era-specific iconic accessories & weapons!
  if (type === 'cowboy' || type === 'boss_west') {
    // Stetson Cowboy Hat
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.44, 0.04, 14), darkLeather);
    brim.position.y = 0.15;
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.23, 0.22, 12), darkLeather);
    crown.position.y = 0.26;
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.23, 0.05, 12), isBoss ? goldMat : redMat);
    band.position.y = 0.19;
    head.add(brim, crown, band);

    // Bandana scarf
    const bandana = new THREE.Mesh(new THREE.ConeGeometry(0.24, 0.26, 5), redMat);
    bandana.rotation.x = Math.PI;
    bandana.position.set(0, 1.48, 0.12);
    root.add(bandana);

    // Duster coattails
    const tails = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.56, 0.12), coatMat);
    tails.position.set(0, 0.72, -0.14);
    root.add(tails);

    // Revolver in right hand
    const gun = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.08, 0.46), steelMat);
    gun.position.set(0, -0.28, 0.22);
    armR.add(gun);
  } else if (type === 'bandito') {
    // Wide Mexican Sombrero with golden rim!
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.56, 0.62, 0.05, 18), new THREE.MeshStandardMaterial({ color: 0xc99c55, roughness: 0.75 }));
    brim.position.y = 0.15;
    const trim = new THREE.Mesh(new THREE.TorusGeometry(0.58, 0.025, 6, 20), redMat);
    trim.rotation.x = Math.PI / 2;
    trim.position.y = 0.15;
    const crown = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.34, 12), new THREE.MeshStandardMaterial({ color: 0xb88942, roughness: 0.75 }));
    crown.position.y = 0.32;
    head.add(brim, trim, crown);

    // Draped striped Poncho
    const poncho = new THREE.Mesh(new THREE.ConeGeometry(0.48, 0.62, 8), new THREE.MeshStandardMaterial({ color: 0xc94224, roughness: 0.8 }));
    poncho.position.set(0, 1.24, 0);
    const stripe = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.44, 0.12, 8), goldMat);
    stripe.position.set(0, 1.04, 0);
    root.add(poncho, stripe);

    // Rifle
    const rifle = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.032, 0.88, 8), darkLeather);
    rifle.rotation.x = Math.PI / 2;
    rifle.position.set(0, -0.26, 0.32);
    armR.add(rifle);
  } else if (type === 'ninja') {
    // Glowing headband & crimson shinobi scarf
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.215, 0.022, 6, 14), steelMat);
    band.rotation.x = Math.PI / 2;
    band.position.y = 0.08;
    head.add(band);

    const scarf = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.055, 6, 12), redMat);
    scarf.rotation.x = Math.PI / 2;
    scarf.position.set(0, 1.52, 0);
    const scarfTail = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.58, 0.03), redMat);
    scarfTail.position.set(0.08, 1.32, -0.26);
    scarfTail.rotation.x = 0.35;
    root.add(scarf, scarfTail);

    // Ninjato sword on back + blade in hand
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.75, 0.05), steelMat);
    blade.position.set(0, -0.35, 0.28);
    blade.rotation.x = Math.PI / 2;
    armR.add(blade);
  } else if (type === 'ronin' || type === 'boss_japan') {
    if (isBoss) {
      // Ornate horned Kabuto helmet
      const dome = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.6), new THREE.MeshStandardMaterial({ color: 0x1d1717, metalness: 0.7, roughness: 0.3 }));
      dome.position.y = 0.08;
      const crestL = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.36, 0.04), goldMat);
      crestL.position.set(-0.14, 0.34, 0.16);
      crestL.rotation.z = 0.45;
      const crestR = crestL.clone();
      crestR.position.x = 0.14;
      crestR.rotation.z = -0.45;
      head.add(dome, crestL, crestR);
    } else {
      // Iconic woven Kasa conical straw hat
      const kasa = new THREE.Mesh(new THREE.ConeGeometry(0.52, 0.25, 16), new THREE.MeshStandardMaterial({ color: 0xc2a264, roughness: 0.9 }));
      kasa.position.y = 0.22;
      head.add(kasa);
    }
    // Samurai shoulder plates (sode)
    const sodeGeo = new THREE.BoxGeometry(0.14, 0.34, 0.28);
    const sodeL = new THREE.Mesh(sodeGeo, isBoss ? goldMat : redMat);
    sodeL.position.set(-0.38, 1.4, 0);
    const sodeR = sodeL.clone();
    sodeR.position.x = 0.38;
    root.add(sodeL, sodeR);

    // Katana
    const sword = new THREE.Mesh(new THREE.BoxGeometry(0.035, 1.05, 0.055), steelMat);
    sword.position.set(0, -0.35, 0.42);
    sword.rotation.x = Math.PI / 2;
    armR.add(sword);
  } else if (type === 'halberdier' || type === 'arquebusier' || type === 'boss_swiss') {
    // Habsburg Steel Breastplate & Red-White-Red Sash!
    const plate = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.52, 0.35), isBoss ? goldMat : steelMat);
    plate.position.set(0, 1.22, 0);
    const whiteBand = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.16, 0.36), whiteMat);
    whiteBand.position.set(0, 1.06, 0);
    root.add(plate, whiteBand);

    // Steel Kettle-Helm / Morion with Feather Plume
    const helm = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.62), isBoss ? goldMat : steelMat);
    helm.position.y = 0.08;
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.36, 0.04, 14), isBoss ? goldMat : steelMat);
    brim.position.y = 0.09;
    const plume = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.42, 8), redMat);
    plume.position.set(0, 0.34, -0.08);
    plume.rotation.x = -0.38;
    head.add(helm, brim, plume);

    if (type === 'halberdier') {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 2.2, 8), darkLeather);
      pole.position.set(0, 0.1, 0.34);
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.42, 0.28), steelMat);
      blade.position.set(0, 1.0, 0.44);
      armR.add(pole, blade);
    } else {
      const musket = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 1.05, 8), steelMat);
      musket.rotation.x = Math.PI / 2;
      musket.position.set(0, -0.25, 0.42);
      armR.add(musket);
    }
  } else if (type === 'spartan_hoplite' || type === 'spartan_skirmisher' || type === 'boss_greece') {
    // Spartan Bronze Cuirass, Flowing Red Cloak, Crested Bronze Corinthian Helmet & Round Lambda (Λ) Shield!
    const bronzeMat = new THREE.MeshStandardMaterial({ color: isBoss ? 0xeab548 : 0xc98f36, metalness: 0.84, roughness: 0.28 });
    const cuirass = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.56, 0.34), bronzeMat);
    cuirass.position.set(0, 1.2, 0);
    const cloak = new THREE.Mesh(new THREE.BoxGeometry(0.64, 1.15, 0.1), redMat);
    cloak.position.set(0, 1.02, -0.22);
    cloak.rotation.x = 0.14;
    const skirt = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.34, 0.36, 8), redMat);
    skirt.position.set(0, 0.78, 0);
    root.add(cuirass, cloak, skirt);

    // Crested Bronze Corinthian Helmet
    const helm = new THREE.Mesh(new THREE.SphereGeometry(0.245, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.72), bronzeMat);
    helm.position.y = 0.06;
    const cheekL = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.18, 0.14), bronzeMat);
    cheekL.position.set(-0.17, -0.05, 0.12);
    const cheekR = cheekL.clone();
    cheekR.position.x = 0.17;
    // Tall crimson horsehair crest (transverse for Boss!)
    const crest = new THREE.Mesh(
      isBoss ? new THREE.BoxGeometry(0.58, 0.24, 0.11) : new THREE.BoxGeometry(0.11, 0.24, 0.54),
      redMat
    );
    crest.position.set(0, 0.34, isBoss ? 0 : -0.04);
    head.add(helm, cheekL, cheekR, crest);

    // Round Spartan Bronze Shield emblazoned with the Greek letter Lambda (Λ)!
    const shieldMat = new THREE.MeshStandardMaterial({ map: createSpartanShieldTexture(), metalness: 0.5, roughness: 0.38 });
    const shield = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.06, 20), [bronzeMat, shieldMat, bronzeMat]);
    shield.rotation.x = Math.PI / 2;
    shield.position.set(-0.08, -0.18, 0.24);
    armL.add(shield);

    // Dory Spear or Javelin
    const spearLen = type === 'spartan_hoplite' ? 2.25 : 1.75;
    const spear = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.026, spearLen, 8), darkLeather);
    spear.rotation.x = Math.PI / 2;
    spear.position.set(0, -0.26, 0.45);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.28, 4), bronzeMat);
    tip.rotation.x = Math.PI / 2;
    tip.position.set(0, -0.26, 0.45 + spearLen * 0.5 + 0.1);
    armR.add(spear, tip);
  } else if (type === 'viking_warrior' || type === 'viking_archer' || type === 'viking_berserker' || type === 'viking_chieftain' || type === 'boss_scandinavia') {
    const isChieftain = type === 'viking_chieftain';
    const furMat = new THREE.MeshStandardMaterial({ color: type === 'viking_berserker' ? 0x4a3525 : 0x3b332d, roughness: 0.95 });
    const beardCol = type === 'viking_berserker' ? 0x7c3b1e : isChieftain ? 0x2e2116 : 0x4d3a28;
    const beardMat = new THREE.MeshStandardMaterial({ color: beardCol, roughness: 0.92 });
    const helmMat = isBoss ? goldMat : steelMat;
    const hasHorns = isChieftain || isBoss || (type !== 'viking_berserker' && Math.random() < 0.32);

    // Fur shoulder mantle & beard
    const furMantle = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.26, 0.4), furMat);
    furMantle.position.set(0, 1.48, -0.02);
    const cloak = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.95, 0.1), (isBoss || isChieftain) ? redMat : furMat);
    cloak.position.set(0, 1.0, -0.22);
    root.add(furMantle, cloak);

    const beard = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.34, 10), beardMat);
    beard.rotation.x = Math.PI;
    beard.position.set(0, -0.2, 0.1);
    head.add(beard);

    if (type === 'viking_berserker') {
      const wolfHood = new THREE.Mesh(new THREE.SphereGeometry(0.245, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.62), furMat);
      wolfHood.position.set(0, 0.08, -0.03);
      head.add(wolfHood);
    } else {
      const spangen = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.56), helmMat);
      spangen.position.y = 0.08;
      // Gilt band around helmet rim for horned/chieftain helmets
      const rim = new THREE.Mesh(new THREE.TorusGeometry(0.238, 0.028, 6, 16), hasHorns ? goldMat : helmMat);
      rim.rotation.x = Math.PI / 2;
      rim.position.y = 0.08;
      const nasal = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.15, 0.03), helmMat);
      nasal.position.set(0, 0.01, 0.22);
      head.add(spangen, rim, nasal);

      if (hasHorns) {
        // Two curved ivory ox horns with dark tips & gilt base rings
        const hornMat = new THREE.MeshStandardMaterial({ color: 0xebe0c6, roughness: 0.58 });
        const tipMat = new THREE.MeshStandardMaterial({ color: 0x2e261f, roughness: 0.6 });
        for (const s of [-1, 1]) {
          const hornGrp = new THREE.Group();
          const baseRing = new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.014, 6, 10), goldMat);
          baseRing.rotation.y = Math.PI / 2;
          const lower = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.052, 0.24, 8), hornMat);
          lower.rotation.z = -s * 1.15;
          lower.position.set(s * 0.11, 0.04, 0);
          const upper = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.24, 8), tipMat);
          upper.rotation.z = -s * 0.35;
          upper.position.set(s * 0.25, 0.18, 0.02);
          hornGrp.add(baseRing, lower, upper);
          hornGrp.position.set(s * 0.22, 0.16, 0.02);
          head.add(hornGrp);
        }
      }
    }

    // Round painted Viking wooden shield (except berserker & archer)
    if (type !== 'viking_berserker' && type !== 'viking_archer') {
      const shTex = createVikingShieldTexture(isBoss ? 3 : isChieftain ? 2 : 0);
      const shMat = new THREE.MeshStandardMaterial({ map: shTex, roughness: 0.72 });
      const shield = new THREE.Mesh(new THREE.CylinderGeometry(isChieftain ? 0.5 : 0.45, isChieftain ? 0.5 : 0.45, 0.06, 18), [darkLeather, shMat, darkLeather]);
      shield.rotation.x = Math.PI / 2;
      shield.position.set(-0.08, -0.18, 0.24);
      armL.add(shield);
    }

    if (type === 'viking_archer') {
      const bow = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.024, 6, 14, Math.PI * 0.9), darkLeather);
      bow.rotation.y = Math.PI / 2;
      bow.rotation.z = -Math.PI * 0.45;
      bow.position.set(0, -0.18, 0.28);
      armL.add(bow);
    } else if (isChieftain && Math.random() < 0.5) {
      // Heavy Norse broadsword
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.09, 1.05), steelMat);
      blade.position.set(0, -0.26, 0.56);
      const guard = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.05, 0.05), goldMat);
      guard.position.set(0, -0.26, 0.08);
      armR.add(blade, guard);
    } else {
      const addAxe = (targetArm) => {
        const haft = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.026, 0.92, 8), darkLeather);
        haft.rotation.x = Math.PI / 2;
        haft.position.set(0, -0.26, 0.34);
        const headAxe = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.26, 0.22), steelMat);
        headAxe.position.set(0, -0.26, 0.74);
        targetArm.add(haft, headAxe);
      };
      addAxe(armR);
      if (type === 'viking_berserker') {
        armL.rotation.x = -1.1;
        addAxe(armL);
      }
    }
  } else if (type === 'german_rifleman' || type === 'german_officer' || type === 'german_mg' || type === 'boss_normandy') {
    // Plain field-grey military uniform — strictly NO political symbols or SS runes
    const helmMat = new THREE.MeshStandardMaterial({ color: 0x3b423c, metalness: 0.45, roughness: 0.48 });
    const gunMetal = new THREE.MeshStandardMaterial({ color: 0x2d3236, metalness: 0.8, roughness: 0.32 });

    // Leather military belt & shoulder straps
    const belt = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.1, 0.34), darkLeather);
    belt.position.set(0, 0.92, 0);
    root.add(belt);

    if (type === 'german_officer' || isBoss) {
      // Long officer overcoat & plain peaked military cap
      const coatSkirt = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.62, 0.34), coatMat);
      coatSkirt.position.set(0, 0.64, -0.02);
      root.add(coatSkirt);

      const capCrown = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.21, 0.16, 14), coatMat);
      capCrown.position.y = 0.18;
      const visor = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.03, 0.22), darkLeather);
      visor.position.set(0, 0.1, 0.18);
      visor.rotation.x = 0.18;
      head.add(capCrown, visor);

      // Pistol or MP40-style submachine gun for boss
      const gun = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.09, isBoss ? 0.68 : 0.36), gunMetal);
      gun.position.set(0, -0.26, isBoss ? 0.34 : 0.2);
      armR.add(gun);
    } else {
      // Plain rounded steel Stahlhelm helmet
      const stahl = new THREE.Mesh(new THREE.SphereGeometry(0.245, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.58), helmMat);
      stahl.position.y = 0.08;
      const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.28, 0.1, 14, 1, true), helmMat);
      rim.position.y = 0.04;
      head.add(stahl, rim);

      if (type === 'german_mg') {
        // Stationary heavy machine gun mounted forward
        const mgBody = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.046, 1.15, 8), gunMetal);
        mgBody.rotation.x = Math.PI / 2;
        mgBody.position.set(0, -0.22, 0.56);
        armR.add(mgBody);
      } else {
        const rifle = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.03, 1.05, 8), darkLeather);
        rifle.rotation.x = Math.PI / 2;
        rifle.position.set(0, -0.26, 0.42);
        armR.add(rifle);
      }
    }
  } else if (type === 'kgb_agent' || type === 'soviet_militia' || type === 'boss_soviet') {
    const gunMetal = new THREE.MeshStandardMaterial({ color: 0x26292d, metalness: 0.8, roughness: 0.32 });
    const furMat = new THREE.MeshStandardMaterial({ color: 0x3b3532, roughness: 0.94 });
    const blueBand = new THREE.MeshStandardMaterial({ color: 0x1d4b8c, roughness: 0.65 });

    // Long coat skirt & belt
    const coatSkirt = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.68, 0.34), coatMat);
    coatSkirt.position.set(0, 0.6, 0);
    const belt = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.09, 0.36), darkLeather);
    belt.position.set(0, 0.94, 0);
    root.add(coatSkirt, belt);

    if (type === 'kgb_agent') {
      // Belted trench coat, dark fedora hat, pistol
      const fedoraBrim = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.03, 14), darkLeather);
      fedoraBrim.position.y = 0.14;
      const fedoraCrown = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.22, 0.16, 12), darkLeather);
      fedoraCrown.position.y = 0.23;
      head.add(fedoraBrim, fedoraCrown);
      const pistol = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.08, 0.32), gunMetal);
      pistol.position.set(0, -0.26, 0.22);
      armR.add(pistol);
    } else if (type === 'soviet_militia') {
      // Fur ushanka hat with red star, greatcoat, burst SMG
      const ushanka = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.25, 0.2, 12), furMat);
      ushanka.position.y = 0.19;
      const star = new THREE.Mesh(new THREE.SphereGeometry(0.032, 6, 6), redMat);
      star.position.set(0, 0.2, 0.24);
      head.add(ushanka, star);
      const smg = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.03, 0.72, 8), gunMetal);
      smg.rotation.x = Math.PI / 2;
      smg.position.set(0, -0.26, 0.34);
      const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.05, 10), gunMetal);
      drum.rotation.x = Math.PI / 2;
      drum.position.set(0, -0.35, 0.26);
      armR.add(smg, drum);
    } else {
      // Boss Colonel Voronin: peaked officer cap with royal blue KGB band & TWO pistols!
      const capCrown = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.22, 0.14, 14), coatMat);
      capCrown.position.y = 0.2;
      const band = new THREE.Mesh(new THREE.CylinderGeometry(0.226, 0.226, 0.06, 14), blueBand);
      band.position.y = 0.14;
      const visor = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.03, 0.22), darkLeather);
      visor.position.set(0, 0.11, 0.18);
      head.add(capCrown, band, visor);
      const p1 = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.09, 0.36), gunMetal);
      p1.position.set(0, -0.26, 0.24);
      armR.add(p1);
      armL.rotation.x = -1.1;
      const p2 = p1.clone();
      armL.add(p2);
    }
  } else if (type === 'pla_rifleman' || type === 'pla_mg' || type === 'red_guard' || type === 'boss_tibet') {
    const gunMetal = new THREE.MeshStandardMaterial({ color: 0x26292d, metalness: 0.78, roughness: 0.35 });
    const belt = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.09, 0.34), darkLeather);
    belt.position.set(0, 0.92, 0);
    root.add(belt);

    if (type === 'red_guard') {
      // Red Guard: olive tunic, bright red armband on left sleeve, soft cap, wooden club
      const armBand = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.14, 8), redMat);
      armBand.position.set(0, 0.06, 0);
      armL.add(armBand);
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.23, 0.12, 12), coatMat);
      cap.position.y = 0.17;
      const bill = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.025, 0.18), coatMat);
      bill.position.set(0, 0.12, 0.17);
      const star = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 6), redMat);
      star.position.set(0, 0.17, 0.22);
      head.add(cap, bill, star);
      // Heavy wooden club
      const club = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.03, 0.85, 8), darkLeather);
      club.rotation.x = Math.PI / 2;
      club.position.set(0, -0.26, 0.38);
      armR.add(club);
    } else if (type === 'boss_tibet') {
      // Commander Zhao: peaked cap with red star, belted tunic, heavy sidearm/carbine
      const capCrown = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.22, 0.15, 14), coatMat);
      capCrown.position.y = 0.19;
      const visor = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.03, 0.22), darkLeather);
      visor.position.set(0, 0.11, 0.18);
      const star = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 6), redMat);
      star.position.set(0, 0.19, 0.24);
      head.add(capCrown, visor, star);
      const carbine = new THREE.Mesh(new THREE.BoxGeometry(0.065, 0.095, 0.7), gunMetal);
      carbine.position.set(0, -0.26, 0.35);
      armR.add(carbine);
    } else {
      // Khaki PLA uniform, soft cap with red star, rifle or burst MG
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.23, 0.12, 12), coatMat);
      cap.position.y = 0.17;
      const bill = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.025, 0.18), coatMat);
      bill.position.set(0, 0.12, 0.17);
      const star = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 6), redMat);
      star.position.set(0, 0.17, 0.22);
      head.add(cap, bill, star);
      if (type === 'pla_mg') {
        const mg = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.042, 1.08, 8), gunMetal);
        mg.rotation.x = Math.PI / 2;
        mg.position.set(0, -0.24, 0.48);
        const pan = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.05, 12), gunMetal);
        pan.position.set(0, -0.17, 0.36);
        armR.add(mg, pan);
      } else {
        const rifle = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.028, 1.05, 8), darkLeather);
        rifle.rotation.x = Math.PI / 2;
        rifle.position.set(0, -0.26, 0.42);
        armR.add(rifle);
      }
    }
  }

  // Muzzle flash beacon on weapon tip
  const muzzle = new THREE.Mesh(
    new THREE.SphereGeometry(0.14, 6, 6),
    new THREE.MeshBasicMaterial({ color: 0xffd25a, transparent: true, opacity: 0 })
  );
  muzzle.position.set(0, -0.28, 0.68);
  armR.add(muzzle);

  // Floating subtle diegetic health bar above damaged enemies
  const hpBg = new THREE.Mesh(
    new THREE.PlaneGeometry(0.95, 0.11),
    new THREE.MeshBasicMaterial({ color: 0x160d0a, side: THREE.DoubleSide })
  );
  hpBg.position.set(0, 2.35, 0);
  hpBg.visible = false;
  const hpFill = new THREE.Mesh(
    new THREE.PlaneGeometry(0.9, 0.075),
    new THREE.MeshBasicMaterial({ color: isBoss ? 0xffaa22 : 0xe83b2c, side: THREE.DoubleSide })
  );
  hpFill.position.set(0, 0, 0.01);
  hpBg.add(hpFill);

  root.add(legL, legR, torso, armL, armR, head, hpBg);

  const spec = ENEMY_SPECS[type];
  if (spec.scale) root.scale.setScalar(spec.scale);

  return { root, legL, legR, armL, armR, torso, head, muzzle, hpBg, hpFill };
}

export class Enemy {
  constructor(type, position, difficultyMult = 1.0, options = {}) {
    const spec = ENEMY_SPECS[type];
    this.type = type;
    this.name = spec.name;
    this.isBoss = type.startsWith('boss_');
    this.maxHp = Math.round(spec.hp * difficultyMult);
    this.hp = this.maxHp;
    this.speed = spec.speed;
    this.range = spec.range;
    this.fireRate = spec.fireRate / (0.8 + difficultyMult * 0.2);
    this.damage = Math.round(spec.damage * difficultyMult);
    this.score = spec.score;
    this.style = spec.style;
    this.projectileColor = spec.projectileColor;

    this.parts = buildEnemyMesh(type);
    this.mesh = this.parts.root;
    this.mesh.position.copy(position);
    this.spawnPos = position.clone();

    this.alive = true;
    this.alert = false;
    this.hideUntilClose = !!options.hideUntilClose;
    this.ambushDist = options.ambushDist || 12.5;
    if (this.hideUntilClose) {
      this.mesh.visible = false;
    }

    this.fireCooldown = 0.6 + Math.random() * 0.9;
    this.strafeDir = Math.random() > 0.5 ? 1 : -1;
    this.strafeTimer = 1.2 + Math.random() * 2.0;
    this.hurtFlash = 0;
    this.muzzleFlash = 0;
    this.deathTimer = 0;
    this.fallChecked = false;
    this.slumpDeath = false;
    this.walkPhase = Math.random() * Math.PI * 2;
    this.radius = this.style === 'dog' ? 0.36 : this.isBoss ? 0.68 : 0.46;
    this.headHeight = this.style === 'dog' ? 0.72 : this.isBoss ? 2.15 : 1.72;

    // A* route-finding state
    this.path = null;
    this.pathIdx = 0;
    this.pathTimer = Math.random() * 0.5;
  }

  getHitMeshes() {
    if (!this.alive || !this.mesh.visible) return [];
    const list = [];
    this.mesh.traverse((o) => {
      if (o.isMesh && o !== this.parts.hpBg && o !== this.parts.hpFill && o !== this.parts.muzzle) {
        o.userData.enemy = this;
        list.push(o);
      }
    });
    return list;
  }

  takeDamage(amount, isHeadshot = false) {
    if (!this.alive) return false;
    this.alert = true;
    this.hideUntilClose = false;
    this.mesh.visible = true;
    this.hp -= amount;
    this.hurtFlash = 0.16;

    if (!this.isBoss) {
      this.parts.hpBg.visible = true;
      const pct = Math.max(0, this.hp / this.maxHp);
      this.parts.hpFill.scale.x = Math.max(0.001, pct);
      this.parts.hpFill.position.x = -(1 - pct) * 0.45;
    }

    if (this.hp <= 0) {
      this.alive = false;
      this.hp = 0;
      this.parts.hpBg.visible = false;
      return true; // Killed
    }
    return false;
  }

  update(dt, playerPos, collision, callbacks, detectMult = 1.0, playerCrouched = false) {
    if (!this.alive) {
      // Pick a wall-free fall direction on the first death frame, or slump cleanly in place
      if (!this.fallChecked) {
        this.fallChecked = true;
        const origin = new THREE.Vector3(this.mesh.position.x, this.mesh.position.y + 0.85, this.mesh.position.z);
        const candidates = [
          this.mesh.rotation.y + Math.PI,
          this.mesh.rotation.y,
          this.mesh.rotation.y + Math.PI * 0.5,
          this.mesh.rotation.y - Math.PI * 0.5
        ];
        let freeYaw = null;
        for (const yaw of candidates) {
          const dir = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw));
          if (!collision.raycast(origin, dir, 1.55)) {
            freeYaw = yaw;
            break;
          }
        }
        if (freeYaw !== null) {
          this.mesh.rotation.y = freeYaw;
          this.slumpDeath = false;
        } else {
          this.slumpDeath = true;
        }
      }

      this.deathTimer = Math.min(1, this.deathTimer + dt * 2.8);
      const floorY = collision.getFloorHeight(this.mesh.position.x, this.mesh.position.z, this.mesh.position.y);
      if (this.slumpDeath) {
        // Slump down cleanly without clipping into tight walls/corners
        const s = Math.max(0.28, 1 - this.deathTimer * 0.72);
        this.mesh.scale.y = s * (ENEMY_SPECS[this.type].scale || 1);
        this.mesh.position.y = floorY;
      } else {
        this.mesh.rotation.x = -this.deathTimer * (Math.PI * 0.48);
        this.mesh.position.y = Math.max(floorY + 0.18, this.mesh.position.y - dt * 1.4);
      }
      return;
    }

    const toPlayer = new THREE.Vector3().subVectors(playerPos, this.mesh.position);
    const horizDist = Math.hypot(toPlayer.x, toPlayer.z);

    // Hidden ambush enemy (e.g., Boot Hill crypt outlaw) emerges when player approaches
    if (this.hideUntilClose) {
      if (horizDist <= this.ambushDist) {
        this.hideUntilClose = false;
        this.mesh.visible = true;
        this.alert = true;
      } else {
        return;
      }
    }

    // Billboard mini HP bar toward player
    if (this.parts.hpBg.visible) {
      this.parts.hpBg.lookAt(playerPos.x, this.mesh.position.y + (this.style === 'dog' ? 1.15 : 2.3), playerPos.z);
    }

    // Hurt flash feedback
    if (this.hurtFlash > 0) {
      this.hurtFlash -= dt;
      const emissiveHex = this.hurtFlash > 0 ? 0x661111 : 0x000000;
      this.parts.torso.material.emissive.setHex(emissiveHex);
    }

    // Muzzle flash fade
    if (this.muzzleFlash > 0) {
      this.muzzleFlash -= dt;
      this.parts.muzzle.material.opacity = Math.max(0, this.muzzleFlash * 8);
    }

    // Wake up when player gets close or enters sight (scaled by hero stealth & crouching -40%!)
    const eyeY = this.style === 'dog' ? 0.7 : 1.55;
    const eyePos = new THREE.Vector3(this.mesh.position.x, this.mesh.position.y + eyeY, this.mesh.position.z);
    // Crouching lowers the LOS target to ~0.88m so waist-high (~1m) cover hides a crouching player!
    const playerEye = new THREE.Vector3(playerPos.x, playerPos.y + (playerCrouched ? 0.88 : 1.45), playerPos.z);
    const crouchMult = playerCrouched ? 0.60 : 1.0;
    const sightRange = 42 * detectMult * crouchMult;
    const proxRange = (this.style === 'dog' ? 28 : 26) * detectMult * crouchMult;
    const canSee = horizDist < 54 && collision.hasLineOfSight(eyePos, playerEye);

    if (!this.alert) {
      if (horizDist < proxRange || (canSee && horizDist < sightRange)) {
        this.alert = true;
        if (this.style === 'dog' && callbacks.onDogBark) {
          callbacks.onDogBark(this);
        }
      } else {
        const baseTorsoY = this.style === 'dog' ? 0.50 : 1.16;
        this.parts.torso.position.y = baseTorsoY + Math.sin(performance.now() * 0.002 + this.walkPhase) * 0.02;
        return;
      }
    }

    // Movement logic with real A* route-finding around walls, through doors, and up stairs
    this.strafeTimer -= dt;
    if (this.strafeTimer <= 0) {
      this.strafeTimer = 1.1 + Math.random() * 1.6;
      this.strafeDir *= -1;
    }

    const isMelee = this.style === 'melee' || this.style === 'dog';
    const isTurret = this.style === 'turret';
    const isHybrid = this.style === 'hybrid' || this.style === 'boss_hybrid';
    const desiredMin = this.style === 'dog' ? 1.55 : isMelee ? 2.0 : isHybrid ? 7.0 : 12.5;
    const desiredMax = this.style === 'dog' ? 2.0 : isMelee ? 2.5 : isHybrid ? 15.0 : 25.0;

    const move = new THREE.Vector3();
    let lookTargetX = playerPos.x;
    let lookTargetZ = playerPos.z;

    if (!isTurret && this.speed > 0) {
      const needsRoute = !canSee || (isMelee && horizDist > 4.0) || horizDist > desiredMax;
      if (needsRoute && collision.nav) {
        this.pathTimer -= dt;
        if (this.pathTimer <= 0 || !this.path || this.pathIdx >= this.path.length) {
          this.pathTimer = 0.55 + Math.random() * 0.3;
          this.path = collision.findPath(this.mesh.position, playerPos, 2400);
          this.pathIdx = 0;
        }
        if (this.path && this.pathIdx < this.path.length) {
          while (this.pathIdx < this.path.length) {
            const wp = this.path[this.pathIdx];
            if (Math.hypot(wp.x - this.mesh.position.x, wp.z - this.mesh.position.z) < 1.05) {
              this.pathIdx++;
            } else {
              break;
            }
          }
          if (this.pathIdx < this.path.length) {
            const wp = this.path[this.pathIdx];
            move.set(wp.x - this.mesh.position.x, 0, wp.z - this.mesh.position.z);
            if (!canSee) {
              lookTargetX = wp.x;
              lookTargetZ = wp.z;
            }
          }
        } else {
          // Fallback steering if outside nav budget
          move.set(toPlayer.x, 0, toPlayer.z);
        }
      } else {
        const directYaw = Math.atan2(toPlayer.x, toPlayer.z);
        const forward = new THREE.Vector3(Math.sin(directYaw), 0, Math.cos(directYaw));
        const right = new THREE.Vector3(Math.cos(directYaw), 0, -Math.sin(directYaw));
        if (!canSee || horizDist > desiredMax) {
          move.add(forward);
        } else if (horizDist < desiredMin && !isMelee) {
          move.addScaledVector(forward, -0.55);
        }
        if (horizDist < desiredMax + 6 && this.style !== 'dog') {
          move.addScaledVector(right, this.strafeDir * (this.style === 'skirmisher' ? 1.15 : 0.65));
        }
      }
    }

    // Face either the player (when visible) or the next route waypoint
    const targetYaw = Math.atan2(lookTargetX - this.mesh.position.x, lookTargetZ - this.mesh.position.z);
    let diffYaw = targetYaw - this.mesh.rotation.y;
    while (diffYaw > Math.PI) diffYaw -= Math.PI * 2;
    while (diffYaw < -Math.PI) diffYaw += Math.PI * 2;
    this.mesh.rotation.y += diffYaw * Math.min(1, dt * 8);

    if (move.lengthSq() > 0.001 && this.speed > 0) {
      move.normalize().multiplyScalar(this.speed * dt);
      // Sub-stepped movement prevents fast runners from skipping thin walls or bars
      collision.moveHorizontal(this.mesh.position, move.x, move.z, this.radius, this.mesh.position.y);
      const fy = collision.getFloorHeight(this.mesh.position.x, this.mesh.position.z, this.mesh.position.y);
      this.mesh.position.y += (fy - this.mesh.position.y) * Math.min(1, dt * 14);

      // Animate legs running
      this.walkPhase += dt * this.speed * (this.style === 'dog' ? 2.8 : 2.2);
      this.parts.legL.rotation.x = Math.sin(this.walkPhase) * 0.6;
      this.parts.legR.rotation.x = -Math.sin(this.walkPhase) * 0.6;
      if (this.style === 'dog') {
        this.parts.armL.rotation.x = -Math.sin(this.walkPhase) * 0.6;
        this.parts.armR.rotation.x = Math.sin(this.walkPhase) * 0.6;
      } else {
        this.parts.armL.rotation.x = -0.35 - Math.sin(this.walkPhase) * 0.35;
      }
    }

    // Attack logic (melee strictly requires unobstructed line of sight!)
    this.fireCooldown -= dt;
    if (this.fireCooldown <= 0) {
      const biteRange = this.style === 'dog' ? 2.45 : 3.5;
      if (isMelee || (isHybrid && horizDist < 3.6)) {
        if (horizDist < biteRange && collision.hasLineOfSight(eyePos, playerEye)) {
          this.fireCooldown = this.fireRate;
          if (this.style === 'dog') {
            this.parts.head.rotation.x = 0.35;
            setTimeout(() => { if (this.parts.head) this.parts.head.rotation.x = 0; }, 160);
          } else {
            this.parts.armR.rotation.x = -2.1;
            setTimeout(() => { if (this.parts.armR) this.parts.armR.rotation.x = -1.1; }, 160);
          }
          callbacks.onMeleeHitPlayer(this.damage, this);
        }
      } else if (canSee && horizDist <= this.range) {
        this.fireCooldown = this.fireRate * (0.85 + Math.random() * 0.35);
        this.muzzleFlash = 0.14;
        const muzzleWorld = new THREE.Vector3();
        this.parts.muzzle.getWorldPosition(muzzleWorld);
        callbacks.onEnemyFire(this, muzzleWorld, playerEye);
      }
    }
  }
}
