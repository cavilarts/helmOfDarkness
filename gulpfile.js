var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    connect = require('gulp-connect');

gulp.task('backServer', function() {
    nodemon({
        "script": './index.js',
        "ext": 'js html',
        "env": {
            "NODE_ENV": 'development'
        }
    });
});

gulp.task('frontServer', function () {
    connect.server({
        port: 3000
    });
});

gulp.task('default', ['backServer', 'frontServer']);