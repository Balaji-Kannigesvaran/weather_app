const { src, dest, watch, parallel } = require("gulp");
const sass = require('gulp-sass')(require('sass'));

//cb()

//cb(new Error('Something bad has happened'));

function generateCSS(cb) {
    src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('public/stylesheets'))
        .pipe(sync.stream());
    cb();
}
exports.css = generateCSS;

function watchFiles(cb) {
    watch('sass/**.scss', generateCSS);
}

exports.watch = watchFiles;

const sync = require("browser-sync").create();

function browserSync(cb) {
    sync.init({
        server: {
            baseDir: "./public"
        }
    });
    watch('sass/**.scss', generateCSS);
    watch("./public/**.html").on('change', sync.reload);
}

exports.sync = browserSync;

