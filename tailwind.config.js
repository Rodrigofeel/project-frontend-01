/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
         colors: {
        primeira: "#2F855A",
        segunda: "#68D391",
        terceira: "#8B5E3C",
        quarta: "#F6E7D7",
        quinta: "#4A5568",
        sexta: "#5C4033",
      },
      fontFamily: {
        logo: ["var(--font-bebas)"],
      },
    },
  },
  plugins: [],
};
