/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customHover: '#333333', // Coral color for hover
        customSecondaryHover: '#F5F5DC', // Coral color for hover
      },
    },
  },
  variants: {
    extend: {
      textColor: ['hover'], // Ensure hover variant is applied
      backgroundColor: ['hover'],
    },
  },
  plugins: [],
}