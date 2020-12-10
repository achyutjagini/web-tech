//Cookies : small piece of data that 
//is sent along with the request and response objects - HTTP
// application: 1. user tracking: if new or old user - userid(uid)
//				2. session management: (Login/logout of a user with uid)
//npm i --save cookie-parser

//for deleting cookie use clearCookie() method.Only argument is name


var express = require("express");
var app = express();

var cookieParser = require("cookie-parser"); // third party middleware: use() method
app.use(cookieParser()); //data will be save in req.cookies 

app.get("/",function(req,res){
	//console.log(req.cookies.uname);
	//console.log(res.cookie("uname"));

	res.cookie("uname", "expressuser").send("Cookie set!!")
	console.log(req.cookies.uname);

})

app.get("/setexp",function(req,res){
	console.log(req.cookies.uname);
	res.cookie("uname","newuser").send("Cookie set!!")

})

app.get("/delete",function(req,res){
	console.log(req.cookies.uname);
	res.clearCookie("uname").send("Cookie cleared!!")
	
})
app.listen(3010
	,function(){
	console.log("Server up at 3000")
})