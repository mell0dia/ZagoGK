// Site languages: English (source text in the HTML), Portuguese, French, Italian.
// Default = browser/system language; a language picked with the selector is remembered.
(function(){
const LANGS=['en','pt','fr','it'], NAMES={en:'English',pt:'Português',fr:'Français',it:'Italiano'};
// "English text": [PT, FR, IT]
const D={
"Zago Mello — Goalkeeper":["Zago Mello — Goleiro","Zago Mello — Gardien de but","Zago Mello — Portiere"],
"Gallery — Zago Mello":["Galeria — Zago Mello","Galerie — Zago Mello","Galleria — Zago Mello"],
"Ball Control — Zago Mello":["Controle de Bola — Zago Mello","Maîtrise du ballon — Zago Mello","Controllo palla — Zago Mello"],
"Zago Mello ball control: juggling and footwork.":["Controle de bola de Zago Mello: embaixadinhas e jogo de pés.","Maîtrise du ballon de Zago Mello : jonglage et jeu de pieds.","Controllo palla di Zago Mello: palleggi e gioco di piedi."],
"Soccer Cards — Zago Mello":["Cards de Futebol — Zago Mello","Cartes de foot — Zago Mello","Carte calcio — Zago Mello"],
"Save Library — Zago Mello":["Biblioteca de Defesas — Zago Mello","Bibliothèque d'arrêts — Zago Mello","Raccolta delle parate — Zago Mello"],
"Zago Mello, youth soccer goalkeeper from Vancouver, BC. Save reel, ball control and one-on-one goalkeeper lessons for kids 7 to 10.":["Zago Mello, goleiro de futebol de base de Vancouver, BC. Reel de defesas, controle de bola e aulas individuais de goleiro para crianças de 7 a 10 anos.","Zago Mello, gardien de but de football jeunes à Vancouver, BC. Vidéo d'arrêts, maîtrise du ballon et cours individuels de gardien pour enfants de 7 à 10 ans.","Zago Mello, portiere di calcio giovanile di Vancouver, BC. Video delle parate, controllo palla e lezioni individuali da portiere per bambini dai 7 ai 10 anni."],
"Photos of Zago Mello, goalkeeper.":["Fotos de Zago Mello, goleiro.","Photos de Zago Mello, gardien de but.","Foto di Zago Mello, portiere."],
"Zago Mello soccer cards.":["Cards de futebol de Zago Mello.","Cartes de foot de Zago Mello.","Carte calcio di Zago Mello."],
"Saves":["Defesas","Arrêts","Parate"],
"Ball Control":["Controle de Bola","Maîtrise du ballon","Controllo palla"],
"Profile":["Perfil","Profil","Profilo"],
"GK Lessons":["Aulas de Goleiro","Cours de gardien","Lezioni da portiere"],
"Gallery":["Galeria","Galerie","Galleria"],
"Cards":["Cards","Cartes","Carte"],
"Library":["Biblioteca","Bibliothèque","Libreria"],
"Collect them":["Colecione","À collectionner","Da collezionare"],
"Soccer Cards":["Cards de Futebol","Cartes de foot","Carte calcio"],
"Download a trading card.":["Baixe um card de colecionador.","Téléchargez une carte à collectionner.","Scarica una carta da collezione."],
"Zago Mello goalkeeper card: Save of the Season":["Card do goleiro Zago Mello: Defesa da Temporada","Carte du gardien Zago Mello : Arrêt de la saison","Carta del portiere Zago Mello: Parata della stagione"],
"Zago Mello goalkeeper card: Dark Premium":["Card do goleiro Zago Mello: Premium Escuro","Carte du gardien Zago Mello : Premium sombre","Carta del portiere Zago Mello: Dark Premium"],
"Zago Mello goalkeeper card: Champion":["Card do goleiro Zago Mello: Campeão","Carte du gardien Zago Mello : Champion","Carta del portiere Zago Mello: Campione"],
"Download PNG":["Baixar PNG","Télécharger le PNG","Scarica PNG"],
"In The Moment":["No Momento","Dans l'instant","Nel momento"],
"A few favourites. Tap a photo to view it full size.":["Algumas favoritas. Toque em uma foto para vê-la em tamanho grande.","Quelques favorites. Touchez une photo pour l'agrandir.","Alcune preferite. Tocca una foto per vederla a schermo intero."],
"Inter Summer Camp":["Inter Summer Camp","Inter Summer Camp","Inter Summer Camp"],
"Starfire Tournament, Seattle 2026 · Riptide, U13 champions":["Torneio Starfire, Seattle 2026 · Riptide, campeões sub-13","Tournoi Starfire, Seattle 2026 · Riptide, champions U13","Torneo Starfire, Seattle 2026 · Riptide, campioni U13"],
"Medal, October 2024":["Medalha, outubro de 2024", "Médaille, octobre 2024", "Medaglia, ottobre 2024"],
"Starfire Labor Day Cup, 2024":["Copa Starfire Labor Day, 2024", "Coupe Starfire Labor Day, 2024", "Coppa Starfire Labor Day, 2024"],
"Outstanding Team Award, U11 Villains, May 2025":["Prêmio de Equipe Destaque, U11 Villains, maio de 2025","Prix de l'équipe exceptionnelle, U11 Villains, mai 2025","Premio squadra eccellente, U11 Villains, maggio 2025"],
"Trophy, Coastal Football Club, May 2026":["Troféu, Coastal Football Club, maio de 2026", "Trophée, Coastal Football Club, mai 2026", "Trofeo, Coastal Football Club, maggio 2026"],
"Between the posts, November 2025":["Entre as traves, novembro de 2025", "Entre les poteaux, novembre 2025", "Tra i pali, novembre 2025"],
"Ball tricks, June 2026":["Truques com a bola, junho de 2026", "Jongleries, juin 2026", "Trucchi con la palla, giugno 2026"],
"Team huddle, October 2026":["Roda do time, outubro de 2026","Cercle d'équipe, octobre 2026","Cerchio di squadra, ottobre 2026"],
"Training session, July 2026":["Treino, julho de 2026","Séance d'entraînement, juillet 2026","Allenamento, luglio 2026"],
"Ball control":["Controle de bola","Maîtrise du ballon","Controllo palla"],
"Close":["Fechar","Fermer","Chiudi"],"Previous":["Anterior","Précédent","Precedente"],"Next":["Próxima","Suivant","Successiva"],
"Vancouver, BC · Youth Soccer":["Vancouver, BC · Futebol de base","Vancouver, BC · Football jeunes","Vancouver, BC · Calcio giovanile"],
"Watch the saves":["Ver as defesas","Voir les arrêts","Guarda le parate"],
"GK lessons for kids":["Aulas de goleiro para crianças","Cours de gardien pour enfants","Lezioni da portiere per bambini"],
"SCROLL ↓":["ROLE ↓","DÉFILER ↓","SCORRI ↓"],
"Highlights":["Destaques","Temps forts","Highlights"],
"Save Reel":["Reel de Defesas","Vidéo des arrêts","Video delle parate"],
"Five saves, six seconds each. Pick one below to jump straight to it.":["Cinco defesas, seis segundos cada. Escolha uma abaixo para ir direto a ela.","Cinq arrêts, six secondes chacun. Choisissez-en un ci-dessous pour y aller directement.","Cinque parate, sei secondi ciascuna. Scegline una qui sotto per andarci subito."],
"01 · Fingertip":["01 · Ponta dos dedos","01 · Du bout des doigts","01 · Con la punta delle dita"],
"High shot pushed away":["Chute alto desviado","Tir en hauteur repoussé","Tiro alto respinto"],
"02 · Smother":["02 · Bloqueio","02 · Blocage","02 · Blocco"],
"At the striker's feet":["Nos pés do atacante","Aux pieds de l'attaquant","Sui piedi dell'attaccante"],
"03 · Dive":["03 · Mergulho","03 · Plongeon","03 · Tuffo"],
"Full stretch to the corner":["Esticada total até o canto","Détente complète vers le coin","Allungo totale verso l'angolo"],
"04 · Header":["04 · Cabeçada","04 · Tête","04 · Colpo di testa"],
"Tipped over the bar":["Desviada por cima da trave","Détourné au-dessus de la barre","Deviata sopra la traversa"],
"05 · Flying save":["05 · Defesa voadora","05 · Arrêt en vol","05 · Parata in volo"],
"Top corner, fully airborne":["Ângulo, totalmente no ar","Lucarne, en pleine envolée","Incrocio, completamente in volo"],
"More full-length clips are in the":["Mais vídeos completos estão na","Retrouvez plus de vidéos complètes dans la","Altri video completi sono nella"],
"Subscribe":["Inscrever-se","S'abonner","Iscriviti"],
"YouTube: Zago GK":["YouTube: Zago GK","YouTube : Zago GK","YouTube: Zago GK"],
"See all videos →":["Ver todos os vídeos →","Voir toutes les vidéos →","Vedi tutti i video →"],
"Save Library →":["Biblioteca de Defesas →","Bibliothèque d'arrêts →","Raccolta delle parate →"],
"Footwork":["Jogo de pés","Jeu de pieds","Gioco di piedi"],
"A goalkeeper who's comfortable with the ball at his feet. Juggling, close touches, and calm on the ball.":["Um goleiro à vontade com a bola nos pés. Embaixadinhas, toques curtos e calma com a bola.","Un gardien à l'aise avec le ballon dans les pieds. Jonglage, petites touches et calme balle au pied.","Un portiere a suo agio con il pallone tra i piedi. Palleggi, tocchi ravvicinati e calma con la palla."],
"Juggling: feet, thighs and head":["Embaixadinhas: pés, coxas e cabeça","Jonglage : pieds, cuisses et tête","Palleggi: piedi, cosce e testa"],
"Comfortable playing out from the back":["Confortável na saída de bola","À l'aise pour relancer depuis l'arrière","A suo agio nell'impostare dal basso"],
"Zago Mello in orange goalkeeper kit":["Zago Mello com uniforme laranja de goleiro","Zago Mello en tenue de gardien orange","Zago Mello con la divisa arancione da portiere"],
"Player Profile":["Perfil do Jogador","Profil du joueur","Profilo del giocatore"],
"Bio & Stats":["Bio e Estatísticas","Bio et statistiques","Bio e statistiche"],
"Position":["Posição","Poste","Ruolo"],"Goalkeeper":["Goleiro","Gardien de but","Portiere"],
"Age":["Idade","Âge","Età"],"Club":["Clube","Club","Club"],"Height":["Altura","Taille","Altezza"],
"Hometown":["Cidade natal","Ville d'origine","Città natale"],
"Dominant foot / hand":["Pé / mão dominante","Pied / main dominants","Piede / mano dominante"],
"Right foot":["Pé direito","Pied droit","Piede destro"],
"Languages":["Idiomas","Langues","Lingue"],
"Portuguese":["Português","Portugais","Portoghese"],"English":["Inglês","Anglais","Inglese"],"French":["Francês","Français","Francese"],
"Achievements":["Conquistas","Palmarès","Traguardi"],
"2× BC/Washington champion":["Bicampeão BC/Washington","2× champion BC/Washington","2 volte campione BC/Washington"],
"3rd place, West Coast tournament":["3º lugar, torneio da Costa Oeste","3e place, tournoi de la côte Ouest","3º posto, torneo della costa occidentale"],
"Coaching · Ages 7 – 10":["Treinamento · 7 a 10 anos","Coaching · 7 à 10 ans","Allenamento · 7–10 anni"],
"Goalkeeper Lessons For Kids":["Aulas de Goleiro para Crianças","Cours de gardien de but pour enfants","Lezioni da portiere per bambini"],
"Fun, safe, beginner-friendly goalkeeper training for kids aged 7 to 10: ready position, catching, footwork, low dives, and confidence in goal. Sessions available in English, Portuguese or French.":["Treino de goleiro divertido, seguro e para iniciantes, para crianças de 7 a 10 anos: posição de espera, defesa, jogo de pés, mergulhos baixos e confiança no gol. Aulas disponíveis em inglês, português ou francês.","Un entraînement de gardien amusant, sûr et adapté aux débutants, pour les enfants de 7 à 10 ans : position d'attente, prise de balle, jeu de pieds, plongeons bas et confiance dans le but. Séances disponibles en anglais, en portugais ou en français.","Allenamento da portiere divertente, sicuro e adatto ai principianti, per bambini dai 7 ai 10 anni: posizione di partenza, presa, lavoro di piedi, tuffi bassi e fiducia tra i pali. Sessioni disponibili in inglese, portoghese o francese."],
"One-on-One Session":["Sessão Individual","Séance individuelle","Sessione individuale"],
"/ hour":["/ hora","/ heure","/ ora"],
"Kids aged 7 – 10":["Crianças de 7 a 10 anos","Enfants de 7 à 10 ans","Bambini dai 7 ai 10 anni"],
"One player, one coach":["Um jogador, um treinador","Un joueur, un entraîneur","Un giocatore, un allenatore"],
"Catching & ready stance":["Defesa e posição de espera","Prise de balle et position d'attente","Presa e posizione di partenza"],
"Footwork, low dives, confidence in goal":["Jogo de pés, mergulhos baixos, confiança no gol","Jeu de pieds, plongeons bas, confiance dans le but","Lavoro di piedi, tuffi bassi, fiducia tra i pali"],
"How to book":["Como reservar","Comment réserver","Come prenotare"],
"To book a session, send an email to":["Para reservar uma sessão, envie um e-mail para","Pour réserver une séance, envoyez un e-mail à","Per prenotare una sessione, invia un'email a"],
"with your child's name, age and the days that work for you.":["com o nome e a idade do seu filho e os dias que funcionam para você.","avec le prénom et l'âge de votre enfant et les jours qui vous conviennent.","con il nome e l'età di tuo figlio e i giorni che ti vanno bene."],
"Book a session":["Reservar uma sessão","Réserver une séance","Prenota una sessione"],
"Full-length clips":["Vídeos completos","Vidéos complètes","Video completi"],
"Save Library":["Biblioteca de Defesas","Bibliothèque d'arrêts","Raccolta delle parate"],
"Every clip from the album in full. Videos are added as they go up on YouTube.":["Todos os vídeos do álbum, na íntegra. Os vídeos são adicionados conforme sobem no YouTube.","Chaque vidéo de l'album en entier. Les vidéos sont ajoutées au fur et à mesure de leur mise en ligne sur YouTube.","Ogni video dell'album per intero. I video vengono aggiunti man mano che vengono caricati su YouTube."],
"← Back to home":["← Voltar ao início","← Retour à l'accueil","← Torna alla home"],
"Coming Soon":["Em breve","Bientôt","Prossimamente"],"Coming soon":["Em breve","Bientôt","Prossimamente"],
"Video on YouTube shortly":["Vídeo no YouTube em breve","Vidéo bientôt sur YouTube","Video presto su YouTube"],
"Starfire Tournament, Seattle 2026 · Riptide, U13 Champions":["Torneio Starfire, Seattle 2026 · Riptide, campeões sub-13","Tournoi Starfire, Seattle 2026 · Riptide, champions U13","Torneo Starfire, Seattle 2026 · Riptide, campioni U13"],
"Inter Summer Camp, August 2025":["Inter Summer Camp, agosto de 2025","Inter Summer Camp, août 2025","Inter Summer Camp, agosto 2025"],
"Leaping save at the crossbar":["Defesa saltando na trave","Arrêt en bondissant sur la barre","Parata in salto sulla traversa"],
"Flying save to the top corner":["Defesa voadora no ângulo","Arrêt en vol dans la lucarne","Parata in volo all'incrocio"],
"Juggling and ball control":["Embaixadinhas e controle de bola","Jonglage et maîtrise du ballon","Palleggi e controllo palla"],
"Low dive to the near post":["Mergulho baixo no primeiro pau","Plongeon bas au premier poteau","Tuffo basso sul primo palo"],
"One-on-one: smothering the ball at the striker's feet":["Mano a mano: bloqueando a bola nos pés do atacante","Un contre un : blocage du ballon aux pieds de l'attaquant","Uno contro uno: blocco del pallone sui piedi dell'attaccante"]
};
const H={ // elements marked data-i18n (contain markup)
 role:['GOAL<b>KEEPER</b>','GOLEI<b>RO</b>','GAR<b>DIEN</b>','POR<b>TIERE</b>'],
 ballcontrol:['Ball<br>Control','Controle<br>de Bola','Maîtrise<br>du ballon','Controllo<br>palla']
};
const MONTH={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};
const LOC={pt:'pt-BR',fr:'fr-FR',it:'it-IT'}, MATCH={pt:'Lance de jogo',fr:'Extrait de match',it:'Azione di gioco'}, CLIP={pt:'Clipe',fr:'Extrait',it:'Clip'}, ALB={pt:'Álbum',fr:'Album',it:'Album'};
let lang='en';
const norm=s=>s.replace(/\s+/g,' ').trim();
function tr(en){
  if(lang==='en')return en;
  const k=norm(en),i=LANGS.indexOf(lang)-1;
  if(D[k])return D[k][i];
  let m=k.match(/^Match clip · (\d+) (\w{3}) (\d{4})$/);
  if(m)return MATCH[lang]+' · '+new Date(+m[3],MONTH[m[2]],+m[1]).toLocaleDateString(LOC[lang],{day:'numeric',month:'short',year:'numeric'});
  m=k.match(/^Clip (\d+) · Album #(\d+)$/);
  if(m)return CLIP[lang]+' '+m[1]+' · '+ALB[lang]+' #'+m[2];
  return en;
}
const SKIP=new Set(['SCRIPT','STYLE']);
function run(root){
  const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;
  while(n=w.nextNode()){
    if(SKIP.has(n.parentNode.nodeName)||n.parentNode.closest('[data-i18n]'))continue;
    if(n.__o===undefined){if(!n.nodeValue.trim())continue;n.__o=n.nodeValue}
    const t=tr(n.__o),lead=n.__o.match(/^\s*/)[0],trail=n.__o.match(/\s*$/)[0];
    const v=lang==='en'?n.__o:lead+t+trail;if(n.nodeValue!==v)n.nodeValue=v;
  }
  root.querySelectorAll('[alt],[aria-label],[placeholder]').forEach(el=>['alt','aria-label','placeholder'].forEach(a=>{
    if(!el.hasAttribute(a))return;const k='o_'+a.replace('-','_');if(el.dataset[k]===undefined)el.dataset[k]=el.getAttribute(a);
    el.setAttribute(a,tr(el.dataset[k]));}));
  root.querySelectorAll('[data-i18n]').forEach(el=>{const h=H[el.dataset.i18n][LANGS.indexOf(lang)];if(el.innerHTML!==h)el.innerHTML=h});
}
function meta(){
  if(document.__t===undefined)document.__t=document.title;document.title=tr(document.__t);
  const m=document.querySelector('meta[name=description]');
  if(m){if(m.__o===undefined)m.__o=m.content;m.content=tr(m.__o)}
  document.documentElement.lang=lang;
}
const SVG={
 en:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30"><rect width="60" height="30" fill="#012169"/><path d="M0 0L60 30M60 0L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0L60 30M60 0L0 30" stroke="#C8102E" stroke-width="2"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/></svg>',
 pt:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14"><rect width="20" height="14" fill="#009739"/><path d="M10 1.4L18.3 7L10 12.6L1.7 7z" fill="#FEDD00"/><circle cx="10" cy="7" r="3.5" fill="#002776"/></svg>',
 fr:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2"><rect width="1" height="2" fill="#0055A4"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#EF4135"/></svg>',
 it:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2"><rect width="1" height="2" fill="#009246"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#CE2B37"/></svg>'};
const flag=l=>`<img class="flag" alt="" src="data:image/svg+xml,${encodeURIComponent(SVG[l])}">`;
function buttons(){
  const cur=document.querySelector('.lsel .cur');if(cur)cur.innerHTML=flag(lang)+'<span>'+NAMES[lang]+'</span><i aria-hidden="true">▾</i>';
  document.querySelectorAll('.lsel li').forEach(li=>{const on=li.dataset.l===lang;li.classList.toggle('on',on);li.setAttribute('aria-selected',on)});
}
let busy=false;
function apply(){if(busy)return;busy=true;try{run(document.body);meta();buttons()}finally{busy=false}}
function set(l,save){lang=l;if(save){try{localStorage.setItem('zagoLang',l)}catch(e){}}apply()}
function detect(){
  const q=new URLSearchParams(location.search).get('lang');if(LANGS.includes(q))return q;
  let s=null;try{s=localStorage.getItem('zagoLang')}catch(e){}
  if(LANGS.includes(s))return s;
  for(const l of (navigator.languages||[navigator.language||'en'])){const c=String(l).slice(0,2).toLowerCase();if(LANGS.includes(c))return c}
  return 'en';
}
function mount(){
  const nav=document.getElementById('nav');
  if(nav&&!nav.querySelector('.lsel')){
    const d=document.createElement('div');d.className='lsel';
    d.innerHTML='<button type="button" class="cur" aria-haspopup="listbox" aria-expanded="false" aria-label="Language"></button><ul role="listbox" hidden>'+
      LANGS.map(l=>`<li role="option" tabindex="0" data-l="${l}" lang="${l}">${flag(l)}<span>${NAMES[l]}</span></li>`).join('')+'</ul>';
    const btn=d.querySelector('.cur'),ul=d.querySelector('ul');
    const close=()=>{ul.hidden=true;btn.setAttribute('aria-expanded','false')};
    btn.addEventListener('click',e=>{e.stopPropagation();const o=ul.hidden;ul.hidden=!o;btn.setAttribute('aria-expanded',String(o))});
    ul.addEventListener('click',e=>{const li=e.target.closest('li');if(li){set(li.dataset.l,true);close()}});
    ul.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.dataset.l){e.preventDefault();set(e.target.dataset.l,true);close();btn.focus()}if(e.key==='Escape'){close();btn.focus()}});
    document.addEventListener('click',close);
    nav.appendChild(d);
  }
}
window.I18N={t:tr,apply,set,get lang(){return lang}};
function init(){mount();lang=detect();apply();
  new MutationObserver(()=>{if(lang!=='en'){clearTimeout(init.t);init.t=setTimeout(apply,30)}}).observe(document.body,{childList:true,subtree:true});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
