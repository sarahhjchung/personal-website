module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1000px",
      xl: "1536px",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    backgroundImage: {
      home: "url('assets/HomeBackground.svg')",
    },
    colors: {
      home: {
        main: "#FFBE0B",
        bg: "#AFFB4E",
      },
    },
    fill: (theme) => ({
      yellow: theme("colors.home.main"),
      green: theme("colors.home.bg"),
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
