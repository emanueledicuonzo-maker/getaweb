(function(){
  const body = document.body;
  const headerBtn = document.getElementById('menu-toggle') || document.getElementById('menu-btn');
  const closeBtn = document.getElementById('menu-close');
  const menu = document.getElementById('mobile-menu-new') || document.getElementById('mobile-menu');
  const icon = document.getElementById('menu-icon');

  function setMenu(open){
    if(!headerBtn || !menu) return;
    headerBtn.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
    menu.classList.toggle('hidden', !open);
    if(icon){ icon.textContent = open ? 'close' : 'menu'; }
    if(body){ body.classList.toggle('menu-open', open); }
  }
  if(headerBtn && menu){
    setMenu(false);
    headerBtn.addEventListener('click', function(){
      const open = headerBtn.getAttribute('aria-expanded') !== 'true';
      setMenu(open);
    });
    if(closeBtn){ closeBtn.addEventListener('click', function(){ setMenu(false); }); }
  }

  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  gtag('js', new Date());

  const consentKey = 'getaweb_cookie_consent';
  const banner = document.getElementById('cookie-banner');
  let analyticsLoaded = false;
  function loadAnalytics(){
    if(analyticsLoaded || document.querySelector('script[data-ga4="true"]')) return;
    analyticsLoaded = true;
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-E0DESSTBD9';
    s.dataset.ga4 = 'true';
    document.head.appendChild(s);
    gtag('config', 'G-E0DESSTBD9', { page_path: location.pathname });
  }
  function applyConsent(mode){
    const granted = mode === 'accept';
    gtag('consent', 'update', {
      analytics_storage: granted ? 'granted' : 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
    if(granted) loadAnalytics();
  }
  const saved = localStorage.getItem(consentKey);
  if(saved){
    applyConsent(saved);
  } else if (banner){
    banner.hidden = false;
  }
  document.querySelectorAll('[data-cookie]').forEach(function(btn){
    btn.addEventListener('click', function(){
      const mode = btn.getAttribute('data-cookie') === 'accept' ? 'accept' : 'reject';
      localStorage.setItem(consentKey, mode);
      applyConsent(mode);
      if(banner) banner.hidden = true;
    });
  });

  document.querySelectorAll('a[href^="tel:"], a[href^="mailto:"], a[href*="wa.me"], .btn').forEach(function(el){
    el.addEventListener('click', function(){
      const href = el.getAttribute('href') || '';
      let evt = 'click_generic';
      if(href.startsWith('tel:')) evt = 'phone_click';
      else if(href.startsWith('mailto:')) evt = 'email_click';
      else if(href.includes('wa.me')) evt = 'whatsapp_click';
      else if(el.classList.contains('btn')) evt = 'cta_click';
      if(typeof gtag === 'function'){
        gtag('event', evt, { link_url: href, link_text: (el.textContent || '').trim() });
      }
    });
  });
})();
