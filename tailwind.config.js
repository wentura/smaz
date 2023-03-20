/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "50px",
      },
      colors: {
        cta: "#EA9F45",
        tmavaCta: "#DB9747",
        svetlaCta: "#E9BC5C",
      },
      fontFamily: {
        nadpis: ["Amatic SC", "serif"],
        normani: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
