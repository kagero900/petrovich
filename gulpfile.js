var gulp = require('gulp'); //Подключаем Gulp
var sass = require('gulp-sass'); //Подключаем Sass пакет
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var rename = require("gulp-rename");
var babel = require('gulp-babel');
var run = require("run-sequence");
var del = require("del");
var jsmin = require("gulp-uglify");
var server = require('browser-sync').create();

gulp.task("clean", function () {
  return del("build");
});

gulp.task("copy", function () {
  return gulp.src([
    "source/misc/**",
    "source/favicon.ico",
    "source/index.html",
    "source/js/vue.min.js",
    "source/js/products.json"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});

gulp.task('script', function() {
  gulp.src('source/js/**/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest("build/js"))
        .pipe(jsmin())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('build/js'))
        .pipe(server.stream());
});

gulp.task('serve', ['script'], function() {
  server.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('source/js/*.js', ['script']);
  gulp.watch('source/*.html').on('change', server.reload);
});

gulp.task("build", function (done) {
  run(
    "clean",
    "copy",

    "script",
    done
  );
});
