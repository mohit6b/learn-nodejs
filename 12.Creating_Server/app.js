var http = require('http');

var server = http.createServer(function(req, res){
  console.log('Request was made at ' + req.url);
  res.writeHead(200,{ 'Content-Type' : 'text/plain' });
    res.end('Listening at Server');
});

server.listen(3000, '127.0.0.1');
console.log('Yo! Now Listening to port number 3000');
