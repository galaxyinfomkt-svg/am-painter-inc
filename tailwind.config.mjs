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
          DEFAULT: '#E10600',
          dark: '#CC0500',
          light: '#FF261A'
        },
        secondary: {
          DEFAULT: '#0A1F44',
          light: '#153774'
        },
        accent: {
          DEFAULT: '#222222',
          light: '#374151'
        },
        navy: '#0A1F44',
        ink: '#222222',
        charcoal: '#222222',
        gold: '#d6b25e',
        stone: '#f4f4f4',
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
