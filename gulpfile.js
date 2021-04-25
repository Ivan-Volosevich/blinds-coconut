const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const pug = require('gulp-pug');
const browserSync = require('browser-sync');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

function fonts() {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('.public/fonts/'))
        .pipe(browserSync.stream());
}

function styles() {
    return gulp.src('src/scss/main.scss')
        .pipe(sass())
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream());
}

function templates() {
    return gulp.src('./src/pug/pages/*.pug')
        .pipe(pug({
            doctype: 'html',
            pretty: true
        }))
        .pipe(gulp.dest('./public'))
        .pipe(browserSync.stream());
}

function js() {
    return gulp.src('src/js/index.js')
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulp.dest('./public/js'))
        .pipe(browserSync.stream());
}

function images() {
    return gulp.src('src/img/*')
        .pipe(gulp.dest('./public/img'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './public',
            index: 'index.html'
        }
    });
    fonts();
    styles();
    js();
    images();
    gulp.watch('src/js/**/*.js', js);
    gulp.watch('src/scss/*/*.scss', styles);
    gulp.watch('src/pug/**/*.pug', templates);
    gulp.watch('public/index.html').on('change', browserSync.reload);
}


exports.fonts = fonts;
exports.images = images;
exports.templates = templates;
exports.js = js;
exports.watch = watch;