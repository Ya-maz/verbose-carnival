import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import { ThemeProvider} from '@mui/material/styles';

import App from "./App";
import "./index.css";
import './i18n';
import {theme} from "./Theme"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Suspense fallback={<div>Loading...</div>} >
      <App />
      </Suspense>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
