/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      white: '#ffffff',
      black: '#1d1c1e',
      peach: {
        1: '#ffad9b',
        2: '#e7816b',
      },
      gray: {
        1: '#f1f3f5',
        2: '#333136',
      },
    },
  },
  plugins: [],
};
