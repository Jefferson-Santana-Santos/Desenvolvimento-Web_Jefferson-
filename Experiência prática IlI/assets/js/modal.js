// assets/js/modal.js

function bindModal() {
  const modal = document.getElementById('modal-doar');
  const openBtn = document.querySelector('[data-modal-open="modal-doar"]');
  if (!modal || !openBtn) return; 

  const closeBtns = modal.querySelectorAll('[data-modal-close]');

  function openModal() {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

   
    const focusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable) focusable.focus();
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', function (e) {
    e.preventDefault();
    openModal();
  });

  closeBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      closeModal();
    });
  });

  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function (e) {
    if ((e.key === 'Escape' || e.key === 'Esc') && modal.classList.contains('open')) {
      closeModal();
    }
  });
}


document.addEventListener('DOMContentLoaded', bindModal);


document.addEventListener('page:render', ({ detail }) => {
  if (detail.route === 'projetos') {
    bindModal();
  }
});
