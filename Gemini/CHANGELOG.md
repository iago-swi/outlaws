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
