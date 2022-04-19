import React from "react";
import FormControl from "@mui/material/FormControl";

import {CSInput} from "./CustomInput";
import {CSLabel} from "./CustomLabel";
import {useTranslation} from "react-i18next";

export const TabPanelContentPhone = () => {
  const {t} = useTranslation();
  return (
    <>
      <FormControl sx={{width: "100%"}} hiddenLabel variant="standard">
        <CSLabel shrink htmlFor="bootstrap-input" aria-label="phone">
          {t("form.tab-phone-label")}
        </CSLabel>
        <CSInput
          fullWidth
          aria-label="phone"
          placeholder={t("form.tab-phone-label")}
          id="csinput-phone"
        />
      </FormControl>
      <FormControl sx={{width: "100%", mt: "10px"}} hiddenLabel variant="standard">
        <CSLabel shrink htmlFor="bootstrap-input" aria-label="password">
          {t("form.input-password")}
        </CSLabel>
        <CSInput
          fullWidth
          aria-label="password"
          placeholder={t("form.input-password")}
          id="csinput-password"
        />
      </FormControl>
    </>
  );
};
