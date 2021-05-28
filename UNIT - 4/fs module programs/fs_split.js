//The forEach() method calls a function once 
//for each element in an array, in order.
const fs = require("fs")
var data = fs.readFileSync("test.txt",'utf-8')
var lines = data.split(/\n/)

lines.forEach((line)=>{
	var words = line.split(',');
	console.log(words[0]);
})
