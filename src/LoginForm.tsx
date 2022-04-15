import React from "react";
import type {FC} from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {useTranslation} from "react-i18next";
import BasicTabs from "./Tabs";

interface IProps {}
export const LoginForm: FC<IProps> = () => {
  const {t} = useTranslation();
  return (
    <>
      <h1>Hi</h1>
      <Box
        sx={{
          width: 400,
          height: 450,
          backgroundColor: "common.white",
        }}
      >
        <Container fixed>
          <Typography m={3} variant="h4" sx={{textTransform: "capitalize", fontWeight: "900", color: "#212529"}}>
            {t("form.title")}
          </Typography>
          <BasicTabs />
        </Container>
      </Box>
    </>
  );
};
