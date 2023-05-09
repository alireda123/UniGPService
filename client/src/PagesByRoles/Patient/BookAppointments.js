import { Page,H1, LeadParagraph,BackLink} from "govuk-react";
import { useState } from "react";
import axios from "axios"

function BookAppointments() {

  return (
    <div className="doctorHome">
      <Page beforeChildren={<BackLink href="/Patient">Back</BackLink>}>

        <H1>Book your appointments</H1>
          <hr class="govuk-section-break govuk-section-break--visible"></hr>
          <LeadParagraph>Select an appointment</LeadParagraph>
          </Page>
    </div>
  );
}
export default BookAppointments;
