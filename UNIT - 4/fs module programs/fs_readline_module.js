/* we need a listener for reading the input from the user 
and displaying it to the console.

For this purpose, Readline Module has a listener method called on()
 --- that will take two parameters.

The first parameter will the event and the second parameter
 will be a callback function that will return 
the output to the console.

Here, rl.on() method takes the first argument as line event.
This event is invoked whenever the user presse Enter key.   */

const fs = require("fs")
const readline = require('readline');

rl = readline.createInterface({
	input:process.stdin,
	//input:fs.createReadStream("test.txt"),
	output:process.stdout,
	terminal:false
})
rl.on('line',function(line){
	var words = line.split(',');
	console.log(words[1]);
})