const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const sourcemaps = require('gulp-sourcemaps');
const webserver = require('gulp-webserver');
const livereload = require('gulp-livereload');

gulp.task('sass', () =>
    sass('./*.scss', {sourcemap: true})
        .on('error', sass.logError)
        .pipe(sourcemaps.write())
        .pipe(sourcemaps.write('maps', {
            includeContent: false,
            sourceRoot: 'source'
        }))
        .pipe(gulp.dest('.'))
        .pipe(livereload())
);

gulp.task('html', function() {
    gulp.src('./**/*.html')
        .pipe(livereload())
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./**/*.html', ['html']);
    gulp.watch('./**/*.scss', ['sass']);
});

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            port: 8080,
            livereload: true,
            open: true
        }))
});

gulp.task('default', ['watch', 'sass', 'webserver']);
