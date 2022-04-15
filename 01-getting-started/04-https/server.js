const http = require('http');

const server = http.createServer((request,response)=>{
    let url = request.url;
    response.write(url);
    response.end('Hello World\n');
});

server.listen(8090,'localhost',() => {
    console.log('Server running at http://127.0.0.1:8090')
})

//基于http 模块创建server