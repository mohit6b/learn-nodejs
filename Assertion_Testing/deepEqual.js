const assert = require('assert');

obj1 = {
  a:{
    b: 1
  }
};

obj2 = {
  a:{
    b: 2
  }
};

obj3 = {
  a:{
    b: 1
  }
};

const obj4 = Object.create(obj1);

assert.deepEqual(obj1, obj1);
// Ok, object is equal to itself

// Error in output due to code in next line
assert.deepEqual(obj1, obj2);
// AssertionError : { a:{ b: 1 }} deepEqual { a: { b: 2 }}
// Values of b are different

assert.deepEqual(obj1, obj3);
// OK, objects are equal

// Error in output due to code in next line
assert.deepEqual(obj1, obj4);
// AssertionError : { a: { b : 1 } } deepEqual {}
// Prototypes Ignored
