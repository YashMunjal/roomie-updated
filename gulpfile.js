const gulp = require('gulp');
const imagemin=require('gulp-imagemin');
const uglify=require('gulp-uglify');
const csso=require('gulp-csso');
const autoprefixer=require('gulp-autoprefixer');
var htmlmin = require('gulp-html-minifier');

/*

    Gulp.task = define task
    src= point to files used
    gulp.dest=points to output folder
    gulp.watch=watch for changes
*/

gulp.task('message',async function(){
    return console.log('Gulp Started');
});

//image-optimization
gulp.task('imageMin',async ()=>{
    gulp.src('images/*.{jpg,png,jpeg}')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images'))
    gulp.src('images/illu/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images/illu'))
});

//Font optimizations

//Not working
gulp.task('fontMin',async ()=>{
    gulp.src('fonts/*')
    .pipe(gulp.dest('build/fonts'))
});

//copy appointments
//Note not working
gulp.task('appo',async ()=>{
    gulp.src('appointment/*',{base:"."})
    .pipe(gulp.dest('build/appointment'));
});
//js minimization

gulp.task('jsMin',async ()=>{
    gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});
//minify css+autoprefix cross browser compatibility

gulp.task('cssMin',async ()=>{
    gulp.src('css/*.css')
    .pipe(autoprefixer())
    // Minify the file
    .pipe(csso())
    // Output
    .pipe(gulp.dest('build/css'))
});
//minify html
gulp.task('minifyHtml', async function() {
    gulp.src('*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('./build'))
  });


//all tasks automated

gulp.task('default',gulp.series('message','minifyHtml','imageMin','jsMin','cssMin'));