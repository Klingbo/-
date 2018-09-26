'use strict';

// 引入gulp包，nodeJs代码
var gulp = require('gulp');
// 引入gulp-sass包
var sass = require('gulp-sass');

// 创建一个gulp任务
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss') //让gulp去拿到原始的sass文件
    // {outputStyle:'expanded'} 设置css文件中样式的书写格式
    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))//把sass文件交给gulp-sass做编译转换成css文件，如果间听到错误，就报错
    .pipe(gulp.dest('./src/css'));//把css文件 输出到目标文件夹
});

// 创建gulp监听任务：sass:watch
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch'], function() {

})
