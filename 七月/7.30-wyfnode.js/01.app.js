//  一定要先下载所有的第三方模块

// 搭建服务器
const express = require('express');
const app = express();
const fs = require('fs')
app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080')
});


// 主页里有静态资源 还要先处理静态资源
app.use('/assets',express.static('assets'));

// 主页需要使用模板引擎渲染结构
app.set('view engine','ejs');

// 约定好请求主页的地址是 /index
app.get('/index',(req,res)=>{   
    // 使用模板引擎
    // 读取数据,

})