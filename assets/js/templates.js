export function renderProjectCard(project) {
  return `
    <article class="card">
      <h3>${project.nome}</h3>
      <p>${project.descricao}</p>
      <span class="badge">${project.area}</span>
    </article>
  `;
}
