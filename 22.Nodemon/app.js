var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('Request was made at : ' + req.url);
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200,{'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
  }else if(req.url === '/contact'){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/contact.html' , 'utf8').pipe(res);
  }else if(req.url === '/api/mohit') {
    var obj = [{name : "Mohit", age: 22}, {name: "Saumya", age:20}];
    res.writeHead(200, {'Content-Type' : 'application/json'});
    res.end(JSON.stringify(obj));
  }else{
    res.writeHead(404, {'Content-Type' : 'text/html' });
    fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
  }
});

server.listen(3000, '127.0.0.1');
console.log('Yo! Listening at port number 3000');
