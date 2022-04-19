import * as React from "react";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";

export const CSButton = styled(Button)(({theme}) => ({
  borderRadius: 0,
  color: "#212529",
  width: "100%",
  height: theme.typography.pxToRem(56),
  marginTop: theme.spacing(0),
  backgroundColor: "#FFD600",


}));
