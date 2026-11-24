import Image from 'next/image'
import Link from 'next/link'
import Carousel from '@/components/Carousel'
import { events, languages, profile, skills, timeline } from '@/lib/data'

export const metadata = {
  title: 'Sobre | Lucas Lemes Ramos',
  description:
    'Trajetória acadêmica e profissional, idiomas e participações em eventos de Lucas Lemes Ramos.',
}

export default function Sobre() {
  return (
    <main className="container my-5">
      <section className="about-card">
        {/* 1.1 Cabeçalho e Apresentação Acadêmica */}
        <div className="mb-5">
          <span className="badge badge-primary mb-2">Minha Trajetória</span>
          <h1 className="display-5 fw-bold text-dark" style={{ marginTop: '0.5rem' }}>
            Sobre Mim — {profile.name}
          </h1>
          <p className="lead text-muted">
            {profile.title} com foco em soluções de tecnologia aplicada à saúde, desenvolvimento
            Full Stack, Backend (APIs REST / RESTful), Desenvolvimento Web, DevOps e CI/CD.
          </p>
        </div>

        <div className="row">
          {/* Coluna Esquerda: História + Linha do Tempo */}
          <div className="col" style={{ minWidth: '280px' }}>
            <h2 className="h4 fw-bold text-dark mb-3">
              <i className="bi bi-person-vcard me-2 text-primary" />
              Minha História
            </h2>

            <p className="text-secondary mb-3">
              Atualmente curso o Tecnólogo em Desenvolvimento de Software Multiplataforma pela{' '}
              {profile.institution} ({profile.academicPeriod}) e direciono meus estudos para
              desenvolvimento Full Stack, Backend (APIs REST/RESTful), bancos de dados relacionais,
              Desenvolvimento Web, DevOps e CI/CD.
            </p>
            <p className="text-secondary mb-3">
              Busco construir projetos que vão além do aprendizado acadêmico, aplicando boas práticas
              de engenharia de software, versionamento, modelagem de dados e desenvolvimento de APIs
              para resolver problemas reais — especialmente na intersecção com a área da saúde.
            </p>
            <p className="text-secondary">
              Antes da transição para a tecnologia, atuei por mais de dez anos como fisioterapeuta
              (2014–2025), com graduação em Fisioterapia e Pós-Graduação em Dor. Essa vivência
              consolidou competências como pensamento analítico, comunicação, resolução de problemas
              complexos e tomada de decisões baseada em evidências.
            </p>

            {/* 1.2 Linha do Tempo Acadêmica e Profissional */}
            <h2 className="h4 fw-bold text-dark mt-5 mb-4">
              <i className="bi bi-hourglass-split me-2 text-primary" />
              Linha do Tempo Acadêmica e Profissional
            </h2>

            <div className="timeline-container">
              {timeline.map((item) => (
                <div key={`${item.period}-${item.title}`} className="timeline-item">
                  <span
                    className={`fw-bold small ${item.highlight ? 'text-primary' : 'text-muted'}`}
                  >
                    {item.period}
                  </span>
                  <h3 className="h5 fw-bold text-dark mb-1">{item.title}</h3>
                  <p className="text-muted small mb-1">{item.description}</p>
                  {item.details && <p className="text-secondary small">{item.details}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Coluna Direita: Idiomas + Diferenciais & Competências */}
          <div className="col" style={{ maxWidth: '420px', minWidth: '280px' }}>
            {/* 1.3 Idiomas */}
            <div className="mb-4">
              <h2 className="h4 fw-bold text-dark mb-3">
                <i className="bi bi-translate me-2 text-primary" />
                Idiomas
              </h2>

              <div className="d-flex flex-column gap-3">
                {languages.map((lang) => (
                  <div key={lang.language} className="skill-box">
                    <div className="section-header-split mb-2">
                      <h3 className="h5 fw-bold text-dark" style={{ margin: 0 }}>
                        {lang.language}
                      </h3>
                      <span className="badge badge-subtle">{lang.level}</span>
                    </div>
                    <p className="text-secondary small mb-1">{lang.details}</p>
                    <p className="text-muted small">{lang.certification}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 1.4 Diferenciais & Competências */}
            <h2 className="h4 fw-bold text-dark mb-3">
              <i className="bi bi-star me-2 text-primary" />
              Diferenciais &amp; Competências
            </h2>

            <div className="d-flex flex-column gap-3">
              {skills.map((skill) => (
                <div key={skill.title} className="skill-box">
                  <h3 className="h5 fw-bold text-dark mb-2">
                    <i className={`bi ${skill.icon} me-2 ${skill.color}`} />
                    {skill.title}
                  </h3>
                  <p className="text-muted small">{skill.desc}</p>
                </div>
              ))}
            </div>

            <div className="d-flex flex-column gap-2 mt-4">
              <Link href="/projetos" className="btn btn-primary w-100" style={{ padding: '0.6rem' }}>
                <i className="bi bi-briefcase" />
                Explorar Projetos
              </Link>
              <Link href="/" className="btn btn-outline-primary w-100" style={{ padding: '0.6rem' }}>
                <i className="bi bi-arrow-left" />
                Voltar para a Home
              </Link>
            </div>
          </div>
        </div>

        <hr className="divider mt-5 mb-4" />

        {/* 1.5 Participações em Eventos & Registro Visual */}
        <section id="eventos">
          <div className="mb-4">
            <span className="badge badge-primary mb-2">Eventos &amp; Comunidade</span>
            <h2 className="h4 fw-bold text-dark" style={{ marginTop: '0.4rem' }}>
              <i className="bi bi-calendar-event me-2 text-primary" />
              Participações em Eventos &amp; Registro Visual
            </h2>
            <p className="text-muted small">
              Feiras acadêmicas, maratonas de programação, eventos de inovação e seminários técnicos.
            </p>
          </div>

          <div className="cards-grid-2">
            {events.map((event) => (
              <article key={event.id} className="custom-card event-card">
                {event.images.length > 1 ? (
                  <Carousel slides={event.images} variant="card" />
                ) : event.images.length === 1 ? (
                  <Image
                    src={event.images[0].src}
                    alt={event.images[0].alt}
                    width={540}
                    height={250}
                    className="card-img"
                  />
                ) : (
                  <div className="event-media-placeholder">
                    <i className="bi bi-camera media-placeholder-icon" />
                    <span className="small text-muted">Registro fotográfico a ser adicionado</span>
                  </div>
                )}

                <div className="card-body">
                  <p className="small fw-semibold text-primary mb-2">
                    <i className="bi bi-calendar3 me-2" />
                    {event.dateOrLocation}
                  </p>
                  <h3 className="h5 fw-bold text-dark mb-2">{event.title}</h3>
                  <p className="text-muted small">{event.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}
