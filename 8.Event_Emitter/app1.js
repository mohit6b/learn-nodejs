var event = require('events');
var utils = require('util');

var Person = function(name){
  this.name = name;
};

utils.inherits(Person, event.EventEmitter);

var james = new Person('James');
var mary = new Person('Mary');
var ryu = new Person('Ryu');
var people = [james, mary, ryu];

people.forEach(function(person){
  person.on('speak', function(msg){
    console.log(person.name + ' said: ' + msg);
  });
});

james.emit('speak', 'Hello dude');
mary.emit('speak', 'Hmmmm');
