/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "creme": "#D9C884"
      },
      fontFamily: {
        "lato": "Lato"
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

