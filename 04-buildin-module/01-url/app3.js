const log4js = require('log4js')

const path  = require('path')


const logger = log4js.getLogger();

log4js.configure({
        appenders:{
            default:{
                type:'file',
                filename:path.join(__dirname,'./cheese2.log')
            }
        },
        categories:{
            default:{
                appenders:['default'],
                level:'debug',
            }
        }
})

logger.debug('debug');
logger.error('error');
logger.warn('warn');
logger.info('info');