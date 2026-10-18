'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import SectionTitle from '@/components/ui/SectionTitle'
import { skillCategories } from '@/lib/data'

export default function Skills() {
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-skill-category]',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '[data-skills-grid]',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" ref={rootRef} className="relative w-full bg-bg-secondary py-32">
      <div className="container-fluid">
        <SectionTitle
          eyebrow="02 / Capacidades"
          title="Stack Tecnológico"
          subtitle="Las tecnologías con las que construyo en producción."
        />
        <div data-skills-grid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div key={cat.title} data-skill-category className="card-elevated relative p-6 md:p-8">
              <div className="absolute -left-px top-0 h-12 w-px bg-accent" aria-hidden />
              <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-accent">
                {cat.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="border border-[color:var(--color-border)] bg-bg-card px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-secondary"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
