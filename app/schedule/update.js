module.exports = {
    schedule: {
      // interval: '1m', // 1 分钟间隔
      type: 'all', // 指定所有的 worker 都需要执行
      cron:'59 * * * * *'
    },
    async task(ctx) {
        const res = await ctx.curl('https://api.apiopen.top/recommendPoetry', {
            dataType: 'json',
      });
      ctx.app.cache=res.data.result.authors;
      ctx.app.logger.info('当前服务器时间',new Date(),'定时任务中的：',ctx.app.cache)
    },
  };