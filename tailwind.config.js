/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blueBg': 'rgba(42, 51, 130, 0.03)',
        'grey': 'rgba(42, 51, 130, 0.1)'
      }
    },
  },
  plugins: [],
}
