import * as THREE from 'three';

const ERA_PALETTES = {
  west: {
    skin: 0xe2b18c,
    mShirt: [0xddd2bd, 0x6b5842, 0x454d58, 0x7d4c32],
    mPants: [0x3b2d22, 0x2c2b2e, 0x523f2c],
    fDress: [0x8c3b3b, 0x3b5c7a, 0x5d6e47, 0x7a5138, 0x593c66],
    apron: 0xefe7d6,
    hair: [0x2b1d14, 0x5c361e, 0x8f6b3e, 0x1b1715]
  },
  japan: {
    skin: 0xe8bfa0,
    mShirt: [0x3b4858, 0x52463a, 0x2c3640, 0x635542],
    mPants: [0x262b33, 0x3a322a],
    fDress: [0xb84048, 0x3b6e82, 0x6e4782, 0x457552, 0xc97b38],
    apron: 0xf0e4d0,
    hair: [0x141316]
  },
  swiss: {
    skin: 0xe6b996,
    mShirt: [0x6e5b44, 0x4c5942, 0x7a4236, 0x54504a],
    mPants: [0x3c2e22, 0x2e2c2a],
    fDress: [0x7c3434, 0x365272, 0x4c6b42, 0x6b4c32],
    apron: 0xefe9db,
    hair: [0x54341e, 0x8f6b36, 0x332216, 0xc49c48]
  },
  greece: {
    skin: 0xdca780,
    mShirt: [0xede6d6, 0xc4b08e, 0x8f7254, 0x45688a],
    mPants: [0xdca780],
    fDress: [0xf2ece0, 0xd49c4c, 0x407a9c, 0x9c3e36, 0x688052],
    apron: 0xe8d9b8,
    hair: [0x1d1714, 0x3d281a]
  },
  scandinavia: {
    skin: 0xebc2a2,
    mShirt: [0x5c4736, 0x3b4e5e, 0x665442, 0x4f4a44],
    mPants: [0x362a20, 0x2b2928],
    fDress: [0x8c352e, 0x2e587a, 0x4c6e46, 0x7d5a34, 0x6e3d52],
    apron: 0xd9ccb2,
    hair: [0xe6c86e, 0xd4a94e, 0xb85828, 0x6e4c2a]
  },
  normandy: {
    skin: 0xe4b898,
    mShirt: [0x4b535e, 0x5e5446, 0x3a3e45, 0x6e6556],
    mPants: [0x2e3136, 0x3a342c],
    fDress: [0x4c5e75, 0x78484c, 0x4f6652, 0x6b5c49, 0x3e3b46],
    apron: 0xeae5da,
    hair: [0x362418, 0x63422a, 0x9c9890, 0x1e1a18]
  },
  soviet: {
    skin: 0xe3b99c,
    mShirt: [0x4d5258, 0x5c5248, 0x3c444d, 0x635f58],
    mPants: [0x2b2e33, 0x363432],
    fDress: [0x6e3e44, 0x3f5870, 0x546952, 0x785b42, 0x4d465c],
    apron: 0xdcd7cc,
    hair: [0x3d291c, 0x705032, 0xb0aca4, 0x221c18]
  },
  tibet: {
    skin: 0xd49c76,
    mShirt: [0x7a2424, 0x593a28, 0x662226, 0x4c3c30],
    mPants: [0x382820, 0x2d2420],
    fDress: [0x28262b, 0x302930, 0x2a2d36],
    apron: 0xd9662b,
    hair: [0x161414]
  },
  aztec: {
    skin: 0xbd7f54,
    mShirt: [0xefe5ce, 0xc99c52, 0x458074, 0x9c382c],
    mPants: [0xbd7f54],
    fDress: [0xf2ead6, 0x2a8c7c, 0xb8382c, 0xd49a38, 0x526b94],
    apron: 0xe6d6b0,
    hair: [0x141212]
  }
};

/**
 * Creates a non-combatant period bystander (man or woman) with period dress,
 * hair/headwear, optional role prop, breathing/looking idle motion, and solid body.
 * Designed cleanly so Stage 13 can add living reactions (flee/crouch/greet/fight back/30 HP)
 * without changing any level file.
 */
export function spawnBystanders(scene, collision, animated, era, specs) {
  const pal = ERA_PALETTES[era] || ERA_PALETTES.west;
  const list = [];

  for (let i = 0; i < specs.length; i++) {
    const sp = specs[i];
    const female = sp.gender === 'female';
    const root = new THREE.Group();
    const pos = sp.pos.clone();
    root.position.copy(pos);
    root.rotation.y = sp.yaw || 0;

    const skinMat = new THREE.MeshStandardMaterial({ color: pal.skin, roughness: 0.74 });
    const hairCol = sp.hairColor ?? pal.hair[i % pal.hair.length];
    const hairMat = new THREE.MeshStandardMaterial({ color: hairCol, roughness: 0.90 });
    const bootMat = new THREE.MeshStandardMaterial({ color: 0x2c1e15, roughness: 0.84 });
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x15100c });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xe8b842, metalness: 0.82, roughness: 0.25 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf2ede0, roughness: 0.82 });
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x5c3a22, roughness: 0.84 });

    let torsoCol = sp.clothColor ?? (female ? pal.fDress[i % pal.fDress.length] : pal.mShirt[i % pal.mShirt.length]);
    let legsCol = female ? torsoCol : pal.mPants[i % pal.mPants.length];
    if (sp.role === 'orthodox_priest') { torsoCol = 0x151518; legsCol = 0x151518; }
    else if (sp.role === 'prisoner') { torsoCol = 0x6c7075; legsCol = 0x5c6066; }
    else if (sp.role === 'tibetan_nun') { torsoCol = 0x701a1e; legsCol = 0x701a1e; }
    else if (sp.role === 'pilot') { torsoCol = 0x595e42; legsCol = 0x484d38; }
    else if (sp.role === 'baker') { torsoCol = 0xf0ece0; }
    else if (sp.role === 'priest' || sp.role === 'preacher') { torsoCol = 0x1e1d20; legsCol = 0x1a191c; }

    const torsoMat = new THREE.MeshStandardMaterial({ color: torsoCol, roughness: 0.82 });
    const legsMat = new THREE.MeshStandardMaterial({ color: legsCol, roughness: 0.84 });
    const apronMat = new THREE.MeshStandardMaterial({ color: sp.apronColor ?? pal.apron, roughness: 0.86 });

    const legGeo = new THREE.CylinderGeometry(female ? 0.085 : 0.098, female ? 0.075 : 0.086, 0.78, 7);
    const legL = new THREE.Mesh(legGeo, legsMat);
    legL.position.set(-0.13, sp.seated ? 0.34 : 0.39, sp.seated ? 0.14 : 0);
    if (sp.seated) legL.rotation.x = -0.85;
    const legR = legL.clone();
    legR.position.x = 0.13;

    const torsoW = female ? 0.44 : 0.52;
    const torsoY = sp.seated ? 0.84 : 1.12;
    const torso = new THREE.Mesh(new THREE.BoxGeometry(torsoW, 0.68, 0.28), torsoMat);
    torso.position.set(0, torsoY, 0);
    torso.castShadow = true;

    const armGeo = new THREE.CylinderGeometry(female ? 0.064 : 0.076, female ? 0.056 : 0.068, 0.58, 7);
    const armL = new THREE.Mesh(armGeo, sp.role === 'tibetan_woman' ? new THREE.MeshStandardMaterial({ color: 0xd93838, roughness: 0.78 }) : torsoMat);
    armL.position.set(-(torsoW * 0.5 + 0.08), torsoY, 0.03);
    armL.rotation.z = 0.12;
    const armR = new THREE.Mesh(armGeo, sp.role === 'tibetan_woman' ? new THREE.MeshStandardMaterial({ color: 0xd93838, roughness: 0.78 }) : torsoMat);
    armR.position.set(torsoW * 0.5 + 0.08, torsoY, 0.06);
    armR.rotation.z = -0.12;

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.195, 10, 9), skinMat);
    head.position.set(0, torsoY + 0.54, 0);
    head.castShadow = true;
    const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.022, 5, 5), eyeMat);
    eyeL.position.set(-0.065, 0.025, 0.178);
    const eyeR = eyeL.clone();
    eyeR.position.x = 0.065;
    head.add(eyeL, eyeR);

    root.add(legL, legR, torso, armL, armR, head);

    // Period Women's Dress: long skirt, apron / striped Tibetan apron, shawl, Norse twin brooches, plaits/bun/headscarf!
    if (female && sp.role !== 'tibetan_nun') {
      const skirt = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.42, 0.86, 10), torsoMat);
      skirt.position.set(0, sp.seated ? 0.44 : 0.50, 0);
      root.add(skirt);

      // Front apron (colorful striped pangden apron in Tibet; pale linen apron elsewhere)
      if (era === 'tibet') {
        for (let st = 0; st < 4; st++) {
          const band = new THREE.Mesh(
            new THREE.BoxGeometry(0.36, 0.14, 0.06),
            new THREE.MeshStandardMaterial({ color: [0xd93829, 0xe8b832, 0x267856, 0x2c568c][st], roughness: 0.8 })
          );
          band.position.set(0, 0.78 - st * 0.15, 0.24 + st * 0.02);
          root.add(band);
        }
      } else if (era !== 'greece') {
        const apron = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.66, 0.06), apronMat);
        apron.position.set(0, sp.seated ? 0.48 : 0.58, 0.21);
        root.add(apron);
      }

      // Period shawl or Norse twin oval brooches
      if (era === 'scandinavia') {
        for (const s of [-1, 1]) {
          const br = new THREE.Mesh(new THREE.SphereGeometry(0.042, 7, 6), goldMat);
          br.scale.set(1.0, 1.35, 0.55);
          br.position.set(s * 0.12, torsoY + 0.14, 0.15);
          root.add(br);
        }
      } else if (era === 'normandy' || era === 'soviet' || era === 'swiss') {
        const shawl = new THREE.Mesh(new THREE.ConeGeometry(0.36, 0.34, 8), apronMat);
        shawl.position.set(0, torsoY + 0.24, -0.02);
        root.add(shawl);
      }

      // Hair & Headwear: bun, twin plaits, or headscarf
      const hairCap = new THREE.Mesh(new THREE.SphereGeometry(0.205, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.58), hairMat);
      hairCap.position.set(0, 0.05, -0.02);
      head.add(hairCap);
      if (era === 'soviet' || era === 'normandy') {
        // Traditional headscarf / kerchief
        const scarf = new THREE.Mesh(new THREE.SphereGeometry(0.218, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.65), apronMat);
        scarf.position.set(0, 0.05, -0.03);
        head.add(scarf);
      } else if (i % 2 === 0) {
        // Neat hair bun
        const bun = new THREE.Mesh(new THREE.SphereGeometry(0.095, 8, 7), hairMat);
        bun.position.set(0, 0.04, -0.22);
        head.add(bun);
      } else {
        // Twin long plaits
        for (const s of [-1, 1]) {
          const plait = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.026, 0.44, 6), hairMat);
          plait.position.set(s * 0.15, -0.14, -0.06);
          head.add(plait);
        }
      }
    } else if (sp.role === 'tibetan_nun') {
      // Shaved head, wine-red nun's robe over bright yellow/red shirt!
      const robe = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.42, 0.82, 10), torsoMat);
      robe.position.set(0, 0.48, 0);
      const shirtCol = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.24, 0.30), new THREE.MeshStandardMaterial({ color: i % 2 === 0 ? 0xe8b824 : 0xc92a24, roughness: 0.78 }));
      shirtCol.position.set(0, torsoY + 0.22, 0.01);
      root.add(robe, shirtCol);
    } else if (sp.role === 'orthodox_priest') {
      // Item 42: Old Orthodox priest in the closed Soviet church!
      // Black cassock/habit embroidered with white three-barred Orthodox crosses, waist-length white beard,
      // black kamilavka cap with small cross, lit glowing taper in one hand & other hand raised in blessing!
      const cassock = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.44, 1.05, 12), torsoMat);
      cassock.position.set(0, 0.56, 0);
      root.add(cassock);
      // Embroidered white three-barred Orthodox cross on chest stole (epitrachelion)
      const addThreeBarCross = (cx, cy, cz, sc = 1) => {
        const v = new THREE.Mesh(new THREE.BoxGeometry(0.022 * sc, 0.22 * sc, 0.02), whiteMat);
        v.position.set(cx, cy, cz);
        const b1 = new THREE.Mesh(new THREE.BoxGeometry(0.075 * sc, 0.018 * sc, 0.02), whiteMat);
        b1.position.set(cx, cy + 0.065 * sc, cz);
        const b2 = new THREE.Mesh(new THREE.BoxGeometry(0.13 * sc, 0.02 * sc, 0.02), whiteMat);
        b2.position.set(cx, cy + 0.015 * sc, cz);
        const b3 = new THREE.Mesh(new THREE.BoxGeometry(0.08 * sc, 0.018 * sc, 0.02), whiteMat);
        b3.position.set(cx, cy - 0.055 * sc, cz);
        b3.rotation.z = 0.32;
        root.add(v, b1, b2, b3);
      };
      addThreeBarCross(0, 1.24, 0.16, 1.0);
      addThreeBarCross(0, 0.92, 0.26, 0.82);

      // Waist-length flowing white beard & hair
      const beard = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.62, 10), whiteMat);
      beard.rotation.x = Math.PI;
      beard.position.set(0, -0.34, 0.12);
      const hairBack = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.28, 0.12), whiteMat);
      hairBack.position.set(0, -0.05, -0.15);
      // Black priest cap (kamilavka) with small white cross
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.20, 0.22, 12), torsoMat);
      cap.position.y = 0.21;
      const capCrossV = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.08, 0.02), whiteMat);
      capCrossV.position.set(0, 0.22, 0.205);
      const capCrossH = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.018, 0.02), whiteMat);
      capCrossH.position.set(0, 0.235, 0.205);
      head.add(beard, hairBack, cap, capCrossV, capCrossH);

      // Left hand holds a lit beeswax taper with warm glowing flame; right hand raised in blessing!
      armL.rotation.x = -0.85;
      const taper = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.016, 0.34, 6), goldMat);
      taper.position.set(0, -0.26, 0.14);
      taper.rotation.x = 0.85;
      const flame = new THREE.Mesh(new THREE.ConeGeometry(0.026, 0.09, 6), new THREE.MeshBasicMaterial({ color: 0xffc845 }));
      flame.position.set(0, -0.16, 0.32);
      const cLight = new THREE.PointLight(0xffb84d, 2.2, 6);
      cLight.position.set(0, -0.14, 0.36);
      armL.add(taper, flame, cLight);

      armR.rotation.x = -1.25;
      armR.rotation.z = -0.18;
    } else {
      // Period Men's Hair / Hat / Role details
      const hairCap = new THREE.Mesh(new THREE.SphereGeometry(0.202, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.56), hairMat);
      hairCap.position.set(0, 0.05, -0.02);
      head.add(hairCap);
      if (era === 'west' && sp.role !== 'preacher') {
        const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.34, 0.03, 12), bootMat);
        brim.position.y = 0.14;
        const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.19, 0.16, 10), bootMat);
        crown.position.y = 0.23;
        head.add(brim, crown);
      } else if (sp.role === 'khampa') {
        const hat = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.38, 0.04, 12), bootMat);
        hat.position.y = 0.15;
        const cr = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.2, 0.16, 10), bootMat);
        cr.position.y = 0.23;
        head.add(hat, cr);
      } else if (sp.role === 'baker') {
        const toque = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.16, 0.22, 10), whiteMat);
        toque.position.y = 0.22;
        head.add(toque);
      } else if (sp.role === 'pilot') {
        // Bandaged wounded glider pilot at Normandy start
        const bandage = new THREE.Mesh(new THREE.TorusGeometry(0.195, 0.036, 6, 14), whiteMat);
        bandage.rotation.x = Math.PI / 2 + 0.18;
        bandage.position.y = 0.08;
        head.add(bandage);
      }
      if (sp.role === 'oath_man') {
        // Rütli oath: right arm raised high!
        armR.rotation.x = -2.45;
      }
      if (sp.role === 'captive') {
        armL.rotation.x = 0.35;
        armR.rotation.x = 0.35;
      }
    }

    // Role props (jar on head, staff, lyre, distaff, conch, paddle, book)
    if (sp.prop === 'jar_head') {
      const jar = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.15, 0.32, 9), new THREE.MeshStandardMaterial({ color: 0xb85d38, roughness: 0.78 }));
      jar.position.set(0, 0.34, 0);
      head.add(jar);
    } else if (sp.prop === 'staff' || sp.prop === 'distaff') {
      const st = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.022, 1.55, 6), woodMat);
      st.position.set(0.05, -0.05, 0.16);
      armR.add(st);
    } else if (sp.prop === 'lyre') {
      const lyre = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.022, 6, 12, Math.PI * 1.4), goldMat);
      lyre.position.set(0, -0.18, 0.18);
      armL.add(lyre);
    } else if (sp.prop === 'conch') {
      const conch = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.26, 7), whiteMat);
      conch.rotation.x = -Math.PI / 2;
      conch.position.set(0, -0.18, 0.22);
      armR.rotation.x = -1.45;
      armR.add(conch);
    } else if (sp.prop === 'paddle') {
      const oar = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.024, 1.55, 6), woodMat);
      oar.position.set(0, -0.25, 0.22);
      oar.rotation.x = 0.45;
      armR.add(oar);
    } else if (sp.prop === 'tote') {
      const bag = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.28, 0.16), woodMat);
      bag.position.set(0, -0.34, 0.06);
      armR.add(bag);
    }

    scene.add(root);

    // Solid non-combatant body collider (skip collider if seated inside a canoe on water)
    const boxCollider = !sp.noCollider
      ? collision.addBox(pos.x, pos.y + 0.88, pos.z, 0.56, 1.76, 0.56, 'bystander')
      : null;

    const noFightRoles = new Set(['dalai_lama', 'orthodox_priest', 'pilgrim', 'prostrating_pilgrim', 'captive', 'pilot']);
    const phase = i * 1.37 + pos.x * 0.15;
    const isBoat = sp.role === 'canoe_paddler' || sp.role === 'boatman' || !!sp.noCollider;
    const strollable = !sp.seated && !isBoat && !noFightRoles.has(sp.role) && (i % 3 === 0);

    const entry = {
      mesh: root,
      root,
      homePos: pos.clone(),
      homeYaw: sp.yaw || 0,
      era,
      gender: female ? 'female' : 'male',
      role: sp.role || 'townsfolk',
      label: sp.label || sp.role || 'townsfolk',
      hp: 30,
      maxHp: 30,
      alive: true,
      seated: !!sp.seated,
      isBoat,
      strollable,
      noFight: noFightRoles.has(sp.role),
      willFightBack: !noFightRoles.has(sp.role) && (i % 4 === 0),
      foughtBack: false,
      state: 'busy', // 'busy' | 'flee' | 'crouch' | 'return' | 'hands_up'
      frightTimer: 0,
      fleeDir: new THREE.Vector3(1, 0, 0),
      greetCooldown: 0,
      phase,
      torsoY,
      boxCollider,
      parts: { legL, legR, armL, armR, torso, head },
      getHitMeshes() {
        if (!this.alive || !this.mesh.visible) return [];
        const out = [];
        this.mesh.traverse((o) => {
          if (o.isMesh) {
            o.userData.bystander = this;
            out.push(o);
          }
        });
        return out;
      },
      triggerFright(dangerPos) {
        if (!this.alive) return;
        const dx = this.mesh.position.x - dangerPos.x;
        const dz = this.mesh.position.z - dangerPos.z;
        const len = Math.hypot(dx, dz);
        if (len > 0.01) this.fleeDir.set(dx / len, 0, dz / len);
        else this.fleeDir.set(Math.sin(this.homeYaw) || 1, 0, Math.cos(this.homeYaw));
        this.state = this.isBoat || this.seated ? 'crouch' : 'flee';
        this.frightTimer = 7.5;
      },
      _moveSelf(col, dx, dz) {
        const saved = this.boxCollider;
        if (saved) { saved.minY = 9999; saved.maxY = 9999; }
        col.moveHorizontal(this.mesh.position, dx, dz, 0.42, this.mesh.position.y);
        this.mesh.position.y = col.getFloorHeight(this.mesh.position.x, this.mesh.position.z, this.mesh.position.y);
        if (saved) {
          saved.minX = this.mesh.position.x - 0.28; saved.maxX = this.mesh.position.x + 0.28;
          saved.minY = this.mesh.position.y;        saved.maxY = this.mesh.position.y + 1.76;
          saved.minZ = this.mesh.position.z - 0.28; saved.maxZ = this.mesh.position.z + 0.28;
        }
      },
      update(dt, t, playerPos, playerFwd, col, sound) {
        if (!this.alive) {
          this.mesh.rotation.x = Math.min(Math.PI * 0.48, this.mesh.rotation.x + dt * 4.5);
          return;
        }
        if (this.greetCooldown > 0) this.greetCooldown -= dt;
        const p = this.parts;

        // Check if player is aiming directly at this bystander within 18m -> hands up!
        let aimedAt = false;
        const toB = new THREE.Vector3().subVectors(this.mesh.position, playerPos);
        const distP = Math.hypot(toB.x, toB.z);
        if (distP > 0.8 && distP < 18 && playerFwd) {
          const toBDir = new THREE.Vector3(toB.x, 0, toB.z).normalize();
          const fwdH = new THREE.Vector3(playerFwd.x, 0, playerFwd.z).normalize();
          if (toBDir.dot(fwdH) > 0.985) aimedAt = true;
        }

        if (this.frightTimer > 0) {
          this.frightTimer -= dt;
          if (this.state === 'flee' && !this.isBoat) {
            const step = 4.6 * dt;
            this._moveSelf(col, this.fleeDir.x * step, this.fleeDir.z * step);
            this.mesh.rotation.y = Math.atan2(this.fleeDir.x, this.fleeDir.z);
            p.armL.rotation.x = -2.75;
            p.armR.rotation.x = -2.75;
            p.legL.rotation.x = Math.sin(t * 11 + this.phase) * 0.65;
            p.legR.rotation.x = -Math.sin(t * 11 + this.phase) * 0.65;
            if (this.frightTimer < 4.0) this.state = 'crouch';
          } else {
            // Crouch with hands over head!
            this.mesh.scale.y = 0.68;
            p.armL.rotation.x = -2.55;
            p.armR.rotation.x = -2.55;
          }
          if (this.frightTimer <= 0) {
            this.mesh.scale.y = 1.0;
            this.state = 'return';
          }
          return;
        }

        this.mesh.scale.y = 1.0;

        if (aimedAt) {
          this.state = 'hands_up';
          this.mesh.rotation.y = Math.atan2(playerPos.x - this.mesh.position.x, playerPos.z - this.mesh.position.z);
          p.armL.rotation.x = -2.85;
          p.armR.rotation.x = -2.85;
          return;
        }

        if (this.state === 'return') {
          const dx = this.homePos.x - this.mesh.position.x;
          const dz = this.homePos.z - this.mesh.position.z;
          const d = Math.hypot(dx, dz);
          if (d < 0.8) {
            this.state = 'busy';
            this.mesh.rotation.y = this.homeYaw;
          } else {
            const step = 2.6 * dt;
            this._moveSelf(col, (dx / d) * step, (dz / d) * step);
            this.mesh.rotation.y = Math.atan2(dx, dz);
            p.legL.rotation.x = Math.sin(t * 7 + this.phase) * 0.45;
            p.legR.rotation.x = -Math.sin(t * 7 + this.phase) * 0.45;
            p.armL.rotation.x = -Math.sin(t * 7 + this.phase) * 0.3;
            p.armR.rotation.x = Math.sin(t * 7 + this.phase) * 0.3;
            return;
          }
        }

        // Answer player when standing nearby peacefully!
        if (distP < 4.5 && !this.isBoat) {
          this.state = 'busy';
          this.mesh.rotation.y = Math.atan2(playerPos.x - this.mesh.position.x, playerPos.z - this.mesh.position.z);
          p.armR.rotation.x = -2.1 + Math.sin(t * 6.5) * 0.28; // friendly wave/nod
          p.head.rotation.x = Math.sin(t * 3.5) * 0.14;
          if (this.greetCooldown <= 0 && sound && typeof sound.speakVoice === 'function') {
            this.greetCooldown = 9.0;
            sound.speakVoice(this.era, 'greet');
          }
          return;
        }

        // Active Busy Pose for EVERY bystander (nobody is a statue!)
        this.state = 'busy';
        p.torso.position.y = this.torsoY + Math.sin(t * 2.1 + this.phase) * 0.018;
        p.head.rotation.y = Math.sin(t * 0.8 + this.phase) * 0.28;
        p.head.rotation.x = 0;

        if (this.isBoat) {
          p.armR.rotation.x = -0.5 + Math.sin(t * 2.8 + this.phase) * 0.42;
          p.armL.rotation.x = -0.4 - Math.sin(t * 2.8 + this.phase) * 0.25;
        } else if (this.role === 'smith' || this.role === 'builder' || this.role === 'mason') {
          p.armR.rotation.x = -1.1 + Math.abs(Math.sin(t * 5.2 + this.phase)) * 1.05; // hammering
        } else if (this.role === 'weaver' || this.role === 'dairywoman' || this.role === 'baker' || this.role === 'cook') {
          p.armL.rotation.x = -0.75 + Math.sin(t * 3.6 + this.phase) * 0.32;
          p.armR.rotation.x = -0.75 - Math.sin(t * 3.6 + this.phase) * 0.32; // scrubbing/churning/weaving
        } else if (this.role === 'orthodox_priest' || this.role === 'priest' || this.role === 'tibetan_nun' || this.role === 'pilgrim') {
          p.torso.rotation.x = Math.max(0, Math.sin(t * 1.1 + this.phase)) * 0.22; // gentle prayer bow
        } else if (this.seated) {
          p.armR.rotation.x = -0.55 - Math.max(0, Math.sin(t * 0.7 + this.phase)) * 0.65; // occasional drink
        } else if (this.role !== 'oath_man' && this.role !== 'captive') {
          if (this.strollable) {
            const off = Math.sin(t * 0.45 + this.phase) * 2.2;
            const tx = this.homePos.x + Math.cos(this.homeYaw) * off;
            const tz = this.homePos.z + Math.sin(this.homeYaw) * off;
            const dx = tx - this.mesh.position.x;
            const dz = tz - this.mesh.position.z;
            if (Math.hypot(dx, dz) > 0.08) {
              this._moveSelf(col, dx * Math.min(1, dt * 1.8), dz * Math.min(1, dt * 1.8));
              this.mesh.rotation.y = Math.atan2(dx, dz);
              p.legL.rotation.x = Math.sin(t * 5.5 + this.phase) * 0.32;
              p.legR.rotation.x = -Math.sin(t * 5.5 + this.phase) * 0.32;
            }
          }
          p.armL.rotation.x = -0.25 + Math.sin(t * 2.2 + this.phase) * 0.25;
          p.armR.rotation.x = -0.25 - Math.sin(t * 2.2 + this.phase) * 0.25;
        }
      }
    };
    root.userData.bystander = entry;
    list.push(entry);
  }
  return list;
}
