const {src, dest, watch} = require('gulp');
const scss = require('gulp-sass');
const sass = require('gulp-sass')(require ('sass'));

function styles() {
    return src('app/scss/style.scss')
    .pipe(scss())
    .pipe(dest('app/css'))
}

function watching() {
    watch(['app/scss/**/*.scss'], styles)
}
exports.styles = styles;
exports.watching = watching;