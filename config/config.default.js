'use strict';
const path = require('path')
module.exports = appInfo => {
  const config = exports = {};
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1546830180860_537';
  //static静态资源目录
  config.static={
    prefix:'',//配置路径名称
    dir:path.join(appInfo.baseDir,'app/public/'),
    dynamic:true, // 动态
    preload:false //重加载
  }
  // add your config here
  config.middleware = ['robot'];
  //跨域的配置==========    egg-cors
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    // domainWhiteList: ["*"]
  };
  //开启跨域支持
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  //upload接收的文件配置 
  exports.multipart = {
    fileSize:'50mb',
    whitelist: [
      '.csv',
      '.png',
      '.jpg'
    ],
  }


  // // 添加 view 配置
  exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
  return config;
};
