/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        background: "#222222",
        secondary: "#F95959",
        slate: "2rem",
      },
    },
  },
  plugins: [],
};
