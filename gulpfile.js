/*
 * Gulpfile for building and updating the Capsule Hugo theme.
 */

// Load npm packages
const gulp = require('gulp');
const cssmin = require('gulp-clean-css');
const print = require('gulp-print').default;
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const log = require('fancy-log');


/*
 * Set global variables:
 *  - src: specifies source directories for the downloaded npm modules
 *  - build: specifies paths for directory for customizations of packages
 *      defaults
 *  - dest: destination for processed dependencies ('static' by default in
 *      Hugo)
 */

// Specify where dependencies are stored.
const src = {
  bulma: {
    sass: './node_modules/bulma/sass/',
  },
  fontawesome: {
    fonts: './node_modules/@fortawesome/fontawesome-free/webfonts/',
    css: './node_modules/@fortawesome/fontawesome-free/css/',
    sass: './node_modules/@fortawesome/fontawesome-free/scss/',
  },
};

// Specify build directory for sass, js, amd images.
const build = {
  bulma: {
    sass: './build/sass/bulma/',
  },
  fontawesome: {
    sass: './build/sass/fontawesome/',
  },
  sass: './build/sass/',
  fonts: './build/fonts/',
};

// Specify directory for processed dependencies.
const dest = {
  css: './static/css/',
  js: './static/js/',
  fonts: './static/fonts/',
};


/*
 * Define gulp tasks:
 *  - default: rebuild css and fonts
 *  - fonts: rebuild fonts
 *  - sass: rebuild css from sass source files
 */

// Compile css from sass files
gulp.task('sass', function() {
  return gulp.src([build.sass + 'capsule.sass'])
      .pipe(sass())
      .pipe(print())
      .pipe(cssmin({compatibility: 'ie8'}))
      .pipe(rename(function(name) {
        name.extname = '.min.css';
      }))
      .pipe(gulp.dest(dest.css));
});

// Copy fonts from node_modules
gulp.task('fonts', function() {
  return gulp.src(src.fontawesome.fonts + '**/*')
      .pipe(gulp.dest(dest.fonts))
      .on('end', function() {
        log.info('Copied fonts.');
      });
});

// Rebuild css and fonts
gulp.task('default', gulp.series(gulp.parallel('sass', 'fonts')));
