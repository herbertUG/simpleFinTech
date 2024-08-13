/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#30C2E3",
        main: "#F5F5F5",
        secondary: {
          DEFAULT: "#D4FAF5",
        },
        black: {
          DEFAULT: "#D4FAF5",
        },
        gray: {
          DEFAULT: "#B1B1B1",
        },
      },
      fontFamily: {
        rBold: ["Roboto-Bold", "sans-serif"],
        rExtraBold: ["Roboto-ExtraBold", "sans-serif"],
        interBold: ["Inter-Bold", "sans-serif"],
        interRegular: ["Inter-Regular", "sans-serif"],
        interExtraBold: ["Inter-ExtraBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
