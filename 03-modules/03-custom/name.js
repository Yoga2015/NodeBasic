//1、定义一个模块
const name ={
    surname :"hong",   //surname 姓
    sayName(){
        console.log(this.surname);
    }
}

//再 定义一个模块
const age = {
    age:100,
    
}


//2、暴露模块接口   在app.js中引入
//2.1
// module.exports = {
//     name,
//     age
// }

// 2.2
exports.name = name;
exports.age = age;
