'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/hello', controller.hello.hello);
  router.get('/news',controller.news.list);
  router.get('/testList',controller.testList.list);
  router.post('/upload',controller.upload.index);
};
