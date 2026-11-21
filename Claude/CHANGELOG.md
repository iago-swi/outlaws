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

[1.2.0]: https://github.com/iago-swi/outlaws/releases/tag/lone-hand-v1.2.0
[1.1.0]: https://github.com/iago-swi/outlaws/releases/tag/lone-hand-v1.1.0
[1.0.1]: https://github.com/iago-swi/outlaws/releases/tag/lone-hand-v1.0.1
[1.0.0]: https://github.com/iago-swi/outlaws/releases/tag/lone-hand-v1.0.0
