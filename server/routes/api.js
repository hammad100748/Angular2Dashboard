/**
 * Created by Hammad on 09/05/2017.
 */
const express=require('express');
const router=express.Router();
var mysql=require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: 'dashboard'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting to DB: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

router.get('/',function (req,res) {
  res.send('api works');
});

router.post('/user',function (req,res) {
  var email = req.body.email;
  var password=req.body.password;

  var queryString = 'SELECT * FROM account WHERE email = ? AND password= ?';
  connection.query(queryString, [email,password], function(err, rows, fields) {
    if (err) {
      throw err;
    }
    else{
      for (var i in rows) {
        res.json(rows[i].Name);
      }
    }

  });
});

router.get('/dashboard/chart',function (req,res) {
  var queryString = 'SELECT SERIAL,Current_Day_Energy FROM danfossinverterdata GROUP BY SERIAL';

  connection.query(queryString,function(err, rows, fields) {
    if (err) throw err;
      res.json(rows);

  });
});

module.exports=router;
