import Typography from 'typography';
import theme from 'typography-theme-stern-grove';

// https://github.com/KyleAMathews/typography.js#themes
const typography = new Typography({
  ...theme,
  headerColor: '#FFF',
  bodyColor: '#FFF',
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    a: {
      color: '#FFF',
      textDecoration: 'none',
      fontFamily: options.headerFontFamily.join(','),
    },
    'a:hover,a:active': {
      color: '#FFF',
    },
  }),
});

export default typography;