// const logger = require("../../utils/log");

const http = require("http");


const server = http.createServer((request,response)=>{
        // logger.debug(response);
        // console.log(request);
        // console.log(request.url);
        // console.log(request.method);
        // console.log(request.headers);

        const url = request.url;
        response.writeHead(200,{
            'content-type':'application/json;charset=utf-8',

        });
        response.write(url);
        response.end();
        
});

server.listen(9999,()=>{
    console.log("localhost:9999，服务器启动成功")
})
