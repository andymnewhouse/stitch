const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      './resources/**/*.antlers.html',
      './resources/**/*.blade.php',
      './content/**/*.md',
    ],
    safelist: [
        'from-red-500',
        'to-red-700',
        'from-orange-500',
        'to-orange-700',
        'from-yellow-500',
        'to-yellow-700',
        'from-green-500',
        'to-green-700',
        'from-blue-500',
        'to-blue-700',
        'from-purple-500',
        'to-purple-700',
    ],
  },

  darkMode: 'media',

  theme: {
    borderColor: (theme) => ({
      ...theme('colors'),
      default: theme('colors.black', 'currentColor'),
    }),

    inset: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '0': '0',
      auto: 'auto',
    }),

    extend: {
      borderRadius: {
        xl: '.75rem',
      },

      colors: {
        black: '#12151E',
        'hot-pink': '#fd2d78',
        orange: colors.orange,
      },

      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
      },

      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
      },

      screens: {
        print: { raw: 'print' },
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            li: {
              marginTop: 0,
              marginBottom: 0,
            },
            '> ul > li p': {
              marginTop: 0,
              marginBottom: 0,
            },
            '> ul > li > *:first-child': {
              marginTop: 0,
            },
            '> ul > li > *:last-child': {
              marginBottom: 0,
            },
          },
        },
        light: {
          css: [
            {
              color: theme('colors.gray.400'),
              '[class~="lead"]': {
                color: theme('colors.gray.300'),
              },
              a: {
                color: theme('colors.white'),
              },
              strong: {
                color: theme('colors.white'),
              },
              'ol > li::before': {
                color: theme('colors.gray.400'),
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.600'),
              },
              hr: {
                borderColor: theme('colors.gray.200'),
              },
              blockquote: {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.gray.600'),
              },
              h1: {
                color: theme('colors.white'),
              },
              h2: {
                color: theme('colors.white'),
              },
              h3: {
                color: theme('colors.white'),
              },
              h4: {
                color: theme('colors.white'),
              },
              'figure figcaption': {
                color: theme('colors.gray.400'),
              },
              code: {
                color: theme('colors.white'),
              },
              'a code': {
                color: theme('colors.white'),
              },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800'),
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.400'),
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.600'),
              },
            },
          ],
        },
      }),
    },
  },

  variants: {
    inset: ['responsive', 'hover'],
    extend: {
      typography: ['dark'],
    },
  },

  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
