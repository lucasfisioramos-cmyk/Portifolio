import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/lib/data'

interface ProjectCardProps {
  project: Project
  detailLabel?: string
  codeLabel?: string
  maxStackItems?: number
}

export default function ProjectCard({
  project,
  detailLabel = 'Ver Detalhes',
  codeLabel = 'Código',
  maxStackItems = 5,
}: ProjectCardProps) {
  const visibleStack = project.stack.slice(0, maxStackItems)
  const remainingCount = project.stack.length - visibleStack.length

  return (
    <article id={project.slug} className="custom-card">
      {project.coverImage ? (
        <Image
          src={project.coverImage}
          alt={project.title}
          width={400}
          height={180}
          className="card-img"
        />
      ) : (
        <div className="card-img media-placeholder" aria-hidden="true">
          <i className={`bi ${project.coverIcon} media-placeholder-icon`} />
        </div>
      )}

      <div className="card-body">
        <div className="mb-2">
          <span className="badge badge-subtle">{project.categoryBadge}</span>
        </div>

        <h3 className="h5 fw-bold text-dark mb-2">{project.title}</h3>

        {project.partner && (
          <p className="small text-primary fw-semibold mb-2">
            <i className="bi bi-building me-2" />
            Parceria: {project.partner}
          </p>
        )}

        <p className="text-muted small mb-3">{project.shortDescription}</p>

        <div className="tech-badges-wrap">
          {visibleStack.map((tech) => (
            <span key={tech} className="tech-badge tech-badge-compact">
              {tech}
            </span>
          ))}
          {remainingCount > 0 && (
            <span className="tech-badge tech-badge-compact">+{remainingCount}</span>
          )}
        </div>
      </div>

      <div className="card-footer-custom">
        <Link href={`/projetos/${project.slug}`} className="btn btn-primary btn-sm">
          {detailLabel}
        </Link>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-secondary btn-sm"
        >
          <i className="bi bi-github" />
          {codeLabel}
        </a>
      </div>
    </article>
  )
}
