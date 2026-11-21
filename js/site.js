(function(){
document.querySelectorAll('[data-ba2]').forEach(function(b){var bs=b.querySelectorAll('button');bs.forEach(function(x){x.addEventListener('click',function(){var a=x.dataset.v==='a';b.classList.toggle('on',a);bs.forEach(function(y){y.setAttribute('aria-pressed',String(y===x))});b.dataset.touched=1;});});});
var m=document.querySelector('[data-mosaic]');
if(m){var S=JSON.parse(m.dataset.mosaic),i=0,f=m.querySelector('.flip'),fb=f.querySelector('.before'),fa=f.querySelector('.after'),tag=f.querySelector('.tag'),cap=document.getElementById('mcap'),tiles=m.querySelectorAll('button[data-i]'),t1,t2,user=0;
 function show(k){i=k;var s=S[k];f.classList.remove('on');tag.textContent='작업 전';fb.src=s.b;fb.alt=s.t+' 작업 전';fa.src=s.a;fa.alt=s.t+' 작업 후';cap.innerHTML='<span>'+s.p+'</span><b>'+s.t+'</b>';tiles.forEach(function(t){t.classList.toggle('sel',+t.dataset.i===k)});clearTimeout(t1);t1=setTimeout(function(){f.classList.add('on');tag.textContent='작업 후';},1600);}
 tiles.forEach(function(t){t.addEventListener('click',function(){user=1;show(+t.dataset.i);});});
 f.addEventListener('click',function(){user=1;var on=!f.classList.contains('on');f.classList.toggle('on',on);tag.textContent=on?'작업 후':'작업 전';clearTimeout(t1);});
 show(0);t2=setInterval(function(){if(!user)show((i+1)%S.length)},4200);}
var card=document.querySelector('[data-roomcard]');
if(card){var R=JSON.parse(card.dataset.roomcard);document.querySelectorAll('.room[data-room]').forEach(function(r){function on(){var d=R[r.dataset.room];document.querySelectorAll('.room').forEach(function(x){x.classList.toggle('on',x===r)});card.querySelector('h3').textContent=d.name;card.querySelector('ul').innerHTML=d.items.map(function(s){return '<li>'+s+'</li>'}).join('');card.querySelector('.shot').innerHTML='<b>찍어 보낼 사진</b> · '+d.shot;card.querySelector('.cnt').textContent=d.cnt;var a=card.querySelector('a.btn');a.href=d.log||d.href;a.textContent='비교 현장';}
 r.addEventListener('mouseenter',on);r.addEventListener('focus',on);});}
})();

(function(){
var top=document.querySelector('.top'),btn=document.querySelector('.menu-btn');
if(top&&btn){btn.addEventListener('click',function(){var o=top.classList.toggle('open');btn.setAttribute('aria-expanded',String(o));btn.setAttribute('aria-label',o?'메뉴 닫기':'메뉴 열기');});
 top.querySelectorAll('.menu a').forEach(function(a){a.addEventListener('click',function(){top.classList.remove('open');btn.setAttribute('aria-expanded','false');});});}
var ch=document.querySelector('.chips');
if(ch){var bs=ch.querySelectorAll('button'),ts=document.querySelectorAll('#wl .ticket'),em=document.querySelector('.wl-empty');
 bs.forEach(function(b){b.addEventListener('click',function(){var f=b.dataset.f.split(' '),n=0;bs.forEach(function(x){x.setAttribute('aria-pressed',String(x===b))});
  ts.forEach(function(t){var on=f[0]==='all'||f.indexOf(t.dataset.cat)>-1;t.hidden=!on;if(on)n++;});if(em)em.hidden=n>0;});});}
})();

(function(){
document.querySelectorAll('.faq').forEach(function(faq){
 var items=[].slice.call(faq.querySelectorAll('details'));
 items.forEach(function(d){d.addEventListener('toggle',function(){if(d.open)items.forEach(function(o){if(o!==d)o.open=false;});});});
 if(faq.classList.contains('one'))return;
 var pane=document.createElement('div');pane.className='faq-pane';
 var list=document.createElement('div');list.className='faq-list';list.setAttribute('role','tablist');list.setAttribute('aria-label','자주 묻는 질문 목록');
 var ans=document.createElement('div');ans.className='faq-answer';ans.setAttribute('role','tabpanel');ans.setAttribute('aria-live','polite');
 var data=items.map(function(d){return {q:d.querySelector('summary').textContent,a:d.querySelector('p').innerHTML};});
 data.forEach(function(x,i){var b=document.createElement('button');b.type='button';b.className='faq-q';b.setAttribute('role','tab');b.innerHTML='<span class="k">Q</span><span class="t"></span>';b.querySelector('.t').textContent=x.q;b.addEventListener('click',function(){sel(i);});list.appendChild(b);});
 function sel(i){[].forEach.call(list.children,function(b,j){b.setAttribute('aria-selected',String(i===j));});ans.innerHTML='<span class="k">A</span><h3></h3><p></p>';ans.querySelector('h3').textContent=data[i].q;ans.querySelector('p').innerHTML=data[i].a;ans.classList.remove('pop');void ans.offsetWidth;ans.classList.add('pop');}
 pane.appendChild(list);pane.appendChild(ans);faq.parentNode.insertBefore(pane,faq.nextSibling);faq.classList.add('has-pane');sel(0);
});
})();


/* 문자 버튼: 휴대폰 문자창에 기본 내용 자동으로 채우기 */
var PJ_TEL = '01029008802';
function pjSmsHref(body){
  var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  return 'sms:' + PJ_TEL + (ios ? '&' : '?') + 'body=' + encodeURIComponent(body);
}
(function(){
  var body = '안녕하세요, 파파장스 사이트 보고 연락드립니다.';
  function fix(a){
    var h = a.getAttribute('href') || '';
    if (h.indexOf('sms:') === 0 && h.indexOf('body=') < 0) a.setAttribute('href', pjSmsHref(body));
  }
  [].forEach.call(document.querySelectorAll('a[href^="sms:"]'), fix);
  document.addEventListener('click', function(e){ var a = e.target.closest && e.target.closest('a[href^="sms:"]'); if (a) fix(a); }, true);
})();

/* 30초 사진 안내 */
(function(){
var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
var $ = function(s, r){ return (r || document).querySelector(s); };
var $$ = function(s, r){ return [].slice.call((r || document).querySelectorAll(s)); };
var qz = $('[data-quiz]');
if (qz) {
  var Q = [
    { k: 'place', q: '작업이 필요한 곳은 어디인가요?', hint: '문제가 발생한 장소를 골라 주세요.', o: ['화장실·욕실 벽', '화장실·욕실 바닥', '현관', '베란다', '주방', '기타'] },
    { k: 'state', q: '타일이 어떤 상태인가요?', hint: '정확하지 않아도 괜찮습니다.', o: ['금이 가거나 깨졌어요', '들떠서 움직이거나 튀어나왔어요', '떨어져 나갔어요', '잘 모르겠어요'] },
    { k: 'count', q: '몇 장 정도인가요?', hint: '눈으로 보이는 만큼 골라 주세요.', o: ['1~2장 이상', '3~5장 이상', '10장 이상', '잘 모르겠어요'] },
    { k: 'spare', q: '따로 보관해 둔 같은 타일이 있나요?', hint: '아파트·빌라 관리사무소에 보관된 타일도 포함입니다.', o: ['있어요', '없어요', '잘 모르겠어요'] },
    { k: 'area', q: '어느 지역인가요?', hint: '서울·경기 전 지역 출장 가능합니다.', o: ['서울', '경기'] }
  ];
  var A = {}, step = 0;
  var stage = $('.q-stage', qz), stepEl = $('.q-step', qz), barEl = $('.q-bar i', qz), back = $('.q-back', qz);
  var esc = function(s){ return String(s).replace(/[&<>"]/g, function(c){ return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var render = function(dir){
    back.hidden = true;
    if (step >= Q.length) return result();
    var q = Q[step];
    stepEl.textContent = 'Q' + (step + 1) + ' / ' + Q.length;
    barEl.style.width = (step / Q.length * 100) + '%';
    stage.innerHTML = '<div class="q-card ' + (dir === 'l' ? 'in-l' : 'in-r') + '"><h3>' + esc(q.q) + '</h3><p class="hint">' + esc(q.hint) + '</p><div class="q-opts' + (q.one ? ' one' : '') + '">' +
      q.o.map(function(o, i){ return '<button type="button" class="q-opt' + (A[q.k] === o ? ' pick' : '') + '" data-v="' + esc(o) + '"><span class="k">' + 'ABCDEF'[i] + '</span>' + esc(o) + '</button>'; }).join('') + '</div>' + (step > 0 ? '<div class="q-nav"><button type="button" class="q-prev">← 이전 질문</button><button type="button" class="q-reset">처음부터 다시</button></div>' : '') + '</div>';
  };
  stage.addEventListener('click', function(e){
    var b = e.target.closest('.q-opt'); if (!b || stage.dataset.lock) return;
    stage.dataset.lock = 1;
    $$('.q-opt', stage).forEach(function(x){ x.classList.toggle('pick', x === b); });
    A[Q[step].k] = b.dataset.v;
    barEl.style.width = ((step + 1) / Q.length * 100) + '%';
    setTimeout(function(){ delete stage.dataset.lock; step++; render('r'); }, reduce ? 60 : 330);
  });
  back.addEventListener('click', function(){ if (step > 0) { step--; render('l'); } });
  stage.addEventListener('click', function(e){ if (e.target.closest('.q-prev')) { if (step > 0) { step--; render('l'); } } else if (e.target.closest('.q-reset')) { A = {}; step = 0; render('l'); } });
  var result = function(){
    stepEl.textContent = '완료'; barEl.style.width = '100%';
    var shots = ['문제 있는 타일 1장', '주변이 다 같이 보이게 넓게 찍은 사진 1장'];
    var sms = '안녕하세요, 파파장스 사이트 보고 연락드립니다.\n장소: ' + A.place + '\n상태: ' + A.state + '\n개수: ' + A.count + '\n보관 타일: ' + A.spare + '\n지역: ' + A.area;
    var href = pjSmsHref(sms);
    stage.innerHTML = '<div class="q-card q-res in-r"><span class="q-stamp" aria-hidden="true">견적 준비 끝</span><h3>문자를 보내주시면<br>최대한 빠르게 <span style="white-space:nowrap">답변 드리겠습니다.</span></h3>' +
      '<div class="q-boxes">' + '<div class="q-box"><b>찍어 보낼 사진</b><ol>' + shots.map(function(s){ return '<li>' + esc(s) + '</li>'; }).join('') + '</ol></div>' +
      '<div class="q-box"><b>보낼 문자 (자동으로 채워집니다)</b><div class="q-sms">' + esc(sms) + '</div></div></div>' +
      '<div class="q-nav"><button type="button" class="q-prev">← 이전 질문</button><button type="button" class="q-reset">처음부터 다시</button></div>' +
      '<div class="q-send"><a class="btn btn-main" href="' + href + '">문자 보내고 견적 받기</a></div>' +
      '<p class="q-pc">컴퓨터로 보고 계시면 버튼을 누르고 휴대폰으로 QR코드를 찍어 주세요.</p></div>';
  };
  render('r');
}
})();

/* bottom call bar: show only after the top call/sms buttons scroll out of view */
(function(){
  var bar = document.querySelector('.mbar'); if (!bar) return;
  function heroBtns(){
    var list = document.querySelectorAll('.hero .btns');
    for (var i = 0; i < list.length; i++) { if (list[i].offsetParent !== null) return list[i]; }
    return null;
  }
  var ticking = false;
  function check(){
    ticking = false;
    var b = heroBtns();
    var hide = !!b && b.getBoundingClientRect().bottom > 0;
    bar.classList.toggle('is-hidden', hide);
  }
  function onScroll(){ if (!ticking) { ticking = true; requestAnimationFrame(check); } }
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll);
  window.addEventListener('hashchange', function(){ setTimeout(check, 60); });
  window.addEventListener('pv-route', function(){ setTimeout(check, 60); });
  check();
})();

/* 방문자 수 (실시간·오늘·누적) - Firebase Realtime Database */
(function(){
  var els=document.querySelectorAll('[data-pj]');
  if(!els.length) return;
  var V='13.4.0', DB='https://papajangs-default-rtdb.asia-southeast1.firebasedatabase.app';
  function put(k,v){ for(var i=0;i<els.length;i++){ if(els[i].getAttribute('data-pj')===k) els[i].textContent=Number(v||0).toLocaleString('ko-KR'); } }
  var ls={get:function(k){try{return localStorage.getItem(k)}catch(e){return null}},set:function(k,v){try{localStorage.setItem(k,v)}catch(e){}},del:function(k){try{localStorage.removeItem(k)}catch(e){}}};
  var q=location.search;
  if(/[?&]owner=1/.test(q)) ls.set('pj_owner','1');
  if(/[?&]owner=0/.test(q)) ls.del('pj_owner');
  var skip=ls.get('pj_owner')==='1' || navigator.webdriver || /bot|crawl|spider|slurp|yeti|daum|lighthouse|headless|preview/i.test(navigator.userAgent);
  function day(){ return new Date(Date.now()+9*3600000).toISOString().slice(0,10); }
  var sid; try{ sid=sessionStorage.getItem('pj_sid'); }catch(e){}
  if(!sid || !/^[a-z0-9]{8,32}$/.test(sid)){ sid=(Math.random().toString(36).slice(2,12)+Date.now().toString(36)).replace(/[^a-z0-9]/g,'').slice(0,24); try{ sessionStorage.setItem('pj_sid',sid); }catch(e){} }
  function load(src){ return new Promise(function(ok,no){ var s=document.createElement('script'); s.src=src; s.async=true; s.onload=ok; s.onerror=no; document.head.appendChild(s); }); }
  function start(){
    load('https://www.gstatic.com/firebasejs/'+V+'/firebase-app-compat.js')
    .then(function(){ return load('https://www.gstatic.com/firebasejs/'+V+'/firebase-database-compat.js'); })
    .then(function(){
      var app=firebase.apps.length?firebase.app():firebase.initializeApp({databaseURL:DB});
      var db=app.database(), TS=firebase.database.ServerValue.TIMESTAMP;
      var offset=0; db.ref('.info/serverTimeOffset').on('value',function(s){ offset=s.val()||0; });
      var today=day();
      db.ref('stats').on('value',function(s){ var v=s.val()||{}; put('total',v.total); put('today',(v.days||{})[day()]); });
      db.ref('live').on('value',function(s){
        var n=0, now=Date.now()+offset;
        s.forEach(function(c){ var t=c.val(); if(typeof t==='number' && now-t<6*60000) n++; else if(typeof t==='number' && now-t>3600000) c.ref.remove(); });
        put('live',n);
      });
      if(skip) return;
      var me=db.ref('live/'+sid);
      db.ref('.info/connected').on('value',function(s){
        if(s.val()!==true) return;
        me.onDisconnect().remove().then(function(){ me.set(TS); });
      });
      setInterval(function(){ if(document.visibilityState==='visible') me.set(TS); },4*60000);
      if(ls.get('pj_vday')!==today){
        db.ref('stats/days/'+today).transaction(function(v){ return (v||0)+1; },function(err,ok){ if(!err&&ok){
          db.ref('stats/total').transaction(function(v){ return (v||0)+1; });
          ls.set('pj_vday',today);
        } });
      }
      var hideTimer=null;
      document.addEventListener('visibilitychange',function(){
        if(document.visibilityState==='hidden'){ hideTimer=setTimeout(function(){ db.goOffline(); },30000); }
        else { clearTimeout(hideTimer); db.goOnline(); }
      });
    }).catch(function(){});
  }
  if(document.readyState==='complete') setTimeout(start,300); else window.addEventListener('load',function(){ setTimeout(start,300); });
})();


/* PC에서 문자·전화 버튼을 누르면 QR코드 창 띄우기 (휴대폰은 그대로 문자창·전화 화면) */
(function(){
  var ua = navigator.userAgent;
  var mobile = /Android|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var fine = !window.matchMedia || matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (mobile || !fine) return;
  var TEL = '01029008802', SHOW = '010-2900-8802';
  var me = document.currentScript && document.currentScript.src;
  var qrSrc = me ? me.replace(/site\.js(\?.*)?$/, 'qrcode.js') : 'js/qrcode.js';
  var loading = null;
  function loadQR(cb){
    if (window.qrcode) return cb();
    if (!loading) { loading = []; var s = document.createElement('script'); s.src = qrSrc; s.onload = function(){ var l = loading; loading = null; l.forEach(function(f){ f(); }); }; document.head.appendChild(s); }
    loading.push(cb);
  }
  function svgFor(text){
    qrcode.stringToBytes = qrcode.stringToBytesFuncs['UTF-8'];
    var q = qrcode(0, 'M'); q.addData(text, 'Byte'); q.make();
    return q.createSvgTag({ cellSize: 6, margin: 2, scalable: true, alt: 'QR코드' });
  }
  if (!document.getElementById('pjqr-css')) { var st = document.createElement('style'); st.id = 'pjqr-css'; st.textContent = "html.pjqr-lock{overflow:hidden}\n.pjqr{position:fixed;inset:0;z-index:200;display:flex;align-items:center;justify-content:center;padding:20px;visibility:hidden;opacity:0;transition:opacity .2s,visibility .2s}\n.pjqr.on{visibility:visible;opacity:1}\n.pjqr-bg{position:absolute;inset:0;background:rgba(15,35,64,.55)}\n.pjqr-box{position:relative;width:340px;max-width:100%;background:var(--paper);border-radius:14px;padding:30px 28px 24px;text-align:center;box-shadow:0 24px 60px rgba(15,35,64,.35);border-top:6px solid var(--orange);transform:translateY(12px);transition:transform .2s}\n.pjqr.on .pjqr-box{transform:none}\n.pjqr.tel .pjqr-box{border-top-color:var(--navy)}\n.pjqr-x{position:absolute;right:10px;top:8px;width:36px;height:36px;border:0;background:none;font-size:28px;line-height:1;color:var(--muted);cursor:pointer;border-radius:50%}\n.pjqr-x:hover{background:var(--paper2);color:var(--ink)}\n.pjqr-kick{display:inline-block;font-size:12.5px;font-weight:800;color:var(--ink);background:var(--orange);padding:3px 10px;border-radius:999px;margin-bottom:10px}\n.pjqr.tel .pjqr-kick{background:var(--navy);color:#fff}\n.pjqr-box h3{font-size:21px;line-height:1.4;font-weight:800;color:var(--ink);margin-bottom:16px}\n.pjqr-code{width:220px;height:220px;margin:0 auto;background:#fff;border-radius:10px;padding:8px;box-shadow:inset 0 0 0 1.5px var(--line)}\n.pjqr-code svg{display:block;width:100%;height:100%}\n.pjqr-sub{font-size:14.5px;color:var(--muted);margin-top:14px;line-height:1.6}\n.pjqr-num{display:flex;align-items:center;justify-content:center;gap:10px;margin-top:16px;padding-top:16px;border-top:1px dashed var(--line)}\n.pjqr-num b{font-size:19px;color:var(--navy);letter-spacing:.2px}\n.pjqr-copy{border:0;cursor:pointer;font-family:inherit;font-weight:700;font-size:13px;padding:7px 12px;border-radius:999px;background:var(--white);color:var(--navy);box-shadow:inset 0 0 0 1.5px var(--line)}\n.pjqr-copy:hover{box-shadow:inset 0 0 0 1.5px var(--navy)}"; document.head.appendChild(st); }
  var box = null, lastFocus = null;
  function close(){ if (!box) return; box.classList.remove('on'); document.documentElement.classList.remove('pjqr-lock'); if (lastFocus) lastFocus.focus(); }
  function build(){
    box = document.createElement('div');
    box.className = 'pjqr';
    box.innerHTML = '<div class="pjqr-bg" data-x></div><div class="pjqr-box" role="dialog" aria-modal="true" aria-labelledby="pjqr-t">' +
      '<button type="button" class="pjqr-x" data-x aria-label="닫기">&times;</button>' +
      '<span class="pjqr-kick"></span><h3 id="pjqr-t">휴대폰 카메라로<br>QR코드를 찍어 주세요</h3>' +
      '<div class="pjqr-code"></div><p class="pjqr-sub"></p></div>';
    document.body.appendChild(box);
    box.addEventListener('click', function(e){ if (e.target.hasAttribute('data-x')) close(); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') close(); });
  }
  function open(kind, body){
    loadQR(function(){
      if (!box) build();
      var payload = kind === 'sms' ? 'SMSTO:' + TEL + ':' + (body || '') : 'tel:' + TEL;
      box.className = 'pjqr ' + kind;
      box.querySelector('.pjqr-kick').textContent = kind === 'sms' ? '문자 보내고 견적 받기' : '전화하기';
      box.querySelector('.pjqr-code').innerHTML = svgFor(payload);
      box.querySelector('.pjqr-sub').innerHTML = kind === 'sms' ? '문자창이 바로 열립니다.<br>사진을 붙여서 보내주세요.' : '전화 화면으로 바로 넘어갑니다.';
      lastFocus = document.activeElement;
      document.documentElement.classList.add('pjqr-lock');
      void box.offsetWidth; box.classList.add('on');
      box.querySelector('.pjqr-x').focus();
    });
  }
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a[href^="sms:"], a[href^="tel:"]');
    if (!a) return;
    e.preventDefault();
    var h = a.getAttribute('href') || '';
    if (h.indexOf('sms:') === 0) {
      var m = h.match(/[?&]body=([^&]*)/);
      open('sms', m ? decodeURIComponent(m[1]) : '안녕하세요, 파파장스 사이트 보고 연락드립니다.');
    } else open('tel');
  });
})();


/* 견적 질문 옆 순서 안내: 질문 중에는 1번, 결과 화면에서는 2·3번 켜기 */
(function(){
  var q = document.querySelector('[data-quiz]'), side = document.querySelector('.q-side');
  if (!q || !side) return;
  var st = q.querySelector('.q-step'), items = side.querySelectorAll('.q-flow li');
  function up(){
    var done = st.textContent.trim() === '완료';
    side.classList.toggle('is-done', done);
    [].forEach.call(items, function(li){
      var s = +li.getAttribute('data-s');
      li.classList.toggle('on', done ? s > 1 : s === 1);
      li.classList.toggle('done', done && s === 1);
    });
  }
  new MutationObserver(up).observe(st, { childList: true, characterData: true, subtree: true });
  up();
})();
