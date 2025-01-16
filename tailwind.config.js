/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      indigo: "#1e1b4b",
      blue: "#2563eb",
      zinc: "#f5f5f5",
      red: "#ff0000",
      orange: "#f97316",
      green: "#22c55e",
    },
    fontFamily: {
      sans: ["Rubik", "Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      display: ["Rubik"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
