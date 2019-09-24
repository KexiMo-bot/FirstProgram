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
