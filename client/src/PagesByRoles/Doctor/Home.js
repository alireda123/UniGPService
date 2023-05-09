import {Page, Link, H1, H2,LeadParagraph,Footer} from "govuk-react";
import { useState } from "react";
import axios from "axios"
import "./homepage.css";

function DoctorHome() {

  return (
    <div className="doctorHome">
      <Page>

        <H1>Welcome to the GP Homepage</H1>
        <hr class="govuk-section-break govuk-section-break--visible"></hr>
        <LeadParagraph>Select an option</LeadParagraph>


        <H2 className="subHeadings">View Appointments</H2>
        <Link href="/doctor/appointments" className="Links">Click here to view your appointments</Link>

        <H2 className="subHeadings">View Patient Records</H2>
        <Link href="/doctor/DoctorMedRec" className="Links">Click here to view patient records</Link>

        <H2 className="subHeadings">Add to medical records</H2>
        <Link href="/doctor/AddPatientRecord" className="Links">Click here to add to medical records</Link>

      </Page>
      <Footer>
      </Footer> 
    </div>
  );
}

export default DoctorHome;