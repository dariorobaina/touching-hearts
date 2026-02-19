/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#E40521", // Rojo
        secondary: "#05498C", // Azul
        accent: "#007A8C", // Azul-verdoso
        textGray: "#646363", // Gris (para bloques de texto)
        darkBg: "#2e2d2c", // Negro
      },
    },
  },
  plugins: [],
};
