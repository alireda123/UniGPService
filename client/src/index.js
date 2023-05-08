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
import ReceptionistAppointments from './PagesByRoles/Receptionist/Appointments';

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
