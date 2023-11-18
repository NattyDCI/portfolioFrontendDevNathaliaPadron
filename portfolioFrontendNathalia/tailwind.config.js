/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        none: 'none',
        /*custom: '0 0 0 1rem #1f1f1f52, 0 0 0 2rem #6262620b',*/
        custom: '0px -5px 10px 0px rgba(0, 0, 0, 0.5)'
      },
      colors: {
        primary: "#1e293b",
        /*primary: "#1A1919" /* este es el color del background en dark mode */
        secondary: "#62003B" /* accent burgundy */,
        dimWhite: "#FBFBFB" /* este es el fondo de light mode y de las letras cuando esta en dark mode */,
        dimPink: "#C1AABE",
        mainPurple: "#B730D9"
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
