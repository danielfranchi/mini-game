/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#242424',
        },
        yellow: {
          500: '#fbbf24',
        },
      },
      borderWidth: {
        '0.01': '0.01px'
      }
    },
  },
  plugins: [],
}
