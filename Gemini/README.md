# Outlaws · Eight Horizons (Gemini version)

**Version 1.1.0** · [Changelog](CHANGELOG.md) · **[Play it in your browser](https://iago-swi.github.io/outlaws/Gemini/)**

A real-time 3D WebGL2 first-person shooter inspired by LucasArts’ 1997 spaghetti-western classic *Outlaws*, built with **Three.js**, custom **GLSL shaders** (atmospheric skies, animated sea/lake/waterfalls, and shimmering northern lights), procedural **PBR Canvas textures**, **ACES Filmic selective bloom**, enterable hollow buildings across all eight worlds, crouching, climbable hills, jumpable roofs and hides, crouch-only crawl-in dens, spatial-bucket 2D **A\* enemy route-finding**, live **3D hero selection** (24 heroes in single-player plus 27 villains in online Duel Mode), direct browser-to-browser **WebRTC Duel Mode** with persistent rematch connections, and **Web Audio API** music & SFX synthesis — with zero external media assets.

| Act I · Red Gulch (Wild West) | Act II · Kyoto Mist (Feudal Japan) |
| :---: | :---: |
| <img src="screenshot-west.png" width="400" alt="Act I: Red Gulch Wild West main street at sunset with blacksmith, bank, jail, saloon, telegraph office, stepped 12m red-rock butte on the left, and .45 Peacemaker revolver"> | <img src="screenshot-japan.png" width="400" alt="Act II: Kyoto Mist with geisha holding an oil-paper umbrella on the left, arched vermilion bridge over the koi pond on the right, vermilion Torii gate framing Mount Fuji, sakura blossoms, and samurai katana"> |
| **Act III · Rütli Valley (Switzerland)** | **Act IV · Aegean Isle (Ancient Greece)** |
| <img src="screenshot-swiss.png" width="400" alt="Act III: Rütli Valley snow-capped Alps, enterable Swiss chalets, Habsburg watchtower with Austrian banners, alpine chapel, and Tell's crossbow"> | <img src="screenshot-greece.png" width="400" alt="Act IV: Aegean Isle sunlit Sacred Way leading to the large bronze Athena statue before the marble temple sanctuary, olive trees, cypresses, Spartans with lambda shields, and bronze javelin"> |
| **Act V · Fjord of the North (Scandinavia)** | **Act VI · Normandy (6 June 1944)** |
| <img src="screenshot-scandinavia.png" width="400" alt="Act V: Fjord of the North snowy palisade gate, horned Viking chieftain with painted shield, Great Hall under green northern lights, and throwing axe"> | <img src="screenshot-normandy.png" width="400" alt="Act VI: Normandy pre-dawn stone village with bombed ruined parish church, sweeping searchlights, occupying soldiers, guard dog, coastal concrete bunker, and scoped rifle"> |
| **Act VII · Stalnogorsk (Soviet Russia, 1974)** | **Act VIII · Road to Lhasa (Tibet, 1959)** |
| <img src="screenshot-soviet.png" width="400" alt="Act VII: Stalnogorsk winter 1974 grey overcast sky, falling snow, tram rails, red flags and monuments with yellow hammer and sickle, district library, red M metro pavilion, Committee tower with red star, and PPSh-41 SMG"> | <img src="screenshot-tibet.png" width="400" alt="Act VIII: Road to Lhasa March 1959 deep blue sky, snow peaks, whitewashed houses with dark red parapets, chortens, five-coloured prayer flags, army camp, ridge monastery, and bolt-action rifle"> |

| Duel · choose your fighter | Duel · face to face |
| :---: | :---: |
| <img src="screenshot-duel-pick.png" width="400" alt="Duel fighter selection screen in Aegean Isle at 1366x768: 3 gold-star Heroes above 5 red-skull Villains (Polyphemus, Medusa, Antinous, Minotaur, Xerxes) with live 3D Minotaur turntable on the left"> | <img src="screenshot-duel.png" width="400" alt="Two-player online duel on the Sacred Way of Aegean Isle: Minotaur (160 HP, throwing axe) facing Xerxes in his tall gold crown and purple-and-gold robe, with top scoreline You 0-0 Xerxes and compass"> |

## Title Screen

Every visit to the title screen picks one of the eight worlds at random for the rotating 3D background and aligns the page's accent colour and title lettering to that horizon (with elevated camera orbits clear of roofs, trees, and foliage). All eight level cards share a uniform layout (Roman numeral, title, place and year, and one line of description) distinguished only by each level's top accent bar, alongside the **Duel · two players online** and **Ride Out** controls and the build version (`v1.1.0`) in the bottom-right corner.

## Single-Player Campaign

All eight historical frontiers — *Eight frontiers — Twenty-four legends* — can be played sequentially or selected directly from the title screen, alongside *Outlaws*-style difficulty settings (**The Good**, **The Bad**, **The Ugly**). Before every single-player level begins, a **Hero Selection Screen** displays its three historical or legendary heroes (villains never appear in single-player) on a live rotating 3D turntable — selectable with mouse hover/click or keyboard (`1`, `2`, `3`, `Enter`) — and keeps your chosen hero on retry.

| Act | Setting, Enterable Places, Climbs & Dens | Selectable Heroes (1 strength / loadout each) | Arsenal | Enemies & Boss (Total) |
| --- | --- | --- | --- | --- |
| **Act I · 1884** — *Red Gulch* | Wild West town + **Boot Hill Cemetery** (iron fence, stone gate, graves, open grave with coffin & shovel, dead hanging tree, undertaker's cart) & climbable **12 m flat-topped red-rock butte** (4-leg zigzag rock path & summit marksman). Enterable: **Saloon**, **Jail** (marshal office + 2 iron-barred cells solid to bodies & bullets), **Sheriff's Office** (1 barred cell), **Bank** (counter, barred teller cage, safe & gold bars), **Livery Barn** (stalls, sculpted horse, hay), **General Store** (counter & shelves), **Blacksmith** (forge & anvil), **Undertaker** (coffins), **Telegraph Office** (counter & safe), **Southern Homestead**, **Boot Hill Crypt** (hidden outlaw + health item). Walkable flat roofs behind false fronts (General Store, Sheriff, Blacksmith, Telegraph, each reached by 3 jump crates), raised timber hide, and 1.25 m crawl-in cellar den. | **Wyatt Earp** (−25% damage taken) · **Calamity Jane** (+18% move speed) · **Billy the Kid** (faster fire & reload) | `.45 Peacemaker`, `10-Gauge Coach Gun`, `Henry .44 Scoped`, `Dynamite Sticks` | Outlaw Cowboys, Mexican Banditos & **El Diablo** (28) |
| **Act II · 1603** — *Kyoto Mist* | Feudal Japan sanctuary beneath Mount Fuji with Torii gates, Zen garden, Koi pond & walkable **arched vermilion bridge**, sakura groves, bamboo forest, and **7 solid non-combatant bystanders** (3 *komusō* flute monks + 4 geisha with oil-paper umbrellas, one dressed all in white with a white silk hood). Enterable: **Grand Shinto Shrine Hall** (altar), walk-through **Shoji Tea Houses**, walled **Dojo Compound** with Torii gate, **Pagoda ground floor**, **Storehouse (*kura*)**, **Bell Tower (*shōrō*)**, **Bamboo Hermitage**, raised hide, and 1.25 m crawl-in den. | **Miyamoto Musashi** (faster katana + extra reach) · **Tomoe Gozen** (~2× Yumi Longbow speed) · **Date Masamune** (−30% damage taken) | `Muramasa Katana`, `Yumi Longbow`, `Shinobi Shuriken`, `Tanegashima Matchlock` | Shadow Ninjas, Rōnin Samurai & **Lord Kurogane** (28) |
| **Act III · 1307** — *Rütli Valley* | Medieval Switzerland encircled by snow-capped Alps, Lake Lucerne, **walk-behind waterfall & grotto** (half-transparent falling water into plunge pool, stone ledge reached by steps on both sides, enemy & health item inside), bridge, bearded Waldstätten halberdiers & Uri bull flag, Tell's apple, climbable **9 m rocky hill** (3-leg zigzag stair & summit marksman), and **hunter's high seat** near start (2 jump blocks). Enterable: **Swiss Chalets** (open stone ground floor), **3 Stilt Barns** on stone stilts (hay, cheese wheels, tools), **Drive-Through Hay Barn** (bales & cart), **Alpine Chapel**, **Habsburg Watchtower**, outlying **Alp Hut**, and 1.25 m crawl-in stone den. | **Wilhelm Tell** (40% faster crossbow reload) · **Arnold von Winkelried** (+50% max health) · **Werner Stauffacher** (out-of-danger health regen) | `Tell's Armbrust`, `Swiss Halberd`, `Alpine Repeater`, `Alpine Fire-Pot` | Austrian Halberdiers, Habsburg Arquebusiers & **Captain von Gessler** (28) |
| **Act IV · 480 BC** — *Aegean Isle* | Sunlit Greek island in a turquoise sea with a **25-tree olive grove & oil press**, cypresses, **mosaic floors**, large **bronze Athena statue** outdoors, triremes & marble Sacred Way. Enterable: **Every Cycladic Village House**, **Acropolis Marble Temple** (golden Athena statue inside), **Colonnaded Villa** (courtyard pool), **Stone Theatre** (stepped seats & 3-door stage house), outlying **Fishermen's Cape** (2 houses + **Beacon Tower**), raised hide, and 1.25 m crawl-in den. | **Ulysses** (faster & harder javelins) · **Achilles** (−33% damage taken) · **Heracles** (+60% max health) | `Bronze Javelin`, `Xiphos Short Sword` | Spartan Hoplites, Spartan Javelineers (red cloaks, crested helms, Λ shields) & **Archidamos** (29) |
| **Act V · 985 AD** — *Fjord of the North* | Snowy Norwegian winter fjord beneath animated northern lights with palisade gate, timber jetty, **4 boardable Viking longships** (2 at the jetty, player's ship at the beach, larger chieftain's ship with red-and-white striped tent on deck; walkable decks, raised bow/stern platforms, solid bulwarks, sea chests, set/furled sails, rail shields, stowed oars, steering oar, dragon heads & gangplanks) & snowy pines. Enterable: **Every Longhouse**, **Boat Shed** (with boat), **Open Smithy**, **Jarl's Great Hall**, outlying **Farm**, **Temple of the Old Gods**, raised timber hide, and 1.25 m crawl-in turf den. | **Erik the Red** (faster axe throw & reload) · **Leif Erikson** (−33% damage taken) · **Ragnar Lothbrok** (faster & harder Viking Sword) | `Throwing Axe`, `Ulfberht Viking Sword` | Viking Huscarls, Bowmen, Berserkers, **4 Horned Viking Chieftains** (iron helmet with 2 ox horns & gilt band, ~2× HP), horned **Jarl Hakon** & occasional horned raiders (34) |
| **Act VI · 6 June 1944** — *Normandy* | Occupied Norman countryside before dawn under searchlights, flak bursts & Channel invasion fleet, parked tank & truck (plain bar crosses only), and bomb craters. Enterable: ground floor of **Every Stone House**, **Bombed Parish Church Ruin** (no roof, breached walls, jagged tower, fallen bell, charred beams, rubble & small fire), **Farm Barn**, **Concrete Command Bunker** (map table, radio, bunks), outlying **Walled Manor**, rotating-sail **Windmill**, raised hide, and 1.25 m crawl-in den. | **Lyudmila Pavlichenko** (scoped bolt-action rifle, 1-shot kills on ordinary soldiers) · **Virginia Hall** (full-auto 32-round Sten SMG + stealth) · **Maurice Bavaud** (hard-hitting heavy pistol) | Hero's signature firearm + `Resistance Knife` | Occupying Riflemen, Officers, Sandbag MG Gunners, barking **Guard Dogs** & **Major Vogel** (32) |
| **Act VII · Winter 1974** — *Stalnogorsk* | Invented Soviet city under grey overcast skies & falling snow: tram-rail avenue, street lamps, five-storey panel blocks & courtyard playground, bus shelter, news kiosk, parked cars, checkpoint & militia van, cobbled square with yellow-on-red **hammer & sickle** emblems on flags, leader plinth, tower, palace of culture & ministry, park with frozen pond & bandstand, distant TV tower. Enterable: **Food Shop**, **2 Garages** (connected walkable roof row reached by 2 jump crates), **Metro Pavilion** (red `M` sign, turnstiles, ticket window, iron grille), **District Library** (rows of shelves), **Building Site** (concrete frame, upper slab reached by stairs, tower crane & enterable **Builders' Hut**), **Palace of Culture**, **Factory Hall**, **Committee Building** (lobby, barred archive cage with seized manuscript, 3 barred cells), and **Concrete Cellar Hatch** crawl-in den. Health item: **glass of hot tea**. | **Aleksandr Solzhenitsyn** (PPSh-41 SMG, −15% damage taken) · **Andrei Sakharov** (pistol +60% damage) · **Rudolf Nureyev** (+25% move speed & stealth) | Hero's firearm + `Utility Knife` | Committee Agents, Soviet Militia, Guard Dogs & **Colonel Voronin** (36) |
| **Act VIII · March 1959** — *Road to Lhasa* | High valley of ochre winter grass ringed by snow-capped peaks under a deep blue sky: unarmed **Dalai Lama** & caravan at start (2 monks, 2 Khampa riders, 3 horses, prayer pole — strictly non-combatant), white chortens, five-coloured prayer flags, mani wall, grazing yaks, frozen turquoise lake, army camp, stone stairway with gateway chorten up to ridge monastery. Enterable: **Every Tibetan Village House**, **Village Temple** (gilded seated Buddha), **Yak-Hair Nomad Tent**, **Ruined Stone Fort**, **Monks' Houses**, **Ridge Chapel** (gilded seated Buddha + **one huge spinning prayer wheel**), **Monastery Assembly Hall** (large gilded seated Buddha on lotus throne with earth-touching hand, alms bowl, blue hair & halo), raised stone hide, and 1.25 m crawl-in den. Health item: **bowl of butter tea**. | **Gompo Tashi Andrugtsang** (bolt-action rifle with iron sights, 1-shot kills on ordinary soldiers + knife) · **Ani Pachen** (pistol + knife, +20% speed) · **Songtsen Gampo** (bow & royal sword, −20% damage taken) | Hero's loadout (`Bolt Rifle`, `Pistol`, `Bow`, `Sword` or `Knife`) | Occupying Riflemen, Machine-Gunners, club-wielding **Red Guards** & **Commander Zhao** (35) |

---

## Duel Mode: Two Players Online, Face to Face

Click **Duel · two players online** on the title screen to open the Duel Lobby. Two players on separate browsers connect directly peer-to-peer over a **WebRTC DataChannel** and fight across the full map of any of the eight levels, spawning at opposite ends (normal start vs. far boss end).

### Starting, Connecting & Rematches
1. **Invite link (primary method):** The host picks the chapter, rules, and computer-enemy count, then clicks **Create Invite Link** to get a 5-letter code and shareable `?duel=XXXXX` URL. Opening that URL takes the guest straight into the lobby and connects automatically. Public **PeerJS** signalling (`0.peerjs.com`) is used **only** for the initial handshake; once the direct WebRTC DataChannel opens, the signalling socket disconnects so zero gameplay data passes through any server.
2. **Copy-paste codes (backup, zero outside service):** Inside the lobby's fold-out **Backup connection** section, the host generates a native WebRTC offer code and sends it via any chat app; the guest pastes it to generate a reply code; the host pastes the reply code to connect directly without any signalling server.
3. **Stay connected for rematches:** When a duel ends, the WebRTC connection stays open. Clicking **Next Duel (Same Connection)** returns both players to the Duel screen where the host picks the next chapter, rules, and enemy count and starts again — no new link or code is needed until one player leaves.
4. **Privacy & connection limits:** Because WebRTC connects the two browsers directly, each player can see the other's network (IP) address. Direct peer-to-peer connections work across most home networks and LANs via STUN, but strict corporate firewalls or symmetric NATs without a TURN relay may block direct UDP handshakes.

### Rules & Options
- **First to 3 rounds:** Each kill ends a round; both fighters restart with full health and ammo at opposite ends of the map and swap ends every round.
- **One life:** Single sudden-death showdown — the first kill decides.
- **5 minutes, most kills:** A 5:00 wall-clock timer counts down; a slain fighter returns 3 seconds later at whichever end of the map is farther from the opponent. Higher score wins (or **A draw** if tied).
- **Computer enemies:** Choose **None, 1, 2, 3, 4, 5, 6, 7, 8, or 9** enemies from the chapter, spread across the map and hostile to both players (simulated authoritatively by the host; guest hits are sent to and decided by the host; dying to a computer enemy awards a point to the opponent).
- **Duel combat & crouching:** Every weapon works against the opponent at **60% of normal damage** (keeping headshot multipliers and each fighter's strength). Crouching (`C` / `CapsLock`) syncs live so the opponent visibly kneels with a lowered hit shape. The top HUD shows the live scoreline (`You 0–0 Xerxes · round 1`) and a **compass** marking the opponent as a larger glowing dot. Duels cannot be paused; pressing `Esc` only unlocks the mouse while the duel stays live.

### Playable Duel Villains (27 total — Duel Mode only)

In Duel Mode, fighter selection displays two labelled rows: **★ Heroes** (gold star) and **☠ Villains** (red skull, red-tinted cards; all eight cards in Greece fit comfortably on a 1366 × 768 screen). Either player may choose any hero or villain. No living person is included; historical dictators are shown with recognisable likenesses and strictly without party symbols (no swastika, fasces, or hammer and sickle) and with plain, factual descriptions.

| Act | Villain | Description | Duel Strength & Loadout |
| --- | --- | --- | --- |
| **I · West** | **Jesse James** | Bank and train robber of Missouri. | Moves 15% faster. |
| **I · West** | **Ike Clanton** | Rustler of Tombstone, Earp's enemy at the O.K. Corral. | Starts with 130 health. |
| **I · West** | **Belle Starr** | The Bandit Queen of Indian Territory. | Fires 30% faster. |
| **II · Japan** | **Oda Nobunaga** | Warlord, the Demon King of the Sixth Heaven. | Takes 25% less damage. |
| **II · Japan** | **Sasaki Kojirō** | Musashi's rival, master of the long sword. | Extended katana reach (+2.0 m). |
| **II · Japan** | **Fūma Kotarō** | Leader of the Fūma ninja clan. | Moves 20% faster. |
| **III · Switzerland** | **Hermann Gessler** | Habsburg bailiff of Uri, of the hat on the pole. | Takes 20% less damage. |
| **III · Switzerland** | **Charles the Bold** | Duke of Burgundy, beaten at Grandson, Murten and Nancy. | Starts with 150 health. |
| **III · Switzerland** | **Duke Leopold I** | Habsburg duke, routed at Morgarten in 1315. | Harder melee blows (+45%). |
| **IV · Greece** | **Polyphemus** | The Cyclops, one-eyed giant of Homer. | 180 health, larger target (`1.36×` stature). |
| **IV · Greece** | **Medusa** | The Gorgon with living snakes for hair. | Thrown javelins fire faster and hit 30% harder. |
| **IV · Greece** | **Antinous** | Leader of the suitors in Ulysses' hall. | Moves 15% faster. |
| **IV · Greece** | **Minotaur** | Bull-headed monster of the Cretan labyrinth. | Throwing axes and sword; starts with 160 health. |
| **IV · Greece** | **Xerxes** | Great King of Persia, who invaded Greece in 480 BC. | Bow and sword; takes 20% less damage. |
| **V · Scandinavia** | **Erik Bloodaxe** | King of Norway, slayer of his brothers. | Throws axes much faster. |
| **V · Scandinavia** | **Ivar the Boneless** | Ragnar's son, leader of the Great Heathen Army. | Takes 25% less damage. |
| **V · Scandinavia** | **Loki** | Trickster god of Norse myth. | Moves 20% faster (mythic Norse depiction). |
| **VI · Normandy** | **Adolf Hitler** | Dictator of Nazi Germany, 1933–1945. | Pistol & knife; takes 20% less damage. |
| **VI · Normandy** | **Benito Mussolini** | Fascist dictator of Italy, 1922–1943. | Submachine gun & knife; 120 health. |
| **VI · Normandy** | **Hermann Göring** | Head of the Luftwaffe in Nazi Germany. | Scoped bolt-action rifle & knife. |
| **VII · Soviet Russia** | **Joseph Stalin** | Soviet dictator, 1924–1953. | Pistol & knife; takes 25% less damage. |
| **VII · Soviet Russia** | **Yuri Andropov** | Head of the KGB, 1967–1982. | Pistol & knife; moves 15% faster. |
| **VII · Soviet Russia** | **Lavrentiy Beria** | Stalin's chief of secret police. | Pistol hits 50% harder + knife. |
| **VII · Soviet Russia** | **Leonid Brezhnev** | Soviet leader, 1964–1982. | Submachine gun & knife; 130 health. |
| **VIII · Tibet** | **Mao Zedong** | Chairman of Communist China, 1949–1976. | Bolt-action rifle & knife; takes 20% less damage. |
| **VIII · Tibet** | **Langdarma** | Ninth-century Tibetan king who persecuted Buddhism. | Bow and sword; 140 health. |
| **VIII · Tibet** | **Jiang Qing** | Madame Mao, leader of the Gang of Four. | Pistol & knife; moves 20% faster. |

*Historical notes:*
- **Act VI (Normandy):** Lyudmila Pavlichenko, Virginia Hall, and Maurice Bavaud were real figures who resisted the Nazi regime; they did not meet in Normandy in June 1944 and appear together here as legends. Vehicles display plain military bar crosses only.
- **Act VII (Stalnogorsk):** Stalnogorsk is an invented 1974 Soviet city; Solzhenitsyn, Sakharov, and Nureyev stand together as legends.
- **Act VIII (Tibet):** Gompo Tashi Andrugtsang, Ani Pachen, and King Songtsen Gampo appear together as legends. The Dalai Lama at the start is strictly unarmed, non-targetable, and takes no part in fighting. **Red Guards** belong historically to the Cultural Revolution years after 1966 rather than 1959.

### Controls

| Action | Controls |
| --- | --- |
| Hero / fighter selection | Mouse hover/click (plus `1`, `2`, `3` and `Enter` in single-player) |
| Move & strafe | `W`, `A`, `S`, `D` or Arrow keys |
| Sprint / Jump (or stand up) | `Shift` / `Space` |
| Crouch (toggle or CapsLock state) | `C` or `CapsLock` |
| Aim / Shoot / Scope or Alt-Fire | Mouse (Pointer Lock) / `LMB` / `RMB` |
| Manual reload / Switch weapons | `R` / `1`–`4` or Mouse Wheel |
| Mute / Pause (SP) or Unlock Mouse (Duel) | `M` / `Esc` |

---

## Technical notes

### Source & build layout (`24` source files · `20,308` lines)

| Path | Responsibility |
| --- | --- |
| [index.html](index.html) & [assets/](assets/) | Pre-built standalone production bundle (`index.html` 22.8 kB / 6.3 kB gz, CSS 31.5 kB / 6.9 kB gz, JS 1,017.2 kB / 272.5 kB gz). |
| [src/main.js](src/main.js) | Core game loop (`dt` clamped `>= 0`), random title-background picker, single-player & duel hooks, crouching (`0.95 m` eye / `1.05 m` collision / headroom check / −40% enemy detection), Pointer Lock input, post-processing, sub-stepped movement, and solid living-body separation. |
| [src/engine/duelNet.js](src/engine/duelNet.js) | Direct WebRTC DataChannel transport supporting PeerJS 5-letter invite-code signalling (disconnecting signalling once connected), zero-server native `RTCPeerConnection` copy-paste SDP codes, and persistent rematch connections (`isOpen()`). |
| [src/engine/duelController.js](src/engine/duelController.js) | Duel Lobby UI (`None, 1–9` computer enemies), two-row Fighter Selection (`★ Heroes` / `☠ Villains`, 1366 × 768 compact 8-card layout), three rule engines (`first3`, `onelife`, `timed5`), live crouch sync (`cr`), post-match rematch flow without re-inviting, top scoreline & compass. |
| [src/entities/villains.js](src/entities/villains.js) | Roster and party-symbol-free sculpted 3D figures for all 27 Duel villains (including Minotaur & Xerxes and sculpted historical likenesses) plus unified `buildFighterFigure()` / `getFighterById()` helpers. |
| [src/entities/remoteFighter.js](src/entities/remoteFighter.js) | Live animated 3D opponent figure in Duel Mode with smooth network interpolation, walking stride, kneeling crouch stance & lowered hit zones, aiming pitch, melee swings, muzzle flash, floating health bar, and collapse animation. |
| [src/engine/collision.js](src/engine/collision.js) & [src/engine/buildings.js](src/engine/buildings.js) | Solid AABB collision (`STEP_MAX = 0.52 m`, water-surface bridge/deck override, headroom check, iron `bars`), coarse 6 m × 6 m spatial-bucket 2D nav grid (`1.4–14.1 ms` build per level) & binary-heap **A\*** pathfinder (`0.48 m` uphill limit), plus hollow building, raised hide, jump crate, crawl-in den, and zigzag hill builders. |
| [src/engine/shaders.js](src/engine/shaders.js), [textures.js](src/engine/textures.js), [particles.js](src/engine/particles.js), [audio.js](src/engine/audio.js) | Custom GLSL sky/water/waterfall (half-transparent grotto option)/aurora shaders, procedural Canvas PBR textures (including hammer & sickle banners, Greek mosaics, and striped ship tents), particles, and 8-era Web Audio API music & SFX synthesis. |
| [src/entities/heroes.js](src/entities/heroes.js), [weapons.js](src/entities/weapons.js), [enemies.js](src/entities/enemies.js) | 24 single-player heroes with sculpted facial features (ears, mouth, eyebrows) and historical likenesses, 26 first-person weapon viewmodels, and all 8-era enemy & boss models. |
| [src/levels/level1_west.js](src/levels/level1_west.js) – [level8_tibet.js](src/levels/level8_tibet.js) | Eight enlarged 3D worlds with hollow enterable buildings, climbable zigzag hills, jump roofs/hides, crawl-in dens, 4 boardable Viking longships, Swiss waterfall grotto, Japan bystanders, and 250 total enemies (242 initial + 8 bosses). |

### Dependencies & Licences

| Package | Version | Purpose | Licence |
| --- | --- | --- | --- |
| `three` | `^0.172.0` | WebGL2 3D rendering, shaders, post-processing bloom | MIT |
| `peerjs` | `^1.5.5` | Optional WebRTC signalling handshake for 5-letter duel invite links | MIT ([licenses/peerjs-LICENSE.txt](licenses/peerjs-LICENSE.txt)) |
| `vite` | `^6.0.0` | Dev server & production bundler (devDependency only) | MIT |

### Verification — What Was Tested & What Was Not

- **Tested (automated headless Microsoft Edge WebGL2 / CDP verification against the production `dist/` bundle + visual inspection of every screenshot):**
  - **All 8 single-player levels (`0` game console/runtime errors, `0` unreachable enemies across all 242 initial enemies, `0` stuck spots):**
    - Measured spatial-bucket nav-grid build times per chapter: Act I `4.7 ms`, Act II `12.6 ms`, Act III `2.1 ms`, Act IV `9.2 ms`, Act V `7.9 ms`, Act VI `1.4 ms`, Act VII `1.6 ms`, Act VIII `14.1 ms`.
    - Simulated keyboard-driven walking (`KeyW` + steering along A\* routes) from spawn to **every single enemy post** (`242 / 242`) and **every non-den pickup** (`78 / 78`) across all eight chapters, plus active firing & combat ticks in every level.
    - Verified negative `dt` clamping (`dt = -0.5` clamps to `0`, `0.0 m` displacement) and walking across Kyoto Mist's arched vermilion bridge in both directions without jumping (`maxY = 1.16 m`, A\* routes across bridge).
    - Verified crouching & 1.25 m crawl-in dens across Acts I, III, VII, and VIII: upright entry blocked, `C` lowers eye height to `0.95 m` and shows the HUD badge, crouched player enters and collects the den health item, standing up (`C` / `Space`) is refused under the low ceiling, and `Space` stands back up outside.
    - Verified jumping up rising crates/blocks onto the West General Store flat roof (`3.79 m`), Swiss Hunter's High Seat (`2.25 m`), and Soviet Garage Roofs (`3.08 m`, walking the full roof row north to `z = 31.9`).
    - Verified walking (without jumping) up both zigzag rock paths to their summits: West 12 m Butte (`reachedY = 12.0 m`) and Swiss 9 m Rocky Hill (`reachedY = 9.0 m`).
  - **Two-tab Duel Mode (two headless Edge tabs on `127.0.0.1`, `0` game errors on both Host and Guest):**
    - Verified Greece Fighter Selection at `1366 × 768`: 3 heroes + 5 villains (`Polyphemus`, `Medusa`, `Antinous`, `Minotaur`, `Xerxes`; no Circe), all 8 cards and lock-in button fit within `768 px` (`scrollHeight = 768`, `btnBottom = 727`).
    - Verified `None, 1–9` computer enemy selector (`10` options, spawning `4` enemies in Match 1 and `2` in Match 2), Minotaur `160 HP`, Xerxes `0.8×` damage taken, and live crouch sync (`cr: 1` lowering `remoteFighter.crouched`).
    - Verified persistent post-duel rematch: after finishing a `One life` duel, clicking **Next Duel (Same Connection)** returned both tabs to the connected Duel screen (`isOpen() === true`), where the host switched to Act V with 2 enemies and started the second duel without any new code or invite link.
- **Not tested:**
  - **Two separate physical computers over the public internet or behind restrictive corporate NATs/firewalls:** All Duel Mode checks ran between two tabs of one browser on the same machine.
  - **Live speaker audio balance & manual hardware-GPU mouse feel:** Web Audio initialized cleanly without errors in headless verification, but live speaker output and manual Pointer Lock aiming were not auditioned interactively.

### Running & rebuilding locally

```sh
cd Gemini
copy src\index.html index.html
npm install
npm run dev       # Live dev server on http://localhost:5173
npm run build     # Standalone bundle in dist/ (injects version from package.json)
```
