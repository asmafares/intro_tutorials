var http = require('http');
var stream1 = "";
var stream2 = "";
var stream3 = "";
var done = 0;

http.get(
  process.argv[2],
  function (response){ response.setEncoding("utf8").on("data", concat1).on("end",finish)
});
http.get(
  process.argv[3],
  function (response){ response.setEncoding("utf8").on("data", concat2).on("end",finish)
});
http.get(
  process.argv[4],
  function (response){ response.setEncoding("utf8").on("data", concat3).on("end",finish)
});

function concat1(newstream){
  stream1 = stream1 + newstream;
}
function concat2(newstream){
  stream2 = stream2 + newstream;
}
function concat3(newstream){
  stream3 = stream3 + newstream;
}

function finish(){
  done++;
  if(done == 3){
  console.log(stream1);
  console.log(stream2);
  console.log(stream3);
  }
}
