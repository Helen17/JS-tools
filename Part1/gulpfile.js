const gulp = require('gulp');
const eslint = require('gulp-eslint');
const sass = require('gulp-sass');
const copy = require('gulp-copy');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const del = require('del');
const livereload = require('gulp-livereload');
var pump = require('pump');

gulp.task('eslint', function(){
    return gulp.src('./scripts/**/*.js')
           .pipe(eslint())
           .pipe(eslint.failAfterError())
           .pipe(gulp.dest('./js'));
});

gulp.task('live', function(){
    livereload.listen();

    gulp.watch('./scripts/**/*.js', ['eslint'])
});

gulp.task('sass', function(){
    return gulp.src('./styles/**/*.scss')
           .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
           .pipe(gulp.dest('./prod/css'));
});

gulp.task('uglify', function (cb) {
    pump([
          gulp.src('./scripts/**/*.js'),
          uglify(),
          gulp.dest('./dist/')
      ],
      cb
    );
  });

gulp.task('concat', function() {
    return gulp.src('./dist/**/*.js')
           .pipe(concat('app.js'))
           .pipe(gulp.dest('./prod/js'));
});

gulp.task('del', function(){
      return del([
        './prod'
      ]);
  });

gulp.task('create', function(){
    return gulp.src('*.*', {read: false})
           .pipe(gulp.dest('./prod'))
});

gulp.task('copyHtml',function(){
    return gulp.src('./index.html')
               .pipe(gulp.dest('./prod/'));
});

gulp.task('prod', ['del', 'create', 'copyHtml', 'sass', 'uglify', 'concat']);
