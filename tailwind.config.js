/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],

  plugins: [require("@tailwindcss/forms")],



  theme: {



    extend: {
      container: {
        center: true,
      },
      colors: {
        clifford: "#da373d",
        'jacaranda': {
          '50': '#fcf6fd',
          '100': '#f8ecfb',
          '200': '#f0d8f6',
          '300': '#e6baed',
          '400': '#d790e2',
          '500': '#c265d0',
          '600': '#a746b3',
          '700': '#8c3794',
          '800': '#742e7a',
          '900': '#612b64',
          '950': '#2e0d30',
        },

      },
    },
  },
  // purge: {
  //   content: ["./src/**/*.{js,ts,jsx,tsx,html}"],

  //   options: {
  //     // Whitelist dynamic classes
  //     whitelist: [/^bg-/, /^text-/],
  //   },
  // },
  plugins: [],
};
