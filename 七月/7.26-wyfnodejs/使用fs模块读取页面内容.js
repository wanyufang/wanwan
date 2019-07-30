// 引入http模块
const http = require('http');
// 引入fs模块读取页面内容
const fs = require('fs');
// 创建一个服务器
const server = http.createServer();
// 给服务器绑定id和端口
server.listen(8080, '192.168.70.74', function () {
    console.log('连接服务器成功 http://192.168.70.74:8080')
});
// 给server注册请求事件
server.on('request', (req, res) => {
    // 设置响应头 避免解析乱码
    res.setHeader('Content-Type', 'text/html;charset=utf-8');

    // 使用fs读取内容
    if (req.url === '/index.html') {
        fs.readFile('./views/index.html',function (err, data) {
            if (err) throw err;
            res.end(data);
        });
    } else if (req.url === '/list.html') {
        fs.readFile('./views/list.html',function (err, data) {
            if (err) throw err;
            res.end(data);
        });
    } else if (req.url === '/detail.html') {
        fs.readFile('./views/detail.html',function (err, data) {
            if (err) throw err;
            res.end(data);
        });
    }
    else if (req.url === '/assets/css/list.css') {
        res.setHeader('Content-Type','Text/css');
        fs.readFile('./assets/css/list.css',function (err, data) {
            if (err) throw err;
            res.end(data);
        });
    }
    else if (req.url === '/assets/js/list.js') {
        fs.readFile('./assets/js/list.js',function (err, data) {
            if (err) throw err;
            res.end(data);
        });
    }
    else if (req.url === '/assets/images/1.jpg') {
        fs.readFile('./assets/images/1.jpg',function (err, data) {
            if (err) throw err;
            res.end(data);
        });
    }
    else {
        res.end('404');
    }
})