import "./Register.css";
import { Page, BackLink, H1, InputField, Button, h2, H3 } from "govuk-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [Nhsnumber, setNHSnumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [postcode, setPostCode] = useState("");

  const [userExists, setUserExists] = useState(null)

  const registerPayload = {
    userName, 
    password,
    Nhsnumber,
    firstName,
    secondName,
    postcode,
  }
const nav = useNavigate()
  const sendNHSnumber = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/register", registerPayload).then(res => {if(res.data.validation ===true){nav("/SignIn")}})
  }
  

  return (
    <div className="App">
      <Page>
        <H1>Register</H1>
        <div className="setLoginData">
          <h2>Username</h2>
          <InputField
            onChange={(e) => setUserName(e.target.value)}
          ></InputField>
          <h2>Password</h2>
          <InputField
            onChange={(e) => setPassword(e.target.value)}
          ></InputField>
        </div>
        <hr/>
        <div className="vaccineDBdata">
          <h2>NHS Number</h2>
          <InputField
            onChange={(e) => setNHSnumber(e.target.value)}
          ></InputField>
          
        </div>
        <H3 className="orButton">OR</H3>
        <div>
          <h2>Firstname</h2>
          <InputField
            onChange={(e) => setFirstName(e.target.value)}
          ></InputField>
          <h2>Lastname</h2>
          <InputField
            onChange={(e) => setSecondName(e.target.value)}
          ></InputField>
          <h2>Postcode</h2>
          <InputField
            onChange={(e) => setPostCode(e.target.value)}
          ></InputField>
        </div>
        <Button className="submitButton" onClick={sendNHSnumber}>Submit</Button>
      </Page>
    </div>
  );
}

export default Register;
