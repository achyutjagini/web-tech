// http module creating a web server
//200-means status 200-response being processed OK status

var url = require('url');
var http = require('http');
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
//npm install mongodb

http.createServer(function (request, response) {
    
    //parse the url and extract the filename
    var pathname = url.parse(request.url).pathname;
    //print the pathname
    console.log("Request for" + pathname + "Received.");
    
    //read the contents of the file: pathname

    if(request.method == 'GET')//usually used to read data
    {
  console.log("Connecting to MongoDb");
    MongoClient.connect('mongodb://localhost:27017',{useUnifiedTopology:true},
    function(err,client){
     console.log("Connected to MongoDB");
    const db = client.db('newdb'); // newdb database is present in the mongodb
            
            
     db.collection('student').find({}).toArray(function(err,docs) 
       {
                response.writeHead(200,{'Content-Type':'application/json'});

                response.write(JSON.stringify(docs));//writes amar to webpage

                client.close();//closes to conn to the DB
                response.end();//sends http response to the http client
      })
        });   
    }

    else//if method==post,post used to write,update data
    {
        let body = [];
        request.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            body = Buffer.concat(body).toString();
        }); 
        MongoClient.connect('mongodb://localhost:27017',{useUnifiedTopology:true},
        function(err,client){
            console.log("Connected to the DB");
            const db = client.db('newdb');
            db.collection('student').insertOne(JSON.parse(body)).then(r=>{  //parse text into JSON object
                response.writeHead(200,{'Content-Type':'application/json'});
                client.close();
                response.end();
            });
        });
    }
}).listen(4010);
console.log("server running/listening at http://localhost:4002")