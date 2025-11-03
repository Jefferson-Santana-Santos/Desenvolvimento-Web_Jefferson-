// assets/js/main.js

import { initSPA } from './spa.js';
import { initFormValidation } from './form-validation.js';
import './masks.js';
import './menu.js';
import './modal.js';

document.addEventListener('DOMContentLoaded', () => {

  initSPA();

  
  if (location.hash.replace('#', '') === 'cadastro') {
    initFormValidation();
  }

  
  document.addEventListener('page:render', ({ detail }) => {
    if (detail.route === 'cadastro') {
      initFormValidation();
    }
  });
});
