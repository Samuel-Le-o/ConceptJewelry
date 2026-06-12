/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          gold: '#D4AF37',
          goldDark: '#AA7C11',
          onyx: '#111111',
          coal: '#1A1A1A',
          alabaster: '#FAFAFA',
          cream: '#F4F1EA'
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}