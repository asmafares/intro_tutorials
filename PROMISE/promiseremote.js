
  var http = require('q-io/http');

  var cache = http.read('http://localhost:7000').then( function (value) {
    http.read('http://localhost:7001/' + value).then(
      function(value){ console.log(JSON.parse(value))}
    );
  });
