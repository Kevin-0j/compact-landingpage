/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#01217A',
          light: '#1a3693',
          dark: '#011a61'
        }
      }
    },
  },
  plugins: [],
};