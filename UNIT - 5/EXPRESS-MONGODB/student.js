//middleware happens between request and response cycle
//no need to run student.js run only server express_router.js for put run also client.js
//no need to run student.js at all
//student collection in newdb
//http://localhost:9000/student
//type http://localhost:9000/student/23456

var express = require("express"); // npm install express --save
var MongoClient = require("mongodb").MongoClient;

var router = express.Router();//creates router object

//use express router

//Multer is a node.js middleware for handling multipart/form-data,
// which is primarily used for uploading files. 

var multer = require('multer');             // npm install multer; 
var upload = multer();

router.use(upload.array())   //upload-reference variable for multer

//no need to create server for express
//req.body

router.get("/", function(req,res){ // GET /student?hostel=yes
	MongoClient.connect('mongodb://localhost:27017',{
		useUnifiedTopology:true
	}, function(err,client){
		if(err) throw err;
		const db = client.db('newdb'); //use newdb;
		db.collection('student').find(req.query).toArray(function(err,objs){ // find({})
			res.send(objs)
		});
	});
});

router.get("/:sid", function(req,res){ 
// GET /student/1234
//srn-23456

	MongoClient.connect('mongodb://localhost:27017',{
		useUnifiedTopology:true
	}, function(err,client){
		if(err) throw err;
		const db = client.db('newdb'); //use newdb;
		db.collection('student').findOne({srn:req.params.sid},//sid refers to srn
			function(err,obj){ 
			res.send(obj)
		});
	});
});



router.post("/", function(req,res){
	//POST /student message body - {srn:"1234", name:"", dept:"ece"}
	MongoClient.connect('mongodb://localhost:27017',{
		useUnifiedTopology:true
	}, function(err,client){
		if(err) throw err;
		const db = client.db('newdb'); //use newdb;
		db.collection('student').insert(req.body,function(err,objs){ // find({})
//insert whatever on req.body 
//req.body got from parser
//it has json contents

		res.send("Save Successful!!!")
		});
	});
})

router.put("/:sid", function(req,res){
	//PUT /student/1234 message body - {srn:"1234", name:"", dept:"ece"}
	MongoClient.connect('mongodb://localhost:27017',{
		useUnifiedTopology:true
	}, function(err,client){
		if(err) throw err;
		const db = client.db('newdb'); //use newdb;
		db.collection('student').update({srn:req.params.sid},req.body,function(err,objs){
			res.send("Update Successful!!!")
		});
	});
})

router.delete("/:sid", function(req,res){
	//DELETE /student/1234
	MongoClient.connect('mongodb://localhost:27017',{
		useUnifiedTopology:true
	}, function(err,client){
		if(err) throw err;
		const db = client.db('newdb'); //use newdb;
		db.collection('student').delete({srn:req.params.sid}, function(err,objs){
			if(err) 
				res.send("Delete Failed!!!")
			else
				res.send("Delete Successful!!!")
		});
	});
})
module.exports = router;