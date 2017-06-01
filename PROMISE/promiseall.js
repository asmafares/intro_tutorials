function all(promise1, promise2){
  var promise = new Promise(
    function(fulfill, reject){
      fulfill([promise1, promise2]);
    }
  );
  var counter = 0;
  promise1.then(counter++);
  promise2.then(counter++);

  return promise;
}

all(getPromise1(), getPromise2());
