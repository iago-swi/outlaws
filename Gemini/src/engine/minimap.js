import * as THREE from 'three';

export const CHAPTER_LANDMARKS = {
  west: [
    { name: 'South Trail', x: 0, z: 54, radius: 14 },
    { name: 'Red Gulch Main Street', x: 0, z: 18, radius: 15 },
    { name: 'The Red Eye Saloon', x: -16, z: 10, radius: 11 },
    { name: "Sheriff's Office & Jail", x: 16, z: 12, radius: 11 },
    { name: 'General Store', x: -16, z: -8, radius: 11 },
    { name: 'Frontier Bank', x: 16, z: -10, radius: 11 },
    { name: 'Western Church', x: 26, z: -18, radius: 12 },
    { name: 'Railroad Depot', x: 46, z: 18, radius: 14 },
    { name: 'Silver Queen Mine', x: -48, z: -26, radius: 14 },
    { name: 'Grand Hotel', x: -42, z: 34, radius: 13 },
    { name: 'Boot Hill Cemetery', x: 0, z: -42, radius: 16 }
  ],
  japan: [
    { name: 'Torii Gate', x: 0, z: 52, radius: 14 },
    { name: 'Village Courtyard', x: 0, z: 20, radius: 15 },
    { name: 'Kura Storehouse', x: 21, z: 24, radius: 11 },
    { name: 'Bamboo Hermitage', x: -50, z: 32, radius: 13 },
    { name: 'Arched Koi Bridge', x: 16, z: 4, radius: 11 },
    { name: 'Bell Tower', x: 37, z: 4, radius: 11 },
    { name: 'West Tea House', x: -23, z: -16, radius: 11 },
    { name: 'Rice Paddies', x: 55, z: 24, radius: 15 },
    { name: 'Stilt Granary', x: -38, z: -22, radius: 12 },
    { name: 'Five-Tier Pagoda', x: -24, z: -37, radius: 12 },
    { name: 'Samurai Dojo', x: 48, z: -38, radius: 14 },
    { name: 'Grand Shinto Shrine', x: 0, z: -34, radius: 15 }
  ],
  swiss: [
    { name: 'Confederate Banner Post', x: 0, z: 50, radius: 14 },
    { name: 'Alpine Village', x: 0, z: 20, radius: 15 },
    { name: 'Village Chapel', x: -18, z: 10, radius: 12 },
    { name: 'Watermill', x: 44, z: 16, radius: 13 },
    { name: 'Lake Sust Landing', x: 50, z: -10, radius: 14 },
    { name: 'Rütli Oath Meadow', x: 34, z: -28, radius: 15 },
    { name: 'Summit Boulder & Cross', x: -32, z: -20, radius: 14 },
    { name: 'Keep Under Construction', x: -46, z: -38, radius: 14 },
    { name: 'High Alp Watchtower', x: 0, z: -38, radius: 15 }
  ],
  greece: [
    { name: 'Harbour Landing', x: 0, z: 52, radius: 14 },
    { name: 'Agora Market Square', x: 0, z: 18, radius: 15 },
    { name: 'House of Odysseus', x: -20, z: 14, radius: 12 },
    { name: 'Olive Grove & Press', x: 30, z: 18, radius: 14 },
    { name: 'Colonnaded Villa', x: -28, z: -10, radius: 13 },
    { name: 'Amphitheatre', x: 26, z: -14, radius: 14 },
    { name: 'Beacon Tower', x: 48, z: 32, radius: 13 },
    { name: 'Marble Quarry', x: -48, z: -26, radius: 14 },
    { name: 'Old Stone Cistern', x: -34, z: 26, radius: 12 },
    { name: 'Hilltop Temple of Athena', x: 0, z: -42, radius: 16 }
  ],
  scandinavia: [
    { name: 'Longship Landing Beach', x: 0, z: 54, radius: 15 },
    { name: 'Moored Longships & Jetty', x: 24, z: 40, radius: 15 },
    { name: 'Shipyard Stocks', x: -42, z: 36, radius: 14 },
    { name: 'Viking Settlement', x: 0, z: 14, radius: 15 },
    { name: 'Boat Shed & Smithy', x: -24, z: 16, radius: 12 },
    { name: 'Nordic Byre', x: 40, z: 8, radius: 13 },
    { name: 'Beacon Crag', x: -46, z: -10, radius: 13 },
    { name: 'Temple of the Old Gods', x: -22, z: -20, radius: 13 },
    { name: 'Chieftain Great Hall', x: 0, z: -38, radius: 16 }
  ],
  normandy: [
    { name: 'Glider Wreckage', x: 0, z: 52, radius: 14 },
    { name: 'Bocage Crossroads', x: 0, z: 22, radius: 14 },
    { name: 'Ruined Parish Church', x: -20, z: 10, radius: 13 },
    { name: 'Village Café & Bakery', x: 20, z: 14, radius: 12 },
    { name: 'Cider Farm', x: -44, z: -6, radius: 14 },
    { name: 'Railway Halt', x: 46, z: 18, radius: 14 },
    { name: 'Walled Manor', x: -22, z: -22, radius: 13 },
    { name: 'Stone Windmill', x: 24, z: -20, radius: 13 },
    { name: 'Coastal Gun Battery', x: 0, z: -44, radius: 16 }
  ],
  soviet: [
    { name: 'Tram Avenue South', x: 0, z: 52, radius: 14 },
    { name: 'Food Shop Queue', x: -18, z: 26, radius: 12 },
    { name: 'Palace of Culture', x: -24, z: 6, radius: 14 },
    { name: 'Courtyard Flats', x: -44, z: 18, radius: 14 },
    { name: 'Factory & Crane Site', x: 26, z: -12, radius: 15 },
    { name: 'Goods Siding', x: 48, z: -20, radius: 14 },
    { name: 'Committee Archive', x: 0, z: -40, radius: 16 }
  ],
  tibet: [
    { name: 'Frozen Lake Camp', x: 0, z: 52, radius: 15 },
    { name: 'Ochre Village', x: 0, z: 20, radius: 15 },
    { name: 'Barley Terraces & Barn', x: 44, z: 20, radius: 14 },
    { name: 'Army Encampment', x: 24, z: -8, radius: 14 },
    { name: 'Ruined Dzong Fort', x: -26, z: -12, radius: 14 },
    { name: 'Pilgrims Prayer Path', x: -44, z: 14, radius: 13 },
    { name: 'Ridge Monastery', x: 0, z: -42, radius: 16 }
  ],
  aztec: [
    { name: 'Sacred Precinct Gate', x: 0, z: 70, radius: 15 },
    { name: 'Templo Mayor (Great Temple)', x: 0, z: 42, radius: 16 },
    { name: 'Round Temple of Ehecatl', x: -22, z: 32, radius: 12 },
    { name: 'House of the Eagles', x: 24, z: 32, radius: 12 },
    { name: 'Palace of Axayacatl', x: -22, z: 8, radius: 14 },
    { name: 'Canal Market', x: 20, z: 8, radius: 14 },
    { name: 'Western Causeway', x: 0, z: -32, radius: 18 },
    { name: 'Chinampa Gardens', x: -34, z: -30, radius: 16 },
    { name: 'Chapultepec Aqueduct', x: 34, z: -30, radius: 16 },
    { name: 'Mainland Shore Village', x: 0, z: -74, radius: 18 }
  ]
};

export class ChapterMiniMap {
  constructor(dom) {
    this.miniCanvas = dom.minimapCanvas;
    this.miniCtx = this.miniCanvas ? this.miniCanvas.getContext('2d') : null;
    this.fullCanvas = dom.fullmapCanvas;
    this.fullCtx = this.fullCanvas ? this.fullCanvas.getContext('2d') : null;
    this.fullWrap = dom.fullmapOverlay;
    this.northBadge = dom.minimapNorth;
    this.landmarkBanner = dom.landmarkBanner;
    this.markLabel = dom.markLabel;

    this.baseCanvas = document.createElement('canvas');
    this.baseCanvas.width = 512;
    this.baseCanvas.height = 512;
    this.baseCtx = this.baseCanvas.getContext('2d');

    this.fogCanvas = document.createElement('canvas');
    this.fogCanvas.width = 256;
    this.fogCanvas.height = 256;
    this.fogCtx = this.fogCanvas.getContext('2d');

    // Logical fog grid (64x64) for fast O(1) "is point uncovered?" checks!
    this.fogGridSize = 64;
    this.fogGrid = new Uint8Array(64 * 64);

    this.bounds = { minX: -90, maxX: 90, minZ: -90, maxZ: 90 };
    this.landmarks = [];
    this.mark = null; // { pos: THREE.Vector3, mesh: THREE.Group, ownerName, color }
    this.remoteMark = null;
    this.fullOpen = false;
    this._bannerTimer = null;
  }

  buildForChapter(eraId, collision, worldGroup, extraLandmarks = [], customBounds = null) {
    // Compute world extent from boxes + landmarks (minimum ±85 m)
    let minX = -82, maxX = 82, minZ = -82, maxZ = 82;
    for (const b of collision.boxes) {
      if (Math.abs(b.minX) < 260 && Math.abs(b.maxX) < 260) {
        if (b.minX - 10 < minX) minX = b.minX - 10;
        if (b.maxX + 10 > maxX) maxX = b.maxX + 10;
      }
      if (Math.abs(b.minZ) < 260 && Math.abs(b.maxZ) < 260) {
        if (b.minZ - 10 < minZ) minZ = b.minZ - 10;
        if (b.maxZ + 10 > maxZ) maxZ = b.maxZ + 10;
      }
    }
    if (customBounds) {
      minX = Math.min(minX, customBounds.minX);
      maxX = Math.max(maxX, customBounds.maxX);
      minZ = Math.min(minZ, customBounds.minZ);
      maxZ = Math.max(maxZ, customBounds.maxZ);
    }
    // Keep map square for crisp 1:1 rotation
    const span = Math.max(maxX - minX, maxZ - minZ, 160);
    const cx = (minX + maxX) * 0.5;
    const cz = (minZ + maxZ) * 0.5;
    this.bounds = { minX: cx - span * 0.5, maxX: cx + span * 0.5, minZ: cz - span * 0.5, maxZ: cz + span * 0.5, span };

    // Copy landmarks for this chapter
    const baseLms = (CHAPTER_LANDMARKS[eraId] || []).map((l) => ({ ...l, discovered: false }));
    this.landmarks = [...baseLms, ...extraLandmarks.map((l) => ({ ...l, discovered: false }))];
    this.mark = null;
    this.remoteMark = null;
    if (this.markLabel) this.markLabel.classList.add('hidden');
    clearTimeout(this._bannerTimer);
    this._bannerTimer = null;
    if (this.landmarkBanner) this.landmarkBanner.classList.add('hidden');

    // Reset Fog of War (starts dark!)
    this.fogGrid.fill(0);
    this.fogCtx.globalCompositeOperation = 'source-over';
    this.fogCtx.fillStyle = 'rgba(10, 12, 16, 0.94)';
    this.fogCtx.fillRect(0, 0, 256, 256);

    // Pre-render 512x512 terrain + water + boxes + tall cylinders ONCE per chapter!
    const ctx = this.baseCtx;
    const S = 512;
    const img = ctx.createImageData(S, S);
    const data = img.data;
    const waterY = collision.waterLevel !== undefined ? collision.waterLevel : -999;

    // Subtle era ground tint
    const groundRGB = {
      west: [164, 128, 86], japan: [112, 134, 96], swiss: [116, 146, 98],
      greece: [184, 166, 126], scandinavia: [134, 152, 148], normandy: [104, 126, 86],
      soviet: [192, 202, 212], tibet: [176, 144, 104], aztec: [132, 136, 102]
    }[eraId] || [145, 138, 114];

    for (let py = 0; py < S; py++) {
      const wz = this.bounds.minZ + (py / S) * span;
      for (let px = 0; px < S; px++) {
        const wx = this.bounds.minX + (px / S) * span;
        const h = collision.getTerrainHeight ? collision.getTerrainHeight(wx, wz) : 0;
        const idx = (py * S + px) * 4;
        if (h < waterY) {
          const depth = Math.min(1, (waterY - h) * 0.25);
          data[idx] = Math.round(44 - depth * 18);
          data[idx + 1] = Math.round(92 - depth * 28);
          data[idx + 2] = Math.round(138 - depth * 24);
          data[idx + 3] = 255;
        } else {
          const hx = collision.getTerrainHeight ? collision.getTerrainHeight(wx + 2.0, wz) : h;
          const hz = collision.getTerrainHeight ? collision.getTerrainHeight(wx, wz + 2.0) : h;
          const slope = Math.max(-0.35, Math.min(0.35, ((hx - h) + (hz - h)) * 0.14));
          const elev = Math.max(-18, Math.min(28, h * 1.8));
          const shade = 1 + slope;
          data[idx] = Math.max(20, Math.min(245, Math.round((groundRGB[0] + elev) * shade)));
          data[idx + 1] = Math.max(20, Math.min(245, Math.round((groundRGB[1] + elev) * shade)));
          data[idx + 2] = Math.max(20, Math.min(245, Math.round((groundRGB[2] + elev) * shade)));
          data[idx + 3] = 255;
        }
      }
    }
    ctx.putImageData(img, 0, 0);

    // Draw walkable bridges/planks/decks over water
    ctx.fillStyle = 'rgba(176, 146, 104, 0.9)';
    for (const wk of (collision.walkables || [])) {
      const p1 = this.worldToBase(wk.minX, wk.minZ);
      const p2 = this.worldToBase(wk.maxX, wk.maxZ);
      ctx.fillRect(p1.x, p1.y, Math.max(1.5, p2.x - p1.x), Math.max(1.5, p2.y - p1.y));
    }

    // Draw every solid box (taller boxes darker!)
    for (const b of collision.boxes) {
      if (b.maxX - b.minX > 180 || b.maxZ - b.minZ > 180) continue; // skip outer boundary walls
      const h = b.maxY - b.minY;
      if (h < 0.35) continue;
      const p1 = this.worldToBase(b.minX, b.minZ);
      const p2 = this.worldToBase(b.maxX, b.maxZ);
      const dark = Math.max(32, Math.min(110, Math.round(118 - h * 11)));
      ctx.fillStyle = `rgb(${dark + 10}, ${dark + 4}, ${dark - 4})`;
      ctx.fillRect(p1.x, p1.y, Math.max(1.5, p2.x - p1.x), Math.max(1.5, p2.y - p1.y));
    }

    // Draw every tall cylinder (trees, columns, towers, silos)
    for (const c of (collision.cylinders || [])) {
      if (c.maxY - c.minY < 1.6) continue;
      const p = this.worldToBase(c.x, c.z);
      const r = Math.max(1.5, (c.r / span) * S);
      ctx.fillStyle = c.tag === 'tree' ? 'rgba(42, 74, 38, 0.85)' : 'rgba(62, 58, 54, 0.9)';
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    this._worldGroup = worldGroup;
  }

  addLandmark(lm) {
    if (!this.landmarks.some((x) => x.name === lm.name)) {
      this.landmarks.push({ ...lm, discovered: false });
    }
  }

  worldToBase(wx, wz) {
    return {
      x: ((wx - this.bounds.minX) / this.bounds.span) * 512,
      y: ((wz - this.bounds.minZ) / this.bounds.span) * 512
    };
  }

  revealAround(wx, wz, radiusM = 30) {
    const u = (wx - this.bounds.minX) / this.bounds.span;
    const v = (wz - this.bounds.minZ) / this.bounds.span;
    const fx = u * 256;
    const fy = v * 256;
    const fr = (radiusM / this.bounds.span) * 256;

    this.fogCtx.save();
    this.fogCtx.globalCompositeOperation = 'destination-out';
    const grad = this.fogCtx.createRadialGradient(fx, fy, fr * 0.55, fx, fy, fr);
    grad.addColorStop(0, 'rgba(0,0,0,1)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    this.fogCtx.fillStyle = grad;
    this.fogCtx.beginPath();
    this.fogCtx.arc(fx, fy, fr, 0, Math.PI * 2);
    this.fogCtx.fill();
    this.fogCtx.restore();

    // Update 64x64 logical fog grid
    const N = this.fogGridSize;
    const gx = Math.floor(u * N);
    const gz = Math.floor(v * N);
    const gr = Math.ceil((radiusM / this.bounds.span) * N);
    const grSq = gr * gr;
    for (let dz = -gr; dz <= gr; dz++) {
      const nz = gz + dz;
      if (nz < 0 || nz >= N) continue;
      for (let dx = -gr; dx <= gr; dx++) {
        if (dx * dx + dz * dz > grSq) continue;
        const nx = gx + dx;
        if (nx < 0 || nx >= N) continue;
        this.fogGrid[nz * N + nx] = 1;
      }
    }
  }

  isRevealed(wx, wz) {
    const N = this.fogGridSize;
    const gx = Math.floor(((wx - this.bounds.minX) / this.bounds.span) * N);
    const gz = Math.floor(((wz - this.bounds.minZ) / this.bounds.span) * N);
    if (gx < 0 || gx >= N || gz < 0 || gz >= N) return false;
    return this.fogGrid[gz * N + gx] === 1;
  }

  checkLandmarks(wx, wz, announce = true) {
    let newlyFound = null;
    for (const lm of this.landmarks) {
      if (lm.discovered) continue;
      const d = Math.hypot(wx - lm.x, wz - lm.z);
      if (d <= (lm.radius || 14)) {
        lm.discovered = true;
        newlyFound = lm.name;
        if (announce) this._announceLandmark(lm.name);
      }
    }
    return newlyFound;
  }

  discoverLandmarkByName(name) {
    const lm = this.landmarks.find((l) => l.name === name);
    if (lm) lm.discovered = true;
  }

  _announceLandmark(name) {
    if (!this.landmarkBanner) return;
    this.landmarkBanner.textContent = name;
    this.landmarkBanner.classList.remove('hidden');
    clearTimeout(this._bannerTimer);
    this._bannerTimer = setTimeout(() => {
      this.landmarkBanner.classList.add('hidden');
    }, 3100);
  }

  toggleMarkAt(hitPoint, worldGroup) {
    if (this.mark && this.mark.pos.distanceTo(hitPoint) < 2.6) {
      this.clearMark();
      return { action: 'cleared' };
    }
    this.clearMark();
    const g = new THREE.Group();
    const shaft = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 3.2, 8),
      new THREE.MeshBasicMaterial({ color: 0x4de8ff, transparent: true, opacity: 0.8 })
    );
    shaft.position.y = 1.6;
    const head = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.32, 0),
      new THREE.MeshBasicMaterial({ color: 0x62f2ff })
    );
    head.position.y = 3.45;
    g.add(shaft, head);
    g.position.copy(hitPoint);
    if (worldGroup) worldGroup.add(g);
    this.mark = { pos: hitPoint.clone(), mesh: g, color: '#52ecff', label: 'MARK' };
    return { action: 'placed', pos: hitPoint.clone() };
  }

  setRemoteMark(pos, ownerName, worldGroup) {
    if (this.remoteMark && this.remoteMark.mesh && this.remoteMark.mesh.parent) {
      this.remoteMark.mesh.parent.remove(this.remoteMark.mesh);
    }
    if (!pos) {
      this.remoteMark = null;
      return;
    }
    const g = new THREE.Group();
    const shaft = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 3.2, 8),
      new THREE.MeshBasicMaterial({ color: 0x52ff8a, transparent: true, opacity: 0.85 })
    );
    shaft.position.y = 1.6;
    const head = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.32, 0),
      new THREE.MeshBasicMaterial({ color: 0x68ff9a })
    );
    head.position.y = 3.45;
    g.add(shaft, head);
    g.position.set(pos.x, pos.y, pos.z);
    if (worldGroup) worldGroup.add(g);
    this.remoteMark = { pos: new THREE.Vector3(pos.x, pos.y, pos.z), mesh: g, color: '#52ff8a', label: ownerName || 'PARTNER' };
  }

  clearMark() {
    if (this.mark && this.mark.mesh && this.mark.mesh.parent) {
      this.mark.mesh.parent.remove(this.mark.mesh);
    }
    this.mark = null;
    if (this.markLabel) this.markLabel.classList.add('hidden');
  }

  setFullMapOpen(open) {
    this.fullOpen = !!open;
    if (this.fullWrap) this.fullWrap.classList.toggle('hidden', !this.fullOpen);
  }

  update(playerPos, playerYaw, camera, enemies, opts = {}) {
    const { eagleEye = false, remoteFighter = null, isCoop = false } = opts;

    // 1. Uncover fog within 30m of player (and partner in co-op!) & check landmarks
    this.revealAround(playerPos.x, playerPos.z, 30);
    this.checkLandmarks(playerPos.x, playerPos.z, true);
    if (isCoop && remoteFighter && remoteFighter.alive) {
      this.revealAround(remoteFighter.root.position.x, remoteFighter.root.position.z, 30);
      this.checkLandmarks(remoteFighter.root.position.x, remoteFighter.root.position.z, false);
    }

    // 2. Through-wall screen-space distance label for placed mark
    if (this.mark && this.markLabel && camera) {
      const dist = Math.round(playerPos.distanceTo(this.mark.pos));
      const p = this.mark.pos.clone().add(new THREE.Vector3(0, 3.8, 0)).project(camera);
      if (p.z >= -1 && p.z <= 1) {
        const sx = (p.x * 0.5 + 0.5) * window.innerWidth;
        const sy = (-p.y * 0.5 + 0.5) * window.innerHeight;
        this.markLabel.style.left = `${Math.max(40, Math.min(window.innerWidth - 40, sx))}px`;
        this.markLabel.style.top = `${Math.max(40, Math.min(window.innerHeight - 40, sy))}px`;
        this.markLabel.textContent = `◆ ${dist} m`;
        this.markLabel.classList.remove('hidden');
      } else {
        this.markLabel.classList.add('hidden');
      }
    }

    // 3. Render Round Rotating Mini-Map (~55m radius, player faces UP, N rotates around rim!)
    if (this.miniCtx) {
      const ctx = this.miniCtx;
      const W = this.miniCanvas.width;
      const R = W * 0.5;
      const viewRadiusM = 55;
      const pxPerM = R / viewRadiusM;

      ctx.clearRect(0, 0, W, W);
      ctx.save();
      ctx.beginPath();
      ctx.arc(R, R, R - 2, 0, Math.PI * 2);
      ctx.clip();

      // Background dark fill
      ctx.fillStyle = '#0d1016';
      ctx.fillRect(0, 0, W, W);

      // Rotate world around player so player's forward (-Z at yaw=0) points straight UP
      ctx.save();
      ctx.translate(R, R);
      ctx.rotate(playerYaw);
      const scale = (this.bounds.span * pxPerM) / 512;
      const pBase = this.worldToBase(playerPos.x, playerPos.z);
      ctx.translate(-pBase.x * scale, -pBase.y * scale);
      ctx.drawImage(this.baseCanvas, 0, 0, 512 * scale, 512 * scale);
      ctx.drawImage(this.fogCanvas, 0, 0, 512 * scale, 512 * scale);
      ctx.restore();

      const projectMini = (wx, wz) => {
        const dx = wx - playerPos.x;
        const dz = wz - playerPos.z;
        const c = Math.cos(playerYaw);
        const s = Math.sin(playerYaw);
        const rx = dx * c - dz * s;
        const rz = dx * s + dz * c;
        return { x: R + rx * pxPerM, y: R + rz * pxPerM, rx, rz };
      };

      // Discovered landmark names
      ctx.font = '700 9.5px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'rgba(255, 245, 220, 0.88)';
      for (const lm of this.landmarks) {
        if (!lm.discovered) continue;
        const mp = projectMini(lm.x, lm.z);
        if (Math.hypot(mp.x - R, mp.y - R) < R - 10) {
          ctx.fillText(lm.name, mp.x, mp.y);
        }
      }

      // Enemy dots (only inside uncovered fog AND moving/alert/firing, OR Eagle Eye within 90m!)
      for (const e of enemies) {
        if (!e.alive || !e.mesh.visible) continue;
        const distP = Math.hypot(e.mesh.position.x - playerPos.x, e.mesh.position.z - playerPos.z);
        const showByEagle = eagleEye && distP <= 90;
        const active = e.alert || e.fireCooldown > 0 || (e.path && e.path.length > 0);
        if (!showByEagle && (!this.isRevealed(e.mesh.position.x, e.mesh.position.z) || !active)) continue;
        const mp = projectMini(e.mesh.position.x, e.mesh.position.z);
        if (Math.hypot(mp.x - R, mp.y - R) > R - 5) continue;
        ctx.fillStyle = e.isBoss ? '#ff3026' : '#ff5544';
        ctx.beginPath();
        ctx.arc(mp.x, mp.y, e.isBoss ? 5.2 : 3.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Remote partner (green dot in co-op) or Duel opponent (larger white dot when moving openly)
      if (remoteFighter && remoteFighter.alive) {
        const showRemote = isCoop || !remoteFighter.sneaking;
        if (showRemote) {
          const mp = projectMini(remoteFighter.root.position.x, remoteFighter.root.position.z);
          const dR = Math.hypot(mp.x - R, mp.y - R);
          const cx = dR > R - 7 ? R + ((mp.x - R) / dR) * (R - 7) : mp.x;
          const cy = dR > R - 7 ? R + ((mp.y - R) / dR) * (R - 7) : mp.y;
          ctx.fillStyle = isCoop ? '#36e67c' : '#ffffff';
          ctx.strokeStyle = '#111';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(cx, cy, 4.8, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }
      }

      // Marks (clamped to rim when outside 55m!)
      for (const mk of [this.mark, this.remoteMark]) {
        if (!mk) continue;
        const mp = projectMini(mk.pos.x, mk.pos.z);
        const dR = Math.hypot(mp.x - R, mp.y - R);
        const cx = dR > R - 7 ? R + ((mp.x - R) / dR) * (R - 7) : mp.x;
        const cy = dR > R - 7 ? R + ((mp.y - R) / dR) * (R - 7) : mp.y;
        ctx.fillStyle = mk.color;
        ctx.strokeStyle = '#081218';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(cx, cy, 4.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }

      // Player center arrow pointing straight UP
      ctx.fillStyle = '#ffe58a';
      ctx.beginPath();
      ctx.moveTo(R, R - 7);
      ctx.lineTo(R - 4.5, R + 5);
      ctx.lineTo(R, R + 2.5);
      ctx.lineTo(R + 4.5, R + 5);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Rotate 'N' north badge around the mini-map rim!
      if (this.northBadge) {
        const na = playerYaw - Math.PI * 0.5; // -Z is north (top when yaw=0)
        const nr = R - 2;
        const nx = R + Math.cos(na) * nr;
        const ny = R + Math.sin(na) * nr;
        this.northBadge.style.left = `${nx}px`;
        this.northBadge.style.top = `${ny}px`;
      }
    }

    // 4. Render Full Map when Tab is held (North UP!)
    if (this.fullOpen && this.fullCtx) {
      const ctx = this.fullCtx;
      const W = this.fullCanvas.width;
      ctx.clearRect(0, 0, W, W);
      ctx.drawImage(this.baseCanvas, 0, 0, W, W);
      ctx.drawImage(this.fogCanvas, 0, 0, W, W);

      const toFull = (wx, wz) => ({
        x: ((wx - this.bounds.minX) / this.bounds.span) * W,
        y: ((wz - this.bounds.minZ) / this.bounds.span) * W
      });

      // Discovered landmarks
      ctx.font = '700 12px system-ui, sans-serif';
      ctx.textAlign = 'center';
      for (const lm of this.landmarks) {
        if (!lm.discovered) continue;
        const fp = toFull(lm.x, lm.z);
        ctx.fillStyle = 'rgba(0,0,0,0.75)';
        ctx.fillText(lm.name, fp.x + 1, fp.y + 1);
        ctx.fillStyle = '#fff5d8';
        ctx.fillText(lm.name, fp.x, fp.y);
      }

      // Enemies
      for (const e of enemies) {
        if (!e.alive || !e.mesh.visible) continue;
        const distP = Math.hypot(e.mesh.position.x - playerPos.x, e.mesh.position.z - playerPos.z);
        const showByEagle = eagleEye && distP <= 90;
        const active = e.alert || e.fireCooldown > 0 || (e.path && e.path.length > 0);
        if (!showByEagle && (!this.isRevealed(e.mesh.position.x, e.mesh.position.z) || !active)) continue;
        const fp = toFull(e.mesh.position.x, e.mesh.position.z);
        ctx.fillStyle = e.isBoss ? '#ff3026' : '#ff5544';
        ctx.beginPath();
        ctx.arc(fp.x, fp.y, e.isBoss ? 6.5 : 4.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Remote player dot
      if (remoteFighter && remoteFighter.alive && (isCoop || !remoteFighter.sneaking)) {
        const fp = toFull(remoteFighter.root.position.x, remoteFighter.root.position.z);
        ctx.fillStyle = isCoop ? '#36e67c' : '#ffffff';
        ctx.strokeStyle = '#111';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(fp.x, fp.y, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }

      // Marks
      for (const mk of [this.mark, this.remoteMark]) {
        if (!mk) continue;
        const fp = toFull(mk.pos.x, mk.pos.z);
        ctx.fillStyle = mk.color;
        ctx.strokeStyle = '#081218';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(fp.x, fp.y, 6.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }

      // Player triangle rotated to heading
      const pp = toFull(playerPos.x, playerPos.z);
      ctx.save();
      ctx.translate(pp.x, pp.y);
      ctx.rotate(-playerYaw);
      ctx.fillStyle = '#ffe58a';
      ctx.strokeStyle = '#111';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, -9);
      ctx.lineTo(-6, 7);
      ctx.lineTo(0, 3);
      ctx.lineTo(6, 7);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }
  }
}
