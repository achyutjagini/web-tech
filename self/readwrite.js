var fs=require("fs")
fs.readFile('data.txt',function(err,data)
  {
      if(err) throw err
      
console.log(data.toString())

fs.writeFile('data200.txt',data.toString(),200,function(err){
    if(err) throw err}
)
  }
)
/*
 fs.writeFile('data200.txt',y.toString(),function(err){
    if(err) throw err
 } )*/