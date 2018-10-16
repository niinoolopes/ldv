/* Variaveis */
var gulp = require('gulp'); 
var browserSync = require('browser-sync').create();
var reload = browserSync.reload; 
var concat = require('gulp-concat');
var sass = require('gulp-sass');  
var autoprefixer = require('gulp-autoprefixer');
var image = require('gulp-image');

// -- /// --

/*-TASK - SERVE -*/
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./app",
        }
    }); 
    /* */
    console.log("SERVE - OK!");  
    /* */
}); 


/*-TASK - STYLES -*/
gulp.task('styles', function() {  
    gulp.src('app/styles/scss/init.scss')
    .pipe( sass() )
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('app/styles'))
    /* */
    console.log("STYLES OK!"); 
    /* */
});


/*-TASK - SCRIPTS -*/
gulp.task('scripts',  function() {
    gulp.src('app/scripts/src/**/*.js') 
    .pipe(concat('main.js'))
    .pipe(gulp.dest('app/scripts'))
    /* */
    console.log("SCRIPTS OK!"); 
    /* */
});


/*-TASK - IMAGES -*/
gulp.task('images',  function() {
    gulp.src('app/assets/images/src/**/*')
    .pipe(image({ optimizationLevel: 5, progressive: true, interlaced: true }) )
    .pipe(gulp.dest('app/assets/images/'))
    /* */
    console.log("IMAGES OK!"); 
    /* */
});


/*-TASK - WACTH -*/
gulp.task('wacth', function(){  
    gulp.watch('app/styles/scss/**/*.scss',['styles']).on('change', reload);
    gulp.watch('app/scripts/src/**/*.js',['scripts']).on('change', reload);
    gulp.watch('app/assets/images/src/*',['images']).on('change', reload);
    gulp.watch('app/**/*.html').on('change', reload);
    /* */
    console.log("WACTH OK!"); 
    /* */
});


// task - Gulp 
gulp.task('start', function(){ 
    gulp.run('styles');
    gulp.run('scripts');
    gulp.run('images');
    gulp.run('wacth');
    gulp.run('serve')  
    /* */
    console.log("GULP START OK!"); 
    /* */
});


/*-TASK DEFAULT-*/
gulp.task('default', ['start']);
 


/*-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --*/
/*- TASK TESTES -*/
/*-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --*/
 