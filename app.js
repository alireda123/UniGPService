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


module.exports = app

const x = new sqlite3.Database("gp.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("connected to GP database");
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
CREATE TABLE vaccines (
    NHSNumber            INTEGER NOT NULL,
    DoseNo               INTEGER NOT NULL,
    VaccinationDate      DATE    NOT NULL,
    VaccineManufacturer  TEXT    NOT NULL,
    DiseaseTargeted      TEXT    NOT NULL,
    VaccineType          TEXT    NOT NULL,
    Product              TEXT    NOT NULL,
    VaccineBatchNumber   TEXT    NOT NULL,
    CountryOfVaccination TEXT    NOT NULL,
    Authority            TEXT    NOT NULL,
    Site                 TEXT    NOT NULL,
    TotalSeriesOfDoses   INTEGER NOT NULL,
    DisplayName          TEXT    NOT NULL,
    SnomedCode           INTEGER NOT NULL,
    DateEntered          DATE    NOT NULL,
    ProcedureCode        INTEGER NOT NULL,
    Booster              BOOLEAN NOT NULL,
    PRIMARY KEY (
        NHSNumber,
        DoseNo
    ),
    FOREIGN KEY (
        NHSNumber
    )
    REFERENCES patients (NHSNumber) 
);

`
    );
}
