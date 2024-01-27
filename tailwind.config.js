/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'navbar-img' : "url('./public/assets/valeriia-bugaiova-_pPHgeHz1uk-unsplash.jpg')"
      }
    },
  },
  plugins: [],
}