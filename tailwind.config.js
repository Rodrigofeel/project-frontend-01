/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['var(--font-bebas)', 'sans-serif'],
        saira: ['var(--font-saira)', 'sans-serif'],
        fredoka: ['var(--font-fredoka)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
