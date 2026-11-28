# Changelog — Eight Horizons

All notable changes to *Eight Horizons* (the Gemini version in this repository) are listed here,
newest first. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

**Version numbers** follow `MAJOR.MINOR.PATCH`:

- `PATCH` (1.1.**1**): a fix; nothing new to play.
- `MINOR` (1.**1**.0): something new or changed that a player will notice: a place, a
  character, a control, a mode.
- `MAJOR` (**2**.0.0): a rebuilt game, or changes that make old habits or old links stop working.

Each version is an annotated Git tag named `eight-horizons-vX.Y.Z` and a
[release on GitHub](https://github.com/iago-swi/outlaws/releases). The version number is shown
in the bottom-right corner of the title screen.

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
