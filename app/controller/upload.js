'use stritc';

const Controller = require('egg').Controller
const fs = require('fs')
const path = require('path')
// await-stream-ready, 文件读写流 ready 库，主要是方便的使用 await 进行文件上传, 否则可能出现数据丢失的情况
const awaitWriteStream = require('await-stream-ready')
const sendToWormhole = require('stream-wormhole')
const moment = require('moment')()
//加密
const crypto = require('crypto')
const md5 = crypto.createHash('md5')
const result = md5.update('a').digest('hex');
class upLoadController extends Controller {
    async index(){
        const ctx = this.ctx;
        const stream =await  ctx.getFileStream();
        const target = path.join(__dirname,'../public/uploads/',stream.filename)
        this.logger.info('md5 => a-----',target)
        const writeStream = fs.createWriteStream(target)
        try{
            //向mysql插值
            const SQL = await this.app.mysql.get('db1');
            await SQL.query('insert into uploads (name,path,create_time) values ("'+stream.filename+'","/uploads/'+stream.filename+'","'+moment.format("YYYY-MM-DD HH:mm:ss")+'")');
            await awaitWriteStream.write(stream.pipe(writeStream))
        }catch(err){
            await sendToWormhole(stream)
            throw err;
        }
        ctx.body = {
            url:'/uploads/'+stream.filename
        }
    }
}

module.exports=upLoadController;