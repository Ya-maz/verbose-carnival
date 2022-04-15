import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useTranslation} from "react-i18next";

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
        <Box sx={{p: 3}}>
          <Typography>{children}</Typography>
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
      <Box sx={{borderBottom: "none", borderColor: "darkolivegreen"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs"
          centered
        >
          <Tab
            sx={{textTransform: "capitalize", color: "#212529", px: 3}}
            label={t("form.tab-phone")}
          />
          <Tab
            sx={{textTransform: "capitalize", color: "#212529", px: 3}}
            label={t("form.tab-ID")}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>
  );
}
