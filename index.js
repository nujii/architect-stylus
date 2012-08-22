
module.exports = function (options, imports, register) {


  var stylus = require('stylus');
  var nib = require('nib');
  options.imports = options.imports || [];

  var compile = function (str, path) {
    var compiler =
      stylus(str)
        .set('filename', path)
        .set('warn', !!options.warn)
        .set('compress', !!options.compress)
        .use(nib());

    if (options.imports) {
      for (var i = options.imports.length - 1; i >= 0; i--) {
        var importPath = options.imports[i]
        stylus.imports(importPath);
      };
    }
    imports.logger.debug('Stylesheet compiled at '+path);
    return compiler;
  };

  imports.logger.debug('stylus ready to compile');

  imports.express.use(stylus.middleware({
      src: options.src,
      dest: options.dest,
      compile: compile
  }));

  register(null, {});

};
