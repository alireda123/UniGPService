import { Button, Page, BackLink, InputField, H1, H2, SectionBreak } from "govuk-react";
import { useState } from "react";
import "./SignIn.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
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

export default SignIn;
