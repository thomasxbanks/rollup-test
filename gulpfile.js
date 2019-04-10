const gulp = require('gulp');
const babel = require('gulp-babel');
const rollup = require('gulp-better-rollup');
const uglify = require('rollup-plugin-babel-minify');

const srcDir = './src'
const distDir = './dist'

gulp.task('default', () => {
  gulp.src(`${srcDir}/js/app.js`)
  .pipe(rollup({plugins: [babel(), uglify()]}, 'umd'))
  .pipe(gulp.dest(`${distDir}`))
})
