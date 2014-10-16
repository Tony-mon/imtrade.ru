// Include main components
var gulp = require('gulp');
var gutil = require('gulp-util');
var lr = require('tiny-lr');

// Include CSS components
var compass = require('gulp-compass');
//var prefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');

// Include JS components
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// Include utilities
var rename = require("gulp-rename");
var livereload = require('gulp-livereload');
var server = lr();

// sprite gen
var csso = require('gulp-csso');
var imagemin = require('gulp-imagemin');
var spritesmith = require('gulp.spritesmith');

// Source and Target directories
var sourceSASS = 'sass';
var targetCSS = 'css';

var sourceJS = 'js';
var targetJS = 'js';

// SASS compilation

gulp.task('compass', function() {
  gulp.src(sourceSASS + '/screen.scss')
  .pipe(compass({
    config_file: './config.rb',
    css: 'css',
    sass: 'sass'
  })).on('error', gutil.log);
});

//JS compilation
// gulp.task('js', function() {
//     gulp.src([
//                 sourceJS + '/libs/jquery-1.11.0.min.js'
//                 ,sourceJS + '/libs/plugins.js'
//                 ,sourceJS + '/libs/sly.min.js'
//                 ,sourceJS + '/plugins/fancybox/jquery.fancybox.js'
//                 ,sourceJS + '/main.js'
//             ])
//         .pipe(concat("full.min.js"))
//         .pipe(uglify({mangle: true}).on('error', gutil.log))
//         .pipe(gulp.dest(targetJS))
//         //.pipe(livereload(server));
// });

//LiveReload
gulp.task('livereload', function(next) {
   server.listen(35729, function(err) {
       if (err) return console.error(err);
       next();
   });
});

gulp.task('sprite', function() {
    var spriteData = 
        gulp.src('./i/sprite/pics/*.png') // source path of the sprite images
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: '_sprite.scss',
                padding: 3,
                algorithm: 'binary-tree',
            }));

    spriteData.img.pipe(gulp.dest('./css/')); // output path for the sprite
    spriteData.css.pipe(gulp.dest('./' + sourceSASS + '/additional/')); // output path for the CSS
});

// Watch for LESS and JS changes and run the respective compilers automatically
gulp.task('watch', function () {
    gulp.watch(sourceSASS + '/additional/*.scss', ['compass', 'livereload']);
    gulp.watch(sourceSASS + '/*.scss', ['compass', 'livereload']);
    gulp.watch('*.php', ['livereload']);
    //gulp.watch(sourceJS + '/main.js', ['js']);
});


gulp.task('default', ['livereload', 'compass', /*'js',*/ 'watch']);