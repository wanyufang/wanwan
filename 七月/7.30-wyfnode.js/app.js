// 引入模块
const express = require('express');
// 创建服务器
const app = express();
const router = require('./router');
// 绑定id和端口
app.listen(8080, () => {
    console.log('http://127.0.0.1:8080')
});

// 处理静态资源
// app.use(express.static('views'));
app.use('/assets', express.static('assets'));


// // 设置pug为express的默认模板引擎
// app.set('view engine','pug')

// // 监听获取ddd这个页面的请求
// app.get('/ddd.html',(req,res)=>{
//     // 把ddd.pug模板文件导入数据
//     res.render('ddd',{title:'Hey',missage: 'Hello'});
// })

// ejs 先下载 之后设置ejs为express的默认的模板引擎
app.set('view engine', 'ejs');
// 也要准备一个默认模板引擎
app.use(router)