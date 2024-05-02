/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        color1: '#79a886',
        color_bg: '#E7EDF0'
      }
    }
  },
  plugins: []
}
