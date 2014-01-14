var gulp = require('gulp');
var jscs = require('gulp-jscs');
var mocha = require('gulp-mocha');

gulp.task('default', function () {
    gulp.src('*.js')
        .pipe(jscs());
    gulp.src('test.js')
        .pipe(mocha());
});
