var gulp = require('gulp');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');


gulp.task('buildLib', function() {
  gulp.src(require('./dependencies.json').dependencies)
  .pipe(concat('vendor.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js'));
});
gulp.task('jsUglify', function() {
  return gulp.src('./app/**/*.js')
  .pipe(concat('build.js'))
  .pipe(gulp.dest('./dist/js'));
});
gulp.task('templates', function() {
  return gulp.src('./app/index.html')
  .pipe(gulp.dest('./dist'));
});
gulp.task('clean', function () {
  return gulp.src('dist')
    .pipe(clean());
});

gulp.task('default', ['clean'], function () {
  gulp.start('buildLib','jsUglify','templates');
});
