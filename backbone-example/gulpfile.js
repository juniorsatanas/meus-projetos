var gulp = require('gulp');
var inject = require('gulp-inject');
//var webserver = require('gulp-webserver');
var bower = require('gulp-bower');
var wiredep = require('wiredep').stream;
connect = require('gulp-connect');

gulp.task('build', function () {
    var target = gulp.src('./app/index.html');
    var sources = gulp.src(['./app/**/*.js', './app/**/*.css'], {read: false});
    return target.pipe(inject(sources)).pipe(wiredep()).pipe(gulp.dest('./build'));
});
/*
gulp.task('webserver', function() {
gulp.src('build').pipe(webserver({
livereload: true,
open: true,
fallback: 'index.html'
}));
});
*/

gulp.task('connect', function() {
    connect.server({
        livereload: true,
        fallback: "./build/index.html"
    });
});

gulp.task('default', ['build', 'connect']);
