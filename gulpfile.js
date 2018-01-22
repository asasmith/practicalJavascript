const gulp = require('gulp')
const browserSync = require('browser-sync')

gulp.task('watch', ['browserSync'], function() {
  gulp.watch('*.js', browserSync.reload)
  gulp.watch('*.html', browserSync.reload)
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './',
    },
    port: 1111,
    open: false
  })
})
