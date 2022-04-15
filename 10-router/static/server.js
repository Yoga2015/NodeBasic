const http = require('http');
const path = require('path');
const fs = require('fs');

http.createServer((req,res)=>{
    // let urlString = req.url;
    // let filePathName = path.join(__dirname,'./public',urlString);  //拼接合并成项目完整目录
    
    
    res.writeHead(200,{
        'content-type':'text/html'
    })

    fs.readFile('./index2.html','utf-8',(err,data)=>{
        if(err){
            res.write("The access path does not have corresponding files or folders")
        }else{
            
            res.end(data)
        }
       
    })

    

}).listen(9090,()=>{
    console.log("localhost:9090 started ")
})