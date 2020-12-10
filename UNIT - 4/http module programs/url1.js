/*The URL module splits up a web address into readable parts.
Parse an address with the url.parse() method,
and it will return a URL object with each part of the address as properties:*/
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var p = url.parse(adr,true)
console.log(p.host);   //localhost:8080
console.log(p.pathname); // /default.htm
console.log(p.search) // ?year=2017&month=february'

/*The query property returns an object with all the querystring parameters as properties:*/
var qdata = p.query;
console.log(qdata.year);
