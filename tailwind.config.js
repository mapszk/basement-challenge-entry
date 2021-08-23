module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grayGradient: "#1D1D1D",
      },
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
        ticker: "ticker 40s linear infinite",
        ticker2: "ticker2 40s linear infinite",
      },
      keyframes: {
        ticker: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        ticker2: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-200%)",
          },
        },
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
