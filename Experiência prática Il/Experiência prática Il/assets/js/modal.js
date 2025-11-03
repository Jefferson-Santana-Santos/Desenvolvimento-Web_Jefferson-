document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modal-doar');
  const openBtn = document.querySelector('[data-modal-open="modal-doar"]');
  const closeBtns = modal.querySelectorAll('[data-modal-close]');

  function openModal() {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (openBtn) {
    openBtn.addEventListener('click', function (e) {
      openModal();
      e.preventDefault();
    });
  }

  closeBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      closeModal();
      e.preventDefault();
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
});
