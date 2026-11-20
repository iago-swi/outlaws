import * as THREE from 'three';

const cache = new Map();

function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}

function finalizeTexture(canvas, repeatX = 1, repeatY = 1, isColor = true) {
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeatX, repeatY);
  if (isColor) {
    tex.colorSpace = THREE.SRGBColorSpace;
  }
  tex.anisotropy = 8;
  tex.needsUpdate = true;
  return tex;
}

function hash2D(x, y) {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return s - Math.floor(s);
}

/**
 * Generates paired color + bump textures for rich PBR materials
 */
export function getWoodPlanks(variant = 'western', repeatX = 2, repeatY = 2) {
  const key = `wood_${variant}_${repeatX}_${repeatY}`;
  if (cache.has(key)) return cache.get(key);

  const size = 512;
  const col = makeCanvas(size, size);
  const ctx = col.getContext('2d');
  const bump = makeCanvas(size, size);
  const bctx = bump.getContext('2d');

  const palettes = {
    western: ['#8b5a34', '#7a4c2a', '#9c673c', '#6e4223', '#a67346'],
    saloon:  ['#6a3820', '#5b2e19', '#794126', '#4f2614', '#864c2e'],
    weathered: ['#9c8669', '#8a765c', '#ab9578', '#7d6a52', '#b39e82'],
    darkJapan: ['#3d271c', '#332017', '#493022', '#2b1a12', '#523626'],
    cedar: ['#7d4e2d', '#6f4426', '#8a5935', '#633c20', '#94623c'],
    alpine: ['#6b4428', '#5c3920', '#7a4f30', '#4f301a', '#855838'],
    redLacquer: ['#b8291e', '#a32118', '#c73226', '#911c14', '#cf3b2e']
  };
  const pal = palettes[variant] || palettes.western;

  const planks = 8;
  const plankH = size / planks;

  for (let i = 0; i < planks; i++) {
    const y = i * plankH;
    const base = pal[i % pal.length];
    ctx.fillStyle = base;
    ctx.fillRect(0, y, size, plankH);

    bctx.fillStyle = '#9a9a9a';
    bctx.fillRect(0, y, size, plankH);

    // Fine wood grain fibers
    for (let g = 0; g < 36; g++) {
      const gy = y + Math.random() * plankH;
      const alpha = 0.05 + Math.random() * 0.1;
      ctx.strokeStyle = Math.random() > 0.5 ? `rgba(255,220,180,${alpha})` : `rgba(20,10,4,${alpha * 1.4})`;
      ctx.lineWidth = 1 + Math.random() * 2;
      ctx.beginPath();
      ctx.moveTo(0, gy);
      for (let x = 0; x <= size; x += 64) {
        ctx.lineTo(x, gy + Math.sin(x * 0.02 + i * 2.1 + g) * 2.2);
      }
      ctx.stroke();

      bctx.strokeStyle = Math.random() > 0.5 ? 'rgba(220,220,220,0.16)' : 'rgba(60,60,60,0.18)';
      bctx.lineWidth = 1.2;
      bctx.beginPath();
      bctx.moveTo(0, gy);
      bctx.lineTo(size, gy);
      bctx.stroke();
    }

    // Occasional wood knots
    if (hash2D(i, 3.7) > 0.45) {
      const kx = 60 + hash2D(i, 9.1) * (size - 120);
      const ky = y + plankH * (0.3 + hash2D(i, 5.2) * 0.4);
      const grad = ctx.createRadialGradient(kx, ky, 1, kx, ky, 12);
      grad.addColorStop(0, 'rgba(30,15,6,0.65)');
      grad.addColorStop(1, 'rgba(30,15,6,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.ellipse(kx, ky, 14, 7, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // Plank seam
    ctx.fillStyle = 'rgba(15, 8, 3, 0.85)';
    ctx.fillRect(0, y, size, 3);
    ctx.fillStyle = 'rgba(255, 225, 185, 0.14)';
    ctx.fillRect(0, y + 3, size, 2);

    bctx.fillStyle = '#141414';
    bctx.fillRect(0, y, size, 3.5);

    // Vertical end joint & nail heads
    const jointX = ((i * 173 + 95) % (size - 80)) + 40;
    ctx.fillStyle = 'rgba(12,6,2,0.75)';
    ctx.fillRect(jointX, y, 2.5, plankH);
    bctx.fillStyle = '#1a1a1a';
    bctx.fillRect(jointX, y, 2.5, plankH);

    // Nails
    for (const nx of [jointX - 10, jointX + 12]) {
      for (const ny of [y + 12, y + plankH - 12]) {
        ctx.fillStyle = '#241c16';
        ctx.beginPath();
        ctx.arc(nx, ny, 2.6, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  const result = {
    map: finalizeTexture(col, repeatX, repeatY, true),
    bumpMap: finalizeTexture(bump, repeatX, repeatY, false)
  };
  cache.set(key, result);
  return result;
}

export function getGroundTexture(theme = 'desert', repeatX = 24, repeatY = 24) {
  const key = `ground_${theme}_${repeatX}_${repeatY}`;
  if (cache.has(key)) return cache.get(key);

  const size = 512;
  const col = makeCanvas(size, size);
  const ctx = col.getContext('2d');
  const bump = makeCanvas(size, size);
  const bctx = bump.getContext('2d');

  if (theme === 'desert') {
    ctx.fillStyle = '#c48f56';
    ctx.fillRect(0, 0, size, size);
    bctx.fillStyle = '#808080';
    bctx.fillRect(0, 0, size, size);

    // Sun-baked ochre blotches & wagon dust ripples
    for (let i = 0; i < 420; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const r = 6 + Math.random() * 34;
      const tone = Math.random();
      ctx.fillStyle = tone > 0.6
        ? 'rgba(218, 168, 108, 0.16)'
        : tone > 0.25
          ? 'rgba(155, 96, 48, 0.16)'
          : 'rgba(122, 74, 38, 0.12)';
      ctx.beginPath();
      ctx.ellipse(x, y, r * 1.4, r * 0.7, Math.random() * Math.PI, 0, Math.PI * 2);
      ctx.fill();

      bctx.fillStyle = tone > 0.5 ? 'rgba(195,195,195,0.18)' : 'rgba(65,65,65,0.18)';
      bctx.beginPath();
      bctx.arc(x, y, r * 0.45, 0, Math.PI * 2);
      bctx.fill();
    }
    // Small pebbles
    for (let i = 0; i < 240; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      ctx.fillStyle = Math.random() > 0.5 ? '#8f5d34' : '#dcb27b';
      ctx.fillRect(x, y, 2 + Math.random() * 3, 2 + Math.random() * 2);
    }
  } else if (theme === 'japan_moss') {
    ctx.fillStyle = '#4e6338';
    ctx.fillRect(0, 0, size, size);
    bctx.fillStyle = '#808080';
    bctx.fillRect(0, 0, size, size);

    for (let i = 0; i < 500; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const r = 8 + Math.random() * 26;
      const t = Math.random();
      ctx.fillStyle = t > 0.65
        ? 'rgba(98, 128, 62, 0.22)'
        : t > 0.3
          ? 'rgba(64, 84, 42, 0.22)'
          : 'rgba(115, 92, 62, 0.18)';
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();

      bctx.fillStyle = t > 0.5 ? 'rgba(200,200,200,0.16)' : 'rgba(60,60,60,0.16)';
      bctx.beginPath();
      bctx.arc(x, y, r * 0.5, 0, Math.PI * 2);
      bctx.fill();
    }
    // Fallen sakura petals speckles
    for (let i = 0; i < 95; i++) {
      ctx.fillStyle = 'rgba(255, 196, 214, 0.65)';
      ctx.beginPath();
      ctx.ellipse(Math.random() * size, Math.random() * size, 3, 1.8, Math.random() * 3, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (theme === 'zen_sand') {
    ctx.fillStyle = '#dfd8c8';
    ctx.fillRect(0, 0, size, size);
    bctx.fillStyle = '#808080';
    bctx.fillRect(0, 0, size, size);

    // Raked wave grooves
    for (let y = 0; y < size; y += 16) {
      ctx.strokeStyle = 'rgba(145, 136, 120, 0.55)';
      ctx.lineWidth = 5;
      ctx.beginPath();
      for (let x = 0; x <= size; x += 16) {
        const wy = y + Math.sin((x / size) * Math.PI * 4) * 5;
        if (x === 0) ctx.moveTo(x, wy);
        else ctx.lineTo(x, wy);
      }
      ctx.stroke();

      bctx.strokeStyle = '#303030';
      bctx.lineWidth = 6;
      bctx.beginPath();
      for (let x = 0; x <= size; x += 16) {
        const wy = y + Math.sin((x / size) * Math.PI * 4) * 5;
        if (x === 0) bctx.moveTo(x, wy);
        else bctx.lineTo(x, wy);
      }
      bctx.stroke();
    }
  } else if (theme === 'alpine_meadow') {
    ctx.fillStyle = '#4f8236';
    ctx.fillRect(0, 0, size, size);
    bctx.fillStyle = '#808080';
    bctx.fillRect(0, 0, size, size);

    for (let i = 0; i < 650; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const r = 6 + Math.random() * 26;
      const t = Math.random();
      ctx.fillStyle = t > 0.6
        ? 'rgba(112, 162, 62, 0.24)'
        : t > 0.25
          ? 'rgba(62, 110, 42, 0.22)'
          : 'rgba(146, 178, 72, 0.16)';
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();

      bctx.fillStyle = t > 0.5 ? 'rgba(200,200,200,0.16)' : 'rgba(70,70,70,0.16)';
      bctx.beginPath();
      bctx.arc(x, y, r * 0.4, 0, Math.PI * 2);
      bctx.fill();
    }
    // Alpine wildflowers (yellow, white, gentian blue)
    const flowerCols = ['#ffe359', '#ffffff', '#63a8ff', '#ff94b8'];
    for (let i = 0; i < 110; i++) {
      ctx.fillStyle = flowerCols[i % flowerCols.length];
      ctx.beginPath();
      ctx.arc(Math.random() * size, Math.random() * size, 2.2, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (theme === 'cobble') {
    ctx.fillStyle = '#6c655d';
    ctx.fillRect(0, 0, size, size);
    bctx.fillStyle = '#252525';
    bctx.fillRect(0, 0, size, size);

    const rows = 8;
    const cols = 8;
    const cw = size / cols;
    const ch = size / rows;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const off = (r % 2) * (cw * 0.5);
        const x = (c * cw + off) % size;
        const y = r * ch;
        const shade = 118 + Math.floor(hash2D(c, r) * 44);
        ctx.fillStyle = `rgb(${shade}, ${shade - 4}, ${shade - 10})`;
        ctx.fillRect(x + 3, y + 3, cw - 6, ch - 6);
        bctx.fillStyle = '#d4d4d4';
        bctx.fillRect(x + 3, y + 3, cw - 6, ch - 6);
      }
    }
  } else if (theme === 'greek_sand') {
    ctx.fillStyle = '#e5cf9c';
    ctx.fillRect(0, 0, size, size);
    bctx.fillStyle = '#808080';
    bctx.fillRect(0, 0, size, size);

    for (let i = 0; i < 420; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const r = 8 + Math.random() * 28;
      ctx.fillStyle = Math.random() > 0.5 ? 'rgba(248, 234, 198, 0.24)' : 'rgba(196, 162, 104, 0.16)';
      ctx.beginPath();
      ctx.ellipse(x, y, r * 1.5, r * 0.65, 0.25, 0, Math.PI * 2);
      ctx.fill();
      bctx.fillStyle = Math.random() > 0.5 ? 'rgba(190,190,190,0.16)' : 'rgba(70,70,70,0.16)';
      bctx.beginPath();
      bctx.arc(x, y, r * 0.4, 0, Math.PI * 2);
      bctx.fill();
    }
  } else if (theme === 'arctic_snow') {
    ctx.fillStyle = '#e6eff8';
    ctx.fillRect(0, 0, size, size);
    bctx.fillStyle = '#828282';
    bctx.fillRect(0, 0, size, size);

    for (let i = 0; i < 380; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const r = 10 + Math.random() * 34;
      ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255, 255, 255, 0.35)' : 'rgba(176, 202, 230, 0.22)';
      ctx.beginPath();
      ctx.ellipse(x, y, r * 1.4, r * 0.7, 0.4, 0, Math.PI * 2);
      ctx.fill();
      bctx.fillStyle = Math.random() > 0.5 ? 'rgba(210,210,210,0.18)' : 'rgba(65,65,65,0.18)';
      bctx.beginPath();
      bctx.arc(x, y, r * 0.45, 0, Math.PI * 2);
      bctx.fill();
    }
    // Crisp frost glints
    for (let i = 0; i < 120; i++) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.fillRect(Math.random() * size, Math.random() * size, 2, 2);
    }
  }

  const res = {
    map: finalizeTexture(col, repeatX, repeatY, true),
    bumpMap: finalizeTexture(bump, repeatX, repeatY, false)
  };
  cache.set(key, res);
  return res;
}

export function getStoneTexture(variant = 'castle', repeatX = 2, repeatY = 2) {
  const key = `stone_${variant}_${repeatX}_${repeatY}`;
  if (cache.has(key)) return cache.get(key);

  const size = 512;
  const col = makeCanvas(size, size);
  const ctx = col.getContext('2d');
  const bump = makeCanvas(size, size);
  const bctx = bump.getContext('2d');

  const mortar = variant === 'redrock' ? '#7a3b22' : variant === 'temple' ? '#4a4d46' : '#57534e';
  ctx.fillStyle = mortar;
  ctx.fillRect(0, 0, size, size);
  bctx.fillStyle = '#222222';
  bctx.fillRect(0, 0, size, size);

  if (variant === 'redrock') {
    // Stratified desert canyon sandstone bands
    for (let y = 0; y < size; y += 6) {
      const n = Math.sin(y * 0.045) * 18 + Math.cos(y * 0.11) * 10;
      const r = Math.min(255, Math.max(80, 178 + n));
      const g = Math.min(255, Math.max(40, 86 + n * 0.6));
      const b = Math.min(255, Math.max(25, 50 + n * 0.4));
      ctx.fillStyle = `rgb(${r | 0},${g | 0},${b | 0})`;
      ctx.fillRect(0, y, size, 7);
      const bv = Math.min(240, Math.max(40, 128 + n * 2.5)) | 0;
      bctx.fillStyle = `rgb(${bv},${bv},${bv})`;
      bctx.fillRect(0, y, size, 7);
    }
  } else {
    const rows = 8;
    const rowH = size / rows;
    for (let r = 0; r < rows; r++) {
      let x = (r % 2) * -36;
      while (x < size) {
        const w = 64 + Math.floor(hash2D(x, r) * 58);
        const shade = variant === 'temple'
          ? 108 + Math.floor(hash2D(x + 3, r + 5) * 42)
          : 122 + Math.floor(hash2D(x + 1, r + 9) * 52);
        const greenTint = variant === 'temple' ? 6 : 0;
        ctx.fillStyle = `rgb(${shade}, ${shade + greenTint}, ${shade - 4})`;
        ctx.fillRect(x + 3, r * rowH + 3, w - 5, rowH - 5);

        // Specular highlight top edge
        ctx.fillStyle = 'rgba(255,255,255,0.12)';
        ctx.fillRect(x + 3, r * rowH + 3, w - 5, 4);

        bctx.fillStyle = '#cfcfcf';
        bctx.fillRect(x + 3, r * rowH + 3, w - 5, rowH - 5);
        x += w;
      }
    }
    // Subtle moss / weathering
    for (let i = 0; i < 90; i++) {
      ctx.fillStyle = variant === 'temple' ? 'rgba(72, 108, 52, 0.22)' : 'rgba(60, 56, 48, 0.16)';
      ctx.beginPath();
      ctx.arc(Math.random() * size, Math.random() * size, 6 + Math.random() * 18, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const res = {
    map: finalizeTexture(col, repeatX, repeatY, true),
    bumpMap: finalizeTexture(bump, repeatX, repeatY, false)
  };
  cache.set(key, res);
  return res;
}

export function getShojiTexture(repeatX = 2, repeatY = 1) {
  const key = `shoji_${repeatX}_${repeatY}`;
  if (cache.has(key)) return cache.get(key);

  const size = 512;
  const col = makeCanvas(size, size);
  const ctx = col.getContext('2d');

  // Warm backlit rice paper gradient
  const grad = ctx.createLinearGradient(0, 0, 0, size);
  grad.addColorStop(0, '#fff2d2');
  grad.addColorStop(0.55, '#f6dfb2');
  grad.addColorStop(1, '#e6c388');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);

  // Subtle paper fibers
  for (let i = 0; i < 200; i++) {
    ctx.fillStyle = 'rgba(255,255,255,0.14)';
    ctx.fillRect(Math.random() * size, Math.random() * size, 12, 1);
  }

  // Dark cedar lattice grid
  ctx.fillStyle = '#2d1a11';
  const cols = 6;
  const rows = 8;
  for (let c = 0; c <= cols; c++) {
    const x = (c / cols) * size;
    ctx.fillRect(x - 5, 0, 10, size);
  }
  for (let r = 0; r <= rows; r++) {
    const y = (r / rows) * size;
    ctx.fillRect(0, y - 4, size, 8);
  }
  // Outer thick timber frame
  ctx.lineWidth = 24;
  ctx.strokeStyle = '#23130c';
  ctx.strokeRect(0, 0, size, size);

  const tex = finalizeTexture(col, repeatX, repeatY, true);
  cache.set(key, tex);
  return tex;
}

export function getRoofTileTexture(variant = 'japan', repeatX = 4, repeatY = 2) {
  const key = `roof_${variant}_${repeatX}_${repeatY}`;
  if (cache.has(key)) return cache.get(key);

  const size = 512;
  const col = makeCanvas(size, size);
  const ctx = col.getContext('2d');
  const bump = makeCanvas(size, size);
  const bctx = bump.getContext('2d');

  if (variant === 'japan') {
    ctx.fillStyle = '#2e353f';
    ctx.fillRect(0, 0, size, size);
    bctx.fillStyle = '#404040';
    bctx.fillRect(0, 0, size, size);

    const cols = 10;
    const rows = 10;
    const cw = size / cols;
    const ch = size / rows;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * cw;
        const y = r * ch;
        const grad = ctx.createLinearGradient(x, y, x + cw, y);
        grad.addColorStop(0, '#1e242c');
        grad.addColorStop(0.5, '#4c5766');
        grad.addColorStop(1, '#1d232b');
        ctx.fillStyle = grad;
        ctx.fillRect(x + 2, y + 2, cw - 4, ch - 3);

        ctx.fillStyle = 'rgba(0,0,0,0.55)';
        ctx.fillRect(x, y + ch - 4, cw, 4);

        bctx.fillStyle = '#cccccc';
        bctx.beginPath();
        bctx.arc(x + cw / 2, y + ch / 2, cw * 0.42, 0, Math.PI * 2);
        bctx.fill();
      }
    }
  } else if (variant === 'terracotta') {
    ctx.fillStyle = '#a8472a';
    ctx.fillRect(0, 0, size, size);
    bctx.fillStyle = '#404040';
    bctx.fillRect(0, 0, size, size);

    const cols = 10;
    const rows = 9;
    const cw = size / cols;
    const ch = size / rows;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * cw;
        const y = r * ch;
        const grad = ctx.createLinearGradient(x, y, x + cw, y);
        grad.addColorStop(0, '#8c351e');
        grad.addColorStop(0.5, '#d46b44');
        grad.addColorStop(1, '#7a2b17');
        ctx.fillStyle = grad;
        ctx.fillRect(x + 2, y + 2, cw - 4, ch - 3);
        ctx.fillStyle = 'rgba(0,0,0,0.4)';
        ctx.fillRect(x, y + ch - 4, cw, 4);
        bctx.fillStyle = '#d0d0d0';
        bctx.fillRect(x + 2, y + 2, cw - 4, ch - 4);
      }
    }
  } else {
    // Swiss timber shingles
    ctx.fillStyle = '#4a3525';
    ctx.fillRect(0, 0, size, size);
    bctx.fillStyle = '#333333';
    bctx.fillRect(0, 0, size, size);
    const rows = 12;
    const cols = 10;
    const cw = size / cols;
    const ch = size / rows;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const off = (r % 2) * (cw * 0.5);
        const x = (c * cw + off) % size;
        const y = r * ch;
        const v = 78 + Math.floor(hash2D(c, r) * 34);
        ctx.fillStyle = `rgb(${v + 18}, ${v}, ${v - 16})`;
        ctx.fillRect(x + 1, y + 1, cw - 3, ch - 3);
        bctx.fillStyle = '#c8c8c8';
        bctx.fillRect(x + 1, y + 1, cw - 3, ch - 3);
      }
    }
  }

  const res = {
    map: finalizeTexture(col, repeatX, repeatY, true),
    bumpMap: finalizeTexture(bump, repeatX, repeatY, false)
  };
  cache.set(key, res);
  return res;
}

export function getAlpineTimberWall(repeatX = 1, repeatY = 1) {
  const key = `alpine_fachwerk_${repeatX}_${repeatY}`;
  if (cache.has(key)) return cache.get(key);

  const size = 512;
  const col = makeCanvas(size, size);
  const ctx = col.getContext('2d');

  // Warm cream plaster
  ctx.fillStyle = '#ebe1cd';
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 300; i++) {
    ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.16)' : 'rgba(145,125,95,0.12)';
    ctx.beginPath();
    ctx.arc(Math.random() * size, Math.random() * size, 6 + Math.random() * 20, 0, Math.PI * 2);
    ctx.fill();
  }

  // Dark walnut half-timber beams
  ctx.strokeStyle = '#3e2718';
  ctx.fillStyle = '#3e2718';
  ctx.fillRect(0, 0, size, 28);
  ctx.fillRect(0, size - 28, size, 28);
  ctx.fillRect(0, size / 2 - 12, size, 24);
  ctx.fillRect(0, 0, 26, size);
  ctx.fillRect(size - 26, 0, 26, size);
  ctx.fillRect(size / 2 - 12, 0, 24, size);

  // Diagonal braces
  ctx.lineWidth = 20;
  ctx.beginPath();
  ctx.moveTo(20, size / 2);
  ctx.lineTo(size / 2, 20);
  ctx.moveTo(size - 20, size / 2);
  ctx.lineTo(size / 2, 20);
  ctx.stroke();

  const tex = finalizeTexture(col, repeatX, repeatY, true);
  cache.set(key, tex);
  return tex;
}

/**
 * Hand-painted vintage signboards (SALOON, SHERIFF, BANK, WANTED, KANJI, SWISS/AUSTRIAN BANNERS)
 */
export function createSignTexture(text, opts = {}) {
  const {
    bg = '#3b2112',
    border = '#d49a45',
    fg = '#f8e6c1',
    sub = '',
    width = 512,
    height = 160,
    font = 'bold 72px Georgia, serif'
  } = opts;

  const key = `sign_${text}_${sub}_${bg}_${fg}`;
  if (cache.has(key)) return cache.get(key);

  const c = makeCanvas(width, height);
  const ctx = c.getContext('2d');

  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  // Subtle weathered plank lines
  for (let i = 0; i < 6; i++) {
    ctx.fillStyle = 'rgba(0,0,0,0.16)';
    ctx.fillRect(0, (i / 6) * height, width, 2);
  }

  ctx.strokeStyle = border;
  ctx.lineWidth = 10;
  ctx.strokeRect(10, 10, width - 20, height - 20);
  ctx.lineWidth = 3;
  ctx.strokeRect(20, 20, width - 40, height - 40);

  ctx.fillStyle = fg;
  ctx.font = font;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'rgba(0,0,0,0.7)';
  ctx.shadowBlur = 4;
  ctx.shadowOffsetY = 3;
  ctx.fillText(text, width / 2, sub ? height * 0.44 : height * 0.52);

  if (sub) {
    ctx.font = 'bold 24px Georgia, serif';
    ctx.fillStyle = border;
    ctx.fillText(sub, width / 2, height * 0.78);
  }

  const tex = finalizeTexture(c, 1, 1, true);
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  cache.set(key, tex);
  return tex;
}


export function createBannerTexture(type = 'austria') {
  const key = `banner_${type}`;
  if (cache.has(key)) return cache.get(key);

  const c = makeCanvas(256, 512);
  const ctx = c.getContext('2d');

  if (type === 'austria') {
    // Habsburg Red-White-Red triband banner with black eagle silhouette
    ctx.fillStyle = '#c41e22';
    ctx.fillRect(0, 0, 256, 512);
    ctx.fillStyle = '#f2ede0';
    ctx.fillRect(0, 170, 256, 170);
    // Gold trim
    ctx.strokeStyle = '#d4a63e';
    ctx.lineWidth = 14;
    ctx.strokeRect(7, 7, 242, 498);
    // Heraldic crest in center
    ctx.fillStyle = '#1d1916';
    ctx.beginPath();
    ctx.moveTo(128, 195);
    ctx.lineTo(170, 245);
    ctx.lineTo(148, 258);
    ctx.lineTo(160, 315);
    ctx.lineTo(128, 294);
    ctx.lineTo(96, 315);
    ctx.lineTo(108, 258);
    ctx.lineTo(86, 245);
    ctx.closePath();
    ctx.fill();
  } else if (type === 'uri') {
    // Authentic Canton of Uri banner: golden yellow field with black Uristier (bull head), red tongue & red nose ring!
    ctx.fillStyle = '#f2c629';
    ctx.fillRect(0, 0, 256, 512);
    ctx.strokeStyle = '#1a1510';
    ctx.lineWidth = 10;
    ctx.strokeRect(5, 5, 246, 502);

    // Curved black horns
    ctx.strokeStyle = '#141210';
    ctx.lineWidth = 22;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(78, 178);
    ctx.quadraticCurveTo(32, 130, 56, 78);
    ctx.moveTo(178, 178);
    ctx.quadraticCurveTo(224, 130, 200, 78);
    ctx.stroke();

    // Ears
    ctx.fillStyle = '#141210';
    ctx.beginPath();
    ctx.ellipse(54, 194, 24, 11, -0.3, 0, Math.PI * 2);
    ctx.ellipse(202, 194, 24, 11, 0.3, 0, Math.PI * 2);
    ctx.fill();

    // Bull head & brow
    ctx.beginPath();
    ctx.moveTo(70, 172);
    ctx.lineTo(186, 172);
    ctx.lineTo(166, 305);
    ctx.quadraticCurveTo(128, 336, 90, 305);
    ctx.closePath();
    ctx.fill();

    // Fierce white eyes with red pupils
    ctx.fillStyle = '#fff5dc';
    ctx.beginPath();
    ctx.ellipse(98, 224, 14, 9, 0.15, 0, Math.PI * 2);
    ctx.ellipse(158, 224, 14, 9, -0.15, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#c41e22';
    ctx.beginPath();
    ctx.arc(100, 224, 5, 0, Math.PI * 2);
    ctx.arc(156, 224, 5, 0, Math.PI * 2);
    ctx.fill();

    // Red tongue protruding below muzzle
    ctx.fillStyle = '#d12026';
    ctx.beginPath();
    ctx.moveTo(116, 316);
    ctx.quadraticCurveTo(128, 378, 140, 316);
    ctx.closePath();
    ctx.fill();

    // Iconic crimson nose ring
    ctx.strokeStyle = '#d12026';
    ctx.lineWidth = 11;
    ctx.beginPath();
    ctx.arc(128, 304, 22, 0.15 * Math.PI, 0.85 * Math.PI);
    ctx.stroke();

    // Banner caption
    ctx.fillStyle = '#1a1510';
    ctx.font = 'bold 34px Georgia, serif';
    ctx.textAlign = 'center';
    ctx.fillText('URI • 1307', 128, 456);
  } else if (type === 'swiss') {
    ctx.fillStyle = '#c92323';
    ctx.fillRect(0, 0, 256, 512);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(102, 130, 52, 190);
    ctx.fillRect(33, 199, 190, 52);
    ctx.strokeStyle = '#e8c468';
    ctx.lineWidth = 10;
    ctx.strokeRect(5, 5, 246, 502);
  } else if (type === 'japan') {
    ctx.fillStyle = '#1b2845';
    ctx.fillRect(0, 0, 256, 512);
    ctx.strokeStyle = '#e3b859';
    ctx.lineWidth = 10;
    ctx.strokeRect(8, 8, 240, 496);
    // Gold mon crest (circle + three commas)
    ctx.strokeStyle = '#f0c663';
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.arc(128, 180, 62, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#f0c663';
    ctx.font = 'bold 94px Georgia, serif';
    ctx.textAlign = 'center';
    ctx.fillText('武', 128, 212);
    ctx.fillText('士', 128, 370);
  }

  const tex = finalizeTexture(c, 1, 1, true);
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  cache.set(key, tex);
  return tex;
}


export function createWantedPosterTexture() {
  const key = 'wanted_poster';
  if (cache.has(key)) return cache.get(key);

  const c = makeCanvas(256, 340);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#e5cf9e';
  ctx.fillRect(0, 0, 256, 340);
  ctx.strokeStyle = '#4a3118';
  ctx.lineWidth = 8;
  ctx.strokeRect(10, 10, 236, 320);

  ctx.fillStyle = '#2d180a';
  ctx.font = 'bold 40px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.fillText('WANTED', 128, 56);

  // Silhouette outlaw portrait
  ctx.fillStyle = '#3b2412';
  ctx.beginPath();
  ctx.ellipse(128, 130, 56, 12, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillRect(98, 96, 60, 34);
  ctx.beginPath();
  ctx.arc(128, 162, 26, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillRect(88, 190, 80, 46);

  ctx.font = 'bold 26px Georgia, serif';
  ctx.fillText('DEAD OR ALIVE', 128, 272);
  ctx.fillStyle = '#992214';
  ctx.font = 'bold 34px Georgia, serif';
  ctx.fillText('$5,000', 128, 312);

  const tex = finalizeTexture(c, 1, 1, true);
  cache.set(key, tex);
  return tex;
}

export function getMarbleTexture(repeatX = 2, repeatY = 2) {
  const key = `marble_${repeatX}_${repeatY}`;
  if (cache.has(key)) return cache.get(key);

  const size = 512;
  const col = makeCanvas(size, size);
  const ctx = col.getContext('2d');
  const bump = makeCanvas(size, size);
  const bctx = bump.getContext('2d');

  ctx.fillStyle = '#f5f1e8';
  ctx.fillRect(0, 0, size, size);
  bctx.fillStyle = '#909090';
  bctx.fillRect(0, 0, size, size);

  // Delicate Pentelic marble veins
  for (let v = 0; v < 26; v++) {
    ctx.strokeStyle = v % 3 === 0 ? 'rgba(186, 174, 152, 0.26)' : 'rgba(155, 162, 172, 0.2)';
    ctx.lineWidth = 1.5 + Math.random() * 3.5;
    ctx.beginPath();
    let y = Math.random() * size;
    ctx.moveTo(0, y);
    for (let x = 0; x <= size; x += 32) {
      y += Math.sin(x * 0.02 + v) * 8 + (Math.random() - 0.5) * 6;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  // Subtle ashlar block joints
  ctx.strokeStyle = 'rgba(140, 128, 108, 0.35)';
  ctx.lineWidth = 2;
  bctx.strokeStyle = '#383838';
  bctx.lineWidth = 3;
  for (let r = 0; r < 4; r++) {
    const y = (r / 4) * size;
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(size, y); ctx.stroke();
    bctx.beginPath(); bctx.moveTo(0, y); bctx.lineTo(size, y); bctx.stroke();
  }

  const res = {
    map: finalizeTexture(col, repeatX, repeatY, true),
    bumpMap: finalizeTexture(bump, repeatX, repeatY, false)
  };
  cache.set(key, res);
  return res;
}

export function createSpartanShieldTexture() {
  const key = 'spartan_shield_lambda';
  if (cache.has(key)) return cache.get(key);

  const size = 256;
  const c = makeCanvas(size, size);
  const ctx = c.getContext('2d');

  // Gleaming brushed bronze disc
  const grad = ctx.createRadialGradient(128, 128, 12, 128, 128, 126);
  grad.addColorStop(0, '#f3ca6b');
  grad.addColorStop(0.7, '#c78f34');
  grad.addColorStop(0.92, '#8c5d19');
  grad.addColorStop(1, '#5e3c0e');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(128, 128, 126, 0, Math.PI * 2);
  ctx.fill();

  // Outer hammered rim
  ctx.strokeStyle = '#ffe394';
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(128, 128, 114, 0, Math.PI * 2);
  ctx.stroke();

  // Bold Crimson Spartan Lambda (Λ)
  ctx.strokeStyle = '#9e1919';
  ctx.lineWidth = 24;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'miter';
  ctx.beginPath();
  ctx.moveTo(64, 198);
  ctx.lineTo(128, 54);
  ctx.lineTo(192, 198);
  ctx.stroke();

  const tex = finalizeTexture(c, 1, 1, true);
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  cache.set(key, tex);
  return tex;
}


export function createVikingShieldTexture(variant = 0) {
  const key = `viking_shield_${variant}`;
  if (cache.has(key)) return cache.get(key);

  const size = 256;
  const c = makeCanvas(size, size);
  const ctx = c.getContext('2d');

  const pairs = [
    ['#a82424', '#e8dec8'],
    ['#204b7a', '#e8dec8'],
    ['#1e523a', '#d9a438'],
    ['#8c2420', '#d9a438']
  ];
  const [c1, c2] = pairs[variant % pairs.length];

  // Quartered / spoked historical Nordic round shield
  for (let i = 0; i < 8; i++) {
    ctx.fillStyle = i % 2 === 0 ? c1 : c2;
    ctx.beginPath();
    ctx.moveTo(128, 128);
    ctx.arc(128, 128, 122, (i * Math.PI) / 4, ((i + 1) * Math.PI) / 4);
    ctx.closePath();
    ctx.fill();
  }
  // Rawhide/iron rim
  ctx.strokeStyle = '#4a3a2a';
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.arc(128, 128, 118, 0, Math.PI * 2);
  ctx.stroke();

  // Center iron shield boss (umbo)
  const boss = ctx.createRadialGradient(122, 122, 4, 128, 128, 30);
  boss.addColorStop(0, '#eef3f7');
  boss.addColorStop(0.6, '#7a8490');
  boss.addColorStop(1, '#2b3036');
  ctx.fillStyle = boss;
  ctx.beginPath();
  ctx.arc(128, 128, 28, 0, Math.PI * 2);
  ctx.fill();

  const tex = finalizeTexture(c, 1, 1, true);
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  cache.set(key, tex);
  return tex;
}


export function createSailTexture(variant = 'greece') {
  const key = `sail_${variant}`;
  if (cache.has(key)) return cache.get(key);

  const c = makeCanvas(256, 256);
  const ctx = c.getContext('2d');
  const stripes = 6;
  const sw = 256 / stripes;
  const colA = variant === 'greece' ? '#f5efe2' : '#f2e8d5';
  const colB = variant === 'greece' ? '#2366a8' : '#a82222';
  for (let i = 0; i < stripes; i++) {
    ctx.fillStyle = i % 2 === 0 ? colA : colB;
    ctx.fillRect(i * sw, 0, sw + 1, 256);
  }
  ctx.strokeStyle = 'rgba(0,0,0,0.18)';
  ctx.lineWidth = 4;
  ctx.strokeRect(2, 2, 252, 252);

  const tex = finalizeTexture(c, 1, 1, true);
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  cache.set(key, tex);
  return tex;
}



export function getConcreteTexture(repeatX = 2, repeatY = 2) {
  const key = `concrete_${repeatX}_${repeatY}`;
  if (cache.has(key)) return cache.get(key);

  const size = 512;
  const col = makeCanvas(size, size);
  const ctx = col.getContext('2d');
  const bump = makeCanvas(size, size);
  const bctx = bump.getContext('2d');

  ctx.fillStyle = '#7e817d';
  ctx.fillRect(0, 0, size, size);
  bctx.fillStyle = '#808080';
  bctx.fillRect(0, 0, size, size);

  for (let y = 0; y < size; y += 64) {
    ctx.fillStyle = 'rgba(42, 45, 42, 0.35)';
    ctx.fillRect(0, y, size, 3);
    bctx.fillStyle = '#383838';
    bctx.fillRect(0, y, size, 3);
  }
  for (let i = 0; i < 360; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const r = 6 + Math.random() * 24;
    ctx.fillStyle = Math.random() > 0.5 ? 'rgba(170,174,168,0.14)' : 'rgba(55,58,54,0.16)';
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  for (let i = 0; i < 45; i++) {
    const x = Math.random() * size;
    ctx.fillStyle = 'rgba(45, 50, 42, 0.16)';
    ctx.fillRect(x, 0, 3 + Math.random() * 6, size);
  }

  const res = {
    map: finalizeTexture(col, repeatX, repeatY, true),
    bumpMap: finalizeTexture(bump, repeatX, repeatY, false)
  };
  cache.set(key, res);
  return res;
}

/**
 * Plain military bar cross (Balkenkreuz) — strictly no forbidden political symbols
 */
export function createBalkenkreuzTexture(bgHex = '#565c52') {
  const key = `balkenkreuz_${bgHex}`;
  if (cache.has(key)) return cache.get(key);

  const size = 256;
  const c = makeCanvas(size, size);
  const ctx = c.getContext('2d');

  ctx.fillStyle = bgHex;
  ctx.fillRect(0, 0, size, size);

  ctx.fillStyle = '#ebe8df';
  ctx.fillRect(100, 32, 56, 192);
  ctx.fillRect(32, 100, 192, 56);

  ctx.fillStyle = '#1b1d1c';
  ctx.fillRect(110, 42, 36, 172);
  ctx.fillRect(42, 110, 172, 36);

  const tex = finalizeTexture(c, 1, 1, true);
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  cache.set(key, tex);
  return tex;
}
