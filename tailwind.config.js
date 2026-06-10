/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        cream: '#f1f0ea',
        'cream-light': '#fdfcf3',
        accent: '#f03c1f',
        dark: '#1a1a1a',
        muted: '#7a7a7a',
        border: '#d6d1c8',
        'grey-42': '#6b6b6b',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
