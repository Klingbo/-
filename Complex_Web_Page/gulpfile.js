let gulp = require('gulp');
let sass = require('gulp-sass');
let cleanCss = require('gulp-clean-css');
let imagemin = require('gulp-imagemin');

gulp.task('convert_css', () => {
  return gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCss({compatibility: 'ie8',format: 'beautify'}))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch_sass', () => {
  gulp.watch('./sass/*.scss', ['convert_css'])
});

gulp.task('imagemin', () => {
  return gulp.src('./img/*')
         .pipe(imagemin())
         .pipe(gulp.dest('./min_image'))
});