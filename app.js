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

app.post('/Login', (req, res) => {
    res.send(
        {
            name: "高山我梦",
            score: "33",
            ranking: "27153",
            signdays: "3"
        }
    );
});

app.post('/Scoreboard', (req, res) => {
    res.send([
        {
            rank: "1",
            name: "1号选手",
            score: "102435",
        }, {
            rank: "2",
            name: "2号选手",
            score: "102012",
        }, {
            rank: "3",
            name: "3号选手",
            score: "101522",
        }, {
            rank: "4",
            name: "4号选手",
            score: "101013",
        }, {
            rank: "5",
            name: "5号选手",
            score: "100125",
        }, {
            rank: "6",
            name: "6号选手",
            score: "100111",
        }, {
            rank: "7",
            name: "7号选手",
            score: "98415",
        }, {
            rank: "8",
            name: "8号选手",
            score: "98015",
        }, {
            rank: "9",
            name: "9号选手",
            score: "97023",
        }, {
            rank: "10",
            name: "10号选手",
            score: "90145",
        }
    ]);
});

//监听端口
app.listen(3000);

//控制台提示输出
console.log('服务器启动成功');