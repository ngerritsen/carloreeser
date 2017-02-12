const path = require('path')
const gulp = require('gulp')
const gutil = require('gulp-util')
const browserSync = require('browser-sync').create()
const fs = require('fs')
const postcss = require('gulp-postcss')
const ejs = require('gulp-ejs')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const atImport = require('postcss-import')
const runSequence = require('run-sequence')

let env = 'production'
let dest = 'dist'

gulp.task('css', () => {
  const plugins = [
    atImport(),
    autoprefixer({ browsers: ['last 2 versions', 'ie > 10']} )
  ]

  if (env === 'production') {
    plugins.push(cssnano())
  }

  return gulp.src(['./app/styles/style.css', './app/styles/critical.css'])
    .pipe(postcss(plugins))
    .pipe(gulp.dest(path.join(dest, 'css')))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('files', () => {
  gulp.src('./app/**/*.{png,pdf}')
    .pipe(gulp.dest(dest))
})

gulp.task('html', () => {
  gulp.src('./app/index.ejs')
    .pipe(
        ejs({
          buildNumber: process.env.TRAVIS_BUILD_NUMBER,
          criticalCssFile: './.tmp/critical.css',
          fs
        }, null, { ext: '.html' })
          .on('error', gutil.log)
    )
    .pipe(gulp.dest(dest))
})

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: dest
    }
  })
})

gulp.task('build', ['css', 'files'], callback => {
  runSequence('html', callback)
})

gulp.task('watch', () => {
  gulp.watch('app/styles/**/*.css', ['css'])
  gulp.watch('./app/**/*.{png,pdf}', ['files'])
  gulp.watch(['app/index.ejs', path.join(dest, '**/*.css')], ['html'])
})

gulp.task('default', ['css', 'files'], callback => {
  dest = './.tmp'
  env = 'development'

  runSequence(['watch', 'serve'], callback)
})
