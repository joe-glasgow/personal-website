var gulp = require('gulp');
var serve = require('gulp-serve')

gulp.task('styles', require('./tasks/styles'));
gulp.task('styles:watch', require('./tasks/styles.watch'));
gulp.task('build', require('./tasks/build.js'));
gulp.task('serve', serve({root: ['./'], port: 3100}));
// default task
gulp.task('default', ['styles', 'build', 'serve']);
