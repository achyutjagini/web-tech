//Write data into a JSON file
//the JSON. stringify() method converts a JavaScript object or value to a JSON string

var fs = require("fs");
var fil = require("./sample1") // Read the sample1.json file entirely
//console.log(file) 

var user = { name : "Anagha",
            age: 19,
        language:["PHP","Swift","Go"]};

fil.push(user);    //Adding new data to the file

fs.writeFile("sample1.json", JSON.stringify(fil),(err) =>{
    if(err) throw err
    console.log("Done writing the JSOn data")
})
    
    