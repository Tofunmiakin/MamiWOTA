/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "Grotesk": ["Space Grotesk"]
      },
      colors: {
        'customGray': '#808080',
        'secondary': '#E1FF65'
      },
    },
  },
  plugins: [],
}
