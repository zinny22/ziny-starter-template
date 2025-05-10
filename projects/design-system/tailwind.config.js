const colors = require("./src/theme/colors");
const fontSize = require("./src/theme/fontSize");

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
