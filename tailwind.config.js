/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      white: "#fff",
      black: "#000",
      primary :"#4A6BEA",
      secondary:'#FAC344',
      green:'#56c490',
      gray:"#f0f0f0",
      textColor:'#555',
      red:'#ff6a66',
      blueLight:'#EDF1FF',
      redLight:'#ffebeb'
    },
  },
  plugins: [],
};
