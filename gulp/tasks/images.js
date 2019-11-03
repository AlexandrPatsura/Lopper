// images
const imagemin       = require('gulp-imagemin');
const imageminWebp   = require('imagemin-webp');

module.exports = function () {
  $.gulp.task('images', function () {
    return $.gulp.src($.paths.images.src) // {since: $.glp.gulp.lastRun('images')})
    .pipe($.glp.imagemin([
      $.glp.imagemin.gifsicle({ interlaced: true }),
      $.glp.imagemin.jpegtran({ progressive: true }),
      $.glp.imagemin.optipng({ optimizationLevel: 5 }),
      $.glp.imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ], {
      verbose: true
    }))
    .pipe($.gulp.dest($.paths.images.dest));
  });

  imagemin(['src/images/**/*.{jpg,jpeg,png}'], 'build/assets/images/', {
    use: [
      imageminWebp({ quality: 50 })
    ]
  });
}