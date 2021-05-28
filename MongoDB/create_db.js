//Database that has been created will be active only if it has atleast one document.
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/pes";
MongoClient.connect(url, { useUnifiedTopology: true },function(err, db) { 
  if (err) throw err;
  console.log("Database created!");
  db.close();
});


