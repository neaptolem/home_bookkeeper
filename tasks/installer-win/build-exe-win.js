var fse = require('fs-extra'),
  projectPath = __dirname + '/../../',
  copyFrom = `${projectPath}/tasks/import-to-windows/`;

fse.readJson(projectPath + 'package.json', function (err, packageObj) {
  if (err) {
    console.log(err);
  }
  var packager = require('electron-packager'),
    options = {
      dir: projectPath,
      overwrite: true,
      out: projectPath + 'builds/win',
      name: packageObj['product-name'],
      platform: 'win32',
      arch: 'ia32',
      'app-version': packageObj['build-version'],
      'build-version': packageObj['build-version'],
      asar: !process.env['NO_ASRAR'],
      ignore: '(' +
      'tasks|' +
      'builds|' +
      'node_modules/' +
      '(appdmg|' +
      'ffmpeg-static/bin|' +
      'ffprobe-static/bin))',
      icon: __dirname + '/resources/img.ico',
      version: packageObj['electron-version'],
      'version-string': {
        CompanyName: 'Unknown',
        FileDescription: packageObj['product-name'],
        OriginalFilename: `${packageObj['product-name']}.exe`,
        FileVersion: packageObj['build-version'],
        ProductVersion: packageObj['build-version'],
        ProductName: packageObj['product-name'],
        InternalName: packageObj['product-name'],
        LegalCopyright: 'Unknown'
      }
    };

  console.log('electron-packager: Starting...');
  packager(options, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log('electron-packager: Build successfully passed!!');
      var whereTo = projectPath + `builds/win/${packageObj['product-name']}-win32-ia32/resources/`;
      fse.copy(copyFrom, whereTo, function (err) {
        if (err) console.log(err.toString());
        console.log('fse: copied successfully!!');
      });
    }
  });
});
