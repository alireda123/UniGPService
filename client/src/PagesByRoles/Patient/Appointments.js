import { Button, Page, BackLink, InputField, H1, H2, SectionBreak, Input } from "govuk-react";
import { useState } from "react";
import axios from "axios"
import "../roleCSS.css";

function PatientAppointments() {
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
    <div className="doctorHome">
      <Input>fhjkdshkf</Input>
       
    </div>
  );
}

export default PatientAppointments;