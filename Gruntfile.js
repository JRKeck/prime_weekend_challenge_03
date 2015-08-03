module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/scripts/proj_script.js',
                dest: 'server/public/assets/scripts/proj_script.min.js'
            }
        },
        less: {
            development: {
                files: {
                    "server/public/assets/styles/stylesheet.css": "client/styles/less/main.less" // destination file and source file
                }
            }
        },
        copy: {
            bootstrap: {
                expand: true,
                cwd: "node_modules",
                src: [
                    "bootstrap/dist/css/bootstrap.min.css"
                ],
                dest: "server/public/vendors/"
            },
            jquery: {
                expand: true,
                cwd: "node_modules",
                src: [
                    "jquery/dist/jquery.min.js",
                    "jquery/dist/jquery.min.map"
                ],
                dest: "server/public/vendors/"
            },
            font_awesome: {
                expand: true,
                cwd: "node_modules",
                src: [
                    "font-awesome/css/font-awesome.min.css",
                    "font-awesome/fonts/FontAwesome.otf",
                    "font-awesome/fonts/fontawesome-webfont.eot",
                    "font-awesome/fonts/fontawesome-webfont.svg",
                    "font-awesome/fonts/fontawesome-webfont.ttf",
                    "font-awesome/fonts/fontawesome-webfont.woff",
                    "font-awesome/fonts/fontawesome-webfont.woff2"
                ],
                dest: "server/public/vendors/"
            },
            images: {
                expand: true,
                cwd: "client/images",
                src: ["*"],
                dest: "server/public/assets/images/"

            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['copy', 'uglify', 'less']);
};
