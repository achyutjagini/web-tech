var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("pes");
  var myobj = { empid: "st18cse910", address: "electronic city",name:"ach" };
  dbo.collection("employee").insertOne(myobj,function(err,res){
    console.log("1 document inserted");
    db.close();
  });
});