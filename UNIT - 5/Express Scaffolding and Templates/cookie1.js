//Cookies : small piece of data that is sent along with the request and response objects - HTTP
//Cookies are always name:value pairs
// application: 1. user tracking: if new or old user - userid(uid)
//				2. session management: (Login/logout of a user with uid)
//npm i --save cookie-parser

//cookies-small piece of information stored on client side as cache
//have a gmail account-tooltip of previous entered credentials
//cookie created and sent by server

//document.cookie
//"uname=ABEsections"

var express = require("express");
var app = express();

var cookieParser = require("cookie-parser"); // third party middleware: use() method for middleware

app.use(cookieParser()); //data will be save in req.cookies ,app.use() for middleware

app.get("/",function(req,res){
   
    res.cookie("uname", "ABEsections").send("Cookie set!!")
     
    // to set a cookie: use response object

     console.log(req.cookies.uname); // to get the cookie : use request object
    })

app.listen(3002,function(){
	console.log("Server up at 3000")
})