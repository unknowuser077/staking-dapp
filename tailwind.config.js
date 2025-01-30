/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        backgroundStart: '#6a3ef9',
        backgroundEnd: '#0f0e17',
        primary: '#6a3ef9',
        secondary: '#e94560',
        text: '#ffffff',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};