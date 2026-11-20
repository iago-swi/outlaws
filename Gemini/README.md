# Outlaws · Five Horizons (Gemini version)

A real-time 3D WebGL2 first-person shooter inspired by LucasArts’ 1997 spaghetti-western classic *Outlaws*, built with **Three.js**, custom **GLSL shaders** (atmospheric skies, animated sea/lake/waterfalls, and shimmering northern lights), procedural **PBR Canvas textures**, **ACES Filmic selective bloom**, live **3D hero selection** (15 heroes of history and legend), and **Web Audio API** music & SFX synthesis — with zero external media or CDN dependencies.

**[Play it in your browser](https://iago-swi.github.io/outlaws/Gemini/)**

| Act I · Red Gulch (Wild West) | Act II · Kyoto Mist (Feudal Japan) | Act III · Rütli Valley (Switzerland) |
| :---: | :---: | :---: |
| <img src="screenshot-west.png" width="270" alt="Act I: Red Gulch Wild West saloon street at sunset with .45 Peacemaker revolver"> | <img src="screenshot-japan.png" width="270" alt="Act II: Kyoto Mist bamboo forest, vermilion Torii gates, glowing shrine, and samurai katana"> | <img src="screenshot-swiss.png" width="270" alt="Act III: Rütli Valley snow-capped Alps, cascading waterfall, Uri bull banner, bearded Waldstätten halberdiers, and Tell's crossbow"> |
| **Act IV · Aegean Isle (Ancient Greece)** | **Act V · Fjord of the North (Scandinavia)** | |
| <img src="screenshot-greece.png" width="270" alt="Act IV: Aegean Isle white marble temple, Cycladic houses, olive trees, cypresses, Spartan warriors with lambda shields, and bronze javelin"> | <img src="screenshot-scandinavia.png" width="270" alt="Act V: Fjord of the North snowy palisade, longhouses, Great Hall under green northern lights, falling snow, and throwing axe"> | |

## Playing the campaign

All five historical horizons can be played sequentially or selected directly from the live-rendered 3D title screen, alongside *Outlaws*-style difficulty settings (**The Good**, **The Bad**, **The Ugly**). Before every level begins, a **Hero Selection Screen** displays three historical or legendary figures on a live rotating 3D turntable — selectable with mouse hover/click or keyboard (`1`, `2`, `3`, `Enter`) — and keeps your chosen hero on retry.

| Act | Setting | Selectable Heroes (1 strength each) | Arsenal | Enemies & Boss |
| --- | --- | --- | --- | --- |
| **Act I · 1884** — *Red Gulch* | Wild West frontier town (saloon, sheriff, bank, corral, water tower, wagons, cacti, red-rock mesas) | **Wyatt Earp** (−25% damage taken) · **Calamity Jane** (+18% move speed) · **Billy the Kid** (faster fire & reload) | `.45 Peacemaker`, `10-Gauge Coach Gun`, `Henry .44 Scoped`, `Dynamite Sticks` | Outlaw Cowboys, Mexican Banditos & **El Diablo** |
| **Act II · 1603** — *Kyoto Mist* | Feudal Japan sanctuary beneath Mount Fuji (bamboo groves, Torii gates, glowing Shoji pavilions, Zen rock garden, Koi pond & bridge, Shinto temple, falling sakura) | **Miyamoto Musashi** (faster katana + extra reach) · **Tomoe Gozen** (~2× Yumi Longbow speed) · **Date Masamune** (−30% damage taken) | `Muramasa Katana`, `Yumi Longbow`, `Shinobi Shuriken`, `Tanegashima Matchlock` | Shadow Ninjas, Rōnin Samurai & **Lord Kurogane** |
| **Act III · 1307** — *Rütli Valley* | Medieval Switzerland encircled by snow-capped Alps (Lake Lucerne, animated cascading waterfall & stream, Swiss barns & geranium chalets, bearded Waldstätten halberdiers & Uri Bull flag, Habsburg stone keep) | **Wilhelm Tell** (40% faster crossbow reload) · **Arnold von Winkelried** (+50% max health) · **Werner Stauffacher** (out-of-danger health regen) | `Tell's Armbrust`, `Swiss Halberd`, `Alpine Repeater`, `Alpine Fire-Pot` | Austrian Halberdiers, Habsburg Arquebusiers & **Captain von Gessler** |
| **Act IV · 480 BC** — *Aegean Isle* | Sunlit Greek island surrounded by turquoise sea and islets (Cycladic village, olive & cypress trees, beach triremes, white-marble pillared temple) | **Ulysses** (faster & harder javelins) · **Achilles** (−33% damage taken) · **Heracles** (+60% max health) | `Bronze Javelin`, `Xiphos Short Sword` | Spartan Hoplites, Spartan Javelineers (red cloaks, crested bronze helms, Λ shields) & **Archidamos** |
| **Act V · 985 AD** — *Fjord of the North* | Snowy Norwegian winter fjord beneath animated green northern lights (palisade gate, longhouses, longships with round shields, snow-laden pines, Great Hall) | **Erik the Red** (faster axe throw & reload) · **Leif Erikson** (−33% damage taken) · **Ragnar Lothbrok** (faster & harder Viking Sword) | `Throwing Axe`, `Ulfberht Viking Sword` | Historical Vikings — Huscarls, Bowmen, Berserkers (no horned helmets) & **Jarl Hakon** |

### Controls

| Action | Controls |
| --- | --- |
| Hero selection | Mouse hover/click or `1`, `2`, `3` and `Enter` |
| Move & strafe | `W`, `A`, `S`, `D` or Arrow keys |
| Sprint | `Shift` (uses stamina bar) |
| Jump | `Space` |
| Aim | Mouse (Pointer Lock) |
| Fire / Throw / Melee strike | Left Mouse Button (`LMB`) |
| Sniper Scope / Steady Aim / Alt-Fire | Right Mouse Button (`RMB`) |
| Manual reload | `R` (also reloads cleanly when empty) |
| Switch weapons | `1`–`4` or Mouse Wheel |
| Mute / unmute audio | `M` |
| Pause / change hero or level | `Esc` |

---

## Technical notes

### Source & build layout

| Path | Responsibility |
| --- | --- |
| [index.html](index.html) & [assets/](assets/) | Pre-built, self-contained production bundle ready for static hosting / GitHub Pages (relative `./assets/` paths, no external CDN calls). |
| [src/main.js](src/main.js) | Core game loop, state machine (live 3D title preview, live 3D hero selection turntable, combat, pause, summary), Pointer Lock input, post-processing pipeline, hero modifier application, combat, and boss progression. |
| [src/styles.css](src/styles.css) | Era-adaptive UI themes (Wild West brass, Japan vermilion, Swiss glacial crimson/blue, Aegean turquoise/gold, Scandinavian aurora emerald), sniper optic overlay, responsive HUD, and hero selection layout. |
| [src/engine/shaders.js](src/engine/shaders.js) | Custom GLSL shaders: 3-band atmospheric scattering sky dome with solar halo & FBM clouds, Gerstner-inspired Fresnel water shader, cascading alpine waterfall shader, and additive animated **Aurora Borealis** northern-lights curtain shader. |
| [src/engine/textures.js](src/engine/textures.js) | Procedural HTML5 Canvas PBR texture generator producing paired sRGB albedo and bump maps (wood planks, desert earth, moss, raked Zen sand, alpine wildflowers, Aegean beach sand, Arctic snow, white veined marble, cobblestone, terracotta & Japanese roof tiles, Shoji screens, half-timber plaster, Western signs & Wanted posters, heraldic Uri Bull/Schwyz/Habsburg/Japanese banners, Spartan **Λ** bronze shields, historical painted Viking shields, and striped ship sails). |
| [src/engine/collision.js](src/engine/collision.js) | Axis-Aligned Bounding Box (AABB) spatial collision solver, walkable elevated bridges/decks, and slab raycasting for line-of-sight and hitscan impacts. |
| [src/engine/particles.js](src/engine/particles.js) | Ambient particle fields (golden dust motes, sakura petals, alpine mist, Aegean sunlit breeze, winter snowfall), rolling 3D tumbleweeds, waterfall mist plumes, tracers, slash arcs, sparks, and explosion shockwaves. |
| [src/engine/audio.js](src/engine/audio.js) | Real-time Web Audio API procedural synthesizer generating five era soundtracks (spaghetti-western guitar & whistle, Hirajoshi koto/shakuhachi/taiko, alpine alphorn & lute, Ancient Greek Dorian lyre & aulos, Nordic bowed tagelharpa & fjord warhorn) plus synthesized weapon, throw, reload, hitmarker, explosion, and boss-horn SFX. |
| [src/entities/heroes.js](src/entities/heroes.js) | Roster of 15 historical/mythic heroes with distinct sculpted 3D figures for the live camera-attached selection turntable and single-strength gameplay modifiers. |
| [src/entities/weapons.js](src/entities/weapons.js) | Sixteen articulated 3D first-person weapon viewmodels across the five eras with recoil, sway, reload tilt, spinning shuriken, and fuse/wick sparks. |
| [src/entities/enemies.js](src/entities/enemies.js) | Articulated 3D character models across all five eras (including Lambda-shielded Spartans and historically helmeted/bareheaded Vikings), `head`/`body` hit-zones, muzzle glints, flanking/melee AI, and 5 bosses. |
| [src/levels/level1_west.js](src/levels/level1_west.js) – [level5_scandinavia.js](src/levels/level5_scandinavia.js) | Hand-composed 3D level builders, lighting rigs, landmarks, pickups, and enemy/boss rosters. |

### Rendering & graphics pipeline

- **Engine**: `Three.js` (`^0.172.0`) on WebGL2 with `PCFSoftShadowMap` (`2048×2048` directional shadow maps) and `ACESFilmicToneMapping` (`exposure: 1.12`).
- **Post-Processing**: `EffectComposer` running `RenderPass` → `UnrealBloomPass` (selective threshold `0.82`, radius `0.55`, strength `0.34` so sunsets, glowing windows, paper lanterns, temple braziers, waterfall crests, northern lights, and muzzle flashes bloom cleanly) → `OutputPass`.
- **Live 3D Hero Stage**: Reuses the main renderer via a camera-attached turntable rig (`heroStage`) with dedicated key & rim point lights, dynamically centered inside the left preview pane across viewport aspect ratios.
- **Zero External Assets**: Every texture, banner, shield, 3D mesh, shader, and musical note is synthesized procedurally at runtime (~189 kB gzipped total bundle).
- **Simulation**: Delta-clamped `requestAnimationFrame` loop (`dt <= 0.05s`) with pixel ratio capped at `2` and URL hash deep-linking (`#west`, `#japan`, `#swiss`, `#greece`, `#scandinavia`).

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
