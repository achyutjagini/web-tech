var http = require('http');
var url = require('url');
var fs = require('fs');

// localhost:8080/sample.txt?srn=1234
http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;   // / is automatically taken
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Error - File Not Found");
    }
    res.writeHead(200,{'Content-Type': 'text/html'});
    var obj = JSON.parse(data);
    var query = q.query;
    if(obj.srn == query.srn)
      res.write(obj.dept);
      return res.end();
  }
  );

}).listen(8081);