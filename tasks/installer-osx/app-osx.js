module.exports = function() {
  var fse = require('fs-extra'),
    projectPath = __dirname + '/../../';

  return new Promise(function(resolve, reject) {
    if (!process.env['MAC_APP_CERT_IDENTITY']) {
      console.log("You don't have certificate identity, read README.md");
      reject();
      return;
    }
    fse.readJson(projectPath + 'package.json', function(err, packageObj) {
      if (err) {
        console.log(err);
      }

      var packager = require('electron-packager'),
        options = {
          dir: projectPath,
          overwrite: true,
          out: projectPath + 'builds/mac',
          name: packageObj['product-name'],
          platform: 'darwin',
          arch: 'x64',
          'app-version': packageObj['build-version'],
          'build-version': packageObj['build-version'],
          ignore: '(' +
          'tasks|' +
          'builds|' +
          'node_modules/' +
          '(appdmg|' +
          'ffmpeg-static/bin/(linux|win32)|' +
          'ffprobe-static/bin/(linux|win32)))',
          icon: __dirname + '/resources/img.icns',
          version: packageObj['electron-version']
        };

      console.log('electron-packager: Starting...');
      packager(options, function(err) {
        if (err) {
          console.error(err);
          reject();
        } else {
          console.log('electron-packager: Build successfully passed!!');
          resolve();
        }
      });
    });
  });
};
