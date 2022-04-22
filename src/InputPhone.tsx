import React from "react";
import {useLayoutEffect} from "react";
import {useTranslation} from "react-i18next";
import {Controller} from "react-hook-form";
import FormHelperText from "@mui/material/FormHelperText";
import InputMask from "react-input-mask";
import {phoneValidation} from "./validate";
import {useCapsLockDetector} from "./hooks/useCapsLockDetector";
import {CSInput} from "./CustomInput";

export const InputPhone = ({control, errors, setError, clearErrors}) => {
  const {ref, isCapsLockActive, setIsCapsLockActive} = useCapsLockDetector();
  const {t} = useTranslation();

  useLayoutEffect(() => {
    if (isCapsLockActive) {
      setError("phone", {type: "manual", message: "Caps Lock is on"});
    }
    if (errors.phone?.type === "manual" && !isCapsLockActive) {
      clearErrors("phone");
    }
  }, [isCapsLockActive, setIsCapsLockActive]);

  return (
    <Controller
      control={control}
      name="phone"
      rules={phoneValidation}
      render={({field: {onChange, value}}) => (
        <>
          <InputMask
            mask="+7\ 999 999 9999"
            alwaysShowMask
            onChange={onChange}
            //ref={ref}
            //fullWidth
            //aria-label="phone"
            //placeholder={t("form.tab-phone-label")}
            //id="csinput-phone"
            //onChange={onChange}
            //value={value}
            //error={!!errors.phone?.message}
          >
            {(inputProps) => (
              <CSInput
                {...inputProps}
                ref={ref}
                fullWidth
                aria-label="phone"
                placeholder={t("form.tab-phone-label")}
                //id="csinput-phone"
                //onChange={onChange}
                //value={value}
                //error={!!errors.phone?.message}
              />
            )}
          </InputMask>
          <FormHelperText error>{errors.phone?.message}</FormHelperText>
        </>
      )}
    />
  );
};
