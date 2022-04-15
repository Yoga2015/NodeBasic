const logger = require('../utils/log');

const querystring = require('querystring');

const query = "id=2&name=weige&from=广州"
const query2 = "id:2/name:weige/from:广州"
const queEscape = "id%3D2%26name%3Dweige%26from%3D%E5%8C%97%E4%BA%AC"
const queryObj = {id: '2',name:'weige',from:'广州'}

const newQuery = querystring.stringify(queryObj,null,null,{
    encodeURIComponent(string){
        return querystring.unescape(string)
    }
})

logger.debug(newQuery)


// const log4js = require("log4js");

// log4js.configure({
//   appenders: { cheese: { type: "file", filename: "cheese.log" } },
//   categories: { default: { appenders: ["cheese"], level: "debug" } }
// });

// const logger = log4js.getLogger("cheese");

// const url = require("url");

// const urlString = "http://www.baidu.com:443/path/index.html?id=2#tag=3";

// const urlObj ={
//   protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: 'www.baidu.com:443',
//   port: '443',
//   hostname: 'www.baidu.com',
//   hash: '#tag=3',
//   search: '?id=2',
//   query: 'id=2',
//   pathname: '/path/index.html',
//   path: '/path/index.html?id=2',
//   href: 'http://www.baidu.com:443/path/index.html?id=2#tag=3'
// };

// // logger.debug(url.parse(urlString));

// // logger.debug(url.format(urlObj));

// logger.debug(url.resolve('https://www.abc.com/a','../'));
// logger.debug(url.resolve('https://www.abc.com/a','/b'))
