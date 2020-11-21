var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log("Request was made at : " + req.url);
  res.writeHead(200, {'Content-Type' : 'application/json'});
  var myObj = {
    name: "Mohit",
    job: "Blockchain Engineer",
    age: 24
  };

  res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('Running at port number 3000 ');
