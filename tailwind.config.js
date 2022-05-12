module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: theme => ({
        'cover-image': "url('./img/cover-image.jpg')"
      }),
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
}
