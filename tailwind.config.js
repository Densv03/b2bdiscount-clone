const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Roboto mono', 'sans-serif'],
        main: ['Helvetica Neue', 'Roboto', 'Arial', 'sans-serif'],
        secondary: ['Inter', 'Arial', 'sans-serif'],
      },
    },
    screens: {
      "xs": {min: "320px"},
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}
