import { Button, Page, BackLink, InputField, H1, H2, SectionBreak } from "govuk-react";
import { useState } from "react";
import axios from "axios"
import "../roleCSS.css";

function PatientHome() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInPayload = {
    email,
    password
  }

  const sendNHSnumber = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/signin", signInPayload).then(res => {console.log(res.data); console.log(res)})
  }

  return (
    <div className="patientHome">
      <Page beforeChildren={<BackLink href="http://localhost:3001/Register">Back</BackLink>}>
        <H1>Sign In</H1>
        <div className="emailForm">
          <H2>Email</H2>
          <InputField onChange={(e) => setEmail(e.target.value)}></InputField>
          </div>
          <div>
          <H2 onChange={(e) => setPassword(e.target.value)}>Password</H2>
          <InputField></InputField>
        </div>

        <Button className="submitButton">Submit</Button>
      </Page>
    </div>
  );
}

export default PatientHome;
