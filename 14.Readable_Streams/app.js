// Writable Streams - allow nodejs to write data to a Stream
// Readable Streams - allow nodejs to read data from a Stream
// Duplex - Can read and write to a stream

var http = require('http');
var fs = require('fs');

var readstream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');

readstream.on('data', function(chunk){
    console.log('new chunk received');
    console.log(chunk);
});
