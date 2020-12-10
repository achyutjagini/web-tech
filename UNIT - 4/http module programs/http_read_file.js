// Open a file which resides on the server and return its content

var http = require("http");
var fs = require("fs")
http.createServer(function(request,response){
    
    fs.readFile("simple.txt",function(err,data){
        if(err) throw err
        response.write(data);
        return response.end();
 
   })

}).listen(8001,()=>{console.log("Listening")})