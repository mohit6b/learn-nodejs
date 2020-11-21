var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('Running at : ' + req.url);
  res.writeHead(200, {'Content-Type' : 'text/html'});
  var readstream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  readstream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log("Yeah! Listening at port 3000");
