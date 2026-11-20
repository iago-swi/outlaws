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
  }
};

function buildEnemyMesh(type) {
  const root = new THREE.Group();
  const isBoss = type.startsWith('boss_');

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
  else if (type === 'boss_scandinavia') { coatColor = 0x293342; pantsColor = 0x26201c; }

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
  } else if (type === 'viking_warrior' || type === 'viking_archer' || type === 'viking_berserker' || type === 'boss_scandinavia') {
    // Historical Vikings — Strictly NO Horned Helmets!
    const furMat = new THREE.MeshStandardMaterial({ color: type === 'viking_berserker' ? 0x4a3525 : 0x3b332d, roughness: 0.95 });
    const beardCol = type === 'viking_berserker' ? 0x7c3b1e : 0x4d3a28;
    const beardMat = new THREE.MeshStandardMaterial({ color: beardCol, roughness: 0.92 });
    const helmMat = isBoss ? goldMat : steelMat;

    // Fur shoulder mantle & beard
    const furMantle = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.26, 0.4), furMat);
    furMantle.position.set(0, 1.48, -0.02);
    const cloak = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.95, 0.1), isBoss ? redMat : furMat);
    cloak.position.set(0, 1.0, -0.22);
    root.add(furMantle, cloak);

    const beard = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.34, 10), beardMat);
    beard.rotation.x = Math.PI;
    beard.position.set(0, -0.2, 0.1);
    head.add(beard);

    if (type === 'viking_berserker') {
      // Bareheaded wild fur-hooded Berserker (zero horns!)
      const wolfHood = new THREE.Mesh(new THREE.SphereGeometry(0.245, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.62), furMat);
      wolfHood.position.set(0, 0.08, -0.03);
      head.add(wolfHood);
    } else {
      // Historical Iron Spangenhelm / Gjermundbu Spectacle Helmet (smooth domed iron, NO horns!)
      const spangen = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.56), helmMat);
      spangen.position.y = 0.08;
      const rim = new THREE.Mesh(new THREE.TorusGeometry(0.235, 0.022, 6, 16), helmMat);
      rim.rotation.x = Math.PI / 2;
      rim.position.y = 0.08;
      const nasal = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.15, 0.03), helmMat);
      nasal.position.set(0, 0.01, 0.22);
      head.add(spangen, rim, nasal);
    }

    // Round painted Viking wooden shield (except berserker who dual-wields axes!)
    if (type !== 'viking_berserker' && type !== 'viking_archer') {
      const shTex = createVikingShieldTexture(isBoss ? 3 : 0);
      const shMat = new THREE.MeshStandardMaterial({ map: shTex, roughness: 0.72 });
      const shield = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.06, 18), [darkLeather, shMat, darkLeather]);
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
  constructor(type, position, difficultyMult = 1.0) {
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
    this.fireCooldown = 0.6 + Math.random() * 0.9;
    this.strafeDir = Math.random() > 0.5 ? 1 : -1;
    this.strafeTimer = 1.2 + Math.random() * 2.0;
    this.hurtFlash = 0;
    this.muzzleFlash = 0;
    this.deathTimer = 0;
    this.walkPhase = Math.random() * Math.PI * 2;
    this.radius = this.isBoss ? 0.68 : 0.46;
    this.headHeight = this.isBoss ? 2.15 : 1.72;
  }

  getHitMeshes() {
    if (!this.alive) return [];
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

  update(dt, playerPos, collision, callbacks) {
    if (!this.alive) {
      // Dramatic collapse animation
      this.deathTimer = Math.min(1, this.deathTimer + dt * 2.8);
      this.mesh.rotation.x = -this.deathTimer * (Math.PI * 0.48);
      this.mesh.position.y = Math.max(
        collision.getFloorHeight(this.mesh.position.x, this.mesh.position.z, this.mesh.position.y) + 0.18,
        this.mesh.position.y - dt * 1.4
      );
      return;
    }

    // Billboard mini HP bar toward player
    if (this.parts.hpBg.visible) {
      this.parts.hpBg.lookAt(playerPos.x, this.mesh.position.y + 2.3, playerPos.z);
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

    const toPlayer = new THREE.Vector3().subVectors(playerPos, this.mesh.position);
    const horizDist = Math.hypot(toPlayer.x, toPlayer.z);

    // Wake up when player gets close or enters sight
    const eyePos = new THREE.Vector3(this.mesh.position.x, this.mesh.position.y + 1.55, this.mesh.position.z);
    const playerEye = new THREE.Vector3(playerPos.x, playerPos.y + 1.45, playerPos.z);
    const canSee = horizDist < 54 && collision.hasLineOfSight(eyePos, playerEye);

    if (!this.alert) {
      if (horizDist < 26 || (canSee && horizDist < 42)) {
        this.alert = true;
      } else {
        // Gentle idle patrol sway
        this.parts.torso.position.y = 1.16 + Math.sin(performance.now() * 0.002 + this.walkPhase) * 0.025;
        return;
      }
    }

    // Face the player smoothly
    const targetYaw = Math.atan2(toPlayer.x, toPlayer.z);
    let diffYaw = targetYaw - this.mesh.rotation.y;
    while (diffYaw > Math.PI) diffYaw -= Math.PI * 2;
    while (diffYaw < -Math.PI) diffYaw += Math.PI * 2;
    this.mesh.rotation.y += diffYaw * Math.min(1, dt * 8);

    // Movement logic based on archetype
    this.strafeTimer -= dt;
    if (this.strafeTimer <= 0) {
      this.strafeTimer = 1.1 + Math.random() * 1.6;
      this.strafeDir *= -1;
    }

    const forward = new THREE.Vector3(Math.sin(targetYaw), 0, Math.cos(targetYaw));
    const right = new THREE.Vector3(Math.cos(targetYaw), 0, -Math.sin(targetYaw));
    const move = new THREE.Vector3();

    const isMelee = this.style === 'melee';
    const isHybrid = this.style === 'hybrid' || this.style === 'boss_hybrid';
    const desiredMin = isMelee ? 2.1 : isHybrid ? 7.0 : 12.5;
    const desiredMax = isMelee ? 2.6 : isHybrid ? 15.0 : 25.0;

    if (!canSee || horizDist > desiredMax) {
      move.add(forward);
    } else if (horizDist < desiredMin && !isMelee) {
      move.addScaledVector(forward, -0.55);
    }

    if (horizDist < desiredMax + 6) {
      move.addScaledVector(right, this.strafeDir * (this.style === 'skirmisher' ? 1.15 : 0.65));
    }

    if (move.lengthSq() > 0.01) {
      move.normalize().multiplyScalar(this.speed * dt);
      this.mesh.position.x += move.x;
      this.mesh.position.z += move.z;
      collision.resolveHorizontal(this.mesh.position, this.radius, this.mesh.position.y);
      const fy = collision.getFloorHeight(this.mesh.position.x, this.mesh.position.z, this.mesh.position.y);
      this.mesh.position.y += (fy - this.mesh.position.y) * Math.min(1, dt * 14);

      // Animate legs walking
      this.walkPhase += dt * this.speed * 2.2;
      this.parts.legL.rotation.x = Math.sin(this.walkPhase) * 0.55;
      this.parts.legR.rotation.x = -Math.sin(this.walkPhase) * 0.55;
      this.parts.armL.rotation.x = -0.35 - Math.sin(this.walkPhase) * 0.35;
    }

    // Attack logic
    this.fireCooldown -= dt;
    if (this.fireCooldown <= 0) {
      if (isMelee || (isHybrid && horizDist < 3.6)) {
        if (horizDist < 3.5) {
          this.fireCooldown = this.fireRate;
          this.parts.armR.rotation.x = -2.1;
          setTimeout(() => { if (this.parts.armR) this.parts.armR.rotation.x = -1.1; }, 160);
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
