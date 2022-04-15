const http  = require('http');
const fs = require('fs');

var server = http.createServer((req ,res)=>{

      //不管是什么请求直接响应，传回去一个html格式的一个内容，
        res.writeHead(200,{'content-type':'text/html'});

        fs.readFile('./index.html','utf-8',(err,content)=>{
          if(err) throw err;
          res.end(content)
        });  
        //到底是不是所有的html 、css、 js等等文件都要以这种方式呈现给浏览器呢？      
        
});

server.listen(9090,'127.0.0.1');