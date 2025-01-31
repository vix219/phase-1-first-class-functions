
function receivesAFunction(callback) {
    console.log();
    callback();
  }
  
  function returnsANamedFunction() {
    return function myNamedFunction() {
      console.log("returns a named function");
    };
  }
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("returns an anonymous function");
    }
}