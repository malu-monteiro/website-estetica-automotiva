/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: ["14px", "20px"], // Pequeno
      base: ["16px", "24px"], // Base
      lg: ["20px", "28px"], // Grande
      xl: ["24px", "32px"], // Extra grande
      "2xl": ["30px", "36px"], // 2 vezes extra grande
      "3xl": ["32px", "40px"], // 3 vezes extra grande
      "4xl": ["40px", "48px"], // 4 vezes extra grande
      "5xl": ["48px", "56px"], // 5 vezes extra grande
    },
    extend: {
      colors: {
        "gray-450": "#777777",
      },
    },
  },
  plugins: [],
};
