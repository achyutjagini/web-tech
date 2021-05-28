const fs = require("fs")
fs.open("simple.txt","w",function(err,fd){
    if(err) throw err
    fs.write(fd,"I just love NODEJS on Visual Studio",function(err){
        if(err) throw err
        console.log("Success")
    })
})