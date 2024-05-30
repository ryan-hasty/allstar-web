/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sofia Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui') ],
  daisyui: {
    darkTheme: "light",
  },
}

