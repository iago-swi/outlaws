# Lone Hand — Claude version

A first-person shooter in five chapters, built with Claude (Anthropic) in the spirit of
late-1990s Western shooters. From a frontier town to a Japanese shrine, an alpine valley,
a Greek island and a Norwegian fjord, one hero faces many enemies alone, in a real-time
3D world you can walk through freely. Fifteen heroes from history and legend are
playable, three per chapter.

The whole game is one file, `index.html`. Every texture, model, sound and piece of music
is generated in the browser when the game starts; there are no image, model or audio
files.

**[Play it in your browser](https://iago-swi.github.io/outlaws/Claude/)**

| Chapter I · Dry Gulch | Chapter II · Kagemori | Chapter III · Uri |
| --- | --- | --- |
| ![Dry Gulch at golden hour: three outlaws stand in the sunlit main street between the telegraph office, the bank and the sheriff's office, with the six-shooter in the foreground](screenshot.jpg) | ![The path of red torii gates through the bamboo forest at dusk, stone lanterns glowing, the samurai's bow drawn in the foreground](screenshot-japan.jpg) | ![An alpine chalet with flower boxes, a cow, an Austrian soldier, the lake and snow peaks behind, the crossbow in the foreground](screenshot-uri.jpg) |

| Chapter IV · Ithaca | Chapter V · Jarnvik |
| --- | --- |
| ![A Greek island in bright sun: Spartans with red cloaks and lambda shields among olive trees and white houses, a temple with columns on the hill behind, a javelin in the foreground](screenshot-greece.jpg) | ![A snowy Viking village at night under green northern lights: a bonfire, longhouses, a palisade gate and two Vikings, a throwing axe in the foreground](screenshot-north.jpg) |

## Run it

Play online with the link above. To play offline, download the folder and open `index.html` in a current version of Chrome or Edge, or
double-click `Play.bat` on Windows. No installation, build step, web server or internet
connection is needed. A mouse and keyboard are required; there are no touch controls.

## How to play

Clear every enemy to finish a chapter. The dots on the compass at the top of the screen
show where the remaining enemies are; the last three come looking for you. Health items
(tonic, rice cake, alp cheese, ambrosia, mead) restore 35 points.

| Chapter | Weapons | Enemies |
| --- | --- | --- |
| I · Dry Gulch, Arizona Territory, 1881 | six-shooter | cowboys, sombrero bandits, the gang boss Silas Crowe |
| II · Kagemori, Japan, 1600 | bow (yumi) and katana | ninja who ambush from smoke, rōnin, archers, the Iron Rōnin |
| III · Uri, the Waldstätten, 1307 | crossbow and halberd | Habsburg halberdiers, crossbowmen, knights, the bailiff |
| IV · Ithaca, Greece, the age of heroes | javelins and short sword | Spartan hoplites, javelin throwers, their captain |
| V · Jarnvik, Norway, winter of 985 | throwing axes and sword | rival Vikings, berserkers, bowmen, the grey jarl |

### Choose your hero

Each chapter starts with a choice of three heroes from history and legend. Point at a
card to see the figure in the opening shot, then click it, or press `1` to `3` and
`Enter`. Every hero has their own look and one strength.

![The hero selection for Dry Gulch: cards for Wyatt Earp, Calamity Jane and Billy the Kid, with Wyatt Earp in his black coat standing in the desert](screenshot-heroes.jpg)

| Chapter | Hero | Who | Strength |
| --- | --- | --- | --- |
| I | Wyatt Earp | Lawman of Tombstone, 1881 | Iron nerve: takes 25% less damage |
| I | Calamity Jane | Scout and sharpshooter of Deadwood | Frontier scout: moves 18% faster |
| I | Billy the Kid | The fastest gun in New Mexico | Quick draw: fires and reloads much faster |
| II | Miyamoto Musashi | Undefeated duellist, master of two swords | Two swords: faster katana cuts with longer reach |
| II | Tomoe Gozen | Woman warrior of the Genpei War | Peerless archer: draws the bow almost twice as fast |
| II | Date Masamune | The One-Eyed Dragon of Sendai | Black armour: takes 30% less damage |
| III | Wilhelm Tell | The crossbowman of Bürglen, Uri | Master shot: reloads the crossbow 40% faster |
| III | Arnold von Winkelried | Hero of Sempach, from Nidwalden | Breaks the line: starts with 150 health |
| III | Werner Stauffacher | Man of Schwyz, of the Rütli oath | Steadfast: slowly recovers health out of danger |
| IV | Ulysses | King of Ithaca, the man of many wiles | Sure aim: javelins fly faster and hit harder |
| IV | Achilles | Greatest warrior of the Trojan War | Nearly invulnerable: takes 35% less damage |
| IV | Heracles | Strongest of heroes, of the twelve labours | Strength of ten: starts with 170 health |
| V | Erik the Red | Outlaw and founder of Greenland | Hot temper: throws axes much faster |
| V | Leif Erikson | Leif the Lucky, who sailed to Vinland | The Lucky: takes 30% less damage |
| V | Ragnar Lothbrok | Legendary sea-king and raider | Raider: faster, harder sword blows |

The heroes are drawn from history, myth and saga, not from any film, series or comic.
Several do not belong to their chapter's year (Winkelried is of 1386, Tomoe Gozen of the
twelfth century, Ragnar of the ninth); they appear as legends beside the others.

### Controls

| Key | Action |
| --- | --- |
| `W` `A` `S` `D` | Move |
| `Shift` | Run |
| `Space` | Jump |
| Left mouse button | Fire, loose an arrow, shoot a bolt, throw a javelin or an axe |
| Right mouse button | Aim (six-shooter, crossbow); katana or sword cut in chapters II, IV and V |
| `F` | Halberd thrust in chapter III (also the katana and the swords) |
| `R` | Reload the six-shooter |
| `Esc` or `P` | Pause; then `Q` returns to the chapter list |
| `M` | Sound on/off |

The hero selection is shown over a short shot that circles the chosen figure; when the
chapter begins the view drops into first person. The hero's name stays in the top-left
corner, and the same hero is kept when you retry after dying.

<details>
<summary>Easter egg (spoiler)</summary>

Type `PAX` at any time, on any screen, to switch practice mode on or off. Enemies still
see, chase and attack you, but nothing they do can hurt you. While it is on, an olive
branch with the word PAX shows in the top-right corner and the health bar turns pale
green. The end-of-chapter screen notes that the result was reached in practice mode.

</details>

## Technical notes

### Stack

| | |
| --- | --- |
| Delivery | One `index.html` of 1.36 MB: markup, CSS, JavaScript, GLSL and four fonts, all inlined. Most of the size is the three.js library. |
| Source | About 4,750 lines of plain JavaScript (ES modules) in 14 files under [source/src/](source/src/), plus 160 lines of HTML and CSS. No framework. |
| Rendering | [three.js](https://threejs.org/) 0.187 on WebGL 2, with custom GLSL for the sky, water, waterfall, particles, wind and the final screen pass. HTML and CSS for the HUD and menu screens. |
| Sound | Web Audio API. Every effect and all music is synthesised. |
| Build | [Vite](https://vite.dev/) 8 with `vite-plugin-singlefile`, which folds scripts, styles and fonts into the one HTML file. |
| Type | Rye, Pirata One, IM Fell English and Cinzel (SIL Open Font License), bundled through Fontsource. |
| Storage | None. Progress is not saved; all three chapters are open from the start. |
| Requirements | A browser with WebGL 2 and half-float render targets. A dedicated graphics card is recommended. |

### Source layout

| File | Responsibility |
| --- | --- |
| [main.js](source/src/main.js) | Game loop, level loading, combat rules, win and death, HUD, menu screens, opening camera. |
| [gfx.js](source/src/gfx.js) | Renderer, sky dome, sun and shadows, bloom, final screen pass, particles, water and wind shaders. |
| [tex.js](source/src/tex.js) | Procedural textures and the shared material library. |
| [build.js](source/src/build.js) | Geometry helpers, the mesh-merging `Builder`, terrain height field, collision and ray casting. |
| [actors.js](source/src/actors.js) | Character builder, enemy looks and behaviour, projectiles. |
| [player.js](source/src/player.js) | Mouse and keyboard input, first-person movement, the four weapon view models. |
| [audio.js](source/src/audio.js) | Sound effects, ambience and generative music. |
| [props.js](source/src/props.js) | Instancing helper, fences, barrels, grass, trees, horses. |
| [levels/](source/src/levels/) | One file per chapter: terrain, buildings, vegetation, enemy and item placement, lighting mood. |
| [util.js](source/src/util.js) | Seeded random numbers and value, fractal and ridged noise. |

### Rendering pipeline

Each frame is drawn in this order:

1. **Shadow map.** One directional light (the sun) renders a 4096 × 4096 shadow map
   covering 70 to 95 m around the camera. The light follows the camera in 4 m steps so
   shadow edges do not crawl.
2. **Scene.** The world is rendered into a half-float (HDR) target with 4× multisampling.
   Lighting is the sun, a sky/ground hemisphere light, and a blurred environment map
   baked from the sky shader when a level loads, so metal has something to reflect.
   Chapter II adds up to nine point lights for lanterns.
3. **Bloom.** three.js `UnrealBloomPass` with a threshold between 1.15 and 1.35, so only
   values brighter than white glow: the sun, lit windows, lanterns, muzzle flashes.
4. **Final pass.** A single fragment shader applies, in order: light shafts, exposure,
   ACES tone mapping, saturation and contrast, split toning (separate tints for shadows
   and highlights), a vignette, the red damage and green healing overlays, gamma, and
   film grain.

The light shafts are a radial blur. For each pixel the shader takes 36 samples along the
line to the sun's position on screen and adds up the ones brighter than a threshold.
Anything standing in front of the sun therefore blocks its own streak, with no depth
buffer needed.

The sky is a dome shader: a vertical gradient, a glow and an over-bright disc for the
sun, five-octave fractal-noise clouds shaded by comparing the noise with a copy shifted
toward the sun, and stars and a moon for the dusk and night chapters. The northern
lights of chapter V are a further layer: a band of fractal noise stretched across the
northern sky, folded by a sine wave into curtains, green below and violet above. They
are brighter than white, so the bloom pass makes them glow. In that chapter the single
directional light is the moon.

Water is a second shader. Three scrolling noise layers give a surface normal; the
reflection is the sky gradient evaluated in the reflected direction plus a sharp sun
glint, mixed with a deep colour by a Fresnel term. The waterfall is a curved ribbon
with scrolling noise.

### Procedural textures

The wood planks, plaster, stone wall, roof shingles, clay roof tiles, thatch, cobbles,
raked sand, ground, paper screens, bamboo and foliage are each painted on a 256 or
512 pixel canvas at start-up. For most of them a second, grey "height" image is painted
at the same time and converted to a normal map by finite differences, so planks and
stones catch the light. Noise used in textures wraps at the tile border.

Shop signs and the flags (the bull of Uri, the Austrian colours) are drawn with the
Canvas 2D API as well.

Every material multiplies its texture by a per-vertex colour. One "wood" material can
therefore be a red barn, a grey boardwalk and a brown fence.

### World construction

Levels are assembled from simple shapes by code. Two techniques keep the frame cheap:

- **Merging.** A `Builder` collects every static shape and merges them into one mesh
  per material when the level is finished. A town of several thousand boxes is drawn in
  about twenty calls.
- **Instancing.** Repeated objects are drawn as instances of one geometry: 2,300 bamboo
  stalks with foliage cards, 2,100 pines and 42,000 grass tufts in the Alps, and cacti,
  rocks and sagebrush in the desert. Wind sway is added in the vertex shader by patching
  the standard three.js material, with a phase taken from each instance's position.

Terrain is a height field: 700 m with 230 segments for the desert, 360 m with 180 for
the shrine forest, 1,200 m with 400 (161,000 vertices) for the Alps, 1,000 m with 320
for the Greek island and 1,200 m with 380 for the fjord. The mountains use ridged
noise; grass, rock, sand and snow are chosen per vertex from altitude and slope. Around
the Greek island the sea bed is coloured from pale sand to deep blue and the water is
half transparent, which gives turquoise shallows without a depth pass.

Ships (Greek galleys with a bronze ram, Viking longships with a dragon prow and striped
sail) come from one parameterised builder, as do houses, temples and longhouses.

Layouts are deterministic. Each chapter uses a seeded random generator, so the world is
the same on every run.

### Collision and ray casting

Physics does not use the drawn meshes. A separate `World` holds boxes that may be
rotated about the vertical axis, vertical cylinders, and the terrain height function.

- **Walking.** The player and enemies are vertical capsules. Each step pushes the
  capsule out of any box or cylinder it overlaps. A ledge up to 0.5 m high is climbed
  automatically, which makes boardwalks, stairs and the arched bridge walkable. Slopes
  steeper than a per-level limit, and deep water, block movement.
- **Rays.** One function casts a ray against the boxes (slab test), the cylinders
  (quadratic) and the terrain (0.7 m marching steps refined by six bisections). Bullets,
  arrows, enemy line of sight and the opening camera all use it.

### Characters and behaviour

Characters are built from capsules, cylinders, spheres and boxes, merged into five
meshes: torso and head, two arms and two legs, plus a metal mesh for blades and gun
barrels. A description object selects skin, clothes, hat, beard, extras such as a
poncho or surcoat, and the weapon. Walking, aiming, striking, flinching and falling are
animated by rotating those five parts; there are no skeletons or animation files.

The same builder makes the fifteen playable heroes, the eighteen enemy types, the
bystanders and the marble statues of chapter IV. Each enemy has five hit spheres; a head hit does 2.5 times the
damage.

| State | What the enemy does |
| --- | --- |
| Hidden | Ninja only. Invisible until the player comes within 12 to 15 m, then appears in a puff of smoke. |
| Idle | Stands or patrols near its post. A line-of-sight ray is cast every 0.18 to 0.3 s. Gunshots are heard at a distance; the bow and crossbow are silent. |
| Combat, ranged | Keeps within a distance band, strafes, and raises the weapon for 0.45 to 0.9 s before firing. |
| Combat, melee | Runs in, winds up for 0.3 to 0.5 s, then strikes if still in reach. Ninja zigzag and throw shuriken; berserkers zigzag; hoplites and halberdiers thrust. |

Enemy shots are real projectiles, not instant hits. They are aimed with only 45% of the
lead a moving target needs, so standing still gets you hit and strafing avoids most
fire. There is no path finding: an enemy that makes no progress sidesteps for a moment.

### Playable heroes

Heroes are data. Each chapter lists three entries with a name, a look for the character
builder, sleeve colours for the first-person hands, and a small object of multipliers:

| Multiplier | Effect | Used by |
| --- | --- | --- |
| `armor` | Scales every hit the player takes | Wyatt Earp (0.75), Date Masamune (0.7), Achilles (0.65), Leif Erikson (0.7) |
| `speed` | Scales walking and running speed | Calamity Jane (1.18) |
| `fire`, `reload` | Scale the time between shots or throws and the reload | Billy the Kid (0.68, 0.6), Wilhelm Tell (reload 0.6), Erik the Red (fire 0.6) |
| `draw` | Scales the bow's draw and nock time | Tomoe Gozen (0.55) |
| `melee`, `reach`, `meleeDmg` | Scale the blade's swing time, add reach in metres, scale its damage | Miyamoto Musashi (0.62, +0.6), Ragnar Lothbrok (0.75, +0.4, damage 1.7) |
| `power` | Scales the speed and damage of thrown weapons | Ulysses (1.3) |
| `hp` | Starting and maximum health | Arnold von Winkelried (150), Heracles (170) |
| `regen` | Health per second after 4 s without being hit | Werner Stauffacher (3) |

Weapon timers advance by `dt / multiplier`, so a strength changes the pace of an action
without a second set of animations. Choosing a hero rebuilds the figure in the scene and
the weapon view model with that hero's sleeves; pointing at a card does the same, which
is what makes the preview live. The dusk and night chapters add a point light near the
camera on the selection screen so dark figures stay readable.

Practice mode is one flag. All damage to the player passes through a single function,
which returns at once while the flag is set, so enemy behaviour is untouched. The word
is detected by keeping the last few typed characters and testing whether they end in
`pax`.

### Weapons

| Weapon | Type | Damage | Timing |
| --- | --- | --- | --- |
| Six-shooter | Instant ray | 35 | 6 rounds, 0.33 s between shots, 1.45 s reload |
| Bow | Arrow at 82 m/s with gravity | 60 | 0.34 s draw, 0.5 s to nock the next arrow |
| Katana | Arc, 3.3 m reach | 110 | 0.42 s |
| Crossbow | Bolt at 118 m/s with gravity | 95 | 1.0 s reload |
| Halberd | Thrust, 3.7 m reach | 95 | 0.55 s |
| Javelin | Thrown at 50 m/s with gravity | 85 | 0.16 s wind-up, 0.55 s to ready the next |
| Throwing axe | Thrown at 36 m/s with gravity, spinning | 80 | 0.16 s wind-up, 0.55 s to ready the next |
| Sword (chapters IV and V) | Arc, 3.0 to 3.2 m reach | 100 | 0.4 s |

Arrows, bolts, javelins and axes stay lodged in walls, trees and enemies. The weapon and hands at the
bottom of the screen are drawn at 30% scale close to the camera, which looks the same
in perspective but stops them poking through walls.

### Input

The game asks the browser to capture the mouse (Pointer Lock). If the browser refuses,
mouse movement and clicks still work, and the view keeps turning when the cursor
reaches the left or right edge of the window. A click is remembered for 200 ms, so a
tap shorter than one frame still fires.

### Sound

- **Effects** are shaped noise bursts and pitched tones: a gunshot is a low-pass noise
  sweep, a band-pass crack and a sine thump.
- **Reverb** is a convolution with 2.4 s of decaying noise generated at start-up.
- **Music** is a small generative band per chapter. Plucked strings use the
  Karplus-Strong algorithm (a burst of noise circulating in a short, damped delay
  line); a lead voice plays a whistle, a bamboo flute, an alphorn, a reed pipe or a
  war horn. The Greek chapter is in a limping seven-beat measure (3+2+2); the Norse one
  is a slow war drum over a drone.
- **Ambience** is filtered wind plus bird calls, crickets, cicadas, cowbells or a far
  wolf, and water whose volume follows the distance to the pond, stream, waterfall or
  shore.

### Performance

The render resolution follows the device pixel ratio up to 1.5. The game averages the
frame time over 80 frames; if the average is above 34 ms it lowers the pixel ratio by
0.25, down to 0.75.

### Build from source

Run these in the `source` folder.

```sh
npm install
```

```sh
npm run dev
```

```sh
npm run build
```

`npm run dev` serves the game at <http://localhost:5391> and reloads on every edit.
`npm run build` writes the self-contained file to `source/dist/index.html`; copy it
over `index.html` in this folder to publish it.

Four address flags help while editing: `?level=2` jumps into a chapter (1 to 5), `&hero=3` picks
its third hero, `&free` starts play at once without mouse capture (arrow keys turn), and
`&peace` makes enemies passive. In the
browser console, `game.shot(x, y, z, yaw, pitch, fov)` freezes the game and places the
camera.

### Testing and known limits

The game was checked with scripted runs in an automated browser: loading each chapter,
firing each weapon with simulated clicks, selecting heroes and measuring their
strengths, enemy attacks, practice mode, death and retry, and finishing a chapter.
Chapters IV and V were checked for loading, weapons, enemy damage and practice mode,
but not played through to the end. It was not tuned by long sessions of hand play, so the difficulty is a first
estimate, and frame rate on slower graphics hardware has not been measured.

- No touch controls and no gamepad support.
- Progress is not saved between sessions.
- The fifteen heroes' strengths are not balanced against each other.
- Enemies have no path finding and can be held up by buildings.
- Wind moves plants but not their shadows.

### Licences of bundled components

three.js is under the MIT licence; the four fonts are under the SIL Open Font License
1.1. The licence texts are in [licenses/](licenses/).
