/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        cream: '#fff4e8',
        'cream-light': '#fff9f4',
        accent: '#8e5a74',
        dark: '#1a1a1a',
        muted: '#7a7a7a',
        border: '#fbc9ac',
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
