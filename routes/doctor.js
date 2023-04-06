var express = require('express');
var router = express.Router();
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'h1n1a1y1',
  database: 'GPDatabase'
})





/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('df');
  
});


router.post('/', function(req, res, next) {
  const {Nhsnumber, firstName, secondName, postcode} = req.body
  if(Nhsnumber===""){
    //do query with others
    
  } else{
    //perform query, if query returns null, then res.send(false)
    // connection.connect()
    // connection.query("SELECT *", (err, rows, fields) => {
    //   if (err) throw err
    // })
    // connection.end()
  }
  
});

module.exports = router;