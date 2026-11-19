(() => {
  'use strict';

  const chapters = [
    {title:'Dust & Iron', region:'Blackridge', hero:'The Gunslinger', art:'west', weapon:'Six-shooter', verb:'Fire', ready:'Reload', capacity:6, cooldown:.25, reload:1.15, foe:'Outlaws', stages:['The Main Street','The Saloon Steps','The Corral'], tint:'#eebb76', sky:'#947552', notes:[146.83,174.61,196,220,293.66], intro:'Blackridge is in outlaw hands. Clear the main street and push on to the corral.', end:'The last rider has fled. Blackridge belongs to its people again.'},
    {title:'Shadow of the Torii', region:'Kiso Valley', hero:'The Samurai', art:'japan', weapon:'Katana', verb:'Strike', ready:'Center', capacity:4, cooldown:.40, reload:.90, foe:'Challengers', stages:['The Bamboo Path','The Zen Garden','The Shrine Gate'], tint:'#e7bdac', sky:'#68786e', notes:[146.83,155.56,196,220,233.08], intro:'Ninjas and rōnin hold the shrine road. Choose a challenger to dash in and strike.', end:'The shrine bell rings through the bamboo. The road to the valley is open.'},
    {title:'Oath of the Alps', region:'Uri', hero:'The Waldstätter', art:'swiss', weapon:'Swiss halberd', verb:'Strike', ready:'Recover', capacity:3, cooldown:.68, reload:1.05, foe:'Soldiers', stages:['The Lakeside Trail','The Alpine Hamlet','The Mountain Pass'], tint:'#e2be57', sky:'#72818a', notes:[130.81,164.81,196,220,261.63], intro:'Take up the halberd of Uri. Close with the Austrian guard along the lakeside trail and hold the mountain pass.', end:'The guard has withdrawn from the pass. Across the lake, the forest cantons answer.'}
  ];
  const roman = ['I','II','III'], waveSizes = [2,3,3];
  const halberdReach = 4.4;
  const paths = new Map(), artwork = new Map();
  const clamp = (n,lo,hi) => Math.max(lo,Math.min(hi,n));
  const pick = (lo,hi) => lo + Math.random() * (hi-lo);
  let host, canvas, ctx, ui, game, frame, lastTime, sound = true, ac, noiseBuffer;
  let w = 1, h = 1, ratio = 1, controls = new Set(), heldTouch = new Set(), noticeTimer = 0;
  const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const path = data => {
    if (!paths.has(data)) paths.set(data,new Path2D(data));
    return paths.get(data);
  };
  function shape(d, fill, stroke = '', lineWidth = 1) {
    const p = path(d);
    if (fill) {ctx.fillStyle=fill; ctx.fill(p);}
    if (stroke) {ctx.lineWidth=lineWidth; ctx.strokeStyle=stroke; ctx.stroke(p);}
  }
  function circle(x,y,r,color) {
    ctx.fillStyle=color; ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fill();
  }
  function line(x,y,x2,y2,color,width) {
    ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(x2,y2); ctx.strokeStyle=color; ctx.lineWidth=width; ctx.stroke();
  }
  function hatch(d,color,spacing=5) {
    ctx.save(); ctx.clip(path(d)); ctx.strokeStyle=color; ctx.lineWidth=.8; ctx.beginPath();
    for(let x=-260;x<245;x+=spacing){ctx.moveTo(x,-220);ctx.lineTo(x-100,60);}
    ctx.stroke();ctx.restore();
  }
  function tone(frequency,duration,volume=.04,type='triangle',end=frequency,delay=0) {
    if(!sound || !ac || ac.state!=='running') return;
    const start=ac.currentTime+delay, oscillator=ac.createOscillator(), gain=ac.createGain();
    oscillator.type=type; oscillator.frequency.setValueAtTime(frequency,start); oscillator.frequency.exponentialRampToValueAtTime(Math.max(20,end),start+duration);
    gain.gain.setValueAtTime(.0001,start);gain.gain.exponentialRampToValueAtTime(volume,start+.007);gain.gain.exponentialRampToValueAtTime(.0001,start+duration);
    oscillator.connect(gain);gain.connect(ac.destination);oscillator.start(start);oscillator.stop(start+duration+.015);
  }
  function hiss(duration,volume,frequency,type='lowpass') {
    if(!sound || !ac || ac.state!=='running') return;
    if(!noiseBuffer) {
      noiseBuffer=ac.createBuffer(1,ac.sampleRate,ac.sampleRate);
      const data=noiseBuffer.getChannelData(0);for(let i=0;i<data.length;i++) data[i]=Math.random()*2-1;
    }
    const source=ac.createBufferSource(), filter=ac.createBiquadFilter(), gain=ac.createGain(),t=ac.currentTime;
    source.buffer=noiseBuffer;filter.type=type;filter.frequency.value=frequency;
    gain.gain.setValueAtTime(volume,t);gain.gain.exponentialRampToValueAtTime(.0001,t+duration);
    source.connect(filter);filter.connect(gain);gain.connect(ac.destination);source.start(t);source.stop(t+duration);
  }
  function initAudio() {
    if(!sound) return;
    try { if(!ac){const Audio=window.AudioContext||window.webkitAudioContext;if(Audio)ac=new Audio();}
      if(ac?.state==='suspended') ac.resume().catch(()=>{});
    } catch {}
  }
  function attackSound(index) {
    if(index===0){hiss(.19,.26,4800);tone(135,.22,.15,'triangle',35);hiss(.32,.045,800);}
    if(index===1){hiss(.28,.17,1800,'highpass');tone(960,.14,.025,'sine',280);}
    if(index===2){hiss(.31,.14,1250,'bandpass');tone(106,.20,.045,'sine',53);}
  }
  function loadArt(index) {
    if(!artwork.has(index)){const img=new Image(); img.src='assets/'+chapters[index].art+'-world.webp';artwork.set(index,img);}
    return artwork.get(index);
  }

  // Inked figures are painted in body-local coordinates, with planted feet at y=0.
  function drawEnemy(e,t) {
    const type=game.index, variant=e.variant, ink='#242620';
    const pose=Math.sin(t*5+e.phase), alerted=e.attack<1.05 && e.dead===null;
    ctx.lineJoin='round'; ctx.lineCap='round';
    const cloth=type===0?(variant?'#98553a':'#a37646'):type===1?(variant?'#6a766c':'#3b5050'):(variant?'#843c32':'#a64f39');
    const shadow=type===0?'#4e3e31':type===1?'#263d40':'#542e2c';
    const light=type===0?'#c39a68':type===1?'#a3aca0':'#d89d73';
    const skin=type===0?'#bd8054':type===1?'#ca9c76':'#c79670';
    const body='M-19-119 Q-10-125 0-123 Q10-122 19-117 L26-84 19-64 Q2-58-20-65 L-24-87Z';
    // Legs and boots stay articulated as the upper body sways.
    ctx.save();ctx.translate(0,pose*1.2);
    shape('M-19-70 L0-68 -4-39 -13-16 -26-17 -19-42 -22-55Z','#494c43',ink,2.3);
    shape('M0-69 L18-69 23-45 24-19 12-17 6-42 -4-53Z','#55574c',ink,2.3);
    shape('M-19-58 L-12-43 -19-22 -22-22Z M9-58 L17-46 21-23 17-24Z','#767466');
    shape('M-25-25 L-12-22 -15-7 -14-3 Q-22 1-35-1 L-36-5 -27-10Z M10-25 L24-26 25-9 33-5 33-1 14-1 11-8Z',type===1?'#393f37':'#4c372a',ink,2);
    shape('M-34-4 L-16-5 M16-4 L31-3 M-25-16 L-16-14 M14-18 L23-18','',light,1.1);
    ctx.restore();
    ctx.save();ctx.translate(pose*1.1,pose*.8);
    if(type===0||type===1&&variant) {
      shape('M-19-101 L19-100 30-45 15-51 7-47 1-63 -6-48 -12-52 -30-43Z',shadow,ink,2.4);
      shape('M-20-87 L-13-69 -24-51Z M16-77 L21-68 25-52 18-61Z',cloth);
    }
    shape(body,cloth,ink,2.5);hatch(body,'#211e1d30',4.4);
    shape('M-18-116 L-11-114 -4-81 -5-65 -17-68 -13-84Z',shadow);
    shape('M4-118 L15-114 17-106 11-91 19-70 10-67 5-83Z',light);
    const arm='M-18-116 Q-25-117-28-108 L-36-88 Q-37-81-29-78 L-11-87 -13-96 -24-91 -18-104Z';
    shape(arm,cloth,ink,2);shape('M-32-89 L-26-93 -27-99 -21-105 M-32-84 L-15-91','',light,1.6);
    if(type===0) {
      if(variant){
        shape('M-21-119 Q-3-126 20-117 L31-85 5-75 -28-86Z','#977246',ink,2);
        shape('M-24-96 L5-85 26-94 M-24-91 L5-80 29-90','', '#d1a16b',2.7);
        shape('M-13-119 L3-110 16-119 7-101Z','#79483a',ink,1);
      }else{
        shape('M-14-119 L-3-114 -1-77 -15-87 -19-104Z M6-115 L14-120 20-110 12-91 5-79Z','#52483c',ink,1);
        shape('M-12-121 L2-113 15-122 7-108 1-100Z','#a05039',ink,1.3);
        for(let a=0;a<3;a++)circle(7,-99+a*7,1,'#d0ac70');
      }
    }else if(type===1){
      shape('M-14-120 L-2-122 19-101 14-97Z M17-119 L21-112 -5-83 -13-82Z',variant?'#c0b6a2':'#65736a',ink,1.1);
      shape('M-23-71 L21-73 23-61 -23-61Z','#57413b',ink,1.8);
      shape('M-19-76 L21-77 M-19-63 L21-65','',light,1.3);
    }else{
      shape('M-18-119 Q0-127 17-117 L18-110 Q1-108-16-109Z','#8a9390',ink,1.6);
      for(let i=0;i<4;i++){line(-14,-118+i*2,13,-117+i*2,'#4a5453',.9);}
      shape('M-14-108 L-10-111 18-77 13-73Z','#d2b68d',ink,1.3);
      shape('M-7-97 L-2-97 -2-101 2-101 2-97 7-97 7-93 2-93 2-87 -2-87 -2-93 -7-93Z','#ecdac0');
    }
    if(type!==1) {shape('M-21-73 L20-75 21-68 -21-65Z','#53412e',ink,1.5);shape('M-2-73 L5-73 5-68 -2-68Z','#d3ad6a',ink,1);}
    shape('M-5-133 L7-133 8-122 0-116 -7-124Z',skin,ink,1.5);
    // Head, cast shadow under the brow and strong nose keep silhouettes legible at distance.
    shape('M-13-151 Q-9-164 4-160 Q16-157 14-144 L11-133 4-126 -4-127 -12-136Z',skin,ink,2);
    shape('M-13-147 L-5-151 10-148 10-143 4-144 4-137 0-135 -2-140 -6-142 -10-139Z','#845b43');
    shape('M-13-136 L-6-135 -1-133 4-136 11-137 8-131 2-126 -5-128Z',type===1?'#60493c':'#5d4636');
    shape('M-8-144 L-3-143 M5-144 L10-144 M-1-133 L4-133','',ink,1.4);
    if(type===0){
      shape(variant?'M-36-150 Q-18-154-12-155 Q-8-181 0-177 Q8-176 15-155 Q27-154 36-159 Q34-146 12-145 Q-16-141-36-150Z':'M-29-154 Q-20-151-14-153 L-10-170 Q-6-176 0-170 Q10-178 14-170 L17-154 Q22-153 29-158 L26-150 Q8-143-12-147Z',variant?'#b49560':'#715640',ink,2.4);
      shape('M-13-156 Q0-153 15-157 L16-152 Q4-148-14-151Z','#493a31');
      shape('M-22-150 Q-5-145 15-150','', '#d1aa72',1.4);
    }else if(type===1&&variant){
      shape('M-30-146 L0-172 Q5-174 8-168 L31-147 Q3-140-30-146Z','#a69267',ink,2);
      shape('M-24-148 L1-169 M-14-147 L3-168 M1-145 L5-168 M15-146 L6-168','', '#685e48',1.1);
    }else if(type===1){
      shape('M-15-143 Q-18-160-6-165 Q9-171 15-156 L16-143 11-146 -4-148 -12-143Z','#374641',ink,2);
      shape('M-14-143 Q0-137 14-144 L11-131 4-126 -7-129Z','#46544d',ink,1.5);
      shape('M-12-139 L0-136 11-140 M-10-154 L9-157','', '#849182',1.2);
    }else{
      shape('M-20-147 L-14-154 Q-13-166-1-168 Q12-167 16-153 L22-149 21-145 Q0-142-20-147Z','#9ca6a0',ink,2.1);
      shape('M-13-155 Q-7-165 1-166 L-2-155Z','#cbd1bc');
      shape('M-19-148 Q0-152 21-148 M4-165 L9-155','', '#555e5a',1.4);
    }
    // Weapons and hands move forward as the attack becomes imminent.
    ctx.save();ctx.translate(alerted?0:1,alerted?-5:1);
    shape('M17-113 Q23-114 26-103 L28-90 12-83 3-93 14-99Z',cloth,ink,2);
    shape('M18-108 L22-101 23-94 15-91','',light,1.8);
    if(type===0){
      shape('M-6-102 L1-106 8-104 9-93 3-87 -5-91Z','#4b3930',ink,1.5);
      shape('M-15-103 L-1-107 8-104 7-99 -1-97 -14-98Z','#8a8b78',ink,1.8);
      circle(-12,-101,3.2,'#252c29');
      shape('M3-98 L9-99 14-94 10-88 1-89 -2-93Z',skin,ink,1.2);
      if(e.flash>0){circle(-12,-101,9,'#ffba4c');circle(-12,-101,4,'#fff4ba');}
    }else if(type===1){
      shape('M1-91 Q12-115 25-159 L28-171 Q31-147 8-88Z','#c4d0c7',ink,1.5);
      shape('M2-90 L8-87 -2-65 -8-68Z','#55423c',ink,1.4);
      shape('M-5-92 L12-87 11-84 -7-89Z','#ae9463',ink,1);
      shape('M-4-88 L4-90 8-85 4-80 -3-79 -7-83Z',skin,ink,1.2);
    }else{
      shape('M-10-3 L12-155 15-155 -7-2Z','#856642',ink,1.4);
      shape('M11-151 L10-168 19-197 20-165 16-151Z','#adb4a6',ink,1.4);
      shape('M12-157 Q20-164 23-174 Q29-161 16-151Z','#7f8d83',ink,1.4);
      shape('M3-96 L11-96 13-91 10-85 3-85 0-91Z',skin,ink,1.2);
    }
    ctx.restore();ctx.restore();
  }

  function hand() {
    const ink='#292620';
    shape('M78-63 Q66-62 60-53 L49-28 Q51-17 65-16 L83-17 91-30 99-43 94-54Z','#b77b50',ink,2);
    shape('M57-34 Q61-45 71-46 L88-43 79-33 64-28Z','#d79c66');
    shape('M66-23 Q78-22 88-33 L87-26 77-16 66-16Z','#87553a');
    shape('M65-36 Q69-40 83-38 M64-30 Q71-33 80-32','', '#825639',1.3);
  }
  function halberd(s) {
    const ink='#232925', metal='#8f9a94', bright='#d2d9c9';
    const motion=reducedMotion()?.50:1;
    const gripX=93,gripY=-78;
    const phase=1-s.recoil, thrust=s.swingKind==='thrust';
    const arc=s.recoil>0?Math.sin(phase*Math.PI):0;
    const follow=s.recoil>0?Math.sin(phase*Math.PI*2):0;
    const targetAngle=s.swingAngle??0;
    ctx.save();
    ctx.translate(gripX+(thrust?Math.sin(targetAngle)*55*arc:-15*arc)*motion,
      gripY-(thrust?Math.cos(targetAngle)*53*arc:13*arc)*motion);
    ctx.rotate(.20+((targetAngle-.20)*arc+follow*(thrust?.15:.68))*motion);
    // Long oiled ash, iron socket and straps, finished with hand-forged facets.
    shape('M-7 155 Q-6-17-4-208 L4-208 7 155Z','#976642',ink,2.2);
    shape('M-4 151 L-2-185 1-190 0 156Z','#c49460');
    shape('M2 150 Q5 64 3 28 M-3-18 Q0-46-2-77 M1-93 Q4-124 2-142','', '#63472f',1.3);
    shape('M-6-144 L-6-217 6-217 6-144 3-135 2-193 -2-190 -3-133Z',metal,ink,1.5);
    shape('M-6-195 L-5-232 -1-282 5-241 6-198Z','#a8b5ae',ink,2);
    shape('M-1-282 L1-221 5-218 4-240Z','#64766f');
    shape('M-1-274 L-4-231','', '#e1e4d1',1.2);
    // A hooked beak opposes the crescent blade across the central spike.
    shape('M3-215 Q17-218 37-224 L47-226 Q31-215 20-193 L15-188 17-205 4-196Z',metal,ink,2);
    shape('M10-213 L41-224 Q25-213 18-201 L19-209Z',bright);
    const blade='M-2-216 Q-25-217-50-241 Q-58-213-53-191 Q-48-167-30-153 Q-30-166-18-175 Q-8-184-2-183Z';
    shape(blade,'#82938d',ink,2.4);
    shape('M-50-239 Q-50-208-43-190 Q-38-176-30-155 Q-47-169-52-192 Q-57-214-50-239Z','#dbe0d2');
    shape('M-47-230 Q-33-218-12-213 L-6-204 -15-201 -39-212Z','#acb9b0');
    shape('M-48-215 Q-45-190-33-173 M-37-206 L-21-197 M-37-203 L-25-196','', '#64776e',1);
    shape('M-8-214 L7-215 8-189 -7-184Z','#788780',ink,1.5);
    shape('M-6-211 L-2-213 -2-188 -5-187Z','#b9c5b9');
    [-207,-192,-152].forEach(y=>{circle(1,y,2,'#3e4c44');circle(0,y-1,1,'#ced1ba');});
    // Gold and the black bull of Uri are stitched into the player's wool sleeve.
    const sleeve='M-4 19 Q8 9 18 4 L39 20 Q59 35 82 73 L85 109 31 105 11 57Z';
    shape(sleeve,'#626956',ink,2.4);hatch(sleeve,'#bbc3a038',4);
    shape('M17 24 L30 19 48 36 40 57 24 52Z','#d8ab3e',ink,1.25);
    ctx.save();ctx.translate(32,38);ctx.rotate(-.32);ctx.scale(.8,.8);
    shape('M-4-4 Q-12-4-13-13 Q-14-6-11-2 L-6 0 -5 5 -2 9 2 9 5 5 6 0 11-2 Q15-7 13-13 Q11-4 4-4 Q1-6-4-4Z','#242721');
    shape('M-8-1 L-11 1 -8 3 -4 2 M8-1 L11 1 8 3 4 2Z','#242721');
    circle(-2.5,1, .85,'#e5be62');circle(2.5,1,.85,'#e5be62');ctx.restore();
    shape('M-6 17 L4-1 17-3 26 11 13 26 2 30Z','#684a35',ink,1.8);
    shape('M-6-14 Q-3-21 3-19 L13-12 Q20-7 18 4 L10 11 0 13 -9 5 -11-6Z','#b98762',ink,2);
    shape('M-10-9 Q-11-13-7-14 L4-12 7-7 -1-6Z M-11-4 Q-12-9-8-9 L4-5 5-2 -1 1Z M-9 2 Q-11-3-8-4 L3 0 3 4 -3 7Z','#d2a17c',ink,1.1);
    shape('M11-12 Q18-8 16-3 L8 4 4 2 Q3-1 7-5 L6-8Z','#d3a17a',ink,1.2);
    ctx.restore();
  }
  function weapon() {
    const s=game, i=s.index, rec=Math.max(0,s.recoil), running=s.mode==='playing';
    const scale=clamp(Math.min(w/710,h/535),i===2?.74:.58,2.2);
    const reload=s.reload>0?Math.sin(Math.PI*(1-s.reload/s.ch.reload)):0;
    const bob=running && !reducedMotion()? Math.sin(s.walkTime)*s.walkStrength*3:0;
    const tilt = i===1 && rec>0 ? Math.sin((1-rec)*Math.PI)*-.92 : i===0?-rec*.17:0;
    ctx.save();
    ctx.translate(w*.60+Math.sin(s.walkTime*.5)*s.walkStrength*4+(s.aimX/w-.5)*17,h+8+scale*(reload*106+s.crouch*49+bob+rec*13));
    ctx.scale(scale,scale);ctx.rotate(tilt+reload*.28);
    const handArt=weaponArt[i];
    if(handArt.complete && handArt.naturalWidth){
      const height=[248,359,377][i], width=height*handArt.naturalWidth/handArt.naturalHeight;
      const bottom=i===0?31:49;
      if(i===2 && rec>0){
        const phase=1-rec, arc=Math.sin(phase*Math.PI)*(reducedMotion()?.45:1);
        if(s.swingKind==='thrust'){
          ctx.translate(-25*arc,-15*arc);ctx.rotate((s.swingAngle||0)*arc);
        }else{
          ctx.rotate(Math.sin(phase*Math.PI*2)*.64*arc);
        }
      }
      ctx.drawImage(handArt,-width*.17,bottom-height,width,height);
      if(i===0 && s.flash>.04){
        ctx.save();ctx.translate(-width*.17+4,bottom-height+7);ctx.rotate(-1.02);
        shape('M0 4 L-13-10 -5-9 -9-31 0-20 6-39 8-13 16-17 9 0Z','#ffbb52');
        shape('M0 4 L-4-10 0-9 3-22 5-7 10-8 4 0Z','#fff4bc');ctx.restore();
      }
      ctx.restore();return;
    }
    const ink='#222521';
    if(i===0){
      // Foreshortened barrel, fluted cylinder and brass frame.
      shape('M22-173 L39-185 87-120 91-100 70-94Z','#454b48',ink,2.7);
      shape('M26-177 L32-182 41-180 84-118 76-113Z','#a8ada0',ink,1.7);
      shape('M35-179 L40-180 84-119 80-117Z','#c9ccba');
      shape('M25-176 L20-177 18-185 23-191 30-191 35-183 32-176Z','#787e75',ink,1.8);
      shape('M19-184 L22-189 28-189 30-184Z','#3b4441',ink,1.2);
      shape('M26-187 L24-195 27-196 31-184Z','#6e736b',ink,1);
      shape('M47-144 L52-149 74-119 69-115Z','#d4c49b',ink,1.2);
      shape('M58-129 Q65-137 76-136 L92-128 100-108 91-95 68-100Z','#85887b',ink,2);
      shape('M63-129 Q66-134 72-133 L88-113 85-107 80-108Z','#acb09f',ink,1.1);
      shape('M72-131 Q76-135 80-131 L94-114 94-109 91-109Z','#525d57',ink,1.2);
      shape('M60-122 L64-122 78-101 72-102Z','#49534c');
      shape('M68-107 Q82-105 94-117 L103-115 99-99 83-94 74-83 68-88Z','#a3976f',ink,2);
      shape('M91-110 L98-122 97-130 102-133 108-124 101-108Z','#8d9283',ink,1.6);
      shape('M76-97 Q58-101 63-84 Q69-76 79-86','', '#a39068',3.5);
      shape('M74-96 Q67-91 73-88','', '#373e38',2);
      shape('M87-99 L100-104 Q96-83 103-65 L91-51 74-58 76-74Z','#80563b',ink,2.5);
      shape('M84-90 L92-96 87-77 91-63 83-60 79-65Z','#9c6c47');
      circle(87,-70,2,'#c1ad7f');
      ctx.save();ctx.translate(-7,-29);hand();ctx.restore();
      shape('M75-91 Q67-95 64-91 L61-86 Q60-83 65-83 L72-86 79-84Z','#d2a073',ink,1.4);
      shape('M91-89 Q102-93 107-85 L110-74 101-61 94-65 97-73 89-76Z','#bd8358',ink,1.6);
      shape('M75-61 Q90-69 102-66 L123-41 109-18 75-32Z','#704b32',ink,2);
      shape('M74-53 Q88-53 102-66 L112-55 86-38Z','#a0774c',ink,1.7);
      const sleeve='M80-40 L107-58 Q140-43 177-8 L183 15 101 15Z';
      shape(sleeve,'#4d5145',ink,2);hatch(sleeve,'#bbb89b39',4);
      shape('M91-31 L104-48 119-43 112-28 100-21Z','#747564');
      if(s.flash>.04){
        ctx.save();ctx.translate(22,-188);ctx.rotate(-.49);
        shape('M0 4 L-16-12 -5-11 -11-39 0-22 7-48 9-16 20-20 11-2Z','#ffbb52');
        shape('M0 4 L-5-12 0-11 3-27 5-9 12-11 6 0Z','#fff4bc');ctx.restore();
      }
    }else if(i===1){
      ctx.translate(0,5);ctx.rotate(-.16);
      shape('M78-70 Q104-158 152-314 Q160-343 176-368 Q167-321 156-282 L94-64Z','#929e97',ink,2.4);
      shape('M83-74 Q117-182 160-320 L174-365 Q169-335 155-283 L94-71Z','#d3dbcc');
      shape('M88-71 Q129-207 162-316','', '#f5f1d7',1.5);
      shape('M78-74 L94-69 93-60 75-65Z','#c0a267',ink,1.6);
      shape('M60-77 Q75-85 105-68 Q111-61 103-58 Q76-58 59-70Z','#61553a',ink,2);
      shape('M62-75 Q85-70 104-63','', '#d6bd79',1.7);
      shape('M76-68 L92-64 72-1 54-6Z','#453835',ink,2);
      for(let n=0;n<10;n++) {
        const x=74-n*2.2,y=-62+n*6;
        line(x,y,x+13,y+6,'#b4a47e',2);line(x+13,y,x+1,y+5,'#8e7b60',1.5);
      }
      hand();
      shape('M64-23 Q78-29 87-40 L99-25 85-7 72-4Z','#705b4d',ink,2);
      const robe='M76-13 Q85-21 99-34 Q123-22 151 9 L96 16Z';
      shape(robe,'#414d4d',ink,2);hatch(robe,'#9ba6a23b');
      shape('M82-13 L98-30 104-26 87-7Z','#91968a',ink,1.1);
    }else{
      halberd(s);
    }
    ctx.restore();
  }
  const sprites = new Map();
  const weaponArt=chapters.map(ch=>{
    const image=new Image();image.src='assets/'+ch.art+'-hand.webp';return image;
  });
  function loadEnemies(index){
    [0,1].forEach(v=>{
      const key=index*2+v;if(sprites.has(key))return;
      const img=new Image();img.src='assets/'+chapters[index].art+'-enemy-'+(v+1)+'.webp';sprites.set(key,img);
    });
  }
  window.addEventListener('load',()=>chapters.forEach((_,i)=>loadEnemies(i)),{once:true});
  function projection(e) {
    const s=game, depth=Math.max(2.4,e.z-s.forward);
    const focal=Math.min(w*.96,h*1.24);
    const size=1.86*focal/depth;
    const x=w*.5+(e.x-s.side)*focal/depth-s.lookX;
    const foot=h*(s.index===2?.49:.49)+(1.65-s.crouch*.80)*focal/depth-s.lookY;
    return {x,foot,size};
  }
  function landscape() {
    const s=game, img=loadArt(s.index);
    const xShift=s.side*.019+s.lookX/w*.55, yShift=s.lookY/h*.32;
    if(img.complete&&img.naturalWidth){
      // The scenery pans with the player and gently changes framing on each leg.
      const zoom=1.10+s.forward*.022+s.stage*.055+Math.sin(s.travel*Math.PI)*.065;
      const sc=Math.max(w/img.naturalWidth,h/img.naturalHeight)*zoom;
      const iw=img.naturalWidth*sc,ih=img.naturalHeight*sc;
      const anchor=[.40,.54,.62][s.stage];
      const left=clamp((w-iw)*anchor-xShift*w, w-iw,0);
      const top=clamp((h-ih)*.49-yShift*h-s.crouch*h*.05,h-ih,0);
      ctx.drawImage(img,left,top,iw,ih);
    }else{
      const grad=ctx.createLinearGradient(0,0,0,h);grad.addColorStop(0,s.ch.sky);grad.addColorStop(.52,'#ddccaa');grad.addColorStop(.53,'#8d806a');grad.addColorStop(1,'#544d40');ctx.fillStyle=grad;ctx.fillRect(0,0,w,h);
      ctx.save();ctx.translate(w*.5-s.lookX,h*.53);ctx.scale(w/850,h/600);
      shape('M-900 7 L-730-92 -681-59 -530-95 -450-47 -370-134 -178-41 -124-85 -38-34 125-99 195-87 310-173 480-35 592-86 713-47 840-115 900-20 900 18Z','#778075');
      ctx.restore();
    }
    if(s.flash>.04 && s.index===0){ctx.fillStyle='rgba(255,215,126,'+(s.flash*.37)+')';ctx.fillRect(0,0,w,h);}
  }
  function weather() {
    const s=game, t=s.time;
    ctx.save();
    for(const p of s.motes){
      const a=(p.x*w+t*p.v-s.side*(7+p.r*4)+w*5)%(w+10);
      let b=(p.y*h+t*(s.index===0?-p.r*2:s.index===1?7:5)+h*9)%(h+8);
      if(s.index===1)b+=Math.sin(t*.8+p.x*13)*6;
      ctx.globalAlpha=.19+.11*Math.sin(t+p.y*12);
      if(s.index===1){ctx.save();ctx.translate(a,b);ctx.rotate(t*.65+p.x*8);ctx.fillStyle='#f8cbbf';ctx.fillRect(0,0,p.r*2,p.r);ctx.restore();}
      else circle(a,b,p.r*(s.index===2?.65:.8),s.index===0?'#ffe0a3':'#f2f7e9');
    }
    ctx.restore();
  }
  function figures() {
    const s=game;
    [...s.foes].sort((a,b)=>b.z-a.z).forEach(e=>{
      const {x,foot,size}=projection(e);
      if(e.dead!==null && e.dead>.55)return;
      const dying=e.dead!==null?e.dead/.55:0, alpha=1-dying;
      const alert=e.attack<1.05 && e.grace===0 && e.dead===null;
      ctx.save();ctx.globalAlpha=alpha;
      ctx.fillStyle='#201e1990';ctx.beginPath();ctx.ellipse(x,foot,size*.21,size*.034,-.05,0,7);ctx.fill();
      ctx.translate(x,foot);ctx.rotate(dying*.8*e.dir+Math.sin(s.time*3+e.phase)*.008);
      const spr=sprites.get(s.index*2+e.variant);
      if(spr?.complete&&spr.naturalWidth){
        const ih=size*(1+Math.sin(s.time*5+e.phase)*.006),iw=ih*spr.naturalWidth/spr.naturalHeight;
        ctx.drawImage(spr,-iw*.50,-ih,iw,ih);
      }else{ctx.scale(size/172,size/172);drawEnemy(e,s.time);}
      ctx.restore();
      if(alert){
        const r=clamp(size*.092,7,15), yy=foot-size-r*1.6;
        circle(x,yy,r+1,'#33271ed9');ctx.beginPath();ctx.arc(x,yy,r,-Math.PI/2,-Math.PI/2+Math.PI*2*clamp(1-e.attack/1.05,0,1));
        ctx.strokeStyle='#f2a15b';ctx.lineWidth=2;ctx.stroke();
        ctx.fillStyle='#ffd298';ctx.font='bold '+r*1.28+'px Arial';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('!',x,yy+.6);
      }
    });
  }
  function hitTarget(x,y) {
    let best=null, cost=Infinity;
    for(const e of game.foes){
      if(e.dead!==null)continue;
      const p=projection(e), extra=game.touch?12:5;
      const dx=(x-p.x)/(p.size*.26+extra), dy=(y-(p.foot-p.size*.5))/(p.size*.52+extra);
      const dist=dx*dx+dy*dy;
      if(dist<1.1 && dist<cost){best=e;cost=dist;}
    }
    return best;
  }
  function withinReach(e) {
    return Math.hypot(e.x-game.side,e.z-game.forward)<=halberdReach;
  }
  function effects() {
    const s=game;
    for(const p of s.fx){
      const life=1-p.age/p.max;
      ctx.save();ctx.globalAlpha=life;
      if(p.type==='spark'){line(p.x-p.vx*.018,p.y-p.vy*.018,p.x,p.y,p.color,Math.max(1,p.size*life));}
      if(p.type==='trail'){
        const grad=ctx.createLinearGradient(p.sx,p.sy,p.x,p.y);grad.addColorStop(0,'#f7dd8c05');grad.addColorStop(1,p.color);
        line(p.sx,p.sy,p.x,p.y,grad,p.size);
      }
      if(p.type==='cut'){
        ctx.strokeStyle='#f1f3d7';ctx.lineWidth=Math.max(1,6*life);ctx.beginPath();ctx.moveTo(p.x-65,p.y+62);ctx.quadraticCurveTo(p.x-2,p.y-7,p.x+60,p.y-38);ctx.stroke();
      }
      if(p.type==='sweep'){
        ctx.strokeStyle=p.color;ctx.lineWidth=1+4*life;
        ctx.beginPath();ctx.ellipse(p.x,p.y,p.radius,p.radius*.31,-.40,.14,2.95);ctx.stroke();
      }
      if(p.type==='ring'){
        ctx.beginPath();ctx.arc(p.x,p.y,4+p.age*66,0,7);ctx.strokeStyle=p.color;ctx.lineWidth=1.5;ctx.stroke();
      }
      ctx.restore();
    }
    if(s.damage>.01){const g=ctx.createRadialGradient(w/2,h/2,h*.17,w/2,h/2,Math.max(w,h)*.64);g.addColorStop(0,'#a8312400');g.addColorStop(1,'rgba(176,40,23,'+(s.damage*.78)+')');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);}
    if(s.crouch>.07){const grd=ctx.createLinearGradient(0,h*(.78-.15*s.crouch),0,h);grd.addColorStop(0,'#161a1900');grd.addColorStop(1,'rgba(20,24,23,'+s.crouch*.72+')');ctx.fillStyle=grd;ctx.fillRect(0,0,w,h);}
  }
  function crosshair(){
    const s=game;if(s.mode!=='playing')return;
    const x=s.aimX,y=s.aimY;
    if(s.hitMark>0){
      for(const [dx,dy] of [[1,1],[1,-1],[-1,1],[-1,-1]])line(x+dx*6,y+dy*6,x+dx*12,y+dy*12,'#fff0bd',2);
    }else{
      const target=hitTarget(x,y), close=target && (s.index!==2||withinReach(target));
      const gap=5+s.recoil*8+(s.crouch*.5), color=s.cover?'#bebcaa':close?'#ffca86':'#f9efd8';
      ctx.save();ctx.shadowColor='#1e241e';ctx.shadowBlur=3;
      [[1,0],[-1,0],[0,1],[0,-1]].forEach(([dx,dy])=>line(x+dx*gap,y+dy*gap,x+dx*(gap+5),y+dy*(gap+5),color,1.5));
      circle(x,y,1.15,color);ctx.restore();
      if(s.index===2 && target && !close && !s.cover){
        ctx.save();ctx.font='600 13px Barlow, Arial, sans-serif';ctx.textAlign='center';ctx.textBaseline='top';
        ctx.shadowColor='#1d211b';ctx.shadowBlur=4;ctx.fillStyle='#fff0ce';ctx.fillText('Close the gap',x,y+17);ctx.restore();
      }
    }
    if(s.reload>0){ctx.beginPath();ctx.arc(x,y,14,-Math.PI/2,-Math.PI/2+2*Math.PI*(1-s.reload/s.ch.reload));ctx.lineWidth=2;ctx.strokeStyle=s.ch.tint;ctx.stroke();}
  }
  function render(){
    const s=game;if(!s)return;
    ctx.setTransform(ratio,0,0,ratio,0,0);ctx.save();
    if(!reducedMotion() && s.shake>.08){ctx.translate(Math.sin(s.time*85)*s.shake,Math.cos(s.time*102)*s.shake*.5);}
    landscape();weather();figures();weapon();effects();crosshair();ctx.restore();
  }
  function makeWave(){
    const s=game;
    const layouts=[[-.25,.24],[-.31,.01,.30],[-.25,.29,-.04]];
    const focal=Math.min(w*.96,h*1.24);
    s.foes=layouts[s.stage].map((at,i)=>{
      // Preserve the initial composition on narrower devices by using camera-relative spacing.
      const z=(s.index===2?5.6:7.1)+((i+s.stage)%3)*1.15, xx=at*w*z/focal;
      return {x:xx,home:xx,z,baseZ:z,variant:(i+s.stage)%2,phase:pick(0,6),dir:i%2?1:-1,dead:null,attack:3.5+i*1.55+s.stage*.22,grace:1.15,flash:0,attackSide:0};
    });
    s.waveStart=s.time;s.side=0;s.forward=0;s.travel=0;
    updateHud();
  }
  function updateHud(){
    const s=game;
    ui.loc.textContent='Chapter '+roman[s.index]+'  /  '+(s.index===2?'Waldstätter of Uri':s.ch.region);
    ui.stage.textContent=s.ch.stages[s.stage];
    const alive=s.foes.filter(e=>e.dead===null).length;
    ui.count.innerHTML=waveSizes.map((_,i)=>'<i class="'+(i<=s.stage?'is-done':'')+'"></i>').join('')+'<span>'+alive+' '+s.ch.foe.toLowerCase()+' left</span>';
    ui.health.innerHTML=Array.from({length:8},(_,i)=>'<i class="'+(i*12.5>=s.health?'is-empty':'')+'"></i>').join('');
    ui.health.setAttribute('aria-label','Health '+Math.max(0,Math.ceil(s.health))+' percent');
    ui.weapon.textContent=s.ch.weapon;
    if(s.index===2){
      ui.ammo.innerHTML='<span class="fg-stamina">Stamina <b>'+s.ammo+' / '+s.ch.capacity+'</b></span>';
    }else{
      ui.ammo.innerHTML=(s.index===1?'Focus ':'')+s.ammo+' <small>/ '+s.ch.capacity+'</small>';
    }
    if(s.reload>0)ui.ammo.textContent=s.index===1?'Centering…':s.index===2?'Recovering…':'Reloading…';
    ui.attack.textContent=s.ch.verb;ui.reload.textContent=s.ch.ready;
    ui.touchReady.textContent=s.ch.ready;
  }
  function notify(message,seconds=2.2){
    ui.notice.textContent=message;ui.notice.classList.add('visible');noticeTimer=seconds;
  }
  function reload(){
    const s=game;if(!s||s.mode!=='playing'||s.reload>0||s.pendingStrike||s.ammo===s.ch.capacity)return;
    s.reload=s.ch.reload;tone(s.index===2?196:s.index===1?390:990,.12,.025,'triangle',s.index===2?147:250);updateHud();
  }
  function scatter(x,y,count,color){
    for(let i=0;i<count;i++){const a=pick(0,Math.PI*2),v=pick(35,155);game.fx.push({type:'spark',x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-25,size:pick(1.8,3.6),age:0,max:pick(.15,.45),color});}
  }
  function attack(){
    const s=game;
    if(!s||s.mode!=='playing'||s.cooldown>0||s.reload>0||s.travel>0)return;
    if(s.cover){notify('Leave cover to '+s.ch.verb.toLowerCase(),1);return;}
    if(!s.ammo){reload();return;}
    s.ammo--;s.engaged++;s.cooldown=s.ch.cooldown;s.recoil=1;s.flash=.105;s.shake=reducedMotion()?0:s.index===1?1.5:2.5;attackSound(s.index);
    const x=s.aimX,y=s.aimY,e=hitTarget(x,y);
    if(s.index===2){
      s.swingKind=s.engaged%2?'sweep':'thrust';
      const scale=clamp(Math.min(w/710,h/535),.74,2.2);
      s.swingAngle=clamp(Math.atan2(x-(w*.60+93*scale),h-78*scale-y),-1.35,1.18);
      s.pendingStrike={target:e,x,y,delay:s.swingKind==='sweep'?.21:.16};
      updateHud();return;
    }
    s.fx.push(s.index===1?{type:'cut',x,y,age:0,max:.23}:{type:'trail',sx:w*.64,sy:h*.80,x,y,color:'#ffdda2ba',size:1.4,age:0,max:.12});
    finishAttack(x,y,e);
  }
  function finishAttack(x,y,e){
    const s=game;
    if(e){
      e.dead=0;s.hits++;s.hitMark=.26;
      scatter(x,y,10,'#efc585');s.fx.push({type:'ring',x,y,age:0,max:.23,color:'#ffdc9c'});
      if(s.index===2){tone(440,.19,.059,'triangle',344);tone(854,.14,.027,'sine',806);}
      else tone(575,.08,.045,'triangle',300);
      if(s.foes.every(foe=>foe.dead!==null)){
        s.travel=.001;s.travelElapsed=0;
        if(s.stage<2) notify('Way clear  ·  Advancing',1.3);
      }
    }else if(s.index!==2)scatter(x,y,6,s.ch.tint);
    if(s.ammo===0 && !s.travel){
      s.autoReady=.48;
    }
    updateHud();
  }
  function incoming(e){
    const s=game,p=projection(e);
    const avoided=s.cover || Math.abs(s.side-e.attackSide)>.65 || (s.index===2&&!withinReach(e));
    e.flash=.12;
    if(s.index===0){hiss(.13,.07,2250);tone(92,.14,.045,'triangle',38);}
    else{hiss(.17,.06,1700,'highpass');}
    if(s.index===2){
      s.fx.push({type:'sweep',x:p.x,y:p.foot-p.size*.43,radius:p.size*.39,color:'#e9dfc6',age:0,max:.24});
    }else{
      s.fx.push({type:'trail',sx:p.x,sy:p.foot-p.size*.58,x:w*(avoided?.24:.51),y:h*(avoided?.76:.81),color:s.index===0?'#f6b967cc':'#c9d3c5bd',size:s.index===0?2:3,age:0,max:.19});
    }
    if(!avoided){
      s.health=Math.max(0,s.health-12.5);s.damage=.9;s.shake=3.7;updateHud();tone(75,.22,.1,'sine',38);
      if(s.health<=0){showModal('lost');return;}
      if(!s.shownCover){s.shownCover=true;notify(s.touch?'Hold Cover when an opponent warns':'Hold Space for cover when an opponent warns',3);}
    }else if(s.cover){tone(120,.09,.035,'triangle',55);}
    e.attack=pick(3.3,4.6);
  }
  const pressed=(...codes)=>codes.some(c=>controls.has(c)||heldTouch.has(c));
  function advance(dt){
    const s=game;
    s.time+=dt;s.cooldown=Math.max(0,s.cooldown-dt);s.flash=Math.max(0,s.flash-dt);s.hitMark=Math.max(0,s.hitMark-dt);
    s.shake*=Math.exp(-dt*13);s.recoil=Math.max(0,s.recoil-dt*(s.index===2?1.75:s.index===1?3.5:5));s.damage=Math.max(0,s.damage-dt*1.7);
    if(noticeTimer>0 && (noticeTimer-=dt)<=0)ui.notice.classList.remove('visible');
    if(s.reload>0){s.reload=Math.max(0,s.reload-dt);if(!s.reload){s.ammo=s.ch.capacity;tone(630,.06,.032,'triangle',710);updateHud();}}
    if(s.autoReady>0){s.autoReady=Math.max(0,s.autoReady-dt);if(!s.autoReady && !s.ammo)reload();}
    s.cover=pressed('Space','KeyC');s.crouch+=(Number(s.cover)-s.crouch)*(1-Math.exp(-dt*10));
    const right=Number(pressed('KeyD'))-Number(pressed('KeyA'));
    const forward=Number(pressed('KeyW'))-Number(pressed('KeyS'));
    s.aimX=clamp(s.aimX+dt*w*.55*(Number(pressed('ArrowRight'))-Number(pressed('ArrowLeft'))),0,w);
    s.aimY=clamp(s.aimY+dt*h*.55*(Number(pressed('ArrowDown'))-Number(pressed('ArrowUp'))),0,h);
    const speed=s.cover?.8:2.3;
    s.side=clamp(s.side+right*dt*speed,-2.7,2.7);
    s.forward=clamp(s.forward+forward*dt*speed,-2.2,3.4);
    s.walkStrength+=(Math.min(1,Math.abs(right)+Math.abs(forward))-s.walkStrength)*(1-Math.exp(-dt*7));
    s.walkTime+=dt*(5+Math.abs(forward)*3);
    const med=reducedMotion()?.35:1;
    s.lookX+=((s.aimX/w-.5)*Math.min(w*.115,h*.15)*med-s.lookX)*(1-Math.exp(-dt*4));
    s.lookY+=((s.aimY/h-.5)*h*.055*med-s.lookY)*(1-Math.exp(-dt*4));
    for(const e of s.foes){
      e.flash=Math.max(0,e.flash-dt);
      if(e.dead!==null){e.dead+=dt;continue;}
      e.grace=Math.max(0,e.grace-dt);if(e.grace>0)continue;
      if(s.index===2){
        const lane=clamp(e.home*.25,-.94,.94);
        const goalX=s.side+lane+Math.sin(s.time*.78+e.phase)*.14;
        e.x+=clamp(goalX-e.x,-dt*1.2,dt*1.2);
        const goalZ=s.forward+3.10+Math.abs(lane)*.3;
        e.z+=clamp(goalZ-e.z,-dt*1.10,dt*1.30);
        if(!withinReach(e)){e.attack=Math.max(e.attack,1.2);continue;}
      }else{
        const drift=s.index===1?.65:.40;
        e.x=e.home+Math.sin((s.time-s.waveStart)*.64+e.phase)*drift;
        e.z=e.baseZ+Math.sin(s.time*.39+e.phase)*.35;
        if(s.index===1&&e.attack<1.05)e.z-=Math.sin((1-e.attack/1.05)*Math.PI)*.85;
      }
      const was=e.attack;e.attack-=dt;
      if(was>1.05&&e.attack<=1.05){e.attackSide=s.side;tone(s.index===0?360:500,.09,.02,'sine',430);}
      if(e.attack<=0){incoming(e);if(s.mode!=='playing')return;}
    }
    if(s.pendingStrike){
      const strike=s.pendingStrike;strike.delay-=dt;
      if(strike.delay<=0){
        s.pendingStrike=null;
        const e=strike.target;
        if(e&&e.dead===null&&withinReach(e)){
          const p=projection(e),y=p.foot-p.size*.55;
          if(s.swingKind==='sweep')s.fx.push({type:'sweep',x:p.x,y,radius:p.size*.25,color:'#e6ddbb',age:0,max:.19});
          finishAttack(p.x,y,e);
        }else{
          if(e)notify('Move closer to strike',1.15);
          finishAttack(strike.x,strike.y,null);
        }
      }
    }
    for(const p of s.fx){
      p.age+=dt;if(p.type==='spark'){p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=100*dt;}
    }
    s.fx=s.fx.filter(p=>p.age<p.max);
    if(s.travel>0){
      s.travelElapsed+=dt;s.travel=Math.min(1,s.travelElapsed/1.35);
      if(s.travel>=1){
        if(s.stage===waveSizes.length-1){showModal('won');return;}
        s.stage++;s.health=Math.min(100,s.health+12.5);s.reload=0;s.autoReady=0;s.ammo=s.ch.capacity;makeWave();
        notify(s.ch.stages[s.stage],1.8);
      }
    }
    s.musicClock-=dt;
    if(s.musicClock<=0){const f=s.ch.notes[s.musicStep%s.ch.notes.length];tone(f,1.4,.017,'triangle');if(s.musicStep%3===0)tone(f/2,1.8,.018,'sine');s.musicStep++;s.musicClock=pick(1.8,3.2);}
  }
  function tick(now){
    if(!game)return;
    const dt=lastTime?Math.min(.05,(now-lastTime)/1000):0;lastTime=now;
    if(game.mode==='playing')advance(dt);
    render();frame=requestAnimationFrame(tick);
  }
  const emblem='<svg class="fg-emblem" aria-hidden="true" viewBox="0 0 40 40" fill="none" stroke="currentColor"><path d="m20 2 3.6 12.5L34 8l-5.8 11.5L38 22l-12 2.6L29 37l-9-8.8L11 37l3.1-12.4L2 22l9.8-2.5L6 8l10.4 6.5Z"/><circle cx="20" cy="21" r="4"/></svg>';
  function showModal(mode){
    const s=game;if(!s)return;
    s.mode=mode;controls.clear();heldTouch.clear();
    const paused=mode==='paused',won=mode==='won';ui.modal.hidden=false;
    ui.kicker.textContent='Chapter '+roman[s.index]+'  /  '+s.ch.title;
    ui.heading.textContent=paused?'Paused':won?'Chapter complete':'Stand again';
    ui.copy.textContent=paused?(s.touch?'Tap an opponent to attack. Hold Cover when an opponent signals an attack.':'Aim with the mouse or arrow keys. Click or press F to attack. Use WASD to move and hold Space for cover.'):won?s.ch.end:'The road is still contested. Watch for the amber warning and take cover before the next attack.';
    if(paused&&s.index===2)ui.copy.textContent=s.touch?'Step forward or wait for a soldier to approach. Tap within reach to strike. Hold Cover to guard and tap Recover to restore stamina.':'Press W to close the gap. Click when the reticle turns amber to strike. Hold Space to guard and press R to recover stamina.';
    ui.stats.hidden=!won;
    ui.stats.style.display=won?'flex':'none';
    if(won){ui.stats.innerHTML='<span><b>'+s.hits+'</b>Defeated</span><span><b>'+Math.round(100*s.hits/Math.max(1,s.engaged))+'%</b>Accuracy</span><span><b>'+Math.floor(s.time/60)+'m '+Math.floor(s.time%60)+'s</b>Time</span>';tone(293.66,.65,.055);tone(369.99,.7,.045,'triangle',369.99,.18);tone(440,.95,.05,'triangle',440,.36);}
    if(mode==='lost')tone(98,.65,.07,'triangle',49);
    ui.primary.textContent=paused?'Resume encounter':won?(s.index<2?'Play next chapter':'Return to campaign'):'Retry chapter';
    ui.secondary.hidden=won&&s.index===2;ui.secondary.textContent='Chapter select';
    ui.focusBefore=document.activeElement;ui.primary.focus({preventScroll:true});
  }
  function resume(){
    if(!game || game.mode!=='paused')return;game.mode='playing';ui.modal.hidden=true;lastTime=0;initAudio();canvas.focus({preventScroll:true});
  }
  function closeGame(completed){
    if(!game)return;
    const index=game.index;
    cancelAnimationFrame(frame);controls.clear();heldTouch.clear();game=null;
    host.classList.remove('fg-open');host.hidden=true;ui.modal.hidden=true;
    if(typeof window.returnToCampaign==='function')window.returnToCampaign(index,completed);
  }
  function primaryAction(){
    if(!game)return;
    const index=game.index,mode=game.mode;
    if(mode==='paused')resume();
    else if(mode==='lost')start(index);
    else if(mode==='won'){closeGame(true);if(index<2)start(index+1);}
  }
  function resize(){
    if(!game)return;
    const oldW=w,oldH=h;
    w=Math.max(1,host.clientWidth);h=Math.max(1,host.clientHeight);ratio=Math.min(1.75,window.devicePixelRatio||1);
    canvas.width=Math.round(w*ratio);canvas.height=Math.round(h*ratio);
    game.aimX=oldW>1?clamp(game.aimX*w/oldW,0,w):w*.5;
    game.aimY=oldH>1?clamp(game.aimY*h/oldH,0,h):h*.52;
    if(game.foes.length && oldW>1&&oldH>1){
      const span=(w/Math.min(w*.96,h*1.24))/(oldW/Math.min(oldW*.96,oldH*1.24));
      for(const e of game.foes){e.home*=span;e.x*=span;}
    }
    render();
  }
  function aim(ev){
    if(!game||game.mode!=='playing')return;
    const r=canvas.getBoundingClientRect();game.aimX=clamp(ev.clientX-r.left,0,w);game.aimY=clamp(ev.clientY-r.top,0,h);
  }
  const inputKeys=new Set(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','KeyF','KeyR','KeyC','Space','Escape','KeyP','KeyQ','Enter']);
  function keyDown(event){
    if(!game||!inputKeys.has(event.code)||event.altKey||event.ctrlKey||event.metaKey)return;
    const s=game;
    if(s.mode!=='playing'){
      if((event.code==='Escape'||event.code==='KeyP') && !event.repeat && s.mode==='paused'){event.preventDefault();event.stopImmediatePropagation();resume();}
      return;
    }
    event.preventDefault();event.stopImmediatePropagation();controls.add(event.code);if(event.repeat)return;
    if(event.code==='Escape'||event.code==='KeyP'){showModal('paused');return;}
    if(event.code==='KeyR')reload();
    if(event.code==='KeyQ'){
      const alive=s.foes.filter(e=>e.dead===null);if(alive.length){const target=alive[(s.selectIndex++)%alive.length],p=projection(target);s.aimX=clamp(p.x,0,w);s.aimY=clamp(p.foot-p.size*.58,0,h);}
    }
    if(event.code==='KeyF'||event.code==='Enter')attack();
  }
  function setup(){
    host=document.getElementById('game');
    if(!host){host=document.createElement('section');host.id='game';document.body.appendChild(host);}
    host.setAttribute('aria-label','First-person arcade encounter');
    host.innerHTML='<canvas tabindex="0" aria-label="Aim at an opponent and click to attack. Use WASD to move, arrow keys to aim, Q to select an opponent, F to attack, R to ready the weapon, Space to take cover, and Escape to pause."></canvas>'+
      '<div class="fg-vignette"></div><div class="fg-hud"><div class="fg-top"><div><span class="fg-loc"></span><strong class="fg-stage"></strong><div class="fg-count"></div></div><button class="fg-pause" type="button" aria-label="Pause game" title="Pause (Esc)"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 2h3.5v12H3zm6.5 0H13v12H9.5z"/></svg></button></div>'+
      '<div class="fg-notice" role="status"></div><div class="fg-bottom"><div><span class="fg-cap">Vitality</span><div class="fg-health" role="img"></div></div><div class="fg-weapon"><span class="fg-cap"></span><div class="fg-ammo"></div></div></div>'+
      '<div class="fg-keys"><span><kbd>WASD</kbd>Move</span><span><kbd>Click</kbd><b class="fg-attack-label"></b></span><span><kbd>R</kbd><b class="fg-reload-label"></b></span><span><kbd>Space</kbd>Cover</span></div></div>'+
      '<div class="fg-touch"><div><button data-hold="KeyA" aria-label="Step left">◀</button><div class="fg-step"><button data-hold="KeyW" aria-label="Move forward">▲</button><button data-hold="KeyS" aria-label="Move back">▼</button></div><button data-hold="KeyD" aria-label="Step right">▶</button></div><div><button data-hold="Space">Cover</button><button data-ready>Ready</button></div></div>'+
      '<div class="fg-modal" hidden><section class="fg-dialog" role="dialog" aria-modal="true" aria-labelledby="fg-title">'+emblem+'<span class="fg-kicker"></span><h2 id="fg-title" class="fg-heading"></h2><p class="fg-copy"></p><div class="fg-stats"></div><div class="fg-actions"><button type="button" class="fg-button primary"></button><button type="button" class="fg-button secondary">Chapter select</button></div></section></div>';
    const get=q=>host.querySelector(q);
    canvas=get('canvas');ctx=canvas.getContext('2d',{alpha:false});
    ui={loc:get('.fg-loc'),stage:get('.fg-stage'),count:get('.fg-count'),health:get('.fg-health'),weapon:get('.fg-weapon .fg-cap'),ammo:get('.fg-ammo'),notice:get('.fg-notice'),attack:get('.fg-attack-label'),reload:get('.fg-reload-label'),modal:get('.fg-modal'),kicker:get('.fg-kicker'),heading:get('.fg-heading'),copy:get('.fg-copy'),stats:get('.fg-stats'),primary:get('.fg-button.primary'),secondary:get('.fg-button.secondary')};
    ui.touchReady=get('[data-ready]');
    get('.fg-pause').addEventListener('click',()=>{if(game?.mode==='playing')showModal('paused');});
    ui.primary.addEventListener('click',primaryAction);ui.secondary.addEventListener('click',()=>closeGame(game?.mode==='won'));
    get('[data-ready]').addEventListener('click',reload);
    host.querySelectorAll('[data-hold]').forEach(button=>{
      const code=button.dataset.hold;
      button.addEventListener('pointerdown',e=>{e.preventDefault();button.setPointerCapture(e.pointerId);heldTouch.add(code);if(game&&code==='Space')game.cover=true;});
      const release=()=>heldTouch.delete(code);
      ['pointerup','pointercancel','lostpointercapture'].forEach(evt=>button.addEventListener(evt,release));
    });
    canvas.addEventListener('pointermove',aim);
    canvas.addEventListener('pointerdown',e=>{if(e.button!==0||!game||game.mode!=='playing')return;e.preventDefault();canvas.focus({preventScroll:true});aim(e);initAudio();attack();});
    canvas.addEventListener('contextmenu',e=>e.preventDefault());
    window.addEventListener('keydown',keyDown,true);
    window.addEventListener('keyup',e=>{controls.delete(e.code);},true);
    // Keep focus inside overlays when a player navigates with the keyboard.
    ui.modal.addEventListener('keydown',e=>{
      if(e.key!=='Tab')return;
      const first=ui.primary,last=ui.secondary.hidden?first:ui.secondary;
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
    });
    window.addEventListener('resize',resize);
    const pauseOutside=()=>{if(game?.mode==='playing')showModal('paused');};
    window.addEventListener('blur',pauseOutside);document.addEventListener('visibilitychange',()=>{if(document.hidden)pauseOutside();});
  }
  function start(index=0){
    index=clamp(Number.isInteger(index)?index:0,0,2);
    if(!ui)setup();
    cancelAnimationFrame(frame);controls.clear();heldTouch.clear();initAudio();
    host.hidden=false;host.classList.add('fg-open');ui.modal.hidden=true;
    const ch=chapters[index];
    game={index,ch,mode:'playing',stage:0,health:100,ammo:ch.capacity,time:0,musicClock:1.3,musicStep:0,
      foes:[],fx:[],motes:Array.from({length:40},()=>({x:Math.random(),y:Math.random(),r:pick(.6,2.1),v:pick(2,11)})),
      travel:0,travelElapsed:0,forward:0,side:0,lookX:0,lookY:0,aimX:0,aimY:0,walkTime:0,walkStrength:0,cover:false,crouch:0,
      autoReady:0,reload:0,recoil:0,flash:0,shake:0,cooldown:0,damage:0,hitMark:0,hits:0,engaged:0,selectIndex:0,shownCover:false,touch:window.matchMedia('(pointer:coarse)').matches};
    loadArt(index);loadEnemies(index);resize();game.aimX=w*.5;game.aimY=h*.53;makeWave();
    if(index===2)notify(game.touch?'Close in, then tap to strike':'Close in, then click to strike',3.4);
    else notify(game.touch?'Tap an opponent to '+ch.verb.toLowerCase():'Aim and click to '+ch.verb.toLowerCase(),3.4);
    canvas.focus({preventScroll:true});lastTime=0;frame=requestAnimationFrame(tick);
  }
  window.FrontiersGame={
    start,
    setSound(enabled){sound=Boolean(enabled);if(sound&&game)initAudio();},
    pause(){if(game?.mode==='playing')showModal('paused');}
  };
})();
