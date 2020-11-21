//normal function statement
function sayHi(){
  console.log('Hi');
}
sayHi();

function callFunction(fun){
  fun();
}

//function expression
var sayBye = function() { // function without name are anonymous function
  console.log('Bye');
}
sayBye();

callFunction(sayBye);
