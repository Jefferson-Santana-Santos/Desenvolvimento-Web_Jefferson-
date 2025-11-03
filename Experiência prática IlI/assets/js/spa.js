import { templates } from './templates.js';

export function initSPA() {
  const root = document.getElementById('conteudo');
  if (!root) return;

  let currentRoute = '';

  function render(route) {
    const key = (route || 'home').toLowerCase();
    if (key === currentRoute) return;
    currentRoute = key;

    
    root.innerHTML = templates[key] || templates.home;

   
    document.dispatchEvent(new CustomEvent('page:render', { detail: { route: key } }));

   
    if (key === 'projetos-andamento') {
      const section = document.getElementById('titulo-lista-projetos');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
    if (key === 'projetos-doacoes') {
      const section = document.getElementById('titulo-doacoes');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  window.addEventListener('hashchange', () => {
    render(location.hash.replace('#', ''));
  });

  render(location.hash.replace('#', '') || 'home');
}
