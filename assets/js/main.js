import { setupNavigation, navigateTo } from './router.js';
import { renderProjectCard } from './templates.js';
import { attachValidation } from './formValidator.js';

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  navigateTo('home');

  const projetos = [
    { nome: 'Educação Comunitária', descricao: 'Aulas e oficinas para estudantes.', area: 'Educação' },
    { nome: 'Saúde na Comunidade', descricao: 'Campanhas e atendimentos médicos.', area: 'Saúde' }
  ];

  const container = document.getElementById('projetos-container');
  if (container) {
    container.innerHTML = projetos.map(renderProjectCard).join('');
  }

  const form = document.getElementById('form-contato');
  if (form) attachValidation(form);
});
