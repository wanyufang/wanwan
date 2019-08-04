// const express = require('express');
// const app = express();
// app.listen(8080,'127.0.0.1',()=>{
//     console.log('http://127.0.0.1:8080');
// });

// // 先处理静态资源
// app.use('/assets',express.static('assets'));
// app.use('/views',express.static('views'));

// app.get('/',(req,res)=>{
//     res.send('你好')
// })

// const express = require('express');
// const router = require('./2-router');
// const bodyParser = require('body-parser');
// const app = express();
// app.listen(8080,'127.0.0.1',()=>{
//     console.log('http://127.0.0.1:8080');
// });

// app.use('/assets',express.static('assets'));
// // app.use('./views',express.static('views'));

// // 设置模板引擎
// app.set('view engine', 'ejs');

// // 注册body-parser中间件
// app.use(bodyParser.urlencoded({ extended: false }));

// // router使用
// app.use(router);

// app.get('/',(req,res)=>{
//     res.send('你好');
// })

const express = require('express');
const app = express();
const router = require('./2-router');
const bodyParser = require('body-parser');
app.listen(8080,'127.0.0.1',()=>{
    console.log('http://127.0.0.1:8080');
});

app.use('/assets',express.static('assets'));

app.set('view engine','ejs');

// 注册body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));

app.use(router);
