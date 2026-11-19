import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary:   'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          card:      'var(--color-bg-card)',
        },
        accent: {
          DEFAULT: 'var(--color-accent-primary)',
          primary: 'var(--color-accent-primary)',
          light:   'var(--color-accent-light)',
          muted:   'var(--color-accent-muted)',
        },
        ink: {
          primary:   'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted:     'var(--color-text-muted)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Geist', 'system-ui', 'sans-serif'],
        sans:    ['var(--font-body)',    'Geist', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)',    'JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tightest:    '-0.04em',
        tight:       '-0.02em',
        wide:        '0.2em',
        wider:       '0.25em',
        widest:      '0.3em',
        'ultra-wide':'0.4em',
      },
      animation: {
        'bounce-slow': 'bounce 2.4s infinite',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, var(--color-accent-light) 0%, var(--color-accent-primary) 60%, #E6B035 100%)',
        'accent-line':     'linear-gradient(90deg, transparent 0%, var(--color-accent-primary) 50%, transparent 100%)',
      },
    },
  },
  plugins: [],
}

export default config
