'use strict';

module.exports = {
    baseUrl:{
        url:'http://127.0.0.1:7666'
    },
    testList:{
        serverUrl:'https://api.apiopen.top/recommendPoetry',
    },
    robot:{
        ua:[
            /curl/i
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
}