var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, { useUnifiedTopology: true } ,function(err, db) {
  if (err) throw err;
  var dbo = db.db("pes");
      

  dbo.collection("course").find( {},{projection:{_id:0,empid:1,address:1,name:1,code:1}} ).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);

});

dbo.collection("course").find({}).toArray(function(err, result) {
  if (err) throw err;
  console.log(result);

});

/*dbo.collection("course").findOne({code:"UE19CS204"}, function(err, result) {
  if (err) throw err;
  console.log(result);
db.close();
});*/

});