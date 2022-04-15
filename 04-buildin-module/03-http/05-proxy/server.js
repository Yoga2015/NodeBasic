const http = require("http");
const url = require("url");
const {createProxyMiddleware} = require("http-proxy-middleware");

const server = http.createServer((request,response)=>{
    const urlStr = request.url;
    if(/\/api/.test(urlStr)){
        
       const proxy = createProxyMiddleware('/ajax',{
           target:'https://www.npmjs.com/',
           changeOrigin:true,
       })
       //https://www.npmjs.com/ajax/getBrandRank.php？part=selling

       proxy(request,response) 
       
    }else if(/\api/.test(urlStr)){
        const proxy2 = createProxyMiddleware('/api',{
            target:'https://www.lagou.com/',
            changeOrigin:true,
        })
 
        proxy2(request,response) 
       

    }else{
        console.log('error')
    }
})

server.listen(8080,()=>{
    console.log('localhost:8080')
    
})