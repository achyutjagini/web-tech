var http = require('http');
var fetch = require('node-fetch');
//200-means status 200-response being processed OK status

/*
//fetch info
fetch('http://localhost:4009/abcd',{
    method : 'GET',//used to read data
    headers : {'Content-Type' : 'application/json'}

})
//.then(res => res.json())//arrow function 
.then(function(res){
return res.json();
}
)
.then(res => console.log(res));
*/


//add info
fetch('http://localhost:4010/newdb', {
    method: 'POST',
    body:    JSON.stringify({"name":"Amar","Univ":"PESU",code:"26"}),
    headers: { 'Content-Type': 'application/json' },
})

 .then(res => console.log(res));
