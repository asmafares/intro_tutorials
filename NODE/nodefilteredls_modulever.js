
var mymodule = require('./nodefilteringmodule.js')

mymodule(
  process.argv[2],
  process.argv[3],
  function(err, data){
      if(err){
        console.log("ERROR!");
      }
      data.forEach( function(i) { console.log(i); })
    }
);
