# Manual do Usuário do Plann.er

Este repositório contém a documentação oficial e manual do usuário para o [Plann.er](https://github.com/gustavodeazevedo/plann.er), uma aplicação web para planejamento colaborativo de viagens.

## 📱 Totalmente Responsivo

Este manual foi projetado para ser totalmente responsivo, garantindo uma experiência de usuário perfeita em qualquer dispositivo:

- **Desktop**: Experiência completa com navegação lateral e recursos avançados
- **Tablet**: Layout otimizado para telas médias
- **Smartphone**: Interface adaptada para telas pequenas e interações por toque

### Recursos Responsivos Implementados

- **Meta tags responsivas**: Configuração correta do viewport para diferentes dispositivos
- **Imagens otimizadas**: Componente `Picture` para carregamento eficiente
- **Tabelas responsivas**: Componente `ResponsiveTable` para visualização em qualquer tela
- **Layout adaptativo**: Ajuste automático de menus e conteúdo
- **Tipografia responsiva**: Tamanhos de fonte otimizados para legibilidade
- **Área de toque aumentada**: Melhoria de acessibilidade para interações por toque
- **Estilos de impressão**: Formatação otimizada para impressão

## 🚀 Estrutura do Projeto

```
.
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/           # Imagens e recursos estáticos
│   ├── components/       # Componentes Astro reutilizáveis
│   │   ├── Layout.astro  # Layout principal (responsivo)
│   │   ├── Picture.astro # Componente de imagem responsiva
│   │   └── ResponsiveTable.astro # Tabelas responsivas
│   ├── content/
│   │   └── docs/         # Conteúdo da documentação em Markdown
│   ├── scripts/
│   │   └── responsive.js # Funcionalidades responsivas
│   └── styles/
│       ├── custom.css    # Estilos customizados
│       └── print.css     # Estilos para impressão
├── astro.config.mjs
└── tailwind.config.js
```

## 📚 Guias de Referência

O manual inclui páginas de referência específicas sobre responsividade:

- **Componentes Responsivos**: Guia sobre como usar componentes responsivos
- **Visualização Responsiva**: Demonstração de como o manual se adapta a diferentes dispositivos

## 🧪 Testando a Responsividade

Para testar a responsividade do manual:

1. Clone este repositório
2. Instale as dependências com `npm install`
3. Execute `npm run dev` para iniciar o servidor de desenvolvimento
4. Teste em diferentes dispositivos ou use as ferramentas de emulação de dispositivo do seu navegador

## 📋 Boas Práticas para Conteúdo Responsivo

Ao adicionar novo conteúdo ao manual:

- Use os componentes responsivos fornecidos para imagens e tabelas
- Prefira parágrafos curtos para melhor legibilidade em dispositivos móveis
- Teste o conteúdo em diferentes tamanhos de tela
- Utilize cabeçalhos hierárquicos para estruturar o conteúdo

## 🔧 Tecnologias Utilizadas

- [Astro](https://astro.build)
- [Starlight](https://starlight.astro.build)
- [Tailwind CSS](https://tailwindcss.com)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
