/*we will first create an interface for the input and output using 
createInterface()
createInterface() method takes two arguments. 
The first argument will be for the standard input and the
second one will be for reading the standard output. 
 rl.close() method is used to exit the application.*/
 
var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

     rl.question('What is your age? ', (age) => {
        console.log('Your age is: ' + age);
        rl.close();
    });

    