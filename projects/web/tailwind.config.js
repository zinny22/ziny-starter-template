const colors = require("../design-system/src/theme/colors");
const fontSize = require("../design-system/src/theme/fontSize");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../design-system/src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    colors,
    fontSize,
    extend: {},
  },
  plugins: [],
};
