var fs=require("fs")
console.log("Reading the contents of simple.txt")
var data=fs.readFileSync("simple.txt","utf-8")
console.log("contents are")
console.log("Reading is completed: ", data)
