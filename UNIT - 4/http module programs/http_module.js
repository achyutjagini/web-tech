var http = require("http")
http.createServer(function(request,response){
    response.write("Welcome Folks!!!!")
    response.end();
}).listen(9004)