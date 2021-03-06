const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const sourcemaps = require('gulp-sourcemaps');
const webserver = require('gulp-webserver');
const livereload = require('gulp-livereload');

gulp.task('sass', () =>
    sass('./*.scss', {sourcemap: true})
        .on('error', sass.logError)
        // for inline sourcemaps 
        .pipe(sourcemaps.write())
        // for file sourcemaps 
        .pipe(sourcemaps.write('maps', {
            includeContent: false,
            sourceRoot: 'source'
        }))
        .pipe(gulp.dest('.'))
        .pipe(livereload())
);

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./**/*.scss', ['sass']);
});

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            port: 8080,
            open: true
        }))
});

gulp.task('default', ['watch', 'sass', 'webserver']);
