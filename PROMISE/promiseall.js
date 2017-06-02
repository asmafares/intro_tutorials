
function all(promise1, promise2){
  return new Promise(
    function(fulfill, reject){
      var counter = 0;
      var returned = [];
      promise1.then(function(value) {
        returned.push(value); counter++;
        if(counter >= 2){
          fulfill(returned);
        }
      });
      promise2.then(function(value) {
        returned.push(value); counter++;
        if(counter >= 2){
          fulfill(returned);
        }
      });
    }
  );

}

all(getPromise1(), getPromise2()).then(console.log);
