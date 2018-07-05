const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("scss", done => {
  gulp
    .src("./src/scss/styles.scss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./static"));
  done();
});

gulp.task("watch:scss", done => {
  gulp.watch("./src/scss/**/*.scss").on("change", gulp.series("scss"));
  done();
});
