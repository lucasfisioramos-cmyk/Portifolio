import { profile } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="custom-footer">
      <div className="container">
        <div className="footer-inner">
          <p className="small text-muted fw-semibold" style={{ margin: 0 }}>
            &copy; 2026 — {profile.name}. Desenvolvido com Next.js & React.
          </p>
          <div className="footer-icons">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
              title="GitHub"
              aria-label="GitHub"
            >
              <i className="bi bi-github" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
