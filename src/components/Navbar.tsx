'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/projetos', label: 'Projetos' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const normalizedPath =
    pathname && pathname !== '/' ? pathname.replace(/\/+$/, '') : '/'

  const isLinkActive = (href: string) => {
    if (href === '/') return normalizedPath === '/'
    return normalizedPath === href || normalizedPath.startsWith(`${href}/`)
  }

  return (
    <header>
      <nav className="custom-navbar">
        <div className="container">
          <div className="navbar-inner">
            <Link href="/" className="navbar-brand" onClick={() => setOpen(false)}>
              <span className="accent">&lt;</span>Lucas<span className="accent">Dev/&gt;</span>
            </Link>

            <button
              className="nav-toggle"
              onClick={() => setOpen(!open)}
              aria-label="Abrir menu"
              aria-expanded={open}
            >
              <span />
              <span />
              <span />
            </button>

            <ul className={`nav-links${open ? ' open' : ''}`}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`custom-link${isLinkActive(link.href) ? ' active' : ''}`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contato"
                  className="btn btn-primary btn-sm"
                  onClick={() => setOpen(false)}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
