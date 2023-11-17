/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'primary': 'purple',
        secondry: "#8A79FF",
        light: "#e3e3e6",
        "glass-bg": "rgba(255, 255, 255, 0.15)",
        "glass-bg-1": "rgb(229, 236, 243)",
      },
      fontFamily: {
        poppin: ["Poppins", "mono"],
      },
    },
  },
  plugins: [],
};
