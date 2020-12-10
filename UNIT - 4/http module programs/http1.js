var http=require("http")
const server=http.createServer(function(request,response){
 //   response.writeHead(200, {'Content-Type': 'text/html'});// 
    response.write("Hello World!!!")
    response.end();
})

server.listen(9001,()=>{
    console.log("Server is Listening !!!!!!!!!!!")
})