# Changelog — Nine Horizons

All notable changes to *Nine Horizons* (formerly *Eight Horizons*, the Gemini version in this repository) are listed here,
newest first. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

**Version numbers** follow `MAJOR.MINOR.PATCH`:

- `PATCH` (1.1.**1**): a fix; nothing new to play.
- `MINOR` (1.**1**.0): something new or changed that a player will notice: a place, a
  character, a control, a mode.
- `MAJOR` (**2**.0.0): a rebuilt game, or changes that make old habits or old links stop working.

Each version is an annotated Git tag named `eight-horizons-vX.Y.Z` and a
[release on GitHub](https://github.com/iago-swi/outlaws/releases). The version number is shown
in the bottom-right corner of the title screen.

## [1.16.0] - 2026-11-28

### Added

- **Unified Online 2-Player Screen (`Online · 2 players · duel or together`):** Single peer-to-peer
  screen supporting both competitive duels and cooperative play over one persistent connection.
  - **Remembered player names** (up to 16 characters) displayed in the `Players (2 of 2)` list,
    scoreline, messages, and over the partner's head in co-op.
  - **Three online modes:**
    - **Duel · first to 5 rounds** (swap ends each round).
    - **Duel · 7 minutes, most kills** (3 s respawn at the farther end).
    - **Together against the enemy (Co-op):** Both heroes start side by side (2.6 m apart) against
      3 to 24 chapter enemies plus the boss, with friendly fire disabled, individual kill counts,
      5 s respawn at start, through-wall partner name/distance/HP indicator (and screen-edge arrow
      when out of view), green partner map dot, shared fog of war and discovered landmark names,
      shared colored marks with ping, shared `G` weapon/bag drops, and a host-shared seed for
      identical randomized enemies and outskirts.
  - **Live host settings & clean room rules:** Chapter, game mode, computer enemies (None or 3–24
    by threes; at least 3 in co-op), Wits, and Map Size sync live to the joining player. A third
    browser or mid-game joiner is turned away with a clear message, and direct connections time out
    cleanly after 15 seconds. Both players stay connected across consecutive games until the host
    leaves.

### Removed

- **One life duel mode:** Replaced by the three unified online modes above.

## [1.15.0] - 2026-11-28

### Added

- **4-Slider Sound Settings panel:** Added a dedicated Sound Settings dialog opened from the Title
  screen, the Online screen, or the Pause screen (`O`) with remembered sliders for **General**,
  **Effects**, **Voices**, and **Music**, plus a Music On/Off switch.
- **Complete menu buttons & `Esc` navigation:** Pause screen now offers Resume, Sound settings,
  Graphics, Restart chapter, Another hero, and Main menu; death screen offers Try again, Another
  hero, and Main menu; victory screen offers Next chapter, Play this chapter again, and Main menu;
  Hero screen offers Main menu. Pressing `Esc` returns to the Main menu from the Hero, Death, and
  End screens, and hidden screens no longer catch clicks.

### Changed

- **`M` toggles Music only:** Pressing `M` now switches background music on or off independently
  without muting gunshots, effects, or voices.
- **Final key map:** Updated key hints on the title screen, hero screen, and HUD to match the
  complete control layout.

## [1.14.0] - 2026-11-28

### Added

- **Drawn-geometry shots, line of sight & walkable roofs:** Static solid world meshes (roofs, rocks,
  carts, arches) now participate in shot raycasts, enemy line-of-sight blocking (preventing enemies
  from seeing through roofs), and walkable roof landings while letting windows, leaves, and cloth
  pass through.
- **Stalnogorsk underground Metro, 5-floor block & open Church of St Nicholas:** Added a deep
  underground metro station (`-10 m`) with navigable marble stairs, chandeliers, standing train, and
  passengers; a 5-floor courtyard stairwell with furnished flats on every landing that enemies can
  climb; an open Church of St Nicholas with five blue-and-gold onion domes, gilded iconostasis,
  priest, and worshippers; and the yellow `КВАС` kvas tanker with soda-water machines.
- **Cultural landmarks across all nine chapters (named on the map):** San Xavier Sonoran Mission
  (West), three-storey Kiri Castle keep (Japan), Devil's Bridge with grazing goat (Switzerland),
  Contest of the Twelve Axes (Greece), the Thing Field with twelve standing stones (Vikings),
  paratrooper hung on the ruined church tower (Normandy), Kvas Tanker (Soviet city), Thangtong
  Gyalpo Iron Chain Bridge (Tibet), and Moctezuma's House of Birds aviary (Tenochtitlan).
- **Japan *shishi-odoshi* bamboo deer scarer:** Pivoting water-filled bamboo tube in the tea garden
  that tips and knocks sharply on stone every 6 seconds (audible up to 34 m).
- **Tibet prostrating pilgrim:** Performs full prostrations round the chorten near the start;
  responds peacefully and flees danger, never taking up arms.
- **Swiss 100 m Valais *Suone* (*bisse*):** Irrigation channel from the waterfall across cliffside
  planks, six timber trestles, and a meadow ditch with five sluices (two open watering the grass) to
  the keeper's shingle hut and knocking water-wheel hammer; breaking any upstream wood trough halts
  the water downstream and silences the hammer.

## [1.13.0] - 2026-11-28

### Added

- **Living bystanders (fright, greetings, 30 HP & fighting back):** Every bystander now performs an
  active period task (hammering, churning, weaving, strolling, praying, paddling, or drinking).
  Nearby shots or blasts frighten them into crying out, running arms-up, crouching with hands over
  their heads, and returning once quiet. Approaching peacefully triggers waves and era-language
  greetings; aiming at them makes them raise their hands. Bystanders have 30 HP (tracked on the end
  screen if killed), and roughly one in four hurt bystanders who survive in single-player draws the
  chapter's commonest enemy weapon and fights back.
- **Living animals & retaliation:** Added grazing horses, mules, hens (West), ox (Japan), cows and
  pack mules (Switzerland), goats, pigs, and Argos the dog (Greece), ponies and sheep (Vikings),
  and yaks and horses (Tibet). They flee nearby gunfire, bleed and fall with colliders removed when
  killed, and retaliate when wounded according to species (sheep and hens never retaliate).
- **Wounds, floating hit bars & ambient life:** Hits leave dark wound marks, push enemies back, and
  display a 4-second floating health bar (enemies limp below 40% HP). Added flocks of pecking birds
  that take wing, dust devils in the West and Tibet, a moving West steam train on the depot line, a
  moving Soviet tank and avenue car, high thin cirrus clouds, and era-language voices via
  SpeechSynthesis with a synthesized formant fallback.

## [1.12.0] - 2026-11-28

### Added

- **Enemy Wits (`Low`, `Medium`, `Genius`):** Remembered selector on the hero screen beside Enemies.
  - **Low:** Fights on direct sight or damage only; ignores noises, never climbs ladders or crawls,
    and gives up after 2.5 s out of sight.
  - **Medium (default):** Hears noises, follows routes, climbs ladders to reach higher elevations,
    crouches through low passages, and searches around the last known spot for 12 s.
  - **Genius:** Hears 80% further and sees further, alerts allies within 60 m, selects crouched
    cover from 22 candidate points within 12 m (blocked low, clear high), rises to shoot and
    repositions frequently, flanks, sneaks crouched when unseen, retreats when badly hurt, and fires
    faster and straighter.
- **Noise propagation:** Gunshots alert within 35 m, bows/slings/throws 10 m, sprinting 11 m,
  walking 4 m (through walls), and breaking wood 12 m; blades, fists, blowgun, sneaking, and
  crouching remain silent.
- **Map Size (`Small`, `Medium`, `Large`):** Remembered third selector on the hero screen. `Small`
  trims each chapter to its core corridor framed with rope and red-and-white boundary flags; `Large`
  expands the map by 1.5× with seven era-styled furnished outskirts hamlets (smoking chimneys,
  fences, trees, bystanders, boats on water, extra enemies, and named map landmarks) and raises the
  Enemies selector up to 45.
- **Randomized enemy spawns per game:** Ground-walking enemies start in varied valid reachable
  positions each run (seeded deterministically for Online sync), always at least 20 m from the
  player's start, while bosses, perched guards, and ambush foes keep their posts.

## [1.11.0] - 2026-11-28

### Added

- **Destructible props across all nine chapters:** Wooden crates, barrels, fence bays, tables,
  chests, stalls, shelves, benches, doors, and small vessels break under gunfire, melee/fists,
  thrown weapons, Molotov fire, and explosions while stone, rock, plaster, and trees stand firm.
  Small items shatter in one hit and let bullets continue through; larger props shed color-matched
  chips, darken, and lean until collapsing in splinters and dust, dropping items placed atop them,
  removing their colliders, and rebuilding the enemy navigation grid so enemies walk through newly
  opened gaps. Enemy fire also breaks player cover.
- **Explosive Powder Kegs:** In gunpowder and fuel chapters (all except Switzerland, Greece, and
  Scandinavia), red banded powder kegs with pale lids detonate in a 6 m blast (140 damage at center,
  reduced with distance and walls, 60% for bystanders/animals), break nearby props, and
  chain-detonate adjacent kegs.

## [1.10.0] - 2026-11-28

### Added

- **Round rotating mini-map & `Tab` full chapter map:** Added a top-right circular mini-map showing
  ~55 m around the player (rotating with heading, with a live `N` indicator on its rim) and a
  north-up full chapter map held open with `Tab`, pre-rendered once per chapter onto a 512 × 512
  offscreen canvas from terrain slope shading, water, walkable decks/bridges, solid buildings, and
  tall cylinders.
- **Fog of war & enemy dots:** Both maps start dark and uncover within ~30 m of everywhere the
  player visits; active, moving, or firing enemies appear as red dots (boss larger) only inside
  uncovered ground (or within 90 m during Eagle Eye).
- **World & map mark (Middle Mouse Button):** Clicking the middle mouse button places, moves, or
  clears a glowing 3D pin in the world with a through-wall distance readout and a map dot (clamped
  to the mini-map rim when out of range).
- **Named landmarks across all nine chapters:** Added 9–12 named places per chapter that appear on
  both maps once discovered and announce their name on first arrival.

### Removed

- **Top compass bar:** Removed the top compass strip in both single-player and Online modes (keeping
  the enemies-remaining counter, boss bar, and scoreline intact).

## [1.9.0] - 2026-11-28

### Added

- **Arsenal list, Bag & finite ammunition:** Up to six weapons carried (hero's own first, Fists
  always last), displayed on the right above the active weapon name with key and shots left; mouse
  wheel and keys `1`–`9` cycle smoothly through arsenal and bag. Every ranged/thrown weapon starts
  with finite ammunition (max carry 2× start) and automatically switches to **Bare Fists** when dry
  (LMB alternating jab 28, RMB hook 55, 1.6 m reach, silent).
- **Chapter second weapons & new gear:** Every hero now sets out with a second weapon of their
  chapter — Cavalry Sabre (West), silent Poison Blowgun with sniper sight (Japan & Tenochtitlan),
  Confederate Sword (Switzerland), Woven Sling (Greece & Tibet), Norse Seax (Vikings), and a
  pistol/rifle pair (Normandy & Stalnogorsk) — plus starting bag items (3 Big Stones in Switzerland
  and Vikings; 2 Molotov Cocktails in Normandy; 3 Molotovs in Stalnogorsk; 2 Dynamite in West).
- **Molotov fire pools, enemy drops, recoverable missiles & `G` drop:** Molotov cocktails burst into
  a 3 m burning fire pool lasting 7 s that hurts both enemies and the player. Fallen enemies drop
  glowing weapons/blades (emptied enemy weapons leave the arsenal), ammo boxes (60% of melee foes),
  bag healing provisions (20%, up to 9, `+35 HP` via `H` or bag-in-hand LMB), and chapter bombs
  (30% in powder chapters, 2 s fuse). Thrown missiles (arrows, bolts, stars, javelins, axes, darts,
  stones, sling pellets, big stones) stick or lie glowing and can be walked over to recover (40
  most recent kept). Press `G` to put down the held weapon or one bag item.
- **Special Skill (`E`) for every hero and villain:** Assigned by each fighter's strength from seven
  skills (**Dash**, **Stand fast**, **Dead eye**, **Second wind**, **Vanish**, **Fury**, **Eagle
  eye**) with HUD status under the health bar, hero/fighter card labels, active screen tint, and
  through-wall Eagle Eye markers.
- **Aimed throws (RMB) & quick chapter blade (`F`):** Holding RMB with any thrown weapon narrows the
  view and renders an exact physics-stepped dotted trajectory line with landing ring (and blast
  circle for bombs/Molotovs), turning red when striking an enemy. Every chapter's signature blade
  now strikes immediately on `F` (keeping bow RMB sword-cut and fists RMB hook).

## [1.8.0] - 2026-11-28

### Added

- **Graphics setting (`Automatic`, `High`, `Medium`, `Low`):** Added a remembered `"Graphics"`
  selector at the bottom left of the title screen and a live mid-chapter toggle (`G` on the pause
  screen, without rebuilding the world). `Medium` draws at 75% resolution; `Low` draws at 50%
  resolution, disables bloom, pulls shadow range to 60%, and thins decorative foliage. `Automatic`
  starts on `High`, averages frame times over 80 frames, steps down below 42 fps, and reverts the
  step until the next chapter if it does not shorten frame time by at least 7%.
- **`?fps` frame counter:** Opening the game with `?fps` in the address displays a compact corner
  readout with live frames per second, active graphics level, and render buffer dimensions.

### Changed

- **Readable online codes:** The 5-character invite code, join input, and invite link now use plain
  upright monospace typography (large bold for the code). Generated codes use only 22 unambiguous
  characters (`34679ACDEFHJKLMNPRTWXY` — omitting `0/O/Q`, `1/I`, `2/Z`, `5/S`, `8/B`, `G`, `U/V`)
  and accept lowercase and spaces when typed.

### Removed

- **Copy-paste backup handshake:** Removed the manual offer/answer copy-paste fallback from the
  Online lobby and connection module so every game connects through the single 5-character code or
  invite link.

## [1.7.0] - 2026-11-28

### Added

- **Non-combatant bystanders across all nine chapters:** 12–29 peaceful period townsfolk per chapter
  (about half of them women in period skirts, aprons, shawls, plaits, buns, headscarves, Norse
  twin brooches, or Tibetan striped aprons), solid and unarmed, never in doorways or paths,
  breathing and looking about (saloon barmaid & pianist, Rütli oath men, Penelope at her loom,
  women at the well, old dog Argos, Norse weavers & captives, pre-dawn Normandy townsfolk & wounded
  glider pilot, Soviet shoppers & chess players & prisoners, Tibetan nuns & women traders, Mexica
  market women, conch-blower & canoe paddlers).
- **Closed Orthodox Church & Old Priest in Stalnogorsk:** Added a closed Orthodox church used as a
  store (cross removed, boarded window, crates) where an old Orthodox priest with a waist-length
  white beard, black habit embroidered with white three-barred crosses, lit glowing taper, and
  blessing hand stands safely apart from the Committee agent near the door.
- **Flanking routes, opened buildings, ladders & crawl spaces across all chapters:**
  - **Red Gulch:** Railroad depot & crawl-under boxcar with roof ladder, Silver Queen Mine crawl
    drift, Grand Hotel with roof ladder, Barber Shop, Doctor's Office, and dry wash trench.
  - **Kyoto Mist:** Rice paddies with dike path, stilted granary with crawl-under space & loft
    ladder, charcoal burners' camp, and low dojo water gate.
  - **Rütli Valley:** Watermill with turning wheel, lake landing Sust store, 3-ladder keep scaffold,
    Rütli oath meadow, and palisade crawl gap.
  - **Aegean Isle:** Two-end stone cistern crawl tunnel, stepped marble quarry, Eumaeus' farm, and
    Beacon Tower fire-platform ladder.
  - **Fjord of the North:** Shipyard crawl-under hull on stocks, Beacon Crag ladder, Nordic byre with
    hayloft ladder, palisade fighting steps with stairs, and low fish-rack crawl tunnel.
  - **Normandy:** 14 bocage hedgerow crawl holes leading off the road, railway halt with two
    crawl-under boxcars & ladder, cider farm, school/café, church tower ladder, and crashed glider.
  - **Stalnogorsk:** Walk-through block of flats with brass samovar, goods siding boxcar crawl,
    Committee wall drain tunnel, and crane perch ladder.
  - **Road to Lhasa:** Barley terraces & stone barn with roof ladder, enterable army tent, and
    ruined fort wall crawl breach.
  - **Tenochtitlan:** Lake canoes with Mexica paddlers, upright loom, and palace roof conch-blower.

## [1.6.0] - 2026-11-28

### Added

- **Chapter IX — Tenochtitlan (30 June 1520, Noche Triste):** Evening setting on Lake Texcoco with
  low warm sun, easing rain, far shores, ancient cypress, and a smoking snow-capped volcano with a
  glowing crater on the horizon.
- **Climbable 17 m Great Temple (Templo Mayor):** Stepped volcanic-stone pyramid with a broad solid
  front staircase (climbable by both player and enemies), twin roof-combed shrines with gold-heaped
  altars and braziers, an unarmed drummer at the great war drum on top, and an arquebusier on the
  terrace below.
- **Sacred Precinct & Built-Up Island City:** Skull rack (tzompantli), enterable Round Temple of the
  Wind God (Ehecatl), House of the Eagles, ball court, side gates, crouch-only precinct drain and
  low-door steam bath (temazcal), reed watchtower and reed lookout with ladders, Palace of Axayacatl
  with roof stair, market stalls on raised crawl-under floors, city canal with stone and plank
  bridges, four white flat-roofed houses linked by roof planks, upturned canoes to crawl under,
  garden groves, and dropped gleaming gold objects.
- **Three routes across Lake Texcoco:** Western Causeway (with parapets, crossing rails, three canal
  gaps bridged by timber bridge, wrecked portable bridge, and twin planks, plus a stationary Spanish
  cannon), Chinampa garden plots joined by planks, and the Chapultepec stone aqueduct with a
  plank-bridged broken span — leading to the far mainland village, climbable rock, and Captain Luján.
- **Three Mexica heroes & weapons:** **Cuauhtémoc** (poisoned dart-thrower dealing 45 damage + 7
  every 0.5 s for 5 s with green poison tint), **Tzilacatzin** (heavy 120-damage thrown stones, 130
  health), and **Nezahualcóyotl** (war bow, +15% speed), all carrying a wide-arc obsidian
  **macuahuitl** and feathered chimalli shield; healing item is a **Cup of Cacao**.
- **Spanish conquistador enemies & three duel villains:** Spanish swordsmen, crossbowmen,
  smoke-puffing arquebusiers, mounted lancers (horse and rider as one fast tough enemy falling
  together), stationary causeway cannon with gunner firing cannonballs, and boss **Captain Luján**;
  plus duel villains **Hernán Cortés**, **Pedro de Alvarado**, and **Nuño de Guzmán** (crossbow and
  halberd).
- **Tenochtitlan music, evening ambience & 3×3 chapter grid:** Procedural huehuetl drum, two-toned
  teponaztli slit drum, seed rattles, clay flute, conch horn, and evening crickets/frogs/parrot/water
  sounds; nine chapter cards arranged 3×3 on the title screen and ninth chapter in Online Duel.

### Changed

- **Renamed to Nine Horizons:** Updated title screen, browser title, and victory text to **Nine
  Horizons** (*Nine frontiers — Twenty-seven legends*) for the nine-chapter game.

## [1.5.0] - 2026-11-28

### Added

- **"Enemies" drop-down on the hero screen:** Choose 5, 10, 15, 20, 25, or 30 enemies (default 15,
  remembered across chapters, retries, and visits) above the single-player hero cards. The HUD enemy
  counter matches the chosen total.
- **30-enemy cap with variety-first thinning:** No single-player chapter ever spawns more than 30
  enemies. When thinning below a level's full list, the boss is never removed, enemy kinds with two
  or fewer left are preserved as late as possible, and otherwise the enemy of the commonest kind
  standing closest to a comrade is removed first so far-outpost guards stay.

### Changed

- **Plain lining-numeral dropdowns:** Styled drop-down lists in a clean sans-serif typeface with
  ordinary lining figures so numbers like 5 and 9 are never misread.

## [1.4.0] - 2026-11-28

### Added

- **Eight-point throwing stars (Kyoto Mist):** Flat forged eight-point shuriken with a round central
  hole and bright ground bevelled edges, now the Japan chapter's first weapon (and carried by all
  three Japan duel villains and enemy ninja). Each throw sends three stars in a narrow fan (about
  2 degrees to each side, 52 m/s with slight drop, 26 damage each) at roughly two throws per second
  while held, and every star sticks visibly where it lands. First-person hands hold three fanned
  stars in the right hand and spare stars in the left.
- **Viking Iron Flail (Fjord of the North):** Replaced the Viking sword with a wooden-hafted spiked
  two-ball iron flail on chains of different lengths. Two-part swing (0.8 s total: balls whirl round
  first, then sweep right-to-left across the screen, landing at 60%) deals 150 damage across a wide
  78-degree arc to each side (3.4 m reach) and hits every enemy in reach.
- **Vikings in animal skins & horned animal skulls:** Dressed every Norse hero, Viking enemy, and
  Norse duel villain in shaggy animal pelts (fur shoulder tufts, hanging forelegs with paws down the
  chest, ragged tailed pelt down the back, torn-point fur kilt, and wolf/bear beast head on one
  shoulder for berserkers, chieftains, Jarl Hakon, and roughly half of other Vikings). Added
  bleached horned animal skulls (cattle, rams, and stag antlers) on stakes around the Temple of the
  Old Gods and mounted over the Great Hall door.

### Changed

- **Tomoe Gozen:** Updated her strength to **Swift Hands** (throws her shuriken almost twice as fast)
  and updated her 3D figure to hold fanned eight-point stars.
- **Ragnar Lothbrok:** Updated his strength and 3D figure for the **Iron Flail** (faster, harder
  swings).
- **Minotaur (Greece duel villain):** Updated loadout to throwing axes and the **Iron Flail**
  (160 health).

## [1.3.0] - 2026-11-28

### Added

- **Red Gulch Western Church:** Enterable whitewashed church at the edge of town with wooden pews,
  altar, south choir gallery reached by an interior stair, and a square bell tower with an
  interior wrapping stair climbing to the 11 m belfry (hanging brass bell, cover parapet, and
  belfry marksman).
- **Water Tower catwalk & Livery Barn hayloft:** Added a walkable timber catwalk around the water
  tower tank and an interior hayloft inside the livery barn, each reached by a wooden ladder.
- **Great Natural Boulder in Rütli Valley:** Replaced the blocky Swiss hill with a 16 m × 14 m ×
  7.5 m sculpted irregular natural boulder with varied grey rock faces, grassy flat summit, mossy
  ledges, fallen boulders and tussocks, a leaning wooden ladder (1.5 m foot offset), cover stones,
  a summit pickup, a marksman, and a slim 3.5 m dark iron summit cross with flared ends.
- **Two-storey Pagoda in Kyoto Mist:** Opened the pagoda's second storey with narrow window slits
  on all four sides, reached by an interior wooden ladder rising past the untouched central pillar
  and ground-floor altar.

## [1.2.0] - 2026-11-28

### Added

- **Ladders with no extra key:** Face any ladder within about a metre and walk forward to climb at
  3.4 m/s with a rung sound, stepping automatically onto the roof or deck at the top; stepping
  backwards off the top edge near the ladder slides smoothly down instead of falling. Supports
  leaning ladders.
- **Sneaking (`X`):** Toggles silent half-speed movement on and off with a `SNEAKING` HUD badge.
  Idle enemies notice a sneaking player from two-thirds usual distance in front and only within
  3 m from behind. Running (`Shift`) suspends sneaking while running; combines with crouching.
- **Tab-close safeguard:** Prompts before leaving the page while a chapter or online game is in
  progress.
- **Deep-water rescue:** Any player or enemy who falls under deep water without a bridge or deck
  is returned after about a second (the player to the last dry ground with a toast; an enemy to
  its starting post).
- **Per-bay sloped fences & body-aligned animal colliders:** Added `addSegmentedFence` (per-bay
  height-following boxes ending at the top rail) and yaw-rotated `addOrientedBox` colliders for
  horses and yaks so projectiles never lodge in mid-air above fences or beside animal flanks.

### Changed

- **Crouching key (`C` only):** Removed `CapsLock` from crouch toggling so only `C` toggles
  crouching (`Space` still stands up when headroom allows).
- **Ladders replace jump crates:** Replaced the jump-crate stacks on Red Gulch's four flat roofs,
  the Soviet garage roofs, and every chapter's raised hide with ladders; tuned jump height to
  ~1.01 m (reaching ledges up to ~1.45 m with step-up at apex).

## [1.1.0] - 2026-11-28

### Added

- **Crouching (`C` or `CapsLock`):** Lowers eye height to 0.95 m (from 1.68 m) and collision
  height to 1.05 m, halves walk speed without sprinting, cuts enemy detection range by 40%, lets
  you hide behind waist-high cover and enter low crawl-in dens, refuses to stand up without
  headroom, stands back up on `Space`, shows a `CROUCHING` badge in the HUD, and syncs live in
  Duel Mode with a kneeling opponent and lowered hit shape.
- **Places to climb, jump onto, and hide in:**
  - *Act I (Wild West):* Climbable 12 m flat-topped red-rock butte with a four-leg zigzag path
    and summit marksman; walkable flat roofs behind false fronts on the general store, sheriff's
    office, blacksmith, and telegraph office (each reached by three rising jump crates); raised
    timber hide and 1.25 m crawl-in den.
  - *Act III (Switzerland):* Climbable 9 m rocky hill with a three-leg zigzag stair and summit
    marksman; hunter's high seat near the start reached by two jump blocks; crawl-in stone den.
  - *Every chapter:* At least one raised hide (deck on posts with low cover wall on three sides,
    reached by two jump blocks) and one crouch-only crawl-in den (1.25 m doorway with a health
    item inside). In *Act VII (Soviet Russia)*, the two garage roofs connect into a single
    walkable row reached by two crates, paired with a concrete cellar-hatch den. Enemies follow
    up stepped hills and stairs but cannot jump or crouch onto roofs, hides, or dens.
- **New enterable interiors and landmarks in every chapter:**
  - *Act I (Wild West):* General store shelves, sheriff's office with an iron-barred cell,
    livery stable with stalls and a horse, blacksmith with glowing forge and anvil, undertaker
    with coffins, and telegraph office with counter and safe.
  - *Act II (Japan):* Enterable pagoda ground floor, storehouse (*kura*), and bell tower
    (*shōrō*), plus seven non-combatant bystanders — three *komusō* flute monks and four geisha
    with oil-paper umbrellas (one dressed all in white with a white silk hood).
  - *Act III (Switzerland):* Walk-behind waterfall and grotto with half-transparent falling
    water, steps on both sides, an enemy, and a health item inside; three open barns on stone
    stilts (with hay, cheese wheels, and tools) plus a drive-through hay barn with bales and a
    cart.
  - *Act IV (Ancient Greece):* 25-tree olive grove with an oil press, golden Athena statue inside
    the marble temple and larger bronze Athena outdoors, mosaic floors, colonnaded villa with
    courtyard pool, and stone theatre with three-door stage house.
  - *Act V (Scandinavia):* Boat shed with boat inside, open smithy, timber jetty, and four
    boardable Viking longships (two at the jetty, the player's own at the beach, and a larger
    chieftain's ship with a striped tent on deck) with walkable decks, raised bow/stern
    platforms, bulwarks, sea chests, sails, rail shields, oars, dragon heads, and gangplanks.
  - *Act VI (Normandy):* Bombed parish church ruin (no roof, breached walls, jagged tower, fallen
    bell, charred beams, rubble, and small fire), enterable farm barn, and bomb craters.
  - *Act VII (Soviet Russia):* Yellow-on-red hammer and sickle on flags, plinth, tower, palace of
    culture, and ministry; enterable metro pavilion (red M sign, turnstiles, ticket window, iron
    grille), district library with bookshelves, and building site (concrete frame, upper slab
    reached by stairs, tower crane, and enterable builders' hut).
  - *Act VIII (Tibet):* Large gilded seated Buddha (lotus throne, crossed legs, earth-touching
    right hand, alms bowl, blue hair, and halo) in the monastery assembly hall, a new village
    temple, and a new ridge chapel that also holds one huge spinning prayer wheel, plus an
    enterable yak-hair nomad tent.
- **Duel Mode upgrades:**
  - Players stay connected after a duel ends; clicking **Next Duel (Same Connection)** returns
    both players to the Duel screen so the host can pick the next chapter, rules, and enemy count
    without creating a new invite link or code.
  - Computer enemies selector expanded from yes/no to **None, 1, 2, 3, 4, 5, 6, 7, 8, 9** hostile
    enemies spread across the map.
  - Two new playable Duel villains for Ancient Greece (27 villains total; all eight Greek fighter
    cards fit on a 1366 × 768 screen): the **Minotaur** (bull's head, horns, red eyes, nose ring,
    large body; throwing axes and sword; 160 health) and **Xerxes** (tall gold crown, long black
    beard, purple and gold robe; bow and sword; 20% less damage taken).
- **Character likenesses:** Added ears, mouths, and eyebrows to all sculpted faces, plus
  recognisable likenesses for Mussolini, Göring, Stalin, Brezhnev, Mao, Hitler, Solzhenitsyn,
  Nureyev, Wyatt Earp, and Andropov — with zero party symbols on any figure.
- **Version number on title screen:** Displays `v1.1.0` in the bottom-right corner of the title
  screen, injected directly from `Gemini/package.json`.

### Changed

- **Fast navigation-grid build:** Added coarse 6 m × 6 m 2D spatial buckets to
  `CollisionWorld.buildNavGrid`, cutting per-level nav-grid build times to 1.4–14.1 ms across all
  eight chapters.

### Fixed

- **Bridges and decks over water:** Both walking and enemy A\* route-finding now accept any solid
  walkable surface (bridges, jetties, gangplanks, ship decks) within stepping reach over water,
  including crossing the arched vermilion bridge in Kyoto Mist in both directions without
  jumping.
- **Frame time-step safety:** Clamped frame delta time `dt` to `>= 0` so a negative first step
  never moves the player or enemies.
- **Route-finding and stair/door geometry:** Tightened A\* uphill step limit (`0.48 m`) with a
  safety margin below walking `STEP_MAX` (`0.52 m`), verified climbable stairs (`<= 0.45 m` rise)
  and full-height normal doorways (`>= 2.5 m`) across every chapter, and excluded jump-only roofs
  and hides from overwriting indoor ground-floor nav cells.

## [1.0.0] - 2026-11-19

### Added

- Eight playable chapters across history and legend (*Red Gulch*, *Kyoto Mist*, *Rütli Valley*,
  *Aegean Isle*, *Fjord of the North*, *Normandy*, *Stalnogorsk*, *Road to Lhasa*) with 24
  selectable heroes, 26 weapons, enterable buildings, 2D A\* enemy route-finding, procedural
  GLSL shaders, PBR textures, and Web Audio soundtracks.
- Online two-player direct WebRTC **Duel Mode** (5-letter PeerJS invite link plus zero-server
  copy-paste SDP backup), three rule sets, and 25 playable villains.
