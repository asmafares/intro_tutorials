var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var stringBuffer = buffer.toString();

var arrayOfStrings = stringBuffer.split("\n");

console.log(arrayOfStrings.length - 1);
