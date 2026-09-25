(function(){
var K='flo-cookies';
function get(){try{return localStorage.getItem(K)}catch(e){return null}}
function set(v){try{localStorage.setItem(K,v)}catch(e){}}
var box=document.getElementById('cookie');
function showMaps(){document.querySelectorAll('[data-map]').forEach(function(ph){var f=document.createElement('iframe');f.src=ph.getAttribute('data-map');f.title='Mapa do Residencial Florença Alto da Glória';f.loading='lazy';f.referrerPolicy='no-referrer-when-downgrade';ph.replaceWith(f)})}
if(box){
  if(!get())box.hidden=false;
  box.addEventListener('click',function(e){var b=e.target.closest('[data-cookie]');if(!b)return;set(b.getAttribute('data-cookie'));box.hidden=true;if(b.getAttribute('data-cookie')==='all')showMaps()});
}
document.querySelectorAll('[data-cookie-open]').forEach(function(b){b.addEventListener('click',function(){if(box)box.hidden=false})});
document.querySelectorAll('[data-map-show]').forEach(function(b){b.addEventListener('click',function(){set('all');if(box)box.hidden=true;showMaps()})});
if(get()==='all')showMaps();
var mb=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
if(mb&&nav){mb.addEventListener('click',function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)});nav.addEventListener('click',function(e){if(e.target.closest('a')){nav.classList.remove('open');mb.setAttribute('aria-expanded','false')}})}
})();
(function(){
var f=document.getElementById('job-form');if(!f)return;
var err=document.getElementById('job-err'),ok=document.getElementById('job-ok'),send=document.getElementById('job-send');
f.addEventListener('submit',function(e){e.preventDefault();
var v=function(id){return (document.getElementById(id).value||'').trim()};
if(!v('job-nome')||!v('job-tel')||!v('job-area')){err.hidden=false;ok.hidden=true;return}
err.hidden=true;
var msg='Olá! Vi o site do Residencial Florença e quero me candidatar a uma vaga.\n\nNome: '+v('job-nome')+'\nTelefone: '+v('job-tel')+'\nÁrea: '+v('job-area')+'\nUnidade de preferência: '+v('job-unidade')+(v('job-exp')?'\nExperiência: '+v('job-exp'):'')+'\n\nVou enviar meu currículo em PDF nesta conversa.';
send.href='https://wa.me/5541996585383?text='+encodeURIComponent(msg);ok.hidden=false;send.focus()});
})();