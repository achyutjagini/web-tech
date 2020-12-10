//Error Handling
//Middleware function to handle errors
//app.use(["/"],err,req,res,next) -- Error handle MW function

var express = require("express");
var app = express();

app.use("/student", function(err, req, res,next){
	console.log(err.stack);
	res.status(500).send("Something went wrong")

})
app.get("/student/:id",function(req,res,next){
	if(req.params.id==="2000"){
		var err = new Error("Something Went Wrong");
		next(err)
	}
	else{
		res.send("Everything is fine with "+req.params.id);
		next()
	}
})
app.use("/student",function(req,res){
	console.log("I am fine...")
})
app.listen(3000, function(){
	console.log("Server listening on 3000...")
});