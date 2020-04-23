//引入express框架
const express = require('express');

//引入路径处理模块
const path = require('path');
const bodyParser = require('body-parser');
//创建web服务器
const app = express();

//静态资源访问服务器功能
app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
//输出字符串
app.get('/first', (req, res) => {
    res.send('helloajax!');
});
//输出json
app.get('/responseData', (req, res) => {
    res.send({
        "name": "zs"
    });
});
//接收前端数据并响应
app.get('/get', (req, res) => {
    res.send(req.query);
});

app.post('/post', (req, res) => {
    res.send(req.body);
});

app.post('/json', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.get('/error', (req, res) => {
    res.status(400).send('not ok');
});

app.post('/vertifyEmail', (req, res) => {
    if (req.body.email == 'yangpeizhuo@163.com') {
        res.send('该邮箱已经被注册');
    } else {
        res.send('该邮箱可以被使用');
    }
});

app.post('/autoOutput', (req, res) => {

    if (req.body.key == '杨') {
        res.send(['杨铭屌爆了']);
    }
    if (req.body.key == '杨培') {
        res.send(['杨培卓真帅', '杨培卓真可爱']);
    }
    if (req.body.key == '杨培卓') {
        res.send(['杨培卓真帅', '杨培卓真可爱', '杨培卓最棒了']);
    } else {
        res.send([]);
    }
});



//监听端口
app.listen(3000);

//控制台提示输出
console.log('服务器启动成功');