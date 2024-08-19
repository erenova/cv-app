/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "430px",
      },
      colors: {
        primary: "#2F27CE",
        secondary: "#DDDBFF",
        gray: "#D9D9D9",
        text: "#040316",
        bg: "#FBFBFE",
        gray2: "#797885",
        brown: "#555466",
        placeholder: "#F9F8F8",
      },
      fontFamily: {
        k2dsemibold: "k2dsemibold",
        k2ditalic: "k2ditalic",
        k2dbold: "k2dbold",
        k2dlight: "k2dlight",
        k2dregular: "k2dregular",
        k2dthin: "k2dthin",
      },
      dropShadow: {
        text: "1px 1px 2px rgba(0,0,0,0.40)",
        button: "0px 2px 2px rgba(0,0,0,0.40)",
      },
    },
  },
  plugins: [],
};
