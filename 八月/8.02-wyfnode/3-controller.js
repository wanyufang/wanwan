// const model = require('./4-model');

// const controller = {
//     getIndex, getEdit,getHeroById,editHeroById
// }


// function getIndex(req, res) {
//     model.getAllHero((arr) => {
//         res.render('index', { arr });
//     })
// }

// function getEdit(req, res) {
//     res.render('edit');
// }

// function getHeroById(req, res) {
//     let id = req.query.id;
//     model.getHeroById(id, target => {
//         let response = {};
//         if (target) {
//             response.code = 200;
//             response.msg = '获取成功';
//             response.data = target;
//         } else {
//             response.code = 503;
//             response.msg = '请确认id是否正确'
//         }
//         res.send(response);
//     })
// }

// // 修改英雄
// function editHeroById(req, res) {
//     // 获取数据
//     let data = req.body;
//     // 把数据读取出来
//     model.getAllHero(arr => {
//         // 遍历数组,把id对比,如果id一致,就把数据更改
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i].id == data.id) {
//                 arr[i] = data;
//                 break;
//             }
//         }
//         model.writeFile(arr);
//         res.send({code:200,msg:'成功'});
//     })
// }

// module.exports = controller;

const model = require('./4-model');
const controller = { getAdd,getIndex, getEdit, getHeroById, editHeroById }

function getIndex(req, res) {
    model.getAllHero((arr) => {
        res.render('index', { arr });
    })
}

function getEdit(req,res) {
    res.render('edit')
}

function getHeroById(req, res) {
    let id = req.query.id;
    model.getHeroById(id, target => {
        let response = {};
        if (target) {
            response.code = 200;
            response.data = target;
            response.msg = '成功'
        } else {
            response.code = 505;
            response.msg = "请确认输入是否正确"
        }
        res.send(response);
    })
}

// 修改英雄
function editHeroById(req, res) {
    // 获取数据
    let data = req.body;
    // 把数据读取出来
    model.getAllHero(arr => {
        // 遍历数组 把id对比 如果id一致 就把数据改了
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id == data.id) {
                arr[i] = data;
                break;
            }
        }
        model.writeFile(arr);
        res.send({ code: 200, msg: '添加成功' });
    })
}

// 请求新增页的方法
function getAdd(req,res){
    // 使用模板引擎直接读取返回页面
    res.render('add')
}

module.exports = controller;