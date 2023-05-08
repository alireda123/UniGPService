var express = require('express');
var router = express.Router();
const mysql = require('mysql')
var sqlite3 = require('sqlite3').verbose();


// const connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'h1n1a1y1',
//   database: 'vaccinesDB'
// })

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
  res.send("good")})



router.post('/', function(req, res, next) {
  const {Nhsnumber, firstName, secondName, postcode} = req.body
  console.log(req.body)
  if(Nhsnumber===""){
    console.log("jsdoif")
    //do query with others
    
  } else{
    vaccinedb.all(`select * from patients where NHSNumber = ${Nhsnumber}`, (err,rows)=>{
      if(err){
        throw err;
      } if(rows.length > 0){

        let vaccineRows;
        embed()
        console.log(embed(Nhsnumber))
        
        res.send({validation:true})
      } else{
        res.send({validation:false})
      }
    })
    //perform query, if query returns null, then res.send(false)
    // connection.connect() => connect to vaccine database. if no nhs number, send false to frontend
    // connection.query("SELECT * from patients where nhsnumber === Nhsnumber", (err, rows, fields) => {
    //   if (err) throw err and res.send(false)
    // } else access GP database, insert user data inside and import data from vaccineDB.
  //}
  
    // connection.end()

    
  }
  
});

function embed(Nhsnumber){
    let x;
    vaccinedb.all(`select * from vaccines where NHSNumber = ${Nhsnumber}`, (err,rows)=>{
      if(err){ throw err}  
      if(rows.length > 0){
              x = rows
          }
          else{
            res.send({validation:false})
          }
        });
        return x
}

module.exports = router;
