# Outlaws · Three Horizons (Gemini version)

A real-time 3D WebGL2 first-person shooter inspired by LucasArts’ 1997 spaghetti-western classic *Outlaws*, built with **Three.js**, custom **GLSL shaders**, procedural **PBR Canvas textures**, **ACES Filmic selective bloom**, and **Web Audio API** music & SFX synthesis — with zero external media or CDN dependencies.

**[Play it in your browser](https://iago-swi.github.io/outlaws/Gemini/)**

| Act I · Red Gulch (Wild West) | Act II · Kyoto Mist (Feudal Japan) | Act III · Rütli Valley (Switzerland) |
| --- | --- | --- |
| ![Act I: Red Gulch Wild West saloon street at sunset with .45 Peacemaker revolver](screenshot-west.png) | ![Act II: Kyoto Mist bamboo forest, vermilion Torii gates, glowing shrine, and samurai katana](screenshot-japan.png) | ![Act III: Rütli Valley snow-capped Alps, cascading waterfall, Uri bull banner, bearded Waldstätten halberdiers, and Tell's crossbow](screenshot-swiss.png) |

## Playing the campaign

All three historical horizons can be played sequentially or selected directly from the live-rendered 3D title screen, alongside *Outlaws*-style difficulty settings (**The Good**, **The Bad**, **The Ugly**).

| Act | Setting & Hero | Arsenal | Enemies & Boss |
| --- | --- | --- | --- |
| **Act I · 1884** — *Red Gulch* | Wild West frontier town (saloon, sheriff, bank, corral, water tower, wagons, cacti, red-rock mesas) · **Marshal Anderson** | `.45 Peacemaker` (RMB Fan Hammer), `10-Gauge Coach Gun` (RMB Double Barrel), `Henry .44 Scoped` (RMB brass telescope zoom), `Dynamite Sticks` | Outlaw Cowboys, Mexican Banditos & **El Diablo** |
| **Act II · 1603** — *Kyoto Mist* | Feudal Japan sanctuary beneath Mount Fuji (bamboo forest, Torii gates, glowing Shoji pavilions, Zen rock garden, Koi pond & arched red bridge, Shinto temple, falling sakura) · **Kenshin the Samurai** | `Muramasa Katana` (RMB Iaido cleave), `Yumi Longbow` (RMB Spirit Focus zoom), `Shinobi Shuriken` (RMB 3-star fan), `Tanegashima Matchlock` | Shadow Ninjas, Rōnin Samurai & **Lord Kurogane** |
| **Act III · 1307** — *Rütli Valley* | Medieval Switzerland encircled by snow-capped Alps (Lake Lucerne, animated cascading waterfall & stream, Swiss barns & geranium chalets, bearded Waldstätten comrades with halberds & waving Uri Bull flag, Habsburg stone keep) · **Wilhelm Tell (Uri)** | `Tell's Armbrust` crossbow (RMB Eagle-Eye zoom), `Swiss Halberd` with Uri tassel (RMB Armor-Breaker sweep), `Alpine Repeater`, `Alpine Fire-Pot` | Austrian Halberdiers, Habsburg Arquebusiers & **Captain von Gessler** |

### Controls

| Action | Controls |
| --- | --- |
| Move & strafe | `W`, `A`, `S`, `D` or Arrow keys |
| Sprint | `Shift` (uses stamina bar) |
| Jump | `Space` |
| Aim | Mouse (Pointer Lock) |
| Fire / Melee strike | Left Mouse Button (`LMB`) |
| Sniper Scope Zoom / Alt-Fire | Right Mouse Button (`RMB`) |
| Manual reload | `R` (also reloads cleanly when empty) |
| Switch weapons | `1`–`4` or Mouse Wheel |
| Mute / unmute audio | `M` |
| Pause / change level | `Esc` or `P` |

---

## Technical notes

### Source & build layout

| Path | Responsibility |
| --- | --- |
| [index.html](index.html) & [assets/](assets/) | Pre-built, self-contained production bundle ready for static hosting / GitHub Pages (relative `./assets/` paths, no external CDN calls). |
| [src/main.js](src/main.js) | Core game loop, state machine (live 3D title preview, illustrated comic intro cards, combat, pause, summary), Pointer Lock input, post-processing pipeline, hitscan/melee/throwable combat, and Boss progression. |
| [src/styles.css](src/styles.css) | Era-adaptive UI theme (Wild West brass, Feudal Japan vermilion, Swiss glacial blue), vintage brass sniper optic overlay, responsive HUD, and comic intermission frames. |
| [src/engine/shaders.js](src/engine/shaders.js) | Custom GLSL vertex & fragment shaders: 3-band atmospheric scattering sky dome with solar halo & FBM painted clouds, Gerstner-inspired Fresnel sparkling water shader, and animated cascading waterfall shader. |
| [src/engine/textures.js](src/engine/textures.js) | Procedural HTML5 Canvas PBR texture generator producing paired sRGB albedo and bump maps (wood planks, desert earth, moss, raked Zen sand, alpine wildflowers, cobblestone, stratified red rock, Shoji screens, roof tiles, half-timbered plaster, hand-painted Western signs, Wanted posters, and heraldic Uri Bull, Schwyz, Japanese clan, and Habsburg banners). |
| [src/engine/collision.js](src/engine/collision.js) | Axis-Aligned Bounding Box (AABB) spatial collision solver, walkable elevated surfaces (bridges & decks), and slab raycasting for line-of-sight and hitscan wall impacts. |
| [src/engine/particles.js](src/engine/particles.js) | Environmental ambient particle fields (golden dust motes, drifting sakura petals, alpine pollen/mist), rolling 3D tumbleweeds, waterfall mist plumes, bullet tracers, sword slash arcs, impact sparks, and explosive shockwaves. |
| [src/engine/audio.js](src/engine/audio.js) | Real-time Web Audio API procedural synthesizer generating era-specific adaptive music (spaghetti-western guitar & Morricone whistle, Hirajoshi pentatonic koto/shakuhachi/taiko, alpine alphorn harmonics & lute) plus synthesized weapon, reload, hitmarker, explosion, and boss-horn SFX. |
| [src/entities/weapons.js](src/entities/weapons.js) | Twelve articulated 3D first-person weapon viewmodels (4 per era) with recoil, sway, reload tilt, spinning shuriken, and flickering fuse/wick sparks. |
| [src/entities/enemies.js](src/entities/enemies.js) | Articulated 3D character models, hit-zone tagging (`head` vs `body` for critical multipliers), telegraphing muzzle glints, flanking/strafing AI, and boss encounters. |
| [src/levels/level1_west.js](src/levels/level1_west.js), [level2_japan.js](src/levels/level2_japan.js), [level3_swiss.js](src/levels/level3_swiss.js) | Hand-composed 3D level builders, directional + hemisphere + flickering point-light rigs, landmarks, pickups, and spawn rosters. |

### Rendering & graphics pipeline

- **Engine**: `Three.js` (`^0.172.0`) on WebGL2 with `PCFSoftShadowMap` (`2048×2048` directional shadow cascades) and `ACESFilmicToneMapping` (`exposure: 1.12`).
- **Post-Processing**: `EffectComposer` running `RenderPass` → `UnrealBloomPass` (selective threshold `0.82`, radius `0.55`, strength `0.34` so sunset horizons, glowing saloon windows, paper lanterns, waterfall crests, and muzzle flashes bloom without washing out midtones) → `OutputPass`.
- **Zero External Assets**: Every texture, banner, sign, 3D mesh, shader, and musical note is synthesized procedurally at runtime (~167 kB gzipped total bundle).
- **Simulation**: Delta-clamped `requestAnimationFrame` loop (`dt <= 0.05s`) with pixel ratio capped at `2` for crisp rendering and steady frame pacing.

### Running & rebuilding locally

**Play directly (no build needed):** Serve the repository root or the `Gemini/` folder with any static HTTP server:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8000/Gemini/` in your browser.

**Rebuild from source (Node.js + Vite):**

```sh
cd Gemini
copy src\index.html index.html
npm install
npm run dev       # Live dev server on http://localhost:5173
npm run build     # Outputs standalone bundle to dist/
```
