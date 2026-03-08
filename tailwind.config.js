/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        accent: {
          DEFAULT: '#6366F1',
          soft: '#A855F7'
        },
        surface: {
          light: '#ffffff',
          dark: '#020617'
        }
      },
      boxShadow: {
        'glow-accent': '0 0 40px rgba(99, 102, 241, 0.45)'
      }
    }
  },
  plugins: []
};
