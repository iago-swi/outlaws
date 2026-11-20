import * as THREE from 'three';

/**
 * Helper to create a solid visual box + exact AABB collider.
 */
export function addSolidBox(scene, collision, cx, cy, cz, sx, sy, sz, mat, tag = 'solid', castShadow = true) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), mat);
  mesh.position.set(cx, cy, cz);
  mesh.castShadow = castShadow;
  mesh.receiveShadow = true;
  scene.add(mesh);
  collision.addBox(cx, cy, cz, sx, sy, sz, tag);
  return mesh;
}

/**
 * Builds a single wall segment along either the X axis (axis='x', spanning x0..x1 at z=pos)
 * or Z axis (axis='z', spanning z0..z1 at x=pos), splitting geometrically around doors and windows.
 *
 * openings: array of {
 *   type: 'door' | 'window',
 *   offset: number,   // offset from wall center along the wall axis
 *   width: number,    // opening width (doors >= 1.8m)
 *   height?: number,  // door height (default 2.75)
 *   sill?: number,    // window sill height (default 0.95)
 *   top?: number      // window top height (default 2.25)
 * }
 */
export function buildSegmentedWall(scene, collision, opts) {
  const {
    axis, // 'x' (wall runs along X at fixed z) or 'z' (wall runs along Z at fixed x)
    center, // { x, z } of wall center
    baseY,
    length,
    height,
    thickness = 0.36,
    mat,
    openings = [],
    frameMat = null,
    tag = 'solid'
  } = opts;

  const halfL = length * 0.5;
  const sorted = [...openings].sort((a, b) => a.offset - b.offset);

  const emitBox = (u0, u1, y0, y1, boxTag = tag, boxMat = mat, thick = thickness) => {
    const du = u1 - u0;
    const dy = y1 - y0;
    if (du <= 0.05 || dy <= 0.05) return;
    const uc = (u0 + u1) * 0.5;
    const yc = baseY + (y0 + y1) * 0.5;
    if (axis === 'x') {
      addSolidBox(scene, collision, center.x + uc, yc, center.z, du, dy, thick, boxMat, boxTag);
    } else {
      addSolidBox(scene, collision, center.x, yc, center.z + uc, thick, dy, du, boxMat, boxTag);
    }
  };

  let cursor = -halfL;
  for (const op of sorted) {
    const hw = op.width * 0.5;
    const opStart = Math.max(-halfL, op.offset - hw);
    const opEnd = Math.min(halfL, op.offset + hw);
    if (opStart > cursor) {
      emitBox(cursor, opStart, 0, height);
    }
    if (op.type === 'door') {
      const dh = Math.min(height - 0.15, op.height || 2.8);
      if (height - dh > 0.08) {
        emitBox(opStart, opEnd, dh, height);
      }
      if (frameMat) {
        // Decorative door frame trim (non-narrowing)
        const postW = 0.1;
        emitBox(opStart - postW, opStart, 0, dh, tag, frameMat, thickness + 0.06);
        emitBox(opEnd, opEnd + postW, 0, dh, tag, frameMat, thickness + 0.06);
      }
    } else if (op.type === 'window') {
      const sill = op.sill ?? 0.98;
      const top = Math.min(height - 0.15, op.top ?? 2.3);
      emitBox(opStart, opEnd, 0, sill);
      if (height - top > 0.08) {
        emitBox(opStart, opEnd, top, height);
      }
      if (op.barred) {
        // Barred window: solid to bodies and bullets (tagged 'bars')
        const barCount = Math.max(2, Math.round(op.width / 0.24));
        const barMat = frameMat || new THREE.MeshStandardMaterial({ color: 0x26282b, metalness: 0.7, roughness: 0.4 });
        const barH = top - sill;
        for (let i = 1; i < barCount; i++) {
          const u = opStart + (opEnd - opStart) * (i / barCount);
          const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, barH, 6), barMat);
          if (axis === 'x') bar.position.set(center.x + u, baseY + sill + barH * 0.5, center.z);
          else bar.position.set(center.x, baseY + sill + barH * 0.5, center.z + u);
          scene.add(bar);
        }
        // Single thin collider tagged 'bars' inside window opening
        if (axis === 'x') {
          collision.addBox(center.x + (opStart + opEnd) * 0.5, baseY + sill + barH * 0.5, center.z, opEnd - opStart, barH, 0.16, 'bars');
        } else {
          collision.addBox(center.x, baseY + sill + barH * 0.5, center.z + (opStart + opEnd) * 0.5, 0.16, barH, opEnd - opStart, 'bars');
        }
      }
    }
    cursor = Math.max(cursor, opEnd);
  }
  if (cursor < halfL) {
    emitBox(cursor, halfL, 0, height);
  }
}

/**
 * Adds a floor-to-ceiling wall of iron bars (solid to BOTH bodies and bullets)
 * with optional open cell doors (>= 1.8m wide).
 */
export function buildBarredWall(scene, collision, opts) {
  const {
    axis,
    center,
    baseY,
    length,
    height,
    doors = [], // [{ offset, width }]
    barColor = 0x24262a
  } = opts;

  const barMat = new THREE.MeshStandardMaterial({ color: barColor, metalness: 0.78, roughness: 0.32 });
  const halfL = length * 0.5;
  const sorted = [...doors].sort((a, b) => a.offset - b.offset);

  const emitBars = (u0, u1) => {
    const du = u1 - u0;
    if (du <= 0.15) return;
    const count = Math.max(2, Math.floor(du / 0.22));
    for (let i = 0; i <= count; i++) {
      const u = u0 + (du * i) / count;
      const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, height, 6), barMat);
      if (axis === 'x') bar.position.set(center.x + u, baseY + height * 0.5, center.z);
      else bar.position.set(center.x, baseY + height * 0.5, center.z + u);
      bar.castShadow = true;
      scene.add(bar);
    }
    // Horizontal cross-bars
    for (const ry of [0.18, height * 0.5, height - 0.18]) {
      const rail = new THREE.Mesh(
        axis === 'x' ? new THREE.BoxGeometry(du, 0.07, 0.07) : new THREE.BoxGeometry(0.07, 0.07, du),
        barMat
      );
      if (axis === 'x') rail.position.set(center.x + (u0 + u1) * 0.5, baseY + ry, center.z);
      else rail.position.set(center.x, baseY + ry, center.z + (u0 + u1) * 0.5);
      scene.add(rail);
    }
    // Solid collider tagged 'bars' (blocks bodies AND bullets)
    if (axis === 'x') {
      collision.addBox(center.x + (u0 + u1) * 0.5, baseY + height * 0.5, center.z, du, height, 0.22, 'bars');
    } else {
      collision.addBox(center.x, baseY + height * 0.5, center.z + (u0 + u1) * 0.5, 0.22, height, du, 'bars');
    }
  };

  let cursor = -halfL;
  for (const d of sorted) {
    const hw = d.width * 0.5;
    const d0 = Math.max(-halfL, d.offset - hw);
    const d1 = Math.min(halfL, d.offset + hw);
    if (d0 > cursor) emitBars(cursor, d0);
    // Open barred door leaf swung inward at 90 degrees (pure visual on edge so doorway stays >= 1.8m clear)
    const leafW = Math.min(1.1, d.width * 0.55);
    const doorLeaf = new THREE.Mesh(
      axis === 'x' ? new THREE.BoxGeometry(0.06, height - 0.15, leafW) : new THREE.BoxGeometry(leafW, height - 0.15, 0.06),
      barMat
    );
    if (axis === 'x') doorLeaf.position.set(center.x + d0 + 0.03, baseY + (height - 0.15) * 0.5, center.z - leafW * 0.5);
    else doorLeaf.position.set(center.x - leafW * 0.5, baseY + (height - 0.15) * 0.5, center.z + d0 + 0.03);
    scene.add(doorLeaf);
    cursor = Math.max(cursor, d1);
  }
  if (cursor < halfL) emitBars(cursor, halfL);
}

/**
 * Adds climbable exterior steps (<= 0.42m per step) outside a doorway on sloping ground.
 */
export function buildExteriorSteps(scene, collision, x, z, dirX, dirZ, width, topY, groundY, mat) {
  const diff = topY - groundY;
  if (diff <= 0.35) return;
  const numSteps = Math.max(2, Math.ceil(diff / 0.36));
  const stepRise = diff / numSteps;
  const stepDepth = 0.65;
  for (let i = 0; i < numSteps; i++) {
    const sy = topY - stepRise * (i + 1) + stepRise * 0.5;
    const stepTop = topY - stepRise * i;
    const dist = (i + 0.5) * stepDepth;
    const sx = x + dirX * dist;
    const sz = z + dirZ * dist;
    const boxW = Math.abs(dirX) > 0.5 ? stepDepth : width;
    const boxD = Math.abs(dirZ) > 0.5 ? stepDepth : width;
    const h = Math.max(0.25, stepTop - groundY + 0.4);
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(boxW, h, boxD), mat);
    mesh.position.set(sx, stepTop - h * 0.5, sz);
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    scene.add(mesh);
    collision.addWalkable(sx, sz, boxW + 0.18, boxD + 0.18, stepTop);
  }
}

/**
 * Builds a complete hollow enterable room with:
 * - Solid walkable floor + plinth down into terrain
 * - Ceiling slab (and optional pitched/flat roof)
 * - Four segmented walls with real open doors (>= 1.9m) and open windows
 * - Exterior steps at every door if floor sits above surrounding terrain
 * - Optional interior warm light
 */
export function buildHollowRoom(scene, collision, opts) {
  const {
    cx, cz,
    w, d, h,
    floorY = null,
    wallMat,
    floorMat,
    roofMat = null,
    roofStyle = 'flat', // 'flat' | 'gable' | 'hip' | 'parapet' | 'none'
    roofColor = 0x3b2c20,
    thickness = 0.38,
    // openings per side: north (-Z), south (+Z), west (-X), east (+X)
    north = [],
    south = [],
    west = [],
    east = [],
    stepMat = null,
    interiorLight = null, // { color, intensity, distance }
    parapetColor = null
  } = opts;

  // Determine floor height: highest terrain corner or provided floorY
  const gCenter = collision.heightFn(cx, cz);
  const gMax = Math.max(
    gCenter,
    collision.heightFn(cx - w * 0.45, cz - d * 0.45),
    collision.heightFn(cx + w * 0.45, cz - d * 0.45),
    collision.heightFn(cx - w * 0.45, cz + d * 0.45),
    collision.heightFn(cx + w * 0.45, cz + d * 0.45)
  );
  const fy = floorY !== null ? floorY : Math.max(gCenter + 0.12, gMax + 0.08);

  // Solid foundation + floor slab
  const foundH = Math.max(0.4, fy - (collision.heightFn(cx, cz) - 2.2));
  const floorMesh = new THREE.Mesh(new THREE.BoxGeometry(w, foundH, d), floorMat);
  floorMesh.position.set(cx, fy - foundH * 0.5, cz);
  floorMesh.receiveShadow = true;
  scene.add(floorMesh);
  collision.addWalkable(cx, cz, w + 0.25, d + 0.25, fy);

  // 4 hollow walls
  buildSegmentedWall(scene, collision, {
    axis: 'x', center: { x: cx, z: cz - d * 0.5 + thickness * 0.5 },
    baseY: fy, length: w, height: h, thickness, mat: wallMat, openings: north
  });
  buildSegmentedWall(scene, collision, {
    axis: 'x', center: { x: cx, z: cz + d * 0.5 - thickness * 0.5 },
    baseY: fy, length: w, height: h, thickness, mat: wallMat, openings: south
  });
  buildSegmentedWall(scene, collision, {
    axis: 'z', center: { x: cx - w * 0.5 + thickness * 0.5, z: cz },
    baseY: fy, length: d - thickness * 2, height: h, thickness, mat: wallMat, openings: west
  });
  buildSegmentedWall(scene, collision, {
    axis: 'z', center: { x: cx + w * 0.5 - thickness * 0.5, z: cz },
    baseY: fy, length: d - thickness * 2, height: h, thickness, mat: wallMat, openings: east
  });

  // Exterior steps at every doorway if needed
  const sMat = stepMat || floorMat;
  const checkDoors = (arr, side) => {
    for (const op of arr) {
      if (op.type !== 'door') continue;
      let dx = 0, dz = 0, sx = cx, sz = cz;
      if (side === 'north') { sx = cx + op.offset; sz = cz - d * 0.5; dz = -1; }
      else if (side === 'south') { sx = cx + op.offset; sz = cz + d * 0.5; dz = 1; }
      else if (side === 'west') { sx = cx - w * 0.5; sz = cz + op.offset; dx = -1; }
      else if (side === 'east') { sx = cx + w * 0.5; sz = cz + op.offset; dx = 1; }
      const gOut = collision.heightFn(sx + dx * 1.4, sz + dz * 1.4);
      buildExteriorSteps(scene, collision, sx, sz, dx, dz, Math.max(op.width + 0.4, 2.2), fy, gOut, sMat);
    }
  };
  checkDoors(north, 'north');
  checkDoors(south, 'south');
  checkDoors(west, 'west');
  checkDoors(east, 'east');

  // Ceiling & Roof
  const rMat = roofMat || new THREE.MeshStandardMaterial({ color: roofColor, roughness: 0.85 });
  if (roofStyle !== 'none') {
    const ceil = new THREE.Mesh(new THREE.BoxGeometry(w + 0.2, 0.28, d + 0.2), rMat);
    ceil.position.set(cx, fy + h + 0.14, cz);
    ceil.castShadow = true;
    ceil.receiveShadow = true;
    scene.add(ceil);
    // Roof collider (above head height)
    collision.addBox(cx, fy + h + 0.14, cz, w + 0.2, 0.28, d + 0.2);

    if (roofStyle === 'gable') {
      const pitchH = Math.min(2.8, Math.min(w, d) * 0.34);
      const slopeLen = Math.hypot(w * 0.5 + 0.55, pitchH);
      const angle = Math.atan2(pitchH, w * 0.5 + 0.55);
      for (const s of [-1, 1]) {
        const slope = new THREE.Mesh(new THREE.BoxGeometry(slopeLen, 0.18, d + 0.9), rMat);
        slope.position.set(cx + s * (w * 0.25 + 0.18), fy + h + 0.2 + pitchH * 0.5, cz);
        slope.rotation.z = -s * angle;
        slope.castShadow = true;
        scene.add(slope);
      }
      // Gable triangles
      const gableShape = new THREE.Shape();
      gableShape.moveTo(-w * 0.5, 0);
      gableShape.lineTo(w * 0.5, 0);
      gableShape.lineTo(0, pitchH);
      gableShape.closePath();
      const gGeo = new THREE.ExtrudeGeometry(gableShape, { depth: 0.24, bevelEnabled: false });
      for (const sz of [-d * 0.5, d * 0.5 - 0.24]) {
        const gMesh = new THREE.Mesh(gGeo, wallMat);
        gMesh.position.set(cx, fy + h + 0.2, cz + sz);
        scene.add(gMesh);
      }
    } else if (roofStyle === 'hip') {
      const hip = new THREE.Mesh(new THREE.ConeGeometry(Math.max(w, d) * 0.74, Math.min(3.2, Math.min(w, d) * 0.38), 4), rMat);
      hip.rotation.y = Math.PI / 4;
      hip.position.set(cx, fy + h + Math.min(3.2, Math.min(w, d) * 0.38) * 0.5 + 0.2, cz);
      hip.castShadow = true;
      scene.add(hip);
    } else if (roofStyle === 'parapet') {
      const pMat = parapetColor
        ? new THREE.MeshStandardMaterial({ color: parapetColor, roughness: 0.85 })
        : rMat;
      const ph = 0.65;
      const p1 = new THREE.Mesh(new THREE.BoxGeometry(w + 0.24, ph, 0.24), pMat);
      p1.position.set(cx, fy + h + 0.28 + ph * 0.5, cz - d * 0.5);
      const p2 = p1.clone();
      p2.position.z = cz + d * 0.5;
      const p3 = new THREE.Mesh(new THREE.BoxGeometry(0.24, ph, d + 0.24), pMat);
      p3.position.set(cx - w * 0.5, fy + h + 0.28 + ph * 0.5, cz);
      const p4 = p3.clone();
      p4.position.x = cx + w * 0.5;
      scene.add(p1, p2, p3, p4);
    }
  }

  if (interiorLight) {
    const pl = new THREE.PointLight(
      interiorLight.color || 0xffcc88,
      interiorLight.intensity ?? 1.3,
      interiorLight.distance || Math.max(w, d) * 1.4
    );
    pl.position.set(cx, fy + h - 0.55, cz);
    scene.add(pl);
  }

  return { floorY: fy, roofY: fy + h };
}

/**
 * Interior solid furniture helpers — all register exact AABB collision!
 */
export function addDesk(scene, collision, x, y, z, w = 1.6, d = 0.8, mat, chairDirZ = 1) {
  addSolidBox(scene, collision, x, y + 0.42, z, w, 0.84, d, mat);
  // Chair tucked near desk
  const chair = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.9, 0.55), mat);
  chair.position.set(x, y + 0.45, z + chairDirZ * (d * 0.5 + 0.4));
  scene.add(chair);
  collision.addBox(x, y + 0.45, z + chairDirZ * (d * 0.5 + 0.4), 0.55, 0.9, 0.55);
}

export function addBunk(scene, collision, x, y, z, rot90 = false, frameMat, blanketColor = 0x5c4b3c) {
  const w = rot90 ? 0.95 : 2.0;
  const d = rot90 ? 2.0 : 0.95;
  const fMat = frameMat || new THREE.MeshStandardMaterial({ color: 0x3b3530, roughness: 0.8 });
  const bMat = new THREE.MeshStandardMaterial({ color: blanketColor, roughness: 0.9 });
  addSolidBox(scene, collision, x, y + 0.32, z, w, 0.64, d, fMat);
  const matt = new THREE.Mesh(new THREE.BoxGeometry(w - 0.08, 0.16, d - 0.08), bMat);
  matt.position.set(x, y + 0.7, z);
  scene.add(matt);
}

export function addPewRow(scene, collision, x, y, z, w = 3.2, mat) {
  addSolidBox(scene, collision, x, y + 0.5, z, w, 1.0, 0.65, mat);
}

export function addAltar(scene, collision, x, y, z, w = 2.6, d = 1.0, mat, clothColor = 0x992222) {
  addSolidBox(scene, collision, x, y + 0.55, z, w, 1.1, d, mat);
  const cloth = new THREE.Mesh(
    new THREE.BoxGeometry(w + 0.04, 0.16, d + 0.04),
    new THREE.MeshStandardMaterial({ color: clothColor, roughness: 0.85 })
  );
  cloth.position.set(x, y + 1.08, z);
  scene.add(cloth);
  // Two brass candlesticks
  const gold = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.7, roughness: 0.3 });
  for (const s of [-1, 1]) {
    const c = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.09, 0.45, 6), gold);
    c.position.set(x + s * (w * 0.35), y + 1.35, z);
    scene.add(c);
  }
}

export function addHearth(scene, collision, x, y, z, radius = 0.95) {
  const stone = new THREE.MeshStandardMaterial({ color: 0x55524d, roughness: 0.95 });
  const ring = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius + 0.12, 0.42, 8), stone);
  ring.position.set(x, y + 0.21, z);
  scene.add(ring);
  const embers = new THREE.Mesh(
    new THREE.CylinderGeometry(radius * 0.68, radius * 0.72, 0.22, 8),
    new THREE.MeshBasicMaterial({ color: 0xff5a1a })
  );
  embers.position.set(x, y + 0.34, z);
  scene.add(embers);
  collision.addBox(x, y + 0.6, z, radius * 1.9, 1.2, radius * 1.9);
}

export function addStove(scene, collision, x, y, z, pipeHeight = 3.2) {
  const iron = new THREE.MeshStandardMaterial({ color: 0x222326, metalness: 0.65, roughness: 0.45 });
  addSolidBox(scene, collision, x, y + 0.55, z, 0.85, 1.1, 0.85, iron);
  const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, pipeHeight, 8), iron);
  pipe.position.set(x, y + 1.1 + pipeHeight * 0.5, z);
  scene.add(pipe);
  const glow = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.22, 0.05), new THREE.MeshBasicMaterial({ color: 0xff621a }));
  glow.position.set(x, y + 0.52, z + 0.43);
  scene.add(glow);
}

export function addPiano(scene, collision, x, y, z, rotY = 0) {
  const g = new THREE.Group();
  const dark = new THREE.MeshStandardMaterial({ color: 0x1a1513, roughness: 0.35, metalness: 0.15 });
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.75, 1.28, 0.72), dark);
  body.position.y = 0.64;
  g.add(body);
  const keys = new THREE.Mesh(
    new THREE.BoxGeometry(1.52, 0.08, 0.28),
    new THREE.MeshStandardMaterial({ color: 0xf4f0e4, roughness: 0.5 })
  );
  keys.position.set(0, 0.76, 0.38);
  g.add(keys);
  g.position.set(x, y, z);
  g.rotation.y = rotY;
  scene.add(g);
  const sw = Math.abs(Math.sin(rotY)) > 0.5 ? 0.95 : 1.8;
  const sd = Math.abs(Math.sin(rotY)) > 0.5 ? 1.8 : 0.95;
  collision.addBox(x, y + 0.64, z, sw, 1.28, sd);
}
