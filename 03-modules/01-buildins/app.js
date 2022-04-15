const { resolve } = require('path');
const path = require('path');

// console.log(__dirname);   // __dirname  显示当前代码所在文件的物理路径

console.log(path.resolve(__dirname,'../'));   // 调用内置模块 , resolve 是 解析