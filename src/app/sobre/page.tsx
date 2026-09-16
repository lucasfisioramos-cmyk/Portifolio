import Link from 'next/link'
import { skills } from '@/lib/data'

export const metadata = {
  title: 'Sobre | Lucas Dev',
}

export default function Sobre() {
  return (
    <main className="container my-5">
      <section className="about-card">
        {/* Header */}
        <div className="mb-5">
          <span className="badge badge-primary mb-2">Minha Trajetória</span>
          <h1 className="display-5 fw-bold text-dark" style={{ marginTop: '0.5rem' }}>
            Sobre Mim
          </h1>
          <p className="lead text-muted">
            Desenvolvendo software para resolver problemas reais, com foco em backend, arquitetura de aplicações e aprendizado contínuo.
          </p>
        </div>

        <div className="row">
          {/* Left: Bio + Timeline */}
          <div className="col">
            <h3 className="h4 fw-bold text-dark mb-3">
              <i className="bi bi-person-vcard me-2 text-primary" />
              Minha História
            </h3>

            <p className="text-secondary mb-3">
              Atualmente curso Desenvolvimento de Software Multiplataforma pela FATEC São José dos Campos
              e direciono meus estudos para desenvolvimento backend, arquitetura de software, bancos de dados
              e desenvolvimento de aplicações web utilizando Python, Flask, SQL, Docker e Git.
            </p>
            <p className="text-secondary mb-3">
              Busco construir projetos que vão além do aprendizado acadêmico, aplicando boas práticas de
              engenharia de software, versionamento, modelagem de dados e desenvolvimento de APIs para
              resolver problemas reais.
            </p>
            <p className="text-secondary">
              Antes da tecnologia, atuei por mais de dez anos como fisioterapeuta. Essa experiência
              desenvolveu competências como pensamento analítico, comunicação, resolução de problemas
              complexos e tomada de decisões baseada em evidências — habilidades que hoje aplico no
              desenvolvimento de software.
            </p>

            <h3 className="h4 fw-bold text-dark mt-5 mb-4">
              <i className="bi bi-hourglass-split me-2 text-primary" />
              Linha do Tempo
            </h3>

            <div className="timeline-container">
              <div className="timeline-item">
                <span className="fw-bold text-primary small">Atualmente</span>
                <h5 className="fw-bold text-dark mb-1">
                  Tecnólogo em Desenvolvimento de Software Multiplataforma — FATEC São José dos Campos
                </h5>
                <p className="text-muted small mb-0">
                  Python • Flask • SQL • Docker • Git • Desenvolvimento Web
                </p>
              </div>
              <div className="timeline-item">
                <span className="fw-bold text-muted small">2014–2025</span>
                <h5 className="fw-bold text-dark mb-1">Fisioterapeuta</h5>
                <p className="text-muted small mb-0">
                  Especialista em Dor • 10 anos de experiência clínica
                </p>
              </div>
            </div>
          </div>

          {/* Right: Skills */}
          <div className="col" style={{ maxWidth: '420px' }}>
            <h3 className="h4 fw-bold text-dark mb-4">
              <i className="bi bi-star me-2 text-primary" />
              Diferenciais & Competências
            </h3>

            <div className="d-flex flex-column gap-3">
              {skills.map((skill) => (
                <div key={skill.title} className="skill-box">
                  <h5 className="fw-bold text-dark mb-2">
                    <i className={`bi ${skill.icon} me-2 ${skill.color}`} />
                    {skill.title}
                  </h5>
                  <p className="text-muted small mb-0">{skill.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <Link href="/" className="btn btn-outline-primary w-100" style={{ padding: '0.6rem' }}>
                <i className="bi bi-arrow-left me-2" />
                Voltar para a Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
