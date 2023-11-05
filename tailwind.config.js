/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: '#8D50EF',
      secondary: '#232340',
      white: 'rgba(255, 255, 255, 0.70)',
      grayLight: '0px 0px 60px 0px rgba(0, 0, 0, 0.10)'

    },
    fontSize:{
      sm: '1.6rem',
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
        '1': '1.5rem',
        '2': '2.4rem',
        'menu': '71rem'
      },
      maxWidth: {
        '1/2': '50%',
      },
      height:{
        'menu': '6.2rem'
      },
      borderRadius: {
        'sm': '0.3rem',
        'md': '1.5rem',
        'full': '9999px',
        'lg': '2.6rem',
      },
      padding: {
        '30': '3rem',
        '13': '1.3rem',
      },
    },
  },
  plugins: [
  ],
}

