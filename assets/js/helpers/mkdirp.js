var mkdir = require('mkdirp');

function mkdirp(path, cb) {
  mkdir(mkdirp.formPath(path), function() {
    if (typeof cb === 'function')cb(mkdirp.formPath(path));
  });
}

mkdirp.sync = function(path) {
  mkdir.sync(mkdirp.formPath(path));
  return mkdirp.formPath(path);
};

mkdirp.formPath = function(path) {
  if (/^win/.test(process.platform)) {
    return path.replace(/\\/g, '/');
  } else {
    return path;
  }
};
module.exports = mkdirp;
