const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        "fill-16": "repeat(auto-fit, minmax(256px, 1fr))",
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        gray: colors.trueGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const extendUnderline = {
        ".underline": {
          textDecoration: "underline",
          "text-decoration-color": colors.blue["500"],
          "text-decoration-thickness": "5px",
        },
      };
      addUtilities(extendUnderline);
    },
  ],
};
