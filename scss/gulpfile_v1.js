var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect-php');
var browserSync = require('browser-sync');

gulp.task('webserver', function(){
    connect.server({
        base: 'public',
        port: 8010,
        keepalive: true,
        stdio: 'ignore'
    });
});

gulp.task('browser-sync', ['webserver'], function(){
    browserSync({
        proxy: '127.0.0.1:8010',
        port: 8080,
        open: true,
        notify: false
    });
});

gulp.task('watch', function(){
    gulp.watch('./**/*.html', function(event){
        browserSync.reload();
        console.log(event);
    });
    gulp.watch('./**/*.scss', function(event){
        browserSync.reload();
        console.log(event);
    });
    gulp.watch('./**/*.js', function(event){
        browserSync.reload();
        console.log(event);
    });
});

gulp.task('sass', () =>
    sass('./**/*.scss', {sourcemap: true})
        .on('error', sass.logError)
        .pipe(sourcemaps.write())
        .pipe(sourcemaps.write('maps', {
            includeContent: false,
            sourceRoot: 'source' }))
        .pipe(gulp.dest('.'))
);

gulp.task('default', ['browser-sync', 'watch']);
