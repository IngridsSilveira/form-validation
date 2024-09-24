/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      backgroundImage: {
        'f-background': "url('/public/img/form-background.png')",
       }
    },
  },
  plugins: [],
}

