/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": '"DM Sans", sans-serif',
        chivo: '"Chivo", sans-serif',
      },
      colors: {
        "light-400": "#43E7DF",
        "dark-300": "#3639A4",
        "dark-400": "#2C2643",
      },
      backgroundImage: {
        "hero-bg": 'url("./src/assets/hero-bg.png")',
        "facts-bg": 'url("./src/assets/facts-bg.png")',
        "cta-bg": 'url("./src/assets/cta-bg.png")',
      },
    },
  },
  plugins: [],
};
