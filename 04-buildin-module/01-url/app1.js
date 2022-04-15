const log4js = require("log4js");

log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "debug" } }
});

const logger = log4js.getLogger("cheese");

const url = require("url");

const urlString = "http://www.baidu.com:443/path/index.html?id=2#tag=3";

const urlObj ={
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com:443',
  port: '443',
  hostname: 'www.baidu.com',
  hash: '#tag=3',
  search: '?id=2',
  query: 'id=2',
  pathname: '/path/index.html',
  path: '/path/index.html?id=2',
  href: 'http://www.baidu.com:443/path/index.html?id=2#tag=3'
};

// logger.debug(url.parse(urlString));
// logger.debug(url.format(urlObj));

logger.debug(url.resolve('https://www.abc.com/a','../'));
logger.debug(url.resolve('https://www.abc.com/a','/b'))
