module.exports = {
  documentOverrides: {
    pages: [],
    paths: [
      '/empty-test',
      '/Tailwind-test',
      '/Tailwind-CSS-flex-grid-test',
      '/Tailwind-Grids-test',
      '/Simple-Tailwind-CSS-starter-test',
      // '/tailwind-test',
      // '/resume',
      '/learning-tests/Realizing-common-layouts-using-CSS-Grid-Layout',
    ],
  },
  appOverrides: {
    pages: ['/[...slug]'],
    paths: [
      '/empty-test',
      '/Tailwind-test',
      '/Tailwind-CSS-flex-grid-test',
      'Tailwind-Grids-test',
      '/Simple-Tailwind-CSS-starter-test',
      // '/tailwind-test',
      // '/resume',
      '/learning-tests/Realizing-common-layouts-using-CSS-Grid-Layout',
    ],
  },
}
