module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary": "#1977d2",
        "primary-dark": "#0d3462",
        // "gray": "#F9F9F9"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
