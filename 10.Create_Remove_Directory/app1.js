var fs = require('fs');

// create and remove directory synchronously
fs.mkdir('stuff', function(){
  fs.readFile('readme.txt', 'utf8', function(err, data){
    fs.writeFile('./stuff/write.txt', data);
  });
});

/* Make directory empty before removing it
fs.unlink('./stuff/write.txt', function(){
  fs.rmdir('stuff');
});
*/
