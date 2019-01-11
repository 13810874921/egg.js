
const Controller = require('egg').Controller;
const moment = require('moment')()
 class HelloController extends Controller{
    async hello(){
        const Sql = await this.app.mysql.get('db1')
        const resSql = await Sql.query('select path from uploads where id="5"');
        this.ctx.body={
            code:200,
            data:{
                name:'张三四',
                age:18,
                imgurl:`${this.config.baseUrl.url}${JSON.parse(JSON.stringify(resSql))[0].path}`,
            },
            timestamp:Number(moment.format('X')),
            // time:moment
            timestamp:moment.format('YYYY-MM-DD hh:mm:ss')
        }
    }
}
module.exports= HelloController;
