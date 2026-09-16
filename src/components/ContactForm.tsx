'use client'

import { useState, FormEvent } from 'react'
import { profile } from '@/lib/data'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(profile.formspree, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setSent(true)
        form.reset()
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="nome">Nome</label>
        <input
          type="text"
          className="form-control"
          id="nome"
          name="nome"
          placeholder="Seu nome"
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="email">E-mail</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="seu@email.com"
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="mensagem">Mensagem</label>
        <textarea
          className="form-control"
          id="mensagem"
          name="mensagem"
          rows={4}
          placeholder="Como posso ajudar no seu projeto?"
          required
        />
      </div>

      <div className="d-flex gap-2 mt-4" style={{ flexWrap: 'wrap' }}>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ flex: 1 }}
          disabled={loading}
        >
          <i className="bi bi-send me-2" />
          {loading ? 'Enviando...' : 'Enviar E-mail'}
        </button>
        <a
          href={profile.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success"
          style={{ flex: 1 }}
        >
          <i className="bi bi-whatsapp me-2" />
          WhatsApp
        </a>
      </div>

      {sent && (
        <div className="alert-success">
          <i className="bi bi-check-circle-fill" />
          Mensagem enviada com sucesso!
        </div>
      )}
    </form>
  )
}
