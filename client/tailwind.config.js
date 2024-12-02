/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-in-left": "slideInLeft 2s ease-out forwards", // Custom fade-in animation
      },
      keyframes: {
        slideInLeft: {
          "0%": { opacity: 0, transform: "translateX(-100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      transitionDelay: {
        "0": "0ms",
        "200": "200ms",
        "400": "400ms",
        "600": "600ms",
      },
    },
  },
  plugins: [],
};
