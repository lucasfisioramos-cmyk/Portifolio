import Carousel from '@/components/Carousel'
import { fisiocontrolSlides, fisiocontrolTechs, radarTechs } from '@/lib/data'

export const metadata = {
  title: 'Projetos | Lucas Dev',
}

export default function Projetos() {
  return (
    <main className="container my-5">
      {/* ── Case 01: Fisiocontrol ── */}
      <section id="fisiocontrol" className="project-card-sticky">
        <div className="mb-5">
          <span className="badge badge-primary mb-2">Portfólio / Case 01</span>
          <h1 className="display-5 fw-bold text-dark" style={{ marginTop: '0.5rem' }}>
            Sistema de Gestão Clínica
          </h1>
          <p className="lead text-muted">
            Sistema web desenvolvido com foco em UI/UX e metodologia Scrum.
          </p>
        </div>

        <div className="row">
          <div className="col">
            <Carousel slides={fisiocontrolSlides} />
          </div>

          <div className="col" style={{ maxWidth: '420px' }}>
            <article>
              <div className="mb-4">
                <h3 className="h4 fw-bold text-dark mb-2">Objetivo do Projeto</h3>
                <p className="text-muted">
                  Gerenciar de forma integrada e otimizada pacientes, consultas e o acompanhamento clínico completo.
                </p>
              </div>

              <hr className="divider" />

              <div className="mb-4">
                <h3 className="h5 fw-bold text-dark mb-3">Funcionalidades Chave</h3>
                <div className="feature-grid">
                  {['📁 Cadastro de Pacientes', '📅 Agenda Integrada', '📑 Histórico Clínico', '💰 Controle Financeiro'].map((f) => (
                    <div key={f} className="feature-item">{f}</div>
                  ))}
                </div>
              </div>

              <hr className="divider" />

              <div className="mb-4">
                <h3 className="h5 fw-bold text-dark mb-2">Etapas de Design & Desenvolvimento</h3>
                <p className="small text-muted mb-0">
                  <span className="fw-semibold text-dark">Fluxo:</span> Wireframes ➔ Mockups ➔ Protótipo ➔ MVP
                </p>
              </div>

              <hr className="divider" />

              <div>
                <h3 className="h5 fw-bold text-dark mb-3">Tecnologias & Ferramentas</h3>
                <div className="tech-badges-wrap">
                  {fisiocontrolTechs.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Case 02: Radar Cidadão ── */}
      <section id="radar-cidadao" className="project-card-sticky">
        <div className="mb-5">
          <span className="badge badge-success mb-2">Portfólio / Case 02</span>
          <h1 className="display-5 fw-bold text-dark" style={{ marginTop: '0.5rem' }}>
            Radar Cidadão
          </h1>
          <p className="lead text-muted">
            Análise de dados públicos e transparência parlamentar.
          </p>
        </div>

        <div className="row">
          <div className="col">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/3TDcRBkeUlo?si=WjBzX_Ykfc4RThyi"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <div className="col" style={{ maxWidth: '420px' }}>
            <article>
              <div className="mb-4">
                <h3 className="h4 fw-bold text-dark mb-2">Objetivo do Projeto</h3>
                <p className="text-muted">
                  Coletar, processar e apresentar dados públicos sobre deputados de forma clara e acessível à população.
                </p>
              </div>

              <hr className="divider" />

              <div className="mb-4">
                <h3 className="h5 fw-bold text-dark mb-3">Funcionalidades Chave</h3>
                <div className="feature-grid">
                  {['📊 Gráficos de Gastos', '📅 Presença em Sessões', '📑 Projetos de Lei', '🤖 Web Scraping / API'].map((f) => (
                    <div key={f} className="feature-item">{f}</div>
                  ))}
                </div>
              </div>

              <hr className="divider" />

              <div>
                <h3 className="h5 fw-bold text-dark mb-3">Tecnologias & Ferramentas</h3>
                <div className="tech-badges-wrap">
                  {radarTechs.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
