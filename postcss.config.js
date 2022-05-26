module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // BEGIN added for SASS:
    'postcss-import': {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
    // END added for SASS
  },
}
