#  ONG Esperança — Aplicação SPA

Este projeto é uma aplicação **Single Page Application (SPA)** desenvolvida como atividade prática.  
O objetivo é apresentar a ONG Esperança, seus projetos sociais, formulário de cadastro de voluntários/doadores e sistema de doações.

---

##  Funcionalidades

- **SPA (Single Page Application)**  
  Navegação entre páginas (`Início`, `Projetos`, `Cadastro`) sem recarregar o navegador.

- **Manipulação do DOM**  
  - Menu mobile com botão hambúrguer.  
  - Modal de doação com abertura/fechamento dinâmico.  
  - Toast de confirmação após envio de formulário.  

- **Formulário com validação**  
  - Verificação de consistência de dados (nome, e-mail, CPF, telefone, etc.).  
  - Exibição de mensagens de erro e foco no primeiro campo inválido.  
  - Máscaras para CPF, telefone e CEP.  
  - Armazenamento dos cadastros no `localStorage`.

- **Design responsivo**  
  - Grid flexível com breakpoints (`sm`, `md`, `lg`).  
  - Layout adaptado para desktop e mobile.  
  - Dark mode automático via `prefers-color-scheme`.

---



```
├── 📁 assets
│   ├── 📁 css
│   │   ├──  00-variables.css
│   │   ├──  01-base.css
│   │   ├──  02-layout.css
│   │   ├──  03-components.css
│   │   ├──  04-utils.css
│   │   └──  style.css
│   └── 📁 js
│       ├── 📄 form-validation.js
│       ├── 📄 main.js
│       ├── 📄 masks.js
│       ├── 📄 menu.js
│       ├── 📄 modal.js
│       ├── 📄 spa.js
│       └── 📄 templates.js
├── 📁 img
│   ├── 🖼️ doacoes.jpg
│   ├── 🖼️ doacoes.png
│   ├── 🖼️ equipe2.jpg
│   ├── 🖼️ equipe2.png
│   ├── 🖼️ imagem1.png
│   ├── 🖼️ imagem2.jpg
│   ├── 🖼️ projeto-educacao.jpg
│   ├── 🖼️ projeto-educacao.png
│   ├── 🖼️ projeto-saude.jpg
│   └── 🖼️ projeto-saude.png
├──  cadastro.html
├──  index.html
└──  projetos.html
```

