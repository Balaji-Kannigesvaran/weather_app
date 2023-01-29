const { src, dest, watch } = require("gulp");

const sass = require("gulp-sass")(require("sass"));
function generateCSS(cb) {
  src("./Style/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./Style"))
    .pipe(sync.stream());
  cb();
}
exports.css = generateCSS;

function watchFiles(cb) {
  watch("./Style/*.scss", generateCSS);
}
exports.watch = watchFiles;

const sync = require("browser-sync").create();

function browserSync(cb) {
  sync.init({
    server: {
      baseDir: ".",
    },
  });
  watch("./Style/*.scss", generateCSS);
  watch("./HTML/*.html").on("change", sync.reload);
}

exports.sync = browserSync;
