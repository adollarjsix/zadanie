const gulp = require('gulp');
const concat = require('gulp-concat');
const less = require('gulp-less');

function indexTask() {
	return gulp.src([
		'index_partials/index-top.html',
		'index_partials/index-head.html',
		'src/templates/*.js',
		'index_partials/index-bottom.html'
	])
	.pipe(concat('index.html'))
	.pipe(gulp.dest('.'));
}

function stylesTask() {
	return gulp.src('src/styles/*.less')
	.pipe(less())
	.pipe(concat('styles.css'))
	.pipe(gulp.dest('.'))
}

exports.default = gulp.series(
	indexTask,
	stylesTask
);
