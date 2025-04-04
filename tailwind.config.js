import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/data/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f6be89",
          light: "#f8cca3",
          dark: "#f4b070",
          hover: "#f3a256",
        },
        secondary: {
          DEFAULT: "#7d9fc2",
          light: "#8fafd0",
          dark: "#6b8fb0",
          hover: "#5a7f9e",
        },
      },
      fontFamily: {
        sans: ["Segoe UI", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-2rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-25%)" },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out forwards",
        "bounce-slow": "bounce 2s infinite",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [daisyui, typography],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#f6be89",
          secondary: "#7d9fc2",
        },
      },
    ],
  },
};
