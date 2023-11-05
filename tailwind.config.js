/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: '#8D50EF',
      secondary: '#232340',
      // white: 'rgba(255, 255, 255, 0.70)',
      grayLight: 'rgba(0, 0, 0, 0.10)'
      // ...
    },
    fontSize:{
      base: '1.8rem',
      '5xl': '5rem'
    },
    boxShadow: {
      '3xl': '0px 0px 60px 0px rgba(0, 0, 0, 0.10)',
    },
    extend: {
      opacity: {
        '50': '0.50',
      }
    },
  },
  plugins: [
  ],
}

