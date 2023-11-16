/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        primary: "#5C45FD",
        secondry: "#8A79FF",
        light: "#e3e3e6",
        "glass-bg": "rgba(255, 255, 255, 0.25)",
        "bg-dark": "#222",
        "text-1": "#161616",
        "hover-bg": "#EFEDFF",
        "btn-bg": "#2A2B6A",
      },
      fontFamily: {
        poppin: ["Poppins", "mono"],
      },
    },
  },
  plugins: [],
};
