/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'nav-color':"#204959",
        'btn-color':'#C7A48B',
      }
    },
  },
  plugins: [],
}

