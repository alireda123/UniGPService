import { Button, Page, Link, InputField, H1, H2, SectionBreak, LeadParagraph ,BackLink,Table} from "govuk-react";
import { useState } from "react";
import axios from "axios"
import "./homepage.css";

function DoctorMedRec() {

  return (
    <div className="appointments">
      <Page beforeChildren={<BackLink href="/doctor">Back</BackLink>}>

        <H1>View Patient Records</H1>
        <hr className="govuk-section-break govuk-section-break--visible"></hr>
        <LeadParagraph>Search for a patient to be able to add a medical record</LeadParagraph>

      </Page>

    </div>
  );
}

export default DoctorMedRec;