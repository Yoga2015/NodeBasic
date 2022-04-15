//3、引入一个包
const {name,age} = require("./name");   //如果你引入一个包，是自定义的包也一定要写清路径，不然又到全局里去找

//4、 调用一个包
name.sayName();
console.log(age.age);