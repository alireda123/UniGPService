import { Button, Page, BackLink, InputField, H1, H2, SectionBreak, Input, LeadParagraph } from "govuk-react";
import { useState } from "react";
import axios from "axios"


function ReceptionistAppointments() {


  return (
    <div className="doctorHome">
      <Page beforeChildren={<BackLink href="/Receptionist">Back</BackLink>}>

        <H1>View appointments of doctors</H1>
          <hr class="govuk-section-break govuk-section-break--visible"></hr>
          <LeadParagraph>Below are the appointments for the doctors</LeadParagraph>

      </Page>
    </div>
  );
}

export default ReceptionistAppointments;