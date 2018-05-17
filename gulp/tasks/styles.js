var gulp = require("gulp"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssvars = require("postcss-simple-vars"),
cssnested = require("postcss-nested"),
cssimport = require("postcss-import");

gulp.task("styles", function() {
    return gulp.src("./app/assets/styles/styles.css")
        .pipe(postcss([cssimport, cssvars, cssnested, autoprefixer]))
        .on("error", function(errorMsg){
        	console.log(errorMsg.toString());
        	this.emit("end");
        })
        .pipe(gulp.dest("./app/temp/styles"));
});