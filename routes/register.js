var express = require("express");
var router = express.Router();
var sqlite3 = require("sqlite3").verbose();

// const connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'h1n1a1y1',
//   database: 'vaccinesDB'
// })

let vaccinedb = new sqlite3.Database("vaccines.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("connected to GP database");
});
let gpdb = new sqlite3.Database("tryingout.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("connected to GP database");
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("good");
});

router.post("/", function (req, res, next) {
  const { Nhsnumber, firstName, secondName, postcode } = req.body;
  console.log(req.body);
  console.log(Nhsnumber);
  if (Nhsnumber === "") {
    console.log("jsdoif");
    //do query with others
  } else {
    vaccinedb.all(
      `select * from patients where NHSNumber = ${Nhsnumber}`,
      (err, rows) => {
        if (err) {
          throw err;
        }
        if (rows.length > 0) {
          console.log(typeof Nhsnumber);
          let patientInfo = rows[0];
          gpdb.all(`insert into patient (NHSNumber, FirstName, Surname, DOB, Gender, postcode) values (${patientInfo.NHSNumber}, ${patientInfo.Forename}, ${patientInfo.Surname}, ${patientInfo.PersonDOB}, ${patientInfo.GenderCode}, ${patientInfo.Postcode});`, (err) => {
            if(err){
              console.log(err)
            }
          })
          console.log(patientInfo)
          let vaccineRows;
          // vaccinedb.all(
          //   `select * from vaccines where NHSNumber = ${Nhsnumber}`,
          //   (err, rows) => {
          //     if (err) {
          //       throw err;
          //     }
          //     if (rows.length > 0) {
          //       let x = rows;
           //     console.log(x);
                // x.map((vaccineRecord) => {
                //   gpdb.run(`insert into vaccines values(${vaccineRecord.NHSNumber}, ${vaccineRecord.DoseNo}, ${vaccineRecord.VaccinationDate}, ${vaccineRecord.VaccineManufacturer}, ${vaccineRecord.DiseaseTargeted}, ${vaccineRecord.VaccineType}, ${vaccineRecord.Product}, ${vaccineRecord.VaccineBatchNumber}, ${vaccineRecord.CountryOfVaccination}, ${vaccineRecord.Authority}, ${vaccineRecord.Site}, ${vaccineRecord.TotalSeriesOfDoses}, ${vaccineRecord.DisplayName}, ${vaccineRecord.SnomedCode}, ${vaccineRecord.DateEntered}, ${vaccineRecord.ProcedureCode}, ${vaccineRecord.Booster})`, (err, row) => {
                //       if(err){
                //         throw err;
                //       }
                //     console.log(row)
                //     }
                //   );
                // });
              // } else {
              //   console.log("failed");
              // }
          //   }
          // );

          res.send({ validation: true });
        } else {
          res.send({ validation: false });
        }
      }
    );
  }
});

module.exports = router;
