const fs= require("fs")
/*fs.stat("first.js",(err,stats)=>{
    if(err) throw err
    console.log("statistics of first.js: ",JSON.stringify(stats))
})*/
fs.readFile("simple.txt","utf-8",(err,data)=>{
    if(err) throw err
    console.log("Contents of the file :",data)
})

console.log("Reading the contents.......")