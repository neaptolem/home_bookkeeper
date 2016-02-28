var appdmg = require('appdmg'),
  fs = require('fs'),
  path = require('path'),
  fse = require('fs-extra'),
  projectPath = cutLink(cutLink(__dirname))+'/',
  buildApp = require('./app-osx'),
  rimraf = require('rimraf');

function cutLink(str) {
  return str.substring(0, str.lastIndexOf('/'));
}
var packageObj = fse.readJsonSync(projectPath + 'package.json');
var pathToDmg = encodeURI(path.join(projectPath ,'builds/mac/' ,packageObj['product-name'] + '.dmg'));
rimraf.sync(decodeURI(pathToDmg));

buildApp().then(function () {
  console.log('appdmg: Starting...');
  var ee = appdmg({
    source: __dirname + '/build-installer-osx.json',
    target: decodeURI(pathToDmg)
  });
  ee.on('error', function (msg) {
    console.log(msg);
  });

  ee.on('finish', function () {
    console.log('appdmg: Build successfully passed!!')
  });
});
