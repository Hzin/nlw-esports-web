/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
      },
      backgroundImage: {
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 24%, #43E7AD 55%, #E1D55D 93%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
        galaxy: "url('/background-galaxy.png')"
      }
    },
  },
  plugins: [],
}
