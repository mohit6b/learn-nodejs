var fs = require('fs');

//Reading and writing file synchronously
var readMe = fs.readFileSync('readme.txt', 'utf8'); //readFileSync is a code blocking function. It will first read the file before executing the remaining code

console.log(readMe);

fs.writeFileSync('writeme.txt', readMe);
//code
