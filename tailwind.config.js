/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,html}'
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          base: '#f8fafc',
          dark: '#07162d',
          card: '#ffffff'
        },
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
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Barlow', 'Inter', 'system-ui', 'sans-serif'],
        badge: ['"North Djakarta"', 'Barlow', 'sans-serif']
      }
    }
  },
  plugins: []
}
