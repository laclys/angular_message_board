const express = require('express');
const static = require('express-static');
const mysql = require('mysql');
let server = express();
server.listen(2333);
server.use(static('www')); 
let db = mysql.createConnection({
    host: '127.0.0.1',
    port:3306,
    user: 'root',
    password: '4210',
    database: 'message_table'
}); 
// connect_test
db.connect(function(e,r){

    if(e){
        console.log(e);
        return;
    }
    console.log(2);
});
server.get('/add', function (req, res) {
    // console.log(req.query);
    let sql = `INSERT INTO msgTable VALUES (0,'${req.query.msg}')`;
    db.query(sql, function (err, data) {
        console.log(data.insertId);
        if (err) {
            res.send({
                "error": 1,
                "message": 'GG'
            });
        } else {
            res.send({
                "error": 0,
                "id": data.insertId
            });
        }
    });
});
server.get('/get', function (req, res) {
    // console.log(1);
    let sql = `SELECT * FROM msgTable`;
    db.query(sql, function (err, data) {
        //  console.log(data);
        if (err) {
            res.send({
                "error": 1,
                "message": 'GG'
            });
        } else {
            // console.log(data);
            res.send({
                "error": 0,
                msg: data
            });
        }
    });
});
server.get('/del', function (req, res) {
    console.log(req.query);
    let sql = `DELETE FROM msgTable WHERE id='${req.query.id}'`;
    db.query(sql, function (err, data) {
        if (err) {
            res.send({
                "error": 1,
                "message": 'GG'
            });
        } else {
            res.send({
                "error": 0
            });
        }
    });
});