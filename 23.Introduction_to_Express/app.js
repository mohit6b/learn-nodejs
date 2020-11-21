var express = require('express');

var app = express();

app.get('/abc', function(req, res){
  res.send('This is the homepage');
});

app.get('/contact', function(req, res){
  res.send('This is the contact page');
});

app.listen(3000);
