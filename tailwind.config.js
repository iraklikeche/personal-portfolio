/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-once": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) 1", // Single iteration pulse animation
      },
    },
  },
  plugins: [],
};
