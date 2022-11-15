/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#FFF",
      secondary: "#A02279",
      tertiary: "#1D1D1E",
      border: "#A3A3A3",
    },
    extend: {
      fontFamily: {
        rose: ['"Red Rose"', "cursive"],
        sora: ['Sora', "sans-serif"],
      },
    },
  },
  plugins: [],
};
