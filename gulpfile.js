var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");
var minifycss = require("gulp-minify-css");
var sass = require('gulp-sass');
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var print = require("gulp-print");
var license = require("gulp-license");
var minifyHTML = require("gulp-minify-html");

var dist = "dist";

gulp.task("scripts", function() {
  return gulp.src('src/js/**/*.js')
      .pipe(print())
      .pipe(uglify({ mangle: false }).on("error", handleError))
      .pipe(concat("app.js"))
      .pipe(license("Apache", { organization: 'Werdenfels-Gymnasium All rights reserved.' }))
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

gulp.task("copy-deps", function() {
  return gulp.src("node_modules/+(marked|angular?(-*))/**/*")
      .pipe(gulp.dest(dist + "/node_modules"));
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

gulp.task("copy", ["copy-deps", "copy-html", "copy-content", "copy-images"]);
gulp.task("build", ["scripts", "styles", "copy"]);
gulp.task('default', ['build']);

function handleError(err) {
  console.log(err.toString());
}