const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export const imagePath = (path: string) => `${basePath}${path}`

export interface Profile {
  name: string
  title: string
  currentCourse: string
  institution: string
  academicPeriod: string
  academicSummary: string
  objectives: string
  interests: string[]
  bio: string
  photo: string
  github: string
  linkedin: string
  curriculo: string
  whatsapp: string
  email: string
  formspree: string
  available: boolean
}

export interface TechItem {
  label: string
  icon: string
  color?: string
  style?: { color: string }
}

export interface TechGroup {
  group: string
  icon: string
  level: 'Desenvolvedor autônomo'
  items: TechItem[]
}

export interface TimelineEntry {
  period: string
  title: string
  description: string
  details?: string
  highlight?: boolean
}

export interface LanguageProficiency {
  language: string
  level: string
  certification: string
  details: string
}

export interface Skill {
  icon: string
  color: string
  title: string
  desc: string
}

export interface EventRecord {
  id: string
  title: string
  dateOrLocation: string
  description: string
  image: string | null
  imageAlt: string
}

export interface ProjectSlide {
  src: string
  alt: string
  title: string
  caption: string
}

export type ProjectCategory = 'academico' | 'pessoal'

export interface Project {
  slug: string
  category: ProjectCategory
  categoryBadge: string
  categoryLabel: string
  title: string
  partner?: string
  shortDescription: string
  problem: string
  solution: string
  contributions: string
  hardSkills: string
  softSkills?: string
  stack: string[]
  coverImage?: string
  coverIcon: string
  slides?: ProjectSlide[]
  youtubeEmbedUrl?: string
  mediaNote?: string
  repoUrl: string
}

export const profile: Profile = {
  name: 'Lucas Lemes Ramos',
  title: 'Desenvolvedor Full Stack em Formação',
  currentCourse: 'Tecnólogo em Desenvolvimento de Software Multiplataforma',
  institution: 'FATEC São José dos Campos',
  academicPeriod: 'Ingresso: 1º semestre/2026 • Previsão de conclusão: 2º semestre/2028',
  academicSummary:
    'Tecnólogo em Desenvolvimento de Software Multiplataforma — FATEC São José dos Campos (Ingresso: 1º semestre/2026 • Previsão de conclusão: 2º semestre/2028)',
  objectives:
    'Direcionados ao desenvolvimento de software Full Stack, com foco em construir soluções de tecnologia aplicada à saúde.',
  interests: ['Backend', 'APIs REST / RESTful', 'Desenvolvimento Web', 'DevOps', 'CI/CD'],
  bio: 'Estudante de Desenvolvimento de Software Multiplataforma na FATEC São José dos Campos (2026–2028), com objetivos direcionados ao desenvolvimento Full Stack e foco em soluções de tecnologia aplicada à saúde.',
  photo: imagePath('/imagens/Lucas.jpg'),
  github: 'https://github.com/lucasfisioramos-cmyk',
  linkedin: 'https://linkedin.com/in/lucas-lemes-ramos-9a9661251',
  curriculo:
    'https://docs.google.com/document/d/11av16g3ULE6IDCH57pB_RI-YT67q4EjnH7cYi1jwbKg/edit?usp=sharing',
  whatsapp:
    'https://wa.me/5512988342587?text=Olá%20Lucas,%20quero%20saber%20mais%20sobre%20seus%20projetos!',
  email: 'lucasfisio.ramos@gmail.com',
  formspree: 'https://formspree.io/f/mbdekbwd',
  available: true,
}

export const techGroups: TechGroup[] = [
  {
    group: 'Linguagens',
    icon: 'bi-code-slash',
    level: 'Desenvolvedor autônomo',
    items: [
      { icon: 'bi-filetype-py', color: 'text-primary', label: 'Python' },
      { icon: 'bi-filetype-js', color: 'text-primary', label: 'JavaScript / TypeScript' },
      { icon: 'bi-filetype-html', color: 'text-danger', label: 'HTML5' },
      { icon: 'bi-filetype-css', color: 'text-primary', label: 'CSS3' },
    ],
  },
  {
    group: 'Frontend & UI',
    icon: 'bi-window',
    level: 'Desenvolvedor autônomo',
    items: [
      { icon: 'bi-code-square', color: 'text-info', label: 'React' },
      { icon: 'bi-layers', color: 'text-dark', label: 'Next.js' },
      { icon: 'bi-lightning-charge', color: 'text-primary', label: 'Vite' },
      { icon: 'bi-bootstrap', color: '', label: 'Bootstrap', style: { color: '#7952b3' } },
    ],
  },
  {
    group: 'Backend & APIs',
    icon: 'bi-server',
    level: 'Desenvolvedor autônomo',
    items: [
      { icon: 'bi-terminal', color: 'text-success', label: 'Node.js' },
      { icon: 'bi-diagram-3', color: 'text-dark', label: 'Express' },
      { icon: 'bi-speedometer2', color: 'text-primary', label: 'Fastify' },
      { icon: 'bi-droplet', color: 'text-info', label: 'Flask' },
    ],
  },
  {
    group: 'Bancos de Dados & ORMs',
    icon: 'bi-database',
    level: 'Desenvolvedor autônomo',
    items: [
      { icon: 'bi-database', color: 'text-success', label: 'MySQL' },
      { icon: 'bi-database-check', color: 'text-primary', label: 'PostgreSQL' },
      { icon: 'bi-box-seam', color: 'text-dark', label: 'Prisma' },
      { icon: 'bi-table', color: 'text-info', label: 'Sequelize' },
    ],
  },
  {
    group: 'Versionamento & Infra',
    icon: 'bi-git',
    level: 'Desenvolvedor autônomo',
    items: [{ icon: 'bi-git', color: 'text-danger', label: 'Git & GitHub' }],
  },
]

export const timeline: TimelineEntry[] = [
  {
    period: '2026 – 2028 (Previsão)',
    title: 'Tecnólogo em Desenvolvimento de Software Multiplataforma — FATEC São José dos Campos',
    description: 'Ingresso: 1º semestre de 2026 • Conclusão prevista: 2º semestre de 2028.',
    details: 'Foco: Full Stack, Backend, APIs REST/RESTful, Bancos de Dados, DevOps e CI/CD.',
    highlight: true,
  },
  {
    period: '2021 (1º Semestre)',
    title: 'Pós-Graduação em Dor',
    description: 'Concluída no 1º semestre de 2021.',
  },
  {
    period: '2015 (2º Semestre)',
    title: 'Graduação em Fisioterapia',
    description: 'Concluída no 2º semestre de 2015.',
  },
  {
    period: '2014 – 2025',
    title: 'Atuação Clínica como Fisioterapeuta',
    description:
      'Mais de 10 anos de experiência clínica, base para pensamento analítico, tomada de decisão baseada em evidências e entendimento de fluxos na área da saúde.',
  },
]

export const languages: LanguageProficiency[] = [
  {
    language: 'Inglês',
    level: 'Intermediário',
    certification: 'Sem certificação formal',
    details: 'Maior domínio em leitura e escrita.',
  },
]

export const skills: Skill[] = [
  {
    icon: 'bi-database-check',
    color: 'text-success',
    title: 'Pensamento Analítico',
    desc: 'Experiência em analisar problemas complexos, identificar requisitos clínicos e estruturar soluções de forma lógica e organizada.',
  },
  {
    icon: 'bi-kanban',
    color: 'text-info',
    title: 'Desenvolvimento Backend',
    desc: 'Desenvolvimento de aplicações web utilizando Python, Flask, SQL, Docker e Git, com foco em organização do código e boas práticas.',
  },
  {
    icon: 'bi-heart-pulse',
    color: 'text-danger',
    title: 'Aprendizado Contínuo',
    desc: 'Construção de projetos próprios para aprofundar conhecimentos em arquitetura de software, APIs REST, bancos de dados e desenvolvimento web.',
  },
]

export const events: EventRecord[] = [
  {
    id: 'feira-solucoes-fatec',
    title: 'Feira de Soluções da FATEC',
    dateOrLocation: '25/06/2026',
    description: 'Apresentação do projeto acadêmico Radar Cidadão.',
    image: null,
    imageAlt: 'Feira de Soluções da FATEC — apresentação do projeto Radar Cidadão',
  },
  {
    id: 'maratona-programacao-fatec',
    title: 'Maratona de Programação da FATEC SJC (Fase Interna)',
    dateOrLocation: 'FATEC São José dos Campos',
    description: 'Participação na fase interna da Maratona de Programação da FATEC SJC.',
    image: null,
    imageAlt: 'Maratona de Programação da FATEC SJC (Fase Interna)',
  },
  {
    id: 'innovation-week-2026',
    title: 'Innovation Week 2026',
    dateOrLocation: '25 a 27/08/2026 — Parque de Inovação Tecnológica São José dos Campos (PIT)',
    description:
      'Participação no evento de inovação e tecnologia no Parque de Inovação Tecnológica de São José dos Campos.',
    image: null,
    imageAlt: 'Innovation Week 2026 no PIT São José dos Campos',
  },
  {
    id: 'seminario-konatus',
    title: 'Seminário da Empresa Konatus',
    dateOrLocation:
      'Tema: IA e Gêmeos Digitais aplicados ao desenvolvimento e certificação de sistemas críticos',
    description:
      'Participação em seminário técnico promovido pela empresa Konatus sobre inteligência artificial e gêmeos digitais em sistemas críticos.',
    image: null,
    imageAlt: 'Seminário da Empresa Konatus sobre IA e Gêmeos Digitais',
  },
]

export const fisiocontrolSlides: ProjectSlide[] = [
  {
    src: imagePath('/imagens/dashboard.png'),
    alt: 'Dashboard',
    title: 'Dashboard',
    caption: 'Reúne informações e métricas importantes da clínica.',
  },
  {
    src: imagePath('/imagens/lista_pacientes.png'),
    alt: 'Pacientes',
    title: 'Todos os Pacientes',
    caption: 'Visualização de profiles e atalho para novos cadastros.',
  },
  {
    src: imagePath('/imagens/formulario_pacientes.png'),
    alt: 'Formulário de Pacientes',
    title: 'Cadastro de Pacientes',
    caption: 'Formulário intuitivo e dinâmico.',
  },
  {
    src: imagePath('/imagens/agendamentos.png'),
    alt: 'Agendamentos',
    title: 'Lista de Agendamentos',
    caption: 'Controle de horários e agendamentos práticos.',
  },
  {
    src: imagePath('/imagens/formulario_agendamento.png'),
    alt: 'Formulário de Agendamento',
    title: 'Novo Agendamento',
    caption: 'Formulário rápido para marcação de consultas.',
  },
  {
    src: imagePath('/imagens/financeiro.png'),
    alt: 'Controle Financeiro',
    title: 'Controle Financeiro',
    caption: 'Fluxo de caixa com entradas e saídas detalhadas.',
  },
  {
    src: imagePath('/imagens/Formulario_financeiro.png'),
    alt: 'Formulário Financeiro',
    title: 'Registro Financeiro',
    caption: 'Formulário para lançamento de receitas e despesas.',
  },
]

export const professionalStatus = {
  title: 'Transição de Carreira para Desenvolvimento de Software',
  badge: 'Em busca de primeira oportunidade em TI',
  summary:
    'Ainda não possuo atuação profissional formal ou estágio prévio na área de tecnologia. Minha trajetória profissional anterior foi construída na área clínica, atuando como Fisioterapeuta entre 2014 e 2025.',
  goal: 'Atualmente estou em transição de carreira, cursando Desenvolvimento de Software Multiplataforma na FATEC SJC, em busca da minha primeira oportunidade de estágio ou atuação profissional em Desenvolvimento de Software.',
}

export const projects: Project[] = [
  {
    slug: 'radar-cidadao',
    category: 'academico',
    categoryBadge: 'Acadêmico • API',
    categoryLabel: 'Projeto Acadêmico (API — 1º Semestre DSM / FATEC SJC)',
    title: 'Radar Cidadão',
    partner: 'Prof. Fernando Masanori (FATEC São José dos Campos)',
    shortDescription:
      'Aplicação web para coleta, processamento e visualização intuitiva de dados públicos sobre deputados (presença, projetos e gastos).',
    problem:
      'A dificuldade do cidadão comum acompanhar, consolidar e interpretar dados públicos dispersos sobre a atuação, presença em sessões, projetos de lei e gastos parlamentares dos deputados.',
    solution:
      'Aplicação web desenvolvida com metodologia ágil (Scrum) capaz de coletar, processar e apresentar dados públicos sobre deputados de forma clara e acessível por meio de gráficos intuitivos e páginas de perfil parlamentar.',
    contributions:
      'Atuação como Dev Team / Dev Scrum Member, responsável por elaborar o mockup inicial e estruturar a busca e o tratamento dos dados pessoais dos deputados, gerando um arquivo JSON utilizado para renderizar as páginas de perfil dos parlamentares.',
    hardSkills:
      'Consumo/tratamento de dados em Python, estruturação de JSON, prototipação de mockups (Figma), desenvolvimento web (HTML, CSS, JavaScript, Flask, MySQL).',
    softSkills:
      'Comunicação, desenvolvimento colaborativo em equipe e primeiro contato prático com a metodologia ágil Scrum e suas cerimônias no desenvolvimento de software.',
    stack: [
      'HTML',
      'CSS',
      'JavaScript',
      'Python',
      'Flask',
      'Requests API',
      'MySQL',
      'Figma',
      'Jira',
    ],
    coverImage: imagePath('/imagens/TelaSite-API.png'),
    coverIcon: 'bi-bar-chart-line',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/3TDcRBkeUlo?si=WjBzX_Ykfc4RThyi',
    repoUrl: 'https://github.com/lucasfisioramos-cmyk/Radar-Cidadao-Froggrammers',
  },
  {
    slug: 'zip-coders-os',
    category: 'academico',
    categoryBadge: 'Acadêmico • API',
    categoryLabel: 'Projeto Acadêmico (API — 2º Semestre DSM / FATEC SJC)',
    title: 'Sistema de Gestão de Ordens de Serviço — Zip Coders',
    partner: 'ALTAVE',
    shortDescription:
      'Sistema interno de Gestão de Ordens de Serviço com quadro Kanban, RBAC, auditoria completa, relatórios PDF/Excel e API REST documentada.',
    problem:
      'Eliminar gargalos de comunicação e garantir rastreabilidade ponta a ponta na abertura, priorização, acompanhamento visual, execução e encerramento de solicitações internas de manutenção ou serviço em ambiente com restrição de infraestrutura.',
    solution:
      'Aplicação cliente-servidor desacoplada (SPA React + API REST Node.js/Express + PostgreSQL/Prisma) com quadro Kanban (RASCUNHO → ABERTA → EM_ANDAMENTO → CONCLUIDA / CANCELADA), dashboard com métricas, controle de acesso por papéis (RBAC: ADMIN, GESTOR, EXECUTOR, USUARIO), trilha de auditoria append-only (EventoOS, LogAuditoria), notificações e e-mail, exportação em PDF/Excel, documentação OpenAPI/Swagger e testes BDD com Cucumber.',
    contributions:
      'Atuação como Scrum Master, com foco na comunicação do time, alinhamento de tarefas e resolução de conflitos, além de aprimoramento no uso de Jira e Confluence (Atlassian).',
    hardSkills:
      'Gestão ágil e documentação com Jira e Confluence, acompanhamento de arquitetura SPA + API REST (React, Node.js, Express, PostgreSQL, Prisma, Docker, Swagger, Cucumber BDD).',
    softSkills:
      'Liderança servidora (Scrum Master), comunicação entre integrantes, alinhamento de entregas e resolução de conflitos.',
    stack: [
      'React 18',
      'Vite 8',
      'React Router DOM 7',
      'Axios',
      'Node.js',
      'Express 4',
      'PostgreSQL 16',
      'Prisma ORM 5',
      'JWT',
      'bcryptjs',
      'pdfkit',
      'ExcelJS',
      'Nodemailer',
      'Swagger / OpenAPI 3',
      'Cucumber.js',
      'Docker',
    ],
    coverIcon: 'bi-kanban',
    mediaNote:
      'Sem capturas de tela anexadas até o momento — resumo arquitetural completo disponível nesta página e código-fonte no repositório.',
    repoUrl: 'https://github.com/lucasfisioramos-cmyk/Zip-Coders',
  },
  {
    slug: 'logistica-reversa-av3',
    category: 'academico',
    categoryBadge: 'Acadêmico • Disciplina',
    categoryLabel: 'Projeto Acadêmico — Avaliação Individual (Técnicas de Programação)',
    title: 'Plataforma de Logística Reversa de Ativos Eletrônicos',
    shortDescription:
      'Backend modular em TypeScript e Fastify para logística reversa com RBAC, controle de concorrência, API B2B, filas BullMQ/Redis e predição de RUL.',
    problem:
      'Garantir rastreabilidade unitária, gestão operacional segura sob concorrência e inteligência analítica/preditiva na logística reversa de ativos eletrônicos (recebimento de lotes, triagem, movimentação, desmonte e destinação).',
    solution:
      'Monólito modular em camadas (API → Domain → Persistence) com fronteira de persistência validada no CI (check:arquitetura), código de barras unitário, optimistic locking e transações serializáveis, módulo analítico e preditivo com regressão linear simples (OLS via simple-statistics para predição de Vida Útil Remanescente — RUL), API Pública B2B (x-api-key com escopos e rate limiting), processamento assíncrono com Redis/BullMQ e node-cron, e suíte com 37 arquivos de teste no Vitest (cobertura mínima de 80%).',
    contributions:
      'Desenvolvimento individual completo (arquitetura em camadas, domínio, persistência, segurança JWT/API Key, testes automatizados e CI/CD).',
    hardSkills:
      'TypeScript (ESM), Fastify 5, Zod 4 como contrato único (runtime + OpenAPI), PostgreSQL 16 + Prisma 6, controle de concorrência, regressão linear (OLS), BullMQ + Redis, Vitest e GitHub Actions.',
    softSkills:
      'Organização técnica, disciplina de especificação (Spec-Driven Development) e rigor em qualidade de código.',
    stack: [
      'Node.js',
      'TypeScript 5.7',
      'Fastify 5',
      'Zod 4',
      'Swagger',
      'PostgreSQL 16',
      'Prisma 6',
      'simple-statistics',
      'Redis 7',
      'BullMQ 6',
      'node-cron',
      'JWT',
      'bcrypt',
      'Vitest 5',
      'Docker',
      'GitHub Actions',
    ],
    coverIcon: 'bi-cpu',
    mediaNote:
      'Projeto backend/API modular sem interface gráfica anexada — arquitetura, testes e especificação disponíveis no repositório.',
    repoUrl: 'https://github.com/lucasfisioramos-cmyk/AV3',
  },
  {
    slug: 'controle-producao-atividade-ii',
    category: 'academico',
    categoryBadge: 'Acadêmico • Disciplina',
    categoryLabel: 'Projeto Acadêmico — Desenvolvimento Web 2 (Atividade II)',
    title: 'API REST de Controle de Produção com Estoque e Relatórios',
    shortDescription:
      'API REST em Node.js e Express 5 para gestão de ordens de produção industrial com cálculos automáticos de estoque, custo ajustado e relatórios.',
    problem:
      'Substituir o controle manual de produção e estoque diário de uma indústria de peças automotivas por uma API REST com validação de integridade e consolidação de métricas em tempo real.',
    solution:
      'API REST (POST/GET/PUT/DELETE /ordens e GET /relatorios/ordens) com validação de unicidade de codigoOrdem e tipo de produto, cálculo automático de estoqueFinal, custoUnitarioAjustado, custoTotal e alertaEstoque (ALTO, CRITICO, NORMAL), validada com coleção Postman e 11 capturas de execução.',
    contributions:
      'Desenvolvimento individual completo da API e evidências de teste no Postman.',
    hardSkills:
      'Node.js (CommonJS), Express 5, modelagem de endpoints REST, regras de negócio no servidor e testes de contrato no Postman.',
    stack: ['Node.js', 'Express 5', 'Postman'],
    coverIcon: 'bi-gear-wide-connected',
    mediaNote:
      'Coleção e 11 capturas de execução no Postman disponíveis diretamente no repositório vinculado no GitHub.',
    repoUrl: 'https://github.com/lucasfisioramos-cmyk/Atividade-II',
  },
  {
    slug: 'sistema-vendas-atividade-iii',
    category: 'academico',
    categoryBadge: 'Acadêmico • Disciplina',
    categoryLabel: 'Projeto Acadêmico — Desenvolvimento Web 2 (Atividade III)',
    title: 'Sistema de Vendas com Comissões, Metas e Performance',
    shortDescription:
      'Backend em camadas com Node.js, Express e MySQL para controle comercial de vendedores, metas, comissões e relatórios regionais.',
    problem:
      'Substituir planilhas de vendas, comissões e metas de uma rede regional (Norte, Nordeste, Sudeste e Sul) por um backend relacional com integridade referencial e preservação de histórico.',
    solution:
      'Arquitetura em camadas (config, routes, controllers, services, sql) conectada ao MySQL (mysql2/promise) com restrições CHECK, ENUM e chaves estrangeiras ON DELETE RESTRICT, módulo completo de Vendedores (CRUD + soft delete com ativo = FALSE e consultas parametrizadas contra SQL Injection) e estrutura base para os módulos de Vendas, Comissões e Relatórios.',
    contributions:
      'Desenvolvimento individual da modelagem SQL, arquitetura em camadas e módulo de vendedores.',
    hardSkills:
      'Node.js (ESM), Express 4, MySQL (mysql2/promise), consultas parametrizadas, modelagem relacional e arquitetura em camadas.',
    stack: ['Node.js', 'Express 4', 'MySQL', 'mysql2/promise', 'dotenv'],
    coverIcon: 'bi-database-gear',
    mediaNote:
      'Projeto backend em camadas conectado ao MySQL — scripts SQL e código disponíveis no repositório.',
    repoUrl: 'https://github.com/lucasfisioramos-cmyk/Atividade-III',
  },
  {
    slug: 'fisiocontrol',
    category: 'pessoal',
    categoryBadge: 'Pessoal • HealthTech',
    categoryLabel: 'Projeto Pessoal (HealthTech)',
    title: 'Fisiocontrol — Sistema de Gestão Clínica',
    shortDescription:
      'Plataforma web focada em UI/UX para agendamentos, cadastro de pacientes, fichas de evolução clínica e controle financeiro de clínicas.',
    problem:
      'Otimizar o fluxo operacional de profissionais da saúde que precisam centralizar agendamentos, prontuários/fichas de evolução clínica e controle financeiro em uma interface simples e intuitiva.',
    solution:
      'Sistema web desenvolvido com fluxo completo de design (Wireframes → Mockups → Protótipo → MVP), contemplando dashboard de métricas, gestão de pacientes, agenda de consultas e fluxo de caixa financeiro.',
    contributions:
      'Idealização e desenvolvimento do sistema unindo experiência clínica prévia em fisioterapia com desenvolvimento web.',
    hardSkills:
      'Prototipação no Figma, Python/Flask, HTML5, CSS3, Bootstrap 5, MySQL (MariaDB), Docker, AWS, Git/GitHub.',
    softSkills:
      'Empatia com o usuário final (profissional de saúde), organização de requisitos clínicos e visão de produto.',
    stack: [
      'Figma',
      'Python',
      'Flask',
      'HTML5 & CSS3',
      'Bootstrap 5',
      'MySQL (MariaDB)',
      'Docker',
      'AWS',
      'Git',
      'GitHub',
    ],
    coverImage: imagePath('/imagens/dashboard.png'),
    coverIcon: 'bi-heart-pulse',
    slides: fisiocontrolSlides,
    repoUrl: 'https://github.com/lucasfisioramos-cmyk/fisiocontrol',
  },
  {
    slug: 'inventario-de-dor-whympi',
    category: 'pessoal',
    categoryBadge: 'Pessoal • HealthTech',
    categoryLabel: 'Projeto Pessoal (HealthTech)',
    title: 'Inventário de Dor Multidimensional West Haven-Yale — WHYMPI',
    shortDescription:
      'Aplicação web 100% client-side que digitaliza o questionário clínico WHYMPI (52 itens), calcula perfis de Turk & Rudy e exporta relatórios em PDF/Word.',
    problem:
      'Automatizar um questionário clínico extenso de avaliação da dor crônica (52 questões em 3 partes, referência Kerns, Turk & Rudy, 1985) tradicionalmente aplicado em papel, eliminando erros manuais de cálculo das subescalas, tratando exceções clínicas do instrumento original (itens 4 e 14 da Parte A e omissão da Parte B) e garantindo privacidade por rodar sem servidor externo.',
    solution:
      'Interface responsiva em HTML5/CSS3/JS Vanilla com escala tátil de 0 a 6, barra de progresso fixa (sticky), validação condicional em tempo real, classificação automática nos perfis clínicos (Disfuncional, Estresse Interpessoal, Adaptativo ou Atípico/Misto) com sugestão de conduta e exportação direta para prontuário em PDF (html2pdf.js) ou Word (.doc).',
    contributions:
      'Desenvolvimento individual completo unindo conhecimento clínico de pós-graduação em dor com desenvolvimento web.',
    hardSkills:
      'HTML5 semântico, CSS3 responsivo (Grid/Flexbox), JavaScript Vanilla (ES6+), regras de negócio clínicas no navegador e geração de PDF/DOC client-side (html2pdf.js, Blob).',
    softSkills:
      'Tradução de conhecimento clínico científico para requisitos de software, atenção à usabilidade (UX) em ambiente clínico e cuidado com privacidade de dados.',
    stack: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'html2pdf.js', 'jsPDF'],
    coverIcon: 'bi-clipboard2-pulse',
    mediaNote:
      'Sem capturas de tela anexadas até o momento — aplicação 100% client-side disponível no repositório.',
    repoUrl:
      'https://github.com/lucasfisioramos-cmyk/inventario-de-dor-multidimensional-west-haven-yale',
  },
  {
    slug: 'autofix-pro',
    category: 'pessoal',
    categoryBadge: 'Pessoal',
    categoryLabel: 'Projeto Pessoal',
    title: 'AutoFix Pro — Gestão de Oficina',
    shortDescription:
      'Aplicação full-stack em TypeScript com React, PostgreSQL e WebSockets para gestão operacional, ordens de serviço e financeira de oficinas mecânicas.',
    problem:
      'Evoluir e refatorar um protótipo gerado inicialmente por IA em um sistema multiusuário seguro, persistente e sincronizado em tempo real para gestão operacional e financeira de oficinas mecânicas (clientes/veículos, orçamentos, ordens de serviço com checklist e garantia, despesas e folha/comissões).',
    solution:
      'Aplicação full-stack combinando frontend em React + Vite + Tailwind CSS v4 (com gráficos recharts e PDFs via jsPDF) e backend Express + servidor WebSocket (ws) para sincronização em tempo real entre terminais, autenticação com bcrypt, controle de sessão por conexão (WeakMap), RBAC (admin, receptionist, mechanic) e migrations SQL idempotentes em PostgreSQL.',
    contributions:
      'Refatoração arquitetural completa, modelagem relacional em PostgreSQL, implementação de RBAC e sincronização em tempo real via WebSockets.',
    hardSkills:
      'TypeScript, React 19, Vite, Node.js, Express, WebSockets (ws), PostgreSQL (pg), bcrypt, RBAC, recharts, jsPDF.',
    softSkills:
      'Capacidade de análise crítica e refatoração de código legado/gerado por IA para padrões de produção.',
    stack: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS v4',
      'Node.js',
      'Express',
      'WebSockets (ws)',
      'PostgreSQL',
      'bcrypt',
      'recharts',
      'jsPDF',
    ],
    coverIcon: 'bi-wrench-adjustable-circle',
    mediaNote:
      'Sem capturas de tela anexadas até o momento — código-fonte completo disponível no repositório.',
    repoUrl: 'https://github.com/lucasfisioramos-cmyk/AutoFix-Pro---Gestao-de-Oficina',
  },
]

export const academicProjects = projects.filter((project) => project.category === 'academico')
export const personalProjects = projects.filter((project) => project.category === 'pessoal')

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
