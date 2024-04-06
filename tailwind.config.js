/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors : {
          'Btn-Primary': '#E50914',
          'transparent-Background': 'rgba(0,0,0,.75)',
          'image-transparent': 'linear-gradient(180deg,#000000f2 10.19%,#0000 134.2%)'
        },
        screens: {
          mobLand: '581px',
          tab: "768px",
          desk: '1024px',
          desktop: '1280px'
        }
      },
    },
    plugins: [],
  }