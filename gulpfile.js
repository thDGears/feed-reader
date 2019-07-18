'use strict'

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
// CSS Optimizations
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
// JavaScript Optimizations
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');

// Watches & Updates any changes automatically
gulp.task('default', () => {
	gulp.watch('sass/**/*.scss', styles);
	gulp.watch('./index.html', copyHtml);
	gulp.watch('js/**/*.js', scripts);

	// Opens the "index.html" in the default browser for live editing
	browserSync.init({
		server: {
			baseDir: './dist'
		}
	});
});

/* THE DISTRIBUTION VERSION.
 * I removed the Jasmine part from the distributed "index.html" file
 * We could also separate the Jasmine test from the index.html in our source file and use "gulp-jasmine" instead, 
 * but i preferred to leave it as it is in order to reduce some extra work for the Reviewer.
*/
function dist() {
	copyHtml(); // NOTE: don't forget to remove the Jasmine part from the distributed "index.html" file
	styles();
	scripts();
}

// Copy the "index.html" file into the (dist) folder
function copyHtml() {
	return gulp.src('./index.html').pipe(gulp.dest('./dist'));
}

// JS optimizations; by adding sourcemaps, concatination, minifying the file size
function scripts() {
	return gulp.src('js/**/*.js')
				.pipe(sourcemaps.init())
				.pipe(concat('app.js'))
				.pipe(terser())
				.pipe(sourcemaps.write())
				.pipe(gulp.dest('dist/js'));
}

// Compiles (Transpile) the SCSS code into CSS and adds vendor prefixes
function styles() {
	return gulp
			.src('sass/**/*.scss')
			.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
			.pipe(autoprefixer({
				Browserslist: ['last 2 versions']
				// OR; overrideBrowserslist: ['last 2 versions']
			}))
			.pipe(gulp.dest('dist/css'))
			.pipe(browserSync.stream());
}

// exports tasks that we'll use them later
exports.styles = styles;
exports.copyHtml = copyHtml;
exports.scripts = scripts;
exports.dist = dist;
