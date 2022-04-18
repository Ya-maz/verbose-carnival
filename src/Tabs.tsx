import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useTranslation} from "react-i18next";

import {CSTab, CSTabs} from "./CustomTab";
import {TabPanelPhone} from "./TabPanelPnone";

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
      {value === index && (
        <Box sx={{py: 3}}>
          { children}
        </Box>
      )}
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
        <TabPanelPhone />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>
  );
}
