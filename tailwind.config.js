/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,html}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e50914',
        'primary-hover': '#cc0812',
        background: '#0a0a0a',
        surface: {
          DEFAULT: '#ffffff',
          base: '#f8fafc',
          dark: '#07162d',
          card: '#ffffff'
        },
        'text-secondary': '#a3a3a3',
        ink: {
          primary: '#07162d',
          secondary: '#475569'
        },
        line: {
          DEFAULT: '#e6e8eb'
        },
        brand: {
          navy: '#07162d',
          blue: '#2464b4',
          orange: '#f47b20',
          red: '#d83a2e'
        }
      },
      fontFamily: {
        sans: ['"Open Sans"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'Barlow', 'Inter', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
        badge: ['"North Djakarta"', 'Barlow', 'sans-serif']
      },
      boxShadow: {
        'car-glow': '0 -10px 40px rgba(0, 0, 0, 0.5)'
      }
    }
  },
  plugins: []
}
