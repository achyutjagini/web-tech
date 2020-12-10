//express uses http
//do http://localhost:9000/student to see get.It uses student.js

//this is server file
//see https://drive.google.com/drive/folders/16cPER7UNfOwL1ZXQaKxLqpzC42Fh3j39

//for post do node express_router.js
//node client.js

var express = require("express"); // npm install express --save
var app = express();
var MongoClient = require("mongodb").MongoClient;
var bodyParser = require('body-parser');

app.use(bodyParser.json());    //populates req.body with the req message body from client or leaves it as null object
								//.json is method in bodyParser module
								//body parser parses data between client and server
								 //message coming from client
								 //since it's middleware use use method

app.get("/", function(req, res){        ///-home route
	res.send("Welcome to my page!!!")

})

var studrouter = require("./student.js")  //student.js file is exported ./ as it's in current directory

app.use("/student", studrouter); // http://localhost:3000/student


app.listen(9000, function(){
	console.log("Server listening on 3000...")
})