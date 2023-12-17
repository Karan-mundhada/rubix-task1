/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      primary: "#6941c6",
      secondary: "#eaddff",
      accent: "#F2D051",
      gray: "#7E8FA6",
      light_gray: "#DEE2E6",
    },
    extend: {},
  },
  plugins: [],
};

