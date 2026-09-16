'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Slide {
  src: string
  alt: string
  title: string
  caption: string
}

export default function Carousel({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  return (
    <div className="carousel-wrapper">
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="carousel-slide">
              <Image
                src={slide.src}
                alt={slide.alt}
                width={700}
                height={380}
                style={{ width: '100%', height: '380px', objectFit: 'contain', background: '#1a1a1a' }}
              />
              <div className="carousel-caption">
                <h5>{slide.title}</h5>
                <p>{slide.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-btn prev" onClick={prev} aria-label="Anterior">
          <i className="bi bi-chevron-left" />
        </button>
        <button className="carousel-btn next" onClick={next} aria-label="Próximo">
          <i className="bi bi-chevron-right" />
        </button>
      </div>

      <div className="carousel-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
