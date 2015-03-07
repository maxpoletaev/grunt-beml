var grunt = require('grunt');

exports.beml = {
  defaultOptions: function(test) {
    var actual = grunt.file.read('tmp/default_options.html');
    var expected = grunt.file.read('test/expected/default_options.html');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  },
  customOptions: function(test) {
    var actual = grunt.file.read('tmp/custom_options.html');
    var expected = grunt.file.read('test/expected/custom_options.html');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

    test.done();
  },
};
