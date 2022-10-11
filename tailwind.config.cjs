/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'uefa-img': "url('/src/assets/bg_uefa.jpg')",
        'field-img': "url('/src/assets/field_uefa.jpg')"
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px'
    }
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
  variants: {
    scrollbar: ['rounded']
  }
};
