var gulp = require('gulp');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');

gulp.task('build', function(){
	return gulp.src(['src/**/*', '!src/**/sass*/', '!src/**/sass*/**/*'])
		.pipe(gulp.dest('dist/'));
});

gulp.task('dist', function (callback) {
  runSequence(
    'sass',
    'build')
});

gulp.task('sass', function(){
	return gulp.src('src/sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('src/css'));
});

