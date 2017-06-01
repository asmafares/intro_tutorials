

var accepted = Promise.resolve("Say Hello!");
var rejected = Promise.reject(new Error("Nobody's here!"));

accepted.catch(function(err){ console.log(err.message)});
