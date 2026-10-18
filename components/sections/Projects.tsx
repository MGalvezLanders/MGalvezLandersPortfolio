'use client'

import { useEffect, useRef } from 'react'
import { ArrowUpRight, Github, Rocket, Clock } from 'lucide-react'
import { gsap } from '@/lib/gsap'
import SectionTitle from '@/components/ui/SectionTitle'
import { projects, type Project } from '@/lib/data'

export default function Projects() {
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-project-card]').forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            delay: i * 0.04,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }, root)

    return () => ctx.revert()
  }, [])

  const featured = projects.find((p) => p.featured)
  const primary = projects.filter((p) => !p.featured && !p.practice)
  const practice = projects.filter((p) => p.practice)

  return (
    <section
      id="proyectos"
      ref={rootRef}
      className="relative w-full bg-bg-primary py-32"
    >
      <div className="container-fluid">
        <SectionTitle
          eyebrow="03 / Trabajo"
          title="Proyectos"
          subtitle="Construidos, deployados, en producción."
        />

        <div className="flex flex-col gap-8">
          {featured && <FeaturedCard project={featured} />}
          {primary.map((p) => (
            <PrimaryCard key={p.slug} project={p} />
          ))}
          {practice.length > 0 && (
            <div data-project-card className="border border-[color:var(--color-border)] p-6 md:p-8">
              <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-ink-secondary">
                Ejercicios de práctica
              </h3>
              <ul className="flex flex-col divide-y divide-[color:var(--color-border)]">
                {practice.map((p) => (
                  <li key={p.slug} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                    <div className="flex flex-col gap-1">
                      <span className="text-base font-medium text-ink-primary">{p.title}</span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-ink-secondary">
                        {p.stack.join(' · ')}
                      </span>
                    </div>
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-accent transition-colors duration-300 hover:text-accent-light"
                    >
                      Ver <ArrowUpRight size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <article
      data-project-card
      className="card-elevated group relative overflow-hidden p-8 md:p-12"
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              Featured
            </span>
            {project.badge && (
              <span className="border border-accent/40 bg-accent/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-light">
                {project.badge}
              </span>
            )}
          </div>

          <h3 className="text-display text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            {project.title}
          </h3>

          <p className="max-w-xl text-base leading-relaxed text-ink-secondary md:text-lg">
            {project.description}
          </p>

          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="border border-[color:var(--color-border)] bg-bg-card px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-secondary"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-2 flex flex-wrap gap-4">
            {project.comingSoon ? (
              <span className="btn-ghost cursor-default opacity-80">
                <Clock size={16} />
                Deploy próximamente
              </span>
            ) : (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-accent"
              >
                Ver en vivo
                <ArrowUpRight size={16} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                GitHub
                <Github size={16} />
              </a>
            )}
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden border border-[color:var(--color-border)] transition-colors duration-300 group-hover:border-accent">
          {project.comingSoon ? (
            <ComingSoonPreview title={project.title} />
          ) : (
            <iframe
              src={project.liveUrl}
              title={project.title}
              className="pointer-events-none absolute inset-0 h-full w-full"
              loading="lazy"
              style={{ transform: 'scale(0.7)', transformOrigin: 'top left', width: '143%', height: '143%' }}
            />
          )}
        </div>
      </div>
    </article>
  )
}

function ComingSoonPreview({ title }: { title: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-bg-secondary p-8 text-center">
      <div className="flex h-14 w-14 items-center justify-center border border-accent/40 bg-accent/5 text-accent">
        <Rocket size={22} />
      </div>
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
        En despliegue
      </p>
      <p className="text-display text-xl leading-tight text-ink-primary md:text-2xl">
        {title}
      </p>
      <p className="max-w-xs text-sm text-ink-secondary">
        Deploy en Vercel próximamente — el código y la arquitectura ya están listos.
      </p>
    </div>
  )
}

function PrimaryCard({ project }: { project: Project }) {
  return (
    <article data-project-card className="card-elevated group relative p-8 md:p-10">
      <div className="absolute -left-px top-0 h-12 w-px bg-accent" aria-hidden />
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-12">
        <div className="flex flex-col gap-4">
          {project.badge && (
            <span className="w-fit border border-accent/40 bg-accent/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-light">
              {project.badge}
            </span>
          )}
          <h3 className="text-display text-3xl font-medium leading-tight md:text-4xl">
            {project.title}
          </h3>
          <p className="max-w-2xl text-base leading-relaxed text-ink-secondary md:text-lg">
            {project.description}
          </p>
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="border border-[color:var(--color-border)] bg-bg-card px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-secondary"
              >
                {tech}
              </li>
            ))}
          </ul>
          {project.badgeNote && (
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-secondary">
              {project.badgeNote}
            </p>
          )}
        </div>
        {!project.privateProject && (project.liveUrl || project.githubUrl) && (
          <div className="flex shrink-0 flex-row gap-3 md:flex-col">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-accent">
                Ver en vivo
                <ArrowUpRight size={16} />
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-ghost">
                GitHub
                <Github size={16} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
