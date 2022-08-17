const gulp = require("gulp");
const rename = require("gulp-rename");
const replace = require("gulp-replace");

gulp.task("buildIconTypes", (done) => {
    gulp.src("./icons/src/build.js")
        .pipe(replace("@", "./src/icons"))
        .pipe(
            rename({
                basename: "types",
                extname: ".d.ts",
            })
        )
        .pipe(gulp.dest("./icons/types"));
    done();
});
