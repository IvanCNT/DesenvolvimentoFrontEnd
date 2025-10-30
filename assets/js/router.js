export function navigateTo(pageId) {
  const pages = document.querySelectorAll('[data-page]');
  pages.forEach(p => p.style.display = 'none');

  const target = document.querySelector(`[data-page="${pageId}"]`);
  if (target) target.style.display = 'block';
}

export function setupNavigation() {
  document.querySelectorAll('[data-link]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const pageId = link.getAttribute('data-link');
      navigateTo(pageId);
    });
  });
}
