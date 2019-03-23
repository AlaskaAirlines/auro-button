// =========================================================================

/*
  Build process API

  # To build resources to view the demo file, perform the following tasks
    1. $ npm run prepare
    2. $ gulp build
    3. $ npm run build
    4. $ polymer serve
    5. Go to http://127.0.0.1:8081

  # To work within the development environment, run the following tasks
    1. $ npm run prepare
    2. $ gulp dev
    3. $ npm run dev
    4. Go to http://127.0.0.1:8081
  
  # To build the distribution resources locally, run the following tasks
    1. $ npm run prepare
    2. $ gulp dist
    3. $ npm run dist
    4. You can view dist version now at http://127.0.0.1:8081

    To build the dist package, run
    $ npm run buildPackage
*/

// =========================================================================

const gulp = require('gulp'),
  gulpSass = require('gulp-sass'),
  gulpautoprefixer = require('gulp-autoprefixer'),
  postcssCustomProperties = require('postcss-custom-properties'),
  postcss = require('gulp-postcss'),
  removeSelectors = require("postcss-remove-selectors"),
  StyleDictionary = require('style-dictionary'),
  copyfiles = require('copyfiles');

// task to copy font files from the OWCSS npm to the local project
// resources are NOT to be committed to version control
gulp.task('copyFonts', function(cb) {
  copyfiles(['./node_modules/@alaskaairux/orion-web-core-style-sheets/fonts/*.*', './demo/fonts/'], true, cb);
  cb();
});


// task to build CSS/Sass resources from Token JSON files
gulp.task('buildTokens', function(cb) {
  StyleDictionary.extend('./scripts/tokenScript.js');
  cb();
});


// produce CSS Tokens using :host versus :root
gulp.task('distTokens', function(cb) {
  StyleDictionary.extend('./scripts/tokenScriptCustom.js');
  cb();
});


// task to address Sass processing for the demo view
gulp.task('processDemo', function() {
  // set path to where Sass files are located to be processed
  return gulp.src('./demo/sass/{,*/}*.{scss,sass}')

    // Sass pipeline
    .pipe(gulpSass({
      errLogToConsole: true,
      outputStyle: 'expanded', //alt options: nested, compact, compressed
    }))

    // Output final CSS in destination
    .pipe(gulp.dest('./demo/css/'));
});


// task for Production Sass processing and legacy support
gulp.task('processSrc', function() {
  // set path to where Sass files are located to be processed
  return gulp.src('./src/*.scss')

    // Sass pipeline
    .pipe(gulpSass({
      errLogToConsole: true,
      outputStyle: 'expanded', //alt options: nested, compact, compressed
    }))

    // Post Sass to CSS process for addressing proprietary prefixes
    .pipe(gulpautoprefixer({ browsers: ['last 4 versions'], cascade: false }))

    // PostCss polyfill pipeline for CSS Custom Properties (CSS variables)
    .pipe(postcss([

      // Boolean flag determines if CSS Custom Property code is in final output
      // or only outputs legacy supported version CSS
      postcssCustomProperties({
        preserve: true
      }),

      removeSelectors({
        selectors: [":root"]}
      )
    ]))

    // Output final CSS in destination
    .pipe(gulp.dest('./src/'));
});

// task for Development Sass processing
gulp.task('processDev', function() {
  // set path to where Sass files are located to be processed
  return gulp.src('./src/*.scss')

    // Sass pipeline
    .pipe(gulpSass({
      errLogToConsole: true,
      outputStyle: 'expanded', //alt options: nested, compact, compressed
    }))

    // PostCss polyfill pipeline for CSS Custom Properties (CSS variables)
    .pipe(postcss([

      removeSelectors({
        selectors: [":root"]}
      )
    ]))

    // Output final CSS in destination
    .pipe(gulp.dest('./src/'));
});

// Sass watcher
gulp.task('sassWatch', function() {
  gulp.watch('./**/*.{scss,sass}', gulp.series(gulp.parallel('processDemo', 'processDev')));
});

// Task(s)
// Gulp Sequence is used to force Gulp to address tasks in specific build order
gulp.task('build', gulp.series(gulp.parallel('copyFonts', 'buildTokens', 'processDemo', 'processSrc')));

gulp.task('dev', gulp.series(gulp.parallel('copyFonts', 'buildTokens', 'processDemo', 'processDev', 'sassWatch')));
