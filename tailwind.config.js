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
  theme: {
    spacing: generateSizing(6, 'rem'),
    colors: {
      transparent: 'transparent',
      purple: '#7360DF',
      gray: '#5a5a5a'
    },
    extend: {},
  },
  plugins: [],
}