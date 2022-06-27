/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        pingpong: 'pingpong 2.5s ease-in-out infinite'
      },
      keyframes: {
        pingpong: {
          '0%, 100%': {
            transform: 'translateX(0)',
            width: '10%'
          },
          '50%': {
            transform: 'translateX(90%)',
            width: '100%'
          }
        }
      }
    },
  },
  plugins: [],
}
