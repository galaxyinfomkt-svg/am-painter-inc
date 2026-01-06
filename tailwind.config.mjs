/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/(site)/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
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
