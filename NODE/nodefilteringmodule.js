
  var fs = require('fs');
  var path = require('path');

  function filterNode (dirName, extension, callback) {
         foo(function (err, data) {
           if (err)
             return callback(err) // early return

           // ... no error, continue doing cool things with `data`

           // all went well, call callback with `null` for the error argument

           callback(null, data)
         })
  }

////////////////


function filterNode(dirName, extension, callback){

  function bar (callback) {
         foo(function (err, data) {
           if (err)
             return callback(err) // early return

           // ... no error, continue doing cool things with `data`

           // all went well, call callback with `null` for the error argument

           callback(null, data)
         })
       }

  fs.readdir(process.argv[2], function (err, fileList){
    if(err){
      var returnedList = [];
      var extension = process.argv[3];
      for(var i = 0; i < fileList.length; i++){
        var currentFile = fileList[i].toString();
        if(path.extname(currentFile) === ("." + extension)){
          returnedList.push(currentFile);
        }
      }
    }
    callback(null, returnedList);
  });


}
