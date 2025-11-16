import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  content: ["./index.html", "./src/**/*.{js,jsx}"], // make sure all components are included
  theme: {
    extend: {
      colors: {
        vyomCharcoal: "#1b1f23",
        vyomOrange: "#ff7b00",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
});
