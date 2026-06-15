/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#002147',
          forest: '#134230',
          gold: '#ffbf00',
          slate: '#f8faf7'
        }
      },
      boxShadow: {
        soft: '0 20px 60px rgba(13, 58, 46, 0.12)'
      }
    }
  },
  plugins: [],
}

