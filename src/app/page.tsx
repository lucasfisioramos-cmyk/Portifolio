import Image from 'next/image'
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import { events, profile, projects, techGroups } from '@/lib/data'

export default function Home() {
  return (
    <main className="container my-5">
      {/* 1. Hero / Apresentação Pessoal */}
      <section className="profile-section mb-5">
        <div className="row row-center">
          <div className="col-auto" style={{ textAlign: 'center' }}>
            <Image
              src={profile.photo}
              alt={`Foto de ${profile.name}`}
              width={220}
              height={220}
              className="profile-img"
              priority
            />
          </div>

          <div className="col" style={{ minWidth: '280px' }}>
            {profile.available && (
              <span className="badge badge-primary mb-2">Disponível para Projetos</span>
            )}
            <h1 className="display-5 fw-bold text-dark" style={{ marginTop: '0.5rem' }}>
              {profile.name}
            </h1>
            <h2 className="h4 text-muted fw-normal mb-3">{profile.title}</h2>

            <p className="text-secondary mb-2" style={{ fontSize: '0.95rem' }}>
              <strong className="text-dark">Formação atual:</strong> {profile.academicSummary}
            </p>
            <p className="text-secondary mb-3" style={{ fontSize: '0.95rem' }}>
              <strong className="text-dark">Objetivos:</strong> {profile.objectives}
            </p>

            <div className="mb-4">
              <span className="small fw-semibold text-muted" style={{ display: 'block', marginBottom: '0.4rem' }}>
                Áreas de interesse:
              </span>
              <div className="tech-badges-wrap">
                {profile.interests.map((interest) => (
                  <span key={interest} className="tech-badge tech-badge-compact">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="d-flex flex-wrap gap-2">
              <Link href="/projetos" className="btn btn-primary">
                <i className="bi bi-briefcase" />
                Ver Projetos
              </Link>
              <Link href="/sobre" className="btn btn-outline-primary">
                <i className="bi bi-mortarboard" />
                Sobre &amp; Formação
              </Link>
              <a
                href={profile.curriculo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark"
              >
                <i className="bi bi-file-earmark-pdf" />
                Currículo
              </a>
              <Link href="/contato" className="btn btn-outline-secondary">
                <i className="bi bi-envelope" />
                Contato
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stack Técnica Agrupada */}
      <section className="mb-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-dark mb-1">Tecnologias &amp; Ferramentas</h2>
          <p className="text-muted small">
            Stack técnica organizada por domínio • Nível de proficiência: Desenvolvedor autônomo
          </p>
        </div>

        <div className="cards-grid-3">
          {techGroups.map((group) => (
            <div key={group.group} className="tech-group-card">
              <div className="tech-group-header">
                <h3 className="h5 fw-bold text-dark" style={{ margin: 0 }}>
                  <i className={`bi ${group.icon} me-2 text-primary`} />
                  {group.group}
                </h3>
                <span className="badge badge-subtle">{group.level}</span>
              </div>

              <div className="tech-badges-wrap">
                {group.items.map((tech) => (
                  <span key={tech.label} className="tech-badge">
                    <i className={`bi ${tech.icon} ${tech.color ?? ''}`} style={tech.style} />
                    {tech.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Resumo de Trajetória & Eventos */}
      <section className="about-card mb-5">
        <div className="section-header-split mb-4">
          <div>
            <span className="badge badge-primary mb-2">Formação &amp; Trajetória</span>
            <h2 className="fw-bold text-dark" style={{ marginTop: '0.4rem' }}>
              Trajetória Acadêmica, Idioma &amp; Eventos
            </h2>
          </div>
          <Link href="/sobre" className="btn btn-outline-primary btn-sm">
            Ver trajetória completa e eventos &rarr;
          </Link>
        </div>

        <div className="cards-grid-3">
          <div className="skill-box">
            <h3 className="h5 fw-bold text-dark mb-2">
              <i className="bi bi-mortarboard me-2 text-primary" />
              Formação Atual
            </h3>
            <p className="small text-secondary mb-2">
              <strong>{profile.currentCourse}</strong> — {profile.institution}.
            </p>
            <p className="small text-muted">{profile.academicPeriod}</p>
          </div>

          <div className="skill-box">
            <h3 className="h5 fw-bold text-dark mb-2">
              <i className="bi bi-heart-pulse me-2 text-danger" />
              Base Clínica &amp; Idioma
            </h3>
            <p className="small text-secondary mb-2">
              Graduação em Fisioterapia (2015), Pós-Graduação em Dor (2021) e atuação clínica de 2014 a 2025.
            </p>
            <p className="small text-muted">
              <strong>Inglês:</strong> Intermediário (maior domínio em leitura e escrita).
            </p>
          </div>

          <div className="skill-box">
            <h3 className="h5 fw-bold text-dark mb-2">
              <i className="bi bi-calendar-event me-2 text-success" />
              Participações em Eventos
            </h3>
            <ul className="summary-list small text-secondary">
              {events.map((event) => (
                <li key={event.id}>{event.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Todos os Projetos em Cards */}
      <section className="mb-5">
        <div className="section-header-split mb-4">
          <div>
            <h2 className="fw-bold text-dark mb-1">Projetos Desenvolvidos</h2>
            <p className="text-muted small">
              Portfólio completo de projetos acadêmicos (API e disciplinas) e projetos pessoais
            </p>
          </div>
          <Link href="/projetos" className="btn btn-outline-primary btn-sm">
            Ver por categorias &rarr;
          </Link>
        </div>

        <div className="cards-grid-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              detailLabel="Ver Detalhes"
              codeLabel="Código"
              maxStackItems={4}
            />
          ))}
        </div>
      </section>

      {/* 5. Chamada para Contato */}
      <section className="contact-card">
        <div className="section-header-split">
          <div>
            <h2 className="h4 fw-bold text-dark mb-1">Vamos Conversar?</h2>
            <p className="text-muted small">
              Aberto a oportunidades de estágio, projetos acadêmicos e parcerias em desenvolvimento Full Stack e Backend.
            </p>
          </div>
          <div className="d-flex flex-wrap gap-2">
            <Link href="/contato" className="btn btn-primary btn-sm">
              <i className="bi bi-envelope" />
              Ir para Contato
            </Link>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-sm"
            >
              <i className="bi bi-linkedin" />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark btn-sm"
            >
              <i className="bi bi-github" />
              GitHub
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-sm"
            >
              <i className="bi bi-whatsapp" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
