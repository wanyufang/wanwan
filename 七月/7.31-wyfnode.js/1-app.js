// 引入模块
const express = require('express');
// 创建服务器
const app = express();
// 绑定id和端口
app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
})

// 处理静态资源
app.use('/views',express.static('views'));
app.use('/assets',express.static('assets'));

// 设置pug为express的默认模板引擎
app.set('view engine','pug');

// 使用app监听浏览器的请求
app.get('/',(req,res)=>{
    res.send('你好');
});



