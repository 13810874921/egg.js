
const Controller = require('egg').Controller;
const moment = require('moment')()
 class HelloController extends Controller{
    async hello(){
        this.ctx.body={
            code:200,
            data:{
                name:'张三四',
                age:18
            },
            timestamp:Number(moment.format('X')),
            time:moment
            // timestamp:moment.format('YYYY-MM-DD hh:mm:ss')
        }
    }
}
module.exports= HelloController;
