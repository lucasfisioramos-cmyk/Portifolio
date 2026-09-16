export default function Footer() {
  return (
    <footer className="custom-footer">
      <div className="container">
        <div className="footer-inner">
          <p className="small text-muted fw-semibold" style={{ margin: 0 }}>
            &copy; 2026 — Lucas Dev. Desenvolvido com Next.js & React.
          </p>
          <div className="footer-icons">
            <a
              href="https://github.com/lucasfisioramos-cmyk"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
              title="GitHub"
            >
              <i className="bi bi-github" />
            </a>
            <a
              href="https://linkedin.com/in/lucas-lemes-ramos-9a9661251"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
              title="LinkedIn"
            >
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
