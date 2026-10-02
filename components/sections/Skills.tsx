'use client'

import SectionTitle from '@/components/ui/SectionTitle'
import DomeGallery from '@/components/ui/DomeGallery'
import { skillCategories } from '@/lib/data'

const ICON_SLUG: Record<string, string> = {
  'JavaScript (ES6+)': 'javascript',
  'TypeScript':        'typescript',
  'React 18':          'react',
  'Next.js':           'nextdotjs',
  'HTML5':             'html5',
  'CSS3':              'css3',
  'TailwindCSS':       'tailwindcss',
  'Vite':              'vite',
  'Webflow':           'webflow',
  'Node.js':           'nodedotjs',
  'Express':           'express',
  'NestJS':            'nestjs',
  'REST APIs':         'openapiinitiative',
  'Swagger':           'swagger',
  'Zod':               'zod',
  'PHP':               'php',
  'PostgreSQL':        'postgresql',
  'Firebase (Firestore)': 'firebase',
  'TypeORM':           'typeorm',
  'DBeaver':           'dbeaver',
  'AWS S3':            'amazons3',
  'Vercel':            'vercel',
  'Netlify':           'netlify',
  'Docker':            'docker',
  'Git':               'git',
  'GitHub':            'github',
  'CI/CD':             'githubactions',
  'Jest':              'jest',
  'Vitest':            'vitest',
  'React Testing Library': 'testinglibrary',
}

const DISPLAY_NAME: Record<string, string> = {
  'JavaScript (ES6+)':      'JavaScript',
  'React 18':               'React',
  'Firebase (Firestore)':   'Firebase',
}

const techItems = skillCategories
  .flatMap(cat => cat.skills)
  .filter(skill => ICON_SLUG[skill])
  .map(skill => ({
    src: `https://cdn.simpleicons.org/${ICON_SLUG[skill]}`,
    alt: DISPLAY_NAME[skill] ?? skill,
  }))

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-bg-secondary">
      <div className="container-fluid pt-32 pb-0">
        <SectionTitle
          eyebrow="02 / Capacidades"
          title="Stack Tecnológico"
          subtitle="Herramientas y tecnologías con las que construyo aplicaciones de punta a punta."
        />
      </div>

      <div className="w-full" style={{ height: '520px' }}>
        <DomeGallery
          images={techItems}
          fit={0.72}
          minRadius={480}
          maxVerticalRotationDeg={22}
          segments={34}
          dragDampening={1.8}
          grayscale={false}
          logoMode={true}
          logoTheme="light"
          overlayBlurColor="#F4F7FB"
          imageBorderRadius="14px"
          openedImageWidth="260px"
          openedImageHeight="260px"
          openedImageBorderRadius="20px"
        />
      </div>
    </section>
  )
}
