/*
 * Javascript Document
 * Creat by Nelson on 2017/4/30
 * 
 * Website:https://segmentfault.com/u/nelson2016
 * 
 * QQ:616859570
 * Email:Nelson_Lee@outlook.com
 * */

let gulp = require('gulp');
let babel = require("gulp-babel");
let uglify = require('gulp-uglify');

gulp.task("babel", function () {
    return gulp.src("src/*.js")// ES6 源码存放的路径
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest("dist")); //转换成 ES5 存放的路径
});

gulp.task("default", function () {
    gulp.watch('src/*.js', ['babel']);
});

