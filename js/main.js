// ===== CONFIG: replace placeholder before publishing =====
const CONTACT_EMAIL = "[CONTACT EMAIL]";
// =========================================================
const nav=document.getElementById('nav');
addEventListener('scroll',()=>nav.classList.toggle('solid',scrollY>40),{passive:true});
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.links').classList.remove('open')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const yr=document.getElementById('yr'); if(yr) yr.textContent=new Date().getFullYear();
// YouTube players: paste the video IDs here (videos are on YouTube only, not in the repo)
const REEL_YT='aTjaZ5v_6Bk';      // Save Reel (the 5 saves, 6 s each)
const CONTROL_YT='vC4PblFPXtY';   // Ball Control
const ytEmbed=(id,start,auto)=>`<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?rel=0&modestbranding=1&start=${start||0}${auto?'&autoplay=1':''}" title="Zago Mello" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
const soon=el=>{el.innerHTML=`<img src="${el.dataset.poster}" alt="" style="width:100%;aspect-ratio:16/9;object-fit:cover;display:block"><div style="position:absolute;inset:0;display:grid;place-items:center;background:rgba(0,0,0,.45);font-family:Bebas;font-size:28px;letter-spacing:2px">Coming soon</div>`};
const fill=(el,id)=>{if(!el)return;id?el.innerHTML=ytEmbed(id):soon(el)};
fill(document.getElementById('reelPlayer'),REEL_YT);
fill(document.getElementById('controlPlayer'),CONTROL_YT);
// reel chapters: show that save's still image with a play button; the video starts when the still is clicked
const rp=document.getElementById('reelPlayer'),chs=[...document.querySelectorAll('#chapters button')];
let curCh=null;
const still=(img,t)=>{if(!rp)return;
 if(!REEL_YT){soon(rp);return}
 rp.innerHTML=`<button class="playstill" aria-label="Play" style="background-image:url('${img}')"><span class="pbtn"></span></button>`;
 rp.querySelector('.playstill').onclick=()=>{rp.innerHTML=ytEmbed(REEL_YT,t,true)}};
chs.forEach(b=>b.onclick=()=>{curCh=b;still(b.dataset.img,+b.dataset.t);chs.forEach(x=>x.classList.toggle('on',x===b))});
if(rp&&REEL_YT)still('reel/poster.jpg',0);
// lightbox
const lb=document.getElementById('lb');
if(lb){const links=[...document.querySelectorAll('#grid a')];let cur=0;const im=lb.querySelector('img'),cap=lb.querySelector('.cap');
 const show=i=>{cur=(i+links.length)%links.length;im.src=links[cur].href;cap.textContent=(cur+1)+' / '+links.length;lb.classList.add('open')};
 links.forEach((a,i)=>a.onclick=e=>{e.preventDefault();show(i)});
 lb.querySelector('.x').onclick=()=>lb.classList.remove('open');
 lb.querySelector('.prev').onclick=e=>{e.stopPropagation();show(cur-1)};
 lb.querySelector('.next').onclick=e=>{e.stopPropagation();show(cur+1)};
 lb.onclick=e=>{if(e.target===lb)lb.classList.remove('open')};
 addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')lb.classList.remove('open');if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});}
// booking form -> mailto (no server)
const f=document.getElementById('bookForm');
if(f)f.onsubmit=e=>{e.preventDefault();const d=new FormData(f);
 const body=`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nAge group: ${d.get('child')}\nType: ${d.get('type')}\n\n${d.get('msg')}`;
 location.href=`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Zago Mello – '+d.get('type'))}&body=${encodeURIComponent(body)}`;};
// library
const lib=document.getElementById('lib');
if(lib){fetch('data/videos.json').then(r=>r.json()).then(list=>{
 lib.innerHTML=list.map(v=>{const yt=(v.youtubeId||'').trim();
  const frame=yt?`<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(yt)}?rel=0&modestbranding=1" title="${v.title}" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>`
   :`<img src="${v.poster}" alt="" loading="lazy"><div class="soon"><b>Coming Soon</b><small>Video on YouTube shortly</small></div>`;
  const m=Math.floor(v.duration/60),s=String(v.duration%60).padStart(2,'0');
  return `<div class="vcard"><div class="vframe">${frame}</div><div class="vmeta"><strong>${v.title}</strong><span>${v.date} · ${m}:${s}</span></div></div>`}).join('');
}).catch(()=>{lib.innerHTML='<p class="note">Could not load data/videos.json (open via a web server, not file://).</p>'})}
