/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6200', // Orange accent
        dark: '#1A1A1A',    // Dark background
        light: '#FFFFFF',   // Light text
      },
    },
  },
  plugins: [],
};
