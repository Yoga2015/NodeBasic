site ={
    "name":"网站",
    "num":3,
    // "sites":["google","Runoob","taobao"],
    //嵌套json 对象中的数组
    "sites": [
        { "name":"Google", "info":[ "Android", "Google 搜索", "Google 翻译" ] },
        { "name":"Runoob", "info":[ "菜鸟教程", "菜鸟工具", "菜鸟微信" ] },
        { "name":"Taobao", "info":[ "淘宝", "网购" ] }
    ]
}

for (const i in site) {
   i += object[i]+"<bar>";
}

for(i = 0; i < site.length;i++){
    i += site[i]+"<br>";
}