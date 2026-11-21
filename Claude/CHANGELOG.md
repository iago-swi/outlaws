# Changelog — Lone Hand

All notable changes to *Lone Hand* (the Claude version in this repository) are listed here,
newest first. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

**Version numbers** have three parts, `MAJOR.MINOR.PATCH`:

- `PATCH` (1.0.**1**): a fix; nothing new to play.
- `MINOR` (1.**1**.0): something new or changed that a player will notice: a place, a
  character, a control, a mode.
- `MAJOR` (**2**.0.0): a new era of the game: a rebuilt world, or changes that make old
  habits or old links stop working.

Each version is a Git tag named `lone-hand-vX.Y.Z` and a
[release on GitHub](https://github.com/iago-swi/outlaws/releases) with these notes and the
game as one downloadable file. The number is also shown in the bottom right corner of the
title screen.

## [1.4.0] - 2026-11-21

### Added

- **A Graphics setting**, at the bottom left of the title screen: Automatic, High, Medium
  or Low. During a chapter, `G` steps through the four (also while paused).
  - High is the picture as it was. Medium draws three quarters of the resolution. Low draws
    half of it, with fewer grass tufts and far trees, shorter shadows and no glow.
  - Automatic, the default, starts on High and steps down by itself while the game runs
    below about 42 frames a second. If a step brings nothing, it is taken back.
  - Your choice is remembered for the next visit.
  - Measured on a laptop graphics chip at 3840 × 2160, in the heaviest chapter (IX): 19
    frames a second on High, 30 on Medium, 78 on Low.
- A frame counter for reporting how the game runs on your machine: add `?fps` to the
  address.

### Changed

- The key hints show `W` `A` `S` `D` again. The arrow keys still move you in the same way.
- **The code of a duel is easier to read and to type.** It is shown in plain upright
  letters instead of the chapter's display type, and no longer contains characters that
  are easily taken for one another (no 0, O or Q; no 1 or I; no 2 or Z; no 5 or S; no 8 or
  B; no G; neither U nor V). A code may be typed in small letters or with spaces.
- The lists on the Duel screen and the hero screen (chapter, rules, number of enemies) use a
  plain typeface, so that a 5 or a 9 reads clearly.

### Removed

- The backup way of connecting a duel with copy-paste codes. The invite link and its code
  have proved reliable, and the Duel screen is simpler without it.

## [1.3.0] - 2026-11-21

### Added

- **Chapter IX, Tenochtitlan.** The evening of 30 June 1520: the Spaniards slip out of the
  city over the western causeway, loaded with the gold of the temples, and you must stop
  them before they reach the shore.
  - The place: the Great Temple, climbable by its stair to two shrines heaped with gold; the
    skull rack; jungle round the precinct and along the shores; the causeway over the lake,
    cut by three canals; a volcano smoking on the horizon.
  - Three heroes, each with their own weapon and the obsidian-edged club: Cuauhtémoc with a
    **poisoned dart-thrower** (a dart wounds, then goes on hurting for five seconds),
    Tzilacatzin with heavy stones, Nezahualcóyotl with the bow.
  - Thirty-six enemies: swordsmen, crossbowmen, arquebusiers, **horsemen**, a **cannon** with
    its gunner, and the captain of the rear guard.
  - Three villains for Duel mode: Hernán Cortés, Pedro de Alvarado, Nuño de Guzmán.
  - Its own music (drums, a clay flute, a conch) and evening sounds.
- Horned animal skulls at the temple of the old gods and over the hall door in Jarnvik.
- The title screen shows nine chapters, in three rows of three.

### Changed

- Anyone who ends up on the bed of a lake or the sea, the player or an enemy, in any chapter,
  is put back on dry ground after a moment instead of staying stuck there.

## [1.2.0] - 2026-11-21

### Changed

- **The Vikings of Jarnvik swing a flail instead of a sword** (right mouse button): a wooden
  haft with two spiked iron balls on chains. It is whirled once, then swept across. A swing
  takes twice as long as the sword's, but it hits harder and strikes everyone in a wide arc in
  front of you. The throwing axes are unchanged. The Minotaur, who carries the same axes in
  Duel mode, has the flail too.
- **The Vikings wear animal skins:** shaggy fur over the shoulders, paws down the chest, a
  ragged pelt on the back and a fur kilt, in five colours of fur; many carry the beast's head
  on a shoulder. This goes for every enemy in Jarnvik, its three heroes, and the duel villains
  Erik Bloodaxe and Ivar the Boneless.
- **The throwing stars are real stars:** eight sharp points and a hole in the middle, dark
  steel with bright ground edges. The enemy ninja throw the same ones.

## [1.1.0] - 2026-11-21

### Changed

- **Kagemori is fought with throwing stars (shuriken) instead of the bow.** Each throw sends
  three stars in a narrow fan, about two throws a second: deadly close up, where all three
  strike, and weak far off, where only one does. The katana stays on the right mouse button.
- Tomoe Gozen's strength is now *Swift hands*: she throws her stars almost twice as fast.
- The three villains of Kagemori in Duel mode throw stars too.
- The bow remains in the game with Songtsen Gampo (chapter VIII) and the duel villains Xerxes
  and Langdarma.

## [1.0.1] - 2026-11-21

### Fixed

- Aiming with the six-shooter (and with the pistols of chapters VI to VIII) no longer hides
  the target: the gun now stays under the crosshair, as the Sten gun already did. The carbine,
  which sat only just under the crosshair, is lowered the same way. Shots land exactly where
  they did before. Thanks to the player who reported it.

## [1.0.0] - 2026-11-21

The first numbered version: the game as it stands after the rounds published so far. Eight
chapters, twenty-four heroes, most buildings open, ladders, hides and dens, and an online
Duel mode for two players with twenty-seven villains.

### Added

- The version number on the title screen (bottom right), taken from `package.json` when the
  game is built.
- This changelog, and numbered releases on GitHub.

## Before 1.0.0

The rounds published before versions were numbered, by date.

### 2026-11-21

#### Added

- An **Enemies** list on the hero screen: all of the chapter's enemies, or any number from
  10 to 30. The boss always stays.
- Ladders, climbed with no extra key: face one and walk into it. They stand against the
  flat roofs of Dry Gulch, the garages of Stalnogorsk and every raised hide.
- Crouching (`C`): half speed, harder to see, fits through low doors.
- A raised hide and a den with a crawl-in door in every chapter; Lookout Butte in Dry Gulch,
  climbed by a zigzag of rock steps.
- The church of Dry Gulch can be entered, with a stair inside the tower up to the belfry.
- In Uri, a great natural boulder with a summit cross, reached by a leaning ladder; a
  waterfall with a path behind it.
- Four longships to board at Jarnvik; more buildings to enter in Stalnogorsk and Che La;
  flute monks and geisha in Kagemori; golden Buddhas, the hammer and sickle.
- Greek villains for Duel mode: the Minotaur and Xerxes join the Cyclops, Medusa and
  Antinous.
- In Duel mode the host chooses how many computer enemies stay in the world: none, or one
  to nine.

#### Changed

- The arrow keys move exactly like `W` `A` `S` `D` (left and right sidestep; the mouse turns
  the view) and are the keys shown on screen.
- The two players of a duel stay connected between duels; no new link for a rematch.
- The stair of the temple of Ithaca is longer and can be climbed.

#### Fixed

- Crossbow bolts lodged in the air above fences on sloping ground; fences, cows, yaks and
  horses have collision shapes that fit them.
- The bridge of Kagemori was hard to cross; enemies could land on roofs on the first frame.

#### Removed

- Crates to jump on (ladders replace them); `Caps Lock` as a second crouch key; the villain
  Circe.

### 2026-11-20

#### Added

- The first three chapters: Dry Gulch, Kagemori and Uri.
- A choice of three heroes per chapter, each with their own look and one strength.
- Chapters IV and V (Ithaca, Jarnvik), and practice mode.
- Chapter VI, Sainte-Aubine (Normandy, 6 June 1944).
- Chapters VII and VIII (Stalnogorsk, Che La); buildings that can be entered; solid walls
  and bodies; enemies that find their way round walls and through doors.
- Duel mode for two players online, with twenty-five villains to play, and a new title
  screen.

[1.4.0]: https://github.com/iago-swi/outlaws/releases/tag/lone-hand-v1.4.0
[1.3.0]: https://github.com/iago-swi/outlaws/releases/tag/lone-hand-v1.3.0
[1.2.0]: https://github.com/iago-swi/outlaws/releases/tag/lone-hand-v1.2.0
[1.1.0]: https://github.com/iago-swi/outlaws/releases/tag/lone-hand-v1.1.0
[1.0.1]: https://github.com/iago-swi/outlaws/releases/tag/lone-hand-v1.0.1
[1.0.0]: https://github.com/iago-swi/outlaws/releases/tag/lone-hand-v1.0.0
