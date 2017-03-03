'use strict';

const gulp = require('gulp');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const webpack = require('gulp-webpack');
const named = require('vinyl-named');


const files = {
    css: ['./client/sources/css/*.scss', './client/sources/css/**/*.scss'],
    main: ['./client/sources/js/main.js', './client/sources/js/*.js', './client/sources/js/**/*.js'],
    vendor: ['./client/sources/js/vendor.js'],
};



///////////////////////////// CSS /////////////////////////////
gulp.task('css', function () {
    return gulp.src(files.css[0])
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        }))
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: ['node_modules/foundation-sites/scss']
        }))
        //.pipe(notify('css compiled'))
        .pipe(gulp.dest('./client/build/css'));
});



///////////////////////////// JS /////////////////////////////
function webpackGenerator(id) {
    let source = files[id][0];
    if (typeof source == 'string') {
        source = [source];
    }

    return gulp.src(source)
        .pipe(named())
        .pipe(webpack({
            devtool: '#inline-source-map'
        }))
        //.pipe(notify(`${id}.js compiled`))
        .pipe(gulp.dest('./client/build/js'));
}

gulp.task('js:vendor', () => { return webpackGenerator('vendor') });
gulp.task('js:main',   () => { return webpackGenerator('main')   });

gulp.task('js', ['js:vendor', 'js:main']);



///////////////////////////// WATCH TASKS /////////////////////////////

// Watch task for css
gulp.task('watch:css',       () => { return gulp.watch(files.css,    ['css'])       });
// Watch tasks for javascript
gulp.task('watch:js:vendor', () => { return gulp.watch(files.vendor, ['js:vendor']) });
gulp.task('watch:js:main',   () => { return gulp.watch(files.main,   ['js:main'])   });

gulp.task('watch:js', ['watch:js:vendor', 'watch:js:main']);


///////////////////////////// GENERAL /////////////////////////////
gulp.task('watch', ['watch:js', 'watch:css']);
gulp.task('default', ['css', 'js', 'watch']);
