/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        '10px': '10px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('prettier-plugin-tailwindcss')],
};
