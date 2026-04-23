/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mtRed: '#ED1C24',   // Официальный красный МТБанк
        mtBlue: '#0033A0',  // Официальный синий МТБанк
        mtGray: '#F5F5F5',
      },
      backgroundImage: {
        'mt-gradient': 'linear-gradient(135deg, #0033A0 0%, #ED1C24 100%)',
      }
    },
  },
  plugins: [],
};