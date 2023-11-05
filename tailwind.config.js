/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: '#8D50EF',
      secondary: '#232340',
      white: '#FFF'
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
      },
      width:{
        '1': '1.5rem'
      },
      borderRadius: {
        'sm': '0.3rem',
        'md': '0.375rem',
        'lg': '1.5rem',
        'full': '9999px',
        'large': '12px',
      },
      padding: {
        '30': '3rem',
        '13': '1.3rem',
      }

    },
  },
  plugins: [
  ],
}

