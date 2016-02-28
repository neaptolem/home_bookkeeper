var fs = require('fs');
var main = require('remote').require('./main.js');

function Logger(output) {
  this.output = output || main.PATH_TO_LOGS;
  var that = this;
  this.log = function (message, caller) {
    var newMessage = `\n${(new Date).toJSON()} : ${message}`;
    if (caller) {
      newMessage += ` (${caller})`;
    }
    console.log(message);
    main.log(newMessage);
    fs.appendFile(that.output, newMessage);
  }
}

module.exports = Logger;