'use strict';

module.exports = {
    testList : {
      serverUrl:'https://api.apiopen.top/singlePoetry'
    },
    robot : {
      ua: [
        /curl/i,
        /Baiduspider/i,
      ]
    },
    mysql: {
      clients: {
          db1: {
              host: '127.0.0.1',
              port: '3306',
              user: 'root',
              password: '123456',
              database: 'localtest',
          },
      // app:true,
      // agent:false
      },
  },
};
