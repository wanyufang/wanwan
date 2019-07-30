const http = require('http');
const server = http.createServer();

// 在04里面已经把代码封装好了 直接调用即可
const router = require('./04.mvc的路由层');

server.listen(8080, () => {
    console.log('http://127.0.0.1:8080');
});

server.on('request', (req, res) => {
   router(req.res)
})