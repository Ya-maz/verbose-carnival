import React from "react";
import {useLayoutEffect} from "react";
import {useTranslation} from "react-i18next";
import {Controller} from "react-hook-form";
import FormHelperText from "@mui/material/FormHelperText";

import {passwordValidation} from "./validate";
import {useCapsLockDetector} from "./hooks/useCapsLockDetector";
import {CSInput} from "./CustomInput";

export const InputPassword = ({control, errors, setError, clearErrors}) => {
  const {ref, isCapsLockActive, setIsCapsLockActive} = useCapsLockDetector();
  const {t} = useTranslation();

  useLayoutEffect(() => {
    if (isCapsLockActive) {
      setError("password", {type: "manual", message: "Caps Lock is on"});
    }
    if (errors.password?.type === "manual" && !isCapsLockActive) {
      clearErrors("password");
    }
  }, [isCapsLockActive, setIsCapsLockActive]);

  return (
    <Controller
      control={control}
      name="password"
      rules={passwordValidation}
      render={({field}) => (
        <>
          <CSInput
            ref={ref}
            fullWidth
            label="password"
            type="password"
            aria-label="password"
            placeholder={t("form.input-password")}
            id="csinput-password"
            onChange={field.onChange}
            value={field.value}
            error={!!errors.password?.message}
          />

          <FormHelperText error>{errors.password?.message}</FormHelperText>
        </>
      )}
    />
  );
};
