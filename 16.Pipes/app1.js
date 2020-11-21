var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('Request made at :' + req.url);
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  var readstream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
  readstream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Yo! Now listening to port no 3000');
