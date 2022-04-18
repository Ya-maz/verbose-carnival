import InputLabel from "@mui/material/InputLabel";
import {styled} from "@mui/material/styles"

export const CSLabel = styled(InputLabel)({
  "&.MuiInputLabel-root": {
    transition: "opacity 500ms ease-in-out",
    opacity: "0"
  },
  "&.Mui-focused": {
    transition: "opacity 500ms ease-in-out",
    opacity: "1",
    color: "#616161"
  },
})
