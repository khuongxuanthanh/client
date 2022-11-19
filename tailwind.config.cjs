/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#fe6433",
      },
      min_width:{
        xl: "75em",
        lg: "63.9375em",
        md: "46.1875em",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
