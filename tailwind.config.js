/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        zionGreen: "#0F3D2E",
        zionGreenLight: "#1F6F54",
        zionOrange: "#F97316",
        zionDark: "#0B1F17",
        zionGray: "#F4F6F5",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
