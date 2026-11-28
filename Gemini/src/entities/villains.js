import * as THREE from 'three';
import { ERA_HEROES, buildHeroFigure } from './heroes.js';

/**
 * 27 Playable Villains — strictly for Duel Mode only (never shown in single-player).
 * Three per level, four in Level 7, five in Level 4 (Greece). Plain factual descriptions; strictly no party symbols.
 */
export const ERA_VILLAINS = {
  west: [
    {
      id: 'jesse_james',
      era: 'west',
      isVillain: true,
      name: 'Jesse James',
      bio: 'Bank and train robber of Missouri.',
      strengthLabel: 'Outlaw Rider',
      strengthDesc: 'Moves 15% faster across streets and cover.',
      hudTag: '+15% SPEED',
      defaultWeaponIdx: 0,
      mods: { moveSpeedMult: 1.15 }
    },
    {
      id: 'ike_clanton',
      era: 'west',
      isVillain: true,
      name: 'Ike Clanton',
      bio: "Rustler of Tombstone, Earp's enemy at the O.K. Corral.",
      strengthLabel: 'Cochise Rustler',
      strengthDesc: 'Starts with 130 health.',
      hudTag: '130 HP',
      defaultWeaponIdx: 0,
      mods: { fixedMaxHp: 130 }
    },
    {
      id: 'belle_starr',
      era: 'west',
      isVillain: true,
      name: 'Belle Starr',
      bio: 'The Bandit Queen of Indian Territory.',
      strengthLabel: 'Rapid Trigger',
      strengthDesc: 'Fires 30% faster with every weapon.',
      hudTag: '+30% FIRE RATE',
      defaultWeaponIdx: 0,
      mods: { fireRateMult: 0.70 }
    }
  ],
  japan: [
    {
      id: 'nobunaga',
      era: 'japan',
      isVillain: true,
      name: 'Oda Nobunaga',
      bio: 'Warlord, the Demon King of the Sixth Heaven.',
      strengthLabel: 'Nanban Plate',
      strengthDesc: 'Takes 25% less damage from attacks.',
      hudTag: '-25% DMG',
      defaultWeaponIdx: 0,
      mods: { damageTakenMult: 0.75 }
    },
    {
      id: 'kojiro',
      era: 'japan',
      isVillain: true,
      name: 'Sasaki Kojirō',
      bio: "Musashi's rival, master of the long sword.",
      strengthLabel: 'Drying Pole Nodachi',
      strengthDesc: 'Extended katana sword reach (+2.0 m).',
      hudTag: 'LONG REACH',
      defaultWeaponIdx: 0,
      mods: { meleeRangeBonus: 2.0 }
    },
    {
      id: 'fuma',
      era: 'japan',
      isVillain: true,
      name: 'Fūma Kotarō',
      bio: 'Leader of the Fūma ninja clan.',
      strengthLabel: 'Shinobi Wind',
      strengthDesc: 'Moves 20% faster.',
      hudTag: '+20% SPEED',
      defaultWeaponIdx: 0,
      mods: { moveSpeedMult: 1.20 }
    }
  ],
  swiss: [
    {
      id: 'gessler',
      era: 'swiss',
      isVillain: true,
      name: 'Hermann Gessler',
      bio: 'Habsburg bailiff of Uri, of the hat on the pole.',
      strengthLabel: 'Bailiff Mail',
      strengthDesc: 'Takes 20% less damage.',
      hudTag: '-20% DMG',
      defaultWeaponIdx: 0,
      mods: { damageTakenMult: 0.80 }
    },
    {
      id: 'charles_bold',
      era: 'swiss',
      isVillain: true,
      name: 'Charles the Bold',
      bio: 'Duke of Burgundy, beaten at Grandson, Murten and Nancy.',
      strengthLabel: 'Burgundian Plate',
      strengthDesc: 'Starts with 150 health.',
      hudTag: '150 HP',
      defaultWeaponIdx: 1,
      mods: { fixedMaxHp: 150 }
    },
    {
      id: 'leopold',
      era: 'swiss',
      isVillain: true,
      name: 'Duke Leopold I',
      bio: 'Habsburg duke, routed at Morgarten in 1315.',
      strengthLabel: 'Heavy Halberd',
      strengthDesc: 'Deals 45% harder melee blows.',
      hudTag: '+45% MELEE',
      defaultWeaponIdx: 1,
      mods: { meleeDamageMult: 1.45 }
    }
  ],
  greece: [
    {
      id: 'polyphemus',
      era: 'greece',
      isVillain: true,
      name: 'Polyphemus',
      bio: 'The Cyclops, one-eyed giant of Homer.',
      strengthLabel: 'Giant Stature',
      strengthDesc: '180 health, but a larger target.',
      hudTag: '180 HP · GIANT',
      defaultWeaponIdx: 0,
      mods: { fixedMaxHp: 180, figureScale: 1.36, hitRadius: 0.74 }
    },
    {
      id: 'medusa',
      era: 'greece',
      isVillain: true,
      name: 'Medusa',
      bio: 'The Gorgon with living snakes for hair.',
      strengthLabel: 'Venomous Cast',
      strengthDesc: 'Thrown javelins fire faster and hit 30% harder.',
      hudTag: '+30% JAVELIN',
      defaultWeaponIdx: 0,
      mods: {
        weaponOverrides: {
          javelin: { damageMult: 1.30, fireRateMult: 0.78, reloadTimeMult: 0.82 }
        }
      }
    },
    {
      id: 'antinous',
      era: 'greece',
      isVillain: true,
      name: 'Antinous',
      bio: "Leader of the suitors in Ulysses' hall.",
      strengthLabel: 'Fleet Suitor',
      strengthDesc: 'Moves 15% faster.',
      hudTag: '+15% SPEED',
      defaultWeaponIdx: 0,
      mods: { moveSpeedMult: 1.15 }
    },
    {
      id: 'minotaur',
      era: 'greece',
      isVillain: true,
      name: 'Minotaur',
      bio: 'The bull-headed monster of the Cretan labyrinth.',
      strengthLabel: 'Labyrinth Brute',
      strengthDesc: 'Throwing axes and sword; starts with 160 health.',
      hudTag: 'AXES · 160 HP',
      defaultWeaponIdx: 0,
      weaponIds: ['throwing_axe', 'xiphos'],
      mods: { fixedMaxHp: 160, figureScale: 1.24, hitRadius: 0.66 }
    },
    {
      id: 'xerxes',
      era: 'greece',
      isVillain: true,
      name: 'Xerxes',
      bio: 'Great King of Persia, who invaded Greece in 480 BC.',
      strengthLabel: 'Immortal Guard',
      strengthDesc: 'Bow and sword; takes 20% less damage.',
      hudTag: 'BOW · -20% DMG',
      defaultWeaponIdx: 0,
      weaponIds: ['yumi', 'xiphos'],
      mods: { damageTakenMult: 0.80 }
    }
  ],
  scandinavia: [
    {
      id: 'bloodaxe',
      era: 'scandinavia',
      isVillain: true,
      name: 'Erik Bloodaxe',
      bio: 'King of Norway, slayer of his brothers.',
      strengthLabel: 'Furious Cast',
      strengthDesc: 'Throws axes much faster.',
      hudTag: 'FAST AXES',
      defaultWeaponIdx: 0,
      mods: {
        weaponOverrides: {
          throwing_axe: { fireRateMult: 0.60, reloadTimeMult: 0.65 }
        }
      }
    },
    {
      id: 'ivar',
      era: 'scandinavia',
      isVillain: true,
      name: 'Ivar the Boneless',
      bio: "Ragnar's son, leader of the Great Heathen Army.",
      strengthLabel: 'Shield-Wall Veteran',
      strengthDesc: 'Takes 25% less damage.',
      hudTag: '-25% DMG',
      defaultWeaponIdx: 0,
      mods: { damageTakenMult: 0.75 }
    },
    {
      id: 'loki',
      era: 'scandinavia',
      isVillain: true,
      name: 'Loki',
      bio: 'Trickster god of Norse myth.',
      strengthLabel: 'Sky-Treader',
      strengthDesc: 'Moves 20% faster.',
      hudTag: '+20% SPEED',
      defaultWeaponIdx: 0,
      mods: { moveSpeedMult: 1.20 }
    }
  ],
  normandy: [
    {
      id: 'hitler',
      era: 'normandy',
      isVillain: true,
      name: 'Adolf Hitler',
      bio: 'Dictator of Nazi Germany, 1933–1945.',
      strengthLabel: 'Sidearm & Bunker Coat',
      strengthDesc: 'Pistol and knife; takes 20% less damage.',
      hudTag: 'PISTOL · -20% DMG',
      defaultWeaponIdx: 0,
      weaponIds: ['heavy_pistol', 'combat_knife'],
      mods: { damageTakenMult: 0.80 }
    },
    {
      id: 'mussolini',
      era: 'normandy',
      isVillain: true,
      name: 'Benito Mussolini',
      bio: 'Fascist dictator of Italy, 1922–1943.',
      strengthLabel: 'Submachine Gun',
      strengthDesc: 'Submachine gun and knife; 120 health.',
      hudTag: 'SMG · 120 HP',
      defaultWeaponIdx: 0,
      weaponIds: ['sten_smg', 'combat_knife'],
      mods: { fixedMaxHp: 120 }
    },
    {
      id: 'goring',
      era: 'normandy',
      isVillain: true,
      name: 'Hermann Göring',
      bio: 'Head of the Luftwaffe in Nazi Germany.',
      strengthLabel: 'Scoped Rifle',
      strengthDesc: 'Carries a bolt-action sniper rifle and knife.',
      hudTag: 'SCOPED RIFLE',
      defaultWeaponIdx: 0,
      weaponIds: ['mosin_scoped', 'combat_knife'],
      mods: {}
    }
  ],
  soviet: [
    {
      id: 'stalin',
      era: 'soviet',
      isVillain: true,
      name: 'Joseph Stalin',
      bio: 'Soviet dictator, 1924–1953.',
      strengthLabel: 'Greatcoat',
      strengthDesc: 'Pistol and knife; takes 25% less damage.',
      hudTag: '-25% DMG',
      defaultWeaponIdx: 0,
      weaponIds: ['soviet_pistol', 'combat_knife'],
      mods: { damageTakenMult: 0.75 }
    },
    {
      id: 'andropov',
      era: 'soviet',
      isVillain: true,
      name: 'Yuri Andropov',
      bio: 'Head of the KGB, 1967–1982.',
      strengthLabel: 'Swift Apparatus',
      strengthDesc: 'Pistol and knife; moves 15% faster.',
      hudTag: '+15% SPEED',
      defaultWeaponIdx: 0,
      weaponIds: ['soviet_pistol', 'combat_knife'],
      mods: { moveSpeedMult: 1.15 }
    },
    {
      id: 'beria',
      era: 'soviet',
      isVillain: true,
      name: 'Lavrentiy Beria',
      bio: "Stalin's chief of secret police.",
      strengthLabel: 'Heavy Sidearm',
      strengthDesc: 'Pistol hits 50% harder.',
      hudTag: '+50% PISTOL DMG',
      defaultWeaponIdx: 0,
      weaponIds: ['soviet_pistol', 'combat_knife'],
      mods: {
        weaponOverrides: { soviet_pistol: { damageMult: 1.50 } }
      }
    },
    {
      id: 'brezhnev',
      era: 'soviet',
      isVillain: true,
      name: 'Leonid Brezhnev',
      bio: 'Soviet leader, 1964–1982.',
      strengthLabel: 'Heavy Guard',
      strengthDesc: 'Submachine gun and knife; 130 health.',
      hudTag: 'SMG · 130 HP',
      defaultWeaponIdx: 0,
      weaponIds: ['soviet_smg', 'combat_knife'],
      mods: { fixedMaxHp: 130 }
    }
  ],
  tibet: [
    {
      id: 'mao',
      era: 'tibet',
      isVillain: true,
      name: 'Mao Zedong',
      bio: 'Chairman of Communist China, 1949–1976.',
      strengthLabel: 'Iron Resolve',
      strengthDesc: 'Bolt-action rifle and knife; takes 20% less damage.',
      hudTag: 'RIFLE · -20% DMG',
      defaultWeaponIdx: 0,
      weaponIds: ['khampa_rifle', 'combat_knife'],
      mods: { damageTakenMult: 0.80 }
    },
    {
      id: 'langdarma',
      era: 'tibet',
      isVillain: true,
      name: 'Langdarma',
      bio: 'Ninth-century Tibetan king who persecuted Buddhism.',
      strengthLabel: 'Dark Sovereign',
      strengthDesc: 'Bow and sword; 140 health.',
      hudTag: 'BOW · 140 HP',
      defaultWeaponIdx: 0,
      weaponIds: ['tibet_bow', 'tibet_sword'],
      mods: { fixedMaxHp: 140 }
    },
    {
      id: 'jiang_qing',
      era: 'tibet',
      isVillain: true,
      name: 'Jiang Qing',
      bio: 'Madame Mao, leader of the Gang of Four.',
      strengthLabel: 'Swift Cadre',
      strengthDesc: 'Pistol and knife; moves 20% faster.',
      hudTag: 'PISTOL · +20% SPD',
      defaultWeaponIdx: 0,
      weaponIds: ['tibet_pistol', 'combat_knife'],
      mods: { moveSpeedMult: 1.20 }
    }
  ]
};

export function getFighterById(era, id) {
  const heroes = ERA_HEROES[era] || [];
  const villains = ERA_VILLAINS[era] || [];
  return heroes.find((h) => h.id === id)
    || villains.find((v) => v.id === id)
    || heroes[0];
}

export function isVillainId(era, id) {
  return (ERA_VILLAINS[era] || []).some((v) => v.id === id);
}

/**
 * Builds a distinctive, party-symbol-free 3D figure for each of the 25 duel villains.
 * Tags head/body meshes and exposes articulated limbs on root.userData.parts for live duel animation.
 */
export function buildVillainFigure(villainId, withPlinth = true) {
  const root = new THREE.Group();

  const skinFair = new THREE.MeshStandardMaterial({ color: 0xe3b490, roughness: 0.72 });
  const skinWeathered = new THREE.MeshStandardMaterial({ color: 0xd4a07a, roughness: 0.75 });
  const skinPale = new THREE.MeshStandardMaterial({ color: 0xc2ceb5, roughness: 0.74 });
  const skinGiant = new THREE.MeshStandardMaterial({ color: 0xc4956e, roughness: 0.85 });
  const blackCloth = new THREE.MeshStandardMaterial({ color: 0x1a1a1d, roughness: 0.84 });
  const darkCharcoal = new THREE.MeshStandardMaterial({ color: 0x2c2e34, roughness: 0.8 });
  const greyCoat = new THREE.MeshStandardMaterial({ color: 0x5c6064, roughness: 0.82 });
  const fieldGrey = new THREE.MeshStandardMaterial({ color: 0x56594e, roughness: 0.84 });
  const airBlue = new THREE.MeshStandardMaterial({ color: 0x6b7c8f, roughness: 0.78 });
  const brownLeather = new THREE.MeshStandardMaterial({ color: 0x452b1b, roughness: 0.82 });
  const tanCoat = new THREE.MeshStandardMaterial({ color: 0x9e825a, roughness: 0.86 });
  const crimsonMat = new THREE.MeshStandardMaterial({ color: 0x8f1e22, roughness: 0.68 });
  const darkPurple = new THREE.MeshStandardMaterial({ color: 0x3b1f38, roughness: 0.75 });
  const forestGreen = new THREE.MeshStandardMaterial({ color: 0x2a4f36, roughness: 0.82 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xe2b444, metalness: 0.82, roughness: 0.25 });
  const steelMat = new THREE.MeshStandardMaterial({ color: 0xaab6c4, metalness: 0.84, roughness: 0.28 });
  const darkSteel = new THREE.MeshStandardMaterial({ color: 0x25282e, metalness: 0.78, roughness: 0.34 });
  const darkHair = new THREE.MeshStandardMaterial({ color: 0x1a1614, roughness: 0.88 });
  const silverHair = new THREE.MeshStandardMaterial({ color: 0xbcbab4, roughness: 0.9 });
  const redHair = new THREE.MeshStandardMaterial({ color: 0xa63a1c, roughness: 0.86 });
  const snakeGreen = new THREE.MeshStandardMaterial({ color: 0x3b6e35, roughness: 0.65 });
  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xeee9dc, roughness: 0.78 });
  const eyeMat = new THREE.MeshBasicMaterial({ color: 0x15100c });

  const violetMat = new THREE.MeshStandardMaterial({ color: 0x6b2c8c, roughness: 0.72 });
  const imperialPurple = new THREE.MeshStandardMaterial({ color: 0x571a5c, roughness: 0.68 });
  const greyGreen = new THREE.MeshStandardMaterial({ color: 0x596250, roughness: 0.82 });
  const bullBrown = new THREE.MeshStandardMaterial({ color: 0x5c3622, roughness: 0.88 });
  const hornBone = new THREE.MeshStandardMaterial({ color: 0xe6dcc4, roughness: 0.55 });
  const redEyeMat = new THREE.MeshBasicMaterial({ color: 0xff2820 });
  const mouthMat = new THREE.MeshStandardMaterial({ color: 0x995246, roughness: 0.72 });

  function makeBody({ torsoMat, legsMat, armsMat, bootsMat = brownLeather, skin = skinFair, slim = false, stout = false, heavyJaw = false, oneEye = false, browMat = darkHair, browThick = 1.0, bullHead = false }) {
    const legR = slim ? 0.095 : stout ? 0.125 : 0.11;
    const legGeo = new THREE.CylinderGeometry(legR, legR * 0.88, 0.84, 10);
    const legL = new THREE.Mesh(legGeo, legsMat);
    legL.position.set(stout ? -0.17 : -0.15, 0.42, 0);
    const legRMesh = new THREE.Mesh(legGeo, legsMat);
    legRMesh.position.set(stout ? 0.17 : 0.15, 0.42, 0);

    const bootGeo = new THREE.BoxGeometry(0.16, 0.22, 0.27);
    const bootL = new THREE.Mesh(bootGeo, bootsMat);
    bootL.position.set(0, -0.34, 0.04);
    legL.add(bootL);
    legRMesh.add(bootL.clone());

    const torsoW = slim ? 0.48 : stout ? 0.68 : 0.56;
    const torsoD = stout ? 0.40 : 0.30;
    const torso = new THREE.Mesh(new THREE.BoxGeometry(torsoW, 0.74, torsoD), torsoMat);
    torso.position.set(0, 1.18, 0);

    const armR = slim ? 0.072 : stout ? 0.098 : 0.085;
    const armGeo = new THREE.CylinderGeometry(armR, armR * 0.86, 0.64, 8);
    const armL = new THREE.Mesh(armGeo, armsMat);
    armL.position.set(-(torsoW * 0.5 + 0.1), 1.18, 0.04);
    armL.rotation.z = 0.12;
    const armRMesh = new THREE.Mesh(armGeo, armsMat);
    armRMesh.position.set(torsoW * 0.5 + 0.1, 1.18, 0.14);
    armRMesh.rotation.x = -0.65;
    armRMesh.rotation.z = -0.1;

    const head = new THREE.Mesh(new THREE.SphereGeometry(bullHead ? 0.24 : 0.21, 14, 12), skin);
    head.position.set(0, 1.78, 0);
    head.userData.hitZone = 'head';

    if (bullHead) {
      // Bull snout, nostrils, curved horns, red eyes, bovine ears & gold nose ring
      const snout = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.18, 0.24), skin);
      snout.position.set(0, -0.06, 0.22);
      const mouthB = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.025, 0.03), blackCloth);
      mouthB.position.set(0, -0.11, 0.34);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.014, 8, 16), goldMat);
      ring.position.set(0, -0.09, 0.35);
      const eL = new THREE.Mesh(new THREE.SphereGeometry(0.032, 8, 8), redEyeMat);
      eL.position.set(-0.095, 0.04, 0.21);
      const eR = eL.clone();
      eR.position.x = 0.095;
      const bL = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.032, 0.04), blackCloth);
      bL.position.set(-0.095, 0.09, 0.205);
      bL.rotation.z = -0.22;
      const bR = bL.clone();
      bR.position.x = 0.095;
      bR.rotation.z = 0.22;
      for (const s of [-1, 1]) {
        const ear = new THREE.Mesh(new THREE.ConeGeometry(0.065, 0.16, 6), skin);
        ear.position.set(s * 0.26, 0.08, 0.0);
        ear.rotation.z = -s * 1.15;
        const hornBase = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.062, 0.22, 8), hornBone);
        hornBase.position.set(s * 0.24, 0.22, 0.03);
        hornBase.rotation.z = -s * 0.95;
        const hornTip = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.24, 8), hornBone);
        hornTip.position.set(s * 0.36, 0.33, 0.08);
        hornTip.rotation.z = -s * 0.22;
        hornTip.rotation.x = 0.25;
        head.add(ear, hornBase, hornTip);
      }
      head.add(snout, mouthB, ring, eL, eR, bL, bR);
    } else if (oneEye) {
      const sclera = new THREE.Mesh(new THREE.SphereGeometry(0.068, 10, 8), whiteMat);
      sclera.position.set(0, 0.03, 0.19);
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.036, 8, 8), crimsonMat);
      pupil.position.set(0, 0.03, 0.245);
      const brow = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.03, 0.04), browMat);
      brow.position.set(0, 0.11, 0.195);
      const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.022, 0.026), mouthMat);
      mouth.position.set(0, -0.09, 0.195);
      const earL = new THREE.Mesh(new THREE.SphereGeometry(0.048, 7, 7), skin);
      earL.scale.set(0.55, 1.15, 0.75);
      earL.position.set(-0.21, 0, 0);
      const earR = earL.clone();
      earR.position.x = 0.21;
      head.add(sclera, pupil, brow, mouth, earL, earR);
    } else {
      const eL = new THREE.Mesh(new THREE.SphereGeometry(0.024, 6, 6), eyeMat);
      eL.position.set(-0.07, 0.025, 0.195);
      const eR = eL.clone();
      eR.position.x = 0.07;

      const browL = new THREE.Mesh(new THREE.BoxGeometry(0.076, 0.021 * browThick, 0.032), browMat);
      browL.position.set(-0.07, 0.072, 0.192);
      const browR = browL.clone();
      browR.position.x = 0.07;

      const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.019, 0.026), mouthMat);
      mouth.position.set(0, -0.078, 0.195);

      const earL = new THREE.Mesh(new THREE.SphereGeometry(0.045, 7, 7), skin);
      earL.scale.set(0.55, 1.15, 0.75);
      earL.position.set(-0.21, 0, 0);
      const earR = earL.clone();
      earR.position.x = 0.21;

      head.add(eL, eR, browL, browR, mouth, earL, earR);

      if (heavyJaw) {
        const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.27, 0.13, 0.23), skin);
        jaw.position.set(0, -0.105, 0.055);
        head.add(jaw);
      }
    }

    root.add(legL, legRMesh, torso, armL, armRMesh, head);
    root.userData.parts = { legL, legR: legRMesh, armL, armR: armRMesh, torso, head };
    return { legL, legR: legRMesh, armL, armR: armRMesh, torso, head };
  }

  function addEpaulettes(torsoW, y = 1.56, mat = goldMat) {
    for (const s of [-1, 1]) {
      const ep = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.045, 0.13), mat);
      ep.position.set(s * (torsoW * 0.5 - 0.06), y, 0);
      root.add(ep);
    }
  }

  function addMedals(zOff = 0.205, rows = 2, cols = 4) {
    const medalCols = [goldMat, crimsonMat, steelMat, goldMat];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const m = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.016, 8), medalCols[(r + c) % medalCols.length]);
        m.rotation.x = Math.PI / 2;
        m.position.set(0.07 + c * 0.052, 1.38 - r * 0.065, zOff);
        root.add(m);
      }
    }
  }

  function addTie(zOff = 0.16, tieMat = blackCloth) {
    const shirt = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.28, 0.03), whiteMat);
    shirt.position.set(0, 1.38, zOff);
    const tie = new THREE.Mesh(new THREE.BoxGeometry(0.048, 0.26, 0.04), tieMat);
    tie.position.set(0, 1.34, zOff + 0.015);
    root.add(shirt, tie);
  }

  function addHat(head, colorMat, brimR = 0.34) {
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(brimR, brimR, 0.035, 14), colorMat);
    brim.position.y = 0.15;
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.22, 0.18, 12), colorMat);
    crown.position.y = 0.24;
    head.add(brim, crown);
  }

  function addPeakedCap(head, capMat) {
    // Plain peaked military/civilian cap — strictly no party emblem
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.21, 0.14, 14), capMat);
    crown.position.y = 0.18;
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.03, 0.2), blackCloth);
    visor.position.set(0, 0.1, 0.18);
    visor.rotation.x = 0.16;
    head.add(crown, visor);
  }

  function addGlasses(head) {
    const l1 = new THREE.Mesh(new THREE.TorusGeometry(0.052, 0.01, 6, 12), darkSteel);
    l1.position.set(-0.07, 0.02, 0.21);
    const l2 = l1.clone();
    l2.position.x = 0.07;
    const br = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.01, 0.01), darkSteel);
    br.position.set(0, 0.02, 0.21);
    head.add(l1, l2, br);
  }

  function addPistol(armR) {
    const slide = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.07, 0.28), darkSteel);
    slide.position.set(0, -0.34, 0.16);
    armR.add(slide);
  }

  function addSword(armR, len = 0.95) {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.03, len, 0.08), steelMat);
    blade.position.set(0, -0.32 + len * 0.45, 0.16);
    blade.rotation.x = 0.65;
    const guard = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.04, 0.22), goldMat);
    guard.position.set(0, -0.32, 0.1);
    armR.add(blade, guard);
  }

  if (villainId === 'jesse_james') {
    const p = makeBody({ torsoMat: tanCoat, legsMat: darkCharcoal, armsMat: tanCoat, skin: skinWeathered });
    const duster = new THREE.Mesh(new THREE.CylinderGeometry(0.29, 0.42, 0.72, 12), tanCoat);
    duster.position.y = 0.6;
    const beard = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.18, 0.14), brownLeather);
    beard.position.set(0, -0.14, 0.13);
    p.head.add(beard);
    addHat(p.head, darkCharcoal, 0.36);
    addPistol(p.armR);
    root.add(duster);
  } else if (villainId === 'ike_clanton') {
    const p = makeBody({ torsoMat: brownLeather, legsMat: darkCharcoal, armsMat: whiteMat, skin: skinWeathered });
    const bandana = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.24, 6), crimsonMat);
    bandana.rotation.x = Math.PI;
    bandana.position.set(0, 1.44, 0.16);
    const stache = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.06, 0.08), darkHair);
    stache.position.set(0, -0.08, 0.19);
    p.head.add(stache);
    addHat(p.head, brownLeather, 0.35);
    addPistol(p.armR);
    root.add(bandana);
  } else if (villainId === 'belle_starr') {
    const p = makeBody({ torsoMat: blackCloth, legsMat: darkPurple, armsMat: blackCloth, skin: skinFair, slim: true });
    const skirt = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.42, 0.76, 12), darkPurple);
    skirt.position.y = 0.56;
    const hair = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.34, 0.14), darkHair);
    hair.position.set(0, -0.05, -0.13);
    const plume = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.34, 6), whiteMat);
    plume.position.set(0.2, 0.32, 0);
    plume.rotation.z = -0.45;
    p.head.add(hair, plume);
    addHat(p.head, blackCloth, 0.38);
    addPistol(p.armR);
    root.add(skirt);
  } else if (villainId === 'nobunaga') {
    const p = makeBody({ torsoMat: darkSteel, legsMat: blackCloth, armsMat: crimsonMat, skin: skinWeathered });
    const cape = new THREE.Mesh(new THREE.BoxGeometry(0.68, 1.05, 0.08), crimsonMat);
    cape.position.set(0, 1.0, -0.2);
    const helm = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.56), darkSteel);
    helm.position.y = 0.09;
    const crest = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.024, 6, 14), goldMat);
    crest.position.set(0, 0.32, 0.14);
    p.head.add(helm, crest);
    addSword(p.armR, 1.0);
    root.add(cape);
  } else if (villainId === 'kojiro') {
    const p = makeBody({ torsoMat: crimsonMat, legsMat: darkCharcoal, armsMat: crimsonMat, skin: skinFair, slim: true });
    const hakama = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.42, 0.82, 12), darkCharcoal);
    hakama.position.y = 0.52;
    const hair = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.42, 0.14), darkHair);
    hair.position.set(0, -0.08, -0.14);
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.215, 0.022, 6, 14), whiteMat);
    band.rotation.x = Math.PI / 2;
    band.position.y = 0.12;
    p.head.add(hair, band);
    // Famous extra-long Nodachi ("Drying Pole") sword
    addSword(p.armR, 1.48);
    root.add(hakama);
  } else if (villainId === 'fuma') {
    const p = makeBody({ torsoMat: blackCloth, legsMat: blackCloth, armsMat: blackCloth, skin: skinWeathered, slim: true });
    const mask = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.16, 0.2), blackCloth);
    mask.position.set(0, -0.07, 0.12);
    const wildHair = new THREE.Mesh(new THREE.DodecahedronGeometry(0.25, 0), redHair);
    wildHair.position.set(0, 0.14, -0.04);
    p.head.add(mask, wildHair);
    addSword(p.armR, 0.85);
  } else if (villainId === 'gessler') {
    const p = makeBody({ torsoMat: crimsonMat, legsMat: darkCharcoal, armsMat: steelMat, skin: skinFair });
    const cape = new THREE.Mesh(new THREE.BoxGeometry(0.64, 1.0, 0.08), blackCloth);
    cape.position.set(0, 1.0, -0.2);
    // Iconic Habsburg feathered hat
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.22, 0.2, 12), crimsonMat);
    cap.position.y = 0.2;
    const plume = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.42, 6), whiteMat);
    plume.position.set(0.16, 0.38, 0);
    p.head.add(cap, plume);
    addSword(p.armR, 0.95);
    root.add(cape);
  } else if (villainId === 'charles_bold') {
    const p = makeBody({ torsoMat: steelMat, legsMat: steelMat, armsMat: steelMat, skin: skinFair });
    const surcoat = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.72, 0.34), darkPurple);
    surcoat.position.y = 1.16;
    const crown = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.032, 6, 14), goldMat);
    crown.rotation.x = Math.PI / 2;
    crown.position.y = 0.18;
    p.head.add(crown);
    addSword(p.armR, 1.08);
    root.add(surcoat);
  } else if (villainId === 'leopold') {
    const p = makeBody({ torsoMat: steelMat, legsMat: darkSteel, armsMat: steelMat, skin: skinFair });
    const sash = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.22, 0.34), crimsonMat);
    sash.position.y = 1.18;
    const helm = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.24, 0.34, 10), steelMat);
    helm.position.y = 0.08;
    p.head.add(helm);
    addSword(p.armR, 1.15);
    root.add(sash);
  } else if (villainId === 'polyphemus') {
    const p = makeBody({ torsoMat: skinGiant, legsMat: brownLeather, armsMat: skinGiant, skin: skinGiant, oneEye: true });
    const pelt = new THREE.Mesh(new THREE.BoxGeometry(0.64, 0.65, 0.36), brownLeather);
    pelt.position.set(0, 0.96, 0);
    const beard = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.38, 8), darkHair);
    beard.rotation.x = Math.PI;
    beard.position.set(0, -0.22, 0.1);
    p.head.add(beard);
    // Giant wooden club
    const club = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.055, 1.3, 8), brownLeather);
    club.position.set(0, -0.2, 0.25);
    club.rotation.x = 0.8;
    p.armR.add(club);
    root.add(pelt);
    root.scale.setScalar(1.32);
  } else if (villainId === 'medusa') {
    const p = makeBody({ torsoMat: forestGreen, legsMat: forestGreen, armsMat: skinPale, skin: skinPale, slim: true });
    const chiton = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.42, 0.85, 12), forestGreen);
    chiton.position.y = 0.52;
    // Crown of living sculpted serpents for hair
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const snake = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.026, 6, 10, Math.PI * 1.3), snakeGreen);
      snake.position.set(Math.cos(a) * 0.18, 0.16 + (i % 2) * 0.06, Math.sin(a) * 0.18);
      snake.rotation.y = a;
      p.head.add(snake);
    }
    root.add(chiton);
  } else if (villainId === 'antinous') {
    const p = makeBody({ torsoMat: darkPurple, legsMat: skinFair, armsMat: skinFair, skin: skinFair, slim: true });
    const cloak = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.92, 0.08), crimsonMat);
    cloak.position.set(0, 1.0, -0.2);
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.56), darkHair);
    hair.position.y = 0.07;
    p.head.add(hair);
    addSword(p.armR, 0.82);
    root.add(cloak);
  } else if (villainId === 'minotaur') {
    // Minotaur: bull's head with horns, red eyes & gold nose ring, large muscular body, red kilt, throwing axe
    const p = makeBody({ torsoMat: bullBrown, legsMat: bullBrown, armsMat: bullBrown, bootsMat: blackCloth, skin: bullBrown, stout: true, bullHead: true });
    const kilt = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.44, 0.48, 12), crimsonMat);
    kilt.position.set(0, 0.74, 0);
    const belt = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.11, 0.42), goldMat);
    belt.position.set(0, 0.96, 0);
    // Double-bitted Cretan labrys / throwing axe in right hand
    const haft = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.034, 1.05, 8), brownLeather);
    haft.position.set(0, -0.18, 0.24);
    haft.rotation.x = 0.78;
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.28, 0.34), steelMat);
    blade.position.set(0, 0.18, 0.58);
    p.armR.add(haft, blade);
    root.add(kilt, belt);
    root.scale.setScalar(1.22);
  } else if (villainId === 'xerxes') {
    // Xerxes: tall gold crown, long black beard, imperial purple robe with gold trim, bow & sword
    const p = makeBody({ torsoMat: imperialPurple, legsMat: imperialPurple, armsMat: imperialPurple, bootsMat: brownLeather, skin: skinWeathered });
    const robe = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.46, 0.84, 12), imperialPurple);
    robe.position.set(0, 0.56, 0);
    const goldHem = new THREE.Mesh(new THREE.CylinderGeometry(0.465, 0.475, 0.11, 12), goldMat);
    goldHem.position.set(0, 0.2, 0);
    const goldSash = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.12, 0.34), goldMat);
    goldSash.position.set(0, 0.96, 0);
    const goldCollar = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.045, 8, 16), goldMat);
    goldCollar.rotation.x = Math.PI / 2;
    goldCollar.position.set(0, 1.54, 0);
    // Tall fluted gold Achaemenid crown & long sculpted black Persian beard
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.23, 0.2, 0.36, 12), goldMat);
    crown.position.y = 0.3;
    const beard = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.44, 0.15), darkHair);
    beard.position.set(0, -0.24, 0.12);
    const stache = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.055, 0.07), darkHair);
    stache.position.set(0, -0.06, 0.195);
    p.head.add(crown, beard, stache);
    // Persian recurve bow in left hand + royal sword in right hand
    p.armL.rotation.x = -0.75;
    const bow = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.022, 8, 18, Math.PI * 0.95), goldMat);
    bow.rotation.y = Math.PI / 2;
    bow.rotation.z = -Math.PI * 0.48;
    bow.position.set(0, -0.14, 0.18);
    p.armL.add(bow);
    addSword(p.armR, 0.96);
    root.add(robe, goldHem, goldSash, goldCollar);
  } else if (villainId === 'bloodaxe') {
    const p = makeBody({ torsoMat: crimsonMat, legsMat: brownLeather, armsMat: brownLeather, skin: skinWeathered });
    const fur = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.28, 0.4), brownLeather);
    fur.position.set(0, 1.5, 0);
    const beard = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.36, 8), redHair);
    beard.rotation.x = Math.PI;
    beard.position.set(0, -0.2, 0.1);
    const helm = new THREE.Mesh(new THREE.SphereGeometry(0.235, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.55), steelMat);
    helm.position.y = 0.09;
    p.head.add(beard, helm);
    const axeH = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.0, 6), brownLeather);
    axeH.position.set(0, -0.2, 0.22);
    axeH.rotation.x = 0.7;
    const axeB = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.26, 0.24), crimsonMat);
    axeB.position.set(0, 0.18, 0.5);
    p.armR.add(axeH, axeB);
    root.add(fur);
  } else if (villainId === 'ivar') {
    const p = makeBody({ torsoMat: darkSteel, legsMat: darkCharcoal, armsMat: darkSteel, skin: skinPale });
    const fur = new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.9, 0.12), blackCloth);
    fur.position.set(0, 1.05, -0.22);
    const hair = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.3, 0.14), darkHair);
    hair.position.set(0, -0.04, -0.14);
    p.head.add(hair);
    addSword(p.armR, 0.96);
    root.add(fur);
  } else if (villainId === 'loki') {
    // Mythic Norse Loki: flame-red/gold hair, russet-and-green traveller cloak, rune clasp (NOT film look!)
    const p = makeBody({ torsoMat: forestGreen, legsMat: brownLeather, armsMat: forestGreen, skin: skinFair, slim: true });
    const cloak = new THREE.Mesh(new THREE.BoxGeometry(0.62, 1.08, 0.08), crimsonMat);
    cloak.position.set(0, 1.02, -0.2);
    const clasp = new THREE.Mesh(new THREE.OctahedronGeometry(0.07, 0), goldMat);
    clasp.position.set(0, 1.48, 0.17);
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.225, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.62), redHair);
    hair.position.set(0, 0.07, -0.02);
    const braids = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.34, 0.12), redHair);
    braids.position.set(0, -0.08, -0.14);
    p.head.add(hair, braids);
    addSword(p.armR, 0.85);
    root.add(cloak, clasp);
  } else if (villainId === 'hitler') {
    // Plain grey-brown coat, white shirt & dark tie, side-parted dark hair, small moustache; strictly ZERO party symbols
    const p = makeBody({ torsoMat: fieldGrey, legsMat: darkCharcoal, armsMat: fieldGrey, bootsMat: blackCloth, skin: skinFair, slim: true });
    const coat = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.68, 0.32), fieldGrey);
    coat.position.y = 0.62;
    addTie(0.155, blackCloth);
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.215, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.52), darkHair);
    hair.position.set(0.02, 0.07, -0.02);
    const lock = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.055, 0.05), darkHair);
    lock.position.set(-0.04, 0.13, 0.17);
    lock.rotation.z = -0.28;
    const stache = new THREE.Mesh(new THREE.BoxGeometry(0.085, 0.038, 0.05), darkHair);
    stache.position.set(0, -0.052, 0.205);
    p.head.add(hair, lock, stache);
    addPistol(p.armR);
    root.add(coat);
  } else if (villainId === 'mussolini') {
    // Bald, heavy jaw & jutting chin, black fez with tassel, stout, grey-green tunic with medals; strictly ZERO party symbols
    const p = makeBody({ torsoMat: greyGreen, legsMat: greyGreen, armsMat: greyGreen, bootsMat: blackCloth, skin: skinWeathered, stout: true, heavyJaw: true });
    const belt = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.09, 0.42), blackCloth);
    belt.position.y = 0.94;
    // Jutting square chin
    const chin = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.08, 0.12), skinWeathered);
    chin.position.set(0, -0.145, 0.145);
    // Black Fez sitting high on bald head + hanging black tassel
    const fez = new THREE.Mesh(new THREE.CylinderGeometry(0.175, 0.205, 0.21, 14), blackCloth);
    fez.position.set(0, 0.24, -0.01);
    const tasselCord = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.014, 0.24, 6), blackCloth);
    tasselCord.position.set(-0.2, 0.22, -0.02);
    tasselCord.rotation.z = 0.18;
    const tasselTip = new THREE.Mesh(new THREE.ConeGeometry(0.032, 0.09, 8), blackCloth);
    tasselTip.position.set(-0.22, 0.09, -0.02);
    p.head.add(chin, fez, tasselCord, tasselTip);
    addMedals(0.206, 2, 3);
    addEpaulettes(0.68, 1.56, goldMat);
    const smg = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.62, 8), darkSteel);
    smg.rotation.x = Math.PI / 2;
    smg.position.set(0, -0.32, 0.25);
    p.armR.add(smg);
    root.add(belt);
  } else if (villainId === 'goring') {
    // Heavy jaw, stout, light blue-grey coat with broad epaulettes & plain peaked cap; strictly ZERO party symbols
    const p = makeBody({ torsoMat: airBlue, legsMat: airBlue, armsMat: airBlue, bootsMat: blackCloth, skin: skinFair, stout: true, heavyJaw: true });
    const coat = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.72, 0.44), airBlue);
    coat.position.y = 0.64;
    const belt = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.09, 0.44), brownLeather);
    belt.position.y = 0.94;
    addEpaulettes(0.70, 1.56, steelMat);
    addMedals(0.208, 2, 3);
    addPeakedCap(p.head, airBlue);
    const rifle = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.028, 1.05, 8), brownLeather);
    rifle.rotation.x = Math.PI / 2;
    rifle.position.set(0, -0.3, 0.42);
    p.armR.add(rifle);
    root.add(coat, belt);
  } else if (villainId === 'stalin') {
    // No cap (swept dark-grey hair), big thick moustache, smoking pipe, gold epaulettes on plain tunic; strictly ZERO party symbols
    const p = makeBody({ torsoMat: fieldGrey, legsMat: fieldGrey, armsMat: fieldGrey, bootsMat: blackCloth, skin: skinWeathered, browThick: 1.3 });
    const coat = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.66, 0.34), fieldGrey);
    coat.position.y = 0.64;
    addEpaulettes(0.58, 1.56, goldMat);
    // Thick swept-back dark hair (bareheaded — no cap!)
    const hairCrown = new THREE.Mesh(new THREE.SphereGeometry(0.225, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.56), darkHair);
    hairCrown.position.set(0, 0.08, -0.03);
    const hairRidge = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.09, 0.24), darkHair);
    hairRidge.position.set(0, 0.18, -0.02);
    // Big bushy drooping moustache
    const stache = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.075, 0.085), darkHair);
    stache.position.set(0, -0.055, 0.205);
    const stacheL = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.07, 0.065), darkHair);
    stacheL.position.set(-0.13, -0.085, 0.19);
    const stacheR = stacheL.clone();
    stacheR.position.x = 0.13;
    // Curved Briar Pipe at corner of mouth
    const pipeStem = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.014, 0.22, 6), blackCloth);
    pipeStem.rotation.x = Math.PI / 2 + 0.25;
    pipeStem.rotation.z = -0.3;
    pipeStem.position.set(0.09, -0.1, 0.28);
    const pipeBowl = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.032, 0.085, 8), brownLeather);
    pipeBowl.position.set(0.14, -0.11, 0.38);
    p.head.add(hairCrown, hairRidge, stache, stacheL, stacheR, pipeStem, pipeBowl);
    addPistol(p.armR);
    root.add(coat);
  } else if (villainId === 'andropov') {
    // Glasses, crisp white shirt & dark tie, long dark overcoat, combed silver hair
    const p = makeBody({ torsoMat: darkCharcoal, legsMat: darkCharcoal, armsMat: darkCharcoal, bootsMat: blackCloth, skin: skinFair, slim: true, browMat: silverHair });
    const coat = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.78, 0.32), darkCharcoal);
    coat.position.y = 0.58;
    addTie(0.155, blackCloth);
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.215, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.52), silverHair);
    hair.position.set(0, 0.07, -0.02);
    p.head.add(hair);
    addGlasses(p.head);
    addPistol(p.armR);
    root.add(coat);
  } else if (villainId === 'beria') {
    const p = makeBody({ torsoMat: greyCoat, legsMat: darkCharcoal, armsMat: greyCoat, bootsMat: blackCloth, skin: skinFair });
    const coat = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.72, 0.36), greyCoat);
    coat.position.y = 0.62;
    addTie(0.155, blackCloth);
    addHat(p.head, darkCharcoal, 0.32);
    addGlasses(p.head);
    addPistol(p.armR);
    root.add(coat);
  } else if (villainId === 'brezhnev') {
    // Very heavy thick eyebrows, heavy jaw, stout, suit with white shirt, tie & rows of medals; strictly ZERO party symbols
    const p = makeBody({ torsoMat: blackCloth, legsMat: blackCloth, armsMat: blackCloth, bootsMat: blackCloth, skin: skinFair, stout: true, heavyJaw: true, browThick: 2.6 });
    const coat = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.7, 0.42), blackCloth);
    coat.position.y = 0.64;
    addTie(0.205, crimsonMat);
    addMedals(0.208, 3, 4);
    // Very heavy iconic bushy connected eyebrows + thick combed-back hair
    const heavyBrows = new THREE.Mesh(new THREE.BoxGeometry(0.27, 0.068, 0.068), darkHair);
    heavyBrows.position.set(0, 0.075, 0.205);
    const hairBack = new THREE.Mesh(new THREE.SphereGeometry(0.228, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.56), darkHair);
    hairBack.position.set(0, 0.08, -0.04);
    p.head.add(heavyBrows, hairBack);
    const smg = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.64, 8), darkSteel);
    smg.rotation.x = Math.PI / 2;
    smg.position.set(0, -0.32, 0.26);
    p.armR.add(smg);
    root.add(coat);
  } else if (villainId === 'mao') {
    // Stout, mole on the chin, high receding forehead with dark side/back hair, plain grey Zhongshan jacket; strictly ZERO party symbols
    const p = makeBody({ torsoMat: greyCoat, legsMat: greyCoat, armsMat: greyCoat, bootsMat: blackCloth, skin: skinWeathered, stout: true, heavyJaw: true });
    const jacket = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.46, 0.42), greyCoat);
    jacket.position.y = 0.78;
    const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.2, 0.08, 12), greyCoat);
    collar.position.y = 1.56;
    // Distinctive dark mole on lower-left chin!
    const mole = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 8), darkHair);
    mole.position.set(-0.045, -0.125, 0.205);
    const sideL = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.17, 0.22), darkHair);
    sideL.position.set(-0.205, 0.05, -0.04);
    const sideR = sideL.clone();
    sideR.position.x = 0.205;
    const backHair = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.2, 0.1), darkHair);
    backHair.position.set(0, 0.04, -0.18);
    p.head.add(mole, sideL, sideR, backHair);
    const rifle = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.028, 1.05, 8), brownLeather);
    rifle.rotation.x = Math.PI / 2;
    rifle.position.set(0, -0.3, 0.42);
    p.armR.add(rifle);
    root.add(jacket, collar);
  } else if (villainId === 'langdarma') {
    const p = makeBody({ torsoMat: darkPurple, legsMat: blackCloth, armsMat: darkPurple, bootsMat: brownLeather, skin: skinWeathered });
    const robe = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.45, 0.8, 12), darkPurple);
    robe.position.y = 0.56;
    const wrap = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.22, 0.24, 12), blackCloth);
    wrap.position.y = 0.22;
    const sash = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.12, 0.34), crimsonMat);
    sash.position.y = 0.96;
    p.head.add(wrap);
    addSword(p.armR, 0.96);
    root.add(robe, sash);
  } else if (villainId === 'jiang_qing') {
    const p = makeBody({ torsoMat: darkCharcoal, legsMat: darkCharcoal, armsMat: darkCharcoal, bootsMat: blackCloth, skin: skinFair, slim: true });
    const bob = new THREE.Mesh(new THREE.SphereGeometry(0.225, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.62), darkHair);
    bob.position.set(0, 0.05, -0.03);
    p.head.add(bob);
    addGlasses(p.head);
    addPistol(p.armR);
  }

  if (withPlinth) {
    const plinth = new THREE.Mesh(
      new THREE.CylinderGeometry(0.72, 0.82, 0.16, 20),
      new THREE.MeshStandardMaterial({ color: 0x3b1818, roughness: 0.78 })
    );
    plinth.position.y = -0.08;
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.76, 0.025, 8, 28),
      crimsonMat
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.01;
    root.add(plinth, ring);
  }

  return root;
}

/**
 * Builds either a hero or a villain 3D figure cleanly (optionally omitting the pedestal plinth for live duel figures).
 */
export function buildFighterFigure(fighterId, era, withPlinth = true) {
  if (isVillainId(era, fighterId)) {
    return buildVillainFigure(fighterId, withPlinth);
  }
  const fig = buildHeroFigure(fighterId);
  if (!withPlinth) {
    // Strip the ground pedestal disc & gold ring (last two children of buildHeroFigure)
    const toRemove = fig.children.filter((c) => c.position.y <= 0.02 && (c.geometry?.type === 'CylinderGeometry' || c.geometry?.type === 'TorusGeometry'));
    for (const c of toRemove) fig.remove(c);
  }
  return fig;
}
