const gulp = require('gulp');
const concat = require('gulp-concat');
const less = require('gulp-less');
const webpack = require('webpack-stream');
const connect = require('gulp-connect');

function webpackTask() {
  return gulp.src('src/app.js')
    .pipe(webpack(require('./webpack.config.js')))
	.pipe(gulp.dest('.'))
	.pipe(connect.reload());
}

function indexTask() {
	return gulp.src([
		'src/index_partials/index-top.html',
		'src/index_partials/index-head.html',
		'src/templates/*.js',
		'src/index_partials/index-bottom.html'
	])
	.pipe(concat('index.html'))
	.pipe(gulp.dest('.'))
	.pipe(connect.reload());
}

function stylesTask() {
	return gulp.src('src/styles/*.less')
	.pipe(less())
	.pipe(concat('styles.css'))
	.pipe(gulp.dest('.'))
	.pipe(connect.reload());
}

const build = gulp.series(
	webpackTask,
	indexTask,
	stylesTask
);

const serve = async function() {
	connect.server({
		livereload: true
	});
};

const watch = async function() {
	gulp.watch('src/**/*.*', build);
};

exports.build = build;
exports.serve = serve;
exports.watch = watch;

exports.default = gulp.series(
	build,
	serve,
	watch
);
