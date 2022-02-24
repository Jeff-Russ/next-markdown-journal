module.exports = {
  documentOverrides: {
    pages: [],
    paths: [
      '/empty-test',
      '/Tailwind-test',
      '/Tailwind-CSS-flex-grid-test',
      '/Tailwind-Grids-test',
      '/Simple-Tailwind-CSS-starter-test',
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
    ],
  },
}
