var fs = require('fs');

var data = 'Attitude is a little thing';

//create a readable stream
var writerstream = fs.createWriteStream('data.txt');
//setting the encoding
writerstream.write(data,'UTF-8');

//Mark the end of the file
writerstream.end();

//Handle the stream events  -> finish, error
writerstream.on('finish',function()
{
    console.log('write completed');
});
writerstream.on('error',function(err)
{
    console.log(error.stack);
});
console.log('program ended');