import * as React from "react";
import {styled} from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export const CSTab = styled(Tab)(({theme}) => ({
  textTransform: "capitalize",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(16),
  marginRight: theme.spacing(1),
  color: "#212529",
  "&.Mui-selected": {
    color: "#212529",
  }
}));

interface CSTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
  centered?: boolean;
  variant?: "standard" | "scrollable" | "fullWidth";
}

export const CSTabs = styled((props: CSTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{
      children: (<span className="MuiTabs-indicatorSpan"></span>),
      style: {
        height: "2px"
      }
    }}
  />
))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },

  "& .MuiTabs-indicatorSpan": {
    width: "100%",
    backgroundColor: "#FFD600"
  },
});
