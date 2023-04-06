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
  res.status().send()
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

// BEGIN;

// -- Table: Appointments
// CREATE TABLE Appointments (appointmentID text PRIMARY KEY, appointmentTime text, PatientID text, appointmentDate text, appointmentReason text, PrescriptionsGiven text, DoctorID text REFERENCES Doctor (DoctorID), NHSNumber text);

// -- Table: Doctor
// CREATE TABLE Doctor (FirstName text, Surname text, yearsAtSurgery text, staffID text, DOB DATE, postcode text, Full_Address text, DoctorID text PRIMARY KEY, qualifications text);

// -- Table: Patient
// CREATE TABLE Patient (FirstName text, Surname text, staffID text, DOB DATE, postcode text, Full_Address text, DoctorID text PRIMARY KEY, qualifications text);

// -- Table: Receptionist
// CREATE TABLE Receptionist (FirstName text, Surname text, yearsAtSurgery text, staffID text, DOB DATE, address text, postcode text, Full_Address text, ReceptionistID text PRIMARY KEY);

// -- Table: Records
// CREATE TABLE Records (appointmentID text PRIMARY KEY, appointmentTime text, PatientID text, appointmentDate DATE, appointmentReason text, PrescriptionsGiven text, DoctorID text REFERENCES Doctor (DoctorID), NHSNumber text);

// COMMIT;
