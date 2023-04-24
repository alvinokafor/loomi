/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        secondary: ["var(--font-cormarant)"],
      },
      colors: {
        primary: "#F4A482",
        secondary: "#7E7B77",
        accent: "#2D2A27",
        dun: "#CCBDB2",
        light: "#D4CFCB",
        almond: "#F2E4D5",
        seasalt: "#FAF8F7",
        brown: "#887568",
        urgent: '#EB5757',
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
