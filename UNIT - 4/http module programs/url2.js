/*Create a Node.js file that opens the requested file and 
returns the content to the client.
If anything goes wrong, throw a 404 error*/

var http = require("http")
var fs = require("fs")
var url = require("url")

http.createServer(function(request,response){
  var q= url.parse(request.url,true);

  var filename = "." + q.pathname;
  fs.readFile(filename, function(err,data){
    if(err) {
      return response.end("404 - File not found")
    }

    response.writeHead(200,{"Content-Type" : "text/html"})
    
    response.write(data);

    return response.end();
  })
}).listen(8090);