import * as React from "react";
import {styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const CSInput = styled(InputBase)(({theme}) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 0,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#616161",
    border: "1px solid #616161",
    fontSize: theme.typography.pxToRem(16),
    padding: "10px 12px",
  },
}));
