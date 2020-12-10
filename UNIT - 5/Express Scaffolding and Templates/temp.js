//npm install pug --save
var express = require("express"); // npm install express --save
var app = express();

app.set('view engine', 'pug'); 
app.set('views','./views') // views directory.pug

//1st argument in render-file name
//2nd-object with  name,facebook profile don't know if profile exists

app.get('/profile', function(req,res){
	res.render('dynamic.pug',{
		name:'Rakesh',
		profile:'http://www.facebook.com/profile/rak32'
	}); //views/first_view.pug
})

app.get('/profile/:nm', function(req,res){
	res.render('dynamic',{
		name:req.params.nm,
		profile:'http://www.facebook.com/profile/'+req.params.nm
	}); //views/first_view.pug
})
app.listen(3004);

//#{name}-object name
//attribute in pug inside parentheses-a(href)