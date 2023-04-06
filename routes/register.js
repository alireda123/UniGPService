var express = require('express');
var router = express.Router();
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'h1n1a1y1',
  database: 'vaccinesDB'
})





/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status().send()
  
});


router.post('/', function(req, res, next) {
  const {Nhsnumber, firstName, secondName, postcode} = req.body
  if(Nhsnumber===""){
    //do query with others
    
  } else{
    //perform query, if query returns null, then res.send(false)
    // connection.connect() => connect to vaccine database. if no nhs number, send false to frontend
    // connection.query("SELECT * from patients where nhsnumber === Nhsnumber", (err, rows, fields) => {
    //   if (err) throw err and res.send(false)
    // } else access GP database, insert user data inside and import data from vaccineDB.
  //}
  
    // connection.end()

    
  }
  
});

module.exports = router;
