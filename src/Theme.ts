import * as React from "react";
import {createTheme, Theme} from "@mui/material/styles";
import Button from "@mui/material/Button";

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#FFD600",
      dark: "#EDC700",
      light: "#FFF176",
      contrastText: "#212529",
    },
    secondary: {
      main: "#E0E0E0",
      dark: "#BDBDBD",
      light: "#F5F5F5",
      contrastText: "#212529",
    },
    common: {
      black: "#212529",
      white: "#fff",
    }
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'text' },
          style: {
            textTransform: 'capitalize',
            borderBottom: "2px solid",
            padding: 0,
            lineHeight: 0
          },
        },
      ],
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          borderRadius: 0,
          "&:disabled": {
            backgroundColor: theme.palette.primary.light,
          },
          })
      },
    },
  },
});
