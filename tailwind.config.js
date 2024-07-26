function generateSizing(maxNumber, characterType) {
  // generate sizings, that include decimal numbers (x.25, x.5, x.75)
  const sizings = {}
  for (let i = 0; i <= maxNumber; i += 0.25) {
    sizings[i.toString()] = `${i}${characterType}`
  }
  return sizings
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  corePlugins: {
    container: false
  },
  theme: {
    spacing: generateSizing(6, 'rem'),
    colors: {
      transparent: 'transparent',
      purple: '#7360DF',
      gray: '#5a5a5a',
      white: '#fff'
    },
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    extend: {
      screens: {
        mobile: '475px'
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          padding: '1rem 0.75rem',
          gap: '2rem',
          '@screen tablet': {
            padding: '1rem 0.75rem'
          },
          '@screen desktop': {
            padding: '1.25rem 1.5rem'
          },
        },
        '.container-sm': {
          padding: '0.75rem',
          gap: '1rem',
          '@screen desktop': {
            padding: '1.5rem 1.25rem'
          },
        },
        '[class*="container"]': {
          display: 'flex',
          'flex-direction': 'column',
          'align-items': 'flex-start',
        },
        '.container-row': {
          'flex-direction': 'row',
        },
      })
    }
  ]
}