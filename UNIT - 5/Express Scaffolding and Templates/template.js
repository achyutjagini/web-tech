//Views: It specifies a directory where the template files are located.
//in pug just write tag name and contents
//pug files follow indentation

var express = require("express"); // npm install express --save

//Initiate the server
var app = express();

//load view engine
//to use pug module
app.set('views',"./views") // views directory .pug
app.set('view engine', 'pug');

//Home route
app.get("/",function(req,res)
{
//since it's a template use res.render()

res.render("index.pug")

})

//start server @ port 3000
app.listen(3009);