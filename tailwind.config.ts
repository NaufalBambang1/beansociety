import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
      },
      animation: {
        slide: 'slide 30s ease-in-out infinite',
      },
      keyframes: {
        slide: {
        '0%': { 'background-position': '0% 0%' },
        '33.33%': { 'background-position': '0% 0%' },
        '33.34%': { 'background-position': '100% 0%' }, 
        '66.66%': { 'background-position': '100% 0%' },
        '66.67%': { 'background-position': '200% 0%' },
        '100%': { 'background-position': '200% 0%' }, 
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
export default config;
