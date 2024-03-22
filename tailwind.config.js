/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  mode:"jit",
  theme: {
    extend: { 
      colors:{
      green:"0D9078",
      primeColor:"#DCBF05",      
      },
      fontFamily:{
        quicksand: ["Quicksand","serif"],
        opensans:["Open Sans", "sans-serif"],
        poppins:['Poppins','sans'],

      },
      screens:{
        xs: "375px",
        sm:"760px",
        md: "1060px"

      }
    },
  },
  plugins: [],
}

