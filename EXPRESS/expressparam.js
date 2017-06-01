var express = require('express');
var app = express();


app.put('/message/:id', function(req, res){
  var temp = require('crypto').createHash('sha1').update(new Date().toDateString() + req.params.id).digest('hex');
  res.send(temp);
});

app.listen(process.argv[2]);
