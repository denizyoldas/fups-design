/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',
        secondary: '#dcdce6',
        accent: '#606066',
        dark: '#17171a',
        soft: '#dcdce6'
      },
      mono: ['Sofia Pro', ...fontFamily.mono],
      sans: ['Sofia Pro', ...fontFamily.sans]
    }
  },
  plugins: []
}
