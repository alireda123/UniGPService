import { Button, Page, BackLink, InputField, H1, H2, SectionBreak } from "govuk-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import "./SignIn.css";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const signInPayload = {
    username,
    password
  }

  const sendNHSnumber = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/signin", signInPayload).then(res => {
      if(res.data.validation){
       history("/patient")
      }
    })
  }

  return (
    <div className="App">
      <Page beforeChildren={<BackLink href="http://localhost:3001/Register">Back</BackLink>}>
        <H1>Login</H1>
        <div className="emailForm">
          <H2>Username</H2>
          <InputField onChange={(e) => setUsername(e.target.value)}></InputField>
          </div>
          <div>
          <H2 onChange={(e) => setPassword(e.target.value)}>Password</H2>
          <InputField></InputField>
        </div>

        <Button onClick={sendNHSnumber} className="submitButton">Submit</Button>
      </Page>
    </div>
  );
}

export default SignIn;
