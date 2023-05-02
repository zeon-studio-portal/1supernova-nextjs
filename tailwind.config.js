const theme = require("./config/theme.json");

const { primary } = theme.colors.primary;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: {
          200: theme.colors.primary["200"],
          DEFAULT: theme.colors.primary["400"],
          600: theme.colors.primary["600"],
          800: theme.colors.primary["800"],
          1000: theme.colors.primary["1000"],
        },
        secondary: {
          200: theme.colors.secondary["200"],
          DEFAULT: theme.colors.secondary["400"],
          600: theme.colors.secondary["600"],
          800: theme.colors.secondary["800"],
          1000: theme.colors.secondary["1000"],
        },
        dark: {
          primary: theme.colors.dark.primary,
          secondary: theme.colors.dark.secondary,
          tertiary: theme.colors.dark.tertiary,
          quaternary: theme.colors.dark.quaternary,
        },
        light: {
          primary: theme.colors.light.primary,
          secondary: theme.colors.light.secondary,
          tertiary: theme.colors.light.tertiary,
          quaternary: theme.colors.light.quaternary,
        },
      },
      backgroundImage: {
        "gradient-line":
          "linear-gradient(90deg, #0AA5FE 0%, #02DDEB 25.52%, #FDD13B 46.88%, #FF8F81 72.92%, #C14ECF 100%)",
        "gradient-text":
          "linear-gradient(119.47deg, #0AA5FE -10.19%, #02DDEB 20.98%, #FDD13B 47.06%, #FF8F81 78.87%, #C14ECF 111.95%)",
      },
      fontSize: {
        base: "18px",
        h1: "3.157rem",
        h1_sm: "2.314rem",
        h2: "2.369rem",
        h2_sm: "2rem",
        h3: "1.777rem",
        h3_sm: "1.554rem",
        h4: "1.333rem",
        h5: "1rem",
        h6: "0.75rem",
      },
      fontFamily: {
        primary: "var(--font-primary)",
        secondary: "var(--font-secondary)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwind-bootstrap-grid")({
      generateContainer: false,
      gridGutters: {
        1: "0.25rem",
        2: "0.5rem",
        3: "1rem",
        4: "1.5rem",
        5: "3rem",
      },
    }),
  ],
};
