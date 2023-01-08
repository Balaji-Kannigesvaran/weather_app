const { src, dest, watch, parallel } = require("gulp");
const sass = require('gulp-sass')(require('sass'));

//cb()

//cb(new Error('Something bad has happened'));

function generateCSS(cb) {
    src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('public/stylesheets'));
    cb();
}

exports.css = generateCSS;

function watchFiles(cb) {
  //  watch('views/**.ejs', generateHTML);
    watch('sass/**.scss', generateCSS);
  //  watch([ '**/*.js', '!node_modules/**'], parallel(runLinter, runTests));
}

exports.watch = watchFiles;

