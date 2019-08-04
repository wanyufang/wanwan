// // 引入mysql
// const mysql = require('mysql');
// // 创建一个连接对象
// let connection = mysql.createConnection({
//     host : '127.0.0.1',
//     port : 3306,
//     user : 'root',
//     password : 'root',
//     database : 'ajax35'
// });

// // 连接数据库
// connection.connect();
// let sql = `select * from heros`;
// // 执行sql语句
// connection.query(sql,(err,resule,fields)=>{
//     if(err) console.log(err);
//     console.log(resule);
//     console.log(fields);
// })

// // 引入mysql
// const mysql = require('mysql');
// // 创建一个连接对象
// let connection = mysql.createConnection({
//     host: '127.0.0.1',
//     port: 3306,
//     user: 'root',
//     password: 'root',
//     database: 'ajax35'
// });

// // 连接数据库
// connection.connect();
// let sql = `select * from heros`;
// // 执行sql语句
// connection.query(sql,(err,resule,fields)=>{
//     if(err) console.log((err));
//     console.log(resule);
// })

// 引入mysql
const mysql = require('mysql');
// 创建一个连接对象
let connection = mysql.createConnection({
    host: '127.0.0.1',
    prot: 3306,
    user: 'root',
    password: 'root',
    database: 'ajax35'
});

// 连接数据库
connection.connect();
let sql = `select * from heros`;
// 执行sql语句
connection.query(sql,(err,resule,fields)=>{
    if(err) console.log(err);
    console.log(resule);
})
