/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'jp-black': '#1a1a1a',
        'jp-gray': '#4a4a4a',
        'jp-offwhite': '#fcfcf8',
        'jp-indigo': '#2e4b71',
        'jp-matcha': '#6a7f60',
        'jp-clay': '#9e5e48',
      },
      fontFamily: {
        'sans': ['"Noto Sans JP"', 'sans-serif'],
        'serif': ['"Zen Old Mincho"', 'serif'],
      },
      spacing: {
        '128': '32rem',
      }
    }
  },
  plugins: [],
}
