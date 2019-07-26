
const http = require('http');
const fs = require('fs');

const server = http.createServer();
server.listen(8080,()=>{
  console.log('http://192.168.1.101:8080');
})
server.on('request',(req,res)=>{
  // 判断判断 url是否以这两个文件夹开头，就知道是否是请求静态资源
  // 判断是否以某个字符开头  indexOf === 0   startsWith
  if(req.url.startsWith('/assets') || req.url.startsWith('/views')){
    // 如果请求css文件，必然是以css结尾 endsWith - 判断某个字符串是否以 什么结尾
    if(req.url.endsWith('.css')){
      // 加一个响应头
      res.setHeader('Content-Type','text/css');
    }

    fs.readFile('.' + req.url,(err,data)=>{
      if(err) throw err;
      res.end(data);
    })
  }
})