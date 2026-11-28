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
  const numSteps = Math.max(2, Math.ceil(diff / 0.34));
  const stepRise = diff / numSteps;
  const stepDepth = 1.18;
  for (let i = 0; i < numSteps; i++) {
    const stepTop = topY - stepRise * (i + 1) + stepRise * 0.5;
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
    collision.addWalkable(sx, sz, boxW + 0.28, boxD + 0.28, stepTop);
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
    parapetColor = null,
    raisedFloorThickness = null
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

  // Solid foundation + floor slab (or elevated timber deck on stilts when raisedFloorThickness is set)
  const foundH = raisedFloorThickness !== null ? raisedFloorThickness : Math.max(0.4, fy - (collision.heightFn(cx, cz) - 2.2));
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

/**
 * Builds a climbable vertical or leaning wooden/iron ladder (two side rails + rungs every ~0.34m)
 * and registers it with CollisionWorld so facing it and pressing W climbs automatically with no extra key.
 */
export function buildLadder(scene, collision, {
  x, z,
  bottomY = 0,
  topY = 3.5,
  normalX = 0,
  normalZ = 1,
  width = 0.68,
  leanOffset = 0,
  topExitDist = 0.62,
  mat
}) {
  const nLen = Math.hypot(normalX, normalZ) || 1;
  const nx = normalX / nLen;
  const nz = normalZ / nLen;
  // Side tangent perpendicular to normal
  const tx = -nz;
  const tz = nx;

  const bot = new THREE.Vector3(x, bottomY, z);
  const top = new THREE.Vector3(x - nx * leanOffset, topY, z - nz * leanOffset);
  const spanVec = new THREE.Vector3().subVectors(top, bot);
  const ladderLen = spanVec.length();
  const mid = new THREE.Vector3().addVectors(bot, top).multiplyScalar(0.5);
  const upDir = spanVec.clone().normalize();
  const railQuat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), upDir);

  const lMat = mat || new THREE.MeshStandardMaterial({ color: 0x5c3c22, roughness: 0.85 });
  const halfW = width * 0.5;
  for (const s of [-1, 1]) {
    const rail = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.046, ladderLen + 0.14, 6), lMat);
    rail.position.set(mid.x + tx * s * halfW, mid.y, mid.z + tz * s * halfW);
    rail.quaternion.copy(railQuat);
    rail.castShadow = true;
    scene.add(rail);
  }
  const rungCount = Math.max(3, Math.floor(ladderLen / 0.34));
  const sideQuat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(tx, 0, tz));
  for (let i = 1; i <= rungCount; i++) {
    const frac = i / (rungCount + 0.5);
    const rx = bot.x + spanVec.x * frac;
    const ry = bot.y + spanVec.y * frac;
    const rz = bot.z + spanVec.z * frac;
    const rung = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.026, width, 6), lMat);
    rung.position.set(rx, ry, rz);
    rung.quaternion.copy(sideQuat);
    rung.castShadow = true;
    scene.add(rung);
  }

  return collision.addLadder({ x, z, bottomY, topY, normalX: nx, normalZ: nz, leanOffset, topExitDist, width });
}

/**
 * Builds a fence/wall/hedge bay-by-bay so each bay follows the ground height on slopes
 * and ends cleanly at the top rail (preventing projectiles from lodging in mid-air above a sloped fence).
 */
export function addSegmentedFence(scene, collision, {
  x1, z1, x2, z2,
  height = 1.15,
  bayLen = 2.6,
  mat,
  tag = 'wood'
}) {
  const dx = x2 - x1;
  const dz = z2 - z1;
  const totalLen = Math.hypot(dx, dz);
  if (totalLen < 0.2) return;
  const bays = Math.max(1, Math.round(totalLen / bayLen));
  const stepX = dx / bays;
  const stepZ = dz / bays;
  const segLen = totalLen / bays;
  const rotY = Math.atan2(dx, dz);
  const fMat = mat || new THREE.MeshStandardMaterial({ color: 0x5c3e26, roughness: 0.9 });

  for (let i = 0; i <= bays; i++) {
    const px = x1 + stepX * i;
    const pz = z1 + stepZ * i;
    const py = collision.heightFn(px, pz);
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.14, height + 0.12, 0.14), fMat);
    post.position.set(px, py + height * 0.5, pz);
    post.castShadow = true;
    scene.add(post);
  }

  for (let i = 0; i < bays; i++) {
    const bx = x1 + stepX * (i + 0.5);
    const bz = z1 + stepZ * (i + 0.5);
    const gStart = collision.heightFn(x1 + stepX * i, z1 + stepZ * i);
    const gEnd = collision.heightFn(x1 + stepX * (i + 1), z1 + stepZ * (i + 1));
    const gMid = (gStart + gEnd) * 0.5;
    for (const frac of [0.42, 0.88]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.11, segLen + 0.04), fMat);
      rail.position.set(bx, gMid + height * frac, bz);
      rail.rotation.y = rotY;
      scene.add(rail);
    }
    collision.addOrientedBox(bx, gMid + height * 0.5, bz, 0.22, height, segLen, rotY, tag);
  }
}

/**
 * Builds a row of rising jump crates/blocks (legacy helper kept for compatibility).
 */
export function buildJumpCrateStack(scene, collision, {
  startX, startZ, dirX, dirZ,
  heights = [1.12, 2.24, 3.36],
  size = 1.65,
  spacing = 1.85,
  mat
}) {
  const groundY = collision.heightFn(startX, startZ);
  const tops = [];
  for (let i = 0; i < heights.length; i++) {
    const h = heights[i];
    const cx = startX + dirX * (i * spacing);
    const cz = startZ + dirZ * (i * spacing);
    const topY = groundY + h;
    addSolidBox(scene, collision, cx, groundY + h * 0.5, cz, size, h, size, mat, 'wood');
    collision.addWalkable(cx, cz, size + 0.14, size + 0.14, topY, true);
    tops.push(new THREE.Vector3(cx, topY, cz));
  }
  return tops;
}

/**
 * Builds a Raised Hide (lookout deck on 4 posts with a waist-high wall on 3 sides and a light roof,
 * reached by a wooden ladder on the open side).
 */
export function buildRaisedHide(scene, collision, {
  cx, cz,
  deckY = 2.2,
  w = 4.2,
  d = 4.2,
  openSide = 'south', // 'north' | 'south' | 'east' | 'west'
  wallMat,
  floorMat,
  postMat,
  jumpMat
}) {
  const gY = collision.heightFn(cx, cz);
  const fy = gY + deckY;
  const roofH = 2.55;
  // 4 solid support corner posts extending up to support a light shelter roof
  for (const [ox, oz] of [[-w * 0.44, -d * 0.44], [w * 0.44, -d * 0.44], [-w * 0.44, d * 0.44], [w * 0.44, d * 0.44]]) {
    addSolidBox(scene, collision, cx + ox, gY + (deckY + roofH) * 0.5, cz + oz, 0.28, deckY + roofH, 0.28, postMat || wallMat, 'wood');
  }
  // Walkable raised deck floor slab
  const deck = new THREE.Mesh(new THREE.BoxGeometry(w, 0.24, d), floorMat || wallMat);
  deck.position.set(cx, fy - 0.12, cz);
  deck.castShadow = true;
  deck.receiveShadow = true;
  scene.add(deck);
  collision.addWalkable(cx, cz, w + 0.2, d + 0.2, fy, true);

  // Light roof canopy over the raised hide
  const canopy = new THREE.Mesh(new THREE.BoxGeometry(w + 0.5, 0.16, d + 0.5), postMat || wallMat);
  canopy.position.set(cx, fy + roofH + 0.08, cz);
  canopy.castShadow = true;
  scene.add(canopy);
  collision.addBox(cx, fy + roofH + 0.08, cz, w + 0.5, 0.16, d + 0.5, 'wood');

  // Waist-high parapet wall (~1.05m) on 3 sides (leaving openSide open for ladder entry!)
  const wallH = 1.05;
  const thick = 0.24;
  if (openSide !== 'north') addSolidBox(scene, collision, cx, fy + wallH * 0.5, cz - d * 0.5 + thick * 0.5, w, wallH, thick, wallMat, 'wood');
  if (openSide !== 'south') addSolidBox(scene, collision, cx, fy + wallH * 0.5, cz + d * 0.5 - thick * 0.5, w, wallH, thick, wallMat, 'wood');
  if (openSide !== 'west')  addSolidBox(scene, collision, cx - w * 0.5 + thick * 0.5, fy + wallH * 0.5, cz, thick, wallH, d, wallMat, 'wood');
  if (openSide !== 'east')  addSolidBox(scene, collision, cx + w * 0.5 - thick * 0.5, fy + wallH * 0.5, cz, thick, wallH, d, wallMat, 'wood');

  // Wooden ladder flush against the open side of the deck (replacing old jump blocks!)
  let nx = 0, nz = 0, lx = cx, lz = cz;
  if (openSide === 'south') { nz = 1; lz = cz + d * 0.5 + 0.08; }
  else if (openSide === 'north') { nz = -1; lz = cz - d * 0.5 - 0.08; }
  else if (openSide === 'east') { nx = 1; lx = cx + w * 0.5 + 0.08; }
  else { nx = -1; lx = cx - w * 0.5 - 0.08; }

  const ladder = buildLadder(scene, collision, {
    x: lx, z: lz, bottomY: gY, topY: fy,
    normalX: nx, normalZ: nz,
    mat: jumpMat || postMat || wallMat
  });

  return {
    deckY: fy,
    deckPos: new THREE.Vector3(cx, fy, cz),
    ladder
  };
}

/**
 * Builds a Crouch-Only Crawl-In Den whose doorway is strictly 1.25m high (and interior ceiling 1.48m),
 * so an upright player (1.75m) and all enemies are stopped, while a crouching player (1.05m) crawls in!
 */
export function buildCrawlDen(scene, collision, {
  cx, cz,
  w = 5.4,
  d = 5.0,
  doorSide = 'south',
  wallMat,
  floorMat,
  roofMat
}) {
  const gY = collision.heightFn(cx, cz);
  const fy = gY + 0.08;
  const h = 1.52;
  const doorH = 1.25; // Strictly 1.25m high crawl-in doorway!
  const doorW = 1.9;
  const thick = 0.34;

  // Floor
  const fl = new THREE.Mesh(new THREE.BoxGeometry(w, 0.24, d), floorMat || wallMat);
  fl.position.set(cx, fy - 0.12, cz);
  fl.receiveShadow = true;
  scene.add(fl);
  collision.addWalkable(cx, cz, w + 0.15, d + 0.15, fy);

  // Walls (doorSide has a 1.25m tall opening with solid lintel from 1.25m..h + solid roof slab!)
  const opts = { north: [], south: [], west: [], east: [] };
  opts[doorSide] = [{ type: 'door', offset: 0, width: doorW, height: doorH }];

  buildSegmentedWall(scene, collision, { axis: 'x', center: { x: cx, z: cz - d * 0.5 + thick * 0.5 }, baseY: fy, length: w, height: h, thickness: thick, mat: wallMat, openings: opts.north });
  buildSegmentedWall(scene, collision, { axis: 'x', center: { x: cx, z: cz + d * 0.5 - thick * 0.5 }, baseY: fy, length: w, height: h, thickness: thick, mat: wallMat, openings: opts.south });
  buildSegmentedWall(scene, collision, { axis: 'z', center: { x: cx - w * 0.5 + thick * 0.5, z: cz }, baseY: fy, length: d - thick * 2, height: h, thickness: thick, mat: wallMat, openings: opts.west });
  buildSegmentedWall(scene, collision, { axis: 'z', center: { x: cx + w * 0.5 - thick * 0.5, z: cz }, baseY: fy, length: d - thick * 2, height: h, thickness: thick, mat: wallMat, openings: opts.east });

  // Solid low ceiling slab (starts at fy + 1.46 so upright players cannot stand up inside!)
  addSolidBox(scene, collision, cx, fy + 1.62, cz, w + 0.2, 0.32, d + 0.2, roofMat || wallMat, 'stone');
  // Explicit solid door lintel bar strictly from y = fy + 1.25 to fy + 1.58 across doorway!
  if (doorSide === 'south') addSolidBox(scene, collision, cx, fy + 1.42, cz + d * 0.5 - thick * 0.5, doorW + 0.2, 0.34, thick + 0.08, wallMat, 'stone');
  else if (doorSide === 'north') addSolidBox(scene, collision, cx, fy + 1.42, cz - d * 0.5 + thick * 0.5, doorW + 0.2, 0.34, thick + 0.08, wallMat, 'stone');
  else if (doorSide === 'east') addSolidBox(scene, collision, cx + w * 0.5 - thick * 0.5, fy + 1.42, cz, thick + 0.08, 0.34, doorW + 0.2, wallMat, 'stone');
  else addSolidBox(scene, collision, cx - w * 0.5 + thick * 0.5, fy + 1.42, cz, thick + 0.08, 0.34, doorW + 0.2, wallMat, 'stone');

  const ptOut = new THREE.Vector3(
    cx + (doorSide === 'east' ? w * 0.5 + 1.6 : doorSide === 'west' ? -(w * 0.5 + 1.6) : 0),
    gY,
    cz + (doorSide === 'south' ? d * 0.5 + 1.6 : doorSide === 'north' ? -(d * 0.5 + 1.6) : 0)
  );
  return {
    floorY: fy,
    insidePos: new THREE.Vector3(cx, fy, cz),
    outsidePos: ptOut
  };
}

/**
 * Builds a climbable flat-topped rocky Hill / Butte with a 4-leg terraced zigzag rock staircase on one face!
 * Zero 2D overlap between legs so both walking players and A* enemies climb smoothly without jumping.
 */
export function buildZigzagHill(scene, collision, {
  cx, cz,
  topW = 12,
  topD = 12,
  topY = 12.0,
  legs = 4,
  stepsPerLeg = 8,
  faceSide = 'east', // 'east' (+X face) | 'west' (-X face)
  rockMat,
  boulderMat
}) {
  const dirX = faceSide === 'east' ? 1 : -1;
  const gY = collision.heightFn(cx, cz);
  const totalRise = topY - gY;
  const legRise = totalRise / legs;
  const stepRise = legRise / stepsPerLeg; // <= 0.38m (well under 0.48m nav & 0.52m walk!)
  const stepLen = 1.42;
  const legRun = stepsPerLeg * stepLen;
  const legW = 2.8;
  const legSpacingX = 3.05;
  const edgeX = cx + dirX * (topW * 0.5);

  // Main flat-topped Butte / Hill rocky body
  const body = new THREE.Mesh(new THREE.BoxGeometry(topW, totalRise, topD), rockMat);
  body.position.set(cx, gY + totalRise * 0.5, cz);
  body.castShadow = true;
  body.receiveShadow = true;
  scene.add(body);
  // Solid blocking walls on non-stair sides (leaving stair top landing cleanly accessible!)
  collision.addBox(cx, gY + (totalRise - 0.35) * 0.5, cz, topW, totalRise - 0.35, topD, 'stone');
  collision.addWalkable(cx, cz, topW + 0.4, topD + 0.4, topY);

  // Decorative craggy rock skirts around the 3 sheer sides
  for (const [ox, oz, rw, rd] of [
    [-dirX * (topW * 0.5 + 1.4), 0, 2.8, topD * 0.85],
    [0, -(topD * 0.5 + 1.2), topW * 0.85, 2.4],
    [0, topD * 0.5 + 1.2, topW * 0.85, 2.4]
  ]) {
    const skirtH = totalRise * 0.65;
    const sk = new THREE.Mesh(new THREE.BoxGeometry(rw, skirtH, rd), rockMat);
    sk.position.set(cx + ox, gY + skirtH * 0.5, cz + oz);
    scene.add(sk);
    collision.addBox(cx + ox, gY + skirtH * 0.5, cz + oz, rw, skirtH, rd, 'stone');
  }

  // 4-leg terraced zigzag rock staircase (outermost leg = leg 0 starts at ground, innermost leg = leg legs-1 reaches topY!)
  const waypoints = [];
  for (let leg = 0; leg < legs; leg++) {
    const legIdxFromEdge = legs - 1 - leg; // 3, 2, 1, 0
    const lx = edgeX + dirX * (1.45 + legIdxFromEdge * legSpacingX);
    const goNorth = (leg % 2) === 0; // Even legs climb -Z, odd legs climb +Z
    const zStart = goNorth ? cz + legRun * 0.5 : cz - legRun * 0.5;
    const zDir = goNorth ? -1 : 1;

    if (leg === 0) {
      // Foot of the zigzag path on flat ground
      waypoints.push(new THREE.Vector3(lx, gY, zStart + zDir * -1.4));
    }

    for (let s = 0; s < stepsPerLeg; s++) {
      const sy = gY + leg * legRise + (s + 1) * stepRise;
      const sz = zStart + zDir * ((s + 0.5) * stepLen);
      const stepH = Math.max(0.3, sy - gY);
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(legW, stepH, stepLen + 0.12), rockMat);
      mesh.position.set(lx, gY + stepH * 0.5, sz);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);
      if (stepH > 0.55) {
        collision.addBox(lx, gY + (stepH - 0.12) * 0.5, sz, legW - 0.16, stepH - 0.12, stepLen - 0.08, 'stone');
      }
      collision.addWalkable(lx, sz, legW + 0.06, stepLen + 0.08, sy);
      // Low rock guard curb along the outer drop-off edge of every leg (except leg 0 ground foot) so walkers stay on the path!
      if (leg > 0 || s >= 2) {
        const curbX = lx + dirX * (legW * 0.5 + 0.12);
        const curb = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.72, stepLen + 0.04), rockMat);
        curb.position.set(curbX, sy + 0.36, sz);
        scene.add(curb);
        collision.addBox(curbX, sy + 0.36, sz, 0.24, 0.72, stepLen + 0.04, 'stone');
      }
    }

    const endZ = zStart + zDir * (legRun + 1.25);
    const endY = gY + (leg + 1) * legRise;
    if (leg < legs - 1) {
      // Wide flat switchback landing spanning THIS leg and the NEXT inner leg!
      const nextLx = edgeX + dirX * (1.45 + (legIdxFromEdge - 1) * legSpacingX);
      const midX = (lx + nextLx) * 0.5;
      const landW = Math.abs(lx - nextLx) + legW + 0.2;
      const landD = 2.75;
      const landH = Math.max(0.4, endY - gY);
      const land = new THREE.Mesh(new THREE.BoxGeometry(landW, landH, landD), rockMat);
      land.position.set(midX, gY + landH * 0.5, endZ);
      land.receiveShadow = true;
      scene.add(land);
      if (landH > 0.55) {
        collision.addBox(midX, gY + (landH - 0.12) * 0.5, endZ, landW - 0.14, landH - 0.12, landD - 0.1, 'stone');
      }
      collision.addWalkable(midX, endZ, landW + 0.18, landD + 0.18, endY);
      // Rock parapet along the far end of the switchback landing so walkers turn cleanly without stepping off!
      const farZ = endZ + zDir * (landD * 0.5 + 0.12);
      const rail = new THREE.Mesh(new THREE.BoxGeometry(landW, 0.78, 0.24), rockMat);
      rail.position.set(midX, endY + 0.39, farZ);
      scene.add(rail);
      collision.addBox(midX, endY + 0.39, farZ, landW, 0.78, 0.24, 'stone');
      waypoints.push(new THREE.Vector3(lx, endY, endZ));
      waypoints.push(new THREE.Vector3(nextLx, endY, endZ));
    } else {
      // Top connector bridge from the final step (already at topY!) sideways onto the flat summit plateau!
      const lastStepZ = zStart + zDir * ((stepsPerLeg - 0.5) * stepLen);
      const padZ = lastStepZ + zDir * 0.25;
      const bridgeX = (lx + (edgeX - dirX * 1.6)) * 0.5;
      const bridgeW = Math.abs(lx - (edgeX - dirX * 1.6)) + legW;
      const topPad = new THREE.Mesh(new THREE.BoxGeometry(bridgeW, totalRise, 2.2), rockMat);
      topPad.position.set(bridgeX, gY + totalRise * 0.5, padZ);
      topPad.receiveShadow = true;
      scene.add(topPad);
      collision.addWalkable(bridgeX, padZ, bridgeW + 0.3, 2.1, topY);
      waypoints.push(new THREE.Vector3(lx, topY, lastStepZ));
      waypoints.push(new THREE.Vector3(cx, topY, cz));
    }
  }

  // Crouch-height cover boulders (~1.05m tall) along the center rim of the flat summit (leaving stair corners wide open!)
  const bMat = boulderMat || rockMat;
  for (const bz of [cz - 2.2, cz, cz + 2.2]) {
    const bx = cx + dirX * (topW * 0.34);
    const bld = new THREE.Mesh(new THREE.DodecahedronGeometry(0.75, 1), bMat);
    bld.scale.set(0.95, 0.78, 1.15);
    bld.position.set(bx, topY + 0.52, bz);
    bld.castShadow = true;
    scene.add(bld);
    collision.addBox(bx, topY + 0.54, bz, 1.15, 1.08, 1.35, 'stone');
  }

  return {
    summitPos: new THREE.Vector3(cx - dirX * 1.2, topY, cz),
    footPos: waypoints[0],
    basePos: waypoints[0],
    waypoints
  };
}

/**
 * Builds a solid walkable flight of stone/timber steps along the Z axis (zStart -> zEnd, yStart -> yEnd).
 */
export function addStairFlight(scene, collision, opts) {
  const {
    x,
    zStart,
    zEnd,
    yStart = 0,
    yEnd = 3.0,
    width = 2.4,
    steps = 10,
    mat,
    navIgnore = false
  } = opts;
  const totalZ = zEnd - zStart;
  const tread = Math.abs(totalZ) / steps;
  const rise = (yEnd - yStart) / steps;
  for (let i = 0; i < steps; i++) {
    const sy = yStart + (i + 1) * rise;
    const sz = zStart + ((i + 0.5) / steps) * totalZ;
    const stepH = Math.max(0.24, sy - yStart);
    const m = new THREE.Mesh(new THREE.BoxGeometry(width, stepH, tread + 0.08), mat);
    m.position.set(x, yStart + stepH * 0.5, sz);
    m.receiveShadow = true;
    scene.add(m);
    collision.addWalkable(x, sz, width + 0.15, tread + 0.35, sy, navIgnore);
  }
}

/**
 * Places a simple solid timber table and two benches inside a room.
 */
export function addTableAndChairs(scene, collision, cx, floorY, cz, mat) {
  addSolidBox(scene, collision, cx, floorY + 0.42, cz, 1.5, 0.84, 0.85, mat, 'wood');
  for (const dz of [-0.72, 0.72]) {
    const bench = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.45, 0.32), mat);
    bench.position.set(cx, floorY + 0.225, cz + dz);
    scene.add(bench);
  }
}
