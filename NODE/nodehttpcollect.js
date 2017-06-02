var http = require('http');
var stream = "";
http.get(
  process.argv[2],
  function (response){ response.setEncoding("utf8").on("data", concat).on("end",finish)

})

function concat(newstream){
  stream = stream + newstream;
}

function finish(){
  console.log(stream.length);
  console.log(stream);
}
