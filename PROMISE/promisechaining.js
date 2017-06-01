
first().then(function (value) {
      return second(value);
    }).then(function (value) {
      // the object was saved
      console.log(value);
    });
