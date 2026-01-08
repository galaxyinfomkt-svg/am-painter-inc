/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B91C1C',
          dark: '#991B1B',
          light: '#DC2626'
        },
        secondary: {
          DEFAULT: '#0A1F44',
          light: '#153774'
        },
        accent: {
          DEFAULT: '#153774',
          light: '#1E4A8F'
        },
        navy: '#0c1b2a',
        ink: '#0b1220',
        charcoal: '#111827',
        gold: '#d6b25e',
        stone: '#e5e7eb',
        fog: '#f7f8fb'
      },
      fontFamily: {
        heading: ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        subtle: '0 10px 30px rgba(0,0,0,0.08)',
        card: '0 16px 40px rgba(0,0,0,0.12)'
      }
    }
  },
  plugins: []
};
