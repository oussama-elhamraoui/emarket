var gulp = require('gulp');

var connect = require('gulp-connect');

gulp.task('connect', function () {
    connect.server({
      root: 'build',
      port: 8080,
      livereload: true
    })
});

gulp.task('default',['build','connect','watch']);

gulp.task('watch', async function(){
    gulp.watch('src/**/*',['build']);
});
gulp.task('html', function () {
    gulp
     .src('src/*.html')
     .pipe(gulp.dest('build')).pipe(connect.reload());
});
gulp.task('css', function () {
    gulp
     .src('src/css/*.css')
     .pipe(gulp.dest('build/css')).pipe(connect.reload());
});
gulp.task('js', function () {
    gulp
     .src('src/js/*.js')
     .pipe(gulp.dest('build/js')).pipe(connect.reload());
});
gulp.task('fonts', function () {
    gulp
     .src('src/fonts/*')
     .pipe(gulp.dest('build/fonts')).pipe(connect.reload());
});
gulp.task('images', function () {
    gulp
     .src('src/images/*')
     .pipe(gulp.dest('build/images')).pipe(connect.reload());
});
gulp.task('build',['html','css','js','fonts','images']);