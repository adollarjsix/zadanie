const gulp = require('gulp');
let concat = require('gulp-concat');

function defaultTask() {
	return gulp.src([
		'index_partials/index-top.html',
		'src/templates/*.js',
		'index_partials/index-bottom.html'
	])
	.pipe(concat('index.html'))
	.pipe(gulp.dest('.'));
}

exports.default = defaultTask;
