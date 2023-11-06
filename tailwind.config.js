/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: '#8D50EF',
      secondary: '#232340',
      white: 'rgba(255, 255, 255, 0.70)',
      whiteLight: '#fff',
      grayLight: '0px 0px 60px 0px rgba(0, 0, 0, 0.10)',
      purpleLight: '#EAE4FF',
      bgLight: 'rgba(254,254,254,1)',
      bgDark: 'rgba(235,229,255,1)',
      gray: 'rgba(0, 0, 0, 0.30)'

    },
    fontSize:{
      sm: '1.6rem',
      base: '1.8rem',
      '5xl': '4.9rem'
    },
    boxShadow: {
      '3xl': '0px 0px 60px 0px rgba(0, 0, 0, 0.10)',
    },
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      opacity: {
        '60': '0.60',
        '50': '0.50',
        '20': '0.20'
      },
      width:{
        '1': '1.5rem',
        '2': '2.4rem',
        'sb': '15rem',
        'menu': '55rem',
        'menuRes': '25rem',
        'menuMd': '40rem'
        
      },
      maxWidth: {
        // '1/2': '50%',
      },
      height:{
        'header':'5rem',
        'menu': '4rem',
        'sb': '5.6rem',
        'sc': '24px'
      },
      space: {
        '50': '5rem',
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
    backdropBlur: {
      xs: '51.984676361083984px',
    },
    gradientColorStopPositions:{
      33: 'linear-gradient(165deg, rgba(254,254,254,1) 0%, rgba(235,229,255,1) 27%)'

    }
  },
  plugins: [
  ],
}

