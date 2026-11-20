// Villains: playable in Duel mode only, beside each chapter's three heroes.
// Same shape as a hero entry: a look for the character builder, one strength, sleeve colours.
const KNIFE = 'right mouse — aim   ·   F — knife';

export const VILLAINS = {
  west: [
    { look: 'jesse', name: 'Jesse James', who: 'Bank and train robber of Missouri', trait: 'Train robber', effect: 'moves 15% faster', mods: { speed: 1.15 }, sleeve: 0x6a5a44, cuff: 0x4a4a52 },
    { look: 'clanton', name: 'Ike Clanton', who: 'Rustler of Tombstone, Earp’s enemy at the O.K. Corral', trait: 'Rustler', effect: 'starts with 130 health', mods: { hp: 130 }, sleeve: 0x8a3028, cuff: 0x4a3520 },
    { look: 'belle', name: 'Belle Starr', who: 'The Bandit Queen of Indian Territory', trait: 'Two guns', effect: 'fires 30% faster', mods: { fire: 0.7 }, sleeve: 0x3a1c3a, cuff: 0x8a1c3a },
  ],
  japan: [
    { look: 'nobunaga', name: 'Oda Nobunaga', who: 'Warlord, the Demon King of the Sixth Heaven', trait: 'Warlord', effect: 'takes 25% less damage', mods: { armor: 0.75 }, sleeve: 0x15151a, cuff: 0x7a1414 },
    { look: 'kojiro', name: 'Sasaki Kojirō', who: 'Musashi’s rival, master of the long sword', trait: 'The Drying Pole', effect: 'the katana reaches 0.8 m further', mods: { reach: 0.8, melee: 0.85 }, sleeve: 0x5a3a7a, cuff: 0xe8e0d0 },
    { look: 'fuma', name: 'Fūma Kotarō', who: 'Leader of the Fūma ninja clan', trait: 'Night raider', effect: 'moves 20% faster', mods: { speed: 1.2 }, sleeve: 0x5a1418, cuff: 0x1a1214 },
  ],
  swiss: [
    { look: 'gessler', name: 'Hermann Gessler', who: 'Habsburg bailiff of Uri, of the hat on the pole', trait: 'Bailiff', effect: 'takes 20% less damage', mods: { armor: 0.8 }, sleeve: 0x7a1418, cuff: 0x2a2a30 },
    { look: 'charles', name: 'Charles the Bold', who: 'Duke of Burgundy, beaten at Grandson, Murten and Nancy', trait: 'Burgundian steel', effect: 'starts with 150 health', mods: { hp: 150 }, sleeve: 0x9a9fa6, cuff: 0x8a8f96 },
    { look: 'leopold', name: 'Duke Leopold I', who: 'Habsburg duke, routed at Morgarten in 1315', trait: 'Knight', effect: 'halberd thrusts hit 40% harder', mods: { meleeDmg: 1.4 }, sleeve: 0x9a9fa6, cuff: 0xb01c1c },
  ],
  greece: [
    { look: 'cyclops', name: 'Polyphemus', who: 'The Cyclops, son of Poseidon', trait: 'Giant', effect: 'starts with 180 health, but is a large target', mods: { hp: 180 }, sleeve: 0xb89070, cuff: 0xb89070 },
    { look: 'medusa', name: 'Medusa', who: 'The Gorgon whose gaze turns men to stone', trait: 'Deadly gaze', effect: 'javelins fly faster and hit harder', mods: { power: 1.3 }, sleeve: 0x8ab08a, cuff: 0xd9b23a },
    { look: 'antinous', name: 'Antinous', who: 'Leader of the suitors in Ulysses’ hall', trait: 'Usurper', effect: 'moves 15% faster', mods: { speed: 1.15 }, sleeve: 0xd0a078, cuff: 0xd9b23a },
  ],
  north: [
    { look: 'bloodaxe', name: 'Erik Bloodaxe', who: 'King of Norway, slayer of his brothers', trait: 'Bloodaxe', effect: 'throws axes much faster', mods: { fire: 0.65 }, sleeve: 0x5a2424, cuff: 0x2a1c12 },
    { look: 'ivar', name: 'Ivar the Boneless', who: 'Ragnar’s son, leader of the Great Heathen Army', trait: 'Cunning', effect: 'takes 25% less damage', mods: { armor: 0.75 }, sleeve: 0x3a4a5a, cuff: 0x1c1c22 },
    { look: 'loki', name: 'Loki', who: 'Trickster god, father of the wolf Fenrir', trait: 'Shape-shifter', effect: 'moves 20% faster', mods: { speed: 1.2 }, sleeve: 0x2a5a3a, cuff: 0xd9b23a },
  ],
  war: [
    { look: 'hitler', name: 'Adolf Hitler', who: 'Dictator of Nazi Germany, 1933–1945', trait: 'Dictator', effect: 'pistol; takes 20% less damage', weapon: 'revolver', weaponName: 'Pistol & knife', mods: { armor: 0.8 }, sleeve: 0x7a6a4a, cuff: 0x2a1c12 },
    { look: 'mussolini', name: 'Benito Mussolini', who: 'Fascist dictator of Italy, 1922–1943', trait: 'Strongman', effect: 'Sten gun; starts with 120 health', mods: { hp: 120 }, sleeve: 0x5a6050, cuff: 0x15151a },
    { look: 'goring', name: 'Hermann Göring', who: 'Head of the Luftwaffe, Hitler’s deputy', trait: 'Huntsman', effect: 'scoped rifle: one hit to the head kills', weapon: 'rifle', weaponName: 'Scoped rifle & knife', alt: 'right mouse — scope   ·   F — knife', mods: {}, sleeve: 0xa8b4c0, cuff: 0x8a6424 },
  ],
  russia: [
    { look: 'stalin', name: 'Joseph Stalin', who: 'Soviet dictator, 1924–1953', trait: 'Man of steel', effect: 'takes 25% less damage', mods: { armor: 0.75 }, sleeve: 0xd8d4c4, cuff: 0xb01c1c },
    { look: 'andropov', name: 'Yuri Andropov', who: 'Head of the KGB, 1967–1982', trait: 'Chekist', effect: 'moves 15% faster', mods: { speed: 1.15 }, sleeve: 0x2a2a32, cuff: 0xe8e4d8 },
    { look: 'beria', name: 'Lavrentiy Beria', who: 'Stalin’s chief of secret police', trait: 'Secret police', effect: 'pistol whose shots hit 50% harder', mods: { gun: 1.5 }, sleeve: 0x1c1c22, cuff: 0xe8e4d8 },
    { look: 'brezhnev', name: 'Leonid Brezhnev', who: 'Soviet leader, 1964–1982', trait: 'Chest of medals', effect: 'submachine gun; starts with 130 health', weapon: 'sten', weaponName: 'Submachine gun & knife', mods: { hp: 130 }, sleeve: 0x2a3040, cuff: 0xe8e4d8 },
  ],
  tibet: [
    { look: 'mao', name: 'Mao Zedong', who: 'Chairman of Communist China, 1949–1976', trait: 'Chairman', effect: 'rifle; takes 20% less damage', mods: { armor: 0.8 }, sleeve: 0x6a7078, cuff: 0x62686e },
    { look: 'langdarma', name: 'Langdarma', who: 'The king who persecuted the Dharma, 9th century', trait: 'Horned king', effect: 'bow and sword; starts with 140 health', weapon: 'bow', weaponName: 'Bow & sword', alt: 'right mouse — sword', mods: { hp: 140 }, sleeve: 0x1a1a22, cuff: 0x7a1c22 },
    { look: 'jiangqing', name: 'Jiang Qing', who: 'Madame Mao, leader of the Gang of Four', trait: 'Red Guard', effect: 'pistol; moves 20% faster', weapon: 'revolver', weaponName: 'Pistol & knife', alt: KNIFE, mods: { speed: 1.2 }, sleeve: 0x5a6a3e, cuff: 0x4a2c14 },
  ],
};
