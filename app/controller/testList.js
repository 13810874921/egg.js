const Controller = require('egg').Controller
// module.exports = {
//     testList:{

//     }
// }

class TestListController extends Controller {
    async list(){
        const ctx = this.ctx
        const testList = await ctx.service.list.list()
        // this.logger.info('\n---------------',testList)
        // this.logger.info('\n---------------',ctx.app)
        return ctx.render('testList/list.tpl',{list:testList.list.result,res:testList.res})
    }
}
module.exports = TestListController;