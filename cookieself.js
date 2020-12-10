//for deleting cookie use clearCookie() method.Only argument is name
// third party middleware: use() method

var express = require("express");
var app = express();
var cookieParser = require("cookie-parser"); 

app.use(cookieParser()); 
x=0;
app.get("/",function(req,res){

res.cookie("uname", "expressuser").send("you have visited the site "+x+" times")
//first set the cookie then can print it

console.log(req.cookies.uname);
x++

})

app.listen(3017
	,function(){
	console.log("Server up at 3000")
})


