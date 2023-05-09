import logo from "./logo.svg";
import "./App.css";
import { Page, BackLink, H1, H2, InputField, Button, Link } from "govuk-react";

function App() {
  return (
    <div className="App">
      <Page >
        <H1>
          Welcome to the GP database.
          </H1>
          <div className="flexbox">
          <div className="signin">
          <Link href="/SignIn"><H2>Sign In</H2></Link>
          </div>
      <div className="login">
          <Link href="/Register"><H2>Register</H2></Link>
      </div>
      </div>
      </Page>
    </div>
  );
}


export default App;
