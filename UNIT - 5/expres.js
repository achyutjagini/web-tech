var express=require("express");
var app=express();

app.get('/',function(req,res)
{
res.send("abcd");

res.end();

})

app.get('/abcde',function(req,res)
{
res.send("defg");

}
)

app.listen(514
    ,function(){
    console.log("server listening on 501");
});