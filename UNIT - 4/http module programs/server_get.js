var http = require('http');
var url = require('url');
var fs = require('fs');
//request is readable stream,response is writable stream
// localhost:8080/sample.txt?srn=1234

http.createServer(function (req, res) {
    if(req.method == "GET"){
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Error - File Not Found");
    } 
    
    else{
        res.writeHead(200,{'Content-type':'text/html'});
        //var lines = data.split(/\r?\n/);
        objs = JSON.parse(data);
        var query = myurl.query;//?srn=1234&dept=cse
        var qobj = qs.parse(query);
        //qobj = {"srn":"1234"}

        for(var i in objs){
            //var obj = JSON.parse(lines[i]);
        //response.write(data);
            if(objs[i].srn==qobj.srn)
                res.write("<h1>"+obj.name+"</h1>")
        }
        res.end();
    }
})
}
}).listen(8080)