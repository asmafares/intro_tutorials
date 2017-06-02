
var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback){
  fs.readdir(dir, function (err, fileList){
    var data = [];
    if(err){
      return callback(err);
    }
    var extension = ext;
    for(var i = 0; i < fileList.length; i++){
      var currentFile = fileList[i].toString();
      if(path.extname(currentFile) === ("." + extension)){
        data.push(currentFile);
      }
    }
    callback(null, data);

  });
}
