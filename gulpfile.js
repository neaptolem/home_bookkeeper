var gulp = require('gulp');
var concat = require('gulp-concat');
var clean = require('gulp-clean');

var files = {
  src: ['app/app.module.js',
  'app/app.routes.js',
  'app/shared/navbar/navbarDirective.js',
  'app/shared/pagetitle/pagetitleDirectice.js',
  'app/components/home/homeModule.js',
  'app/components/chart/chartModule.js'
],
  filename: 'build.js',
  dist: 'dist'
};

gulp.task('javascript', function () {
  return gulp.src(files.src)
    .pipe(concat(files.filename))
    .pipe(gulp.dest(files.dist));
});

gulp.task('clean', function () {
  return gulp.src('dist')
    .pipe(clean());
});

gulp.task('default', ['clean'], function () {
  gulp.start('javascript');
});
