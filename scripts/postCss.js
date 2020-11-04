const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const remToPx = require('postcss-rem-to-pixel');
const removeNonRem = require('./removeNonRemPlugin.js');
const postcssCustomProperties = require('postcss-custom-properties');
const removeRules = require('postcss-remove-rules');
const comments = require('postcss-discard-comments');
const fs = require('fs');

fs.readFile('src/style.css', (err, css) => {
  postcss([autoprefixer, postcssCustomProperties, comments])
    .use(comments({
      remove: function(comment) { return comment[0] == "@"; }
    }))
    .use(removeRules({
      rulesToRemove: {
        ':root': '*'
      }
    }))
    .process(css, { from: 'src/style.css', to: 'src/style.css' })
    .then(result => {
      fs.writeFile('src/style.css', result.css, () => true)
      if ( result.map ) {
        fs.writeFile('src/style.map', result.map, () => true)
      }
    })
  });


  /*
  Output a "fixed" stylesheet that only contains declarations with rem units
  converted to their px equivalent.
  */
  const fixedFile = 'src/style-fixed.css';
  const fixedFileMap = 'src/style-fixed.map';
  fs.readFile(fixedFile, (err, css) => {
    postcss([
      autoprefixer,
      postcssCustomProperties({preserve: false}),
      comments,
      removeNonRem,
      remToPx({replace: true, propList: ['*']})
    ])
    .use(comments({
        remove: function(comment) { return comment[0] == "@"; }
      }))
      .process(css, { from: fixedFile, to: fixedFile })
      .then(result => {
        fs.writeFile(fixedFile, result.css, () => true)
        if ( result.map ) {
          fs.writeFile(fixedFileMap, result.map, () => true)
        }
      })
  });
