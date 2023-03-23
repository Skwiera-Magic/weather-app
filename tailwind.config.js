/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('../public/images/bg1.jpg')",
        'bg2': "url('../public/images/bg2.jpg')",
      },
    },
  },
  plugins: [],
}
