'use client'

import { useEffect, useRef } from 'react'
import { ArrowDown, Download } from 'lucide-react'
import { gsap } from '@/lib/gsap'

export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null)
  const typewriterRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        '[data-hero-first] [data-letter]',
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, stagger: 0.035 }
      )
        .fromTo(
          '[data-hero-second] [data-letter]',
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, stagger: 0.03 },
          '-=0.55'
        )
        .fromTo(
          '[data-hero-line-mid]',
          { scaleX: 0, transformOrigin: 'left center' },
          { scaleX: 1, duration: 0.6, ease: 'power3.inOut' },
          '-=0.35'
        )
        .add(() => runTypewriter(), '-=0.2')
        .fromTo(
          '[data-hero-bio]',
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65 },
          '+=0.5'
        )
        .fromTo(
          '[data-hero-cta]',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
          '-=0.4'
        )
        .fromTo(
          '[data-hero-scroll]',
          { y: -10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45 },
          '-=0.15'
        )

      gsap.to('[data-hero-parallax]', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, root)

    return () => ctx.revert()
  }, [])

  const runTypewriter = () => {
    const el = typewriterRef.current
    if (!el) return
    const text = 'Full Stack Developer'
    el.textContent = ''
    const cursor = document.createElement('span')
    cursor.textContent = '▍'
    cursor.style.color = '#2563eb'
    cursor.style.marginLeft = '4px'
    cursor.style.animation = 'blink 1s steps(1) infinite'
    el.appendChild(cursor)

    let i = 0
    const interval = setInterval(() => {
      if (i >= text.length) {
        clearInterval(interval)
        return
      }
      const char = document.createTextNode(text[i])
      el.insertBefore(char, cursor)
      i++
    }, 50)
  }

  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `@keyframes blink { 50% { opacity: 0 } }`
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const renderLetters = (text: string, prefix: string) =>
    text.split('').map((char, i) => (
      <span
        key={`${prefix}-${i}`}
        data-letter
        className="inline-block"
        style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
      >
        {char}
      </span>
    ))

  return (
    <section
      id="inicio"
      ref={rootRef}
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-bg-primary"
    >
      <div data-hero-parallax className="container-fluid relative z-10 py-32">
        <h1 className="text-display font-bold leading-[0.9] tracking-tightest">
          <span
            data-hero-first
            className="block overflow-hidden text-6xl sm:text-7xl md:text-8xl lg:text-[10rem]"
          >
            {renderLetters('MAXIMO', 'a')}
          </span>
          <span
            data-hero-second
            className="block overflow-hidden text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] text-ink-primary"
          >
            {renderLetters('GALVEZ LANDERS', 'b')}
          </span>
        </h1>

        <div
          data-hero-line-mid
          className="accent-line my-10 w-full origin-left"
          aria-hidden
        />

        <p className="font-mono text-lg uppercase tracking-[0.4em] text-ink-primary md:text-2xl">
          <span ref={typewriterRef} />
        </p>

        <p
          data-hero-bio
          className="mt-10 max-w-2xl text-display text-xl leading-relaxed text-ink-secondary md:text-2xl"
        >
          &ldquo;Apasionado por construir aplicaciones web modernas, escalables y con
          atención obsesiva al detalle. Cada línea de código tiene un propósito.&rdquo;
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a data-hero-cta href="#proyectos" className="btn-accent">
            Ver proyectos
            <ArrowDown size={16} />
          </a>
          <a
            data-hero-cta
            href="/cv-maximo-galvez-landers.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            Descargar CV
            <Download size={16} />
          </a>
        </div>
      </div>

      <a
        data-hero-scroll
        href="#sobre-mi"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-accent"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
