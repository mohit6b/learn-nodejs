var counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array.'
}


module.exports.adder = function(a,b){
  return `The sum of numbers is ${a+b}`
}

var pi = 3.142;

module.exports.counter = counter;
//module.exports.adder = adder;
module.exports.pi = pi;

// OR
/*
module.exports = {
// property: function name
  count: counter,
  add: adder,
  p: pi
}
*/
