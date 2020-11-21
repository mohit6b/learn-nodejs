var fs = require('fs');

//Reading file Asynchronously
fs.readFile('readme.txt', 'utf8', function(err, data){
    console.log(data);
});

console.log('Hello');

/*
var fs = require('fs');

//writing file Asynchronously
fs.readFile('readme.txt', 'utf8', function(err, data){
  fs.writeFile('writeme1.txt', data);
//  console.log(data);
});

// Delete File
fs.unlink('writeme1.txt');

//console.log('Hello');
*/
