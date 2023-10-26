/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1A1919", /* este es el color del background en dark mode */
        secondary: "#62003B", /* accent burgundy */
        dimWhite: "#FBFBFB", /* este es el fondo de light mode y de las letras cuando esta en dark mode */
        dimBurgundy: "#C1AABE",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        qwigley: ["Qwigley", "cursive"],
        opensans: ["Open Sans", "sans-serif"],
        bitter: ["bitter", "serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};