module.exports = {
    schedule: {
      interval: '25s', // 1 分钟间隔
      type: 'all', // 指定所有的 worker 都需要执行
    },
    async task(ctx) {
        const res = await ctx.curl('https://api.apiopen.top/recommendPoetry', {
            dataType: 'json',
      });
      ctx.app.cache=res.data.result.authors;
      ctx.app.logger.info('定时任务中的：',ctx.app.cache)
    },
  };