const { emerald } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'cyan':colors.cyan,
        'emerald':colors.emerald
      }
    },
  },
  plugins: [],
}
