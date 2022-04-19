import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import {Theme} from "@mui/material/styles";

import {CSTab, CSTabs} from "./CustomTab";
import {CSButton} from "./CustomButton";
import {TabPanelContentPhone} from "./TabPanelContentPnone";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{paddingTop: 1}}>{children}</Box>}
    </div>
  );
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const {t} = useTranslation();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{width: "100%"}}>
      <Box>
        <CSTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs"
          centered
          variant="fullWidth"
        >
          <CSTab label={t("form.tab-phone")} />
          <CSTab label={t("form.tab-ID")} />
        </CSTabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TabPanelContentPhone />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>
  );
}
