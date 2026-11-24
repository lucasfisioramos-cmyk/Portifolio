'use client'

import { useState } from 'react'
import Image from 'next/image'

export interface Slide {
  src: string
  alt: string
  title?: string
  caption?: string
}

interface CarouselProps {
  slides: Slide[]
  variant?: 'default' | 'card'
}

export default function Carousel({ slides, variant = 'default' }: CarouselProps) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)
  const isCard = variant === 'card'
  const slideHeight = isCard ? 250 : 380

  return (
    <div className={`carousel-wrapper${isCard ? ' carousel-wrapper-card' : ''}`}>
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={slide.src || i} className="carousel-slide">
              <Image
                src={slide.src}
                alt={slide.alt}
                width={700}
                height={slideHeight}
                style={{
                  width: '100%',
                  height: `${slideHeight}px`,
                  objectFit: 'contain',
                  background: '#1a1a1a',
                }}
              />
              {(slide.title || slide.caption) && (
                <div className="carousel-caption">
                  {slide.title && <h5>{slide.title}</h5>}
                  {slide.caption && <p>{slide.caption}</p>}
                </div>
              )}
            </div>
          ))}
        </div>

        {slides.length > 1 && (
          <>
            <button
              type="button"
              className="carousel-btn prev"
              onClick={prev}
              aria-label="Anterior"
            >
              <i className="bi bi-chevron-left" />
            </button>
            <button
              type="button"
              className="carousel-btn next"
              onClick={next}
              aria-label="Próximo"
            >
              <i className="bi bi-chevron-right" />
            </button>
          </>
        )}
      </div>

      {slides.length > 1 && (
        <div className="carousel-indicators">
          {slides.map((slide, i) => (
            <button
              type="button"
              key={slide.src || i}
              className={`carousel-dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
