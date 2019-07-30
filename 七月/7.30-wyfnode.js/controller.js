
// 引入model模块 直接使用里面的方法
const model = require('./model');

let controller = {
    // 对象的定义方法的新语法
    getIndex(req,res) {
        model.getAllHero((arr)=>{
            // 把数组放到模板引擎里面渲染
            res.render('index',{arr});
        })
    },
    deleteHeroById(req,res) {
        // 根据id删掉某个元素 先得到id
        let id = req.query.id;
        // 把数组里面的数据对比,如果有一个数据的id和刚才的到的id是一样的,就把它删除
        model.getAllHero((arr)=>{
            for(let i=0;i<arr.length;i++) {
                if(arr[i].id==id) {
                    // 把数据从数组里面删除
                    arr.splice(i,1);
                    // 删除后终止循环
                    break;
                }
            }
            // 删除了数据之后 把数据写入json
            model.writeFile(arr);
            // res.send 不仅仅可以返回字符串 还可以自动把对象转换为json字符串再返回
            res.send({code:200,msg:'成功'});
        })
    }
}

// fs.readFile('./data/heros.json', 'utf-8', (err, data) => {
//     if (err) console.log(err);
//     let arr = JSON.parse(data);
//     // 直接使用express里面提供的渲染模板的方法渲染数据
//     res.render('index', { arr });
// })

module.exports = controller;