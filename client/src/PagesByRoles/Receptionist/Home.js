import {Page, H1, H2, LeadParagraph, Link,Footer} from "govuk-react";
import { useState } from "react";
import axios from "axios"
import "./homepage.css";

function ReceptionistHome() {


  return (
    <div className="receptionistHome">
      <Page>

      <H1>Welcome to the GP Homepage</H1>
        <hr class="govuk-section-break govuk-section-break--visible"></hr>
        <LeadParagraph>Select an option</LeadParagraph>

        <H2 className="subHeadings">View Appointments</H2>
        <Link href="/receptionist/appointments" className="Links">Click here to view appointments of doctors</Link>

        <H2 className="subHeadings">Cancel Appointments</H2>
        <Link href="/receptionist/CancelAppointment" className="Links">Click here to cancel an appointments</Link>


      </Page>
      <Footer>
      </Footer> 
    </div>
  );
}

export default ReceptionistHome;