// /** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaulttheme = require("tailwindcss/defaultTheme");


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-blue-2': '#0d2352',
        'dark-blue': '#100746',
        'blue': '#2a2f50',
        'light-blue': '#1141d3',
        'blue-content': '#0f3dbe',
        'light-gray': '#f8fafe',
        'white-200': 'rgba(256,256,256,0.2)',
        'black-100': 'rgba(0,0,0,0.1)',
        'link-color':'#3291ff'
      },
      fontFamily:{
        'inter': 'Inter, sans-serif',
        'montserrat': 'Montserrat, sans-serif',
        'poppins': 'Poppins, sans-serif',
      },
      boxShadow:{
        'plan-card': '-10px 20px 25px -20px grey',
        'blog-card-content': '0px 5px 12px -5px lightgrey',
        'contact-card': '0px 0px 20px -2px lightgrey',
      },
      backgroundImage: {
        "footer-bg": "url('/images/footer-bg.png')",
      },
      screens:{
        'xs': {'max': '640px'},
        ...defaulttheme.screens
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },

        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    }),
  ],
}
