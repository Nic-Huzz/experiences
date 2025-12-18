import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#5e17eb',
          light: '#8b5cf6',
        },
        gold: {
          DEFAULT: '#ffdd27',
          warm: '#ffc107',
        },
        dark: '#212529',
        'text-dark': '#212529',
        'text-medium': '#495057',
        'bg-light': '#f8f9fa',
        border: '#e9ecef',
        // 4R Colors
        recognise: {
          primary: '#6366f1',
          light: '#a5b4fc',
        },
        release: {
          primary: '#ec4899',
          light: '#f9a8d4',
        },
        rewire: {
          primary: '#f59e0b',
          light: '#fcd34d',
        },
        reconnect: {
          primary: '#10b981',
          light: '#6ee7b7',
        },
      },
      boxShadow: {
        light: '0 4px 12px rgba(0, 0, 0, 0.08)',
        medium: '0 8px 24px rgba(0, 0, 0, 0.08)',
        heavy: '0 12px 32px rgba(0, 0, 0, 0.12)',
        purple: '0 4px 12px rgba(94, 23, 235, 0.3)',
        gold: '0 8px 24px rgba(255, 221, 39, 0.4)',
        'gold-hover': '0 12px 32px rgba(255, 221, 39, 0.5)',
        'purple-hover': '0 8px 24px rgba(94, 23, 235, 0.4)',
        'recognise-hover': '0 16px 40px rgba(99, 102, 241, 0.15)',
        'release-hover': '0 16px 40px rgba(236, 72, 153, 0.15)',
        'rewire-hover': '0 16px 40px rgba(245, 158, 11, 0.15)',
        'reconnect-hover': '0 16px 40px rgba(16, 185, 129, 0.15)',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease',
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
