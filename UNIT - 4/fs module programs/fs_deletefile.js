var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {//completion function callback
  if (err) throw err;                      //first parameter of it-error
  console.log('File deleted!');
});