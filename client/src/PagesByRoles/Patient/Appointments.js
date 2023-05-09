import { Page,H1, LeadParagraph, BackLink} from "govuk-react";
import { useState } from "react";
import axios from "axios"

function PatientAppointments() {

  return (
    <div className="doctorHome">
      <Page beforeChildren={<BackLink href="/Patient">Back</BackLink>}>

        <H1>View your appointments</H1>
          <hr class="govuk-section-break govuk-section-break--visible"></hr>
          <LeadParagraph>Below are your existing booked appointments. You can also cancel an appointment here.</LeadParagraph>
          </Page>
    </div>
  );
}

export default PatientAppointments;