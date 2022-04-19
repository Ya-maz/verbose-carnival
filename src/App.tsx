import React from "react";

import logo from "./logo.svg";
import "./App.css";
import { LoginForm } from "./LoginForm";
import {LanguageSwitch} from "./LanguageSwitch"

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
   
        <LanguageSwitch />
        <h1>HI</h1>
      </header>
      <LoginForm />
    </div>
  );
}

export default App;
