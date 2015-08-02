module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //watch: {
        //    less: {
        //        files: ['client/styles/less/*.less'], // which files to watch
        //        tasks: ['less'],
        //        options: {
        //            spawn: true
        //        }
        //    }
        //},
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