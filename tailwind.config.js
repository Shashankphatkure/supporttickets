/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#8b9b7c",
          DEFAULT: "#7a8a6c",
          dark: "#2a3a1f",
        },
        secondary: {
          light: "#6b1515",
          DEFAULT: "#4a0404",
          dark: "#2d0202",
        },
        accent: {
          light: "#f5e3c3",
          DEFAULT: "#e5d3b3",
          dark: "#d5c3a3",
        },
        background: {
          card: "rgba(42, 58, 31, 0.3)",
          overlay: "rgba(74, 4, 4, 0.95)",
          glass: "rgba(229, 211, 179, 0.1)",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
