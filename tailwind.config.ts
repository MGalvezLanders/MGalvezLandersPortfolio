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
          primary: '#2B2D31',
          secondary: '#242528',
          card: '#32353A',
        },
        accent: {
          DEFAULT: '#FFC93C',
          primary: '#FFC93C',
          light: '#FFD97A',
          muted: '#FFE9A6',
        },
        ink: {
          primary: '#D9DADC',
          secondary: '#9B9D9F',
          muted: '#6D6F72',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Geist', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'Geist', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tight: '-0.02em',
        wide: '0.2em',
        wider: '0.25em',
        widest: '0.3em',
        'ultra-wide': '0.4em',
      },
      animation: {
        'bounce-slow': 'bounce 2.4s infinite',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #FFD97A 0%, #FFC93C 60%, #E6B035 100%)',
        'accent-line': 'linear-gradient(90deg, transparent 0%, #FFC93C 50%, transparent 100%)',
      },
    },
  },
  plugins: [],
}

export default config
