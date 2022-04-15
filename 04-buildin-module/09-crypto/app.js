const crypto = require('crypto')

//做个字符串加密 ，看看加密的内容变成什么样
// const password = 'abc123456';    不同的值（位数、字符类型）输出不同的加密结果
const password = 'abc123456789';

const hash = crypto
    // .createHash('sha1')
    .createHash('MD5')
    .update(password,'utf-8')     //加密谁
    .digest('hex')           //加密之后的形状

console.log(hash)    //1、sha1 算法加密 输出 370194ff6e0f93a7432e16cc9badd9427e8b4e13
                     //2、MD5 算法加密 输出 1722442b586a85c95593a9c6131a0ebd
    





