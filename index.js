var path = require('path');
var sassoEntry = require.resolve('sasso');
var sassoDir = path.dirname(sassoEntry);

function includePaths() {
  return sassoDir;
}

module.exports = {
  includePaths: includePaths(),
  with: function() {
    var paths  = Array.prototype.slice.call(arguments);
    var result = [].concat.apply(includePaths(), paths);
    return result;
  }
};
