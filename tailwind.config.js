/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  extend: {
  animation: {
    'gradient-x': 'gradientX 8s ease infinite',
    'fade-in-up': 'fadeInUp 0.8s ease-out both',
  },
  keyframes: {
    gradientX: {
      '0%, 100%': { 'background-position': '0% 50%' },
      '50%': { 'background-position': '100% 50%' },
    },
    fadeInUp: {
      '0%': { opacity: 0, transform: 'translateY(30px) scale(0.98)' },
      '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
    },
  },
}

}


