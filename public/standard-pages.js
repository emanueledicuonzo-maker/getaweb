
(function(){
  var toggle=document.querySelector('[data-nav-toggle]');
  var menu=document.querySelector('[data-mobile-nav]');
  if(toggle&&menu){toggle.addEventListener('click',function(){menu.classList.toggle('open');});}
  var banner=document.getElementById('cookie-banner');
  if(banner){
    var choice=localStorage.getItem('getaweb_cookie_choice');
    if(!choice) banner.hidden=false;
    banner.querySelectorAll('[data-cookie]').forEach(function(btn){
      btn.addEventListener('click',function(){
        localStorage.setItem('getaweb_cookie_choice', btn.getAttribute('data-cookie'));
        banner.hidden=true;
      });
    });
  }
})();
