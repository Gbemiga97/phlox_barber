/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,}',
  ],
  theme: {
    fontFamily: {
      DEFAULT: 'Montserrat',
      primary: 'Playfair Display',
      secondary: 'Pacifico'
    },
    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px'
    },
    extend: {
      colors: {
        primary: '#C29E75',
        secondary: '#1D2A3A',
        black: '#000',
        white: '#fff'
      },
      backgroundImage: {
        hero: 'url(/src/img/hero/bg.png)',
        testimonial: 'url(/src/img/testimonial/bg.png)',
        price: 'url(/src/img/price/bg.png)'
      }
    },
  },
  plugins: [],
}
