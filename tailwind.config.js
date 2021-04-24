const colors = require("tailwindcss/colors");
module.exports = {
  purge: {
    mode: "layers",
    content: ["./public/**/*.html", "./src/**/*.vue"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        customPurple: '#3699ff',
        gray: colors.trueGray,
      },
    },
  },
  variants: {
    extend: {
      scale: ['focus-within'],
    },
  },
  plugins: [],
};
