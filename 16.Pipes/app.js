var http = require('http');
var fs = require('fs');

var readstream = fs.createReadStream(__dirname + '/readme.txt' , 'utf8');
var writestream = fs.createWriteStream(__dirname + '/writeme.txt');

readstream.pipe(writestream);
