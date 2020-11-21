var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/contact', function(req, res){
  res.render('contact');
});

app.get('/profile/:name', function(req, res){
  var user_data = {age: 22, Job: 'Intern', hobbies: ['Eating', 'Outing', 'Dating', 'Music', 'Partying'] };
  res.render('profile',{person: req.params.name, data: user_data});
});

app.listen(3000);
