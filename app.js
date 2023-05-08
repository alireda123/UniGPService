var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var sqlite3 = require('sqlite3').verbose();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/signin');
var registerRouter = require('./routes/register');

var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(cors({                    //this app.use was taken from https://blog.logrocket.com/the-ultimate-guide-to-enabling-cross-origin-resource-sharing-cors/
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'PUT']
}));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
function createTables(database) {
    database.exec(`
   CREATE TABLE IF NOT EXISTS "Appointments" (
	"appointmentID"	TEXT,
	"appointmentTime"	TEXT,
	"PatientID"	TEXT,
	"appointmentDate"	INTEGER,
	"appointmentReason"	TEXT,
	"PrescriptionGiven"	TEXT,
	"DoctorID"	TEXT,
	"NHSNumber"	TEXT,
	PRIMARY KEY("appointmentID")
);
CREATE TABLE IF NOT EXISTS "Doctor" (
	"FirstName"	TEXT,
	"Surname"	TEXT,
	"yearsAtSurgery"	TEXT,
	"staffID"	TEXT,
	"DOB"	TEXT,
	"postcode"	TEXT,
	"Full_Address"	TEXT,
	"DoctorID"	TEXT,
	"qualifications"	TEXT,
	PRIMARY KEY("DoctorID")
);
CREATE TABLE IF NOT EXISTS "Receptionist" (
	"FirstName"	TEXT,
	"Surname"	TEXT,
	"yearsAtSurgery"	TEXT,
	"staffID"	TEXT,
	"DOB"	TEXT,
	"address"	TEXT,
	"postcode"	TEXT,
	"ReceptionistID"	TEXT,
	PRIMARY KEY("ReceptionistID")
);
CREATE TABLE IF NOT EXISTS "Patient" (
	"FirstName"	TEXT,
	"Surname"	TEXT,
	"Age"	INTEGER,
	"Address"	TEXT,
	"DOB"	TEXT,
	"postcode"	TEXT,
	"Gender"	TEXT,
	"NHSNumber"	TEXT,
  PRIMARY KEY("NHSNumber")
);
CREATE TABLE IF NOT EXISTS Records (
  appointmentID TEXT , 
  NHSNumber TEXT PRIMARY KEY);
  
  CREATE TABLE vaccines (
  NHSNumber TEXT NOT NULL,
  DoseNo int NOT NULL,
  VaccinationDate date NOT NULL,
  VaccineManufacturer text NOT NULL,
  DiseaseTargeted text NOT NULL,
  VaccineType text NOT NULL,
  Product text NOT NULL,
  VaccineBatchNumber text NOT NULL,
  CountryOfVaccination text NOT NULL,
  Authority text NOT NULL,
  Site text NOT NULL,
  TotalSeriesOfDoses int NOT NULL,
  DisplayName text NOT NULL,
  SnomedCode int NOT NULL,
  DateEntered date NOT NULL,
  ProcedureCode int NOT NULL,
  Booster tinyint(1) NOT NULL,
  PRIMARY KEY (NHSNumber,DoseNo),
  CONSTRAINT vaccines_ibfk_1 FOREIGN KEY (NHSNumber) REFERENCES patients (NHSNumber)
)
        `
    );
}

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
if(gpdb !==undefined){
  createTables(gpdb)
}


module.exports = app;
