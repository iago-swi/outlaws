import * as THREE from 'three';

export const ERA_WEAPONS = {
  west: [
    {
      id: 'revolver',
      name: '.45 PEACEMAKER',
      shortName: 'Revolver',
      kind: 'hitscan',
      sound: 'revolver',
      damage: 38,
      headMult: 2.1,
      pellets: 1,
      spread: 0.012,
      fireRate: 0.28,
      magSize: 6,
      reserve: 48,
      reloadTime: 1.05,
      recoil: 0.14,
      altMode: 'fan',
      altHint: 'RMB: Fan Hammer',
      tracerColor: 0xffe49e
    },
    {
      id: 'shotgun',
      name: '10-GAUGE COACH GUN',
      shortName: 'Shotgun',
      kind: 'hitscan',
      sound: 'shotgun',
      damage: 19,
      headMult: 1.5,
      pellets: 8,
      spread: 0.085,
      fireRate: 0.65,
      magSize: 2,
      reserve: 24,
      reloadTime: 1.15,
      recoil: 0.28,
      altMode: 'double',
      altHint: 'RMB: Both Barrels',
      tracerColor: 0xffc670
    },
    {
      id: 'rifle',
      name: 'HENRY .44 SCOPED',
      shortName: 'Rifle',
      kind: 'hitscan',
      sound: 'rifle',
      damage: 74,
      headMult: 2.4,
      pellets: 1,
      spread: 0.004,
      fireRate: 0.72,
      magSize: 8,
      reserve: 32,
      reloadTime: 1.3,
      recoil: 0.18,
      altMode: 'scope',
      scopeLabel: 'HENRY .44 BRASS OPTIC',
      scopeFov: 26,
      altHint: 'RMB: Brass Scope Zoom',
      tracerColor: 0xfff3c4
    },
    {
      id: 'dynamite',
      name: 'DYNAMITE STICKS',
      shortName: 'Dynamite',
      kind: 'throwable',
      sound: 'throw',
      damage: 145,
      blastRadius: 7.5,
      fireRate: 0.85,
      magSize: 1,
      reserve: 6,
      reloadTime: 0.55,
      recoil: 0.12,
      altMode: 'none',
      altHint: 'Arc Throw Explosive',
      projColor: 0xd93622
    }
  ],
  japan: [
    {
      id: 'katana',
      name: 'MURAMASA KATANA',
      shortName: 'Katana',
      kind: 'melee',
      sound: 'slash',
      damage: 68,
      headMult: 1.5,
      range: 4.0,
      fireRate: 0.36,
      magSize: 99,
      reserve: 99,
      infinite: true,
      reloadTime: 0.1,
      recoil: 0.22,
      altMode: 'heavy_slash',
      altHint: 'RMB: Iaido Power Cleave',
      slashColor: 0xe6f9ff
    },
    {
      id: 'yumi',
      name: 'YUMI LONGBOW',
      shortName: 'Yumi Bow',
      kind: 'hitscan',
      sound: 'bow',
      damage: 78,
      headMult: 2.3,
      pellets: 1,
      spread: 0.005,
      fireRate: 0.62,
      magSize: 1,
      reserve: 40,
      reloadTime: 0.45,
      recoil: 0.11,
      altMode: 'scope',
      scopeLabel: 'KYUDO SPIRIT FOCUS',
      scopeFov: 30,
      altHint: 'RMB: Spirit Focus Zoom',
      tracerColor: 0xfff0c2
    },
    {
      id: 'shuriken',
      name: 'SHINOBI SHURIKEN',
      shortName: 'Shuriken',
      kind: 'hitscan',
      sound: 'shuriken',
      damage: 34,
      headMult: 2.0,
      pellets: 1,
      spread: 0.018,
      fireRate: 0.2,
      magSize: 9,
      reserve: 63,
      reloadTime: 0.85,
      recoil: 0.07,
      altMode: 'fan_stars',
      altHint: 'RMB: 3-Star Fan Throw',
      tracerColor: 0xd0ecff
    },
    {
      id: 'matchlock',
      name: 'TANEGASHIMA MUSKET',
      shortName: 'Matchlock',
      kind: 'hitscan',
      sound: 'musket',
      damage: 115,
      headMult: 1.9,
      pellets: 4,
      spread: 0.045,
      fireRate: 1.05,
      magSize: 1,
      reserve: 18,
      reloadTime: 1.25,
      recoil: 0.3,
      altMode: 'none',
      altHint: 'Heavy Edo Firepower',
      tracerColor: 0xffb35c
    }
  ],
  swiss: [
    {
      id: 'crossbow',
      name: "TELL'S ARMBRUST",
      shortName: 'Crossbow',
      kind: 'hitscan',
      sound: 'crossbow',
      damage: 86,
      headMult: 2.5,
      pellets: 1,
      spread: 0.003,
      fireRate: 0.65,
      magSize: 1,
      reserve: 45,
      reloadTime: 0.62,
      recoil: 0.14,
      altMode: 'scope',
      scopeLabel: 'WILHELM TELL EAGLE-EYE',
      scopeFov: 24,
      altHint: 'RMB: Eagle-Eye Zoom',
      tracerColor: 0xf4f9ff
    },
    {
      id: 'halberd',
      name: 'SWISS HALBERD',
      shortName: 'Halberd',
      kind: 'melee',
      sound: 'slash',
      damage: 78,
      headMult: 1.5,
      range: 4.4,
      fireRate: 0.48,
      magSize: 99,
      reserve: 99,
      infinite: true,
      reloadTime: 0.1,
      recoil: 0.25,
      altMode: 'heavy_slash',
      altHint: 'RMB: Armor-Breaker Sweep',
      slashColor: 0xdff2ff
    },
    {
      id: 'repeater',
      name: 'ALPINE REPEATER',
      shortName: 'Repeater',
      kind: 'hitscan',
      sound: 'crossbow',
      damage: 36,
      headMult: 2.0,
      pellets: 1,
      spread: 0.016,
      fireRate: 0.22,
      magSize: 8,
      reserve: 56,
      reloadTime: 1.1,
      recoil: 0.09,
      altMode: 'fan',
      altHint: 'RMB: Rapid Volley',
      tracerColor: 0xe6f2ff
    },
    {
      id: 'firepot',
      name: 'ALPINE FIRE-POT',
      shortName: 'Fire-Pot',
      kind: 'throwable',
      sound: 'throw',
      damage: 150,
      blastRadius: 7.5,
      fireRate: 0.9,
      magSize: 1,
      reserve: 6,
      reloadTime: 0.6,
      recoil: 0.12,
      altMode: 'none',
      altHint: 'Arc Throw Fire-Bomb',
      projColor: 0xff6e24
    }
  ],
  greece: [
    {
      id: 'javelin',
      name: 'BRONZE JAVELIN',
      shortName: 'Javelin',
      kind: 'hitscan',
      sound: 'javelin',
      damage: 56,
      headMult: 2.1,
      pellets: 1,
      spread: 0.009,
      fireRate: 0.56,
      magSize: 5,
      reserve: 45,
      reloadTime: 0.88,
      recoil: 0.16,
      altMode: 'scope',
      scopeLabel: 'AEGEAN SPEAR SIGHT',
      scopeFov: 36,
      altHint: 'RMB: Steady Aim Focus',
      tracerColor: 0xffe49e
    },
    {
      id: 'xiphos',
      name: 'XIPHOS SHORT SWORD',
      shortName: 'Short Sword',
      kind: 'melee',
      sound: 'slash',
      damage: 66,
      headMult: 1.5,
      range: 3.9,
      fireRate: 0.34,
      magSize: 99,
      reserve: 99,
      infinite: true,
      reloadTime: 0.1,
      recoil: 0.22,
      altMode: 'heavy_slash',
      altHint: 'RMB: Heroic Thrust Cleave',
      slashColor: 0xffe6a3
    }
  ],
  scandinavia: [
    {
      id: 'throwing_axe',
      name: 'THROWING AXE',
      shortName: 'Throwing Axe',
      kind: 'hitscan',
      sound: 'axe_throw',
      damage: 58,
      headMult: 2.1,
      pellets: 1,
      spread: 0.011,
      fireRate: 0.54,
      magSize: 5,
      reserve: 45,
      reloadTime: 0.85,
      recoil: 0.17,
      altMode: 'scope',
      scopeLabel: 'NORSE RAIDER AIM',
      scopeFov: 38,
      altHint: 'RMB: Steady Aim Focus',
      tracerColor: 0xc2f5ff
    },
    {
      id: 'viking_sword',
      name: 'ULFBERHT SWORD',
      shortName: 'Viking Sword',
      kind: 'melee',
      sound: 'slash',
      damage: 72,
      headMult: 1.5,
      range: 4.1,
      fireRate: 0.38,
      magSize: 99,
      reserve: 99,
      infinite: true,
      reloadTime: 0.1,
      recoil: 0.24,
      altMode: 'heavy_slash',
      altHint: 'RMB: Shield-Breaker Cleave',
      slashColor: 0x9ef5e8
    }
  ],
  normandy: [
    {
      id: 'mosin_scoped',
      name: 'BOLT-ACTION SNIPER RIFLE',
      shortName: 'Sniper Rifle',
      kind: 'hitscan',
      sound: 'sniper',
      damage: 105,
      headMult: 2.2,
      pellets: 1,
      spread: 0.002,
      fireRate: 1.25,
      magSize: 5,
      reserve: 30,
      reloadTime: 1.65,
      recoil: 0.24,
      altMode: 'scope',
      scopeLabel: 'PU 3.5× TELESCOPIC SIGHT',
      scopeFov: 18,
      altHint: 'RMB: Telescopic Scope',
      tracerColor: 0xfff3c4
    },
    {
      id: 'sten_smg',
      name: 'STEN MK II SMG',
      shortName: 'Sten SMG',
      kind: 'hitscan',
      sound: 'smg',
      autoFire: true,
      damage: 19,
      headMult: 1.75,
      pellets: 1,
      spread: 0.032,
      fireRate: 0.11,
      magSize: 32,
      reserve: 160,
      reloadTime: 1.15,
      recoil: 0.065,
      altMode: 'none',
      altHint: 'Hold LMB: Full-Auto Fire',
      tracerColor: 0xffd27a
    },
    {
      id: 'heavy_pistol',
      name: 'BAVAUD HEAVY PISTOL',
      shortName: 'Heavy Pistol',
      kind: 'hitscan',
      sound: 'revolver',
      damage: 58,
      headMult: 2.0,
      pellets: 1,
      spread: 0.008,
      fireRate: 0.34,
      magSize: 8,
      reserve: 64,
      reloadTime: 0.95,
      recoil: 0.15,
      altMode: 'none',
      altHint: 'High-Impact Sidearm',
      tracerColor: 0xffe49e
    },
    {
      id: 'combat_knife',
      name: 'RESISTANCE KNIFE',
      shortName: 'Knife',
      kind: 'melee',
      sound: 'slash',
      damage: 65,
      headMult: 1.6,
      range: 3.3,
      fireRate: 0.32,
      magSize: 99,
      reserve: 99,
      infinite: true,
      reloadTime: 0.1,
      recoil: 0.16,
      altMode: 'heavy_slash',
      altHint: 'RMB: Close Thrust',
      slashColor: 0xd8ecff
    }
  ],
  soviet: [
    {
      id: 'soviet_smg',
      name: 'PPSH-41 SUBMACHINE GUN',
      shortName: 'Soviet SMG',
      kind: 'hitscan',
      sound: 'smg',
      damage: 25,
      headMult: 1.75,
      pellets: 1,
      spread: 0.036,
      fireRate: 0.115,
      auto: true,
      magSize: 35,
      reserve: 175,
      reloadTime: 1.35,
      recoil: 0.085,
      altMode: 'none',
      altHint: 'Hold LMB: Automatic Fire',
      tracerColor: 0xffe49e
    },
    {
      id: 'soviet_pistol',
      name: 'MAKAROV 9MM PISTOL',
      shortName: 'Pistol',
      kind: 'hitscan',
      sound: 'revolver',
      damage: 44,
      headMult: 2.1,
      pellets: 1,
      spread: 0.011,
      fireRate: 0.28,
      magSize: 8,
      reserve: 64,
      reloadTime: 1.0,
      recoil: 0.13,
      altMode: 'none',
      altHint: 'Accurate Sidearm',
      tracerColor: 0xffe49e
    },
    {
      id: 'combat_knife',
      name: 'UTILITY KNIFE',
      shortName: 'Knife',
      kind: 'melee',
      sound: 'slash',
      damage: 65,
      headMult: 1.6,
      range: 3.3,
      fireRate: 0.32,
      magSize: 99,
      reserve: 99,
      infinite: true,
      reloadTime: 0.1,
      recoil: 0.16,
      altMode: 'heavy_slash',
      altHint: 'RMB: Close Thrust',
      slashColor: 0xd8ecff
    }
  ],
  tibet: [
    {
      id: 'khampa_rifle',
      name: 'KHAMPA BOLT-ACTION RIFLE',
      shortName: 'Bolt Rifle',
      kind: 'hitscan',
      sound: 'sniper',
      damage: 105,
      headMult: 2.3,
      pellets: 1,
      spread: 0.004,
      fireRate: 0.92,
      magSize: 5,
      reserve: 45,
      reloadTime: 1.45,
      recoil: 0.21,
      altMode: 'scope',
      scopeLabel: 'IRON SIGHTS FOCUS',
      scopeFov: 40,
      altHint: 'RMB: Iron Sights Aim',
      tracerColor: 0xfff3c4
    },
    {
      id: 'tibet_pistol',
      name: 'RESISTANCE PISTOL',
      shortName: 'Pistol',
      kind: 'hitscan',
      sound: 'revolver',
      damage: 48,
      headMult: 2.1,
      pellets: 1,
      spread: 0.012,
      fireRate: 0.27,
      magSize: 10,
      reserve: 70,
      reloadTime: 1.0,
      recoil: 0.13,
      altMode: 'none',
      altHint: 'Nimble Sidearm',
      tracerColor: 0xffe49e
    },
    {
      id: 'tibet_bow',
      name: 'TIBETAN RECURVE BOW',
      shortName: 'Bow',
      kind: 'hitscan',
      sound: 'bow',
      damage: 80,
      headMult: 2.2,
      pellets: 1,
      spread: 0.006,
      fireRate: 0.58,
      magSize: 1,
      reserve: 55,
      reloadTime: 0.42,
      recoil: 0.1,
      altMode: 'scope',
      scopeLabel: 'ROYAL ARCHER FOCUS',
      scopeFov: 36,
      altHint: 'RMB: Aim Focus',
      tracerColor: 0xf6d58a
    },
    {
      id: 'tibet_sword',
      name: 'ROYAL TIBETAN SWORD',
      shortName: 'Sword',
      kind: 'melee',
      sound: 'slash',
      damage: 78,
      headMult: 1.6,
      range: 4.1,
      fireRate: 0.36,
      magSize: 99,
      reserve: 99,
      infinite: true,
      reloadTime: 0.1,
      recoil: 0.2,
      altMode: 'heavy_slash',
      altHint: 'RMB: Sweeping Strike',
      slashColor: 0xffdf99
    },
    {
      id: 'combat_knife',
      name: 'KHAMPA KNIFE',
      shortName: 'Knife',
      kind: 'melee',
      sound: 'slash',
      damage: 65,
      headMult: 1.6,
      range: 3.3,
      fireRate: 0.32,
      magSize: 99,
      reserve: 99,
      infinite: true,
      reloadTime: 0.1,
      recoil: 0.16,
      altMode: 'heavy_slash',
      altHint: 'RMB: Close Thrust',
      slashColor: 0xd8ecff
    }
  ]
};

/**
 * Builds detailed 3D first-person weapon meshes attached to the camera
 */
export function buildWeaponViewmodel(weaponId) {
  const g = new THREE.Group();

  const steelMat = new THREE.MeshStandardMaterial({ color: 0x3a404a, metalness: 0.85, roughness: 0.26 });
  const brightSteel = new THREE.MeshStandardMaterial({ color: 0xd8e0ea, metalness: 0.92, roughness: 0.16 });
  const brassMat = new THREE.MeshStandardMaterial({ color: 0xd9a441, metalness: 0.82, roughness: 0.28 });
  const woodMat = new THREE.MeshStandardMaterial({ color: 0x5c341d, roughness: 0.72, metalness: 0.05 });
  const darkWood = new THREE.MeshStandardMaterial({ color: 0x2f1b12, roughness: 0.75 });
  const crimsonMat = new THREE.MeshStandardMaterial({ color: 0xb8241d, roughness: 0.5 });
  const glowMat = new THREE.MeshBasicMaterial({ color: 0xffbb33 });

  if (weaponId === 'revolver') {
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.024, 0.44, 10), steelMat);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(0, 0.03, -0.32);

    const underRod = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.011, 0.36, 8), steelMat);
    underRod.rotation.x = Math.PI / 2;
    underRod.position.set(0, 0.004, -0.28);

    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.048, 0.095, 0.17), brassMat);
    frame.position.set(0, 0.0, -0.05);

    const cyl = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.038, 0.09, 12), steelMat);
    cyl.rotation.x = Math.PI / 2;
    cyl.position.set(0, 0.015, -0.055);
    cyl.name = 'cylinder';

    const sight = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.026, 0.02), brassMat);
    sight.position.set(0, 0.058, -0.51);

    const hammer = new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.04, 0.03), steelMat);
    hammer.position.set(0, 0.052, 0.03);
    hammer.rotation.x = -0.35;

    const grip = new THREE.Mesh(new THREE.BoxGeometry(0.042, 0.16, 0.068), woodMat);
    grip.position.set(0, -0.09, 0.05);
    grip.rotation.x = 0.28;

    g.add(barrel, underRod, frame, cyl, sight, hammer, grip);
    g.position.set(0.24, -0.22, -0.35);
  } else if (weaponId === 'shotgun') {
    for (const sx of [-0.024, 0.024]) {
      const b = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.024, 0.72, 12), steelMat);
      b.rotation.x = Math.PI / 2;
      b.position.set(sx, 0.02, -0.45);
      g.add(b);
    }
    const forend = new THREE.Mesh(new THREE.BoxGeometry(0.078, 0.048, 0.28), woodMat);
    forend.position.set(0, -0.012, -0.32);
    const receiver = new THREE.Mesh(new THREE.BoxGeometry(0.082, 0.078, 0.18), brassMat);
    receiver.position.set(0, 0.0, -0.04);
    const stock = new THREE.Mesh(new THREE.BoxGeometry(0.065, 0.11, 0.36), woodMat);
    stock.position.set(0, -0.055, 0.18);
    stock.rotation.x = 0.16;

    g.add(forend, receiver, stock);
    g.position.set(0.24, -0.24, -0.32);
  } else if (weaponId === 'rifle') {
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.021, 0.88, 8), steelMat);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(0, 0.025, -0.52);

    const magTube = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.78, 8), brassMat);
    magTube.rotation.x = Math.PI / 2;
    magTube.position.set(0, -0.006, -0.48);

    const receiver = new THREE.Mesh(new THREE.BoxGeometry(0.054, 0.088, 0.22), brassMat);
    receiver.position.set(0, 0.0, -0.04);

    // Iconic Outlaws long vintage brass sniper scope
    const scope = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.024, 0.48, 12), brassMat);
    scope.rotation.x = Math.PI / 2;
    scope.position.set(0, 0.078, -0.22);

    const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.01, 12), new THREE.MeshBasicMaterial({ color: 0x8ad8ff }));
    lens.rotation.x = Math.PI / 2;
    lens.position.set(0, 0.078, 0.02);

    const stock = new THREE.Mesh(new THREE.BoxGeometry(0.052, 0.11, 0.36), woodMat);
    stock.position.set(0, -0.048, 0.2);
    stock.rotation.x = 0.12;

    g.add(barrel, magTube, receiver, scope, lens, stock);
    g.position.set(0.24, -0.24, -0.32);
  } else if (weaponId === 'dynamite') {
    for (const [dx, dy] of [[-0.024, 0], [0.024, 0], [0, 0.032]]) {
      const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.26, 10), crimsonMat);
      stick.position.set(dx, dy, 0);
      g.add(stick);
    }
    const band1 = new THREE.Mesh(new THREE.CylinderGeometry(0.054, 0.054, 0.022, 12), darkWood);
    band1.position.y = 0.06;
    const band2 = band1.clone();
    band2.position.y = -0.06;
    const fuse = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.09, 6), woodMat);
    fuse.position.set(0.01, 0.17, 0);
    fuse.rotation.z = -0.35;
    const spark = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 8), glowMat);
    spark.position.set(0.028, 0.21, 0);
    spark.name = 'spark';
    g.add(band1, band2, fuse, spark);
    g.rotation.set(0.25, 0.2, 0.15);
    g.position.set(0.26, -0.24, -0.45);
  } else if (weaponId === 'katana') {
    // Gleaming curved katana
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.92, 0.044), brightSteel);
    blade.position.set(0, 0.44, 0);
    const edge = new THREE.Mesh(new THREE.BoxGeometry(0.005, 0.92, 0.014), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    edge.position.set(0, 0.44, -0.023);
    const habaki = new THREE.Mesh(new THREE.BoxGeometry(0.024, 0.05, 0.052), brassMat);
    habaki.position.set(0, 0.01, 0);
    const tsuba = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.014, 16), brassMat);
    tsuba.position.set(0, -0.02, 0);
    const hilt = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.026, 0.28, 10), crimsonMat);
    hilt.position.set(0, -0.16, 0);
    g.add(blade, edge, habaki, tsuba, hilt);
    g.rotation.set(-0.35, -0.28, 0.28);
    g.position.set(0.32, -0.34, -0.52);
  } else if (weaponId === 'yumi') {
    // Asymmetric Japanese Yumi Bow + nocked arrow
    const bowCurve = new THREE.Mesh(new THREE.TorusGeometry(0.52, 0.018, 8, 22, Math.PI * 0.88), darkWood);
    bowCurve.rotation.z = -Math.PI * 0.44;
    bowCurve.position.set(0, 0.06, -0.22);

    const stringMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, 0.96, 6), new THREE.MeshBasicMaterial({ color: 0xf4e8d1 }));
    stringMesh.position.set(0, 0.06, 0.04);

    const arrowShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.72, 6), woodMat);
    arrowShaft.rotation.x = Math.PI / 2;
    arrowShaft.position.set(0.02, 0.02, -0.24);
    const arrowTip = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.07, 4), brightSteel);
    arrowTip.rotation.x = -Math.PI / 2;
    arrowTip.position.set(0.02, 0.02, -0.62);
    const fletch = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.004, 0.1), crimsonMat);
    fletch.position.set(0.02, 0.02, 0.07);

    g.add(bowCurve, stringMesh, arrowShaft, arrowTip, fletch);
    g.position.set(0.25, -0.18, -0.45);
  } else if (weaponId === 'shuriken') {
    const star = new THREE.Group();
    for (let i = 0; i < 4; i++) {
      const p = new THREE.Mesh(new THREE.ConeGeometry(0.036, 0.12, 4), brightSteel);
      const ang = (i * Math.PI) / 2;
      p.position.set(Math.cos(ang) * 0.06, 0, Math.sin(ang) * 0.06);
      p.rotation.z = -Math.PI / 2;
      p.rotation.y = -ang;
      star.add(p);
    }
    const center = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 0.012, 10), steelMat);
    star.add(center);
    star.name = 'spinner';
    g.add(star);
    g.rotation.set(0.35, 0.2, 0.1);
    g.position.set(0.24, -0.2, -0.48);
  } else if (weaponId === 'matchlock') {
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.03, 0.92, 8), steelMat);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(0, 0.03, -0.5);
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.064, 0.075, 0.72), darkWood);
    body.position.set(0, -0.01, -0.25);
    for (const z of [-0.15, -0.42, -0.68]) {
      const band = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.082, 0.032), brassMat);
      band.position.set(0, 0.005, z);
      g.add(band);
    }
    const wick = new THREE.Mesh(new THREE.SphereGeometry(0.016, 6, 6), glowMat);
    wick.position.set(0.045, 0.045, -0.08);
    g.add(barrel, body, wick);
    g.position.set(0.25, -0.25, -0.3);
  } else if (weaponId === 'crossbow' || weaponId === 'repeater') {
    const isRep = weaponId === 'repeater';
    const stock = new THREE.Mesh(new THREE.BoxGeometry(0.072, 0.082, isRep ? 0.62 : 0.74), woodMat);
    stock.position.set(0, -0.01, -0.28);

    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.022, 0.6), brassMat);
    rail.position.set(0, 0.036, -0.32);

    // Forged steel crossbow prod arms
    const prodL = new THREE.Mesh(new THREE.BoxGeometry(isRep ? 0.26 : 0.36, 0.024, 0.038), steelMat);
    prodL.position.set(isRep ? -0.14 : -0.19, 0.025, -0.55);
    prodL.rotation.y = 0.24;
    const prodR = prodL.clone();
    prodR.position.x = -prodL.position.x;
    prodR.rotation.y = -0.24;

    // Taut string
    const strL = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, isRep ? 0.3 : 0.42, 6), new THREE.MeshBasicMaterial({ color: 0xe8dec8 }));
    strL.rotation.z = Math.PI / 2;
    strL.rotation.y = -0.52;
    strL.position.set(isRep ? -0.12 : -0.16, 0.032, -0.44);
    const strR = strL.clone();
    strR.position.x = -strL.position.x;
    strR.rotation.y = 0.52;

    // Loaded quarrel bolt
    const bolt = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.009, 0.44, 6), darkWood);
    bolt.rotation.x = Math.PI / 2;
    bolt.position.set(0, 0.048, -0.44);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.022, 0.075, 4), brightSteel);
    tip.rotation.x = -Math.PI / 2;
    tip.position.set(0, 0.048, -0.68);

    if (isRep) {
      const hop = new THREE.Mesh(new THREE.BoxGeometry(0.068, 0.085, 0.22), darkWood);
      hop.position.set(0, 0.078, -0.24);
      g.add(hop);
    }

    g.add(stock, rail, prodL, prodR, strL, strR, bolt, tip);
    g.position.set(0.22, -0.23, -0.32);
  } else if (weaponId === 'halberd') {
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.024, 1.35, 8), woodMat);
    shaft.position.set(0, 0.15, 0);
    const spike = new THREE.Mesh(new THREE.ConeGeometry(0.028, 0.38, 4), brightSteel);
    spike.position.set(0, 0.98, 0);
    const axe = new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.28, 0.25), brightSteel);
    axe.position.set(0, 0.68, -0.12);
    const hook = new THREE.Mesh(new THREE.ConeGeometry(0.024, 0.2, 4), steelMat);
    hook.rotation.x = Math.PI / 2;
    hook.position.set(0, 0.68, 0.1);
    const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 0.16, 8), brassMat);
    collar.position.set(0, 0.68, 0);
    // Iconic Uri gold-and-red halberd tassel
    const tasselGold = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.14, 8), new THREE.MeshStandardMaterial({ color: 0xf2c629, roughness: 0.6 }));
    tasselGold.position.set(0, 0.54, 0);
    const tasselRed = new THREE.Mesh(new THREE.TorusGeometry(0.035, 0.014, 6, 10), crimsonMat);
    tasselRed.rotation.x = Math.PI / 2;
    tasselRed.position.set(0, 0.6, 0);

    g.add(shaft, spike, axe, hook, collar, tasselGold, tasselRed);
    g.rotation.set(-0.34, -0.22, 0.22);
    g.position.set(0.36, -0.42, -0.56);
  } else if (weaponId === 'firepot') {
    const pot = new THREE.Mesh(new THREE.SphereGeometry(0.095, 12, 10), new THREE.MeshStandardMaterial({ color: 0x8c4727, roughness: 0.85 }));
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.055, 0.06, 10), new THREE.MeshStandardMaterial({ color: 0x6e361c, roughness: 0.85 }));
    neck.position.y = 0.095;
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.038, 0.095, 8), glowMat);
    flame.position.y = 0.165;
    flame.name = 'spark';
    g.add(pot, neck, flame);
    g.position.set(0.26, -0.24, -0.46);
  } else if (weaponId === 'javelin') {
    const bronzeMat = new THREE.MeshStandardMaterial({ color: 0xdba34b, metalness: 0.86, roughness: 0.24 });
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.016, 1.35, 8), woodMat);
    shaft.rotation.x = Math.PI / 2;
    shaft.position.set(0, 0.02, -0.35);
    const gripWrap = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.24, 8), crimsonMat);
    gripWrap.rotation.x = Math.PI / 2;
    gripWrap.position.set(0, 0.02, -0.05);
    const socket = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.016, 0.12, 8), bronzeMat);
    socket.rotation.x = Math.PI / 2;
    socket.position.set(0, 0.02, -1.0);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.036, 0.24, 4), bronzeMat);
    tip.rotation.x = -Math.PI / 2;
    tip.position.set(0, 0.02, -1.16);
    g.add(shaft, gripWrap, socket, tip);
    g.rotation.set(0.06, 0.08, 0);
    g.position.set(0.27, -0.2, -0.25);
  } else if (weaponId === 'xiphos') {
    const bronzeMat = new THREE.MeshStandardMaterial({ color: 0xe3ac52, metalness: 0.88, roughness: 0.22 });
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.016, 0.66, 0.068), bronzeMat);
    blade.position.set(0, 0.34, 0);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.036, 0.16, 4), bronzeMat);
    tip.position.set(0, 0.74, 0);
    const guard = new THREE.Mesh(new THREE.BoxGeometry(0.036, 0.036, 0.18), brassMat);
    guard.position.set(0, 0.01, 0);
    const hilt = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.024, 0.22, 8), darkWood);
    hilt.position.set(0, -0.12, 0);
    const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.036, 8, 8), brassMat);
    pommel.position.set(0, -0.24, 0);
    g.add(blade, tip, guard, hilt, pommel);
    g.rotation.set(-0.38, -0.26, 0.26);
    g.position.set(0.32, -0.32, -0.52);
  } else if (weaponId === 'throwing_axe') {
    const haft = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.022, 0.56, 8), woodMat);
    haft.position.set(0, 0.06, 0);
    const wrap = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.024, 0.16, 8), darkWood);
    wrap.position.set(0, -0.14, 0);
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.022, 0.14, 0.16), steelMat);
    head.position.set(0, 0.28, -0.06);
    const beard = new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.22, 0.12), brightSteel);
    beard.position.set(0, 0.23, -0.15);
    g.add(haft, wrap, head, beard);
    g.rotation.set(0.28, -0.18, 0.18);
    g.position.set(0.28, -0.26, -0.48);
  } else if (weaponId === 'viking_sword') {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.016, 0.88, 0.064), brightSteel);
    blade.position.set(0, 0.44, 0);
    const fuller = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.72, 0.02), steelMat);
    fuller.position.set(0, 0.42, 0);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.034, 0.14, 4), brightSteel);
    tip.position.set(0, 0.94, 0);
    const guard = new THREE.Mesh(new THREE.BoxGeometry(0.036, 0.036, 0.22), steelMat);
    guard.position.set(0, 0.0, 0);
    const hilt = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.026, 0.22, 8), darkWood);
    hilt.position.set(0, -0.12, 0);
    const pommel = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.055, 0.1), brassMat);
    pommel.position.set(0, -0.24, 0);
    g.add(blade, fuller, tip, guard, hilt, pommel);
    g.rotation.set(-0.34, -0.24, 0.24);
    g.position.set(0.32, -0.34, -0.52);
  } else if (weaponId === 'mosin_scoped') {
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.017, 0.02, 0.96, 8), steelMat);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(0, 0.028, -0.56);
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.056, 0.072, 0.78), woodMat);
    body.position.set(0, -0.008, -0.26);
    const bolt = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.09, 6), brightSteel);
    bolt.rotation.z = Math.PI / 2;
    bolt.position.set(0.05, 0.02, -0.06);
    // PU Telescopic Sight
    const scope = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.025, 0.38, 12), steelMat);
    scope.rotation.x = Math.PI / 2;
    scope.position.set(0, 0.082, -0.18);
    const mount = new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.048, 0.12), steelMat);
    mount.position.set(0, 0.052, -0.16);
    const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.019, 0.019, 0.01, 12), new THREE.MeshBasicMaterial({ color: 0x9be2ff }));
    lens.rotation.x = Math.PI / 2;
    lens.position.set(0, 0.082, 0.015);
    const stock = new THREE.Mesh(new THREE.BoxGeometry(0.052, 0.11, 0.34), woodMat);
    stock.position.set(0, -0.048, 0.2);
    stock.rotation.x = 0.12;
    g.add(barrel, body, bolt, scope, mount, lens, stock);
    g.position.set(0.24, -0.24, -0.32);
  } else if (weaponId === 'sten_smg') {
    // Iconic tubular Sten Mk II with side-mounted horizontal magazine & skeletal wire stock
    const receiver = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 0.42, 12), steelMat);
    receiver.rotation.x = Math.PI / 2;
    receiver.position.set(0, 0.01, -0.16);
    const shroud = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.28, 12), steelMat);
    shroud.rotation.x = Math.PI / 2;
    shroud.position.set(0, 0.01, -0.48);
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.14, 8), steelMat);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(0, 0.01, -0.66);
    // Horizontal Left-Side Magazine (signature Sten silhouette!)
    const sideMag = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.028, 0.046), steelMat);
    sideMag.position.set(-0.14, 0.01, -0.24);
    const stockBar = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.34, 8), steelMat);
    stockBar.rotation.x = Math.PI / 2;
    stockBar.position.set(0, -0.02, 0.18);
    const grip = new THREE.Mesh(new THREE.BoxGeometry(0.036, 0.13, 0.05), darkWood);
    grip.position.set(0, -0.08, 0.05);
    grip.rotation.x = 0.22;
    g.add(receiver, shroud, barrel, sideMag, stockBar, grip);
    g.position.set(0.24, -0.22, -0.34);
  } else if (weaponId === 'heavy_pistol') {
    const slide = new THREE.Mesh(new THREE.BoxGeometry(0.048, 0.068, 0.34), steelMat);
    slide.position.set(0, 0.035, -0.22);
    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.044, 0.044, 0.28), darkWood);
    frame.position.set(0, -0.01, -0.18);
    const sight = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.02, 0.02), brightSteel);
    sight.position.set(0, 0.075, -0.37);
    const grip = new THREE.Mesh(new THREE.BoxGeometry(0.042, 0.15, 0.068), darkWood);
    grip.position.set(0, -0.09, -0.05);
    grip.rotation.x = 0.26;
    g.add(slide, frame, sight, grip);
    g.position.set(0.23, -0.22, -0.36);
  } else if (weaponId === 'combat_knife') {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.34, 0.045), brightSteel);
    blade.position.set(0, 0.18, 0);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.024, 0.1, 4), brightSteel);
    tip.position.set(0, 0.39, 0);
    const guard = new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.022, 0.11), steelMat);
    guard.position.set(0, 0.01, 0);
    const hilt = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.022, 0.16, 8), darkWood);
    hilt.position.set(0, -0.08, 0);
    g.add(blade, tip, guard, hilt);
    g.rotation.set(-0.42, -0.28, 0.32);
    g.position.set(0.28, -0.26, -0.48);
  } else if (weaponId === 'soviet_smg') {
    // PPSh-41 with ventilated shroud, drum magazine & birch stock
    const shroud = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.028, 0.56, 10), steelMat);
    shroud.rotation.x = Math.PI / 2;
    shroud.position.set(0, 0.024, -0.42);
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.056, 0.068, 0.36), woodMat);
    body.position.set(0, -0.014, -0.08);
    const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.095, 0.095, 0.052, 14), steelMat);
    drum.rotation.x = Math.PI / 2;
    drum.position.set(0, -0.085, -0.26);
    const stock = new THREE.Mesh(new THREE.BoxGeometry(0.052, 0.11, 0.32), woodMat);
    stock.position.set(0, -0.05, 0.22);
    stock.rotation.x = 0.14;
    g.add(shroud, body, drum, stock);
    g.position.set(0.24, -0.23, -0.34);
  } else if (weaponId === 'soviet_pistol' || weaponId === 'tibet_pistol') {
    const slide = new THREE.Mesh(new THREE.BoxGeometry(0.044, 0.064, 0.3), steelMat);
    slide.position.set(0, 0.032, -0.2);
    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.24), darkWood);
    frame.position.set(0, -0.01, -0.16);
    const sight = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.018, 0.018), brightSteel);
    sight.position.set(0, 0.07, -0.34);
    const grip = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.14, 0.064), weaponId === 'soviet_pistol' ? crimsonMat : woodMat);
    grip.position.set(0, -0.085, -0.04);
    grip.rotation.x = 0.26;
    g.add(slide, frame, sight, grip);
    g.position.set(0.23, -0.22, -0.36);
  } else if (weaponId === 'khampa_rifle') {
    // Bolt-action rifle with clean iron sights (front blade + rear notch)
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.017, 0.02, 0.98, 8), steelMat);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(0, 0.028, -0.58);
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.056, 0.072, 0.8), woodMat);
    body.position.set(0, -0.008, -0.26);
    const bolt = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.09, 6), brightSteel);
    bolt.rotation.z = Math.PI / 2;
    bolt.position.set(0.048, 0.022, -0.06);
    const frontSight = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.034, 0.018), steelMat);
    frontSight.position.set(0, 0.058, -1.04);
    const rearSight = new THREE.Mesh(new THREE.BoxGeometry(0.034, 0.024, 0.02), steelMat);
    rearSight.position.set(0, 0.052, -0.28);
    const stock = new THREE.Mesh(new THREE.BoxGeometry(0.052, 0.11, 0.34), woodMat);
    stock.position.set(0, -0.048, 0.2);
    stock.rotation.x = 0.12;
    g.add(barrel, body, bolt, frontSight, rearSight, stock);
    g.position.set(0.24, -0.24, -0.32);
  } else if (weaponId === 'tibet_bow') {
    // Ornate Tibetan recurve horsebow with gold tips & crimson fletched arrow
    const bowCurve = new THREE.Mesh(new THREE.TorusGeometry(0.46, 0.018, 8, 22, Math.PI * 0.9), crimsonMat);
    bowCurve.rotation.z = -Math.PI * 0.45;
    bowCurve.position.set(0, 0.06, -0.22);
    const stringMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, 0.86, 6), new THREE.MeshBasicMaterial({ color: 0xf4e8d1 }));
    stringMesh.position.set(0, 0.06, 0.03);
    const arrowShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.72, 6), woodMat);
    arrowShaft.rotation.x = Math.PI / 2;
    arrowShaft.position.set(0.02, 0.02, -0.24);
    const arrowTip = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.07, 4), brassMat);
    arrowTip.rotation.x = -Math.PI / 2;
    arrowTip.position.set(0.02, 0.02, -0.62);
    const fletch = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.004, 0.1), brassMat);
    fletch.position.set(0.02, 0.02, 0.07);
    g.add(bowCurve, stringMesh, arrowShaft, arrowTip, fletch);
    g.position.set(0.25, -0.18, -0.45);
  } else if (weaponId === 'tibet_sword') {
    // Royal Tibetan broadsword with gilt guard & turquoise-studded pommel
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.016, 0.86, 0.06), brightSteel);
    blade.position.set(0, 0.44, 0);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.032, 0.14, 4), brightSteel);
    tip.position.set(0, 0.93, 0);
    const guard = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.2), brassMat);
    guard.position.set(0, 0.01, 0);
    const hilt = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.026, 0.24, 8), crimsonMat);
    hilt.position.set(0, -0.12, 0);
    const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.042, 8, 8), brassMat);
    pommel.position.set(0, -0.26, 0);
    g.add(blade, tip, guard, hilt, pommel);
    g.rotation.set(-0.34, -0.24, 0.24);
    g.position.set(0.32, -0.34, -0.52);
  }

  g.userData.basePos = g.position.clone();
  g.userData.baseRot = g.rotation.clone();
  return g;
}
