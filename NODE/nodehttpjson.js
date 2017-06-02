var http = require('http');
var map = require('through2-map')
var url = require('url');

var server = http.createServer( function (req, res){
  var date = new Date();

  var location = url.parse(req.url, true).pathname;
  if(location == "/api/parsetime"){
    res.end(Date.UTC());
  }
  else if(location == "/api/unixtime"){
    res.end("{\"unixtime\":" + JSON.stringify(date.getTime()) + "}");
  }
}
)

server.listen(process.argv[2]);
