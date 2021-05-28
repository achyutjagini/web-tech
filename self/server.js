// http module creating a web server
//request is readable stream,response is writable stream
//.on-chaining
var url = require('url');
var http = require('http');
var fs = require('fs');
http.createServer(function(request,response){
		if(request.method=='POST'){         //http://localhost:8080/sample.txt ;		
			//stream buffer
		var q = url.parse(request.url)
		var filename ="." + q.pathname; // includes the '/'
        var body = [];      // Empty buffer
        
		request.on('data',(chunk)=>{
			body.push(chunk);
			
		})
		.on('end',()=>{
            body = Buffer.concat(body).toString()
        fs.appendFile(filename,body,(err,data)=>
        {response.end();
        })
				response.end("Message saved in sample.txt")
		});
    
        //body -> string contain the request message
	}
}).listen(9700);
console.log("Server is up and running on http://localhost:9700");