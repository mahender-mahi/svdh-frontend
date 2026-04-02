/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          light:  '#90EE90',
          DEFAULT:'#5cb85c',
          dark:   '#3a8a3a',
        },
        sky: {
          light:  '#87CEEB',
          DEFAULT:'#5baed4',
          dark:   '#2a7aad',
        },
        cream: '#FFFACD',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans:    ['"Nunito"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
