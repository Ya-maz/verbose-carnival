import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

import {BootstrapInput} from "./CustomInput";

export const TabPanelPhone = () => {
  return (
    <FormControl sx={{width: "100%"}} hiddenLabel variant="standard">
      <InputLabel shrink htmlFor="bootstrap-input" aria-label="boot">
        Bootstrap
      </InputLabel>
      <BootstrapInput fullWidth aria-label="boot" id="bootstrap-input" />
    </FormControl>
  );
};
