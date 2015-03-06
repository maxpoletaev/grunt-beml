beml = require('beml');

module.exports = function(grunt) {

  grunt.registerMultiTask('beml', 'The best Grunt plugin ever.', function() {
    var options = this.options();

    this.files.forEach(function(f) {
      var src = f.src[0];
      var result;

      if (!src) {
        return;
      }

      var html = grunt.file.read(src);

      try {
        var result = beml(html, options);
      } catch (err) {
        grunt.warn(src + '\n' + err);
        return;
      }

      grunt.file.write(f.dest, result);
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
