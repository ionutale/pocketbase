/**** Tailwind + DaisyUI config ****/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{svelte,js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('daisyui')],
  daisyui: {
    themes: [
      'light',
      'dark',
      // You can add custom themes later
    ],
    darkTheme: 'dark',
  },
};
