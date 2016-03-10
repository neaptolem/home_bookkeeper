'use strict';
var electronApp = require('app');
var rimraf = require('rimraf');
var BrowserWindow = require('browser-window');
var path = require('path');
var fs = require('fs');
var Menu = require('menu');
var fse = require('fs-extra');

exports.path = electronApp.getAppPath();
var pJSON = fse.readJsonSync(path.join(exports.path, 'package.json'));
exports.pJSON = pJSON;
var mkdirp = require(path.join(exports.path, 'assets/js/helpers/mkdirp.js'));

function createPathConst() {
  return mkdirp.sync(path.join.apply(path.join, arguments));
}
const APP_NAME = 'HomeBookkeeper';
exports.PATH_TO_TEMP = createPathConst(electronApp.getPath('temp'), APP_NAME);
exports.PATH_TO_APP_DATA = createPathConst(electronApp.getPath('appData'), APP_NAME);

exports.log = function(message) {
  console.log(message);
};

electronApp.on('window-all-closed', function() {
  electronApp.quit(); // only this use as onClose
});

var mainWindow;

electronApp.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    'min-width': 400,
    'min-height': 300,
    title: pJSON['product-name'] + ' ' + pJSON['version']
  });
  mainWindow.webContents.on('did-finish-load',function(){
    exports.setTitle();
  })
  mainWindow.loadURL(`file:///${__dirname}/app/index.html`);
  mainWindow.openDevTools();
});

exports.setTitle = function(name) {
  if (name) mainWindow.setTitle(name + ' ' + pJSON['version']);
  else mainWindow.setTitle(pJSON['product-name'] + ' ' + pJSON['version']);
};
