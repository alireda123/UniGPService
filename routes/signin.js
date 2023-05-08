var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();

let vaccinedb = new sqlite3.Database('vaccines.db', (err) => {
  if(err){
    console.error(err.message);
  }
  console.log("connected to GP database")
})
let gpdb = new sqlite3.Database('tryingout.db', (err) => {
if(err){
    console.error(err.message);
  }
  console.log("connected to GP database")
  
}) 


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status().send()
});


router.post('/', function(req, res, next) {
  const {email, password} = req.body
  console.log(email, password)
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


