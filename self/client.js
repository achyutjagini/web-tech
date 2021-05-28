var fetch = require('node-fetch');//npm install node-fetch
//import fetch from 'cross-fetch';

fetch('http://localhost:9700/sample.txt',{
	method:'POST',
	headers:{'content-type':'application/json'},
	body:JSON.stringify({"name":"Raj","srn":"12347"})
})
.then((res)=>res.text())
.then((res)=>console.log(res))
