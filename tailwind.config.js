/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors : {
          'Btn-Primary': '#E50914',
          'transparent-Background': 'rgba(0,0,0,.75)',
          'image-transparent': 'linear-gradient(180deg,#000000f2 10.19%,#0000 134.2%)',
          'shimmerUI': `background: linear-gradient(100deg,
            rgba(255,255,255,0) 20%,
            rgba(255,255,255,0.5) 50%,
            rgba(255,255,255,0) 80%);`
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