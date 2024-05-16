/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#00048E',
          'dark': '#000263',
        },
        'secondary': '#35995E',
        'neutral': {
          'dark': '#1D1C1D',
          'gray': '#4A494A',
          'blue': '#E6EAFF',
          /* 'white': '#FFFFFF', */
        },
        'tc': {
          '001': '#223D5A',
          '002': '#258B41',
          '003': '#FFFFFF',
          '004': '#1D1C1D',
        },
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        //m: Montserrat
        //s: source sans 3
        "montserrat": ["Montserrat", "sans-serif"],
        "karla": ["Karla", "sans-serif"],
      }
    },
  },
  plugins: [ require('flowbite/plugin') ],
}

