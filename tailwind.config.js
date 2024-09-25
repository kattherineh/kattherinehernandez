/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors:{
        'dark-blue': '#11071F',
        'header-footer-blue': '#1A0B2E',
        'clear': '#E4E1EE',
        'hover': '#4c187754',
        'big-letter': '#698aa9',
        'ligth-purple': '#e7dcf8d2'
      },
      fontFamily: {
        preahvihear: ["Preahvihear", "sans-serif"]
      }
    },
  },
  plugins: [],
}

