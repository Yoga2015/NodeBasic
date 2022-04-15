const fs = require('fs')

require('http')
    // .createServer((request,response)=>{
    //     // response.end('ok')
    //    
    //     const urlString = request.url;

    //     switch(urlString){
    //         case '/':               //第一条路由
    //             response.end('hi!');
    //             break;
    //         case '/homeworld':      //第二条路由
    //             fs.readFile('./homeworld.html',(err,content)=>{
    //                 response.end(content)
    //             })
    //             break;
    //         case '/app.js':         //第三条路由
    //             fs.readFile('./app.js',(err,content)=>{
    //                 response.end(content)
    //             })
    //             break;
    //             case '/cba.png':   //第四条路由
    //                 fs.readFile('./cba.png',(err,content)=>{
    //                     response.end(content)
    //                 })
    //                 break;

    //         default :
    //             response.end('page 404');

    //     }

    // })；

    .createServer((req,res)=>{
        const urlString = req.url;
        console.log(urlString);
        const file = fs.readFileSync(`.${urlString}`)    // `` 符号是~的那个按键
        res.end(file)

    })

    
    .listen(8080,()=>{
        console.log("localhost:8080")
    })