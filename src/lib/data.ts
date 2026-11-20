  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const imagePath = (path: string) => `${basePath}${path}`;

export const profile = {
  name: 'Lucas',
  title: 'Desenvolvedor Full Stack em Formação',
  bio: 'Desenvolvedor de Software em formação, com foco em backend e aplicações web. Construo soluções utilizando Python, Flask, SQL, Docker e Git, buscando criar sistemas escaláveis, bem estruturados e orientados à resolução de problemas reais.',
  photo: imagePath('/imagens/Lucas.jpg'),
  github: 'https://github.com/lucasfisioramos-cmyk',
  linkedin: 'https://linkedin.com/in/lucas-lemes-ramos-9a9661251',
  curriculo: 'https://docs.google.com/document/d/11av16g3ULE6IDCH57pB_RI-YT67q4EjnH7cYi1jwbKg/edit?usp=sharing',
  whatsapp: 'https://wa.me/5512988342587?text=Olá%20Lucas,%20quero%20saber%20mais%20sobre%20seus%20projetos!',
  email: 'seu@email.com',
  formspree: 'https://formspree.io/f/mbdekbwd',
  available: true,
}

export const technologies = [
  { icon: 'bi-filetype-py', 
    color: 'text-primary', 
    label: 'Python' 
  },
  { icon: 'bi-droplet', 
    color: 'text-info', 
    label: 'Flask' 
  },
  { icon: 'bi-filetype-html', 
    color: 'text-danger', 
    label: 'HTML5' 
  },
  { icon: 'bi-filetype-css', 
    color: 'text-primary', 
    label: 'CSS3' 
  },
  { icon: 'bi-bootstrap', 
    color: '', 
    label: 'Bootstrap', 
    style: { color: '#7952b3' } 
  },
  { icon: 'bi-database', 
    color: 'text-success', 
    label: 'MySQL' 
  },
  { icon: 'bi-git', 
    color: 'text-warning', 
    label: 'Git & GitHub' 
  },
]

export const featuredProjects = [
  {
    id: 'radar-cidadao',
    title: 'Radar Cidadão',
    description:
      'Aplicação web capaz de coletar, processar e apresentar dados públicos sobre deputados de forma clara. Permite visualizar presença em sessões, projetos apresentados e gastos com recursos públicos através de gráficos intuitivos, incentivando a transparência pública. Desenvolvido com base na metodologia ágil (Scrum).',
    image: imagePath('/imagens/TelaSite-API.png') ,
    projectUrl: '/projetos#radar-cidadao',
    codeUrl: 'https://github.com/eugeniojonatas/Radar-Cidadao-Froggrammers',
  },
  {
    id: 'fisiocontrol',
    title: 'Fisiocontrol',
    description:
      '(Seu sistema de gestão clínica). Plataforma focada em UI/UX, desenvolvida para otimizar o fluxo de agendamentos, fichas de evolução clínica e controle financeiro de profissionais da saúde.',
    image: imagePath('/imagens/dashboard.png'),
    projectUrl: '/projetos#fisiocontrol',
    codeUrl: 'https://github.com/lucasfisioramos-cmyk/fisiocontrol',
  },
  {
    id: 'em-breve',
    title: 'Novo Projeto',
    description:
      'Em desenvolvimento... Em breve uma nova solução full stack estruturada com banco de dados e regras de negócio inteligentes será listada aqui.',
    image: null,
    projectUrl: null,
    codeUrl: null,
    comingSoon: true,
  },
]

export const fisiocontrolSlides = [
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
    caption: 'Formulário intuitivo e dinâmico.' 
  },
  { src: imagePath('/imagens/agendamentos.png'), 
    alt: 'Agendamentos', 
    title: 'Lista de Agendamentos', 
    caption: 'Controle de horários e agendamentos práticos.' 
  },
  { src: imagePath('/imagens/formulario_agendamento.png'), 
    alt: 'Formulário de Agendamento', 
    title: 'Novo Agendamento', 
    caption: 'Formulário rápido para marcação de consultas.' 
  },
  { src: imagePath('/imagens/financeiro.png'), 
    alt: 'Controle Financeiro', 
    title: 'Controle Financeiro', 
    caption: 'Fluxo de caixa com entradas e saídas detalhadas.' },
  { src: imagePath('/imagens/Formulario_financeiro.png'), 
    alt: 'Formulário Financeiro', 
    title: 'Registro Financeiro', 
    caption: 'Formulário para lançamento de receitas e despesas.' },
]

export const fisiocontrolTechs = ['Figma', 'Git', 'GitHub', 'Flask', 'HTML5 & CSS3', 'Bootstrap 5', 'MySQL (MariaDB)', 'AWS', 'Docker']
export const radarTechs = ['HTML', 'CSS', 'Javascript', 'Python', 'Flask', 'Requests API', 'MySQL', 'Figma', 'Jira']

export const skills = [
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
