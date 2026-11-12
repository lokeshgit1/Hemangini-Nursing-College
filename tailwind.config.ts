import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          dark: 'var(--accent-dark)',
        },
        navy: 'var(--navy)',
        surface: {
          DEFAULT: 'var(--bg)',
          cream: 'var(--bg-cream)',
          mint: 'var(--bg-mint)',
          blush: 'var(--bg-blush)',
          sun: 'var(--bg-sun)',
          grey: 'var(--bg-grey)',
        },
        ink: {
          DEFAULT: 'var(--text)',
          muted: 'var(--text-muted)',
        },
        border: 'var(--border)',
        feedback: {
          success: 'var(--success)',
          warning: 'var(--warning)',
          error: 'var(--error)',
          star: 'var(--star)',
        },
      },
      fontFamily: {
        heading: [
          'var(--font-outfit)',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        sans: [
          'var(--font-inter)',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 4px 20px rgba(18, 38, 63, 0.06)',
        'card-hover': '0 10px 30px rgba(18, 38, 63, 0.12)',
        soft: '0 2px 12px rgba(18, 38, 63, 0.05)',
      },
      borderRadius: {
        btn: '8px',
        card: '14px',
        img: '12px',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
