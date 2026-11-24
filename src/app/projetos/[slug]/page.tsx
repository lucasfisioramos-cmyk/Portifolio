import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Carousel from '@/components/Carousel'
import { getProjectBySlug, projects } from '@/lib/data'

interface PageProps {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Projeto não encontrado | Lucas Lemes Ramos',
    }
  }

  return {
    title: `${project.title} | Lucas Lemes Ramos`,
    description: project.shortDescription,
  }
}

export default async function ProjetoDetalhePage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <main className="container my-5">
      {/* Breadcrumb / Voltar */}
      <nav className="breadcrumb-nav mb-4" aria-label="Navegação estrutural">
        <Link href="/projetos" className="btn btn-outline-primary btn-sm">
          <i className="bi bi-arrow-left" />
          Voltar para Projetos
        </Link>
        <span className="text-muted small">
          <Link href="/" className="breadcrumb-link">
            Home
          </Link>{' '}
          /{' '}
          <Link href="/projetos" className="breadcrumb-link">
            Projetos
          </Link>{' '}
          / <span className="text-dark fw-semibold">{project.title}</span>
        </span>
      </nav>

      {/* Card principal de detalhe do projeto */}
      <article className="project-card-sticky">
        <header className="mb-4">
          <span className="badge badge-primary mb-2">{project.categoryLabel}</span>
          <h1 className="display-5 fw-bold text-dark" style={{ marginTop: '0.5rem' }}>
            {project.title}
          </h1>

          {project.partner && (
            <p className="text-primary fw-semibold mb-2" style={{ marginTop: '0.4rem' }}>
              <i className="bi bi-building me-2" />
              Parceiro / Cliente: {project.partner}
            </p>
          )}

          <p className="lead text-muted mb-4">{project.shortDescription}</p>

          <div className="d-flex flex-wrap gap-2">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="bi bi-github" />
              Ver Repositório no GitHub
            </a>
            <Link href="/projetos" className="btn btn-outline-secondary">
              <i className="bi bi-grid" />
              Todos os Projetos
            </Link>
          </div>
        </header>

        <hr className="divider" />

        {/* Mídia do Projeto (quando houver) */}
        {(project.slides || project.youtubeEmbedUrl || project.coverImage || project.mediaNote) && (
          <section className="mb-5">
            <h2 className="h4 fw-bold text-dark mb-3">
              <i className="bi bi-collection-play me-2 text-primary" />
              Demonstração &amp; Mídia
            </h2>

            {project.slides && (
              <div className="mb-3">
                <Carousel slides={project.slides} />
              </div>
            )}

            {project.youtubeEmbedUrl && (
              <div className={project.coverImage ? 'cards-grid-2' : undefined}>
                <div className="video-wrapper">
                  <iframe
                    src={project.youtubeEmbedUrl}
                    title={`Vídeo de demonstração — ${project.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>

                {project.coverImage && (
                  <div className="media-preview-card">
                    <Image
                      src={project.coverImage}
                      alt={`Captura de tela — ${project.title}`}
                      width={640}
                      height={360}
                      className="media-preview-img"
                    />
                  </div>
                )}
              </div>
            )}

            {!project.slides && !project.youtubeEmbedUrl && project.coverImage && (
              <div className="media-preview-card">
                <Image
                  src={project.coverImage}
                  alt={`Captura de tela — ${project.title}`}
                  width={900}
                  height={480}
                  className="media-preview-img"
                />
              </div>
            )}

            {!project.slides && !project.youtubeEmbedUrl && !project.coverImage && project.mediaNote && (
              <div className="media-note-box">
                <i className={`bi ${project.coverIcon} media-note-icon text-primary`} />
                <div>
                  <p className="fw-semibold text-dark small mb-1">Registro Visual</p>
                  <p className="text-muted small">{project.mediaNote}</p>
                </div>
              </div>
            )}
          </section>
        )}

        {/* Problema e Solução */}
        <section className="cards-grid-2 mb-4">
          <div className="skill-box">
            <h2 className="h5 fw-bold text-dark mb-2">
              <i className="bi bi-exclamation-circle me-2 text-primary" />
              Problema Real Resolvido
            </h2>
            <p className="text-secondary small">{project.problem}</p>
          </div>

          <div className="skill-box">
            <h2 className="h5 fw-bold text-dark mb-2">
              <i className="bi bi-lightbulb me-2 text-success" />
              Solução Desenvolvida &amp; Arquitetura
            </h2>
            <p className="text-secondary small">{project.solution}</p>
          </div>
        </section>

        {/* Contribuições Pessoais + Hard/Soft Skills */}
        <section className="cards-grid-2 mb-4">
          <div className="skill-box">
            <h2 className="h5 fw-bold text-dark mb-2">
              <i className="bi bi-person-check me-2 text-primary" />
              Contribuições Pessoais
            </h2>
            <p className="text-secondary small">{project.contributions}</p>
          </div>

          <div className="skill-box">
            <h2 className="h5 fw-bold text-dark mb-2">
              <i className="bi bi-tools me-2 text-info" />
              Hard Skills Exercitadas
            </h2>
            <p className="text-secondary small">{project.hardSkills}</p>

            {project.softSkills && (
              <>
                <hr className="divider" />
                <h3 className="h5 fw-bold text-dark mb-2">
                  <i className="bi bi-people me-2 text-danger" />
                  Soft Skills Exercitadas
                </h3>
                <p className="text-secondary small">{project.softSkills}</p>
              </>
            )}
          </div>
        </section>

        <hr className="divider" />

        {/* Stack Completa */}
        <section>
          <h2 className="h5 fw-bold text-dark mb-3">
            <i className="bi bi-layers me-2 text-primary" />
            Stack Completa Utilizada
          </h2>
          <div className="tech-badges-wrap">
            {project.stack.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </section>
      </article>

      {/* Navegação entre projetos */}
      <div className="section-header-split">
        {prevProject ? (
          <Link
            href={`/projetos/${prevProject.slug}`}
            className="btn btn-outline-secondary btn-sm btn-wrap"
          >
            <i className="bi bi-arrow-left" />
            Anterior: {prevProject.title}
          </Link>
        ) : (
          <span />
        )}

        {nextProject && (
          <Link
            href={`/projetos/${nextProject.slug}`}
            className="btn btn-outline-primary btn-sm btn-wrap"
          >
            Próximo: {nextProject.title}
            <i className="bi bi-arrow-right" />
          </Link>
        )}
      </div>
    </main>
  )
}
