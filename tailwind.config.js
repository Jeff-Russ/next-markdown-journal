const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const tPath = '/static/textures'
const textures = {
  pinstripedSuit: `${tPath}/pattern/pinstriped-suit.png`, // meh // (for paper?)
  elegantGrid: `${tPath}/pattern/elegant-grid.png`, // meh // (for paper?)
  subtleStripes: `${tPath}/pattern/subtle-stripes.png`, // meh // (for paper?)
  texturedStripes: `${tPath}/pattern/textured-stripes.png`, // meh // (for paper?)
  arabesque: `${tPath}/pattern/arabesque.png`, // subtle
  argyle: `${tPath}/pattern/argyle.png`, // subtle
  batthern: `${tPath}/pattern/batthern.png`, // subtle
  checkeredPattern: `${tPath}/pattern/checkered-pattern.png`, // subtle
  escheresqueDark: `${tPath}/pattern/escheresque-dark.png`, // good subtle
  diagonalStripedBrick: `${tPath}/pattern/diagonal-striped-brick.png`, // good
  myLittlePlaidDark: `${tPath}/pattern/my-little-plaid-dark.png`, // ok
  vichy: `${tPath}/pattern/vichy.png`, // meh
  flowersSubtle: `${tPath}/pattern/flowers-subtle.png`, // good
  flowers: `${tPath}/pattern/flowers.png`, // ok
  graphy: `${tPath}/pattern/graphy.png`, // meh
  swirl: `${tPath}/pattern/swirl.png`, // meh subtle
  gplay: `${tPath}/pattern/gplay.png`, // ok
  pineappleCut: `${tPath}/pattern/pineapple-cut.png`, // meh
  subtleZebra3d: `${tPath}/pattern/subtle-zebra-3d.png`, // good
  washi: `${tPath}/pattern/washi.png`, // good
  circuits: `${tPath}/pattern/circuits.svg`, // great
  skulls: `${tPath}/pattern/skulls.png`, // extreme

  blackPaper: `${tPath}/paper/black-paper.png`,
  cardboardFlat: `${tPath}/paper/cardboard-flat.png`,
  groovepaper: `${tPath}/paper/groovepaper.png`,
  handmadePaper: `${tPath}/paper/handmade-paper.png`,
  linedPaper: `${tPath}/paper/lined-paper.png`,
  naturalPaper: `${tPath}/paper/natural-paper.png`,
  otisRedding: `${tPath}/paper/otis-redding.png`,
  paper1: `${tPath}/paper/paper-1.png`,
  paper2: `${tPath}/paper/paper-2.png`,
  paper3: `${tPath}/paper/paper-3.png`,
  paperFibers: `${tPath}/paper/paper-fibers.png`,
  paper: `${tPath}/paper/paper.png`,
  ricePaper: `${tPath}/paper/rice-paper.png`,
  sandpaper: `${tPath}/paper/sandpaper.png`,
  softWallpaper: `${tPath}/paper/soft-wallpaper.png`,

  blackLinen: `${tPath}/fabric/black-linen.png`, // subtle
  tweed: `${tPath}/fabric/tweed.png`, // subtle
}

const bgImageLight = textures.handmadePaper
const bgTintRGBLight = '255, 253, 250'
const bgTintOpacityLight = '0.5'
const bgImageDark = textures.washi
const bgTintRGBDark = '10, 5, 0'
const bgTintOpacityDark = '0.9'

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './lib/**/*.js',
    './data/**/*.mdx', // https://stackoverflow.com/questions/64657572/production-gatsby-blog-not-rendering-tailwindcss-classes-in-mdx-files
    // https://stackoverflow.com/questions/61325859/nextjs-tailwindcss-css-classes-are-missing-in-production
  ],

  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        // https://www.viget.com/articles/tips-for-your-tailwind-config/
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
        serif: ['Alice', ...defaultTheme.fontFamily.serif],
        display: ['Abril Fatface', ...defaultTheme.fontFamily.serif],
        icons: ['Material Icons', ...defaultTheme.fontFamily.mono], // For guides:
        // see https://developers.google.com/fonts/docs/material_icons
        // and https://fonts.google.com/icons
      },
      colors: {
        primary: colors.teal,
        gray: colors.stone,
      },
      backgroundImage: {
        'image-light': `linear-gradient(
                            rgba(${bgTintRGBLight}, ${bgTintOpacityLight}), 
                            rgba(${bgTintRGBLight}, ${bgTintOpacityLight})),
                            url('${bgImageLight}'
                          )`,
        'image-dark': `linear-gradient(
                            rgba(${bgTintRGBDark}, ${bgTintOpacityDark}),
                            rgba(${bgTintRGBDark}, ${bgTintOpacityDark})),
                            url('${bgImageDark}'
                          )`,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: theme('fontFamily.serif'),
            fontWeight: '400',
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')} !important`,
              },
              code: { color: theme('colors.primary.400') },
            },
            // 'h1,h2,h3,h4,h5,h6': {
            //   fontFamily: 'font-display',
            // },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.900'),
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
            },
            code: {
              color: theme('colors.orange.100'),
              backgroundColor: theme('colors.gray.400'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')} !important`,
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.300'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.300'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.300'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.300'),
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
            },
            code: {
              backgroundColor: theme('colors.gray.800'),
            },
            details: {
              backgroundColor: theme('colors.gray.800'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.400'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: { color: theme('colors.gray.200') },
            thead: {
              th: {
                color: theme('colors.gray.300'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.400'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
