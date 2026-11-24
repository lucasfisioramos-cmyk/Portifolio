import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import { academicProjects, personalProjects, professionalStatus } from '@/lib/data'

export const metadata = {
  title: 'Projetos | Lucas Lemes Ramos',
  description:
    'Projetos acadêmicos (API e disciplinas), status de atuação profissional e projetos pessoais de Lucas Lemes Ramos.',
}

export default function Projetos() {
  return (
    <main className="container my-5">
      {/* Cabeçalho da página */}
      <section className="about-card mb-5">
        <span className="badge badge-primary mb-2">Portfólio de Projetos</span>
        <h1 className="display-5 fw-bold text-dark" style={{ marginTop: '0.5rem' }}>
          Projetos Desenvolvidos
        </h1>
        <p className="lead text-muted mb-4">
          Organização por categorias conforme roteiro acadêmico da FATEC SJC: projetos acadêmicos
          (API e disciplinas), trajetória profissional e projetos pessoais.
        </p>

        <div className="d-flex flex-wrap gap-2">
          <a href="#academicos" className="btn btn-outline-primary btn-sm">
            <i className="bi bi-mortarboard" />
            Projetos Acadêmicos ({academicProjects.length})
          </a>
          <a href="#profissionais" className="btn btn-outline-secondary btn-sm">
            <i className="bi bi-briefcase" />
            Projetos Profissionais
          </a>
          <a href="#pessoais" className="btn btn-outline-dark btn-sm">
            <i className="bi bi-code-square" />
            Projetos Pessoais ({personalProjects.length})
          </a>
        </div>
      </section>

      {/* 1. Projetos Acadêmicos (API e Disciplinas) */}
      <section id="academicos" className="mb-5 section-anchor">
        <div className="mb-4">
          <h2 className="fw-bold text-dark" style={{ marginTop: '0.4rem' }}>
            <i className="bi bi-mortarboard me-2 text-primary" />
            Projetos Acadêmicos (API e Disciplinas)
          </h2>
          <p className="text-muted small">
            Projetos de Aprendizagem por Projetos Integrados (API) em parceria e avaliações técnicas
            das disciplinas do curso de DSM — FATEC São José dos Campos.
          </p>
        </div>

        <div className="cards-grid-3">
          {academicProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              detailLabel="Ver Detalhes Técnicos"
              codeLabel="GitHub"
              maxStackItems={5}
            />
          ))}
        </div>
      </section>

      {/* 2. Projetos Profissionais */}
      <section id="profissionais" className="mb-5 section-anchor">
        <div className="mb-4">
          <h2 className="fw-bold text-dark" style={{ marginTop: '0.4rem' }}>
            <i className="bi bi-briefcase me-2 text-primary" />
            Projetos Profissionais
          </h2>
        </div>

        <div className="contact-card">
          <div className="mb-3">
            <span className="badge badge-primary">{professionalStatus.badge}</span>
          </div>
          <h3 className="h4 fw-bold text-dark mb-2">{professionalStatus.title}</h3>
          <p className="text-secondary mb-3">{professionalStatus.summary}</p>
          <p className="text-secondary mb-4">{professionalStatus.goal}</p>

          <div className="d-flex flex-wrap gap-2">
            <Link href="/contato" className="btn btn-primary btn-sm">
              <i className="bi bi-envelope" />
              Entrar em Contato
            </Link>
            <Link href="/sobre" className="btn btn-outline-primary btn-sm">
              <i className="bi bi-person-vcard" />
              Ver Trajetória Completa
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Projetos Pessoais */}
      <section id="pessoais" className="section-anchor">
        <div className="mb-4">
          <h2 className="fw-bold text-dark" style={{ marginTop: '0.4rem' }}>
            <i className="bi bi-code-square me-2 text-primary" />
            Projetos Pessoais
          </h2>
          <p className="text-muted small">
            Soluções próprias unindo experiência clínica prévia em saúde e engenharia de software
            full-stack.
          </p>
        </div>

        <div className="cards-grid-3">
          {personalProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              detailLabel="Ver Detalhes Técnicos"
              codeLabel="GitHub"
              maxStackItems={5}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
