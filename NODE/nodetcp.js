var net = require('net');

var server = net.createServer(
  function (socket){
    var date = new Date();
    var data = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " +
    date.getHours() + ":" + date.getMinutes();
    console.log(data);
    socket.end(data);
  }
);

server.listen(process.argv[2]);
