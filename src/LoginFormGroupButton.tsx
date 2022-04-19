import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import {useTranslation} from "react-i18next";

export const LoginFormGroupButton = () => {
  const {t} = useTranslation();
  return (
    <Box sx={{display: "flex", justifyContent: "space-between"}}>
      <Link component="button" underline="always" sx={{color: "common.black"}}>
        <Typography variant="caption"> {t("form.button-demo")}</Typography>
      </Link>
      <Link component="button" underline="always" sx={{color: "common.black"}}>
        <Typography variant="caption">{t("form.button-forgot")}</Typography>
      </Link>
    </Box>
  );
};
