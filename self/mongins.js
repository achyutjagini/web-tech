var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, { useUnifiedTopology: true } ,function(err, db) {
  if (err) throw err;
  var dbo = db.db("pes");
  var myobj = 
      
   [ {empid: "st18cse910", address: "electronic city",name:"ach",
code:"UE19CS204"},
{empid: "st18cse910", address: "electronic city",name:"bacto",
code:"UE19CS204"},
];


  dbo.collection("course").insertMany(myobj,function(err,res){
    console.log("1 document inserted");
db.close();
});

});
