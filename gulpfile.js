const gulp = require("gulp");
const rename = require("gulp-rename");

gulp.task("buildIconTypes", (done) => {
    gulp.src("./icons/src/build.js")
        .pipe(
            rename({
                extname: ".d.ts",
            })
        )
        .pipe(gulp.dest("./icons/types"));
    done();
});
