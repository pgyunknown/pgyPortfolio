/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        text: "#e0edf0",
        background: "#030809",
        primary: "#8fd1e1",
        secondary: "#1b7b92",
        accent: "#3fc9ea",
      },
    },
  },
  plugins: [],
};
