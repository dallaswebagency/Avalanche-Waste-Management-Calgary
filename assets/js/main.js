(function(){
var d=document,b=d.body,h=d.querySelector('header.site');
function setH(){if(h)b.style.setProperty('--hh',(h.getBoundingClientRect().bottom)+'px')}
window.addEventListener('scroll',function(){if(h)h.classList.toggle('scrolled',window.scrollY>10)},{passive:true});
var bg=d.querySelector('.burger');
if(bg)bg.addEventListener('click',function(){var o=b.classList.toggle('menu-open');bg.setAttribute('aria-expanded',o);setH()});
d.querySelectorAll('.menu button.dd').forEach(function(btn){btn.addEventListener('click',function(){var li=btn.parentNode,o=li.classList.toggle('open');btn.setAttribute('aria-expanded',o)})});
d.addEventListener('keydown',function(e){if(e.key==='Escape'){b.classList.remove('menu-open');d.querySelectorAll('.menu li.open').forEach(function(l){l.classList.remove('open');l.querySelector('.dd').setAttribute('aria-expanded','false')})}});
d.querySelectorAll('.menu a').forEach(function(a){a.addEventListener('click',function(){b.classList.remove('menu-open')})});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});d.querySelectorAll('.reveal').forEach(function(el){io.observe(el)})}else d.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});
/* images that fail to load: keep dark fallback */
d.querySelectorAll('img[data-remote]').forEach(function(i){i.addEventListener('error',function(){i.style.visibility='hidden'})});
/* forms: compose an email (no server endpoint is configured yet) */
d.querySelectorAll('form[data-mail]').forEach(function(f){
 f.addEventListener('submit',function(e){e.preventDefault();
  var lines=[];new FormData(f).forEach(function(v,k){if(String(v).trim()){var l=f.querySelector('[name="'+k+'"]');var lab=l&&l.id&&f.querySelector('label[for="'+l.id+'"]');lines.push((lab?lab.textContent.replace('*','').trim():k)+': '+v)}});
  var sub=encodeURIComponent(f.getAttribute('data-subject')||'Website request');
  var body=encodeURIComponent(lines.join('\n'));
  var m=f.querySelector('.msg');if(m){m.classList.add('show');m.textContent='Opening your email app with your request. If nothing opens, call 403-461-1677 or email info@avalanchewm.com.'}
  window.location.href='mailto:info@avalanchewm.com?subject='+sub+'&body='+body;});
});
var q=new URLSearchParams(location.search).get('bin');var sel=d.getElementById('bin');
if(q&&sel){for(var i=0;i<sel.options.length;i++){if(sel.options[i].value.indexOf(q+' ')===0)sel.selectedIndex=i}}
/* bin chooser (recommendations come only from the site's own descriptions) */
var ch=d.getElementById('chooser'),out=d.getElementById('chooser-out');
if(ch&&out){var R={roof:'<b>30 or 40 yard.</b> Both are high capacity and suited to shingle tear-offs and large, fast commercial jobs (contractor and builder bins).',commercial:'<b>30 or 40 yard</b> for large commercial cleanouts. Ask about a permanent commercial bin if you produce a high volume of dry waste.',reno:'<b>20 yard.</b> It fits on one side of a standard residential driveway and is well suited to construction and renovation debris.',estate:'<b>12 yard.</b> Multi-purpose, large enough for most estate cleanouts and junk removal, and fits a standard parking stall or driveway.',unsure:'Call <b>403-461-1677</b> and we will help you pick the size and placement.'};
 ch.addEventListener('change',function(){out.innerHTML=R[ch.value]||''})}
d.querySelectorAll('[data-year]').forEach(function(e){e.textContent=new Date().getFullYear()});
})();
