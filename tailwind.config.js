/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: '#8D50EF',
      secondary: '#232340',
      // ...
    },
    fontSize:{
      base: '1.8rem',
      '5xl': '5rem'
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

