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
      // '/resume-iframe',
      '/learning-tests/Realizing-common-layouts-using-CSS-Grid-Layout',
    ],
  },
  LayoutWrapperOverrides: {
    pages: ['/[...slug]'],
    paths: ['/resume-iframe-inlined-no_deploy', '/resume-iframe-noninlined-no_deploy'],
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
      '/learning-tests/Realizing-common-layouts-using-CSS-Grid-Layout',
    ],
  },
}
