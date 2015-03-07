module.exports = function(grunt) {

  grunt.initConfig({
    clean: {
      tests: ['tmp']
    },
    beml: {
      default_options: {
        files: {
          'tmp/default_options.html': 'test/fixtures/index.beml'
        }
      },
      custom_options: {
        options: {
          elemPrefix: '___',
          modPrefix: '--',
          modDlmtr: '__'
        },
        files: {
          'tmp/custom_options.html': 'test/fixtures/index.beml'
        }
      }
    },
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('default', ['clean', 'beml', 'nodeunit']);
};
