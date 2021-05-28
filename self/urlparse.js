var url=require("url")
var fs=require("fs")
var be="http://localhost:8080/pes.htm?city=Bangalore&year=2020"

var q=url.parse(be,true);
console.log(q.hostname);
console.log(q.pathname);
console.log(q.search);

var qdata=q.query;
console.log(qdata.city)

console.log(qdata.year);

fs.writeFile("requestlog.txt",q.hostname+" "+q.pathname+" "+qdata.city,function(err)
{
    if(err) throw err
})



