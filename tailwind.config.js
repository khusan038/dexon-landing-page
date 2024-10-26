/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#7b7b7b",
        mainColor: "#0D779B",
        bgBlack: "#101210",
      },
    },
  },
  plugins: [],
};
