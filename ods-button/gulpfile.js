// =====================================================================

/*
  Notes
*/

// =====================================================================

const gulp = require('gulp'),
  gulpSass = require('gulp-sass'),
  gulpautoprefixer = require('gulp-autoprefixer'),
  postcssCustomProperties = require('postcss-custom-properties'),
  postcss = require('gulp-postcss'),
  removeSelectors = require("postcss-remove-selectors"),
  StyleDictionary = require('style-dictionary'),
  copyfiles = require('copyfiles');

// const tokenConfig = StyleDictionary.extend('./scripts/tokenConfig.json');
// const buttonConfig = StyleDictionary.extend('./scripts/buttonConfig.json');
// const dotsConfig = StyleDictionary.extend('./scripts/dotsConfig.json');


// task to copy font files from the OWCSS npm to the local project
// resources are NOT to be committed to version control
gulp.task('copy:fonts', function(cb) {
  copyfiles(['./node_modules/@alaskaair/orion-web-core-style-sheets/fonts/*.*', './demo/fonts/'], true, cb);
  cb();
});


// task to build CSS/Sass resources from Token JSON files
gulp.task('build:tokens', function(cb) {
  StyleDictionary.extend('./scripts/tokenScript.js');
  cb();
});


// produce CSS Tokens using :host versus :root
gulp.task('dist:tokens', function(cb) {
  StyleDictionary.extend('./scripts/tokenScriptCustom.js');
  cb();
});


// task to address Sass processing for the demo view
gulp.task('process:demo', function() {
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
gulp.task('process:src', function() {
  // set path to where Sass files are located to be processed
  return gulp.src('./src/{,*/}*.{scss,sass}')

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
gulp.task('process:dev', function() {
  // set path to where Sass files are located to be processed
  return gulp.src('./src/{,*/}*.{scss,sass}')

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
gulp.task('sass:watch', function() {
  gulp.watch('./**/*.{scss,sass}', gulp.series(gulp.parallel('process:demo', 'process:dev')));
});

// Task(s)
// Gulp Sequence is used to force Gulp to address tasks in specific build order
gulp.task('build', gulp.series(gulp.parallel('copy:fonts', 'build:tokens', 'process:demo', 'process:src')));

gulp.task('dev', gulp.series(gulp.parallel('copy:fonts', 'build:tokens', 'process:demo', 'process:dev', 'sass:watch')));

gulp.task('dist', gulp.series(gulp.parallel('build', 'dist:tokens')));


