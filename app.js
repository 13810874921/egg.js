'use strict';
module.exports = app => {
    app.on('request',ctx=>{
        // ctx.set('Content-Type', 'application/json');
        console.log('请求url--',ctx.request.url);
    })
    app.on('response', ctx => {
        console.log('响应状态--',ctx.response.status);
    });
    app.on('error', (err, ctx) => {
        ctx.logger.info('报错了呗！',err);
        ctx.body = {
            errno: 400,
            errmsg: err.message,
        };
    });
}