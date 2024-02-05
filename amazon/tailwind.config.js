/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily:{
      Poppins:"Poppins"

    },
    extend: {
      colors:{
        lightText:"#ccc",
        quantity_box:"#F0F2F2",
        footerBottom:"#131A22",
        background:"#EAEDED",
        light_blue:"#232F3A",
        yellows:"#FEBD69",
        DEFAULT:"#131921"
      },
      boxShadow:{
        testShadow: "0px 0px 32px 1px rgba(199,199,199,1)",
        amazonInput:"0 0 3px rgba(228 121 17/50%)"
      }
    },
  },
  plugins: [],
}
