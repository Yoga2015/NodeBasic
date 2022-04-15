//阻塞
// var fs = require("fs");
// var data = fs.readFileSync("input.txt");

// console.log(data.toString());
// console.log("程序执行结束！");

// 非阻塞
 var fs  = require("fs");

 fs.readFile("input.txt",function(err,data){
     if(err) return console.error(err);
     console.log(data.toString());
 });

 console.log("程序执行结束喔！");



// index.html
/* <script src="./mine.js"></script>
<script src="./a.js"></script>
<script src="./b.js"></script> */

//全局变量污染
// mine.js
// var name = 'xiaohua'
// var age = 18

// // a.js
// var name = 'lilei'
// var age = 15

// // b.js
// var name = 'hanmeimei'
// var age = 13


//解决全局变量污染，使用命名空间的方法，解决命名冲突
// mine.js
// app.mine = {}
// app.mine.name = 'xiaohua'
// app.mine.age = 18

// // a.js
// app.moduleA = {}
// app.moduleA.name = 'lilei'
// app.moduleA.age = 15

// // b.js
// app.moduleB = {}
// app.moduleB.name = 'hanmeimei'
// app.moduleB.age = 13

// // 上面已经开始有隐隐约约的模块化的概念，只不过是用命名空间实现的。
// // 这样一定程度上是解决了命名冲突的问题，b.js模块的开发者，可以很方便的通过app.moduleA.name ()来
// // 取到模块A 中名字，但是也可以通过app.moduleA.name = 'rename' 来任意改掉模块A中的名字，而这件事，
// // 模块A却毫不知情！这显然是不被允许的。所以需要利用JavaScript语言的函数作用域，使用闭包的特性来
// // 来解决上面的这个问题

// //闭包
// // mine.js
// app.mine = (function(){
//     var name = 'xiaohua';
//     var age = 18;
//     return{
//         getName:function(){
//             return name
//         }
//     }
// })

// //a.js
// app.moduleA = (function(){
//     var name = 'lilei';
//     var age = 15;
//     return{
//         getName:function(){
//             return name
//         }
//     }
// })

// //b.js
// app.moduleB = (function(){
//     var name = 'hanmeimei';
//     var age = 17;
//     return{
//         getName:function(){
//             return name
//         }
//     }
// })

// 现在b.js模块可以通过app.moduleA.name() 来取到模块A的名字，
// 但是各个模块的名字都保存在各自的函数内部，没办法被其它模块更改。
// 这样的设计，已经有了模块化的影子，每个模块内部维护私有的东西，开放接口给其它模块使用，
// 但是依然不够完美，譬如上例中，模块B可以取到模块A的东西，但模块A 却取不到模块B的东西，
// 因为上面这三个模块加载有先后顺序，互相依赖。
// 当一个前端应用业务规模足够大后，这种依赖关系又变得异常难以维护。


