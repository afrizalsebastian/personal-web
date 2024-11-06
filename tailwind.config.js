/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        monospace: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: '#F0EDCF',
        secondary: '#0B60B0',
        highlight: '#40A2D8',
      },
    },
  },
  plugins: [],
};
