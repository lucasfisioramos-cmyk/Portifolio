import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Lucas Lemes Ramos | Portfólio Dev',
  description:
    'Desenvolvedor Full Stack em Formação (DSM — FATEC São José dos Campos) — Backend, APIs REST/RESTful, TypeScript, Node.js, Python, React, Next.js e Bancos de Dados.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
