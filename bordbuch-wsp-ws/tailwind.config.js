module.exports = {
  purge: {
    content: [
      './src/**/*.{html,ts,css,scss,sass,less,styl}',
    ]
  },
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '100': '100',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}