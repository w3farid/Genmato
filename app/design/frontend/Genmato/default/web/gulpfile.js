var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');

gulp.task('styles', function(){
    gulp.src('./sass/style.scss')
        .pipe(sass())
        .pipe(autoprefixer(
            {browsers : ['last 2 versions']}
        ))
        //.pipe(minifycss())
        .pipe(gulp.dest('./css'));
        //.pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function(){
    // browserSync.init({
    //     server: {
    //         baseDir: './'
    //     }
    // });

    gulp.watch('./scss/*.scss', ['styles']);
   // gulp.watch('./**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['styles', 'serve']);
