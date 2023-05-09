import { Page,H1, LeadParagraph,BackLink} from "govuk-react";
import { useState } from "react";
import axios from "axios"

function PatientAppointments() {

  return (
    <div className="doctorHome">
      <Page beforeChildren={<BackLink href="/doctor">Back</BackLink>}>

        <H1>View your medical records</H1>
          <hr class="govuk-section-break govuk-section-break--visible"></hr>
          <LeadParagraph>Below is your previous medical history.</LeadParagraph>
          </Page>

    </div>
  );
}

export default PatientAppointments;