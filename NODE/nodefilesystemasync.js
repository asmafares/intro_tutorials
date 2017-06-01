
var fs = require('fs');
fs.readFile(process.argv[2], function (err, fileContents){

  var stringBuffer = fileContents.toString();

  var arrayOfStrings = stringBuffer.split("\n");

  console.log(arrayOfStrings.length - 1);


});
