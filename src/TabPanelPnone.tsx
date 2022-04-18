import React from "react";
import FormControl from "@mui/material/FormControl";

import {CSInput} from "./CustomInput";
import {CSLabel} from "./CustomLabel";

export const TabPanelPhone = () => {
  return (
    <FormControl sx={{width: "100%"}} hiddenLabel variant="standard">
      <CSLabel shrink htmlFor="bootstrap-input" aria-label="boot">
        Bootstrap
      </CSLabel>
      <CSInput fullWidth aria-label="boot" placeholder="Phone number" id="csinput" />
    </FormControl>
  );
};
