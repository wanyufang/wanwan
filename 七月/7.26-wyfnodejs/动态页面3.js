// 引入http模块
const http = require('http');
// 创建一个服务器
const server = http.createServer();
// 给服务器绑定id和端口
server.listen(8080,'192.168.70.70',function(){
    console.log('连接服务器成功 http://192.168.70.70:8080')
});
// 给server注册请求事件
server.on('request',(req,res) => {
    // 设置响应头 避免解析乱码
    res.setHeader('Content-Type','Text/html;charset=utf-8');
    // 根据url尾部判断 跳转至对应的页面
    if(req.url === '/index.html') {
        res.end('<h1>主页</h1>');
    }else if(req.url === '/list.html') {
        res.end('<h1>列表页</h2>');
    }else if(req.url === '/detail.html') {
        res.end('<h1>详情页</h1>');
    } else {
        res.end('404')
    }
});