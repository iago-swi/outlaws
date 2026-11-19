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
  }

  g.userData.basePos = g.position.clone();
  g.userData.baseRot = g.rotation.clone();
  return g;
}
