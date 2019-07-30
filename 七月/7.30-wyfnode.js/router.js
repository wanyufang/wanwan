

// 引入 controller
const controller = require('./controller');

// 引入express
const express = require('express');

// 调用一个方法 创建一个路由对象
const router = express.Router();

// 导入数据
router.get('/index', (req, res) => {
    // res.render('zzz',{name:'狗蛋',age:'12',gender:'男'})
    controller.getIndex(req,res);

});

// 使用router对象 代替app来实现所有的请求监听
router.get('/deleteHeroById',(req,res)=>{
    // 找一个controller做删除操作
    controller.deleteHeroById(req,res);
})

// 把router对象暴露出去
module.exports = router;