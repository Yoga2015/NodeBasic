const http = require("http");
const https = require("https");
const cheerio = require("cheerio");


function filterData(data){
    const $ = cheerio.load(data);
    $('.section-box-row p').each((index,el)=>{
        console.log($(el).text())
    })
    
}

const server = http.createServer((request,response)=>{
   let data ='';
    https.get("https://www.meizu.com/",(result)=>{
        result.on("data",(chunk)=>{
            data += chunk;
        })
        result.on("end",()=>{
            filterData(data)
        })
    })
})

server.listen(8080,()=>{
    console.log('localhost:8080')
    
})