module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      translate: {
        menu: "1000%",
      },
      width: {
        menu: "730px",
      },
      maxWidth: {
        1440: "1440px",
      },
      height: {
        menu: "550px",
        "product-height": "550px",
        "10%": "10%",
        "90%": "90%",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      display: ["group-hover"],
      visibility: ["group-hover"],
    },
  },
  plugins: [],
};
