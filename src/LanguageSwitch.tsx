import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import {useTranslation} from "react-i18next";

export const LanguageSwitch = () => {
  const {i18n} = useTranslation();

  const switchLngToRU = () => { i18n.changeLanguage("ru") };
  const switchLngToEN = () => { i18n.changeLanguage("en") };
  const isActiveRu = i18n.language === "ru" ? "contained" : "text";
  const isActiveEn = i18n.language === "en" ? "contained" : "text";

  return (
    <ButtonGroup>
      <Button color="warning" variant={isActiveRu} onClick={switchLngToRU}>
        RU
      </Button>
      {/* <Grid>|</Grid> */}
      <Button  color="warning" variant={isActiveEn} onClick={switchLngToEN}>
        EN
      </Button>
    </ButtonGroup>
  );
};
