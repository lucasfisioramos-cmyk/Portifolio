# Portfólio Acadêmico & Dev — Lucas Lemes Ramos

Portfólio pessoal e acadêmico desenvolvido com **Next.js (App Router)**, **React**, **TypeScript** e CSS próprio, estruturado conforme o roteiro acadêmico do curso de **Tecnólogo em Desenvolvimento de Software Multiplataforma (DSM)** da **FATEC São José dos Campos** (2026–2028) e configurado para exportação estática e publicação no **GitHub Pages** via **GitHub Actions**.

---

## Sobre Mim

- **Nome:** Lucas Lemes Ramos
- **Posicionamento:** Desenvolvedor Full Stack em Formação
- **Formação atual:** Tecnólogo em Desenvolvimento de Software Multiplataforma — FATEC São José dos Campos (Ingresso: 1º semestre/2026 • Previsão de conclusão: 2º semestre/2028)
- **Objetivos:** Desenvolvimento de software Full Stack, com foco em construir soluções de tecnologia aplicada à saúde
- **Áreas de interesse:** Backend, APIs REST / RESTful, Desenvolvimento Web, DevOps e CI/CD
- **Trajetória prévia:** Graduação em Fisioterapia (2015), Pós-Graduação em Dor (2021) e atuação clínica entre 2014 e 2025

---

## Estrutura de Rotas

| Rota | Página | Descrição |
| :--- | :--- | :--- |
| `/` | **Home** | Dashboard geral com apresentação pessoal, stack técnica agrupada (*Desenvolvedor autônomo*), resumo da trajetória/eventos, grid completo de projetos e atalho para contato. |
| `/sobre` | **Sobre** | História de transição de carreira, linha do tempo acadêmica e profissional, idiomas (Inglês Intermediário), diferenciais e registros de participações em eventos. |
| `/projetos` | **Projetos** | Índice separado por categorias: **Projetos Acadêmicos (API e Disciplinas)**, **Projetos Profissionais** e **Projetos Pessoais**. |
| `/projetos/[slug]` | **Detalhe do Projeto** | Páginas estáticas geradas com `generateStaticParams()`, detalhando problema resolvido, solução/arquitetura, contribuições pessoais, hard/soft skills, stack completa, mídia e link para o repositório. |
| `/contato` | **Contato** | Canais diretos (LinkedIn, GitHub, E-mail e WhatsApp) e formulário integrado ao Formspree. |

---

## Projetos no Portfólio

### Projetos Acadêmicos (API e Disciplinas)

- **Radar Cidadão** *(API — 1º Semestre DSM / FATEC SJC • Parceria: Prof. Fernando Masanori)* — [Repositório](https://github.com/lucasfisioramos-cmyk/Radar-Cidadao-Froggrammers)
- **Sistema de Gestão de Ordens de Serviço — Zip Coders** *(API — 2º Semestre DSM / FATEC SJC • Parceria: ALTAVE)* — [Repositório](https://github.com/lucasfisioramos-cmyk/Zip-Coders)
- **Plataforma de Logística Reversa de Ativos Eletrônicos** *(Técnicas de Programação — Avaliação Individual)* — [Repositório](https://github.com/lucasfisioramos-cmyk/AV3)
- **API REST de Controle de Produção com Estoque e Relatórios** *(Desenvolvimento Web 2 — Atividade II)* — [Repositório](https://github.com/lucasfisioramos-cmyk/Atividade-II)
- **Sistema de Vendas com Comissões, Metas e Performance** *(Desenvolvimento Web 2 — Atividade III)* — [Repositório](https://github.com/lucasfisioramos-cmyk/Atividade-III)

### Projetos Profissionais

- Em transição de carreira da área clínica (Fisioterapia, 2015–2025) para Tecnologia, buscando a primeira oportunidade de estágio ou atuação profissional em Desenvolvimento de Software.

### Projetos Pessoais

- **Fisiocontrol — Sistema de Gestão Clínica** *(HealthTech)* — [Repositório](https://github.com/lucasfisioramos-cmyk/fisiocontrol)
- **Inventário de Dor Multidimensional West Haven-Yale — WHYMPI** *(HealthTech)* — [Repositório](https://github.com/lucasfisioramos-cmyk/inventario-de-dor-multidimensional-west-haven-yale)
- **AutoFix Pro — Gestão de Oficina** — [Repositório](https://github.com/lucasfisioramos-cmyk/AutoFix-Pro---Gestao-de-Oficina)

---

## Tecnologias e Arquitetura do Portfólio

- **Framework:** Next.js (`^16.3.5`, App Router) com `output: 'export'`
- **UI & Linguagem:** React 18 e TypeScript (`strict: true`)
- **Estilização & Ícones:** CSS puro em `src/app/globals.css` (sem frameworks externos) e `bootstrap-icons` via CDN
- **Dados centralizados:** `src/lib/data.ts` (tipagem estrita e helper `imagePath()` com `NEXT_PUBLIC_BASE_PATH`)
- **Deploy automatizado:** GitHub Actions (`.github/workflows/deploy.yaml`) publicando a pasta estática `out/` no GitHub Pages com `GITHUB_PAGES=true`, `basePath: '/Portifolio'`, `trailingSlash: true` e `out/.nojekyll`

---

## Como Executar Localmente

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev
```

### Gerar Exportação Estática (`out/`)

```bash
# Build padrão (raiz '/')
npm run build

# Build simulando o subpath '/Portifolio' do GitHub Pages (Linux/macOS)
GITHUB_PAGES=true npm run build
```

No Windows (PowerShell):

```powershell
$env:GITHUB_PAGES='true'; npm run build
```

---

## Estrutura de Pastas

```text
.
├── .github/workflows/deploy.yaml   # Pipeline de build e deploy no GitHub Pages
├── public/imagens/                 # Imagens estáticas servidas via imagePath()
├── src/
│   ├── app/
│   │   ├── contato/page.tsx        # Página de contato
│   │   ├── projetos/
│   │   │   ├── [slug]/page.tsx     # Detalhes estáticos de cada projeto
│   │   │   └── page.tsx            # Índice de projetos por categoria
│   │   ├── sobre/page.tsx          # Trajetória, currículo, idiomas e eventos
│   │   ├── globals.css             # Tokens e estilos globais
│   │   ├── layout.tsx              # Layout raiz com Navbar, Footer e Bootstrap Icons
│   │   └── page.tsx                # Home (dashboard geral)
│   ├── components/
│   │   ├── Carousel.tsx            # Carrossel de imagens dos projetos
│   │   ├── ContactForm.tsx         # Formulário integrado ao Formspree + WhatsApp
│   │   ├── Footer.tsx              # Rodapé com links sociais
│   │   ├── Navbar.tsx              # Navegação principal responsiva
│   │   └── ProjectCard.tsx         # Card reutilizável de projeto
│   └── lib/
│       └── data.ts                 # Dados tipados centralizados do portfólio
├── next.config.js                  # Configuração de exportação estática e basePath
└── tsconfig.json                   # Configuração TypeScript
```

---

## Contato

- **LinkedIn:** [Lucas Lemes Ramos](https://linkedin.com/in/lucas-lemes-ramos-9a9661251)
- **GitHub:** [@lucasfisioramos-cmyk](https://github.com/lucasfisioramos-cmyk)
- **E-mail:** `lucasfisio.ramos@gmail.com`
