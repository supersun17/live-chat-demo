const gulp = require('gulp');
const ts = require('gulp-typescript');
const views = ['src/views/*'];
const public = ['src/public/*/*']

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

// start watching changes
gulp.task('watch', ['scripts'], () => {
  	gulp.watch('src/**/*.ts', ['scripts']);
});

// compile typescript to javascript
gulp.task('scripts', () => {
  	const tsResult = tsProject.src()
  	.pipe(tsProject());
  	return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('assets', () => {
	gulp.src(views)
  	.pipe(gulp.dest('dist/views'));
  	gulp.src(public)
  	.pipe(gulp.dest('dist/public'));
});

gulp.task('default', ['watch', 'assets']);