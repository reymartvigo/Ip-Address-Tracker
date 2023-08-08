/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "10px",
      base: "18px",
      header: "24px",
    },
    screens: {
      sm: "100px",
      md: "640px",
      lg: "1020px",
      lg2: "1280px",
      xl: "1440px",
    },
    colors: {
      White: "rgb(255,255,255)",
      VeryDarkGray: "hsl(0, 0%, 17%)",
      DarkGray: "hsl(0, 0%, 59%)",
    },
    extend: {},
  },

  plugins: [],
};
