const axios  = require('axios');

axios.get('https://www.runoob.com/nodejs/nodejs-module-system.html')
 .then(result => {
     console.log(result.data)
 })
 .catch((err) => {

 })