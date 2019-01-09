const Service = require('egg').Service
// const scheduleOne = require('../schedule/scheduleOne')
class TestListService extends Service{
    async list(){
        // this.app.logger.info('定时任务执行了',scheduleOne)
        // const {serverUrl} = this.config.testList;
        // this.app.logger.info('----====----====----',)
        const Sql = await this.app.mysql.get('db1');
        const resSql = await Sql.query('select * from user');
        const res = [];
        resSql.map(item=>{
            res.push(item.name)
        })
        // this.app.logger.info('----====----====----',res)
        const {data:list} = await this.ctx.curl(`${this.config.testList.serverUrl}`,{dataType:'json'})
        return {list,res};
    }
}
module.exports=TestListService;