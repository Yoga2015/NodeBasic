const fs = require("fs");

const fsPromises = require('fs').promises;


// 创建一个文件夹 log , 回调函数是错误优先的回调函数，错误优先的回调函数是第一个参数是错误
fs.mkdir("log",(err)=>{
    if (err) throw err
    console.log("文件夹创建成功")
})

// //修改文件夹名字
fs.rename("./log","./log2",()=>{
    console.log("文件夹名称修改成功")
})

// // //删除文件夹 
fs.rmdir("./log2",()=>{
    console.log("删除文件夹")
})

// //查询文件夹中的内容
fs.readdir("../06-fs",(err,result)=>{
    console.log(result)
    console.log("读取成功")
})

// //  给文件写入内容   ，这样重复写入会存在覆盖
fs.writeFile('./logs/abc.log','hello\nworld12',(err)=>{
    console.log('给abc.log文件写入 helloworld 圆满成功')
})

//给原来的文件中追加内容
fs.appendFile('./logs/abc.log','追加内容，不覆盖前面的内容',(err)=>{
    console.log('给abc.log文件中写入追加内容，不覆盖前面的内容')
})

// // 删除文件
fs.unlink('./logs/abc.txt',(err)=>{
    console.log('删除文件')
})

//读取文件   ,但是 不加参数 utf-8 会返回的是buffer,不是二进制，这是数据流，得转成字符串,用 toString()。
fs.readFile('./logs/abc.log',(err,content)=>{
    console.log(content.toString())
})



//从这个上下文，执行代码是从上到下的，但是 'continue...'打印在先，是因为用了异步（回调函数）
fs.readFile('./logs/abc.log',(err,content)=>{
    console.log(content.toString())
})
console.log('continue...')

// 同步方法
const content = fs.readFileSync('./logs/abc.log','utf-8');
console.log(content)
console.log('continue...')


// 批量增加文件
for(var i = 0; i<10;i++){
    fs.writeFile("./logs/log-0.log",`log-${i}`,(err)=>{
        console.log("done.")
    })
}

// 遍历读取文件夹
fs.readdir("./",(err,content)=>{
    content.forEach((value,index)=>{
        
    })
})

// 监视文件
fs.watch('./logs/log-0.log',(err)=>{
    console.log("file has change")
})



fs.readFile('./123.txt','utf-8',(err,datastr)=>{
    if(err){
        console.log('读取文件失败');
    }
    console.log("读取文件成功"+ datastr);
})



