import { Button, Page, BackLink, InputField, H1, H2,Link,LeadParagraph,Footer } from "govuk-react";
import { useState } from "react";
import axios from "axios"
import "./homepage.css";

function PatientHome() {

  return (
    <div className="patientHome">
      <Page>

      <H1>Welcome to the GP Homepage</H1>
        <hr class="govuk-section-break govuk-section-break--visible"></hr>
        <LeadParagraph>Select an option</LeadParagraph>

        <H2 className="subHeadings">View Appointments</H2>
        <Link href="/patient/appointments" className="Links">Click here to view your appointments</Link>

        <H2 className="subHeadings">Book Appointments</H2>
        <Link href="/Patient/BookAppointments" className="Links">Click here to book an appointments</Link>

        <H2 className="subHeadings">Update GP Records</H2>
        <Link href="/Patient/UpdateRecords" className="Links">Click here to update your GP records</Link>

        <H2 className="subHeadings">View medical records</H2>
        <Link href="/Patient/ViewRecords" className="Links">Click here to view to medical records</Link>

      </Page>
      <Footer>
      </Footer> 
    </div>
  );
}

export default PatientHome;