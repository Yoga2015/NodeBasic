const fs = require('fs');

fs.writeFile('./log.txt','hello',(err,data)=>{
    if(err){
        ;
    }else{
        console.log('文件创建成功');
    }
});  //写文件：第一参数写在哪路径下，第二参数写的内容是什么，第三参数回调