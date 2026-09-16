import Image from 'next/image'
import Link from 'next/link'
import { profile, technologies, featuredProjects } from '@/lib/data'

export default function Home() {
  return (
    <main className="container my-5">
      {/* Hero / Profile */}
      <section className="profile-section mb-5">
        <div className="row row-center">
          <div className="col-auto" style={{ textAlign: 'center' }}>
            <Image
              src={profile.photo}
              alt="Foto de Lucas"
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
            <p className="lead" style={{ fontSize: '0.95rem' }}>{profile.bio}</p>

            <div className="d-flex flex-wrap gap-2 mt-4">
              <Link href="/projetos" className="btn btn-primary">
                <i className="bi bi-briefcase me-2" />
                Ver Projetos
              </Link>
              <a
                href={profile.curriculo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark"
              >
                <i className="bi bi-file-earmark-pdf me-2" />
                Currículo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="mb-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-dark mb-1">Tecnologias & Ferramentas</h2>
          <p className="text-muted small">Stack técnica em constante evolução</p>
        </div>

        <div className="tech-badges-wrap" style={{ justifyContent: 'center' }}>
          {technologies.map((tech) => (
            <span key={tech.label} className="tech-badge">
              <i className={`bi ${tech.icon} ${tech.color}`} style={tech.style} />
              {tech.label}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark mb-1">Projetos em Destaque</h2>
          <p className="text-muted small">Alguns dos trabalhos que desenvolvi recentemente</p>
        </div>

        <div className="row" style={{ justifyContent: 'center' }}>
          {featuredProjects.map((project) => (
            <div key={project.id} style={{ flex: '0 0 calc(33.333% - 1rem)', minWidth: '260px', maxWidth: '360px' }}>
              <div className="custom-card">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={180}
                    className="card-img"
                    style={project.comingSoon ? { filter: 'grayscale(50%)' } : undefined}
                  />
                ) : (
                  <div
                    className="card-img"
                    style={{ background: '#e9ecef', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <i className="bi bi-code-slash" style={{ fontSize: '3rem', color: '#adb5bd' }} />
                  </div>
                )}

                <div className="card-body">
                  <h5 className={`fw-bold mb-2 ${project.comingSoon ? 'text-muted' : 'text-dark'}`}>
                    {project.title}
                  </h5>
                  <p className="text-muted small">{project.description}</p>
                </div>

                <div className="card-footer-custom">
                  {project.comingSoon ? (
                    <button className="btn btn-outline-secondary btn-sm w-100" disabled>
                      Em breve
                    </button>
                  ) : (
                    <>
                      <Link href={project.projectUrl!} className="btn btn-primary btn-sm">
                        Ver Projeto
                      </Link>
                      <a
                        href={project.codeUrl!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-secondary btn-sm"
                      >
                        Código
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
