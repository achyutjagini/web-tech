
var express = require("express"); // npm install express 

var app = express();
app.get("/weather",function(req,res,next){

    console.log("route function");
    res.send("welcome to bangalore")
    //next();
})


app.use("/weather",function(req,res,next){
    console.log("executed after route");
    next();
})

app.listen(4001)