/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('./images/yellow-bg.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
}

