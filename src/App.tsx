import React from "react";

import "./App.css";
import {LoginForm} from "./LoginForm";
import {LanguageSwitch} from "./LanguageSwitch";

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="App">
      <header className="  App-header">
        <LanguageSwitch />
        <h1>HI</h1>
      </header>
      <LoginForm />
    </div>
  );
}

export default App;
