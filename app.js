const express=require('express');
const app=express();

//接口123
app.get('123',function(req,res)
{res.status(200),
 res.json(questions)
});
app.post('/wdltest',function(req,res){
    console.log(req.stack);
    console.log(req.body);
    console.log(req.url);
    console.log(req.query);
    res.json(req.body)
})
//解决跨域
const cors=require('cors');
app.use(cors());

//配置body-parser
const bodyParser=require('body-parser');//解析参数
app.use(bodyParser.json());//json请求
app.use(bodyParser.urlencoded({extended:true}));//表单请求

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
var questions=[
    {
        data:213,
        num:444,
        age:12
    },
    {
        data:456,
        num:678,
        age:13
    }];

//配置服务端口
const server = app.listen(3000, function () {

   const host = server.address().address;

   const port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})

//mysql连接
const mysql =require('mysql');
const connection =mysql.createConnection({
    host:'locahost',
    user:'node',
    password:'111111',
    multipleStatements:true
});
//查询出所有数据
app.get('/api/getlist', (req, res) => {
    const sqlStr = 'select * from websites '
    conn.query(sqlStr, (err, results) => {
        if (err) return res.json({
            err_code: 1,
            message: '数据不存在',
            affextedRows: 0
        })
        res.json({
            err_code: 200,
            message: results,
            affextedRows: results.affextedRows
        })
    })
});
//查询数据
app.get('/api/getlistdetl', (req, res) => {
    const number = req.query.number
    console.log(req.query)
    const sqlStr = 'select * from websites where alexa=?'
    conn.query(sqlStr, number, (err, results) => {
        if (err) return res.json({
            err_code: 1,
            message: '数据不存在',
            affextedRows: 0
        })
        res.json({
            err_code: 200,
            message: results,
            affextedRows: results.affextedRows
        })
    })
});
//添加

app.post('/api/addcard', (req, res) => {
    const user = req.body
    const sqlStr = 'insert into websites set ?'
    conn.query(sqlStr, user, (err, results) => {
        if (err) return res.json({
            err_code: 1,
            message: err,
            affectedRows: 0
        })
        res.json({
            err_code: 0,
            message: '恭喜成功',
            affectedRows: results.affectedRows
        })
    })

})
