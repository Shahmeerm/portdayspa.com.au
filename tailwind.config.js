module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Raleway',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        serif: [
          'Big Caslon',
          'Libre Caslon',
          'Book Antiqua',
          'Palatino Linotype',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'Times',
          'serif',
        ],
      },
      colors: {
        'transparent-black': 'hsla(0, 0%, 13%, 0.5)',
        gray: {
          '100': '#F7F7F7',
          '200': '#DCDCDC',
          '300': '#C2C2C2',
          '400': '#A7A7A7',
          '500': '#8C8C8C',
          '600': '#727272',
          '700': '#575757',
          '800': '#3D3D3D',
          '900': '#222222',
        },
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'first', 'last', 'hover', 'focus'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [],
};
