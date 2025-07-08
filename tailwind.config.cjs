/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/index.html",
  ],
  darkMode:'class',
  theme: {
    extend: {},
  },
  plugins: [
      require('tailwind-scrollbar-hide'),
  ],
}
