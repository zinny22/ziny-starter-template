const colors = require("./src/themeConfig/colors");
const fontSize = require("./src/themeConfig/fontSize");
const boxShadow = require("./src/themeConfig/boxShadow");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors,
    fontSize,
    boxShadow,
    extend: {},
  },
  plugins: [],
};
