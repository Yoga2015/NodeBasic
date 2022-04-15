// // for(var i = 0;i <10; i++){
    
// //     console.log("easy"+ i)
// // }
// // console.log("hello world 打印10次")

// const fs = require("fs");


// // // 批量增加文件
// // for(var i = 0; i<10;i++){
// //     fs.writeFile(`./logs/log-${i}.log`,`log-${i}`,(err)=>{
// //         console.log("done.")
// //     })
// // }

// // 遍历读取文件夹
// // fs.readdir("./",(err,content)=>{
// //     content.forEach((value,index)=>{
        
// //     })
// // })

// // 遍历读取文件
// fs.readFile("./logs",(err,content)=>{
//     content.forEach((value,index)=>{
        
//     })
// })


const http =require('http');

http.createServer((req,res)=>{
    let urlString = req.url;
    console.log(urlString);
    
    res.write('hello');
    res.end();

}).listen(9090,()=>{
    console.log("localhost:9090 启动了")
})