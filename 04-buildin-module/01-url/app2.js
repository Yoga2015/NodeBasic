const log4js = require('log4js');
const path = require('path');
const logger =  log4js.getLogger();

// 设置log4js相关配置
log4js.configure({
   /** 
   * 追加器就使用默认的default追加器，所有没有设置追加的分类（category）
   * 都会使用该追加器写入日志文件
   */
    appenders:{
        default:{
            // type:'console',
            type:'file',
            filename:path.join(__dirname,'./cheese.log'),
        }
    },

    /**
   * 分类也使用默认的分类，所有没有找到对应定义分类的日志，都会归为default分类
   */
    categories:{
        default:{
            appenders:['default'],   // 设置追加器为default，对应上面的appenders
            level:'debug',    // 设置记录日志的最低等级为debug，也就是所有日志都要记录
        }
    },
});

logger.debug('this is a debug log');
logger.info('this is a info log');
logger.warn('this is a warn log');
logger.error('this is a error log');
logger.fatal('this is a fatal log');

