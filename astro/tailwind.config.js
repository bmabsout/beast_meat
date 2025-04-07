/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
      },
      screens: {
        sm: '480px',
        md: '1024px',
        lg: '1200px',
        xl: '1400px',
      },
    },
    extend: {
      colors: {
        slate: {
          100: '#F7FAFC',
          200: '#E2E8F0',
          700: '#4A5568',
          800: '#2D3748',
          900: '#1A202C',
        },
        coral: {
          500: '#FF7F50',
          600: '#E86C3F',
          700: '#D15A2F',
        },
        meat: {
          raw: '#DB4C40',
          seared: '#8B4513',
          charred: '#2C2C2C',
          marbling: '#F5F5F5',
        },
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        accent: ['"Playfair Display"', 'serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.75rem', { lineHeight: '2.25rem' }],
        '4xl': ['2rem', { lineHeight: '2.5rem' }],
        '5xl': ['2.5rem', { lineHeight: '1.2' }],
      },
      spacing: {
        xs: '0.25rem',    // 4px
        sm: '0.5rem',     // 8px
        md: '1rem',       // 16px
        lg: '1.5rem',     // 24px
        xl: '2rem',       // 32px
        '2xl': '3rem',    // 48px
      },
      borderRadius: {
        DEFAULT: '0.25rem',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px rgba(0, 0, 0, 0.05)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.05)',
      },
      transitionDuration: {
        DEFAULT: '150ms',
        medium: '250ms',
        long: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
    },
  },
  plugins: [],
} 