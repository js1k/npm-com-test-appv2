// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // "autoprefixer": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 750,     // (Number) The width of the viewport.
      unitPrecision: 3,       // (Number) The decimal numbers to allow the REM units to grow to.
      viewportUnit: 'vw',     // (String) Expected units.
      //   propList:['*','!font','!font-size'],
      selectorBlackList: ['.ignore', '.hairlines', '.mint-', '.picker-'],  // (Array) The selectors to ignore and leave as px.
      minPixelValue: 1,       // (Number) Set the minimum pixel value to replace.
      mediaQuery: false,       // (Boolean) Allow px to be converted in media queries.
      exclude: ''
    },
    'postcss-viewport-units': {
      filterRule: rule => rule.selector.includes('::after') && rule.selector.includes('::before') && rule.selector.includes(':after') && rule.selector.includes(':before')
    },
    "cssnano": { "cssnano-preset-advanced": { zindex: false,autoprefixer:false}}
  }
}
