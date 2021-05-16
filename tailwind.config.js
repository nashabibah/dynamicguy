module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      },
      backgroundImage: theme => ({
        'hero': "url('/images/pattern-notes.svg')",
      })
    },
    fontFamily: {
      'sans': ['Raleway'],
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      translate: ['group-hover'],
      backgroundImage: ['group-hover'],
      backgroundBlendMode: ['group-hover'],
      backgroundOpacity: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}