/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      colors:{
        todo: "#FEF4F3",
        doing: "#FFFBF2",
        done: "#F4F9F3"
      },
      extend: {},
    },
    plugins: [],
  }