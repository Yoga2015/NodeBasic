const path = require('path');
const mime = require('mime');
const fs = require('fs');
const { resolve } = require('path');


function myReadFile(file){
  return new Promise((resolve,reject)=>{
   fs.readFile(file,(err,data)=>{
      if(err){
         reject('你访问的是一个文件夹，且文件夹里没有index.html')  //返给data
      }else{
         resolve(data)
      }
   })
  })
}

async function readStaticFile(filePathName){
   let ext = path.parse(filePathName).ext;   //解析文件路径名，并获取扩展名
   let mimeType = mime.getType(ext) || 'text/html';  //获取拿到 text/html , mime的一个数据类型
   let data;   //存储往前端返回数据的

   // 判断文件 或者 文件夹 是否存在     fs.existsSync(path) 如果路径存在则返回 true，否则返回 false。
   if(fs.existsSync(filePathName)){
         if(ext){
            // myReadFile(filePathName)
            //    .then(result=>data=>result)
            //    .catch((err)=>data=>err)
            data = await myReadFile(filePathName)
         }else{

            // myReadFile(path.join(filePathName,'/index.html'))
            //    .then(result=>data=>result)
            //    .catch((err)=>data=>err)
            data = await myReadFile(path.join(filePathName,'/index.html'))
           
         }    
         if(data){
            console.log('..');
         }
   }else{
      data = ("file or  folder not found");
   }

   return {
      data,
      mimeType
      
   };
}

module.exports = readStaticFile; //因为是模块，所以需要暴露出去。

