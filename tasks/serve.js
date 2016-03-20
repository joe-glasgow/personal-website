var gulp = require('gulp');
var serve = require('gulp-serve');

module.exports = function () {
  serve({root: ['/index.html'], port: 3100});
}
