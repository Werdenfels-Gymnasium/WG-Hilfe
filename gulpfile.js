var gulp = require("gulp"),
    autoprefixer = require("gulp-autoprefixer"),
    minifycss = require("gulp-minify-css"),
    sass = require('gulp-sass'),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    print = require("gulp-print"),
    license = require("gulp-license"),
    minifyHTML = require("gulp-minify-html");

var dist = "dist";

gulp.task("scripts", function() {
  return gulp.src('src/js/**/*.js')
      .pipe(print())
      .pipe(concat("app.js"))
      .pipe(uglify({
          mangle: false
      }).on("error", handleError))
      .pipe(license("Apache", {
        organization: 'Werdenfels-Gymnasium All rights reserved.'
      }))
      .pipe(gulp.dest(dist + "/js"));
});

gulp.task("styles", function() {
  return gulp.src("src/scss/**/*.scss")
      .pipe(print())
      .pipe(concat("app.scss"))
      .pipe(sass())
      .pipe(autoprefixer({
        browsers: [
        'last 2 versions', 'last 4 Android versions'
        ]
      }))
      .pipe(minifycss())
      .pipe(license("Apache", {
        organization: 'Werdenfels-Gymnasium All rights reserved.'
      }))
      .pipe(gulp.dest(dist + "/css"));
});

gulp.task("copy-bowercomponents", function() {
  return gulp.src("bower_components/**/*")
      .pipe(gulp.dest(dist + "/bower_components"));
});

gulp.task("copy-html", function() {
  return gulp.src("src/**/*.html")
      .pipe(minifyHTML())
      .pipe(gulp.dest(dist));
});

gulp.task("copy-content", function() {
  return gulp.src("src/content/**/*")
      .pipe(gulp.dest(dist + "/content"));
});

gulp.task("copy-images", function() {
  return gulp.src("src/img/**/*")
      .pipe(gulp.dest(dist + "/img"));
});

gulp.task("watch", function() {
  gulp.watch("src/**/*", ["build"]);
});

gulp.task("copy", ["copy-bowercomponents", "copy-html", "copy-content", "copy-images"]);
gulp.task("build", ["scripts", "styles", "copy"]);

function handleError(err) {
  console.log(err.toString());
}