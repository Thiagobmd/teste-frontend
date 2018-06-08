// include gulp
var gulp = require('gulp');
// js arquivos
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
// css files
var minifyCSS = require('gulp-minify-css');
// html
var deleteLines = require('gulp-delete-lines');
var htmlreplace = require('gulp-html-replace');
var minifyHTML = require('gulp-minify-html');
// web server
var webserver = require('gulp-webserver');

// JS - concatena todos JS existentes em um unico arquivo e minifica
gulp.task('scripts', function() {
  gulp.src(['./dist/aplicacao-theos/runtime.js', './dist/aplicacao-theos/polyfills.js', './dist/aplicacao-theos/vendor.js', './dist/aplicacao-theos/main.js'])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/aplicacao-theos/'));
});

// CSS - concatena todos CSS existentes, auto-prefix and minifica
gulp.task('styles', function() {
  gulp.src(['./dist/aplicacao-theos/*.css'])
    .pipe(concat('styles.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/aplicacao-theos/'));
});
// HTML - deleta todas tags CSS e JS existentes no arquivo html e insere um unico CSS e JS minificado
gulp.task('htmlreplace', function() {
  gulp.src(['./dist/aplicacao-theos/*.html'])
  .pipe(deleteLines({
    'filters': [
    /<script\s+type=["']text\/javascript["']\s+src=/i
    ]
  }))
  .pipe(deleteLines({
    'filters': [
    /<link\s+rel=["']/i
    ]
  }))
    .pipe(htmlreplace({
      'css': 'styles.min.css',
      'js': 'main.min.js'
  }))
    .pipe(minifyHTML())

    .pipe(gulp.dest('./dist/aplicacao-theos/'));
});
// Abre o webserver localhost para ver a aplicação rodando
gulp.task('webserver', function() {
  gulp.src('./dist/aplicacao-theos/')
    .pipe(webserver({
      port: 1739,
      livereload: false,
      directoryListing: false,
      open: false
    }));
});

// default gulp tarefa
gulp.task('default', ['scripts', 'styles', 'htmlreplace', 'webserver'], function() {

});
