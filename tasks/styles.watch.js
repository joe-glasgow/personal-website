var gulp = require('gulp');
var sass = require('gulp-sass');
var styles = require('./styles');

module.exports = function () {
  gulp.watch('./src/sass/**/*.scss', ['styles']);
}
