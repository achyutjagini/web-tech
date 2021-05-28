var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, { useUnifiedTopology: true } ,function(err, db) {
  if (err) throw err;  
  var dbo = db.db("ipl");
      
var myobj=

   { name:"virat kohli",
team:"rcb", stats:{runs:'10000',srate:'21'}}



  dbo.collection("player").insertOne(myobj, function(err, result) {
    if (err) throw err;
  
  })

})