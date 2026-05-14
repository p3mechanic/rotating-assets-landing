import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff8ff',
          100: '#dbeefe',
          200: '#bee3fd',
          300: '#8bd2fb',
          400: '#50b7f6',
          500: '#2698ea',
          600: '#1479c7',
          700: '#1261a1',
          800: '#145284',
          900: '#17466e',
          950: '#082237'
        },
        ink: '#0B1728'
      },
      boxShadow: {
        sharp: '0 20px 70px rgba(20, 82, 132, 0.12)',
        card: '0 18px 45px rgba(15, 23, 42, 0.08)'
      },
      backgroundImage: {
        'grid-light': 'linear-gradient(rgba(20, 82, 132, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(20, 82, 132, 0.08) 1px, transparent 1px)'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};

export default config;
