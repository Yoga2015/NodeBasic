// const http = require('http');

// const server = http.createServer((request,response)=>{
//     let url = request.url;
//     switch(url){
//         case '/api/data':
//         response.write("hello");
//         break;
//         default:
//             response.write("page not found 404");
        
//     }
//     response.end();
// })

// server.listen(8080,()=>{
//     console.log("localhost:8080")
// })

// const http = require('http');

// const server = http.createServer((request,response)=>{
//     let url = request.url;
//     console.log(url)
//     switch(url){
//         case '/api/data':
//         response.write("getData('hello')");
//         break;
//         default:
//             response.write("page not found 404");
        
//     }
//     response.end();
// })

// server.listen(8080,()=>{
//     console.log("localhost:8080")
// })




// 1
const http = require('http')
const url = require('url')

const server = http.createServer((request, response) => {
   
    let urlStr = request.url;
    let urlObj =  url.parse(urlStr,true)
    // 4
    switch (urlObj.pathname) {
        case '/api/data':
            response.write(`${urlObj.query.cb}("hello")`)
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

