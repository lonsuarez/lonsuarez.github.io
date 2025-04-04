'use-strict';
var proxyDev = 'localhost/templates/portfolio/web/virtual/';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        copy: {
            main: {
                expand: true,
                cwd: 'assets/img/',
                src: '**',
                dest: 'build/assets/img/',
            },
        },

        // compiler for css //
        sass: {
            dist: {
                options: {
                    // style: 'expanded' | 'compressed',
                    style: 'expanded',
                    loadPath: 'node_modules/bootstrap-sass/assets/stylesheets'
                },
                files: {
                    'build/assets/css/style.css': 'assets/css/custom.scss' // desitination : source
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
                        'assets/js/hooks.min.js',
                        'assets/js/plugins.js',
                        'assets/js/index.js',
                        'assets/js/instantva.js',
                        'assets/js/rbtools.min.js',
                        'assets/js/rs6.min.js',
                        'assets/js/bootstrap.min.js',
                        'assets/js/slick.min.js',
                        'assets/js/wow.min.js',
                        'assets/js/waypoints.min.js',
                        'assets/js/jquery.counterup.min.js',
                        'assets/js/jquery.magnific-popup.min.js',
                        'assets/js/imagesloaded.pkgd.min.js',
                        'assets/js/slick-animation.js',
                        'assets/js/vendor.js',
                        'assets/js/jquery.cycle.all.js',
                        'assets/js/jquery.slicknav.js',
                        'assets/js/slider.js',
                        'assets/js/jquery-ui-1.9.2.custom.min.js',
                        'assets/js/jquery.effects.core.min.js',
                        'assets/js/scripts.js',
                        'assets/js/owl.carousel.js',
                        'assets/js/custom.js',
                        'assets/js/video-popup.js',
                        'assets/js/video-section.js',
                        'assets/js/sourcebuster.min.js',
                        'assets/js/order-attribution.min.js',
                        // 'assets/js/jquery-numerator.min.js',
                        'assets/js/main2.js',
                        'assets/js/form.js',
                        'assets/js/forms-submitted.js',
                        'assets/js/webpack.runtime.min.js',
                        'assets/js/frontend-modules.min.js',
                        'assets/js/core.min.js',
                        'assets/js/frontend.min.js',
                    ]
                }
            }
        },

        // watch all files //
        watch: {
            sass: {
                files: ['assets/css/**/*.{scss,sass}', 'assets/js/**/*.{js,jsx}'],
                tasks: ['sass', 'autoprefixer', 'cssmin', 'uglify']
            }
        },

        // live reloading //
        browserSync: {
            dev: {
                bsFiles: {
                    src: ['**/*.php', 'style.css', 'assets/js/**/*.js', 'assets/css/**/*.css', 'build/assets/css/**/*.css', 'assets/images/**/*.{png,jpg,jpeg,gif,webp,svg}']
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