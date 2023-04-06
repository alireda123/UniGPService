import logo from "./logo.svg";
import "./App.css";
import { Page, BackLink, H1, InputField, Button } from "govuk-react";

function App() {
  return (
    <div className="App">
      <Page beforeChildren={<BackLink href="#">Back</BackLink>}>
        <H1>Register</H1>
        <div>
          <h2>NHS Number</h2>
          <InputField></InputField>
        </div>
        <h4>OR</h4>
        <div>
          <h2>Firstname</h2>
          <InputField></InputField>
          <h2>Lastname</h2>
          <InputField></InputField>
          <h2>Postcode</h2>
          <InputField></InputField>
        </div>
        <Button>Submit</Button>
      </Page>
    </div>
  );
}

export default App;
