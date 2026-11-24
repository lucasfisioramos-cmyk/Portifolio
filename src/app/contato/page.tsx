import ContactForm from '@/components/ContactForm'
import { profile } from '@/lib/data'

export const metadata = {
  title: 'Contato | Lucas Lemes Ramos',
}

export default function Contato() {
  return (
    <main className="container my-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-dark mb-1">Vamos Conversar?</h2>
        <p className="text-muted small">
          Sinta-se à vontade para enviar uma mensagem ou se conectar nas redes
        </p>
      </div>

      <div className="row" style={{ justifyContent: 'center', gap: '1.5rem' }}>
        {/* Direct channels */}
        <div style={{ flex: '0 0 280px' }}>
          <div className="contact-card d-flex flex-column" style={{ gap: '1rem' }}>
            <div>
              <h4 className="fw-bold text-dark mb-2">Canais Diretos</h4>
              <p className="text-muted small">
                Se preferir um contato mais rápido, você também pode me encontrar no LinkedIn ou
                acompanhar meus repositórios no GitHub.
              </p>
            </div>

            <div className="d-flex flex-column gap-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
                style={{ justifyContent: 'flex-start' }}
              >
                <i className="bi bi-linkedin me-2" />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark"
                style={{ justifyContent: 'flex-start' }}
              >
                <i className="bi bi-github me-2" />
                GitHub
              </a>
              <a
                href={`mailto:${profile.email}`}
                title={profile.email}
                className="btn btn-outline-secondary"
                style={{ justifyContent: 'flex-start' }}
              >
                <i className="bi bi-envelope me-2" />
                E-mail Direto
              </a>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div style={{ flex: '1', maxWidth: '560px', minWidth: '280px' }}>
          <div className="contact-card">
            <h3 className="h4 fw-bold text-dark mb-4">Envie uma mensagem</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}
