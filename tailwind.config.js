/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#0E0E20',
        'custom-gray': '#DCDEE0',
        'disabled-gray': '#E9ECF3'
      },
      boxShadow: {
        'elevated-card': '1px 1px 4px rgba(0, 0, 0, 0.25)',
        'color-card': '0px 4px 7px 1px rgba(165, 165, 165, 0.14)'
      }
    },
  },
  plugins: [],
}