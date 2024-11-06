/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        monospace: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: '#fff',
        secondary: '#dfdedf',
        highlight: '#9200ee',
      },
    },
  },
  plugins: [],
};
