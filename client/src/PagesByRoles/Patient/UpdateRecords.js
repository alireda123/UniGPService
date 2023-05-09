import { Page,H1, LeadParagraph, BackLink} from "govuk-react";
import { useState } from "react";
import axios from "axios"

function PatientAppointments() {

  return (
    <div className="doctorHome">
      <Page beforeChildren={<BackLink href="/Patient">Back</BackLink>}>

        <H1>Update your GP records</H1>
          <hr className="govuk-section-break govuk-section-break--visible"></hr>
          <LeadParagraph>Below are the records we hold for you in the GP. Please review them and ensure they are up-to-date.</LeadParagraph>
          </Page>
    </div>
  );
}

export default PatientAppointments;