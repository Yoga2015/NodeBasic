const http = require('http');
const path = require('path');
const readStaticFile = require('./readFileStatic.js');

http.createServer(async(req,res)=>{
    let urlString = req.url;
    let filePathName = path.join(__dirname,'./public',urlString);   // 拼接合并成完整的项目路径
    
    let {data,mimeType} = await readStaticFile(filePathName,res);  //因为封装了一个异步函数，所以需要等待
    //它的目标是返回一个文件的读取的一个流，读取完文件以后，把流返给我，通过res.write()写到页面上去
    console.log(`${mimeType};charset=utf-8`);

     //往前端返回数据的同时，给了它头部一个mime类型。
    res.writeHead(200,{ 
        'content-type': `${mimeType};charset=utf-8`
    })    
    res.write(data);
    res.end();
    

}).listen(8080,()=>{
    console.log("localhost:8080 服务器启动了")
})