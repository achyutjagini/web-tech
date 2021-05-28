var fs=require("fs")
fs.open('data.txt',function(err,fd){
    if(err) throw err

    fs.read(fd,'data.txt',function(err,data)
    {
        if(err) throw err
       console.log(data.toString()) 
}
    )
}
)