//定义一个函数
function readStaticFile(){
    return "hello";
}

module.exports = readStaticFile;  //因为是模块，所以需要暴露出去。
