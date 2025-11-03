document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.hamburger-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (!btn || !mobileNav) return;

  function open() {
    mobileNav.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    
    const first = mobileNav.querySelector('a, button, [tabindex]:not([tabindex="-1"])');
    if (first) first.focus();
  }

  function close() {
    mobileNav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    btn.focus();
  }

  btn.addEventListener('click', function(e){
    const isOpen = mobileNav.classList.contains('open');
    if (isOpen) close(); else open();
    e.stopPropagation();
  });

  
  document.addEventListener('click', function(e){
    if (mobileNav.classList.contains('open')) {
      const isInside = mobileNav.contains(e.target) || btn.contains(e.target);
      if (!isInside) close();
    }
  });


  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' || e.key === 'Esc') {
      if (mobileNav.classList.contains('open')) {
        close();
      }
    }
  });

  
  mobileNav.addEventListener('click', function(e){
    e.stopPropagation();
  });
});
