const fs = require("fs")
// Certain methods expects a file to be existing
//fs.writeFile 
//fs.open in w mode or a mode - fs.write
//fs.appendFile

fs.writeFile("newfile.txt",
 "Hello,This is the content to be written into the file",
 function(err){
     if(err) throw err
     console.log("Successfully Written")
 })
