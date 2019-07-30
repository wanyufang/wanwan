// console.log('hello world');
// 搭建服务器的第一步 : 引入http模块
const http = require('http');
// 创建一个服务器
// 两个参数都可选 一般使用默认值就行
const server = http.createServer();
// 给服务器绑定ip和端口
server.listen(8080,'192.168.70.70',()=>{
    console.log('服务器已经启动了,可以通过http://192.168.70.70:8080 访问')
});
// 给server注册一个浏览器请求服务器事件
// server.on(事件类型,回调函数)
server.on('request',(req,res)=>{
    // req 请求对象
    // res 响应对象
    console.log('有请求进来了')

// 返回中文 可能乱码 编码格式不对
// 设置响应头
res.setHeader('Content-Type','text/html;charset=utf-8')
res.end('你好')
});
