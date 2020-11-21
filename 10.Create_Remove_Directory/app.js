var fs = require('fs');

// create and remove directory synchronously
fs.mkdirSync('stuff');  //create
fs.rmdirSync('stuff');  //remove
