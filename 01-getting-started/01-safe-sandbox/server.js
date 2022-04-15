const https = require('https');

https.get('https://www.runoob.com/nodejs/nodejs-tutorial.html',(res)=>{
    console.log(res);
});