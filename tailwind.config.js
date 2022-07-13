const settingsScreens = require('./tailwind.settings.screens')
const settingsFontSizes = require('./tailwind.settings.fontSizes')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: settingsScreens,
    fontSize: settingsFontSizes,
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
      '200u':'200%',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'purpleer': 'rgb(123, 31, 162)',
      'violeter': 'rgb(103, 58, 183)',
      'pinker': 'rgb(244, 143, 177)',
      'bermuda': '#78dcca',
    },
    backgroundPosition: {
      bottom: 'bottom',
      'bottom-4': 'center bottom 1rem',
      center: 'center',
      'center-2': '0% center',
      'center-3': '-200% center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      'left-4': 'var(--star-left)',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
      'top-4': 'center top 1rem',
      'top-5': 'var(--star-top)',
    },
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
      },
      backgroundImage: {
        'gradient-to-b':
          'linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);',
        'grad-to-r' :
        'linear-gradient(to right, bg-purpleer,bg-violeter,bg-pinker,bg-purpleer, bg-violeter);',
    },
    gridTemplateColumns: {
      // Simple 16 column grid
      '16': 'repeat(16, minmax(0, 1fr))',

      // Complex site-specific column configuration
      '45': 'auto-flow 150 / repeat(2, 150)',
    },
    transformOrigin: {
      '45ddig': 'rotate(45deg)',
      'scale45': 'scale(1.15) rotate(-45deg)',
    },
    grayscale: {
      50: '50%',
      80: '80%',
    },
    inset: {
      'star-top': 'var(--star-top)',
      'star-left': 'var(--star-left)',
    },
    width: {
      'w-clamp': 'clamp(20px, 1.5vw, 30px)',
    },
    height: {
      'h-clamp': 'clamp(20px, 1.5vw, 30px)',
    },
      animation: {
        scalerr: 'scaler 700ms ease forwards',
        rotater: 'rotaters 1000ms linear infinite',
        backgroundPann: 'backgroundPanner 3s linear infinite',
      },
      keyframes: {
        scaler: {
          'from, to' : { transform: 'scale(0)' },
          '50%' : { transform: 'scale(1)' },
        },
        backgroundPanner: {
          'from' : 'bg-center-2',
          'to' : 'bg-center-3',
        },
        rotaters: {
          'from': {transform: 'rotate(0deg)'},
          'to': { transform: 'rotate(180deg)'},
        },
      },
    },
    daisyui: {
      styled: true,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: "",
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-textshadow'),
    require('@tailwindcss/typography'),
    require("daisyui"),
  ],
}
