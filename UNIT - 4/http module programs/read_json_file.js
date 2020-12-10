//1. using require method
//var users = require("./sample1")
//console.log(users);

//When receiving data from a web server, the data is always a string. 
//Parse the data with JSON.parse() , and the data becomes a JavaScript object.

//2. Using fs module: read the contents of a json file
var fs = require("fs")
fs.readFile("sample1.json",function(err,data){
    if(err) throw err;
    var users = JSON.parse(data);   // Converting to JS object
    console.log(users);
   
})