/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#AC6AFF", 
          // 2: "#FFC876",
          // 3: "#FF776F",
          // 4: "#7ADB78",
          // 5: "#858DFF",
          // 6: "#FF98E2",
          7: "#D6D9DB",
          8: "#008CFF",
          9: "#E5E7E8",
          10: "#21272C",
          11: "#939A9F",
          12: "#FAFAFA", 
          13: "#F3F2F4",//white
          14: "#0F051D",//bg-black
          "purpleGradient": "#2600fc", 
          "pinkGradient": "#ff00ea",
          "purple1Gradient": "#130749",
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#FFFFFF",
          // 2: "#CAC6DD",
          // 3: "#ADA8C3",
          // 4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          // 7: "#15131D",
          8: "#0E0C15",
          // 9: "#474060",
          // 10: "#43435C",
          // 11: "#1B1B2E",
          // 12: "#2E2A41",
          // 13: "#6C7275",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "coinHome": "url('./src/assets/cgpt-front.png')",
        "learn1": "url('./src/assets/learn/learn1.png')", 
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
        "hero-gradient": 'linear-gradient(to top, #0f051d 30%, #130749 70%)',
        "header-gradient": 'linear-gradient(25deg, #2600fc, #ff00ea)',
        "dailog-gradient": 'linear-gradient(to top, #0F051D 30%, #130749 70%)',
      },
      keyframes: {
        move: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        move: 'move 2s infinite',
      },
      gridTemplateColumns: {
        'custom': '16fr 25fr 25fr 25fr',
      },
      screens: {
        'max-700': { 'max': '700px' },
        'max-800': { 'max': '800px' },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-15 lg:px-20 xl:max-w-[87.5rem]":
            {},
        },
        ".h1": {
          "@apply text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] leading-tight font-bold tracking-normal uppercase":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply font-normal  leading-normal text-[1.375rem] md:text-[1.5rem] lg:text-[2rem]": {},
        },
        ".h3-1": {
          "@apply font-medium text-[1.375rem] leading-8": {},
        },
        ".h4": {
          "@apply text-[1.25rem] font-light leading-7 tracking-normal":{},
        },
        ".h5": {
          "@apply font-light text-lg leading-8": {},
        },
        ".h6": {
          "@apply uppercase text-[0.875rem] font-medium leading-5 tracking-[1px]": {},
        },
        ".hv": {
          "@apply leading-normal text-[1.375rem] md:text-[1.5rem] lg:text-[2rem]": {},
        },
        ".navFont": {
          "@apply font-code text-2xl uppercase lg:text-sm lg:font-semibold lg:leading-5": {},
        },
        ".footermain1": {
          "@apply uppercase font-medium tracking-[1px] leading-5 text-[0.875rem]": {},
        },
        ".footermain2": {
          "@apply uppercase font-medium tracking-[1px] leading-5 text-[0.075rem]": {},
        },
        ".footersub": {
          "@apply capitalize font-extralight tracking-normal leading-6 text-[1rem]": {},
        },
        ".body-1": {
          "@apply text-[1.25rem] font-light leading-7 tracking-normal":{},
        },
        ".body-2": {
          "@apply text-[1rem] leading-6 tracking-normal font-light md:text-[19px] md:leading-7": {},
        },
        ".body-3": {
          "@apply text-[0.875rem] font-light leading-7 lg:text-[1rem]": {},
        },
        ".body-4": {
          "@apply font-normal text-[0.875rem] leading-6 tracking-normal": {},
        },
        ".body-5": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".body-6": {
          "@apply font-light text-base leading-6 tracking-normal": {},
        },
        ".body-7": {
          "@apply font-medium text-[0.875rem] md:text-[1.125rem] lg:text-[1.375rem] tracking-normal": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
