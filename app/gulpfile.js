var gulp = require('gulp'),
    watch = require('gulp-watch');

// require the module as normal
var browserSync = require("browser-sync");

gulp.task('default', ['build', 'watch']);

gulp.task('images',
    function () {
        return gulp.src('../app/images/*')
            .pipe(gulp.dest('../public/images'));
    });

gulp.task('icon',
    function () {
        return gulp.src('../app/*.ico')
            .pipe(gulp.dest('../public'));
    });

gulp.task('manifest',
    function () {
        return gulp.src('../app/manifest.json')
            .pipe(gulp.dest('../public'));
    });

gulp.task('sw',
    function () {
        return gulp.src('../app/service-worker.js')
            .pipe(gulp.dest('../public'));
    });

gulp.task('scripts', function () {
    return gulp.src('../app/scripts/*.js')
        .pipe(gulp.dest('../public/scripts'))
});

gulp.task('styles', function () {
    return gulp.src('../app/styles/*.css')
        .pipe(gulp.dest('../public/styles'))
});

gulp.task('build', ['images', 'scripts', 'styles', 'manifest', 'sw', 'icon'], function () {
    return gulp.src('../app/index.html')
        .pipe(gulp.dest('../public'));
});

gulp.task('watch', function () {

    // Start the server
    browserSync({server: "../public", open: false});

    watch([
        '../app/'
    ], function () {
        gulp.start('build');
    });
});