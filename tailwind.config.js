/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '576px',
      lg: '768px',
      xl: '1440px',
    },
    extend: {
      colors: {
        vuejs: '#49e658'
      }
    }
  },
  plugins: [],
}
