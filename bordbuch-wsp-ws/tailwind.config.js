module.exports = {
  purge: {
    content: [
      './src/**/*.{html,ts,css,scss,sass,less,styl}',
    ]
  },
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
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