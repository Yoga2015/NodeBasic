const {src,dest,series,parallel} = require('gulp');

function scripts(){
    return gulpfileConfig.src('./03-scripts/',{sourcemaps:true})
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
} 