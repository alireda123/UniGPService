import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './authpages/Register';
import SignIn from './authpages/SignIn';
import DoctorHome from "./PagesByRoles/Doctor/Home"
import PatientHome from "./PagesByRoles/Patient/Home"
import ReceptionistHome from './PagesByRoles/Receptionist/Home';
import DoctorAppointments from './PagesByRoles/Doctor/Appointments';
import PatientAppointments from './PagesByRoles/Patient/Appointments';
import ReceptionistAppointments from './PagesByRoles/Receptionist/ReceptionistAppointments';
import AddPatientRecord from './PagesByRoles/Doctor/AddPatientRecord';
import DoctorMedRec from './PagesByRoles/Doctor/DoctorMedRec';
import UpdateRecords from './PagesByRoles/Patient/UpdateRecords';
import ViewRecords from './PagesByRoles/Patient/ViewRecords';
import CancelAppointment from './PagesByRoles/Receptionist/CancelAppointment'
import BookAppointments from "./PagesByRoles/Patient/BookAppointments"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
   {
    path: "/Register",
    element: <Register/>,
  },
   {
    path: "/SignIn",
    element: <SignIn/>,
  },
  {
    path: "/doctor",
    element: <DoctorHome/>,
  },
  {
    path: "/receptionist",
    element: <ReceptionistHome/>,
  },
  {
    path: "/patient",
    element: <PatientHome/>,
  },
  {
    path: "/patient/appointments",
    element: <PatientAppointments/>,
  },
  {
    path: "/doctor/appointments",
    element: <DoctorAppointments/>,
  },
  {
    path: "/receptionist/appointments",
    element: <ReceptionistAppointments/>,
  },
  {
    path: "/receptionist/CancelAppointment",
    element: <CancelAppointment/>,
  },
  {
    path:"/Patient/ViewRecords",
    element: <ViewRecords/>,
  },
  {
    path:"/doctor/AddPatientRecord",
    element: <AddPatientRecord/>,
  }, 
  {
    path:"/doctor/DoctorMedRec",
    element: <DoctorMedRec/>,
  },
  {
    path:"/Patient/UpdateRecords",
    element: <UpdateRecords/>,
  },
  {
    path:"/Patient/BookAppointments",
    element: <BookAppointments/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
