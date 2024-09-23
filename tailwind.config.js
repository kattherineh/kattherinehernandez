/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors:{
        'background-blue': '#11071F',
        'header-blue': '#1A0B2E',
        'clear': '#FFFFFF',
        'hover': '#4c187754'
      },
      fontFamily: {
        preahvihear: ["Preahvihear", "sans-serif"]
      }
    },
  },
  plugins: [],
}

