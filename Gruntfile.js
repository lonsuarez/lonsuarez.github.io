'use-strict';
var proxyDev = 'http://localhost/github/templates/portfolio/';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        // copy: {
        //     main: {
        //         expand: true,
        //         cwd: 'assets/img/',
        //         src: '**',
        //         dest: 'build/assets/img/',
        //     },
        // },

        // compiler for css //
        sass: {
            dist: {
                options: {
                    // style: 'expanded' | 'compressed',
                    style: 'compressed',
                    // loadPath: 'node_modules/bootstrap-sass/assets/stylesheets'
                },
                files: {
                    'build/assets/css/main.css': 'assets/css/main.scss' // desitination : source
                }
            }
        },

        // backward compatibility for older browsers //
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 9', 'ios 6', 'android 4'],
                map: true
            },
            files: {
                expand: true,
                flatten: true,
                src: 'build/assets/css/*.css', // source file
                dest: 'build/assets/css/' // desitination file
            },
        },

        // css minify //
        cssmin: {
            options: {
                keepSpecialComments: 1
            },
            minify: {
                expand: true,
                cwd: 'build/assets/css', // output file
                src: ['*.css', '!*.min.css'],
                dest: './',
                ext: '.css'
            }
        },

        // catch js code errors//
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                "force": true
            },
            all: [
                'Gruntfile.js',
                'assets/js/**/*.js'
            ]
        },

        /// javascript minify //
        uglify: {
            main: {
                options: {
                    sourceMap: 'assets/js/main.js.map',
                    sourceMappingURL: 'main.js.map',
                    sourceMapPrefix: 2
                },
                files: {
                    // source : destination
                    'build/assets/js/main.min.js': [
                        'assets/js/main.js'
                    ]
                }
            },
            plugins: {
                options: {
                    sourceMap: 'assets/js/plugins.js.map',
                    sourceMappingURL: 'plugins.js.map',
                    sourceMapPrefix: 2
                },
                files: {
                    // source : destination
                    'build/assets/js/plugins.min.js': [
                        'assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
                        'assets/vendor/php-email-form/validate.js',
                        'assets/vendor/aos/aos.js',
                        'assets/vendor/waypoints/noframework.waypoints.js',
                        'assets/vendor/purecounter/purecounter_vanilla.js',
                        'assets/vendor/swiper/swiper-bundle.min.js',
                        'assets/vendor/glightbox/js/glightbox.min.js',
                        'assets/vendor/imagesloaded/imagesloaded.pkgd.min.js',
                        'assets/vendor/isotope-layout/isotope.pkgd.min.js',
                    ]
                }
            }
        },

        // watch all files //
        watch: {
            sass: {
                files: ['assets/css/**/*.{css,scss,sass}', 'assets/js/**/*.{js,jsx}'],
                // files: ['assets/css/**/*.{css}', 'assets/js/**/*.{js,jsx}'],
                tasks: ['sass', 'autoprefixer', 'cssmin', 'uglify']
            }
        },

        // live reloading //
        browserSync: {
            dev: {
                bsFiles: {
                    src: ['**/*.html', 'main.css', 'assets/js/**/*.js', 'assets/css/**/*.css', 'build/assets/css/**/*.css', 'assets/images/**/*.{png,jpg,jpeg,gif,webp,svg}']
                },
                options: {
                    watchTask: true,
                    proxy: proxyDev,
                    browser: "chrome"
                }
            }
        }
    });

    // grunt.registerTask('default', ['copy', 'sass', 'autoprefixer', 'cssmin', 'uglify', 'browserSync', 'watch']);
    grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'uglify', 'browserSync', 'watch']);
};