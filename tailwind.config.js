/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'NavBarBG': "url('/BG/NavBarBG.jpg')",
      },
      fontFamily: {
        TheGirlNextDoor: "'The Girl Next Door', cursive",
      },
      colors: {
        'Cream': '#FFFEF0',
        'Tangerine': '#E39D30',
        'Red': '#5E0800',
        'Champagne': '#F8E7C0',
      },
    },
  },
  plugins: [],
}
