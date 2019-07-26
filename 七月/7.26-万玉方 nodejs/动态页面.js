// 搭建服务器的第一步 : 引入http模块
const http = require('http');
// 创建一个服务器
// 两个参数都可选 一般使用默认值就行
const server = http.createServer();
// 给服务器绑定ip和端口
server.listen(8080, '192.168.70.70', () => {
    console.log('服务器已经启动了,可以通过http://192.168.70.70:8080 访问')
});
// 给server注册一个浏览器请求服务器事件
// server.on(事件类型,回调函数)
server.on('request', (req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    if (req.url === '/index.html') {
        res.end('<h1>主页</h1>');
    } else if (req.url === '/list.html') {
        let html = `<h1>列表页</h1>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>`;
        res.end(html)
    } else if (req.url === '/detail.html') {
        res.end('<h1>详情页</h1>')
    } else {
        // 返回404
        res.end('404')
    }
});
