/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'page-black': '#050504',
        'deep-bg': '#0A0908',
        'charcoal': '#171717',
        'elevated': '#211F1C',
        'gold-primary': '#D3AF65',
        'gold-deep': '#926A2F',
        'champagne': '#DDC792',
        'ivory': '#EBEAE6',
        'muted': '#A1A09E',
        'soft-border': 'rgba(211, 175, 101, 0.22)',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
