const Subscription = require('egg').Subscription
const moment = require('moment')()
class scheduleOne extends Subscription {
    //设置定时任务的信息
    //corn
    // 1. Seconds （秒） 
    // 2. Minutes （分） 
    // 3. Hours （时） 
    // 4. Day-of-Month （天） 
    // 5. Month （月） 
    // 6. Day-of-Week （周） 
    // 7. Year (年 可选字段)
    static get schedule(){
        return {
            type:'all', //所有worker都执行
            cron:'0 0 */3 * * *' //每3小时运行一次下面的脚本
            // interval:'10s', //设置时间间隔
        }
    }

    //要执行的内容
    async subscribe(){
        console.log("错错错")
        this.app.logger.info('定时任务开启',Date.now())
    }
}
module.exports = scheduleOne;