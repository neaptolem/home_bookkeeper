var gulp = require('gulp');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');

gulp.task('buildLib', function() {
  gulp.src(require('./dependencies.json').dependencies)
  .pipe(concat('vendor.js'))
  .pipe(gulp.dest('./dist/js'));
});

gulp.task('buildChart', function() {
  gulp.src(require('./dependencies.json').dependenciesChart)
  .pipe(concat('chartlib.js'))
  .pipe(gulp.dest('./dist/js'));
});
gulp.task('buildCSS', function() {
  gulp.src(require('./dependencies.json').dependenciesCss)
  .pipe(concat('style.css'))
  .pipe(gulp.dest('./dist/css'));
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
gulp.task('templatesDirect', function() {
  return gulp.src(['./app/*/*/*.html'])
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['clean'], function () {
  gulp.start('buildLib','jsUglify','templatesDirect','templates','buildChart','buildCSS');
});
