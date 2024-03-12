/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-in': 'slideIn 1s ease-in-out'
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' }
        }
      }
    }
  },
  variants: {},
  plugins: []
};