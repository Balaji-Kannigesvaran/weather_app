const { src, dest, watch, parallel } = require("gulp");
const sass = require('gulp-sass')(require('sass'));

//cb()

//cb(new Error('Something bad has happened'));

function generateCSS(cb) {
    src('*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./'))
        .pipe(sync.stream());
    cb();
}
exports.css = generateCSS;

function watchFiles(cb) {
    watch('*.scss', generateCSS);
}

exports.watch = watchFiles;

const sync = require("browser-sync").create();

function browserSync(cb) {
    sync.init({
        server: {
            baseDir: "."
        }
    });
    watch('*.scss', generateCSS);
    watch("*.html").on('change', sync.reload);
}

exports.sync = browserSync;
