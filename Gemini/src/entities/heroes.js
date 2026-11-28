import * as THREE from 'three';
import { buildEightPointShuriken } from './weapons.js';

/**
 * Dresses a Viking figure (hero, enemy, or villain) in animal skins:
 * shaggy fur shoulder tufts, forelegs hanging down the chest ending in paws,
 * ragged pelt down the back with a tail, a fur kilt with torn pointed hem,
 * and an optional beast head perched on one shoulder (skull, muzzle, nose, eyes, two ears).
 */
export function addVikingAnimalSkins(root, opts = {}) {
  const {
    furColor = 0x4d3726,
    trimColor = 0x2b1e15,
    withBeastHead = false,
    shoulderSide = -1
  } = opts;
  const furMat = new THREE.MeshStandardMaterial({ color: furColor, roughness: 0.96 });
  const darkFur = new THREE.MeshStandardMaterial({ color: trimColor, roughness: 0.98 });
  const clawMat = new THREE.MeshStandardMaterial({ color: 0x161210, roughness: 0.55 });
  const eyeMat = new THREE.MeshBasicMaterial({ color: 0x1c140e });
  const g = new THREE.Group();

  // 1. Shaggy fur tufts standing out over both shoulders
  for (const s of [-1, 1]) {
    for (let k = 0; k < 4; k++) {
      const tuft = new THREE.Mesh(new THREE.DodecahedronGeometry(0.115 - k * 0.012, 0), k % 2 === 0 ? furMat : darkFur);
      tuft.scale.set(1.25, 0.85, 1.15);
      tuft.position.set(s * (0.24 + k * 0.055), 1.50 + (k % 2) * 0.05, -0.06 + (k - 1.5) * 0.065);
      g.add(tuft);
    }
  }
  const yoke = new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.16, 0.40), furMat);
  yoke.position.set(0, 1.48, -0.02);
  g.add(yoke);

  // 2. Forelegs of the pelt hanging down the chest, ending in paws with claws
  for (const s of [-1, 1]) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.042, 0.42, 7), furMat);
    leg.position.set(s * 0.19, 1.24, 0.18);
    leg.rotation.z = s * 0.08;
    const paw = new THREE.Mesh(new THREE.SphereGeometry(0.055, 7, 6), darkFur);
    paw.scale.set(1.1, 0.72, 1.25);
    paw.position.set(s * 0.21, 1.02, 0.19);
    for (let c = -1; c <= 1; c++) {
      const claw = new THREE.Mesh(new THREE.ConeGeometry(0.011, 0.042, 4), clawMat);
      claw.rotation.x = Math.PI;
      claw.position.set(s * 0.21 + c * 0.022, 0.985, 0.22);
      g.add(claw);
    }
    g.add(leg, paw);
  }

  // 3. Ragged pelt draped down the back with a furry tail hanging at the hem
  const backPelt = new THREE.Mesh(new THREE.BoxGeometry(0.64, 0.96, 0.11), furMat);
  backPelt.position.set(0, 1.02, -0.22);
  backPelt.rotation.x = 0.10;
  g.add(backPelt);
  for (let i = -2; i <= 2; i++) {
    const jag = new THREE.Mesh(new THREE.ConeGeometry(0.075, 0.22, 4), i % 2 === 0 ? furMat : darkFur);
    jag.rotation.x = Math.PI;
    jag.position.set(i * 0.12, 0.48, -0.26);
    g.add(jag);
  }
  const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.024, 0.44, 7), darkFur);
  tail.position.set(0, 0.44, -0.29);
  tail.rotation.x = 0.24;
  const tailTip = new THREE.Mesh(new THREE.ConeGeometry(0.036, 0.14, 6), furMat);
  tailTip.rotation.x = Math.PI + 0.24;
  tailTip.position.set(0, 0.21, -0.34);
  g.add(tail, tailTip);

  // 4. Fur kilt around the waist with its hem torn into jagged points
  const kiltUpper = new THREE.Mesh(new THREE.CylinderGeometry(0.30, 0.36, 0.30, 10), furMat);
  kiltUpper.position.set(0, 0.80, 0);
  g.add(kiltUpper);
  const pointCount = 10;
  for (let i = 0; i < pointCount; i++) {
    const a = (i / pointCount) * Math.PI * 2;
    const pt = new THREE.Mesh(new THREE.ConeGeometry(0.088, 0.24, 4), i % 2 === 0 ? furMat : darkFur);
    pt.rotation.x = Math.PI;
    pt.position.set(Math.sin(a) * 0.33, 0.56, Math.cos(a) * 0.22);
    g.add(pt);
  }

  // 5. Optional beast head on one shoulder: skull, muzzle, nose, eyes, two ears
  if (withBeastHead) {
    const bh = new THREE.Group();
    const skull = new THREE.Mesh(new THREE.SphereGeometry(0.125, 10, 8), furMat);
    skull.scale.set(0.95, 0.88, 1.15);
    const muzzle = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.09, 0.16), darkFur);
    muzzle.position.set(0, -0.025, 0.14);
    const nose = new THREE.Mesh(new THREE.SphereGeometry(0.032, 6, 6), clawMat);
    nose.position.set(0, -0.005, 0.225);
    for (const es of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.018, 6, 6), eyeMat);
      eye.position.set(es * 0.055, 0.03, 0.105);
      const ear = new THREE.Mesh(new THREE.ConeGeometry(0.042, 0.12, 5), darkFur);
      ear.position.set(es * 0.075, 0.13, -0.02);
      ear.rotation.z = -es * 0.28;
      bh.add(eye, ear);
    }
    bh.add(skull, muzzle, nose);
    bh.position.set(shoulderSide * 0.31, 1.62, 0.04);
    bh.rotation.y = shoulderSide * 0.35;
    bh.rotation.x = 0.15;
    g.add(bh);
  }

  root.add(g);
  return g;
}

export const ERA_HEROES = {
  west: [
    {
      id: 'earp',
      era: 'west',
      name: 'Wyatt Earp',
      bio: 'Lawman of Tombstone, 1881.',
      strengthLabel: 'Iron Lawman',
      strengthDesc: 'Takes 25% less damage from enemy fire.',
      hudTag: '-25% DMG',
      defaultWeaponIdx: 0,
      mods: {
        damageTakenMult: 0.75
      }
    },
    {
      id: 'jane',
      era: 'west',
      name: 'Calamity Jane',
      bio: 'Scout and sharpshooter of Deadwood.',
      strengthLabel: 'Deadwood Scout',
      strengthDesc: 'Moves 18% faster across streets and cover.',
      hudTag: '+18% SPEED',
      defaultWeaponIdx: 2,
      mods: {
        moveSpeedMult: 1.18
      }
    },
    {
      id: 'billy',
      era: 'west',
      name: 'Billy the Kid',
      bio: 'Young gunman of New Mexico.',
      strengthLabel: 'Quick Draw',
      strengthDesc: 'Fires 22% faster and reloads 28% faster.',
      hudTag: 'FAST DRAW',
      defaultWeaponIdx: 0,
      mods: {
        fireRateMult: 0.78,
        reloadTimeMult: 0.72
      }
    }
  ],
  japan: [
    {
      id: 'musashi',
      era: 'japan',
      name: 'Miyamoto Musashi',
      bio: 'Undefeated duellist, master of two swords.',
      strengthLabel: 'Two Heavens Style',
      strengthDesc: 'Faster katana strikes (+28% speed) with +1.2 m reach.',
      hudTag: 'SWIFT BLADE',
      defaultWeaponIdx: 1,
      mods: {
        meleeFireRateMult: 0.72,
        meleeRangeBonus: 1.2
      }
    },
    {
      id: 'tomoe',
      era: 'japan',
      name: 'Tomoe Gozen',
      bio: 'Woman warrior of the Genpei War, famous for swift hands.',
      strengthLabel: 'Swift Hands',
      strengthDesc: 'Throws her stars almost twice as fast.',
      hudTag: '2× STAR RATE',
      defaultWeaponIdx: 0,
      mods: {
        weaponOverrides: {
          shuriken: { fireRateMult: 0.54, reloadTimeMult: 0.58 }
        }
      }
    },
    {
      id: 'masamune',
      era: 'japan',
      name: 'Date Masamune',
      bio: 'The One-Eyed Dragon of Sendai.',
      strengthLabel: 'Black Lacquer Armor',
      strengthDesc: 'Takes 30% less damage from enemy attacks.',
      hudTag: '-30% DMG',
      defaultWeaponIdx: 0,
      mods: {
        damageTakenMult: 0.70
      }
    }
  ],
  swiss: [
    {
      id: 'tell',
      era: 'swiss',
      name: 'Wilhelm Tell',
      bio: 'The crossbowman of Uri.',
      strengthLabel: 'Uri Marksman',
      strengthDesc: 'Reloads the crossbow 40% faster.',
      hudTag: '40% FASTER BOLTS',
      defaultWeaponIdx: 0,
      mods: {
        weaponOverrides: {
          crossbow: { reloadTimeMult: 0.60, fireRateMult: 0.80 },
          repeater: { reloadTimeMult: 0.60 }
        }
      }
    },
    {
      id: 'winkelried',
      era: 'swiss',
      name: 'Arnold von Winkelried',
      bio: 'Hero of Sempach, from Nidwalden.',
      strengthLabel: 'Heart of Sempach',
      strengthDesc: 'Starts with 50% more health.',
      hudTag: '+50% HEALTH',
      defaultWeaponIdx: 1,
      mods: {
        maxHpMult: 1.50
      }
    },
    {
      id: 'stauffacher',
      era: 'swiss',
      name: 'Werner Stauffacher',
      bio: 'Man of Schwyz, of the Rütli oath.',
      strengthLabel: 'Elder of Schwyz',
      strengthDesc: 'Slowly recovers health when out of danger.',
      hudTag: 'OUT-OF-COMBAT REGEN',
      defaultWeaponIdx: 0,
      mods: {
        regenRate: 5.0,
        regenDelay: 4.0
      }
    }
  ],
  greece: [
    {
      id: 'ulysses',
      era: 'greece',
      name: 'Ulysses',
      bio: 'King of Ithaca, the cunning one.',
      strengthLabel: 'King of Ithaca',
      strengthDesc: 'Throws javelins 25% faster and 25% harder.',
      hudTag: '+25% JAVELIN',
      defaultWeaponIdx: 0,
      mods: {
        weaponOverrides: {
          javelin: { fireRateMult: 0.78, reloadTimeMult: 0.80, damageMult: 1.25 }
        }
      }
    },
    {
      id: 'achilles',
      era: 'greece',
      name: 'Achilles',
      bio: 'Greatest warrior of the Trojan War.',
      strengthLabel: 'Bronze Panoply',
      strengthDesc: 'Takes 33% less damage from enemy attacks.',
      hudTag: '-33% DMG',
      defaultWeaponIdx: 0,
      mods: {
        damageTakenMult: 0.67
      }
    },
    {
      id: 'heracles',
      era: 'greece',
      name: 'Heracles',
      bio: 'Strongest of heroes.',
      strengthLabel: 'Twelve Labors',
      strengthDesc: 'Starts with 60% more health.',
      hudTag: '+60% HEALTH',
      defaultWeaponIdx: 1,
      mods: {
        maxHpMult: 1.60
      }
    }
  ],
  scandinavia: [
    {
      id: 'erik',
      era: 'scandinavia',
      name: 'Erik the Red',
      bio: 'Outlaw and founder of Greenland.',
      strengthLabel: 'Greenland Outlaw',
      strengthDesc: 'Throws axes 30% faster and reloads 25% faster.',
      hudTag: 'FAST AXES',
      defaultWeaponIdx: 0,
      mods: {
        weaponOverrides: {
          throwing_axe: { fireRateMult: 0.70, reloadTimeMult: 0.75 }
        }
      }
    },
    {
      id: 'leif',
      era: 'scandinavia',
      name: 'Leif Erikson',
      bio: 'His son, who sailed to Vinland.',
      strengthLabel: 'Vinland Voyager',
      strengthDesc: 'Takes 33% less damage from enemy attacks.',
      hudTag: '-33% DMG',
      defaultWeaponIdx: 0,
      mods: {
        damageTakenMult: 0.67
      }
    },
    {
      id: 'ragnar',
      era: 'scandinavia',
      name: 'Ragnar Lothbrok',
      bio: 'Legendary sea-king and raider.',
      strengthLabel: 'Iron Flail',
      strengthDesc: 'Swings the spiked flail 28% faster and 35% harder.',
      hudTag: 'FIERCE FLAIL',
      defaultWeaponIdx: 1,
      mods: {
        meleeFireRateMult: 0.72,
        meleeDamageMult: 1.35
      }
    }
  ],
  normandy: [
    {
      id: 'pavlichenko',
      era: 'normandy',
      name: 'Lyudmila Pavlichenko',
      bio: 'Soviet sniper of the Eastern Front.',
      strengthLabel: 'Scoped Bolt Rifle',
      strengthDesc: 'Telescopic bolt-action rifle (RMB scope); one shot fells an ordinary soldier, slow fire & 5-round clip.',
      hudTag: 'SNIPER RIFLE',
      defaultWeaponIdx: 0,
      weaponIds: ['mosin_scoped', 'combat_knife'],
      mods: {}
    },
    {
      id: 'hall',
      era: 'normandy',
      name: 'Virginia Hall',
      bio: 'American spy with the French Resistance, "the limping lady".',
      strengthLabel: 'Sten SMG & Stealth',
      strengthDesc: 'Full-auto 32-round Sten SMG; enemies notice her later by sight and sound.',
      hudTag: 'STEN + STEALTH',
      defaultWeaponIdx: 0,
      weaponIds: ['sten_smg', 'combat_knife'],
      mods: {
        stealthMult: 0.42,
        soundAlertRadius: 13
      }
    },
    {
      id: 'bavaud',
      era: 'normandy',
      name: 'Maurice Bavaud',
      bio: 'Young man from Neuchâtel, Switzerland, who set out to shoot Hitler in 1938.',
      strengthLabel: 'Heavy Pistol',
      strengthDesc: 'Carries a hard-hitting semi-automatic pistol that deals high damage per shot.',
      hudTag: 'HEAVY PISTOL',
      defaultWeaponIdx: 0,
      weaponIds: ['heavy_pistol', 'combat_knife'],
      mods: {}
    }
  ],
  soviet: [
    {
      id: 'solzhenitsyn',
      era: 'soviet',
      name: 'Aleksandr Solzhenitsyn',
      bio: 'Chronicler of the camps, winter of 1974.',
      strengthLabel: 'Camp Survivor',
      strengthDesc: 'Carries an automatic submachine gun and takes 15% less damage.',
      hudTag: 'SMG · -15% DMG',
      defaultWeaponIdx: 0,
      weaponIds: ['soviet_smg', 'combat_knife'],
      mods: {
        damageTakenMult: 0.85
      }
    },
    {
      id: 'sakharov',
      era: 'soviet',
      name: 'Andrei Sakharov',
      bio: 'Physicist and defender of human rights.',
      strengthLabel: 'Precision Shot',
      strengthDesc: 'Carries a pistol whose shots hit 60% harder.',
      hudTag: '+60% PISTOL DMG',
      defaultWeaponIdx: 0,
      weaponIds: ['soviet_pistol', 'combat_knife'],
      mods: {
        weaponOverrides: {
          soviet_pistol: { damageMult: 1.6 }
        }
      }
    },
    {
      id: 'nureyev',
      era: 'soviet',
      name: 'Rudolf Nureyev',
      bio: 'Dancer who leapt to freedom.',
      strengthLabel: 'Grace in Winter',
      strengthDesc: 'Moves 25% faster and is noticed later by enemies.',
      hudTag: '+25% SPD · STEALTH',
      defaultWeaponIdx: 0,
      weaponIds: ['soviet_pistol', 'combat_knife'],
      mods: {
        moveSpeedMult: 1.25,
        stealthMult: 0.52,
        soundAlertRadius: 15
      }
    }
  ],
  tibet: [
    {
      id: 'gompo',
      era: 'tibet',
      name: 'Gompo Tashi Andrugtsang',
      bio: 'Leader of the Khampa resistance, 1959.',
      strengthLabel: 'Khampa Marksman',
      strengthDesc: 'Carries a bolt-action rifle with iron sights; one shot fells a soldier.',
      hudTag: '1-SHOT RIFLE',
      defaultWeaponIdx: 0,
      weaponIds: ['khampa_rifle', 'combat_knife'],
      mods: {}
    },
    {
      id: 'pachen',
      era: 'tibet',
      name: 'Ani Pachen',
      bio: 'Tibetan warrior nun of Kham.',
      strengthLabel: 'Mountain Stride',
      strengthDesc: 'Carries a pistol and knife; moves 20% faster across the high valley.',
      hudTag: '+20% SPEED',
      defaultWeaponIdx: 0,
      weaponIds: ['tibet_pistol', 'combat_knife'],
      mods: {
        moveSpeedMult: 1.20
      }
    },
    {
      id: 'songtsen',
      era: 'tibet',
      name: 'Songtsen Gampo',
      bio: 'Founder of the Tibetan Empire.',
      strengthLabel: 'Imperial Mantle',
      strengthDesc: 'Fights with bow and sword and takes 20% less damage.',
      hudTag: 'BOW · -20% DMG',
      defaultWeaponIdx: 0,
      weaponIds: ['tibet_bow', 'tibet_sword'],
      mods: {
        damageTakenMult: 0.80
      }
    }
  ],
  aztec: [
    {
      id: 'cuauhtemoc',
      era: 'aztec',
      name: 'Cuauhtémoc',
      bio: 'Last ruler of the Mexica ("Descending Eagle"), 1520.',
      strengthLabel: 'Poisoned Atlatl',
      strengthDesc: 'Throws poisoned darts (45 hit + 7 every 0.5 s for 5 s) alongside an obsidian macuahuitl.',
      hudTag: 'POISON DARTS',
      defaultWeaponIdx: 0,
      weaponIds: ['atlatl_dart', 'macuahuitl'],
      mods: {}
    },
    {
      id: 'tzilacatzin',
      era: 'aztec',
      name: 'Tzilacatzin',
      bio: 'Fearless stone-throwing warrior of Tlatelolco.',
      strengthLabel: 'Stone-Caster',
      strengthDesc: 'Hurls heavy stones (120 damage) and starts with 130 health.',
      hudTag: 'STONES · 130 HP',
      defaultWeaponIdx: 0,
      weaponIds: ['sling_stone', 'macuahuitl'],
      mods: {
        fixedMaxHp: 130
      }
    },
    {
      id: 'nezahualcoyotl',
      era: 'aztec',
      name: 'Nezahualcóyotl',
      bio: 'Poet-king of Texcoco ("Fasting Coyote").',
      strengthLabel: 'Fleet Archer',
      strengthDesc: 'Fights with war bow and macuahuitl, moving 15% faster.',
      hudTag: 'BOW · +15% SPD',
      defaultWeaponIdx: 0,
      weaponIds: ['aztec_bow', 'macuahuitl'],
      mods: {
        moveSpeedMult: 1.15
      }
    }
  ]
};

export const SKILLS = {
  dash:        { id: 'dash',        name: 'Dash',        desc: 'Burst of speed (+80% faster)',                         duration: 3, cooldown: 16, tint: 'rgba(80, 195, 255, 0.16)' },
  stand_fast:  { id: 'stand_fast',  name: 'Stand fast',  desc: 'Wounds hurt five times less',                          duration: 5, cooldown: 28, tint: 'rgba(220, 178, 76, 0.18)' },
  dead_eye:    { id: 'dead_eye',    name: 'Dead eye',    desc: 'Every shot flies true and hits 80% harder',            duration: 6, cooldown: 28, tint: 'rgba(255, 198, 92, 0.18)' },
  second_wind: { id: 'second_wind', name: 'Second wind', desc: '+50 health back over 4 seconds',                       duration: 4, cooldown: 36, tint: 'rgba(72, 224, 130, 0.18)' },
  vanish:      { id: 'vanish',      name: 'Vanish',      desc: 'Enemies lose sight of you',                            duration: 6, cooldown: 32, tint: 'rgba(130, 110, 215, 0.22)' },
  fury:        { id: 'fury',        name: 'Fury',        desc: 'Blows 2× harder, 60% quicker, +20% speed',             duration: 7, cooldown: 26, tint: 'rgba(235, 56, 42, 0.20)' },
  eagle_eye:   { id: 'eagle_eye',   name: 'Eagle eye',   desc: 'Every enemy within 90 m marked through walls & map',   duration: 9, cooldown: 30, tint: 'rgba(255, 232, 110, 0.16)' }
};

const FIGHTER_SKILL_OVERRIDES = {
  // Snipers -> Eagle eye
  pavlichenko: 'eagle_eye',
  gompo: 'eagle_eye',
  goring: 'eagle_eye',
  // Stealthy -> Vanish
  hall: 'vanish',
  nureyev: 'vanish',
  fuma: 'vanish',
  loki: 'vanish',
  // Blade masters -> Fury
  musashi: 'fury',
  ragnar: 'fury',
  kojiro: 'fury',
  leopold: 'fury',
  // Fast -> Dash
  jane: 'dash',
  pachen: 'dash',
  nezahualcoyotl: 'dash',
  jesse_james: 'dash',
  antinous: 'dash',
  andropov: 'dash',
  jiang_qing: 'dash',
  alvarado: 'dash',
  // Armoured -> Stand fast
  earp: 'stand_fast',
  masamune: 'stand_fast',
  achilles: 'stand_fast',
  leif: 'stand_fast',
  solzhenitsyn: 'stand_fast',
  songtsen: 'stand_fast',
  nobunaga: 'stand_fast',
  gessler: 'stand_fast',
  xerxes: 'stand_fast',
  ivar: 'stand_fast',
  hitler: 'stand_fast',
  stalin: 'stand_fast',
  mao: 'stand_fast',
  cortes: 'stand_fast',
  // High health / recovery -> Second wind
  winkelried: 'second_wind',
  stauffacher: 'second_wind',
  heracles: 'second_wind',
  tzilacatzin: 'second_wind',
  ike_clanton: 'second_wind',
  charles_bold: 'second_wind',
  polyphemus: 'second_wind',
  minotaur: 'second_wind',
  mussolini: 'second_wind',
  brezhnev: 'second_wind',
  langdarma: 'second_wind',
  guzman: 'second_wind',
  // Faster/harder shooters & throwers -> Dead eye
  billy: 'dead_eye',
  tomoe: 'dead_eye',
  tell: 'dead_eye',
  ulysses: 'dead_eye',
  erik: 'dead_eye',
  bavaud: 'dead_eye',
  sakharov: 'dead_eye',
  cuauhtemoc: 'dead_eye',
  belle_starr: 'dead_eye',
  medusa: 'dead_eye',
  bloodaxe: 'dead_eye',
  beria: 'dead_eye'
};

export function getFighterSkill(fighter) {
  if (!fighter) return SKILLS.dead_eye;
  const key = fighter.skillId || FIGHTER_SKILL_OVERRIDES[fighter.id];
  if (key && SKILLS[key]) return SKILLS[key];
  const m = fighter.mods || {};
  if (m.stealthMult) return SKILLS.vanish;
  if (m.meleeDamageMult || m.meleeFireRateMult || m.meleeRangeBonus) return SKILLS.fury;
  if (m.moveSpeedMult) return SKILLS.dash;
  if (m.damageTakenMult) return SKILLS.stand_fast;
  if (m.maxHpMult || m.fixedMaxHp || m.regenRate) return SKILLS.second_wind;
  return SKILLS.dead_eye;
}

export function getHeroById(era, heroId) {
  const list = ERA_HEROES[era] || ERA_HEROES.west;
  return list.find((h) => h.id === heroId) || list[0];
}

/**
 * Builds a distinctive, historically grounded 3D figure for each of the 9 heroes
 * using the exact stylized PBR Three.js aesthetic of the in-game characters.
 */
export function buildHeroFigure(heroId) {
  const root = new THREE.Group();

  // Shared materials
  const skinFair = new THREE.MeshStandardMaterial({ color: 0xe6b692, roughness: 0.7 });
  const skinWeathered = new THREE.MeshStandardMaterial({ color: 0xd9a47e, roughness: 0.74 });
  const skinElder = new THREE.MeshStandardMaterial({ color: 0xe2b89a, roughness: 0.76 });
  const blackCloth = new THREE.MeshStandardMaterial({ color: 0x181718, roughness: 0.82 });
  const blackArmor = new THREE.MeshStandardMaterial({ color: 0x16181f, metalness: 0.62, roughness: 0.32 });
  const darkCharcoal = new THREE.MeshStandardMaterial({ color: 0x2a2c32, roughness: 0.8 });
  const creamCloth = new THREE.MeshStandardMaterial({ color: 0xefe6d4, roughness: 0.84 });
  const pureWhite = new THREE.MeshStandardMaterial({ color: 0xf6f3ec, roughness: 0.78 });
  const crimsonMat = new THREE.MeshStandardMaterial({ color: 0xb82222, roughness: 0.62 });
  const buckskinMat = new THREE.MeshStandardMaterial({ color: 0xc29258, roughness: 0.88 });
  const buckskinTrim = new THREE.MeshStandardMaterial({ color: 0x996d38, roughness: 0.9 });
  const smockMat = new THREE.MeshStandardMaterial({ color: 0x6b5a42, roughness: 0.9 });
  const brownLeather = new THREE.MeshStandardMaterial({ color: 0x3b2416, roughness: 0.8 });
  const darkHair = new THREE.MeshStandardMaterial({ color: 0x1a1513, roughness: 0.88 });
  const chestnutHair = new THREE.MeshStandardMaterial({ color: 0x6b3b20, roughness: 0.85 });
  const brownBeard = new THREE.MeshStandardMaterial({ color: 0x4a311e, roughness: 0.92 });
  const whiteBeard = new THREE.MeshStandardMaterial({ color: 0xeae7e0, roughness: 0.9 });
  const mailSteel = new THREE.MeshStandardMaterial({ color: 0x98a4b2, metalness: 0.78, roughness: 0.42 });
  const brightSteel = new THREE.MeshStandardMaterial({ color: 0xd8e2ec, metalness: 0.92, roughness: 0.18 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xf2c244, metalness: 0.88, roughness: 0.22 });
  const darkWood = new THREE.MeshStandardMaterial({ color: 0x452817, roughness: 0.82 });
  const eyeMat = new THREE.MeshBasicMaterial({ color: 0x16100c });

  function addBaseBody({ torsoMat, legsMat, armsMat, bootsMat = brownLeather, skin = skinFair, slim = false, browMat = darkHair, browThick = 1.0 }) {
    const legR = slim ? 0.095 : 0.11;
    const legGeo = new THREE.CylinderGeometry(legR, legR * 0.88, 0.84, 10);
    const legL = new THREE.Mesh(legGeo, legsMat);
    legL.position.set(-0.15, 0.42, 0);
    const legRMesh = new THREE.Mesh(legGeo, legsMat);
    legRMesh.position.set(0.15, 0.42, 0);

    const bootGeo = new THREE.BoxGeometry(0.16, 0.22, 0.27);
    const bootL = new THREE.Mesh(bootGeo, bootsMat);
    bootL.position.set(0, -0.34, 0.04);
    legL.add(bootL);
    legRMesh.add(bootL.clone());

    const torsoW = slim ? 0.48 : 0.56;
    const torso = new THREE.Mesh(new THREE.BoxGeometry(torsoW, 0.74, 0.3), torsoMat);
    torso.position.set(0, 1.18, 0);

    const armR = slim ? 0.072 : 0.085;
    const armGeo = new THREE.CylinderGeometry(armR, armR * 0.86, 0.64, 8);
    const armL = new THREE.Mesh(armGeo, armsMat);
    armL.position.set(-(torsoW * 0.5 + 0.1), 1.18, 0.04);
    armL.rotation.z = 0.12;
    const armRMesh = new THREE.Mesh(armGeo, armsMat);
    armRMesh.position.set(torsoW * 0.5 + 0.1, 1.18, 0.14);
    armRMesh.rotation.x = -0.65;
    armRMesh.rotation.z = -0.1;

    // Hands
    const handGeo = new THREE.SphereGeometry(0.068, 8, 8);
    const hL = new THREE.Mesh(handGeo, skin);
    hL.position.set(0, -0.33, 0);
    armL.add(hL);
    const hR = new THREE.Mesh(handGeo, skin);
    hR.position.set(0, -0.33, 0);
    armRMesh.add(hR);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.205, 14, 12), skin);
    head.position.set(0, 1.74, 0);

    // Eyes, Eyebrows, Nose, Mouth & Ears on every hero face
    const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.023, 6, 6), eyeMat);
    eyeL.position.set(-0.07, 0.03, 0.185);
    const eyeR = eyeL.clone();
    eyeR.position.x = 0.07;

    const browL = new THREE.Mesh(new THREE.BoxGeometry(0.072, 0.02 * browThick, 0.028), browMat);
    browL.position.set(-0.07, 0.072, 0.184);
    const browR = browL.clone();
    browR.position.x = 0.07;

    const mouthMat = new THREE.MeshStandardMaterial({ color: 0x9c5548, roughness: 0.72 });
    const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.088, 0.018, 0.024), mouthMat);
    mouth.position.set(0, -0.078, 0.186);

    const earL = new THREE.Mesh(new THREE.SphereGeometry(0.044, 7, 7), skin);
    earL.scale.set(0.55, 1.15, 0.75);
    earL.position.set(-0.205, 0.0, 0.0);
    const earR = earL.clone();
    earR.position.x = 0.205;

    head.add(eyeL, eyeR, browL, browR, mouth, earL, earR);

    root.add(legL, legRMesh, torso, armL, armRMesh, head);
    return { legL, legR: legRMesh, torso, armL, armR: armRMesh, head, eyeL, eyeR };
  }

  // Helper props
  function makeRevolver() {
    const g = new THREE.Group();
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.024, 0.38, 8), brightSteel);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(0, 0.02, 0.22);
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.09, 0.15), goldMat);
    body.position.set(0, 0, 0.03);
    const grip = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.13, 0.065), darkWood);
    grip.position.set(0, -0.07, -0.04);
    grip.rotation.x = -0.25;
    g.add(barrel, body, grip);
    return g;
  }

  function makeRifle() {
    const g = new THREE.Group();
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.022, 1.15, 8), brightSteel);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(0, 0.02, 0.35);
    const rec = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.08, 0.24), goldMat);
    rec.position.set(0, 0, -0.05);
    const stock = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.11, 0.42), darkWood);
    stock.position.set(0, -0.04, -0.34);
    g.add(barrel, rec, stock);
    return g;
  }

  function makeKatana(len = 1.05) {
    const g = new THREE.Group();
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.024, len, 0.048), brightSteel);
    blade.position.y = len * 0.5 + 0.08;
    const tsuba = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.016, 12), goldMat);
    tsuba.position.y = 0.08;
    const hilt = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.024, 0.24, 8), crimsonMat);
    hilt.position.y = -0.04;
    g.add(blade, tsuba, hilt);
    return g;
  }

  function makeCrossbow() {
    const g = new THREE.Group();
    const stock = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.72), darkWood);
    stock.position.set(0, 0, 0.18);
    const prod = new THREE.Mesh(new THREE.BoxGeometry(0.76, 0.032, 0.045), brightSteel);
    prod.position.set(0, 0.03, 0.48);
    const str = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.008, 0.008), pureWhite);
    str.position.set(0, 0.03, 0.36);
    const bolt = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.42, 6), brightSteel);
    bolt.rotation.x = Math.PI / 2;
    bolt.position.set(0, 0.055, 0.38);
    g.add(stock, prod, str, bolt);
    return g;
  }

  function makeHalberd() {
    const g = new THREE.Group();
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.032, 2.35, 8), darkWood);
    pole.position.y = 0.55;
    const spike = new THREE.Mesh(new THREE.ConeGeometry(0.038, 0.44, 4), brightSteel);
    spike.position.y = 1.92;
    const axe = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.36, 0.3), brightSteel);
    axe.position.set(0, 1.54, 0.15);
    const hook = new THREE.Mesh(new THREE.ConeGeometry(0.032, 0.22, 4), brightSteel);
    hook.rotation.x = -Math.PI / 2;
    hook.position.set(0, 1.54, -0.12);
    const tassel = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.18, 8), crimsonMat);
    tassel.position.y = 1.32;
    g.add(pole, spike, axe, hook, tassel);
    return g;
  }

  // ==================== LEVEL 1: WILD WEST ====================
  if (heroId === 'earp') {
    // Wyatt Earp: Black long coat, moustache, flat black hat, gleaming marshal badge
    const p = addBaseBody({ torsoMat: blackCloth, legsMat: blackCloth, armsMat: blackCloth, bootsMat: blackCloth, skin: skinWeathered });

    // Long black duster coat skirt
    const coatBack = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.72, 0.14), blackCloth);
    coatBack.position.set(0, 0.58, -0.14);
    const coatL = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.72, 0.24), blackCloth);
    coatL.position.set(-0.22, 0.58, 0.04);
    const coatR = coatL.clone();
    coatR.position.x = 0.22;
    root.add(coatBack, coatL, coatR);

    // Crisp white shirt V-front & black string tie
    const shirt = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.42, 0.04), pureWhite);
    shirt.position.set(0, 1.28, 0.15);
    const tie = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.3, 0.05), blackCloth);
    tie.position.set(0, 1.26, 0.165);
    // Gleaming Gold Marshal Badge!
    const badge = new THREE.Mesh(new THREE.CylinderGeometry(0.068, 0.068, 0.02, 6), goldMat);
    badge.rotation.x = Math.PI / 2;
    badge.position.set(0.16, 1.34, 0.165);
    root.add(shirt, tie, badge);

    // Prominent Large Drooping Handlebar Moustache
    const stacheC = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.068, 0.085), chestnutHair);
    stacheC.position.set(0, -0.052, 0.19);
    const stacheL = new THREE.Mesh(new THREE.BoxGeometry(0.095, 0.125, 0.075), chestnutHair);
    stacheL.position.set(-0.14, -0.10, 0.175);
    stacheL.rotation.z = -0.32;
    const stacheR = stacheL.clone();
    stacheR.position.x = 0.14;
    stacheR.rotation.z = 0.32;
    p.head.add(stacheC, stacheL, stacheR);

    // Flat-crowned wide-brimmed Black Gambler Hat
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.46, 0.036, 18), blackCloth);
    brim.position.y = 0.14;
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.23, 0.17, 16), blackCloth);
    crown.position.y = 0.23;
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.235, 0.235, 0.035, 16), goldMat);
    band.position.y = 0.17;
    p.head.add(brim, crown, band);

    const rev = makeRevolver();
    rev.position.set(0, -0.34, 0.04);
    rev.rotation.x = 0.6;
    p.armR.add(rev);
  } else if (heroId === 'jane') {
    // Calamity Jane: Buckskins, long hair, crimson neckerchief, scout hat & rifle
    const p = addBaseBody({ torsoMat: buckskinMat, legsMat: buckskinMat, armsMat: buckskinMat, bootsMat: brownLeather, skin: skinWeathered, slim: true });

    // Buckskin fringe hem & shoulder yoke
    const yoke = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.18, 0.33), buckskinTrim);
    yoke.position.set(0, 1.45, 0);
    const skirt = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.28, 0.32), buckskinTrim);
    skirt.position.set(0, 0.78, 0);
    const belt = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.1, 0.34), brownLeather);
    belt.position.set(0, 0.92, 0);
    root.add(yoke, skirt, belt);

    // Crimson Neckerchief knotted at throat
    const scarf = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.055, 8, 14), crimsonMat);
    scarf.rotation.x = Math.PI / 2;
    scarf.position.set(0, 1.54, 0);
    const knot = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.24, 5), crimsonMat);
    knot.rotation.x = Math.PI;
    knot.position.set(0, 1.44, 0.16);
    root.add(scarf, knot);

    // Flowing Long Chestnut Hair down back & sides
    const hairBack = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.56, 0.16), chestnutHair);
    hairBack.position.set(0, -0.14, -0.14);
    const hairL = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.05, 0.44, 8), chestnutHair);
    hairL.position.set(-0.18, -0.1, -0.02);
    const hairR = hairL.clone();
    hairR.position.x = 0.18;
    p.head.add(hairBack, hairL, hairR);

    // Wide-brimmed Buckskin Frontier Hat
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.44, 0.036, 16), brownLeather);
    brim.position.y = 0.15;
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.22, 0.21, 12), brownLeather);
    crown.position.y = 0.25;
    p.head.add(brim, crown);

    const rifle = makeRifle();
    rifle.position.set(-0.08, -0.25, 0.12);
    rifle.rotation.set(0.3, -0.45, 0);
    p.armR.add(rifle);
  } else if (heroId === 'billy') {
    // Billy the Kid: Waistcoat over cream shirt, slouch hat, clean-shaven
    const p = addBaseBody({ torsoMat: darkCharcoal, legsMat: darkCharcoal, armsMat: creamCloth, bootsMat: brownLeather, skin: skinFair, slim: true });

    // Cream shirt collar & open waistcoat lapels + brass buttons
    const shirtFront = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.34, 0.04), creamCloth);
    shirtFront.position.set(0, 1.38, 0.15);
    const neckerchief = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.04, 6, 12), darkCharcoal);
    neckerchief.rotation.x = Math.PI / 2;
    neckerchief.position.set(0, 1.54, 0);
    const gunBelt = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.11, 0.34), brownLeather);
    gunBelt.position.set(0, 0.88, 0);
    gunBelt.rotation.z = -0.14; // Rakish low-slung holster belt
    for (let i = 0; i < 3; i++) {
      const btn = new THREE.Mesh(new THREE.SphereGeometry(0.022, 6, 6), goldMat);
      btn.position.set(0, 1.24 - i * 0.12, 0.16);
      root.add(btn);
    }
    root.add(shirtFront, neckerchief, gunBelt);

    // Youthful clean-shaven face + Tilted Soft Slouch Hat (pinched crown, drooping brim)
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.46, 0.06, 16), brownLeather);
    brim.position.set(0.02, 0.14, 0);
    brim.rotation.set(0.12, 0, -0.14);
    const crown = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.28, 10), brownLeather);
    crown.position.set(0.04, 0.27, -0.01);
    crown.rotation.z = -0.14;
    p.head.add(brim, crown);

    const rev = makeRevolver();
    rev.position.set(0, -0.34, 0.06);
    rev.rotation.x = 0.65;
    p.armR.add(rev);
  }

  // ==================== LEVEL 2: FEUDAL JAPAN ====================
  else if (heroId === 'musashi') {
    // Miyamoto Musashi: Plain dark kimono, unkempt long hair, dual swords (katana + wakizashi)
    const kimonoMat = new THREE.MeshStandardMaterial({ color: 0x222630, roughness: 0.88 });
    const p = addBaseBody({ torsoMat: kimonoMat, legsMat: kimonoMat, armsMat: kimonoMat, bootsMat: creamCloth, skin: skinWeathered });

    // Wide Hakama pleated skirt & white obi sash
    const hakama = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.42, 0.86, 10), kimonoMat);
    hakama.position.set(0, 0.56, 0);
    const obi = new THREE.Mesh(new THREE.BoxGeometry(0.59, 0.18, 0.34), creamCloth);
    obi.position.set(0, 0.96, 0);
    const lapelL = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.48, 0.04), darkCharcoal);
    lapelL.position.set(-0.08, 1.32, 0.155);
    lapelL.rotation.z = -0.35;
    const lapelR = lapelL.clone();
    lapelR.position.x = 0.08;
    lapelR.rotation.z = 0.35;
    root.add(hakama, obi, lapelL, lapelR);

    // Wild unkempt long black hair + cloth hachimaki headband
    const hairTop = new THREE.Mesh(new THREE.SphereGeometry(0.225, 10, 8), darkHair);
    hairTop.position.set(0, 0.06, -0.04);
    const wildBack = new THREE.Mesh(new THREE.DodecahedronGeometry(0.26, 0), darkHair);
    wildBack.position.set(0, -0.06, -0.18);
    wildBack.scale.set(1.2, 1.45, 0.85);
    const strandL = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.44, 6), darkHair);
    strandL.rotation.x = Math.PI;
    strandL.position.set(-0.2, -0.08, 0.02);
    const strandR = strandL.clone();
    strandR.position.x = 0.2;
    const headband = new THREE.Mesh(new THREE.TorusGeometry(0.215, 0.024, 6, 16), creamCloth);
    headband.rotation.x = Math.PI / 2;
    headband.position.y = 0.09;
    p.head.add(hairTop, wildBack, strandL, strandR, headband);

    // Dual Swords: Long Katana in Right hand + Wakizashi in Left hand!
    const katana = makeKatana(1.08);
    katana.position.set(0, -0.32, 0.06);
    katana.rotation.set(0.85, 0, -0.2);
    p.armR.add(katana);

    p.armL.rotation.x = -0.55;
    const waki = makeKatana(0.68);
    waki.position.set(0, -0.32, 0.06);
    waki.rotation.set(0.95, 0, 0.25);
    p.armL.add(waki);
  } else if (heroId === 'tomoe') {
    // Tomoe Gozen: White & red warrior garments, long black hair, Yumi longbow
    const p = addBaseBody({ torsoMat: pureWhite, legsMat: crimsonMat, armsMat: pureWhite, bootsMat: creamCloth, skin: skinFair, slim: true });

    // Crimson Hakama + Red-laced chest armor (dō) & shoulder plates (sode)
    const hakama = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.4, 0.84, 12), crimsonMat);
    hakama.position.set(0, 0.56, 0);
    const chestPlate = new THREE.Mesh(new THREE.BoxGeometry(0.51, 0.46, 0.33), crimsonMat);
    chestPlate.position.set(0, 1.18, 0);
    const goldTrim = new THREE.Mesh(new THREE.BoxGeometry(0.53, 0.08, 0.35), goldMat);
    goldTrim.position.set(0, 1.4, 0);
    const sodeL = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.32, 0.26), crimsonMat);
    sodeL.position.set(-0.34, 1.38, 0);
    const sodeR = sodeL.clone();
    sodeR.position.x = 0.34;
    const obi = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.14, 0.35), pureWhite);
    obi.position.set(0, 0.94, 0);
    root.add(hakama, chestPlate, goldTrim, sodeL, sodeR, obi);

    // Long flowing jet-black hair with crimson hairband
    const hairCrown = new THREE.Mesh(new THREE.SphereGeometry(0.215, 12, 10), darkHair);
    hairCrown.position.set(0, 0.06, -0.02);
    const longHair = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.88, 0.14), darkHair);
    longHair.position.set(0, -0.32, -0.17);
    const ribbon = new THREE.Mesh(new THREE.TorusGeometry(0.21, 0.026, 6, 16), crimsonMat);
    ribbon.rotation.x = Math.PI / 2;
    ribbon.position.y = 0.09;
    p.head.add(hairCrown, longHair, ribbon);

    // Tall graceful Yumi Longbow held in left hand + 3 fanned 8-point stars in right!
    p.armL.rotation.x = -0.85;
    const bow = new THREE.Mesh(new THREE.TorusGeometry(0.75, 0.022, 8, 22, Math.PI * 0.9), darkWood);
    bow.rotation.y = Math.PI / 2;
    bow.rotation.z = -Math.PI * 0.45;
    bow.position.set(0, -0.15, 0.24);
    const bowStr = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 1.42, 6), pureWhite);
    bowStr.position.set(0, -0.15, -0.08);
    p.armL.add(bow, bowStr);

    for (let k = -1; k <= 1; k++) {
      const star = buildEightPointShuriken(1.1);
      star.position.set(k * 0.055, -0.32, 0.14 + Math.abs(k) * -0.02);
      star.rotation.set(Math.PI * 0.4, 0, k * -0.25);
      p.armR.add(star);
    }
  } else if (heroId === 'masamune') {
    // Date Masamune: Black armor, eye patch, kabuto helmet with HUGE asymmetric gold crescent moon!
    const p = addBaseBody({ torsoMat: blackArmor, legsMat: blackArmor, armsMat: blackArmor, bootsMat: blackCloth, skin: skinWeathered });

    // Layered black armor tassets (kusazuri) & wide shoulder guards (sode)
    const skirt = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.46, 0.56, 8), blackArmor);
    skirt.position.set(0, 0.72, 0);
    const sodeL = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.38, 0.32), blackArmor);
    sodeL.position.set(-0.39, 1.4, 0);
    const sodeR = sodeL.clone();
    sodeR.position.x = 0.39;
    const sash = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.12, 0.35), goldMat);
    sash.position.set(0, 0.96, 0);
    root.add(skirt, sodeL, sodeR, sash);

    // Distinctive Black Eye Patch over right eye (x = -0.07 in character front +Z frame)
    const patch = new THREE.Mesh(new THREE.SphereGeometry(0.062, 8, 8), blackCloth);
    patch.scale.set(1.15, 0.9, 0.45);
    patch.position.set(-0.072, 0.02, 0.198);
    const strap = new THREE.Mesh(new THREE.TorusGeometry(0.208, 0.015, 6, 16), blackCloth);
    strap.rotation.set(Math.PI / 2, 0.22, 0);
    strap.position.y = 0.04;
    p.head.add(patch, strap);

    // Black Kabuto Helmet + Iconic LARGE ASYMMETRIC GOLD CRESCENT MOON!
    const kabuto = new THREE.Mesh(new THREE.SphereGeometry(0.245, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.50), blackArmor);
    kabuto.position.y = 0.095;
    const neckGuard = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.32, 0.18, 12, 1, true, Math.PI * 0.45, Math.PI * 1.1), blackArmor);
    neckGuard.position.set(0, -0.01, -0.02);
    // Dramatic golden crescent moon sweeping up to the side
    const crescent = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.036, 8, 22, Math.PI * 1.15), goldMat);
    crescent.position.set(0.12, 0.47, 0.19);
    crescent.rotation.z = -Math.PI * 0.85;
    const mount = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.04, 10), goldMat);
    mount.rotation.x = Math.PI / 2;
    mount.position.set(0.0, 0.23, 0.23);
    p.head.add(kabuto, neckGuard, crescent, mount);

    const katana = makeKatana(1.06);
    katana.position.set(0, -0.32, 0.06);
    katana.rotation.set(0.85, 0, -0.15);
    p.armR.add(katana);
  }

  // ==================== LEVEL 3: MEDIEVAL SWITZERLAND ====================
  else if (heroId === 'tell') {
    // Wilhelm Tell: Herdsman's smock, feathered hat, beard, Uri sash, crossbow
    const p = addBaseBody({ torsoMat: smockMat, legsMat: brownLeather, armsMat: smockMat, bootsMat: brownLeather, skin: skinWeathered });

    // Long herdsman's wool smock hem + Uri gold-and-black belt sash
    const smockHem = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.38, 0.46, 10), smockMat);
    smockHem.position.set(0, 0.72, 0);
    const sash = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.15, 0.34), goldMat);
    sash.position.set(0, 0.96, 0);
    const cape = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.86, 0.09), crimsonMat);
    cape.position.set(0, 1.06, -0.2);
    cape.rotation.x = 0.12;
    root.add(smockHem, sash, cape);

    // Full Alpine Brown Beard + Medieval Cap with Crisp White Feather
    const beard = new THREE.Mesh(new THREE.ConeGeometry(0.19, 0.34, 10), brownBeard);
    beard.rotation.x = Math.PI;
    beard.position.set(0, -0.21, 0.1);
    const stache = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.065, 0.08), brownBeard);
    stache.position.set(0, -0.07, 0.18);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.26, 0.17, 12), crimsonMat);
    cap.position.y = 0.17;
    const feather = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.44, 6), pureWhite);
    feather.position.set(0.18, 0.36, -0.02);
    feather.rotation.z = -0.38;
    p.head.add(beard, stache, cap, feather);

    const xbow = makeCrossbow();
    xbow.position.set(-0.08, -0.28, 0.06);
    xbow.rotation.set(0.45, -0.25, 0);
    p.armR.add(xbow);
  } else if (heroId === 'winkelried') {
    // Arnold von Winkelried: Chainmail + Red & White surcoat, rugged beard, tall Swiss Halberd
    const p = addBaseBody({ torsoMat: crimsonMat, legsMat: mailSteel, armsMat: mailSteel, bootsMat: brownLeather, skin: skinWeathered });

    // Split Red & White Nidwalden Surcoat (left half red, right half white + tunic skirt!)
    const whiteHalf = new THREE.Mesh(new THREE.BoxGeometry(0.29, 0.76, 0.32), pureWhite);
    whiteHalf.position.set(0.145, 1.18, 0.005);
    const skirtRed = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.44, 0.32), crimsonMat);
    skirtRed.position.set(-0.15, 0.68, 0);
    const skirtWhite = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.44, 0.32), pureWhite);
    skirtWhite.position.set(0.15, 0.68, 0);
    const belt = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.11, 0.35), brownLeather);
    belt.position.set(0, 0.92, 0);
    // Steel mail shoulder pauldrons & collar
    const collar = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.065, 8, 14), mailSteel);
    collar.rotation.x = Math.PI / 2;
    collar.position.set(0, 1.54, 0);
    root.add(whiteHalf, skirtRed, skirtWhite, belt, collar);

    // Chainmail coif framing face + Rugged Brown Beard
    const coif = new THREE.Mesh(new THREE.SphereGeometry(0.228, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.72), mailSteel);
    coif.position.set(0, 0.03, -0.02);
    const beard = new THREE.Mesh(new THREE.ConeGeometry(0.19, 0.32, 10), brownBeard);
    beard.rotation.x = Math.PI;
    beard.position.set(0, -0.2, 0.11);
    const stache = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.06, 0.08), brownBeard);
    stache.position.set(0, -0.07, 0.18);
    p.head.add(coif, beard, stache);

    const halberd = makeHalberd();
    halberd.position.set(0.06, -0.58, 0.1);
    halberd.rotation.x = 0.62;
    p.armR.add(halberd);
  } else if (heroId === 'stauffacher') {
    // Werner Stauffacher: Older elder of Schwyz, flowing white beard, crimson medieval hood (Gugel)
    const p = addBaseBody({ torsoMat: darkCharcoal, legsMat: brownLeather, armsMat: darkCharcoal, bootsMat: brownLeather, skin: skinElder });

    // Long noble robe skirt + crimson shoulder mantle (Gugel capelet) + white Schwyz cross badge
    const robe = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.42, 0.62, 10), darkCharcoal);
    robe.position.set(0, 0.62, 0);
    const mantle = new THREE.Mesh(new THREE.ConeGeometry(0.46, 0.48, 12), crimsonMat);
    mantle.position.set(0, 1.44, 0);
    const belt = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.11, 0.34), brownLeather);
    belt.position.set(0, 0.96, 0);
    // Small white Schwyz cross emblem on chest
    const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.15, 0.03), pureWhite);
    crossV.position.set(-0.14, 1.35, 0.25);
    const crossH = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.04, 0.03), pureWhite);
    crossH.position.set(-0.14, 1.35, 0.25);
    root.add(robe, mantle, belt, crossV, crossH);

    // Older face: Long Flowing White Beard, White Eyebrows, & Crimson Hood (Gugel) with tail!
    const beard = new THREE.Mesh(new THREE.ConeGeometry(0.17, 0.46, 12), whiteBeard);
    beard.rotation.x = Math.PI;
    beard.position.set(0, -0.30, 0.11);
    const stache = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.055, 0.07), whiteBeard);
    stache.position.set(0, -0.08, 0.18);
    const brow = new THREE.Mesh(new THREE.BoxGeometry(0.21, 0.028, 0.04), whiteBeard);
    brow.position.set(0, 0.085, 0.185);

    const hood = new THREE.Mesh(new THREE.SphereGeometry(0.245, 14, 12, 0, Math.PI * 2, 0, Math.PI * 0.56), crimsonMat);
    hood.position.set(0, 0.095, -0.05);
    const hoodSides = new THREE.Mesh(new THREE.CylinderGeometry(0.23, 0.25, 0.26, 12, 1, true, Math.PI * 0.55, Math.PI * 0.9), crimsonMat);
    hoodSides.position.set(0, -0.02, -0.05);
    const hoodTail = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.45, 8), crimsonMat);
    hoodTail.position.set(0, 0.12, -0.32);
    hoodTail.rotation.x = -1.15;
    p.head.add(beard, stache, brow, hood, hoodSides, hoodTail);

    // Stout alpine oath staff / crossbow ready
    const xbow = makeCrossbow();
    xbow.position.set(-0.06, -0.28, 0.08);
    xbow.rotation.set(0.45, -0.2, 0);
    p.armR.add(xbow);
  }

  // ==================== LEVEL 4: ANCIENT GREECE ====================
  else if (heroId === 'ulysses') {
    // Ulysses: Bearded, conical felt cap (pilos), short Greek tunic, traveller's cloak, javelin
    const aegeanBlue = new THREE.MeshStandardMaterial({ color: 0x245d9c, roughness: 0.8 });
    const feltMat = new THREE.MeshStandardMaterial({ color: 0x8f7d64, roughness: 0.94 });
    const p = addBaseBody({ torsoMat: creamCloth, legsMat: skinWeathered, armsMat: skinWeathered, bootsMat: brownLeather, skin: skinWeathered });

    // Short Greek chiton skirt, gold meander belt & draped blue cloak
    const skirt = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.35, 0.42, 10), creamCloth);
    skirt.position.set(0, 0.76, 0);
    const belt = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.1, 0.33), goldMat);
    belt.position.set(0, 0.95, 0);
    const cloak = new THREE.Mesh(new THREE.BoxGeometry(0.62, 1.05, 0.1), aegeanBlue);
    cloak.position.set(0, 1.04, -0.2);
    cloak.rotation.x = 0.12;
    const clasp = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), goldMat);
    clasp.position.set(0.18, 1.48, 0.16);
    root.add(skirt, belt, cloak, clasp);

    // Full dark cunning beard + Iconic Conical Felt Cap (Pilos)
    const beard = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.32, 10), brownBeard);
    beard.rotation.x = Math.PI;
    beard.position.set(0, -0.22, 0.1);
    const stache = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.055, 0.07), brownBeard);
    stache.position.set(0, -0.07, 0.18);
    const pilos = new THREE.Mesh(new THREE.ConeGeometry(0.24, 0.38, 14), feltMat);
    pilos.position.set(0, 0.27, -0.01);
    p.head.add(beard, stache, pilos);

    // Bronze Javelin in right hand
    const jav = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.022, 1.95, 8), darkWood);
    jav.position.set(0, 0.2, 0.08);
    jav.rotation.x = 0.65;
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.042, 0.24, 4), goldMat);
    tip.position.set(0, 1.06, 0.68);
    tip.rotation.x = 0.65;
    p.armR.add(jav, tip);
  } else if (heroId === 'achilles') {
    // Achilles: Gleaming bronze muscle armour, crested Corinthian helmet, round bronze shield
    const bronzeMat = new THREE.MeshStandardMaterial({ color: 0xdca444, metalness: 0.86, roughness: 0.24 });
    const p = addBaseBody({ torsoMat: bronzeMat, legsMat: skinWeathered, armsMat: skinWeathered, bootsMat: bronzeMat, skin: skinWeathered });

    // Bronze pteruges leather skirt, crimson cape & bronze greaves
    const skirt = new THREE.Mesh(new THREE.CylinderGeometry(0.29, 0.36, 0.4, 10), crimsonMat);
    skirt.position.set(0, 0.76, 0);
    const cape = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.08, 0.09), crimsonMat);
    cape.position.set(0, 1.04, -0.21);
    cape.rotation.x = 0.13;
    const greaveL = new THREE.Mesh(new THREE.CylinderGeometry(0.115, 0.1, 0.44, 10), bronzeMat);
    greaveL.position.set(0, -0.18, 0);
    p.legL.add(greaveL);
    p.legR.add(greaveL.clone());
    root.add(skirt, cape);

    // Crested Bronze Corinthian Helmet
    const helm = new THREE.Mesh(new THREE.SphereGeometry(0.245, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.56), bronzeMat);
    helm.position.y = 0.085;
    const cheekL = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.16, 0.13), bronzeMat);
    cheekL.position.set(-0.17, -0.05, 0.12);
    const cheekR = cheekL.clone();
    cheekR.position.x = 0.17;
    const crest = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.26, 0.58), crimsonMat);
    crest.position.set(0, 0.36, -0.04);
    p.head.add(helm, cheekL, cheekR, crest);

    // Gleaming Round Bronze Shield on left arm
    const shield = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.06, 22), bronzeMat);
    shield.rotation.x = Math.PI / 2;
    shield.position.set(-0.08, -0.16, 0.22);
    const boss = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), goldMat);
    boss.position.set(0, 0.03, 0);
    shield.add(boss);
    p.armL.add(shield);

    // Bronze short sword in right hand
    const sword = makeKatana(0.76);
    sword.position.set(0, -0.3, 0.08);
    sword.rotation.set(0.85, 0, -0.15);
    p.armR.add(sword);
  } else if (heroId === 'heracles') {
    // Heracles: Massive hero, golden Nemean Lion skin over head and shoulders, heavy wooden club
    const lionFur = new THREE.MeshStandardMaterial({ color: 0xc9933c, roughness: 0.92 });
    const lionMane = new THREE.MeshStandardMaterial({ color: 0x8f5b1e, roughness: 0.95 });
    const p = addBaseBody({ torsoMat: skinWeathered, legsMat: skinWeathered, armsMat: skinWeathered, bootsMat: brownLeather, skin: skinWeathered });
    p.torso.scale.set(1.16, 1.06, 1.14);

    // Lion pelt draped over shoulders, waist kilt & trailing tail
    const peltShoulders = new THREE.Mesh(new THREE.BoxGeometry(0.76, 0.3, 0.44), lionMane);
    peltShoulders.position.set(0, 1.48, -0.02);
    const peltCape = new THREE.Mesh(new THREE.BoxGeometry(0.68, 1.1, 0.12), lionFur);
    peltCape.position.set(0, 1.0, -0.23);
    peltCape.rotation.x = 0.12;
    const peltKilt = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.38, 0.44, 10), lionFur);
    peltKilt.position.set(0, 0.78, 0);
    root.add(peltShoulders, peltCape, peltKilt);

    // Lion-Head Hood & Shaggy Mane framing Heracles' bearded face!
    const lionHood = new THREE.Mesh(new THREE.SphereGeometry(0.26, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.58), lionFur);
    lionHood.position.set(0, 0.09, -0.02);
    const mane = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.075, 8, 14), lionMane);
    mane.position.set(0, 0.04, -0.02);
    const earL = new THREE.Mesh(new THREE.SphereGeometry(0.065, 8, 8), lionFur);
    earL.position.set(-0.18, 0.26, 0.02);
    const earR = earL.clone();
    earR.position.x = 0.18;
    const beard = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.3, 10), brownBeard);
    beard.rotation.x = Math.PI;
    beard.position.set(0, -0.22, 0.1);
    p.head.add(lionHood, mane, earL, earR, beard);

    // Heavy Knotted Olive-Wood Club in right hand!
    const club = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.042, 1.15, 8), darkWood);
    club.position.set(0, -0.05, 0.25);
    club.rotation.x = 0.85;
    p.armR.add(club);
  }

  // ==================== LEVEL 5: SCANDINAVIA (ANIMAL SKINS!) ====================
  else if (heroId === 'erik') {
    // Erik the Red: Fiery red hair and beard, shaggy brown bear-skin pelt with beast head, throwing axe
    const redHair = new THREE.MeshStandardMaterial({ color: 0xb83e18, roughness: 0.88 });
    const furBody = new THREE.MeshStandardMaterial({ color: 0x5c3e26, roughness: 0.94 });
    const p = addBaseBody({ torsoMat: furBody, legsMat: brownLeather, armsMat: furBody, bootsMat: brownLeather, skin: skinFair });

    const belt = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.11, 0.34), brownLeather);
    belt.position.set(0, 0.94, 0);
    root.add(belt);
    addVikingAnimalSkins(root, { furColor: 0x5c3e26, trimColor: 0x332215, withBeastHead: true, shoulderSide: -1 });

    // Fiery Red Hair & Thick Red Beard (bareheaded — no horns!)
    const hairCrown = new THREE.Mesh(new THREE.SphereGeometry(0.225, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.6), redHair);
    hairCrown.position.set(0, 0.07, -0.02);
    const hairBack = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.44, 0.16), redHair);
    hairBack.position.set(0, -0.08, -0.15);
    const beard = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.38, 10), redHair);
    beard.rotation.x = Math.PI;
    beard.position.set(0, -0.24, 0.1);
    const stache = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.06, 0.08), redHair);
    stache.position.set(0, -0.07, 0.18);
    p.head.add(hairCrown, hairBack, beard, stache);

    // Bearded Throwing Axe
    const haft = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.026, 0.85, 8), darkWood);
    haft.position.set(0, -0.12, 0.22);
    haft.rotation.x = 0.85;
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.24, 0.2), brightSteel);
    blade.position.set(0, 0.18, 0.56);
    p.armR.add(haft, blade);
  } else if (heroId === 'leif') {
    // Leif Erikson: Blond hair & beard, pale silver-grey wolf pelts & fur kilt, axe
    const blondHair = new THREE.MeshStandardMaterial({ color: 0xe6c465, roughness: 0.86 });
    const paleFur = new THREE.MeshStandardMaterial({ color: 0xb0a798, roughness: 0.94 });
    const p = addBaseBody({ torsoMat: paleFur, legsMat: darkCharcoal, armsMat: paleFur, bootsMat: brownLeather, skin: skinFair });

    const belt = new THREE.Mesh(new THREE.BoxGeometry(0.59, 0.1, 0.34), brownLeather);
    belt.position.set(0, 0.94, 0);
    root.add(belt);
    addVikingAnimalSkins(root, { furColor: 0xbcb3a4, trimColor: 0x6f685e, withBeastHead: false });

    // Blond Hair & Neat Blond Beard (no horns!)
    const hairTop = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.58), blondHair);
    hairTop.position.set(0, 0.075, -0.02);
    const hairBack = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.36, 0.14), blondHair);
    hairBack.position.set(0, -0.06, -0.14);
    const beard = new THREE.Mesh(new THREE.ConeGeometry(0.17, 0.3, 10), blondHair);
    beard.rotation.x = Math.PI;
    beard.position.set(0, -0.22, 0.1);
    const stache = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.055, 0.07), blondHair);
    stache.position.set(0, -0.07, 0.18);
    p.head.add(hairTop, hairBack, beard, stache);

    const haft = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.026, 0.85, 8), darkWood);
    haft.position.set(0, -0.12, 0.22);
    haft.rotation.x = 0.85;
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.24, 0.2), brightSteel);
    blade.position.set(0, 0.18, 0.56);
    p.armR.add(haft, blade);
  } else if (heroId === 'ragnar') {
    // Ragnar Lothbrok: Dark braided hair and beard, grey wolf skins with beast head, spiked Iron Flail!
    const wolfFur = new THREE.MeshStandardMaterial({ color: 0x524c48, roughness: 0.95 });
    const p = addBaseBody({ torsoMat: wolfFur, legsMat: darkCharcoal, armsMat: wolfFur, bootsMat: brownLeather, skin: skinWeathered });

    const harness = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.1, 0.34), brownLeather);
    harness.position.set(0, 1.24, 0);
    harness.rotation.z = 0.42;
    root.add(harness);
    addVikingAnimalSkins(root, { furColor: 0x5c5854, trimColor: 0x2c2826, withBeastHead: true, shoulderSide: -1 });

    // Dark Braided Hair & Long Dark Braided Beard (twin braids + iron clasps, NO horns!)
    const hairTop = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.58), darkHair);
    hairTop.position.set(0, 0.07, -0.02);
    const braidL = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.032, 0.48, 6), darkHair);
    braidL.position.set(-0.18, -0.12, -0.06);
    const braidR = braidL.clone();
    braidR.position.x = 0.18;
    const braidBack = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.04, 0.56, 6), darkHair);
    braidBack.position.set(0, -0.14, -0.19);
    const beardMain = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.44, 10), darkHair);
    beardMain.rotation.x = Math.PI;
    beardMain.position.set(0, -0.27, 0.1);
    const beardRing = new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.016, 6, 10), goldMat);
    beardRing.rotation.x = Math.PI / 2;
    beardRing.position.set(0, -0.34, 0.11);
    p.head.add(hairTop, braidL, braidR, braidBack, beardMain, beardRing);

    // Spiked Two-Ball Iron Flail in right hand
    const flailGrp = new THREE.Group();
    const fHaft = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.026, 0.68, 8), darkWood);
    fHaft.position.y = 0.22;
    const fChain1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.26, 6), brightSteel);
    fChain1.position.set(0.05, 0.42, 0.08);
    fChain1.rotation.z = -0.35;
    const fBall1 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.075, 0), brightSteel);
    fBall1.position.set(0.1, 0.28, 0.11);
    const fChain2 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.38, 6), brightSteel);
    fChain2.position.set(-0.06, 0.36, 0.12);
    fChain2.rotation.z = 0.28;
    const fBall2 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.085, 0), brightSteel);
    fBall2.position.set(-0.11, 0.16, 0.14);
    flailGrp.add(fHaft, fChain1, fBall1, fChain2, fBall2);
    flailGrp.position.set(0, -0.28, 0.08);
    flailGrp.rotation.x = 0.72;
    p.armR.add(flailGrp);
  }

  // ==================== LEVEL 6: NORMANDY, 6 JUNE 1944 ====================
  else if (heroId === 'pavlichenko') {
    // Lyudmila Pavlichenko: Olive Soviet uniform, side cap (pilotka), dark hair, scoped bolt-action rifle
    const oliveMat = new THREE.MeshStandardMaterial({ color: 0x5d6442, roughness: 0.84 });
    const p = addBaseBody({ torsoMat: oliveMat, legsMat: oliveMat, armsMat: oliveMat, bootsMat: blackCloth, skin: skinFair, slim: true });

    const skirt = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.34, 0.44, 10), oliveMat);
    skirt.position.set(0, 0.74, 0);
    const belt = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.1, 0.33), brownLeather);
    belt.position.set(0, 0.96, 0);
    const collar = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.09, 0.32), oliveMat);
    collar.position.set(0, 1.54, 0);
    root.add(skirt, belt, collar);

    // Neat dark hair & Olive Soviet Garrison Side Cap (Pilotka) with tiny crimson star
    const hairBack = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.32, 0.14), darkHair);
    hairBack.position.set(0, -0.05, -0.13);
    const hairSideL = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.05, 0.24, 8), darkHair);
    hairSideL.position.set(-0.17, -0.04, -0.02);
    const hairSideR = hairSideL.clone();
    hairSideR.position.x = 0.17;

    const pilotka = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.15, 0.42), oliveMat);
    pilotka.position.set(0.03, 0.21, 0.02);
    pilotka.rotation.z = -0.18;
    const star = new THREE.Mesh(new THREE.SphereGeometry(0.028, 6, 6), crimsonMat);
    star.position.set(0.05, 0.21, 0.23);
    p.head.add(hairBack, hairSideL, hairSideR, pilotka, star);

    // Scoped Bolt-Action Rifle
    const rifle = makeRifle();
    const scopeTube = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.024, 0.36, 10), darkCharcoal);
    scopeTube.rotation.x = Math.PI / 2;
    scopeTube.position.set(0, 0.08, 0.05);
    rifle.add(scopeTube);
    rifle.position.set(-0.08, -0.24, 0.12);
    rifle.rotation.set(0.3, -0.45, 0);
    p.armR.add(rifle);
  } else if (heroId === 'hall') {
    // Virginia Hall: Tan trench coat, dark beret, chestnut hair, subtle wooden prosthetic lower leg, Sten SMG
    const trenchMat = new THREE.MeshStandardMaterial({ color: 0x9c8b6d, roughness: 0.85 });
    const beretMat = new THREE.MeshStandardMaterial({ color: 0x262834, roughness: 0.88 });
    const p = addBaseBody({ torsoMat: trenchMat, legsMat: darkCharcoal, armsMat: trenchMat, bootsMat: brownLeather, skin: skinFair, slim: true });

    // Belted trench coat skirt & lapels
    const coatSkirt = new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.38, 0.66, 12), trenchMat);
    coatSkirt.position.set(0, 0.64, 0);
    const belt = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.1, 0.34), trenchMat);
    belt.position.set(0, 0.96, 0);
    const lapel = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.32, 0.04), darkCharcoal);
    lapel.position.set(0, 1.36, 0.155);
    // Respectful subtle prosthetic wooden lower-left leg detail
    const prosthetic = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.055, 0.36, 8), darkWood);
    prosthetic.position.set(0, -0.18, 0);
    p.legL.add(prosthetic);
    root.add(coatSkirt, belt, lapel);

    // Chestnut hair & tilted dark French Beret
    const hair = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.34, 0.14), chestnutHair);
    hair.position.set(0, -0.05, -0.13);
    const beret = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.21, 0.1, 16), beretMat);
    beret.position.set(-0.04, 0.19, -0.01);
    beret.rotation.z = 0.22;
    p.head.add(hair, beret);

    // Sten Mk II SMG with side magazine
    const sten = new THREE.Group();
    const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.026, 0.62, 10), darkCharcoal);
    tube.rotation.x = Math.PI / 2;
    tube.position.set(0, 0, 0.22);
    const mag = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.026, 0.042), darkCharcoal);
    mag.position.set(-0.12, 0, 0.18);
    sten.add(tube, mag);
    sten.position.set(0, -0.32, 0.06);
    sten.rotation.x = 0.65;
    p.armR.add(sten);
  } else if (heroId === 'bavaud') {
    // Maurice Bavaud: Young Swiss man in a tailored dark overcoat, clean-shaven, heavy pistol
    const overcoatMat = new THREE.MeshStandardMaterial({ color: 0x22262e, roughness: 0.82 });
    const p = addBaseBody({ torsoMat: overcoatMat, legsMat: darkCharcoal, armsMat: overcoatMat, bootsMat: blackCloth, skin: skinFair, slim: true });

    const coatSkirt = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.68, 0.32), overcoatMat);
    coatSkirt.position.set(0, 0.62, 0);
    const collarShirt = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.26, 0.04), pureWhite);
    collarShirt.position.set(0, 1.38, 0.155);
    const tie = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.22, 0.05), darkCharcoal);
    tie.position.set(0, 1.35, 0.165);
    root.add(coatSkirt, collarShirt, tie);

    // Neat young man's combed dark hair, clean-shaven
    const hairTop = new THREE.Mesh(new THREE.SphereGeometry(0.215, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.54), darkHair);
    hairTop.position.set(0, 0.065, -0.02);
    p.head.add(hairTop);

    // Heavy semi-automatic pistol
    const pistol = new THREE.Group();
    const slide = new THREE.Mesh(new THREE.BoxGeometry(0.048, 0.068, 0.28), darkCharcoal);
    slide.position.set(0, 0.02, 0.16);
    const grip = new THREE.Mesh(new THREE.BoxGeometry(0.042, 0.12, 0.06), brownLeather);
    grip.position.set(0, -0.06, 0.02);
    pistol.add(slide, grip);
    pistol.position.set(0, -0.34, 0.05);
    pistol.rotation.x = 0.62;
    p.armR.add(pistol);
  } else if (heroId === 'solzhenitsyn') {
    // Aleksandr Solzhenitsyn: bald top with side/back hair fringe, full chin beard WITHOUT moustache, padded winter jacket, Soviet SMG
    const paddedMat = new THREE.MeshStandardMaterial({ color: 0x3b4238, roughness: 0.92 });
    const p = addBaseBody({ torsoMat: paddedMat, legsMat: darkCharcoal, armsMat: paddedMat, bootsMat: blackCloth, skin: skinWeathered, browMat: brownBeard });
    const jacketLower = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.34, 0.34), paddedMat);
    jacketLower.position.set(0, 0.82, 0);
    const belt = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.09, 0.36), brownLeather);
    belt.position.set(0, 0.96, 0);
    root.add(jacketLower, belt);

    // Distinctively bald top with short side & back hair fringe
    const sideL = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.13, 0.2), brownBeard);
    sideL.position.set(-0.2, 0.03, -0.04);
    const sideR = sideL.clone();
    sideR.position.x = 0.2;
    const backHair = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.16, 0.08), brownBeard);
    backHair.position.set(0, 0.01, -0.18);
    // Iconic chin-and-jaw beard strictly BELOW the mouth (no upper-lip moustache!)
    const beardChin = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.28, 10), brownBeard);
    beardChin.rotation.x = Math.PI;
    beardChin.position.set(0, -0.22, 0.12);
    const beardJawL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.16, 0.16), brownBeard);
    beardJawL.position.set(-0.15, -0.11, 0.05);
    const beardJawR = beardJawL.clone();
    beardJawR.position.x = 0.15;
    p.head.add(sideL, sideR, backHair, beardChin, beardJawL, beardJawR);

    // Soviet SMG with drum mag
    const smg = new THREE.Group();
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.62, 8), darkCharcoal);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(0, 0, 0.22);
    const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.05, 12), darkCharcoal);
    drum.rotation.x = Math.PI / 2;
    drum.position.set(0, -0.09, 0.18);
    smg.add(barrel, drum);
    smg.position.set(0, -0.32, 0.05);
    smg.rotation.x = 0.62;
    p.armR.add(smg);
  } else if (heroId === 'sakharov') {
    // Andrei Sakharov: balding head with side hair, glasses, grey tailored suit, pistol
    const greySuit = new THREE.MeshStandardMaterial({ color: 0x6b7076, roughness: 0.8 });
    const silverHair = new THREE.MeshStandardMaterial({ color: 0xbcbab4, roughness: 0.9 });
    const p = addBaseBody({ torsoMat: greySuit, legsMat: greySuit, armsMat: greySuit, bootsMat: blackCloth, skin: skinElder, slim: true });
    const shirt = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.28, 0.04), pureWhite);
    shirt.position.set(0, 1.36, 0.155);
    const tie = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.24, 0.05), darkCharcoal);
    tie.position.set(0, 1.33, 0.165);
    root.add(shirt, tie);

    // Balding crown with side fringe hair
    const sideL = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.14, 0.22), silverHair);
    sideL.position.set(-0.2, 0.04, -0.04);
    const sideR = sideL.clone();
    sideR.position.x = 0.2;
    const backHair = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.16, 0.08), silverHair);
    backHair.position.set(0, 0.02, -0.18);
    // Glasses
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1d, metalness: 0.6, roughness: 0.3 });
    const lensL = new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.01, 6, 12), glassMat);
    lensL.position.set(-0.072, 0.02, 0.215);
    const lensR = lensL.clone();
    lensR.position.x = 0.072;
    const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.012, 0.012), glassMat);
    bridge.position.set(0, 0.02, 0.215);
    p.head.add(sideL, sideR, backHair, lensL, lensR, bridge);

    const pistol = new THREE.Group();
    const slide = new THREE.Mesh(new THREE.BoxGeometry(0.044, 0.064, 0.26), darkCharcoal);
    slide.position.set(0, 0.02, 0.15);
    const grip = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.12, 0.055), brownLeather);
    grip.position.set(0, -0.06, 0.02);
    pistol.add(slide, grip);
    pistol.position.set(0, -0.34, 0.05);
    pistol.rotation.x = 0.62;
    p.armR.add(pistol);
  } else if (heroId === 'nureyev') {
    // Rudolf Nureyev: sculpted dark hair, sleek black overcoat, flowing long white scarf, pistol
    const p = addBaseBody({ torsoMat: blackCloth, legsMat: blackCloth, armsMat: blackCloth, bootsMat: blackCloth, skin: skinFair, slim: true });
    const coatSkirt = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.36, 0.72, 12), blackCloth);
    coatSkirt.position.set(0, 0.62, 0);
    // Iconic long white scarf wrapped around neck & streaming down chest/back
    const scarfRing = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.055, 8, 16), pureWhite);
    scarfRing.rotation.x = Math.PI / 2;
    scarfRing.position.set(0, 1.54, 0.02);
    const scarfTailF = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.76, 0.045), pureWhite);
    scarfTailF.position.set(0.09, 1.15, 0.175);
    scarfTailF.rotation.z = 0.08;
    const scarfTailB = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.85, 0.045), pureWhite);
    scarfTailB.position.set(-0.08, 1.12, -0.18);
    scarfTailB.rotation.x = 0.12;
    root.add(coatSkirt, scarfRing, scarfTailF, scarfTailB);

    // Thick sculpted mop of dark hair (full sweeping crown, brow wave, sides & back)
    const hairCrown = new THREE.Mesh(new THREE.DodecahedronGeometry(0.26, 1), darkHair);
    hairCrown.scale.set(1.08, 0.88, 1.12);
    hairCrown.position.set(0, 0.14, -0.02);
    const hairWave = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), darkHair);
    hairWave.scale.set(1.45, 0.65, 0.95);
    hairWave.position.set(0.02, 0.18, 0.11);
    const hairSideL = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), darkHair);
    hairSideL.scale.set(0.75, 1.35, 1.15);
    hairSideL.position.set(-0.2, 0.04, -0.03);
    const hairSideR = hairSideL.clone();
    hairSideR.position.x = 0.2;
    const hairBack = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.32, 0.18), darkHair);
    hairBack.position.set(0, -0.01, -0.15);
    p.head.add(hairCrown, hairWave, hairSideL, hairSideR, hairBack);

    const pistol = new THREE.Group();
    const slide = new THREE.Mesh(new THREE.BoxGeometry(0.042, 0.06, 0.25), darkCharcoal);
    slide.position.set(0, 0.02, 0.14);
    const grip = new THREE.Mesh(new THREE.BoxGeometry(0.038, 0.11, 0.055), blackCloth);
    grip.position.set(0, -0.06, 0.02);
    pistol.add(slide, grip);
    pistol.position.set(0, -0.34, 0.05);
    pistol.rotation.x = 0.62;
    p.armR.add(pistol);
  } else if (heroId === 'gompo') {
    // Gompo Tashi Andrugtsang: fox-fur hat, long fur-trimmed chuba coat, bolt-action rifle
    const coatMat = new THREE.MeshStandardMaterial({ color: 0x5c3622, roughness: 0.88 });
    const foxFur = new THREE.MeshStandardMaterial({ color: 0xd48b42, roughness: 0.94 });
    const p = addBaseBody({ torsoMat: coatMat, legsMat: darkCharcoal, armsMat: coatMat, bootsMat: brownLeather, skin: skinWeathered });
    const coatLower = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.42, 0.72, 12), coatMat);
    coatLower.position.set(0, 0.6, 0);
    const furTrim = new THREE.Mesh(new THREE.CylinderGeometry(0.425, 0.44, 0.14, 12), foxFur);
    furTrim.position.set(0, 0.28, 0);
    const sash = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.12, 0.34), crimsonMat);
    sash.position.set(0, 0.96, 0);
    root.add(coatLower, furTrim, sash);

    // Traditional Khampa fox-fur ring hat with dark silk crown
    const furRing = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.095, 10, 16), foxFur);
    furRing.rotation.x = Math.PI / 2;
    furRing.position.set(0, 0.2, 0);
    const crown = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.2, 10), crimsonMat);
    crown.position.set(0, 0.28, 0);
    p.head.add(furRing, crown);

    const rifle = makeRifle();
    rifle.position.set(-0.08, -0.24, 0.12);
    rifle.rotation.set(0.3, -0.45, 0);
    p.armR.add(rifle);
  } else if (heroId === 'pachen') {
    // Ani Pachen: shaved head, dark red Tibetan nun's robe, bright yellow sash, pistol
    const maroonRobe = new THREE.MeshStandardMaterial({ color: 0x6f191c, roughness: 0.85 });
    const saffronYellow = new THREE.MeshStandardMaterial({ color: 0xe6b622, roughness: 0.78 });
    const p = addBaseBody({ torsoMat: maroonRobe, legsMat: maroonRobe, armsMat: maroonRobe, bootsMat: brownLeather, skin: skinWeathered, slim: true });
    const robeSkirt = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.42, 0.78, 12), maroonRobe);
    robeSkirt.position.set(0, 0.56, 0);
    // Diagonal & waist yellow sash
    const waistSash = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.11, 0.34), saffronYellow);
    waistSash.position.set(0, 0.94, 0);
    const diagSash = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.78, 0.33), saffronYellow);
    diagSash.position.set(-0.06, 1.24, 0);
    diagSash.rotation.z = -0.36;
    root.add(robeSkirt, waistSash, diagSash);

    // Clean shaved head (no hair mesh)
    const pistol = new THREE.Group();
    const slide = new THREE.Mesh(new THREE.BoxGeometry(0.044, 0.064, 0.26), darkCharcoal);
    slide.position.set(0, 0.02, 0.15);
    const grip = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.12, 0.055), darkWood);
    grip.position.set(0, -0.06, 0.02);
    pistol.add(slide, grip);
    pistol.position.set(0, -0.34, 0.05);
    pistol.rotation.x = 0.62;
    p.armR.add(pistol);
  } else if (heroId === 'songtsen') {
    // Songtsen Gampo: royal crimson silk turban, rich red imperial robe with gold brocade trim, bow & sword
    const royalRed = new THREE.MeshStandardMaterial({ color: 0x9c1b1d, roughness: 0.72 });
    const p = addBaseBody({ torsoMat: royalRed, legsMat: royalRed, armsMat: royalRed, bootsMat: brownLeather, skin: skinWeathered });
    const robeSkirt = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.44, 0.78, 12), royalRed);
    robeSkirt.position.set(0, 0.56, 0);
    const goldHem = new THREE.Mesh(new THREE.CylinderGeometry(0.445, 0.455, 0.1, 12), goldMat);
    goldHem.position.set(0, 0.22, 0);
    const goldCollar = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.045, 8, 16), goldMat);
    goldCollar.rotation.x = Math.PI / 2;
    goldCollar.position.set(0, 1.54, 0);
    const goldBelt = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.1, 0.34), goldMat);
    goldBelt.position.set(0, 0.96, 0);
    root.add(robeSkirt, goldHem, goldCollar, goldBelt);

    // Tall royal silk turban with gold finial ornament
    const turbanBase = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.22, 0.26, 14), royalRed);
    turbanBase.position.set(0, 0.24, 0);
    const turbanTop = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 10), royalRed);
    turbanTop.position.set(0, 0.42, 0);
    const turbanBand = new THREE.Mesh(new THREE.TorusGeometry(0.23, 0.03, 6, 16), goldMat);
    turbanBand.rotation.x = Math.PI / 2;
    turbanBand.position.set(0, 0.2, 0);
    const crownGem = new THREE.Mesh(new THREE.OctahedronGeometry(0.06, 0), goldMat);
    crownGem.position.set(0, 0.32, 0.22);
    p.head.add(turbanBase, turbanTop, turbanBand, crownGem);

    // Tibetan bow in left hand + royal sword in right hand
    const bow = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.022, 8, 18, Math.PI * 0.95), goldMat);
    bow.rotation.z = -Math.PI * 0.48;
    bow.position.set(-0.08, -0.1, 0.12);
    p.armL.add(bow);
    const sword = new THREE.Group();
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.85, 0.08), brightSteel);
    blade.position.y = 0.48;
    const guard = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, 0.24), goldMat);
    guard.position.y = 0.04;
    sword.add(blade, guard);
    sword.position.set(0, -0.32, 0.08);
    sword.rotation.x = 0.72;
    p.armR.add(sword);
  } else if (heroId === 'cuauhtemoc' || heroId === 'tzilacatzin' || heroId === 'nezahualcoyotl') {
    // Aztec Mexica heroes with jade/crimson cotton armour, feather headdress, feathered chimalli shield & obsidian macuahuitl / weapon!
    const skinBronze = new THREE.MeshStandardMaterial({ color: 0xb97c52, roughness: 0.76 });
    const cottonWhite = new THREE.MeshStandardMaterial({ color: 0xeee5cf, roughness: 0.88 });
    const jadeFeather = new THREE.MeshStandardMaterial({ color: 0x1bb58c, roughness: 0.65 });
    const turquoiseMat = new THREE.MeshStandardMaterial({ color: 0x26b5c4, roughness: 0.55 });
    const obsidianMat = new THREE.MeshStandardMaterial({ color: 0x16181e, metalness: 0.9, roughness: 0.16 });

    const torsoCol = heroId === 'cuauhtemoc' ? crimsonMat : heroId === 'tzilacatzin' ? cottonWhite : turquoiseMat;
    const p = addBaseBody({ torsoMat: torsoCol, legsMat: skinBronze, armsMat: skinBronze, bootsMat: brownLeather, skin: skinBronze });

    // Quilted cotton kilt (ichcahuipilli) & gold/jade belt
    const kilt = new THREE.Mesh(new THREE.CylinderGeometry(0.29, 0.37, 0.44, 10), heroId === 'tzilacatzin' ? crimsonMat : cottonWhite);
    kilt.position.set(0, 0.75, 0);
    const belt = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.11, 0.34), goldMat);
    belt.position.set(0, 0.96, 0);
    const collar = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.05, 8, 16), jadeFeather);
    collar.rotation.x = Math.PI / 2;
    collar.position.set(0, 1.53, 0);
    const cape = new THREE.Mesh(new THREE.BoxGeometry(0.62, 1.0, 0.08), heroId === 'cuauhtemoc' ? jadeFeather : heroId === 'nezahualcoyotl' ? crimsonMat : goldMat);
    cape.position.set(0, 1.04, -0.2);
    cape.rotation.x = 0.12;
    root.add(kilt, belt, collar, cape);

    // Sweeping quetzal-feather panache / warrior headband
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.218, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.56), darkHair);
    hair.position.set(0, 0.07, -0.02);
    const headband = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.028, 6, 16), goldMat);
    headband.rotation.x = Math.PI / 2;
    headband.position.y = 0.11;
    p.head.add(hair, headband);
    const plumeCount = heroId === 'cuauhtemoc' ? 9 : heroId === 'nezahualcoyotl' ? 7 : 5;
    for (let i = 0; i < plumeCount; i++) {
      const a = ((i / (plumeCount - 1)) - 0.5) * 1.45;
      const feather = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.46, 5), i % 2 === 0 ? jadeFeather : crimsonMat);
      feather.position.set(Math.sin(a) * 0.24, 0.34 + Math.cos(a) * 0.12, -0.04);
      feather.rotation.z = -a;
      p.head.add(feather);
    }

    // Round feathered Chimalli shield on left arm
    const shield = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.055, 18), crimsonMat);
    shield.rotation.x = Math.PI / 2;
    shield.position.set(-0.08, -0.16, 0.22);
    const sRing = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.062, 16), goldMat);
    sRing.rotation.x = Math.PI / 2;
    sRing.position.set(-0.08, -0.16, 0.22);
    p.armL.add(shield, sRing);

    // Signature weapon in right hand
    if (heroId === 'tzilacatzin') {
      const stone = new THREE.Mesh(new THREE.DodecahedronGeometry(0.14, 0), new THREE.MeshStandardMaterial({ color: 0x857c70, roughness: 0.9 }));
      stone.position.set(0, -0.34, 0.1);
      p.armR.add(stone);
    } else {
      const paddle = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.92, 0.12), darkWood);
      paddle.position.set(0, 0.14, 0.12);
      paddle.rotation.x = 0.75;
      const edgeL = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.72, 0.04), obsidianMat);
      edgeL.position.set(0, 0.18, 0.20);
      edgeL.rotation.x = 0.75;
      p.armR.add(paddle, edgeL);
    }
  }

  // Ground pedestal disc beneath hero figure for clean turntable framing
  const plinthColor = heroId === 'earp' || heroId === 'jane' || heroId === 'billy'
    ? 0x6b4428
    : heroId === 'musashi' || heroId === 'tomoe' || heroId === 'masamune'
      ? 0x454942
      : heroId === 'ulysses' || heroId === 'achilles' || heroId === 'heracles'
        ? 0xe8e0d0
        : heroId === 'erik' || heroId === 'leif' || heroId === 'ragnar'
          ? 0x4b5c6e
          : heroId === 'pavlichenko' || heroId === 'hall' || heroId === 'bavaud'
            ? 0x5c605c
            : heroId === 'solzhenitsyn' || heroId === 'sakharov' || heroId === 'nureyev'
              ? 0x6b7078
              : heroId === 'gompo' || heroId === 'pachen' || heroId === 'songtsen'
                ? 0x8f3a2c
                : heroId === 'cuauhtemoc' || heroId === 'tzilacatzin' || heroId === 'nezahualcoyotl'
                  ? 0x2a6b60
                  : 0x5d6269;
  const plinth = new THREE.Mesh(
    new THREE.CylinderGeometry(0.72, 0.82, 0.16, 20),
    new THREE.MeshStandardMaterial({ color: plinthColor, roughness: 0.78 })
  );
  plinth.position.y = -0.08;
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.76, 0.025, 8, 28),
    goldMat
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.01;
  root.add(plinth, ring);

  return root;
}
