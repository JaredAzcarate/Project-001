/* css */
const { src, dest, watch } = require ("gulp");
const sass = require('gulp-sass')(require('sass'));
const plumber = require ('gulp-plumber');

/* imagenes */
const imagemin = require ('gulp-imagemin');
const cache = require ('gulp-cache');
const webp = require ('gulp-webp');


/* funciones */
function css(done) {
    src("src/scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(dest("build/css"))
    
    done();
}

function dev(done) {
    watch("src/**/*.scss", css)
    watch("src/js/**/*.js", javaScript)
}

function versionWebp (done) {

    const opciones = {
        quality:50
    };

    src ('src/img/**/*.{png,jpg}')
    .pipe (webp (opciones))
    .pipe (dest('build/img'))

    done();
}

function reduceImage (done) {

    const opciones = {
        optimizationLevel:3
    }

    src ('src/img/**/*.{png,jpg}')
    .pipe (cache(imagemin (opciones)))
    .pipe (dest('build/img'))
    done();
}

function javaScript (done){
    src('src/js/**/*.js');
    done();
}

/* exports */
exports.css = css;
exports.javaScript = javaScript;
exports.versionWebp = versionWebp;
exports.reduceImage = reduceImage;
exports.dev = dev;