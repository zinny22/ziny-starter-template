const colors = require("./src/themeConfig/colors");
const fontSize = require("./src/themeConfig/fontSize");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors,
    fontSize,
    extend: {},
  },
  plugins: [],
};
