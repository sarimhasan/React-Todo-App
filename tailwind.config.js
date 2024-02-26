/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#265073",
        "light-blue": "#2D9596",
        "sea-green": "#9AD0C2",
        "light-greenish-yellow": "#F1FADA",
      },
    },
  },
  plugins: [],
};
