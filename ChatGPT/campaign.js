(() => {
  'use strict';
  const chapters = [
    { id:'west', title:'Dust & Iron', numeral:'I', land:'The American West', place:'Blackridge, New Mexico', year:'1886', story:'A gang has taken Blackridge. Strap on your six-shooter and take back the town, one dusty street at a time.' },
    { id:'japan', title:'Shadow of the Torii', numeral:'II', land:'Feudal Japan', place:'Kiso Valley, Japan', year:'1582', story:'Beyond the bamboo, the shrine bell has fallen silent. Draw your katana and face the ninjas and rōnin guarding the mountain road.' },
    { id:'swiss', title:'Oath of the Alps', numeral:'III', land:'Medieval Switzerland', place:'Uri, Switzerland', year:'1307', story:'Austrian soldiers hold the mountain pass. Take up your halberd beneath the banner of Uri and clear the road for the Waldstätten.' }
  ];
  const $ = id => document.getElementById(id);
  const icon = name => '<svg aria-hidden="true"><use href="#i-'+name+'"/></svg>';
  function read(key, fallback) {
    try { return JSON.parse(localStorage.getItem('three-frontiers.'+key)) ?? fallback; }
    catch { return fallback; }
  }
  function save(key, value) {
    try { localStorage.setItem('three-frontiers.'+key, JSON.stringify(value)); } catch {}
  }
  const stored = read('cleared', []);
  const cleared = new Set(Array.isArray(stored) ? stored.filter(id => chapters.some(ch => ch.id === id)) : []);
  let selected = 0, sound = read('sound', true) !== false;
  const cards = chapters.map((ch, index) => {
    const card = document.createElement('button');
    card.className = 'chapter-card';
    card.setAttribute('aria-label', 'Select chapter '+ch.numeral+', '+ch.title);
    card.innerHTML = '<img class="card-image" src="assets/'+ch.id+'-world.webp" alt=""><span class="card-fade"></span><span class="card-status">'+icon('check')+'Selected</span><span class="card-copy"><span class="card-meta">Chapter '+ch.numeral+'<i></i><b>'+ch.land+'</b></span><span class="card-title">'+ch.title+'</span></span>';
    card.addEventListener('click', () => {
      select(index);
      if (window.innerWidth <= 540) document.querySelector('.hero').scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
    });
    $('deck').append(card);
    return card;
  });
  function select(index) {
    selected = (index+chapters.length)%chapters.length;
    const ch = chapters[selected];
    $('chapter-tab').textContent = 'Chapter '+ch.numeral;
    $('chapter-title').textContent = ch.title;
    $('chapter-title').classList.toggle('long', selected !== 0);
    $('hero-img').src = 'assets/'+ch.id+'.webp';
    $('hero-img').alt = [
      'A gunslinger watches the sunlit saloon street in Blackridge.',
      'An armored samurai stands above a wooded shrine in Kiso Valley.',
      'A bearded Waldstätter holds his halberd beside Uri’s gold bull banner above the lake.'
    ][selected];
    $('place').textContent = ch.place;
    $('year').textContent = ch.year;
    $('story').textContent = ch.story;
    $('page-num').textContent = '0'+(selected+1);
    $('play').innerHTML = icon('play')+(cleared.has(ch.id)?'Replay chapter':'Play chapter');
    $('progress').textContent = cleared.size+' / 3 chapters cleared';
    cards.forEach((card, i) => {
      card.setAttribute('aria-pressed', String(i === selected));
      const meta = card.querySelector('.card-meta');
      if (cleared.has(chapters[i].id) && !meta.querySelector('.cleared-mark')) {
        const mark = document.createElement('span');
        mark.className='cleared-mark'; mark.textContent='Cleared'; meta.append(mark);
      }
    });
  }
  function applySound() {
    const label = sound?'Mute sound':'Enable sound';
    $('audio-btn').innerHTML=icon(sound?'sound':'mute');
    $('audio-btn').setAttribute('aria-label',label); $('audio-btn').title=label;
    window.FrontiersGame?.setSound(sound);
  }
  function start() {
    window.FrontiersGame.setSound(sound);
    window.FrontiersGame.start(selected);
  }
  const game = $('game');
  new MutationObserver(() => {
    $('campaign').inert=game.classList.contains('fg-open');
    document.body.style.overflow=game.classList.contains('fg-open')?'hidden':'';
  }).observe(game,{attributes:true,attributeFilter:['class']});
  window.returnToCampaign = (index, won) => {
    if (won) { cleared.add(chapters[index].id); save('cleared',[...cleared]); }
    select(index);
    requestAnimationFrame(() => { if (!game.classList.contains('fg-open')) $('play').focus({preventScroll:true}); });
  };
  $('play').addEventListener('click',start);
  $('prev').addEventListener('click',()=>select(selected-1));
  $('next').addEventListener('click',()=>select(selected+1));
  $('audio-btn').addEventListener('click',()=>{sound=!sound; save('sound',sound); applySound();});
  const fullscreen = $('full-btn');
  if (!document.fullscreenEnabled) fullscreen.style.display='none';
  fullscreen.addEventListener('click',async()=>{
    try {
      if(document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch { fullscreen.title='Fullscreen is unavailable in this window'; }
  });
  document.addEventListener('fullscreenchange',()=>{
    const label=document.fullscreenElement?'Leave fullscreen':'Enter fullscreen';
    fullscreen.title=label; fullscreen.setAttribute('aria-label',label);
  });
  $('control-list').innerHTML=[
    ['Move',['W','A','S','D']],['Aim and attack',['Mouse','Click']],['Take cover',['Hold Space']],
    ['Ready weapon',['R']],['Select enemy and attack',['Q','F']],['Pause',['Esc']]
  ].map(([label,keys])=>'<dt>'+label+'</dt><dd>'+keys.map(key=>'<kbd>'+key+'</kbd>').join('')+'</dd>').join('');
  $('guide-btn').addEventListener('click',()=>$('guide').showModal());
  $('close-guide').addEventListener('click',()=>$('guide').close());
  $('guide-done').addEventListener('click',()=>$('guide').close());
  $('guide').addEventListener('click',event=>{
    if(event.target!==$('guide')) return;
    const box=$('guide').getBoundingClientRect();
    if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom) $('guide').close();
  });
  document.addEventListener('keydown',event=>{
    if(event.defaultPrevented||event.ctrlKey||event.altKey||event.metaKey||$('guide').open||game.classList.contains('fg-open')) return;
    if(event.key==='ArrowRight'||event.key==='ArrowLeft') {
      event.preventDefault(); select(selected+(event.key==='ArrowRight'?1:-1));
      if(cards.includes(document.activeElement)) cards[selected].focus({preventScroll:true});
    }
    if(event.key==='Enter'&&!event.repeat&&(!document.activeElement.closest('button')||cards.includes(document.activeElement))) {
      event.preventDefault(); start();
    }
  });
  const dust=document.querySelector('.motes');
  for(let i=0;i<18;i++) {
    const mote=document.createElement('span');
    mote.style.left=(20+(i*37)%78)+'%'; mote.style.bottom=((i*13)%30)+'%';
    mote.style.setProperty('--delay',(-i*1.3)+'s');mote.style.setProperty('--d',(8+i%5)+'s');dust.append(mote);
  }
  function selectLinkedChapter() {
    const index = chapters.findIndex(ch => '#'+ch.id === location.hash);
    if (!game.classList.contains('fg-open')) select(Math.max(0,index));
  }
  window.addEventListener('hashchange',selectLinkedChapter);
  selectLinkedChapter(); applySound();
})();
