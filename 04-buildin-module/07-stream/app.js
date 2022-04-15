// const fs = require('fs');

// const readStream = fs.createReadStream('./demo1.txt');
// const writeStream =fs.createWriteStream('./demo2.txt');

// readStream
//  .pipe(writeStream)   //这会把deme1.txt中的内容 覆盖到 demo2.txt

//压缩一个文件

const fs = require('fs');    // 引入 fs 模块
const zlib =require('zlib')   // 引入 zlib 模块

const gzip =  zlib.createGzip();   //调用新建压缩功能

const readStream = fs.createReadStream('./cba.png');
const writeStream =fs.createWriteStream('./abc.gzip');

readStream
 .pipe(gzip)   //pipe 管道  流过这条管道
 .pipe(writeStream)     //流出管道