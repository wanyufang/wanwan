// 搭建服务器
const express = require('express');
const app = express();
const fs = require('fs');
app.listen(8080, () => {
    console.log('http://127.0.0.1:8080');
});

// 先处理静态资源
app.use('/', express.static('assest'));

// 设置ejs为默认模板引擎
app.set('view engine', 'ejs');

// 约定好请求主页的地址为 /index
app.get('/index', (req, res) => {
    // 读取数据 把数据使用ejs渲染
    fs.readFile('./data/heros.json', 'utf-8', (err, data) => {
        if (err) console.log(err);
        let arr = JSON.parse(data);
        // 使用express里面的模板渲染数据
        res.render('index', { arr });
    })
})