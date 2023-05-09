const e = require('express');
var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();

let vaccinedb = new sqlite3.Database('vaccines.db', (err) => {
  if(err){
    console.error(err.message);
  }
  console.log("connected to GP database")
})
let gpdb = new sqlite3.Database('gp.db', (err) => {
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
  const {userName, password} = req.body
 
  if(userName === "" || password === ""){
    res.send({validation:false})
    
  } else{

 
  
  // result == true or result == false
    const y = gpdb.all(`select * from credentials where username = ${userName}`)
       
        console.log(y)
bcrypt.compare(password, hash, (err, res) => {
  // res == true or res == false
});
          
        res.send({validation:true})
        
      
  }})


module.exports = router;


