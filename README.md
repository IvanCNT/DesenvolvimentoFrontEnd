# DesenvolvimentoFrontEnd
Matéria de Outubro/2025

# ONG Amigos do Rivotril — Plataforma Web

Aplicação web desenvolvida para apoiar as ações da ONG Amigos do Rivotril, promovendo inclusão vegetal por meio de projetos hortalícios, voluntariado, campanhas de doação e transparência institucional.

---

## Visão Geral

- SPA (Single Page Application) com navegação dinâmica
- Formulários com validação nativa e feedback ao usuário
- Layout responsivo e acessível (WCAG 2.1 AA)
- Otimizado para produção com recursos minificados e imagens comprimidas
- Versionamento semântico e documentação técnica completa

---

## Tecnologias Utilizadas

- HTML5 semântico
- CSS3 modular (Grid, Flexbox, Variables)
- JavaScript ES6 modular
- Git + GitHub (GitFlow)
- Imagens em formato `.webp`
- Chart.js (versão SPA)
- API ViaCEP (versão JS)

---

## Estrutura de Pastas

```text
ong-plataforma/
├── index.html
├── sobre.html
├── projetos.html
├── voluntariado.html
├── doacoes.html
├── transparencia.html
├── contato.html
├── blog.html
├── README.md
└── assets/
    ├── css/
    │   ├── style.css
    │   ├── variables.css
    │   ├── layout.css
    │   ├── components.css
    │   └── navigation.css
    ├── js/
    │   ├── main.js
    │   ├── router.js
    │   ├── templates.js
    │   └── formValidator.js
    ├── img/
    │   ├── projeto1.jpg
    │   ├── projeto2.jpg
    │   ├── ... até projeto20.jpg
    |   └── relatorio.pdf
```

Instalação e Execução Local
Clone o repositório:
bash
git clone [https://github.com/seu-usuario/ong-plataforma.git](https://github.com/IvanCNT/DesenvolvimentoFrontEnd/)
cd ong-plataforma
Abra o arquivo index.html no navegador ou use Live Server (VS Code).

Deploy em Produção
Hospedagem recomendada: GitHub

Para GitHub Pages:
Suba o projeto na branch main
Vá em Settings → Pages → Source: main → /root
Acesse: [https://seu-usuario.github.io/ong-plataforma](https://github.com/IvanCNT/DesenvolvimentoFrontEnd/)

Acessibilidade (WCAG 2.1 AA)
Navegação por teclado em todos os menus e formulários
Estrutura semântica com uso de <header>, <nav>, <main>, <section>, <footer>
Contraste mínimo de 4.5:1 para texto normal
Suporte a leitores de tela com aria-label, role, tabindex
Modo escuro e alto contraste via CSS (prefers-color-scheme)

Otimização para Produção
CSS, JS e HTML minificados
Imagens convertidas para .webp e comprimidas
Código modular e sem dependências externas pesadas
Redução de requisições HTTP

Versionamento e GitFlow
Branches:
main → produção
Branch ExperienciaPratica_1 → desenvolvimento Atividade 1
Branch ExperienciaPratica_2 → desenvolvimento Atividade 2
Branch ExperienciaPratica_3 → desenvolvimento Atividade 3
Branch main → versões estáveis

Releases
v1.0.0 — Estrutura inicial em HTML5 Semântica e Formulários Complexos e Interativos.
v1.1.0 — Acessibilidade e Sistema de Design aprimorados, Layout Responsivo com Flexbox e Grid inclusão CSS organizada.
v1.2.0 — Manipulação DOM, implementação de sistema de Single Page Application (SPA) básico e templates Javascript.

v2.0.0 — Versão final para produção

📚 Créditos
Desenvolvido por Ivan Carlos N. T. — Projeto acadêmico para consolidação de práticas profissionais em desenvolvimento web.

📄 Licença
Este projeto está licenciado sob a MIT License.
