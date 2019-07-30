// 引入模块
const express = require('express');
// 创建服务器
const app = express();
// 绑定id和端口
app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080')
});

// 处理静态资源
app.use(express.static('views'));
app.use(express.static('assets'));


// 设置pug为express的默认模板引擎
app.set('view engine','pug')

// 监听获取ddd这个页面的请求
app.get('/ddd.html',(req,res)=>{
    // 把ddd.pug模板文件导入数据
    res.render('ddd',{title:'Hey',missage: 'Hello'});
})

// ejs 先下载 之后设置ejs为express的默认的模板引擎
app.set('view engine','ejs');
// 也要准备一个默认模板引擎
// 导入数据
app.get('/ejs',(req,res)=>{
    res.render('zzz',{name:'狗蛋',age:'12',gender:'男'})
})

// 使用app监听浏览器的请求
app.get('/',(req,res)=>{
    res.send('请求进入')
});