module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  mode: 'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif']
      },
      screens: {
        'xs': '321px',
        'custom': '394px',
        'sm':'641px',
        'md':'769px',
        'lg':'1024px',
        'xl': '1280px'
      }
    },
  },
  variants: {},
  plugins: [],
}
