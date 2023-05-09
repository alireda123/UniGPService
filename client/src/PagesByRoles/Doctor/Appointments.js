import { Button, Page, Link, InputField, H1, H2, SectionBreak, LeadParagraph ,BackLink,Table} from "govuk-react";
import { useState } from "react";
import axios from "axios"
import "./homepage.css";

function DoctorAppointments() {

  return (
    <div className="appointments">
      <Page beforeChildren={<BackLink href="/doctor">Back</BackLink>}>

        <H1>View Appointments</H1>
        <hr className="govuk-section-break govuk-section-break--visible"></hr>
        <LeadParagraph>Below are your appointments </LeadParagraph>
        <Table>Date and time</Table>



      </Page>

    </div>
  );
}

export default DoctorAppointments;