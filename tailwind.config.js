/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '35': '8.75rem', // 140px
        '12.5': '3.125rem', // 50px
      },
    },
  },
  plugins: [],
}