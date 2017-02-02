const gulp = require('gulp');
const ts = require('gulp-typescript');
const sass = require('gulp-sass');

const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');
const uglify = require('gulp-uglify');
const util = require('gulp-util');
const gulpif = require('gulp-if');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const concat = require('gulp-concat');
const del = require('del');
const sysBuilder = require('systemjs-builder');


const tslint = require('gulp-tslint');
const tsConfig = ts.createProject('tsconfig.json');



const node = './node_modules/';

console.log('running ' + (util.env.production ? "production" : "develop") + ' build');

gulp.task('clean', function () {
    return del('dist/**/*');
});

gulp.task('typescript', function() {
    return gulp.src('assets/**/*.ts')
        //.pipe(tslint())
        .pipe(tsConfig())
        .pipe(gulp.dest('dist'));
});

gulp.task('bundle-system', function() {
  var builder = new sysBuilder('', './systemjs.config.js');
  return builder.buildStatic('app', 'dist/js/app.min.js', { minify:true })
    .catch(function(err) {
      console.error('>>> [systemjs-builder] Bundling failed'.bold.green, err);
   });
});

gulp.task('styles', function () {
    return gulp.src('assets/scss/**/*.scss')
        // .pipe(sourcemaps.init())
        .pipe(sass({ includePaths: ['node_modules/bootstrap-sass/assets/stylesheets/'] }))
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulpif(util.env.production, postcss([cssnano()])))
        // .pipe(concat('main.css'))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/styles'))
});

gulp.task('scripts', function () {

    return gulp.src('assets/js/*.js')
        .pipe(gulpif(util.env.production, uglify()))
        .pipe(gulpif(util.env.production, rename({ suffix: '.min' })))
        .pipe(gulp.dest('dist/js'))

});

gulp.task('importScripts', function () {
    return gulp.src([
        node + 'jquery/dist/jquery.js',
        node + 'fullpage.js/dist/jquery.fullpage.js',
        node + "core-js/client/shim.min.js",
        node + "zone.js/dist/zone.js",
        node + "reflect-metadata/Reflect.js",
        node + "systemjs/dist/system.src.js"])
        .pipe(concat('vendors.min.js'))
        .pipe(uglify())
        .pipe(gulpif(!util.env.production, sourcemaps.write()))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('build', ['importScripts', 'styles', 'bundle-system'])



gulp.task('default');
