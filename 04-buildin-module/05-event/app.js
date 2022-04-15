const EventEmitter = require("events");

class MyEventEmitter extends EventEmitter{};

const event =  new MyEventEmitter();

//可以重名
// event.on("play",(value)=>{
//     console.log(value)
// })
event.on("play",(value)=>{
    console.log(value)
})

//一次使用
event.once("play2",(value)=>{
    console.log(value)
})

event.emit('play',"moive")
//这里是重复调用的，然后设置了 once 后就只能调用一次，无法重复调用
event.emit('play2',"tv")
event.emit('play2',"tv")
event.emit('play2',"tv")




