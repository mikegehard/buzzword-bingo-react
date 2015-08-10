module.exports = function(grunt) {

    grunt.initConfig({
        devserver: {
            server: {
                base: 'public/',
                file: 'index.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-devserver');

};
