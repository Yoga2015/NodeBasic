

const http = require('http')
const url = require('url')

const server = http.createServer((request, response) => {
    // url 和上面同名了，所以改了urlStr
    let urlStr = request.url;
    let urlObj =  url.parse(urlStr,true)
    // 4
    switch (urlObj.pathname) {
        case '/api/data':
            response.writeHead(200,{
                "content-type":"application/json",
                "Access-Control-Allow-Origin":"*"
            })
            response.write('{"ret":true,"data":"hello"}')
            break;
        default: 
            response.write('page not found')
    }
    response.end()
}) 

// 5
server.listen(8080, () => {
    console.log('localhost:8080')
})

