
var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], function (err, fileList){

  var extension = process.argv[3];
  for(var i = 0; i < fileList.length; i++){
    var currentFile = fileList[i].toString();
    if(path.extname(currentFile) === ("." + extension)){
      console.log(currentFile);
    }
  }

});
