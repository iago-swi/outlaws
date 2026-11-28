import * as THREE from 'three';

/**
 * Atmospheric Sky Dome with procedural sun disc, scattering halo, and stylized painted clouds
 */
export function createSkyDome(config) {
  const {
    topColor = 0x2a1c3b,
    midColor = 0xd96b2b,
    horizonColor = 0xffc168,
    sunColor = 0xfff2c6,
    sunDirection = new THREE.Vector3(0.45, 0.22, -0.86).normalize(),
    cloudTint = 0xffd59c,
    cloudDensity = 0.45
  } = config;

  const geo = new THREE.SphereGeometry(420, 40, 28);
  const uniforms = {
    uTopColor: { value: new THREE.Color(topColor) },
    uMidColor: { value: new THREE.Color(midColor) },
    uHorizonColor: { value: new THREE.Color(horizonColor) },
    uSunColor: { value: new THREE.Color(sunColor) },
    uCloudTint: { value: new THREE.Color(cloudTint) },
    uSunDir: { value: sunDirection.clone().normalize() },
    uCloudDensity: { value: cloudDensity },
    uTime: { value: 0 }
  };

  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms,
    vertexShader: /* glsl */ `
      varying vec3 vWorldDir;
      void main() {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldDir = normalize(position);
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uTopColor;
      uniform vec3 uMidColor;
      uniform vec3 uHorizonColor;
      uniform vec3 uSunColor;
      uniform vec3 uCloudTint;
      uniform vec3 uSunDir;
      uniform float uCloudDensity;
      uniform float uTime;
      varying vec3 vWorldDir;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 4; i++) {
          v += a * noise(p);
          p *= 2.04;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec3 dir = normalize(vWorldDir);
        float h = clamp(dir.y, 0.0, 1.0);

        // 3-band atmospheric sky gradient
        vec3 sky = mix(uHorizonColor, uMidColor, smoothstep(0.0, 0.28, h));
        sky = mix(sky, uTopColor, smoothstep(0.22, 0.85, h));

        // Sun glow & crisp solar disc
        float sunDot = max(dot(dir, normalize(uSunDir)), 0.0);
        float halo = pow(sunDot, 7.0) * 0.45 + pow(sunDot, 48.0) * 0.65;
        float disc = smoothstep(0.9965, 0.9988, sunDot);
        sky += uSunColor * halo * 0.85;
        sky = mix(sky, uSunColor * 1.5, disc);

        // Stylized drifting cloud bands
        if (dir.y > 0.03) {
          vec2 uv = dir.xz / (dir.y + 0.22) * 1.35;
          uv.x += uTime * 0.012;
          uv.y -= uTime * 0.005;
          float n = fbm(uv * 1.5);
          float clouds = smoothstep(0.48, 0.78, n) * uCloudDensity * smoothstep(0.03, 0.22, dir.y) * smoothstep(0.95, 0.4, dir.y);
          vec3 cCol = mix(uCloudTint, uSunColor * 1.15, pow(sunDot, 4.0) * 0.65);
          sky = mix(sky, cCol, clouds);
        }

        // Horizon atmospheric warmth
        float horizBand = exp(-abs(dir.y) * 10.0) * 0.25;
        sky += uHorizonColor * horizBand;

        gl_FragColor = vec4(sky, 1.0);
      }
    `
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  return { mesh, uniforms };
}

/**
 * Shimmering Animated Water Plane (Glacial Lake, Stream, Koi Pond)
 */
export function createWaterMesh(width, depth, options = {}) {
  const {
    deepColor = 0x0b5269,
    shallowColor = 0x2ea3a8,
    foamColor = 0xdff8ff,
    sunColor = 0xfff5d6,
    sunDir = new THREE.Vector3(0.4, 0.6, -0.6).normalize(),
    opacity = 0.88,
    waveScale = 0.14
  } = options;

  const geo = new THREE.PlaneGeometry(width, depth, 64, 64);
  geo.rotateX(-Math.PI / 2);

  const uniforms = {
    uTime: { value: 0 },
    uDeepColor: { value: new THREE.Color(deepColor) },
    uShallowColor: { value: new THREE.Color(shallowColor) },
    uFoamColor: { value: new THREE.Color(foamColor) },
    uSunColor: { value: new THREE.Color(sunColor) },
    uSunDir: { value: sunDir.clone().normalize() },
    uOpacity: { value: opacity },
    uWaveScale: { value: waveScale }
  };

  const mat = new THREE.ShaderMaterial({
    transparent: true,
    uniforms,
    vertexShader: /* glsl */ `
      uniform float uTime;
      uniform float uWaveScale;
      varying vec3 vWorldPos;
      varying vec2 vUv;
      varying float vWave;
      void main() {
        vUv = uv;
        vec3 pos = position;
        float w1 = sin(pos.x * 0.45 + uTime * 1.9) * cos(pos.z * 0.38 + uTime * 1.4);
        float w2 = sin((pos.x * 0.9 - pos.z * 0.7) + uTime * 2.7) * 0.45;
        float h = (w1 + w2) * uWaveScale;
        pos.y += h;
        vWave = h;
        vec4 wp = modelMatrix * vec4(pos, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uTime;
      uniform vec3 uDeepColor;
      uniform vec3 uShallowColor;
      uniform vec3 uFoamColor;
      uniform vec3 uSunColor;
      uniform vec3 uSunDir;
      uniform float uOpacity;
      varying vec3 vWorldPos;
      varying vec2 vUv;
      varying float vWave;

      void main() {
        vec2 p = vWorldPos.xz * 0.22;
        float r1 = sin(p.x * 3.1 + uTime * 2.2) * cos(p.y * 2.7 - uTime * 1.6);
        float r2 = sin((p.x * 5.2 - p.y * 4.4) + uTime * 3.1);
        vec3 normal = normalize(vec3((r1 + r2) * 0.08, 1.0, (r1 - r2) * 0.08));

        vec3 viewDir = normalize(cameraPosition - vWorldPos);
        float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 3.0);

        vec3 col = mix(uDeepColor, uShallowColor, clamp(0.35 + fresnel * 0.75 + vWave * 1.4, 0.0, 1.0));

        // Sun sparkle specular
        vec3 halfVec = normalize(normalize(uSunDir) + viewDir);
        float spec = pow(max(dot(normal, halfVec), 0.0), 96.0);
        col += uSunColor * spec * 1.45;

        // Subtle shoreline / crest foam
        float edge = min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y));
        float edgeFoam = (1.0 - smoothstep(0.0, 0.055, edge)) * (0.55 + 0.45 * sin(vWorldPos.x * 1.4 + uTime * 3.0));
        col = mix(col, uFoamColor, clamp(edgeFoam * 0.75, 0.0, 0.85));

        gl_FragColor = vec4(col, uOpacity);
      }
    `
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  return { mesh, uniforms };
}

/**
 * Cascading Alpine Waterfall Shader
 */
export function createWaterfallMesh(width, height, opacityScale = 1.0) {
  const geo = new THREE.PlaneGeometry(width, height, 12, 24);
  const uniforms = {
    uTime: { value: 0 },
    uOpacity: { value: opacityScale }
  };

  const mat = new THREE.ShaderMaterial({
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false,
    uniforms,
    vertexShader: /* glsl */ `
      uniform float uTime;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec3 pos = position;
        pos.z += sin(uv.y * 12.0 + uTime * 6.0) * 0.16;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uTime;
      uniform float uOpacity;
      varying vec2 vUv;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(41.1, 289.7))) * 43758.5453);
      }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
          mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
          f.y
        );
      }

      void main() {
        vec2 flow1 = vec2(vUv.x * 6.0, vUv.y * 3.5 + uTime * 2.6);
        vec2 flow2 = vec2(vUv.x * 11.0, vUv.y * 6.0 + uTime * 4.1);
        float n1 = noise(flow1);
        float n2 = noise(flow2);
        float streaks = smoothstep(0.32, 0.78, n1 * 0.65 + n2 * 0.55);

        float edgeFade = smoothstep(0.0, 0.16, vUv.x) * smoothstep(1.0, 0.84, vUv.x);
        float bottomSpray = smoothstep(0.28, 0.0, vUv.y);
        float topCrest = smoothstep(0.85, 1.0, vUv.y);

        vec3 waterCol = mix(vec3(0.36, 0.74, 0.86), vec3(0.95, 0.99, 1.0), clamp(streaks + bottomSpray * 0.75 + topCrest * 0.6, 0.0, 1.0));
        float alpha = (0.58 + streaks * 0.36 + bottomSpray * 0.25) * edgeFade * uOpacity;

        gl_FragColor = vec4(waterCol, clamp(alpha, 0.0, 0.95));
      }
    `
  });

  const mesh = new THREE.Mesh(geo, mat);
  return { mesh, uniforms };
}

/**
 * Animated Northern Lights (Aurora Borealis) GLSL Curtain for Scandinavia
 */
export function createAuroraMesh(width = 240, height = 65) {
  const geo = new THREE.PlaneGeometry(width, height, 64, 12);
  const uniforms = {
    uTime: { value: 0 }
  };

  const mat = new THREE.ShaderMaterial({
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms,
    vertexShader: /* glsl */ `
      uniform float uTime;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec3 pos = position;
        float wave = sin(uv.x * 9.0 + uTime * 0.55) * 9.0 + cos(uv.x * 16.0 - uTime * 0.35) * 4.5;
        pos.z += wave;
        pos.y += sin(uv.x * 6.0 + uTime * 0.4) * 3.0;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uTime;
      varying vec2 vUv;

      void main() {
        float bands = sin(vUv.x * 28.0 + uTime * 0.9) * 0.5 + 0.5;
        float rays = pow(sin(vUv.x * 54.0 - uTime * 1.3) * 0.5 + 0.5, 2.0);
        float vertical = smoothstep(0.0, 0.25, vUv.y) * smoothstep(1.0, 0.22, vUv.y);
        float horizFade = smoothstep(0.0, 0.14, vUv.x) * smoothstep(1.0, 0.86, vUv.x);

        vec3 greenCol = vec3(0.16, 0.96, 0.58);
        vec3 tealCol  = vec3(0.12, 0.78, 0.92);
        vec3 violetCol = vec3(0.55, 0.24, 0.88);

        vec3 col = mix(greenCol, tealCol, smoothstep(0.2, 0.65, vUv.y));
        col = mix(col, violetCol, smoothstep(0.6, 0.98, vUv.y));

        float intensity = (0.35 + 0.45 * bands + 0.45 * rays) * vertical * horizFade;
        gl_FragColor = vec4(col * intensity * 1.25, intensity * 0.85);
      }
    `
  });

  const mesh = new THREE.Mesh(geo, mat);
  return { mesh, uniforms };
}

